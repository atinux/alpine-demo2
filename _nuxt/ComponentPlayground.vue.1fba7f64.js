import{u as m}from"./app.config.400c2c73.js";import{u as c}from"./asyncData.f353c3e1.js";import{z as u,G as s,F as l,v as i,h as t,a5 as d}from"./runtime-core.esm-bundler.60e7e71f.js";import f from"./Ellipsis.d12f713a.js";import _ from"./ComponentPlaygroundData.aff51e1a.js";async function y(o){m();const e=u(o);{const{data:n}=await c(`nuxt-component-meta${e?`-${e}`:""}`,()=>$fetch(`/api/component-meta${e?`/${e}`:""}`));return s(()=>n.value)}}const w=l({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const e=s(()=>d(o.component)),n=i({...o.props}),r=await y(o.component);return{as:e,formProps:n,componentData:r}},render(o){const e=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const p=r.replace("component-","");n[p]=a}return n},{});return t("div",{class:"component-playground"},[t("div",{class:"component-playground-wrapper"},[t(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),t(o.as,{...o.formProps,class:"component-playground-component"},{...e})]),t(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});export{w as _};