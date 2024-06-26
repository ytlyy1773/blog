---
title: 如何使用git提交代码
description: 如何使用git提交代码，把git代码提交应用于实际项目
---

# 如何使用git提交代码

> 工欲善其事，必先利其器

## git操作软件推荐

::: info GitHub Desktop
> 支持 `mac` 和 `win` &nbsp;&nbsp;[官网直通车&nbsp;&nbsp;&nbsp;🚘](https://desktop.github.com)
```js
优点：可以复制操作代码
缺点：没有中文界面
```
:::

::: info sourcetree
> 支持 `mac` 和 `win` &nbsp;&nbsp;[官网直通车&nbsp;&nbsp;&nbsp;🚘](https://www.sourcetreeapp.com)
```js
优点：支持中文界面
缺点：不可以复制操作代码
```
:::

## git提交代码流程

::: info 推送代码到远端
```js
1.首先在项目目录下初始化本地仓库
git init

2.添加所有文件( . 表示所有)
git add .

3.提交所有文件到本地仓库
git commit -m "备注信息"

4.连接到远程仓库
git remote add origin 你的远程仓库地址

5.将项目推送到远程仓库，（失败，可以先拉去远端代码到本地，再提交）
git push -u origin master

6.拉取代码到本地，再推送代码到远端
git pull --rebase origin master
```
:::

