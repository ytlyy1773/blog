---
title: Harmony 控制组件是否可见
description: 鸿蒙控制组件是否可见
head:
  - - meta
    - name: keywords
      content: hm 组件显隐
---

# Harmony 控制组件是否可见

## 使用条件渲染
::: info 使用if和else
>  类似于 `vue` 的 `v-if`
```js
build() {
    Column() {
      Row() {
        if (this.boon) {   // [!code error]
          Text('使用了文字')
        } else {   // [!code error]
          Button('切换了Button')
        }
      }
        .margin({ top: 200 })
      Toggle({ type: ToggleType.Switch , isOn: $$this.boon })
        .margin({ top: 20 })
    }
    .width('100%')
    .height('100%')
}
```
:::

## visibility属性
> [官网说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V2/ts-universal-attributes-visibility-0000001428061704-V2)
::: info 借助`visibility`属性
>  类似于 `vue` 的 `v-show`
- 控制组件是否可见
- `visibility` 效果等效 `css` 的`dispaly: none;`
```js
build() {
    Column() {
        Row() {
        Text('使用了文字')
            .visibility(this.boon ? Visibility.Visible : Visibility.None)   // [!code error]
        }
        .margin({ top: 200 })
        Toggle({ type: ToggleType.Switch , isOn: $$this.boon })
        .margin({ top: 20 })
    }
    .width('100%')
    .height('100%')
}
```
:::

## 其他方案
> 不推荐
- 借助属性`opacity`
- 设置属性元素 `width` 和 `height` 为0