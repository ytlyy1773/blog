<c-title title="优雅的代码-es6实践" />

> 代码不规范，亲人两行泪

## 示例

::: info 一、简化if（ && 或 三元运算符）
```js
// 第一种情况 (简化if)
if( a === true ) { return console.log('返回是个真') }
// 简写
eg:2
if(a) return console.log('返回是个真')
// 缺点
const a = 'string'; if (a)的值也是true，字符串不是假

eg:2
a && console.log('返回是个真')
// 缺点
只能走if循环的true，不能走else

// 第二种情况 (巧用对象)
<div>
  {{ status === 1 ? '杰夫贝佐斯' : '斯嘉丽约翰逊' }}
</div>
如果status多个呢???
status:1 >>> '杰夫贝佐斯'
status:2 >>> '斯嘉丽约翰逊'
status:3 >>> '贾斯汀比伯'
status:4 >>> '马斯克'
function filterStatus(val: keyof {
  1: number
}) {
  const obj = {
    1: '杰夫贝佐斯',
    2: '斯嘉丽约翰逊',
    3: '贾斯汀比伯',
    4: '马斯克'
  }
  return obj[val] || val
}

// 第三种情况
if( a > 0 ) { isBoon = true } else { isBoon = false }
// 简写
a > 0 ? (isBoon = true) : (isBoon = false)
不适合复杂的if判断，不能return，
如果需要return那就 return isBoon = a > 0 ? true : false

// 进阶用法
&&= ||= ??=
1.&&=
if (props.code) {
  props.code = 200
}
简写
props.code &&= 200
2.||=
if (!props.code) {
  props.code = 200
}
简写
props.code ||= 200
3.||=
if (props.code === null || props.code === undefined) {
  props.code = 200
}
简写
props.code ??= 200
```
:::

::: info 二、批量命名
```js
注意：能用const关键字定义变量就用const关键字
let valA = '斯嘉丽约翰逊';
let valB = '艾玛沃特森';
let valC = '泰勒斯威夫特';
let valD = '克里斯汀斯图尔特';
const [ a, b, c, d] = ['斯嘉丽约翰逊', '艾玛沃特森', '泰勒斯威夫特', '克里斯汀斯图尔特']
```
:::

::: info 三、解构赋值
```js
const obj = {
  name: '杰夫贝佐斯',
  age: 48,
}

eg:1.
const { name } = obj // 可以避免obj.name，多次使用obj.，来调用name属性，
console.log(name) // 打印结果-- 杰夫贝佐斯

eg:2.
this.name = 'aaa' , this.obj = 'bbb' , this.arr = 'ccc'

<正确使用>
const { name, obj, arr, ... } = this
name = 'aaa' , obj = 'bbb' , arr = 'ccc'

const ren = {
  name: '马斯克',
  age: 54,
  sex: '男',
  identity: '世界首富',
}

// 解构赋值搭配展开运算符
const { name, ...newObj } = ren
console.log('结构常用变量，剩余变量包装一个新的对象-------',name,newObj) // ↓↓
结构常用变量，剩余变量包装一个新的对象-------,马斯克, {age: 54,sex: '男',identity: '世界首富',}

// 多重结构
const moreRen = {
  name: '马斯克',
  age: 54,
  sex: '男',
  identity: '世界首富',
  company: {
    cart: '特斯拉',
    space: 'SpaceX'
  }
}

const { company: { cart } } = moreRen
console.log('cart------',cart) // 特斯拉
```
:::

::: info 四、includes检测（代替if判断,vue路由常用,白名单权限...）
```js
includes是恒等价于===的逻辑判断
也就是说 1 === '1' 返回false 等价于 [1].includes('1') 返回false

eg: 错误示范
if (val === '/login' || val === '/about' || val === '/home' || val === '/index') {
    console.log('vue需要放行token白名单的路由')
}

eg:<正确写法>
const whiteList = [ '/login', '/about', '/home', '/index' ]
whiteList.includes('login') && console.log('vue需要放行token白名单的路由')
```
:::

::: info 五、代码规范
```js
1.css的命名不能使用驼峰，尽量使用-，或者_拼接
错误：.mainBox
正确：.main-box || .main_box

2.js的命名尽量使用驼峰，带有语意话的英文单词拼写
错误：function mainbox () { }
正确：mainBox () { }
```
:::

::: info 六、补充
```js
1.不使用第三个变量进行换值操作
let a = 5
let b = 10
[a, b] = [b, a]
console.log('置换之后-----',a,b) // 置换之后-----,10,5
```
:::