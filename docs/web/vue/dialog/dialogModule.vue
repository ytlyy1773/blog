<template>
    <a-modal v-model:open="visible" wrapClassName="dialog-box" :width="width" :closable="false" :footer="null" @cancel="closeVisible">
        <div @click="closeVisible" class="jw-dialog-close">×</div>
        <template #header>
            <div>{{ title }}</div>
        </template>
        <div class="jw-dialog-cont">
            <div>{{ mainText }}</div>
        </div>
        <div class="jw-dialog-btn">
            <a-button :type="LeftType" @click="closeVisible">{{ LeftText }}</a-button>
            <a-button :type="RightType" @click="submit">{{ RightText }}</a-button>
        </div>
    </a-modal>
</template>

<script setup lang="ts">
// =======  依赖引入  =======
import { computed, watch } from 'vue'
// =======  类型声明  =======

// =======  变量声明  =======
const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
        default: false
    },
    resolve: {
        type: Function,
        default: undefined
    },
    reject: {
        type: Function,
        default: undefined
    },
    title: {
        type: String,
        default: '标题'
    },
    mainText: {
        type: String,
        default: '弹窗内容'
    },
    width: {
        type: String,
        default: '400px'
    },
    LeftText: {
        type: String,
        default: '取消'
    },
    LeftType: {
        type: [String, undefined],
        default: undefined
    },
    RightText: {
        type: String,
        default: '确认'
    },
    RightType: {
        type: [String, undefined],
        default: 'primary'
    }
})

const emits = defineEmits<{
    (_e: 'update:modelValue', _v: boolean): void
}>()

const visible = computed<boolean>({
    get() {
        return props.modelValue
    },
    set(val: boolean) {
        emits('update:modelValue', val)
    }
})

watch(props, (val) => {
    console.log(val.modelValue)
})

// =======  主流程  =======

// =======  函数声明  =======

// 关闭弹窗
function closeVisible() {
    emits('update:modelValue', false)
    props.reject!()
}

// 确认按钮
function submit() {
    emits('update:modelValue', false)
    props.resolve!()
}
// =======  属性返回  =======
</script>

<style lang="scss" scoped>
.dialog-box {
    .jw-dialog-cont {
        margin-top: 20px;
    }
    .jw-dialog-close {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        width: 30px;
        height: 30px;
        padding: 10px;
        box-sizing: border-box;
        cursor: pointer;
    }
    // 底部按钮组
    .jw-dialog-btn {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
    }
    .ant-btn {
        margin-right: 12px;
        &:last-child {
            margin-right: 0;
        }
    }
}
</style>
