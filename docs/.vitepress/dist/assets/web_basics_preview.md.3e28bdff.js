import{_ as a,C as l,c as n,H as o,Q as p,o as e}from"./chunks/framework.17465f4a.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/basics/preview.md","filePath":"web/basics/preview.md"}'),t={name:"web/basics/preview.md"},c=p(`<blockquote><p>核心就是<code>&lt;iframe /&gt;</code>标签；只有pdf是可以直接被预览的，word格式需要使用做拼接</p></blockquote><h2 id="流程" tabindex="-1">流程 <a class="header-anchor" href="#流程" aria-label="Permalink to &quot;流程&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">源代码</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">iframe</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;type !== &#39;pdf&#39;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;\`https://view.officeapps.live.com/op/view.aspx?src=\${url}\`&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width: 100%; height: 100%&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">iframe</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- pdf格式直接打开就是预览 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">iframe</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-else</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;url&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width: 100%; height: 100%&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">iframe</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">iframe</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-if</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;type !== &#39;pdf&#39;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;\`https://view.officeapps.live.com/op/view.aspx?src=\${url}\`&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width: 100%; height: 100%&quot;</span></span>
<span class="line"><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">iframe</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- pdf格式直接打开就是预览 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">iframe</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-else</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;url&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width: 100%; height: 100%&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">iframe</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></div>`,3);function r(i,E,y,d,u,h){const s=l("c-title");return e(),n("div",null,[o(s,{title:"Html预览word，pdf，excel"}),c])}const _=a(t,[["render",r]]);export{m as __pageData,_ as default};
