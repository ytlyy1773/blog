---
title: 如何使用linux云服务器
description: linux云服务器使用教程
outline: [2, 4]
---

# 如何使用linux云服务器

## 连接linux服务器

> 服务器连接linux需要修改一次服务器密码，之后重启实例，注意是重启实例不是重启服务器

#### 常见连接linux服务器的终端
1. Windows
    - cmd
    - powershell
2. Mac
    - 终端
3. 第三方
    - Xshell

```sh
# 链接linux服务器命令
ssr root@(ip)
# 示例
ssr root@110.110.110.110
# 清理服务器密钥，可以重新输入服务器密钥
ssh-keygen -R ip
```

## linu常用命令学习资源

* [请参考&nbsp;&nbsp;&nbsp;🚘](/other/system/linux/command.html)
* [菜鸟教程&nbsp;&nbsp;&nbsp;🚘](https://www.runoob.com/w3cnote/linux-common-command-2.html)
* [45个常用Linux 命令&nbsp;&nbsp;&nbsp;🚘](https://juejin.cn/post/6844903930166509581)
* [阿里云开发者社区&nbsp;&nbsp;&nbsp;🚘](https://developer.aliyun.com/article/842453)

## Ubuntu

#### Ubuntu是什么

* 著名的Linux发行版之一，基于Debian，以桌面应用为主的Linux发行版
* Ubuntu每六个月（即每年的四月与十月）发布一个新版本，长期支持（LTS）版本每两年发布一次。普通版本一般只支持9个月，但LTS版本一般能提供5年的支持。
* `是目前最多用户的Linux版本`

#### Ubuntu下载命令
```sh
apt install packagesName
```

> 下载报错

```bash
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
E: Unable to locate package nginx
```

使用 `apt update` 命令更新软件包列表。这将确保你拥有最新的软件包信息，在重新下载包。

```bash
apt update
```

#### 使用nginx教程

[请参考&nbsp;&nbsp;&nbsp;🚘](/other/blog/up/useNginx.html)

## CentOs

#### CentOs是什么

* CentOS是Linux发行版之一，它是来自于Red Hat Enterprise Linux依照开放源代码规定发布的源代码所编译而成。
* CentOs广泛用于 Web 服务器、数据库服务器、邮件服务器等
* `CentOs目前已经停止更新`

#### Ubuntu下载命令

```sh
yum install packagesName
```

#### CentOs下载git


```sh
yum install git
```

::: tip 文件位置
安装路径
```sh
/usr/share/git-core
```
:::

#### 使用git教程

[请参考&nbsp;&nbsp;&nbsp;🚘](/other/tools/gitCommand.html)

## 编写linux执行脚本

这里默认nginx的网页配置指向我们打包后的dist目录

> 只需执行脚本即可完成项目代码的拉取，nginx的重载

* root文件下新建脚本文件
```sh
# 新建脚本文件
touch update.sh
# 编辑脚本
vim update.sh
```
* 按 i 进入插入模式
* `/usr/local/code/demo` 为项目代码地址
::: tip 脚本内容
```sh
cd /usr/local/code/demo && git pull
nginx -s reload
```
:::
* 报错提示权限不足
::: warning 处理权限问题
```sh
chmod +x update.sh
```
:::
* 配置完毕需要重启服务器实例才会生效
* 执行脚本
```sh
./update.sh
```

## github自动执行服务器脚本

> 通过 `github avtions` 实现代码提交，服务器自动执行脚本更新服务器内容

[请参考&nbsp;&nbsp;&nbsp;🚘](/other/blog/up/useGithubActions.html#github执行linux系统脚本)


## 升级脚本

执行脚本可以实现的效果

* 拉取代码
    - 这里强烈建议使用 `ssh` 的方式链接github仓库。[ssh链接请参考&nbsp;&nbsp;&nbsp;🚘](/other/tools/gitCommand.html#ssh链接)
    - 不然使用https的方式 `git pull` 经常失败，导致达不到我们想要的效果
* 使用服务器的node进行打包
* 执行nginx更新命令

环境准备

* 服务器需要下载nvm
* 通过nvm下载打包需要的node
* 打包使用pnpm就下载pnpm

::: tip 脚本内容
```sh
# git pull的时候，代码远端采用ssh绑定
# 通过github actions执行脚本必须显式声明PATH

# 确保 pnpm 和 Node.js 在 PATH 中
export PATH=/root/.nvm/versions/node/v18.20.3/bin/:$PATH

# 定义重试函数
retry() {
  local n=1
  local max=5
  local delay=5
  while true; do
    "$@" && break || {
      if [[ $n -lt $max ]]; then
        ((n++))
        echo "Command failed. Attempt $n/$max:"
        sleep $delay;
      else
        echo "The command has failed after $n attempts."
        return 1
      fi
    }
  done
}

# 拉取代码并重试
retry git -C /path/to/core/blog pull

# 在脚本开头记录开始时间
echo "Script started at $(date)" >> /var/log/up_script.log
cd /path/to/core/blog && pnpm i && pnpm run build

# 你的脚本内容
echo "Executing script commands" >> /var/log/up_script.log

nginx -s reload

# 在脚本末尾记录结束时间
echo "Script finished at $(date)" >> /var/log/up_script.log
```
:::