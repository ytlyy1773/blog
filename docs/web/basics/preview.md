---
title: Html预览word，pdf，excel
description: Html预览word，pdf，excel
---

<c-title title="Html预览word，pdf，excel" />

> 核心就是`<iframe />`标签；只有pdf是可以直接被预览的，word格式需要使用做拼接


## 流程

::: info 源代码
```html
<iframe
    v-if="type !== 'pdf'"
    :src="`https://view.officeapps.live.com/op/view.aspx?src=${url}`"
    style="width: 100%; height: 100%"
></iframe>
<!-- pdf格式直接打开就是预览 -->
<iframe v-else :src="url" style="width: 100%; height: 100%"></iframe>
```
:::
