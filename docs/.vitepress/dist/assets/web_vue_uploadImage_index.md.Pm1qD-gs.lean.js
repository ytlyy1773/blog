import{a as C}from"./chunks/theme.CJgOvFj8.js";import{_ as B,f as y,H as E,k as g,N as F,V as l,F as c,a2 as m,am as f,a1 as o,G as r,K as p,L as _,O as b,W as I,X as j}from"./chunks/framework.2MLJsAWF.js";const u=["jpg","jpeg","png","gif"],A=".jpg、.jpeg、.png、.gif";function x(){return new Promise((d,a)=>{w({multiple:!0,accept:"image/*",typeArr:u}).then(s=>{L(s,u)?d(s):(C.info(`上传文件类型需满足${A}`),a(`上传文件类型需满足${A}`))}).catch(s=>{a(s)})})}function w(d={}){return new Promise((a,s)=>{const t={accept:"*",typeArr:[],multiple:!1,size:10240,limit:5,...d},i=document.createElement("input");i.type="file",i.multiple=t.multiple,i.accept=t.accept,i.style.width="0",i.style.height="0",document.body.appendChild(i),i.click(),i.oninput=k=>{const n=[...k.target.files];T(n,t).then(()=>{a(n)}).catch(h=>{C.error(h),s(h)})},window.addEventListener("focus",()=>{setTimeout(()=>{i.value||(document.body.removeChild(i),s("用户取消上传"))},500)},{once:!0})})}function L(d,a=[]){const s=Array.from(d);let t=[];s.forEach(n=>{t.push(P(n))});const i=t.filter(n=>a.includes(n));return t.length===i.length}function P(d){var a;return(a=d.name.split(".")[d.name.split(".").length-1])==null?void 0:a.toLowerCase()}function T(d,a){return new Promise((s,t)=>{if(d.length>a.limit)return t(`上传数量超过${a.limit}个`);s("校验通过")})}const D=d=>(I("data-v-0dd9d134"),d=d(),j(),d),V=D(()=>l("blockquote",null,[l("p",null,[p("Vue3 + ts函数式封装支持 "),l("code",null,"函数式｜组件"),p(" 两种使用方式")])],-1)),$=D(()=>l("h2",{id:"演示",tabindex:"-1"},[p("演示 "),l("a",{class:"header-anchor",href:"#演示","aria-label":'Permalink to "演示"'},"​")],-1)),S={class:"for-box"},M=["src"],N=f("",4),q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/vue/uploadImage/index.md","filePath":"web/vue/uploadImage/index.md"}'),G={name:"web/vue/uploadImage/index.md"},O=Object.assign(G,{setup(d){const a=y([]),s=y(!1);function t(){s.value=!0,x().then(k=>{const n=[];k.forEach(h=>{const e=URL.createObjectURL(h);n.push(e)}),a.value=[...a.value,...n]}).finally(()=>{s.value=!1})}function i(){a.value.length=0}return(k,n)=>{const h=o("c-title"),e=o("a-button");return r(),E("div",null,[g(h,{title:"函数式封装上传图片组件"}),V,$,g(e,{type:"primary",onClick:t,loading:s.value,style:{"margin-right":"10px"}},{default:F(()=>[p(_(s.value?"上传中...":"上传"),1)]),_:1},8,["loading"]),g(e,{type:"primary",onClick:i},{default:F(()=>[p("清空图片")]),_:1}),l("div",S,[(r(!0),E(c,null,m(a.value,v=>(r(),E(c,{key:v},[v?(r(),E("img",{key:0,src:v,class:"show-img"},null,8,M)):b("",!0)],64))),128))]),N])}}}),z=B(O,[["__scopeId","data-v-0dd9d134"]]);export{q as __pageData,z as default};
