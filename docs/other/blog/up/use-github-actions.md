---
title: 如何使用github actions自动化工作流
description: linux云服务器使用教程
outline: [2, 3]
---

# 如何使用github actions自动化工作流

## github actions是什么

GitHub Actions 是一种在 GitHub 上自动执行任务的平台。它允许你将你的工作流自动化，例如：

* 构建和测试代码
* 部署应用程序
* 发布软件包
* 协作开发

以下是使用 GitHub Actions 的一些优势：

* 自动化任务: 消除手动任务，提高效率。
* 提高代码质量: 自动化构建、测试和部署过程，减少错误和提升代码质量。
* 加速开发流程: 自动化流程，让开发人员专注于更重要的任务。
* 提升团队协作: 方便团队成员在工作流中协作，提高效率。
* 开源和易于使用: GitHub Actions 是开源的，并且提供易于使用的界面。

## 已经实现的github actions

* 同步代码仓库内容到 `gitee` 仓库
* 同步内容索引更新到 `algolia`
* 代码提交自动打包部署 `github pages`
* 代码提交 `linux` 服务器自动打包部署

## 怎么配置GitHub Secrets
1. 进入GitHub仓库设置：
    * 打开你的GitHub仓库。
    * 点击右上角的 Settings。

2. 添加Secrets：
    * 在左侧栏中找到 Secrets and variables，然后选择 Actions。
    * 点击 New repository secret 来添加新的Secret。

### Secrets的示例内容

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

## 执行linux系统脚本

> 这里假设服务器的脚本已经实现相应的功能了：自动拉取代码、自动打包、自动更新nginx

实现效果

* 编写 `github actions` 配置文件，提交代码自动执行服务器脚本
* 作者只需要关注代码提交，其余均是自动化脚本

在你的项目根目录下创建一个 `.github/workflows` 目录，并在其中创建一个 `.yml` 文件来定义GitHub Actions工作流，例如 `run_script.yml`。

* 由于GitHub Actions运行在Ubuntu环境中，而Ubuntu使用apt-get包管理器而不是yum。为了在Ubuntu环境中运行并安装sshpass和openssh-client，你需要使用适合的包管理器和命令。
* 请注意，使用密码认证相对 `不太安全`，因此要确保密码的复杂性和保密性。同时，为了避免密码泄露，不要在代码中直接包含密码，而是通过 `GitHub Secrets` 来管理。

```sh
# 保持命令运行：即使用户退出会话，使用 `nohup` 运行的命令也会继续运行。
nohup /root/update.sh > /root/update_output.log 2>&1
```

::: info run_script.yml 文件
```yml
name: Run Root Script  # 工作流名称

on:
  push:
    branches:
      - master  # 监控 master 分支上的推送事件
  workflow_dispatch:  # 手动触发工作流

jobs:
  run-script:
    runs-on: ubuntu-latest  # 使用最新版本的 Ubuntu 作为运行环境

    steps:
    - name: Checkout code  # 步骤1：检出代码
      uses: actions/checkout@v2  # 使用官方的 checkout 动作

    - name: Install SSH client and sshpass  # 步骤2：安装 SSH 客户端和 sshpass
      run: |
        sudo apt-get update  # 更新包列表
        sudo apt-get install -y openssh-client sshpass  # 安装 openssh-client 和 sshpass

    - name: Run script on server  # 步骤3：在服务器上运行脚本
      env:
        SSH_HOST: ${{ secrets.SSH_HOST }}  # 从 GitHub Secrets 中读取 SSH 主机名
        SSH_USER: ${{ secrets.SSH_USER }}  # 从 GitHub Secrets 中读取 SSH 用户名
        SSH_PASSWORD: ${{ secrets.SSH_PASSWORD }}  # 从 GitHub Secrets 中读取 SSH 密码
      run: |
        # 使用 sshpass 和 SSH 密码进行 SSH 连接，并在服务器上运行脚本
        sshpass -p "$SSH_PASSWORD" ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST 'nohup /root/update.sh > /root/update_output.log 2>&1'

        # 捕获脚本的退出状态
        EXIT_STATUS=$?

        # 从服务器获取输出日志文件
        sshpass -p "$SSH_PASSWORD" scp -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST:/root/update_output.log .

        # 显示输出日志文件内容
        cat update_output.log

        # 输出脚本执行结果
        if [ $EXIT_STATUS -ne 0 ]; then
          echo "Script execution failed with exit status $EXIT_STATUS"  # 如果脚本执行失败，输出错误状态并退出
          exit $EXIT_STATUS
        else
          echo "Script executed successfully"  # 如果脚本执行成功，输出成功消息
        fi

```
:::