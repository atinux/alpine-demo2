import{y as s,l as y}from"./app.config.400c2c73.js";import{h as u}from"./entry.5833b75e.js";import g from"./ContentRenderer.5ab3fc53.js";import v from"./ContentQuery.4cad0c88.js";import{F as w,ab as C,h as o}from"./runtime-core.esm-bundler.60e7e71f.js";import"./index.fcdf0b90.js";import"./Icon.2571d11f.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./ContentRendererMarkdown.12679dc7.js";import"./asyncData.f353c3e1.js";const j=w({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(f){const e=C(),{tag:m,excerpt:i,path:d,query:r,head:a}=f,c={...r||{},path:d||(r==null?void 0:r.path)||s(y().path),find:"one"},l=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(v,c,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:h})=>{var p;return a&&u(t),(p=e.default)==null?void 0:p.call(e,{doc:t,refresh:n,isPartial:h,excerpt:i,...this.$attrs})}:({data:t})=>(a&&u(t),o(g,{value:t,excerpt:i,tag:m,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):l("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{j as default};