---
title: "Understanding Gluon if you know Djed: Freedom from Reserve Ratio Constraints"
author: "Zahnentferner"
date: "2025-08-18"
image: "/images/understanding-gluon-reserve-ratios.webp"
excerpt: "A show of how Gluon removes fixed reserve ratio limits, enabling continuous operations with variable cost."
---

# Understanding Gluon if you know Djed: Freedom from Reserve Ratio Constraints

Gluon is the second stablecoin protocol researched and developed by The Stable Order. It comes after Djed, which has been implemented and deployed multiple times: SigmaUSD (on Ergo), Milkomeda Djed, Djed by COTI (on Cardano), Zephyr, and Ethereum Classic Stable Dollar so far. If you know any of these 5 Djed-based stablecoins, you might be asking yourself:

*How is Gluon different from Djed?*

This is the second article in a series addressing this question. Read the [first article](https://news.stability.nexus/understanding-gluon-if-you-know-djed-simultaneous-minting-and-simultaneous-redemption-479105ff6954) before reading this one! And try Gluon at [https://gluon.gold](https://gluon.gold).

An important difference between Djed and Gluon is that, unlike Djed, Gluon does not have any minimum reserve ratio or maximum reserve ratio parameters, below or above which some operations are disabled.

**In Gluon, one can always execute all operations.**

Thanks to this, Gluon avoids those situations in Djed where reservecoins (e.g. SigRSV) cannot be redeemed and stablecoins (e.g. SigUSD) cannot be minted when the reserve ratio is lower than a minimum threshold. Instead of a strict prohibition of some operations outside a reserve ratio range, Gluon just makes moving the reserve ratio progressively more expensive, taking the net volumes in the last 14 days into account.

This greater flexibility, however, has the consequence that the reserve ratio can move more freely in Gluon than in Djed. Whereas in Djed a stablecoin holder can expect the reserve ratio to be quite high, in Gluon this may not always be the case.

Therefore, it is recommended that holders of the stable tokeon (e.g. GAU) pay closer attention to the reserve ratio and consider redeeming if they consider the reserve ratio to be too low.

This is the second in a series of articles about understanding Gluon.

Read the [previous articles](https://news.stability.nexus/). Join the Stability Nexus’s [Discord](https://discord.gg/YzDKeEfWtS) and [Telegram](https://t.me/StabilityNexus), and follow Gluon on X, to be notified of future articles.

Remember to use Gluon Gold on Ergo at [https://gluon.gold](https://gluon.gold).
