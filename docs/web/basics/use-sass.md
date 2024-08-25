---
title: CSS使用sass语法
description: CSS使用sass语法
---

# CSS使用sass语法

## sass高阶用法

```css
@mixin pubBgi($url, $width: 100%, $height: 100%) {
    width: $width;
    height: $height;
    background-image: url('https://www.jwblog.cn/images/pc/user/#{$url}.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.img-box {
    @include pubBgi('user', 200px, 200px);
}
```
