import { ref, createApp } from 'vue'
// @ts-ignore
import dialogModule from './dialogModule.vue'

interface OptionsType {
  title?: string // 标题
  mainText?: string // 内容
  width?: string // 宽度
  LeftText?: string // 左侧按钮文字
  LeftType?: string // 左侧按钮样式，支持elementUI组件库按钮组type
  RightText?: string // 右侧按钮文字
  RightType?: string // 右侧按钮样式，支持elementUI组件库按钮组type
}

const visible = ref(false)

export default function (options: OptionsType = {}) {
  return new Promise((resolve, reject) => {
    // 创建dom实例挂载在body上边
    const div = document.createElement('div')
    div.style.width = '0'
    div.style.height = '0'
    document.body.appendChild(div)
    const module = createApp(dialogModule, {
      modelValue: visible,
      resolve: () => {
        resolve('成功返回')
        div.remove()
      },
      reject: () => {
        reject('失败返回')
        div.remove()
      },
      ...options
    })
    module.mount(div)
    visible.value = true
  })
}