const imgUrl = Object.freeze('https://www.jwblog.cn/images/')

import type { Theme } from 'vitepress'
import DefaultTheme from "vitepress/theme";
import 'animate.css';
import MyLayout from '../custom/components/MyLayout.vue'
// 引入antd组件库
import "ant-design-vue/dist/reset.css";
import { Button, Input, Modal } from "ant-design-vue";
// 自定义主题颜色
import "../custom/css/index.scss";

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.use(Button)
    app.use(Input)
    app.use(Modal)
    app.config.globalProperties.$filterImgUrl = (val: string) => {
      return val.indexOf('http') !== -1 ? val : `${imgUrl}${val}`
    }
  },
} as Theme

