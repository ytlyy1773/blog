---
title: Vue2重置data里边的数据
description: Vue2重置data里边的数据
---

# Vue2重置data里边的数据

> 局限于vue2

## 示例

::: info 一、初始化组件中的所有数据
```js-vue
Object.assign(this.$data,this.$options.data())
```
:::

::: info 二、初始化组件中某个对象中的数据
```js-vue
Object.assign(this.$data.form,this.$options.data().form)
```
:::

::: info 三、总结
```js-vue
Object.assign(this.$data,this.$options.data())
// 方法慎用
会导致BUG 生命周期请求接口返回的数据也会清空，只能是搭配使用

// 重置所有数据方法
reSetData(
  Object.assign(this.$data,this.$options.data())
  this.getQueryData()
)

// eg：BUG实例--生命周期有请求接口赋值数据
created() {
  this.getQueryData()
}
methods: {
  async getQueryData() {
    const res = await getPost({})
    // 赋值
    res.code == 200 && (this.formObj = res.data)
  }
}
```
:::
