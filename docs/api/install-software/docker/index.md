---
title: Docker
description: Docker 是一个开源的容器化平台。它就像是一个轻量级的、独立运行的软件包，包含了运行某个应用程序所需的所有东西，包括代码、运行环境、系统工具、系统库等。
outline: [2, 3]
---

# Docker

## 链接

* [Docker install 官网](https://docs.docker.com/engine/install/)

* [Docker package 官网](https://hub.docker.com/search)

## Docker 简介

### 核心概念

* **容器**

    容器是 Docker 的核心元素。它就像是一个轻量级的、独立运行的软件包，包含了运行某个应用程序所需的所有东西，包括代码、运行环境、系统工具、系统库等。例如，一个运行着特定版本的 Web 服务器的容器，它能够在不同的计算机环境中保持一致的运行效果。

* **镜像**

    镜像是创建容器的基础。可以把它想象成容器的蓝图，它包含了容器启动时所需的文件系统和配置信息。例如，有一个 Ubuntu 操作系统的 Docker 镜像，基于这个镜像可以创建出多个运行 Ubuntu 系统的容器。

### 主要优势

* **可移植性**

    Docker 容器可以在任何安装了 Docker 引擎的环境中运行，无论是开发者的个人电脑、测试服务器还是生产服务器。这使得开发、测试和部署的过程变得更加流畅，消除了传统环境中因操作系统、软件库版本等差异导致的 “在我机器上可以运行” 的问题。

* **高效利用资源**

    与传统的虚拟机相比，Docker 容器更加轻量级。多个容器可以共享主机的操作系统内核，不需要为每个容器运行一个完整的操作系统，大大节省了系统资源，使得在相同的硬件资源上可以运行更多的应用程序。

* **快速部署和启动**

    容器的启动速度非常快，通常只需要几秒钟。这使得在需要快速扩展应用程序实例的场景下，如应对流量高峰，Docker 能够快速响应，迅速启动新的容器来处理增加的负载。

## 安装Docker

> Ubuntu 上安装 Docker 引擎

### 卸载旧版本

在安装 Docker Engine 之前，您需要卸载所有有冲突的软件包。

发行版维护者在 APT 中提供了 Docker 软件包的非官方发行版。您必须先卸载这些软件包，然后才能安装 Docker Engine 的正式版本。

要卸载的非官方软件包包括：

```md
docker.io
docker-compose
docker-compose-v2
docker-doc
podman-docker
```


此外，Docker Engine 依赖于`containerd`和`runc`。Docker Engine 将这些依赖项捆绑为一个包：`containerd.io`。如果您之前安装了`containerd`或`runc`，请卸载它们以避免与 Docker Engine 捆绑的版本冲突。

运行以下命令来卸载所有冲突的包：

```sh
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
```

### 添加Docker的签名密钥

在新的主机上首次安装 Docker Engine 之前，您需要设置 Docker 存储库。之后，您可以从存储库安装和更新 Docker。

* 设置 Docker 的apt存储库

    ```sh
    # Add Docker's official GPG key:
    sudo apt-get update
    sudo apt-get install ca-certificates curl
    sudo install -m 0755 -d /etc/apt/keyrings
    sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
    sudo chmod a+r /etc/apt/keyrings/docker.asc

    # Add the repository to Apt sources:
    echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
    $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update
    ```

### 查看可安装的Docker版本

```sh
apt-cache policy docker-ce
```


### 安装 Docker 包

::: code-group

```sh [最新版]
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

```sh [指定版本]
# List the available versions:
apt-cache madison docker-ce | awk '{ print $3 }'

5:27.1.1-1~ubuntu.24.04~noble
5:27.1.0-1~ubuntu.24.04~noble
...
```

:::

### 查看安装的Docker版本

```sh
sudo docker version
```

## 添加国内镜像源

国内使用Docker下载镜像时会出现网速慢的问题，所以需要添加国内镜像源。

* https://registry.docker - cn.com是 Docker 中国区官方镜像源。
* https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo 和 https://mirror.aliyuncs.com 是阿里云平台。
* https://mirror.ccs.tencentyun.com 是腾讯云平台。
* https://hub-mirror.c.163.com 是网易平台。
* https://docker.mirrors.ustc.edu.cn 是中国科学技术大学平台。

### 创建daemon.json文件，并添加镜像地址

首先运行 `sudo vim /etc/docker/daemon.json` 来创建daemon.json文件，然后将以下内容复制到 `daemon.json` 文件中。

```json
{
  "registry-mirrors": [
    "https://registry.docker-cn.com",
    "https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo",
    "https://mirror.ccs.tencentyun.com",
    "https://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn",
    "https://mirror.aliyuncs.com",
    "https://hub-mirror.c.163.com",
  ]
}
```

### 重启Docker

```sh
sudo service docker restart
```