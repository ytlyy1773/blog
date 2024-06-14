---
title: 如何除去Windows的快捷方式小图标
description: 多年从事开发工作，整理的工具集
head:
  - - meta
    - name: keywords
      content: Windows 小图标
---

# 如何除去Windows的快捷方式小图标

## 去除前后对比
::: danger 去除之后（after）
<image src="http://www.jwblog.cn/images/pc/blog/update-after.jpg" class="show-img" />
:::
::: info 去除之前（before）
<image src="http://www.jwblog.cn/images/pc/blog/update-before.jpg" class="show-img" />
:::

## 具体实现
::: tip 步骤
- 1.新建`clear.txt`文件<br />
在win桌面新建一个`clear.txt`文件
- 2.txt文件写入以下内容<br />
```txt
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" /v 29 /d "%systemroot%\system32\imageres.dll,197" /t reg_sz /f
taskkill /f /im explorer.exe
attrib -s -r -h "%userprofile%\AppData\Local\iconcache.db"
del "%userprofile%\AppData\Local\iconcache.db" /f /q
start explorer
pause
```
- 3.修改txt文件后缀为.bat<br />
```txt
.txt >>> .bat
```
- 4.鼠标右键管理员执行.bat文件<br />
:::

<style lang="scss" scoped>
.show-img {
    margin: 10px 0;
}
</style>
