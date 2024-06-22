---
title: Harmony 实现宽高等比
description: 鸿蒙实现宽高等比
---

# Harmony 实现宽高等比
> 一行代码实现宽高等比

::: info 借助`aspectRatio`属性
>  `aspectRatio: number` 指定当前组件的宽高比<br />
>  `aspectRatio = width/height`
```js
build() {
    Row() {
      Row()
        .width(100)
        .backgroundColor(Color.Blue)
        .aspectRatio(1) // [!code error]
      Row()
        .width(100)
        .backgroundColor(Color.Red)
        .aspectRatio(16 / 8) // [!code error]
    }
    .height('100%')
}
```
- `aspectRatio`的值可以是 `1` 宽高等比
- `aspectRatio`的值可以是 `16 / 9` >>> 16 * 9的比例
:::


