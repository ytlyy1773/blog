import{_ as a,a1 as e,H as t,k as i,ac as n,G as o}from"./chunks/framework.d6SjVawx.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/H5/safeDistance.md","filePath":"web/H5/safeDistance.md"}'),c={name:"web/H5/safeDistance.md"},l=n(`<blockquote><p>env() 跟 constant() 需要同时存在，而且顺序不能换</p></blockquote><h2 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">源代码</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    padding-bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: constant(safe-area-inset-bottom);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    padding-bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: env(safe-area-inset-bottom);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div>`,3);function p(r,d,h,k,_,m){const s=e("c-title");return o(),t("div",null,[i(s,{title:"iphone底部安全距离"}),l])}const f=a(c,[["render",p]]);export{b as __pageData,f as default};
