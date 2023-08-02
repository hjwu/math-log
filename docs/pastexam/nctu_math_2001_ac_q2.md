---
title: "2001 交大應數 - 高微 Q2"
hide_table_of_contents: true
---

:::info
這題出自 Principles of Mathematical Analysis 裡的第 6 章第 14 題，貼這篇純粹因為這是我少數覺得好寫的交大應數高微考古題。

老實說，我一直覺得交大應數碩班的考古題很機啊！ 😒
:::

## Problem

Let $f(x)=\int_x^{x+1}\sin(e^t)dt.$ Prove $e^x|f(x)|<2$

## Answer

Let $u=e^t$, then

$$
\begin{align*}
f(x) &= \int_{e^x}^{e^{x+1}}\frac{\sin(u)}{u}du\\
&= \bigg(\frac{\cos(e^x)}{e^x}-\frac{\cos(e^{x+1})}{e^{x+1}}\bigg)-\int_{e^x}^{e^{x+1}}\frac{\cos(u)}{u^2}du\\
&\leq \bigg(\frac{\cos(e^x)}{e^x}-\frac{\cos(e^{x+1})}{e^{x+1}}\bigg)+\int_{e^x}^{e^{x+1}}\frac{1}{u^2}du\\
&=\frac{\cos(e^x)}{e^x}-\frac{\cos(e^{x+1})}{e^{x+1}}+\frac{1}{e^x}-\frac{1}{e^{x+1}}
\end{align*}
$$

So 

$$
\begin{align*}
e^x|f(x)|&\leq\bigg|\cos(e^x)-\frac{\cos(e^{x+1})}{e}\bigg|+1-\frac{1}{e}\\
&\leq\bigg|\cos(e^x)\bigg|+\bigg|\frac{\cos(e^{x+1})}{e}\bigg|+1-\frac{1}{e}
\end{align*}
$$

However, it is impossible that $\cos(e^x)=\cos(e^{x+1})=1$ for some $x$. 

Otherwise we may assume $e^x=2n\pi$ and $e^{x+1}=2m\pi$, i.e. $e$ is a rational number $\frac{m}{n}$. Contradiction !

Hence
$$
e^x|f(x)|<1+\frac{1}{e}+1-\frac{1}{e}=2
$$