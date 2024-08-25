---
title: 怎么使用nginx
description: 不同系统下怎么使用nginx
outline: [2, 3]
---

# 怎么使用nginx

## nginx介绍

> Nginx是一个 轻量级/高性能的反向代理Web服务器，它是由C语言写的，所以速度非常快、性能非常优秀。它的主要功能就是反向代理、负载均衡、配置SSL证书、防盗链、解决跨域问题、缓存、限流、动静资源分离等等

::: info nginx的常用 `配置文件` 说明
- `nginx.exe` nginx的启动文件，不推荐使用，建议使用命令行启动项目
- `html` html文件夹下是默认的项目路径
- `conf/nginx.conf` nginx的核心配置文件
- `sites-available` Ubunto下的 `nginx server` 配置文件
:::

::: tip nginx的 `常用命令`

> 命令都需要在 `nginx文件目录下` 执行

```bash
# windows server 启动 Nginx
start nginx
# linux启动 Nginx
nginx

# 停止 Nginx
nginx -s stop

# 重新加载配置（项目需要更新操作执行，最常用）
nginx -s reload
```
:::


## `windows server` 系统

::: info 如何使用nginx
- 进入官网下载好nginx文件，进行解压
- 在nginx文件目录下打开 `cmd` 终端
- 执行命令 `start nginx` 启动nginx
- 打开浏览器访问 `localhost` 可以看到 `Welcome to nginx!` 界面即成功
- 把自己的项目打包后的dist文件内容放入 `nginx/html` 文件夹下
- 执行 `nginx -s reload` 命令
- 刷新 `localhost` 预览自己的博客项目
:::

### 借助nginx实现自己的图片服务器
[参考链接](/other/blog/up/setup-oss.html)


## `linux` 系统

### Ubuntu下载nginx

使用 `apt update` 命令更新软件包列表。这将确保你拥有最新的软件包信息。

```sh
apt update
apt install nginx
```

::: tip 文件位置
- 配置文件路径
```sh
/etc/nginx/nginx.conf
# server配置文件
/etc/nginx/sites-available
```

- html默认文件路径
```sh
/var/www/html
```
:::

### CentOs下载nginx

```sh
yum install nginx
```
::: tip 文件位置
- 配置文件路径
```sh
/etc/nginx/nginx.conf
```

- html默认文件路径
```sh
/usr/share/nginx/html
```
:::

### 修改nginx配置

```sh
cd /etc/nginx
vim ./nginx.conf
```
::: warning vim模式无法编辑，需要进入 `插入模式`
* 要进入插入模式，请按 i 键。
* 要返回命令模式，请按 Esc 键。
:::

## nginx配置参考

Gzip压缩的配置也可以放在http对象下，和放在serve下略有区别

```nginx
# Nginx 主配置文件

# 使用Nginx用户
user nginx;

# 自动设置工作进程数量
worker_processes auto;

# 错误日志文件路径
error_log /var/log/nginx/error.log;

# PID 文件路径
pid /run/nginx.pid;

# 包含所有Nginx模块配置文件
include /usr/share/nginx/modules/*.conf;

events {
    # 设置每个工作进程的最大连接数
    worker_connections 1024;
}

http {
    # 日志格式定义
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    # 访问日志文件路径和使用的日志格式
    access_log  /var/log/nginx/access.log  main;

    # 启用高效文件传输
    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;

    # 设置长连接超时时间
    keepalive_timeout   65;

    # 增加类型哈希表的最大大小
    types_hash_max_size 4096;

    # 包含MIME类型映射表
    include             /etc/nginx/mime.types;

    # 包含所有Nginx虚拟主机配置文件
    include /etc/nginx/conf.d/*.conf;

    server {
        # 监听80端口（HTTP）和443端口（HTTPS）
        listen       80;
        listen       443 ssl;

        # 配置服务器名
        server_name  www.jwblog.cn;

        # 如果请求的端口不是443，则重定向到HTTPS
        if ($server_port !~ 443){
          rewrite ^(/.*)$ https://$host$1 permanent;
        }

        # SSL证书配置
        ssl_certificate  cert/full_chain.pem;
        ssl_certificate_key  cert/private.key;
        ssl_prefer_server_ciphers on;

        # 启用Gzip压缩
        gzip on;
        gzip_static on;
        gzip_min_length  1k; # 最小压缩文件大小
        gzip_buffers     4 16k; # 压缩缓冲区
        gzip_http_version 1.1; # HTTP版本
        gzip_comp_level 6; # 压缩级别
        gzip_types text/plain application/javascript application/x-javascript text/javascript text/css application/xml;
        gzip_vary on; # 根据请求头决定是否压缩
        gzip_proxied expired no-cache no-store private auth; # 压缩代理请求
        gzip_disable "MSIE [1-6]\."; # 禁用对IE 6及以下版本的压缩

        # 配置静态资源路径（如OSS存储的图片）
        location /images {
            root   /path/to/data/images;
        }

        # 配置网站主目录
        location / {
            root   /path/to/code/blog/docs/.vitepress/dist;
            index  index.html index.htm;
            # 处理单页面应用程序的路由问题
            try_files  $uri $uri/ /index.html;
        }
    }
}
```


## nginx常见问题

### 页面刷新内容丢失

> 刷新页面，路由url末尾会多拼接一个/

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /项目存放路径/open-api-blog/out;

    index index.html;

    # 将所有以斜杠结尾的请求重定向到没有斜杠的URL
    location ~ ^(.+)/$ {
        return 301 $scheme://$host$1;
    }

    location / {
        try_files $uri $uri.html $uri/ @remove_slash;
    }

    # 处理找不到文件时的情况
    location @remove_slash {
        rewrite ^(.+)/$ $1 permanent;
    }
}
```

### 客户端无法请求接口

> 在服务器可以访问到相应的接口服务，通过nginx转发的就不可以

```nginx
server {
    location ^~ /api/ {
        proxy_pass http://localhost:3000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

将上边的代码补充道nginx的配置文件中

<span class="cp-span-warn">location ^~ /api/</span> 是核心

* `proxy_pass http://localhost:3000/`;

    将匹配到的请求代理到 http://127.0.0.1:3000 这个地址。

    后面的 / 表示将请求的 URI 路径部分完整地传递给后端服务器。

* `proxy_set_header Host $host`;

    将原始请求的 Host 头部信息传递给后端服务器，以便后端服务器能够正确地处理请求。

* `proxy_set_header X-Real-IP $remote_addr`;

    将客户端的真实 IP 地址添加到 X-Real-IP 头部中，以便后端服务器能够获取客户端的真实 IP 地址。

* `proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for`;

    将客户端的 IP 地址以及之前经过的代理服务器的 IP 地址添加到 X-Forwarded-For 头部中。

* `proxy_set_header X-Forwarded-Proto $scheme`;

    将客户端使用的协议（http 或 https）添加到 X-Forwarded-Proto 头部中。