parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"NKbW":[function(require,module,exports) {
"use strict";function e(e,o){return n(e)||r(e,o)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}function n(e){if(Array.isArray(e))return e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.withCloseWrapper=exports.createElement=void 0;var o=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=document.createElement(t);return Object.entries(r).forEach(function(t){var r=e(t,2),n=r[0],i=r[1];"on"===n.substring(0,2)?o.addEventListener(n.substring(2).toLowerCase(),i):o.setAttribute(n,i)}),Array.isArray(n)||(n=[n]),n.filter(function(e){return!!e}).forEach(function(e){"string"==typeof e||"number"==typeof e?o.appendChild(document.createTextNode(e)):o.appendChild(e)}),o};exports.createElement=o;var i=function(e){return function(){return new Promise(function(t,r){var n=e(function(e){n.remove(),e?t():r()});document.body.appendChild(n),n.activate&&n.activate()})}};exports.withCloseWrapper=i;
},{}],"vj8j":[function(require,module,exports) {
module.exports={wrapper:"_wrapper_3lr1z_1",window:"_window_3lr1z_39 _surface_1iiae_1",windowTitle:"_windowTitle_3lr1z_57",titleButton:"_titleButton_3lr1z_83 _surface_1iiae_1"};
},{}],"zYr8":[function(require,module,exports) {
module.exports="/wavelert/close.ffd02228.gif";
},{}],"evaj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WaveWindow=void 0;var e=require("./util"),t=require("./WaveWindow.css"),n=r(require("./static/close.gif"));function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return u(e)||i(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function u(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function c(e,t){return d(e)||s(e,t)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}function d(e){if(Array.isArray(e))return e}var f=10,v=function(r){var o=r.title,a=r.onMove,i=r.onMoveStart,u=r.onClose,l=!1,s=[0,0],d=(0,e.createElement)("header",{class:t.windowTitle},[o,(0,e.createElement)("button",{class:t.titleButton,onClick:u},(0,e.createElement)("img",{src:n.default}))]);return d.addEventListener("mousedown",function(e){s=[e.pageX,e.pageY],i(),l=!0}),window.addEventListener("mouseup",function(){l=!1}),window.addEventListener("mousemove",function(e){var t=e.pageX,n=e.pageY;if(l){var r=c(s,2),o=r[0],i=r[1];a(t-o,n-i)}}),d},p=function(n){var r=n.title,a=n.dark,i=n.width,u=n.height,c=n.onClose,l=n.theme,s=n.children,d=[0,0],p=o(d),m=(0,e.createElement)("dialog",{class:t.window,tabIndex:0},[(0,e.createElement)("main",{},s)]),w=v({title:r,onMoveStart:function(){p=o(d)},onMove:function(e,t){d=[p[0]+e,p[1]+t],m.style.transform="translateX(".concat(d[0],"px) translateY(").concat(d[1],"px)")},onClose:c});m.prepend(w);var y=(0,e.createElement)("div",{class:t.wrapper,"data-dark":a,"data-theme":l},[m]);return i&&(m.style.width=i+"px"),u&&(m.style.height=u+"px"),y.activate=function(){requestAnimationFrame(function(){var e=m.querySelector("main button");e?e.focus():m.focus()})},m.addEventListener("focus",function(){f++,y.style.zIndex=f}),y};exports.WaveWindow=p;
},{"./util":"NKbW","./WaveWindow.css":"vj8j","./static/close.gif":"zYr8"}],"VJEO":[function(require,module,exports) {
module.exports={dialog:"_dialog_l6qn5_1",message:"_message_l6qn5_5",buttons:"_buttons_l6qn5_17"};
},{}],"xEAL":[function(require,module,exports) {
module.exports={glyph:"_glyph_1xas1_1"};
},{"./close.gif":[["close.ffd02228.gif","zYr8"],"zYr8"],"./alert.png":[["alert.5b14a5b7.png","bLYP"],"bLYP"]}],"bDqa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Dialog=void 0;var e=require("./util"),t=require("./Dialog.css"),s=require("./static/glyph.css"),a=function(a){var i=a.buttons,r=a.icon,o=a.text;return o||(o="The window at "+window.location.href+" says nothing"),(0,e.createElement)("div",{class:t.dialog},[(0,e.createElement)("div",{class:t.message,"data-icon":!!r},[r&&(0,e.createElement)("span",{class:s.glyph,"data-glyph":r}),o]),(0,e.createElement)("div",{class:t.buttons},i)])};exports.Dialog=a;
},{"./util":"NKbW","./Dialog.css":"VJEO","./static/glyph.css":"xEAL"}],"+SA6":[function(require,module,exports) {
module.exports={button:"_button_nkgmp_1 _surface_1iiae_1"};
},{}],"Bmfk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Button=void 0;var e=require("./util"),t=require("./Button.css");function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){n(e,t,r[t])})}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(null==e)return{};var r,n,o=u(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function u(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var c=function(n){var u=n.children,c=o(n,["children"]);return(0,e.createElement)("button",r({class:t.button},c),u)};exports.Button=c;
},{"./util":"NKbW","./Button.css":"+SA6"}],"er+R":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Alert=void 0;var e=require("./Dialog"),t=require("./Button"),o=function(o){var r=o.icon,n=o.text,i=o.onClose;return(0,e.Dialog)({buttons:[(0,t.Button)({onClick:function(){i(!0)},children:"OK"})],icon:r,text:n})};exports.Alert=o;
},{"./Dialog":"bDqa","./Button":"Bmfk"}],"xoTz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Confirm=void 0;var o=require("./Dialog"),t=require("./Button"),e=function(e){var n=e.icon,i=e.text,r=e.onClose;return(0,o.Dialog)({buttons:[(0,t.Button)({onClick:function(){r(!0)},children:"OK"}),(0,t.Button)({onClick:function(){r(!1)},children:"Cancel"})],icon:n,text:i})};exports.Confirm=e;
},{"./Dialog":"bDqa","./Button":"Bmfk"}],"WVhq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.promisified=void 0;var e=require("./src/WaveWindow"),r=require("./src/Alert"),n=require("./src/Confirm"),t=require("./src/util");function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){i(e,r,n[r])})}return e}function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var u={Alert:function(n){var i=Object.assign({},n);return(0,t.withCloseWrapper)(function(n){return(0,e.WaveWindow)(o({},i,{onClose:function(){return n(!1)},children:(0,r.Alert)(o({},i,{onClose:n}))}))})},Confirm:function(r){var i=Object.assign({},r);return(0,t.withCloseWrapper)(function(r){return(0,e.WaveWindow)(o({},i,{onClose:function(){return r(!1)},children:(0,n.Confirm)(o({},i,{onClose:r}))}))})}};exports.promisified=u;
},{"./src/WaveWindow":"evaj","./src/Alert":"er+R","./src/Confirm":"xoTz","./src/util":"NKbW"}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"WaveWindow",{enumerable:!0,get:function(){return e.WaveWindow}}),Object.defineProperty(exports,"Dialog",{enumerable:!0,get:function(){return r.Dialog}}),Object.defineProperty(exports,"Alert",{enumerable:!0,get:function(){return t.Alert}}),Object.defineProperty(exports,"Confirm",{enumerable:!0,get:function(){return i.Confirm}}),Object.defineProperty(exports,"promisified",{enumerable:!0,get:function(){return n.promisified}}),Object.defineProperty(exports,"withCloseWrapper",{enumerable:!0,get:function(){return o.withCloseWrapper}});var e=require("./src/WaveWindow"),r=require("./src/Dialog"),t=require("./src/Alert"),i=require("./src/Confirm"),n=require("./promisified"),o=require("./src/util");
},{"./src/WaveWindow":"evaj","./src/Dialog":"bDqa","./src/Alert":"er+R","./src/Confirm":"xoTz","./promisified":"WVhq","./src/util":"NKbW"}]},{},["Focm"], "wavelert")
//# sourceMappingURL=/wavelert/wavelert.fde11ed3.map