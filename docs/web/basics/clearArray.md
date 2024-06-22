---
title: Array常见的两种重置方法对比
description: Array常见的两种重置方法对比
---

# Array常见的两种重置方法对比

## 示例

::: info 一、Array === []
```js
const list = [1,2,4]
const copyList = list
list = []
console.log(list) 输出>>> []
console.log(copyList) 输出>>> [1,2,4]
实质上是创建了一个新数组，并将Array指向它，Array的指向发生变化，并没有去修改原数组
```
:::

::: info 二、length设置为0
```js
const list = [1,2,4]
const copyList = list
list.length = 0
console.log(list) 输出>>> []
console.log(copyList) 输出>>> []
设置lenght属性为0本质上是改变了数组的length属性，修改了原数组，会影响所有该元素的浅拷贝对象
```
:::
