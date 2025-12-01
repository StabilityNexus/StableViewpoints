---
title: "Crypto-Collateralized vs Crypto-Backed Stablecoins, from a Stablecoin Holder’s Perspective"
author: "Zahnentferner"
date: "2024-06-28"
image: "/images/collateralized-vs-backed-stablecoins.webp"
excerpt: "Discover how crypto-collateralized and crypto-backed stablecoins differ—and what it means for holders."
---

# Crypto-Collateralized vs Crypto-Backed Stablecoins, from a Stablecoin Holder’s Perspective

The key to understand the difference between *Crypto-Collateralized* and *Crypto-Backed* stablecoins is to understand the word "collateral".

## On “Collateral”

The word “collateral” is often wrongly used and abused in the blockchain and cryptocurrency space. When used properly, this word refers to assets that are provided as a guarantee for a loan. If you pay back the loan, the collateral is returned to you. If you don’t pay back, the collateral may be taken from you.

This meaning can be seen in the following definitions:

*"Collateral in the financial world is a valuable asset that a borrower pledges as security for a loan."* — [Investopedia](https://www.investopedia.com/terms/c/collateral.asp)

*"Collateral is valuable property owned by someone who wants to borrow money, that they agree will become the property of the company or person who lends the money if the debt is not paid back."* — [Cambridge Dictionary](https://dictionary.cambridge.org/us/dictionary/english/collateral)

*"Collateral: property (such as securities) pledged by a borrower to protect the interests of the lender"* — [Merriam-Webster Dictionary](https://www.merriam-webster.com/dictionary/collateral)

*"Collateral is a borrower’s pledge of specific property to a lender, to secure repayment of a loan."* — [Wikipedia](https://en.wikipedia.org/wiki/Collateral_\(finance\))

In the cryptocurrency space, however, the word “collateral” is often misused to refer to any assets deposited or locked into a smart contract, even if there is no loan involved. Considering that this is not a common word in ordinary life, it feels like slang that people (mis)use indiscriminately to indicate to each other that they are part of the crypto subculture.

Human language is not static. The meanings of words change over time. It may well be that, in the future, the meaning of “collateral” will be broader and will encompass the misinterpretations used in the crypto space nowadays.

The problem with this broader meaning is that it conflates vastly different concepts, such as crypto-collateralized and crypto-backed stablecoins. Both have assets deposited or locked in a smart contract, but they behave quite differently.

So, what are their differences? Let’s start by looking broadly at how they work.

## Crypto-Collateralized Stablecoins

In Crypto-Collateralized Stablecoins, also known as CDP (Collateralized Debt Position) Stablecoins, a user may provide collateral to a vault contract to loan some freshly minted stablecoins. The user is borrowing stablecoins and providing another asset as a guarantee that he/she will pay back this loan. When this user returns the stablecoins to the vault, he/she can get back his/her collateral.

The stablecoin, in this case, is essentially a note that someone — let’s say, Alice — took a loan. Now, interestingly, Alice can transfer or sell this note to somebody else — let’s say, Bob.

A primary use case for crypto-collateralized stablecoins is precisely to sell the loaned stablecoins for more of the underlying asset, thus creating a leveraged long position w.r.t. that asset.

But can Bob return the stablecoins to the vault to get back the collateral? Under normal circumstances, no! It is Alice’s loan and only she has the possibility of closing the loan. Only in the event of a liquidation, if the value of the collateral falls below a threshold, Bob (as well as any other stablecoin holder) is allowed to bid the stablecoins for the collateral that is being liquidated.

## Crypto-Backed Stablecoins

In a Crypto-Backed Stablecoin, there is a reserve backing the stablecoin. Users may buy stablecoins, by depositing a corresponding amount of the backing asset into the reserve. And they may redeem stablecoins to get a corresponding amount of the backing asset back.

The stablecoin, in this case, gives the holder a right to redeem it at any moment for a portion of the reserve. This right is transferable. If Alice mints some stablecoins and then sells them to Bob, Bob willl have the right to redeem them.

A primary use case for this type of stablecoin is to protect against the risk of falls in the price of the underlying asset. If a user believes that the underlying asset’s price will fall, the user can sell the underlying asset for stablecoins, by interacting directly with the contract. The use case of a leveraged long position is also supported, but through the purchase of reservecoins (see: [An Overview of Djed Reservecoins](https://medium.com/djed-alliance/an-overview-of-djed-reservecoins-benefits-risks-and-more-5e12b9dbf410)).

## Conclusion

Although both crypto-backed and crypto-collateralized stablecoins hold an asset in a contract, their mechanisms are vastly, even if subtly, different. Most importantly, from the point of view of a stablecoin holder, crypto-backed stablecoin protocols allow them to redeem their stablecoins at any moment for a portion of the *reserve* directly from the contract, whereas crypto-collateralized stablecoin protocols only allow them to bid the stablecoins for the *collateral* during a liquidation event and they must rely on secondary markets to sell their stablecoins otherwise.