---
title: "The Challenges and Problems of Backing by a Basket of Assets"
author: "Zahnentferner"
date: "2025-06-13"
image: "/images/challenges-of-basket-backing.webp"
excerpt: "Exploring the hidden pitfalls of backing a stablecoin with a basket of assets instead of a single asset."
---

# The Challenges and Problems of Backing by a Basket of Assets

All the stablecoin protocols that The Stable Order designed (notably multiple versions of Djed and Gluon) are backed by a single asset. And this can be seen in their various deployments:

- SigmaUSD: backed only by ERG
- Djed powered by COTI: backed only by ADA
- Djed on Milkomeda: backed only by mADA
- Zephyr: backed only by ZEPH
- Gluon Gold on Ergo (upcoming): backed only by ERG
- Ethereum Classic Stable Dollar (upcoming): backed only by ETC

So, occasionally we are asked:

*Why not back the stablecoin by a basket/portfolio of assets instead of a single asset?*

The main advantage of backing by a basket of assets is straightforward: a diversified portfolio reduces risk. Even if one of the assets in the basket loses value significantly, possibly even becoming completely worthless, the other assets are still there to provide backing.

(Note, however, that the usual high-correlation between crypto-assets reduces the benefits of this advantage. To fully benefit from the risk reduction, the assets in the portfolio should be as uncorrelated as possible.)

The disadvantages, challenges and problems of backing by a basket of assets instead of a single asset are more subtle.

The first one is: who decides the proportion of each asset in the basket?

Note that a naive approach to this question, where we would just allow the proportions to fluctuate freely depending on what users are depositing and withdrawing would be vulnerable to a variation of Gresham's Law:

*Bad money drives out good money.*

For example, in a stablecoin backed by two assets A1 and A2, if people perceive A1 as a better asset to hold than A2, then they could deposit A2 in the reserve to mint stablecoins and then redeem these stablecoins for A1, thus driving the "good" A1 out of the reserve and leaving the stablecoin backed by the "bad" A2.

Therefore, a stablecoin backed by a portfolio needs some form of portfolio management. In principle, this could be done in a centralized way, through decentralized governance or in an algorithmic way. But each of these three ways increases complexity and brings additional challenges or undesirable consequences.

A centralized portfolio management would bring the usual disadvantages of centralization, including the risk that the single entity manages the portfolio for its own benefit instead of doing so for the benefit of the system. Decentralized governance would just mean that decisions are not done by a single entity but by a majority of various entities (or even minority in case of low participation), but the potential conflict of interests remain. In both cases, the stability derived from knowing that the rules and parameters of the system will remain unchanged ("code is law"!) is lost. So, from a philosophical perspective, only algorithmic portfolio management is really suitable.

The challenge with algorithmic portfolio management then is which algorithm to choose. There is a vast academic literature on proper portfolio management, but these algorithms require lots of historical data about the prices of the portfolio's assets. Nowadays, blockchain oracles do not provide all this data. And, even if they did, it would be too expensive to process all that data on chain, in a smart contract. Doing it off-chain would lead us back to centralization or decentralized off-chain governance.

An alternative could be to design algorithms that are not based on proper portfolio management, but they might be "good enough" and feasible to implement as smart contracts.

For example, one option could be to implement mechanisms similar to those used by liquidity pools. In a liquidity pool between assets A1 and A2, it becomes progressively more expensive to swap A2 for A1 as the proportion of A2 in the pool increases. Similarly, we could make it progressively more expensive to mint stablecoins by depositing A2 as the proportion of A2 in the reserve increases. However, the equations used by liquidity pools nowadays are rather ad-hoc.

Independently of the algorithmic portfolio management approach that we choose (whether it is a propoer portfolio management approach when it becomes technically feasible on chain or a liquidity pool inspired approach), it would be more interesting to do it outside the stablecoin protocol, for the sake of simplicity and architectural compositionality.

Let's suppose that we would like to have a stablecoin S backed by two assets A1 and A2. Instead of modifying a single asset backed stablecoin protocol to work as a two-asset backed stablecoin protocol with, let's say, a built-in liquidity-pool-like mechanism to manage the A1 and A2 portfolio, we could do one of the following two options:

1. Create a liquidity pool between A1 and A2 and then make S be backed by the LP token of the liquidity pool.

2. Create a stablecoin S1 backed by A1 and a stablecoin S2 backed by A2; then create a liquidity pool between S1 and S2 and let S be the LP token of this liquidity pool.

With both of these options, one can effectively have a stablecoin backed by multiple assets using just a single asset backed stablecoin protocol.

The second option even has the added benefit of giving users a form of decentralization of choice. Those who would prefer a stablecoin backed only by A1 or only by A2 would have the option of minting only S1 or only S2, even if they are minority.

Considering all the above-mentioned factors, researching stablecoin protocols backed by portfolios/baskets of assets appears to be unnecessary and undesirable. But creating stablecoins that are indirectly backed by multiple assets through a composition of portfolios/pools and single-asset-backed stablecoins would be worthwhile.