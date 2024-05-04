---
title: Harmony 实现双飞翼(圣杯)布局
description: 鸿蒙一行代码实现双飞翼布局
---

<c-title title="Harmony 实现双飞翼(圣杯)布局" />
> 一行代码实现双飞翼布局

::: info 借助`layoutWeight`属性
>  `layoutWeight` 效果等效 `flex` 布局里的 `flex： 1`
```js
build() {
  Row() {
    Row()
      .width(100)
      .height(100)
      .backgroundColor(Color.Orange)

    Row()
      .width(100)
      .height(100)
      .backgroundColor(Color.Blue)  // [!code error]
      .layoutWeight(1)

    Row()
      .width(100)
      .height(100)
      .backgroundColor(Color.Red)
  }
  .height('100%')
}
```
:::


