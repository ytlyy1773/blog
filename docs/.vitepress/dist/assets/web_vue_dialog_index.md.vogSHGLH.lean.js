import{d as C,c as u,w as B,a1 as E,M as A,N as k,G as F,V as i,L as e,k as p,K as d,_ as D,f as m,H as f,ac as v}from"./chunks/framework.d6SjVawx.js";const b={class:"jw-dialog-cont"},x={class:"jw-dialog-btn"},_=C({__name:"dialogModule",props:{modelValue:{type:Boolean,required:!0,default:!1},resolve:{type:Function,default:void 0},reject:{type:Function,default:void 0},title:{type:String,default:"标题"},mainText:{type:String,default:"弹窗内容"},width:{type:String,default:"400px"},LeftText:{type:String,default:"取消"},LeftType:{type:[String,void 0],default:void 0},RightText:{type:String,default:"确认"},RightType:{type:[String,void 0],default:"primary"}},emits:["update:modelValue"],setup(s,{emit:a}){const n=s,r=u({get(){return n.modelValue},set(h){a("update:modelValue",h)}});B(n,h=>{console.log(h.modelValue)});function l(){a("update:modelValue",!1),n.reject()}function g(){a("update:modelValue",!1),n.resolve()}return(h,t)=>{const y=E("a-button"),c=E("a-modal");return F(),A(c,{open:r.value,"onUpdate:open":t[0]||(t[0]=o=>r.value=o),wrapClassName:"dialog-box",width:s.width,closable:!1,footer:null,onCancel:l},{header:k(()=>[i("div",null,e(s.title),1)]),default:k(()=>[i("div",{onClick:l,class:"jw-dialog-close"},"×"),i("div",b,[i("div",null,e(s.mainText),1)]),i("div",x,[p(y,{type:s.LeftType,onClick:l},{default:k(()=>[d(e(s.LeftText),1)]),_:1},8,["type"]),p(y,{type:s.RightType,onClick:g},{default:k(()=>[d(e(s.RightText),1)]),_:1},8,["type"])])]),_:1},8,["open","width"])}}}),q=D(_,[["__scopeId","data-v-9cdf1129"]]),T=i("blockquote",null,[i("p",null,"Vue3 + ts函数式封装")],-1),w=i("h2",{id:"演示",tabindex:"-1"},[d("演示 "),i("a",{class:"header-anchor",href:"#演示","aria-label":'Permalink to "演示"'},"​")],-1),V=v("",4),L=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/vue/dialog/index.md","filePath":"web/vue/dialog/index.md"}'),j={name:"web/vue/dialog/index.md"},R=Object.assign(j,{setup(s){const a=m(!1);function n(){a.value=!0}return(r,l)=>{const g=E("c-title"),h=E("a-button");return F(),f("div",null,[p(g,{title:"封装dialog弹窗"}),T,w,p(h,{type:"primary",onClick:n},{default:k(()=>[d("唤醒弹窗")]),_:1}),p(q,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=t=>a.value=t)},null,8,["modelValue"]),V])}}});export{L as __pageData,R as default};
