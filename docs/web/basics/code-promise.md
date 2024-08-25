---
title: Promise理解
description: 认识Promise、理解Promise、使用Promise
outline: [2, 3]
---

# Promise理解

## 示例

::: info 模拟请求：
<a-button type="primary" :loading="disabled" @click="newButton">{{ disabled ? '等待请求中...' : '模拟请求' }}</a-button>
:::

## Promise说明

### Promise是什么
* Promise 是一个对象，也是一个构造函数
* Promise 对象是 JavaScript 的异步操作解决方案，为异步操作提供统一接口。

### 三种状态

* 等待中（pending）：初始状态，既没有被兑现，也没有被拒绝   常见于（网络请求，网速慢的情况下）。
* 已兑现（fulfilled）：意味着操作成功完成   常见于（网络请求成功的情况下）。
* 已拒绝（rejected）：意味着操作失败   常见于（网络请求失败的情况下）

### 链式调用

``` js
Promise.prototype.then()
    （常见于）接口返回code==200也只有接口返回状态是200才会进入.then()

Promise.prototype.catch()
    （常见于）接口返回code!=200.catch()

Promise.prototype.finally()
    （现在比较流行做节流处理）接口返回失败和成功都会进入.finally()
```

## 示例源代码

::: info 接口请求示范
``` js
<a-button type="primary" :loading="disabled" @click="newButton">{{ disabled ? '等待请求中...' : '模拟请求' }}</a-button>

function newButton() {
    // 开启阀门，只有按钮事件执行完毕才会继续执行
    disabled.value = true
    getDataQuery()
        .then(res => {
            ElMessage.success(res as string)
        })
        .catch(() => {
            ElMessage.error('接口请求失败')
        })
        .finally(() => {
            disabled.value = false
        })
}

function getDataQuery() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('接口请求成功')
        }, 2000)
    })
}
```
:::

<script setup lang="ts">
// =======  依赖引入  =======
import { ref } from 'vue'
import { message } from 'ant-design-vue'
// =======  类型声明  =======

// =======  变量声明  =======
const disabled = ref(false)
// =======  主流程  =======

// =======  函数声明  =======
function newButton() {
    // 开启阀门，只有按钮事件执行完毕才会继续执行
    disabled.value = true
    getDataQuery()
        .then(res => {
            message.success(res as string)
        })
        .catch(() => {
            message.error('接口请求失败')
        })
        .finally(() => {
            disabled.value = false
        })
}

function getDataQuery() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('接口请求成功')
        }, 2000)
    })
}
// =======  属性返回  =======
</script>

<style lang="scss" scoped>
.ant-btn-primary {
    margin: 10px 0;
}
</style>
