---
title: 网站升级https
description: http的网站如何升级到https
---

# 网站升级https

> seo会优先收录具有ssl证书的

## 主流证书平台

* freessl：便宜实惠。&nbsp;&nbsp;[官网链接&nbsp;&nbsp;&nbsp;🚘](https://freessl.cn/)
* 阿里云
* 华为云

## 申请

> 可以先试用一下免费证书申请

证书域名添加自己的网站： `www.jwblog.cn`

进入订单详情里边，点击详情

出现3个值

- 主机记录
- 记录类型
- 记录值

## 获取证书

1. 进入服务器域名配置页面

2. 进入当前域名的解析设置页面
    - 当前已经存在一个服务器ip配置的主机记录
3. 添加一条主机记录
    - 将上面的3个值。主机记录、记录类型、记录值添加入相应的内容里边

这里配置完成之后生效需要一定的时间，生效之后我们可以获取证书

> 最快10-30分钟左右生效。如进行过DNS服务器名称修改，则一般需要24-48小时左右生效

点击下载证书。服务器平台我们使用的nginx，就下载nginx的证书格式

证书内容需要部署到服务器nginx里边

## 部署配置证书

进入服务器nginx配置文件夹

新建 `cert` 文件，linux执行 `mkdir cert`

cert文件夹下新建两个文件

> linux使用 `touch full_chain.pem` 命令新建文件

- full_chain.pem。填入证书文件的 `.pem` 文件的内容
- private.key。填入证书文件的 `.key` 文件的内容

::: tip nginx添加证书配置
```nginx
server {
    listen       443 ssl;
    server_name  www.jwblog.cn;

    if ($server_port !~ 443){
        rewrite ^(/.*)$ https://$host$1 permanent;
    }

    # 证书地址
    ssl_certificate  cert/full_chain.pem;
    ssl_certificate_key  cert/private.key;
    ssl_prefer_server_ciphers on;
}
```
:::

执行 `nginx -s reload`