!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=10)}([function(t,n,e){(function(t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var e=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,n,e,r){var o=n&&n.prototype instanceof f?n:f,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=w(a,e);if(c){if(c===s)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=l(t,n,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function f(){}function p(){}function h(){}var d={};d[i]=function(){return this};var y=Object.getPrototypeOf,b=y&&y(y(S([])));b&&b!==e&&r.call(b,i)&&(d=b);var g=h.prototype=f.prototype=Object.create(d);function v(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function m(t,e){var o;this._invoke=function(i,a){function c(){return new e((function(o,c){!function o(i,a,c,u){var s=l(t[i],t,a);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"===n(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(p).then((function(t){f.value=t,c(f)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}(i,a,o,c)}))}return o=o?o.then(c,c):c()}}function w(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,w(t,n),"throw"===n.method))return s;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,s;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,s):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,s)}function x(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function _(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=g.constructor=h,h.constructor=p,h[c]=p.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},v(m.prototype),m.prototype[a]=function(){return this},t.AsyncIterator=m,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new m(u(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},v(g),g[c]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),s},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),s}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:S(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),s}},t}("object"===n(t)?t.exports:{});try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}).call(this,e(1)(t))},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n,e){var r=e(3),o=e(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});t.exports=a},function(t,n,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),a=[];function c(t){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===t){n=e;break}return n}function u(t,n){for(var e={},r=[],o=0;o<t.length;o++){var i=t[o],u=n.base?i[0]+n.base:i[0],l=e[u]||0,s="".concat(u," ").concat(l);e[u]=l+1;var f=c(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:s,updater:b(p,n),references:1}),r.push(s)}return r}function l(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,f=(s=[],function(t,n){return s[t]=n,s.filter(Boolean).join("\n")});function p(t,n,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}function h(t,n,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,y=0;function b(t,n){var e,r,o;if(n.singleton){var i=y++;e=d||(d=l(n)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=l(n),r=h.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var e=u(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var o=c(e[r]);a[o].references--}for(var i=u(t,n),l=0;l<e.length;l++){var s=c(e[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}e=i}}}},function(t,n,e){(n=e(5)(!1)).push([t.i,"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: sans-serif;\n}\n\nmain {\n    width: 95%;\n    max-width: 1366px;\n    margin: 32px auto;\n}\n\nnegara-list {\n    display: block;\n    margin-top: 32px;\n    width: 30%;\n    padding-left: 20px;\n    float: right;\n}\n",""]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(i).concat([o]).join("\n")}var a,c,u;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);r&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),n.push(u))}},n}},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return a(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,t)})(t)}function a(t,n,e){return(a=c()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&u(o,e.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t,n){return(u=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&u(t,n)}(f,t);var n,e,i,a,s=(n=f,function(){var t,e=l(n);if(c()){var r=l(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return o(this,t)});function f(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),(t=s.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return e=f,(i=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML="\n       <style>\n           * {\n               margin: 0;\n               padding: 0;\n               box-sizing: border-box;\n               width: 100%;\n               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n               position: fixed;\n               top: 0px;\n               background-color:  #21618c;\n           }\n           :host {\n               display: block;\n               width: 100%;\n               \n               color: white;\n               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n           }\n           h2 {\n               padding: 16px;\n           }\n       </style>\n       <h2>Country search</h2>"}}])&&r(e.prototype,i),a&&r(e,a),f}(i(HTMLElement));customElements.define("app-bar",s)},function(t,n){$("body").append('\n<style>\n  .screen {\n    text-align: center;\n    background: gray;\n    background: -moz-linear-gradient(center top , #00DD88 0%, #00CC00 100%) repeat scroll 0 0 transparent;\n    border-radius: 30px 30px 30px 30px;\n    margin: 5px 0 10px 15px;\n    padding: 15px;\n    position: absolute;\n    left: -980px;\n    display: none;\n    z-index: 100;\n    color: #fff;\n    cursor: pointer; \n  }\n</style>\n <div class=\'screen\' onclick="about()" id="a"><b>?</b></div>'),$(".screen").animate({opacity:1,left:"1px",bottom:"10px",height:"toggle"},1e3,(function(){})).css("position","fixed")},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return a(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,t)})(t)}function a(t,n,e){return(a=c()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&u(o,e.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t,n){return(u=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&u(t,n)}(f,t);var n,e,i,a,s=(n=f,function(){var t,e=l(n);if(c()){var r=l(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return o(this,t)});function f(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),(t=s.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return e=f,(i=[{key:"render",value:function(){var t=0,n="";if(this._negara.altSpellings.length>t)for(;t<this._negara.altSpellings.length;)n=t==this._negara.altSpellings.length-1?"".concat(n).concat(this._negara.altSpellings[t]):"".concat(n).concat(this._negara.altSpellings[t],", "),t++;else n=this._negara.altSpellings[t];var e=0,r="";if(this._negara.borders.length>e)for(;e<this._negara.borders.length;)r=e==this._negara.borders.length-1?"".concat(r).concat(this._negara.borders[e]):"".concat(r).concat(this._negara.borders[e],", "),e++;else r=this._negara.borders[e];var o=0,i="";if(this._negara.timezones.length>o)for(;o<this._negara.timezones.length;)i=o==this._negara.timezones.length-1?"".concat(i).concat(this._negara.timezones[o]):"".concat(i).concat(this._negara.timezones[o],", "),o++;else i=this._negara.timezones[o];var a='\n           <style>\n              * {\n                   margin: 0;\n                   padding: 0;\n                   box-sizing: border-box;\n               }\n               :host {\n                   display: block;\n                   margin-bottom: 18px;\n                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                   border-radius: 10px;\n                   overflow: hidden;\n               }\n              \n               .bendera {\n                   width: 100%;\n                   max-height: 300px;\n                   object-fit: cover;\n                   object-position: center;\n               }\n\n               .table-container {\n                  overflow: auto;\n                  padding: 14px;\n                  min-widht: 250px;\n                }\n              \n               .negara-info {\n                   padding: 24px;\n               }\n              \n               .negara-info > h2 {\n                   font-weight: lighter;\n               }\n              \n               .negara-info > p {\n                   margin-top: 10px;\n                   overflow: hidden;\n                   text-overflow: ellipsis;\n                   display: -webkit-box;\n                   -webkit-box-orient: vertical;\n                   -webkit-line-clamp: 10; /* number of lines to show */\n               }\n               .info {\n                color: darkblue;\n               }\n\n               .tombol {\n                  cursor: pointer;\n                  color: white;   \n                  background-color: #2ecc71;\n                  outline:0;\n                  font-family: \'Ubuntu\', sans-serif;\n                  font-size: 1.1em;\n                  border:0;\n                  padding: 5px;\n                }\n                .tombol:hover, .tombol:focus{\n                    background-color: #23b05f;\n                }\n           </style>\n           <img class="bendera" src="'.concat(this._negara.flag,'" alt="bendera">\n             <div class="table-container">\n                <h2>').concat(this._negara.name,'</h2>\n                <table>\n              <tr>\n                <td colspan=2>Ejaan Lain: <font class="info">').concat(n,'</font><br/><br/></td>\n              </tr>\n              <tr>\n                <td>Ibu Kota:<font class="info">').concat(this._negara.capital,'</font></td>\n                <td>Bahasa: <font class="info">').concat(this._negara.languages[0].name,'</font></td>\n              </tr>\n              <tr>\n                <td>Mata Uang: <font class="info">').concat(this._negara.currencies[0].name,'</font></td>\n                <td>Populasi: <font class="info">').concat(this._negara.population,'</font></td>\n              </tr>\n              <tr>\n                <td>Sub Benua: <font class="info">').concat(this._negara.subregion,'</font></td>\n                <td>Kode Telepon: <font class="info">+').concat(this._negara.callingCodes[0],'</font></td>\n              </tr>\n              <tr>\n                <td>Native Name: <font class="info">').concat(this._negara.nativeName,'</font></td>\n                <td>Kode Negara: <font class="info">').concat(this._negara.alpha2Code,'</font></td>\n              </tr>\n              <tr>\n                <td>Zona Waktu: <font class="info">').concat(i,'</font></td>\n                <td>Batas Daratan: <font class="info">').concat(r,'</font></td>\n              </tr>\n              <tr>\n                <td>Luas Wilayah: <font class="info">').concat(this._negara.area,' km<sup>2</sup></font></td>\n                <td><button class="tombol" onclick="lokasi(\'').concat(this._negara.latlng,"', '").concat(this._negara.numericCode,"')\">View Location</button></td>\n              </tr>\n            </table>\n           </div>\n               ");this.shadowDOM.innerHTML="".concat(a,"</div>")}},{key:"negara",set:function(t){this._negara=t,this.render()}}])&&r(e.prototype,i),a&&r(e,a),f}(i(HTMLElement));customElements.define("negara-item",s)},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return a(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,t)})(t)}function a(t,n,e){return(a=c()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&u(o,e.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t,n){return(u=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&u(t,n)}(f,t);var n,e,i,a,s=(n=f,function(){var t,e=l(n);if(c()){var r=l(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return o(this,t)});function f(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),(t=s.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return e=f,(i=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n       <style>\n       .search-container {\n           width: 87.5%;\n           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n           padding: 16px;\n           border-radius: 5px;\n           position: fixed;\n           top: 80px;\n           background-color: white;\n       }\n      \n       .search-container > input {\n           width: 75%;\n           padding: 16px;\n           border: 0;\n           border-bottom: 1px solid gray;\n           font-weight: bold;\n       }\n      \n       .search-container > input:focus {\n           outline: 0;\n           border-bottom: 2px solid gray;\n       }\n      \n       .search-container > input:focus::placeholder {\n           font-weight: bold;\n       }\n      \n       .search-container >  input::placeholder {\n           color: gray;\n           font-weight: normal;\n       }\n      \n      \n      .tombol-cari {\n          width: 23%;\n          margin-left: auto;\n          padding: 16px;\n          border-style: solid;\n          border-width: 0px 0px 3px;\n          box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;\n          color: #FFFFFF;    \n          border-radius: 6px;\n          cursor: pointer;\n          display: inline-block;\n          font-style: normal;\n          overflow: hidden;\n          text-align: center;\n          text-decoration: none;\n          text-overflow: ellipsis;\n          transition: all 200ms ease-in-out 0s;\n          white-space: nowrap;  \n          font-family: "Gotham Rounded A","Gotham Rounded B",Helvetica,Arial,sans-serif;\n          font-weight: 700; \n          font-size: 18px;\n          border-color: #326E99;\n          background-color: #3F8ABF;\n      }\n\n      .tombol-cari:hover, .tombol-cari:focus {\n          background-color: #397CAC;\n          border-color: #326E99;   \n      }\n\n       #searchButtonElement {\n           padding-left: 0%;\n       }\n\n       </style>\n         <div id="cari">\n           <div id="search-container" class="search-container">\n               <input placeholder="masukkan nama negara, misal: indonesia, arab, united, china, dsb." id="searchElement" type="search">\n               <button id="searchButtonElement" class="tombol-cari" type="submit">Go !</button>\n           </div>\n         </div>\n       ',this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click",this._clickEvent)}},{key:"clickEvent",set:function(t){this._clickEvent=t,this.render()}},{key:"value",get:function(){return this.shadowDOM.querySelector("#searchElement").value}}])&&r(e.prototype,i),a&&r(e,a),f}(i(HTMLElement));customElements.define("search-bar",s)},function(t,n,e){"use strict";e.r(n);e(0),e(2),e(6),e(7),e(8);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,n){return!n||"object"!==r(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function a(t){var n="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,s(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,t)})(t)}function c(t,n,e){return(c=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&l(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(f,t);var n,e,r,a,c=(n=f,function(){var t,e=s(n);if(u()){var r=s(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return i(this,t)});function f(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),(t=c.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return e=f,(r=[{key:"render",value:function(){var t=this;if(this.shadowDOM.innerHTML='<div style="padding-top: 112px"> </div',p(),"404"==this._negara.status)this.shadowDOM.innerHTML+='<h3 style="color: gray">lokasi tidak ditemukan:(</h2>';else{var n=0;this._negara.forEach((function(e){var r=document.createElement("negara-item");if(r.negara=e,t.shadowDOM.appendChild(r),t._negara[n].latlng.length>0){var o="".concat(t._negara[n].latlng).split(",");o[0]=parseFloat(o[0]),o[1]=parseFloat(o[1]);var i=parseInt(t._negara[n].numericCode);marker[i]=L.marker(o).addTo(map).bindPopup('<img src="'.concat(t._negara[n].flag,'" width="17px"> ').concat(t._negara[n].name),{closeOnClick:!1,autoClose:!1}).openPopup(),map.flyTo(o,4)}n++}))}$("#peta").css("position","fixed"),$("#peta").css("top","180px"),$("#peta").css("width","60%")}},{key:"renderError",value:function(t){this.shadowDOM.innerHTML="\n        <style>\n             .placeholder {\n                   font-weight: lighter;\n                   color: rgba(0,0,0,0.5);\n                   -webkit-user-select: none;\n                   -moz-user-select: none;\n                   -ms-user-select: none;\n                   user-select: none;\n               }\n        </style>",$("#peta").css("top","180px"),p(),null==document.getElementById("searchElement")?(this.shadowDOM.innerHTML+='<h2 class="placeholder" style="padding-top: 110px">silahkan ketik nama sebuah negara di kolom pencarian</h2>',$("#peta").css("width","70%")):this.shadowDOM.innerHTML+='<h2 class="placeholder">'.concat(t,"</h2>")}},{key:"negaras",set:function(t){this._negara=t,this.render()}}])&&o(e.prototype,r),a&&o(e,a),f}(a(HTMLElement));function p(){if(marker.length>0)for(var t=0;t<marker.length;)null!=marker[t]&&map.removeLayer(marker[t]),t++}customElements.define("negara-list",f);e(9);function h(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var d=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,r;return n=t,r=[{key:"cariNegara",value:function(t){return fetch("https://restcountries.eu/rest/v2/name/".concat(t)).then((function(t){return t.json()})).then((function(n){return n?Promise.resolve(n):Promise.reject("".concat(t," is not found"))}))}}],(e=null)&&h(n.prototype,e),r&&h(n,r),t}();function y(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}var b=function(){var t=document.querySelector("search-bar"),n=document.querySelector("negara-list"),e=function(){var n,e=(n=regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.cariNegara(t.value);case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),o(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})),function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function a(t){y(i,r,o,a,c,"next",t)}function c(t){y(i,r,o,a,c,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}(),r=function(t){n.negaras=t},o=function(t){n.renderError(t)};t.clickEvent=e};document.addEventListener("DOMContentLoaded",b)}]);