---
title: pm2使用教程
description: pm2是什么，pm2的作用，linux怎么使用pm2
outline: [2, 3]
---

# pm2

[pm2官网](https://pm2.keymetrics.io/)

**PM2** 是 **node** 进程管理工具，可以利用它来简化很多 node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等

## 安装

**前置条件**

- 安装pm2需要node环境

```sh
$ npm install pm2@latest -g
# or
$ yarn global add pm2
```

- 启动

```sh
pm2 start app.js
```

## 常用命令

* **查看进程**: pm2 list

* **启动所有进程**: pm2 startup

* **删除某个进程**: pm2 delete <进程ID>

* **停止某个进程**: pm2 stop <进程ID>

* **重启所有进程**: pm2 restart all

* **删除所有进程**: pm2 delete all

* **停止所有进程**: pm2 stop all

* **查看日志**: pm2 logs

* **保存进程列表**: pm2 save

## pm2启动项目

* 普通启动

```sh
pnpm run start
```

* pm2启动

```sh
pm2 start pnpm -- run start
```

## 保活

> 重启服务器，pm2启动的项目可以自行启动，也是我们使用pm2最主要的原因

### 配置自动启动项目

> 配置 PM2 使其在系统重启后自动启动项目

执行 `pm2 list` 查看项目已经在pm2启动列表里边

执行

```sh
pm2 startup systemd
```

这个命令会生成一个 systemd 服务文件，并给出一个命令供你复制和运行。

::: details 脚本生成示例
```sh
pm2 startup systemd
[PM2] Init System found: systemd
Platform systemd
Template
[Unit]
Description=PM2 process manager
Documentation=https://pm2.keymetrics.io/
After=network.target

[Service]
Type=forking
User=root
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
Environment=PATH=/root/加密加密加密加密/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin
Environment=PM2_HOME=/root/.pm2
PIDFile=/root/.pm2/pm2.pid
Restart=on-failure

ExecStart=/加密加密加密加密/ons/node/v18.20.4/lib/node_modules/pm2/bin/pm2 resurrect
ExecReload=/加密加密加密加密/ons/node/v18.20.4/lib/node_modules/pm2/bin/pm2 reload all
ExecStop=/加密加密加密加密/ons/node/v18.20.4/lib/node_modules/pm2/bin/pm2 kill

[Install]
WantedBy=multi-user.target

Target path
/etc/systemd/system/pm2-root.service
Command list
[ 'systemctl enable pm2-root' ]
[PM2] Writing init configuration in /etc/systemd/system/pm2-root.service
[PM2] Making script booting at startup...
[PM2] [-] Executing: systemctl enable pm2-root...
[PM2] [v] Command successfully executed.
+---------------------------------------+
[PM2] Freeze a process list on reboot via:
$ pm2 save

[PM2] Remove init script via:
$ pm2 unstartup systemd
```

:::

运行以下命令来完成 PM2 的启动配置：

```sh
sudo env PATH=$PATH:${环境变量 PATH} ${PM2 的完整路径} startup systemd -u root --hp /root
```

示例

```sh
sudo env PATH=$PATH:/root/加密加密加密加密/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin /加密加密加密加密/ons/node/v18.20.4/lib/node_modules/pm2/bin/pm2 startup systemd -u root --hp /root
```

命令的解析如下

- sudo: 以超级用户权限运行命令。
- env PATH=$PATH:...: 设置环境变量 PATH，包含了所有必要的目录。
- /root/.nvm/versions/node/v18.20.4/lib/node_modules/pm2/bin/pm2: PM2 的完整路径。
- startup systemd: 指示 PM2 创建 systemd 启动脚本。
- -u root: 指定运行 PM2 的用户为 root。
- --hp /root: 指定 root 用户的主目录。

运行这个命令后，PM2 将被配置为在系统启动时自动运行

运行保存脚本

```sh
pm2 save
```

这将保存当前的 PM2 进程列表，确保在系统重启后这些进程会被自动重启

要使 PM2 在系统启动时自动启动，运行

```sh
sudo systemctl enable pm2-<username>
```

按照示例需要执行

```sh
sudo systemctl enable pm2-root
```
