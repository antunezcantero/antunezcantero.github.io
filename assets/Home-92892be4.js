import{y as X,v as F,w as $,p as N,z as pe,s as E,A as q,x as j,B as Oe,m as Z,g as De,i as ee,c as re,t as gt,q as he,M as yt,r as _e,j as Fe,k as Ne,C as Ge,D as Re,l as Ee,b as je,E as pt,F as He,R as ht,G as _t,n as Ke,H as bt,I as Ue,J as ze,o as We,f as qe,K as kt,L as be,V as ne,e as St}from"./VCard-37f377d4.js";import{r as P,C as y,D as C,E as c,v as l,N as H,K as x,F as V,G as I,H as ie,O as J,y as le,L as M,P as B,p as O,m as Ce,l as K,z as xe,t as w,c as p,d as Be,i as oe,s as Y,b as ce,Q as U,R as $e,k as Je,g as Ct,e as xt,S as wt,I as R,w as Ye,x as Vt,T as Te,U as It,V as At,W as Pt,B as Lt,X as Bt,Y as W,q as $t,M as Qe,Z as Tt,o as Mt,_ as ye,$ as Ot}from"./index-f2cebfde.js";import{V as Dt,_ as Ft,a as Nt}from"./VHover-40821fdd.js";import{V as Xe,a as Gt}from"./VRating-bc2c078b.js";const Rt={class:"ml-5 mb-10"},Et=H("p",{class:"text-h3 font-weight-bold mt-4 text-uppercase"}," jumpsuits ",-1),jt=H("p",{class:"text-subtitle-2 text-white"}," Comfortable clothes for your little babies. ",-1),Ht={class:"text-center text-caption font-weight-bold text-primary",style:{"font-family":"'Comic Sans MS', sans-serif"}},Kt={__name:"Categories",setup(e){P();const s=X(),t=a=>{s.getCategoryItems(a)};return(a,r)=>(y(),C(Dt,{class:"pa-1"},{default:c(()=>[l(F,null,{default:c(()=>[l($,{cols:"12",md:"8"},{default:c(()=>[l(N,{class:"align-end",src:"~/../src/assets/recursos/main/slider-1.jpg",cober:""},{default:c(()=>[H("div",Rt,[l(pe,{class:"text-h6 text-white d-flex flex-column"},{default:c(()=>[Et,jt,l(E,{color:"white",class:"text-primary",width:"110",rounded:"0"},{default:c(()=>[x(" discover ")]),_:1})]),_:1})])]),_:1},8,["src"])]),_:1}),l($,{cols:"12",md:"4"},{default:c(()=>[l(N,{src:"~/../src/assets/recursos/main/girls-power.jpg",cober:""},null,8,["src"]),l(pe,{class:"text-center text-h5 font-weight-bold text-uppercase text-primary"},{default:c(()=>[x(" Girls Power ")]),_:1}),l(q,{class:"text-center font-weight-bold text-disabled"},{default:c(()=>[x(" For a colorfull summer ")]),_:1})]),_:1})]),_:1}),l(F,null,{default:c(()=>[l($,{cols:"12"},{default:c(()=>[l(j,null,{default:c(()=>[l(Oe,null,{default:c(()=>[l(F,null,{default:c(()=>[(y(!0),V(I,null,ie(J(s).categories,(n,i)=>(y(),V(I,{key:i},[n.imageTitle?(y(),C($,{key:0,cols:"3"},{default:c(()=>[l(j,le({class:"mx-auto pa-2","max-width":"600",variant:"solo"},a.props,{style:{cursor:"pointer"},onClick:o=>t(i)}),{default:c(()=>[l(N,{src:`@/../src/assets/${n.image}`},null,8,["src"]),l(q,{class:"pt-5 text-center"},{default:c(()=>[H("span",Ht,M(n.imageTitle),1)]),_:2},1024)]),_:2},1040,["onClick"])]),_:2},1024)):B("",!0)],64))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};const Ut=O({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...Z(),...Ce()},"v-divider"),G=K()({name:"VDivider",props:Ut(),setup(e,s){let{attrs:t}=s;const{themeClasses:a}=xe(e),{textColorClasses:r,textColorStyles:n}=De(w(e,"color")),i=p(()=>{const o={};return e.length&&(o[e.vertical?"maxHeight":"maxWidth"]=Be(e.length)),e.thickness&&(o[e.vertical?"borderRightWidth":"borderTopWidth"]=Be(e.thickness)),o});return ee(()=>l("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,r.value,e.class],style:[i.value,n.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),zt={__name:"SearchBar",setup(e){return(s,t)=>(y(),V(I,null,[l(G,{style:{border:"dashed 1px black"}}),l(Xe,{label:"Search products...","background-color":"grey darken-3",variant:"text","hide-details":"",density:"compact",class:"pa-0 ma-0"},{"append-inner":c(()=>[l(E,{icon:"mdi-magnify",color:"red-lighten-2",class:"ma-0",rounded:"0",style:{"max-width":"50px"}})]),_:1}),l(G,{style:{border:"dashed 1px black"}})],64))}};const ke=Symbol.for("vuetify:list");function Ze(){const e=oe(ke,{hasPrepend:Y(!1),updateHasPrepend:()=>null}),s={hasPrepend:Y(!1),updateHasPrepend:t=>{t&&(s.hasPrepend.value=t)}};return ce(ke,s),e}function et(){return oe(ke,null)}const Wt={open:e=>{let{id:s,value:t,opened:a,parents:r}=e;if(t){const n=new Set;n.add(s);let i=r.get(s);for(;i!=null;)n.add(i),i=r.get(i);return n}else return a.delete(s),a},select:()=>null},tt={open:e=>{let{id:s,value:t,opened:a,parents:r}=e;if(t){let n=r.get(s);for(a.add(s);n!=null&&n!==s;)a.add(n),n=r.get(n);return a}else a.delete(s);return a},select:()=>null},qt={open:tt.open,select:e=>{let{id:s,value:t,opened:a,parents:r}=e;if(!t)return a;const n=[];let i=r.get(s);for(;i!=null;)n.push(i),i=r.get(i);return new Set(n)}},we=e=>{const s={select:t=>{let{id:a,value:r,selected:n}=t;if(a=U(a),e&&!r){const i=Array.from(n.entries()).reduce((o,h)=>{let[g,v]=h;return v==="on"?[...o,g]:o},[]);if(i.length===1&&i[0]===a)return n}return n.set(a,r?"on":"off"),n},in:(t,a,r)=>{let n=new Map;for(const i of t||[])n=s.select({id:i,value:!0,selected:new Map(n),children:a,parents:r});return n},out:t=>{const a=[];for(const[r,n]of t.entries())n==="on"&&a.push(r);return a}};return s},at=e=>{const s=we(e);return{select:a=>{let{selected:r,id:n,...i}=a;n=U(n);const o=r.has(n)?new Map([[n,r.get(n)]]):new Map;return s.select({...i,id:n,selected:o})},in:(a,r,n)=>{let i=new Map;return a!=null&&a.length&&(i=s.in(a.slice(0,1),r,n)),i},out:(a,r,n)=>s.out(a,r,n)}},Jt=e=>{const s=we(e);return{select:a=>{let{id:r,selected:n,children:i,...o}=a;return r=U(r),i.has(r)?n:s.select({id:r,selected:n,children:i,...o})},in:s.in,out:s.out}},Yt=e=>{const s=at(e);return{select:a=>{let{id:r,selected:n,children:i,...o}=a;return r=U(r),i.has(r)?n:s.select({id:r,selected:n,children:i,...o})},in:s.in,out:s.out}},Qt=e=>{const s={select:t=>{let{id:a,value:r,selected:n,children:i,parents:o}=t;a=U(a);const h=new Map(n),g=[a];for(;g.length;){const u=g.shift();n.set(u,r?"on":"off"),i.has(u)&&g.push(...i.get(u))}let v=o.get(a);for(;v;){const u=i.get(v),d=u.every(m=>n.get(m)==="on"),f=u.every(m=>!n.has(m)||n.get(m)==="off");n.set(v,d?"on":f?"off":"indeterminate"),v=o.get(v)}return e&&!r&&Array.from(n.entries()).reduce((d,f)=>{let[m,_]=f;return _==="on"?[...d,m]:d},[]).length===0?h:n},in:(t,a,r)=>{let n=new Map;for(const i of t||[])n=s.select({id:i,value:!0,selected:new Map(n),children:a,parents:r});return n},out:(t,a)=>{const r=[];for(const[n,i]of t.entries())i==="on"&&!a.has(n)&&r.push(n);return r}};return s},Q=Symbol.for("vuetify:nested"),nt={id:Y(),root:{register:()=>null,unregister:()=>null,parents:P(new Map),children:P(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:P(new Set),selected:P(new Map),selectedValues:P([])}},Xt=O({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),Zt=e=>{let s=!1;const t=P(new Map),a=P(new Map),r=$e(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),n=p(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Yt(e.mandatory);case"leaf":return Jt(e.mandatory);case"independent":return we(e.mandatory);case"single-independent":return at(e.mandatory);case"classic":default:return Qt(e.mandatory)}}),i=p(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return qt;case"single":return Wt;case"multiple":default:return tt}}),o=$e(e,"selected",e.selected,u=>n.value.in(u,t.value,a.value),u=>n.value.out(u,t.value,a.value));Je(()=>{s=!0});function h(u){const d=[];let f=u;for(;f!=null;)d.unshift(f),f=a.value.get(f);return d}const g=Ct("nested"),v={id:Y(),root:{opened:r,selected:o,selectedValues:p(()=>{const u=[];for(const[d,f]of o.value.entries())f==="on"&&u.push(d);return u}),register:(u,d,f)=>{d&&u!==d&&a.value.set(u,d),f&&t.value.set(u,[]),d!=null&&t.value.set(d,[...t.value.get(d)||[],u])},unregister:u=>{if(s)return;t.value.delete(u);const d=a.value.get(u);if(d){const f=t.value.get(d)??[];t.value.set(d,f.filter(m=>m!==u))}a.value.delete(u),r.value.delete(u)},open:(u,d,f)=>{g.emit("click:open",{id:u,value:d,path:h(u),event:f});const m=i.value.open({id:u,value:d,opened:new Set(r.value),children:t.value,parents:a.value,event:f});m&&(r.value=m)},openOnSelect:(u,d,f)=>{const m=i.value.select({id:u,value:d,selected:new Map(o.value),opened:new Set(r.value),children:t.value,parents:a.value,event:f});m&&(r.value=m)},select:(u,d,f)=>{g.emit("click:select",{id:u,value:d,path:h(u),event:f});const m=n.value.select({id:u,value:d,selected:new Map(o.value),children:t.value,parents:a.value,event:f});m&&(o.value=m),v.root.openOnSelect(u,d,f)},children:t,parents:a}};return ce(Q,v),v.root},lt=(e,s)=>{const t=oe(Q,nt),a=Symbol(xt()),r=p(()=>e.value??a),n={...t,id:r,open:(i,o)=>t.root.open(r.value,i,o),openOnSelect:(i,o)=>t.root.openOnSelect(r.value,i,o),isOpen:p(()=>t.root.opened.value.has(r.value)),parent:p(()=>t.root.parents.value.get(r.value)),select:(i,o)=>t.root.select(r.value,i,o),isSelected:p(()=>t.root.selected.value.get(U(r.value))==="on"),isIndeterminate:p(()=>t.root.selected.value.get(r.value)==="indeterminate"),isLeaf:p(()=>!t.root.children.value.get(r.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(r.value,t.id.value,s),Je(()=>{!t.isGroupActivator&&t.root.unregister(r.value)}),s&&ce(Q,n),n},ea=()=>{const e=oe(Q,nt);ce(Q,{...e,isGroupActivator:!0})},ta=wt({name:"VListGroupActivator",setup(e,s){let{slots:t}=s;return ea(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),aa=O({activeColor:String,baseColor:String,color:String,collapseIcon:{type:R,default:"$collapse"},expandIcon:{type:R,default:"$expand"},prependIcon:R,appendIcon:R,fluid:Boolean,subgroup:Boolean,title:String,value:null,...Z(),...re()},"v-list-group"),Me=K()({name:"VListGroup",props:aa(),setup(e,s){let{slots:t}=s;const{isOpen:a,open:r,id:n}=lt(w(e,"value"),!0),i=p(()=>`v-list-group--id-${String(n.value)}`),o=et(),{isBooted:h}=gt();function g(f){r(!a.value,f)}const v=p(()=>({onClick:g,class:"v-list-group__header",id:i.value})),u=p(()=>a.value?e.collapseIcon:e.expandIcon),d=p(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&u.value,appendIcon:e.appendIcon||!e.subgroup&&u.value,title:e.title,value:e.value}}));return ee(()=>l(e.tag,{class:["v-list-group",{"v-list-group--prepend":o==null?void 0:o.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[t.activator&&l(he,{defaults:d.value},{default:()=>[l(ta,null,{default:()=>[t.activator({props:v.value,isOpen:a.value})]})]}),l(yt,{transition:{component:_e},disabled:!h.value},{default:()=>{var f;return[Ye(l("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(f=t.default)==null?void 0:f.call(t)]),[[Vt,a.value]])]}})]})),{}}});const Se=Fe("v-list-item-subtitle"),Ve=Fe("v-list-item-title"),na=O({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:R,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:R,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:Te(),onClickOnce:Te(),...Ne(),...Z(),...Ge(),...Re(),...Ee(),...je(),...pt(),...re(),...Ce(),...He({variant:"text"})},"v-list-item"),se=K()({name:"VListItem",directives:{Ripple:ht},props:na(),emits:{click:e=>!0},setup(e,s){let{attrs:t,slots:a,emit:r}=s;const n=_t(e,t),i=p(()=>e.value??n.href.value),{select:o,isSelected:h,isIndeterminate:g,isGroupActivator:v,root:u,parent:d,openOnSelect:f}=lt(i,!1),m=et(),_=p(()=>{var k;return e.active!==!1&&(e.active||((k=n.isActive)==null?void 0:k.value)||h.value)}),b=p(()=>e.link!==!1&&n.isLink.value),L=p(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||e.value!=null&&!!m)),z=p(()=>e.rounded||e.nav),D=p(()=>e.color??e.activeColor),ue=p(()=>({color:_.value?D.value??e.baseColor:e.baseColor,variant:e.variant}));It(()=>{var k;return(k=n.isActive)==null?void 0:k.value},k=>{k&&d.value!=null&&u.open(d.value,!0),k&&f(k)},{immediate:!0});const{themeClasses:de}=xe(e),{borderClasses:ve}=Ke(e),{colorClasses:fe,colorStyles:T,variantClasses:S}=bt(ue),{densityClasses:te}=Ue(e),{dimensionStyles:ot}=ze(e),{elevationClasses:ct}=We(e),{roundedClasses:ut}=qe(z),dt=p(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),me=p(()=>({isActive:_.value,select:o,isSelected:h.value,isIndeterminate:g.value}));function Ie(k){var ae;r("click",k),!(v||!L.value)&&((ae=n.navigate)==null||ae.call(n,k),e.value!=null&&o(!h.value,k))}function vt(k){(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),Ie(k))}return ee(()=>{const k=b.value?"a":e.tag,ae=a.title||e.title,ft=a.subtitle||e.subtitle,Ae=!!(e.appendAvatar||e.appendIcon),mt=!!(Ae||a.append),Pe=!!(e.prependAvatar||e.prependIcon),ge=!!(Pe||a.prepend);return m==null||m.updateHasPrepend(ge),e.activeColor&&At("active-color",["color","base-color"]),Ye(l(k,{class:["v-list-item",{"v-list-item--active":_.value,"v-list-item--disabled":e.disabled,"v-list-item--link":L.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ge&&(m==null?void 0:m.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&_.value},de.value,ve.value,fe.value,te.value,ct.value,dt.value,ut.value,S.value,e.class],style:[T.value,ot.value,e.style],href:n.href.value,tabindex:L.value?m?-2:0:void 0,onClick:Ie,onKeydown:L.value&&!b.value&&vt},{default:()=>{var Le;return[kt(L.value||_.value,"v-list-item"),ge&&l("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?l(he,{key:"prepend-defaults",disabled:!Pe,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var A;return[(A=a.prepend)==null?void 0:A.call(a,me.value)]}}):l(I,null,[e.prependAvatar&&l(be,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&l(ne,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),l("div",{class:"v-list-item__content","data-no-activator":""},[ae&&l(Ve,{key:"title"},{default:()=>{var A;return[((A=a.title)==null?void 0:A.call(a,{title:e.title}))??e.title]}}),ft&&l(Se,{key:"subtitle"},{default:()=>{var A;return[((A=a.subtitle)==null?void 0:A.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(Le=a.default)==null?void 0:Le.call(a,me.value)]),mt&&l("div",{key:"append",class:"v-list-item__append"},[a.append?l(he,{key:"append-defaults",disabled:!Ae,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var A;return[(A=a.append)==null?void 0:A.call(a,me.value)]}}):l(I,null,[e.appendIcon&&l(ne,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&l(be,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])]}}),[[Pt("ripple"),L.value&&e.ripple]])}),{}}}),la=O({color:String,inset:Boolean,sticky:Boolean,title:String,...Z(),...re()},"v-list-subheader"),sa=K()({name:"VListSubheader",props:la(),setup(e,s){let{slots:t}=s;const{textColorClasses:a,textColorStyles:r}=De(w(e,"color"));return ee(()=>{const n=!!(t.default||e.title);return l(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:r},e.style]},{default:()=>{var i;return[n&&l("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),ra=O({items:Array},"v-list-children"),st=K()({name:"VListChildren",props:ra(),setup(e,s){let{slots:t}=s;return Ze(),()=>{var a,r;return((a=t.default)==null?void 0:a.call(t))??((r=e.items)==null?void 0:r.map(n=>{var f,m;let{children:i,props:o,type:h,raw:g}=n;if(h==="divider")return((f=t.divider)==null?void 0:f.call(t,{props:o}))??l(G,o,null);if(h==="subheader")return((m=t.subheader)==null?void 0:m.call(t,{props:o}))??l(sa,o,null);const v={subtitle:t.subtitle?_=>{var b;return(b=t.subtitle)==null?void 0:b.call(t,{..._,item:g})}:void 0,prepend:t.prepend?_=>{var b;return(b=t.prepend)==null?void 0:b.call(t,{..._,item:g})}:void 0,append:t.append?_=>{var b;return(b=t.append)==null?void 0:b.call(t,{..._,item:g})}:void 0,title:t.title?_=>{var b;return(b=t.title)==null?void 0:b.call(t,{..._,item:g})}:void 0},[u,d]=Me.filterProps(o);return i?l(Me,le({value:o==null?void 0:o.value},u),{activator:_=>{let{props:b}=_;return t.header?t.header({props:{...o,...b}}):l(se,le(o,b),v)},default:()=>l(st,{items:i},t)}):t.item?t.item({props:o}):l(se,o,v)}))}}}),ia=O({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"list-items");function oa(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function ca(e,s){const t=W(s,e.itemType,"item"),a=oa(s)?s:W(s,e.itemTitle),r=W(s,e.itemValue,void 0),n=W(s,e.itemChildren),i=e.itemProps===!0?$t(s,["children"])[1]:W(s,e.itemProps),o={title:a,value:r,...i};return{type:t,title:o.title,value:o.value,props:o,children:t==="item"&&n?rt(e,n):void 0,raw:s}}function rt(e,s){const t=[];for(const a of s)t.push(ca(e,a));return t}function ua(e){return{items:p(()=>rt(e,e.items))}}const da=O({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...Xt({selectStrategy:"single-leaf",openStrategy:"list"}),...Ne(),...Z(),...Ge(),...Re(),...Ee(),itemType:{type:String,default:"type"},...ia(),...je(),...re(),...Ce(),...He({variant:"text"})},"v-list"),it=K()({name:"VList",props:da(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,s){let{slots:t}=s;const{items:a}=ua(e),{themeClasses:r}=xe(e),{backgroundColorClasses:n,backgroundColorStyles:i}=St(w(e,"bgColor")),{borderClasses:o}=Ke(e),{densityClasses:h}=Ue(e),{dimensionStyles:g}=ze(e),{elevationClasses:v}=We(e),{roundedClasses:u}=qe(e),{open:d,select:f}=Zt(e),m=p(()=>e.lines?`v-list--${e.lines}-line`:void 0),_=w(e,"activeColor"),b=w(e,"baseColor"),L=w(e,"color");Ze(),Lt({VListGroup:{activeColor:_,baseColor:b,color:L},VListItem:{activeClass:w(e,"activeClass"),activeColor:_,baseColor:b,color:L,density:w(e,"density"),disabled:w(e,"disabled"),lines:w(e,"lines"),nav:w(e,"nav"),variant:w(e,"variant")}});const z=Y(!1),D=P();function ue(S){z.value=!0}function de(S){z.value=!1}function ve(S){var te;!z.value&&!(S.relatedTarget&&((te=D.value)!=null&&te.contains(S.relatedTarget)))&&T()}function fe(S){if(D.value){if(S.key==="ArrowDown")T("next");else if(S.key==="ArrowUp")T("prev");else if(S.key==="Home")T("first");else if(S.key==="End")T("last");else return;S.preventDefault()}}function T(S){if(D.value)return Bt(D.value,S)}return ee(()=>l(e.tag,{ref:D,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},r.value,n.value,o.value,h.value,v.value,m.value,u.value,e.class],style:[i.value,g.value,e.style],role:"listbox","aria-activedescendant":void 0,onFocusin:ue,onFocusout:de,onFocus:ve,onKeydown:fe},{default:()=>[l(st,{items:a.value},t)]})),{open:d,select:f,focus:T}}}),va=H("div",{class:"my-5 font-weight-bold text-uppercase text-primary"}," CATEGORIES ",-1),fa={__name:"CategoryCard",setup(e){const s=X(),t=a=>{s.getCategoryItems(a)};return(a,r)=>{const n=Qe("spam");return y(),V(I,null,[l(zt),l(j,{variant:"text"},{default:c(()=>[l(it,{density:"comfortable"},{default:c(()=>[va,l(G),(y(!0),V(I,null,ie(J(s).categories,(i,o)=>(y(),V(I,{key:o},[l(se,{value:i,"active-color":"primary",onClick:h=>t(o)},{append:c(()=>[l(n,null,{default:c(()=>[x("("+M(i.items.length)+")",1)]),_:2},1024)]),default:c(()=>[l(Ve,{textContent:M(i.title)},null,8,["textContent"])]),_:2},1032,["value","onClick"]),l(G,{variant:"inset"})],64))),128))]),_:1})]),_:1})],64)}}},ma=H("div",{class:"my-5 font-weight-bold text-uppercase text-primary"}," BEST SELLER ",-1),ga={__name:"BestSellerCard",setup(e){const s=X(),t=P([]),a=Object.keys(s.categories);for(let r of a)if(t.value.push(s.categories[r].items.find(n=>[4,5].includes(n.rating))),t.value.length==4)break;return(r,n)=>(y(),C(j,{variant:"text",class:"mt-5"},{default:c(()=>[ma,l(G),l(it,{lines:"three",density:"compact"},{default:c(()=>[(y(!0),V(I,null,ie(t.value,i=>(y(),C(se,{key:i.id},{prepend:c(()=>[l(be,{size:"50",color:"grey-lighten-1"},{default:c(()=>[l(N,{src:`~/../src/assets/${i.images[0]}`},null,8,["src"])]),_:2},1024)]),default:c(()=>[l(Ve,null,{default:c(()=>[x(M(i.name),1)]),_:2},1024),l(Se,null,{default:c(()=>[l(Gt,{modelValue:i.rating,"onUpdate:modelValue":o=>i.rating=o,"bg-color":"orange-lighten-1",color:"red",size:"18"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(Se,null,{default:c(()=>[x(" $"+M(i.price),1)]),_:2},1024)]),_:2},1024))),128)),l(G)]),_:1})]),_:1}))}},ya={};function pa(e,s){return y(),C(j,{color:"red-lighten-2"},{default:c(()=>[l(pe,{class:"text-h4 text-wrap text-center"},{default:c(()=>[x(" Join Our Newsletter ")]),_:1}),l(Oe,null,{default:c(()=>[l(F,null,{default:c(()=>[l($,{cols:"12"},{default:c(()=>[l(Xe,{placeholder:"Your Email Address*","hide-datails":"",variant:"text",density:"compact",style:{border:"dashed 2px","max-height":"45px"}})]),_:1})]),_:1}),l(F,null,{default:c(()=>[l($,{cols:"12"},{default:c(()=>[l(E,{block:"",rounded:"0",class:"text-red-lighten-2",style:{"min-height":"45px"}},{default:c(()=>[x("subscribe")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const ha=Ft(ya,[["render",pa]]);const _a={key:0,class:"d-flex transition-fast-in-fast-out bg-white v-card--reveal",style:{height:"100%"}},ba={key:0,class:"d-flex transition-fast-in-fast-out v-card--reveal",style:{height:"35px"}},ka={__name:"CategoryItems",setup(e){const s=X(),t=Tt();Mt(()=>{a()});const a=()=>{s.categoryItems=[];const o=t.query.category;if(o){const g=s.categories[o].items;s.categoryItems=g;return}let h=Object.keys(s.categories);for(let g of Array(2))h.forEach(v=>{const u=s.categories[v].items;if(u.length){const d=u[Math.floor(Math.random()*u.length)];d.title=s.categories[v].title,s.categoryItems.push(d)}});s.categoryItems=s.categoryItems.slice(0,6)},r=o=>{Ot.push({name:"ItemDetail",params:{id:o.id},query:{category:s.selectedCategory}})},n=()=>{alert("Sending to card...")},i=()=>{alert("Mark as favorite...")};return(o,h)=>{const g=Qe("center");return y(),V(I,null,[l(g,{class:"my-5 text-h5 font-weight-bold text-uppercase text-primary"},{default:c(()=>[x(" New arrivals "),l(N,{"max-width":"50",src:"~/../src/assets/recursos/main/home-8.png"},null,8,["src"])]),_:1}),l(F,null,{default:c(()=>[l($,{cols:"3"},{default:c(()=>[l(fa),l(ga),l(ha)]),_:1}),l($,{cols:"9"},{default:c(()=>[l(F,null,{default:c(()=>[(y(!0),V(I,null,ie(J(s).categoryItems,v=>(y(),C($,{cols:"4",key:v.id},{default:c(()=>[l(Nt,null,{default:c(({isHovering:u,props:d})=>[l(j,le({variant:"solo"},d,{onClick:ye(f=>r(v),["stop"])}),{default:c(()=>[v.images?(y(),C(N,{key:0,cover:"",class:"text-right",src:`@/../src/assets/${v.images[0]}`},{default:c(()=>[v.images.length>1?(y(),C(_e,{key:0},{default:c(()=>[u?(y(),V("div",_a,[l(N,{cover:"",class:"align-end text-center",src:`@/../src/assets/${v.images[1]}`},null,8,["src"])])):B("",!0)]),_:2},1024)):B("",!0),l(_e,null,{default:c(()=>[u?(y(),V("div",ba,[v.stock>0?(y(),C(E,{key:0,block:"",rounded:"0",color:"red-lighten-2",onClick:ye(n,["stop"])},{append:c(()=>[l(ne,{icon:"mdi-magnify"})]),prepend:c(()=>[l(ne,{icon:"mdi-heart-outline",onClick:ye(i,["stop"])},null,8,["onClick"])]),default:c(()=>[x(" Add to cart ")]),_:1},8,["onClick"])):(y(),C(E,{key:1,block:"",rounded:"0",color:"red-lighten-2","prepend-icon":"mdi-heart-outline"}))])):B("",!0)]),_:2},1024),v.stock==0?(y(),C(E,{key:1,class:"ma-2",elevation:"0",size:"x-small",rounded:""},{default:c(()=>[x(" Out of stock ")]),_:1})):B("",!0)]),_:2},1032,["src"])):B("",!0),l(q,{class:"text-center text-caption font-weight-bold text-red-lighten-1"},{default:c(()=>[l(g,null,{default:c(()=>[x(M(v.title?v.title:J(s).selectedCategoryTitle),1)]),_:2},1024)]),_:2},1024),v.name?(y(),C(q,{key:1,class:"text-center text-subtitle text-primary"},{default:c(()=>[l(g,null,{default:c(()=>[x(M(v.name),1)]),_:2},1024)]),_:2},1024)):B("",!0),l(q,{class:"text-center text-subtitle font-weight-black text-primary"},{default:c(()=>[v.price&&v.stock>0?(y(),C(g,{key:0},{default:c(()=>[x(" $"+M(v.price),1)]),_:2},1024)):B("",!0)]),_:2},1024)]),_:2},1040,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})],64)}}},Va={__name:"Home",setup(e){const s=X();return(t,a)=>(y(),V(I,null,[l(Kt),J(s).categories?(y(),C(ka,{key:0})):B("",!0)],64))}};export{Va as default};
