import k from"./ArticlesListItem.0af246fe.js";import v from"./ProseA.adad0ed8.js";import w from"./ProseCodeInline.e73b04e0.js";import{y as A}from"./app.config.400c2c73.js";import{u as I}from"./asyncData.f353c3e1.js";import{q as S}from"./entry.5833b75e.js";import{F as g,a6 as C,G as B,z as c,N as o,O as n,R as a,V as i,T as L,U as N,X as e,W as m,Z as V,_ as T,$ as q}from"./runtime-core.esm-bundler.60e7e71f.js";/* empty css                         */import{_ as F}from"./_plugin-vue_export-helper.c27b6911.js";import"./date.824a539b.js";/* empty css                             *//* empty css                   */import"./index.fcdf0b90.js";import"./Icon.2571d11f.js";const P=t=>(V("data-v-9ec3c3cc"),t=t(),T(),t),$={key:0,class:"articles-list"},b={class:"featured"},z={class:"layout"},D={key:1,class:"tour"},E=P(()=>a("p",null,"Seems like there are no articles yet.",-1)),G=g({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const d=t,{data:u}=([s,l]=C(async()=>I("articles",async()=>await S(A(d.path)).sort({date:-1}).find())),s=await s,l(),s),r=B(()=>u.value||[]);return(O,R)=>{var p;const _=k,f=v,h=w;return(p=c(r))!=null&&p.length?(o(),n("div",$,[a("div",b,[i(_,{article:c(r)[0],featured:!0},null,8,["article"])]),a("div",z,[(o(!0),n(L,null,N(c(r).slice(1),(y,x)=>(o(),q(_,{key:x,article:y},null,8,["article"]))),128))])])):(o(),n("div",D,[E,a("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:m(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:m(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),ot=F(G,[["__scopeId","data-v-9ec3c3cc"]]);export{ot as default};