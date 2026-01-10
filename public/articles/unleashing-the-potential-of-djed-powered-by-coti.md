---
title: "Unleashing the Potential of Djed Powered by COTI"
author: "Zahnentferner"
date: "2025-01-31"
image: "/images/UI of Djed powered by COTI.webp"
excerpt: "An In-depth analysis of Djed powered by COTI, its design, limitations, and opportunities to unlock its full potential within Cardano’s ecosystem."
---

# Unleashing the Potential of Djed Powered by COTI

_This article is part of a series of two articles covering both [Djed powered by COTI](https://djed.xyz/) and Milkomeda [Djed Osiris](https://milkomeda.djed.one/). These two articles have been funded by the Cardano Community through Catalyst. They are part of the deliverables of the [Djed Alliance Ecosystem Boost](https://cardano.ideascale.com/c/idea/112645/) project. The articles are written by Zahnentferner, founder of the Djed Alliance and one of the 5 engineers who were part of original R&D team that led to the Djed Stablecoin Protocols._

As one of the 5 engineers who worked on the R&D of Djed's first implementation (SigmaUSD on Ergo) before I even named the protocol "Djed", as the main author of the two Djed stablecoin papers, and as the founder of the Djed Alliance, I would like all Djed-based or Djed-inspired stablecoins to succeed.

Nothing is ever perfect. Success comes not from "faking until you make it", not from "failing often and failing fast", but from methodically identifying opportunities for improvement and seeking them with perseverance. This is one reason why I founded The Stable Order, an organization that continues to do R&D of stability-related protocols, including new versions of Djed.

In this article, I will discuss some shortcomings of Djed powered by COTI. The intention is not to spread FUD. (This would be against my own interests.) The intention is to pinpoint what is holding back this Djed deployment from further success. I have already done this for SigmaUSD (cf. [this video](https://www.youtube.com/watch?v=yTgapwydOW0&t=225s)) and the Ergo community has taken that into account in different directions (Dexy and Gluon), and it is only fair to do that for other Djed deployments as well. I hope that COTI will make good use of the feedback given here in order to unleash the full potential of its Djed-based stablecoin on Cardano.

                                    ...

But first, what is Djed powered by COTI?

<figure>
  <img src="/images/UI of Djed powered by COTI.webp" alt="Djed-Powered-By-COTI">
  <figcaption>UI of Djed powered by COTI</figcaption>
</figure>

This deployment of Djed relies on an implementation of the Minimal version of Djed in Plutus by Dr. Jean-Frederic Etienne, one of the authors of the Djed papers, who was responsible for the bounded model checking of the stability theorems. For reasons that are, to the best of my knowledge, not publicly known, the implementation had to depart from Djed's original aim of being an autonomous stablecoin. Aspects such as transactions batching, the oracle and contract updates are centrally controlled by a single entity: COTI.

Of the 4 live deployments of Djed today, at the time of writing (~2024–05–17) [Update on 2025–01–31: there are now 5 live deployments], Djed powered by COTI is the largest Djed-based stablecoin by absolute TVL. It is also the top 6 of 15 projects by TVL as tracked by DeFi Llama (and it is almost tied to the projects at the 4th and 5th places). It has 6% of Cardano's total TVL. By such metrics, Djed powered by COTI is definitely a success.

(Note: TVL is an imperfect way of measuring success, but that's a topic for another day.)

Yet, its TVL as a percentage of Cardano's market cap is only ~0.09%, about 20 times lower than SigmaUSD's (1.89%), 15 times lower than Milkomeda Djed Osiris's (1.36%)and 352 times lower than Zephyr's (31.70%), at the time of research. Imagine how good it would be for Cardano if it had a stablecoin with even just 3% of Cardano's market cap in TVL… So, what is holding back Djed powered by COTI from taking that spot?

                                    ...

## Centralization

As mentioned above, COTI controls the oracle, the transaction batcher and the upgrades to the contract. COTI essentially operates the stablecoin. Even though Djed was designed to be 100% autonomous (which literally and etymologically means "self-ruling"), this particular implementation is ruled by, operated by, COTI. The main advantage of an algorithmic (crypto-backed or crypto-collateralized) stablecoin based on smart contracts, in comparison with a fiat-backed stablecoin, is to not have to depend on an operator. And for the sake of this advantage, users are even willing to accept disadvantages such as capital inefficiency or higher minting and redemption fees. But, in the case of Djed powered by COTI, the disadvantages of fiat-backed and crypto-backed stablecoins are combined.

Like in a fiat-backed stablecoin, whose operator could run away with all the reserve, COTI can in principle upgrade the contract and give itself the right to move all the reserve to its own addresses. Like in a fiat-backed stablecoin, whose operator could prevent users from minting and redeeming, COTI could do the same by stopping the operation of the oracle and of the transaction batcher. COTI is also capable of knowing oracle prices in advance and may use this to its advantage. And COTI could even manipulate the oracle price to its advantage.

Even if one trusts COTI not to do the malicious actions described above, there is the possibility of COTI being hacked by malicious actors who would. So, centralization also results in a loss of security. Without a centralized operator, there would be no operator who could get hacked.

## Closed and Unavailable Source Code

The implementation is not open-source (in the sense of being licensed through an open-source license). Worse yet, the source code is not even available for inspection. Therefore, users cannot do their own research to know whether they trust the smart contract that they are planning to interact with. They cannot know whether it is really an implementation of Djed, for instance. They cannot know whether there are discrepancies between the abstract Djed Stablecoin Protocol and this particular deployment. They must believe that the contract does what COTI claims it does. Even if one trusts COTI, it is natural to wonder: what is the point of using smart contracts at all then?

## Transparency

Instead of being transparent about the issues above, COTI either avoids these issues or deliberately claims the opposite of the truth. For example, as shown in the screenshots below, COTI's FAQ claims that Djed powered by COTI is decentralized and open-source.

<figure>
  <img src="/images/COTI falsely claiming that Djed powered by COTI is fully decentralized.webp" 
    alt="COTI falsely claiming that Djed powered by COTI is fully decentralized">
  <figcaption>COTI falsely claiming that Djed powered by COTI is fully decentralized</figcaption>
</figure>

<figure>
  <img src="/images/COTI falsely claiming that Djed powered by COTI is community-driven and allows open-source development.webp"
    alt="COTI falsely claiming that Djed powered by COTI is community-driven and allows open-source development">
  <figcaption>COTI falsely claiming that Djed powered by COTI is community-driven and allows open-source development</figcaption>
</figure>

<figure>
  <img src="/images/COTI again falsely claiming that Djed powered by COTI is open source.webp" 
    alt="COTI again falsely claiming that Djed powered by COTI is open source">
  <figcaption>COTI again falsely claiming that Djed powered by COTI is open source</figcaption>
</figure>

## Technical Misconceptions in the Documentation

COTI's FAQ is full of technical misconceptions and misunderstandings about the Djed Stablecoin Protocol itself. For example, COTI refers to Djed as "an overcollateralized stablecoin and not an algorithmic stablecoin".

<figure>
  <img src="/images/COTI wrongly referring to Djed as over-collateralized and not algorithmic..webp" 
    alt="COTI wrongly referring to Djed as over-collateralized and not algorithmic.">
  <figcaption>COTI wrongly referring to Djed as over-collateralized and not algorithmic.</figcaption>
</figure>

But the title of Djed's paper states that Djed is algorithmic and the "Related Work" section of the paper explains how a crypto-backed stablecoin protocol, like Djed, differs from crypto-collateralized stablecoin protocols.

<figure>
  <img src="/images/Title of Djed's paper, clearly stating that Djed is algorithmic and crypto-backed.webp" 
    alt="Title of Djed's paper, clearly stating that Djed is algorithmic and crypto-backed">
  <figcaption>Title of Djed's paper, clearly stating that Djed is algorithmic and crypto-backed</figcaption>
</figure>

<figure>
  <img src="/images/Related Work section, discussing how crypto-collateralized stablecoins are different from Djed.webp" 
    alt='"Related Work" section, discussing how crypto-collateralized stablecoins are different from Djed'>
  <figcaption>"Related Work" section, discussing how crypto-collateralized stablecoins are different from Djed</figcaption>
</figure>

Learn more:

- [Demystifying Algorithmic Stablecoins](https://medium.com/djed-alliance/demystifying-algorithmic-stablecoins-4392e3b42b0e).
- [Crypto-backed versus Crypto-Collateralized Stablecoins](https://viewpoints.stability.nexus/a/collateralized-vs-backed-stablecoins-holders-perspective/).

## Outdated Djed Version

By the time Djed powered by COTI was launched, based on the Minimal version of the Djed Stablecoin Protocol, SigmaUSD had already been running for more than two years based on the same version. Despite SigmaUSD's success, those two years gave us many ideas for improvements, which led to the Osiris and Shu versions of Djed, to Dexy, to Gluon…

So, whereas the Minimal version of Djed is fine, it is already not the best version available out there and this was already known back when Djed powered by COTI was launched.

## Rent-Seeking Fee and Free-Riding

Another consequence of having an operator for a protocol deployment that was designed to be operator-free is that this operator will have operational expenses that will need to be paid somehow. So, not only users get the disadvantages of centralization, but also have to pay more for these disadvantages.

COTI funds its operations with an "operational fee [that] is a mix of 100 ADA + 25% of delegation rewards". These fees are not part of the original Djed Stablecoin Protocol.

<figure>
  <img src="/images/COTI's Operational Fee.webp" alt="COTI's Operational Fee">
  <figcaption>COTI's Operational Fee</figcaption>
</figure>

A 25% fee on delegation rewards is a lot! If users need to choose between keeping their ADA in their own wallet earning 100% of staking rewards and depositing their ADA in a centrally controlled contract and receiving only 75% of staking rewards, why should they choose the latter? Clearly, this is a barrier for adoption by the Cardano community.

Furthermore, COTI explains that “both [fees] are converted into $COTI in the market and funneled into COTI’s Treasury”.

This means that COTI is consistently dumping ADA and pumping its own token, which is the native currency of a blockchain that is not Cardano. Why should Cardano users embrace a stablecoin that is deliberately and systematically harming the price of ADA? This is a clear case of rent-seeking.

And, given that the Cardano community and The Stable Order do not benefit from these fees, despite their contributions to the Djed Stablecoin Protocol, this can also be considered a case of free-riding.

## Apparent Disregard for Financial Inclusion and Permissionlessness

A key use case for stablecoins is financial inclusion: to give everyone, without the need for permission, access to a stable currency, no matter where they live and how rich or poor they are.

As someone who grew up in the "third world" with high inflation and who now has to deal with the consequences of sanctions, financial inclusion and permissionlessness are key value propositions that attracted me to work full-time in the crypto space and that I continue to regard highly.

COTI's frontend for Djed powered by COTI restricts users from some countries. And, because COTI is the only centralized transaction batcher, such users can't even interact directly with the contract without using COTI's frontend.

Moreover, COTI imposes quite high minimum amounts to mint and redeem stablecoins and reservecoins. This effectively limits access to the contract only to wealthier users. Poorer users must resort to buying and selling stablecoins and reservecoins in secondary markets.

<figure>
  <img src="/images/High minimum amounts for minting and redemption transactions.webp"
    alt="High minimum amounts for minting and redemption transactions">
  <figcaption>High minimum amounts for minting and redemption transactions</figcaption>
</figure>

It pains me to see that a protocol that we designed to be financially inclusive and permissionless has been deployed in ways that are contrary to these ideals. But, beyond ideals, such restrictions also hinder and hold back adoption of Djed powered by COTI on Cardano.

                                    ...

## Conclusions

The good news is that many of the issues described above should be easy to solve. Or, when this is not the case, it should be at least easy to give a clear and convincing explanation to the Cardano community.

Many cardano community members have raised exactly some of these issues in various forums and they remain unanswered by COTI. The Cardano community has now funded a Catalyst project where one of the deliverables is this article. Hopefully this article, written by an influential Djed contributor funded by the Cardano community, will lead COTI to listen and trigger improvements in Djed powered by COTI and bring even more success and adoption for Djed powered by COTI. Such improvements would also be beneficial for the reputation of the Djed Stablecoin Protocol as a whole and for Djed-based stablecoins that are part of the Djed Alliance.
