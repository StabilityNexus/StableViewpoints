---
title: "A blockchain you can actually read in one sitting"
author: "Siddhant Kaushik"
date: "2026-11-15"
image: "/images/minichain-banner.png"
excerpt: "MiniChain is a complete blockchain in about 2,800 lines of Python: real proof-of-work, real signatures, a Merkle Patricia Trie, libp2p networking and smart contracts written in Python."
---

I have a confession.

I've read the Bitcoin whitepaper more than once. I've watched the "how blockchains work" videos with the spinning cubes. I can explain Merkle trees on a whiteboard.

And yet, for a long time, I couldn't have told you what really happens between "a transaction shows up" and "the state of the world changes."

Not because the information isn't out there. Because it's buried.

Open a production client and you're staring at hundreds of thousands of lines, a dozen abstractions deep, with decades of "we can't change that, it would fork the network" baked into every corner. It's brilliant engineering. It's also a terrible place to learn.

So here's a project that takes the opposite bet.

MiniChain is a complete blockchain in about 2,800 lines of Python. Real proof-of-work. Real signatures. A real Merkle Patricia Trie. Real peer-to-peer networking. Smart contracts you write in Python.

![MiniChain architecture: User (CLI / RPC) to Transaction (signed) to Mempool (waiting txs) to Block (Proof-of-Work) to Chain (most work wins), connected to State (balances + Python contracts), the P2P network and SQLite storage](/images/minichain-architecture.png)

## The idea: minimal, not simplified

Most educational blockchains cheat on the hard parts. They stub out signatures, skip networking, or keep state in a plain dictionary with no way to verify it across nodes. MiniChain doesn't skip the cryptography or the networking—it just strips out the enterprise boilerplate so the actual mechanics aren't buried five files deep.

The MiniChain README puts it in three goals:

- **Education**: code clean enough that you can learn from reading it.
- **Research**: small enough that you can swap out consensus or the contract model without needing a team.
- **Innovation**: a codebase you can fork into your own chain without inheriting someone else's technical debt.

The research pitch comes with a great comparison. MiniSat, a SAT solver in under 600 lines of C++, quietly shaped a whole field because anyone could understand it in an afternoon, modify it, and benchmark against it. MiniChain aims to be that baseline for blockchains.

Let's open the hood.

## Everything starts with a transaction

A transaction in MiniChain is a Python object with a handful of fields: sender, receiver, amount, nonce, gas_limit, fee_per_gas, data, chain_id, and timestamp.

What's interesting is that there is no type field. Whether you're sending coins, deploying a contract, calling a function, or minting a new token, the transaction structure is identical. Instead of an enum, a registry, a factory, and a base class, the chain figures out which one you meant by looking at what's filled in:

```python
@staticmethod
def classify_tx(tx):
    if getattr(tx, "ticker", None):
        return "create_asset"
    if tx.receiver is None or tx.receiver == "":
        return "deploy"
    if tx.data:
        return "call"
    return "transfer"
```

In a massive production client, you'd have six layers of inheritance for this. Here, you read four if statements and immediately know every operation the chain supports.

## Signing

Your address is your public key. Ed25519, via PyNaCl.

You sign the transaction's canonical JSON, and anyone can verify it directly against the sender field. By prioritizing simplicity, MiniChain avoids complex address derivation and checksum rules. The identity is the key.

Two implementation details in transaction.py worth noting:

1. chain_id is inside the signed payload. A valid signature for one chain won't verify on another, so replay protection works out of the box.
2. Once you sign a transaction, it seals. Try to change amount or fee afterward and Python raises an AttributeError. The class overrides `__setattr__` so a signed transaction object can't accidentally drift out of sync with its signature while sitting in memory.

## The mempool: where transactions wait

Before a transaction ends up in a block, it sits in the mempool (mempool.py). Even in about fifty lines of code, it implements a real fee market rather than a naive FIFO queue:

