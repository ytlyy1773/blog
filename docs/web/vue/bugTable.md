---
title: el-table设置高度之后合计行不显示解决方法
description: el-table设置高度之后合计行不显示解决方法
---

<c-title title="el-table设置高度之后合计行不显示解决方法" />

## 示例

::: info 一、核心
```js-vue
<el-table>的doLayout属性
```
> `doLayout` 对 Table 进行重新布局。 当表格可见性变化时，您可能需要调用此方法以获得正确的布局
:::


::: info vue2解决方案
```js-vue
updated() {
    this.$nextTick(() => {
        this.$refs.table.doLayout()
    })
}
:::

::: info vue3解决方案
```js-vue
const divRefs: Ref<any> = ref()
onUpdated(() => {
    nextTick(() => {
        divRefs.doLayout()
    })
})
:::
