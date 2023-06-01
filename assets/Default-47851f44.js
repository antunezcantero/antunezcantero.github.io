import{u as we,m as N,a as Ee,b as ae,c as E,d as Fe,e as oe,f as ne,g as Oe,h as Ke,i as R,M as Xe,V as U,j as Ye,k as Ce,l as ge,n as Ve,o as ye,p as Z,q as ue,r as qe,s as H,t as pe,v as Ue,w as Ze,x as We,y as ke,z as Ge,A as Je,B as Qe}from"./VCard-0164ace5.js";import{p as I,i as _e,c as u,r as ce,a as Y,g as Be,s as W,o as Ie,b as Te,d as $,f as et,e as tt,h as at,j as ot,k as nt,I as st,m as G,l as j,t as L,u as lt,n as it,q as rt,v as a,w as ut,x as ct,y as de,z as se,A as $e,B as dt,C as x,D as P,E as g,F as Q,G as ve,H as me,J as vt,K as D,L as fe,M as Pe,N as B,O as q}from"./index-e1b17bb3.js";import{_ as mt,V as ze,a as ft}from"./VHover-b329e778.js";const ee=Symbol.for("vuetify:layout"),Le=Symbol.for("vuetify:layout-item"),Se=1e3,gt=I({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ne=I({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function yt(){const e=_e(ee);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Re(e){const o=_e(ee);if(!o)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${tt()}`,s=Be("useLayoutItem");Te(Le,{id:t});const n=W(!1);at(()=>n.value=!0),ot(()=>n.value=!1);const{layoutItemStyles:i,layoutItemScrimStyles:r}=o.register(s,{...e,active:u(()=>n.value?!1:e.active.value),id:t});return nt(()=>o.unregister(t)),{layoutItemStyles:i,layoutRect:o.layoutRect,layoutItemScrimStyles:r}}const _t=(e,o,t,s)=>{let n={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...n}}];for(const r of e){const v=o.get(r),c=t.get(r),f=s.get(r);if(!v||!c||!f)continue;const l={...n,[v.value]:parseInt(n[v.value],10)+(f.value?parseInt(c.value,10):0)};i.push({id:r,layer:l}),n=l}return i};function ht(e){const o=_e(ee,null),t=u(()=>o?o.rootZIndex.value-100:Se),s=ce([]),n=Y(new Map),i=Y(new Map),r=Y(new Map),v=Y(new Map),c=Y(new Map),{resizeRef:f,contentRect:l}=we(),S=u(()=>{const m=new Map,b=e.overlaps??[];for(const d of b.filter(_=>_.includes(":"))){const[_,y]=d.split(":");if(!s.value.includes(_)||!s.value.includes(y))continue;const k=n.get(_),z=n.get(y),O=i.get(_),K=i.get(y);!k||!z||!O||!K||(m.set(y,{position:k.value,amount:parseInt(O.value,10)}),m.set(_,{position:z.value,amount:-parseInt(K.value,10)}))}return m}),h=u(()=>{const m=[...new Set([...r.values()].map(d=>d.value))].sort((d,_)=>d-_),b=[];for(const d of m){const _=s.value.filter(y=>{var k;return((k=r.get(y))==null?void 0:k.value)===d});b.push(..._)}return _t(b,n,i,v)}),C=u(()=>!Array.from(c.values()).some(m=>m.value)),V=u(()=>h.value[h.value.length-1].layer),A=u(()=>({"--v-layout-left":$(V.value.left),"--v-layout-right":$(V.value.right),"--v-layout-top":$(V.value.top),"--v-layout-bottom":$(V.value.bottom),...C.value?void 0:{transition:"none"}})),w=u(()=>h.value.slice(1).map((m,b)=>{let{id:d}=m;const{layer:_}=h.value[b],y=i.get(d),k=n.get(d);return{id:d,..._,size:Number(y.value),position:k.value}})),T=m=>w.value.find(b=>b.id===m),M=Be("createLayout"),F=W(!1);Ie(()=>{F.value=!0}),Te(ee,{register:(m,b)=>{let{id:d,order:_,position:y,layoutSize:k,elementSize:z,active:O,disableTransitions:K,absolute:Ae}=b;r.set(d,_),n.set(d,y),i.set(d,k),v.set(d,O),K&&c.set(d,K);const he=et(Le,M==null?void 0:M.vnode).indexOf(m);he>-1?s.value.splice(he,0,d):s.value.push(d);const be=u(()=>w.value.findIndex(X=>X.id===d)),le=u(()=>t.value+h.value.length*2-be.value*2),Me=u(()=>{const X=y.value==="left"||y.value==="right",ie=y.value==="right",De=y.value==="bottom",xe={[y.value]:0,zIndex:le.value,transform:`translate${X?"X":"Y"}(${(O.value?0:-110)*(ie||De?-1:1)}%)`,position:Ae.value||t.value!==Se?"absolute":"fixed",...C.value?void 0:{transition:"none"}};if(!F.value)return xe;const p=w.value[be.value];if(!p)throw new Error(`[Vuetify] Could not find layout item "${d}"`);const re=S.value.get(d);return re&&(p[re.position]+=re.amount),{...xe,height:X?`calc(100% - ${p.top}px - ${p.bottom}px)`:z.value?`${z.value}px`:void 0,left:ie?void 0:`${p.left}px`,right:ie?`${p.right}px`:void 0,top:y.value!=="bottom"?`${p.top}px`:void 0,bottom:y.value!=="top"?`${p.bottom}px`:void 0,width:X?z.value?`${z.value}px`:void 0:`calc(100% - ${p.left}px - ${p.right}px)`}}),He=u(()=>({zIndex:le.value-1}));return{layoutItemStyles:Me,layoutItemScrimStyles:He,zIndex:le}},unregister:m=>{r.delete(m),n.delete(m),i.delete(m),v.delete(m),c.delete(m),s.value=s.value.filter(b=>b!==m)},mainRect:V,mainStyles:A,getLayoutItem:T,items:w,layoutRect:l,rootZIndex:t});const J=u(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),je=u(()=>({zIndex:t.value,position:o?"relative":void 0,overflow:o?"hidden":void 0}));return{layoutClasses:J,layoutStyles:je,getLayoutItem:T,items:w,layoutRect:l,layoutRef:f}}const bt=I({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:st,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...N(),...Ee({location:"top end"}),...ae(),...E(),...G(),...Fe({transition:"scale-rotate-transition"})},"v-badge"),xt=j()({name:"VBadge",inheritAttrs:!1,props:bt(),setup(e,o){const{backgroundColorClasses:t,backgroundColorStyles:s}=oe(L(e,"color")),{roundedClasses:n}=ne(e),{t:i}=lt(),{textColorClasses:r,textColorStyles:v}=Oe(L(e,"textColor")),{themeClasses:c}=it(),{locationStyles:f}=Ke(e,!0,l=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(l)?+(e.offsetY??0):["left","right"].includes(l)?+(e.offsetX??0):0));return R(()=>{const l=Number(e.content),S=!e.max||isNaN(l)?e.content:l<=+e.max?l:`${e.max}+`,[h,C]=rt(o.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return a(e.tag,de({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},C,{style:e.style}),{default:()=>{var V,A;return[a("div",{class:"v-badge__wrapper"},[(A=(V=o.slots).default)==null?void 0:A.call(V),a(Xe,{transition:e.transition},{default:()=>{var w,T;return[ut(a("span",de({class:["v-badge__badge",c.value,t.value,n.value,r.value],style:[s.value,v.value,e.inline?{}:f.value],"aria-atomic":"true","aria-label":i(e.label,l),"aria-live":"polite",role:"status"},h),[e.dot?void 0:o.slots.badge?(T=(w=o.slots).badge)==null?void 0:T.call(w):e.icon?a(U,{icon:e.icon},null):S]),[[ct,e.modelValue]])]}})])]}})}),{}}}),te=Ye("flex-grow-1","div","VSpacer");const St=I({text:String,...N(),...E()},"v-toolbar-title"),wt=j()({name:"VToolbarTitle",props:St(),setup(e,o){let{slots:t}=o;return R(()=>{const s=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var n;return[s&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]}})}),{}}}),Ct=[null,"prominent","default","comfortable","compact"],Vt=I({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ct.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ce(),...N(),...ge(),...ae(),...E({tag:"header"}),...G()},"v-toolbar"),pt=j()({name:"VToolbar",props:Vt(),setup(e,o){var C;let{slots:t}=o;const{backgroundColorClasses:s,backgroundColorStyles:n}=oe(L(e,"color")),{borderClasses:i}=Ve(e),{elevationClasses:r}=ye(e),{roundedClasses:v}=ne(e),{themeClasses:c}=se(e),{rtlClasses:f}=$e(),l=W(!!(e.extended||(C=t.extension)!=null&&C.call(t))),S=u(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=u(()=>l.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return dt({VBtn:{variant:"text"}}),R(()=>{var T;const V=!!(e.title||t.title),A=!!(t.image||e.image),w=(T=t.extension)==null?void 0:T.call(t);return l.value=!!(e.extended||w),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,i.value,r.value,v.value,c.value,f.value,e.class],style:[n.value,e.style]},{default:()=>[A&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(ue,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(Z,{key:"image-img",cover:!0,src:e.image},null)]),a(ue,{defaults:{VTabs:{height:$(S.value)}}},{default:()=>{var M,F,J;return[a("div",{class:"v-toolbar__content",style:{height:$(S.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(M=t.prepend)==null?void 0:M.call(t)]),V&&a(wt,{key:"title",text:e.title},{text:t.title}),(F=t.default)==null?void 0:F.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(J=t.append)==null?void 0:J.call(t)])])]}}),a(ue,{defaults:{VTabs:{height:$(h.value)}}},{default:()=>[a(qe,null,{default:()=>[l.value&&a("div",{class:"v-toolbar__extension",style:{height:$(h.value)}},[w])]})]})]})}),{contentHeight:S,extensionHeight:h}}}),kt={__name:"ToolBar",setup(e){const o={items:["Home","Shop Features","Clothes","Pages","Shortcodes","Post Types"]};return(t,s)=>(x(),P(pt,{flat:"",color:"transparent"},{default:g(()=>[a(te),(x(!0),Q(ve,null,me(o.items,n=>(x(),P(H,{key:n,variant:"plain",color:"blue-darken-4",class:vt(t.selectedClass),onClick:t.toggle},{default:g(()=>[D(fe(n),1)]),_:2},1032,["class","onClick"]))),128)),a(H,{icon:"mdi-heart-outline"}),a(H,{icon:""},{default:g(()=>[a(xt,{icon:"",content:"0",color:"red-lighten-2"},{default:g(()=>[a(U,null,{default:g(()=>[D("mdi-cart-outline")]),_:1})]),_:1})]),_:1}),a(H,{icon:"mdi-magnify"}),a(te)]),_:1}))}};const Bt=I({scrollable:Boolean,...N(),...E({tag:"main"})},"v-main"),It=j()({name:"VMain",props:Bt(),setup(e,o){let{slots:t}=o;const{mainStyles:s}=yt(),{ssrBootStyles:n}=pe();return R(()=>a(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[s.value,n.value,e.style]},{default:()=>{var i,r;return[e.scrollable?a("div",{class:"v-main__scroller"},[(i=t.default)==null?void 0:i.call(t)]):(r=t.default)==null?void 0:r.call(t)]}})),{}}}),Tt={__name:"View",setup(e){return(o,t)=>{const s=Pe("router-view");return x(),P(It,null,{default:g(()=>[a(s)]),_:1})}}};const $t=I({color:String,height:[Number,String],window:Boolean,...N(),...ge(),...Ne(),...ae(),...E(),...G()},"v-system-bar"),Pt=j()({name:"VSystemBar",props:$t(),setup(e,o){let{slots:t}=o;const{themeClasses:s}=se(e),{backgroundColorClasses:n,backgroundColorStyles:i}=oe(L(e,"color")),{elevationClasses:r}=ye(e),{roundedClasses:v}=ne(e),{ssrBootStyles:c}=pe(),f=u(()=>e.height??(e.window?32:24)),{layoutItemStyles:l}=Re({id:e.name,order:u(()=>parseInt(e.order,10)),position:W("top"),layoutSize:f,elementSize:f,active:u(()=>!0),absolute:L(e,"absolute")});return R(()=>a(e.tag,{class:["v-system-bar",{"v-system-bar--window":e.window},s.value,n.value,r.value,v.value,e.class],style:[i.value,l.value,c.value,e.style]},t)),{}}}),zt={},Lt=B("span",{class:"text-center justify-center"}," 20% off all kidswear + free shipping when you spend $60 or more ",-1);function Nt(e,o){return x(),P(Pt,{window:"",color:"red-lighten-2",height:"25"},{default:g(()=>[a(te),Lt,a(te)]),_:1})}const Rt=mt(zt,[["render",Nt]]),jt={__name:"Logo",setup(e){return(o,t)=>(x(),P(ze,{class:"pa-1"},{default:g(()=>[a(Ue,{class:"justify-center"},{default:g(()=>[a(Ze,{cols:"12",class:"justify-center"},{default:g(()=>[a(Z,{height:"100",src:q(We)},null,8,["src"])]),_:1})]),_:1})]),_:1}))}};const At=I({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Ce(),...N(),...ge(),...Ne(),...ae(),...E({tag:"footer"}),...G()},"v-footer"),Mt=j()({name:"VFooter",props:At(),setup(e,o){let{slots:t}=o;const{themeClasses:s}=se(e),{backgroundColorClasses:n,backgroundColorStyles:i}=oe(L(e,"color")),{borderClasses:r}=Ve(e),{elevationClasses:v}=ye(e),{roundedClasses:c}=ne(e),f=W(32),{resizeRef:l}=we(C=>{C.length&&(f.value=C[0].target.clientHeight)}),S=u(()=>e.height==="auto"?f.value:parseInt(e.height,10)),{layoutItemStyles:h}=Re({id:e.name,order:u(()=>parseInt(e.order,10)),position:u(()=>"bottom"),layoutSize:S,elementSize:u(()=>e.height==="auto"?void 0:S.value),active:u(()=>e.app),absolute:L(e,"absolute")});return R(()=>a(e.tag,{ref:l,class:["v-footer",s.value,n.value,r.value,v.value,c.value,e.class],style:[i.value,e.app?h.value:void 0,e.style]},t)),{}}}),Ht={class:"d-flex justify-center mb-6"},Dt={class:"py-12 py-2 bg-indigo text-center w-100"},Et={class:"ma-3 d-flex justify-center"},Ft={class:"pa-2 justify-center"},Ot={class:"pt-3 justify-center"},Kt=B("span",{class:"text-caption font-weight-bold"},"Privacy Policy",-1),Xt={class:"text-caption font-weight-thin"},Yt={class:"pt-1 justify-center font-weight-thin text-caption"},qt={__name:"Footer",setup(e){const o=ke(),t=new Date,s=ce(["recursos/main/87339849_530805007551424_292323017375800029_nlow.jpg","recursos/main/87413583_2660130777540405_5722961474466513534_nlow.jpg","recursos/main/85069033_185901059177965_6767010623440980864_nlow.jpg","recursos/main/84981049_620107085435507_4260875787090681190_nlow.jpg","recursos/main/85051426_2060664737412512_8458893884651247910_nlow.jpg"]),n=ce(["shop","sale","girls","boys","lookbook","contacts"]);return(i,r)=>{const v=Pe("center");return x(),P(Mt,{fixed:"",class:"my-15 text-center d-flex flex-column"},{default:g(()=>[a(v,{class:"my-5 text-h5 font-weight-black text-uppercase text-primary"},{default:g(()=>[D(" instagram @kidsrus "),a(Z,{"max-width":"50",src:q(Ge)},null,8,["src"])]),_:1}),B("div",Ht,[(x(!0),Q(ve,null,me(s.value,c=>(x(),Q("div",{key:c,class:"d-flex child-flex pa-1",cols:"2"},[a(ft,null,{default:g(({isHovering:f,props:l})=>[a(Je,de({variant:"solo",rounded:"0",elevation:f?12:2,class:{"on-hover":f}},l),{default:g(()=>[a(Z,{src:q(o).getImage(c),"aspect-ratio":"1",cover:"",class:"bg-grey-lighten-4"},null,8,["src"])]),_:2},1040,["elevation","class"])]),_:2},1024)]))),128))]),B("div",Dt,[a(v,null,{default:g(()=>[a(Z,{width:"100",src:q(Qe)},null,8,["src"])]),_:1}),B("div",Et,[(x(!0),Q(ve,null,me(n.value,c=>(x(),P(H,{variant:"text",key:c},{default:g(()=>[D(fe(c),1)]),_:2},1024))),128))]),B("div",Ft,[a(U,{class:"mx-2",icon:"mdi-facebook"}),a(U,{class:"mx-2",icon:"mdi-instagram"}),a(U,{class:"mx-2",icon:"mdi-twitter"})]),B("div",Ot,[Kt,B("span",Xt," / We use data encryption to protect your personal information. @"+fe(q(t).getFullYear())+" All rights reserved",1)])]),B("div",Yt,[D(" This website uses cookies to improve your browsing experience and personalize the content you see. "),a(H,{size:"x-small",color:"black",rounded:"0",dark:""},{default:g(()=>[D("Accept")]),_:1})])]),_:1})}}};const Ut=I({...N(),...gt({fullHeight:!0}),...G()},"v-app"),Zt=j()({name:"VApp",props:Ut(),setup(e,o){let{slots:t}=o;const s=se(e),{layoutClasses:n,layoutStyles:i,getLayoutItem:r,items:v,layoutRef:c}=ht(e),{rtlClasses:f}=$e();return R(()=>{var l;return a("div",{ref:c,class:["v-application",s.themeClasses.value,n.value,f.value,e.class],style:[i.value,e.style]},[a("div",{class:"v-application__wrap"},[(l=t.default)==null?void 0:l.call(t)])])}),{getLayoutItem:r,items:v,theme:s}}}),ea={__name:"Default",setup(e){const o=ke();return Ie(()=>{o.categories=[],o.getCategories()}),(t,s)=>(x(),P(Zt,null,{default:g(()=>[a(ze,{class:"px-5"},{default:g(()=>[a(Rt),a(jt),a(kt),a(Tt),a(qt)]),_:1})]),_:1}))}};export{ea as default};
