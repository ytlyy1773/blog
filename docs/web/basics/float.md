---
title: CSS清楚浮动
description: CSS清楚浮动的几种方式
---

# CSS清楚浮动

> 得益于flex布局的强大，虽然float已经算是过去式，但是你依旧要会

## 兼容性最好-的伪元素方法 :after

> 给浮动的父盒子提供一个伪元素

```css
.father:after {
  content: " ";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
```


## 额外标签，不建议使用（low且掉档次）

> 直接在浮动的盒子后边加一个空的标签

```html
<div style="clear: both;"></div>
```

