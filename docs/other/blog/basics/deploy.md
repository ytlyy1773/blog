---
title: 博客的部署发布
description: 博客的部署发布工作流程，以及详细的介绍
outline: [2, 4]
---

# 博客的部署发布

## 前置准备工作

如果不想花钱可以使用 [`github pages`](/other/blog/up/usePage.html)

::: tip 所需
- 云服务器 （年花费200rmb左右）
- 域名 （年花费50rmb左右）
:::

## 云服务器

::: tip 注意事项
1. 初次使用云服务器建议最便宜的华为云先买一年试试
2. 初次购买建议 `windows server` 服务器，可以快速上手
3. 充分了解云服务器之后再换其他 `linux` 服务器之类的
3. 服务器配置 `2核2G3M` 够用了
:::

::: info 云服务器种类
- `阿里云`
    - 有过云服务器使用经验的首选，也是博主现用的服务器
    - 个人使用体验最好的
    - 服务器限制不多
- `华为云`
    - 据说有个28最便宜的一年
- `腾讯云`
:::

#### 关于费用问题
- 博主目前服务器年消费在200左右
- 每个服务器厂商都有新用户活动，618或双11活动，可以活动购买
- 新用户活动用完了就换一家厂商的服务器即可，不行也可以用家人的身份信息购买

## 域名

> 推荐第一次使用的话可以先买一个便宜的`.top`，`.dev`等，`华为云`、`阿里云`等均有售卖

::: info 云服务器种类
1. `三大顶级域名`
    - `.com` 商业机构（commercial），诸如`apple.com`, `google.com`
    - `.net` 网络服务提供商（network）诸如网站后台接口地址
    - `.org` 非营利组织（organization） 诸如`vuejs.org`
2. `国家顶级域名`
    - `.cn` 中国
    - `.us` 美国
    - `.jp` 日本
:::

## 配置nginx

> 建议先用windows电脑本地先熟悉一下 `nginx` 的使用

[官网直通车 🚘](https://nginx.org/en/)

::: info nginx的常用配置文件说明
- `nginx.exe` nginx的启动文件，不推荐使用，建议使用命令行启动项目
- `html` html文件夹下是默认的项目路径
- `conf/nginx.conf` nginx的核心配置文件
:::

::: tip nginx的常用命令

> 命令都需要在 `nginx文件目录下` 执行

```bash
# 启动 Nginx
start nginx

# 停止 Nginx
nginx -s stop

# 重新加载配置（项目需要更新操作执行，最常用）
nginx -s reload
```
:::

#### windows系统下nginx的使用
- 进入官网下载好nginx文件，进行解压
- 进入nginx文件目录下打开 `cmd` 或者 `powershell`
- 执行命令 `nginx` 启动nginx
- 打开浏览器启动访问 `localhost` 可以看到 `Welcome to nginx!` 界面即成功
- 把自己的项目打包后文件放入 `nginx/html` 文件夹下
- 执行 `nginx -s reload` 命令重新访问 `localhost` 预览自己的博客项目

## 备案

- 服务器是香港或者国外是不需要进行备案的
- 服务器在国内是需要进行备案
- 备案周期大概是 `15-30` 天

[关于如何备案，请参考文章](/other/blog/up/operate.html)

## 部署到云服务器

> 这里假设购买的是 `windows server` 云服务器

- 买完服务器，在自己电脑操作使用过nginx
- 在服务器下载nginx，在服务器的浏览器里测试nginx是否可用
- 代码上传云服务器，建议使用`git`的方式
- 这里需要注意`vitepress`打包后`dist打包文件`也需要上传的代码仓库
- 云服务器电脑安装git工具，拉取代码
- 两种方式启动博客项目
    - `1.`将dist目录复制到 `nginx/html` 文件夹下
    - `2.`修改nginx配置文件，将项目地址映射到git拉取的dist目录下
    - 推荐使用地址映射，可以省去复制粘贴代码
- 重载nginx，在服务器浏览器访问`localhost`看网站效果

## 如何使用linux云服务器

[请参考](/other/blog/up/useLinux.html)