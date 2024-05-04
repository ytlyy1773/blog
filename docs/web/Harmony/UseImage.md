---
title: Harmony 使用Image资源的4种方法
description: 鸿蒙使用Image资源的4种方法
---

<c-title title="Harmony 使用Image资源的4种方法" />

## 具体使用
::: info 方法一：`assets` 目录
- 1.新建 `src/main/ets/assets/image` 目录
- 2.添加 `startIcon.png` 图片文件
```js
Image('/assets/image/startIcon.png')  // [!code error]
    .width(100)
    .aspectRatio(1)
```
:::

::: info 方法二：使用网络图片
```js
Image('http://www.jwblog.cn/images/pc/blog/update-after.jpg')  // [!code error]
    .width(100)
    .aspectRatio(1)
```
:::

::: info 方法三：`media` 目录
> 固定用法`$r('app.media.图片名字')`
- 1.ets目录下新建 `src/main/resources/base/media` 目录
- 2.添加 `startIcon.png` 图片文件
```js
Image($r('app.media.startIcon'))  // [!code error]
    .width(100)
    .aspectRatio(1)
```
:::

::: info 方法四：`rawfile` 目录
> 固定用法`$r('$rawfile.图片名字')`
- 1.在 `src/main/resources/rawfile` 目录下
- 2.添加 `startIcon.png` 图片文件
```js
Image($rawfile("startIcon.png"))  // [!code error]
    .width(100)
    .aspectRatio(1)
```
:::

## 优缺点对比
| 区别        |  assets |  网络图片 |  media |  rawfile |
|:---|:---|:---|:---|:---|
| 优点        |  1.可以有二级目录 <br>2.利于维护 |  |  1.使用简单  |  1.使用简单  |
| 缺点        |   |  需要有网络 |  1.不可以有二级目录 <br>2.不可以有文件后缀 <br>3.必须简写(无后缀)  |  1.资源必须是全路径(有后缀)  |
