import{S as i}from"./index.2f51543b.js";import{C}from"./index.00281548.js";import{u as v}from"./use-translate.3147781c.js";import{D as V}from"./function-call.ea8557fd.js";import{z as x,C as n,r as b,o as g,a as _,e as t,w as a,A as e,F}from"./vue-libs.4d090e76.js";import"./with-install.6d6d29d8.js";import"./index.25dd8ae6.js";import"./index.1f370f94.js";import"./use-route.2644a9f9.js";import"./index.b95a2b81.js";import"./mount-component.564fff32.js";import"./use-expose.89c20f56.js";import"./constant.bdedcaa1.js";import"./interceptor.d5bd5ad2.js";import"./index.2607c55c.js";import"./use-touch.66e4202e.js";import"./index.4a4661ca.js";import"./utils.39620306.js";import"./index.cbbbdc40.js";import"./use-lazy-render.a4eed0b1.js";import"./on-popup-reopen.8d8043ad.js";import"./index.7f881137.js";import"./index.5c898f66.js";import"./index.794ccda7.js";import"./useChildren.e93f4c15.js";import"./useParent.fa48ddd0.js";const Y=x({setup(U){const u=v({"zh-CN":{title:"\u6807\u9898",confirm:"\u63D0\u9192",message:"\u662F\u5426\u5207\u6362\u5F00\u5173\uFF1F",withCell:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528",customSize:"\u81EA\u5B9A\u4E49\u5927\u5C0F",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",asyncControl:"\u5F02\u6B65\u63A7\u5236"},"en-US":{title:"Title",confirm:"Confirm",message:"Are you sure to toggle switch?",withCell:"Inside a Cell",customSize:"Custom Size",customColor:"Custom Color",asyncControl:"Async Control"}}),d=n(!0),m=n(!0),r=n(!0),p=n(!0),c=n(!0),j=f=>{V.confirm({title:u("title"),message:u("message")}).then(()=>{p.value=f})};return(f,l)=>{const s=b("demo-block");return g(),_(F,null,[t(s,{title:e(u)("basicUsage")},{default:a(()=>[t(e(i),{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=o=>d.value=o)},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("disabled")},{default:a(()=>[t(e(i),{modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=o=>d.value=o),disabled:""},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("loadingStatus")},{default:a(()=>[t(e(i),{modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=o=>d.value=o),loading:""},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("customSize")},{default:a(()=>[t(e(i),{modelValue:m.value,"onUpdate:modelValue":l[3]||(l[3]=o=>m.value=o),size:"24px"},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("customColor")},{default:a(()=>[t(e(i),{modelValue:r.value,"onUpdate:modelValue":l[4]||(l[4]=o=>r.value=o),"active-color":"#ee0a24","inactive-color":"#dcdee0"},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("asyncControl")},{default:a(()=>[t(e(i),{"model-value":p.value,"onUpdate:modelValue":j},null,8,["model-value"])]),_:1},8,["title"]),t(s,{title:e(u)("withCell")},{default:a(()=>[t(e(C),{center:"",title:e(u)("title")},{"right-icon":a(()=>[t(e(i),{modelValue:c.value,"onUpdate:modelValue":l[5]||(l[5]=o=>c.value=o),size:"24"},null,8,["modelValue"])]),_:1},8,["title"])]),_:1},8,["title"])],64)}}});export{Y as default};