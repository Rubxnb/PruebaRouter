import{p as P,i as W,c as r,r as X,a as O,g as ie,s as I,o as Y,b as re,d as $,f as Ae,e as Pe,h as Le,j as Ce,k as ue,l as k,m as u,T as $e,n as ce,q as de,t as ke,u as ve,v as J,w as fe,x as me,y as Ee,z as Re,A as D,B as ze,C as He,D as Me,E as ye,F as Ne,G as Q,H as ee,I as q,J as Oe,K as De}from"./index-5e13e06f.js";import{u as qe,m as j,a as te,b as z,c as Fe,d as je,e as Ue,f as Ke,g as Ge,h as Ze,i as Je,V as We,j as Z,k as Xe}from"./VIcon-b203b7b2.js";const F=Symbol.for("vuetify:layout"),ge=Symbol.for("vuetify:layout-item"),le=1e3,Ye=P({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Qe=P({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function et(){const e=W(F);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function tt(e){const i=W(F);if(!i)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${Pe()}`,o=ie("useLayoutItem");re(ge,{id:t});const s=I(!1);Le(()=>s.value=!0),Ce(()=>s.value=!1);const{layoutItemStyles:l,layoutItemScrimStyles:a}=i.register(o,{...e,active:r(()=>s.value?!1:e.active.value),id:t});return ue(()=>i.unregister(t)),{layoutItemStyles:l,layoutRect:i.layoutRect,layoutItemScrimStyles:a}}const at=(e,i,t,o)=>{let s={top:0,left:0,right:0,bottom:0};const l=[{id:"",layer:{...s}}];for(const a of e){const n=i.get(a),d=t.get(a),y=o.get(a);if(!n||!d||!y)continue;const c={...s,[n.value]:parseInt(s[n.value],10)+(y.value?parseInt(d.value,10):0)};l.push({id:a,layer:c}),s=c}return l};function nt(e){const i=W(F,null),t=r(()=>i?i.rootZIndex.value-100:le),o=X([]),s=O(new Map),l=O(new Map),a=O(new Map),n=O(new Map),d=O(new Map),{resizeRef:y,contentRect:c}=qe(),x=r(()=>{const m=new Map,w=e.overlaps??[];for(const v of w.filter(b=>b.includes(":"))){const[b,p]=v.split(":");if(!o.value.includes(b)||!o.value.includes(p))continue;const A=s.get(b),R=s.get(p),H=l.get(b),M=l.get(p);!A||!R||!H||!M||(m.set(p,{position:A.value,amount:parseInt(H.value,10)}),m.set(b,{position:R.value,amount:-parseInt(M.value,10)}))}return m}),g=r(()=>{const m=[...new Set([...a.values()].map(v=>v.value))].sort((v,b)=>v-b),w=[];for(const v of m){const b=o.value.filter(p=>{var A;return((A=a.get(p))==null?void 0:A.value)===v});w.push(...b)}return at(w,s,l,n)}),h=r(()=>!Array.from(d.values()).some(m=>m.value)),S=r(()=>g.value[g.value.length-1].layer),L=r(()=>({"--v-layout-left":$(S.value.left),"--v-layout-right":$(S.value.right),"--v-layout-top":$(S.value.top),"--v-layout-bottom":$(S.value.bottom),...h.value?void 0:{transition:"none"}})),V=r(()=>g.value.slice(1).map((m,w)=>{let{id:v}=m;const{layer:b}=g.value[w],p=l.get(v),A=s.get(v);return{id:v,...b,size:Number(p.value),position:A.value}})),f=m=>V.value.find(w=>w.id===m),T=ie("createLayout"),C=I(!1);Y(()=>{C.value=!0}),re(F,{register:(m,w)=>{let{id:v,order:b,position:p,layoutSize:A,elementSize:R,active:H,disableTransitions:M,absolute:Te}=w;a.set(v,b),s.set(v,p),l.set(v,A),n.set(v,H),M&&d.set(v,M);const ae=Ae(ge,T==null?void 0:T.vnode).indexOf(m);ae>-1?o.value.splice(ae,0,v):o.value.push(v);const ne=r(()=>V.value.findIndex(N=>N.id===v)),U=r(()=>t.value+g.value.length*2-ne.value*2),Ve=r(()=>{const N=p.value==="left"||p.value==="right",K=p.value==="right",Ie=p.value==="bottom",oe={[p.value]:0,zIndex:U.value,transform:`translate${N?"X":"Y"}(${(H.value?0:-110)*(K||Ie?-1:1)}%)`,position:Te.value||t.value!==le?"absolute":"fixed",...h.value?void 0:{transition:"none"}};if(!C.value)return oe;const B=V.value[ne.value];if(!B)throw new Error(`[Vuetify] Could not find layout item "${v}"`);const G=x.value.get(v);return G&&(B[G.position]+=G.amount),{...oe,height:N?`calc(100% - ${B.top}px - ${B.bottom}px)`:R.value?`${R.value}px`:void 0,left:K?void 0:`${B.left}px`,right:K?`${B.right}px`:void 0,top:p.value!=="bottom"?`${B.top}px`:void 0,bottom:p.value!=="top"?`${B.bottom}px`:void 0,width:N?R.value?`${R.value}px`:void 0:`calc(100% - ${B.left}px - ${B.right}px)`}}),Be=r(()=>({zIndex:U.value-1}));return{layoutItemStyles:Ve,layoutItemScrimStyles:Be,zIndex:U}},unregister:m=>{a.delete(m),s.delete(m),l.delete(m),n.delete(m),d.delete(m),o.value=o.value.filter(w=>w!==m)},mainRect:S,mainStyles:L,getLayoutItem:f,items:V,layoutRect:c,rootZIndex:t});const E=r(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),we=r(()=>({zIndex:i?t.value:void 0,position:i?"relative":void 0,overflow:i?"hidden":void 0}));return{layoutClasses:E,layoutStyles:we,getLayoutItem:f,items:V,layoutRect:c,layoutRef:y}}const he=P({text:String,...j(),...te()},"VToolbarTitle"),pe=k()({name:"VToolbarTitle",props:he(),setup(e,i){let{slots:t}=i;return z(()=>{const o=!!(t.default||t.text||e.text);return u(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[o&&u("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),ot=P({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function _(e,i,t){return k()({name:e,props:ot({mode:t,origin:i}),setup(o,s){let{slots:l}=s;const a={onBeforeEnter(n){o.origin&&(n.style.transformOrigin=o.origin)},onLeave(n){if(o.leaveAbsolute){const{offsetTop:d,offsetLeft:y,offsetWidth:c,offsetHeight:x}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${d}px`,n.style.left=`${y}px`,n.style.width=`${c}px`,n.style.height=`${x}px`}o.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(o.leaveAbsolute&&(n!=null&&n._transitionInitialStyles)){const{position:d,top:y,left:c,width:x,height:g}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=d||"",n.style.top=y||"",n.style.left=c||"",n.style.width=x||"",n.style.height=g||""}}};return()=>{const n=o.group?$e:ce;return de(n,{name:o.disabled?"":e,css:!o.disabled,...o.group?void 0:{mode:o.mode},...o.disabled?{}:a},l.default)}}})}function be(e,i){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return k()({name:e,props:{mode:{type:String,default:t},disabled:Boolean},setup(o,s){let{slots:l}=s;return()=>de(ce,{name:o.disabled?"":e,css:!o.disabled,...o.disabled?{}:i},l.default)}})}function xe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",o=ke(`offset-${t}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[t]:a.style[t]}},onEnter(a){const n=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const d=`${a[o]}px`;a.style[t]="0",a.offsetHeight,a.style.transition=n.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[t]=d})},onAfterEnter:l,onEnterCancelled:l,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[t]:a.style[t]},a.style.overflow="hidden",a.style[t]=`${a[o]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[t]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(a){e&&a._parent&&a._parent.classList.remove(e),l(a)}function l(a){const n=a._initialStyle[t];a.style.overflow=a._initialStyle.overflow,n!=null&&(a.style[t]=n),delete a._initialStyle}}_("fab-transition","center center","out-in");_("dialog-bottom-transition");_("dialog-top-transition");_("fade-transition");_("scale-transition");_("scroll-x-transition");_("scroll-x-reverse-transition");_("scroll-y-transition");_("scroll-y-reverse-transition");_("slide-x-transition");_("slide-x-reverse-transition");_("slide-y-transition");_("slide-y-reverse-transition");const lt=be("expand-transition",xe());be("expand-x-transition",xe("",!0));const st=[null,"prominent","default","comfortable","compact"],Se=P({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>st.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Fe(),...j(),...je(),...Ue(),...te({tag:"header"}),...ve()},"VToolbar"),se=k()({name:"VToolbar",props:Se(),setup(e,i){var h;let{slots:t}=i;const{backgroundColorClasses:o,backgroundColorStyles:s}=Ke(J(e,"color")),{borderClasses:l}=Ge(e),{elevationClasses:a}=Ze(e),{roundedClasses:n}=Je(e),{themeClasses:d}=fe(e),{rtlClasses:y}=me(),c=I(!!(e.extended||(h=t.extension)!=null&&h.call(t))),x=r(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),g=r(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ee({VBtn:{variant:"text"}}),z(()=>{var f;const S=!!(e.title||t.title),L=!!(t.image||e.image),V=(f=t.extension)==null?void 0:f.call(t);return c.value=!!(e.extended||V),u(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,l.value,a.value,n.value,d.value,y.value,e.class],style:[s.value,e.style]},{default:()=>[L&&u("div",{key:"image",class:"v-toolbar__image"},[t.image?u(Z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):u(We,{key:"image-img",cover:!0,src:e.image},null)]),u(Z,{defaults:{VTabs:{height:$(x.value)}}},{default:()=>{var T,C,E;return[u("div",{class:"v-toolbar__content",style:{height:$(x.value)}},[t.prepend&&u("div",{class:"v-toolbar__prepend"},[(T=t.prepend)==null?void 0:T.call(t)]),S&&u(pe,{key:"title",text:e.title},{text:t.title}),(C=t.default)==null?void 0:C.call(t),t.append&&u("div",{class:"v-toolbar__append"},[(E=t.append)==null?void 0:E.call(t)])])]}}),u(Z,{defaults:{VTabs:{height:$(g.value)}}},{default:()=>[u(lt,null,{default:()=>[c.value&&u("div",{class:"v-toolbar__extension",style:{height:$(g.value)}},[V])]})]})]})}),{contentHeight:x,extensionHeight:g}}}),it=P({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function rt(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=i;let o=0;const s=X(null),l=I(0),a=I(0),n=I(0),d=I(!1),y=I(!1),c=r(()=>Number(e.scrollThreshold)),x=r(()=>Re((c.value-l.value)/c.value||0)),g=()=>{const h=s.value;!h||t&&!t.value||(o=l.value,l.value="window"in h?h.pageYOffset:h.scrollTop,y.value=l.value<o,n.value=Math.abs(l.value-c.value))};return D(y,()=>{a.value=a.value||l.value}),D(d,()=>{a.value=0}),Y(()=>{D(()=>e.scrollTarget,h=>{var L;const S=h?document.querySelector(h):window;S&&S!==s.value&&((L=s.value)==null||L.removeEventListener("scroll",g),s.value=S,s.value.addEventListener("scroll",g,{passive:!0}))},{immediate:!0})}),ue(()=>{var h;(h=s.value)==null||h.removeEventListener("scroll",g)}),t&&D(t,g,{immediate:!0}),{scrollThreshold:c,currentScroll:l,currentThreshold:n,isScrollActive:d,scrollRatio:x,isScrollingUp:y,savedScroll:a}}function _e(){const e=I(!1);return Y(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:r(()=>e.value?void 0:{transition:"none !important"}),isBooted:ze(e)}}const ut=P({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Se(),...Qe(),...it(),height:{type:[Number,String],default:64}},"VAppBar"),ct=k()({name:"VAppBar",props:ut(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const o=X(),s=He(e,"modelValue"),l=r(()=>{var T;const f=new Set(((T=e.scrollBehavior)==null?void 0:T.split(" "))??[]);return{hide:f.has("hide"),inverted:f.has("inverted"),collapse:f.has("collapse"),elevate:f.has("elevate"),fadeImage:f.has("fade-image")}}),a=r(()=>{const f=l.value;return f.hide||f.inverted||f.collapse||f.elevate||f.fadeImage||!s.value}),{currentScroll:n,scrollThreshold:d,isScrollingUp:y,scrollRatio:c}=rt(e,{canScroll:a}),x=r(()=>e.collapse||l.value.collapse&&(l.value.inverted?c.value>0:c.value===0)),g=r(()=>e.flat||l.value.elevate&&(l.value.inverted?n.value>0:n.value===0)),h=r(()=>l.value.fadeImage?l.value.inverted?1-c.value:c.value:void 0),S=r(()=>{var C,E;if(l.value.hide&&l.value.inverted)return 0;const f=((C=o.value)==null?void 0:C.contentHeight)??0,T=((E=o.value)==null?void 0:E.extensionHeight)??0;return f+T});Me(r(()=>!!e.scrollBehavior),()=>{Ne(()=>{l.value.hide?l.value.inverted?s.value=n.value>d.value:s.value=y.value||n.value<d.value:s.value=!0})});const{ssrBootStyles:L}=_e(),{layoutItemStyles:V}=tt({id:e.name,order:r(()=>parseInt(e.order,10)),position:J(e,"location"),layoutSize:S,elementSize:I(void 0),active:s,absolute:J(e,"absolute")});return z(()=>{const f=se.filterProps(e);return u(se,ye({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...V.value,"--v-toolbar-image-opacity":h.value,height:void 0,...L.value},e.style]},f,{collapse:x.value,flat:g.value}),t)}),{}}}),dt=k()({name:"VAppBarTitle",props:he(),setup(e,i){let{slots:t}=i;return z(()=>u(pe,ye(e,{class:"v-app-bar-title"}),t)),{}}}),vt={__name:"AppBar",setup(e){return(i,t)=>(Q(),ee(ct,{flat:""},{default:q(()=>[u(dt,null,{default:q(()=>[u(Xe,{icon:"mdi-circle-slice-4"}),Oe(" Base Preset ")]),_:1})]),_:1}))}};const ft=P({scrollable:Boolean,...j(),...te({tag:"main"})},"VMain"),mt=k()({name:"VMain",props:ft(),setup(e,i){let{slots:t}=i;const{mainStyles:o}=et(),{ssrBootStyles:s}=_e();return z(()=>u(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,s.value,e.style]},{default:()=>{var l,a;return[e.scrollable?u("div",{class:"v-main__scroller"},[(l=t.default)==null?void 0:l.call(t)]):(a=t.default)==null?void 0:a.call(t)]}})),{}}}),yt={__name:"View",setup(e){return(i,t)=>{const o=De("router-view");return Q(),ee(mt,null,{default:q(()=>[u(o)]),_:1})}}};const gt=P({...j(),...Ye({fullHeight:!0}),...ve()},"VApp"),ht=k()({name:"VApp",props:gt(),setup(e,i){let{slots:t}=i;const o=fe(e),{layoutClasses:s,getLayoutItem:l,items:a,layoutRef:n}=nt(e),{rtlClasses:d}=me();return z(()=>{var y;return u("div",{ref:n,class:["v-application",o.themeClasses.value,s.value,d.value,e.class],style:[e.style]},[u("div",{class:"v-application__wrap"},[(y=t.default)==null?void 0:y.call(t)])])}),{getLayoutItem:l,items:a,theme:o}}}),St={__name:"Default",setup(e){return(i,t)=>(Q(),ee(ht,null,{default:q(()=>[u(vt),u(yt)]),_:1}))}};export{St as default};