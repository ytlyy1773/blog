---
title: 发布npm包
description: 二次封装或开发js库，发布到npm
outline: [2, 3]
---

# 发布npm包

> 访问 `npmjs` 官网需要魔法

## 准备工作

注册npmjs账号

查看你的 `.npmrc` 设置，确保你的 `registry` 是 [https://www.npmjs.com/](https://www.npmjs.com/), 而不是淘宝源

## 发布

> 每次发布新版本 `package.json` 配置文件的 `version` 都要改变不然无法发版

* 在项目终端输入 `npm login` 登录你的账号

* 需要依次输入自己的 npm账号名字，密码，邮箱

* 之后需要邮箱的动态验证码校验

* 执行 `npm publish` 即可发布

## 验证

在自己的npm账号下打开个人信息的 `packages` 进入查看自己已发布的包

确认发布信息没问题就可以使用npm去下载使用了

## package.json字段说明

::: info 常用字段
* name
* version
* description
* keywords
* author
* license
* repository
* main
* unpkg
* module
* scripts
* engines
:::

`main` 定义了包的入口文件，导入包文件就是解析main定义的文件.

`name` 就是发布到npm上的包名，也即别人安装时输入的名字npm i ${name}, 包名应该是kebab-case, 即英文单词全小写，中划线分割(lower case and dash-separated)

`version` 是代表版本的意思，每次重新发版版本号都应该不一致。定义版本号应遵循小版本兼容的文件，以优化、修复为主。大版本是添加新的功能。

`description` 是对包的描述，在npmjs.com上搜索时会显示，良好的描述信息有助于用户在搜索时进行筛选

`author` 作者的格式一般是${your name} ${email}, 当然也可以是一个github地址

`repository` 的格式参考如下：

```json
"repository": {
  "type": "git",
  "url": "https://github.com/FEMessage/el-data-table.git"
}
```

这样在你的npm包主页面就有会多出一个github的入口

`engines` 可以告诉用户运行你的包对NodeJs版本的要求，这是非常重要的，不然你使用了NodeJs新版本特性，却没有定义该字段，导致低版本NodeJs用户运行报错，让人摸不着头脑。

