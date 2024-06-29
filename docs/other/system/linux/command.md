---
title: linux常用命令
description: linux系统的常用命令
---

# linux常用命令

## 个人常用linux命令

```bash
ssh-keygen -R ip # 清理服务器密钥
unzip file.zip -d /etc/nginx # 解压文件到指定目录
touch myscript.sh # 新建脚本
mkdir fileName # 新建文件夹
mv moveFileName /path/to/package # 移动文件夹到某个位置
rm -rf fileName # 删除文件夹和文以及子内容
scp fileName root@ip:/root/ # 本地传递文件到服务器/root目录下
```

## linux文件管理常用命令
::: info 文件管理
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

## linux系统管理常用命令
::: info 系统管理
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

## linux网络管理常用命令
::: info 网络管理
* ping: 测试网络连接。
* ifconfig: 查看网络接口信息。
* netstat: 查看网络连接状态。
* ssh: 建立安全远程连接。
* wget: 下载文件。
* curl: 传输数据。
:::

## linux其他常用命令
::: info 其他常用命令
* man: 查看命令手册。
* help: 显示命令帮助信息。
* history: 查看命令历史记录。
:::
