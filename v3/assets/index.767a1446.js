import{C as n}from"./index.d6f88d18.js";import{S as s}from"./index.45c4057e.js";import{a as U}from"./use-translate.a3af5295.js";import{T as C}from"./function-call.a4c482c7.js";import{z as B,D as r,r as z,o as S,c as T,w as o,e as l,B as e}from"./vue-libs.6d5ed635.js";import"./with-install.1b1f1c54.js";import"./use-route.c058a8b7.js";import"./index.97c885c5.js";import"./constant.80c6de18.js";import"./interceptor.0311b2d6.js";import"./mount-component.10e6caec.js";import"./use-expose.b6cf8b20.js";import"./index.699a1f95.js";import"./use-touch.21117490.js";import"./use-lazy-render.437ea78e.js";import"./on-popup-reopen.8120d0d7.js";import"./index.e5d520da.js";import"./index.31456700.js";const Q=B({setup(D){const a=U({"zh-CN":{step:"\u6B65\u957F\u8BBE\u7F6E",range:"\u9650\u5236\u8F93\u5165\u8303\u56F4",integer:"\u9650\u5236\u8F93\u5165\u6574\u6570",roundTheme:"\u5706\u89D2\u98CE\u683C",customSize:"\u81EA\u5B9A\u4E49\u5927\u5C0F",beforeChange:"\u5F02\u6B65\u53D8\u66F4",disableInput:"\u7981\u7528\u8F93\u5165\u6846",decimalLength:"\u56FA\u5B9A\u5C0F\u6570\u4F4D\u6570"},"en-US":{step:"Step",range:"Range",integer:"Integer",roundTheme:"Round Theme",customSize:"Custom Size",beforeChange:"Before Change",disableInput:"Disable Input",decimalLength:"Decimal Length"}}),d=r(1),i=r(1),m=r(1),p=r(1),v=r(1),V=r(1),b=r(1),c=r(1),f=r(1),g=r(1),x=()=>(C.loading({forbidClick:!0}),new Promise(j=>{setTimeout(()=>{C.clear(),j(!0)},500)}));return(j,t)=>{const F=z("demo-block");return S(),T(F,{card:""},{default:o(()=>[l(e(n),{center:"",title:e(a)("basicUsage")},{value:o(()=>[l(e(s),{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=u=>d.value=u)},null,8,["modelValue"])]),_:1},8,["title"]),l(e(n),{center:"",title:e(a)("step")},{value:o(()=>[l(e(s),{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=u=>i.value=u),step:"2"},null,8,["modelValue"])]),_:1},8,["title"]),l(e(n),{center:"",title:e(a)("range")},{value:o(()=>[l(e(s),{modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=u=>m.value=u),min:5,max:8},null,8,["modelValue"])]),_:1},8,["title"]),l(e(n),{center:"",title:e(a)("integer")},{value:o(()=>[l(e(s),{modelValue:p.value,"onUpdate:modelValue":t[3]||(t[3]=u=>p.value=u),integer:""},null,8,["modelValue"])]),_:1},8,["title"]),l(e(n),{center:"",title:e(a)("disabled")},{value:o(()=>[l(e(s),{modelValue:v.value,"onUpdate:modelValue":t[4]||(t[4]=u=>v.value=u),disabled:""},null,8,["modelValue"])]),_:1},8,["title"]),l(e(n),{center:"",title:e(a)("disableInput")},{value:o(()=>[l(e(s),{modelValue:g.value,"onUpdate:modelValue":t[5]||(t[5]=u=>g.value=u),"disable-input":""},null,8,["modelValue"])]),_:1},8,["title"]),l(e(n),{center:"",title:e(a)("decimalLength")},{value:o(()=>[l(e(s),{modelValue:c.value,"onUpdate:modelValue":t[6]||(t[6]=u=>c.value=u),"decimal-length":1,step:"0.2"},null,8,["modelValue"])]),_:1},8,["title"]),l(e(n),{center:"",title:e(a)("customSize")},{value:o(()=>[l(e(s),{modelValue:b.value,"onUpdate:modelValue":t[7]||(t[7]=u=>b.value=u),"button-size":"32px","input-width":"40px"},null,8,["modelValue"])]),_:1},8,["title"]),l(e(n),{center:"",title:e(a)("beforeChange")},{value:o(()=>[l(e(s),{modelValue:V.value,"onUpdate:modelValue":t[8]||(t[8]=u=>V.value=u),"before-change":x},null,8,["modelValue"])]),_:1},8,["title"]),l(e(n),{center:"",title:e(a)("roundTheme")},{value:o(()=>[l(e(s),{modelValue:f.value,"onUpdate:modelValue":t[9]||(t[9]=u=>f.value=u),theme:"round","button-size":"22","disable-input":""},null,8,["modelValue"])]),_:1},8,["title"])]),_:1})}}});export{Q as default};