---
title: 限制浏览器返回
description: vue代码里边如何限制浏览器返回
---

# 限制浏览器返回

> 用途，H5页面有内容返回增加一个弹窗提醒

## 代码

::: info 源代码
> 不同于VueRouter里边跳转的replace方法可以做到不能跳转回上一页

> 限制无法回退页面
```js-vue
onMounted(() => {
    history.pushState(null, null, document.URL)
    window.addEventListener('popstate', backPage)
})
function backPage() {
    history.pushState(null, null, document.URL)
    if (true) {
        // 满足限制条件 open popup
    } else {
        window.removeEventListener('popstate', backPage)
        history.go(-1)
    }
}
```
:::

