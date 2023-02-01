(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(81),r=n.n(a),o=n(645),i=n.n(o)()(r());i.push([e.id,"body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    margin: 0;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 200px;\r\n    width: auto;\r\n    background-color: blue;\r\n}\r\n\r\n.background {\r\n    height: 800px;\r\n    width: auto;\r\n    background-color: blueviolet;\r\n}\r\n\r\n.footer {\r\n    height: 100px;\r\n    width: auto;\r\n    background-color: rgb(43, 214, 226);\r\n}\r\n\r\n#container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n.page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height: 750px;\r\n    width: 500px;\r\n    background-color: rgb(0, 0, 0, 0.5);\r\n    margin-top: 25px;\r\n    padding: 0px 30px;\r\n}\r\n\r\nimg {\r\n    height: 400px;\r\n    width: 280px;\r\n}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);a&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],l=a.base?s[0]+a.base:s[0],p=o[l]||0,h="".concat(l," ").concat(p);o[l]=p+1;var u=n(h),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(d);else{var m=r(d,a);a.byIndex=c,t.splice(c,0,{identifier:h,updater:m,references:1})}i.push(h)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=a(e,r),l=0;l<o.length;l++){var p=n(o[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),r=n.n(a),o=n(569),i=n.n(o),c=n(565),s=n.n(c),l=n(216),p=n.n(l),h=n(589),u=n.n(h),d=n(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=p(),t()(d.Z,m),d.Z&&d.Z.locals&&d.Z.locals;const g=n.p+"167ca86bbb21eb2f155d.jpg";function f(){const e=document.querySelector("#container"),t=document.createElement("div");t.classList.add("page");const n=document.createElement("h2");n.textContent="Main page!";const a=document.createElement("img");a.src=g;const r=document.createElement("p");r.textContent="If this was a real paragraph I might actually ahve something to say \n     If this was a real paragraph I might actually ahve something to say \n     If this was a real paragraph I might actually ahve something to say \n     If this was a real paragraph I might actually ahve something to say \n     If this was a real paragraph I might actually ahve something to say \n     If this was a real paragraph I might actually ahve something to say",t.appendChild(n),t.appendChild(a),t.appendChild(r),e.appendChild(t)}const y=n.p+"5e65bdc284459f6792c2.jpg",v=n.p+"aa90124923a10db58a89.jpg";function I(){document.getElementById("container").innerHTML="",console.log("supposed to work")}f();const b=document.querySelector(".mainP");b.addEventListener("click",I),b.addEventListener("click",f);const w=document.querySelector(".offerP");w.addEventListener("click",I),w.addEventListener("click",(function(){const e=document.querySelector("#container"),t=document.createElement("div");t.classList.add("page");const n=document.createElement("h2");n.textContent="Page 2!";const a=document.createElement("img");a.src=y;const r=document.createElement("p");r.textContent="If this was a real paragraph I might actually ahve something to say \n     If this was a real paragraph I might actually ahve something to say \n     If this was a real paragraph I might actually ahve something to say \n     If this was a real paragraph I might actually ahve something to say \n     If this was a real paragraph I might actually ahve something to say \n     If this was a real paragraph I might actually ahve something to say",t.appendChild(n),t.appendChild(a),t.appendChild(r),e.appendChild(t)}));const x=document.querySelector(".contactP");x.addEventListener("click",I),x.addEventListener("click",(function(){const e=document.querySelector("#container"),t=document.createElement("div");t.classList.add("page");const n=document.createElement("h2");n.textContent="Page 3!";const a=document.createElement("img");a.src=v;const r=document.createElement("p");r.textContent="If this was a real paragraph I might actually ahve something to say \n     If this was a real paragraph I might actually ahve something to say \n     If this was a real paragraph I might actually ahve something to say \n     If this was a real paragraph I might actually ahve something to say \n     If this was a real paragraph I might actually ahve something to say \n     If this was a real paragraph I might actually ahve something to say",t.appendChild(n),t.appendChild(a),t.appendChild(r),e.appendChild(t)}))})()})();