- Highest fee first, oldest first on ties.
- Per-sender nonce ordering. If you send nonce 5 and nonce 6, they stay in that exact sequence no matter what fees you attached. The insertion logic tracks the largest lower-nonce and smallest higher-nonce transaction from the same sender to slot the new transaction into its legal position.
- **Replace-by-fee.** Stuck transaction? Send the same nonce again with a higher fee and the pool swaps it in. The new fee has to beat the old one by at least 10%, so nobody can spam the network with 1-unit bumps.
- A hard cap (1,000 transactions by default), so a transaction flood can't eat up node RAM.

## Mining, and why it's boring (in a good way)

When you strip away ASICs and pool protocols, the core of proof-of-work is just a while loop:

```python
while True:
    header_dict["nonce"] = local_nonce
    block_hash = calculate_hash(header_dict)
    if int(block_hash, 16) < target:
        block.nonce = local_nonce
        block.hash = block_hash
        return block
    local_nonce += 1
```

Hash the header. Is the number smaller than the target? Done. No? Bump the nonce, try again. Everything else in pow.py is practical housekeeping: a max-nonce limit, an optional timeout, a progress callback so you can cancel if a peer finds a block first, and a random starting nonce so two miners don't grind the exact same range.

## Difficulty that adjusts itself

Mining at a fixed difficulty breaks as soon as hashrate changes. If more miners show up, blocks arrive too fast. If they leave, the chain stalls.

MiniChain keeps an exponential moving average (alpha = 0.1) of block times and nudges the target after every block:

```python
new_target = (target * int(avg_block_time)) // self.target_block_time
```

Blocks coming in slow? The average goes up, target increases, and mining gets easier. Blocks arriving too fast? The reverse. One line of proportional control, clamped between a minimum and maximum.

Importantly, every node recomputes the expected target independently during validation. If a block claims a different target than the chain's own math says it should have, peers reject it outright. Miners can't pick their own difficulty.

## Validating a block, the part that makes it a blockchain

If you only read one function in the repo, read `_apply_block` in chain.py.

It's the single pipeline that every block goes through, whether it arrived from a peer, came from your own miner, or is being replayed while rebuilding state during a reorg. In order:

1. Link check. Does previous_hash match? Is the index strictly +1?
2. Hash check. Recompute the header hash yourself rather than trusting the block's field.
3. PoW check. Is the hash actually below the target?
4. Timestamp check. Strictly newer than the parent, and not more than 15 seconds in the future.
5. Target check. Is it the difficulty we computed?
6. Execute every transaction against a scratch copy of the state.
7. Credit the miner with the block reward plus fees.
8. Check the receipt root and the state root. Do our execution results match what the block header claims?

Steps 6 through 8 are where the actual state machine lives. A block doesn't just list transactions; its header commits to the exact state of the world after those transactions ran. Every node re-runs the transactions locally against a copy of the state and checks the resulting root hash. If a block lies about the outcome, validation fails mid-pipeline, the scratch copy is discarded, and your chain remains untouched.

## State: a Merkle Patricia Trie in 24 lines

Accounts live in a dictionary: balances, nonce, contract code, contract storage.

To let two nodes verify they have the exact same dictionary without comparing every entry over the wire, they compare a single hash. mpt.py wraps the trie library's HexaryTrie (the same structure Ethereum uses) and exposes three methods: root_hash, get, and put. After every block, the state is hashed into the trie and the 32-byte root goes into the block header. Change one account balance by one unit and the root hash is completely different.

Two neat implementation details in state.py:

- Multi-asset accounts. Balances are a map of {asset: amount}, with the native coin living under the empty-string key "". Any account can mint a new asset with a CreateAsset transaction, and transfers can move several assets at once.
- A journal for cheap rollback. The StateJournal is a copy-on-read cache over the real state dictionary. Writes land in the cache, and you either commit() or rollback() if a transaction runs out of gas or throws an exception—avoiding a deep copy of the entire chain state before every transaction.

## Forks, reorgs, and cumulative work

![Chains linking around a central block, illustrating competing forks](/images/minichain-chains.png)

