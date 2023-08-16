---
title: 今天想的一題高微
pagination_next: null
pagination_prev: null
---

在 **2004/02/20 00:49:48** 於未來最舊小棧留下的問題，終於解了。

## 題目

Prove 

$$
a_n = 2\sqrt{n} - \sum^n_{k=1}\frac{1}{\sqrt{k}}\to p, 1<p<2
$$

## 解答

$\lbrace a_n\rbrace$ is monotone increasing, because

$$
\begin{align*}
a_{n+1} - a_{n} &= 2\sqrt{n+1} - 2\sqrt{n} - \frac{1}{\sqrt{n+1}}\\
&=\frac{2}{\sqrt{n+1}+\sqrt{n}}- \frac{1}{\sqrt{n+1}}\\
&>\frac{2}{\sqrt{n+1}+\sqrt{n+1}}- \frac{1}{\sqrt{n+1}}=0
\end{align*}
$$

Since $\frac{1}{\sqrt{x}}$ is a [Convex function](https://en.wikipedia.org/wiki/Convex_function) and by [Trapezoidal rule](https://en.wikipedia.org/wiki/Trapezoidal_rule), we have

$$
\sum^n_{k=1}\frac{1}{\sqrt{k}}-\frac{1}{2}+\frac{1}{\sqrt{n+1}}=\frac{1}{2}\sum^n_{k=1}(\frac{1}{\sqrt{k}}+\frac{1}{\sqrt{k+1}})\geq\int^{n+1}_{1}\frac{1}{\sqrt{k}}\mathrm{d}k=2\sqrt{n+1}-2
$$

then

$$
\begin{aligned}
&2\sqrt{n}-2\sqrt{n+1}+2-\frac{1}{2}+\frac{1}{\sqrt{n+1}}\geq2\sqrt{n}-\sum^n_{k=1}\frac{1}{\sqrt
{k}}\\
&\implies\frac{3}{2}-(2\sqrt{n+1} - 2\sqrt{n} - \frac{1}{\sqrt{n+1}})\geq a_n\\
&\implies\frac{3}{2}\geq a_n+a_{n+1}-a_n=a_{n+1}>a_1=1
\end{aligned}
$$

Hence by [Monotone convergence theorem](https://en.wikipedia.org/wiki/Monotone_convergence_theorem), we have 

$$
1 < \lim_{n\to\infty}a_n\leq\frac{3}{2}<2
$$

## 後記

當年的做法跟 [這篇](https://math.stackexchange.com/questions/1087678/let-a-n-2-sqrt-n-sum-k-1n-frac1-sqrtk-show-a-n-converges-and-1) 發文者一樣，只走到 $1 < \lim\limits_{n\to\infty}a_n\leq2$，後來就不了了之。