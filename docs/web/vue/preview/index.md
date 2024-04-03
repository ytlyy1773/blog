---
title: 封装图片预览功能
description: 在vue中封装一个图片预览功能
---

<c-title title="封装图片预览功能" />

## 使用

::: info 代码
```js-vue
import preview from './preview.vue'

<preview v-model="show" :index="index" :list="list" />
```
:::

## 示例

<div class="img-box">
    <template v-for="(item, i) in list" :key="item">
        <img class="img" :src="item" alt="" @click="openImgHandle(i)" />
    </template>
</div>
<preview v-model="show" :index="index" :list="list" />

<script setup>
// =======  依赖引入  =======
import { ref, computed, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
import preview from './preview.vue'
// =======  类型声明  =======

// =======  变量声明  =======
const imgs = ['pc/wegame/luban.jpg', 'pc/wegame/juzi.jpg', 'pc/wegame/yunying.jpg']

const list = computed(() => {
    return imgs.map(e => proxy.$filterImgUrl(e))
})

const show = ref(false)
const index = ref(0)
// =======  主流程  =======

// =======  函数声明  =======
function openImgHandle(i) {
    index.value = i
    show.value = true
}
// =======  属性返回  =======
</script>

<style lang="scss" scoped>
.img-box {
    display: flex;
}

.img {
    width: 200px;
    height: 200px;
    object-fit: contain;
}
</style>
