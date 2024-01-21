import{d as A,am as q,c as k,f as r,o as P,x as S,w as C,M as $,H as _,V as a,aj as h,aa as E,O as N,y as T,G as m,W as z,X as M,_ as F,a1 as H,k as V,F as L,a2 as O,ac as U,g as G}from"./chunks/framework.d6SjVawx.js";const g=n=>(z("data-v-69afb9ed"),n=n(),M(),n),J={class:"show-img-cont"},R=["onClick"],W=g(()=>a("div",{class:"icon"},"✕",-1)),X=[W],K=["onClick"],Q=g(()=>a("div",{class:"icon icon-v"},"⟳",-1)),Y=[Q],Z=["onClick"],ee=g(()=>a("div",{class:"icon"},"◀︎",-1)),te=[ee],ae=["onClick"],se=g(()=>a("div",{class:"icon"},"▶︎",-1)),ie=[se],le=["src"],oe=A({__name:"preview",props:{modelValue:{type:Boolean,default:!1},index:{type:Number,default:0},list:{type:Array,required:!0},blankClose:{type:Boolean,default:!1},zIndex:{type:Number,default:3001}},emits:["update:modelValue"],setup(n,{emit:f}){const s=n;q(e=>({"48cad6e8":u.value,"5b774eba":d.value,dbadf382:y.value}));const c=k(()=>{var e;return(e=s.list)!=null&&e.length?s.list:[]}),p=r(0),t=r(0),i=r(600),d=k(()=>`${i.value}px`),l=r(0),y=k(()=>`${l.value*90}deg`),u=k(()=>s.zIndex);P(()=>{S(()=>{document.addEventListener("keyup",e=>{e.keyCode===27&&v()}),document.addEventListener("mousewheel",e=>{if(e.wheelDelta<0){const o=i.value+Math.abs(e.wheelDelta);i.value=o>1e3?1e3:o}else{const o=i.value-Math.abs(e.wheelDelta);i.value=o<600?600:o}})})}),C(()=>s.index,()=>{t.value=s.index},{immediate:!0}),C(()=>s.modelValue,e=>{e===!0?document.body.setAttribute("class","jw-body-hidden"):document.body.removeAttribute("jw-body-hidden")},{immediate:!0});function v(){b(),f("update:modelValue",!1)}function w(e){e.stopPropagation(),s.blankClose&&v()}function I(e){e.stopPropagation(),t.value!==0&&(b(),t.value>=1&&(t.value=t.value-1))}function j(e){e.stopPropagation(),t.value!==c.value.length&&(b(),t.value<c.value.length-1&&(t.value=t.value+1))}function b(){l.value=0,i.value=600}function B(){l.value=l.value===3?0:++l.value}function D(e){p.value=e}return(e,o)=>{var x;return m(),$(T,{to:"body"},[n.modelValue?(m(),_("div",{key:0,class:"show-img-box",onClick:w},[a("div",J,[a("div",{class:"show-img-close vp-dja",onClick:h(v,["stop"])},X,8,R),a("div",{class:"show-img-rotate vp-dja",onClick:h(B,["stop"])},Y,8,K),a("div",{style:E({cursor:t.value===0?"not-allowed":"pointer"}),class:"show-img-left vp-dja",onClick:h(I,["stop"])},te,12,Z),a("div",{style:E({cursor:t.value===c.value.length-1?"not-allowed":"pointer"}),class:"show-img-right vp-dja",onClick:h(j,["stop"])},ie,12,ae),a("img",{class:"show-img-img",src:(x=c.value)==null?void 0:x[t.value],onClick:o[0]||(o[0]=h(ve=>D(t.value),["stop"]))},null,8,le)])])):N("",!0)])}}}),ne=F(oe,[["__scopeId","data-v-69afb9ed"]]),ce=U(`<h2 id="使用" tabindex="-1" data-v-89c69316>使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;" data-v-89c69316>​</a></h2><div class="info custom-block" data-v-89c69316><p class="custom-block-title" data-v-89c69316>代码</p><div class="language-js vp-adaptive-theme" data-v-89c69316><button title="Copy Code" class="copy" data-v-89c69316></button><span class="lang" data-v-89c69316>js</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-89c69316><code data-v-89c69316><span class="line" data-v-89c69316><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-89c69316>import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-89c69316> preview </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-89c69316>from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-89c69316> &#39;./preview.vue&#39;</span></span>
<span class="line" data-v-89c69316></span>
<span class="line" data-v-89c69316><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-89c69316>&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-89c69316>preview</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-89c69316> v-model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-89c69316>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-89c69316>&quot;show&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-89c69316> :index=&quot;index&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;" data-v-89c69316> :list=&quot;list&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-89c69316> /&gt;</span></span></code></pre></div></div><h2 id="示例" tabindex="-1" data-v-89c69316>示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;" data-v-89c69316>​</a></h2>`,3),de={class:"img-box"},ue=["src","onClick"],ke=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/vue/preview/index.md","filePath":"web/vue/preview/index.md"}'),re={name:"web/vue/preview/index.md"},pe=Object.assign(re,{setup(n){const{proxy:f}=G(),s=["pc/wegame/luban.jpg","pc/wegame/juzi.jpg","pc/wegame/yunying.jpg"],c=k(()=>s.map(d=>f.$filterImgUrl(d))),p=r(!1),t=r(0);function i(d){t.value=d,p.value=!0}return(d,l)=>{const y=H("c-title");return m(),_("div",null,[V(y,{title:"封装图片预览功能"}),ce,a("div",de,[(m(!0),_(L,null,O(c.value,(u,v)=>(m(),_("img",{key:u,class:"img",src:u,alt:"",onClick:w=>i(v)},null,8,ue))),128))]),V(ne,{modelValue:p.value,"onUpdate:modelValue":l[0]||(l[0]=u=>p.value=u),index:t.value,list:c.value},null,8,["modelValue","index","list"])])}}}),me=F(pe,[["__scopeId","data-v-89c69316"]]);export{ke as __pageData,me as default};
