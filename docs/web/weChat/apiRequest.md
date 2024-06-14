---
title: 微信request的二次封装
description: 微信使用promise对request的二次封装
head:
  - - meta
    - name: keywords
      content: 小程序 接口
---

# 微信request的二次封装

## 代码

::: info 微信请求的二次封装
```js
const baseUrl = "http://www.baidu.com/";

export const request = ({ url, method, data }) => {
  new Promise((resolve, reject) => {
    wx.request({
      url: `${baseUrl}${url}`,
      data,
      method,
      header: {
        "content-type": "application/json", // 默认值
      },
      success: (res) => {
        // 请求成功，就将成功的数据返回出去
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
};
```
:::

