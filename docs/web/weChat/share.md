---
title: 微信小程序全局添加分享功能
description: 微信小程序全局添加分享功能
---

<c-title title="微信小程序全局添加分享功能" />

> 页面本身的分享方法会覆盖全局的分享方法

## 解释

::: info 一、缺陷 & 思路
```js
1.全局添加分享功能，每个子页面都需要有一个分享方法（微信原生Api已经提供）
2.页面本身的分享会覆盖全局封装的方法
3.支持自定义的显示内容很少（微信小程序本身导致）
```
:::

::: info 二、源代码
```js
// 全局分享功能，页面有空的onShareAppMessage()会不生效
(function(){
    const PageTmp = Page;
    Page = (pageConfig) => {
    // 设置全局默认分享
    pageConfig = Object.assign({
        onShareAppMessage:function () {
        return {
            title:'默认文案title',
            path:'默认分享路径+id',
            imageUrl:'默认分享图片',
        };
        }
    },pageConfig);
    PageTmp(pageConfig);
    };
})();
```
:::

::: info 三、代码截图
<img style="margin: 10px 0" src="http://www.jwblog.cn/images/pc/code/share.png" />
<img src="http://www.jwblog.cn/images/pc/code/replaceShare.png" />
:::
