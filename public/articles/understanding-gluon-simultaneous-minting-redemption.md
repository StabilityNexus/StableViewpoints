---
title: "Understanding Gluon if you know Djed: Simultaneous Minting and Simultaneous Redemption"
author: "Zahnentferner"
date: "2024-08-17"
image: "/images/understanding-gluon-if-you-know-djed.webp"
excerpt: "A deep dive into how Gluon’s paired minting and redemption differ from Djed’s model."
---

# Understanding Gluon if you know Djed: Simultaneous Minting and Simultaneous Redemption

Gluon is the second stablecoin protocol researched and developed by The Stable Order.

It comes after the Djed Stablecoin Protocol, which has been implemented and deployed across multiple chains such as:

- [SigmaUSD (on Ergo)](https://sigmausd.io/),
- [Milkomeda Djed](https://milkomeda-c1.djed.one/),
- [Djed by COTI](https://djed.xyz/) (on Cardano),
- [Zephyr](https://zephyrprotocol.com/), and
- [Ethereum Classic Stable Dollar](https://etc.djed.one/).

If you know any of these Djed-based stablecoins, you might be asking yourself:

*How is Gluon different from Djed?*

If that’s what you’re thinking, this article is for you!

Before reading further, we recommend visiting https://gluon.gold to familiarize yourself with Gluon.

This will help you better understand the concepts discussed below. Gluon is currently in its first implementation and is undergoing a soft launch on the Ergo Platform.

Like Djed, Gluon allows you to have two tokens (or "tokeons", in Gluon's terms):

- a stable one and
- a volatile one.

*Note: "tokeon" is a portmanteau of "token" and "nucleon" and is intended to convey the idea that they are just components/particles of the reserve token that Gluon splits.*

In Gluon Gold on Ergo, the stable one is GAU (pegged to 1 gram of gold) and the volatile one is GAUC.

- GAU is analogous to Djed's stablecoin (e.g. SigUSD in the case of SigmaUSD), and
- GAUC is analogous to Djed's reservecoin (e.g. SigRSV in the case of SigmaUSD).
- But there are key differences compared to Djed deployments.

## How Gluon Differs Compared to Other Stablecoins

### Minting and Burning

- In Gluon, tokens are always minted or burned in pairs, maintaining the reserve ratio. This is called ‘fission’ (minting) or ‘fusion’ (burning).
- To mint a single token type, you must first perform fission, then ‘transmute’ the unwanted token to the desired one.

### Fee Structure

One of Gluon’s key advantages lies in its fee structure. Since fission and fusion operations don’t rely on oracles or alter the reserve ratio, they can charge significantly lower fees compared to traditional minting and redemption processes.

For instance, Gluon Gold on Ergo charges just 0.1% for fission, plus a variable developer fee that starts at 0.5% and decreases over time.

*Note: This is notably lower than systems like SigmaUSD, which charges a 2% fee.*

### Transmutation Fee

Transmutation fees in Gluon are more complex and variable. They take into account the total volume of transactions over a 14-day period, with fees ranging from 0.5% to 50.5%.

This range is designed to discourage large-scale shifts in the reserve ratio. If users have been heavily transmuting volatile tokens to stable tokens, for example, the fee for this operation gradually increases, making it progressively more expensive to alter the system’s balance.

Through this approach, Gluon aims to offer users more flexibility and potentially lower costs while maintaining the stability and integrity of the structure.

It’s a delicate balance of encouraging use while discouraging actions that could destabilize the ecosystem.

Join the Stability Nexus’s [Discord](https://discord.gg/YzDKeEfWtS) and [Telegram](https://t.me/StabilityNexus), and follow [Gluon](https://x.com/GluonStable) on X, to be notified of future articles.

Remember to use Gluon Gold on Ergo at https://gluon.gold.