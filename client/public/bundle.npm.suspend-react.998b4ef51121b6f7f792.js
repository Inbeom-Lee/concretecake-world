"use strict";(self.webpackChunkskinproduct=self.webpackChunkskinproduct||[]).push([[919],{2220:(e,t,r)=>{r.d(t,{Oq:()=>i,WC:()=>f,Wm:()=>u});const o=[];function n(e,t,r=((e,t)=>e===t)){if(e===t)return!0;if(!e||!t)return!1;const o=e.length;if(t.length!==o)return!1;for(let n=0;n<o;n++)if(!r(e[n],t[n]))return!1;return!0}function s(e,t=null,r=!1,s={}){null===t&&(t=[e]);for(const e of o)if(n(t,e.keys,e.equal)){if(r)return;if(Object.prototype.hasOwnProperty.call(e,"error"))throw e.error;if(Object.prototype.hasOwnProperty.call(e,"response"))return s.lifespan&&s.lifespan>0&&(e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout(e.remove,s.lifespan)),e.response;if(!r)throw e.promise}const i={keys:t,equal:s.equal,remove:()=>{const e=o.indexOf(i);-1!==e&&o.splice(e,1)},promise:(u=e,"object"==typeof u&&"function"==typeof u.then?e:e(...t)).then((e=>{i.response=e,s.lifespan&&s.lifespan>0&&(i.timeout=setTimeout(i.remove,s.lifespan))})).catch((e=>i.error=e))};var u;if(o.push(i),!r)throw i.promise}const i=(e,t,r)=>s(e,t,!1,r),u=(e,t,r)=>{s(e,t,!0,r)},f=e=>{if(void 0===e||0===e.length)o.splice(0,o.length);else{const t=o.find((t=>n(e,t.keys,t.equal)));t&&t.remove()}}}}]);