---
title: "Stablecoin Price Oracles — A Primer"
author: "Wen-Chiao Su"
date: "2024-09-24"
image: "/images/Stablecoin Price Oracles A Primer.webp"
excerpt: "A clear primer on why price oracles are essential for stablecoins, how they work, and their key risks and challenges."
---

# Stablecoin Price Oracles — A Primer

## Introduction

Oracles are external data providers that supply off-chain information to blockchain systems. This allows decentralized applications and smart contracts to interact with real-world data, such as asset prices, weather reports, or real-world events. Oracles are essential for bridging the gap between blockchain’s deterministic world and unpredictable real-world events.

## Why are price oracles critical for stablecoins?

Stablecoins require accurate, real-time data to maintain their peg to a fiat currency or asset. Price oracles provide these real-time asset valuations, ensuring that the stablecoin protocol can make informed decisions about collateral levels or market value. Without reliable price oracles, stablecoins would struggle to maintain their peg, leading to loss of trust in the system.

## How stablecoins use oracles

Different types of stablecoin protocols use oracles in different ways.

For example, when a crypto-collateralized stablecoin protocol uses price oracles, it monitors the price of the collateral asset. When the price of the collateral asset drops and the collateral ratio of a loan drops below a predefined threshold, the protocol enables the liquidation of the loan and the use of its collateral to buy back stablecoins and protect the peg.

Similarly, when a crypto-backed stablecoin protocol (e.g. Djed or Gluon) uses price oracles, it monitors the price of the reserve asset and uses this price to know much of the reserve asset should be given back to users who redeem stablecoins and how much of the reserve asset should be required from users who want to mint stablecoins.

Independently of the type of stablecoin, accurate price feeds are key to ensuring that stablecoin protocols function without de-pegging.

## Types of oracles

Price oracles differ widely in their design, particularly with respect to the following characteristics:

- Price Aggregation: The price may come from a single source or be aggregated from multiple sources.
- Latency: The delay between off-chain price changes and on-chain updates.
- Push (a.k.a. On-Chain): Oracle pushes data directly to the blockchain.
- Pull (a.k.a. Off-Chain): Applications retrieve signed data from off-chain sources.
- Deviation Tolerance: The acceptable difference between on-chain and off-chain prices.
- (De)centralization: The degree to which oracle infrastructure is controlled by a single entity or distributed among multiple parties.

## Risks and challenges of oracles

Price oracles come with inherent risks. The most common is price manipulation, where attackers exploit faulty or inaccurate oracles. For instance, in the [Synthetix sKRW attack](https://cointelegraph.com/news/sophisticated-trading-bot-exploits-synthetix-oracle-funds-recovered) of 2019, a corrupt price feed led to a $37 million loss due to arbitrage exploitation.

Governance risks also exist — if a malicious entity takes control of a protocol’s governance, they can manipulate oracles by feeding incorrect data. A properly decentralized and incentive-aligned governance system is crucial for preventing such attacks.

The long-term viability of oracle systems depends on the sustainability of their off-chain infrastructure. Currently, many oracles, including those considered decentralized, rely on undisclosed subsidies from blockchain foundations to provide public data on-chain. This reliance poses a potential risk to the DeFi ecosystem that depends on these oracles. If these subsidies were to cease, it could disrupt the availability and reliability of crucial data services.

## Decentralization and governance in oracle design

A strong governance model is crucial for maintaining the integrity of oracles. Decentralized governance helps ensure that no single entity can control or manipulate price feeds. Incentive-compatible mechanisms encourage transparent reporting, as participants are rewarded for providing accurate data.

Decentralization of both the oracle itself and its governance system is essential to prevent 51%-style attacks, where an attacker gains control and forces the system to accept false data, possibly de-pegging the stablecoin.

## Conclusion

Stablecoins rely heavily on robust, secure, and decentralized price oracles to function properly. By accurately reflecting real-world values in a timely manner, oracles help stablecoins maintain their peg, while ensuring collateral or reserve levels are sufficient to protect users. However, oracle manipulation, faulty data sources, weak governance and economic sustainability are persistent risks that must be addressed to maintain long-term stability.

## About the Djed Alliance

The [Djed Alliance](https://djed.one/) aims to stabilize the digital economy through the Djed Stablecoin Protocol.

The Djed Stablecoin Protocol is deployed across multiple networks and can be used to create your stablecoin. Join our [growing community](https://discord.gg/ggxP4ttHgN) and together, we will advance the future of the decentralized economy.
