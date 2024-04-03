---
title: 函数式封装上传图片组件
description: 在vue中使用函数式封装上传图片组件
---

<c-title title="函数式封装上传图片组件" />

> Vue3 + ts函数式封装支持 `函数式｜组件` 两种使用方式

## 演示

<a-button type="primary" @click="addImg" :loading="disabled" style="margin-right: 10px">
    {{ disabled ? '上传中...' : '上传' }}
</a-button>
<a-button type="primary" @click="clearList">清空图片</a-button>

<div class="for-box">
    <template v-for="item in list" :key="item">
        <img v-if="item" :src="item" class="show-img" />
    </template>
</div>

<script setup>
// =======  依赖引入  =======
import { ref } from 'vue'
import { uploadImage } from './upload'
// =======  类型声明  =======

// =======  变量声明  =======
const list = ref([])
const disabled = ref(false)
// =======  主流程  =======

// =======  函数声明  =======
function addImg() {
    disabled.value = true
    uploadImage()
        .then((li) => {
            const arr = []
            li.forEach((ele) => {
                const url = URL.createObjectURL(ele)
                arr.push(url)
            })
            list.value = [...list.value, ...arr]
        })
        .finally(() => {
            disabled.value = false
        })
}

function clearList() {
    list.value.length = 0
}
// =======  属性返回  =======
</script>

<style lang="scss" scoped>
.for-box {
    display: flex;
}
.show-img {
    margin: 10px 10px 0 0;
    width: 200px;
    height: 200px;
}
</style>

## 解释

::: info 一、全局挂载
```js-vue
// vue2全局挂载
Vue.prototype.$upload = uploadImage

// vue3全局挂载
app.config.globalProperties.$upload = uploadImage
```
:::

::: info 二、使用
```js-vue
// vue2
this.$upload().then(()=> {}).catch(err => {})

// vue3
> 必须使用proxy，正式环境ctx是获取不到的所以不能使用const { ctx } = getCurrentInstance()
const { proxy } = getCurrentInstance()
proxy.$upload().then(()=> {}).catch(err => {})
```
:::

::: details 源代码
<<< ./upload.js
:::
