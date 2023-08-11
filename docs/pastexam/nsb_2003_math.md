---
title: "2003 國安局三等考數理組 - 初等數論"
---

## 題目

1. 設 $p$ 是質數， $a, b$ 是整數，如果 $\frac{a^p-b^p}{p}$ 是整數，證明 $\frac{a^p-b^p}{p^2}$ 也是整數。
2. 設 x, y, z 是整數。如果 $x^3 + y^3 = z^3$ 證明這三個數中必有一個是 7 的倍數。
3. 證明 $1001!$ 以 $249$ 個零為結尾。
4. 證明對所有整數 $x, y$, $\frac{x^2+y^2-3}{4}$ 不是整數。

## 解答

### Q1

如果 $a=b$，則結束。否則不失一般性，令 $a=b+c>b$，其中 $c$ 為正整數。又已知(易證，略過)

> If $p$ is prime, then ${p \choose k}$ is divisible by $p$ if and only if integer $0<k<p$

可令 ${p \choose k}=pv_k$。所以

$$
\begin{align*}
\frac{a^p-b^p}{p} &= \frac{(b+c)^p-b^p}{p}\\
&= \frac{\sum\limits_{k=1}^{p-1}{ p \choose k}c^{k}b^{p-k} + c^p}{p}\\
&= \frac{\sum\limits_{k=1}^{p-1}pv_kc^{k}b^{p-k} + c^p}{p}\\
&= \sum\limits_{k=1}^{p-1}v_kc^{k}b^{p-k} + \frac{c^p}{p}
\end{align*}
$$

由上可知 $\frac{c^p}{p}$ 也是整數，又 $p\geq 2$ 是質數，所以 $c$ 是 $p$ 的倍數。可令 $c=pv$，所以

$$
\begin{align*}
\frac{a^p-b^p}{p^2} &= \frac{\sum\limits_{k=1}^{p-1}v_kc^{k}b^{p-k}}{p} + \frac{c^p}{p^2}\\
&= \frac{c\sum\limits_{k=1}^{p-1}v_kc^{k-1}b^{p-k}}{p} + \frac{v^pp^p}{p^2}\\
&= v\sum\limits_{k=1}^{p-1}v_kc^{k-1}b^{p-k} + v^pp^{p-2}
\end{align*}
$$

因此 $\frac{a^p-b^p}{p^2}$ 是整數。

### Q2

如果整數 $n$ 不是 $7$ 的倍數，則 $n^3\equiv \pm1 \mod 7$。

假設 $x, y$ 都不是 $7$ 的倍數，則 $x^3 + y^3\equiv \pm2, 0 \mod 7$。

然而 $z^3\equiv \pm1, 0 \mod 7$，所以 $z^3\equiv 0 \mod 7$，即 $z$ 是 $7$ 的倍數 

### Q3

$\lfloor\frac{1001}{5}\rfloor + \lfloor\frac{1001}{25}\rfloor + \lfloor\frac{1001}{125}\rfloor + \lfloor\frac{1001}{625}\rfloor = 200 + 40 + 8 + 1 = 249$

### Q4

已知

> For every integer $n$, then $n^2\equiv 1, 0 \mod 4$.

則 $x^2+y^2-3 \equiv 3, 2, \text{ or } 1 \mod 4$，所以 $\frac{x^2+y^2-3}{4}$ 不是整數。