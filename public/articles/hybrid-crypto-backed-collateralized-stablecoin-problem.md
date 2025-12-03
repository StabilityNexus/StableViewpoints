---
title: "A Problem in Hybrid Crypto Backed and Collateralized Stablecoins"
author: "Zahnentferner"
date: "2025-02-07"
image: "/images/a-problem-in-hybrid-crypto-backed-and-collateralized-stablecoins.webp"
excerpt: "Why hybrid crypto-backed + collateralized stablecoins create flawed incentives."
---

# A Problem in Hybrid Crypto Backed and Collateralized Stablecoins

Stablecoin protocols that can be considered hybrids between crypto-collateralized and crypto-backed are currently trending.

But there is a problem in them.

### What is the difference between crypto-collateralized and crypto-backed stablecoins?

If you don't know the difference between these two types, read our article about the [subtle but important differences between Crypto-Collateralized and Crypto-Backed Stablecoins](https://news.stability.nexus/crypto-collateralized-vs-crypto-backed-stablecoins-16abf230c3bb).

### And what is a hybrid between these two types?

Although there are probably many different ways of combining these two types, the one that is trending nowadays is one where we start with a crypto-collateralized stablecoin and then modify it by allowing users to redeem stablecoins against the collateral, even if the collateral is not being liquidated.

### So, what is the problem?

This approach conflates the notions of collateral and reserve. And while they may seem similar, they are actually quite different. To see this, consider the following:

When you provide collateral to take a loan, you should be paying a borrowing fee for this loan. You are using a service (namely, taking a loan) and you should pay for it.

But, when you provide reserves (and, particularly, a reserve surplus) that backs stablecoins that can be redeemed against these reserves, you should be benefitting from fees paid. You are providing a service (namely, backing a stablecoin) and you should be paid for it.

A naive hybridization makes users provide a service and still have to pay for it. The incentives are misaligned.

### How serious is this problem?
It doesn't affect the stability of the stablecoin. It is just not very nice to users. This problem should be addressable by carefully considering how to reward users who are providing reserves for redemption.

### Where is this going?
In the history of evolution of stablecoin protocols, crypto-collateralized stablecoins were one of the first to occur and gain popularity. Crypto-backed stablecoins came later. The current trend of hybridization may either be seen as an attempt of combining the best of both types or as an attempt to patch issues of the crypto-collateralized kind with the newer ideas from the crypto-backed kind. The future will tell which view will prevail.