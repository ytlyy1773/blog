import{d as u,c as B,w as A,M as D,N as k,a1 as g,G as c,V as s,L as E,k as d,K as p,_ as m,f as v,H as f,am as b}from"./chunks/framework.2MLJsAWF.js";const x={class:"jw-dialog-cont"},_={class:"jw-dialog-btn"},q=u({__name:"dialogModule",props:{modelValue:{type:Boolean,required:!0,default:!1},resolve:{type:Function,default:void 0},reject:{type:Function,default:void 0},title:{type:String,default:"标题"},mainText:{type:String,default:"弹窗内容"},width:{type:String,default:"400px"},LeftText:{type:String,default:"取消"},LeftType:{type:[String,void 0],default:void 0},RightText:{type:String,default:"确认"},RightType:{type:[String,void 0],default:"primary"}},emits:["update:modelValue"],setup(i,{emit:n}){const a=i,t=n,l=B({get(){return a.modelValue},set(e){t("update:modelValue",e)}});A(a,e=>{console.log(e.modelValue)});function h(){t("update:modelValue",!1),a.reject()}function r(){t("update:modelValue",!1),a.resolve()}return(e,y)=>{const F=g("a-button"),o=g("a-modal");return c(),D(o,{open:l.value,"onUpdate:open":y[0]||(y[0]=C=>l.value=C),wrapClassName:"dialog-box",width:i.width,closable:!1,footer:null,onCancel:h},{header:k(()=>[s("div",null,E(i.title),1)]),default:k(()=>[s("div",{onClick:h,class:"jw-dialog-close"},"×"),s("div",x,[s("div",null,E(i.mainText),1)]),s("div",_,[d(F,{type:i.LeftType,onClick:h},{default:k(()=>[p(E(i.LeftText),1)]),_:1},8,["type"]),d(F,{type:i.RightType,onClick:r},{default:k(()=>[p(E(i.RightText),1)]),_:1},8,["type"])])]),_:1},8,["open","width"])}}}),T=m(q,[["__scopeId","data-v-9cdf1129"]]),w=s("h1",{id:"封装dialog弹窗",tabindex:"-1"},[p("封装dialog弹窗 "),s("a",{class:"header-anchor",href:"#封装dialog弹窗","aria-label":'Permalink to "封装dialog弹窗"'},"​")],-1),V=s("blockquote",null,[s("p",null,"Vue3 + ts函数式封装")],-1),j=s("h2",{id:"演示",tabindex:"-1"},[p("演示 "),s("a",{class:"header-anchor",href:"#演示","aria-label":'Permalink to "演示"'},"​")],-1),S=b("",4),N=JSON.parse('{"title":"vue封装dialog弹窗","description":"在vue项目中使用函数式封装一个dialog弹窗","frontmatter":{"title":"vue封装dialog弹窗","description":"在vue项目中使用函数式封装一个dialog弹窗"},"headers":[],"relativePath":"web/vue/dialog/index.md","filePath":"web/vue/dialog/index.md"}'),L={name:"web/vue/dialog/index.md"},P=Object.assign(L,{setup(i){const n=v(!1);function a(){n.value=!0}return(t,l)=>{const h=g("a-button");return c(),f("div",null,[w,V,j,d(h,{type:"primary",onClick:a},{default:k(()=>[p("唤醒弹窗")]),_:1}),d(T,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=r=>n.value=r)},null,8,["modelValue"]),S])}}});export{N as __pageData,P as default};