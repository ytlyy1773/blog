<c-title title="iphone单机事件有300毫秒延迟的处理" />

> iphone手机H5页面有300毫秒延迟的处理

## 解释

::: info 一、禁用缩放
> html声明
```html
<meta name="viewport" content="width=device-width,user-scalable=no">
```
:::

::: info 二、FastClick插件
```js
1.npm i FastClick
2.<meta name="viewport" content="width=device-width, initial-scale=1">

document.addEventListener('DOMContentLoaded', function() {
  FastClick.attach(document.body);
}, false);

// vue在Mounted声明周期里边声明挂载
FastClick.attach(document.body);
```
:::

::: info 三、特殊场景可以用touchstart事件代替click
```js
<div @touchstart="handle(1)" @click="handle(2)">单机事件</div>

function handle(type) {
  // 这里必须做区分，安卓和iphone在这里区别还是很大的，安卓走click，苹果走touchstart
  const phone = navigator.userAgent;
  const isAndroid = phone.indexOf('Android') > -1 || phone.indexOf('Adr') > -1; //android安卓
  const isiOS = !!phone.match(/(i[^;]+;( U;)? CPU.+Mac OS X/); //ios苹果
  if(isAndroid && type === 2) {
    return
  },
  if(isiOS && type === 1) {}
}
```
:::

