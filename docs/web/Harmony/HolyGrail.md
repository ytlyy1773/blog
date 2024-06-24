---
title: Harmony 实现双飞翼(圣杯)布局
description: 鸿蒙一行代码实现双飞翼布局
---

# Harmony 实现双飞翼(圣杯)布局
> 一行代码实现双飞翼布局

## 什么是双飞翼(圣杯)

> 两个盒子中间夹着一个盒子，形状类似一个圣杯效果

<div class="cont-box">
  <div class="cb-side"></div>
  <div class="cb-center"></div>
  <div class="cb-side"></div>
</div>


## layoutWeight属性
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

## Blank标签
::: info 借助`Blank`标签
> [官网说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/ts-basic-components-blank-0000001428061724-V2)
- `Blank` 效果等效 `flex` 布局里的 `flex： 1`
- 空白填充组件，在容器主轴方向上，空白填充组件具有自动填充容器空余部分的能力。
- 仅当父组件为Row/Column/Flex时生效
```js
build() {
  Row() {
    Row()
      .width(100)
      .height(100)
      .backgroundColor(Color.Orange)

    Blank()  // [!code error]

    Row()
      .width(100)
      .height(100)
      .backgroundColor(Color.Red)
  }
}
```
:::

<style lang="scss" scoped>
.cont-box{
    width: 100%;
    height: 300px;
    display: flex;
}

.cb-center {
    flex: 1;
    background-color: #3366ff;
}

.cb-side {
    width: 24%;
    height: 100%;
    background-color: yellow;
}
</style>