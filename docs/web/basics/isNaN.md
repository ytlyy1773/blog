---
title: js判断内容是不是是NaN
description: js判断内容是不是是NaN
---

# js判断内容是不是是NaN

## 示例
::: info 1. 使用 isNaN() 函数
> isNaN() 是 JavaScript 中的一个全局函数，用于判断一个值是否为 NaN。该函数的参数可以是任何类型的值，如果该值为 NaN，则返回 true，否则返回 false。
```js
console.log(isNaN(NaN)); // true
console.log(isNaN(123)); // false
console.log(isNaN("abc")); // true
```
:::

::: info 2. 使用 Number.isNaN() 函数
> Number.isNaN() 是 JavaScript 中 Number 对象的一个静态方法，用于判断一个值是否为 NaN。该函数的参数可以是任何类型的值，如果该值为 NaN，则返回 true，否则返回 false。
```js
console.log(isNaN(NaN)); // true
console.log(isNaN(123)); // false
console.log(isNaN("abc")); // true
```
:::

::: info 3. 使用 Object.is() 方法
> Object.is() 是 JavaScript 中 Object 对象的一个静态方法，用于判断两个值是否严格相等
```js
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(123, 123)); // true
console.log(Object.is("abc", "abc")); // true
```
:::