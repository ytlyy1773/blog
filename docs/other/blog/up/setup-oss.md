---
title: nginx搭建对象存储OSS
description: 在云服务器借助nginx搭建对象存储OSS，使用nginx做图片服务器
outline: [2, 3]
---

# 搭建个人的对象存储OSS

## 什么是对象存储OSS

对象存储 OSS (Object Storage Service) 是一种云存储服务，它提供了一种存储海量数据的安全、可靠、经济高效的方式。简单来说，它就像一个巨大的在线仓库，你可以用来存储各种类型的数字文件。

### 示例
* 图片：产品照片、用户头像、视频截图等
* 视频：电影、电视剧、短视频等
* 音频：音乐、播客、语音文件等
* 文档：合同、账单、用户手册等
* 代码：源代码、配置文件等
* 备份数据：数据库备份、系统日志等

### 特点

* 使用简单
* 例如小程序项目图片必须使用oss存储
* 大部分厂商提供的oss上传免费，存储空间不限大小，但是`下行流量收费`
    - 下行流量：访问这个图片的流量
    - 一张图片大小 `100kb`，那么访问一次这个图片就是 `100kb` 下行流量

## windows系统搭建oss

> 这里我们可以借助 `nginx` 做代理

### 修改nginx配置文件

> 访问链接 `/image` 的资源访问都被转接到 `alias 配置的文件地址目录下`

::: info `conf/nginx.conf` 文件
```nginx
location /image {
    alias C:/Users/picture/; # 使用 alias 而不是 root
}

location / {
    root html;
    index index.html index.htm;
}
```
:::

修改nginx配置文件，生效需要执行 `nginx -s reload`

### 如何看效果

- 在本地 `C:/Users/picture/` 文件夹下放入一张图片001.png
- 执行 `nginx -s reload`
- 验证 > 浏览器访问 `C:/Users/picture/001.png` 是否可以看到图片
- 验证 > `localhost/image/001.jpg` 可以访问就是转接成功
- 在自己的私人电脑通过浏览器访问图片，进行验证 > http://公网ip/image/001.jpg

如果可以通过公网ip可以访到图片，那么就可以了，后续域名绑定ip之后，我们就可以通过域名 `http://www.jwblog.cn/image/001.jpg` 进行访问

### 注意事项

- 这里配置图片的转接地址是用 `alias` 而不是 `root`
- 修改了nginx配置文件或者添加的新的图片，必须执行 `nginx -s reload`

## linux系统搭建oss

linux的oss搭建，nginx内容同windows一样

* Ubunto配置文件在
    ```nginx
    /etc/nginx/sites-available
    ```
* CentOs配置文件在
    ```nginx
    /etc/nginx/nginx.conf
    ```

添加oss配置代码

```nginx
location /image {
    root /path/to/images;
}
```