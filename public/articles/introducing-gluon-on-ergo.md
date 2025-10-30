---
title: "Introducing Gluon, the future of stablecoin protocols on Ergo"
author: "Wen-Chiao Su"
date: "2024-05-01"
image: "/images/introducing-gluon-on-ergo.webp"
excerpt: "Gluon brings a physics-inspired, governance-free stablecoin protocol to the Ergo blockchain."
---

# Introducing Gluon, the future of stablecoin protocols on Ergo

Gluon is a new and innovative stablecoin protocol built to harden existing stablecoins on Ergo such as SigmaUSD. Designed by Dr. Bruno Woltzenlogel Paleo, this brand new protocol represents a great leap forward for stablecoin tech on the Ergo blockchain. In this article, we will uncover the technical details and mechanisms that make this a hardy and fool-proof protocol.

## Innovating new models

The genesis of Gluon came about through Bruno, who after researching the lessons learned from Djed and SigmaUSD, explored liquidity pools and took inspiration from nuclear physics to design a stablecoin protocol that is more robust against oracle imperfections.

Bruno, Alexander Chepurnoy (Ergo Founder), Kii, Sangeet, together with the Djed Alliance started working on the implementation of the new stablecoin protocol on Ergo back in 2023, during the [Ergoversary Summit](https://www.youtube.com/watch?v=tnvm1we6xts&list=PL8-KVrs6vXLRxmOmprVdXkHDcO4IaQZOY&index=23&t=803s).

Having understood how current liquidity pools protect liquidity providers from large transactions, Gluon uses a similar (but dual mechanism) to protect users against large transactions that may be exploiting oracle imperfections. The “duality” of liquidity pools originates from the use of one base asset in the reserve, while issuing two new assets (the stablecoin and a volatile coin) which can be swapped for each other.

Whereas former stablecoin protocols would focus on the interplay between ERG and the stablecoin, Gluon’s novel way of thinking creates a new focal point, which is the relationship between the stablecoin and the volatile coin. The two newly created assets exist outside of the reserve.

## A physics-inspired approach

Inspired by a suite of actions and reactions, including fission, fusion, beta decay plus, and beta decay minus, Gluon empowers users with unprecedented flexibility to manage stablecoin and reservecoin assets.

Fission is the mechanism underpinning the duality, allowing ERG tokens to be split into stablecoins and reservecoins. Fusion, on the other hand, combines these two to reverse the process and get back ERG tokens. Lastly, beta decay plus and beta decay minus resemble traditional liquidity pool swaps, allowing one to swap volatile coins for stablecoins, and vice-versa.

The main takeaway from this approach is that, ultimately, the Gluon protocol makes use of the above to benefit from:

- Reversibility: The ability to fuse neutrons and protons back into the original asset (ERG).

- Autonomy: The protocol, once deployed on the blockchain, runs and maintains itself. No third party is required to oversee Gluon, which also implies that this protocol is:

- Zero-governance: The protocol does not need a central authority.

- Immutable: The protocol remains unchanged, which guarantees that bad actors cannot alter the smart contract’s logic to monetarily benefit from it.

- Rent-seeking free: Because the protocol is autonomous and permissionless, no third party can extract fees from its deployment. The protocol thus becomes free, and acts as public infrastructure on the blockchain.

## A user-friendly and transparent approach

At the heart of Gluon lies a transparent pricing framework driven by rigorous reaction equations and price equations. By leveraging the Q function and incorporating beta decay fee formulas, Gluon ensures equitable and transparent pricing for its stablecoin and reservecoin assets, meaning users can verify how fees were reached, and therefore create a sense of trust and security with this model.

Furthermore, Gluon prioritizes user experience through intuitive interfaces that simplify the buying and selling of stablecoins and reservecoins. By streamlining complex transactions into user-friendly operations, Gluon empowers users of all technical know-how levels to participate seamlessly in the stablecoin ecosystem.

## Gluon’s first appearance

After the introduction of this innovative protocol at the Ergoversary Summit, active development began, and a rigorous software development process is underway. With Kii leading backend contract development and Sangeet focusing on the frontend, Gluon awaits its formal debut. Through ongoing collaboration and engagement within the [Djed Alliance](https://docs.djed.one/about-us/the-djed-alliance), [The Stable Order](https://docs.djed.one/about-us/the-stable-order) and the Ergo community, Gluon is set to define the future of stablecoins on Ergo, offering newfound stability and innovation.

As of right now, an open contest to choose a logo for Gluon is underway and a public testnet launch is imminent, both of which you can find out more about in the [Djed Alliance Discord](https://discord.com/invite/xYuTecYRhn).


*Originally published at [https://ergoplatform.org](https://ergoplatform.org/en/blog/Introducing-Gluon-the-future-of-stablecoin-protocols-on-Ergo/).*