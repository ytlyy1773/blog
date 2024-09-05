---
title: SEO优化
description: vitepress项目博客如何做好seo优化工作
outline: [2, 3]
---

# SEO优化

## seo是什么

> 搜索引擎优化 (SEO) 可以指让您的网站更易于搜索引擎处理的过程

[谷歌对seo的介绍](https://developers.google.com/search/docs?hl=zh-cn)

## 结构层面

`URL` 结构应 `简单明了`，包含关键词，便于用户和搜索引擎理解

* **使用短 URL**： 短 URL 更容易被用户记忆和分享。

* **避免特殊字符**： URL 中避免使用特殊字符，如空格、标点符号等。

* **使用 (短横线命名) `kebab-case` 命名**： `kebab-case` 更容易被搜索引擎识别。

* **关键词优化**： 将关键词自然地融入到 URL 中。

* **避免重复内容**： 确保每个 URL 对应唯一的内容。

## 代码层面

- 使用语意化的标签，如：`<header>`、`<section>`、`h1`等

- 一个页面应该只具有一个 `h1` 标签

```md
# 这是md的h1标签写法   >>>   <h1>这是md的h1标签写法</h1>
##### 这是md的h6标签写法   >>>   <h1>这是md的h6标签写法</h1>
```

- 页面的 `head` 标签内要有多个具有相应意义的 `meta` 标签

    - Title Tag是重要的直接排名影响因素

```js
---
title: SEO优化
description: vitepress项目博客如何做好seo优化工作
---
```

- 不需要无用的 `keywords` 标签

    - keywords已被谷歌弃用了

    - 有些文章依旧还在推荐这个属性

**禁止使用index.md/index.html**

* 除了首页使用index，其余一律不使用index

* 使用index是一个重定向的目录，seo不会收录这样的目录

::: danger 坏的示例
```yml
# 项目的文件目录结构
web/vue/upgradation/index.md

# 项目打包后的结果
https://www.jwblog.cn/web/vue/upgradation/
```
:::

::: tip 好的示例

> 推荐路由命名使用 `kebab-case` 格式，有利于用户体验和搜索引擎抓取。

```yml
# 项目的文件目录结构
web/vue/upgradation/up-vite.md

# 项目打包后的结果
https://www.jwblog.cn/web/vue/upgradation/up-vite.html
```
:::


::: warning 影响seo
```yml
# 谷歌的seo会收录以下路由
https://www.jwblog.cn/web/vue/upgradation/up-vite.html

# 谷歌的seo检测重定向不会收录
https://www.jwblog.cn/web/vue/upgradation/
```
:::


## 网页元数据

网页的 `<head>` 部分包含了关于网页的元数据,这些数据虽然不会直接显示在页面上，但对于浏览器、搜索引擎和其他 web 服务来说非常重要。

```ts
head: [
    [
      "meta",
      { name: "author", content: "一条懒羊羊, jiangwan1773@163.com, 中国深圳" },
    ],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["link", { rel: "icon", href: "https://www.jwblog.cn/image/favicon.svg", type: "image/svg+xml" }],
    ["link", { rel: "icon", href: "https://www.jwblog.cn//image/favicon.png", type: "image/png"  }],
    ["meta", { name: "og:title", content: "一条懒羊羊的博客" }],
    ["meta", { name: "og:image", content: "https://www.jwblog.cn/image/logo.svg" }],
    ["meta", { name: "og:description", content: "网页的内容介绍" }],
    // 如下配置省略...
    ...谷歌seo认证,
    ...百度seo认证,
    ...必应seo认证
]
```

**`<meta>`标签**

**\<meta\>** 标签提供关于 HTML 文档的元信息，比如描述、关键词、作者、最后修改时间等。这些信息不会显示在页面上，但会被浏览器、搜索引擎等读取和利用。

**`<link>`标签**

**\<link\>**  标签用于在当前文档中链接外部资源，比如样式表、图标、RSS feed 等。

## 配置层面

* `Gzip压缩`

* `ssl凭证`

* `robots.txt`

* `网站地图 Sitemap`

## Gzip压缩

* Gzip压缩，是一种网站速度优化技术，也是一把 `SEO优化` 利器

* `低投入高收益`，平民作家必须开启，可以显著提升网站访问速度

**优点**

* 提升网站加载速度: GZIP压缩能够`显著`减少网页文件的大小，从而缩短页面加载时间，提升用户体验。

* 提高用户参与度: 用户更倾向于访问加载速度快的网站，更快地加载速度可以提高用户参与度，降低跳出率。

* 提升搜索引擎排名: 谷歌等搜索引擎将网站加载速度作为排名因素之一，GZIP压缩能够提升网站速度，从而`间接`提升网站排名。

* 节省带宽成本: 压缩后的网页文件占用的带宽更少，可以节省服务器带宽成本。

### vitepress使用Gzip压缩

> vitepress不需要额外的安装插件，其他`非vitepress`项目需使用Gzip压缩依赖才可以

### nginx配置gzip压缩

```nginx
http {
    # 启用 gzip
    gzip on;

    # 压缩级别（1-9）
    gzip_comp_level 6;

    # 最小压缩文件大小
    gzip_min_length 256;

    # Nginx 作为反向代理时启用压缩
    gzip_proxied any;

    # 缓冲区大小
    gzip_buffers 16 16k;

    # 支持的 HTTP 版本
    gzip_http_version 1.1;

    # 压缩类型
    gzip_types
        application/atom+xml
        application/javascript
        application/json
        application/ld+json
        application/manifest+json
        application/rss+xml
        application/vnd.geo+json
        application/vnd.ms-fontobject
        application/x-font-ttf
        application/x-web-app-manifest+json
        application/xhtml+xml
        application/xml
        font/opentype
        image/bmp
        image/svg+xml
        image/x-icon
        text/cache-manifest
        text/css
        text/plain
        text/vcard
        text/vnd.rim.location.xloc
        text/vtt
        text/x-component
        text/x-cross-domain-policy;

    # 对不同的浏览器采取不同的压缩方式
    gzip_vary on;

    # 禁用 IE6 及以下版本的 gzip 功能
    gzip_disable "MSIE [1-6]\.(?!.*SV1)";

    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
```

**配置说明**

* **gzip on**: 开启 gzip 压缩。

* **gzip_min_length 1100**: 只有大于 1100 字节的文件才会被压缩。

* **gzip_buffers 16 8k**: 设置用于压缩的内存缓冲区。

* **gzip_http_version 1.1**: 只为 HTTP 1.1 版本的请求启用 gzip。

* **gzip_comp_level 6**: 设置压缩级别，1-9 之间，数字越大压缩比越高，但消耗的 CPU 也越多。

* **gzip_types**: 指定需要压缩的文件类型。

* **gzip_vary on**: 在响应头中添加 Vary: Accept-Encoding，告诉浏览器根据 Accept-Encoding 请求头来缓存不同的压缩版本。

## 缓存配置

Nginx 可以通过缓存静态文件来减少对后端服务器的请求，从而提高响应速度。

### 文件系统缓存

> 优化Nginx打开文件的性能

```nginx
http {
  open_file_cache max=10000 inactive=60s;
  open_file_cache_valid 30s;
  open_file_cache_min_uses 2;
}
```

* **max=10000**: 最多缓存10000个文件的描述符。

* **inactive=60s**: 如果60秒内没有被访问,则从缓存中删除。

* **open_file_cache_valid 30s**: 每30秒检查一次缓存中的文件是否仍然存在。

* **open_file_cache_min_uses 2**: 文件必须至少使用2次才会被缓存。

### 代理缓存

> 设置Nginx的代理缓存

```nginx
http {
  proxy_cache mycache;
  proxy_cache_path /var/cache/nginx/proxy levels=1:2 keys_zone=mycache:10m inactive=20m;
}
```

* **proxy_cache mycache**: 启用名为"mycache"的缓存。

* **proxy_cache_path**: 设置缓存的具体参数。

    * **/var/cache/nginx/proxy**: 缓存文件的存储路径。

    * **levels=1:2**: 设置缓存文件的目录层级。

    * **keys_zone=mycache:10m**: 设置共享内存区域的名称和大小。

    * **inactive=20m**: 如果20分钟内没有被访问,则从缓存中删除。

这些配置可以 `显著提高` Nginx的性能,特别是在处理静态文件和代理请求时。但请注意,缓存设置可能会占用服务器的磁盘空间和内存,所以请根据您的服务器资源和实际需求来调整这些参数。

## SSL凭证

> SSL就是网址`https:// 的「s」`，代表网站资讯很安全，有加密、有认证。

### 装SSL的好处?

* Google 于2017年1月宣布装SSL的网站会给比较好的网站权重并优先收录，所以安装SSL可以得到`较好的排名`。

* 有装SSL时浏览器会出现安全(或锁头图案)，没安装会出现不安全的提示。

* 网站资料万一被截走，装SSL的网站资料是加密的，不会因此泄漏个资。

* 装SSL(OV、EV) 可以证明网站是合法组织，提高网站的可信度，SSL(DV)仅以网址认证。

* 如果装SSL因为网站加密不够严谨造成网站损失，是可以向SSL公司提出赔偿的。

### SSL推荐

* `freessl`&nbsp;&nbsp;&nbsp;&nbsp;[官网直通车&nbsp;&nbsp;&nbsp;🚘](https://freessl.cn/)

    - 便宜好用

    - 可以免费适用3月

    - 不嫌麻烦可以一直用免费的，只是需要3个月申请一下

* 国内各大云服务器厂商

    - 阿里云

    - 腾讯云

    - 华为云

[如何配置ssl证书&nbsp;&nbsp;&nbsp;🚘](/other/blog/up/up-https.html)

## robots.txt

> robots.txt 文件规定了搜索引擎抓取工具可以访问您网站上的哪些网址

谷歌对于 `robots` 文件的详细介绍 &nbsp;&nbsp;&nbsp;[官网直通车&nbsp;&nbsp;🚘](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=zh-cn)

### `robots.txt` 文件常用配置

```bash
User-agent: *
Allow: /
# https://www.jwblog.cn换成自己的域名
Sitemap: https://www.jwblog.cn/sitemap.xml
```

## 网站地图 `Sitemap`

> `Sitemap` 对 `SEO` 排名没有帮助，但可以让 `Google` 早一点收录网站，避免网站架构不健康或者某些因素导致网站内容未被收录

也就是我们 `robots.txt` 文件里边的 `Sitemap` 配置项

**Sitemap.xml文件示例**
::: details `sitemap.xml` 文件示例
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
        <loc>https://www.jwblog.cn/</loc>
        <lastmod>2024-04-16T15:19:06.000Z</lastmod>
    </url>
    <url>
        <loc>https://www.jwblog.cn/oneself/contactInformation.html</loc>
        <lastmod>2024-06-14T18:15:35.000Z</lastmod>
    </url>
    <url>
        <loc>https://www.jwblog.cn/oneself/weChatCode.html</loc>
        <lastmod>2024-06-14T18:15:35.000Z</lastmod>
    </url>
    <url>
        <loc>https://www.jwblog.cn/other/computer/win/ClearIcon.html</loc>
        <lastmod>2024-06-14T18:15:35.000Z</lastmod>
    </url>
    ...
</urlset>
```
:::

**vitepress 自动生成sitemap文件**

[官网使用介绍&nbsp;&nbsp;&nbsp;🚘](https://vitepress.dev/zh/guide/sitemap-generation)

`VitePress` 提供开箱即用的配置，为站点生成 `sitemap.xml` 文件。要启用它，请将以下配置内容添加到 `.vitepress/config.js` 中：

```ts
export default {
  sitemap: {
    hostname: 'https://example.com'
  }
}
```

如果在配置中使用 base，则应将其追加到 hostname 选项中：

```ts
export default {
  base: '/my-site/',
  sitemap: {
    hostname: 'https://example.com/my-site/'
  }
}
```

## 如何管控seo

> 帮助监控和维护您的网站在 `搜索引擎` 搜索结果中的展示情况以及排查问题

**搜索引擎**

| 平台 | 2024全球使用占比 | 说明 |
| --- | --- | --- |
| Google  | 91.47％ | 全球最大的搜索引擎，需要科学上网，无广告。而且可以添加各种丰富的插件提升使用体验。强烈推荐 `Gemini for Google` 插件可以免费使用ai工具 |
| Bing  | 3.42％ | 全球份额仅次于Google，国内支持，无广告 |
| ~~百度~~  | 0.83％ | 国内最大的搜索引擎，广告满天飞，~~`不入流`~~ 的代表 |

**管控平台**

- 强烈推荐使用[Google Search Console&nbsp;&nbsp;🚘](https://search.google.com/search-console)，具有相当完善的功能，使用体验拉爆某度
- 有详细网站分析使用报告
- 详细的网页索引说明

`Google Search Console` 可以看到网站的核心网页指标分析，`用于验证网站seo效果和问题`

| 平台 | 链接 |
| --- | --- |
| Google  | [Google Search Console&nbsp;&nbsp;🚘](https://search.google.com/search-console) |
| Bing  | [Webmaster Tools&nbsp;&nbsp;🚘](https://www.bing.com/webmasters/home) |
| 百度  | [百度站长平台&nbsp;&nbsp;🚘](https://ziyuan.baidu.com/site/index#/) |
