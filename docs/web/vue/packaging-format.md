---
title: 常见的打包格式
description: 探索Vue项目中的主流打包格式，包括ES6 Modules、CommonJS、UMD等，以及它们的特点、适用场景和配置方法，帮助开发者做出更合适的技术选型。
outline: [2, 3]
---

# 常见的打包格式

## 打包格式

### ESModules

`ES6 Modules`

这是ECMAScript 2015（ES6）提出的模块化标准，使用import和export关键字来导入和导出模块。这种格式在现代浏览器和Node.js中得到了支持，并且是Vue项目中推荐使用的 `模块化标准`。

### CommonJS

`CommonJS`

这是Node.js环境中的模块化标准，通过require和module.exports来导入和导出模块。虽然在Vue项目中不常用，但在一些工具和库中仍然可以看到。

### UMD

`UMD` **(Universal Module Definition)**

> 常用于打包vue的组件库

这种格式可以在任何JavaScript环境中使用，包括浏览器环境和Node.js环境。它允许模块在各种环境中工作，但通常不是Vue项目的首选，因为它不是最现代的模块化标准。

### System

`System.js`

这是一种动态模块加载器，它支持**多种模块化标准**，包括ES6 Modules、AMD和CommonJS。它允许在浏览器中动态加载模块。

### IIFE

`IIFE` **(Immediately Invoked Function Expression)**

这不是一个模块化标准，而是一种在浏览器中创建局部作用域的方式。它通常用于避免全局变量污染，但在现代Vue项目中使用较少。


## 总结

* 在打包工具（如Webpack、Rollup等）中，你可以指定输出的模块化格式。例如，Webpack允许你在配置文件中设置output部分的libraryTarget选项来定义打包后的格式，如umd、amd、system、commonjs2等。

* 在Vue项目中，`ESModules` 是最常用的打包格式，因为它提供了更好的树摇 `（tree-shaking）` 支持，可以减少最终打包文件的大小，并且是 `未来JavaScript` 模块化的方向。Vue CLI默认支持ES6模块，使得在Vue项目中使用ES6模块变得非常简单和直接。

选择哪种打包格式取决于你的目标环境和需求。例如，如果你需要在浏览器中使用模块，并且需要支持旧版本的浏览器，那么UMD可能是一个不错的选择。如果你的项目是一个库，并且希望它能够在各种环境中被使用，那么UMD也是一个通用的选择。然而，如果你正在构建一个现代的前端应用，并且主要关注现代浏览器，那么ES6 Modules可能是更好的选择。
