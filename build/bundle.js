var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function l(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function r(t,n){t.appendChild(n)}function c(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(){return a("")}function m(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function $(t,n,e){t.classList[e?"add":"remove"](n)}let g;function b(t){g=t}function h(t){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.after_update.push(t)}const x=[],v=[],C=[],w=[],y=Promise.resolve();let T=!1;function _(t){C.push(t)}const k=new Set;let j=0;function P(){const t=g;do{for(;j<x.length;){const t=x[j];j++,b(t),q(t.$$)}for(b(null),x.length=0,j=0;v.length;)v.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];k.has(n)||(k.add(n),n())}C.length=0}while(x.length);for(;w.length;)w.pop()();T=!1,k.clear(),b(t)}function q(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const L=new Set;let M;function E(){M={r:0,c:[],p:M}}function I(){M.r||o(M.c),M=M.p}function N(t,n){t&&t.i&&(L.delete(t),t.i(n))}function S(t,n,e,o){if(t&&t.o){if(L.has(t))return;L.add(t),M.c.push((()=>{L.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function R(t){t&&t.c()}function z(t,e,l,r){const{fragment:c,on_mount:u,on_destroy:i,after_update:a}=t.$$;c&&c.m(e,l),r||_((()=>{const e=u.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(_)}function A(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function H(t,n){-1===t.$$.dirty[0]&&(x.push(t),T||(T=!0,y.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function J(n,s,l,r,c,i,a,f=[-1]){const d=g;b(n);const m=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(d?d.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:s.target||d.$$.root};a&&a(m.root);let p=!1;if(m.ctx=l?l(n,s.props||{},((t,e,...o)=>{const s=o.length?o[0]:e;return m.ctx&&c(m.ctx[t],m.ctx[t]=s)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](s),p&&H(n,t)),e})):[],m.update(),p=!0,o(m.before_update),m.fragment=!!r&&r(m.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);m.fragment&&m.fragment.l(t),t.forEach(u)}else m.fragment&&m.fragment.c();s.intro&&N(n.$$.fragment),z(n,s.target,s.anchor,s.customElement),P()}b(d)}class O{$destroy(){A(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const V=[];function F(n,e=t){let o;const s=new Set;function r(t){if(l(n,t)&&(n=t,o)){const t=!V.length;for(const t of s)t[1](),V.push(t,n);if(t){for(let t=0;t<V.length;t+=2)V[t][0](V[t+1]);V.length=0}}}return{set:r,update:function(t){r(t(n))},subscribe:function(l,c=t){const u=[l,c];return s.add(u),1===s.size&&(o=e(r)||t),l(n),()=>{s.delete(u),0===s.size&&(o(),o=null)}}}}const B=F(null),D=F(null),G=F(null);function K(n){let e,s,l,r,a,d,g,b,h;return{c(){e=i("hr"),s=f(),l=i("h3"),l.textContent="Statut COVID",r=f(),a=i("button"),a.textContent="POSITIF",d=f(),g=i("button"),g.textContent="CAS CONTACT",p(a,"class","red"),$(a,"selected",!0===n[0]),p(g,"class","orange"),$(g,"selected",!1===n[0])},m(t,o){c(t,e,o),c(t,s,o),c(t,l,o),c(t,r,o),c(t,a,o),c(t,d,o),c(t,g,o),b||(h=[m(a,"click",n[2]),m(g,"click",n[3])],b=!0)},p(t,[n]){1&n&&$(a,"selected",!0===t[0]),1&n&&$(g,"selected",!1===t[0])},i:t,o:t,d(t){t&&u(e),t&&u(s),t&&u(l),t&&u(r),t&&u(a),t&&u(d),t&&u(g),b=!1,o(h)}}}function Q(t,n,e){let o=null;function s(t){B.set(t)}B.subscribe((t=>e(0,o=t)));return[o,s,()=>s(!0),()=>s(!1)]}class U extends O{constructor(t){super(),J(this,t,Q,K,l,{})}}function W(n){let e,s,l,a,d,p,g,b,h,x;return{c(){e=i("div"),s=i("hr"),l=f(),a=i("h3"),a.textContent="Votre age",d=f(),p=i("button"),p.textContent="Plus de 12 ans",g=f(),b=i("button"),b.textContent="Moins de 12 ans",$(p,"selected",!0===n[1]),$(b,"selected",!1===n[1])},m(t,o){c(t,e,o),r(e,s),r(e,l),r(e,a),r(e,d),r(e,p),r(e,g),r(e,b),n[5](e),h||(x=[m(p,"click",n[3]),m(b,"click",n[4])],h=!0)},p(t,[n]){2&n&&$(p,"selected",!0===t[1]),2&n&&$(b,"selected",!1===t[1])},i:t,o:t,d(t){t&&u(e),n[5](null),h=!1,o(x)}}}function X(t,n,e){let o,s=null;function l(t){D.set(t)}D.subscribe((t=>{e(1,s=t),G.set(null)})),h((()=>{o&&(console.log("Scrolling age to",o.offsetTop),window.scrollTo(0,o.offsetTop))}));return[o,s,l,()=>l(!0),()=>l(!1),function(t){v[t?"unshift":"push"]((()=>{o=t,e(0,o)}))}]}class Y extends O{constructor(t){super(),J(this,t,X,W,l,{})}}function Z(n){let e,s,l,a,d,p,g,b,h,x;return{c(){e=i("div"),s=i("hr"),l=f(),a=i("h3"),a.textContent="Votre statut vaccinal",d=f(),p=i("button"),p.textContent="Vaccination complète",g=f(),b=i("button"),b.textContent="Vaccination incomplète",$(p,"selected",!0===n[1]),$(b,"selected",!1===n[1])},m(t,o){c(t,e,o),r(e,s),r(e,l),r(e,a),r(e,d),r(e,p),r(e,g),r(e,b),n[5](e),h||(x=[m(p,"click",n[3]),m(b,"click",n[4])],h=!0)},p(t,[n]){2&n&&$(p,"selected",!0===t[1]),2&n&&$(b,"selected",!1===t[1])},i:t,o:t,d(t){t&&u(e),n[5](null),h=!1,o(x)}}}function tt(t,n,e){let o,s=null;function l(t){G.set(t)}G.subscribe((t=>e(1,s=t))),h((()=>{o&&(console.log("Scrolling vaccin to",o.offsetTop),window.scrollTo(0,o.offsetTop))}));return[o,s,l,()=>l(!0),()=>l(!1),function(t){v[t?"unshift":"push"]((()=>{o=t,e(0,o)}))}]}class nt extends O{constructor(t){super(),J(this,t,tt,Z,l,{})}}function et(n){let e,o,s;return{c(){e=i("i"),e.textContent="Moins de 12 ans positif",o=f(),s=i("ul"),s.innerHTML="<li><b>Isolement de 5 jours</b> si le test antigénique ou PCR réalisé le 5ème jour est négatif\n        et absence de symptômes depuis 48 heures</li> \n    <li><b>Isolement de 7 jours</b> dans le cas contraire</li>"},m(t,n){c(t,e,n),c(t,o,n),c(t,s,n)},p:t,i:t,o:t,d(t){t&&u(e),t&&u(o),t&&u(s)}}}class ot extends O{constructor(t){super(),J(this,t,null,et,l,{})}}function st(n){let e,o,s,l,r,d,m,p,$;return{c(){e=i("i"),e.textContent="Moins de 12 ans cas contact",o=i("br"),s=f(),l=i("br"),r=a("\nLes élèves pourront rester en classe :\n"),d=i("ul"),d.innerHTML="<li><b>Si le test PCR ou antigénique fait à J<exp>*</exp>+0 est bien négatif</b></li> \n    <li><b>Et si les auto-tests réalisés à J+2 et J+4 sont négatifs (attestation sur l&#39;honneur des\n            parents)</b></li>",m=f(),p=i("exp"),p.textContent="*",$=a("J = jour où vous apprenez que vous êtes cas contact")},m(t,n){c(t,e,n),c(t,o,n),c(t,s,n),c(t,l,n),c(t,r,n),c(t,d,n),c(t,m,n),c(t,p,n),c(t,$,n)},p:t,i:t,o:t,d(t){t&&u(e),t&&u(o),t&&u(s),t&&u(l),t&&u(r),t&&u(d),t&&u(m),t&&u(p),t&&u($)}}}class lt extends O{constructor(t){super(),J(this,t,null,st,l,{})}}function rt(n){let e,o,s;return{c(){e=i("i"),e.textContent="Plus de 12 ans positif vaccination complète",o=f(),s=i("ul"),s.innerHTML="<li><b>Isolement de 5 jours</b> si le test antigénique ou PCR réalisé le 5ème jour est négatif\n        et en absence de symptômes depuis 48 heures</li> \n    <li><b>Isolement de 7 jours</b> dans le cas contraire</li>"},m(t,n){c(t,e,n),c(t,o,n),c(t,s,n)},p:t,i:t,o:t,d(t){t&&u(e),t&&u(o),t&&u(s)}}}class ct extends O{constructor(t){super(),J(this,t,null,rt,l,{})}}function ut(n){let e,o,s;return{c(){e=i("i"),e.textContent="Plus de 12 ans positif non vacciné ou vaccination incomplète",o=f(),s=i("ul"),s.innerHTML="<li><b>Isolement de 7 jours</b> si le test antigénique ou PCR réalisé le 7ème jour est négatif\n        et en absence de symptômes depuis 48 heures</li> \n    <li><b>Isolement de 10 jours</b> dans le cas contraire</li>"},m(t,n){c(t,e,n),c(t,o,n),c(t,s,n)},p:t,i:t,o:t,d(t){t&&u(e),t&&u(o),t&&u(s)}}}class it extends O{constructor(t){super(),J(this,t,null,ut,l,{})}}function at(n){let e,o,s,l,r,d;return{c(){e=i("i"),e.textContent="Plus de 12 ans cas contact vaccination complète",o=f(),s=i("ul"),s.innerHTML="<li><b>Pas d&#39;isolement</b></li> \n    <li><b>Test antigénique ou PCR immédiat</b></li> \n    <li><b>Autotest à J<exp>*</exp>+2, J+4</b></li>",l=f(),r=i("exp"),r.textContent="*",d=a("\nJ = jour où vous apprenez que vous êtes cas contact")},m(t,n){c(t,e,n),c(t,o,n),c(t,s,n),c(t,l,n),c(t,r,n),c(t,d,n)},p:t,i:t,o:t,d(t){t&&u(e),t&&u(o),t&&u(s),t&&u(l),t&&u(r),t&&u(d)}}}class ft extends O{constructor(t){super(),J(this,t,null,at,l,{})}}function dt(n){let e,o,s;return{c(){e=i("i"),e.textContent="Plus de 12 ans cas contact non vacciné ou vaccination incomplète",o=f(),s=i("ul"),s.innerHTML="<li><b>Isolement de 7 jours</b></li> \n    <li><b>Test antigénique ou PCR à l&#39;issue de l&#39;isolement</b></li>"},m(t,n){c(t,e,n),c(t,o,n),c(t,s,n)},p:t,i:t,o:t,d(t){t&&u(e),t&&u(o),t&&u(s)}}}class mt extends O{constructor(t){super(),J(this,t,null,dt,l,{})}}function pt(t){let n,e,o,s,l,a,d,m,$,g,b;const h=[gt,$t],x=[];function v(t,n){return!1===t[0]?0:!0===t[0]?1:-1}return~(d=v(t))&&(m=x[d]=h[d](t)),{c(){n=i("div"),e=i("hr"),o=f(),s=i("h3"),s.textContent="Réponse",l=f(),a=i("div"),m&&m.c(),$=f(),g=i("div"),g.innerHTML='<hr/> \n            <small class="svelte-r8zb8k">(<a href="https://www.education.gouv.fr/covid19-mesures-pour-les-ecoles-colleges-et-lycees-modalites-pratiques-continuite-pedagogique-et-305467">source</a>)</small>',p(a,"class","response svelte-r8zb8k")},m(u,i){c(u,n,i),r(n,e),r(n,o),r(n,s),r(n,l),r(n,a),~d&&x[d].m(a,null),r(n,$),r(n,g),t[5](n),b=!0},p(t,n){let e=d;d=v(t),d===e?~d&&x[d].p(t,n):(m&&(E(),S(x[e],1,1,(()=>{x[e]=null})),I()),~d?(m=x[d],m?m.p(t,n):(m=x[d]=h[d](t),m.c()),N(m,1),m.m(a,null)):m=null)},i(t){b||(N(m),b=!0)},o(t){S(m),b=!1},d(e){e&&u(n),~d&&x[d].d(),t[5](null)}}}function $t(t){let n,e,o,s;const l=[ht,bt],r=[];function i(t,n){return!0===t[2]?0:!1===t[2]?1:-1}return~(n=i(t))&&(e=r[n]=l[n](t)),{c(){e&&e.c(),o=d()},m(t,e){~n&&r[n].m(t,e),c(t,o,e),s=!0},p(t,s){let c=n;n=i(t),n===c?~n&&r[n].p(t,s):(e&&(E(),S(r[c],1,1,(()=>{r[c]=null})),I()),~n?(e=r[n],e?e.p(t,s):(e=r[n]=l[n](t),e.c()),N(e,1),e.m(o.parentNode,o)):e=null)},i(t){s||(N(e),s=!0)},o(t){S(e),s=!1},d(t){~n&&r[n].d(t),t&&u(o)}}}function gt(t){let n,e,o,s;const l=[Tt,yt],r=[];function i(t,n){return!0===t[2]?0:!1===t[2]?1:-1}return~(n=i(t))&&(e=r[n]=l[n](t)),{c(){e&&e.c(),o=d()},m(t,e){~n&&r[n].m(t,e),c(t,o,e),s=!0},p(t,s){let c=n;n=i(t),n!==c&&(e&&(E(),S(r[c],1,1,(()=>{r[c]=null})),I()),~n?(e=r[n],e||(e=r[n]=l[n](t),e.c()),N(e,1),e.m(o.parentNode,o)):e=null)},i(t){s||(N(e),s=!0)},o(t){S(e),s=!1},d(t){~n&&r[n].d(t),t&&u(o)}}}function bt(t){let n,e,o,s;const l=[vt,xt],r=[];function i(t,n){return!0===t[1]?0:!1===t[1]?1:-1}return~(n=i(t))&&(e=r[n]=l[n](t)),{c(){e&&e.c(),o=d()},m(t,e){~n&&r[n].m(t,e),c(t,o,e),s=!0},p(t,s){let c=n;n=i(t),n!==c&&(e&&(E(),S(r[c],1,1,(()=>{r[c]=null})),I()),~n?(e=r[n],e||(e=r[n]=l[n](t),e.c()),N(e,1),e.m(o.parentNode,o)):e=null)},i(t){s||(N(e),s=!0)},o(t){S(e),s=!1},d(t){~n&&r[n].d(t),t&&u(o)}}}function ht(t){let n,e,o,s;const l=[wt,Ct],r=[];function i(t,n){return!0===t[1]?0:!1===t[1]?1:-1}return~(n=i(t))&&(e=r[n]=l[n](t)),{c(){e&&e.c(),o=d()},m(t,e){~n&&r[n].m(t,e),c(t,o,e),s=!0},p(t,s){let c=n;n=i(t),n!==c&&(e&&(E(),S(r[c],1,1,(()=>{r[c]=null})),I()),~n?(e=r[n],e||(e=r[n]=l[n](t),e.c()),N(e,1),e.m(o.parentNode,o)):e=null)},i(t){s||(N(e),s=!0)},o(t){S(e),s=!1},d(t){~n&&r[n].d(t),t&&u(o)}}}function xt(t){let n,e;return n=new mt({}),{c(){R(n.$$.fragment)},m(t,o){z(n,t,o),e=!0},i(t){e||(N(n.$$.fragment,t),e=!0)},o(t){S(n.$$.fragment,t),e=!1},d(t){A(n,t)}}}function vt(t){let n,e;return n=new ft({}),{c(){R(n.$$.fragment)},m(t,o){z(n,t,o),e=!0},i(t){e||(N(n.$$.fragment,t),e=!0)},o(t){S(n.$$.fragment,t),e=!1},d(t){A(n,t)}}}function Ct(t){let n,e;return n=new it({}),{c(){R(n.$$.fragment)},m(t,o){z(n,t,o),e=!0},i(t){e||(N(n.$$.fragment,t),e=!0)},o(t){S(n.$$.fragment,t),e=!1},d(t){A(n,t)}}}function wt(t){let n,e;return n=new ct({}),{c(){R(n.$$.fragment)},m(t,o){z(n,t,o),e=!0},i(t){e||(N(n.$$.fragment,t),e=!0)},o(t){S(n.$$.fragment,t),e=!1},d(t){A(n,t)}}}function yt(t){let n,e;return n=new lt({}),{c(){R(n.$$.fragment)},m(t,o){z(n,t,o),e=!0},i(t){e||(N(n.$$.fragment,t),e=!0)},o(t){S(n.$$.fragment,t),e=!1},d(t){A(n,t)}}}function Tt(t){let n,e;return n=new ot({}),{c(){R(n.$$.fragment)},m(t,o){z(n,t,o),e=!0},i(t){e||(N(n.$$.fragment,t),e=!0)},o(t){S(n.$$.fragment,t),e=!1},d(t){A(n,t)}}}function _t(t){let n,e,o=!0===t[4]&&pt(t);return{c(){o&&o.c(),n=d()},m(t,s){o&&o.m(t,s),c(t,n,s),e=!0},p(t,[e]){!0===t[4]?o?(o.p(t,e),16&e&&N(o,1)):(o=pt(t),o.c(),N(o,1),o.m(n.parentNode,n)):o&&(E(),S(o,1,1,(()=>{o=null})),I())},i(t){e||(N(o),e=!0)},o(t){S(o),e=!1},d(t){o&&o.d(t),t&&u(n)}}}function kt(t,n,e){let o,s,l=null;D.subscribe((t=>e(0,l=t)));let r=null;G.subscribe((t=>e(1,r=t)));let c=null;return B.subscribe((t=>e(2,c=t))),h((()=>{s&&(console.log("Scrolling response to",s.offsetTop),window.scrollTo(0,s.offsetTop))})),t.$$.update=()=>{7&t.$$.dirty&&e(4,o=null!==l&&(!1===l&&null!==c||!0===l&&null!==r&&null!==c))},[l,r,c,s,o,function(t){v[t?"unshift":"push"]((()=>{s=t,e(3,s)}))}]}class jt extends O{constructor(t){super(),J(this,t,kt,_t,l,{})}}function Pt(t){let n,e,o,s;n=new Y({});let l=!0===t[0]&&qt();return{c(){R(n.$$.fragment),e=f(),l&&l.c(),o=d()},m(t,r){z(n,t,r),c(t,e,r),l&&l.m(t,r),c(t,o,r),s=!0},p(t,n){!0===t[0]?l?1&n&&N(l,1):(l=qt(),l.c(),N(l,1),l.m(o.parentNode,o)):l&&(E(),S(l,1,1,(()=>{l=null})),I())},i(t){s||(N(n.$$.fragment,t),N(l),s=!0)},o(t){S(n.$$.fragment,t),S(l),s=!1},d(t){A(n,t),t&&u(e),l&&l.d(t),t&&u(o)}}}function qt(t){let n,e;return n=new nt({}),{c(){R(n.$$.fragment)},m(t,o){z(n,t,o),e=!0},i(t){e||(N(n.$$.fragment,t),e=!0)},o(t){S(n.$$.fragment,t),e=!1},d(t){A(n,t)}}}function Lt(t){let n,e,o,s,l,a,d,m,$,g;a=new U({});let b=null!=t[1]&&Pt(t);return $=new jt({}),{c(){n=i("main"),e=i("h1"),e.textContent="École - Règles d'isolement élèves et personnels",o=f(),s=i("h2"),s.textContent="(à partir le 3 janvier 2022)",l=f(),R(a.$$.fragment),d=f(),b&&b.c(),m=f(),R($.$$.fragment),p(e,"class","svelte-1577dks"),p(n,"class","svelte-1577dks")},m(t,u){c(t,n,u),r(n,e),r(n,o),r(n,s),r(n,l),z(a,n,null),r(n,d),b&&b.m(n,null),r(n,m),z($,n,null),g=!0},p(t,[e]){null!=t[1]?b?(b.p(t,e),2&e&&N(b,1)):(b=Pt(t),b.c(),N(b,1),b.m(n,m)):b&&(E(),S(b,1,1,(()=>{b=null})),I())},i(t){g||(N(a.$$.fragment,t),N(b),N($.$$.fragment,t),g=!0)},o(t){S(a.$$.fragment,t),S(b),S($.$$.fragment,t),g=!1},d(t){t&&u(n),A(a),b&&b.d(),A($)}}}function Mt(t,n,e){let o=null;D.subscribe((t=>e(0,o=t))),G.subscribe((t=>t));let s=null;return B.subscribe((t=>e(1,s=t))),[o,s]}return new class extends O{constructor(t){super(),J(this,t,Mt,Lt,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
