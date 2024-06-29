---
title: 微信小程序出现弹窗页面禁止滚动
description: 微信小程序出现弹窗页面禁止滚动
---

# 微信小程序出现弹窗页面禁止滚动

## overflow属性

> 默认值visible

```js
// 原理
弹窗出现的时候动态设置overflow: hidden;
弹窗关闭的时候改回来设置overflow: visible;

// css 当前页面设置
page {
  min-height: 100vh;
}

// html标签的行内样式
<view style="height:100%;overflow: {{ changeVal }};></view>
```

## catchtouchmove属性

在页面最大的容器view中 添加行内样式

```html
<view catchtouchmove="true"></view>
```

catchtouchmove接受一个布尔值，true就是禁止背景滚动，动态设置一个变量控制这个行内样式就可以了

