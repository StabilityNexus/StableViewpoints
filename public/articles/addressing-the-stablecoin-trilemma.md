---
title: "Addressing the Stablecoin Trilemma"
author: "Wen-Chiao Su"
date: "2024-03-27"
image: "/images/addressing-the-stablecoin-trilemma.webp"
excerpt: "An explanation of the stablecoin trilemma — balancing decentralization, price stability & capital efficiency in design choices."
---

# Addressing the Stablecoin Trilemma

Stablecoins are designed to maintain a steady value serving as a store of value, a unit of account, and a medium of exchange. They also play an important role in converting fiat currencies to and from digital assets. But, despite this shared goal of stability, stablecoins vary significantly in their:

- economic designs,
- collateral and reserve quality,
- stability assumptions, and
- stabilization mechanisms.

In essence: _not all stablecoins are made the same_.

## What is the Stablecoin Trilemma

The stablecoin trilemma is a concept that highlights the difficulty in achieving three key attributes simultaneously. By and large, the prevailing opinion is that stablecoins can have two of these attributes, but only at the expense of the third.

1. Decentralization: Is not controlled by any single entity. No central entity can affect the currency value, such as altering the stablecoin’s supply.

2. Price Stability: Maintains its peg, acting as a reliable store of value, unit of account, and medium of exchange. Stability is affected by how the stablecoin is backed, collateralized, and the mechanisms available for dynamically affecting the supply and demand.

3. Capital Efficiency: Minimizes the collateral or reserve required to mint the stablecoin and keep it in circulation, ensuring that the currency can be produced and utilized efficiently. It measures how much money is required to issue $1 worth of stablecoin.

It’s important to note that the attributes in stablecoins aren’t binary. Instead, how these qualities manifest can vary widely based on the operating environment.

The real question isn’t if a stablecoin fully achieves these attributes, but whether it does so to a sufficient degree.

## Exploring the Types of Stablecoins
![stablecoins as the backbone of our digital economy](/images/stablecoins-as-the-backbone-of-digital-economy.webp)

Stablecoins are the backbone of our digital economy — according to CoinGecko, the current total market cap of stablecoins is valued at $151 billion with daily trading volume amounting close to $80 billion.

Most of these stablecoins can fall under one of 4 categories below:

## Fiat-Backed Stablecoins

![Fiat-Backed Stablecoins](/images/fiat-backed-stablecoins.webp)

Fiat-backed stablecoins mirror the value of fiat currencies, like USDC and USDT, which are the most used stablecoins. Pegged to traditional currencies, they are both stable and capital efficient but fall short on decentralization as they generally rely on a centralized structure with regulated entities. Given the centralized nature, these institutions can be susceptible to censorship, can engage in censorship, and notably, their actions raise concerns regarding transparency. Furthermore, their existence depends on the financial health of their operators.

USDT, by Tether, is a [notable example](https://blockworks.co/news/us-judge-orders-tether-to-prove-what-backs-usdt) as it has been speculated to have large parts of its stablecoin unbacked or partially backed.

## Crypto-Collateralized Stablecoins

![Crypto-Collateralized Stablecoins](/images//Crypto-Collateralized%20Stablecoins.webp)

Crypto-collateralized stablecoins achieve decentralization often at the cost of stability and capital efficiency. These stablecoins are created and issued as loans collateralized by top-performing digital assets (e.g.,ETH), locked in smart contracts. Because the collateral-to-loan ratio needs to be high to absorb price shocks, the excess collateral remains unused until the borrower repays the loan or faces liquidation. This leads to capital inefficiency. Moreover, stablecoin holders can only convert their stablecoins back into collateral during liquidation or when repaying loans, which further compromises their price stability.

The most popular example of this type is undoubtedly DAI by MakerDAO.

## Unbacked Stablecoins

![Unbacked Stablecoins](/images//Unbacked%20Stablecoins.webp)

Unbacked stablecoins attempt to eliminate the need for collateral or reserves through mechanisms that adjust supply based on price fluctuation. If the stablecoin’s price exceeds its target, the algorithm triggers to expand the supply, for instance, by minting new coins. If the price drops below the target, the algorithm encourages supply contraction — either by incentivizing users to burn or lock up their stablecoins — to push the price back up.

While fiat currencies, which also lack physical backing, demonstrate that stability can be achieved without collateral. But, unlike fiat currencies, stablecoins lack the political power to enforce market adoption. As stability is heavily dependent on market adoption, the resulting stability and death spiral can occur when users lose confidence in the incentives given to contract the supply.

UST (and LUNA) on the Terra blockchain exemplifies this type of stablecoin. It collapsed due to a death spiral, causing widespread repercussions across the digital assets industry.

## Crypto-Backed (Decentralized Reserve Protocols)

![Crypto-Backed (Decentralized Reserve Protocols)](/images//Crypto-Backed%20(Decentralized%20Reserve%20Protocols).webp)

This newer model, which is often confused with the _crypto-collateralized_ stablecoins, offers a unique blend of decentralization and stability through backing, and mechanisms such as reserve tokenization which ensure capital efficiency.

This newer approach involves maintaining reserves of assets backing the stablecoins. One key difference between crypto-backed and crypto-collateralized is the ability to redeem stablecoins for a portion of the reserves at any time, without limitations such as repayment of loans or through liquidations. This improves price stability and gives users the confidence that, at any time, they can exchange their stablecoins for the backing asset, whose price is independent of the stablecoin protocol itself. This independence is essential to avoid and fully prevent death spirals.

*The Djed Stablecoin Protocol is an example of a crypto-backed stablecoin protocol.*

Djed also allows users to mint and redeem so-called reservecoins, which represent portions of the reserve surplus. In other words, reservecoins tokenize the reserve surplus and are free to be used in any way. For example, they could be staked or lent. Therefore, in Djed, no portion of the reserve needs to remain idle as inefficient capital. The whole reserve is tokenized as stablecoins and reservecoins, which can be used freely and efficiently.

*[Learn how the Djed Stablecoin Protocol fulfills all three attributes](https://medium.com/djed-alliance/what-is-the-djed-stablecoin-protocol-a4f49328d138)*

## Final Words

Despite the challenges presented by the trilemma, continuous experimentation continues. Finding a stablecoin that embodies decentralization, stability, and capital efficiency can unlock new economic models and greater possibilities for the digital economy.

The stablecoin trilemma underpins the complexities inherent in creating digital currencies which can set the foundation for a new financial paradigm. Yet, in these challenges lie opportunities to innovate and build a more stable digital economy.

## About the Djed Alliance

The [Djed Alliance](https://djed.one/) aims to stabilize the digital economy through the Djed Stablecoin Protocol.

The Djed Stablecoin Protocol is deployed across multiple networks and can be used to create your stablecoin. Join our [growing community](https://discord.gg/ggxP4ttHgN) and together, we will advance the future of the decentralized economy.
