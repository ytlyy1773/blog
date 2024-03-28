import{d as q,c as p,f as u,o as P,x as S,w as C,M as $,H as _,V as s,aj as r,a9 as E,O as N,y as T,an as z,G as v,W as M,X as H,_ as F,k as V,F as L,a2 as O,am as U,a1 as G,g as J}from"./chunks/framework.2MLJsAWF.js";const f=o=>(M("data-v-178cf0bf"),o=o(),H(),o),R={class:"show-img-cont"},W=f(()=>s("div",{class:"icon"},"✕",-1)),X=[W],K=f(()=>s("div",{class:"icon icon-v"},"⟳",-1)),Q=[K],Y=f(()=>s("div",{class:"icon"},"◀︎",-1)),Z=[Y],ee=f(()=>s("div",{class:"icon"},"▶︎",-1)),te=[ee],ae=["src"],se=q({__name:"preview",props:{modelValue:{type:Boolean,default:!1},index:{type:Number,default:0},list:{type:Array,required:!0},blankClose:{type:Boolean,default:!1},zIndex:{type:Number,default:3001}},emits:["update:modelValue"],setup(o,{emit:y}){z(e=>({"6804d04d":w.value,"25e2afb8":k.value,"3397ce5e":d.value}));const i=o,h=y,l=p(()=>{var e;return(e=i.list)!=null&&e.length?i.list:[]}),m=u(0),t=u(0),a=u(600),k=p(()=>`${a.value}px`),c=u(0),d=p(()=>`${c.value*90}deg`),w=p(()=>i.zIndex);P(()=>{S(()=>{document.addEventListener("keyup",e=>{e.keyCode===27&&g()}),document.addEventListener("mousewheel",e=>{if(e.wheelDelta<0){const n=a.value+Math.abs(e.wheelDelta);a.value=n>1e3?1e3:n}else{const n=a.value-Math.abs(e.wheelDelta);a.value=n<600?600:n}})})}),C(()=>i.index,()=>{t.value=i.index},{immediate:!0}),C(()=>i.modelValue,e=>{e===!0?document.body.setAttribute("class","jw-body-hidden"):document.body.removeAttribute("jw-body-hidden")},{immediate:!0});function g(){b(),h("update:modelValue",!1)}function I(e){e.stopPropagation(),i.blankClose&&g()}function j(e){e.stopPropagation(),t.value!==0&&(b(),t.value>=1&&(t.value=t.value-1))}function B(e){e.stopPropagation(),t.value!==l.value.length&&(b(),t.value<l.value.length-1&&(t.value=t.value+1))}function b(){c.value=0,a.value=600}function D(){c.value=c.value===3?0:++c.value}function A(e){m.value=e}return(e,n)=>{var x;return v(),$(T,{to:"body"},[o.modelValue?(v(),_("div",{key:0,class:"show-img-box",onClick:I},[s("div",R,[s("div",{class:"show-img-close vp-dja",onClick:r(g,["stop"])},X),s("div",{class:"show-img-rotate vp-dja",onClick:r(D,["stop"])},Q),s("div",{style:E({cursor:t.value===0?"not-allowed":"pointer"}),class:"show-img-left vp-dja",onClick:r(j,["stop"])},Z,4),s("div",{style:E({cursor:t.value===l.value.length-1?"not-allowed":"pointer"}),class:"show-img-right vp-dja",onClick:r(B,["stop"])},te,4),s("img",{class:"show-img-img",src:(x=l.value)==null?void 0:x[t.value],onClick:n[0]||(n[0]=r(ue=>A(t.value),["stop"]))},null,8,ae)])])):N("",!0)])}}}),ie=F(se,[["__scopeId","data-v-178cf0bf"]]),le=U(`<h2 id="使用" tabindex="-1" data-v-89c69316>使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;" data-v-89c69316>​</a></h2><div class="info custom-block" data-v-89c69316><p class="custom-block-title" data-v-89c69316>代码</p><div class="language-js vp-adaptive-theme" data-v-89c69316><button title="Copy Code" class="copy" data-v-89c69316></button><span class="lang" data-v-89c69316>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-89c69316><code data-v-89c69316><span class="line" data-v-89c69316><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-89c69316>import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-89c69316> preview </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-89c69316>from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-89c69316> &#39;./preview.vue&#39;</span></span>
<span class="line" data-v-89c69316></span>
<span class="line" data-v-89c69316><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-89c69316>&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-89c69316>preview</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-89c69316> v-model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-89c69316>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-89c69316>&quot;show&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-89c69316> :index=&quot;index&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-89c69316> :list=&quot;list&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-89c69316> /&gt;</span></span></code></pre></div></div><h2 id="示例" tabindex="-1" data-v-89c69316>示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;" data-v-89c69316>​</a></h2>`,3),ne={class:"img-box"},oe=["src","onClick"],pe=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/vue/preview/index.md","filePath":"web/vue/preview/index.md"}'),ce={name:"web/vue/preview/index.md"},de=Object.assign(ce,{setup(o){const{proxy:y}=J(),i=["pc/wegame/luban.jpg","pc/wegame/juzi.jpg","pc/wegame/yunying.jpg"],h=p(()=>i.map(a=>y.$filterImgUrl(a))),l=u(!1),m=u(0);function t(a){m.value=a,l.value=!0}return(a,k)=>{const c=G("c-title");return v(),_("div",null,[V(c,{title:"封装图片预览功能"}),le,s("div",ne,[(v(!0),_(L,null,O(h.value,(d,w)=>(v(),_("img",{key:d,class:"img",src:d,alt:"",onClick:g=>t(w)},null,8,oe))),128))]),V(ie,{modelValue:l.value,"onUpdate:modelValue":k[0]||(k[0]=d=>l.value=d),index:m.value,list:h.value},null,8,["modelValue","index","list"])])}}}),ve=F(de,[["__scopeId","data-v-89c69316"]]);export{pe as __pageData,ve as default};
