(()=>{"use strict";var n={772:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,":root {\n    --mainBg: #1e222d;\n    --color1: #C188C1;\n    --color2: #87C0AF;\n    --color3: #BF9F86;\n}\n\nhtml,\nbody {\n    margin: 0;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    box-sizing: border-box;\n    background-color: var(--mainBg);\n    font-family: Helvetica, sans-serif;\n    font-size: 16px;\n    color: aliceblue;\n    user-select: none;\n}\n\na {\n    color: inherit;\n    text-decoration: inherit;\n}\n\n.header {\n    margin: 1vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 3vh;\n}\n\n.navigation {\n    height: fit-content;\n    font-size: 2vh;\n    cursor: pointer;\n    border: none;\n    color: var(--color1);\n    background-color: transparent;\n}\n\n.doAndTitle {\n    font-size: 8vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    text-align: center;\n}\n\n.doThing {\n    all: unset;\n    display: inline-block;\n    cursor: pointer;\n    color: var(--color1);\n}\n\n.listTitle {\n    margin: 0;\n    color: rgb(255, 255, 255);\n    white-space: nowrap;\n}\n\n.taskList {\n    margin: 1vh;\n    text-align: center;\n    width: 100vw;\n    word-wrap: break-word;\n    overflow: scroll;\n}\n\nli {\n    list-style: none;\n    text-indent: 0;\n    padding: 10px;\n    display: block;\n    font-size: 3vh;\n    margin: 1vh;\n}\n\n.completedTask {\n    text-decoration: line-through;\n    color: var(--color1);\n}\n\n.constantContent {\n    flex: 1;\n    margin: 1vh;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\n.variableContent {\n    align-items: center;\n    width: 100vw;\n    height: 100%;\n    display: grid;\n    grid-template-rows: 100%;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-auto-columns: 1fr;\n    overflow: scroll;\n    scroll-snap-type: x mandatory;\n}\n\n.page {\n    height: 100%;\n    scroll-snap-align: start;\n}\n\n.addTask {\n    text-align: center;\n    font-size: 3vh;\n    color: gray;\n    cursor: pointer;\n}\n\n.task-input {\n    text-align: center;\n    outline: none;\n    font-size: 3vh;\n    width: 90%;\n    word-wrap: break-word;\n    height: auto;\n    margin: auto;\n    margin-top: 1vh;\n    padding: 10px;\n}\n\n.placeholder {\n    text-align: center;\n    color: gray;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var v=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),m=t(772),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=d(),e()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const f=(n,e)=>{const t=document.querySelector(".variableContent"),o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("button"),i=document.createElement("span"),c=document.createElement("div");o.classList.add("page"),r.classList.add("doAndTitle"),a.classList.add("doThing"),i.classList.add("listTitle"),c.classList.add("taskList"),a.textContent="do",r.appendChild(a),r.appendChild(i),i.textContent=n,o.appendChild(r),o.appendChild(c),t.appendChild(o),o.style.backgroundImage=`linear-gradient(to bottom, var(--mainBg), 90%, var(--${e}))`,a.style.color=`var(--${e})`;const s=document.createElement("div");s.classList.add("addTask"),s.textContent="+",c.prepend(s),s.addEventListener("click",(()=>{const n=document.createElement("div");n.contentEditable=!0,n.classList.add("task-input"),c.append(n),n.focus();const e=document.createElement("div");e.classList.add("placeholder"),e.innerText="New task",n.insertAdjacentElement("afterbegin",e),n.addEventListener("input",(()=>{""!==n.textContent&&e.remove()}));const t=()=>{const o=n.textContent;if(o){const n=document.createElement("li");n.textContent=o,c.append(n)}n.removeEventListener("focusout",t),n.remove(),e.remove(),document.querySelectorAll("li").forEach((n=>{n.addEventListener("dblclick",(n=>{n.target.classList.toggle("completedTask")}))}))};n.addEventListener("keydown",(n=>{"Enter"===n.key&&(n.preventDefault(),t())})),n.addEventListener("focusout",t)}))};!function(){const n=document.querySelector("body"),e=document.createElement("div"),t=document.createElement("div"),o=document.createElement("a"),r=document.createElement("button"),a=document.createElement("span"),i=document.createElement("div");e.classList.add("constantContent"),t.classList.add("header"),o.classList.add("github"),r.classList.add("navigation"),a.classList.add("logo"),i.classList.add("variableContent"),o.href="https://github.com/holoflash/doBetter",o.textContent="/holoflash",r.textContent="ALL LISTS",a.textContent="doBetter",t.append(o,r,a),e.append(t),n.append(e,i)}(),f("Today","color1"),f("Tomorrow","color2"),f("Someday","color3")})()})();