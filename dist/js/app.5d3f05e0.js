(function(n){function e(e){for(var r,o,u=e[0],i=e[1],l=e[2],d=0,s=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&s.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r]);b&&b(e);while(s.length)s.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var n,e=0;e<c.length;e++){for(var t=c[e],r=!0,o=1;o<t.length;o++){var i=t[o];0!==a[i]&&(r=!1)}r&&(c.splice(e--,1),n=u(u.s=t[0]))}return n}var r={},a={app:0},c=[];function o(n){return u.p+"js/"+({}[n]||n)+"."+{"chunk-0a6af976":"790ce32f","chunk-2d0af0fb":"357aed04","chunk-2d0cc046":"324954ec","chunk-2d0cf4c3":"3d21f5b9","chunk-2d0f0a00":"0657ee36","chunk-30b6cd67":"e0e662a0","chunk-37b991d4":"7080aa54","chunk-3b7a24d5":"66f30d05","chunk-a3d6d12e":"a7fd6214"}[n]+".js"}function u(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(n){var e=[],t=a[n];if(0!==t)if(t)e.push(t[2]);else{var r=new Promise((function(e,r){t=a[n]=[e,r]}));e.push(t[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=o(n);var l=new Error;c=function(e){i.onerror=i.onload=null,clearTimeout(d);var t=a[n];if(0!==t){if(t){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;l.message="Loading chunk "+n+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,t[1](l)}a[n]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(e)},u.m=n,u.c=r,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)u.d(t,r,function(e){return n[e]}.bind(null,r));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/jiangsvue3_week7/dist/",u.oe=function(n){throw console.error(n),n};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var b=l;c.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"2ede":function(n,e,t){},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),a=t("bc3a"),c=t.n(a),o=t("2106"),u=t.n(o),i=t("8a14");t("fe26");function l(n,e){var t=Object(r["z"])("router-view");return Object(r["s"])(),Object(r["e"])(t)}t("7857");const d={};d.render=l;var b=d,s=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),f={class:"navbar navbar-expand-lg navbar-light bg-light p-3"},p={class:"container-fluid"},h=Object(r["i"])("a",{class:"navbar-brand",href:"#"},"RE：HOUSE",-1),v=Object(r["i"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["i"])("span",{class:"navbar-toggler-icon"})],-1),O={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},j={class:"navbar-nav"},m=Object(r["h"])("首頁"),g=Object(r["h"])("關於我們"),k=Object(r["h"])("產品列表"),y=Object(r["h"])("購物車"),w=Object(r["h"])("後台管理頁面");function P(n,e){var t=Object(r["z"])("router-link"),a=Object(r["z"])("router-view");return Object(r["s"])(),Object(r["e"])(r["a"],null,[Object(r["i"])("nav",f,[Object(r["i"])("div",p,[h,v,Object(r["i"])("div",O,[Object(r["i"])("div",j,[Object(r["i"])(t,{class:"nav-link",to:"/"},{default:Object(r["I"])((function(){return[m]})),_:1}),Object(r["i"])(t,{class:"nav-link",to:"/about"},{default:Object(r["I"])((function(){return[g]})),_:1}),Object(r["i"])(t,{class:"nav-link",to:"/products"},{default:Object(r["I"])((function(){return[k]})),_:1}),Object(r["i"])(t,{class:"nav-link",to:"/cart"},{default:Object(r["I"])((function(){return[y]})),_:1}),Object(r["i"])(t,{class:"nav-link",to:"/admin"},{default:Object(r["I"])((function(){return[w]})),_:1})])])])]),Object(r["i"])(a)],64)}const _={};_.render=P;var x=_,M=[{path:"/",component:x,children:[{path:"/",component:function(){return t.e("chunk-2d0cc046").then(t.bind(null,"4bac"))}},{path:"/about",name:"About",component:function(){return t.e("chunk-2d0f0a00").then(t.bind(null,"9cbb"))}},{path:"/products",name:"Products",component:function(){return t.e("chunk-37b991d4").then(t.bind(null,"ed84"))}},{path:"/product/:id",name:"Product",component:function(){return t.e("chunk-a3d6d12e").then(t.bind(null,"658f"))}},{path:"/cart",name:"Cart",component:function(){return t.e("chunk-2d0cf4c3").then(t.bind(null,"62b3"))}}]},{path:"/login",name:"Login",component:function(){return t.e("chunk-30b6cd67").then(t.bind(null,"ac5b"))}},{path:"/admin",name:"Admin",component:function(){return t.e("chunk-3b7a24d5").then(t.bind(null,"a92e"))},children:[{path:"products",name:"adminProducts",component:function(){return t.e("chunk-0a6af976").then(t.bind(null,"c267"))}},{path:"orders",name:"adminOrders",component:function(){return t.e("chunk-2d0af0fb").then(t.bind(null,"0d5f"))}}]}],A=Object(s["a"])({history:Object(s["b"])(),routes:M}),S=A,E=Object(r["d"])(b);E.use(S),E.use(u.a,c.a),E.component("Loading",i["a"]),E.mount("#app")},7857:function(n,e,t){"use strict";t("2ede")}});
//# sourceMappingURL=app.5d3f05e0.js.map