export default {
  "/web/basics": getWebBasics(),
  "/web/vue": getWebVue(),
  "/web/weChat": getWebWeChat(),
  "/web/H5": getWebH5(),
  "/web/link": getWebLink(),
  "/other/tools": getOtherTools(),
};

function getWebLink () {
  return [
    {
      text: "开发辅助",
      items: [
        { text: "GitHub徽标", link: "web/link/auxiliary.md" }
      ],
    }
  ]
}

function getWebBasics() {
  return [
    {
      text: "html+css+javaScript",
      items: [
        { text: "常用的正则表达式使用", link: "web/basics/regExp.md" },
        { text: "前端加密安全", link: "web/basics/codeSafety.md" },
        { text: "Promise理解", link: "web/basics/codePromise.md" },
        { text: "优雅的代码-es6实践", link: "web/basics/es6Practice.md" },
        { text: "浏览器的回流与重绘", link: "web/basics/ReflowRepaint.md" },
      ],
    },
    {
      text: "javaScript",
      items: [
        { text: "JS数组的清空", link: "web/basics/clearArray.md" },
        { text: "JS实现文件下载", link: "web/basics/download.md" },
        { text: "javascript(js)判断对象是否包含某个 key", link: "web/basics/containKey.md" },
        { text: "js判断内容是不是是NaN", link: "web/basics/isNaN.md" }
      ],
    },
    {
      text: "css",
      items: [
        { text: "CSS实现0.5px的线", link: "web/basics/line.md" },
        { text: "CSS处理一行或多行文字超出用省略号", link: "web/basics/hidden.md" },
        { text: "CSS解决纯英文文字不会自动换行", link: "web/basics/wrap.md" },
        { text: "CSS清楚浮动", link: "web/basics/float.md" },
        { text: "CSS绘制三角形", link: "web/basics/triangle.md" },
        { text: "CSS控制虚线间距虚线长度", link: "web/basics/dashedLine.md" },
        { text: "CSS使用sass语法", link: "web/basics/useSass.md" }
      ],
    },
    {
      text: "html",
      items: [
        { text: "HTML元素之间有间隙", link: "web/basics/gap.md" },
        { text: "Html预览word，pdf，excel", link: "web/basics/preview.md" },
      ],
    },
  ]
}

function getWebVue() {
  return [
    {
      text: "vue",
      items: [
        { text: "Vue项目常用插件", link: "web/vue/plugins.md" },
        { text: "Vue + ts项目技巧", link: "web/vue/projectTemplate.md" },
        { text: "vue2项目打包方式webpack升级vite", link: "web/vue/upgradation/index.md" },
        { text: "Vue2重置data里边的数据", link: "web/vue/resetData.md" },
        { text: "妙用Computed", link: "web/vue/useComputed/index.md" },
        { text: "js获取电脑ip", link: "web/vue/local.md" },
        { text: "在css中使用vue的变量", link: "web/vue/sassLinkage.md" },
      ],
    },
    {
      text: "Component",
      items: [
        { text: "Component-封装上传图片", link: "web/vue/uploadImage/index.md" },
        { text: "Component-封装dialog弹窗", link: "web/vue/dialog/index.md" },
        { text: "Component-封装图片预览功能", link: "web/vue/preview/index.md" },
      ],
    },
    {
      text: "BUG",
      items: [
        { text: "BUG-el-table设置高度之后合计行不显示解决方法", link: "web/vue/bugTable.md" },
      ],
    },
  ]
}

function getWebWeChat() {
  return [
    {
      text: "微信小程序",
      items: [
        { text: "借助Object.defineProperty实现小程序的watch", link: "web/weChat/codeWatch.md" },
        { text: "小程序自定义顶部导航栏组件", link: "web/weChat/customNav.md" },
        { text: "小程序生命周期", link: "web/weChat/lifeCycle.md" },
        { text: "微信小程序全局添加分享功能", link: "web/weChat/share.md" },
        { text: "onShow生命周期拿到onLoad生命周期里边的路由传参", link: "web/weChat/getPageOptions.md" },
        { text: "微信小程序出现弹窗页面禁止滚动", link: "web/weChat/prohibitScrolling.md" },
        { text: "微信request的二次封装", link: "web/weChat/apiRequest.md" },
      ],
    },
  ]
}

function getWebH5() {
  return [
    {
      text: "H5",
      items: [
        { text: "font-size在移动端设备上字体变大的问题", link: "web/H5/fontDeformation.md" },
        { text: "iphone单机事件有300毫秒延迟的处理", link: "web/H5/delay.md" },
        { text: "iphone底部安全距离", link: "web/H5/safeDistance.md" },
        { text: "限制浏览器返回", link: "web/H5/limitBack.md" },
      ],
    },
  ]
}

function getOtherTools() {
  return [
    {
      text: "tools",
      items: [
        { text: "电脑工具合集", link: "other/tools/index.md" }
      ],
    },
    {
      text: "前端",
      items: [
        { text: "前端开发工具", link: "other/tools/web/index.md" }
      ],
    },
  ]
}