import { defineConfig } from "vitepress";
import nav from "./config/nav";
import sidebar from "./config/sidebar";


const chineLanguage = {
  docFooter: {
    prev: "上一篇",
    next: "下一篇",
  },
  sidebarMenuLabel: '菜单',
  outline: {
    label: '本页目录',
  },
  returnToTopLabel: '返回顶部'
}

export default defineConfig({
  title: "一条懒羊羊",
  // base: '/blog.io/', // 打包github page处理css问题
  themeConfig: {
    nav,
    sidebar,
    search: {
      provider: "algolia",
      options: {
        appId: "****",
        apiKey: "****",
        indexName: "****",
        placeholder: "该功能审核中...",
      },
    },
    logo: {
      src: "/public/image/logo.svg",
      width: 24,
      height: 24,
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/jiangwan1773/blog" },
    ],
    footer: {
      message: '<a href="https://beian.miit.gov.cn/">豫ICP-备2023019165</a>',
      copyright: "版权所有 © 2023-至今 jiangwan1773",
    },
    ...chineLanguage
  },
});