Fork choice is often summarized simply as picking the longest chain, but counting blocks alone would let a long branch of low-difficulty blocks win. MiniChain compares cumulative work instead:

```python
return sum((1 << 256) // (block.target or 1) for block in chain_list)
```

A block with a harder target represents more expected hashes, so it counts for more. A chain of a thousand easy blocks will lose to a chain of fifty hard ones.

Two competing chains usually share a long common history and differ only in their last few blocks. That shared part adds the same work to both sides, so MiniChain doesn't count it. It walks backward from the tip of the incoming chain until it reaches a block it already has, and compares work only from there. The cost depends on the length of the fork, not the length of the chain.

When the competing branch has strictly more cumulative work, resolve_conflicts runs a reorg:

1. Do a cheap PoW check on every new block header before spending CPU executing transactions.
2. Restore the state at the fork point from one of the last 10 in-memory state snapshots (older forks rebuild from genesis). The difficulty doesn't need saving: each block already carries its target, and the node records the average block time on the block when it accepts it.
3. Re-validate every block on the new branch through the `_apply_block` pipeline.
4. If anything fails, drop the candidate branch and keep the current chain.
5. Otherwise, replace only the blocks after the fork point with the new branch.

Any transactions that were mined in our dropped blocks but aren't included in the new winning chain are extracted as orphans and returned to the mempool, so your transaction doesn't silently vanish during a reorg.

## Smart contracts, written in Python

Instead of implementing a custom VM and bytecode compiler, MiniChain lets you write smart contracts directly in Python. A contract is a Python file that gets two globals: a persistent storage dict and a msg dict with sender, value, and data. Here's a complete counter contract:

```python
if msg['data'] == 'increment':
    storage['counter'] = storage.get('counter', 0) + 1
elif msg['data'] == 'reset':
    storage['counter'] = 0
else:
    raise Exception("Unknown command")
```

Deploy it, call it, and the state changes on-chain. The examples/ folder goes further with an ERC-20-style stablecoin and a constant-product AMM (x * y = k) DEX, all in plain Python.

### How do you meter gas on Python?

You can't reliably count CPU cycles in an interpreter across machines. Instead, MiniChain hooks into CPython's execution frame using sys.settrace with f_trace_opcodes = True:

```python
def trace_calls(self, frame, event, arg):
    frame.f_trace_opcodes = True
    if event == 'opcode':
        self.gas -= 1
        if self.gas <= 0:
            raise OutOfGasException("Out of gas!")
    return self.trace_calls
```

Every time the Python interpreter is about to execute a bytecode instruction, it decrements self.gas by 1. Run out of gas and it raises OutOfGasException, aborting the call and rolling back the state journal.

### And how do you keep a contract from wrecking the node?

Running untrusted Python on a node requires layered isolation, so contract.py stacks four defenses:

1. AST validation before anything runs. No import statements, and no double-underscore attribute access (blocking the classic `().__class__.__bases__` escape route).
2. A stripped-down `__builtins__`. No open, eval, exec, `__import__`, or print. Just range, len, min, max, abs, sum, and the basic types.
3. A separate process per execution via multiprocessing, killed on timeout.
4. OS resource limits (CPU seconds and memory) applied inside that worker process on Unix.

That's four layers in about 150 lines, and each one closes a specific door a contract runtime has to close: what the code can say, what it can reach, what it can take down, and how much it can use. MiniChain is built to teach, so this is a sandbox you can read end to end, and it has been through a security review. The one honest limit is that the CPU and memory caps only apply on Unix.

Contracts can also call each other (call_contract, depth-capped at 10) and send funds out (transfer_out). Those operations are recorded by the sandbox and applied by the node afterward, so a contract never mutates real chain state directly.

## The network: gossip with a bouncer

Nodes talk over libp2p, the same networking stack behind IPFS and Ethereum's consensus layer. The message vocabulary is tiny: hello, tx, block, chain_request, chain_response, getaddr, and addr.

