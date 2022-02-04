(()=>{"use strict";var e,n,t,r,a,i,o,d,c,s,l,u,p,m,v={426:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(81),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([e.id,".style-nav {\n    padding: 1em;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    border: 1px solid black;\n}\n\n.style-div {\n    font-size: 5vw;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border: 1px solid black;\n}",""]);const d=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(o[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},o=[],d=0;d<e.length;d++){var c=e[d],s=r.base?c[0]+r.base:c[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var v=a(m,r);r.byIndex=d,n.splice(d,0,{identifier:u,updater:v,references:1})}o.push(u)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var d=t(i[o]);n[d].references--}for(var c=r(e,a),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},f={};function h(e){var n=f[e];if(void 0!==n)return n.exports;var t=f[e]={id:e,exports:{}};return v[e](t,t.exports,h),t.exports}h.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return h.d(n,{a:n}),n},h.d=(e,n)=>{for(var t in n)h.o(n,t)&&!h.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},h.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=h(379),n=h.n(e),t=h(795),r=h.n(t),a=h(569),i=h.n(a),o=h(565),d=h.n(o),c=h(216),s=h.n(c),l=h(589),u=h.n(l),p=h(426),(m={}).styleTagTransform=u(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=s(),n()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,function(...e){const n=e[0],t=e[1],r=e[2];n.classList.add("style-div"),t.classList.add("style-div"),r.classList.add("style-div");const a=document.querySelector("#content"),i=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div");o.innerText="HOME",d.innerText="MENU",c.innerText="CONTACT",i.appendChild(o),i.appendChild(d),i.appendChild(c),i.classList.add("style-nav"),a.appendChild(i),a.appendChild(e[0]),o.addEventListener("click",(()=>{a.removeChild(a.childNodes[2]),a.appendChild(n)})),d.addEventListener("click",(()=>{a.removeChild(a.childNodes[2]),a.appendChild(t)})),c.addEventListener("click",(()=>{a.removeChild(a.childNodes[2]),a.appendChild(r)}))}(function(){const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div");return n.innerText="Restaurant Title",t.innerText="Restaurant's About Information.",r.innerText="Restaurant Schedule",a.innerText="Restaurant Location",e.appendChild(n),e.appendChild(t),e.appendChild(r),e.appendChild(a),e}(),function(){const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div");return n.innerText="Restaurant's Menu",t.innerText="Appetizers",r.innerText="Entrees",a.innerText="Desserts",e.appendChild(n),e.appendChild(t),e.appendChild(r),e.appendChild(a),e}(),function(){const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div");return n.innerText="Contact",t.innerText="Restaurant Phone Number.",r.innerText="Restaurant Email Address",e.appendChild(n),e.appendChild(t),e.appendChild(r),e}())})();