// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol:void 0,i="function"==typeof r?r.toStringTag:"",f=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,f,l,y;if(null==t)return o.call(t);r=t[i],y=i,n=null!=(l=t)&&e.call(l,y);try{t[i]=void 0}catch(n){return o.call(t)}return f=o.call(t),n?t[i]=r:delete t[i],f}:function(t){return o.call(t)},l="function"==typeof Uint16Array,y="function"==typeof Uint16Array?Uint16Array:null,c="function"==typeof Uint16Array?Uint16Array:void 0;return t=function(){var t,n,o;if("function"!=typeof y)return!1;try{n=new y(n=[1,3.14,-3.14,65536,65537]),o=n,t=(l&&o instanceof Uint16Array||"[object Uint16Array]"===f(o))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?c:function(){throw new Error(function(){var t,n=arguments,o="https://stdlib.io/e/"+n[0]+"?";for(t=1;t<n.length;t++)o+="&arg[]="+encodeURIComponent(n[t]);return o}("02P00"))},t},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).Uint16Array=n();
//# sourceMappingURL=index.js.map
