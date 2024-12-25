---
title: JavaScript 实现 Sleep（伪 sleep）
description: 如何在 JavaScript 中实现 sleep 功能，通过 Promise 结合 setTimeout 实现异步暂停。详细介绍了核心实现方式并说明了为什么在此场景下无需手动清除定时器。
outline: [2, 3]
---

# JavaScript 实现 Sleep（伪 sleep）

在 JavaScript 中，我们通常用 `setTimeout` 和 `Promise` 结合实现类似 `sleep` 的效果。以下是一个核心示例：

### 核心代码

> 这个代码片段会使当前执行的异步函数暂停 4 秒，然后继续执行。

```js
await new Promise(resolve => setTimeout(resolve, 4000));
```

### eg

```js
async function falseSleep() {
  console.log('开始执行----');
  await new Promise(resolve => setTimeout(resolve, 4000));
  console.log('延迟4秒执行----');
}
```

## 详细解析

### 为什么不需要 `clearTimeout`

* `setTimeout` 的一次性定时器：

    - 在这个场景中，`setTimeout` 只执行一次，定时器触发后会自动清除。因此，无需手动调用 `clearTimeout`。

    - `resolve` 被调用后，`Promise` 会完成其使命，且定时器已经完成并自动清理。

* `Promise` 的自动完成：

    - 通过 `resolve` 执行，`Promise` 状态会从 `pending` 变为 `fulfilled`，这时 JavaScript 引擎会清理相关资源。
