---
title: 安装mysql
description: 包含Mac、Windows、Linux不同系统安装MySQL详细教程
outline: [2, 3]
---

# 安装mysql

## mysql常用命令

::: info 系统命令
* **Linux**

    启动 MySQL 服务:
    ```sh
    sudo systemctl start mysql
    ```

    关闭 MySQL 服务:
    ```sh
    sudo systemctl stop mysql
    ```

    重启 MySQL 服务:
    ```sh
    sudo systemctl restart mysql
    ```

* **Mac**

    启动 MySQL 服务:
    ```sh
    sudo /usr/local/mysql/support-files/mysql.server start
    ```

    关闭 MySQL 服务:
    ```sh
    sudo /usr/local/mysql/support-files/mysql.server stop
    ```

    重启 MySQL 服务:
    ```sh
    sudo /usr/local/mysql/support-files/mysql.server restart
    ```

* **Windos**

    启动 MySQL 服务:
    ```sh
    net start mysql
    ```

    关闭 MySQL 服务:
    ```sh
    net stop mysql
    ```

    重启 MySQL 服务:
    ```sh
    sudo /usr/local/mysql/support-files/mysql.server restart
    ```
:::

::: tip 通用
* 连接数据库
    ```sh
    mysql -u root -p
    ```
:::

## mac安装mysql

### 下载链接

&nbsp;&nbsp;&nbsp;&nbsp;[官网下载链接&nbsp;&nbsp;&nbsp;🚘](https://downloads.mysql.com/archives/community/)

### 安装步骤

* 选择自己电脑对应的版本和系统

    ![mysql版本](https://www.jwblog.cn/images/pc/api/mysql001.png)

* 点击软件安装

* 安装报错 <span class="cp-span-warn">无法打开“***App”,因为它不是从App Store下载</span>

    [查看解决方案&nbsp;&nbsp;&nbsp;🚘](/other/system/mac/installError.html)

* 安装mysql，设置密码（大于8位数）

    ![mysql安装](https://www.jwblog.cn/images/pc/api/mysql002.png)

* 一直点击下一步同意即可

### 配置mysql环境变量

* 打开终端，修改环境变量

    ```sh
    vim .bash_profile
    ```

    加入:

    ```ini
    export PATH=${PATH}:/usr/local/mysql/bin
    ```

    .zshrc文件:

    ```sh
    vim ~/.zshrc
    ```

    也是加入:

    ```ini
    export PATH=${PATH}:/usr/local/mysql/bin
    ```

* 然后执行命令使配置生效

    ```sh
    source ~/.zshrc
    ```

* 查看mysql安装生效
    - 需要 `重新` 打开一个终端再执行命令
    - 执行 `mysql --version` 出现相应的mysql版本号就行

### 使用mysql报错

* 启动mysql报错

    ::: info 启动mysql报错信息
    <div class="cp-span-warn" style="margin: 10px 0">ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock'</div>
    :::

    确保MySQL配置文件路径正确。打开配置文件并确认以下内容:

    ```sh
    sudo nano /usr/local/mysql/my.cnf
    ```

    添加或确认以下内容:

    ```ini
    [mysqld]
    socket = /usr/local/mysql/mysql.sock
    datadir = /usr/local/mysql/data
    port = 3306

    [client]
    socket = /usr/local/mysql/mysql.sock
    port = 3306
    ```


* 连接mysql报错

    ::: info 启动mysql报错信息
    <div class="cp-span-warn" style="margin: 10px 0">ERROR! The server quit without updating PID file (/usr/local/mysql/data/jiangwandeMac-mini.local.pid).</div>
    :::

    确保MySQL数据目录及其内容具有正确的权限和所有者

    ```sh
    sudo chown -R _mysql:_mysql /usr/local/mysql/data
    sudo chmod -R 755 /usr/local/mysql/data
    ```

## linux安装mysql

> 待定...

## windows安装mysql

> 待定...