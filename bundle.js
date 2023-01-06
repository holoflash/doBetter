(()=>{"use strict";var e={772:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([e.id,":root {\n    --mainBg: #1e222d;\n    --color1: #C188C1;\n    --color2: #87C0AF;\n    --color3: #BF9F86;\n}\n\n* {\n    caret-color: var(--color3);\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    touch-action: manipulation;\n}\n\nhtml,\nbody {\n    width: 100vw;\n    margin: auto;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    background-color: var(--mainBg);\n    font-family: Helvetica, sans-serif;\n    font-size: 16px;\n    color: aliceblue;\n}\n\na {\n    color: inherit;\n    text-decoration: inherit;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100vw;\n    padding-bottom: 1vh;\n    padding-top: 1vh;\n    position: absolute;\n    top: 0;\n    font-size: 2.5vh;\n    background-color: rgba(0, 0, 0, 0.112);\n}\n\n.header>* {\n    margin: 1vh;\n}\n\n.doAndTitle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    margin-top: 7vh;\n    font-size: 6.5vh;\n    width: 100vw;\n    background-color: var(--mainBg);\n}\n\n.doColor {\n    color: var(--color1);\n}\n\n.constantContent {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    align-items: center;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n}\n\n.variableContent {\n    align-items: center;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-auto-flow: column;\n    overflow: scroll;\n    scroll-snap-type: x mandatory;\n    scroll-behavior: smooth;\n    height: 100%;\n}\n\n.page {\n    flex: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n    scroll-snap-align: start;\n}\n\n.percentageDisplay {\n    font-size: 1.5vh;\n    margin: 0;\n    padding: 2vh;\n    align-self: center;\n}\n\n.taskList {\n    grid-column: 1 / 2;\n    min-height: 4vh;\n}\n\n.completedTaskList {\n    color: moccasin;\n    grid-column: 2 / 3;\n    padding-bottom: 1vh;\n}\n\n.taskList,\n.completedTaskList {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 100vw;\n    overflow: scroll;\n}\n\nli {\n    list-style: none;\n    text-indent: 0;\n    text-align: center;\n    padding: 0;\n    display: block;\n    font-size: min(3vh, 35px);\n    margin: 0.5vh;\n    word-wrap: break-word;\n    width: fit-content;\n    max-width: 90%;\n    color: white;\n}\n\n.completedTask {\n    text-decoration: line-through;\n    color: rgba(255, 228, 181, 0.385);\n    font-size: min(2.8vh, 30px);\n}\n\n.addTask {\n    font-style: normal;\n    text-align: center;\n    font-size: min(3vh, 35px);\n    color: moccasin;\n    cursor: pointer;\n}\n\n.task-input {\n    text-align: center;\n    outline: none;\n    font-size: min(3vh, 35px);\n    width: 90%;\n    word-wrap: break-word;\n    padding: 0;\n    margin: 0.5vh;\n}\n\n.placeholder {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n.addToCompletedTaskListButton {\n    all: unset;\n    padding: auto;\n    margin: 10px;\n    border-radius: 2px;\n    background-color: rgb(62, 163, 106);\n}\n\n.reveal {\n    opacity: 1;\n    transition: all 1s ease;\n}\n\n.hide {\n    visibility: hidden;\n}\n\n.dontTouch {\n    touch-action: none;\n    pointer-events: none;\n}\n\n.indicatorHolder {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n    height: 3vh;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    white-space: nowrap;\n}\n\n.pageIndicator {\n    font-size: max(2vh, 5px);\n    margin-inline: 2vh;\n    padding: 0;\n    transition: all 0.5s ease;\n    opacity: 0.5;\n    width: 3vh;\n    display: inline-block;\n}\n\n.glow {\n    font-size: max(3vh, 10px);\n    transition: all 0.5s ease;\n    opacity: 1;\n    width: 5vh;\n    display: inline-block;\n}\n\n.moveLeft {\n    transform: translate(-100vw);\n    transition: all 1s ease;\n    color: var(--color2)\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},i=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var v=a(m,o);o.byIndex=s,n.splice(s,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=t(r[i]);n[s].references--}for(var c=o(e,a),d=0;d<r.length;d++){var l=t(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),r=t(569),i=t.n(r),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(772),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),n()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const h=(e,n,t,o)=>{let a=0,r=0;e.childNodes.forEach((e=>{"task"===e.className&&a++}));let i=0;n.childNodes.forEach((e=>{"completedTask"===e.className&&i++})),a>0&&i>0&&(r=(i/(a+i)*100).toFixed(0)),0===a&&i>0&&(r=100),a||i||(r=100),document.querySelector(`.${o}Percentage`).textContent=`${r}%`,r=50-r},f=(e,n)=>{const t=document.querySelector(".variableContent"),o=document.createElement("span"),a=document.querySelector(".indicatorHolder"),r=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),c=document.createElement("span"),d=document.createElement("div"),l=document.createElement("div"),u=document.createElement("div"),p=document.createElement("div");s.textContent="do",c.textContent=e,u.textContent="+",s.style.color=`var(--${n})`,o.innerText="❖",p.textContent="100%",p.style.color=`var(--${n})`,i.style.borderTop=`solid var(--${n}) 0.5vh`,r.classList.add("page"),r.classList.add(e),i.classList.add("doAndTitle"),s.classList.add("doColor"),c.classList.add("listTitle"),u.classList.add("addTask"),d.classList.add("taskList"),p.classList.add(`${e}Percentage`),p.classList.add("percentageDisplay"),l.classList.add("completedTaskList"),o.classList.add("pageIndicator"),o.id=e,o.style.color=`var(--${n})`,o.addEventListener("click",(e=>{document.querySelector(`.${e.target.id}`).scrollIntoView()})),i.appendChild(s),i.appendChild(c),d.append(p),d.append(u),t.appendChild(r),r.append(i,d,l),a.append(o),new IntersectionObserver((function(e){for(const n of e)if(n.isIntersecting){let e=n.target.classList[1];document.querySelector(`#${e}`).classList.add("glow"),"Today"===e&&(document.querySelector("#Tomorrow").classList.remove("glow"),document.querySelector("#Someday").classList.remove("glow")),"Tomorrow"===e&&(document.querySelector("#Today").classList.remove("glow"),document.querySelector("#Someday").classList.remove("glow")),"Someday"===e&&(document.querySelector("#Today").classList.remove("glow"),document.querySelector("#Tomorrow").classList.remove("glow"))}}),{root:null,rootMargin:"0px",threshold:.5}).observe(r),u.addEventListener("click",(()=>{((e,n,t,o,a)=>{const r=(()=>{const e=document.createElement("div");return e.classList.add("placeholder"),e.textContent=" ",e})(),i=(()=>{const e=document.createElement("div");return e.addEventListener("input",(n=>{"insertFromPaste"===n.inputType&&(e.innerText=e.innerText)})),e.contentEditable=!0,e.classList.add("task-input"),e})();e.append(i),i.focus(),n.remove(),e.prepend(r),i.addEventListener("keydown",(()=>{r.remove()}));const s=()=>{i.removeEventListener("focusout",c),r.remove(),i.remove(),e.append(n)},c=()=>{const a=i.textContent.trim();if(!a)return void s();const r=document.createElement("li");r.classList.add("task"),r.textContent=a,e.append(r),h(e,t,0,o),"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?((e,n,t,o,a,r)=>{e.addEventListener("click",(e=>{t.contains(n)&&(e.target.className="task"===e.target.className?"completedTask":"task",e.target.parentNode===o?t.insertBefore(e.target,n):o.append(e.target),h(t,o,0,r))}));const i=document.querySelector(".variableContent");let s=0,c=0;e.addEventListener("touchstart",(e=>{i.classList.add("dontTouch"),s=e.changedTouches[0].screenX,n.classList.add("dontTouch")})),e.addEventListener("touchend",(e=>{c=e.changedTouches[0].screenX,n.classList.remove("dontTouch"),i.classList.remove("dontTouch"),d(e)}));const d=e=>{c<s&&(e.target.classList.add("moveLeft"),setTimeout((()=>{e.target.remove()}),500))}})(r,n,e,t,0,o):((e,n,t,o,a,r)=>{e.addEventListener("click",(e=>{t.contains(n)&&(e.target.className="task"===e.target.className?"completedTask":"task",e.target.parentNode===o?t.insertBefore(e.target,n):o.append(e.target),h(t,o,0,r))}))})(r,n,e,t,0,o),s()};i.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),c())})),i.addEventListener("focusout",c)})(d,u,l,e)}))};!function(){const e=document.querySelector("body"),n=document.createElement("div"),t=document.createElement("div"),o=document.createElement("a"),a=document.createElement("span"),r=document.createElement("div"),i=document.createElement("span"),s=document.createElement("div");n.classList.add("constantContent"),t.classList.add("header"),o.classList.add("github"),a.classList.add("logo"),r.classList.add("variableContent"),s.classList.add("indicatorHolder"),o.textContent="/holoflash",a.textContent="do",i.textContent="Better",i.style.color="moccasin",o.href="https://github.com/holoflash/doBetter#readme",i.addEventListener("click",(()=>{localStorage.clear(),location.reload()})),a.append(i),t.append(o,s,a),n.append(t),e.append(n,r)}(),f("Today","color1"),f("Tomorrow","color2"),f("Someday","color3")})()})();