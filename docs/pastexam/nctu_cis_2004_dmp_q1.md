---
title: "2004 交大資科 - 離散數學與機率 Q1"
hide_table_of_contents: true
---

## Problem

Let $\mathbb{N}$ be the set of all nature numbers. Let $M$ be the set of all finite subset of $\mathbb{N}$. Is there a one-one, onto mapping from $\mathbb{N}$ to $M$ ? Why or why not ?

## Answer 

Yes. Consider a maping $f:\mathbb{N}\to M$ where 

$$
f(x) = \begin{cases}
   \emptyset &\text{if } x=0\\
   \lbrace a_1, a_2, \cdots, a_n\rbrace &\text{if } 0<x=\sum\limits_{k=1}^{n}2^{a_k}
\end{cases}
$$

It's easy to see that $f$ is bijection.

:::info
值得注意的是有些人可能看到這題會自然想到 [Cantor’s_theorem](https://en.wikipedia.org/wiki/Cantor%27s_theorem) 但是要注意題目問的是 all finite subset
:::