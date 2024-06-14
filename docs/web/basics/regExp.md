---
title: 常用的正则表达式
description: 前端常用的正则表达式
head:
  - - meta
    - name: keywords
      content: 正则
---

# 常用的正则表达式

## 代码演示

::: info 一、开头不为0的数字
<a-input v-model="inputNum1" placeholder="请输入" oninput="value = value.replace(/[^\d]/gi,'').replace(/^[0]+[0-9]*$/gi,'').substr(0,11)" />

```js
oninput="value = value.replace(/[^\d]/gi,'').replace(/^[0]+[0-9]*$/gi,'').substr(0,11)"

采用双重replace方法
1.replace(/[^\d]/gi,'')
  限制用户只能输入数字
2.replace(/^[0]+[0-9]*$/gi,'')
  限制第一位不能输入0
3.substr(0,11)
  限制长度11位数

还有一种方式,多个value的判断
oninput="if(value<1){value=null};value=value.replace(/[^0-9]/g,'')"
```
:::

::: info 二、输入2位小数
<a-input v-model="inputNum2" placeholder="请输入" oninput="value = value.replace(/[^\d.]/gi, '')
    .replace('.', '$#$')
    .replace(/\./g, '')
    .replace('$#$', '.')
    .replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3')" />

```js
.replace(/[^\d.]/gi, '')
    .replace('.', '$#$')
    .replace(/\./g, '')
    .replace('$#$', '.')
    .replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3')
```
:::

::: info 三、手机号码格式正则校验
<a-input v-model="inputNum3" placeholder="请输入" oninput="value = value.replace(/[^\d]/gi,'').replace(/^[0]+[0-9]*$/gi,'').substr(0,11)" />
```js
/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
```
:::

::: info 四、Emoji表情正则校验
<a-input v-model="inputNum4" placeholder="请输入" oninput="value = value.replace(/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi, '')" />
```js
value = value.replace(/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi, '')
```
:::

<script setup lang="ts">
// =======  依赖引入  =======
import { ref } from 'vue';
// =======  类型声明  =======

// =======  变量声明  =======
const inputNum1 = ref('')
const inputNum2 = ref('')
const inputNum3 = ref('')
const inputNum4 = ref('')
// =======  主流程  =======

// =======  函数声明  =======

// =======  属性返回  =======
</script>