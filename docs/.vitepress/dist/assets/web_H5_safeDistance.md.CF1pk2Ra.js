import{_ as s,H as a,G as e,am as t}from"./chunks/framework.2MLJsAWF.js";const m=JSON.parse('{"title":"iphone底部安全距离","description":"iphone手机底部预览安全距离","frontmatter":{"title":"iphone底部安全距离","description":"iphone手机底部预览安全距离"},"headers":[],"relativePath":"web/H5/safeDistance.md","filePath":"web/H5/safeDistance.md"}'),i={name:"web/H5/safeDistance.md"},n=t(`<h1 id="iphone底部安全距离" tabindex="-1">iphone底部安全距离 <a class="header-anchor" href="#iphone底部安全距离" aria-label="Permalink to &quot;iphone底部安全距离&quot;">​</a></h1><blockquote><p>env() 跟 constant() 需要同时存在，而且顺序不能换</p></blockquote><h2 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">源代码</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    padding-bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: constant(safe-area-inset-bottom);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    padding-bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: env(safe-area-inset-bottom);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div>`,4),o=[n];function p(l,c,h,r,d,k){return e(),a("div",null,o)}const b=s(i,[["render",p]]);export{m as __pageData,b as default};