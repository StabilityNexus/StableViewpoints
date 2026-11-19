---
title: "Randomness for Fairness and Stability"
author: "Zahnentferner"
date: "2026-05-24"
image: "/images/randomness.png"
excerpt: "Why randomness is, counter-intuitively, necessary."
---

# Randomness for Fairness and Stability

Suppose we have to elect, from a group of mutually cooperative people, a single person to represent the group. Suppose that this election occurs every year. Suppose that there are perks in representing the group, and thus group members do want to be elected.

**How should we elect the group representative?**

Perhaps the most obvious answer to this question is to select the person who is _most deserving_. The most deserving person could be, for instance, the one who contributed the most to the group according to an independent evaluation, the one who is most voted by the group, the one who scores the highest in an examination...
The exact measure of deservingness is not important. But let's assume, for the sake of simplicity, that we can assign a deservingness score to every group member.

Despite the obviousness of this answer, if we think more deeply about it, we realize that it is inadequate and that, counter-intuitively, a bit of randomness is surprisingly necessary for fairness.

The easiest way to see this is to imagine a hypothetical corner case of a group of two people who are equally deserving. They are absolutely indistinguishable by all relevant criteria. They both have a score of, let's, 50. In this case, we usually don't see a problem in tossing a coin to decide who to elect. In fact, we have no other choice. Choosing randomly is the only fair approach.

Now imagine a slightly different case where one group member, Alice, has a deservingness score of 50.001 and the other, Bob, has a score of 49.999. Should Alice be deterministically elected because she is the most deserving? What if Alice had a score of 99 and Bob had a score of 1?

If we answer "yes" to any of these questions, we fall into a Sorites paradox trap. What is the threshold for a deterministic selection to become the fair approach?

The presence of uncertainty, arbitrariness, bias and even luck itself in the calculation of the scores brings additional challenges to a deterministic selection approach. For example, if Alice has a score of 55 and Bob has a score of 45, is this really an indication that Alice is more deserving than Bob? Could it be that the scoring system was intentionally or uninentionally biased in favor of Alice? If the score is based on an exam performance, could it be that Alice was simply luckier than Bob, because the exam's tasks happened to be tasks that Alice knew how to solve whereas tasks that Bob was good a simply did not occur in the exam? Randomness has the power of smoothing away imperfections in the scoring. Even if such imperfections might be working against Bob, he would still have a chance of being elected.

The other aspect that makes a deterministic selection unfair is the yearly recurrence of the election. Suppose that Alice has a score of 60 and Bob has a score of 40. Assume that their scores are a perfect representation of their deservingness and that they measure how much they have been contributing to the group. Furthermore, assume that their scores remain constant every year. In this case, a deterministic selection would result in Alice being elected every year. But is this fair, given that she has been making only 60% of the group's contributions? Why should she represent the group 100% of the time?  A random selection weighted by their scores would ensure that, asymptotically, Alice would be elected 60% of the time and Bob 40% of the time.

Another argument for randomness it that it promotes group stability over time. The fact that everyone has a chance of being elected keeps everyone engaged. A deterministic selection may lead those who have no chance of selection to lose interest in the group and may lead those who know that they have already won to engage less, since the result is known. Moreover, a deterministic selection procedure where the winner takes it all may lead the group to become less cooperative and more competitive. In contrast, when every group member knows that any other group member has a chance of being selected encourages mutual support, to ensure that the group is always well represented, independently of the election outcome. In particular, the fact that even minorities may get elected reduces the risk that majorities abuse their power over minorities.

In summary, while randomness may seem unfair and destabilizing at first sight, it actually supports fairness and stability.