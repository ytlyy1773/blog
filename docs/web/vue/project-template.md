---
title: Vue3 + ts项目小技巧
description: 作者开发Vue3 + ts项目的一些小技巧
---

# Vue3 + ts项目小技巧

## 建议标准初始化模版

```js-vue
<template>
    <div></div>
</template>

<script setup lang="ts">
// =======  依赖引入  =======

// =======  类型声明  =======

// =======  变量声明  =======

// =======  主流程  =======

// =======  函数声明  =======

// =======  属性返回  =======
</script>

<style lang="scss" scoped></style>
```



### 用户代码片段code
> 建议添加快捷方式使用`tem3t`自动生成模板

```json
  "Vue3TS-初始化模板": {
      "prefix": "tem3t",
      "body": [
          "<template>",
          "    <div>$1</div>",
          "</template>",
          "",
          "<script setup lang=\"ts\">",
          "// =======  依赖引入  =======",
          "",
          "// =======  类型声明  =======",
          "",
          "// =======  变量声明  =======",
          "",
          "// =======  主流程  =======",
          "",
          "// =======  函数声明  =======",
          "",
          "// =======  属性返回  =======",
          "</script>",
          "<style lang='scss' scoped></style>",
          ""
      ],
      "description": "初始化Vue3-模板"
  }
```


## 打包省略console ｜ debugger
```js-vue
export default defineConfig({
    // 打包之后没有，不会影响开发环境
    esbuild: {
        pure: ['console.log'],
        drop: ['debugger']
    },
})
```
