<template>
    <Teleport to="body">
        <div v-if="modelValue" class="show-img-box" @click="divClose">
            <div class="show-img-cont">
                <div class="show-img-close vp-dja" @click.stop="close">
                    <div class="icon">✕</div>
                </div>
                <div class="show-img-rotate vp-dja" @click.stop="rotate">
                    <div class="icon icon-v">⟳</div>
                </div>
                <div
                    :style="{ cursor: i === 0 ? 'not-allowed' : 'pointer' }"
                    class="show-img-left vp-dja"
                    @click.stop="step"
                >
                    <div class="icon">◀︎</div>
                </div>
                <div
                    :style="{ cursor: i === arr.length - 1 ? 'not-allowed' : 'pointer' }"
                    class="show-img-right vp-dja"
                    @click.stop="next"
                >
                    <div class="icon">▶︎</div>
                </div>
                <img class="show-img-img" :src="arr?.[i]" @click.stop="clickImg(i)" />
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
// =======  依赖引入  =======
import { ref, onMounted, computed, nextTick, watch } from 'vue'
import type { PropType } from 'vue'
// import { Close, ArrowLeft, ArrowRight, Refresh } from '@element-plus/icons-vue'

// =======  类型声明  =======

// =======  变量声明  =======
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    // 初始化预览的图片序号，默认初始化显示数组第一个
    index: {
        type: Number,
        default: 0
    },
    // 预览数据,必须是数组
    list: {
        type: Array as PropType<string[]>,
        required: true
    },
    // 点击空白区域，关闭预览
    blankClose: {
        type: Boolean,
        default: false
    },
    // 渲染层级
    zIndex: {
        type: Number,
        default: 3001
    }
})

const emits = defineEmits<{
    (_e: 'update:modelValue', _v: boolean): void
}>()

const arr = computed<string[]>(() => {
    return props.list?.length ? props.list : []
})
const selectIndex = ref(0)
const i = ref(0)
const height = ref(600)
const heightPx = computed(() => {
    return `${height.value}px`
})
const angleVal = ref(0)
const angle = computed(() => {
    return `${angleVal.value * 90}deg`
})
const zIndex = computed(() => {
    return props.zIndex
})
// =======  主流程  =======

onMounted(() => {
    nextTick(() => {
        document.addEventListener('keyup', e => {
            e.keyCode === 27 && close()
        })
        document.addEventListener('mousewheel', (val: any) => {
            if (val.wheelDelta < 0) {
                const value = height.value + Math.abs(val.wheelDelta)
                height.value = value > 1000 ? 1000 : value
            } else {
                const value = height.value - Math.abs(val.wheelDelta)
                height.value = value < 600 ? 600 : value
            }
        })
    })
})
watch(
    () => {
        return props.index
    },
    () => {
        i.value = props.index
    },
    {
        immediate: true
    }
)
watch(
    () => {
        return props.modelValue
    },
    (val: boolean) => {
        // 解决背景穿透问题
        val === true
            ? document.body.setAttribute('class', 'jw-body-hidden')
            : document.body.removeAttribute('jw-body-hidden')
    },
    {
        immediate: true
    }
)
// =======  函数声明  =======
function close() {
    resetHeight()
    emits('update:modelValue', false)
}
function divClose(event: Event) {
    event.stopPropagation()
    props.blankClose && close()
}
function step(event: Event) {
    event.stopPropagation()
    if (i.value === 0) {
        return
    }
    resetHeight()
    i.value >= 1 && (i.value = i.value - 1)
}
function next(event: Event) {
    event.stopPropagation()
    if (i.value === arr.value.length) {
        return
    }
    resetHeight()
    i.value < arr.value.length - 1 && (i.value = i.value + 1)
}
function resetHeight() {
    angleVal.value = 0
    height.value = 600
}
function rotate() {
    angleVal.value = angleVal.value === 3 ? 0 : ++angleVal.value
}
function clickImg(i: number) {
    selectIndex.value = i
}
// =======  属性返回  =======
</script>

<style lang="scss" scoped>
.show-img-box {
    position: fixed;
    top: 0;
    left: 0;
    z-index: v-bind(zIndex);
    width: 100vw;
    height: 100vh;
    pointer-events: auto;
    background: rgba(#000, 0.5);
}
.show-img-cont {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.show-img-img {
    width: v-bind(heightPx);
    height: v-bind(heightPx);
    transform: rotate(v-bind(angle));
    object-fit: contain;
    user-select: none;
}
.show-img-close {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(#000, 0.2);
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        background: rgba(#000, 0.3);
    }
}
.show-img-rotate {
    position: absolute;
    top: 20px;
    right: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(#000, 0.2);
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        background: rgba(#000, 0.3);
    }
}
.show-img-left {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(#000, 0.2);
    &:hover {
        transform: translateY(-50%) scale(1.1);
        background: rgba(#000, 0.3);
    }
}
.show-img-right {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(#000, 0.2);
    &:hover {
        transform: translateY(-50%) scale(1.1);
        background: rgba(#000, 0.3);
    }
}
.icon {
    font-size: 16px;
    color: #fff;
}
.icon-v {
    font-size: 28px;
    transform: translate(1px, -2px);
}
</style>
