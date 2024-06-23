import { defineConfig } from "vitepress";
import nav from "./config/nav";
import sidebar from "./config/sidebar";

const chineLanguage = {
  docFooter: {
    prev: "上一篇",
    next: "下一篇",
  },
  sidebarMenuLabel: "菜单",
  outline: {
    label: "目录",
  },
  returnToTopLabel: "返回顶部",
};

export default defineConfig({
  title: "一条懒羊羊",
  description: "一条懒羊羊的博客",
  lang: "zh-CN",
  // 打包配置来源子deploy.yml文件，  deploy.yml：这是一个github的自动化打包配置文件
  base: process.env.BUILD_ENV === "github" ? "/blog/" : "/", // 打包兼容github page处理
  head: [
    [
      "meta",
      { name: "author", content: "一条懒羊羊, jiangwan1773@163.com, 中国深圳" },
    ],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "8-lfYPcn5-i4zwxIJonLSNdzZ02BmOE7_EGEEwEFOa4",
      },
    ], // jwblog.cn
    ["meta", { name: "baidu-site-verification", content: "codeva-ntA7Ws8139" }], // jwblog.cn
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-ZDDKYX0QGS",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZDDKYX0QGS');`,
    ],
  ],
  sitemap: {
    hostname:
      process.env.BUILD_ENV === "github"
        ? "https://jiangwan1773.github.io/blog"
        : "https://www.jwblog.cn",
  },
  // mpa: true,
  lastUpdated: true,
  themeConfig: {
    nav,
    sidebar,
    search:
      process.env.BUILD_ENV === "github"
        ? {
            provider: "local",
          }
        : {
            provider: "algolia",
            options: {
              appId: "2TMERJKE3X",
              apiKey: "281977021315cf1bb8e8678408f9c891",
              indexName: "一条懒羊羊",
              placeholder: "请输入关键词",
            },
          },
    logo: {
      src: "/image/logo.svg",
      width: 24,
      height: 24,
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/jiangwan1773/blog" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 32 32" width="32"><script xmlns=""/><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#c71d23" r="16"/><path d="m24.0987698 14.2225144h-9.0863697c-.4362899.000207-.7900048.3538292-.790326.7901191l-.0005173 1.9752185c-.0003277.4363707.353328.7902117.7896987.790326.0000712 0 .0001424 0 .0002135-.0002135l5.5317648-.0000461c.4363708-.0000102.7901221.3537352.7901257.790106 0 .0000022 0 .0000044-.0000066.0000066v.1975077.1975318c0 1.3091122-1.0612451 2.3703573-2.3703573 2.3703573h-7.5067195c-.4363081-.0000218-.790009-.353713-.7900429-.7900211l-.0002069-7.5059917c-.0001014-1.3091122 1.0611145-2.3703865 2.3702267-2.3704226.0000217 0 .0000435 0 .0000653.0000653h11.0602463c.4361793-.0004902.7898484-.35394.7906091-.79011894l.0012251-1.97521881c.0007606-.43637034-.3527683-.79033806-.7891389-.79060871-.0001634-.0000001-.0003268-.00000015-.0004901.00048976h-11.0617654c-3.27278051 0-5.92589329 2.65311278-5.92589329 5.9258933v11.0612755c0 .4363707.35374837.7901191.7901191.7901191h11.65447149c2.9454379 0 5.3331872-2.3877493 5.3331872-5.3331872v-4.5430682c0-.4363707-.3537484-.7901191-.7901191-.7901191z" fill="#fff"/></g><script xmlns=""/></svg>',
        },
        link: "https://gitee.com/jiangwan1773/blog",
      },
    ],
    footer: {
      message: '<a href="https://beian.miit.gov.cn/">豫ICP-备2023019165</a>',
      copyright: "版权所有 © 2023-至今 jiangwan1773",
    },
    ...chineLanguage,
  },
});
