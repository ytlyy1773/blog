---
title: 代码自动同步多个代码托管平台
description: 一套代码自动同步到多个代码托管平台上，实现一次提交多平台存储
---

# 代码自动同步多个代码托管平台

## 常见的代码托管平台

* `GitHub`
    - 最大的代码托管平台，拥有庞大的用户群和丰富的功能。
    - 拥有免费的公共仓库，以及付费的私有仓库选项。
    - 强大的协作功能，支持分支管理、Pull Request、Issue跟踪等。
    - 拥有丰富的社区资源，方便学习和解决问题。
    - 支持CI/CD流程，方便自动化部署和测试。
* `Gitee`
    - 中国本土的代码托管平台，用户界面简洁易用。
    - 支持多种语言和项目类型，拥有丰富的开发工具。
    - 提供免费的公共仓库和私有仓库选项。
* `GitLab`
    - 功能类似于 GitHub，但更加注重安全性、隐私和自主性。
    - 提供免费的私有仓库，适合企业内部使用。
    - 支持CI/CD流程，方便自动化部署和测试。

## Github Actions 自动同步

> **配置Actions好处是当我们提交代码到github的时候，代码会`自动更新同步`到gitee，便于国内用户访问**

我们可以利用 Github Actions，写一个工作流，在发现 Github 博客仓库的 master 分支代码更新后，自动同步当前代码到 Gitee 上。

关于 Github Actions 的介绍，可以参考阮一峰老师的 [《GitHub Actions 入门教程》](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)。

为了实现 Gitee 和 Github 的同步，我们需要借助一个 action，还好业界已经有现成的实现了，这里我采用的是 [Hub Mirror Action](https://github.com/Yikun/hub-mirror-action)，我们可以看到使用的示例代码：

```yml
name: syncToGitee
on:
  push:
    branches:
      - master
jobs:
  repo-sync:
    runs-on: ubuntu-latest
    steps:
      - name: Mirror the Github organization repos to Gitee.
        uses: Yikun/hub-mirror-action@master
        with:
          src: 'github/jiangwan1773'
          dst: 'gitee/jiangwan1773'
          dst_key: ${{ secrets.GITEE_PRIVATE_KEY }}
          dst_token:  ${{ secrets.GITEE_TOKEN }}
          static_list: "blog" # 仓库名字
          force_update: true # 强制同步
          debug: true # 启用 `debug` 开关
```

其中有四个必填项：
* `src` 表示需要被同步的源端账户名，即我们 `Github` 的账户名，因为我的 Github ID 是 jiangwan1773，所以这里我应该改成 `github/jiangwan1773`。
* `dst` 表示需要同步到的目的端账户名，即我们 `Gitee` 的账户名，因为我的 Gitee ID 也是 jiangwan1773，所以这里我应该改成 `gitee/jiangwan1773`。
* `dst_key` 表示用于在目的端上传代码的私钥，然后将其保存在 `Secrets` 中。
    具体的操作步骤如下：

    获取私钥：

    ```
    cat ~/.ssh/id_rsa
    ```

    复制私钥内容，然后在要同步的 Github 仓库中，选择 "Setting" -> "Secrets" -> "Actions secrets and variables" -> "New repository secret"

    填入 Secret 内容，Name 命名为 "GITEE_PRIVATE_KEY"，Value 为复制的内容

    然后点击 `Add secret` 即可。

- `dst_token` 创建仓库的API tokens， 用于自动创建不存在的仓库。这里我们从 Gitee 上获取，[gitee地址](https://gitee.com/profile/personal_access_tokens)。生成并复制 Token，然后同样的步骤，保存在 Github 的 Secrets 中，Name 为 `GITEE_TOKEN`

    那么我们就可以在仓库建立的根目录下，建立目录 `.github/workflows` ，然后创建一个名为 `syncToGitee.yml` 的文件：
    ```yml
    name: syncToGitee
    on:
    push:
        branches:
        - master
    jobs:
    repo-sync:
        runs-on: ubuntu-latest
        steps:
        - name: Mirror the Github organization repos to Gitee.
            uses: Yikun/hub-mirror-action@master
            with:
            src: 'github/jiangwan1773'
            dst: 'gitee/jiangwan1773'
            dst_key: ${{ secrets.GITEE_PRIVATE_KEY }}
            dst_token:  ${{ secrets.GITEE_TOKEN }}
            static_list: "blog" # 仓库名字
            force_update: true # 强制同步
            debug: true # 启用 `debug` 开关
    ```

## gitee pages Actions <Badge type="danger" text="已弃用" />

- 需要注意 `gitee pages` 目前已经 `停止服务`，具体的启用时间等官方说明
- 以下完整配置注释部分是自动构建 `gitee pages` 的自动化配置

```yml
name: syncToGitee
on:
  push:
    branches:
      - master
jobs:
  repo-sync:
    runs-on: ubuntu-latest
    steps:
      - name: Mirror the Github organization repos to Gitee.
        uses: Yikun/hub-mirror-action@master
        with:
          src: 'github/jiangwan1773'
          dst: 'gitee/jiangwan1773'
          dst_key: ${{ secrets.GITEE_PRIVATE_KEY }}
          dst_token:  ${{ secrets.GITEE_TOKEN }}
          static_list: "blog" # 仓库名字
          force_update: true # 强制同步
          debug: true # 启用 `debug` 开关

      # - name: Build Gitee Pages
      #   uses: yanglbme/gitee-pages-action@main
      #   with:
      #     # 注意替换为你的 Gitee 用户名
      #     gitee-username: 'jiangwan1773'
      #     # 注意在 Settings->Secrets 配置 GITEE_PASSWORD
      #     gitee-password: ${{ secrets.GITEE_PASSWORD }}
      #     # 注意替换为你的 Gitee 仓库，仓库名严格区分大小写，请准确填写，否则会出错
      #     gitee-repo: 'jiangwan1773/blog'
      #     # 要部署的分支，默认是 master，若是其他分支，则需要指定（指定的分支必须存在）
      #     branch: github-pages
```

## 配置GitHub Secrets

1. 进入GitHub仓库设置：
    * 打开你的GitHub仓库。
    * 点击右上角的 Settings。

2. 添加Secrets：
    * 在左侧栏中找到 Secrets and variables，然后选择 Actions。
    * 点击 New repository secret 来添加新的Secret。

#### Secrets的示例内容

> 假设你有一个服务器，IP地址为 192.168.1.100，用户名为 root，密码为 your_password，你需要将这些信息添加为Secrets：

1. 添加SSH_HOST：
    * Name: SSH_HOST
    * Value: 192.168.1.100

2. 添加SSH_USER：
    * Name: SSH_USER
    * Value: root

3. 添加SSH_PASSWORD：
    * Name: SSH_PASSWORD
    * Value: your_password