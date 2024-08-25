---
title: 如何使用git提交代码
description: 如何使用git提交代码，把git代码提交应用于实际项目
outline: [2, 3]
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

## git回滚代码的方式

### git revert

```sh
git revert HEAD
```

`git revert` 会创建一个新的提交，并且不会改变提交历史，适合已经共享到远程仓库的情况。

### git reset
* 回滚到特定提交并保留更改：
    ```sh
    git reset --soft <commit-hash>
    ```
* 回滚到特定提交并丢弃更改：
    ```sh
    git reset --hard <commit-hash>
    ```

此命令将分支指针重置到 `commit-hash`，并丢弃所有未提交的更改。

## ssh链接

### 生成 SSH 密钥对

如果还没有 SSH 密钥，可以通过以下命令生成：

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

按提示操作，生成密钥对后，公钥会保存在 ~/.ssh/id_rsa.pub 中，私钥会保存在 ~/.ssh/id_rsa 中。

### 将公钥添加到 GitHub

* 复制公钥内容：
```sh
cat ~/.ssh/id_rsa.pub
```
* 登录 GitHub，进入 `SSH and GPG keys` 页面。
* 点击 "New SSH key"，将公钥内容粘贴到 Key 字段中，并设置一个 Title，点击 "Add SSH key"。
* id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人。

### 配置 Git 使用 SSH

确保 Git 使用 SSH 方式连接 GitHub，可以使用以下命令：

```sh
cd /path/to/your/repository
git remote set-url origin git@github.com:username/repository.git
```