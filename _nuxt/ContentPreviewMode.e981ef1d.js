import{_ as b,T as k}from"./entry.5833b75e.js";import{u as T,l as g,p as S}from"./app.config.400c2c73.js";import{r as q}from"./asyncData.f353c3e1.js";import{u as I}from"./index.fcdf0b90.js";import{F as L,v,a1 as M,aa as A,N as u,O as l,P as N,T as R,R as e,a0 as p,V as x,W as C,Y as B,r as U,Z as V,_ as z}from"./runtime-core.esm-bundler.60e7e71f.js";/* empty css                               */import{_ as E}from"./_plugin-vue_export-helper.c27b6911.js";import"./Icon.2571d11f.js";const i=a=>(V("data-v-898775b8"),a=a(),z(),a),F=i(()=>e("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),H=i(()=>e("span",null,"Preview mode enabled",-1)),D={key:0},O=i(()=>e("div",{id:"__preview_background"},null,-1)),Z=i(()=>e("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),j=i(()=>e("p",null,"Initializing the preview...",-1)),W={key:0},Y=i(()=>e("div",{id:"__preview_background"},null,-1)),$={id:"__preview_loader"},G=L({__name:"ContentPreviewMode",props:{previewToken:{type:Object,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(a){const s=a,_=["__nuxt_preview","__preview_enabled"],P=T(),w=v(!0),m=v(!1),o=v(!1),r=v("");let t;const f=async()=>{I("previewToken").value="",g().query.preview="",await S(g().path),U(()=>{q()}),w.value=!1,r.value="",document.body.classList.remove(..._)},y=async c=>{const n=await s.syncPreview(c);if(o.value!==!0){if(!n){setTimeout(()=>y(c),1e3);return}o.value=!0,P.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&t.disconnect()}};return M(async()=>{t=(await b(()=>import("./index.3d3fbb3a.js"),[],import.meta.url)).connect(`${s.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:s.previewToken.value}});let n;t.on("connect",()=>{n=setTimeout(()=>{o.value||(n=setTimeout(()=>{r.value="Preview sync timed out",o.value=!1},3e4),t.emit("draft:requestSync"))},3e4)});const h=()=>{n&&(clearInterval(n),n=null)};t.on("draft:sync",d=>{if(h(),!d){s.requestPreviewSyncAPI(),t.once("draft:ready",()=>{t.emit("draft:requestSync")});return}y(d)}),t.on("draft:unauthorized",()=>{h(),r.value="Unauthorized preview token",o.value=!1}),t.on("disconnect",()=>{h()}),document.body.classList.add(..._),t.on("draft:update",d=>{m.value=!0,s.syncPreview(d),m.value=!1})}),A(()=>{document.body.classList.remove(..._)}),(c,n)=>(u(),l("div",null,[w.value?(u(),l("div",{key:0,id:"__nuxt_preview",class:N({__preview_ready:o.value,__preview_refreshing:m.value})},[o.value?(u(),l(R,{key:0},[F,H,e("button",{onClick:f}," Close ")],64)):p("",!0)],2)):p("",!0),x(k,{name:"preview-loading"},{default:C(()=>[w.value&&!o.value&&!r.value?(u(),l("div",D,[O,e("div",{id:"__preview_loader"},[Z,j,e("button",{onClick:f}," Cancel ")])])):p("",!0)]),_:1}),x(k,{name:"preview-loading"},{default:C(()=>[r.value?(u(),l("div",W,[Y,e("div",$,[e("p",null,B(r.value),1),e("button",{onClick:f}," Exit preview ")])])):p("",!0)]),_:1})]))}}),re=E(G,[["__scopeId","data-v-898775b8"]]);export{re as default};