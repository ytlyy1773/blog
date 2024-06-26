---
title: 如何使用linux云服务器
description: linux云服务器使用教程
outline: [2, 4]
---

# 如何使用linux云服务器

## 链接linux服务器

> 服务器连接linux需要修改一次服务器密码，之后重启实例，注意是重启实例不是重启服务器

#### 常见linux服务器的方式
* Windows
    - cmd
    - powershell
* Mac
    - 终端
* 第三方
    - Xshell

```sh
# 链接linux服务器命令
ssr root@(ip)
# 示例
ssr root@110.110.110.110
```

## linux的常用命令

::: details 文件管理
* ls: 列出当前目录下的文件和文件夹。
* cd: 改变当前目录。
* pwd: 显示当前工作路径。
* mkdir: 创建目录。
* rmdir: 删除空目录。
* touch: 创建文件或更新文件的时间戳。
* cp: 复制文件或文件夹。
* mv: 移动或重命名文件或文件夹。
* rm: 删除文件或文件夹。
* rm -rf: 删除文件夹以及子文件。
* cat: 显示文件内容。
* less: 分页查看文件内容。
* more: 逐行查看文件内容。
* head: 显示文件的前几行内容。
* tail: 显示文件的最后几行内容。
* find: 查找文件。
:::

::: details 系统管理
* whoami: 显示当前登录用户名。
* sudo: 以管理员身份执行命令。
* reboot: 重启系统。
* shutdown: 关闭系统。
* ps: 查看进程状态。
* kill: 终止进程。
* top: 显示系统资源使用情况。
* df: 显示磁盘空间使用情况。
* free: 显示内存使用情况。
* date: 显示日期和时间。
* cal: 显示日历。
:::

::: details 网络管理
* ping: 测试网络连接。
* ifconfig: 查看网络接口信息。
* netstat: 查看网络连接状态。
* ssh: 建立安全远程连接。
* wget: 下载文件。
* curl: 传输数据。
:::

::: details 其他常用命令
* man: 查看命令手册。
* help: 显示命令帮助信息。
* history: 查看命令历史记录。
:::

#### 学习资源

* [菜鸟教程&nbsp;&nbsp;&nbsp;🚘](https://www.runoob.com/w3cnote/linux-common-command-2.html)
* [45个常用Linux 命令&nbsp;&nbsp;&nbsp;🚘](https://juejin.cn/post/6844903930166509581)
* [阿里云开发者社区&nbsp;&nbsp;&nbsp;🚘](https://developer.aliyun.com/article/842453)


## 下载git

```sh
yum install nginx
```

::: tip 文件位置
安装路径
```sh
/usr/share/git-core
```
:::

#### 使用git

[请参考&nbsp;&nbsp;&nbsp;🚘](/other/tools/gitCommand.html)

## 编写linux执行脚本

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