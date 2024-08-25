---
title: 如何使用github pages
description: github page是什么，github page的使用教程
outline: [2, 3]
---

# 如何使用github pages

## github pages是什么

> `GitHub Pages` 是 `GitHub` 提供的一个免费服务，用于托管静态网站。你可以用它轻松地创建个人主页、博客、项目页面等

[官网链接](https://docs.github.com/zh/pages/getting-started-with-github-pages)

* 首先他是完全免费的，相较其他的同类产品，他能替你省下一笔服务费，节约下的钱可以让你买一些其他的会员服务；
* 无须自己购买云服务进行搭建，只需按步骤一步步操作即可，即使你不懂他的技术细节；
* 支持的功能多，玩法丰富，你可以绑定你的域名、使用免费的 HTTPS、自己 DIY 网站的主题、使用他人开发好的插件等等；
* 当完成搭建后，你只需要专注于文章创作就可以了，其他诸如环境搭建、系统维护、文件存储的事情一概不用操心，都由 GitHub 处理

## 尝试使用github pages

* 在github新建一个空白项目
* 项目初始化完毕后添加一个 `index.html` 文件
    ```html
    <!DOCTYPE html>
    <html lang="zh-CN" dir="ltr">
        <head></head>
        <body>
            <div>一条懒羊羊</div>
        </body>
    </html>
    ```
* 选择 "Setting" -> "Secrets" -> "Code and automation" -> `"Pages"`

    看到 `Build and deployment` 的 `Source` 存在两个选项
    * `Deploy from a branch` 从分支部署
        - Branch选择master分支
        - 默认他会读取跟目录的 `index.html` 文件，也就是说一个项目跟目录下只能有一个 `index.html` 文件
        - 刷新之后在 `GitHub Pages` 页面会出现一个网站，这个网站就是我们发布好的网站
    * `GitHub Actions` 自动化部署
        > 后续介绍使用

## 使用github pages自动化

> 项目代码提交之后我们可以配置自动化发布 `github pages` 网站

`1.` 选择 "Setting" -> "Secrets" -> "Code and automation" -> `"Pages"`

`2.` 看到 `Build and deployment` 的 `Source` 选择 `GitHub Actions` 自动化部署

### 自动化脚本

[vitepress部署脚本说明](https://vitepress.dev/zh/guide/deploy)

* vitepress项目，`.github/workflows/` 新建 `deploy.yml` 脚本文件
* 基于 `master` 新建分支 `github-pages`
* 配置相关命令权限等
* 构建脚本
* 部署脚本

> github-pages 分支提交上去之后我们就不需要做任何改动

```yml
# 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程
#
name: Deploy VitePress site to Pages

on:
  # 在针对 `main` 分支的推送上运行。如果你
  # 使用 `master` 分支作为默认分支，请将其更改为 `master`
  push:
    branches: [master]

  # 允许你从 Actions 选项卡手动运行此工作流程
  workflow_dispatch:

# 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      - uses: pnpm/action-setup@v3 # 如果使用 pnpm，请取消注释
        with:
          version: 8.14.0 # 这里指定 pnpm 的版本
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18.17.1
          cache: pnpm # 或 pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: pnpm install # 或 pnpm install / yarn install / bun install
      - name: Build with VitePress
        env:
          BUILD_ENV: github # 配置环境变量
        run: pnpm run build # 打包命令
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 实现效果

- 配置完成之后 `master` 分支有提交就会触发脚本自动构建部署网站，也就是实现了 `CD`
- `CD` 即持续交付/部署
