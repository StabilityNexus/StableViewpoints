---
title: "Bug Bounty Program for Gluon on Ergo"
author: "Zahnentferner"
date: "2024-07-2024"
image: "/images/collateralized-vs-backed-stablecoins.webp"
excerpt: "Discover how crypto-collateralized and crypto-backed stablecoins differ—and what it means for holders."
---

# Bug Bounty Program for Gluon on Ergo

We’re launching a Bug Bounty Program for The Stable Order’s implementation of the Gluon Protocol on the Ergo blockchain. Gluon is a new and innovative stablecoin protocol designed by Dr. Bruno Woltzenlogel Paleo (a.k.a. Zahnentferner). Gluon Gold on Ergo (https://gluon.gold) is the first implementation of this protocol in the blockchain space, with the stablecoin pegged to gold. This represents a significant advancement in stablecoin technology on the Ergo blockchain.

The bug bounty program aims to protect users and their funds from potential vulnerabilities in the smart contract. We’ll be rewarding anyone who identifies and reports critical bugs that could enable fund theft.

Program Scope: This bug bounty program only covers critical bugs found in the code repository at https://github.com/DjedAlliance/Gluon-Ergo-Backend-Contracts. Critical bugs are defined as vulnerabilities that could allow an attacker to steal funds. For non-critical bugs, please contact us.

Reporting Process: Please report the critical bug to gluon.alliance@gmail.com. Reach out to us privately on Discord or Telegram. Do not disclose the bug publicly until it is resolved. If possible, please exploit the bug to secure and return any affected user funds. We will work together to resolve the issue quickly.

Reward Structure: We offer a reward in gluons (The Stable Order’s contribution accounting token). The *initial reward amount* is equal in value to the sum of the following:

- A base reward of 50,000 gluons.
- 50% of the funds that could have been stolen from Gluon Gold on Ergo at the moment when it is reported.
- 50% of the funds that were safeguarded by the bug reporter, if they exploited the bug, secured the funds, and returned them to the users.

To encourage bugs to be reported quickly, the reward amount decreases linearly as time passes until a minimum reward amount is reached, according to the following formula:

R(t) = max((1 — t/1000) * R* , R*/10)

Where:

- R* is the initial reward amount.
- t is the number of days between the day in which the bug was reported and 2024–07–10 (10th of July 2024)

Transparency: As part of our bug bounty program, we will publicly disclose every critical bug that has been resolved, along with details about the resolution process. This includes the total payout amount (in gluons) and the average resolution time, while protecting the identities of the bug reporters.

By participating in this program, you’ll be contributing to the security and protection of Gluon Gold on Ergo and its users. We’re excited to collaborate with security researchers who share our dedication to securing blockchain and smart contract systems.

Questions? If you have any questions or concerns, feel free to reach out to us on our Discord server: https://discord.gg/xgUybE4s7G. Thank you for your interest in securing the Gluon Stablecoin Protocol.

*Note: This announcement was written by Cannon_q, Ergo's Sigmanaut and Knight of the Stable Order.*