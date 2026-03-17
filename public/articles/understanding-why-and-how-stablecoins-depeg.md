---
title: "Understanding Why and How Stablecoins Depeg"
author: "Wen-Chiao Su"
date: "2024-04-08"
image: "/images/understanding-why-and-how-stablecoins-depeg.webp"
excerpt: "Explains why stablecoins depeg, the common causes and mechanisms behind depegging, and implications for holders and markets."
---

# Understanding Why and How Stablecoins Depeg

Stablecoins are the dry powder for crypto and DeFi. They are also the bridge to on-ramp and off-ramp to and from digital assets. By design, stablecoins should be stable and accessible. Yet, reality often tells a different story. In fact, stablecoins have [lost their pegs on numerous occasions](https://news.bitcoin.com/over-600-stablecoins-depeg-in-2023-moodys-analytics-launches-monitoring-tool/), often driven by factors outside of the issuer’s control. To understand the levers behind a “de-peg” we’ll need to explore what peg means in the context of a stablecoin.

## The mechanics of depegging

A stablecoin’s price is associated with a reference asset (a.k.a. peg), often a fiat currency, another cryptocurrency, a commodity, or a basket of assets.

_In short, one should be able to swap 1 stablecoin for assets equal in value to 1 unit of the reference asset._

The ability to swap stablecoins for equivalent assets is typically only guaranteed in primary markets. For a fiat-backed USD-pegged stablecoin, this exchange usually happens directly with the issuer, where holders can redeem 1 stablecoin for 1 USD. For a crypto-backed USD-pegged algorithmic stablecoin, redemption occurs through a smart contract, allowing users to exchange 1 stablecoin for 1 USD worth of a cryptocurrency.

## Price fluctuation in secondary markets

However, in secondary markets (such as OTC deals and centralized exchanges), the trading price of a stablecoin is dictated by supply and demand and may diverge from the desired peg. For example, one could trade a USD-pegged stablecoin for Bitcoin valued at $0.50, instead of the expected full $1. This doesn’t necessarily indicate a deviation from the peg — it is a single transaction conducted at below market value in a secondary market.

Given the freedom to transact, it’s unlikely to prevent trades at prices deviating from the peg, as there are various reasons why someone might choose to do so.

Despite fluctuations, stablecoin prices in secondary markets typically align with their intended peg due to arbitrage. When a USD-pegged stablecoin is sold for $0.50 in a secondary market, traders buy it at this lower price, aiming to profit by redeeming it for $1 in the primary market. This buying pressure pushes the stablecoin’s price back towards the peg. However, even though prices often reflect the 1 USD peg, various factors can still disrupt market dynamics, resulting in price anomalies.

## How stablecoins depeg

De-pegging happens when a stablecoin’s price diverges from its target, usually triggered by:

- market volatility,
- diminished trust,
- liquidity constraints,
- technical bugs,
- economic shifts,
- regulatory changes or,
- political instability.

These factors can all destabilize the stablecoin, causing its price to deviate away from the peg in secondary markets.

### Market volatility

Unbacked stablecoins and those collateralized with cryptocurrencies are particularly vulnerable to market volatility. Sharp market movements can affect these stablecoins’ supply and demand, leading to a deviation from the peg.

<figure>
  <img src="/images/USDT depegging to $0.95 shortly after the LUNA UST crisis. Source CoinMarketCap.webp">
  <figcaption>USDT depegging to $0.95 shortly after the LUNA/UST crisis. Source:CoinMarketCap</figcaption>
</figure>

This usually starts when users question the stability or reliability of the issuer. A [prime example](https://www.bloomberg.com/news/articles/2022-05-12/tether-moves-to-reassure-market-after-biggest-stablecoin-slips) involves USDT and Tether, which experienced a depegging event driven by doubts about Tether’s backing by US dollar assets. Concerns about Tether’s stability arose from its opaque practices and unreliable audits. Although the immediate trigger was the UST/LUNA crisis, the underlying market sentiment turned negative as traders debated using USDT as a safe haven for their funds.

### Liquidity issues

<figure>
  <img src="/images/USDR loses its peg on Pearl DEX. Source DEXScreener.webp">
  <figcaption>USDR loses its peg on Pearl DEX. Source: DEXScreener</figcaption>
</figure>

Insufficient liquidity can hinder the ability to trade a stablecoin without affecting its price. This issue is often manifested in wider bid-ask spreads due to limited liquidity, complicating the maintenance of the stablecoin’s intended value. A case in point is the [stablecoin USDR, which saw a 47% drop](https://cointelegraph.com/news/usdr-stablecoin-depeg-liquid-dai-treasury-drain-redemption) to $0.53 following a surge in redemptions from its treasuries.

### Technical problems

<figure>
  <img src="/images/USP depegging to 0.47 after the flash loan attack. Source CoinMarketCap.webp">
  <figcaption>USP depegging to 0.47 after the flash loan attack. Source:CoinMarketCap</figcaption>
</figure>

Vulnerabilities in smart contracts or underlying technology can cause stablecoins, especially algorithmic ones adjusting to supply and demand, to depeg. For instance, Platypus Finance, a stablecoin protocol on the Avalanche network, experienced a 53% plunge to $0.47 due to a [flash loan](https://coinmarketcap.com/academy/article/what-are-flash-loan-attacks) attack. The attacker exploited a logic error in the [USP solvency check mechanism](https://www.coindesk.com/tech/2023/02/17/how-solvency-check-error-led-to-usp-depegging-on-avalanche-based-platypus-finance/), leading to this significant drop.

### Macro influence

<figure>
  <img src="/images/USDC depegging to 0.88 after the news broke. Source CoinMarketCap.webp">
  <figcaption>USDC depegging to 0.88 after the news broke. Source:CoinMarketCap</figcaption>
</figure>

Broader economic factors, such as inflation or changes in interest rates, can indirectly impact stablecoin stability. For instance, USDC faced instability due to macroeconomic influences when it was revealed that [$9.7 billion of its reserves was deposited at Silicon Valley Bank](https://beincrypto.com/usdc-regains-7-depeg-circle-pledges-cover-reserve-shortfalls/). SVB was experiencing a bank run, exacerbated by its aggressive lending practices amid fluctuating interest rates. This led to USDC’s depegging as concerns grew over Circle’s ability to recover the assets.

### Regulatory influence

Changes in regulatory frameworks or legal challenges can introduce uncertainty that affects stablecoin stability, highlighting the complex relationship between digital assets and the regulatory landscape.

<figure>
  <img src="/images/Kaiko Volatility Data.webp">
  <figcaption>Kaiko Volatility Data</figcaption>
</figure>

An intriguing case is [USDT trading above 1 USD](https://www.coindesk.com/markets/2022/02/24/tethers-usdt-stablecoin-well-over-1-on-ukrainian-crypto-exchange/) in regions like Ukraine, propelled by heightened demand following geopolitical upheavals. This scenario demonstrates how external factors can significantly impact stablecoin values. The balance between maintaining peg stability and navigating market fluctuations is crucial for the progression of the digital economy.

## Here’s the so what…

Stablecoins are the cornerstone of our digital economy. They help users maintain a steady value in order to facilitate transactions. Yet, their stability can be compromised by a variety of external factors, leading to deviations from their pegs in secondary markets. Challenges such as market dynamics, liquidity constraints, technical issues, and regulatory shifts pose risks for stablecoins, triggering de-pegging events. Understanding how these might influence the digital economy is essential as we build new applications around it and onboard more users.

## About the Djed Alliance

The [Djed Alliance](https://djed.one/) aims to stabilize the digital economy through the Djed Stablecoin Protocol.

The Djed Stablecoin Protocol is deployed across multiple networks and can be used to create your stablecoin. Join our [growing community](https://discord.gg/ggxP4ttHgN) and together, we will advance the future of the decentralized economy.