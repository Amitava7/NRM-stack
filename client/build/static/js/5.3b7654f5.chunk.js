(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{81:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(34),l=t(0),i=t.n(l),c=(t(81),Object(l.forwardRef)(function(e,a){var t=Object(l.useState)(""),c=Object(n.a)(t,2),m=c[0],r=c[1],s=Object(l.useState)(""),o=Object(n.a)(s,2),f=o[0],d=o[1],g=function(e){"mail"===e.target.name?r(e.target.value):d(e.target.value)};return i.a.createElement("div",{ref:a,id:"contact",className:"contact"},i.a.createElement("div",{className:"chair"}),i.a.createElement("div",{className:"connect"},i.a.createElement("div",{className:"social"},i.a.createElement("a",{href:"https://www.linkedin.com/in/amitava-mozumder/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{alt:"linkedin",title:"LinkedIn",src:"/images/linkin.png"})),i.a.createElement("a",{href:"mailto:connect@amitava.info"},i.a.createElement("img",{alt:"gmail",title:"Gmail",src:"/images/gmail.png"})),i.a.createElement("a",{href:"mailto:connect@amitava.info"},i.a.createElement("img",{alt:"mymail",title:"Private mail",src:"/images/mymail.png"}))),i.a.createElement("div",{class:"form__group field"},i.a.createElement("input",{type:"input",class:"form__field",placeholder:"mail",name:"mail",id:"mail",required:!0,onChange:g,value:m}),i.a.createElement("label",{for:"mail",class:"form__label"},"Email")),i.a.createElement("div",{class:"form__group field"},i.a.createElement("textarea",{class:"form__field",placeholder:"message",name:"message",id:"message",onChange:g,value:f}),i.a.createElement("label",{for:"message",class:"form__label"},"Message")),i.a.createElement("button",{class:"pushable",onClick:function(e){fetch("/api/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mail:m,msg:f})}).then(function(e){d(""),r("")}).catch(console.error)}},i.a.createElement("span",{class:"front"},"Send"))))}));a.default=c}}]);