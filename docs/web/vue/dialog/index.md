---
title: vue封装dialog弹窗
description: 在vue项目中使用函数式封装一个dialog弹窗
head:
  - - meta
    - name: keywords
      content: 封装 弹窗
---

# 封装dialog弹窗

> Vue3 + ts函数式封装

## 演示

<a-button type="primary" @click="openDialog">唤醒弹窗</a-button>
<upload-image v-model="show" />
<script setup>
// =======  依赖引入  =======
import { ref } from 'vue'
import uploadImage from './dialogModule.vue'
// =======  类型声明  =======

// =======  变量声明  =======
const show = ref(false)
// =======  主流程  =======

// =======  函数声明  =======

function openDialog() {
    show.value = true
}
// =======  属性返回  =======
</script>

## 解释

::: info 一、vue文件使用代码
```js-vue
// =======  依赖引入  =======
import { getCurrentInstance } from 'vue'

// =======  变量声明  =======
const { proxy }: any = getCurrentInstance()

// =======  函数声明  =======
function showDialog() {
    // 使用全局封装的弹窗
    proxy.$dialog().then(res => {
        // 确定事件
    }).catch(err => {
        // 取消事件
    })
}
```
:::

::: details 二、函数封装: 源代码
<<< ./dialog.ts
:::

::: details 三、vue组件封装: 源代码
<<< ./dialogModule.vue
:::

