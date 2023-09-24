import{_ as n,C as a,c as p,H as l,Q as e,o}from"./chunks/framework.3deaef37.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{"next":"/projectTemplate"},"headers":[],"relativePath":"web/vue/plugins.md","filePath":"web/vue/plugins.md"}'),c={name:"web/vue/plugins.md"},t=e(`<h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">一、UI篇</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">、Element Plus</span></span>
<span class="line"><span style="color:#E1E4E8;">兼容性最好，使用最广泛</span></span>
<span class="line"><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">、Ant Design </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> Vue</span></span>
<span class="line"><span style="color:#E1E4E8;">未来的设计标准，缺陷很明显社区维护BUG较多</span></span>
<span class="line"><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">、Vant</span></span>
<span class="line"><span style="color:#E1E4E8;">移动端H5首选，不适用于混合开发模式</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">1</span><span style="color:#24292E;">、Element Plus</span></span>
<span class="line"><span style="color:#24292E;">兼容性最好，使用最广泛</span></span>
<span class="line"><span style="color:#005CC5;">2</span><span style="color:#24292E;">、Ant Design </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> Vue</span></span>
<span class="line"><span style="color:#24292E;">未来的设计标准，缺陷很明显社区维护BUG较多</span></span>
<span class="line"><span style="color:#005CC5;">3</span><span style="color:#24292E;">、Vant</span></span>
<span class="line"><span style="color:#24292E;">移动端H5首选，不适用于混合开发模式</span></span></code></pre></div></div><div class="info custom-block"><p class="custom-block-title">二、开发辅助篇</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">、VueUse</span></span>
<span class="line"><span style="color:#E1E4E8;">Vue组合式API的实用工具集</span></span>
<span class="line"><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">、unplugin</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">auto</span><span style="color:#F97583;">-import</span></span>
<span class="line"><span style="color:#E1E4E8;">自动按需引入 vue｜vue-router｜pinia 等的 api</span></span>
<span class="line"><span style="color:#E1E4E8;">3、unplugin-vue-components</span></span>
<span class="line"><span style="color:#E1E4E8;">自动按需引入 第三方的组件库组件(elementUI) 和 我们自定义的组件</span></span>
<span class="line"><span style="color:#E1E4E8;">4、pinia-plugin-persistedstate</span></span>
<span class="line"><span style="color:#E1E4E8;">持久化pinia数据，中文官网，使用简单，绝对的后起之秀</span></span>
<span class="line"><span style="color:#E1E4E8;">5、vuex-persistedstate</span></span>
<span class="line"><span style="color:#E1E4E8;">持久化pinia｜vuex数据，vue2时代的产物，主要用于vuex</span></span>
<span class="line"><span style="color:#E1E4E8;">6、Lodash</span></span>
<span class="line"><span style="color:#E1E4E8;">封装了常用的js函数，不过使用率在下降</span></span>
<span class="line"><span style="color:#E1E4E8;">7、Day.js</span></span>
<span class="line"><span style="color:#E1E4E8;">操作和显示日期和时间</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">1</span><span style="color:#24292E;">、VueUse</span></span>
<span class="line"><span style="color:#24292E;">Vue组合式API的实用工具集</span></span>
<span class="line"><span style="color:#005CC5;">2</span><span style="color:#24292E;">、unplugin</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">auto</span><span style="color:#D73A49;">-import</span></span>
<span class="line"><span style="color:#24292E;">自动按需引入 vue｜vue-router｜pinia 等的 api</span></span>
<span class="line"><span style="color:#24292E;">3、unplugin-vue-components</span></span>
<span class="line"><span style="color:#24292E;">自动按需引入 第三方的组件库组件(elementUI) 和 我们自定义的组件</span></span>
<span class="line"><span style="color:#24292E;">4、pinia-plugin-persistedstate</span></span>
<span class="line"><span style="color:#24292E;">持久化pinia数据，中文官网，使用简单，绝对的后起之秀</span></span>
<span class="line"><span style="color:#24292E;">5、vuex-persistedstate</span></span>
<span class="line"><span style="color:#24292E;">持久化pinia｜vuex数据，vue2时代的产物，主要用于vuex</span></span>
<span class="line"><span style="color:#24292E;">6、Lodash</span></span>
<span class="line"><span style="color:#24292E;">封装了常用的js函数，不过使用率在下降</span></span>
<span class="line"><span style="color:#24292E;">7、Day.js</span></span>
<span class="line"><span style="color:#24292E;">操作和显示日期和时间</span></span></code></pre></div></div><div class="info custom-block"><p class="custom-block-title">三、table篇</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">、vxe</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">table</span></span>
<span class="line"><span style="color:#E1E4E8;">复杂表格业务需求首选</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">1</span><span style="color:#24292E;">、vxe</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">table</span></span>
<span class="line"><span style="color:#24292E;">复杂表格业务需求首选</span></span></code></pre></div></div><div class="info custom-block"><p class="custom-block-title">四、js计算篇</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">、mathjs</span></span>
<span class="line"><span style="color:#E1E4E8;">强大且易于使用，使用最广泛的js计算库</span></span>
<span class="line"><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">、big.js</span></span>
<span class="line"><span style="color:#E1E4E8;">一个小型，快速，易于使用的库，用于任意精度的十进制算术运算</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">1</span><span style="color:#24292E;">、mathjs</span></span>
<span class="line"><span style="color:#24292E;">强大且易于使用，使用最广泛的js计算库</span></span>
<span class="line"><span style="color:#005CC5;">2</span><span style="color:#24292E;">、big.js</span></span>
<span class="line"><span style="color:#24292E;">一个小型，快速，易于使用的库，用于任意精度的十进制算术运算</span></span></code></pre></div></div><div class="info custom-block"><p class="custom-block-title">五、优化篇</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">、vite</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">plugin</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">compression</span></span>
<span class="line"><span style="color:#E1E4E8;">gzip压缩，需要nginx开启GZIP，打包之后可以明显提高项目的打开速度</span></span>
<span class="line"><span style="color:#E1E4E8;">类似还有br压缩，不过br压缩存在兼容性问题，压缩效率比Gzip压缩能提高15</span><span style="color:#F97583;">%</span></span>
<span class="line"><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">、vite</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">plugin</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">imagemin</span></span>
<span class="line"><span style="color:#E1E4E8;">本地静态图片压缩</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">1</span><span style="color:#24292E;">、vite</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">plugin</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">compression</span></span>
<span class="line"><span style="color:#24292E;">gzip压缩，需要nginx开启GZIP，打包之后可以明显提高项目的打开速度</span></span>
<span class="line"><span style="color:#24292E;">类似还有br压缩，不过br压缩存在兼容性问题，压缩效率比Gzip压缩能提高15</span><span style="color:#D73A49;">%</span></span>
<span class="line"><span style="color:#005CC5;">2</span><span style="color:#24292E;">、vite</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">plugin</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">imagemin</span></span>
<span class="line"><span style="color:#24292E;">本地静态图片压缩</span></span></code></pre></div></div>`,6);function i(r,E,y,d,u,v){const s=a("c-title");return o(),p("div",null,[l(s,{title:"Vue项目常用插件"}),t])}const b=n(c,[["render",i]]);export{h as __pageData,b as default};
