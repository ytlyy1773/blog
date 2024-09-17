---
title: Vue项目常用插件
description: 精选Vue项目开发中必备的插件和工具库，涵盖UI组件、开发辅助、表格处理、数学计算和性能优化等多个方面，助力开发者提高效率和项目质量。
outline: [2, 3]
---

# Vue项目常用插件

### UI篇

`Element Plus`

> 兼容性最好，使用最广泛

`Ant Design of Vue`

> 未来的设计标准，缺陷很明显社区维护BUG较多，代码开发上略有缺陷

`Vant`

> 移动端H5首选，不适用于混合开发模式

### 开发辅助篇

`VueUse`

> Vue组合式API的实用工具集

`unplugin-auto-import`

> 自动按需引入 vue｜vue-router｜pinia 等的 api

`unplugin-vue-components`

> 自动按需引入 第三方的组件库组件(elementUI) 和 我们自定义的组件

`pinia-plugin-persistedstate`

> 持久化pinia数据，中文官网，使用简单，绝对的后起之秀

`vuex-persistedstate`

> 持久化pinia｜vuex数据，vue2时代的产物，主要用于vuex

`Lodash`

> 封装了常用的js函数，不过使用率在下降

`Day.js`

> 操作和显示日期和时间

### table篇

`vxe-table`

> 复杂表格业务需求首选

### js计算篇

`bignumber.js`

> 推荐使用

`mathjs`

> 强大且易于使用，使用最广泛的js计算库

`big.js`

> 一个小型，快速，易于使用的库，用于任意精度的十进制算术运算

#### 对比

| 包        | 特点  | 缺点 |
| ------------- | :------------- |:------------- |
| `bignumber.js`      | 专为大数运算设计，支持任意精度的加减乘除、开方等运算 | 功能相对简单，不支持复杂数学运算 |
| mathjs     | 功能非常全面，支持符号计算、矩阵运算、复数运算等。除了高精度计算，还提供了丰富的数学函数 | 包大小相对较大，如果仅需高精度计算，引入整个库可能有些臃肿。 |
| big.js     | 与 bignumber.js 类似，但 API 设计有所不同 | 功能相对简单 |

### 优化篇

`vite-plugin-compression`

gzip压缩，需要nginx开启GZIP，打包之后可以明显提高项目的打开速度

类似还有br压缩，不过br压缩存在兼容性问题，压缩效率比Gzip压缩能提高15%

`vite-plugin-imagemin`

本地静态图片压缩

### 扩展篇

`vite-plugin-vue-inspector`

快捷键开启和关闭，点击page元素可以打开对应的.vue文件

`avue`

搬砖神器, 更加贴合企业开发, 包含了大量基于vue + elementui的常用组件库以及插件库。
