---
title: 前端加密安全
description: 前端怎么做数据接口的加密安全处理
outline: [2, 4]
---

# 前端加密安全

> 核心使用了前端js库 `CryptoJS`

## 加密流程

#### 加密场景和加密方式
* 前端加密场景有哪些？
    - 请求接口
    - 路由跳转携带参数

* 常用加密方式
    - base64
    - Sha256
    - AES
    - ...

#### 简单的Base64加密使用场景

* 浏览器url地址栏

    ![浏览器url地址栏](http://www.jwblog.cn/images/pc/code/share/encryptionShare001.png)

* 区别&缺陷

    ![区别&缺陷](http://www.jwblog.cn/images/pc/code/share/encryptionShare002.png)

::: tip Base64优缺点(Base64本质是一种编码方式，而非加密方式)
* 优点
    - 使用简单，javascript语言支持
    - 对称性加密（加密之后可以解密）
* 缺点
    - 加解密会改变基础类型（Number 变成String），仅支持ASCII
    - 编码后的大小会比原文件大小大1/3
    - 加密单一，内容相同的密文加密解密对一样的
    - 会造成文件体积增加，影响文件的加载速度
    - 兼容性的问题，ie8以前的浏览器不支持
:::

#### Sha256加密简介

- 比较流行，也是最强的加密函数之一
- 非对称性加密（加密之后，无法通过密文解密）
- 应用场景：比特币等加密货币

加密、解密过程演示

![加密、解密过程演示](http://www.jwblog.cn/images/pc/code/share/encryptionShare003.png)

#### AES加密简介

加密、解密过程演示

![加密、解密过程演示](http://www.jwblog.cn/images/pc/code/share/encryptionShare004.png)

::: warning 前端加密步骤

* 获取当前时间戳
* 拼接密钥字符串（eg：token + 时间戳）
* 哈希算法对拼接后的字符串进行哈希
    - 借助sha256生成非对称性加密
    - 生成结果64位
* 取哈希结果前32位生成完整的密钥（utf8格式）
* 使用前端js库CryptoJS生成密文
:::

#### 如何加密

![如何加密](http://www.jwblog.cn/images/pc/code/share/encryptionShare006.png)

#### 如何解密

![如何解密](http://www.jwblog.cn/images/pc/code/share/encryptionShare007.png)
