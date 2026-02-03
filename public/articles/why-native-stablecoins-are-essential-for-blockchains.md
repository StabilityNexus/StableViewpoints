---
title: "Why Native Stablecoins Are Essential for Blockchains"
author: "Wen-Chiao Su"
date: "2024-05-07"
image: "/images/why-native-stablecoins-are-essential-for-blockchains.webp"
excerpt: "Explores why native stablecoins matter for blockchain ecosystems, boosting liquidity, stability, and decentralized growth."
---

# Why Native Stablecoins Are Essential for Blockchains

## Native Stablecoins

TL;DR: All stablecoins carry inherent risks, which vary from low to high based on their structural design. The use of bridges while promoting asset interoperability, introduces an additional point of failure. When stablecoins are transferred across chains using bridges, the original assets are locked in the bridge, and derivative tokens are issued on the target chain. However, if the bridge is exploited, holders of the derivative will not be able to recover the original assets. As a result, these derivatives become worthless, since the redemption of the underlying assets requires burning the original/native stablecoin. Having a native stablecoin in each ecosystem is crucial for building long term stability and value.

_[Learn more about the various risk factors that lead stablecoins to depeg.](https://medium.com/djed-alliance/understanding-why-and-how-stablecoins-depeg-f27e3d17357f)_

## What are Native Stablecoins?

Native stablecoins are stablecoins directly issued in a specific blockchain network. The issuers, such as Circle for USDC, Tether for USDT, or smart contracts for [algorithmic stablecoins](https://medium.com/djed-alliance/demystifying-algorithmic-stablecoins-4392e3b42b0e), retain control over the minting and burning of these stablecoins on their respective networks. Holders of native stablecoins have the option to redeem them for the underlying asset they are backed by, such as fiat currency in the case of USDC by Circle or a crypto asset in the case of a crypto-backed stablecoin, by requesting to burn the stablecoin at any time.

_Note: It is not a native stablecoin if it is not issued and redeemable on the current chain._

## The Context

Not all blockchain networks have native stablecoin issuers. To address this gap, developers have designed bridges allowing for asset transfer across chains or the mirroring of assets from one chain to another. This mechanism enables asset interoperability, and enhances accessibility and functionality for users across different ecosystems.

## What Are Bridges?

Bridges serve a crucial role in improving asset interoperability across blockchain networks. The bridging mechanisms enable seamless asset transfers between chains, functioning similarly to escrow services by securing the assets. Typically, this involves locking the asset on the original chain and minting a synthetic derivative on the target chain. However, it’s important to note that if assets aren’t native to the target chain, holders cannot directly redeem them with the issuer. Instead, it’s akin to holding an IOU certificate issued by the bridge, which can be redeemed if the user decides to move the asset back to its native chain.

## What Are Bridged / Wrapped stablecoins?

Bridged or wrapped stablecoins provide a solution to the absence of stablecoins, particularly major ones, on every blockchain network. These assets become accessible across different chains or ecosystems through the creation of bridges.

Unlike native stablecoins, which are directly issued by their respective creators, bridged or wrapped stablecoins are mapped through cross-chain bridges or wrapped on the original chain before being issued on the target chain.

For instance, to include SigmaUSD (the first deployment of a Djed-based stablecoin) from Ergo to a Cardano wallet, one can transfer SigUSD to the [Rosen Bridge](https://rosen.tech/) supporting the asset and receive bridged rsSigUSD in their Cardano wallet.

It’s important to note that if the asset isn’t native to the target chain, holders cannot directly redeem it with the issuer.

## Risks of Bridged / Wrapped Stablecoins

While the introduction of bridged or wrapped stablecoins marks a significant step in DeFi’s cross-chain evolution, its growth by enabling assets to exist beyond their main chains poses certain risks. Cross-chain bridges are vulnerable to exploitation, potentially resulting in substantial losses for users. In 2022 alone, a total of over [$1.4B has been stolen](https://www.cnbc.com/2022/08/10/hackers-have-stolen-1point4-billion-this-year-using-crypto-bridges.html) and [hundreds of millions in 2023](https://cointelegraph.com/news/orbit-bridge-hack-pushes-december-crypto-losses-100m) as a result of breaches from cross-chains bridges.

Here are some examples:

- [Harmony Horizon Bridge $100M exploit](https://www.cnbc.com/2022/06/24/hackers-steal-100-million-in-crypto-from-harmonys-horizon-bridge.html) caused by compromised multi-sigkeys;

- [BNB Bridge $586M exploit](https://www.bitget.com/academy/BNB-chain-586-million-dollar-hack-the-horror-before-halloween) involved hackers forging cryptographic proofs;

- [Wormhole $325M exploit](https://www.theverge.com/2022/2/3/22916111/wormhole-hack-github-error-325-million-theft-ethereum-solana) caused by signature validation bypass;

- [Nomad Bridge $200M exploit](https://www.theverge.com/2022/8/2/23288785/nomad-bridge-200-million-chaotic-hack-smart-contract-cryptocurrency) caused by misconfiguration of smart contract code.

Even without being exploited, bridges can introduce delays that cause arbitrage friction. This may lead to de-peg in secondary markets during periods of high volatility. For instance, if a secondary market on a target chain experiences a stablecoin shortage, and the purchasing and transferring of the stablecoin from the source chain takes too long, the stablecoin may temporarily trade above its peg.

Additionally, these scenarios share risks linked to bridge vulnerabilities, which can prevent users from retrieving or protecting their assets against malicious activities.

## Why Native Stablecoins Are Important For Every Ecosystem

Native stablecoins are essential for every ecosystem for a few reasons:

- **Security:** compared to bridged or wrapped variants from other chains where it’s vulnerable to hacks or exploitation.

- **Flexibility:** users can redeem their stablecoin for their backing or bid them for liquidated collateral at any given time, without friction or bridge delays

- **Value:** Assets that are native are locked in your ecosystem. What is carried over that is locked in a bridge does not truly belong to the network.

While bridged variants facilitate interoperability, it’s crucial for each ecosystem to have its own native stablecoin. This facilitates ecosystem development and stability by utilizing native assets as collateral or reserves, rather than relying on assets outside its ecosystem. Having a native stablecoin is essential for long-term sustainability and growth.

## Djed as a Solution

The Djed Stablecoin Protocol is an autonomous and chain-agnostic framework for creating native stablecoins. Deployed across multiple blockchains, it has been tried and tested for years without any instance of depegging. Utilizing a three-coin system comprising a basecoin, a reservecoin, and a [stablecoin](https://medium.com/djed-alliance/an-overview-of-djed-reservecoins-benefits-risks-and-more-5e12b9dbf410), Djed [ensures stability, decentralization, and capital efficiency](https://medium.com/djed-alliance/addressing-the-stablecoin-trilemma-da3191162a13) of its stablecoin. Notably, it stands as the sole stablecoin protocol formally verified to date, setting a new standard for stability and decentralization on the market.

[Learn how to deploy a Djed-based stablecoin on your blockchain](https://docs.stability.nexus/djed-stablecoin-protocols/create-a-djed-based-stablecoin).

## Conclusion

Native stablecoins are crucial for each blockchain ecosystem as it offers stability and reliability. While bridged or wrapped stablecoins expand accessibility, they pose risks such as bridge exploitation or the draining of smart contracts. Hence, native stablecoins are necessary for ecosystem development, stability, and long-term growth.

## About the Djed Alliance

The [Djed Alliance](https://djed.one/) aims to stabilize the digital economy through the Djed Stablecoin Protocol.

The Djed Stablecoin Protocol is deployed across multiple networks and can be used to create your stablecoin. Join our [growing community](https://discord.gg/ggxP4ttHgN) and together, we will advance the future of the decentralized economy.