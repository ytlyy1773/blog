---
title: vitepress配置algolia
description: 在vitepress项目里边怎么配置algolia
outline: [2, 4]
---

# vitepress配置algolia

## 申请algolia资源

#### 注意事项

* 您必须是该网站的所有者，或至少有更新其内容的权限
* 网站必须是一个开源项目或技术博客的技术文档
* 第一次注册可能需要一定时间通过，注意邮箱查收相关邮件同意注册

#### 注册algolia账号

[algolia官网&nbsp;&nbsp;&nbsp;🚘](https://dashboard.algolia.com)

点击控制台 `Apis keys` 申请Apis keys

![申请algolia 的 Apis keys](https://www.jwblog.cn/images/pc/blog/algolia_index.png)

复制我们需要的内容到vitepress配置文件夹里边

![Apis keys所需key位置](https://www.jwblog.cn/images/pc/blog/algolia_key.png)

- `Application ID` 填入 `options.appId`
- `Search-Only API Key` 填入 `options.apiKey`

## 配置使用algolia

> algolia可能需要很久才会自动索引，可以尝试手动索引网站

::: tip config.mts/defineConfig配置
```ts
{
    search:
      process.env.BUILD_ENV === "github"
        ? {
            provider: "local",
          }
        : {
            provider: "algolia",
            options: {
              appId: "2T********3X", // 应用程序 ID
              apiKey: "************408f9c****", // 公钥
              indexName: "blog",
              placeholder: "请输入关键词",
            },
          },
}
```
:::

## 推送索引自动化脚本

* 项目根目录下新建algolia的配置文件 `crawlerConfig.json`

::: details `crawlerConfig.json` 配置文件
```json
{
  "index_name": "一条懒羊羊",
  "start_urls": ["http://www.jwblog.cn"],
  "rateLimit": 8,
  "maxDepth": 10,
  "selectors": {
    "lvl0": {
      "selector": "",
      "defaultValue": "Documentation"
    },
    "lvl1": ".content h1",
    "lvl2": ".content h2",
    "lvl3": ".content h3",
    "lvl4": ".content h4",
    "lvl5": ".content h5",
    "content": ".content p, .content li",
    "lang": {
      "selector": "/html/@lang",
      "type": "xpath",
      "global": true
    }
  },
  "selectors_exclude": [
    "aside",
    ".page-footer",
    ".next-and-prev-link",
    ".table-of-contents"
  ],
  "custom_settings": {
    "attributesForFaceting": ["lang", "tags"]
  },
  "js_render": true
}
```
:::

> 实现自动推送索引到algolia

* .github/workflows/目录下新建 `algolia.yml` 文件

::: info algolia.yml
```yml
name: algolia  # 工作流名称

on:
  push:
    branches:
      - master  # 触发条件：当推送到 master 分支时触发此工作流

jobs:
  algolia:
    runs-on: ubuntu-latest  # 在最新版本的 Ubuntu 环境中运行此作业

    steps:
      - uses: actions/checkout@v3  # 步骤1：使用 GitHub 官方的动作检出代码库

      - name: Get the content of algolia.json as config  # 步骤2：读取 crawlerConfig.json 文件内容作为配置
        id: algolia_config
        run: echo "config=$(cat crawlerConfig.json | jq -r tostring)" >> $GITHUB_OUTPUT
        # 读取 crawlerConfig.json 文件的内容并转换为字符串格式，然后将其保存到 GitHub Actions 的输出变量中

      - name: Push indices to Algolia  # 步骤3：将索引推送到 Algolia
        uses: signcl/docsearch-scraper-action@master
        env:
          APPLICATION_ID: ${{ secrets.APPLICATION_ID }}  # 从 GitHub Secrets 中读取 Algolia 应用程序 ID
          API_KEY: ${{ secrets.API_KEY }}  # 从 GitHub Secrets 中读取 Algolia API 密钥
          CONFIG: ${{ steps.algolia_config.outputs.config }}  # 使用上一步骤中读取的配置
        # 使用 signcl/docsearch-scraper-action 动作，将配置推送到 Algolia

```
:::
