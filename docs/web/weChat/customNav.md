---
title: 小程序自定义顶部导航栏组件
description: 微信小程序自定义顶部导航栏组件
---

# 小程序自定义顶部导航栏组件

## 代码

::: info 一、html部分
```html
<!-- 封装顶部Nav组件 -->
<view class="custom-nav" style="height:{{zHeight}}px;">
  <view class="custom-nav-box" style="height:{{zHeight}}px;">
    <view class="custom-nav-bar" style="top:{{ztlHeight}}px; height:{{dhlHeight}}px;">
      <view class="custom-nav-cont">
        <!-- 除去胶囊内容所占空间 -->
        <view class="custom-nav-cont-box">
          <!-- 主体内容默认内容 -->
          <block wx:if="{{!customMain}}">
            <image src="" class="custom-nav-cont-box-img" />
            <view class="custom-nav-cont-box-title {{ center ? 'custom-nav-cont-box-title-center' : ''}}">
              {{title}}
            </view>
          </block>
          <!-- 插槽 -->
          <block wx:else>
            <slot></slot>
          </block>
        </view>
        <!-- 胶囊所占空间 -->
        <block wx:if="{{!hideCachet}}">
          <block wx:if="{{customCachet}}">
            <slot name="cachet"></slot>
          </block>
          <block wx:else>
            <view class="custom-nav-cont-cachet" style="width: {{ rightDistance }}px;"></view>
          </block>
        </block>
      </view>
    </view>
  </view>
</view>
```
:::


::: info 二、js部分
```js
Component({
  properties: {
    // 标题内容
    title: {
      type: String,
      value: "标题",
    },
    // 标题居中,默认左对齐
    center: {
      type: Boolean,
      value: false,
    },
    // 自定义顶部导航栏内容
    customMain: {
      type: Boolean,
      value: false,
    },
    // 自定义胶囊内容
    customCachet: {
      type: Boolean,
      value: false,
    },
    // 是否隐藏胶囊站位
    hideCachet: {
      type: Boolean,
      value: false,
    },
  },
  data: {
    ztlHeight: 0,
    dhlHeight: 0,
    zHeight: 0,
    rightDistance: 0, // 胶囊左侧应留间距
  },
  attached: function () {
    const system = wx.getSystemInfoSync();
    const res = wx.getMenuButtonBoundingClientRect();
    const ztlHeight = system.statusBarHeight;
    const dhlHeight = res.height + (res.top - ztlHeight) * 2;
    const zHeight = ztlHeight + dhlHeight;
    const rightDistance = res.width + 6;
    this.setData({
      ztlHeight,
      dhlHeight,
      zHeight,
      rightDistance
    });
  },
  methods: {},
});

```
:::

::: info 三、css部分
```css
.custom-nav {
  width: 100%;
  background: #fff;
  position: relative;
  z-index: 9999;
  overflow: hidden;
}

.custom-nav-box {
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 9999;
  border-bottom: 1rpx solid rgba(255, 255, 255, 0.3);
}

.custom-nav-bar {
  position: relative;
  z-index: 9;
  display: flex;
  width: 100%;
  align-items: center;
}

.custom-nav-cont {
  position: relative;
  display: flex;
  width: 750px;
  height: 100%;
}

.custom-nav-cont-box {
  flex: 1;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 20rpx;
}
.custom-nav-cont-box-img {
  height: 40rpx;
  width: 20rpx;
}
.custom-nav-cont-box-title {
  margin-left: 10px;
  font-size: 36rpx;
  font-weight: bold;
}
.custom-nav-cont-cachet {
  height: 100%;
}

.custom-nav-cont-box-title-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

```
:::
