---
title: 如何除去Windows的快捷方式小图标
description: 多年从事开发工作，整理的工具集
---

# 如何除去Windows的快捷方式小图标

## 去除前后效果对比
::: danger 去除之后（after）
<image src="https://www.jwblog.cn/images/blog/update-after.jpg" class="show-img" />
:::
::: info 去除之前（before）
<image src="https://www.jwblog.cn/images/blog/update-before.jpg" class="show-img" />
:::

## 具体实现
::: tip 步骤
- 新建`clear.txt`文件

    > 在win桌面新建一个`clear.txt`文件

- txt文件写入以下脚本内容

    ```bash
    reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" /v 29 /d "%systemroot%\system32\imageres.dll,197" /t reg_sz /f
    taskkill /f /im explorer.exe
    attrib -s -r -h "%userprofile%\AppData\Local\iconcache.db"
    del "%userprofile%\AppData\Local\iconcache.db" /f /q
    start explorer
    pause
    ```

- 修改txt文件后缀名为 `.bat`

    > 变为可执行文件

    ```bash
    .txt >>> .bat
    ```

- 鼠标右键 `管理员` 执行.bat文件

:::

<style lang="scss" scoped>
.show-img {
    margin: 10px 0;
}
</style>
