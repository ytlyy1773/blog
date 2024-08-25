---
title: 怎么写博客
description: 搭建个人博客教程，使用vitepress编写个人博客项目
outline: [2, 3]
---

# 怎么写博客

## 个人经验
* 一口吃不成一个胖子。第一次写建议想什么写什么，等写的多了再进行 `整合规划`
* `收费项目` 建议用便宜实惠的产品，等博客质量积累起来再去适当 `氪金升级`
* 博客是一个不断积累的过程，可以借鉴其他，但不建议完全照搬，要有自己的想法
* 可以多参考其他 `开源博客` 的内容。[优质博客集&nbsp;&nbsp;&nbsp;🚘](https://github.com/foru17/front-end-collect?tab=readme-ov-file)

### 我的博客大概费用

> 如果不想花钱可以使用 [`github pages`](/other/blog/up/use-page.html)

| 项目 | 必要 | 费用 | 备注 |
| :--- | :--- | :--- | :--- |
| 云服务器 | 必要 | `100-260`不等/年 | 建议博客写的适量再去购买，而不是什么都没写就先买服务器，`千里之行始于足下` |
| 域名 | 必要 | `50`左右/年 | --- |
| ssl证书 | 非必需 | `100`左右/3年 | 建议买便宜的就行，也可以不停的用免费适用3个月的，到期继续申请免费试用3个月 |

## 常见博客框架

* `vitepress`
    > 由 Vite 和 Vue 驱动的静态站点生成器
* `WordPress`
    > 最流行的博客框架，功能丰富、插件众多，适合各种类型的博客。
* `Ghost`
    > 轻量级博客框架，注重写作体验，适合个人博客。
* `Jekyll`
    > 静态博客框架，速度快、易于部署，适合技术博客。
* `Hexo`
    > 基于 Node.js 的静态博客框架，易于使用，适合个人博客和技术博客。
* `Hugo`
    > 基于 Go 语言的静态博客框架，速度快、功能强大，适合各种类型的博客。

## 技术选型
* `vitepress`：博客框架推荐使用
* `github`：代码仓库强烈推荐使用github
    - 多样化的github actions，可以做到`CI/CD`
    - 支持github pages
    - 后续升级提升都是基于github

## vitepress
> 这里我们选择 `vue` 团队出品的 `vitepress`

[官网直通车&nbsp;&nbsp;&nbsp;🚘](https://vitepress.dev/zh/)

### 需要了解什么？

> vitepress采用md为主要书写语言，vue语言多为辅助

1. `Markdown` 语法
    * `markdown` 程序员的必修课
    * 轻量级标记语言，极易上手
    * 适用所有开发者，代码托管平台 `README.md` 文件语言
    * [官方教程&nbsp;&nbsp;&nbsp;🚘](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)&nbsp;&nbsp;或&nbsp;自行访问[GitHub 文档](https://docs.github.com/zh) 选择&nbsp;"入门"&nbsp;>&nbsp;"在&nbsp;GitHub&nbsp;上写入"
    * md教程推荐 [菜鸟教程&nbsp;&nbsp;&nbsp;🚘](https://www.runoob.com/markdown/md-tutorial.html)
2. `Vue` 语法
    * [vue官网&nbsp;&nbsp;&nbsp;🚘](https://cn.vuejs.org/)
3. `Node` 环境
    * vitepress是一个前端框架，需要node环境

### 本地开发需要的环境

- `Node.js` 18 及以上版本。
- 支持 `Markdown` 语法的编辑器，推荐 `Vscode`

### 进入开发

> `vitepress` 官网有详细的操作流程和初始化模版，直接参考官网

## 遇到的问题

> 略微区别于开发单页面应用程序的点

### 不同环境打包的问题

* 正常的环境配置是 `不会生效` 的需要做特殊处理
* github actions的运行环境默认是 Linux
* 这里用 `github actions` 打包举例

问题描述：本地使用 `pnpm run build:github` 打包没问题，但是配置了自动化命令的时候就不行了

::: tip
* 添加项目依赖 `cross-env`，解决跨平台环境之间的差异而导致的问题
* 修改 `docs/.vitepress/config.mts` 文件下的 `base` 属性
    > `deploy.yml` 这是一个github pages的自动化打包配置文件，存放于 `.github/workflows/` 目录下
```ts
// 环境变量的控制来源子deploy.yml文件
base: process.env.BUILD_ENV === "github" ? "/blog/" : "/"
```
:::

我们可以添加一条命令 `build:github` 本地看github打包效果

> 验证过后可以删除这个 `build:github` 的命令

```sh
"scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "build:github": "cross-env BUILD_ENV=github vitepress build docs",
    "preview": "vitepress preview docs"
}
```

### 禁止使用index.md

* 除了首页使用index，其余一律不使用index
* 使用index是一个重定向的目录，seo不会收录这样的目录

[具体解释请参考seo&nbsp;&nbsp;&nbsp;🚘](/other/blog/basics/seo-info.html)
