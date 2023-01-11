(()=>{"use strict";var e={478:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),o=n.n(a),r=n(645),l=n.n(r)()(o());l.push([e.id,".pageView {\n    width: 100vw;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n.pageView .variableContent {\n    all: unset;\n    display: flex;\n    flex-wrap: wrap;\n    width: 100vw;\n\n}\n\n.pageView .page {\n    outline: 1px solid moccasin;\n    border-radius: 10px;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    min-width: fit-content;\n    max-width: 100vw;\n    height: fit-content;\n    min-height: 8vh;\n    padding: 1vh;\n    margin: 1vh;\n    flex: 1;\n}\n\n.pageView .progressBar {\n    background-image: none;\n    height: fit-content;\n    width: 100%;\n    border-radius: 2px;\n    height: 0.5vh;\n    margin: 0.5vh;\n    padding: 0;\n}\n\n.pageView .doAndTitle {\n    display: flex;\n    font-size: min(7vw, 5vh);\n    max-width: 90vw;\n}\n\n.pageView .taskList,\n.pageView .completedTaskList,\n.pageView .indicatorHolder {\n    display: none;\n}\n\n.addPage {\n    all: unset;\n    display: flex;\n    justify-content: center;\n    align-self: center;\n    color: white;\n    font-size: 3vh;\n    padding: 1vh;\n    margin: 1vh;\n}\n\n.addPage:hover {\n    color: moccasin;\n}\n\n.form {\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    border-radius: 5px;\n    width: 95vw;\n    padding: 1vh;\n}\n\ninput {\n    all: unset;\n    background-color: rgba(0, 0, 0, 0.112);\n    max-width: 40%;\n    height: 3vh;\n    padding: 1vh;\n    margin: 1vh;\n    border-radius: 5px;\n    font-size: 2vh;\n}\n\n.color-button {\n    all: unset;\n    width: 2.8vh;\n    height: auto;\n    aspect-ratio: 1/1;\n    margin: 0.8vw;\n    border-radius: 50%;\n}\n\n.color-button:hover {\n    outline: solid moccasin 1px;\n}\n\n.pageMenu {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.498);\n}\n\n.pageMenuContent {\n    background-color: var(--mainBg);\n    float: right;\n    margin-top: 1.5vh;\n    margin-right: 25%;\n    padding: 1vh;\n    outline: solid moccasin 1px;\n    border-radius: 5px;\n    width: fit-content;\n    height: fit-content;\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n}\n\n.pageMenuTitle,\n.pageMenuDelete {\n    all: unset;\n    font-size: 1.5vh;\n    text-align: center;\n}\n\n.indexItem {\n    text-align: center;\n    text-decoration: none;\n    font-size: min(8vw, 5vh);\n    margin: 1vh;\n}\n\n.indexItem:hover {\n    text-decoration: line-through;\n}",""]);const i=l},772:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),o=n.n(a),r=n(645),l=n.n(r)()(o());l.push([e.id,":root {\n    --mainBg: #1e222d;\n    --color1: #C188C1;\n    --color2: #87b2c0;\n    --color3: #BF9F86;\n    --color4: #78c18e;\n    --color5: #c0bc87;\n    --color6: #bf8686;\n}\n\n* {\n    caret-color: var(--color3);\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    touch-action: manipulation;\n}\n\nhtml,\nbody {\n    width: 100vw;\n    margin: auto;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    background-color: var(--mainBg);\n    font-family: Helvetica, sans-serif;\n    font-size: 16px;\n    color: aliceblue;\n}\n\na {\n    color: inherit;\n    text-decoration: inherit;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100vw;\n    padding-bottom: 1vh;\n    padding-top: 1vh;\n    position: absolute;\n    top: 0;\n    font-size: 3vh;\n    background-color: rgba(0, 0, 0, 0.112);\n}\n\n.header>* {\n    margin: 1vh;\n}\n\n.progressBar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-image: none;\n    width: 100vw;\n    margin-top: 7vh;\n    margin-bottom: 1vh;\n    height: 1vh;\n    border-bottom: solid rgba(0, 0, 0, 0.251) 1px;\n    border-top: solid rgba(0, 0, 0, 0.251) 1px;\n}\n\n.doAndTitle {\n    display: flex;\n    font-size: min(6.8vw, 5vh);\n    max-width: 90vw;\n    align-self: center;\n    color: white;\n}\n\n.doColor {\n    color: var(--color1);\n}\n\n.constantContent {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    align-items: center;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n}\n\n.variableContent {\n    align-items: center;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-auto-flow: column;\n    overflow: scroll;\n    scroll-snap-type: x mandatory;\n    scroll-behavior: smooth;\n    height: 100%;\n}\n\n.page {\n    flex: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n    scroll-snap-align: start;\n}\n\n.percentageDisplay {\n    font-size: 1.5vh;\n    margin: 0;\n    padding: 2vh;\n    align-self: center;\n}\n\n.taskList {\n    padding-top: 1vh;\n    grid-column: 1 / 2;\n    min-height: 4vh;\n    color: white;\n}\n\n.completedTaskList {\n    grid-column: 2 / 3;\n    padding-bottom: 1vh;\n    text-decoration: line-through;\n    text-decoration-thickness: 1px;\n    color: rgba(255, 228, 181, 0.385);\n}\n\n.taskList,\n.completedTaskList {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 100vw;\n    overflow: scroll;\n}\n\nli {\n    list-style: none;\n    text-indent: 0;\n    text-align: center;\n    padding: 0;\n    display: block;\n    font-size: min(3vh, 28px);\n    margin: 0.5vh;\n    word-wrap: break-word;\n    width: fit-content;\n    max-width: 90%;\n}\n\n.addTask {\n    font-style: normal;\n    text-align: center;\n    font-size: min(3vh, 35px);\n    color: moccasin;\n    cursor: pointer;\n}\n\n.task-input {\n    text-align: center;\n    outline: none;\n    font-size: min(3vh, 35px);\n    width: 90%;\n    word-wrap: break-word;\n    padding: 0;\n    margin: 0.5vh;\n}\n\n.placeholder {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n.addToCompletedTaskListButton {\n    all: unset;\n    padding: auto;\n    margin: 10px;\n    border-radius: 2px;\n    background-color: rgb(62, 163, 106);\n}\n\n.reveal {\n    opacity: 1;\n    transition: all 1s ease;\n}\n\n.hide {\n    visibility: hidden;\n}\n\n.dontTouch {\n    touch-action: none;\n    pointer-events: none;\n}\n\n.indicatorHolder {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-rows: 1fr;\n    padding: 0;\n    height: 3vh;\n    white-space: nowrap;\n}\n\n.pageIndicator {\n    padding: 0;\n    transition: all 0.5s ease;\n    opacity: 0.1;\n    display: inline-block;\n}\n\n.glow {\n    transition: all 0.5s ease;\n    opacity: 1;\n    display: inline-block;\n}\n\n.moveLeft {\n    transform: translateX(-100vw);\n    transition: all 1s ease;\n    color: var(--color2)\n}",""]);const i=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(a)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(l[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);a&&l[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},l=[],i=0;i<e.length;i++){var s=e[i],c=a.base?s[0]+a.base:s[0],d=r[c]||0,p="".concat(c," ").concat(d);r[c]=d+1;var m=n(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var g=o(u,a);a.byIndex=i,t.splice(i,0,{identifier:p,updater:g,references:1})}l.push(p)}return l}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var l=0;l<r.length;l++){var i=n(r[l]);t[i].references--}for(var s=a(e,o),c=0;c<r.length;c++){var d=n(r[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=s}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),o=n.n(a),r=n(569),l=n.n(r),i=n(565),s=n.n(i),c=n(216),d=n.n(c),p=n(589),m=n.n(p),u=n(772),g={};g.styleTagTransform=m(),g.setAttributes=s(),g.insert=l().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),t()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals;const h=(e,t,n,a)=>{let o=a.replace(/[^\w\s]/gi,"").replace(/\s/g,"");const r=document.querySelector(`.${o}.progressBar`);let l=0,i=0;e.childNodes.forEach((e=>{"task"===e.className&&l++}));let s=0;t.childNodes.forEach((e=>{"completedTask"===e.className&&s++})),i=l||s?(s/(l+s)*100).toFixed(0):100,r.style.backgroundImage=`linear-gradient(to right, var(--${n}), var(--${n}) ${i}%, var(--mainBg) ${i}%, var(--mainBg))`},f=(e,t,n,a,o,r)=>{"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?((e,t,n,a,o,r)=>{const l=document.querySelector(".variableContent");let i=null,s=null,c=!1;const d=()=>{a.append(event.target),h(n,a,o,r);let e=JSON.parse(localStorage.getItem("AllPages"))||[],t=e.find((e=>e.name===r));t.taskArray.splice(t.taskArray.indexOf(event.target.textContent),1),t.completedTaskArray.push(event.target.textContent),localStorage.setItem("AllPages",JSON.stringify(e)),h(n,a,o,r)},p=()=>{n.insertBefore(event.target,t),h(n,a,o,r);let e=JSON.parse(localStorage.getItem("AllPages"))||[],l=e.find((e=>e.name===r));l.completedTaskArray.splice(l.completedTaskArray.indexOf(event.target.textContent),1),l.taskArray.push(event.target.textContent),localStorage.setItem("AllPages",JSON.stringify(e)),h(n,a,o,r)};e.addEventListener("click",(e=>{e.target.className="task"===e.target.className?"completedTask":"task",e.target.parentNode===a?p():d()})),e.addEventListener("touchstart",(t=>{t.target===e&&(l.style.overflow="hidden",console.log(t.target)),i=t.touches[0].screenX,c=!0})),e.addEventListener("touchmove",(e=>{s=e.touches[0].screenX-i,!c||s>0||(e.target.style.transform=`translateX(${s}px)`)})),e.addEventListener("touchend",(e=>{if(l.style.overflow="scroll",s<-100){let t=JSON.parse(localStorage.getItem("AllPages"))||[],l=t.find((e=>e.name===r));e.target.parentNode===n?l.taskArray.splice(l.taskArray.indexOf(e.target.textContent),1):l.completedTaskArray.splice(l.completedTaskArray.indexOf(e.target.textContent),1),localStorage.setItem("AllPages",JSON.stringify(t)),e.target.remove(),h(n,a,o,r)}else e.target.style.transform=null;c=!1,i=null,s=null}))})(e,t,n,a,o,r):((e,t,n,a,o,r)=>{let l=null,i=null,s=!1;const c=()=>{a.append(event.target),h(n,a,o,r);let e=JSON.parse(localStorage.getItem("AllPages"))||[],t=e.find((e=>e.name===r));t.taskArray.splice(t.taskArray.indexOf(event.target.textContent),1),t.completedTaskArray.push(event.target.textContent),localStorage.setItem("AllPages",JSON.stringify(e)),h(n,a,o,r)},d=()=>{n.insertBefore(event.target,t),h(n,a,o,r);let e=JSON.parse(localStorage.getItem("AllPages"))||[],l=e.find((e=>e.name===r));l.completedTaskArray.splice(l.completedTaskArray.indexOf(event.target.textContent),1),l.taskArray.push(event.target.textContent),localStorage.setItem("AllPages",JSON.stringify(e)),h(n,a,o,r)};e.addEventListener("click",(e=>{e.target.parentNode===a?d():c()})),e.addEventListener("mousedown",(e=>{l=e.screenX,s=!0})),e.addEventListener("mousemove",(e=>{i=e.screenX-l,!s||i>0||(e.target.style.transform=`translateX(${i}px)`)})),e.addEventListener("mouseup",(e=>{if(i<-100){let t=JSON.parse(localStorage.getItem("AllPages"))||[],l=t.find((e=>e.name===r));e.target.parentNode===n?l.taskArray.splice(l.taskArray.indexOf(e.target.textContent),1):l.completedTaskArray.splice(l.completedTaskArray.indexOf(e.target.textContent),1),localStorage.setItem("AllPages",JSON.stringify(t)),e.target.remove(),h(n,a,o,r)}else e.target.style.transform=null;s=!1,l=null,i=null})),e.addEventListener("mouseleave",(e=>{s&&(e.target.style.transform=null,s=!1,l=null,i=null)}))})(e,t,n,a,o,r)};var v=n(478),y={};y.styleTagTransform=m(),y.setAttributes=s(),y.insert=l().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=d(),t()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;const x=(e,t)=>{let n=!0;const a=document.querySelector(".header"),o=document.querySelector(".pageView");o.style.display="flex",a.style.position="relative",t.style.display="none",o.appendChild(e),document.body.style.all="unset";const r=l=>{if(!document.querySelector(".form")){let r=document.querySelector(`.${l.target.classList[1]}`);if(null===r)return;document.body.append(e),t.style.display="flex",a.style.position="fixed",r.scrollIntoView({behavior:"smooth"}),o.style.display="none",n=!1}e.removeEventListener("click",r)};e.addEventListener("click",r)},b=(e,t)=>{let n=e.trim().replace(/\s/g,"_"),a=e.replace(/[^\w\s]/gi,"").replace(/\s/g,"");const o=document.querySelector(".variableContent"),r=document.createElement("span"),l=document.querySelector(".indicatorHolder"),i=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div"),d=document.createElement("span"),p=document.createElement("div"),m=document.createElement("div"),u=document.createElement("div"),g=document.createElement("div");c.textContent="do",d.textContent=n.trim().replace(/_/g," "),u.textContent="+",c.style.color=`var(--${t})`,r.innerText="❖",i.classList.add("page"),i.classList.add(a),i.dataset.reference=n.trim().replace(/_/g," "),s.classList.add("doAndTitle"),c.classList.add("doColor"),d.classList.add("listTitle"),d.classList.add(a),u.classList.add("addTask"),p.classList.add("taskList"),g.classList.add(a),g.classList.add("progressBar"),m.classList.add("completedTaskList"),r.classList.add("pageIndicator"),r.id=a,r.style.color=`var(--${t})`,r.addEventListener("click",(e=>{document.querySelector(`.${e.target.id}`).scrollIntoView()})),s.appendChild(c),s.appendChild(d),i.insertAdjacentElement("afterbegin",g),p.append(u),o.prepend(i),i.append(s,p,m),l.prepend(r),h(p,m,t,a),x(o,l),(e=>{new IntersectionObserver((e=>{for(const t of e)if(t.isIntersecting){let e=t.target.classList[1];document.querySelector(`#${e}`).classList.add("glow"),document.querySelectorAll(".pageIndicator").forEach((t=>{t.id!==e&&t.classList.remove("glow")}))}}),{root:null,rootMargin:"0px",threshold:.5}).observe(e)})(i),u.addEventListener("click",(()=>{((e,t,n,a,o)=>{const r=(()=>{const e=document.createElement("div");return e.classList.add("placeholder"),e.textContent=" ",e})(),l=(()=>{const e=document.createElement("div");return e.addEventListener("input",(t=>{"insertFromPaste"===t.inputType&&(e.innerText=e.innerText)})),e.contentEditable=!0,e.classList.add("task-input"),e})();e.append(l),l.focus(),t.remove(),e.prepend(r),l.addEventListener("keydown",(()=>{r.remove()}));const i=()=>{l.removeEventListener("focusout",s),r.remove(),l.remove(),e.append(t)},s=()=>{const r=l.textContent.trim();if(!r)return void i();const s=document.createElement("li");s.classList.add("task"),s.textContent=r,e.append(s);let c=JSON.parse(localStorage.getItem("AllPages"))||[];c.find((e=>e.cleanName===a)).taskArray.push(r),localStorage.setItem("AllPages",JSON.stringify(c)),h(e,n,o,a),f(s,t,e,n,o,a),i()};l.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),s())})),l.addEventListener("focusout",s)})(p,u,m,a,t)}))};class w{constructor(e,t,n,a){this.name=e,this.color=t,this.taskArray=n,this.completedTaskArray=a,this.cleanName=e.replace(/[^\w\s]/gi,"").replace(/\s/g,"")}}function k(e,t,n,a){let o=JSON.parse(localStorage.getItem("AllPages"))||[],r=new w(e,t,n,a);o=o.concat([r]),localStorage.setItem("AllPages",JSON.stringify(o))}let L=JSON.parse(localStorage.getItem("AllPages"))||[],E=document.querySelector(".page");if(console.log(E),!(L.some((e=>"Readme: tasks"===e.name))||L.some((e=>"Readme: pages"===e.name))||L.some((e=>"Readme: misc"===e.name)))){const e=["Click to mark as complete","Drag to the left to remove","Press the + icon to add new tasks"],t=["Click to unmark as complete","Drag to the left to remove","The progress bar fills up as you complete tasks"],n=["Click on 'doBetter' in the top-right corner to go home","In home view - add new pages by pressing the + icon","Type in your title and select a color to add","Double tap on the text input box to abort"],a=["In home view - clicking on 'doBetter' brings up the page deletion menu"];k("Readme: misc","color1",["This site can be installed as an app on mobile, via the 'Add to home screen/Install app' option in your browser","Doing so adds a 'doBetter' icon to your home screen for quick access","Further more, it gives the app a native look eliminating the browser bar"],["Click on '/holoflash' in the top-left corner 5 times in rapid succession to reset the app and clear all user data"]),k("Readme: pages","color2",n,a),k("Readme: tasks","color3",e,t)}!function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("a"),a=document.createElement("span"),o=document.createElement("div"),r=document.createElement("span"),l=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),c=document.createElement("h3");e.classList.add("constantContent"),t.classList.add("header"),n.classList.add("holoflash"),a.classList.add("logo"),o.classList.add("variableContent"),l.classList.add("indicatorHolder"),i.classList.add("pageMenu"),s.classList.add("pageMenuContent"),c.classList.add("pageMenuTitle"),n.textContent="/holoflash",a.textContent="do",r.textContent="Better",r.style.color="moccasin";let d=0,p=null;n.addEventListener("click",(()=>{if(d++,1===d)p=setTimeout((()=>{d=0}),5e3);else if(5===d){let e;clearTimeout(p),!0===confirm("Reset all data?")&&(e=confirm("Are you sure? This action can't be undone")),!0===e&&(localStorage.clear(),location.reload()),d=0}})),a.append(r),t.append(n,l,a),e.append(t),document.body.append(e,o),s.append(c),i.append(s),document.body.append(i)}(),(()=>{const e=document.querySelector(".logo"),t=document.querySelector(".indicatorHolder"),n=document.querySelector(".variableContent"),a=document.createElement("div"),o=document.createElement("button"),r=document.querySelector(".pageMenu"),l=document.querySelector(".pageMenuContent"),i=document.querySelector(".pageMenuTitle");a.classList.add("pageView"),o.classList.add("addPage"),o.textContent="+",document.body.append(a),(JSON.parse(localStorage.getItem("AllPages"))||[]).forEach((e=>{b(e.name,e.color),((e,t,n,a)=>{let o=document.querySelector(`[data-reference='${e}'] .taskList`),r=document.querySelector(`[data-reference='${e}'] .completedTaskList`),l=document.querySelector(`[data-reference='${e}'] .addTask`);n.forEach((n=>{const a=document.createElement("li");a.classList.add("task"),a.textContent=n,o.append(a),h(o,r,t,e),f(a,l,o,r,t,e)})),a.forEach((n=>{const a=document.createElement("li");a.classList.add("completedTask"),a.textContent=n,r.append(a),h(o,r,t,e),f(a,l,o,r,t,e)}))})(e.name,e.color,e.taskArray,e.completedTaskArray,e.completion)})),n.insertAdjacentElement("beforebegin",o),e.addEventListener("click",(()=>{let e=Array.from(n.childNodes);if(n.parentNode!==document.body&&n.childNodes.length>0){i.textContent="Click to remove:";for(let n=0;n<e.length;n++){const a=document.createElement("div");a.classList.add("indexItem"),a.textContent=e[n].dataset.reference;let o=e[n].childNodes[0].style.backgroundImage.slice(26,39);l.append(a),a.style.color=`${o}`,a.addEventListener("click",(e=>{let n=JSON.parse(localStorage.getItem("AllPages")).filter((e=>e.cleanName!==a.textContent.replace(/[^\w\s]/gi,"").replace(/\s/g,"")));localStorage.setItem("AllPages",JSON.stringify(n)),e.target.remove(),t.querySelector(`#${a.textContent.replace(/[^\w\s]/gi,"").replace(/\s/g,"")}`).remove(),document.querySelector(`.${a.textContent.replace(/[^\w\s]/gi,"").replace(/\s/g,"")}`).remove(),1===l.childNodes.length&&(i.textContent="All done!")}))}return n.style.filter="blur(10px)",o.style.filter="blur(10px)",r.style.display="block",void(window.onclick=function(e){n.style.filter="none",o.style.filter="none",e.target==r&&(r.style.display="none",l.textContent="",l.append(i))})}x(n,t)}));let s=0;o.addEventListener("click",(()=>{const e=document.querySelectorAll(".page");e.forEach((e=>e.classList.add("dontTouch")));const t=document.createElement("div"),a=document.createElement("input");t.classList.add("form"),t&&(o.style.display="none"),a.type="text",a.maxLength=20,a.placeholder="do:",a.classList.add("addPageInput"),t.appendChild(a),["color1","color2","color3","color4","color5","color6"].forEach((r=>{const l=document.createElement("button");l.type="button",l.id=r,l.style.backgroundColor=`var(--${r})`,l.classList.add("color-button"),t.appendChild(l),l.addEventListener("click",(e=>{let r=a.value.trim();""===r&&(r="Untitled"),/^\d/.test(r)&&(r="_"+r),document.querySelector(`.${r.replace(/[^\w\s]/gi,"").replace(/\s/g,"")}`)&&(s++,r+=s);const l=e.target.id;k(r,l,[],[]),b(r,l),t.remove(),n.insertAdjacentElement("beforebegin",o),o.style.display="flex"})),e.forEach((e=>e.classList.remove("dontTouch")))})),n.insertAdjacentElement("beforebegin",t),t.addEventListener("dblclick",(()=>{t.remove(),n.insertAdjacentElement("beforebegin",o),o.style.display="flex"}))}))})()})()})();