import{_ as i,H as a,k as n,am as t,a1 as h,G as e}from"./chunks/framework.2MLJsAWF.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/basics/useSass.md","filePath":"web/basics/useSass.md"}'),l={name:"web/basics/useSass.md"},p=t(`<h2 id="流程" tabindex="-1">流程 <a class="header-anchor" href="#流程" aria-label="Permalink to &quot;流程&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">源代码</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@mixin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pubBgi($url, $width: 100%, $height: 100%) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    width: $width;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    height: $height;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    background-image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: url(&#39;http://www</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.jwblog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.cn/images/pc/user/#{$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    background-repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">no-repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    background-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 100% 100%;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.img-box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">include</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pubBgi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;, 200</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, 200</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div>`,2);function k(E,r,d,c,g,o){const s=h("c-title");return e(),a("div",null,[n(s,{title:"CSS使用sass语法"}),p])}const _=i(l,[["render",k]]);export{u as __pageData,_ as default};
