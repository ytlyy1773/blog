# 使用阿里云npm镜像加速

> 阿里云npm镜像地址链接

[阿里云官方镜像站&nbsp;&nbsp;&nbsp;🚘](https://npmmirror.com/)

## 什么是npm?

`npm(node package manager)` 是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题.

**常见的使用场景有以下几种：**

* 允许用户从NPM服务器下载别人编写的第三方包到本地使用。

* 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。

* 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

* 由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入 "npm -v" 来测试是否成功安装。命令如下，出现版本提示表示安装成功

> npm可以理解为一个命令行工具，它的使命就是帮你为项目自动安装所依赖的开发包。

maven是java包依赖管理工具，node.js包管理工具是npm。可以这么去理解。

`http://registry.npmjs.org` 是 `npm` 的默认的开发包仓库，npm 默认的下载地址在国外，下载速度较慢。但是切换成国内的镜像源包的下载速度会很快。

## 查看npm源地址设置

```sh
npm config get registry
```

**输出官方镜像地址**

```sh
https://registry.npmjs.org
```

## 配置阿里巴巴镜像地址

[阿里云官方镜像站&nbsp;&nbsp;&nbsp;🚘](https://npmmirror.com/)

npm阿里云地址： `http://www.npmmirror.com`

```sh
npm config set registry https://registry.npmmirror.com
```

## 解除镜像并恢复到官方源

> 重新设置npm下载地址为npm官方地址即可

```sh
npm config set registry https://registry.npmjs.org
```
