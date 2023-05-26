import{S as Ne,i as Pe,s as _e,k as P,q as Ze,a as Ce,l as _,m as U,r as et,h as F,c as Fe,n as C,J as tt,b as Be,G as x,K as nt,H as $,y as fe,z as de,A as pe,g as he,d as me,B as ye}from"../chunks/index.153e9287.js";import{H as rt}from"../chunks/header.d165f4f8.js";const st=""+new URL("../assets/searchBarIcon.cc912c0e.png",import.meta.url).href;function De(e,t){return function(){return e.apply(t,arguments)}}const{toString:ot}=Object.prototype,{getPrototypeOf:ie}=Object,v=(e=>t=>{const n=ot.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>v(t)===e),K=e=>t=>typeof t===e,{isArray:D}=Array,k=K("undefined");function it(e){return e!==null&&!k(e)&&e.constructor!==null&&!k(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ue=A("ArrayBuffer");function at(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ue(e.buffer),t}const ct=K("string"),R=K("function"),Le=K("number"),W=e=>e!==null&&typeof e=="object",ut=e=>e===!0||e===!1,q=e=>{if(v(e)!=="object")return!1;const t=ie(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},lt=A("Date"),ft=A("File"),dt=A("Blob"),pt=A("FileList"),ht=e=>W(e)&&R(e.pipe),mt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=v(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},yt=A("URLSearchParams"),Et=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function j(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),D(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let u;for(r=0;r<i;r++)u=o[r],t.call(null,e[u],u,e)}}function ke(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const je=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ie=e=>!k(e)&&e!==je;function ne(){const{caseless:e}=Ie(this)&&this||{},t={},n=(r,s)=>{const o=e&&ke(t,s)||s;q(t[o])&&q(r)?t[o]=ne(t[o],r):q(r)?t[o]=ne({},r):D(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&j(arguments[r],n);return t}const wt=(e,t,n,{allOwnKeys:r}={})=>(j(t,(s,o)=>{n&&R(s)?e[o]=De(s,n):e[o]=s},{allOwnKeys:r}),e),bt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),St=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Rt=(e,t,n,r)=>{let s,o,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&ie(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ot=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},At=e=>{if(!e)return null;if(D(e))return e;let t=e.length;if(!Le(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},gt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ie(Uint8Array)),Tt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},xt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Nt=A("HTMLFormElement"),Pt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ee=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),_t=A("RegExp"),He=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};j(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},Ct=e=>{He(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ft=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return D(e)?r(e):r(String(e).split(t)),n},Bt=()=>{},Dt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Y="abcdefghijklmnopqrstuvwxyz",we="0123456789",$e={DIGIT:we,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+we},Ut=(e=16,t=$e.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Lt(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const kt=e=>{const t=new Array(10),n=(r,s)=>{if(W(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=D(r)?[]:{};return j(r,(i,u)=>{const d=n(i,s+1);!k(d)&&(o[u]=d)}),t[s]=void 0,o}}return r};return n(e,0)},jt=A("AsyncFunction"),It=e=>e&&(W(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:D,isArrayBuffer:Ue,isBuffer:it,isFormData:mt,isArrayBufferView:at,isString:ct,isNumber:Le,isBoolean:ut,isObject:W,isPlainObject:q,isUndefined:k,isDate:lt,isFile:ft,isBlob:dt,isRegExp:_t,isFunction:R,isStream:ht,isURLSearchParams:yt,isTypedArray:gt,isFileList:pt,forEach:j,merge:ne,extend:wt,trim:Et,stripBOM:bt,inherits:St,toFlatObject:Rt,kindOf:v,kindOfTest:A,endsWith:Ot,toArray:At,forEachEntry:Tt,matchAll:xt,isHTMLForm:Nt,hasOwnProperty:Ee,hasOwnProp:Ee,reduceDescriptors:He,freezeMethods:Ct,toObjectSet:Ft,toCamelCase:Pt,noop:Bt,toFiniteNumber:Dt,findKey:ke,global:je,isContextDefined:Ie,ALPHABET:$e,generateString:Ut,isSpecCompliantForm:Lt,toJSONObject:kt,isAsyncFn:jt,isThenable:It};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const qe=m.prototype,Me={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Me[e]={value:e}});Object.defineProperties(m,Me);Object.defineProperty(qe,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(qe);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Ht=null;function re(e){return a.isPlainObject(e)||a.isArray(e)}function ze(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function be(e,t,n){return e?e.concat(t).map(function(s,o){return s=ze(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function $t(e){return a.isArray(e)&&!e.some(re)}const qt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function G(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,S){return!a.isUndefined(S[h])});const r=n.metaTokens,s=n.visitor||f,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(l){if(l===null)return"";if(a.isDate(l))return l.toISOString();if(!d&&a.isBlob(l))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(l)||a.isTypedArray(l)?d&&typeof Blob=="function"?new Blob([l]):Buffer.from(l):l}function f(l,h,S){let b=l;if(l&&!S&&typeof l=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),l=JSON.stringify(l);else if(a.isArray(l)&&$t(l)||(a.isFileList(l)||a.endsWith(h,"[]"))&&(b=a.toArray(l)))return h=ze(h),b.forEach(function(H,Ye){!(a.isUndefined(H)||H===null)&&t.append(i===!0?be([h],Ye,o):i===null?h:h+"[]",c(H))}),!1}return re(l)?!0:(t.append(be(S,h,o),c(l)),!1)}const p=[],E=Object.assign(qt,{defaultVisitor:f,convertValue:c,isVisitable:re});function y(l,h){if(!a.isUndefined(l)){if(p.indexOf(l)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(l),a.forEach(l,function(b,g){(!(a.isUndefined(b)||b===null)&&s.call(t,b,a.isString(g)?g.trim():g,h,E))===!0&&y(b,h?h.concat(g):[g])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Se(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ae(e,t){this._pairs=[],e&&G(e,this,t)}const Je=ae.prototype;Je.append=function(t,n){this._pairs.push([t,n])};Je.toString=function(t){const n=t?function(r){return t.call(this,r,Se)}:Se;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Mt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ve(e,t,n){if(!t)return e;const r=n&&n.encode||Mt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ae(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class zt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Re=zt,ve={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Jt=typeof URLSearchParams<"u"?URLSearchParams:ae,Vt=typeof FormData<"u"?FormData:null,vt=typeof Blob<"u"?Blob:null,Kt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Wt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:Jt,FormData:Vt,Blob:vt},isStandardBrowserEnv:Kt,isStandardBrowserWebWorkerEnv:Wt,protocols:["http","https","file","blob","url","data"]};function Gt(e,t){return G(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Xt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Qt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ke(e){function t(n,r,s,o){let i=n[o++];const u=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!u):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Qt(s[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Xt(r),s,n,0)}),n}return null}const Yt={"Content-Type":void 0};function Zt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const X={transitional:ve,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ke(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Gt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return G(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Zt(t)):t}],transformResponse:[function(t){const n=this.transitional||X.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?m.from(u,m.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){X.headers[t]={}});a.forEach(["post","put","patch"],function(t){X.headers[t]=a.merge(Yt)});const ce=X,en=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),tn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&en[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Oe=Symbol("internals");function L(e){return e&&String(e).trim().toLowerCase()}function M(e){return e===!1||e==null?e:a.isArray(e)?e.map(M):String(e)}function nn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const rn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Z(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function sn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function on(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Q{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(u,d,c){const f=L(d);if(!f)throw new Error("header name must be a non-empty string");const p=a.findKey(s,f);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||d]=M(u))}const i=(u,d)=>a.forEach(u,(c,f)=>o(c,f,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!rn(t)?i(tn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=L(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return nn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=L(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Z(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=L(i),i){const u=a.findKey(r,i);u&&(!n||Z(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Z(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=M(s),delete n[o];return}const u=t?sn(o):String(o).trim();u!==o&&delete n[o],n[u]=M(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Oe]=this[Oe]={accessors:{}}).accessors,s=this.prototype;function o(i){const u=L(i);r[u]||(on(s,i),r[u]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Q.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(Q.prototype);a.freezeMethods(Q);const T=Q;function ee(e,t){const n=this||ce,r=t||n,s=T.from(r.headers);let o=r.data;return a.forEach(e,function(u){o=u.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function We(e){return!!(e&&e.__CANCEL__)}function I(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(I,m,{__CANCEL__:!0});function an(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const cn=O.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,u){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function un(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ln(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ge(e,t){return e&&!un(t)?ln(e,t):t}const fn=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const u=a.isString(i)?s(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function dn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function pn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),f=r[o];i||(i=c),n[s]=d,r[s]=c;let p=o,E=0;for(;p!==s;)E+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const y=f&&c-f;return y?Math.round(E*1e3/y):void 0}}function Ae(e,t){let n=0;const r=pn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,u=o-n,d=r(u),c=o<=i;n=o;const f={loaded:o,total:i,progress:i?o/i:void 0,bytes:u,rate:d||void 0,estimated:d&&i&&c?(i-o)/d:void 0,event:s};f[t?"download":"upload"]=!0,e(f)}}const hn=typeof XMLHttpRequest<"u",mn=hn&&function(e){return new Promise(function(n,r){let s=e.data;const o=T.from(e.headers).normalize(),i=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(s)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",l=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+l))}const f=Ge(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ve(f,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=T.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};an(function(b){n(b),d()},function(b){r(b),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let l=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||ve;e.timeoutErrorMessage&&(l=e.timeoutErrorMessage),r(new m(l,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},O.isStandardBrowserEnv){const y=(e.withCredentials||fn(f))&&e.xsrfCookieName&&cn.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(l,h){c.setRequestHeader(h,l)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Ae(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ae(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=y=>{c&&(r(!y||y.type?new I(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const E=dn(f);if(E&&O.protocols.indexOf(E)===-1){r(new m("Unsupported protocol "+E+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},z={http:Ht,xhr:mn};a.forEach(z,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const yn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?z[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(z,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:z};function te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new I(null,e)}function ge(e){return te(e),e.headers=T.from(e.headers),e.data=ee.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),yn.getAdapter(e.adapter||ce.adapter)(e).then(function(r){return te(e),r.data=ee.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return We(r)||(te(e),r&&r.response&&(r.response.data=ee.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const Te=e=>e instanceof T?e.toJSON():e;function B(e,t){t=t||{};const n={};function r(c,f,p){return a.isPlainObject(c)&&a.isPlainObject(f)?a.merge.call({caseless:p},c,f):a.isPlainObject(f)?a.merge({},f):a.isArray(f)?f.slice():f}function s(c,f,p){if(a.isUndefined(f)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,f,p)}function o(c,f){if(!a.isUndefined(f))return r(void 0,f)}function i(c,f){if(a.isUndefined(f)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,f)}function u(c,f,p){if(p in t)return r(c,f);if(p in e)return r(void 0,c)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(c,f)=>s(Te(c),Te(f),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(f){const p=d[f]||s,E=p(e[f],t[f],f);a.isUndefined(E)&&p!==u||(n[f]=E)}),n}const Xe="1.4.0",ue={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ue[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const xe={};ue.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Xe+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,u)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!xe[i]&&(xe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,u):!0}};function En(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const u=e[o],d=u===void 0||i(u,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const se={assertOptions:En,validators:ue},N=se.validators;class V{constructor(t){this.defaults=t,this.interceptors={request:new Re,response:new Re}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&se.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:se.assertOptions(s,{encode:N.function,serialize:N.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],l=>{delete o[l]}),n.headers=T.concat(i,o);const u=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,u.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let f,p=0,E;if(!d){const l=[ge.bind(this),void 0];for(l.unshift.apply(l,u),l.push.apply(l,c),E=l.length,f=Promise.resolve(n);p<E;)f=f.then(l[p++],l[p++]);return f}E=u.length;let y=n;for(p=0;p<E;){const l=u[p++],h=u[p++];try{y=l(y)}catch(S){h.call(this,S);break}}try{f=ge.call(this,y)}catch(l){return Promise.reject(l)}for(p=0,E=c.length;p<E;)f=f.then(c[p++],c[p++]);return f}getUri(t){t=B(this.defaults,t);const n=Ge(t.baseURL,t.url);return Ve(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){V.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,u){return this.request(B(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}V.prototype[t]=n(),V.prototype[t+"Form"]=n(!0)});const J=V;class le{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(u=>{r.subscribe(u),o=u}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,u){r.reason||(r.reason=new I(o,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new le(function(s){t=s}),cancel:t}}}const wn=le;function bn(e){return function(n){return e.apply(null,n)}}function Sn(e){return a.isObject(e)&&e.isAxiosError===!0}const oe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(oe).forEach(([e,t])=>{oe[t]=e});const Rn=oe;function Qe(e){const t=new J(e),n=De(J.prototype.request,t);return a.extend(n,J.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Qe(B(e,s))},n}const w=Qe(ce);w.Axios=J;w.CanceledError=I;w.CancelToken=wn;w.isCancel=We;w.VERSION=Xe;w.toFormData=G;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=bn;w.isAxiosError=Sn;w.mergeConfig=B;w.AxiosHeaders=T;w.formToJSON=e=>Ke(a.isHTMLForm(e)?new FormData(e):e);w.HttpStatusCode=Rn;w.default=w;const On=w;function An(e){let t,n,r,s,o,i,u,d,c,f,p,E;return{c(){t=P("main"),n=P("div"),r=P("p"),s=Ze("Search"),o=Ce(),i=P("div"),u=P("input"),d=P("button"),c=P("img"),this.h()},l(y){t=_(y,"MAIN",{class:!0});var l=U(t);n=_(l,"DIV",{class:!0});var h=U(n);r=_(h,"P",{});var S=U(r);s=et(S,"Search"),S.forEach(F),h.forEach(F),o=Fe(l),i=_(l,"DIV",{class:!0});var b=U(i);u=_(b,"INPUT",{class:!0}),d=_(b,"BUTTON",{class:!0});var g=U(d);c=_(g,"IMG",{alt:!0,src:!0}),g.forEach(F),b.forEach(F),l.forEach(F),this.h()},h(){C(n,"class","text-7xl font-monstreaf font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-600"),C(u,"class","absolute h-16 w-full bg-white text-5xl font-monstreaf rounded-lg"),C(c,"alt","icon"),tt(c.src,f=st)||C(c,"src",f),C(d,"class","absolute h-20 w-20"),C(i,"class","h-16 w-3/4 relative flex justify-end items-center"),C(t,"class","flex flex-col w-screen h-[calc(100vh-6rem)] justify-center items-center gap-4")},m(y,l){Be(y,t,l),x(t,n),x(n,r),x(r,s),x(t,o),x(t,i),x(i,u),x(i,d),x(d,c),p||(E=nt(d,"click",e[1]),p=!0)},p:$,i:$,o:$,d(y){y&&F(t),p=!1,E()}}}function gn(e){async function t(){try{const o="https://serpapi.com/search.json?q=coffee&tbm=lcl&api_key=803658ef6d31763b5094e4c18d3d4a6604f4a311f68d63446afe91d102087142",i=await On.get(o),{organic_results:u}=i.data;u.forEach(d=>{console.log(d.link)})}catch(r){console.error("Error retrieving search results:",r)}}return[t,()=>t()]}class Tn extends Ne{constructor(t){super(),Pe(this,t,gn,An,_e,{})}}function xn(e){let t,n,r,s;return t=new rt({props:{headerButton:Nn,pageChange:Pn}}),r=new Tn({}),{c(){fe(t.$$.fragment),n=Ce(),fe(r.$$.fragment)},l(o){de(t.$$.fragment,o),n=Fe(o),de(r.$$.fragment,o)},m(o,i){pe(t,o,i),Be(o,n,i),pe(r,o,i),s=!0},p:$,i(o){s||(he(t.$$.fragment,o),he(r.$$.fragment,o),s=!0)},o(o){me(t.$$.fragment,o),me(r.$$.fragment,o),s=!1},d(o){ye(t,o),o&&F(n),ye(r,o)}}}let Nn="About",Pn="/about";class Fn extends Ne{constructor(t){super(),Pe(this,t,null,xn,_e,{})}}export{Fn as component};