import{u as l}from"./index.6de9140f.js";import{F as m,v as u,N as c,O as n,z as i,a0 as a,R as o,Y as v,Z as h,_ as f}from"./runtime-core.esm-bundler.60e7e71f.js";/* empty css                     */import{_ as y}from"./_plugin-vue_export-helper.c27b6911.js";const e=t=>(h("data-v-5b2f7f61"),t=t(),f(),t),C={key:0,class:"copied"},k=e(()=>o("div",{class:"scrim"},null,-1)),b=e(()=>o("div",{class:"content"}," Copied! ",-1)),S=[k,b],w=e(()=>o("div",{class:"header"},[o("div",{class:"controls"},[o("div"),o("div"),o("div")]),o("div",{class:"title"}," Bash ")],-1)),x={class:"window"},B=e(()=>o("span",{class:"sign"},"$",-1)),I={class:"content"},g={key:1,class:"prompt"},N=m({__name:"Terminal",props:{content:{type:String,required:!0}},setup(t){const d=t,{copy:p}=l(),s=u("init"),r=_=>{p(d.content).then(()=>{s.value="copied",setTimeout(()=>{s.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(_,T)=>(c(),n("div",{class:"terminal",onClick:r},[i(s)==="copied"?(c(),n("div",C,S)):a("",!0),w,o("div",x,[B,o("span",I,v(t.content),1)]),i(s)!=="copied"?(c(),n("div",g," Click to copy ")):a("",!0)]))}}),E=y(N,[["__scopeId","data-v-5b2f7f61"]]);export{E as default};