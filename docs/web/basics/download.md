---
title: JS实现文件下载
description: JS实现文件下载
---

<c-title title="JS实现文件下载" />

## 示例

::: info 一、location.href 或 window.open
```js
window.location.href = url;  || window.open
// 优点
·单文件下载
·使用简单
// 缺点
·多次调用前面的下载会被覆盖掉
```
:::

::: info 二、a标签封装
```js
/**
 * @param [String] url  文件地址
 * @param [String] fileName  文件name
 */
function downFile(url: string, fileName?: string) {
    // 文件名必带有格式，eg: cs.txt, cs.pdf
    if (!url) {
        return
    }
    const name: string = fileName ? fileName : url.split('/')[url.split('/').length - 1]
    const callback = (url: string) => {
        const link = document.createElement('a')
        const objectUrl = window.URL.createObjectURL(new Blob([url]))
        link.style.display = 'none'
        link.href = objectUrl
        link.download = name
        document.body.appendChild(link)
        link.click()
        window.URL.revokeObjectURL(objectUrl)
    }
    const xhr = new XMLHttpRequest()
    xhr.open('get', url, true)
    xhr.responseType = 'blob'
    xhr.onload = () => {
        callback(xhr.response)
    }
    xhr.send()
}
```
:::

::: info 三、图片下载
```js
// 图片下载
function imgDown(imgsrc: string, CustomName?: string) {
    if (!imgsrc) {
        return
    }
    const name: string = CustomName ? CustomName : imgsrc.split('/')[imgsrc.split('/').length - 1]
    fetch(imgsrc).then(res => {
        res.blob().then(myBlob => {
            const href = URL.createObjectURL(myBlob)
            const a: HTMLAnchorElement = document.createElement('a')
            a.href = href
            a.download = name
            a.click()
            a.remove()
        })
    })
}
```
:::