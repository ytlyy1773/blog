<template>
  <div class="page">
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="text">
        <div class="text-logo">🥷</div>
        <div class="text-span">{{ item.text }}</div>
      </div>
      <div class="result">
        <div class="text-logo">💻</div>
        <div class="text-span">{{ item.result }}</div>
      </div>
    </div>
  </div>
  <div class="fixed-box">
    <textarea
      ref="textareaDom"
      class="blog-textarea"
      autofocus
      v-model="input"
      placeholder="请输入您的问题，该功能需要魔法"
      @input="autoHeight"
    />
    <a-button type="primary" :disabled="loading" @click="onSearch">
      {{ loading ? "请求中..." : "⦊" }}
    </a-button>
  </div>
</template>

<script setup lang="ts">
// =======  依赖引入  =======
import { ref } from "vue";
import OpenAI from "openai";
import { message } from "ant-design-vue";
// =======  类型声明  =======

// =======  变量声明  =======
const textareaDom = ref(null);
const list = ref([]);
const input = ref("");
const loading = ref(false);
const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});
// =======  主流程  =======

// =======  函数声明  =======
function autoHeight() {
  input.value = String(input.value).trim();
  textareaDom.value.style.height = "auto";
  textareaDom.value.style.height = textareaDom.value.scrollHeight + "px";
}
function onSearch() {
  if (!input.value) {
    message.info("请输入问题哦！！！");
    return;
  }
  loading.value = true;
  const text = JSON.parse(JSON.stringify(input.value));
  // const chatCompletion = await ;
  openai.chat.completions
    .create({
      messages: [{ role: "user", content: input.value }],
      model: "gpt-3.5-turbo",
    })
    .then((chatCompletion) => {
      input.value = "";
      list.value = [
        ...list.value,
        {
          text,
          result: chatCompletion.choices[0].message.content,
        },
      ];
      loading.value = false;
    })
    .catch((err) => {
      message.error(err.msg);
      loading.value = false;
    });
}
// =======  属性返回  =======
</script>
<style lang="scss" scoped>
.page {
  box-sizing: border-box;
  max-height: 1000px;
  padding-bottom: 100px;
}
.fixed-box {
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 10px 20px;
  min-height: 100px;
}
.blog-textarea {
  padding: 4px 10px;
  border-radius: 8px;
  border: 1px solid #dedede;
  flex: 1;
  max-height: 80px;
  resize: none;
}
:deep(.ant-btn) {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  font-size: 20px;
}
.item {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.text,
.result {
  display: flex;
  align-items: flex-start;
  padding: 10px;
}
.result {
  background-color: rgba(0, 0, 0, 0.1);
}
.text-logo {
  margin-right: 10px;
}
.text-span {
  word-wrap: break-word;
  word-break: break-all;
}
</style>
