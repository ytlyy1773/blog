---
title: Mysql
description: MySQL 是一个广泛使用的开源关系型数据库管理系统（RDBMS）。它以其稳定性、可靠性和高性能而著称，适用于从小型项目到大型企业级应用的各种场景。
outline: [2, 3]
---

# Mysql

## 链接

[docker下载Mysql官网](https://hub.docker.com/_/mysql)

## 什么是 MySQL

MySQL 是一个广泛使用的开源关系型数据库管理系统（RDBMS）。它以其稳定性、可靠性和高性能而著称，适用于从小型项目到大型企业级应用的各种场景。

## 主要特点

* 数据存储与管理

    以表格的形式组织和存储数据，通过行和列的结构清晰地定义数据的属性和值。例如，在一个存储用户信息的表中，可能有 “用户 ID”“姓名”“年龄” 等列，每一行对应一个具体的用户记录。

* 数据一致性与完整性

    支持多种约束条件，如主键约束（确保每一行数据的唯一性）、外键约束（建立不同表之间的关联关系）和非空约束等。例如，在订单管理系统中，订单表中的 “订单 ID” 可以设置为主键，确保每个订单都有唯一标识；而订单表中的 “用户 ID” 可以与用户表的 “用户 ID” 建立外键关联，保证数据的一致性和完整性。

* 高效的查询处理

    具备强大的查询语言（SQL - Structured Query Language），用户可以通过编写复杂的 SQL 查询语句来快速检索、过滤、排序和聚合数据。例如，要查询某个时间段内销售额超过一定金额的订单信息，可以使用 SQL 语句从订单表中筛选出符合条件的数据。

* 可扩展性

    可以方便地进行水平扩展（通过添加更多的服务器节点来分担负载）和垂直扩展（升级服务器的硬件资源，如增加内存、CPU 等）。在面对不断增长的数据量和并发访问量时，能够根据实际需求灵活地调整系统的性能。

## 下载Mysql镜像

```sh
docker pull mysql
```

`检查当前所有Docker下载的镜像`

```sh
docker images
```

## 创建Mysql容器

### 简单容器

> 简单的运行 MySQL 容器

```sh
docker run --name your_mysql -e MYSQL_ROOT_PASSWORD=12345678a -p 3306:3306 -d --restart=always mysql
```

* `--name mysql`：给容器命名为 “mysql”。

* `-e MYSQL_ROOT_PASSWORD=123456`：设置 MySQL 的 root 用户密码为 "12345678a"（实际使用中请设置更复杂的密码）。

* `-p 3306:3306`：映射容器的 3306 端口到主机的 3306 端口。

* `-d`：以守护进程（后台）模式运行容器。

* `--restart=alway`s：确保容器在 Docker 启动时自动启动。

* `mysql`：指定使用的 MySQL 镜像（Docker 会从官方仓库拉取最新的 MySQL 镜像，如果本地没有的话）。

### 企业容器

> 企业环境中运行 MySQL 容器

```sh
docker run -d \
--name mysql \
--restart=always \
-p 3306:3306 \
-v /data/mysql/data:/var/lib/mysql \
-v /data/mysql/conf:/etc/mysql/conf.d \
-v /data/mysql/logs:/var/log/mysql \
-e MYSQL_ROOT_PASSWORD=your_secure_password \
mysql:latest
```

**指令解释**

* `docker run -d`：以守护进程（后台）模式运行容器。

* `--name mysql`：为容器指定一个容易识别的名称为 “mysql”。

* `--restart=always`：设置容器在 Docker 守护进程启动时自动启动，即使因为某些原因容器停止了，也会自动重新启动，这确保了开机自启动。

* `-p 3306:3306`：将容器内的 3306 端口（MySQL 默认端口）映射到宿主机的 3306 端口，使得外部可以访问容器中的 MySQL 服务。

* `-v /data/mysql/data:/var/lib/mysql`：将宿主机的/data/mysql/data目录挂载到容器内 MySQL 数据存储目录/var/lib/mysql，确保数据持久化存储，防止容器删除后数据丢失。

* `-v /data/mysql/conf:/etc/mysql/conf.d`：挂载配置文件目录，方便在宿主机上进行 MySQL 配置文件的管理与修改。

* `-v /data/mysql/logs:/var/log/mysql`：挂载日志目录，便于在宿主机上查看和管理 MySQL 运行过程中产生的日志。

* `-e MYSQL_ROOT_PASSWORD=your_secure_password`：设置 MySQL 的 root 用户密码，确保数据库的安全性。这里需要将your_secure_password替换为实际的强密码。

* `mysql:latest`：指定要运行的 MySQL 镜像，这里使用最新版本的 MySQL 镜像。