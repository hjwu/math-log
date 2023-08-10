---
title: "2007 東華應數 - 博士班 Q5"
hide_table_of_contents: true
---

## Problem

Find $\lim\limits_{n\to\infty}(\frac{1^4+2^4+\cdots+n^4}{n^4}-\frac{n}{5})$.

## Answer

Let $S_k=1^k+2^k+\cdots+n^k$. Since 

$$
\begin{align*}
2^5-1^5 &= 5\times 1^4+10\times 1^3+10\times 1^2+5\times 1+1\\
3^5-2^5 &= 5\times 2^4+10\times 2^3+10\times 2^2+5\times 2+1\\
\cdots &= \cdots\\
(n+1)^5-n^5 &= 5\times n^4+10\times n^3+10\times n^2+5\times n+1
\end{align*}
$$

then $(n+1)^5-1 = 5S_4 + 10S_3 + 10S_2+5S_1+n$, thus 

$$
\begin{align*}
S_4 &= \frac{n^5}{5} + n^4 + 2n^3 + 2n^2 + n - 2\times\frac{n^4+2n^3+n^2}{4} - 2\times\frac{2n^3 + 3n^2 + n}{6} - \frac{n^2+n}{2} - \frac{n}{5}\\
&= \frac{n^5}{5} + \frac{n^4}{2} + \frac{n^3}{3} - \frac{n}{30}
\end{align*}
$$

Hence 

$$
\begin{align*}
&\lim\limits_{n\to\infty}(\frac{1^4+2^4+\cdots+n^4}{n^4}-\frac{n}{5})\\
=&\lim\limits_{n\to\infty}(\frac{n}{5} + \frac{1}{2} + \frac{1}{3n} - \frac{1}{30n^3}-\frac{n}{5})\\
=&\lim\limits_{n\to\infty}(\frac{1}{2} + \frac{1}{3n} - \frac{1}{30n^3})\\
=&\frac{1}{2}
\end{align*}
$$