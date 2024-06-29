---
title: onShow生命周期拿到onLoad生命周期里边的路由传参
description: 微信小程序onShow生命周期拿到onLoad生命周期里边的路由传参
---

# onShow生命周期拿到onLoad生命周期里边的路由传参

## 实现思路

> 通过小程序页面栈，获取传参

```js
onShow() {
    const pages = getCurrentPages()
    const curr = pages[pages.length - 1]
    console.log('c---',curr.options);
}
```

## 代码截图

![onShow生命周期拿到onLoad生命周期里边的路由传参](http://www.jwblog.cn/images/pc/code/onshow.png)
