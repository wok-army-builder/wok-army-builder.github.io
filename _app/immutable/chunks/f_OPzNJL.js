import{z as l,A as u,B as h,C as m,T as g,D as E,h as f,g as s,F as T,G as w}from"./CIgHlc0Q.js";function p(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function n(r,t){var e=m;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function x(r,t){var e=(t&g)!==0,_=(t&E)!==0,a,d=!r.startsWith("<!>");return()=>{if(f)return n(s,null),s;a===void 0&&(a=p(d?r:"<!>"+r),e||(a=u(a)));var o=_||h?document.importNode(a,!0):a.cloneNode(!0);if(e){var c=u(o),i=o.lastChild;n(c,i)}else n(o,o);return o}}function M(r,t,e="svg"){var _=!r.startsWith("<!>"),a=`<${e}>${_?r:"<!>"+r}</${e}>`,d;return()=>{if(f)return n(s,null),s;if(!d){var o=p(a),c=u(o);d=u(c)}var i=d.cloneNode(!0);return n(i,i),i}}function A(r=""){if(!f){var t=l(r+"");return n(t,t),t}var e=s;return e.nodeType!==3&&(e.before(e=l()),w(e)),n(e,e),e}function C(){if(f)return n(s,null),s;var r=document.createDocumentFragment(),t=document.createComment(""),e=l();return r.append(t,e),n(t,e),r}function L(r,t){if(f){m.nodes_end=s,T();return}r!==null&&r.before(t)}const y="5";var v;typeof window<"u"&&((v=window.__svelte??(window.__svelte={})).v??(v.v=new Set)).add(y);export{L as a,A as b,C as c,n as d,M as n,x as t};
