!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("vue2-recaptcha-invisible",[],n):"object"==typeof exports?exports["vue2-recaptcha-invisible"]=n():t["vue2-recaptcha-invisible"]=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=33)}([function(t,n,e){var r=e(27)("wks"),o=e(30),i=e(1).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(11),o=e(26);t.exports=e(5)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n,e){t.exports=!e(22)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports={}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(12);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(2),o=e(40),i=e(61),c=Object.defineProperty;n.f=e(5)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(10),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(11).f,o=e(9),i=e(0)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(27)("keys"),o=e(30);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(42),o=e(13);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(7),o=e(0)("toStringTag"),i="Arguments"==r(function(){return arguments}()),c=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=c(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(1),o=e(4),i=e(8),c=e(3),u=function(t,n,e){var a,s,f,p=t&u.F,l=t&u.G,d=t&u.S,v=t&u.P,h=t&u.B,y=t&u.W,x=l?o:o[n]||(o[n]={}),_=x.prototype,m=l?r:d?r[n]:(r[n]||{}).prototype;l&&(e=n);for(a in e)(s=!p&&m&&void 0!==m[a])&&a in x||(f=s?m[a]:e[a],x[a]=l&&"function"!=typeof m[a]?e[a]:h&&s?i(f,r):y&&m[a]==f?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((x.virtual||(x.virtual={}))[a]=f,t&u.R&&_&&!_[a]&&c(_,a,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){t.exports=e(1).document&&document.documentElement},function(t,n,e){"use strict";var r=e(25),o=e(21),i=e(55),c=e(3),u=e(9),a=e(6),s=e(45),f=e(15),p=e(51),l=e(0)("iterator"),d=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,h,y,x,_){s(e,n,h);var m,g,w,b=function(t){if(!d&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},j=n+" Iterator",O="values"==y,S=!1,P=t.prototype,T=P[l]||P["@@iterator"]||y&&P[y],k=T||b(y),E=y?O?b("entries"):k:void 0,M="Array"==n?P.entries||T:T;if(M&&(w=p(M.call(new t)))!==Object.prototype&&(f(w,j,!0),r||u(w,l)||c(w,l,v)),O&&T&&"values"!==T.name&&(S=!0,k=function(){return T.call(this)}),r&&!_||!d&&!S&&P[l]||c(P,l,k),a[n]=k,a[j]=v,y)if(m={values:O?k:b("values"),keys:x?k:b("keys"),entries:E},_)for(g in m)g in P||i(P,g,m[g]);else o(o.P+o.F*(d||S),n,m);return m}},function(t,n){t.exports=!0},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(1),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n,e){var r,o,i,c=e(8),u=e(41),a=e(23),s=e(14),f=e(1),p=f.process,l=f.setImmediate,d=f.clearImmediate,v=f.MessageChannel,h=0,y={},x=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},_=function(t){x.call(t.data)};l&&d||(l=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return y[++h]=function(){u("function"==typeof t?t:Function(t),n)},r(h),h},d=function(t){delete y[t]},"process"==e(7)(p)?r=function(t){p.nextTick(c(x,t,1))}:v?(o=new v,i=o.port2,o.port1.onmessage=_,r=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):r="onreadystatechange"in s("script")?function(t){a.appendChild(s("script")).onreadystatechange=function(){a.removeChild(this),x.call(t)}}:function(t){setTimeout(c(x,t,1),0)}),t.exports={set:l,clear:d}},function(t,n,e){var r=e(17),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(68)(e(32),e(69),null,null);t.exports=r.exports},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(34),o=function(t){return t&&t.__esModule?t:{default:t}}(r);if("undefined"!=typeof window){window.recaptchaLoaded=new o.default(function(t){window.vueRecaptchaInit=t});var i=document.createElement("script");i.setAttribute("src","https://www.google.com/recaptcha/api.js?onload=vueRecaptchaInit&render=explicit"),i.setAttribute("async",""),i.setAttribute("defer",""),document.body.appendChild(i)}n.default={props:{dataSitekey:String,dataCallback:Function,dataValidate:Function,dataBadge:String,dataType:String,dataErrorcallback:Function,dataTabindex:String,dataSize:String},data:function(){return{recaptchaId:0}},created:function(){var t=this;"undefined"!=typeof window&&window.recaptchaLoaded.then(function(){try{var n={sitekey:t.dataSitekey};void 0!==t.dataBadge&&(n.badge=t.dataBadge),void 0!==t.dataType&&(n.type=t.dataType),void 0!==t.dataTabindex&&(n.tabindex=t.dataTabidex),void 0===t.dataSize&&(n.size="invisible",n.callback=t.getToken),console.log("this",t);var e=document.createElement("div");e.className="outside-badge",t.$el.prepend(e),t.recaptchaId=window.grecaptcha.render(e,n)}catch(t){window.console.error(t)}})},methods:{submitData:function(t){t.preventDefault(),"undefined"!=typeof window&&(!0!==this.dataValidate()&&void 0!==this.dataValidate||(void 0===this.dataSize?window.grecaptcha.execute(this.recaptchaId):this.getToken(window.grecaptcha.getResponse(this.recaptchaId))))},getToken:function(t){"undefined"!=typeof window&&(window.grecaptcha.reset(this.recaptchaId),this.dataCallback(t))}}}},function(t,n,e){"use strict";var r=e(31);t.exports=r},function(t,n,e){t.exports={default:e(35),__esModule:!0}},function(t,n,e){e(64),e(66),e(67),e(65),t.exports=e(4).Promise},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(18),o=e(29),i=e(59);t.exports=function(t){return function(n,e,c){var u,a=r(n),s=o(a.length),f=i(c,s);if(t&&e!=e){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(8),o=e(44),i=e(43),c=e(2),u=e(29),a=e(62),s={},f={},n=t.exports=function(t,n,e,p,l){var d,v,h,y,x=l?function(){return t}:a(t),_=r(e,p,n?2:1),m=0;if("function"!=typeof x)throw TypeError(t+" is not iterable!");if(i(x)){for(d=u(t.length);d>m;m++)if((y=n?_(c(v=t[m])[0],v[1]):_(t[m]))===s||y===f)return y}else for(h=x.call(t);!(v=h.next()).done;)if((y=o(h,_,v.value,n))===s||y===f)return y};n.BREAK=s,n.RETURN=f},function(t,n,e){t.exports=!e(5)&&!e(22)(function(){return 7!=Object.defineProperty(e(14)("div"),"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(7);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(6),o=e(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(2);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){"use strict";var r=e(49),o=e(26),i=e(15),c={};e(3)(c,e(0)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(c,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:e=!0}},i[r]=function(){return c},t(i)}catch(t){}return e}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(1),o=e(28).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,a="process"==e(7)(c);t.exports=function(){var t,n,e,s=function(){var r,o;for(a&&(r=c.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(a)e=function(){c.nextTick(s)};else if(i){var f=!0,p=document.createTextNode("");new i(s).observe(p,{characterData:!0}),e=function(){p.data=f=!f}}else if(u&&u.resolve){var l=u.resolve();e=function(){l.then(s)}}else e=function(){o.call(r,s)};return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){var r=e(2),o=e(50),i=e(20),c=e(16)("IE_PROTO"),u=function(){},a=function(){var t,n=e(14)("iframe"),r=i.length;for(n.style.display="none",e(23).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object</script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(u.prototype=r(t),e=new u,u.prototype=null,e[c]=t):e=a(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(11),o=e(2),i=e(53);t.exports=e(5)?Object.defineProperties:function(t,n){o(t);for(var e,c=i(n),u=c.length,a=0;u>a;)r.f(t,e=c[a++],n[e]);return t}},function(t,n,e){var r=e(9),o=e(60),i=e(16)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,n,e){var r=e(9),o=e(18),i=e(38)(!1),c=e(16)("IE_PROTO");t.exports=function(t,n){var e,u=o(t),a=0,s=[];for(e in u)e!=c&&r(u,e)&&s.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var r=e(52),o=e(20);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(3);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){t.exports=e(3)},function(t,n,e){"use strict";var r=e(1),o=e(4),i=e(11),c=e(5),u=e(0)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];c&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(2),o=e(12),i=e(0)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||void 0==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r=e(17),o=e(13);t.exports=function(t){return function(n,e){var i,c,u=String(o(n)),a=r(e),s=u.length;return a<0||a>=s?t?"":void 0:(i=u.charCodeAt(a),i<55296||i>56319||a+1===s||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536)}}},function(t,n,e){var r=e(17),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(13);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(19),o=e(0)("iterator"),i=e(6);t.exports=e(4).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){"use strict";var r=e(36),o=e(47),i=e(6),c=e(18);t.exports=e(24)(Array,"Array",function(t,n){this._t=c(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){},function(t,n,e){"use strict";var r,o,i,c=e(25),u=e(1),a=e(8),s=e(19),f=e(21),p=e(10),l=e(12),d=e(37),v=e(39),h=e(57),y=e(28).set,x=e(48)(),_=u.TypeError,m=u.process,g=u.Promise,m=u.process,w="process"==s(m),b=function(){},j=!!function(){try{var t=g.resolve(1),n=(t.constructor={})[e(0)("species")]=function(t){t(b,b)};return(w||"function"==typeof PromiseRejectionEvent)&&t.then(b)instanceof n}catch(t){}}(),O=function(t,n){return t===n||t===g&&n===i},S=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},P=function(t){return O(g,t)?new T(t):new o(t)},T=o=function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw _("Bad Promise constructor");n=t,e=r}),this.resolve=l(n),this.reject=l(e)},k=function(t){try{t()}catch(t){return{error:t}}},E=function(t,n){if(!t._n){t._n=!0;var e=t._c;x(function(){for(var r=t._v,o=1==t._s,i=0;e.length>i;)!function(n){var e,i,c=o?n.ok:n.fail,u=n.resolve,a=n.reject,s=n.domain;try{c?(o||(2==t._h&&I(t),t._h=1),!0===c?e=r:(s&&s.enter(),e=c(r),s&&s.exit()),e===n.promise?a(_("Promise-chain cycle")):(i=S(e))?i.call(e,u,a):u(e)):a(r)}catch(t){a(t)}}(e[i++]);t._c=[],t._n=!1,n&&!t._h&&M(t)})}},M=function(t){y.call(u,function(){var n,e,r,o=t._v;if(A(t)&&(n=k(function(){w?m.emit("unhandledRejection",o,t):(e=u.onunhandledrejection)?e({promise:t,reason:o}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=w||A(t)?2:1),t._a=void 0,n)throw n.error})},A=function(t){if(1==t._h)return!1;for(var n,e=t._a||t._c,r=0;e.length>r;)if(n=e[r++],n.fail||!A(n.promise))return!1;return!0},I=function(t){y.call(u,function(){var n;w?m.emit("rejectionHandled",t):(n=u.onrejectionhandled)&&n({promise:t,reason:t._v})})},F=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),E(n,!0))},R=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw _("Promise can't be resolved itself");(n=S(t))?x(function(){var r={_w:e,_d:!1};try{n.call(t,a(R,r,1),a(F,r,1))}catch(t){F.call(r,t)}}):(e._v=t,e._s=1,E(e,!1))}catch(t){F.call({_w:e,_d:!1},t)}}};j||(g=function(t){d(this,g,"Promise","_h"),l(t),r.call(this);try{t(a(R,this,1),a(F,this,1))}catch(t){F.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(54)(g.prototype,{then:function(t,n){var e=P(h(this,g));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=w?m.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&E(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),T=function(){var t=new r;this.promise=t,this.resolve=a(R,t,1),this.reject=a(F,t,1)}),f(f.G+f.W+f.F*!j,{Promise:g}),e(15)(g,"Promise"),e(56)("Promise"),i=e(4).Promise,f(f.S+f.F*!j,"Promise",{reject:function(t){var n=P(this);return(0,n.reject)(t),n.promise}}),f(f.S+f.F*(c||!j),"Promise",{resolve:function(t){if(t instanceof g&&O(t.constructor,this))return t;var n=P(this);return(0,n.resolve)(t),n.promise}}),f(f.S+f.F*!(j&&e(46)(function(t){g.all(t).catch(b)})),"Promise",{all:function(t){var n=this,e=P(n),r=e.resolve,o=e.reject,i=k(function(){var e=[],i=0,c=1;v(t,!1,function(t){var u=i++,a=!1;e.push(void 0),c++,n.resolve(t).then(function(t){a||(a=!0,e[u]=t,--c||r(e))},o)}),--c||r(e)});return i&&o(i.error),e.promise},race:function(t){var n=this,e=P(n),r=e.reject,o=k(function(){v(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o&&r(o.error),e.promise}})},function(t,n,e){"use strict";var r=e(58)(!0);e(24)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){e(63);for(var r=e(1),o=e(3),i=e(6),c=e(0)("toStringTag"),u=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;a<5;a++){var s=u[a],f=r[s],p=f&&f.prototype;p&&!p[c]&&o(p,c,s),i[s]=i.Array}},function(t,n){t.exports=function(t,n,e,r){var o,i=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(o=t,i=t.default);var u="function"==typeof i?i.options:i;if(n&&(u.render=n.render,u.staticRenderFns=n.staticRenderFns),e&&(u._scopeId=e),r){var a=Object.create(u.computed||null);Object.keys(r).forEach(function(t){var n=r[t];a[t]=function(){return n}}),u.computed=a}return{esModule:o,exports:i,options:u}}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("button",{on:{click:t.submitData}},[t._t("default",[t._v("SUBMIT")])],2)])},staticRenderFns:[]}}])});