const imgUrl = Object.freeze('http://www.jwblog.cn/images/')

import type { Theme } from 'vitepress'
import DefaultTheme from "vitepress/theme";
// 引入antd组件库
import "ant-design-vue/dist/reset.css";
import { Button, Input, Modal } from "ant-design-vue";
// 自定义主题颜色
import "./custom.css";
// 自定义组件
import { useComponents } from "./useComponents.mjs";
 // 导入你选择的高亮样式
// import 'highlight.js/styles/atom-one-dark.css'
// import hljs from 'highlight.js'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Button)
    app.use(Input)
    app.use(Modal)
    useComponents(app)
    app.config.globalProperties.$filterImgUrl = (val: string) => {
      return val.indexOf('http') !== -1 ? val : `${imgUrl}${val}`
    }
  },
} as Theme

