---
title: iphone底部安全距离
description: iphone手机底部预览安全距离
---

# iphone底部安全距离

> env() 跟 constant() 需要同时存在，而且顺序不能换

## 代码

::: info 源代码
```css
{
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
}
```
:::

