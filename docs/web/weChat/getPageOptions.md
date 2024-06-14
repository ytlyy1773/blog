---
title: onShow生命周期拿到onLoad生命周期里边的路由传参
description: 微信小程序onShow生命周期拿到onLoad生命周期里边的路由传参
head:
  - - meta
    - name: keywords
      content: onShow 路由参数
---

# onShow生命周期拿到onLoad生命周期里边的路由传参

## 示例

::: info 一、思路
> 通过小程序页面栈，获取传参
```js
onShow() {
    const pages = getCurrentPages()
    const curr = pages[pages.length - 1]
    console.log('c---',curr.options);
}
```
:::

::: info 二、代码截图
<img style="margin: 10px 0" src="http://www.jwblog.cn/images/pc/code/onshow.png" />
:::
