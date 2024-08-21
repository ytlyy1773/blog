---
title: vue组件发布npm
description: 二次封装或开发vue新组件，发布到npm
outline: [2, 3]
---

# vue组件发布npm

> 举例vue2的npm组件包发布

## 环境准备

* [Nodejs](https://nodejs.org/zh-cn)环境
    - 示例使用node14版本
* [Vue CLI](https://cli.vuejs.org/zh/)脚手架
    - 安装 `Vue CLI` 脚手架
```sh
npm install -g @vue/cli
```

## 创建项目

通过 `Vue CLI` 新建一个vue2的项目

```sh
vue create vue-components-package
```

## 开发组件

### 编写vue组件

::: info 新建 `src/packages/HelloWord.vue` 文件

> 需要注意的是，组件必须有 `name`，这将会是用户使用的组件名称

```vue
<template>
  <div class="page">
    <div class="text-red">红色</div>
    <div>text：{{ text }}</div>
    <div class="text-blue">蓝色</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    text: {
        type: String,
        default: '默认文案'
    },
  },
};
</script>

<style scoped>
.text-red {
    color: red;
}

.text-blue {
    color: blue;
}
</style>
```
:::

### 添加打包配置文件

::: info 新建 `src/index.js` 文件

> 需要注意的是，组件必须有 `name`，这将会是用户使用的组件名称

```js
import HelloWorld from "@/packages/HelloWorld.vue";

const components = [HellowWorld];

const install = (Vue, options) => {
  if (install.installed) return;
  install.installed = true;
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

// 如果是直接引入的vue.js方式，则会挂到window下
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  // 使用Vue.use必须具有install方法
  install,
  ...components,
};
```
:::

### 添加打包命令

在项目根目录下的 `package.json` 文件添加 `build:package` 打包命令

```json
  "scripts": {
    "serve": "vue-cli-service serve",
    "build:package": "vue-cli-service build --target lib --name vue-components-package --dest lib src/index.js"
  },
```

这里的 `–target lib` 是 vue-cli 自带的打包命令，此命令会将入口文件打包成一个库码，具体可参考官网说明vue-cli官方文档

* `–name` 指的是打包后的文件名
* `–dest` 指文件夹的名称

紧跟的 `src/index.js` 指的是执行上文新建的index文件，暴露vue的install方法

## 验证组件功能和css样式

* 修改根目录下的 `App.vue` 文件

```vue
<template>
  <div id="app">
    <HelloWorld text="你好世界" />
  </div>
</template>

<script>
import HelloWorld from "./package/HelloWorld.vue";

export default {
  name: "App",

  components: {
    HelloWorld
  }

};
</script>
```
* 启动项目
```sh
npm run serve
```

## 打包

```sh
npm run build:package
```

项目打包成功之后会新增 `lib` 文件夹

lib文件夹下包含多个js文件一个html文件

### 添加包文件入口

修改 `package.json` 文件

```json
"main": "lib/vue-components-package.umd.js"
```

## 调试

### 发布本地连接包

```sh
npm link
```

### 新建测试项目

重新构建一个vue项目用于测试组件包

在测试项目的目录终端执行

```sh
npm link vue-components-package
```

### 引入开发的组件包

::: info 新项目的 main.js 文件引入开发的组件包
```js
import Vue from "vue";
import App from "./App.vue";

import HelloWorld from "vue-components-package";
Vue.use(HelloWorld);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```
:::

在 `App.vue` 中使用

```vue
<template>
  <div class="container">
    <HelloWorld text="测试组件" />
  </div>
</template>
```

然后运行项目，看打包内容是否正确

```sh
npm run serve
```

### 其他方案

新建文件夹 `node_modules/vue-components-package`

采用复制的方式把 `lib` 和 `package.json` 文件复制到对应项目的 `node_modules/vue-components-package` 文件夹下

修改测试项目跟目录 `package.json` 文件的 `dependencies` 字段，手动添加包信息，注意包名和版本号要和拷贝过来的一致

```json
"dependencies": {
    "vue-components-package": "^1.0.0",
},
```

## 发布npm包

[发布npm包教程](/web/knowledge/npmPublish.html)
