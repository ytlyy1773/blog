<c-title title="借助Object.defineProperty实现小程序的watch" />


## 示例

::: info 使用
```js
  onLoad(options) {
    // 将页面注入到setWatcher中
    getApp().setWatcher(this)
  },

  watch: {
    val(newVal, oldVal) {
      console.log('111::', newVal)
    },
    obj(newVal, oldVal) {
      console.log('222::', newVal)
    }
  }
```
:::


## 代码

::: info 一、方法封装
```js
// 自定义watch
function setWatcher(page) {
  const data = page.data;
  const watch = page.watch;
  Object.keys(watch).forEach(v => {
    const key = v.split('.'); // 将watch中的属性以'.'切分成数组
    let nowData = data; // 将data赋值给nowData
    for (let i = 0; i < key.length - 1; i++) { // 遍历key数组的元素，除了最后一个！
      nowData = nowData[key[i]]; // 将nowData指向它的key属性对象
    }
    const lastKey = key[key.length - 1];
    const watchFun = watch[v].handler || watch[v]; // 兼容带handler和不带handler的两种写法
    const deep = watch[v].deep; // 若未设置deep,则为undefine
    observe(nowData, lastKey, watchFun, deep, page); // 监听nowData对象的lastKey
  })
}

function observe(obj, key, watchFun, deep, page) {
  let val = obj[key];
  // 判断deep是true 且 val不能为空 且 typeof val==='object'（数组内数值变化也需要深度监听）
  if (deep && val != null && typeof val === 'object') {
    Object.keys(val).forEach(childKey => { // 遍历val对象下的每一个key
      observe(val, childKey, watchFun, deep, page); // 递归调用监听函数
    })
  }

  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    set: function (value) {
      // 用page对象调用,改变函数内this指向,以便this.data访问data内的属性值
      watchFun.call(page, value, val); // value是新值，val是旧值
      val = value;
      if (deep) { // 若是深度监听,重新监听该对象，以便监听其属性。
        observe(obj, key, watchFun, deep, page);
      }
    },
    get: function () {
      return val;
    }
  })
}

module.exports = {
  setWatcher
}
```
:::

::: info 二、挂载
```js
import { setWatcher } from './utils/custom/watch'

App({
  onLaunch() {
  },

  // watch 监听的封装，使用需要注入 onLoad(options) { getApp().setWatcher(this) }
  setWatcher(pageData) {
    setWatcher(pageData)
  },

  globalData: {
  }
})
```
:::