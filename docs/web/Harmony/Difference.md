---
title: Harmony 属性和参数的区别
description: 鸿蒙属性和参数的区别
---

# Harmony 属性和参数的区别

::: info 什么是属性

> 标签后以.开头的就是属性

```js
build() {
    Row() {
      Row()
        .width(100) // [!code warning]
        .backgroundColor(Color.Blue) // [!code warning]
        .aspectRatio(1) // [!code warning]
    }
    .height('100%') // [!code warning]
}
```
:::

::: tip 什么是参数

> 以对象形式写在标签里边的就是参数

```js
build() {
    Flex({
      direction: FlexDirection.Row, // [!code error]
      justifyContent: FlexAlign.SpaceAround, // [!code error]
      wrap: FlexWrap.Wrap // [!code error]
    }) {
      Row().width(100).height(100).backgroundColor(Color.Blue)
      Row().width(100).height(100).backgroundColor(Color.Blue)
      Row().width(100).height(100).backgroundColor(Color.Blue)
      Row().width(100).height(100).backgroundColor(Color.Blue)
      Row().width(100).height(100).backgroundColor(Color.Blue)
    }
}
```
:::


