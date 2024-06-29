---
title: 微信小程序全局添加分享功能
description: 微信小程序全局添加分享功能
---

# 微信小程序全局添加分享功能

> 页面本身的分享方法会覆盖全局的分享方法

## 缺陷 & 思路

- 全局添加分享功能，每个子页面都需要有一个分享方法（微信原生Api已经提供）
- 页面本身的分享会覆盖全局封装的方法
- 支持自定义的显示内容很少（微信小程序本身导致）

## 实现功能源代码
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

## 代码截图

![全局代码](https://www.jwblog.cn/images/pc/code/share.png)

![局部代码](https://www.jwblog.cn/images/pc/code/replaceShare.png)

