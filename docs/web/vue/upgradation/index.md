---
title: Vue2项目打包方式webpack升级vite
description: Vue2项目打包方式webpack升级vite
---

<c-title title="Vue2项目打包方式webpack升级vite" />

## 配置文件

::: info vite.config.ts
::: details 源代码
<<< ./vite.config.ts
:::

## 升级结果

::: info 提升
```js
1.升级完成项目启动由约3min多减少约2s内
2.代码更新效果时间约10s减少到无感
3.代码包体积减少1/4以上
4.打包时间减少2/5左右
```
:::

## 升级流程

::: info 一、安装依赖
```js
npm install vue@2.7.14
npm install vite
npm install vite-plugin-vue2
npm install vite-plugin-svg-sprite
npm install vitejs/plugin-legacy
npm install -D sass
```

| plugin        | 说明  |
| ------------- |:-------------:|
| vue@2.7.14      | vue2已经是最终版了，直接升级到2.7.14，这样才可以兼容vite同样<br />elementUI应该也是最终版了，建议升级最终版 |
| vite     | 使用vite打包 |
| vite-plugin-vue2     | 兼容vue2语法 |
| vitejs/plugin-vue2-jsx     | 兼容vue2的jsx语法 |
| vitejs/plugin-legacy     | 传统浏览器兼容 |
| sass     | vite打包需要安装sass，版本过低的sass需要升级sass版本 |
:::

::: info 二、修改打包命令
> package.json文件
```json
"scripts": {
    "dev": "vite --mode dev",
    "build:dev": "vite build --mode dev",
    "build:test": "vite build --mode test"
},
```
:::

::: info 三、修改vite打包入口
> index.html
```html
<script type="module" src="/src/index.js"></script>
```
:::

::: info 四、根目录新建vite.config.ts文件
> 顶部配置文件
:::

::: info 五、遇到的问题
> 1.css的`/deep/`
<div>vite打包css不可以使用sass的/deep/语法</div>
<div>全局替换成<span class="cp-span">::v-deep</span></div>

> 2.webpack中使用require引入文件
<div>vite中需要改成<span class="cp-span">import</span>引入</div>

> 3.svg字体图标的批量导入变更
```js
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
```

> 4.盗版浏览器
<div>升级的项目是对外的，遇到了<span class="cp-span">2345浏览器非官网版本</span>白屏</div>
<div>报错<span class="cp-span-warn">Uncaught ReferenceError: globalThis is not defined</span></div>
<div>粗暴的解决方案（暂未有其他解决方案）</div>

```js-vue
// 在index.html文件添加
<script>
    if (globalThis === 'undefined') {
        var globalThis = window
    }
</script>
```
:::


## 使用说明
::: info vue-router的使用
vue2可以使用`ref`和`reactive`，没有使用`proxy`实现，还是用了`defineProperty`的`getter, setter`
> 先看一下`vue3` + `vue-router ^4.0`
```js-vue{2}
<script>
    import { useRoute } from 'vue-router';
    const route = useRoute();
    route.path // /home
</script>
```
> 如何在`vue2.7 + vite`中使用`vue-router`
```js-vue{2}
<script>
    import { useRoute } from 'vue-router/composables'
    const route = useRoute();
</script>
```
:::