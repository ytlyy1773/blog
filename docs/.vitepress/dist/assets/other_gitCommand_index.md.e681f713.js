import{_ as a,C as n,c as l,H as p,Q as e,o}from"./chunks/framework.3deaef37.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{"footer":false},"headers":[],"relativePath":"other/gitCommand/index.md","filePath":"other/gitCommand/index.md"}'),t={name:"other/gitCommand/index.md"},c=e(`<blockquote><p>工欲善其事，必先利其器</p></blockquote><h2 id="git操作软件推荐" tabindex="-1">git操作软件推荐 <a class="header-anchor" href="#git操作软件推荐" aria-label="Permalink to &quot;git操作软件推荐&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">GitHub Desktop</p><blockquote><p>支持 <code>mac</code> 和 <code>win</code> <a href="https://desktop.github.com" target="_blank" rel="noreferrer">官网直通车 🚘&#39;</a></p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">优点：可以复制操作代码</span></span>
<span class="line"><span style="color:#E1E4E8;">缺点：没有中文界面</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">优点：可以复制操作代码</span></span>
<span class="line"><span style="color:#24292E;">缺点：没有中文界面</span></span></code></pre></div></div><div class="info custom-block"><p class="custom-block-title">sourcetree</p><blockquote><p>支持 <code>mac</code> 和 <code>win</code> <a href="https://www.sourcetreeapp.com" target="_blank" rel="noreferrer">官网直通车 🚘&#39;</a></p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">优点：支持中文界面</span></span>
<span class="line"><span style="color:#E1E4E8;">缺点：不可以复制操作代码</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">优点：支持中文界面</span></span>
<span class="line"><span style="color:#24292E;">缺点：不可以复制操作代码</span></span></code></pre></div></div><h2 id="git提交代码流程" tabindex="-1">git提交代码流程 <a class="header-anchor" href="#git提交代码流程" aria-label="Permalink to &quot;git提交代码流程&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">推送代码到远端</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">1.首先在项目目录下初始化本地仓库</span></span>
<span class="line"><span style="color:#E1E4E8;">git init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">2.</span><span style="color:#B392F0;">添加所有文件</span><span style="color:#E1E4E8;">( . 表示所有)</span></span>
<span class="line"><span style="color:#E1E4E8;">git add .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">3.提交所有文件到本地仓库</span></span>
<span class="line"><span style="color:#E1E4E8;">git commit </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">m </span><span style="color:#9ECBFF;">&quot;备注信息&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">4.连接到远程仓库</span></span>
<span class="line"><span style="color:#E1E4E8;">git remote add origin 你的远程仓库地址</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">5.将项目推送到远程仓库，（失败，可以先拉去远端代码到本地，再提交）</span></span>
<span class="line"><span style="color:#E1E4E8;">git push </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">u origin master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">6.拉取代码到本地，再推送代码到远端</span></span>
<span class="line"><span style="color:#E1E4E8;">git pull </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">rebase origin master</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">1.首先在项目目录下初始化本地仓库</span></span>
<span class="line"><span style="color:#24292E;">git init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">2.</span><span style="color:#6F42C1;">添加所有文件</span><span style="color:#24292E;">( . 表示所有)</span></span>
<span class="line"><span style="color:#24292E;">git add .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">3.提交所有文件到本地仓库</span></span>
<span class="line"><span style="color:#24292E;">git commit </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">m </span><span style="color:#032F62;">&quot;备注信息&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">4.连接到远程仓库</span></span>
<span class="line"><span style="color:#24292E;">git remote add origin 你的远程仓库地址</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">5.将项目推送到远程仓库，（失败，可以先拉去远端代码到本地，再提交）</span></span>
<span class="line"><span style="color:#24292E;">git push </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">u origin master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">6.拉取代码到本地，再推送代码到远端</span></span>
<span class="line"><span style="color:#24292E;">git pull </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">rebase origin master</span></span></code></pre></div></div>`,6);function i(r,d,E,y,g,u){const s=n("c-title");return o(),l("div",null,[p(s,{title:"开发工具集"}),c])}const b=a(t,[["render",i]]);export{m as __pageData,b as default};
