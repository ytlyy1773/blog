<c-title title="在css中使用vue的变量" />

## 原理

::: info 原理
```js
使用vue的动态行内样式，也就是 :style="{ '--color': color }"
动态绑定一个css变量--color
在class中使用 var() 函数去使用这个变量
```
:::

## 示例

::: info 使用示例

<strong>html</strong>
```html
<div class="demo-text" :style="{ '--color': color }">杰夫贝佐斯</div>
<div @click="change">change</div>
```

<strong>js</strong>
```js
const color = ref()
const change = () => {
  color.value = 'red'
}
```

<strong>css</strong>
```css
.demo-text {
  color: var(--color);
}
```
:::

