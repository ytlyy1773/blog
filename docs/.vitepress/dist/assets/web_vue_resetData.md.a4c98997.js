import{_ as a,C as n,c as p,H as l,Q as o,o as e}from"./chunks/framework.17465f4a.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/vue/resetData.md","filePath":"web/vue/resetData.md"}'),t={name:"web/vue/resetData.md"},c=o(`<blockquote><p>局限于vue2</p></blockquote><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">一、初始化组件中的所有数据</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$data,</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$options.</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">())</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Object.</span><span style="color:#6F42C1;">assign</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$data,</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$options.</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">())</span></span></code></pre></div></div><div class="info custom-block"><p class="custom-block-title">二、初始化组件中某个对象中的数据</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$data.form,</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$options.</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">().form)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Object.</span><span style="color:#6F42C1;">assign</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$data.form,</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$options.</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">().form)</span></span></code></pre></div></div><div class="info custom-block"><p class="custom-block-title">三、总结</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$data,</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$options.</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#6A737D;">// 方法慎用</span></span>
<span class="line"><span style="color:#E1E4E8;">会导致BUG 生命周期请求接口返回的数据也会清空，只能是搭配使用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 重置所有数据方法</span></span>
<span class="line"><span style="color:#B392F0;">reSetData</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$data,</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$options.</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getQueryData</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// eg：BUG实例--生命周期有请求接口赋值数据</span></span>
<span class="line"><span style="color:#B392F0;">created</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getQueryData</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">methods</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  async </span><span style="color:#B392F0;">getQueryData</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getPost</span><span style="color:#E1E4E8;">({})</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 赋值</span></span>
<span class="line"><span style="color:#E1E4E8;">    res.code </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.formObj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> res.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Object.</span><span style="color:#6F42C1;">assign</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$data,</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$options.</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#6A737D;">// 方法慎用</span></span>
<span class="line"><span style="color:#24292E;">会导致BUG 生命周期请求接口返回的数据也会清空，只能是搭配使用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 重置所有数据方法</span></span>
<span class="line"><span style="color:#6F42C1;">reSetData</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  Object.</span><span style="color:#6F42C1;">assign</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$data,</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$options.</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getQueryData</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// eg：BUG实例--生命周期有请求接口赋值数据</span></span>
<span class="line"><span style="color:#6F42C1;">created</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getQueryData</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">methods</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  async </span><span style="color:#6F42C1;">getQueryData</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getPost</span><span style="color:#24292E;">({})</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 赋值</span></span>
<span class="line"><span style="color:#24292E;">    res.code </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.formObj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> res.data)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div>`,5);function r(E,y,i,d,F,h){const s=n("c-title");return e(),p("div",null,[l(s,{title:"Vue2重置data里边的数据"}),c])}const g=a(t,[["render",r]]);export{u as __pageData,g as default};
