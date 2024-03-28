import{_ as i,H as a,k as n,am as l,a1 as p,G as h}from"./chunks/framework.2MLJsAWF.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/weChat/lifeCycle.md","filePath":"web/weChat/lifeCycle.md"}'),k={name:"web/weChat/lifeCycle.md"},t=l(`<h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">一、页面生命周期</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">代码执行顺序</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() → </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onShow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() → </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onshow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() → 页面完全渲染完成 → </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onReady</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">生命周期函数</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">监听页面加载</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options) { },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.执行一次，</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">子页面back</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()跳转回来不会触发，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2.只有页面销毁或者返回上一页，在进入页面才会触发</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3.请求的静态数据方法可以写在这里</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">4.options 可以拿到页面的传参</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">生命周期函数</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">监听页面初次渲染完成</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onReady</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.执行一次，</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">子页面back</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()跳转回来不会触发，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2.只有页面销毁或者返回上一页，在进入页面才会触发，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3.特殊情况有用，自动获取验证码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:在当前页面有验证码的校验，在这个生命周期可以调用获取验证码的方法，自动获取验证码简化用户操作</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">生命周期函数</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">监听页面</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onShow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.当前页面被唤醒就会触发一次</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2.通常需要动态刷新的数据方法请求，写在这里</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3.通过方法可以拿到传参</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">4.通过</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">生命周期函数</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">监听页面隐藏</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onHide</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">生命周期函数</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">监听页面卸载</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onUnload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.通常用于销毁定时器</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">页面相关事件处理函数</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">监听用户下拉动作</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onPullDownRefresh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">页面上拉触底事件的处理函数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onReachBottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.通常用户触底加载更多数据，列表的上拉加载更多数据</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">用户点击右上角分享</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onShareAppMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.不要小看他，是一个坑，页面最好都有</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:分享功能，多数情况下都可以用到，而且全局封装分享功能，每个页面都需要有这个分享的方法</span></span></code></pre></div></div><div class="info custom-block"><p class="custom-block-title">二、组件生命周期</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">代码执行顺序</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">created</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() → </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attached</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() → 组件渲染完成 → </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ready</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">在组件实例进入页面节点树时执行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attached</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.执行一次，组件实例初始化触发</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2.通常用于写请求</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">在组件实例被从页面节点树移除时执行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">detached</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.执行一次，组件实例被销毁时触发</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">特殊的生命周期（不常用）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.created（在组件实例刚刚被创建时执行）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2.ready（在组件在视图层布局完成后执行）</span></span></code></pre></div></div><div class="info custom-block"><p class="custom-block-title">二、组件生命周期</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">组件的的生命周期建议在 lifetimes 字段内进行声明（这是推荐的方式，其优先级最高）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ =</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lifetimes: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  attached</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 在组件实例进入页面节点树时执行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  detached</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 在组件实例被从页面节点树移除时执行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 以下是旧式的定义方式，可以保持对 2.2.3 版本基础库的兼容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">attached: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 在组件实例进入页面节点树时执行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">detached</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 在组件实例被从页面节点树移除时执行...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div>`,4);function e(E,d,c,r,g,y){const s=p("c-title");return h(),a("div",null,[n(s,{title:"小程序生命周期"}),t])}const C=i(k,[["render",e]]);export{F as __pageData,C as default};
