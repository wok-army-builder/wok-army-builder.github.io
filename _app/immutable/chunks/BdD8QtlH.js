var Jt=t=>{throw TypeError(t)};var Ne=(t,e,n)=>e.has(t)||Jt("Cannot "+n);var A=(t,e,n)=>(Ne(t,e,"read from private field"),n?n.call(t):e.get(t)),P=(t,e,n)=>e.has(t)?Jt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{n as It,ax as Oe,M as C,q as N,H as O,N as je}from"./CIgHlc0Q.js";import{o as Xt}from"./H22HGfEF.js";const q=[];function Ot(t,e=It){let n=null;const r=new Set;function a(o){if(Oe(t,o)&&(t=o,n)){const c=!q.length;for(const l of r)l[1](),q.push(l,t);if(c){for(let l=0;l<q.length;l+=2)q[l][0](q[l+1]);q.length=0}}}function s(o){a(o(t))}function i(o,c=It){const l=[o,c];return r.add(l),r.size===1&&(n=e(a,s)||It),o(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}new URL("sveltekit-internal://");function $e(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function De(t){return t.split("%25").map(decodeURI).join("%25")}function Fe(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function Ut({href:t}){return t.split("#")[0]}function Ve(t,e,n,r=!1){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));e();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return a}function Be(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function qe(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const Me=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&Y.delete(jt(t)),Me(t,e));const Y=new Map;function Ge(t,e){const n=jt(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&Y.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=qe(a)),Promise.resolve(new Response(a,s))}return window.fetch(t,e)}function He(t,e,n){if(Y.size>0){const r=jt(t,n),a=Y.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);Y.delete(r)}}return window.fetch(e,n)}function jt(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${Be(...a)}"]`}return r}const Ke=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function We(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${ze(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Lt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Lt(String.fromCharCode(...c.slice(2).split("-").map(d=>parseInt(d,16))));const p=Ke.exec(c),[,u,w,f,m]=p;return e.push({name:f,matcher:m,optional:!!u,rest:!!w,chained:w?l===1&&i[0]==="":!1}),w?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return Lt(c)}).join("")}).join("")}/?$`),params:e}}function Ye(t){return!/^\([^)]+\)$/.test(t)}function ze(t){return t.slice(1).split("/").filter(Ye)}function Je(t,e,n){const r={},a=t.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<e.length;o+=1){const c=e[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(p=>p).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const p=e[o+1],u=a[o+1];p&&!p.rest&&p.optional&&u&&c.chained&&(i=0),!p&&!u&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Lt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Xe({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([o,[c,l,p]])=>{const{pattern:u,params:w}=We(o),f={id:o,exec:m=>{const d=u.exec(m);if(d)return Je(d,w,r)},errors:[1,...p||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,t[o]]}function i(o){return o===void 0?o:[a.has(o),t[o]]}}function he(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function Zt(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}var ie;const x=((ie=globalThis.__sveltekit_1g9vtsi)==null?void 0:ie.base)??"";var ce;const Ze=((ce=globalThis.__sveltekit_1g9vtsi)==null?void 0:ce.assets)??x,Qe="1742237135107",de="sveltekit:snapshot",pe="sveltekit:scroll",ge="sveltekit:states",tn="sveltekit:pageurl",G="sveltekit:history",X="sveltekit:navigation",F={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ut=location.origin;function me(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function $t(){return{x:pageXOffset,y:pageYOffset}}function M(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Qt={...F,"":F.hover};function we(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function ye(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=we(t)}}function Pt(t,e,n){let r;try{if(r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,s=!r||!!a||bt(r,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===ut&&t.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function dt(t){let e=null,n=null,r=null,a=null,s=null,i=null,o=t;for(;o&&o!==document.documentElement;)r===null&&(r=M(o,"preload-code")),a===null&&(a=M(o,"preload-data")),e===null&&(e=M(o,"keepfocus")),n===null&&(n=M(o,"noscroll")),s===null&&(s=M(o,"reload")),i===null&&(i=M(o,"replacestate")),o=we(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Qt[r??"off"],preload_data:Qt[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(s),replace_state:c(i)}}function te(t){const e=Ot(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function s(i){let o;return e.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const _e={v:()=>{}};function en(){const{set:t,subscribe:e}=Ot(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${Ze}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Qe;return i&&(t(!0),_e.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function bt(t,e,n){return t.origin!==ut||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.pathname===e+"/index.html"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function Bn(t){}function ee(t){const e=rn(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const nn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function rn(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=nn.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const an=-1,on=-2,sn=-3,cn=-4,ln=-5,fn=-6;function un(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(s,i=!1){if(s===an)return;if(s===sn)return NaN;if(s===cn)return 1/0;if(s===ln)return-1/0;if(s===fn)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=e==null?void 0:e[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const p=new Set;r[s]=p;for(let f=1;f<o.length;f+=1)p.add(a(o[f]));break;case"Map":const u=new Map;r[s]=u;for(let f=1;f<o.length;f+=2)u.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const w=Object.create(null);r[s]=w;for(let f=1;f<o.length;f+=2)w[o[f]]=a(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],m=o[1],d=ee(m),h=new f(d);r[s]=h;break}case"ArrayBuffer":{const f=o[1],m=ee(f);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const p=o[l];p!==on&&(c[l]=a(p))}}else{const c={};r[s]=c;for(const l in o){const p=o[l];c[l]=a(p)}}return r[s]}return a(0)}const ve=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ve];const hn=new Set([...ve]);[...hn];function dn(t){return t.filter(e=>e!=null)}class At{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Dt{constructor(e,n){this.status=e,this.location=n}}class Ft extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const pn="x-sveltekit-invalidated",gn="x-sveltekit-trailing-slash";function pt(t){return t instanceof At||t instanceof Ft?t.status:500}function mn(t){return t instanceof Ft?t.text:"Internal Error"}let U,Z,Tt;const wn=Xt.toString().includes("$$")||/function \w+\(\) \{\}/.test(Xt.toString());var et,nt,rt,at,ot,st,it,ct,le,lt,fe,ft,ue;wn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Z={current:null},Tt={current:!1}):(U=new(le=class{constructor(){P(this,et,C({}));P(this,nt,C(null));P(this,rt,C(null));P(this,at,C({}));P(this,ot,C({id:null}));P(this,st,C({}));P(this,it,C(-1));P(this,ct,C(new URL("https://example.com")))}get data(){return N(A(this,et))}set data(e){O(A(this,et),e)}get form(){return N(A(this,nt))}set form(e){O(A(this,nt),e)}get error(){return N(A(this,rt))}set error(e){O(A(this,rt),e)}get params(){return N(A(this,at))}set params(e){O(A(this,at),e)}get route(){return N(A(this,ot))}set route(e){O(A(this,ot),e)}get state(){return N(A(this,st))}set state(e){O(A(this,st),e)}get status(){return N(A(this,it))}set status(e){O(A(this,it),e)}get url(){return N(A(this,ct))}set url(e){O(A(this,ct),e)}},et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,ct=new WeakMap,le),Z=new(fe=class{constructor(){P(this,lt,C(null))}get current(){return N(A(this,lt))}set current(e){O(A(this,lt),e)}},lt=new WeakMap,fe),Tt=new(ue=class{constructor(){P(this,ft,C(!1))}get current(){return N(A(this,ft))}set current(e){O(A(this,ft),e)}},ft=new WeakMap,ue),_e.v=()=>Tt.current=!0);function yn(t){Object.assign(U,t)}const _n="/__data.json",vn=".html__data.json";function bn(t){return t.endsWith(".html")?t.replace(/\.html$/,vn):t.replace(/\/$/,"")+_n}const An=new Set(["icon","shortcut icon","apple-touch-icon"]),B=he(pe)??{},Q=he(de)??{},$={url:te({}),page:te({}),navigating:Ot(null),updated:en()};function Vt(t){B[t]=$t()}function Sn(t,e){let n=t+1;for(;B[n];)delete B[n],n+=1;for(n=e+1;Q[n];)delete Q[n],n+=1}function K(t){return location.href=t.href,new Promise(()=>{})}async function be(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(x||"/");t&&await t.update()}}function ne(){}let Bt,Ct,gt,j,Nt,S;const mt=[],wt=[];let L=null;const Ae=new Set,kn=new Set,z=new Set;let v={branch:[],error:null,url:null},qt=!1,yt=!1,re=!0,tt=!1,W=!1,Se=!1,Mt=!1,ke,R,T,V;const J=new Set;async function Hn(t,e,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),S=t,await((s=(a=t.hooks).init)==null?void 0:s.call(a)),Bt=Xe(t),j=document.documentElement,Nt=e,Ct=t.nodes[0],gt=t.nodes[1],Ct(),gt(),R=(i=history.state)==null?void 0:i[G],T=(o=history.state)==null?void 0:o[X],R||(R=T=Date.now(),history.replaceState({...history.state,[G]:R,[X]:T},""));const r=B[R];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await On(Nt,n):await Pn(S.hash?$n(new URL(location.href)):location.href,{replaceState:!0}),Nn()}function En(){mt.length=0,Mt=!1}function Ee(t){wt.some(e=>e==null?void 0:e.snapshot)&&(Q[t]=wt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Re(t){var e;(e=Q[t])==null||e.forEach((n,r)=>{var a,s;(s=(a=wt[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function ae(){Vt(R),Zt(pe,B),Ee(T),Zt(de,Q)}async function Gt(t,e,n,r){return ht({type:"goto",url:me(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(Mt=!0),e.invalidate&&e.invalidate.forEach(Cn)}})}async function Rn(t){if(t.id!==(L==null?void 0:L.id)){const e={};J.add(e),L={id:t.id,token:e,promise:Ue({...t,preload:e}).then(n=>(J.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function xt(t){var n;const e=(n=await kt(t,!1))==null?void 0:n.route;e&&await Promise.all([...e.layouts,e.leaf].map(r=>r==null?void 0:r[1]()))}function Ie(t,e,n){var s;v=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(U,t.props.page),ke=new S.root({target:e,props:{...t.props,stores:$,components:wt},hydrate:n,sync:!1}),Re(T);const a={from:null,to:{params:v.params,route:{id:((s=v.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};z.forEach(i=>i(a)),yt=!0}function _t({url:t,params:e,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(x&&(t.pathname===x||t.pathname===x+"/"))o="always";else for(const f of n)(f==null?void 0:f.slash)!==void 0&&(o=f.slash);t.pathname=$e(t.pathname,o),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:s},props:{constructors:dn(n).map(f=>f.node.component),page:Wt(U)}};i!==void 0&&(c.props.form=i);let l={},p=!U,u=0;for(let f=0;f<Math.max(n.length,v.branch.length);f+=1){const m=n[f],d=v.branch[f];(m==null?void 0:m.data)!==(d==null?void 0:d.data)&&(p=!0),m&&(l={...l,...m.data},p&&(c.props[`data_${u}`]=l),u+=1)}return(!v.url||t.href!==v.url.href||v.error!==a||i!==void 0&&i!==U.form||p)&&(c.props.page={error:a,params:e,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:p?l:U.data}),c}async function Ht({loader:t,parent:e,url:n,params:r,route:a,server_data_node:s}){var p,u,w;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((p=l.universal)!=null&&p.load){let f=function(...d){for(const h of d){const{href:y}=new URL(h,n);c.dependencies.add(y)}};const m={route:new Proxy(a,{get:(d,h)=>(o&&(c.route=!0),d[h])}),params:new Proxy(r,{get:(d,h)=>(o&&c.params.add(h),d[h])}),data:(s==null?void 0:s.data)??null,url:Ve(n,()=>{o&&(c.url=!0)},d=>{o&&c.search_params.add(d)},S.hash),async fetch(d,h){let y;d instanceof Request?(y=d.url,h={body:d.method==="GET"||d.method==="HEAD"?void 0:await d.blob(),cache:d.cache,credentials:d.credentials,headers:[...d.headers].length?d.headers:void 0,integrity:d.integrity,keepalive:d.keepalive,method:d.method,mode:d.mode,redirect:d.redirect,referrer:d.referrer,referrerPolicy:d.referrerPolicy,signal:d.signal,...h}):y=d;const k=new URL(y,n);return o&&f(k.href),k.origin===n.origin&&(y=k.href.slice(n.origin.length)),yt?He(y,k.href,h):Ge(y,h)},setHeaders:()=>{},depends:f,parent(){return o&&(c.parent=!0),e()},untrack(d){o=!1;try{return d()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:s,universal:(u=l.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((w=l.universal)==null?void 0:w.trailingSlash)??(s==null?void 0:s.slash)}}function oe(t,e,n,r,a,s){if(Mt)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==v.params[i])return!0;for(const i of a.dependencies)if(mt.some(o=>o(new URL(i))))return!0;return!1}function Kt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function In(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),s=e.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function se({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:Wt(U),constructors:[]}}}async function Ue({id:t,invalidating:e,url:n,params:r,route:a,preload:s}){if((L==null?void 0:L.id)===t)return J.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let p=null;const u=v.url?t!==vt(v.url):!1,w=v.route?a.id!==v.route.id:!1,f=In(v.url,n);let m=!1;const d=l.map((g,_)=>{var D;const b=v.branch[_],E=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||oe(m,w,u,f,(D=b.server)==null?void 0:D.uses,r));return E&&(m=!0),E});if(d.some(Boolean)){try{p=await xe(n,d)}catch(g){const _=await H(g,{url:n,params:r,route:{id:t}});return J.has(s)?se({error:_,url:n,params:r,route:a}):St({status:pt(g),error:_,url:n,route:a})}if(p.type==="redirect")return p}const h=p==null?void 0:p.nodes;let y=!1;const k=l.map(async(g,_)=>{var Et;if(!g)return;const b=v.branch[_],E=h==null?void 0:h[_];if((!E||E.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!oe(y,w,u,f,(Et=b.universal)==null?void 0:Et.uses,r))return b;if(y=!0,(E==null?void 0:E.type)==="error")throw E;return Ht({loader:g[1],url:n,params:r,route:a,parent:async()=>{var zt;const Yt={};for(let Rt=0;Rt<_;Rt+=1)Object.assign(Yt,(zt=await k[Rt])==null?void 0:zt.data);return Yt},server_data_node:Kt(E===void 0&&g[0]?{type:"skip"}:E??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of k)g.catch(()=>{});const I=[];for(let g=0;g<l.length;g+=1)if(l[g])try{I.push(await k[g])}catch(_){if(_ instanceof Dt)return{type:"redirect",location:_.location};if(J.has(s))return se({error:await H(_,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=pt(_),E;if(h!=null&&h.includes(_))b=_.status??b,E=_.error;else if(_ instanceof At)E=_.body;else{if(await $.updated.check())return await be(),await K(n);E=await H(_,{params:r,url:n,route:{id:a.id}})}const D=await Un(g,I,i);return D?_t({url:n,params:r,branch:I.slice(0,D.idx).concat(D.node),status:b,error:E,route:a}):await Te(n,{id:a.id},E,b)}else I.push(void 0);return _t({url:n,params:r,branch:I,status:200,error:null,route:a,form:e?void 0:null})}async function Un(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function St({status:t,error:e,url:n,route:r}){const a={};let s=null;if(S.server_loads[0]===0)try{const o=await xe(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==ut||n.pathname!==location.pathname||qt)&&await K(n)}try{const o=await Ht({loader:Ct,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Kt(s)}),c={node:await gt(),loader:gt,universal:null,server:null,data:null};return _t({url:n,params:a,branch:[o,c],status:t,error:e,route:null})}catch(o){if(o instanceof Dt)return Gt(new URL(o.location,location.href),{},0);throw o}}async function Ln(t){let e;try{if(e=await S.hooks.reroute({url:new URL(t)})??t,typeof e=="string"){const n=new URL(t);S.hash?n.hash=e:n.pathname=e,e=n}}catch{return}return e}async function kt(t,e){if(t&&!bt(t,x,S.hash)){const n=await Ln(t);if(!n)return;const r=Tn(n);for(const a of Bt){const s=a.exec(r);if(s)return{id:vt(t),invalidating:e,route:a,params:Fe(s),url:t}}}}function Tn(t){return De(S.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(x.length))||"/"}function vt(t){return(S.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function Le({url:t,type:e,intent:n,delta:r}){let a=!1;const s=Ce(v,n,t,e);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return tt||Ae.forEach(o=>o(i)),a?null:s}async function ht({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=ne,block:p=ne}){const u=V;V=c;const w=await kt(e,!1),f=Le({url:e,type:t,delta:n==null?void 0:n.delta,intent:w});if(!f){p(),V===c&&(V=u);return}const m=R,d=T;l(),tt=!0,yt&&$.navigating.set(Z.current=f.navigation);let h=w&&await Ue(w);if(!h){if(bt(e,x,S.hash))return await K(e);h=await Te(e,{id:null},await H(new Ft(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(w==null?void 0:w.url)||e,V!==c)return f.reject(new Error("navigation aborted")),!1;if(h.type==="redirect")if(o>=20)h=await St({status:500,error:await H(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return await Gt(new URL(h.location,e).href,{},o+1,c),!1;else h.props.page.status>=400&&await $.updated.check()&&(await be(),await K(e));if(En(),Vt(m),Ee(d),h.props.page.url.pathname!==e.pathname&&(e.pathname=h.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,_={[G]:R+=g,[X]:T+=g,[ge]:i};(s?history.replaceState:history.pushState).call(history,_,"",e),s||Sn(R,T)}if(L=null,h.props.page.state=i,yt){v=h.state,h.props.page&&(h.props.page.url=e);const g=(await Promise.all(Array.from(kn,_=>_(f.navigation)))).filter(_=>typeof _=="function");if(g.length>0){let _=function(){g.forEach(b=>{z.delete(b)})};g.push(_),g.forEach(b=>{z.add(b)})}ke.$set(h.props),yn(h.props.page),Se=!0}else Ie(h,Nt,!1);const{activeElement:y}=document;await je();const k=n?n.scroll:a?$t():null;if(re){const g=e.hash&&document.getElementById(decodeURIComponent(S.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));k?scrollTo(k.x,k.y):g?g.scrollIntoView():scrollTo(0,0)}const I=document.activeElement!==y&&document.activeElement!==document.body;!r&&!I&&jn(),re=!0,h.props.page&&Object.assign(U,h.props.page),tt=!1,t==="popstate"&&Re(T),f.fulfil(void 0),z.forEach(g=>g(f.navigation)),$.navigating.set(Z.current=null)}async function Te(t,e,n,r){return t.origin===ut&&t.pathname===location.pathname&&!qt?await St({status:r,error:n,url:t,route:e}):await K(t)}function xn(){let t,e,n;j.addEventListener("mousemove",o=>{const c=o.target;clearTimeout(t),t=setTimeout(()=>{s(c,F.hover)},20)});function r(o){o.defaultPrevented||s(o.composedPath()[0],F.tap)}j.addEventListener("mousedown",r),j.addEventListener("touchstart",r,{passive:!0});const a=new IntersectionObserver(o=>{for(const c of o)c.isIntersecting&&(xt(new URL(c.target.href)),a.unobserve(c.target))},{threshold:0});async function s(o,c){const l=ye(o,j),p=l===e&&c>=n;if(!l||p)return;const{url:u,external:w,download:f}=Pt(l,x,S.hash);if(w||f)return;const m=dt(l),d=u&&vt(v.url)===vt(u);if(!(m.reload||d))if(c<=m.preload_data){e=l,n=F.tap;const h=await kt(u,!1);if(!h)return;Rn(h)}else c<=m.preload_code&&(e=l,n=c,xt(u))}function i(){a.disconnect();for(const o of j.querySelectorAll("a")){const{url:c,external:l,download:p}=Pt(o,x,S.hash);if(l||p)continue;const u=dt(o);u.reload||(u.preload_code===F.viewport&&a.observe(o),u.preload_code===F.eager&&xt(c))}}z.add(i),i()}function H(t,e){if(t instanceof At)return t.body;const n=pt(t),r=mn(t);return S.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function Pn(t,e={}){return t=new URL(me(t)),t.origin!==ut?Promise.reject(new Error("goto: invalid URL")):Gt(t,e,0)}function Cn(t){if(typeof t=="function")mt.push(t);else{const{href:e}=new URL(t,location.href);mt.push(n=>n.href===e)}}function Nn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(ae(),!tt){const a=Ce(v,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Ae.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ae()}),(e=navigator.connection)!=null&&e.saveData||xn(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=ye(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=Pt(r,x,S.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=dt(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[p,u]=(S.hash?a.hash.replace(/^#/,""):a.href).split("#"),w=p===Ut(location);if(s||c.reload&&(!w||!u)){Le({url:a,type:"link"})?tt=!0:n.preventDefault();return}if(u!==void 0&&w){const[,f]=v.url.href.split("#");if(f===u){if(n.preventDefault(),u===""||u==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(W=!0,Vt(R),t(a),!c.replace_state)return;W=!1}n.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),await ht({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(bt(o,x,!1))return;const c=n.target,l=dt(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const p=new FormData(c),u=a==null?void 0:a.getAttribute("name");u&&p.append(u,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(p).toString(),ht({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[G]){const a=n.state[G];if(V={},a===R)return;const s=B[a],i=n.state[ge]??{},o=new URL(n.state[tn]??location.href),c=n.state[X],l=v.url?Ut(location)===Ut(v.url):!1;if(c===T&&(Se||l)){i!==U.state&&(U.state=i),t(o),B[R]=$t(),s&&scrollTo(s.x,s.y),R=a;return}const u=a-R;await ht({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{R=a,T=c},block:()=>{history.go(-u)},nav_token:V})}else if(!W){const a=new URL(location.href);t(a),S.hash&&location.reload()}}),addEventListener("hashchange",()=>{W&&(W=!1,history.replaceState({...history.state,[G]:++R,[X]:T},"",location.href))});for(const n of document.querySelectorAll("link"))An.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(Z.current=null)});function t(n){v.url=U.url=n,$.page.set(Wt(U)),$.page.notify()}}async function On(t,{status:e=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){qt=!0;const l=new URL(location.href);let p;({params:a={},route:s={id:null}}=await kt(l,!1)||{}),p=Bt.find(({id:f})=>f===s.id);let u,w=!0;try{const f=r.map(async(d,h)=>{const y=o[h];return y!=null&&y.uses&&(y.uses=Pe(y.uses)),Ht({loader:S.nodes[d],url:l,params:a,route:s,parent:async()=>{const k={};for(let I=0;I<h;I+=1)Object.assign(k,(await f[I]).data);return k},server_data_node:Kt(y)})}),m=await Promise.all(f);if(p){const d=p.layouts;for(let h=0;h<d.length;h++)d[h]||m.splice(h,0,void 0)}u=_t({url:l,params:a,branch:m,status:e,error:n,form:c,route:p??null})}catch(f){if(f instanceof Dt){await K(new URL(f.location,location.href));return}u=await St({status:pt(f),error:await H(f,{url:l,params:a,route:s}),url:l,route:s}),t.textContent="",w=!1}u.props.page&&(u.props.page.state={}),Ie(u,t,w)}async function xe(t,e){var s;const n=new URL(t);n.pathname=bn(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(gn,"1"),n.searchParams.append(pn,e.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new At(a.status,i)}return new Promise(async i=>{var w;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function p(f){return un(f,{...S.decoders,Promise:m=>new Promise((d,h)=>{o.set(m,{fulfil:d,reject:h})})})}let u="";for(;;){const{done:f,value:m}=await c.read();if(f&&!u)break;for(u+=!m&&u?`
`:l.decode(m,{stream:!0});;){const d=u.indexOf(`
`);if(d===-1)break;const h=JSON.parse(u.slice(0,d));if(u=u.slice(d+1),h.type==="redirect")return i(h);if(h.type==="data")(w=h.nodes)==null||w.forEach(y=>{(y==null?void 0:y.type)==="data"&&(y.uses=Pe(y.uses),y.data=p(y.data))}),i(h);else if(h.type==="chunk"){const{id:y,data:k,error:I}=h,g=o.get(y);o.delete(y),I?g.reject(p(I)):g.fulfil(p(k))}}}})}function Pe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function jn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function Ce(t,e,n,r){var c,l;let a,s;const i=new Promise((p,u)=>{a=p,s=u});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:s}}function Wt(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}function $n(t){const e=new URL(t);return e.hash=decodeURIComponent(t.hash),e}export{Hn as a,Bn as l,U as p,$ as s};
