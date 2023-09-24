import { defineConfig } from "vitepress";
import nav from "./config/nav";
import sidebar from "./config/sidebar";

export default defineConfig({
  title: "一条懒羊羊",
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
      src: "http://www.jwblog.cn/images/pc/user/user.png",
      width: 24,
      height: 24,
    },
    outline: {
      label: '本页目录',
    },
    sidebarMenuLabel: '菜单',
    socialLinks: [
      { icon: "github", link: "https://github.com/jiangwan1773/blog" },
    ],
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    footer: {
      message: '<a href="https://beian.miit.gov.cn/">豫ICP-备2023019165</a>',
      copyright: "版权所有 © 2023-至今 jiangwan1773",
    },
  },
});
