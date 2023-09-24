import{_ as n,C as a,c as l,H as p,Q as o,o as e}from"./chunks/framework.17465f4a.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/H5/limitBack.md","filePath":"web/H5/limitBack.md"}'),t={name:"web/H5/limitBack.md"},c=o(`<blockquote><p>用途，H5页面有内容返回增加一个弹窗提醒</p></blockquote><h2 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">源代码</p><blockquote><p>不同于VueRouter里边跳转的replace方法可以做到不能跳转回上一页</p></blockquote><blockquote><p>限制无法回退页面</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    history.</span><span style="color:#B392F0;">pushState</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, document.</span><span style="color:#79B8FF;">URL</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;popstate&#39;</span><span style="color:#E1E4E8;">, backPage)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">backPage</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    history.</span><span style="color:#B392F0;">pushState</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, document.</span><span style="color:#79B8FF;">URL</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 满足限制条件 open popup</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        window.</span><span style="color:#B392F0;">removeEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;popstate&#39;</span><span style="color:#E1E4E8;">, backPage)</span></span>
<span class="line"><span style="color:#E1E4E8;">        history.</span><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">onMounted</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    history.</span><span style="color:#6F42C1;">pushState</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, document.</span><span style="color:#005CC5;">URL</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    window.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;popstate&#39;</span><span style="color:#24292E;">, backPage)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">backPage</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    history.</span><span style="color:#6F42C1;">pushState</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, document.</span><span style="color:#005CC5;">URL</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 满足限制条件 open popup</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        window.</span><span style="color:#6F42C1;">removeEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;popstate&#39;</span><span style="color:#24292E;">, backPage)</span></span>
<span class="line"><span style="color:#24292E;">        history.</span><span style="color:#6F42C1;">go</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div>`,3);function r(E,y,i,u,d,F){const s=a("c-title");return e(),l("div",null,[p(s,{title:"限制浏览器返回"}),c])}const h=n(t,[["render",r]]);export{_ as __pageData,h as default};
