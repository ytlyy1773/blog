---
title: 前端加密安全
description: 怎么做前端加密安全
---

<c-title title="前端加密安全" />

> 核心使用了前端js库CryptoJS

## 流程

::: info 一、前端加密场景有哪些？
```
1.请求接口
2.路由跳转携带参数
```
:::

::: info 二、常用加密方式
```
1.base64
2.Sha256
3.AES
```
:::

::: info 三、Base64使用场景

浏览器url地址栏
<img src="http://www.jwblog.cn/images/pc/code/share/encryptionShare001.png" class="show-img" />

区别&缺陷
<img src="http://www.jwblog.cn/images/pc/code/share/encryptionShare002.png" class="show-img" />

```
Base64优缺点(Base64本质是一种编码方式，而非加密方式)
优点
1.使用简单，javascript语言支持
2.对称性加密（加密之后可以解密）
缺点
1.加解密会改变基础类型（Number 变成String），仅支持ASCII
2.编码后的大小会比原文件大小大1/3
3.加密单一，内容相同的密文加密解密对一样的
4.会造成文件体积增加，影响文件的加载速度
5.兼容性的问题，ie8以前的浏览器不支持
```
:::

::: info 四、Sha256简介

```
1.比较流行，也是最强的加密函数之一
2.非对称性加密（加密之后，无法通过密文解密）
3.应用场景：比特币等加密货币
```

加密、解密过程演示
<img src="http://www.jwblog.cn/images/pc/code/share/encryptionShare003.png" class="show-img" />


:::

::: info 五、AES简介

加密、解密过程演示
<img src="http://www.jwblog.cn/images/pc/code/share/encryptionShare004.png" class="show-img" />

```
前端加密步骤
1.获取当前时间戳
2.拼接密钥字符串（eg：token + 时间戳）
3.哈希算法对拼接后的字符串进行哈希
借助sha256生成非对称性加密
生成结果64位
4.取哈希结果前32位生成完整的密钥（utf8格式）
5.使用前端js库CryptoJS生成密文
```

:::

::: info 六、如何加密
<img src="http://www.jwblog.cn/images/pc/code/share/encryptionShare006.png" class="show-img" />
:::

::: info 七、如何解密
<img src="http://www.jwblog.cn/images/pc/code/share/encryptionShare007.png" class="show-img" />
:::

<style lang="scss" scoped>
.show-img {
    margin: 10px 0;
}
</style>