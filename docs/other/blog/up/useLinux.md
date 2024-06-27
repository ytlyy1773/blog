---
title: 如何使用linux云服务器
description: linux云服务器使用教程
outline: [2, 4]
---

# 如何使用linux云服务器

## 连接linux服务器

> 服务器连接linux需要修改一次服务器密码，之后重启实例，注意是重启实例不是重启服务器

#### 常见连接linux服务器的终端
1. Windows
    - cmd
    - powershell
2. Mac
    - 终端
3. 第三方
    - Xshell

```sh
# 链接linux服务器命令
ssr root@(ip)
# 示例
ssr root@110.110.110.110
```

## linu常用命令学习资源

* [请参考&nbsp;&nbsp;&nbsp;🚘](/other/system/linux/command.html)
* [菜鸟教程&nbsp;&nbsp;&nbsp;🚘](https://www.runoob.com/w3cnote/linux-common-command-2.html)
* [45个常用Linux 命令&nbsp;&nbsp;&nbsp;🚘](https://juejin.cn/post/6844903930166509581)
* [阿里云开发者社区&nbsp;&nbsp;&nbsp;🚘](https://developer.aliyun.com/article/842453)


## CentOs

#### CentOs是什么

* CentOS是Linux发行版之一，它是来自于Red Hat Enterprise Linux依照开放源代码规定发布的源代码所编译而成。
* CentOs广泛用于 Web 服务器、数据库服务器、邮件服务器等
* `CentOs目前已经停止更新`

#### CentOs下载git

```sh
yum install nginx
```

::: tip 文件位置
安装路径
```sh
/usr/share/git-core
```
:::

#### 使用git教程

[请参考&nbsp;&nbsp;&nbsp;🚘](/other/tools/gitCommand.html)

## CentOs编写linux执行脚本

这里默认nginx的网页配置指向我们打包后的dist目录

> 只需执行脚本即可完成项目代码的拉取，nginx的重载

* root文件下新建脚本文件
```sh
touch update.sh
vim update.sh
```
* 按 i 进入插入模式
* `/usr/local/code/demo` 为项目代码地址
::: tip 脚本内容
```sh
cd /usr/local/code/demo && git pull
nginx -s reload
```
:::
* 报错提示权限不足
::: warning 处理权限问题
```sh
chmod +x update.sh
```
:::
* 配置完毕需要重启服务器实例才会生效

## github执行CentOs系统脚本

1. 编写 `github actions` 配置文件，提交代码自动执行服务器脚本

2. 作者只需要关注代码提交，其余均是自动化脚本

3. 在你的项目根目录下创建一个 .github/workflows 目录，并在其中创建一个 .yml 文件来定义GitHub Actions工作流，例如 run_script.yml。
    * 由于GitHub Actions运行在Ubuntu环境中，而Ubuntu使用apt-get包管理器而不是yum。为了在Ubuntu环境中运行并安装sshpass和openssh-client，你需要使用适合的包管理器和命令。
    * 请注意，使用密码认证相对 `不太安全`，因此要确保密码的复杂性和保密性。同时，为了避免密码泄露，不要在代码中直接包含密码，而是通过GitHub Secrets来管理。

[怎么配置GitHub Secrets&nbsp;&nbsp;&nbsp;🚘](/other/blog/up/useLinux.html)

::: info run_script.yml 文件
```sh
name: Run Root Script  # 定义工作流的名称

on:
  push:  # 当代码推送到指定分支时触发工作流
    branches:
      - master  # 监视 main 分支的变化
  workflow_dispatch:  # 允许手动触发工作流

jobs:
  run-script:
    runs-on: ubuntu-latest  # 使用Ubuntu环境来运行工作流，但连接到CentOS服务器

    steps:
    - name: Checkout code  # 步骤1：检出代码
      uses: actions/checkout@v2  # 使用官方的actions/checkout@v2动作，从仓库中检出代码

    - name: Install SSH client and sshpass  # 步骤2：安装 SSH 客户端和 sshpass
      run: |
        sudo apt-get update
        sudo apt-get install -y openssh-client sshpass  # 在Ubuntu环境中安装openssh-client和sshpass

    - name: Run script on server  # 步骤3：在服务器上运行脚本
      env:
        SSH_HOST: ${{ secrets.SSH_HOST }}  # 从 GitHub Secrets 中读取 SSH 主机名
        SSH_USER: ${{ secrets.SSH_USER }}  # 从 GitHub Secrets 中读取 SSH 用户名
        SSH_PASSWORD: ${{ secrets.SSH_PASSWORD }}  # 从 GitHub Secrets 中读取 SSH 密码
      run: |
        sshpass -p "$SSH_PASSWORD" ssh -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST './up.sh'
        # 使用 sshpass 提供密码，并通过 SSH 连接到服务器运行 /root/your_script.sh 脚本
        # sshpass -p "$SSH_PASSWORD": 使用 sshpass 工具自动输入 SSH 密码
        # ssh -o StrictHostKeyChecking=no: 禁用 SSH 主机密钥检查
        # $SSH_USER@$SSH_HOST: 使用提供的用户名和主机名连接到服务器
        # 'sudo /root/your_script.sh': 在连接的服务器上以 root 权限运行脚本
```
:::