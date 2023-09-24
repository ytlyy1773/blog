import { defineConfig } from "vitepress";
import nav from "./config/nav";
import sidebar from "./config/sidebar";

export default defineConfig({
  title: '一条懒羊羊',
  description: "A VitePress Site",
  themeConfig: {
    nav,
    sidebar,
    logo: { src: 'http://www.jwblog.cn/images/pc/user/user.png', width: 24, height: 24, },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
