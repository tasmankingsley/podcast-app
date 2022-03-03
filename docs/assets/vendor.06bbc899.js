function g(){}const J=t=>t;function K(t){return t()}function G(){return Object.create(null)}function w(t){t.forEach(K)}function L(t){return typeof t=="function"}function st(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Et(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function rt(t){return Object.keys(t).length===0}function it(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function kt(t,e,n){t.$$.on_destroy.push(it(e,n))}function Ct(t,e,n){return t.set(n),e}const Q=typeof window!="undefined";let U=Q?()=>window.performance.now():()=>Date.now(),M=Q?t=>requestAnimationFrame(t):g;const b=new Set;function V(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&M(V)}function W(t){let e;return b.size===0&&M(V),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}function ot(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ct(t){const e=at("style");return ut(X(t),e),e.sheet}function ut(t,e){ot(t.head||t,e)}function St(t,e,n){t.insertBefore(e,n||null)}function ft(t){t.parentNode.removeChild(t)}function At(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function at(t){return document.createElement(t)}function jt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Y(t){return document.createTextNode(t)}function qt(){return Y(" ")}function Nt(){return Y("")}function Ot(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Rt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function lt(t){return Array.from(t.childNodes)}function zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function dt(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}const N=new Map;let O=0;function _t(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ht(t,e){const n={stylesheet:ct(e),rules:{}};return N.set(t,n),n}function Z(t,e,n,s,i,f,a,u=0){const o=16.666/s;let r=`{
`;for(let m=0;m<=1;m+=o){const C=e+(n-e)*f(m);r+=m*100+`%{${a(C,1-C)}}
`}const l=r+`100% {${a(n,1-n)}}
}`,c=`__svelte_${_t(l)}_${u}`,d=X(t),{stylesheet:_,rules:h}=N.get(d)||ht(d,t);h[c]||(h[c]=!0,_.insertRule(`@keyframes ${c} ${l}`,_.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${c} ${s}ms linear ${i}ms 1 both`,O+=1,c}function P(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?f=>f.indexOf(e)<0:f=>f.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),O-=i,O||mt())}function mt(){M(()=>{O||(N.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),N.clear())})}let T;function E(t){T=t}const v=[],H=[],j=[],I=[],pt=Promise.resolve();let B=!1;function gt(){B||(B=!0,pt.then(tt))}function k(t){j.push(t)}const D=new Set;let A=0;function tt(){const t=T;do{for(;A<v.length;){const e=v[A];A++,E(e),yt(e.$$)}for(E(null),v.length=0,A=0;H.length;)H.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];D.has(n)||(D.add(n),n())}j.length=0}while(v.length);for(;I.length;)I.pop()();B=!1,D.clear(),E(t)}function yt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let x;function et(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function R(t,e,n){t.dispatchEvent(dt(`${e?"intro":"outro"}${n}`))}const q=new Set;let y;function Dt(){y={r:0,c:[],p:y}}function Pt(){y.r||w(y.c),y=y.p}function $t(t,e){t&&t.i&&(q.delete(t),t.i(e))}function Bt(t,e,n,s){if(t&&t.o){if(q.has(t))return;q.add(t),y.c.push(()=>{q.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const nt={duration:0};function Lt(t,e,n){let s=e(t,n),i=!1,f,a,u=0;function o(){f&&P(t,f)}function r(){const{delay:c=0,duration:d=300,easing:_=J,tick:h=g,css:p}=s||nt;p&&(f=Z(t,0,1,d,c,_,p,u++)),h(0,1);const m=U()+c,C=m+d;a&&a.abort(),i=!0,k(()=>R(t,!0,"start")),a=W(z=>{if(i){if(z>=C)return h(1,0),R(t,!0,"end"),o(),i=!1;if(z>=m){const F=_((z-m)/d);h(F,1-F)}}return i})}let l=!1;return{start(){l||(l=!0,P(t),L(s)?(s=s(),et().then(r)):r())},invalidate(){l=!1},end(){i&&(o(),i=!1)}}}function Mt(t,e,n){let s=e(t,n),i=!0,f;const a=y;a.r+=1;function u(){const{delay:o=0,duration:r=300,easing:l=J,tick:c=g,css:d}=s||nt;d&&(f=Z(t,1,0,r,o,l,d));const _=U()+o,h=_+r;k(()=>R(t,!1,"start")),W(p=>{if(i){if(p>=h)return c(0,1),R(t,!1,"end"),--a.r||w(a.c),!1;if(p>=_){const m=l((p-_)/r);c(1-m,m)}}return i})}return L(s)?et().then(()=>{s=s(),u()}):u(),{end(o){o&&s.tick&&s.tick(1,0),i&&(f&&P(t,f),i=!1)}}}function Tt(t){t&&t.c()}function bt(t,e,n,s){const{fragment:i,on_mount:f,on_destroy:a,after_update:u}=t.$$;i&&i.m(e,n),s||k(()=>{const o=f.map(K).filter(L);a?a.push(...o):w(o),t.$$.on_mount=[]}),u.forEach(k)}function wt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function xt(t,e){t.$$.dirty[0]===-1&&(v.push(t),gt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ft(t,e,n,s,i,f,a,u=[-1]){const o=T;E(t);const r=t.$$={fragment:null,ctx:null,props:f,update:g,not_equal:i,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:G(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};a&&a(r.root);let l=!1;if(r.ctx=n?n(t,e.props||{},(c,d,..._)=>{const h=_.length?_[0]:d;return r.ctx&&i(r.ctx[c],r.ctx[c]=h)&&(!r.skip_bound&&r.bound[c]&&r.bound[c](h),l&&xt(t,c)),d}):[],r.update(),l=!0,w(r.before_update),r.fragment=s?s(r.ctx):!1,e.target){if(e.hydrate){const c=lt(e.target);r.fragment&&r.fragment.l(c),c.forEach(ft)}else r.fragment&&r.fragment.c();e.intro&&$t(t.$$.fragment),bt(t,e.target,e.anchor,e.customElement),tt()}E(o)}class Gt{$destroy(){wt(this,1),this.$destroy=g}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!rt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $=[];function Ht(t,e=g){let n;const s=new Set;function i(u){if(st(t,u)&&(t=u,n)){const o=!$.length;for(const r of s)r[1](),$.push(r,t);if(o){for(let r=0;r<$.length;r+=2)$[r][0]($[r+1]);$.length=0}}}function f(u){i(u(t))}function a(u,o=g){const r=[u,o];return s.add(r),s.size===1&&(n=e(i)||g),u(t),()=>{s.delete(r),s.size===0&&(n(),n=null)}}return{set:i,update:f,subscribe:a}}function vt(t){const e=t-1;return e*e*e+1}function It(t,{delay:e=0,duration:n=400,easing:s=vt,x:i=0,y:f=0,opacity:a=0}={}){const u=getComputedStyle(t),o=+u.opacity,r=u.transform==="none"?"":u.transform,l=o*(1-a);return{delay:e,duration:n,easing:s,css:(c,d)=>`
			transform: ${r} translate(${(1-c)*i}px, ${(1-c)*f}px);
			opacity: ${o-l*d}`}}export{Nt as A,Pt as B,At as C,Dt as D,Gt as S,qt as a,Et as b,Rt as c,St as d,at as e,ot as f,zt as g,ft as h,Ft as i,kt as j,Ct as k,Ot as l,jt as m,g as n,k as o,Lt as p,Mt as q,It as r,st as s,Y as t,Tt as u,bt as v,Ht as w,$t as x,Bt as y,wt as z};