---
title: 怎么写博客
description: 搭建个人博客教程
outline: [2, 4]
---

# 怎么写博客

## 个人经验
* 一口吃不成一个胖子。第一次写建议想写什么写什么，等写的多了再去整合规划
* `收费项目`建议用便宜实惠的产品，等博客质量累积起来再去适当`氪金升级`
* 可以多参考其他`开源博客`的写法和内容
* 博客是一个不断积累的过程，可以借鉴其他，但不建议完全照搬，要有自己的想法

#### 我的博客大概费用

> 如果不想花钱可以使用 [`github pages`](/other/blog/up/usePage.html)

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

## vitepress
> 这里我们选择 `vue` 团队出品的 `vitepress`

[官网直通车 🚘](https://vitepress.dev/zh/)

#### 需要了解什么？

> vitepress采用md为主要书写语言，vue语言多为辅助

1. `Markdown` 语法
    * `markdown` 程序员的必修课
    * 轻量级标记语言，极易上手
    * 适用所有开发者，代码托管平台 `README.md` 文件语言
    * [官方教程 🚘](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)&nbsp;&nbsp;或&nbsp;自行访问[GitHub 文档](https://docs.github.com/zh) 选择&nbsp;"入门"&nbsp;>&nbsp;"在&nbsp;GitHub&nbsp;上写入"
    * md教程推荐 [菜鸟教程 🚘](https://www.runoob.com/markdown/md-tutorial.html)
2. `Vue` 语法
    * [vue官网 🚘](https://cn.vuejs.org/)
3. `Node` 环境
    * vitepress是一个前端框架，需要node环境

#### 本地开发需要的环境

- `Node.js` 18 及以上版本。
- 支持 `Markdown` 语法的编辑器，推荐 `Vscode`

#### 进入开发

> `vitepress` 官网有详细的操作流程和初始化模版，直接参考官网