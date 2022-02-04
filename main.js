(()=>{"use strict";var e,n,t,r,a,o,i,c,s,d,l,u,p,h,f={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,".style-nav {\n    padding: 1em;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    border: 1px solid black;\n    gap: 1em;\n}\n\n.style-nav-buttons {\n    cursor: pointer;\n    padding: 1em;\n    border: 1px solid black;\n    background-color: rgb(255, 255, 255);\n}\n.style-nav-buttons:hover {\n    filter: brightness(90%);\n}\n\n.style-div {\n    margin-top: 1vh;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    gap: 1em;\n    flex: 1 1 0px;\n}\n\n.style-div-children {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;  \n    flex: 1 1 0px; \n    width: 200px;\n}\n\n.style-div-grandchildren {\n    display: flex;\n    flex-wrap: wrap;\n    border: 1px solid black;\n    padding:1em;\n    justify-content: center;\n    align-items: center;    \n}\n\n\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=t(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var f=a(h,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},m={};function v(e){var n=m[e];if(void 0!==n)return n.exports;var t=m[e]={id:e,exports:{}};return f[e](t,t.exports,v),t.exports}v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=v(379),n=v.n(e),t=v(795),r=v.n(t),a=v(569),o=v.n(a),i=v(565),c=v.n(i),s=v(216),d=v.n(s),l=v(589),u=v.n(l),p=v(426),(h={}).styleTagTransform=u(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals,function(...e){const n=document.querySelector("#content"),t=document.createElement("div");t.appendChild(document.createElement("div")),t.childNodes[0].innerText="Restaurant Title";let r=["HOME","MENU","CONTACT"];for(let a=0;a<3;a++){e[a].classList.add("style-div");const o=document.createElement("div");o.innerText=r[a],o.addEventListener("click",(()=>{n.removeChild(n.childNodes[2]),n.appendChild(e[a])})),o.classList.add("style-nav-buttons"),t.appendChild(o)}t.classList.add("style-nav"),n.appendChild(t),n.appendChild(e[0]),homeButton.addEventListener("click",(()=>{n.removeChild(n.childNodes[2]),n.appendChild(homePage)})),menuButton.addEventListener("click",(()=>{n.removeChild(n.childNodes[2]),n.appendChild(menuPage)})),contactButton.addEventListener("click",(()=>{n.removeChild(n.childNodes[2]),n.appendChild(contactPage)}))}(function(){const e=document.createElement("div");let n=["About Information","Schedule","Location"],t=["Here is the section that talks about the restaurant and what it's about.","This is the section that showcases the schedule of the restaurant i.e. days it's open, hours open, holidays when its closed, etc.","Location of Restaurant, perhaps with complemented with a map."];for(let r=0;r<3;r++){const a=document.createElement("div");a.classList.add("style-div-children");const o=document.createElement("div");o.innerText=n[r];const i=document.createElement("div");i.innerText=t[r],i.classList.add("style-div-grandchildren"),a.appendChild(o),a.appendChild(i),e.appendChild(a)}return e}(),function(){const e=document.createElement("div");let n=["Appetizers","Entrees","Desserts"],t=["A bunch of appetizers go here.","A bunch of entrees go here.","A bunch of desserts go here."];for(let r=0;r<3;r++){const a=document.createElement("div");a.classList.add("style-div-children");const o=document.createElement("div");o.innerText=n[r];const i=document.createElement("div");i.innerText=t[r],i.classList.add("style-div-grandchildren"),a.appendChild(o),a.appendChild(i),e.appendChild(a)}return e}(),function(){const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div");return n.innerText="Contact Info.",t.innerText="Restaurant Phone Number.",r.innerText="Restaurant Email Address.",e.appendChild(n),e.appendChild(t),e.appendChild(r),e}())})();