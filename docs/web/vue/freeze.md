---
title: 冻结属性 Object.freeze | Readonly
description: Object.freeze() | Ts的Readonly 在vue中的应用
---

<c-title title="Object.freeze() | Ts的Readonly 在vue中的应用" />

## 相似之处
- TypeScript 的 Readonly 和 JavaScript 的 Object.freeze 都会使对象变为只读，即无法修改对象的属性或方法。
- 两者都可以用于防止意外修改对象，从而提高代码的安全性。

## 不同点
| 区别        |      Readonly      |  Object.freeze |
|:---|:---|:---|
| 作用范围      | 是一种 TypeScript 类型，它可以用于任何类型的值，包括对象、数组、元组等等 | Object.freeze 只能用于 JavaScript 对象 |
| 类型检查      | 可以通过 TypeScript 的类型检查来确保对象是只读的    | Object.freeze 只能在运行时检查对象是否被冻结 |
| 深度冻结 | Readonly 仅对对象本身进行冻结，而不会冻结对象中的嵌套对象    | Object.freeze 会递归冻结对象中的所有嵌套对象  |
| 性能         | Readonly 的性能通常优于 Object.freeze，因为它不需要进行递归冻结 |                |


## vue中的使用
```js{5}
export default {
  data() {
    return {
      star: ['杰夫贝佐斯', '马斯克'],
      userInfo: Object.freeze({ name: '一条懒羊羊', age: 25 }) // 使用 Object.freeze() 会失去响应式 // [!code focus]
    }
  }
}
```


## 总结
- `Readonly` 和 `Object.freeze` 都是使对象变为只读的有效方法。
- 在 `TypeScript` 代码中，建议使用 `Readonly`，因为它可以提供更好的类型检查和性能。
- 在 `JavaScript` 代码中，可以使用 `Object.freeze` 来冻结对象，但需要注意其性能问题。
