<c-title title="妙用Computed" />

> vue 是`单项数据流`，子组件不能直接修改父组件传过来的 props

## 解决方案

::: info 使用`computed`拦截`prop`

> 使用简单，但是无法处理对象

```vue
<!-- 父组件 -->
<script setup>
import myComponent from "./components/MyComponent.vue";
import { ref } from "vue";

const msg = ref('hello')
</script>

<template>
  <div>
    <my-component v-model="msg"></my-component>
  </div>
</template>


<!-- 子组件 -->
<template>
  <el-input v-model="msg"></el-input>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const msg = computed({
  // getter
  get() {
    return props.modelValue
  },
  // setter
  set(newValue) {
    emit('update:modelValue',newValue)
  },
});
</script>
:::

::: info 使用`Proxy`代理对象
```vue
<!-- 父组件 -->
<script setup>
import myComponent from "./components/MyComponent.vue";
import { ref, watch } from "vue";

const form = ref({
  name: "张三",
  age: 18,
  sex: "man",
});

watch(form, (newValue) => {
  console.log(newValue);
});
</script>

<template>
  <div>
    <my-component v-model="form"></my-component>
  </div>
</template>


<!-- 子组件 -->
<template>
  <div>
    <el-input v-model="form.name"></el-input>
    <el-input v-model="form.age"></el-input>
    <el-input v-model="form.sex"></el-input>
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {},
  },
});

const emit = defineEmits(["update:modelValue"]);

const form = computed({
  get() {
    return new Proxy(props.modelValue, {
      get(target, key) {
        return Reflect.get(target, key);
      },
      set(target, key, value,receiver) {
        emit("update:modelValue", {
          ...target,
          [key]: value,
        });
        return true;
      },
    });
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});
</script>
```
:::


## 封装成`hook`

::: info 封装`useVModle`
```js
// useVModel.js
import { computed } from "vue";

export default function useVModle(props, propName, emit) {
    return computed({
        get() {
            return new Proxy(props[propName], {
                get(target, key) {
                    return Reflect.get(target, key)
                },
                set(target, key, newValue) {
                    emit('update:' + propName, {
                        ...target,
                        [key]: newValue
                    })
                    return true
                }
            })
        },
        set(value) {
            emit('update:' + propName, value)
        }
    })
}
```
:::

::: info 子组件使用
```vue
<template>
  <div>
    <el-input v-model="form.name"></el-input>
    <el-input v-model="form.age"></el-input>
    <el-input v-model="form.sex"></el-input>
  </div>
</template>
<script setup>
import useVModel from "../hooks/useVModel";

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {},
  },
});

const emit = defineEmits(["update:modelValue"]);

const form = useVModel(props, "modelValue", emit);

</script>
```
:::