When a node hears about a transaction or block, it relays it to its peers while keeping a bounded 10,000-entry Least Recently Used (LRU) set of recently seen IDs so the same message doesn't echo around the network forever (and an attacker can't trigger an unbounded memory leak).

To handle bad actors, p2p.py implements misbehavior scoring. Every peer message is graded:

- **Malformed** (garbled or unparseable): the peer is always disconnected, and banned once it reaches 15 strikes.
- **Failed** (a message that doesn't pass checks): dropped silently, and the peer is banned and disconnected at 15 strikes.
- **Invalid** (for example a block with fake proof-of-work): the peer is banned and disconnected immediately, since the default threshold is 1.

Counters decay over time with a default 10-minute half-life (which is configurable), so a flaky connection isn't punished forever. Send a single block with a fake proof-of-work, however, and you're banned immediately.

It also reflects a clean architectural split that runs through the whole repo: consensus rules and local node policy live in two different files.

- network_config.py holds parameters every node must agree on: block reward, max target, protocol ID, and message types. Change one and you fork the chain.
- node_config.py holds settings each operator can tune freely: ban thresholds, mempool size, and cache limits. Change those and nobody else notices.

## Talking to it from the outside

Alongside the P2P node, MiniChain runs a JSON-RPC 2.0 server on port 8545 (the same default as Ethereum, so standard tooling muscle memory transfers):

```bash
curl -X POST http://127.0.0.1:8545/ \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "mc_blockNumber", "id": 1}'
```

You get mc_blockNumber, mc_getBlockByNumber, mc_getBalance, mc_sendTransaction, and mc_getAssetBalance for multi-asset accounts.

Meanwhile, the interactive CLI lets you drive a node by hand:

```text
minichain> mine
minichain> send <receiver_address> <amount> <fee>
minichain> deploy examples/counter.py 0 100
minichain> peers
```

## Try it in five minutes

You can spin up a two-node local network right in your terminal:

```bash
pip install -r requirements.txt

# terminal 1: start a brand new chain
python main.py --port 9000 --datadir ./node1_data

# terminal 2: join it (use the multiaddress node 1 prints on startup)
python main.py --port 9001 --connect /ip4/127.0.0.1/tcp/9000/p2p/<peer_id>
```

Then, in terminal 1, type mine. You'll see it find a nonce, broadcast the block over libp2p, and watch terminal 2 receive it, run `_apply_block`, verify the state root, and append it to its own local chain.

## Why this is a good project to read (and to build on)

Here's how to get the most out of the repo depending on what you're doing:

- If you're learning: read the files bottom-up in this order: transaction.py → block.py → pow.py → state.py → chain.py → contract.py → p2p.py. By the time you hit chain.py, every helper function it calls is one you've already read.
- If you're looking to contribute: there are open project tasks in the GitHub issue tracker. Test coverage is maintained around 80%, and p2p.py has the most room for stronger test coverage, so there's meaningful work in testing a live networking layer. There's also an actual security-reviews/ folder in the repo documenting past findings and the remediations that followed.
- If you're a researcher: want to test a different consensus rule? Replace one function. Want a different gas model? It's one class. Want to see how a fork-choice change behaves under reorgs? There's a test suite with dedicated reorg tests ready to run.

## Closing thought

We tend to learn complicated systems from the outside in, through whiteboard diagrams, analogies, and high-level summaries, because production clients are simply too large to read cover-to-cover.

Some things only really click when you can trace the entire execution path yourself. Being able to follow a transaction from an Ed25519 signature, into the mempool fee queue, through a proof-of-work loop, across `_apply_block` validation, into a Merkle Patricia Trie state root, and over libp2p gossip to a second node, all inside 2,800 lines of readable Python, bridges the gap between knowing how a blockchain works in theory and seeing how the code actually fits together.

MiniChain is an open-source project by Stability Nexus. The code lives at [github.com/StabilityNexus/MiniChain](https://github.com/StabilityNexus/MiniChain).
