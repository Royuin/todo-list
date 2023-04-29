(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(81),r=n.n(o),c=n(645),i=n.n(c),d=n(667),a=n.n(d),l=new URL(n(392),n.b),s=i()(r()),u=a()(l);s.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n  box-sizing: border-box;\n}\n\n:root {\n  --main-color: #4338ca;\n  --desaturated-main-color: #818cf8;\n  --off-white: #f8f0e3;\n  --mid-grey: #a2a1aa;\n  --dark-grey: #222;\n}\n\n@font-face {\n  font-family: 'roboto';\n  src: url("+u+");\n}\n\nbody {\n  background-color: var(--desaturated-main-color);\n  font-family: 'roboto', sans-serif;\n}\n\naside {\n  background-color: var(--dark-grey);\n  height: 100vh;\n  grid-row: 1 / 3;\n  color: var(--off-white);\n}\n\n.page-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-template-rows: 1fr 8fr;\n}\n\nheader {\n  grid-column: 2 / 3;\n}\n\nmain {\n  grid-column: 2 / 3;\n  margin-left: 35px;\n}\n\n.card {\n  display: grid;\n  width: 300px;\n  padding: 15px;\n  background-color: var(--off-white);\n  border-left: 4px solid var(--main-color);\n  box-shadow: 10px 10px 20px var(--main-color);\n}\n\n.project-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  border-bottom: solid 5px var(--main-color);\n  margin-bottom: 25px;\n  padding: 15px;\n}\n\n.project {\n  border: none;\n  cursor: pointer;\n  color: var(--off-white);\n  margin-left: 7%;\n}\n\n.project:hover {\n  border-bottom: solid 3px var(--desaturated-main-color);\n}\n\nform {\n  background-color: var(--off-white);\n  max-width: 65%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid var(--dark-grey);\n  border-radius: 10px;\n  z-index: 10;\n  position: fixed;\n  box-shadow: 0 0 200px var(--main-color);\n  padding: 5vw;\n  display: grid;\n}\n\nform > * {\n  font-size: 1.5rem;\n}\n\n.button-style-reset {\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background: none;\n}\n\n#overlay {\n  position: fixed;\n  opacity: 0;\n  transition: 200ms ease-in-out;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  pointer-events: none;\n}\n\n#overlay.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.todo-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  padding: 5%;\n  gap: 8%;\n}\n\n.current-project {\n  border-bottom: solid 3px var(--desaturated-main-color);\n}\n\n.icon {\n  width: 10%;\n  height: 10%;\n}\n\n.no-project-wrapper {\n  font-size: 1.5rem;\n  background-color: var(--off-white);\n  max-width: 65%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 3px solid var(--dark-grey);\n  border-radius: 10px;\n  z-index: 10;\n  position: fixed;\n  box-shadow: 0 0 200px var(--main-color);\n  padding: 3vw;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n",""]);const p=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var a=this[d][0];null!=a&&(i[a]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&i[s[0]]||(void 0!==c&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=c),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},i=[],d=0;d<e.length;d++){var a=e[d],l=o.base?a[0]+o.base:a[0],s=c[l]||0,u="".concat(l," ").concat(s);c[l]=s+1;var p=n(u),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=d,t.splice(d,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<c.length;i++){var d=n(c[i]);t[d].references--}for(var a=o(e,r),l=0;l<c.length;l++){var s=n(c[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}c=a}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},392:(e,t,n)=>{e.exports=n.p+"Roboto-Regular.ttf"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),c=n(569),i=n.n(c),d=n(565),a=n.n(d),l=n(216),s=n.n(l),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=a(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=[];let v;function y(e){localStorage.clear(),localStorage.setItem("current project",JSON.stringify(v)),e.forEach((e=>{JSON.stringify(e),JSON.stringify(e.todos),e.todos.forEach((e=>{JSON.stringify(e)}))})),localStorage.setItem("projectList",JSON.stringify(e))}function g(e){h.push(e)}function b(e){const t=e.textContent;h.forEach((n=>{var o;n.title===t&&(v=n,o=e,document.querySelectorAll(".project").forEach((e=>{void 0!==e.classList.contains("current-project")&&e.classList.remove("current-project"),o.classList.add("current-project")})),localStorage.removeItem("current project"),localStorage.setItem("current project",JSON.stringify(v)))}))}function x(e){const t=e.parentNode.querySelector("h2");v.todos.find((e=>e.title===t.textContent)).priority=e.value}const E=n.p+"delete.svg",C=n.p+"file-edit.svg";function L(){const e=document.getElementById("overlay"),t=document.querySelector(".todo-header"),n=document.querySelector(".todo-form");t.removeChild(n),e.classList.remove("active")}function S(){const e=document.querySelector(".todo-list");for(;e.firstChild;)e.removeChild(e.lastChild)}function j(e){if(void 0!==e)for(let t=0;t<e.length;t+=1){const n=e[t],o=document.querySelector(".todo-list"),r=n.title,c=document.createElement("li");c.dataset.index=e.indexOf(n),c.classList+=" card";const i=document.createElement("h2");i.textContent=r,c.appendChild(i);const d=document.createElement("button"),a=document.createElement("img");d.classList.add("edit-btn","button-style-reset","icon"),a.src=C,d.dataset.index=e.indexOf(n),a.dataset.index=e.indexOf(n),d.appendChild(a),c.appendChild(d);const l=document.createElement("button"),s=document.createElement("img");s.src=E,l.classList.add("delete-button","button-style-reset","icon"),c.appendChild(l),l.appendChild(s);const u=document.createElement("select"),p=document.createElement("option");p.textContent="Low";const m=document.createElement("option");m.textContent="Medium";const f=document.createElement("option");f.textContent="High",u.appendChild(p),u.appendChild(m),u.appendChild(f),c.appendChild(u),Array.from(u.options).find((e=>e.text===n.priority)).selected=!0,u.addEventListener("change",(()=>{x(u)}));const h=document.createElement("p");h.textContent=n.description,c.appendChild(h);const v=document.createElement("input");v.type="date",v.value=n.due,v.classList="date",c.appendChild(v),o.appendChild(c)}}function w(e){const t=e.title,n=document.querySelector(".project-list"),o=document.createElement("li");n.appendChild(o);const r=document.createElement("button");r.className+="project button-style-reset ",r.setAttribute("id",t),r.textContent=t,o.appendChild(r)}function k(e,t){document.getElementById("overlay").classList="active";const n=document.querySelector(".todo-header"),o=document.createElement("form");o.classList="todo-form",n.appendChild(o);const r=document.createElement("button");r.classList.add("exit-button","button-style-reset"),r.textContent="X",o.appendChild(r),r.addEventListener("click",(e=>{e.preventDefault(),L()}));const c=document.createElement("label");c.for="todoTitle",c.textContent="Title";const i=document.createElement("input");i.type="text",i.id="todoTitle",i.name="text",i.value=e.title,o.appendChild(c),o.appendChild(i);const d=document.createElement("label");d.for="priority",d.textContent="Priority";const a=document.createElement("select");a.id="priority",a.name="priority";const l=document.createElement("option");l.textContent="Low";const s=document.createElement("option");s.textContent="Medium";const u=document.createElement("option");u.textContent="High",a.appendChild(l),a.appendChild(s),a.appendChild(u),o.appendChild(d),o.appendChild(a),a.value=e.priority;const p=document.createElement("label");p.for="descriptionLabel",p.textContent="Description";const m=document.createElement("textarea");m.id="description",m.id="description",m.value=e.description,o.appendChild(p),o.appendChild(m);const f=document.createElement("label");f.for="due",f.textContent="Date due:";const h=document.createElement("input");h.type="date",h.id="due",h.name="due",o.appendChild(f),o.appendChild(h),h.value=e.due;const v=document.createElement("button");v.textContent="Edit To-do",v.type="submit",v.setAttribute("id","edit-todo-submit"),o.appendChild(v),v.addEventListener("click",(n=>{n.preventDefault(),e.title=i.value,e.priority=a.value,e.description=m.value,e.due=h.value,S(),j(t),document.querySelectorAll(".edit-btn").forEach((e=>{e.addEventListener("click",(()=>{const n=e.parentElement.dataset.index;k(t[n],t)}))}))}))}const I=document.querySelector(".add-todo");function q(e){document.querySelectorAll(".delete-button").forEach((t=>{t.addEventListener("click",(()=>{const n=document.querySelector(".todo-list"),o=t.parentElement,r=o.dataset.index;!function(e){const t=v.todos.indexOf(e);v.todos.splice(t,1)}(e[r]),n.removeChild(o),y(h)}))}))}function T(e){document.querySelectorAll(".edit-btn").forEach((t=>{t.addEventListener("click",(()=>{const n=t.parentElement.dataset.index;k(e[n],e),document.getElementById("edit-todo-submit").addEventListener("click",(()=>{q(e),y(h)}))}))}))}function B(e){document.querySelectorAll(".date").forEach((t=>{t.addEventListener("input",(()=>{const n=t.parentElement.dataset.index;e[n].due=t.value,y(h)}))}))}function A(){document.querySelectorAll(".project").forEach((e=>{e.addEventListener("click",(()=>{b(e);const t=v.todos;S(),j(t),T(t),q(t)}))}))}!function(){const e=localStorage.getItem("projectList");if(null!==e){const t=JSON.parse(e),n=localStorage.getItem("current project"),o=JSON.parse(n).title;t.forEach((e=>{g(e),w(e)})),b(document.getElementById(o)),j(v.todos),A(),q(v.todos),T(v.todos),B(v.todos)}}(),I.addEventListener("click",(()=>{const e=document.querySelector(".todo-form");0===h.length?function(){const e=document.getElementById("overlay");e.classList="active";const t=document.querySelector(".todo-header"),n=document.createElement("div");n.classList="no-project-wrapper",t.appendChild(n);const o=document.createElement("button");o.classList.add("exit-button","button-style-reset"),o.textContent="X",n.appendChild(o);const r=document.createElement("span");r.classList="no-project-error",r.textContent="Oops! Looks like you don't have a project yet. Please make a project before making a todo.",n.appendChild(r),o.addEventListener("click",(()=>{t.removeChild(n),e.classList.remove("active")}))}():null===e?(!function(){document.getElementById("overlay").classList="active";const e=document.querySelector(".todo-header"),t=document.createElement("form");t.classList="todo-form",e.appendChild(t);const n=document.createElement("button");n.classList.add("exit-button","button-style-reset"),n.textContent="X",t.appendChild(n);const o=document.createElement("label");o.for="todoTitle",o.textContent="Title";const r=document.createElement("input");r.type="text",r.id="todoTitle",r.name="text",t.appendChild(o),t.appendChild(r);const c=document.createElement("label");c.for="priority",c.textContent="Priority";const i=document.createElement("select");i.id="priority",i.name="priority";const d=document.createElement("option");d.textContent="Low";const a=document.createElement("option");a.textContent="Medium";const l=document.createElement("option");l.textContent="High",i.appendChild(d),i.appendChild(a),i.appendChild(l),t.appendChild(c),t.appendChild(i);const s=document.createElement("label");s.for="descriptionLabel",s.textContent="Description";const u=document.createElement("textarea");u.id="description",u.id="description",t.appendChild(s),t.appendChild(u);const p=document.createElement("label");p.for="due",p.textContent="Date due:";const m=document.createElement("input");m.type="date",m.id="due",m.name="due",t.appendChild(p),t.appendChild(m);const f=document.createElement("button");f.textContent="Create To-do",f.type="submit",f.setAttribute("id","todo-submit"),t.appendChild(f)}(),document.querySelector(".exit-button").addEventListener("click",(e=>{e.preventDefault(),L()})),document.getElementById("todo-submit").addEventListener("click",(e=>{var t;e.preventDefault(),t={title:document.getElementById("todoTitle").value,priority:document.getElementById("priority").value,description:document.getElementById("description").value,due:document.getElementById("due").value},v.todos.push(t);const n=v.todos;S(),j(n),q(n),T(n),B(v.todos),y(h)}))):void 0!==document.querySelector(".todo-form")&&L()})),document.querySelector(".add-project").addEventListener("click",(()=>{!function(){document.getElementById("overlay").classList="active";const e=document.querySelector(".project-header"),t=document.createElement("form");t.classList="project-form",e.appendChild(t);const n=document.createElement("button");n.classList.add("exit-button","button-style-reset"),n.textContent="X",t.appendChild(n);const o=document.createElement("label");o.for="projectTitle",o.textContent="* Title",o.style.color="black";const r=document.createElement("input");r.type="text",r.id="projectTitle",r.name="text",r.required=!0,t.appendChild(o),t.appendChild(r);const c=document.createElement("p");c.classList="invalid",c.textContent="Must be filled out and cannot use same title",c.style.display="none",c.style.color="red",t.appendChild(c);const i=document.createElement("button");i.textContent="Create Project",i.type="submit",i.setAttribute("id","project-submit"),t.appendChild(i)}(),document.querySelector(".exit-button").addEventListener("click",(e=>{e.preventDefault(),function(){const e=document.getElementById("overlay"),t=document.querySelector(".project-header"),n=document.querySelector(".project-form");t.removeChild(n),e.classList.remove("active")}()})),document.getElementById("project-submit").addEventListener("click",(e=>{const t=document.getElementById("projectTitle").value;if(h.some((e=>e.title===t))||""===t)return document.querySelector(".invalid").style.display="",void e.preventDefault();e.preventDefault(),function(){const e={title:document.getElementById("projectTitle").value,todos:[]};g(e),v=e}();const n=h.slice(-1)[0];w(n),y(h),A(),1===h.length&&b(document.getElementById(n.title))}))}))})()})();