<template>
    <div class="cb-title">{{ props.title }}</div>
</template>

<script setup lang="ts">
// =======  依赖引入  =======
import { defineProps } from 'vue';
// =======  类型声明  =======

// =======  变量声明  =======
const props = defineProps({
    title: {
        type: String,
        default: '',
    },
});
// =======  主流程  =======

// =======  函数声明  =======

// =======  属性返回  =======
</script>

<style lang="scss" scoped>
.cb-title {
    font-size: 20px;
}
</style>
