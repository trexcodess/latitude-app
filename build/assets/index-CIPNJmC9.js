(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function rS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ng={exports:{}},kc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vT;function X1(){if(vT)return kc;vT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var u=null;if(l!==void 0&&(u=""+l),a.key!==void 0&&(u=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:u,ref:a!==void 0?a:null,props:l}}return kc.Fragment=e,kc.jsx=t,kc.jsxs=t,kc}var ET;function J1(){return ET||(ET=1,ng.exports=X1()),ng.exports}var _=J1(),ig={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TT;function Z1(){if(TT)return Ce;TT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),S=Symbol.iterator;function M(k){return k===null||typeof k!="object"?null:(k=S&&k[S]||k["@@iterator"],typeof k=="function"?k:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,J={};function ee(k,Y,ie){this.props=k,this.context=Y,this.refs=J,this.updater=ie||H}ee.prototype.isReactComponent={},ee.prototype.setState=function(k,Y){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,Y,"setState")},ee.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function ce(){}ce.prototype=ee.prototype;function me(k,Y,ie){this.props=k,this.context=Y,this.refs=J,this.updater=ie||H}var we=me.prototype=new ce;we.constructor=me,$(we,ee.prototype),we.isPureReactComponent=!0;var Xe=Array.isArray;function Se(){}var C={H:null,A:null,T:null,S:null},x=Object.prototype.hasOwnProperty;function I(k,Y,ie){var re=ie.ref;return{$$typeof:n,type:k,key:Y,ref:re!==void 0?re:null,props:ie}}function P(k,Y){return I(k.type,Y,k.props)}function D(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function V(k){var Y={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ie){return Y[ie]})}var R=/\/+/g;function dt(k,Y){return typeof k=="object"&&k!==null&&k.key!=null?V(""+k.key):Y.toString(36)}function Nt(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(Se,Se):(k.status="pending",k.then(function(Y){k.status==="pending"&&(k.status="fulfilled",k.value=Y)},function(Y){k.status==="pending"&&(k.status="rejected",k.reason=Y)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function K(k,Y,ie,re,be){var xe=typeof k;(xe==="undefined"||xe==="boolean")&&(k=null);var he=!1;if(k===null)he=!0;else switch(xe){case"bigint":case"string":case"number":he=!0;break;case"object":switch(k.$$typeof){case n:case e:he=!0;break;case E:return he=k._init,K(he(k._payload),Y,ie,re,be)}}if(he)return be=be(k),he=re===""?"."+dt(k,0):re,Xe(be)?(ie="",he!=null&&(ie=he.replace(R,"$&/")+"/"),K(be,Y,ie,"",function(Ot){return Ot})):be!=null&&(D(be)&&(be=P(be,ie+(be.key==null||k&&k.key===be.key?"":(""+be.key).replace(R,"$&/")+"/")+he)),Y.push(be)),1;he=0;var et=re===""?".":re+":";if(Xe(k))for(var Je=0;Je<k.length;Je++)re=k[Je],xe=et+dt(re,Je),he+=K(re,Y,ie,xe,be);else if(Je=M(k),typeof Je=="function")for(k=Je.call(k),Je=0;!(re=k.next()).done;)re=re.value,xe=et+dt(re,Je++),he+=K(re,Y,ie,xe,be);else if(xe==="object"){if(typeof k.then=="function")return K(Nt(k),Y,ie,re,be);throw Y=String(k),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return he}function se(k,Y,ie){if(k==null)return k;var re=[],be=0;return K(k,re,"","",function(xe){return Y.call(ie,xe,be++)}),re}function le(k){if(k._status===-1){var Y=k._result;Y=Y(),Y.then(function(ie){(k._status===0||k._status===-1)&&(k._status=1,k._result=ie)},function(ie){(k._status===0||k._status===-1)&&(k._status=2,k._result=ie)}),k._status===-1&&(k._status=0,k._result=Y)}if(k._status===1)return k._result.default;throw k._result}var Ve=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},Qe={map:se,forEach:function(k,Y,ie){se(k,function(){Y.apply(this,arguments)},ie)},count:function(k){var Y=0;return se(k,function(){Y++}),Y},toArray:function(k){return se(k,function(Y){return Y})||[]},only:function(k){if(!D(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return Ce.Activity=b,Ce.Children=Qe,Ce.Component=ee,Ce.Fragment=t,Ce.Profiler=a,Ce.PureComponent=me,Ce.StrictMode=s,Ce.Suspense=p,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(k){return C.H.useMemoCache(k)}},Ce.cache=function(k){return function(){return k.apply(null,arguments)}},Ce.cacheSignal=function(){return null},Ce.cloneElement=function(k,Y,ie){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var re=$({},k.props),be=k.key;if(Y!=null)for(xe in Y.key!==void 0&&(be=""+Y.key),Y)!x.call(Y,xe)||xe==="key"||xe==="__self"||xe==="__source"||xe==="ref"&&Y.ref===void 0||(re[xe]=Y[xe]);var xe=arguments.length-2;if(xe===1)re.children=ie;else if(1<xe){for(var he=Array(xe),et=0;et<xe;et++)he[et]=arguments[et+2];re.children=he}return I(k.type,be,re)},Ce.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:l,_context:k},k},Ce.createElement=function(k,Y,ie){var re,be={},xe=null;if(Y!=null)for(re in Y.key!==void 0&&(xe=""+Y.key),Y)x.call(Y,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(be[re]=Y[re]);var he=arguments.length-2;if(he===1)be.children=ie;else if(1<he){for(var et=Array(he),Je=0;Je<he;Je++)et[Je]=arguments[Je+2];be.children=et}if(k&&k.defaultProps)for(re in he=k.defaultProps,he)be[re]===void 0&&(be[re]=he[re]);return I(k,xe,be)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(k){return{$$typeof:f,render:k}},Ce.isValidElement=D,Ce.lazy=function(k){return{$$typeof:E,_payload:{_status:-1,_result:k},_init:le}},Ce.memo=function(k,Y){return{$$typeof:g,type:k,compare:Y===void 0?null:Y}},Ce.startTransition=function(k){var Y=C.T,ie={};C.T=ie;try{var re=k(),be=C.S;be!==null&&be(ie,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(Se,Ve)}catch(xe){Ve(xe)}finally{Y!==null&&ie.types!==null&&(Y.types=ie.types),C.T=Y}},Ce.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},Ce.use=function(k){return C.H.use(k)},Ce.useActionState=function(k,Y,ie){return C.H.useActionState(k,Y,ie)},Ce.useCallback=function(k,Y){return C.H.useCallback(k,Y)},Ce.useContext=function(k){return C.H.useContext(k)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(k,Y){return C.H.useDeferredValue(k,Y)},Ce.useEffect=function(k,Y){return C.H.useEffect(k,Y)},Ce.useEffectEvent=function(k){return C.H.useEffectEvent(k)},Ce.useId=function(){return C.H.useId()},Ce.useImperativeHandle=function(k,Y,ie){return C.H.useImperativeHandle(k,Y,ie)},Ce.useInsertionEffect=function(k,Y){return C.H.useInsertionEffect(k,Y)},Ce.useLayoutEffect=function(k,Y){return C.H.useLayoutEffect(k,Y)},Ce.useMemo=function(k,Y){return C.H.useMemo(k,Y)},Ce.useOptimistic=function(k,Y){return C.H.useOptimistic(k,Y)},Ce.useReducer=function(k,Y,ie){return C.H.useReducer(k,Y,ie)},Ce.useRef=function(k){return C.H.useRef(k)},Ce.useState=function(k){return C.H.useState(k)},Ce.useSyncExternalStore=function(k,Y,ie){return C.H.useSyncExternalStore(k,Y,ie)},Ce.useTransition=function(){return C.H.useTransition()},Ce.version="19.2.3",Ce}var bT;function v_(){return bT||(bT=1,ig.exports=Z1()),ig.exports}var de=v_();const eR=rS(de);var sg={exports:{}},Mc={},rg={exports:{}},ag={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wT;function tR(){return wT||(wT=1,(function(n){function e(K,se){var le=K.length;K.push(se);e:for(;0<le;){var Ve=le-1>>>1,Qe=K[Ve];if(0<a(Qe,se))K[Ve]=se,K[le]=Qe,le=Ve;else break e}}function t(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var se=K[0],le=K.pop();if(le!==se){K[0]=le;e:for(var Ve=0,Qe=K.length,k=Qe>>>1;Ve<k;){var Y=2*(Ve+1)-1,ie=K[Y],re=Y+1,be=K[re];if(0>a(ie,le))re<Qe&&0>a(be,ie)?(K[Ve]=be,K[re]=le,Ve=re):(K[Ve]=ie,K[Y]=le,Ve=Y);else if(re<Qe&&0>a(be,le))K[Ve]=be,K[re]=le,Ve=re;else break e}}return se}function a(K,se){var le=K.sortIndex-se.sortIndex;return le!==0?le:K.id-se.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var p=[],g=[],E=1,b=null,S=3,M=!1,H=!1,$=!1,J=!1,ee=typeof setTimeout=="function"?setTimeout:null,ce=typeof clearTimeout=="function"?clearTimeout:null,me=typeof setImmediate<"u"?setImmediate:null;function we(K){for(var se=t(g);se!==null;){if(se.callback===null)s(g);else if(se.startTime<=K)s(g),se.sortIndex=se.expirationTime,e(p,se);else break;se=t(g)}}function Xe(K){if($=!1,we(K),!H)if(t(p)!==null)H=!0,Se||(Se=!0,V());else{var se=t(g);se!==null&&Nt(Xe,se.startTime-K)}}var Se=!1,C=-1,x=5,I=-1;function P(){return J?!0:!(n.unstable_now()-I<x)}function D(){if(J=!1,Se){var K=n.unstable_now();I=K;var se=!0;try{e:{H=!1,$&&($=!1,ce(C),C=-1),M=!0;var le=S;try{t:{for(we(K),b=t(p);b!==null&&!(b.expirationTime>K&&P());){var Ve=b.callback;if(typeof Ve=="function"){b.callback=null,S=b.priorityLevel;var Qe=Ve(b.expirationTime<=K);if(K=n.unstable_now(),typeof Qe=="function"){b.callback=Qe,we(K),se=!0;break t}b===t(p)&&s(p),we(K)}else s(p);b=t(p)}if(b!==null)se=!0;else{var k=t(g);k!==null&&Nt(Xe,k.startTime-K),se=!1}}break e}finally{b=null,S=le,M=!1}se=void 0}}finally{se?V():Se=!1}}}var V;if(typeof me=="function")V=function(){me(D)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,dt=R.port2;R.port1.onmessage=D,V=function(){dt.postMessage(null)}}else V=function(){ee(D,0)};function Nt(K,se){C=ee(function(){K(n.unstable_now())},se)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(K){K.callback=null},n.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<K?Math.floor(1e3/K):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(K){switch(S){case 1:case 2:case 3:var se=3;break;default:se=S}var le=S;S=se;try{return K()}finally{S=le}},n.unstable_requestPaint=function(){J=!0},n.unstable_runWithPriority=function(K,se){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var le=S;S=K;try{return se()}finally{S=le}},n.unstable_scheduleCallback=function(K,se,le){var Ve=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?Ve+le:Ve):le=Ve,K){case 1:var Qe=-1;break;case 2:Qe=250;break;case 5:Qe=1073741823;break;case 4:Qe=1e4;break;default:Qe=5e3}return Qe=le+Qe,K={id:E++,callback:se,priorityLevel:K,startTime:le,expirationTime:Qe,sortIndex:-1},le>Ve?(K.sortIndex=le,e(g,K),t(p)===null&&K===t(g)&&($?(ce(C),C=-1):$=!0,Nt(Xe,le-Ve))):(K.sortIndex=Qe,e(p,K),H||M||(H=!0,Se||(Se=!0,V()))),K},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(K){var se=S;return function(){var le=S;S=se;try{return K.apply(this,arguments)}finally{S=le}}}})(ag)),ag}var ST;function nR(){return ST||(ST=1,rg.exports=tR()),rg.exports}var og={exports:{}},fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AT;function iR(){if(AT)return fn;AT=1;var n=v_();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,E){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:b==null?null:""+b,children:p,containerInfo:g,implementation:E}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,fn.createPortal=function(p,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,E)},fn.flushSync=function(p){var g=u.T,E=s.p;try{if(u.T=null,s.p=2,p)return p()}finally{u.T=g,s.p=E,s.d.f()}},fn.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},fn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},fn.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var E=g.as,b=f(E,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,M=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:M}):E==="script"&&s.d.X(p,{crossOrigin:b,integrity:S,fetchPriority:M,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},fn.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=f(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},fn.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,b=f(E,g.crossOrigin);s.d.L(p,E,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},fn.preloadModule=function(p,g){if(typeof p=="string")if(g){var E=f(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},fn.requestFormReset=function(p){s.d.r(p)},fn.unstable_batchedUpdates=function(p,g){return p(g)},fn.useFormState=function(p,g,E){return u.H.useFormState(p,g,E)},fn.useFormStatus=function(){return u.H.useHostTransitionStatus()},fn.version="19.2.3",fn}var xT;function sR(){if(xT)return og.exports;xT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),og.exports=iR(),og.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CT;function rR(){if(CT)return Mc;CT=1;var n=nR(),e=v_(),t=sR();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function u(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function f(i){if(i.tag===31){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function p(i){if(l(i)!==i)throw Error(s(188))}function g(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,c=r;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return p(d),i;if(m===c)return p(d),r;m=m.sibling}throw Error(s(188))}if(o.return!==c.return)o=d,c=m;else{for(var v=!1,w=d.child;w;){if(w===o){v=!0,o=d,c=m;break}if(w===c){v=!0,c=d,o=m;break}w=w.sibling}if(!v){for(w=m.child;w;){if(w===o){v=!0,o=m,c=d;break}if(w===c){v=!0,c=m,o=d;break}w=w.sibling}if(!v)throw Error(s(189))}}if(o.alternate!==c)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function E(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=E(i),r!==null)return r;i=i.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),ce=Symbol.for("react.consumer"),me=Symbol.for("react.context"),we=Symbol.for("react.forward_ref"),Xe=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function V(i){return i===null||typeof i!="object"?null:(i=D&&i[D]||i["@@iterator"],typeof i=="function"?i:null)}var R=Symbol.for("react.client.reference");function dt(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===R?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case $:return"Fragment";case ee:return"Profiler";case J:return"StrictMode";case Xe:return"Suspense";case Se:return"SuspenseList";case I:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case H:return"Portal";case me:return i.displayName||"Context";case ce:return(i._context.displayName||"Context")+".Consumer";case we:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case C:return r=i.displayName||null,r!==null?r:dt(i.type)||"Memo";case x:r=i._payload,i=i._init;try{return dt(i(r))}catch{}}return null}var Nt=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},Ve=[],Qe=-1;function k(i){return{current:i}}function Y(i){0>Qe||(i.current=Ve[Qe],Ve[Qe]=null,Qe--)}function ie(i,r){Qe++,Ve[Qe]=i.current,i.current=r}var re=k(null),be=k(null),xe=k(null),he=k(null);function et(i,r){switch(ie(xe,r),ie(be,i),ie(re,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?B0(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=B0(r),i=H0(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}Y(re),ie(re,i)}function Je(){Y(re),Y(be),Y(xe)}function Ot(i){i.memoizedState!==null&&ie(he,i);var r=re.current,o=H0(r,i.type);r!==o&&(ie(be,i),ie(re,o))}function Ks(i){be.current===i&&(Y(re),Y(be)),he.current===i&&(Y(he),Rc._currentValue=le)}var Di,Ys;function ki(i){if(Di===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Di=r&&r[1]||"",Ys=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Di+i+Ys}var Rl=!1;function ea(i,r){if(!i||Rl)return"";Rl=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(q){var F=q}Reflect.construct(i,[],W)}else{try{W.call()}catch(q){F=q}i.call(W.prototype)}}else{try{throw Error()}catch(q){F=q}(W=i())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(q){if(q&&F&&typeof q.stack=="string")return[q.stack,F.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),v=m[0],w=m[1];if(v&&w){var N=v.split(`
`),z=w.split(`
`);for(d=c=0;c<N.length&&!N[c].includes("DetermineComponentFrameRoot");)c++;for(;d<z.length&&!z[d].includes("DetermineComponentFrameRoot");)d++;if(c===N.length||d===z.length)for(c=N.length-1,d=z.length-1;1<=c&&0<=d&&N[c]!==z[d];)d--;for(;1<=c&&0<=d;c--,d--)if(N[c]!==z[d]){if(c!==1||d!==1)do if(c--,d--,0>d||N[c]!==z[d]){var G=`
`+N[c].replace(" at new "," at ");return i.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",i.displayName)),G}while(1<=c&&0<=d);break}}}finally{Rl=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?ki(o):""}function Nl(i,r){switch(i.tag){case 26:case 27:case 5:return ki(i.type);case 16:return ki("Lazy");case 13:return i.child!==r&&r!==null?ki("Suspense Fallback"):ki("Suspense");case 19:return ki("SuspenseList");case 0:case 15:return ea(i.type,!1);case 11:return ea(i.type.render,!1);case 1:return ea(i.type,!0);case 31:return ki("Activity");default:return""}}function Ol(i){try{var r="",o=null;do r+=Nl(i,o),o=i,i=i.return;while(i);return r}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var Dt=Object.prototype.hasOwnProperty,Ht=n.unstable_scheduleCallback,Qs=n.unstable_cancelCallback,sm=n.unstable_shouldYield,Bu=n.unstable_requestPaint,yn=n.unstable_now,ta=n.unstable_getCurrentPriorityLevel,Dl=n.unstable_ImmediatePriority,kl=n.unstable_UserBlockingPriority,Ws=n.unstable_NormalPriority,rm=n.unstable_LowPriority,Hu=n.unstable_IdlePriority,qu=n.log,Gu=n.unstable_setDisableYieldValue,di=null,tn=null;function Yn(i){if(typeof qu=="function"&&Gu(i),tn&&typeof tn.setStrictMode=="function")try{tn.setStrictMode(di,i)}catch{}}var At=Math.clz32?Math.clz32:Yu,Ku=Math.log,to=Math.LN2;function Yu(i){return i>>>=0,i===0?32:31-(Ku(i)/to|0)|0}var Mi=256,na=262144,kt=4194304;function Pi(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return i&261888;case 262144:case 524288:case 1048576:case 2097152:return i&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Li(i,r,o){var c=i.pendingLanes;if(c===0)return 0;var d=0,m=i.suspendedLanes,v=i.pingedLanes;i=i.warmLanes;var w=c&134217727;return w!==0?(c=w&~m,c!==0?d=Pi(c):(v&=w,v!==0?d=Pi(v):o||(o=w&~i,o!==0&&(d=Pi(o))))):(w=c&~m,w!==0?d=Pi(w):v!==0?d=Pi(v):o||(o=c&~i,o!==0&&(d=Pi(o)))),d===0?0:r!==0&&r!==d&&(r&m)===0&&(m=d&-d,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:d}function fi(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function am(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qu(){var i=kt;return kt<<=1,(kt&62914560)===0&&(kt=4194304),i}function Vi(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function ia(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function om(i,r,o,c,d,m){var v=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var w=i.entanglements,N=i.expirationTimes,z=i.hiddenUpdates;for(o=v&~o;0<o;){var G=31-At(o),W=1<<G;w[G]=0,N[G]=-1;var F=z[G];if(F!==null)for(z[G]=null,G=0;G<F.length;G++){var q=F[G];q!==null&&(q.lane&=-536870913)}o&=~W}c!==0&&sa(i,c,0),m!==0&&d===0&&i.tag!==0&&(i.suspendedLanes|=m&~(v&~r))}function sa(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var c=31-At(r);i.entangledLanes|=r,i.entanglements[c]=i.entanglements[c]|1073741824|o&261930}function Ml(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var c=31-At(o),d=1<<c;d&r|i[c]&r&&(i[c]|=r),o&=~d}}function Pl(i,r){var o=r&-r;return o=(o&42)!==0?1:ra(o),(o&(i.suspendedLanes|r))!==0?0:o}function ra(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function fs(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Wu(){var i=se.p;return i!==0?i:(i=window.event,i===void 0?32:dT(i.type))}function mi(i,r){var o=se.p;try{return se.p=i,r()}finally{se.p=o}}var pi=Math.random().toString(36).slice(2),Mt="__reactFiber$"+pi,$t="__reactProps$"+pi,ji="__reactContainer$"+pi,no="__reactEvents$"+pi,lm="__reactListeners$"+pi,$u="__reactHandles$"+pi,Xu="__reactResources$"+pi,Ui="__reactMarker$"+pi;function io(i){delete i[Mt],delete i[$t],delete i[no],delete i[lm],delete i[$u]}function zi(i){var r=i[Mt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[ji]||o[Mt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=$0(i);i!==null;){if(o=i[Mt])return o;i=$0(i)}return r}i=o,o=i.parentNode}return null}function Qn(i){if(i=i[Mt]||i[ji]){var r=i.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return i}return null}function Pn(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function Fi(i){var r=i[Xu];return r||(r=i[Xu]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Pt(i){i[Ui]=!0}var Ll=new Set,Vl={};function Bi(i,r){Hi(i,r),Hi(i+"Capture",r)}function Hi(i,r){for(Vl[i]=r,i=0;i<r.length;i++)Ll.add(r[i])}var jl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ul={},zl={};function Ju(i){return Dt.call(zl,i)?!0:Dt.call(Ul,i)?!1:jl.test(i)?zl[i]=!0:(Ul[i]=!0,!1)}function so(i,r,o){if(Ju(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function Ln(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function Lt(i,r,o,c){if(c===null)i.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+c)}}function Xt(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function $s(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Fl(i,r,o){var c=Object.getOwnPropertyDescriptor(i.constructor.prototype,r);if(!i.hasOwnProperty(r)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var d=c.get,m=c.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){o=""+v,m.call(this,v)}}),Object.defineProperty(i,r,{enumerable:c.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function tt(i){if(!i._valueTracker){var r=$s(i)?"checked":"value";i._valueTracker=Fl(i,r,""+i[r])}}function aa(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return i&&(c=$s(i)?i.checked?"true":"false":i.value),i=c,i!==o?(r.setValue(i),!0):!1}function qi(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var oa=/[\n"\\]/g;function An(i){return i.replace(oa,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function ro(i,r,o,c,d,m,v,w){i.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?i.type=v:i.removeAttribute("type"),r!=null?v==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+Xt(r)):i.value!==""+Xt(r)&&(i.value=""+Xt(r)):v!=="submit"&&v!=="reset"||i.removeAttribute("value"),r!=null?Bl(i,v,Xt(r)):o!=null?Bl(i,v,Xt(o)):c!=null&&i.removeAttribute("value"),d==null&&m!=null&&(i.defaultChecked=!!m),d!=null&&(i.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?i.name=""+Xt(w):i.removeAttribute("name")}function Zu(i,r,o,c,d,m,v,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null)){tt(i);return}o=o!=null?""+Xt(o):"",r=r!=null?""+Xt(r):o,w||r===i.value||(i.value=r),i.defaultValue=r}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=w?i.checked:!!c,i.defaultChecked=!!c,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(i.name=v),tt(i)}function Bl(i,r,o){r==="number"&&qi(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function Xs(i,r,o,c){if(i=i.options,r){r={};for(var d=0;d<o.length;d++)r["$"+o[d]]=!0;for(o=0;o<i.length;o++)d=r.hasOwnProperty("$"+i[o].value),i[o].selected!==d&&(i[o].selected=d),d&&c&&(i[o].defaultSelected=!0)}else{for(o=""+Xt(o),r=null,d=0;d<i.length;d++){if(i[d].value===o){i[d].selected=!0,c&&(i[d].defaultSelected=!0);return}r!==null||i[d].disabled||(r=i[d])}r!==null&&(r.selected=!0)}}function eh(i,r,o){if(r!=null&&(r=""+Xt(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+Xt(o):""}function Js(i,r,o,c){if(r==null){if(c!=null){if(o!=null)throw Error(s(92));if(Nt(c)){if(1<c.length)throw Error(s(93));c=c[0]}o=c}o==null&&(o=""),r=o}o=Xt(r),i.defaultValue=o,c=i.textContent,c===o&&c!==""&&c!==null&&(i.value=c),tt(i)}function xn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var th=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hl(i,r,o){var c=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":c?i.setProperty(r,o):typeof o!="number"||o===0||th.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function ql(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var d in r)c=r[d],r.hasOwnProperty(d)&&o[d]!==c&&Hl(i,d,c)}else for(var m in r)r.hasOwnProperty(m)&&Hl(i,m,r[m])}function ao(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zs=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oo(i){return Zs.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}function gi(){}var Gl=null;function Wn(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var er=null,Gi=null;function la(i){var r=Qn(i);if(r&&(i=r.stateNode)){var o=i[$t]||null;e:switch(i=r.stateNode,r.type){case"input":if(ro(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+An(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==i&&c.form===i.form){var d=c[$t]||null;if(!d)throw Error(s(90));ro(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(r=0;r<o.length;r++)c=o[r],c.form===i.form&&aa(c)}break e;case"textarea":eh(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Xs(i,!!o.multiple,r,!1)}}}var lo=!1;function tr(i,r,o){if(lo)return i(r,o);lo=!0;try{var c=i(r);return c}finally{if(lo=!1,(er!==null||Gi!==null)&&(Wh(),er&&(r=er,i=Gi,Gi=er=null,la(r),i)))for(r=0;r<i.length;r++)la(i[r])}}function _i(i,r){var o=i.stateNode;if(o===null)return null;var c=o[$t]||null;if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ca=!1;if($n)try{var st={};Object.defineProperty(st,"passive",{get:function(){ca=!0}}),window.addEventListener("test",st,st),window.removeEventListener("test",st,st)}catch{ca=!1}var Ki=null,Kl=null,ua=null;function Yl(){if(ua)return ua;var i,r=Kl,o=r.length,c,d="value"in Ki?Ki.value:Ki.textContent,m=d.length;for(i=0;i<o&&r[i]===d[i];i++);var v=o-i;for(c=1;c<=v&&r[o-c]===d[m-c];c++);return ua=d.slice(i,1<c?1-c:void 0)}function ha(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function ms(){return!0}function yi(){return!1}function nn(i){function r(o,c,d,m,v){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var w in i)i.hasOwnProperty(w)&&(o=i[w],this[w]=o?o(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ms:yi,this.isPropagationStopped=yi,this}return b(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ms)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ms)},persist:function(){},isPersistent:ms}),r}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yi=nn(ps),nr=b({},ps,{view:0,detail:0}),Ql=nn(nr),ir,co,Qi,uo=b({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Qi&&(Qi&&i.type==="mousemove"?(ir=i.screenX-Qi.screenX,co=i.screenY-Qi.screenY):co=ir=0,Qi=i),ir)},movementY:function(i){return"movementY"in i?i.movementY:co}}),Wl=nn(uo),da=b({},uo,{dataTransfer:0}),ih=nn(da),sh=b({},nr,{relatedTarget:0}),fa=nn(sh),$l=b({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),rh=nn($l),ho=b({},ps,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),ah=nn(ho),oh=b({},ps,{data:0}),Wi=nn(oh),lh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ch={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hh(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=uh[i])?!!r[i]:!1}function sr(){return hh}var vn=b({},nr,{key:function(i){if(i.key){var r=lh[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=ha(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?ch[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sr,charCode:function(i){return i.type==="keypress"?ha(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ha(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),dh=nn(vn),fh=b({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gs=nn(fh),h=b({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sr}),y=nn(h),T=b({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),A=nn(T),j=b({},uo,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),B=nn(j),ne=b({},ps,{newState:0,oldState:0}),Re=nn(ne),xt=[9,13,27,32],We=$n&&"CompositionEvent"in window,_t=null;$n&&"documentMode"in document&&(_t=document.documentMode);var Xn=$n&&"TextEvent"in window&&!_t,$i=$n&&(!We||_t&&8<_t&&11>=_t),vi=" ",Ei=!1;function ma(i,r){switch(i){case"keyup":return xt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fo(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var mo=!1;function TI(i,r){switch(i){case"compositionend":return fo(r);case"keypress":return r.which!==32?null:(Ei=!0,vi);case"textInput":return i=r.data,i===vi&&Ei?null:i;default:return null}}function bI(i,r){if(mo)return i==="compositionend"||!We&&ma(i,r)?(i=Yl(),ua=Kl=Ki=null,mo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return $i&&r.locale!=="ko"?null:r.data;default:return null}}var wI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zy(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!wI[i.type]:r==="textarea"}function ev(i,r,o,c){er?Gi?Gi.push(c):Gi=[c]:er=c,r=nd(r,"onChange"),0<r.length&&(o=new Yi("onChange","change",null,o,c),i.push({event:o,listeners:r}))}var Xl=null,Jl=null;function SI(i){L0(i,0)}function mh(i){var r=Pn(i);if(aa(r))return i}function tv(i,r){if(i==="change")return r}var nv=!1;if($n){var cm;if($n){var um="oninput"in document;if(!um){var iv=document.createElement("div");iv.setAttribute("oninput","return;"),um=typeof iv.oninput=="function"}cm=um}else cm=!1;nv=cm&&(!document.documentMode||9<document.documentMode)}function sv(){Xl&&(Xl.detachEvent("onpropertychange",rv),Jl=Xl=null)}function rv(i){if(i.propertyName==="value"&&mh(Jl)){var r=[];ev(r,Jl,i,Wn(i)),tr(SI,r)}}function AI(i,r,o){i==="focusin"?(sv(),Xl=r,Jl=o,Xl.attachEvent("onpropertychange",rv)):i==="focusout"&&sv()}function xI(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return mh(Jl)}function CI(i,r){if(i==="click")return mh(r)}function II(i,r){if(i==="input"||i==="change")return mh(r)}function RI(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Vn=typeof Object.is=="function"?Object.is:RI;function Zl(i,r){if(Vn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!Dt.call(r,d)||!Vn(i[d],r[d]))return!1}return!0}function av(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function ov(i,r){var o=av(i);i=0;for(var c;o;){if(o.nodeType===3){if(c=i+o.textContent.length,i<=r&&c>=r)return{node:o,offset:r-i};i=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=av(o)}}function lv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?lv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function cv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=qi(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=qi(i.document)}return r}function hm(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var NI=$n&&"documentMode"in document&&11>=document.documentMode,po=null,dm=null,ec=null,fm=!1;function uv(i,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;fm||po==null||po!==qi(c)||(c=po,"selectionStart"in c&&hm(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ec&&Zl(ec,c)||(ec=c,c=nd(dm,"onSelect"),0<c.length&&(r=new Yi("onSelect","select",null,r,o),i.push({event:r,listeners:c}),r.target=po)))}function pa(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var go={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionrun:pa("Transition","TransitionRun"),transitionstart:pa("Transition","TransitionStart"),transitioncancel:pa("Transition","TransitionCancel"),transitionend:pa("Transition","TransitionEnd")},mm={},hv={};$n&&(hv=document.createElement("div").style,"AnimationEvent"in window||(delete go.animationend.animation,delete go.animationiteration.animation,delete go.animationstart.animation),"TransitionEvent"in window||delete go.transitionend.transition);function ga(i){if(mm[i])return mm[i];if(!go[i])return i;var r=go[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in hv)return mm[i]=r[o];return i}var dv=ga("animationend"),fv=ga("animationiteration"),mv=ga("animationstart"),OI=ga("transitionrun"),DI=ga("transitionstart"),kI=ga("transitioncancel"),pv=ga("transitionend"),gv=new Map,pm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pm.push("scrollEnd");function Ti(i,r){gv.set(i,r),Bi(r,[i])}var ph=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)},Jn=[],_o=0,gm=0;function gh(){for(var i=_o,r=gm=_o=0;r<i;){var o=Jn[r];Jn[r++]=null;var c=Jn[r];Jn[r++]=null;var d=Jn[r];Jn[r++]=null;var m=Jn[r];if(Jn[r++]=null,c!==null&&d!==null){var v=c.pending;v===null?d.next=d:(d.next=v.next,v.next=d),c.pending=d}m!==0&&_v(o,d,m)}}function _h(i,r,o,c){Jn[_o++]=i,Jn[_o++]=r,Jn[_o++]=o,Jn[_o++]=c,gm|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function _m(i,r,o,c){return _h(i,r,o,c),yh(i)}function _a(i,r){return _h(i,null,null,r),yh(i)}function _v(i,r,o){i.lanes|=o;var c=i.alternate;c!==null&&(c.lanes|=o);for(var d=!1,m=i.return;m!==null;)m.childLanes|=o,c=m.alternate,c!==null&&(c.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(d=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,d&&r!==null&&(d=31-At(o),i=m.hiddenUpdates,c=i[d],c===null?i[d]=[r]:c.push(r),r.lane=o|536870912),m):null}function yh(i){if(50<bc)throw bc=0,xp=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var yo={};function MI(i,r,o,c){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(i,r,o,c){return new MI(i,r,o,c)}function ym(i){return i=i.prototype,!(!i||!i.isReactComponent)}function _s(i,r){var o=i.alternate;return o===null?(o=jn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function yv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function vh(i,r,o,c,d,m){var v=0;if(c=i,typeof i=="function")ym(i)&&(v=1);else if(typeof i=="string")v=U1(i,o,re.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case I:return i=jn(31,o,r,d),i.elementType=I,i.lanes=m,i;case $:return ya(o.children,d,m,r);case J:v=8,d|=24;break;case ee:return i=jn(12,o,r,d|2),i.elementType=ee,i.lanes=m,i;case Xe:return i=jn(13,o,r,d),i.elementType=Xe,i.lanes=m,i;case Se:return i=jn(19,o,r,d),i.elementType=Se,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case me:v=10;break e;case ce:v=9;break e;case we:v=11;break e;case C:v=14;break e;case x:v=16,c=null;break e}v=29,o=Error(s(130,i===null?"null":typeof i,"")),c=null}return r=jn(v,o,r,d),r.elementType=i,r.type=c,r.lanes=m,r}function ya(i,r,o,c){return i=jn(7,i,c,r),i.lanes=o,i}function vm(i,r,o){return i=jn(6,i,null,r),i.lanes=o,i}function vv(i){var r=jn(18,null,null,0);return r.stateNode=i,r}function Em(i,r,o){return r=jn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var Ev=new WeakMap;function Zn(i,r){if(typeof i=="object"&&i!==null){var o=Ev.get(i);return o!==void 0?o:(r={value:i,source:r,stack:Ol(r)},Ev.set(i,r),r)}return{value:i,source:r,stack:Ol(r)}}var vo=[],Eo=0,Eh=null,tc=0,ei=[],ti=0,rr=null,Xi=1,Ji="";function ys(i,r){vo[Eo++]=tc,vo[Eo++]=Eh,Eh=i,tc=r}function Tv(i,r,o){ei[ti++]=Xi,ei[ti++]=Ji,ei[ti++]=rr,rr=i;var c=Xi;i=Ji;var d=32-At(c)-1;c&=~(1<<d),o+=1;var m=32-At(r)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Xi=1<<32-At(r)+d|o<<d|c,Ji=m+i}else Xi=1<<m|o<<d|c,Ji=i}function Tm(i){i.return!==null&&(ys(i,1),Tv(i,1,0))}function bm(i){for(;i===Eh;)Eh=vo[--Eo],vo[Eo]=null,tc=vo[--Eo],vo[Eo]=null;for(;i===rr;)rr=ei[--ti],ei[ti]=null,Ji=ei[--ti],ei[ti]=null,Xi=ei[--ti],ei[ti]=null}function bv(i,r){ei[ti++]=Xi,ei[ti++]=Ji,ei[ti++]=rr,Xi=r.id,Ji=r.overflow,rr=i}var sn=null,ft=null,He=!1,ar=null,ni=!1,wm=Error(s(519));function or(i){var r=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nc(Zn(r,i)),wm}function wv(i){var r=i.stateNode,o=i.type,c=i.memoizedProps;switch(r[Mt]=i,r[$t]=c,o){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(o=0;o<Sc.length;o++)Me(Sc[o],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":Me("invalid",r),Zu(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Me("invalid",r);break;case"textarea":Me("invalid",r),Js(r,c.value,c.defaultValue,c.children)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||c.suppressHydrationWarning===!0||z0(r.textContent,o)?(c.popover!=null&&(Me("beforetoggle",r),Me("toggle",r)),c.onScroll!=null&&Me("scroll",r),c.onScrollEnd!=null&&Me("scrollend",r),c.onClick!=null&&(r.onclick=gi),r=!0):r=!1,r||or(i,!0)}function Sv(i){for(sn=i.return;sn;)switch(sn.tag){case 5:case 31:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:sn=sn.return}}function To(i){if(i!==sn)return!1;if(!He)return Sv(i),He=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Fp(i.type,i.memoizedProps)),o=!o),o&&ft&&or(i),Sv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));ft=W0(i)}else if(r===31){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));ft=W0(i)}else r===27?(r=ft,Tr(i.type)?(i=Kp,Kp=null,ft=i):ft=r):ft=sn?si(i.stateNode.nextSibling):null;return!0}function va(){ft=sn=null,He=!1}function Sm(){var i=ar;return i!==null&&(Nn===null?Nn=i:Nn.push.apply(Nn,i),ar=null),i}function nc(i){ar===null?ar=[i]:ar.push(i)}var Am=k(null),Ea=null,vs=null;function lr(i,r,o){ie(Am,r._currentValue),r._currentValue=o}function Es(i){i._currentValue=Am.current,Y(Am)}function xm(i,r,o){for(;i!==null;){var c=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),i===o)break;i=i.return}}function Cm(i,r,o,c){var d=i.child;for(d!==null&&(d.return=i);d!==null;){var m=d.dependencies;if(m!==null){var v=d.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=d;for(var N=0;N<r.length;N++)if(w.context===r[N]){m.lanes|=o,w=m.alternate,w!==null&&(w.lanes|=o),xm(m.return,o,i),c||(v=null);break e}m=w.next}}else if(d.tag===18){if(v=d.return,v===null)throw Error(s(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),xm(v,o,i),v=null}else v=d.child;if(v!==null)v.return=d;else for(v=d;v!==null;){if(v===i){v=null;break}if(d=v.sibling,d!==null){d.return=v.return,v=d;break}v=v.return}d=v}}function bo(i,r,o,c){i=null;for(var d=r,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var v=d.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var w=d.type;Vn(d.pendingProps.value,v.value)||(i!==null?i.push(w):i=[w])}}else if(d===he.current){if(v=d.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(i!==null?i.push(Rc):i=[Rc])}d=d.return}i!==null&&Cm(r,i,o,c),r.flags|=262144}function Th(i){for(i=i.firstContext;i!==null;){if(!Vn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Ta(i){Ea=i,vs=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function rn(i){return Av(Ea,i)}function bh(i,r){return Ea===null&&Ta(i),Av(i,r)}function Av(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},vs===null){if(i===null)throw Error(s(308));vs=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else vs=vs.next=r;return o}var PI=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,c){i.push(c)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},LI=n.unstable_scheduleCallback,VI=n.unstable_NormalPriority,Vt={$$typeof:me,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Im(){return{controller:new PI,data:new Map,refCount:0}}function ic(i){i.refCount--,i.refCount===0&&LI(VI,function(){i.controller.abort()})}var sc=null,Rm=0,wo=0,So=null;function jI(i,r){if(sc===null){var o=sc=[];Rm=0,wo=Dp(),So={status:"pending",value:void 0,then:function(c){o.push(c)}}}return Rm++,r.then(xv,xv),r}function xv(){if(--Rm===0&&sc!==null){So!==null&&(So.status="fulfilled");var i=sc;sc=null,wo=0,So=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function UI(i,r){var o=[],c={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return i.then(function(){c.status="fulfilled",c.value=r;for(var d=0;d<o.length;d++)(0,o[d])(r)},function(d){for(c.status="rejected",c.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),c}var Cv=K.S;K.S=function(i,r){u0=yn(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&jI(i,r),Cv!==null&&Cv(i,r)};var ba=k(null);function Nm(){var i=ba.current;return i!==null?i:ct.pooledCache}function wh(i,r){r===null?ie(ba,ba.current):ie(ba,r.pool)}function Iv(){var i=Nm();return i===null?null:{parent:Vt._currentValue,pool:i}}var Ao=Error(s(460)),Om=Error(s(474)),Sh=Error(s(542)),Ah={then:function(){}};function Rv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function Nv(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(gi,gi),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Dv(i),i;default:if(typeof r.status=="string")r.then(gi,gi);else{if(i=ct,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(c){if(r.status==="pending"){var d=r;d.status="fulfilled",d.value=c}},function(c){if(r.status==="pending"){var d=r;d.status="rejected",d.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,Dv(i),i}throw Sa=r,Ao}}function wa(i){try{var r=i._init;return r(i._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Sa=o,Ao):o}}var Sa=null;function Ov(){if(Sa===null)throw Error(s(459));var i=Sa;return Sa=null,i}function Dv(i){if(i===Ao||i===Sh)throw Error(s(483))}var xo=null,rc=0;function xh(i){var r=rc;return rc+=1,xo===null&&(xo=[]),Nv(xo,i,r)}function ac(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Ch(i,r){throw r.$$typeof===S?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function kv(i){function r(L,O){if(i){var U=L.deletions;U===null?(L.deletions=[O],L.flags|=16):U.push(O)}}function o(L,O){if(!i)return null;for(;O!==null;)r(L,O),O=O.sibling;return null}function c(L){for(var O=new Map;L!==null;)L.key!==null?O.set(L.key,L):O.set(L.index,L),L=L.sibling;return O}function d(L,O){return L=_s(L,O),L.index=0,L.sibling=null,L}function m(L,O,U){return L.index=U,i?(U=L.alternate,U!==null?(U=U.index,U<O?(L.flags|=67108866,O):U):(L.flags|=67108866,O)):(L.flags|=1048576,O)}function v(L){return i&&L.alternate===null&&(L.flags|=67108866),L}function w(L,O,U,Q){return O===null||O.tag!==6?(O=vm(U,L.mode,Q),O.return=L,O):(O=d(O,U),O.return=L,O)}function N(L,O,U,Q){var pe=U.type;return pe===$?G(L,O,U.props.children,Q,U.key):O!==null&&(O.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===x&&wa(pe)===O.type)?(O=d(O,U.props),ac(O,U),O.return=L,O):(O=vh(U.type,U.key,U.props,null,L.mode,Q),ac(O,U),O.return=L,O)}function z(L,O,U,Q){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=Em(U,L.mode,Q),O.return=L,O):(O=d(O,U.children||[]),O.return=L,O)}function G(L,O,U,Q,pe){return O===null||O.tag!==7?(O=ya(U,L.mode,Q,pe),O.return=L,O):(O=d(O,U),O.return=L,O)}function W(L,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=vm(""+O,L.mode,U),O.return=L,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case M:return U=vh(O.type,O.key,O.props,null,L.mode,U),ac(U,O),U.return=L,U;case H:return O=Em(O,L.mode,U),O.return=L,O;case x:return O=wa(O),W(L,O,U)}if(Nt(O)||V(O))return O=ya(O,L.mode,U,null),O.return=L,O;if(typeof O.then=="function")return W(L,xh(O),U);if(O.$$typeof===me)return W(L,bh(L,O),U);Ch(L,O)}return null}function F(L,O,U,Q){var pe=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return pe!==null?null:w(L,O,""+U,Q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case M:return U.key===pe?N(L,O,U,Q):null;case H:return U.key===pe?z(L,O,U,Q):null;case x:return U=wa(U),F(L,O,U,Q)}if(Nt(U)||V(U))return pe!==null?null:G(L,O,U,Q,null);if(typeof U.then=="function")return F(L,O,xh(U),Q);if(U.$$typeof===me)return F(L,O,bh(L,U),Q);Ch(L,U)}return null}function q(L,O,U,Q,pe){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return L=L.get(U)||null,w(O,L,""+Q,pe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return L=L.get(Q.key===null?U:Q.key)||null,N(O,L,Q,pe);case H:return L=L.get(Q.key===null?U:Q.key)||null,z(O,L,Q,pe);case x:return Q=wa(Q),q(L,O,U,Q,pe)}if(Nt(Q)||V(Q))return L=L.get(U)||null,G(O,L,Q,pe,null);if(typeof Q.then=="function")return q(L,O,U,xh(Q),pe);if(Q.$$typeof===me)return q(L,O,U,bh(O,Q),pe);Ch(O,Q)}return null}function oe(L,O,U,Q){for(var pe=null,Ge=null,ue=O,Oe=O=0,Ue=null;ue!==null&&Oe<U.length;Oe++){ue.index>Oe?(Ue=ue,ue=null):Ue=ue.sibling;var Ke=F(L,ue,U[Oe],Q);if(Ke===null){ue===null&&(ue=Ue);break}i&&ue&&Ke.alternate===null&&r(L,ue),O=m(Ke,O,Oe),Ge===null?pe=Ke:Ge.sibling=Ke,Ge=Ke,ue=Ue}if(Oe===U.length)return o(L,ue),He&&ys(L,Oe),pe;if(ue===null){for(;Oe<U.length;Oe++)ue=W(L,U[Oe],Q),ue!==null&&(O=m(ue,O,Oe),Ge===null?pe=ue:Ge.sibling=ue,Ge=ue);return He&&ys(L,Oe),pe}for(ue=c(ue);Oe<U.length;Oe++)Ue=q(ue,L,Oe,U[Oe],Q),Ue!==null&&(i&&Ue.alternate!==null&&ue.delete(Ue.key===null?Oe:Ue.key),O=m(Ue,O,Oe),Ge===null?pe=Ue:Ge.sibling=Ue,Ge=Ue);return i&&ue.forEach(function(xr){return r(L,xr)}),He&&ys(L,Oe),pe}function ye(L,O,U,Q){if(U==null)throw Error(s(151));for(var pe=null,Ge=null,ue=O,Oe=O=0,Ue=null,Ke=U.next();ue!==null&&!Ke.done;Oe++,Ke=U.next()){ue.index>Oe?(Ue=ue,ue=null):Ue=ue.sibling;var xr=F(L,ue,Ke.value,Q);if(xr===null){ue===null&&(ue=Ue);break}i&&ue&&xr.alternate===null&&r(L,ue),O=m(xr,O,Oe),Ge===null?pe=xr:Ge.sibling=xr,Ge=xr,ue=Ue}if(Ke.done)return o(L,ue),He&&ys(L,Oe),pe;if(ue===null){for(;!Ke.done;Oe++,Ke=U.next())Ke=W(L,Ke.value,Q),Ke!==null&&(O=m(Ke,O,Oe),Ge===null?pe=Ke:Ge.sibling=Ke,Ge=Ke);return He&&ys(L,Oe),pe}for(ue=c(ue);!Ke.done;Oe++,Ke=U.next())Ke=q(ue,L,Oe,Ke.value,Q),Ke!==null&&(i&&Ke.alternate!==null&&ue.delete(Ke.key===null?Oe:Ke.key),O=m(Ke,O,Oe),Ge===null?pe=Ke:Ge.sibling=Ke,Ge=Ke);return i&&ue.forEach(function($1){return r(L,$1)}),He&&ys(L,Oe),pe}function ot(L,O,U,Q){if(typeof U=="object"&&U!==null&&U.type===$&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case M:e:{for(var pe=U.key;O!==null;){if(O.key===pe){if(pe=U.type,pe===$){if(O.tag===7){o(L,O.sibling),Q=d(O,U.props.children),Q.return=L,L=Q;break e}}else if(O.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===x&&wa(pe)===O.type){o(L,O.sibling),Q=d(O,U.props),ac(Q,U),Q.return=L,L=Q;break e}o(L,O);break}else r(L,O);O=O.sibling}U.type===$?(Q=ya(U.props.children,L.mode,Q,U.key),Q.return=L,L=Q):(Q=vh(U.type,U.key,U.props,null,L.mode,Q),ac(Q,U),Q.return=L,L=Q)}return v(L);case H:e:{for(pe=U.key;O!==null;){if(O.key===pe)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){o(L,O.sibling),Q=d(O,U.children||[]),Q.return=L,L=Q;break e}else{o(L,O);break}else r(L,O);O=O.sibling}Q=Em(U,L.mode,Q),Q.return=L,L=Q}return v(L);case x:return U=wa(U),ot(L,O,U,Q)}if(Nt(U))return oe(L,O,U,Q);if(V(U)){if(pe=V(U),typeof pe!="function")throw Error(s(150));return U=pe.call(U),ye(L,O,U,Q)}if(typeof U.then=="function")return ot(L,O,xh(U),Q);if(U.$$typeof===me)return ot(L,O,bh(L,U),Q);Ch(L,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(o(L,O.sibling),Q=d(O,U),Q.return=L,L=Q):(o(L,O),Q=vm(U,L.mode,Q),Q.return=L,L=Q),v(L)):o(L,O)}return function(L,O,U,Q){try{rc=0;var pe=ot(L,O,U,Q);return xo=null,pe}catch(ue){if(ue===Ao||ue===Sh)throw ue;var Ge=jn(29,ue,null,L.mode);return Ge.lanes=Q,Ge.return=L,Ge}finally{}}}var Aa=kv(!0),Mv=kv(!1),cr=!1;function Dm(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function km(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function ur(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function hr(i,r,o){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,($e&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,r=yh(i),_v(i,null,o),r}return _h(i,c,r,o),yh(i)}function oc(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var c=r.lanes;c&=i.pendingLanes,o|=c,r.lanes=o,Ml(i,o)}}function Mm(i,r){var o=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?d=m=r:m=m.next=r}else d=m=r;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Pm=!1;function lc(){if(Pm){var i=So;if(i!==null)throw i}}function cc(i,r,o,c){Pm=!1;var d=i.updateQueue;cr=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var N=w,z=N.next;N.next=null,v===null?m=z:v.next=z,v=N;var G=i.alternate;G!==null&&(G=G.updateQueue,w=G.lastBaseUpdate,w!==v&&(w===null?G.firstBaseUpdate=z:w.next=z,G.lastBaseUpdate=N))}if(m!==null){var W=d.baseState;v=0,G=z=N=null,w=m;do{var F=w.lane&-536870913,q=F!==w.lane;if(q?(je&F)===F:(c&F)===F){F!==0&&F===wo&&(Pm=!0),G!==null&&(G=G.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var oe=i,ye=w;F=r;var ot=o;switch(ye.tag){case 1:if(oe=ye.payload,typeof oe=="function"){W=oe.call(ot,W,F);break e}W=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ye.payload,F=typeof oe=="function"?oe.call(ot,W,F):oe,F==null)break e;W=b({},W,F);break e;case 2:cr=!0}}F=w.callback,F!==null&&(i.flags|=64,q&&(i.flags|=8192),q=d.callbacks,q===null?d.callbacks=[F]:q.push(F))}else q={lane:F,tag:w.tag,payload:w.payload,callback:w.callback,next:null},G===null?(z=G=q,N=W):G=G.next=q,v|=F;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;q=w,w=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);G===null&&(N=W),d.baseState=N,d.firstBaseUpdate=z,d.lastBaseUpdate=G,m===null&&(d.shared.lanes=0),gr|=v,i.lanes=v,i.memoizedState=W}}function Pv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function Lv(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)Pv(o[i],r)}var Co=k(null),Ih=k(0);function Vv(i,r){i=Rs,ie(Ih,i),ie(Co,r),Rs=i|r.baseLanes}function Lm(){ie(Ih,Rs),ie(Co,Co.current)}function Vm(){Rs=Ih.current,Y(Co),Y(Ih)}var Un=k(null),ii=null;function dr(i){var r=i.alternate;ie(Ct,Ct.current&1),ie(Un,i),ii===null&&(r===null||Co.current!==null||r.memoizedState!==null)&&(ii=i)}function jm(i){ie(Ct,Ct.current),ie(Un,i),ii===null&&(ii=i)}function jv(i){i.tag===22?(ie(Ct,Ct.current),ie(Un,i),ii===null&&(ii=i)):fr()}function fr(){ie(Ct,Ct.current),ie(Un,Un.current)}function zn(i){Y(Un),ii===i&&(ii=null),Y(Ct)}var Ct=k(0);function Rh(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||qp(o)||Gp(o)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ts=0,Ne=null,rt=null,jt=null,Nh=!1,Io=!1,xa=!1,Oh=0,uc=0,Ro=null,zI=0;function Tt(){throw Error(s(321))}function Um(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!Vn(i[o],r[o]))return!1;return!0}function zm(i,r,o,c,d,m){return Ts=m,Ne=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,K.H=i===null||i.memoizedState===null?TE:tp,xa=!1,m=o(c,d),xa=!1,Io&&(m=zv(r,o,c,d)),Uv(i),m}function Uv(i){K.H=fc;var r=rt!==null&&rt.next!==null;if(Ts=0,jt=rt=Ne=null,Nh=!1,uc=0,Ro=null,r)throw Error(s(300));i===null||Ut||(i=i.dependencies,i!==null&&Th(i)&&(Ut=!0))}function zv(i,r,o,c){Ne=i;var d=0;do{if(Io&&(Ro=null),uc=0,Io=!1,25<=d)throw Error(s(301));if(d+=1,jt=rt=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}K.H=bE,m=r(o,c)}while(Io);return m}function FI(){var i=K.H,r=i.useState()[0];return r=typeof r.then=="function"?hc(r):r,i=i.useState()[0],(rt!==null?rt.memoizedState:null)!==i&&(Ne.flags|=1024),r}function Fm(){var i=Oh!==0;return Oh=0,i}function Bm(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Hm(i){if(Nh){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Nh=!1}Ts=0,jt=rt=Ne=null,Io=!1,uc=Oh=0,Ro=null}function En(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Ne.memoizedState=jt=i:jt=jt.next=i,jt}function It(){if(rt===null){var i=Ne.alternate;i=i!==null?i.memoizedState:null}else i=rt.next;var r=jt===null?Ne.memoizedState:jt.next;if(r!==null)jt=r,rt=i;else{if(i===null)throw Ne.alternate===null?Error(s(467)):Error(s(310));rt=i,i={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},jt===null?Ne.memoizedState=jt=i:jt=jt.next=i}return jt}function Dh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hc(i){var r=uc;return uc+=1,Ro===null&&(Ro=[]),i=Nv(Ro,i,r),r=Ne,(jt===null?r.memoizedState:jt.next)===null&&(r=r.alternate,K.H=r===null||r.memoizedState===null?TE:tp),i}function kh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return hc(i);if(i.$$typeof===me)return rn(i)}throw Error(s(438,String(i)))}function qm(i){var r=null,o=Ne.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var c=Ne.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(d){return d.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Dh(),Ne.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),c=0;c<i;c++)o[c]=P;return r.index++,o}function bs(i,r){return typeof r=="function"?r(i):r}function Mh(i){var r=It();return Gm(r,rt,i)}function Gm(i,r,o){var c=i.queue;if(c===null)throw Error(s(311));c.lastRenderedReducer=o;var d=i.baseQueue,m=c.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}r.baseQueue=d=m,c.pending=null}if(m=i.baseState,d===null)i.memoizedState=m;else{r=d.next;var w=v=null,N=null,z=r,G=!1;do{var W=z.lane&-536870913;if(W!==z.lane?(je&W)===W:(Ts&W)===W){var F=z.revertLane;if(F===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),W===wo&&(G=!0);else if((Ts&F)===F){z=z.next,F===wo&&(G=!0);continue}else W={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},N===null?(w=N=W,v=m):N=N.next=W,Ne.lanes|=F,gr|=F;W=z.action,xa&&o(m,W),m=z.hasEagerState?z.eagerState:o(m,W)}else F={lane:W,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},N===null?(w=N=F,v=m):N=N.next=F,Ne.lanes|=W,gr|=W;z=z.next}while(z!==null&&z!==r);if(N===null?v=m:N.next=w,!Vn(m,i.memoizedState)&&(Ut=!0,G&&(o=So,o!==null)))throw o;i.memoizedState=m,i.baseState=v,i.baseQueue=N,c.lastRenderedState=m}return d===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Km(i){var r=It(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var c=o.dispatch,d=o.pending,m=r.memoizedState;if(d!==null){o.pending=null;var v=d=d.next;do m=i(m,v.action),v=v.next;while(v!==d);Vn(m,r.memoizedState)||(Ut=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,c]}function Fv(i,r,o){var c=Ne,d=It(),m=He;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var v=!Vn((rt||d).memoizedState,o);if(v&&(d.memoizedState=o,Ut=!0),d=d.queue,Wm(qv.bind(null,c,d,i),[i]),d.getSnapshot!==r||v||jt!==null&&jt.memoizedState.tag&1){if(c.flags|=2048,No(9,{destroy:void 0},Hv.bind(null,c,d,o,r),null),ct===null)throw Error(s(349));m||(Ts&127)!==0||Bv(c,r,o)}return o}function Bv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Ne.updateQueue,r===null?(r=Dh(),Ne.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Hv(i,r,o,c){r.value=o,r.getSnapshot=c,Gv(r)&&Kv(i)}function qv(i,r,o){return o(function(){Gv(r)&&Kv(i)})}function Gv(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!Vn(i,o)}catch{return!0}}function Kv(i){var r=_a(i,2);r!==null&&On(r,i,2)}function Ym(i){var r=En();if(typeof i=="function"){var o=i;if(i=o(),xa){Yn(!0);try{o()}finally{Yn(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:i},r}function Yv(i,r,o,c){return i.baseState=o,Gm(i,rt,typeof c=="function"?c:bs)}function BI(i,r,o,c,d){if(Vh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:d,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};K.T!==null?o(!0):m.isTransition=!1,c(m),o=r.pending,o===null?(m.next=r.pending=m,Qv(r,m)):(m.next=o.next,r.pending=o.next=m)}}function Qv(i,r){var o=r.action,c=r.payload,d=i.state;if(r.isTransition){var m=K.T,v={};K.T=v;try{var w=o(d,c),N=K.S;N!==null&&N(v,w),Wv(i,r,w)}catch(z){Qm(i,r,z)}finally{m!==null&&v.types!==null&&(m.types=v.types),K.T=m}}else try{m=o(d,c),Wv(i,r,m)}catch(z){Qm(i,r,z)}}function Wv(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){$v(i,r,c)},function(c){return Qm(i,r,c)}):$v(i,r,o)}function $v(i,r,o){r.status="fulfilled",r.value=o,Xv(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,Qv(i,o)))}function Qm(i,r,o){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=o,Xv(r),r=r.next;while(r!==c)}i.action=null}function Xv(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function Jv(i,r){return r}function Zv(i,r){if(He){var o=ct.formState;if(o!==null){e:{var c=Ne;if(He){if(ft){t:{for(var d=ft,m=ni;d.nodeType!==8;){if(!m){d=null;break t}if(d=si(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){ft=si(d.nextSibling),c=d.data==="F!";break e}}or(c)}c=!1}c&&(r=o[0])}}return o=En(),o.memoizedState=o.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jv,lastRenderedState:r},o.queue=c,o=yE.bind(null,Ne,c),c.dispatch=o,c=Ym(!1),m=ep.bind(null,Ne,!1,c.queue),c=En(),d={state:r,dispatch:null,action:i,pending:null},c.queue=d,o=BI.bind(null,Ne,d,m,o),d.dispatch=o,c.memoizedState=i,[r,o,!1]}function eE(i){var r=It();return tE(r,rt,i)}function tE(i,r,o){if(r=Gm(i,r,Jv)[0],i=Mh(bs)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var c=hc(r)}catch(v){throw v===Ao?Sh:v}else c=r;r=It();var d=r.queue,m=d.dispatch;return o!==r.memoizedState&&(Ne.flags|=2048,No(9,{destroy:void 0},HI.bind(null,d,o),null)),[c,m,i]}function HI(i,r){i.action=r}function nE(i){var r=It(),o=rt;if(o!==null)return tE(r,o,i);It(),r=r.memoizedState,o=It();var c=o.queue.dispatch;return o.memoizedState=i,[r,c,!1]}function No(i,r,o,c){return i={tag:i,create:o,deps:c,inst:r,next:null},r=Ne.updateQueue,r===null&&(r=Dh(),Ne.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(c=o.next,o.next=i,i.next=c,r.lastEffect=i),i}function iE(){return It().memoizedState}function Ph(i,r,o,c){var d=En();Ne.flags|=i,d.memoizedState=No(1|r,{destroy:void 0},o,c===void 0?null:c)}function Lh(i,r,o,c){var d=It();c=c===void 0?null:c;var m=d.memoizedState.inst;rt!==null&&c!==null&&Um(c,rt.memoizedState.deps)?d.memoizedState=No(r,m,o,c):(Ne.flags|=i,d.memoizedState=No(1|r,m,o,c))}function sE(i,r){Ph(8390656,8,i,r)}function Wm(i,r){Lh(2048,8,i,r)}function qI(i){Ne.flags|=4;var r=Ne.updateQueue;if(r===null)r=Dh(),Ne.updateQueue=r,r.events=[i];else{var o=r.events;o===null?r.events=[i]:o.push(i)}}function rE(i){var r=It().memoizedState;return qI({ref:r,nextImpl:i}),function(){if(($e&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}function aE(i,r){return Lh(4,2,i,r)}function oE(i,r){return Lh(4,4,i,r)}function lE(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function cE(i,r,o){o=o!=null?o.concat([i]):null,Lh(4,4,lE.bind(null,r,i),o)}function $m(){}function uE(i,r){var o=It();r=r===void 0?null:r;var c=o.memoizedState;return r!==null&&Um(r,c[1])?c[0]:(o.memoizedState=[i,r],i)}function hE(i,r){var o=It();r=r===void 0?null:r;var c=o.memoizedState;if(r!==null&&Um(r,c[1]))return c[0];if(c=i(),xa){Yn(!0);try{i()}finally{Yn(!1)}}return o.memoizedState=[c,r],c}function Xm(i,r,o){return o===void 0||(Ts&1073741824)!==0&&(je&261930)===0?i.memoizedState=r:(i.memoizedState=o,i=d0(),Ne.lanes|=i,gr|=i,o)}function dE(i,r,o,c){return Vn(o,r)?o:Co.current!==null?(i=Xm(i,o,c),Vn(i,r)||(Ut=!0),i):(Ts&42)===0||(Ts&1073741824)!==0&&(je&261930)===0?(Ut=!0,i.memoizedState=o):(i=d0(),Ne.lanes|=i,gr|=i,r)}function fE(i,r,o,c,d){var m=se.p;se.p=m!==0&&8>m?m:8;var v=K.T,w={};K.T=w,ep(i,!1,r,o);try{var N=d(),z=K.S;if(z!==null&&z(w,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var G=UI(N,c);dc(i,r,G,Hn(i))}else dc(i,r,c,Hn(i))}catch(W){dc(i,r,{then:function(){},status:"rejected",reason:W},Hn())}finally{se.p=m,v!==null&&w.types!==null&&(v.types=w.types),K.T=v}}function GI(){}function Jm(i,r,o,c){if(i.tag!==5)throw Error(s(476));var d=mE(i).queue;fE(i,d,r,le,o===null?GI:function(){return pE(i),o(c)})}function mE(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:le},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function pE(i){var r=mE(i);r.next===null&&(r=i.alternate.memoizedState),dc(i,r.next.queue,{},Hn())}function Zm(){return rn(Rc)}function gE(){return It().memoizedState}function _E(){return It().memoizedState}function KI(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=Hn();i=ur(o);var c=hr(r,i,o);c!==null&&(On(c,r,o),oc(c,r,o)),r={cache:Im()},i.payload=r;return}r=r.return}}function YI(i,r,o){var c=Hn();o={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vh(i)?vE(r,o):(o=_m(i,r,o,c),o!==null&&(On(o,i,c),EE(o,r,c)))}function yE(i,r,o){var c=Hn();dc(i,r,o,c)}function dc(i,r,o,c){var d={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Vh(i))vE(r,d);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var v=r.lastRenderedState,w=m(v,o);if(d.hasEagerState=!0,d.eagerState=w,Vn(w,v))return _h(i,r,d,0),ct===null&&gh(),!1}catch{}finally{}if(o=_m(i,r,d,c),o!==null)return On(o,i,c),EE(o,r,c),!0}return!1}function ep(i,r,o,c){if(c={lane:2,revertLane:Dp(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},Vh(i)){if(r)throw Error(s(479))}else r=_m(i,o,c,2),r!==null&&On(r,i,2)}function Vh(i){var r=i.alternate;return i===Ne||r!==null&&r===Ne}function vE(i,r){Io=Nh=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function EE(i,r,o){if((o&4194048)!==0){var c=r.lanes;c&=i.pendingLanes,o|=c,r.lanes=o,Ml(i,o)}}var fc={readContext:rn,use:kh,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useLayoutEffect:Tt,useInsertionEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useSyncExternalStore:Tt,useId:Tt,useHostTransitionStatus:Tt,useFormState:Tt,useActionState:Tt,useOptimistic:Tt,useMemoCache:Tt,useCacheRefresh:Tt};fc.useEffectEvent=Tt;var TE={readContext:rn,use:kh,useCallback:function(i,r){return En().memoizedState=[i,r===void 0?null:r],i},useContext:rn,useEffect:sE,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Ph(4194308,4,lE.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Ph(4194308,4,i,r)},useInsertionEffect:function(i,r){Ph(4,2,i,r)},useMemo:function(i,r){var o=En();r=r===void 0?null:r;var c=i();if(xa){Yn(!0);try{i()}finally{Yn(!1)}}return o.memoizedState=[c,r],c},useReducer:function(i,r,o){var c=En();if(o!==void 0){var d=o(r);if(xa){Yn(!0);try{o(r)}finally{Yn(!1)}}}else d=r;return c.memoizedState=c.baseState=d,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:d},c.queue=i,i=i.dispatch=YI.bind(null,Ne,i),[c.memoizedState,i]},useRef:function(i){var r=En();return i={current:i},r.memoizedState=i},useState:function(i){i=Ym(i);var r=i.queue,o=yE.bind(null,Ne,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:$m,useDeferredValue:function(i,r){var o=En();return Xm(o,i,r)},useTransition:function(){var i=Ym(!1);return i=fE.bind(null,Ne,i.queue,!0,!1),En().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var c=Ne,d=En();if(He){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),ct===null)throw Error(s(349));(je&127)!==0||Bv(c,r,o)}d.memoizedState=o;var m={value:o,getSnapshot:r};return d.queue=m,sE(qv.bind(null,c,m,i),[i]),c.flags|=2048,No(9,{destroy:void 0},Hv.bind(null,c,m,o,r),null),o},useId:function(){var i=En(),r=ct.identifierPrefix;if(He){var o=Ji,c=Xi;o=(c&~(1<<32-At(c)-1)).toString(32)+o,r="_"+r+"R_"+o,o=Oh++,0<o&&(r+="H"+o.toString(32)),r+="_"}else o=zI++,r="_"+r+"r_"+o.toString(32)+"_";return i.memoizedState=r},useHostTransitionStatus:Zm,useFormState:Zv,useActionState:Zv,useOptimistic:function(i){var r=En();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=ep.bind(null,Ne,!0,o),o.dispatch=r,[i,r]},useMemoCache:qm,useCacheRefresh:function(){return En().memoizedState=KI.bind(null,Ne)},useEffectEvent:function(i){var r=En(),o={impl:i};return r.memoizedState=o,function(){if(($e&2)!==0)throw Error(s(440));return o.impl.apply(void 0,arguments)}}},tp={readContext:rn,use:kh,useCallback:uE,useContext:rn,useEffect:Wm,useImperativeHandle:cE,useInsertionEffect:aE,useLayoutEffect:oE,useMemo:hE,useReducer:Mh,useRef:iE,useState:function(){return Mh(bs)},useDebugValue:$m,useDeferredValue:function(i,r){var o=It();return dE(o,rt.memoizedState,i,r)},useTransition:function(){var i=Mh(bs)[0],r=It().memoizedState;return[typeof i=="boolean"?i:hc(i),r]},useSyncExternalStore:Fv,useId:gE,useHostTransitionStatus:Zm,useFormState:eE,useActionState:eE,useOptimistic:function(i,r){var o=It();return Yv(o,rt,i,r)},useMemoCache:qm,useCacheRefresh:_E};tp.useEffectEvent=rE;var bE={readContext:rn,use:kh,useCallback:uE,useContext:rn,useEffect:Wm,useImperativeHandle:cE,useInsertionEffect:aE,useLayoutEffect:oE,useMemo:hE,useReducer:Km,useRef:iE,useState:function(){return Km(bs)},useDebugValue:$m,useDeferredValue:function(i,r){var o=It();return rt===null?Xm(o,i,r):dE(o,rt.memoizedState,i,r)},useTransition:function(){var i=Km(bs)[0],r=It().memoizedState;return[typeof i=="boolean"?i:hc(i),r]},useSyncExternalStore:Fv,useId:gE,useHostTransitionStatus:Zm,useFormState:nE,useActionState:nE,useOptimistic:function(i,r){var o=It();return rt!==null?Yv(o,rt,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:qm,useCacheRefresh:_E};bE.useEffectEvent=rE;function np(i,r,o,c){r=i.memoizedState,o=o(c,r),o=o==null?r:b({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var ip={enqueueSetState:function(i,r,o){i=i._reactInternals;var c=Hn(),d=ur(c);d.payload=r,o!=null&&(d.callback=o),r=hr(i,d,c),r!==null&&(On(r,i,c),oc(r,i,c))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var c=Hn(),d=ur(c);d.tag=1,d.payload=r,o!=null&&(d.callback=o),r=hr(i,d,c),r!==null&&(On(r,i,c),oc(r,i,c))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=Hn(),c=ur(o);c.tag=2,r!=null&&(c.callback=r),r=hr(i,c,o),r!==null&&(On(r,i,o),oc(r,i,o))}};function wE(i,r,o,c,d,m,v){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,m,v):r.prototype&&r.prototype.isPureReactComponent?!Zl(o,c)||!Zl(d,m):!0}function SE(i,r,o,c){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==i&&ip.enqueueReplaceState(r,r.state,null)}function Ca(i,r){var o=r;if("ref"in r){o={};for(var c in r)c!=="ref"&&(o[c]=r[c])}if(i=i.defaultProps){o===r&&(o=b({},o));for(var d in i)o[d]===void 0&&(o[d]=i[d])}return o}function AE(i){ph(i)}function xE(i){console.error(i)}function CE(i){ph(i)}function jh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function IE(i,r,o){try{var c=i.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function sp(i,r,o){return o=ur(o),o.tag=3,o.payload={element:null},o.callback=function(){jh(i,r)},o}function RE(i){return i=ur(i),i.tag=3,i}function NE(i,r,o,c){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=c.value;i.payload=function(){return d(m)},i.callback=function(){IE(r,o,c)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(i.callback=function(){IE(r,o,c),typeof d!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var w=c.stack;this.componentDidCatch(c.value,{componentStack:w!==null?w:""})})}function QI(i,r,o,c,d){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=o.alternate,r!==null&&bo(r,o,d,!0),o=Un.current,o!==null){switch(o.tag){case 31:case 13:return ii===null?$h():o.alternate===null&&bt===0&&(bt=3),o.flags&=-257,o.flags|=65536,o.lanes=d,c===Ah?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([c]):r.add(c),Rp(i,c,d)),!1;case 22:return o.flags|=65536,c===Ah?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([c]):o.add(c)),Rp(i,c,d)),!1}throw Error(s(435,o.tag))}return Rp(i,c,d),$h(),!1}if(He)return r=Un.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=d,c!==wm&&(i=Error(s(422),{cause:c}),nc(Zn(i,o)))):(c!==wm&&(r=Error(s(423),{cause:c}),nc(Zn(r,o))),i=i.current.alternate,i.flags|=65536,d&=-d,i.lanes|=d,c=Zn(c,o),d=sp(i.stateNode,c,d),Mm(i,d),bt!==4&&(bt=2)),!1;var m=Error(s(520),{cause:c});if(m=Zn(m,o),Tc===null?Tc=[m]:Tc.push(m),bt!==4&&(bt=2),r===null)return!0;c=Zn(c,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=d&-d,o.lanes|=i,i=sp(o.stateNode,c,i),Mm(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(_r===null||!_r.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=RE(d),NE(d,i,o,c),Mm(o,d),!1}o=o.return}while(o!==null);return!1}var rp=Error(s(461)),Ut=!1;function an(i,r,o,c){r.child=i===null?Mv(r,null,o,c):Aa(r,i.child,o,c)}function OE(i,r,o,c,d){o=o.render;var m=r.ref;if("ref"in c){var v={};for(var w in c)w!=="ref"&&(v[w]=c[w])}else v=c;return Ta(r),c=zm(i,r,o,v,m,d),w=Fm(),i!==null&&!Ut?(Bm(i,r,d),ws(i,r,d)):(He&&w&&Tm(r),r.flags|=1,an(i,r,c,d),r.child)}function DE(i,r,o,c,d){if(i===null){var m=o.type;return typeof m=="function"&&!ym(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,kE(i,r,m,c,d)):(i=vh(o.type,null,c,r,r.mode,d),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!fp(i,d)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:Zl,o(v,c)&&i.ref===r.ref)return ws(i,r,d)}return r.flags|=1,i=_s(m,c),i.ref=r.ref,i.return=r,r.child=i}function kE(i,r,o,c,d){if(i!==null){var m=i.memoizedProps;if(Zl(m,c)&&i.ref===r.ref)if(Ut=!1,r.pendingProps=c=m,fp(i,d))(i.flags&131072)!==0&&(Ut=!0);else return r.lanes=i.lanes,ws(i,r,d)}return ap(i,r,o,c,d)}function ME(i,r,o,c){var d=c.children,m=i!==null?i.memoizedState:null;if(i===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((r.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,i!==null){for(c=r.child=i.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;c=d&~m}else c=0,r.child=null;return PE(i,r,m,o,c)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&wh(r,m!==null?m.cachePool:null),m!==null?Vv(r,m):Lm(),jv(r);else return c=r.lanes=536870912,PE(i,r,m!==null?m.baseLanes|o:o,o,c)}else m!==null?(wh(r,m.cachePool),Vv(r,m),fr(),r.memoizedState=null):(i!==null&&wh(r,null),Lm(),fr());return an(i,r,d,o),r.child}function mc(i,r){return i!==null&&i.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function PE(i,r,o,c,d){var m=Nm();return m=m===null?null:{parent:Vt._currentValue,pool:m},r.memoizedState={baseLanes:o,cachePool:m},i!==null&&wh(r,null),Lm(),jv(r),i!==null&&bo(i,r,c,!0),r.childLanes=d,null}function Uh(i,r){return r=Fh({mode:r.mode,children:r.children},i.mode),r.ref=i.ref,i.child=r,r.return=i,r}function LE(i,r,o){return Aa(r,i.child,null,o),i=Uh(r,r.pendingProps),i.flags|=2,zn(r),r.memoizedState=null,i}function WI(i,r,o){var c=r.pendingProps,d=(r.flags&128)!==0;if(r.flags&=-129,i===null){if(He){if(c.mode==="hidden")return i=Uh(r,c),r.lanes=536870912,mc(null,i);if(jm(r),(i=ft)?(i=Q0(i,ni),i=i!==null&&i.data==="&"?i:null,i!==null&&(r.memoizedState={dehydrated:i,treeContext:rr!==null?{id:Xi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},o=vv(i),o.return=r,r.child=o,sn=r,ft=null)):i=null,i===null)throw or(r);return r.lanes=536870912,null}return Uh(r,c)}var m=i.memoizedState;if(m!==null){var v=m.dehydrated;if(jm(r),d)if(r.flags&256)r.flags&=-257,r=LE(i,r,o);else if(r.memoizedState!==null)r.child=i.child,r.flags|=128,r=null;else throw Error(s(558));else if(Ut||bo(i,r,o,!1),d=(o&i.childLanes)!==0,Ut||d){if(c=ct,c!==null&&(v=Pl(c,o),v!==0&&v!==m.retryLane))throw m.retryLane=v,_a(i,v),On(c,i,v),rp;$h(),r=LE(i,r,o)}else i=m.treeContext,ft=si(v.nextSibling),sn=r,He=!0,ar=null,ni=!1,i!==null&&bv(r,i),r=Uh(r,c),r.flags|=4096;return r}return i=_s(i.child,{mode:c.mode,children:c.children}),i.ref=r.ref,r.child=i,i.return=r,i}function zh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function ap(i,r,o,c,d){return Ta(r),o=zm(i,r,o,c,void 0,d),c=Fm(),i!==null&&!Ut?(Bm(i,r,d),ws(i,r,d)):(He&&c&&Tm(r),r.flags|=1,an(i,r,o,d),r.child)}function VE(i,r,o,c,d,m){return Ta(r),r.updateQueue=null,o=zv(r,c,o,d),Uv(i),c=Fm(),i!==null&&!Ut?(Bm(i,r,m),ws(i,r,m)):(He&&c&&Tm(r),r.flags|=1,an(i,r,o,m),r.child)}function jE(i,r,o,c,d){if(Ta(r),r.stateNode===null){var m=yo,v=o.contextType;typeof v=="object"&&v!==null&&(m=rn(v)),m=new o(c,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=ip,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=c,m.state=r.memoizedState,m.refs={},Dm(r),v=o.contextType,m.context=typeof v=="object"&&v!==null?rn(v):yo,m.state=r.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(np(r,o,v,c),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&ip.enqueueReplaceState(m,m.state,null),cc(r,c,m,d),lc(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(i===null){m=r.stateNode;var w=r.memoizedProps,N=Ca(o,w);m.props=N;var z=m.context,G=o.contextType;v=yo,typeof G=="object"&&G!==null&&(v=rn(G));var W=o.getDerivedStateFromProps;G=typeof W=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=r.pendingProps!==w,G||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||z!==v)&&SE(r,m,c,v),cr=!1;var F=r.memoizedState;m.state=F,cc(r,c,m,d),lc(),z=r.memoizedState,w||F!==z||cr?(typeof W=="function"&&(np(r,o,W,c),z=r.memoizedState),(N=cr||wE(r,o,N,c,F,z,v))?(G||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=z),m.props=c,m.state=z,m.context=v,c=N):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{m=r.stateNode,km(i,r),v=r.memoizedProps,G=Ca(o,v),m.props=G,W=r.pendingProps,F=m.context,z=o.contextType,N=yo,typeof z=="object"&&z!==null&&(N=rn(z)),w=o.getDerivedStateFromProps,(z=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==W||F!==N)&&SE(r,m,c,N),cr=!1,F=r.memoizedState,m.state=F,cc(r,c,m,d),lc();var q=r.memoizedState;v!==W||F!==q||cr||i!==null&&i.dependencies!==null&&Th(i.dependencies)?(typeof w=="function"&&(np(r,o,w,c),q=r.memoizedState),(G=cr||wE(r,o,G,c,F,q,N)||i!==null&&i.dependencies!==null&&Th(i.dependencies))?(z||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,q,N),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,q,N)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===i.memoizedProps&&F===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===i.memoizedProps&&F===i.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=q),m.props=c,m.state=q,m.context=N,c=G):(typeof m.componentDidUpdate!="function"||v===i.memoizedProps&&F===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===i.memoizedProps&&F===i.memoizedState||(r.flags|=1024),c=!1)}return m=c,zh(i,r),c=(r.flags&128)!==0,m||c?(m=r.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&c?(r.child=Aa(r,i.child,null,d),r.child=Aa(r,null,o,d)):an(i,r,o,d),r.memoizedState=m.state,i=r.child):i=ws(i,r,d),i}function UE(i,r,o,c){return va(),r.flags|=256,an(i,r,o,c),r.child}var op={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lp(i){return{baseLanes:i,cachePool:Iv()}}function cp(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=Bn),i}function zE(i,r,o){var c=r.pendingProps,d=!1,m=(r.flags&128)!==0,v;if((v=m)||(v=i!==null&&i.memoizedState===null?!1:(Ct.current&2)!==0),v&&(d=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,i===null){if(He){if(d?dr(r):fr(),(i=ft)?(i=Q0(i,ni),i=i!==null&&i.data!=="&"?i:null,i!==null&&(r.memoizedState={dehydrated:i,treeContext:rr!==null?{id:Xi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},o=vv(i),o.return=r,r.child=o,sn=r,ft=null)):i=null,i===null)throw or(r);return Gp(i)?r.lanes=32:r.lanes=536870912,null}var w=c.children;return c=c.fallback,d?(fr(),d=r.mode,w=Fh({mode:"hidden",children:w},d),c=ya(c,d,o,null),w.return=r,c.return=r,w.sibling=c,r.child=w,c=r.child,c.memoizedState=lp(o),c.childLanes=cp(i,v,o),r.memoizedState=op,mc(null,c)):(dr(r),up(r,w))}var N=i.memoizedState;if(N!==null&&(w=N.dehydrated,w!==null)){if(m)r.flags&256?(dr(r),r.flags&=-257,r=hp(i,r,o)):r.memoizedState!==null?(fr(),r.child=i.child,r.flags|=128,r=null):(fr(),w=c.fallback,d=r.mode,c=Fh({mode:"visible",children:c.children},d),w=ya(w,d,o,null),w.flags|=2,c.return=r,w.return=r,c.sibling=w,r.child=c,Aa(r,i.child,null,o),c=r.child,c.memoizedState=lp(o),c.childLanes=cp(i,v,o),r.memoizedState=op,r=mc(null,c));else if(dr(r),Gp(w)){if(v=w.nextSibling&&w.nextSibling.dataset,v)var z=v.dgst;v=z,c=Error(s(419)),c.stack="",c.digest=v,nc({value:c,source:null,stack:null}),r=hp(i,r,o)}else if(Ut||bo(i,r,o,!1),v=(o&i.childLanes)!==0,Ut||v){if(v=ct,v!==null&&(c=Pl(v,o),c!==0&&c!==N.retryLane))throw N.retryLane=c,_a(i,c),On(v,i,c),rp;qp(w)||$h(),r=hp(i,r,o)}else qp(w)?(r.flags|=192,r.child=i.child,r=null):(i=N.treeContext,ft=si(w.nextSibling),sn=r,He=!0,ar=null,ni=!1,i!==null&&bv(r,i),r=up(r,c.children),r.flags|=4096);return r}return d?(fr(),w=c.fallback,d=r.mode,N=i.child,z=N.sibling,c=_s(N,{mode:"hidden",children:c.children}),c.subtreeFlags=N.subtreeFlags&65011712,z!==null?w=_s(z,w):(w=ya(w,d,o,null),w.flags|=2),w.return=r,c.return=r,c.sibling=w,r.child=c,mc(null,c),c=r.child,w=i.child.memoizedState,w===null?w=lp(o):(d=w.cachePool,d!==null?(N=Vt._currentValue,d=d.parent!==N?{parent:N,pool:N}:d):d=Iv(),w={baseLanes:w.baseLanes|o,cachePool:d}),c.memoizedState=w,c.childLanes=cp(i,v,o),r.memoizedState=op,mc(i.child,c)):(dr(r),o=i.child,i=o.sibling,o=_s(o,{mode:"visible",children:c.children}),o.return=r,o.sibling=null,i!==null&&(v=r.deletions,v===null?(r.deletions=[i],r.flags|=16):v.push(i)),r.child=o,r.memoizedState=null,o)}function up(i,r){return r=Fh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Fh(i,r){return i=jn(22,i,null,r),i.lanes=0,i}function hp(i,r,o){return Aa(r,i.child,null,o),i=up(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function FE(i,r,o){i.lanes|=r;var c=i.alternate;c!==null&&(c.lanes|=r),xm(i.return,r,o)}function dp(i,r,o,c,d,m){var v=i.memoizedState;v===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d,treeForkCount:m}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=c,v.tail=o,v.tailMode=d,v.treeForkCount=m)}function BE(i,r,o){var c=r.pendingProps,d=c.revealOrder,m=c.tail;c=c.children;var v=Ct.current,w=(v&2)!==0;if(w?(v=v&1|2,r.flags|=128):v&=1,ie(Ct,v),an(i,r,c,o),c=He?tc:0,!w&&i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&FE(i,o,r);else if(i.tag===19)FE(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}switch(d){case"forwards":for(o=r.child,d=null;o!==null;)i=o.alternate,i!==null&&Rh(i)===null&&(d=o),o=o.sibling;o=d,o===null?(d=r.child,r.child=null):(d=o.sibling,o.sibling=null),dp(r,!1,d,o,m,c);break;case"backwards":case"unstable_legacy-backwards":for(o=null,d=r.child,r.child=null;d!==null;){if(i=d.alternate,i!==null&&Rh(i)===null){r.child=d;break}i=d.sibling,d.sibling=o,o=d,d=i}dp(r,!0,o,null,m,c);break;case"together":dp(r,!1,null,null,void 0,c);break;default:r.memoizedState=null}return r.child}function ws(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),gr|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(bo(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=_s(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=_s(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function fp(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&Th(i)))}function $I(i,r,o){switch(r.tag){case 3:et(r,r.stateNode.containerInfo),lr(r,Vt,i.memoizedState.cache),va();break;case 27:case 5:Ot(r);break;case 4:et(r,r.stateNode.containerInfo);break;case 10:lr(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,jm(r),null;break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(dr(r),r.flags|=128,null):(o&r.child.childLanes)!==0?zE(i,r,o):(dr(r),i=ws(i,r,o),i!==null?i.sibling:null);dr(r);break;case 19:var d=(i.flags&128)!==0;if(c=(o&r.childLanes)!==0,c||(bo(i,r,o,!1),c=(o&r.childLanes)!==0),d){if(c)return BE(i,r,o);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ie(Ct,Ct.current),c)break;return null;case 22:return r.lanes=0,ME(i,r,o,r.pendingProps);case 24:lr(r,Vt,i.memoizedState.cache)}return ws(i,r,o)}function HE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)Ut=!0;else{if(!fp(i,o)&&(r.flags&128)===0)return Ut=!1,$I(i,r,o);Ut=(i.flags&131072)!==0}else Ut=!1,He&&(r.flags&1048576)!==0&&Tv(r,tc,r.index);switch(r.lanes=0,r.tag){case 16:e:{var c=r.pendingProps;if(i=wa(r.elementType),r.type=i,typeof i=="function")ym(i)?(c=Ca(i,c),r.tag=1,r=jE(null,r,i,c,o)):(r.tag=0,r=ap(null,r,i,c,o));else{if(i!=null){var d=i.$$typeof;if(d===we){r.tag=11,r=OE(null,r,i,c,o);break e}else if(d===C){r.tag=14,r=DE(null,r,i,c,o);break e}}throw r=dt(i)||i,Error(s(306,r,""))}}return r;case 0:return ap(i,r,r.type,r.pendingProps,o);case 1:return c=r.type,d=Ca(c,r.pendingProps),jE(i,r,c,d,o);case 3:e:{if(et(r,r.stateNode.containerInfo),i===null)throw Error(s(387));c=r.pendingProps;var m=r.memoizedState;d=m.element,km(i,r),cc(r,c,null,o);var v=r.memoizedState;if(c=v.cache,lr(r,Vt,c),c!==m.cache&&Cm(r,[Vt],o,!0),lc(),c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=UE(i,r,c,o);break e}else if(c!==d){d=Zn(Error(s(424)),r),nc(d),r=UE(i,r,c,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(ft=si(i.firstChild),sn=r,He=!0,ar=null,ni=!0,o=Mv(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(va(),c===d){r=ws(i,r,o);break e}an(i,r,c,o)}r=r.child}return r;case 26:return zh(i,r),i===null?(o=eT(r.type,null,r.pendingProps,null))?r.memoizedState=o:He||(o=r.type,i=r.pendingProps,c=id(xe.current).createElement(o),c[Mt]=r,c[$t]=i,on(c,o,i),Pt(c),r.stateNode=c):r.memoizedState=eT(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Ot(r),i===null&&He&&(c=r.stateNode=X0(r.type,r.pendingProps,xe.current),sn=r,ni=!0,d=ft,Tr(r.type)?(Kp=d,ft=si(c.firstChild)):ft=d),an(i,r,r.pendingProps.children,o),zh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&He&&((d=c=ft)&&(c=x1(c,r.type,r.pendingProps,ni),c!==null?(r.stateNode=c,sn=r,ft=si(c.firstChild),ni=!1,d=!0):d=!1),d||or(r)),Ot(r),d=r.type,m=r.pendingProps,v=i!==null?i.memoizedProps:null,c=m.children,Fp(d,m)?c=null:v!==null&&Fp(d,v)&&(r.flags|=32),r.memoizedState!==null&&(d=zm(i,r,FI,null,null,o),Rc._currentValue=d),zh(i,r),an(i,r,c,o),r.child;case 6:return i===null&&He&&((i=o=ft)&&(o=C1(o,r.pendingProps,ni),o!==null?(r.stateNode=o,sn=r,ft=null,i=!0):i=!1),i||or(r)),null;case 13:return zE(i,r,o);case 4:return et(r,r.stateNode.containerInfo),c=r.pendingProps,i===null?r.child=Aa(r,null,c,o):an(i,r,c,o),r.child;case 11:return OE(i,r,r.type,r.pendingProps,o);case 7:return an(i,r,r.pendingProps,o),r.child;case 8:return an(i,r,r.pendingProps.children,o),r.child;case 12:return an(i,r,r.pendingProps.children,o),r.child;case 10:return c=r.pendingProps,lr(r,r.type,c.value),an(i,r,c.children,o),r.child;case 9:return d=r.type._context,c=r.pendingProps.children,Ta(r),d=rn(d),c=c(d),r.flags|=1,an(i,r,c,o),r.child;case 14:return DE(i,r,r.type,r.pendingProps,o);case 15:return kE(i,r,r.type,r.pendingProps,o);case 19:return BE(i,r,o);case 31:return WI(i,r,o);case 22:return ME(i,r,o,r.pendingProps);case 24:return Ta(r),c=rn(Vt),i===null?(d=Nm(),d===null&&(d=ct,m=Im(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),r.memoizedState={parent:c,cache:d},Dm(r),lr(r,Vt,d)):((i.lanes&o)!==0&&(km(i,r),cc(r,null,null,o),lc()),d=i.memoizedState,m=r.memoizedState,d.parent!==c?(d={parent:c,cache:c},r.memoizedState=d,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=d),lr(r,Vt,c)):(c=m.cache,lr(r,Vt,c),c!==d.cache&&Cm(r,[Vt],o,!0))),an(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Ss(i){i.flags|=4}function mp(i,r,o,c,d){if((r=(i.mode&32)!==0)&&(r=!1),r){if(i.flags|=16777216,(d&335544128)===d)if(i.stateNode.complete)i.flags|=8192;else if(g0())i.flags|=8192;else throw Sa=Ah,Om}else i.flags&=-16777217}function qE(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!rT(r))if(g0())i.flags|=8192;else throw Sa=Ah,Om}function Bh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Qu():536870912,i.lanes|=r,Mo|=r)}function pc(i,r){if(!He)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function mt(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,c=0;if(r)for(var d=i.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=i,d=d.sibling;else for(d=i.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=i,d=d.sibling;return i.subtreeFlags|=c,i.childLanes=o,r}function XI(i,r,o){var c=r.pendingProps;switch(bm(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(r),null;case 1:return mt(r),null;case 3:return o=r.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),Es(Vt),Je(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(To(r)?Ss(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Sm())),mt(r),null;case 26:var d=r.type,m=r.memoizedState;return i===null?(Ss(r),m!==null?(mt(r),qE(r,m)):(mt(r),mp(r,d,null,c,o))):m?m!==i.memoizedState?(Ss(r),mt(r),qE(r,m)):(mt(r),r.flags&=-16777217):(i=i.memoizedProps,i!==c&&Ss(r),mt(r),mp(r,d,i,c,o)),null;case 27:if(Ks(r),o=xe.current,d=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==c&&Ss(r);else{if(!c){if(r.stateNode===null)throw Error(s(166));return mt(r),null}i=re.current,To(r)?wv(r):(i=X0(d,c,o),r.stateNode=i,Ss(r))}return mt(r),null;case 5:if(Ks(r),d=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==c&&Ss(r);else{if(!c){if(r.stateNode===null)throw Error(s(166));return mt(r),null}if(m=re.current,To(r))wv(r);else{var v=id(xe.current);switch(m){case 1:m=v.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=v.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=v.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=v.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=v.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof c.is=="string"?v.createElement("select",{is:c.is}):v.createElement("select"),c.multiple?m.multiple=!0:c.size&&(m.size=c.size);break;default:m=typeof c.is=="string"?v.createElement(d,{is:c.is}):v.createElement(d)}}m[Mt]=r,m[$t]=c;e:for(v=r.child;v!==null;){if(v.tag===5||v.tag===6)m.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===r)break e;for(;v.sibling===null;){if(v.return===null||v.return===r)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}r.stateNode=m;e:switch(on(m,d,c),d){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&Ss(r)}}return mt(r),mp(r,r.type,i===null?null:i.memoizedProps,r.pendingProps,o),null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==c&&Ss(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(s(166));if(i=xe.current,To(r)){if(i=r.stateNode,o=r.memoizedProps,c=null,d=sn,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}i[Mt]=r,i=!!(i.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||z0(i.nodeValue,o)),i||or(r,!0)}else i=id(i).createTextNode(c),i[Mt]=r,r.stateNode=i}return mt(r),null;case 31:if(o=r.memoizedState,i===null||i.memoizedState!==null){if(c=To(r),o!==null){if(i===null){if(!c)throw Error(s(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(557));i[Mt]=r}else va(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;mt(r),i=!1}else o=Sm(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=o),i=!0;if(!i)return r.flags&256?(zn(r),r):(zn(r),null);if((r.flags&128)!==0)throw Error(s(558))}return mt(r),null;case 13:if(c=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(d=To(r),c!==null&&c.dehydrated!==null){if(i===null){if(!d)throw Error(s(318));if(d=r.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(s(317));d[Mt]=r}else va(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;mt(r),d=!1}else d=Sm(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=d),d=!0;if(!d)return r.flags&256?(zn(r),r):(zn(r),null)}return zn(r),(r.flags&128)!==0?(r.lanes=o,r):(o=c!==null,i=i!==null&&i.memoizedState!==null,o&&(c=r.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool),m=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==d&&(c.flags|=2048)),o!==i&&o&&(r.child.flags|=8192),Bh(r,r.updateQueue),mt(r),null);case 4:return Je(),i===null&&Lp(r.stateNode.containerInfo),mt(r),null;case 10:return Es(r.type),mt(r),null;case 19:if(Y(Ct),c=r.memoizedState,c===null)return mt(r),null;if(d=(r.flags&128)!==0,m=c.rendering,m===null)if(d)pc(c,!1);else{if(bt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=Rh(i),m!==null){for(r.flags|=128,pc(c,!1),i=m.updateQueue,r.updateQueue=i,Bh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)yv(o,i),o=o.sibling;return ie(Ct,Ct.current&1|2),He&&ys(r,c.treeForkCount),r.child}i=i.sibling}c.tail!==null&&yn()>Yh&&(r.flags|=128,d=!0,pc(c,!1),r.lanes=4194304)}else{if(!d)if(i=Rh(m),i!==null){if(r.flags|=128,d=!0,i=i.updateQueue,r.updateQueue=i,Bh(r,i),pc(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!He)return mt(r),null}else 2*yn()-c.renderingStartTime>Yh&&o!==536870912&&(r.flags|=128,d=!0,pc(c,!1),r.lanes=4194304);c.isBackwards?(m.sibling=r.child,r.child=m):(i=c.last,i!==null?i.sibling=m:r.child=m,c.last=m)}return c.tail!==null?(i=c.tail,c.rendering=i,c.tail=i.sibling,c.renderingStartTime=yn(),i.sibling=null,o=Ct.current,ie(Ct,d?o&1|2:o&1),He&&ys(r,c.treeForkCount),i):(mt(r),null);case 22:case 23:return zn(r),Vm(),c=r.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(o&536870912)!==0&&(r.flags&128)===0&&(mt(r),r.subtreeFlags&6&&(r.flags|=8192)):mt(r),o=r.updateQueue,o!==null&&Bh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==o&&(r.flags|=2048),i!==null&&Y(ba),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Es(Vt),mt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function JI(i,r){switch(bm(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return Es(Vt),Je(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return Ks(r),null;case 31:if(r.memoizedState!==null){if(zn(r),r.alternate===null)throw Error(s(340));va()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 13:if(zn(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));va()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return Y(Ct),null;case 4:return Je(),null;case 10:return Es(r.type),null;case 22:case 23:return zn(r),Vm(),i!==null&&Y(ba),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return Es(Vt),null;case 25:return null;default:return null}}function GE(i,r){switch(bm(r),r.tag){case 3:Es(Vt),Je();break;case 26:case 27:case 5:Ks(r);break;case 4:Je();break;case 31:r.memoizedState!==null&&zn(r);break;case 13:zn(r);break;case 19:Y(Ct);break;case 10:Es(r.type);break;case 22:case 23:zn(r),Vm(),i!==null&&Y(ba);break;case 24:Es(Vt)}}function gc(i,r){try{var o=r.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&i)===i){c=void 0;var m=o.create,v=o.inst;c=m(),v.destroy=c}o=o.next}while(o!==d)}}catch(w){it(r,r.return,w)}}function mr(i,r,o){try{var c=r.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var m=d.next;c=m;do{if((c.tag&i)===i){var v=c.inst,w=v.destroy;if(w!==void 0){v.destroy=void 0,d=r;var N=o,z=w;try{z()}catch(G){it(d,N,G)}}}c=c.next}while(c!==m)}}catch(G){it(r,r.return,G)}}function KE(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{Lv(r,o)}catch(c){it(i,i.return,c)}}}function YE(i,r,o){o.props=Ca(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(c){it(i,r,c)}}function _c(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var c=i.stateNode;break;case 30:c=i.stateNode;break;default:c=i.stateNode}typeof o=="function"?i.refCleanup=o(c):o.current=c}}catch(d){it(i,r,d)}}function Zi(i,r){var o=i.ref,c=i.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(d){it(i,r,d)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){it(i,r,d)}else o.current=null}function QE(i){var r=i.type,o=i.memoizedProps,c=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(d){it(i,i.return,d)}}function pp(i,r,o){try{var c=i.stateNode;E1(c,i.type,o,r),c[$t]=r}catch(d){it(i,i.return,d)}}function WE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Tr(i.type)||i.tag===4}function gp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||WE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Tr(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function _p(i,r,o){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=gi));else if(c!==4&&(c===27&&Tr(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(_p(i,r,o),i=i.sibling;i!==null;)_p(i,r,o),i=i.sibling}function Hh(i,r,o){var c=i.tag;if(c===5||c===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(c!==4&&(c===27&&Tr(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(Hh(i,r,o),i=i.sibling;i!==null;)Hh(i,r,o),i=i.sibling}function $E(i){var r=i.stateNode,o=i.memoizedProps;try{for(var c=i.type,d=r.attributes;d.length;)r.removeAttributeNode(d[0]);on(r,c,o),r[Mt]=i,r[$t]=o}catch(m){it(i,i.return,m)}}var As=!1,zt=!1,yp=!1,XE=typeof WeakSet=="function"?WeakSet:Set,Jt=null;function ZI(i,r){if(i=i.containerInfo,Up=ud,i=cv(i),hm(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var v=0,w=-1,N=-1,z=0,G=0,W=i,F=null;t:for(;;){for(var q;W!==o||d!==0&&W.nodeType!==3||(w=v+d),W!==m||c!==0&&W.nodeType!==3||(N=v+c),W.nodeType===3&&(v+=W.nodeValue.length),(q=W.firstChild)!==null;)F=W,W=q;for(;;){if(W===i)break t;if(F===o&&++z===d&&(w=v),F===m&&++G===c&&(N=v),(q=W.nextSibling)!==null)break;W=F,F=W.parentNode}W=q}o=w===-1||N===-1?null:{start:w,end:N}}else o=null}o=o||{start:0,end:0}}else o=null;for(zp={focusedElem:i,selectionRange:o},ud=!1,Jt=r;Jt!==null;)if(r=Jt,i=r.child,(r.subtreeFlags&1028)!==0&&i!==null)i.return=r,Jt=i;else for(;Jt!==null;){switch(r=Jt,m=r.alternate,i=r.flags,r.tag){case 0:if((i&4)!==0&&(i=r.updateQueue,i=i!==null?i.events:null,i!==null))for(o=0;o<i.length;o++)d=i[o],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,d=m.memoizedProps,m=m.memoizedState,c=o.stateNode;try{var oe=Ca(o.type,d);i=c.getSnapshotBeforeUpdate(oe,m),c.__reactInternalSnapshotBeforeUpdate=i}catch(ye){it(o,o.return,ye)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Hp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Hp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,Jt=i;break}Jt=r.return}}function JE(i,r,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:Cs(i,o),c&4&&gc(5,o);break;case 1:if(Cs(i,o),c&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(v){it(o,o.return,v)}else{var d=Ca(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(d,r,i.__reactInternalSnapshotBeforeUpdate)}catch(v){it(o,o.return,v)}}c&64&&KE(o),c&512&&_c(o,o.return);break;case 3:if(Cs(i,o),c&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Lv(i,r)}catch(v){it(o,o.return,v)}}break;case 27:r===null&&c&4&&$E(o);case 26:case 5:Cs(i,o),r===null&&c&4&&QE(o),c&512&&_c(o,o.return);break;case 12:Cs(i,o);break;case 31:Cs(i,o),c&4&&t0(i,o);break;case 13:Cs(i,o),c&4&&n0(i,o),c&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=l1.bind(null,o),I1(i,o))));break;case 22:if(c=o.memoizedState!==null||As,!c){r=r!==null&&r.memoizedState!==null||zt,d=As;var m=zt;As=c,(zt=r)&&!m?Is(i,o,(o.subtreeFlags&8772)!==0):Cs(i,o),As=d,zt=m}break;case 30:break;default:Cs(i,o)}}function ZE(i){var r=i.alternate;r!==null&&(i.alternate=null,ZE(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&io(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var yt=null,Cn=!1;function xs(i,r,o){for(o=o.child;o!==null;)e0(i,r,o),o=o.sibling}function e0(i,r,o){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(di,o)}catch{}switch(o.tag){case 26:zt||Zi(o,r),xs(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:zt||Zi(o,r);var c=yt,d=Cn;Tr(o.type)&&(yt=o.stateNode,Cn=!1),xs(i,r,o),xc(o.stateNode),yt=c,Cn=d;break;case 5:zt||Zi(o,r);case 6:if(c=yt,d=Cn,yt=null,xs(i,r,o),yt=c,Cn=d,yt!==null)if(Cn)try{(yt.nodeType===9?yt.body:yt.nodeName==="HTML"?yt.ownerDocument.body:yt).removeChild(o.stateNode)}catch(m){it(o,r,m)}else try{yt.removeChild(o.stateNode)}catch(m){it(o,r,m)}break;case 18:yt!==null&&(Cn?(i=yt,K0(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),Bo(i)):K0(yt,o.stateNode));break;case 4:c=yt,d=Cn,yt=o.stateNode.containerInfo,Cn=!0,xs(i,r,o),yt=c,Cn=d;break;case 0:case 11:case 14:case 15:mr(2,o,r),zt||mr(4,o,r),xs(i,r,o);break;case 1:zt||(Zi(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"&&YE(o,r,c)),xs(i,r,o);break;case 21:xs(i,r,o);break;case 22:zt=(c=zt)||o.memoizedState!==null,xs(i,r,o),zt=c;break;default:xs(i,r,o)}}function t0(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null))){i=i.dehydrated;try{Bo(i)}catch(o){it(r,r.return,o)}}}function n0(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Bo(i)}catch(o){it(r,r.return,o)}}function e1(i){switch(i.tag){case 31:case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new XE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new XE),r;default:throw Error(s(435,i.tag))}}function qh(i,r){var o=e1(i);r.forEach(function(c){if(!o.has(c)){o.add(c);var d=c1.bind(null,i,c);c.then(d,d)}})}function In(i,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c],m=i,v=r,w=v;e:for(;w!==null;){switch(w.tag){case 27:if(Tr(w.type)){yt=w.stateNode,Cn=!1;break e}break;case 5:yt=w.stateNode,Cn=!1;break e;case 3:case 4:yt=w.stateNode.containerInfo,Cn=!0;break e}w=w.return}if(yt===null)throw Error(s(160));e0(m,v,d),yt=null,Cn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)i0(r,i),r=r.sibling}var bi=null;function i0(i,r){var o=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:In(r,i),Rn(i),c&4&&(mr(3,i,i.return),gc(3,i),mr(5,i,i.return));break;case 1:In(r,i),Rn(i),c&512&&(zt||o===null||Zi(o,o.return)),c&64&&As&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var d=bi;if(In(r,i),Rn(i),c&512&&(zt||o===null||Zi(o,o.return)),c&4){var m=o!==null?o.memoizedState:null;if(c=i.memoizedState,o===null)if(c===null)if(i.stateNode===null){e:{c=i.type,o=i.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":m=d.getElementsByTagName("title")[0],(!m||m[Ui]||m[Mt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(c),d.head.insertBefore(m,d.querySelector("head > title"))),on(m,c,o),m[Mt]=i,Pt(m),c=m;break e;case"link":var v=iT("link","href",d).get(c+(o.href||""));if(v){for(var w=0;w<v.length;w++)if(m=v[w],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(w,1);break t}}m=d.createElement(c),on(m,c,o),d.head.appendChild(m);break;case"meta":if(v=iT("meta","content",d).get(c+(o.content||""))){for(w=0;w<v.length;w++)if(m=v[w],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(w,1);break t}}m=d.createElement(c),on(m,c,o),d.head.appendChild(m);break;default:throw Error(s(468,c))}m[Mt]=i,Pt(m),c=m}i.stateNode=c}else sT(d,i.type,i.stateNode);else i.stateNode=nT(d,c,i.memoizedProps);else m!==c?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,c===null?sT(d,i.type,i.stateNode):nT(d,c,i.memoizedProps)):c===null&&i.stateNode!==null&&pp(i,i.memoizedProps,o.memoizedProps)}break;case 27:In(r,i),Rn(i),c&512&&(zt||o===null||Zi(o,o.return)),o!==null&&c&4&&pp(i,i.memoizedProps,o.memoizedProps);break;case 5:if(In(r,i),Rn(i),c&512&&(zt||o===null||Zi(o,o.return)),i.flags&32){d=i.stateNode;try{xn(d,"")}catch(oe){it(i,i.return,oe)}}c&4&&i.stateNode!=null&&(d=i.memoizedProps,pp(i,d,o!==null?o.memoizedProps:d)),c&1024&&(yp=!0);break;case 6:if(In(r,i),Rn(i),c&4){if(i.stateNode===null)throw Error(s(162));c=i.memoizedProps,o=i.stateNode;try{o.nodeValue=c}catch(oe){it(i,i.return,oe)}}break;case 3:if(ad=null,d=bi,bi=sd(r.containerInfo),In(r,i),bi=d,Rn(i),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Bo(r.containerInfo)}catch(oe){it(i,i.return,oe)}yp&&(yp=!1,s0(i));break;case 4:c=bi,bi=sd(i.stateNode.containerInfo),In(r,i),Rn(i),bi=c;break;case 12:In(r,i),Rn(i);break;case 31:In(r,i),Rn(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,qh(i,c)));break;case 13:In(r,i),Rn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Kh=yn()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,qh(i,c)));break;case 22:d=i.memoizedState!==null;var N=o!==null&&o.memoizedState!==null,z=As,G=zt;if(As=z||d,zt=G||N,In(r,i),zt=G,As=z,Rn(i),c&8192)e:for(r=i.stateNode,r._visibility=d?r._visibility&-2:r._visibility|1,d&&(o===null||N||As||zt||Ia(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){N=o=r;try{if(m=N.stateNode,d)v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{w=N.stateNode;var W=N.memoizedProps.style,F=W!=null&&W.hasOwnProperty("display")?W.display:null;w.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(oe){it(N,N.return,oe)}}}else if(r.tag===6){if(o===null){N=r;try{N.stateNode.nodeValue=d?"":N.memoizedProps}catch(oe){it(N,N.return,oe)}}}else if(r.tag===18){if(o===null){N=r;try{var q=N.stateNode;d?Y0(q,!0):Y0(N.stateNode,!1)}catch(oe){it(N,N.return,oe)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=i.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,qh(i,o))));break;case 19:In(r,i),Rn(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,qh(i,c)));break;case 30:break;case 21:break;default:In(r,i),Rn(i)}}function Rn(i){var r=i.flags;if(r&2){try{for(var o,c=i.return;c!==null;){if(WE(c)){o=c;break}c=c.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var d=o.stateNode,m=gp(i);Hh(i,m,d);break;case 5:var v=o.stateNode;o.flags&32&&(xn(v,""),o.flags&=-33);var w=gp(i);Hh(i,w,v);break;case 3:case 4:var N=o.stateNode.containerInfo,z=gp(i);_p(i,z,N);break;default:throw Error(s(161))}}catch(G){it(i,i.return,G)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function s0(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;s0(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function Cs(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)JE(i,r.alternate,r),r=r.sibling}function Ia(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:mr(4,r,r.return),Ia(r);break;case 1:Zi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&YE(r,r.return,o),Ia(r);break;case 27:xc(r.stateNode);case 26:case 5:Zi(r,r.return),Ia(r);break;case 22:r.memoizedState===null&&Ia(r);break;case 30:Ia(r);break;default:Ia(r)}i=i.sibling}}function Is(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,d=i,m=r,v=m.flags;switch(m.tag){case 0:case 11:case 15:Is(d,m,o),gc(4,m);break;case 1:if(Is(d,m,o),c=m,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(z){it(c,c.return,z)}if(c=m,d=c.updateQueue,d!==null){var w=c.stateNode;try{var N=d.shared.hiddenCallbacks;if(N!==null)for(d.shared.hiddenCallbacks=null,d=0;d<N.length;d++)Pv(N[d],w)}catch(z){it(c,c.return,z)}}o&&v&64&&KE(m),_c(m,m.return);break;case 27:$E(m);case 26:case 5:Is(d,m,o),o&&c===null&&v&4&&QE(m),_c(m,m.return);break;case 12:Is(d,m,o);break;case 31:Is(d,m,o),o&&v&4&&t0(d,m);break;case 13:Is(d,m,o),o&&v&4&&n0(d,m);break;case 22:m.memoizedState===null&&Is(d,m,o),_c(m,m.return);break;case 30:break;default:Is(d,m,o)}r=r.sibling}}function vp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&ic(o))}function Ep(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&ic(i))}function wi(i,r,o,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)r0(i,r,o,c),r=r.sibling}function r0(i,r,o,c){var d=r.flags;switch(r.tag){case 0:case 11:case 15:wi(i,r,o,c),d&2048&&gc(9,r);break;case 1:wi(i,r,o,c);break;case 3:wi(i,r,o,c),d&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&ic(i)));break;case 12:if(d&2048){wi(i,r,o,c),i=r.stateNode;try{var m=r.memoizedProps,v=m.id,w=m.onPostCommit;typeof w=="function"&&w(v,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(N){it(r,r.return,N)}}else wi(i,r,o,c);break;case 31:wi(i,r,o,c);break;case 13:wi(i,r,o,c);break;case 23:break;case 22:m=r.stateNode,v=r.alternate,r.memoizedState!==null?m._visibility&2?wi(i,r,o,c):yc(i,r):m._visibility&2?wi(i,r,o,c):(m._visibility|=2,Oo(i,r,o,c,(r.subtreeFlags&10256)!==0||!1)),d&2048&&vp(v,r);break;case 24:wi(i,r,o,c),d&2048&&Ep(r.alternate,r);break;default:wi(i,r,o,c)}}function Oo(i,r,o,c,d){for(d=d&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var m=i,v=r,w=o,N=c,z=v.flags;switch(v.tag){case 0:case 11:case 15:Oo(m,v,w,N,d),gc(8,v);break;case 23:break;case 22:var G=v.stateNode;v.memoizedState!==null?G._visibility&2?Oo(m,v,w,N,d):yc(m,v):(G._visibility|=2,Oo(m,v,w,N,d)),d&&z&2048&&vp(v.alternate,v);break;case 24:Oo(m,v,w,N,d),d&&z&2048&&Ep(v.alternate,v);break;default:Oo(m,v,w,N,d)}r=r.sibling}}function yc(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,c=r,d=c.flags;switch(c.tag){case 22:yc(o,c),d&2048&&vp(c.alternate,c);break;case 24:yc(o,c),d&2048&&Ep(c.alternate,c);break;default:yc(o,c)}r=r.sibling}}var vc=8192;function Do(i,r,o){if(i.subtreeFlags&vc)for(i=i.child;i!==null;)a0(i,r,o),i=i.sibling}function a0(i,r,o){switch(i.tag){case 26:Do(i,r,o),i.flags&vc&&i.memoizedState!==null&&z1(o,bi,i.memoizedState,i.memoizedProps);break;case 5:Do(i,r,o);break;case 3:case 4:var c=bi;bi=sd(i.stateNode.containerInfo),Do(i,r,o),bi=c;break;case 22:i.memoizedState===null&&(c=i.alternate,c!==null&&c.memoizedState!==null?(c=vc,vc=16777216,Do(i,r,o),vc=c):Do(i,r,o));break;default:Do(i,r,o)}}function o0(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Ec(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];Jt=c,c0(c,i)}o0(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)l0(i),i=i.sibling}function l0(i){switch(i.tag){case 0:case 11:case 15:Ec(i),i.flags&2048&&mr(9,i,i.return);break;case 3:Ec(i);break;case 12:Ec(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Gh(i)):Ec(i);break;default:Ec(i)}}function Gh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];Jt=c,c0(c,i)}o0(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:mr(8,r,r.return),Gh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Gh(r));break;default:Gh(r)}i=i.sibling}}function c0(i,r){for(;Jt!==null;){var o=Jt;switch(o.tag){case 0:case 11:case 15:mr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:ic(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,Jt=c;else e:for(o=i;Jt!==null;){c=Jt;var d=c.sibling,m=c.return;if(ZE(c),c===o){Jt=null;break e}if(d!==null){d.return=m,Jt=d;break e}Jt=m}}}var t1={getCacheForType:function(i){var r=rn(Vt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o},cacheSignal:function(){return rn(Vt).controller.signal}},n1=typeof WeakMap=="function"?WeakMap:Map,$e=0,ct=null,ke=null,je=0,nt=0,Fn=null,pr=!1,ko=!1,Tp=!1,Rs=0,bt=0,gr=0,Ra=0,bp=0,Bn=0,Mo=0,Tc=null,Nn=null,wp=!1,Kh=0,u0=0,Yh=1/0,Qh=null,_r=null,qt=0,yr=null,Po=null,Ns=0,Sp=0,Ap=null,h0=null,bc=0,xp=null;function Hn(){return($e&2)!==0&&je!==0?je&-je:K.T!==null?Dp():Wu()}function d0(){if(Bn===0)if((je&536870912)===0||He){var i=na;na<<=1,(na&3932160)===0&&(na=262144),Bn=i}else Bn=536870912;return i=Un.current,i!==null&&(i.flags|=32),Bn}function On(i,r,o){(i===ct&&(nt===2||nt===9)||i.cancelPendingCommit!==null)&&(Lo(i,0),vr(i,je,Bn,!1)),ia(i,o),(($e&2)===0||i!==ct)&&(i===ct&&(($e&2)===0&&(Ra|=o),bt===4&&vr(i,je,Bn,!1)),es(i))}function f0(i,r,o){if(($e&6)!==0)throw Error(s(327));var c=!o&&(r&127)===0&&(r&i.expiredLanes)===0||fi(i,r),d=c?r1(i,r):Ip(i,r,!0),m=c;do{if(d===0){ko&&!c&&vr(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!i1(o)){d=Ip(i,r,!1),m=!1;continue}if(d===2){if(m=r,i.errorRecoveryDisabledLanes&m)var v=0;else v=i.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;e:{var w=i;d=Tc;var N=w.current.memoizedState.isDehydrated;if(N&&(Lo(w,v).flags|=256),v=Ip(w,v,!1),v!==2){if(Tp&&!N){w.errorRecoveryDisabledLanes|=m,Ra|=m,d=4;break e}m=Nn,Nn=d,m!==null&&(Nn===null?Nn=m:Nn.push.apply(Nn,m))}d=v}if(m=!1,d!==2)continue}}if(d===1){Lo(i,0),vr(i,r,0,!0);break}e:{switch(c=i,m=d,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:vr(c,r,Bn,!pr);break e;case 2:Nn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(d=Kh+300-yn(),10<d)){if(vr(c,r,Bn,!pr),Li(c,0,!0)!==0)break e;Ns=r,c.timeoutHandle=q0(m0.bind(null,c,o,Nn,Qh,wp,r,Bn,Ra,Mo,pr,m,"Throttled",-0,0),d);break e}m0(c,o,Nn,Qh,wp,r,Bn,Ra,Mo,pr,m,null,-0,0)}}break}while(!0);es(i)}function m0(i,r,o,c,d,m,v,w,N,z,G,W,F,q){if(i.timeoutHandle=-1,W=r.subtreeFlags,W&8192||(W&16785408)===16785408){W={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gi},a0(r,m,W);var oe=(m&62914560)===m?Kh-yn():(m&4194048)===m?u0-yn():0;if(oe=F1(W,oe),oe!==null){Ns=m,i.cancelPendingCommit=oe(b0.bind(null,i,r,m,o,c,d,v,w,N,G,W,null,F,q)),vr(i,m,v,!z);return}}b0(i,r,m,o,c,d,v,w,N)}function i1(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var d=o[c],m=d.getSnapshot;d=d.value;try{if(!Vn(m(),d))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function vr(i,r,o,c){r&=~bp,r&=~Ra,i.suspendedLanes|=r,i.pingedLanes&=~r,c&&(i.warmLanes|=r),c=i.expirationTimes;for(var d=r;0<d;){var m=31-At(d),v=1<<m;c[m]=-1,d&=~v}o!==0&&sa(i,o,r)}function Wh(){return($e&6)===0?(wc(0),!1):!0}function Cp(){if(ke!==null){if(nt===0)var i=ke.return;else i=ke,vs=Ea=null,Hm(i),xo=null,rc=0,i=ke;for(;i!==null;)GE(i.alternate,i),i=i.return;ke=null}}function Lo(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,w1(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),Ns=0,Cp(),ct=i,ke=o=_s(i.current,null),je=r,nt=0,Fn=null,pr=!1,ko=fi(i,r),Tp=!1,Mo=Bn=bp=Ra=gr=bt=0,Nn=Tc=null,wp=!1,(r&8)!==0&&(r|=r&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=r;0<c;){var d=31-At(c),m=1<<d;r|=i[d],c&=~m}return Rs=r,gh(),o}function p0(i,r){Ne=null,K.H=fc,r===Ao||r===Sh?(r=Ov(),nt=3):r===Om?(r=Ov(),nt=4):nt=r===rp?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Fn=r,ke===null&&(bt=1,jh(i,Zn(r,i.current)))}function g0(){var i=Un.current;return i===null?!0:(je&4194048)===je?ii===null:(je&62914560)===je||(je&536870912)!==0?i===ii:!1}function _0(){var i=K.H;return K.H=fc,i===null?fc:i}function y0(){var i=K.A;return K.A=t1,i}function $h(){bt=4,pr||(je&4194048)!==je&&Un.current!==null||(ko=!0),(gr&134217727)===0&&(Ra&134217727)===0||ct===null||vr(ct,je,Bn,!1)}function Ip(i,r,o){var c=$e;$e|=2;var d=_0(),m=y0();(ct!==i||je!==r)&&(Qh=null,Lo(i,r)),r=!1;var v=bt;e:do try{if(nt!==0&&ke!==null){var w=ke,N=Fn;switch(nt){case 8:Cp(),v=6;break e;case 3:case 2:case 9:case 6:Un.current===null&&(r=!0);var z=nt;if(nt=0,Fn=null,Vo(i,w,N,z),o&&ko){v=0;break e}break;default:z=nt,nt=0,Fn=null,Vo(i,w,N,z)}}s1(),v=bt;break}catch(G){p0(i,G)}while(!0);return r&&i.shellSuspendCounter++,vs=Ea=null,$e=c,K.H=d,K.A=m,ke===null&&(ct=null,je=0,gh()),v}function s1(){for(;ke!==null;)v0(ke)}function r1(i,r){var o=$e;$e|=2;var c=_0(),d=y0();ct!==i||je!==r?(Qh=null,Yh=yn()+500,Lo(i,r)):ko=fi(i,r);e:do try{if(nt!==0&&ke!==null){r=ke;var m=Fn;t:switch(nt){case 1:nt=0,Fn=null,Vo(i,r,m,1);break;case 2:case 9:if(Rv(m)){nt=0,Fn=null,E0(r);break}r=function(){nt!==2&&nt!==9||ct!==i||(nt=7),es(i)},m.then(r,r);break e;case 3:nt=7;break e;case 4:nt=5;break e;case 7:Rv(m)?(nt=0,Fn=null,E0(r)):(nt=0,Fn=null,Vo(i,r,m,7));break;case 5:var v=null;switch(ke.tag){case 26:v=ke.memoizedState;case 5:case 27:var w=ke;if(v?rT(v):w.stateNode.complete){nt=0,Fn=null;var N=w.sibling;if(N!==null)ke=N;else{var z=w.return;z!==null?(ke=z,Xh(z)):ke=null}break t}}nt=0,Fn=null,Vo(i,r,m,5);break;case 6:nt=0,Fn=null,Vo(i,r,m,6);break;case 8:Cp(),bt=6;break e;default:throw Error(s(462))}}a1();break}catch(G){p0(i,G)}while(!0);return vs=Ea=null,K.H=c,K.A=d,$e=o,ke!==null?0:(ct=null,je=0,gh(),bt)}function a1(){for(;ke!==null&&!sm();)v0(ke)}function v0(i){var r=HE(i.alternate,i,Rs);i.memoizedProps=i.pendingProps,r===null?Xh(i):ke=r}function E0(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=VE(o,r,r.pendingProps,r.type,void 0,je);break;case 11:r=VE(o,r,r.pendingProps,r.type.render,r.ref,je);break;case 5:Hm(r);default:GE(o,r),r=ke=yv(r,Rs),r=HE(o,r,Rs)}i.memoizedProps=i.pendingProps,r===null?Xh(i):ke=r}function Vo(i,r,o,c){vs=Ea=null,Hm(r),xo=null,rc=0;var d=r.return;try{if(QI(i,d,r,o,je)){bt=1,jh(i,Zn(o,i.current)),ke=null;return}}catch(m){if(d!==null)throw ke=d,m;bt=1,jh(i,Zn(o,i.current)),ke=null;return}r.flags&32768?(He||c===1?i=!0:ko||(je&536870912)!==0?i=!1:(pr=i=!0,(c===2||c===9||c===3||c===6)&&(c=Un.current,c!==null&&c.tag===13&&(c.flags|=16384))),T0(r,i)):Xh(r)}function Xh(i){var r=i;do{if((r.flags&32768)!==0){T0(r,pr);return}i=r.return;var o=XI(r.alternate,r,Rs);if(o!==null){ke=o;return}if(r=r.sibling,r!==null){ke=r;return}ke=r=i}while(r!==null);bt===0&&(bt=5)}function T0(i,r){do{var o=JI(i.alternate,i);if(o!==null){o.flags&=32767,ke=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){ke=i;return}ke=i=o}while(i!==null);bt=6,ke=null}function b0(i,r,o,c,d,m,v,w,N){i.cancelPendingCommit=null;do Jh();while(qt!==0);if(($e&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=gm,om(i,o,m,v,w,N),i===ct&&(ke=ct=null,je=0),Po=r,yr=i,Ns=o,Sp=m,Ap=d,h0=c,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,u1(Ws,function(){return C0(),null})):(i.callbackNode=null,i.callbackPriority=0),c=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||c){c=K.T,K.T=null,d=se.p,se.p=2,v=$e,$e|=4;try{ZI(i,r,o)}finally{$e=v,se.p=d,K.T=c}}qt=1,w0(),S0(),A0()}}function w0(){if(qt===1){qt=0;var i=yr,r=Po,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=K.T,K.T=null;var c=se.p;se.p=2;var d=$e;$e|=4;try{i0(r,i);var m=zp,v=cv(i.containerInfo),w=m.focusedElem,N=m.selectionRange;if(v!==w&&w&&w.ownerDocument&&lv(w.ownerDocument.documentElement,w)){if(N!==null&&hm(w)){var z=N.start,G=N.end;if(G===void 0&&(G=z),"selectionStart"in w)w.selectionStart=z,w.selectionEnd=Math.min(G,w.value.length);else{var W=w.ownerDocument||document,F=W&&W.defaultView||window;if(F.getSelection){var q=F.getSelection(),oe=w.textContent.length,ye=Math.min(N.start,oe),ot=N.end===void 0?ye:Math.min(N.end,oe);!q.extend&&ye>ot&&(v=ot,ot=ye,ye=v);var L=ov(w,ye),O=ov(w,ot);if(L&&O&&(q.rangeCount!==1||q.anchorNode!==L.node||q.anchorOffset!==L.offset||q.focusNode!==O.node||q.focusOffset!==O.offset)){var U=W.createRange();U.setStart(L.node,L.offset),q.removeAllRanges(),ye>ot?(q.addRange(U),q.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),q.addRange(U))}}}}for(W=[],q=w;q=q.parentNode;)q.nodeType===1&&W.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<W.length;w++){var Q=W[w];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}ud=!!Up,zp=Up=null}finally{$e=d,se.p=c,K.T=o}}i.current=r,qt=2}}function S0(){if(qt===2){qt=0;var i=yr,r=Po,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=K.T,K.T=null;var c=se.p;se.p=2;var d=$e;$e|=4;try{JE(i,r.alternate,r)}finally{$e=d,se.p=c,K.T=o}}qt=3}}function A0(){if(qt===4||qt===3){qt=0,Bu();var i=yr,r=Po,o=Ns,c=h0;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?qt=5:(qt=0,Po=yr=null,x0(i,i.pendingLanes));var d=i.pendingLanes;if(d===0&&(_r=null),fs(o),r=r.stateNode,tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(di,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=K.T,d=se.p,se.p=2,K.T=null;try{for(var m=i.onRecoverableError,v=0;v<c.length;v++){var w=c[v];m(w.value,{componentStack:w.stack})}}finally{K.T=r,se.p=d}}(Ns&3)!==0&&Jh(),es(i),d=i.pendingLanes,(o&261930)!==0&&(d&42)!==0?i===xp?bc++:(bc=0,xp=i):bc=0,wc(0)}}function x0(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,ic(r)))}function Jh(){return w0(),S0(),A0(),C0()}function C0(){if(qt!==5)return!1;var i=yr,r=Sp;Sp=0;var o=fs(Ns),c=K.T,d=se.p;try{se.p=32>o?32:o,K.T=null,o=Ap,Ap=null;var m=yr,v=Ns;if(qt=0,Po=yr=null,Ns=0,($e&6)!==0)throw Error(s(331));var w=$e;if($e|=4,l0(m.current),r0(m,m.current,v,o),$e=w,wc(0,!1),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(di,m)}catch{}return!0}finally{se.p=d,K.T=c,x0(i,r)}}function I0(i,r,o){r=Zn(o,r),r=sp(i.stateNode,r,2),i=hr(i,r,2),i!==null&&(ia(i,2),es(i))}function it(i,r,o){if(i.tag===3)I0(i,i,o);else for(;r!==null;){if(r.tag===3){I0(r,i,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(_r===null||!_r.has(c))){i=Zn(o,i),o=RE(2),c=hr(r,o,2),c!==null&&(NE(o,c,r,i),ia(c,2),es(c));break}}r=r.return}}function Rp(i,r,o){var c=i.pingCache;if(c===null){c=i.pingCache=new n1;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(o)||(Tp=!0,d.add(o),i=o1.bind(null,i,r,o),r.then(i,i))}function o1(i,r,o){var c=i.pingCache;c!==null&&c.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,ct===i&&(je&o)===o&&(bt===4||bt===3&&(je&62914560)===je&&300>yn()-Kh?($e&2)===0&&Lo(i,0):bp|=o,Mo===je&&(Mo=0)),es(i)}function R0(i,r){r===0&&(r=Qu()),i=_a(i,r),i!==null&&(ia(i,r),es(i))}function l1(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),R0(i,o)}function c1(i,r){var o=0;switch(i.tag){case 31:case 13:var c=i.stateNode,d=i.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(s(314))}c!==null&&c.delete(r),R0(i,o)}function u1(i,r){return Ht(i,r)}var Zh=null,jo=null,Np=!1,ed=!1,Op=!1,Er=0;function es(i){i!==jo&&i.next===null&&(jo===null?Zh=jo=i:jo=jo.next=i),ed=!0,Np||(Np=!0,d1())}function wc(i,r){if(!Op&&ed){Op=!0;do for(var o=!1,c=Zh;c!==null;){if(i!==0){var d=c.pendingLanes;if(d===0)var m=0;else{var v=c.suspendedLanes,w=c.pingedLanes;m=(1<<31-At(42|i)+1)-1,m&=d&~(v&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,k0(c,m))}else m=je,m=Li(c,c===ct?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||fi(c,m)||(o=!0,k0(c,m));c=c.next}while(o);Op=!1}}function h1(){N0()}function N0(){ed=Np=!1;var i=0;Er!==0&&b1()&&(i=Er);for(var r=yn(),o=null,c=Zh;c!==null;){var d=c.next,m=O0(c,r);m===0?(c.next=null,o===null?Zh=d:o.next=d,d===null&&(jo=o)):(o=c,(i!==0||(m&3)!==0)&&(ed=!0)),c=d}qt!==0&&qt!==5||wc(i),Er!==0&&(Er=0)}function O0(i,r){for(var o=i.suspendedLanes,c=i.pingedLanes,d=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var v=31-At(m),w=1<<v,N=d[v];N===-1?((w&o)===0||(w&c)!==0)&&(d[v]=am(w,r)):N<=r&&(i.expiredLanes|=w),m&=~w}if(r=ct,o=je,o=Li(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c=i.callbackNode,o===0||i===r&&(nt===2||nt===9)||i.cancelPendingCommit!==null)return c!==null&&c!==null&&Qs(c),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||fi(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(c!==null&&Qs(c),fs(o)){case 2:case 8:o=kl;break;case 32:o=Ws;break;case 268435456:o=Hu;break;default:o=Ws}return c=D0.bind(null,i),o=Ht(o,c),i.callbackPriority=r,i.callbackNode=o,r}return c!==null&&c!==null&&Qs(c),i.callbackPriority=2,i.callbackNode=null,2}function D0(i,r){if(qt!==0&&qt!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(Jh()&&i.callbackNode!==o)return null;var c=je;return c=Li(i,i===ct?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c===0?null:(f0(i,c,r),O0(i,yn()),i.callbackNode!=null&&i.callbackNode===o?D0.bind(null,i):null)}function k0(i,r){if(Jh())return null;f0(i,r,!0)}function d1(){S1(function(){($e&6)!==0?Ht(Dl,h1):N0()})}function Dp(){if(Er===0){var i=wo;i===0&&(i=Mi,Mi<<=1,(Mi&261888)===0&&(Mi=256)),Er=i}return Er}function M0(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:oo(""+i)}function P0(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function f1(i,r,o,c,d){if(r==="submit"&&o&&o.stateNode===d){var m=M0((d[$t]||null).action),v=c.submitter;v&&(r=(r=v[$t]||null)?M0(r.formAction):v.getAttribute("formAction"),r!==null&&(m=r,v=null));var w=new Yi("action","action",null,c,d);i.push({event:w,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Er!==0){var N=v?P0(d,v):new FormData(d);Jm(o,{pending:!0,data:N,method:d.method,action:m},null,N)}}else typeof m=="function"&&(w.preventDefault(),N=v?P0(d,v):new FormData(d),Jm(o,{pending:!0,data:N,method:d.method,action:m},m,N))},currentTarget:d}]})}}for(var kp=0;kp<pm.length;kp++){var Mp=pm[kp],m1=Mp.toLowerCase(),p1=Mp[0].toUpperCase()+Mp.slice(1);Ti(m1,"on"+p1)}Ti(dv,"onAnimationEnd"),Ti(fv,"onAnimationIteration"),Ti(mv,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(OI,"onTransitionRun"),Ti(DI,"onTransitionStart"),Ti(kI,"onTransitionCancel"),Ti(pv,"onTransitionEnd"),Hi("onMouseEnter",["mouseout","mouseover"]),Hi("onMouseLeave",["mouseout","mouseover"]),Hi("onPointerEnter",["pointerout","pointerover"]),Hi("onPointerLeave",["pointerout","pointerover"]),Bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sc));function L0(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var c=i[o],d=c.event;c=c.listeners;e:{var m=void 0;if(r)for(var v=c.length-1;0<=v;v--){var w=c[v],N=w.instance,z=w.currentTarget;if(w=w.listener,N!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=z;try{m(d)}catch(G){ph(G)}d.currentTarget=null,m=N}else for(v=0;v<c.length;v++){if(w=c[v],N=w.instance,z=w.currentTarget,w=w.listener,N!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=z;try{m(d)}catch(G){ph(G)}d.currentTarget=null,m=N}}}}function Me(i,r){var o=r[no];o===void 0&&(o=r[no]=new Set);var c=i+"__bubble";o.has(c)||(V0(r,i,2,!1),o.add(c))}function Pp(i,r,o){var c=0;r&&(c|=4),V0(o,i,c,r)}var td="_reactListening"+Math.random().toString(36).slice(2);function Lp(i){if(!i[td]){i[td]=!0,Ll.forEach(function(o){o!=="selectionchange"&&(g1.has(o)||Pp(o,!1,i),Pp(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[td]||(r[td]=!0,Pp("selectionchange",!1,r))}}function V0(i,r,o,c){switch(dT(r)){case 2:var d=q1;break;case 8:d=G1;break;default:d=Xp}o=d.bind(null,r,o,i),d=void 0,!ca||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?i.addEventListener(r,o,{capture:!0,passive:d}):i.addEventListener(r,o,!0):d!==void 0?i.addEventListener(r,o,{passive:d}):i.addEventListener(r,o,!1)}function Vp(i,r,o,c,d){var m=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var w=c.stateNode.containerInfo;if(w===d)break;if(v===4)for(v=c.return;v!==null;){var N=v.tag;if((N===3||N===4)&&v.stateNode.containerInfo===d)return;v=v.return}for(;w!==null;){if(v=zi(w),v===null)return;if(N=v.tag,N===5||N===6||N===26||N===27){c=m=v;continue e}w=w.parentNode}}c=c.return}tr(function(){var z=m,G=Wn(o),W=[];e:{var F=gv.get(i);if(F!==void 0){var q=Yi,oe=i;switch(i){case"keypress":if(ha(o)===0)break e;case"keydown":case"keyup":q=dh;break;case"focusin":oe="focus",q=fa;break;case"focusout":oe="blur",q=fa;break;case"beforeblur":case"afterblur":q=fa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Wl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=y;break;case dv:case fv:case mv:q=rh;break;case pv:q=A;break;case"scroll":case"scrollend":q=Ql;break;case"wheel":q=B;break;case"copy":case"cut":case"paste":q=ah;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=gs;break;case"toggle":case"beforetoggle":q=Re}var ye=(r&4)!==0,ot=!ye&&(i==="scroll"||i==="scrollend"),L=ye?F!==null?F+"Capture":null:F;ye=[];for(var O=z,U;O!==null;){var Q=O;if(U=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||U===null||L===null||(Q=_i(O,L),Q!=null&&ye.push(Ac(O,Q,U))),ot)break;O=O.return}0<ye.length&&(F=new q(F,oe,null,o,G),W.push({event:F,listeners:ye}))}}if((r&7)===0){e:{if(F=i==="mouseover"||i==="pointerover",q=i==="mouseout"||i==="pointerout",F&&o!==Gl&&(oe=o.relatedTarget||o.fromElement)&&(zi(oe)||oe[ji]))break e;if((q||F)&&(F=G.window===G?G:(F=G.ownerDocument)?F.defaultView||F.parentWindow:window,q?(oe=o.relatedTarget||o.toElement,q=z,oe=oe?zi(oe):null,oe!==null&&(ot=l(oe),ye=oe.tag,oe!==ot||ye!==5&&ye!==27&&ye!==6)&&(oe=null)):(q=null,oe=z),q!==oe)){if(ye=Wl,Q="onMouseLeave",L="onMouseEnter",O="mouse",(i==="pointerout"||i==="pointerover")&&(ye=gs,Q="onPointerLeave",L="onPointerEnter",O="pointer"),ot=q==null?F:Pn(q),U=oe==null?F:Pn(oe),F=new ye(Q,O+"leave",q,o,G),F.target=ot,F.relatedTarget=U,Q=null,zi(G)===z&&(ye=new ye(L,O+"enter",oe,o,G),ye.target=U,ye.relatedTarget=ot,Q=ye),ot=Q,q&&oe)t:{for(ye=_1,L=q,O=oe,U=0,Q=L;Q;Q=ye(Q))U++;Q=0;for(var pe=O;pe;pe=ye(pe))Q++;for(;0<U-Q;)L=ye(L),U--;for(;0<Q-U;)O=ye(O),Q--;for(;U--;){if(L===O||O!==null&&L===O.alternate){ye=L;break t}L=ye(L),O=ye(O)}ye=null}else ye=null;q!==null&&j0(W,F,q,ye,!1),oe!==null&&ot!==null&&j0(W,ot,oe,ye,!0)}}e:{if(F=z?Pn(z):window,q=F.nodeName&&F.nodeName.toLowerCase(),q==="select"||q==="input"&&F.type==="file")var Ge=tv;else if(Zy(F))if(nv)Ge=II;else{Ge=xI;var ue=AI}else q=F.nodeName,!q||q.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?z&&ao(z.elementType)&&(Ge=tv):Ge=CI;if(Ge&&(Ge=Ge(i,z))){ev(W,Ge,o,G);break e}ue&&ue(i,F,z),i==="focusout"&&z&&F.type==="number"&&z.memoizedProps.value!=null&&Bl(F,"number",F.value)}switch(ue=z?Pn(z):window,i){case"focusin":(Zy(ue)||ue.contentEditable==="true")&&(po=ue,dm=z,ec=null);break;case"focusout":ec=dm=po=null;break;case"mousedown":fm=!0;break;case"contextmenu":case"mouseup":case"dragend":fm=!1,uv(W,o,G);break;case"selectionchange":if(NI)break;case"keydown":case"keyup":uv(W,o,G)}var Oe;if(We)e:{switch(i){case"compositionstart":var Ue="onCompositionStart";break e;case"compositionend":Ue="onCompositionEnd";break e;case"compositionupdate":Ue="onCompositionUpdate";break e}Ue=void 0}else mo?ma(i,o)&&(Ue="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Ue="onCompositionStart");Ue&&($i&&o.locale!=="ko"&&(mo||Ue!=="onCompositionStart"?Ue==="onCompositionEnd"&&mo&&(Oe=Yl()):(Ki=G,Kl="value"in Ki?Ki.value:Ki.textContent,mo=!0)),ue=nd(z,Ue),0<ue.length&&(Ue=new Wi(Ue,i,null,o,G),W.push({event:Ue,listeners:ue}),Oe?Ue.data=Oe:(Oe=fo(o),Oe!==null&&(Ue.data=Oe)))),(Oe=Xn?TI(i,o):bI(i,o))&&(Ue=nd(z,"onBeforeInput"),0<Ue.length&&(ue=new Wi("onBeforeInput","beforeinput",null,o,G),W.push({event:ue,listeners:Ue}),ue.data=Oe)),f1(W,i,z,o,G)}L0(W,r)})}function Ac(i,r,o){return{instance:i,listener:r,currentTarget:o}}function nd(i,r){for(var o=r+"Capture",c=[];i!==null;){var d=i,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=_i(i,o),d!=null&&c.unshift(Ac(i,d,m)),d=_i(i,r),d!=null&&c.push(Ac(i,d,m))),i.tag===3)return c;i=i.return}return[]}function _1(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function j0(i,r,o,c,d){for(var m=r._reactName,v=[];o!==null&&o!==c;){var w=o,N=w.alternate,z=w.stateNode;if(w=w.tag,N!==null&&N===c)break;w!==5&&w!==26&&w!==27||z===null||(N=z,d?(z=_i(o,m),z!=null&&v.unshift(Ac(o,z,N))):d||(z=_i(o,m),z!=null&&v.push(Ac(o,z,N)))),o=o.return}v.length!==0&&i.push({event:r,listeners:v})}var y1=/\r\n?/g,v1=/\u0000|\uFFFD/g;function U0(i){return(typeof i=="string"?i:""+i).replace(y1,`
`).replace(v1,"")}function z0(i,r){return r=U0(r),U0(i)===r}function at(i,r,o,c,d,m){switch(o){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||xn(i,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&xn(i,""+c);break;case"className":Ln(i,"class",c);break;case"tabIndex":Ln(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Ln(i,o,c);break;case"style":ql(i,c,m);break;case"data":if(r!=="object"){Ln(i,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(o);break}c=oo(""+c),i.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&at(i,r,"name",d.name,d,null),at(i,r,"formEncType",d.formEncType,d,null),at(i,r,"formMethod",d.formMethod,d,null),at(i,r,"formTarget",d.formTarget,d,null)):(at(i,r,"encType",d.encType,d,null),at(i,r,"method",d.method,d,null),at(i,r,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(o);break}c=oo(""+c),i.setAttribute(o,c);break;case"onClick":c!=null&&(i.onclick=gi);break;case"onScroll":c!=null&&Me("scroll",i);break;case"onScrollEnd":c!=null&&Me("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(o=c.__html,o!=null){if(d.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}o=oo(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,""+c):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":c===!0?i.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(o,c):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(o,c):i.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(o):i.setAttribute(o,c);break;case"popover":Me("beforetoggle",i),Me("toggle",i),so(i,"popover",c);break;case"xlinkActuate":Lt(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Lt(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Lt(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Lt(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Lt(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Lt(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Lt(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Lt(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Lt(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":so(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=nh.get(o)||o,so(i,o,c))}}function jp(i,r,o,c,d,m){switch(o){case"style":ql(i,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(s(61));if(o=c.__html,o!=null){if(d.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof c=="string"?xn(i,c):(typeof c=="number"||typeof c=="bigint")&&xn(i,""+c);break;case"onScroll":c!=null&&Me("scroll",i);break;case"onScrollEnd":c!=null&&Me("scrollend",i);break;case"onClick":c!=null&&(i.onclick=gi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vl.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),r=o.slice(2,d?o.length-7:void 0),m=i[$t]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,d),typeof c=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,c,d);break e}o in i?i[o]=c:c===!0?i.setAttribute(o,""):so(i,o,c)}}}function on(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",i),Me("load",i);var c=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:at(i,r,m,v,o,null)}}d&&at(i,r,"srcSet",o.srcSet,o,null),c&&at(i,r,"src",o.src,o,null);return;case"input":Me("invalid",i);var w=m=v=d=null,N=null,z=null;for(c in o)if(o.hasOwnProperty(c)){var G=o[c];if(G!=null)switch(c){case"name":d=G;break;case"type":v=G;break;case"checked":N=G;break;case"defaultChecked":z=G;break;case"value":m=G;break;case"defaultValue":w=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,r));break;default:at(i,r,c,G,o,null)}}Zu(i,m,w,N,z,v,d,!1);return;case"select":Me("invalid",i),c=v=m=null;for(d in o)if(o.hasOwnProperty(d)&&(w=o[d],w!=null))switch(d){case"value":m=w;break;case"defaultValue":v=w;break;case"multiple":c=w;default:at(i,r,d,w,o,null)}r=m,o=v,i.multiple=!!c,r!=null?Xs(i,!!c,r,!1):o!=null&&Xs(i,!!c,o,!0);return;case"textarea":Me("invalid",i),m=d=c=null;for(v in o)if(o.hasOwnProperty(v)&&(w=o[v],w!=null))switch(v){case"value":c=w;break;case"defaultValue":d=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:at(i,r,v,w,o,null)}Js(i,c,d,m);return;case"option":for(N in o)if(o.hasOwnProperty(N)&&(c=o[N],c!=null))switch(N){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:at(i,r,N,c,o,null)}return;case"dialog":Me("beforetoggle",i),Me("toggle",i),Me("cancel",i),Me("close",i);break;case"iframe":case"object":Me("load",i);break;case"video":case"audio":for(c=0;c<Sc.length;c++)Me(Sc[c],i);break;case"image":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"embed":case"source":case"link":Me("error",i),Me("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in o)if(o.hasOwnProperty(z)&&(c=o[z],c!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:at(i,r,z,c,o,null)}return;default:if(ao(r)){for(G in o)o.hasOwnProperty(G)&&(c=o[G],c!==void 0&&jp(i,r,G,c,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(c=o[w],c!=null&&at(i,r,w,c,o,null))}function E1(i,r,o,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,v=null,w=null,N=null,z=null,G=null;for(q in o){var W=o[q];if(o.hasOwnProperty(q)&&W!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":N=W;default:c.hasOwnProperty(q)||at(i,r,q,null,c,W)}}for(var F in c){var q=c[F];if(W=o[F],c.hasOwnProperty(F)&&(q!=null||W!=null))switch(F){case"type":m=q;break;case"name":d=q;break;case"checked":z=q;break;case"defaultChecked":G=q;break;case"value":v=q;break;case"defaultValue":w=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:q!==W&&at(i,r,F,q,c,W)}}ro(i,v,w,N,z,G,m,d);return;case"select":q=v=w=F=null;for(m in o)if(N=o[m],o.hasOwnProperty(m)&&N!=null)switch(m){case"value":break;case"multiple":q=N;default:c.hasOwnProperty(m)||at(i,r,m,null,c,N)}for(d in c)if(m=c[d],N=o[d],c.hasOwnProperty(d)&&(m!=null||N!=null))switch(d){case"value":F=m;break;case"defaultValue":w=m;break;case"multiple":v=m;default:m!==N&&at(i,r,d,m,c,N)}r=w,o=v,c=q,F!=null?Xs(i,!!o,F,!1):!!c!=!!o&&(r!=null?Xs(i,!!o,r,!0):Xs(i,!!o,o?[]:"",!1));return;case"textarea":q=F=null;for(w in o)if(d=o[w],o.hasOwnProperty(w)&&d!=null&&!c.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:at(i,r,w,null,c,d)}for(v in c)if(d=c[v],m=o[v],c.hasOwnProperty(v)&&(d!=null||m!=null))switch(v){case"value":F=d;break;case"defaultValue":q=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:d!==m&&at(i,r,v,d,c,m)}eh(i,F,q);return;case"option":for(var oe in o)if(F=o[oe],o.hasOwnProperty(oe)&&F!=null&&!c.hasOwnProperty(oe))switch(oe){case"selected":i.selected=!1;break;default:at(i,r,oe,null,c,F)}for(N in c)if(F=c[N],q=o[N],c.hasOwnProperty(N)&&F!==q&&(F!=null||q!=null))switch(N){case"selected":i.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:at(i,r,N,F,c,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in o)F=o[ye],o.hasOwnProperty(ye)&&F!=null&&!c.hasOwnProperty(ye)&&at(i,r,ye,null,c,F);for(z in c)if(F=c[z],q=o[z],c.hasOwnProperty(z)&&F!==q&&(F!=null||q!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:at(i,r,z,F,c,q)}return;default:if(ao(r)){for(var ot in o)F=o[ot],o.hasOwnProperty(ot)&&F!==void 0&&!c.hasOwnProperty(ot)&&jp(i,r,ot,void 0,c,F);for(G in c)F=c[G],q=o[G],!c.hasOwnProperty(G)||F===q||F===void 0&&q===void 0||jp(i,r,G,F,c,q);return}}for(var L in o)F=o[L],o.hasOwnProperty(L)&&F!=null&&!c.hasOwnProperty(L)&&at(i,r,L,null,c,F);for(W in c)F=c[W],q=o[W],!c.hasOwnProperty(W)||F===q||F==null&&q==null||at(i,r,W,F,c,q)}function F0(i){switch(i){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function T1(){if(typeof performance.getEntriesByType=="function"){for(var i=0,r=0,o=performance.getEntriesByType("resource"),c=0;c<o.length;c++){var d=o[c],m=d.transferSize,v=d.initiatorType,w=d.duration;if(m&&w&&F0(v)){for(v=0,w=d.responseEnd,c+=1;c<o.length;c++){var N=o[c],z=N.startTime;if(z>w)break;var G=N.transferSize,W=N.initiatorType;G&&F0(W)&&(N=N.responseEnd,v+=G*(N<w?1:(w-z)/(N-z)))}if(--c,r+=8*(m+v)/(d.duration/1e3),i++,10<i)break}}if(0<i)return r/i/1e6}return navigator.connection&&(i=navigator.connection.downlink,typeof i=="number")?i:5}var Up=null,zp=null;function id(i){return i.nodeType===9?i:i.ownerDocument}function B0(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function H0(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Fp(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Bp=null;function b1(){var i=window.event;return i&&i.type==="popstate"?i===Bp?!1:(Bp=i,!0):(Bp=null,!1)}var q0=typeof setTimeout=="function"?setTimeout:void 0,w1=typeof clearTimeout=="function"?clearTimeout:void 0,G0=typeof Promise=="function"?Promise:void 0,S1=typeof queueMicrotask=="function"?queueMicrotask:typeof G0<"u"?function(i){return G0.resolve(null).then(i).catch(A1)}:q0;function A1(i){setTimeout(function(){throw i})}function Tr(i){return i==="head"}function K0(i,r){var o=r,c=0;do{var d=o.nextSibling;if(i.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"||o==="/&"){if(c===0){i.removeChild(d),Bo(r);return}c--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")c++;else if(o==="html")xc(i.ownerDocument.documentElement);else if(o==="head"){o=i.ownerDocument.head,xc(o);for(var m=o.firstChild;m;){var v=m.nextSibling,w=m.nodeName;m[Ui]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=v}}else o==="body"&&xc(i.ownerDocument.body);o=d}while(o);Bo(r)}function Y0(i,r){var o=i;i=0;do{var c=o.nextSibling;if(o.nodeType===1?r?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(r?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(i===0)break;i--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||i++;o=c}while(o)}function Hp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Hp(o),io(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function x1(i,r,o,c){for(;i.nodeType===1;){var d=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[Ui])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==d.rel||i.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||i.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||i.getAttribute("title")!==(d.title==null?null:d.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(d.src==null?null:d.src)||i.getAttribute("type")!==(d.type==null?null:d.type)||i.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=si(i.nextSibling),i===null)break}return null}function C1(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=si(i.nextSibling),i===null))return null;return i}function Q0(i,r){for(;i.nodeType!==8;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!r||(i=si(i.nextSibling),i===null))return null;return i}function qp(i){return i.data==="$?"||i.data==="$~"}function Gp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState!=="loading"}function I1(i,r){var o=i.ownerDocument;if(i.data==="$~")i._reactRetry=r;else if(i.data!=="$?"||o.readyState!=="loading")r();else{var c=function(){r(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),i._reactRetry=c}}function si(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return i}var Kp=null;function W0(i){i=i.nextSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="/$"||o==="/&"){if(r===0)return si(i.nextSibling);r--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||r++}i=i.nextSibling}return null}function $0(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(r===0)return i;r--}else o!=="/$"&&o!=="/&"||r++}i=i.previousSibling}return null}function X0(i,r,o){switch(r=id(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function xc(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);io(i)}var ri=new Map,J0=new Set;function sd(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var Os=se.d;se.d={f:R1,r:N1,D:O1,C:D1,L:k1,m:M1,X:L1,S:P1,M:V1};function R1(){var i=Os.f(),r=Wh();return i||r}function N1(i){var r=Qn(i);r!==null&&r.tag===5&&r.type==="form"?pE(r):Os.r(i)}var Uo=typeof document>"u"?null:document;function Z0(i,r,o){var c=Uo;if(c&&typeof r=="string"&&r){var d=An(r);d='link[rel="'+i+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),J0.has(d)||(J0.add(d),i={rel:i,crossOrigin:o,href:r},c.querySelector(d)===null&&(r=c.createElement("link"),on(r,"link",i),Pt(r),c.head.appendChild(r)))}}function O1(i){Os.D(i),Z0("dns-prefetch",i,null)}function D1(i,r){Os.C(i,r),Z0("preconnect",i,r)}function k1(i,r,o){Os.L(i,r,o);var c=Uo;if(c&&i&&r){var d='link[rel="preload"][as="'+An(r)+'"]';r==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+An(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+An(o.imageSizes)+'"]')):d+='[href="'+An(i)+'"]';var m=d;switch(r){case"style":m=zo(i);break;case"script":m=Fo(i)}ri.has(m)||(i=b({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),ri.set(m,i),c.querySelector(d)!==null||r==="style"&&c.querySelector(Cc(m))||r==="script"&&c.querySelector(Ic(m))||(r=c.createElement("link"),on(r,"link",i),Pt(r),c.head.appendChild(r)))}}function M1(i,r){Os.m(i,r);var o=Uo;if(o&&i){var c=r&&typeof r.as=="string"?r.as:"script",d='link[rel="modulepreload"][as="'+An(c)+'"][href="'+An(i)+'"]',m=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Fo(i)}if(!ri.has(m)&&(i=b({rel:"modulepreload",href:i},r),ri.set(m,i),o.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Ic(m)))return}c=o.createElement("link"),on(c,"link",i),Pt(c),o.head.appendChild(c)}}}function P1(i,r,o){Os.S(i,r,o);var c=Uo;if(c&&i){var d=Fi(c).hoistableStyles,m=zo(i);r=r||"default";var v=d.get(m);if(!v){var w={loading:0,preload:null};if(v=c.querySelector(Cc(m)))w.loading=5;else{i=b({rel:"stylesheet",href:i,"data-precedence":r},o),(o=ri.get(m))&&Yp(i,o);var N=v=c.createElement("link");Pt(N),on(N,"link",i),N._p=new Promise(function(z,G){N.onload=z,N.onerror=G}),N.addEventListener("load",function(){w.loading|=1}),N.addEventListener("error",function(){w.loading|=2}),w.loading|=4,rd(v,r,c)}v={type:"stylesheet",instance:v,count:1,state:w},d.set(m,v)}}}function L1(i,r){Os.X(i,r);var o=Uo;if(o&&i){var c=Fi(o).hoistableScripts,d=Fo(i),m=c.get(d);m||(m=o.querySelector(Ic(d)),m||(i=b({src:i,async:!0},r),(r=ri.get(d))&&Qp(i,r),m=o.createElement("script"),Pt(m),on(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function V1(i,r){Os.M(i,r);var o=Uo;if(o&&i){var c=Fi(o).hoistableScripts,d=Fo(i),m=c.get(d);m||(m=o.querySelector(Ic(d)),m||(i=b({src:i,async:!0,type:"module"},r),(r=ri.get(d))&&Qp(i,r),m=o.createElement("script"),Pt(m),on(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function eT(i,r,o,c){var d=(d=xe.current)?sd(d):null;if(!d)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=zo(o.href),o=Fi(d).hoistableStyles,c=o.get(r),c||(c={type:"style",instance:null,count:0,state:null},o.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=zo(o.href);var m=Fi(d).hoistableStyles,v=m.get(i);if(v||(d=d.ownerDocument||d,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,v),(m=d.querySelector(Cc(i)))&&!m._p&&(v.instance=m,v.state.loading=5),ri.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ri.set(i,o),m||j1(d,i,o,v.state))),r&&c===null)throw Error(s(528,""));return v}if(r&&c!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Fo(o),o=Fi(d).hoistableScripts,c=o.get(r),c||(c={type:"script",instance:null,count:0,state:null},o.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function zo(i){return'href="'+An(i)+'"'}function Cc(i){return'link[rel="stylesheet"]['+i+"]"}function tT(i){return b({},i,{"data-precedence":i.precedence,precedence:null})}function j1(i,r,o,c){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=i.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),on(r,"link",o),Pt(r),i.head.appendChild(r))}function Fo(i){return'[src="'+An(i)+'"]'}function Ic(i){return"script[async]"+i}function nT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var c=i.querySelector('style[data-href~="'+An(o.href)+'"]');if(c)return r.instance=c,Pt(c),c;var d=b({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),Pt(c),on(c,"style",d),rd(c,o.precedence,i),r.instance=c;case"stylesheet":d=zo(o.href);var m=i.querySelector(Cc(d));if(m)return r.state.loading|=4,r.instance=m,Pt(m),m;c=tT(o),(d=ri.get(d))&&Yp(c,d),m=(i.ownerDocument||i).createElement("link"),Pt(m);var v=m;return v._p=new Promise(function(w,N){v.onload=w,v.onerror=N}),on(m,"link",c),r.state.loading|=4,rd(m,o.precedence,i),r.instance=m;case"script":return m=Fo(o.src),(d=i.querySelector(Ic(m)))?(r.instance=d,Pt(d),d):(c=o,(d=ri.get(m))&&(c=b({},o),Qp(c,d)),i=i.ownerDocument||i,d=i.createElement("script"),Pt(d),on(d,"link",c),i.head.appendChild(d),r.instance=d);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,rd(c,o.precedence,i));return r.instance}function rd(i,r,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,m=d,v=0;v<c.length;v++){var w=c[v];if(w.dataset.precedence===r)m=w;else if(m!==d)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Yp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Qp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var ad=null;function iT(i,r,o){if(ad===null){var c=new Map,d=ad=new Map;d.set(o,c)}else d=ad,c=d.get(o),c||(c=new Map,d.set(o,c));if(c.has(i))return c;for(c.set(i,null),o=o.getElementsByTagName(i),d=0;d<o.length;d++){var m=o[d];if(!(m[Ui]||m[Mt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(r)||"";v=i+v;var w=c.get(v);w?w.push(m):c.set(v,[m])}}return c}function sT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function U1(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function rT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}function z1(i,r,o,c){if(o.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var d=zo(c.href),m=r.querySelector(Cc(d));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(i.count++,i=od.bind(i),r.then(i,i)),o.state.loading|=4,o.instance=m,Pt(m);return}m=r.ownerDocument||r,c=tT(c),(d=ri.get(d))&&Yp(c,d),m=m.createElement("link"),Pt(m);var v=m;v._p=new Promise(function(w,N){v.onload=w,v.onerror=N}),on(m,"link",c),o.instance=m}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(o,r),(r=o.state.preload)&&(o.state.loading&3)===0&&(i.count++,o=od.bind(i),r.addEventListener("load",o),r.addEventListener("error",o))}}var Wp=0;function F1(i,r){return i.stylesheets&&i.count===0&&cd(i,i.stylesheets),0<i.count||0<i.imgCount?function(o){var c=setTimeout(function(){if(i.stylesheets&&cd(i,i.stylesheets),i.unsuspend){var m=i.unsuspend;i.unsuspend=null,m()}},6e4+r);0<i.imgBytes&&Wp===0&&(Wp=62500*T1());var d=setTimeout(function(){if(i.waitingForImages=!1,i.count===0&&(i.stylesheets&&cd(i,i.stylesheets),i.unsuspend)){var m=i.unsuspend;i.unsuspend=null,m()}},(i.imgBytes>Wp?50:800)+r);return i.unsuspend=o,function(){i.unsuspend=null,clearTimeout(c),clearTimeout(d)}}:null}function od(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cd(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var ld=null;function cd(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,ld=new Map,r.forEach(B1,i),ld=null,od.call(i))}function B1(i,r){if(!(r.state.loading&4)){var o=ld.get(i);if(o)var c=o.get(null);else{o=new Map,ld.set(i,o);for(var d=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var v=d[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),c=v)}c&&o.set(null,c)}d=r.instance,v=d.getAttribute("data-precedence"),m=o.get(v)||c,m===c&&o.set(null,d),o.set(v,d),this.count++,c=od.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),m?m.parentNode.insertBefore(d,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(d,i.firstChild)),r.state.loading|=4}}var Rc={$$typeof:me,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function H1(i,r,o,c,d,m,v,w,N){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.hiddenUpdates=Vi(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.incompleteTransitions=new Map}function aT(i,r,o,c,d,m,v,w,N,z,G,W){return i=new H1(i,r,o,v,N,z,G,W,w),r=1,m===!0&&(r|=24),m=jn(3,null,null,r),i.current=m,m.stateNode=i,r=Im(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:c,isDehydrated:o,cache:r},Dm(m),i}function oT(i){return i?(i=yo,i):yo}function lT(i,r,o,c,d,m){d=oT(d),c.context===null?c.context=d:c.pendingContext=d,c=ur(r),c.payload={element:o},m=m===void 0?null:m,m!==null&&(c.callback=m),o=hr(i,c,r),o!==null&&(On(o,i,r),oc(o,i,r))}function cT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function $p(i,r){cT(i,r),(i=i.alternate)&&cT(i,r)}function uT(i){if(i.tag===13||i.tag===31){var r=_a(i,67108864);r!==null&&On(r,i,67108864),$p(i,67108864)}}function hT(i){if(i.tag===13||i.tag===31){var r=Hn();r=ra(r);var o=_a(i,r);o!==null&&On(o,i,r),$p(i,r)}}var ud=!0;function q1(i,r,o,c){var d=K.T;K.T=null;var m=se.p;try{se.p=2,Xp(i,r,o,c)}finally{se.p=m,K.T=d}}function G1(i,r,o,c){var d=K.T;K.T=null;var m=se.p;try{se.p=8,Xp(i,r,o,c)}finally{se.p=m,K.T=d}}function Xp(i,r,o,c){if(ud){var d=Jp(c);if(d===null)Vp(i,r,c,hd,o),fT(i,c);else if(Y1(d,i,r,o,c))c.stopPropagation();else if(fT(i,c),r&4&&-1<K1.indexOf(i)){for(;d!==null;){var m=Qn(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Pi(m.pendingLanes);if(v!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;v;){var N=1<<31-At(v);w.entanglements[1]|=N,v&=~N}es(m),($e&6)===0&&(Yh=yn()+500,wc(0))}}break;case 31:case 13:w=_a(m,2),w!==null&&On(w,m,2),Wh(),$p(m,2)}if(m=Jp(c),m===null&&Vp(i,r,c,hd,o),m===d)break;d=m}d!==null&&c.stopPropagation()}else Vp(i,r,c,null,o)}}function Jp(i){return i=Wn(i),Zp(i)}var hd=null;function Zp(i){if(hd=null,i=zi(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=u(r),i!==null)return i;i=null}else if(o===31){if(i=f(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return hd=i,null}function dT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ta()){case Dl:return 2;case kl:return 8;case Ws:case rm:return 32;case Hu:return 268435456;default:return 32}default:return 32}}var eg=!1,br=null,wr=null,Sr=null,Nc=new Map,Oc=new Map,Ar=[],K1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fT(i,r){switch(i){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Nc.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oc.delete(r.pointerId)}}function Dc(i,r,o,c,d,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},r!==null&&(r=Qn(r),r!==null&&uT(r)),i):(i.eventSystemFlags|=c,r=i.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),i)}function Y1(i,r,o,c,d){switch(r){case"focusin":return br=Dc(br,i,r,o,c,d),!0;case"dragenter":return wr=Dc(wr,i,r,o,c,d),!0;case"mouseover":return Sr=Dc(Sr,i,r,o,c,d),!0;case"pointerover":var m=d.pointerId;return Nc.set(m,Dc(Nc.get(m)||null,i,r,o,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Oc.set(m,Dc(Oc.get(m)||null,i,r,o,c,d)),!0}return!1}function mT(i){var r=zi(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=u(o),r!==null){i.blockedOn=r,mi(i.priority,function(){hT(o)});return}}else if(r===31){if(r=f(o),r!==null){i.blockedOn=r,mi(i.priority,function(){hT(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function dd(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Jp(i.nativeEvent);if(o===null){o=i.nativeEvent;var c=new o.constructor(o.type,o);Gl=c,o.target.dispatchEvent(c),Gl=null}else return r=Qn(o),r!==null&&uT(r),i.blockedOn=o,!1;r.shift()}return!0}function pT(i,r,o){dd(i)&&o.delete(r)}function Q1(){eg=!1,br!==null&&dd(br)&&(br=null),wr!==null&&dd(wr)&&(wr=null),Sr!==null&&dd(Sr)&&(Sr=null),Nc.forEach(pT),Oc.forEach(pT)}function fd(i,r){i.blockedOn===r&&(i.blockedOn=null,eg||(eg=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Q1)))}var md=null;function gT(i){md!==i&&(md=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){md===i&&(md=null);for(var r=0;r<i.length;r+=3){var o=i[r],c=i[r+1],d=i[r+2];if(typeof c!="function"){if(Zp(c||o)===null)continue;break}var m=Qn(o);m!==null&&(i.splice(r,3),r-=3,Jm(m,{pending:!0,data:d,method:o.method,action:c},c,d))}}))}function Bo(i){function r(N){return fd(N,i)}br!==null&&fd(br,i),wr!==null&&fd(wr,i),Sr!==null&&fd(Sr,i),Nc.forEach(r),Oc.forEach(r);for(var o=0;o<Ar.length;o++){var c=Ar[o];c.blockedOn===i&&(c.blockedOn=null)}for(;0<Ar.length&&(o=Ar[0],o.blockedOn===null);)mT(o),o.blockedOn===null&&Ar.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var d=o[c],m=o[c+1],v=d[$t]||null;if(typeof m=="function")v||gT(o);else if(v){var w=null;if(m&&m.hasAttribute("formAction")){if(d=m,v=m[$t]||null)w=v.formAction;else if(Zp(d)!==null)continue}else w=v.action;typeof w=="function"?o[c+1]=w:(o.splice(c,3),c-=3),gT(o)}}}function _T(){function i(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(v){return d=v})},focusReset:"manual",scroll:"manual"})}function r(){d!==null&&(d(),d=null),c||setTimeout(o,20)}function o(){if(!c&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,d=null;return navigation.addEventListener("navigate",i),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(o,100),function(){c=!0,navigation.removeEventListener("navigate",i),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),d!==null&&(d(),d=null)}}}function tg(i){this._internalRoot=i}pd.prototype.render=tg.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,c=Hn();lT(o,c,i,r,null,null)},pd.prototype.unmount=tg.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;lT(i.current,2,null,i,null,null),Wh(),r[ji]=null}};function pd(i){this._internalRoot=i}pd.prototype.unstable_scheduleHydration=function(i){if(i){var r=Wu();i={blockedOn:null,target:i,priority:r};for(var o=0;o<Ar.length&&r!==0&&r<Ar[o].priority;o++);Ar.splice(o,0,i),o===0&&mT(i)}};var yT=e.version;if(yT!=="19.2.3")throw Error(s(527,yT,"19.2.3"));se.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=g(r),i=i!==null?E(i):null,i=i===null?null:i.stateNode,i};var W1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gd.isDisabled&&gd.supportsFiber)try{di=gd.inject(W1),tn=gd}catch{}}return Mc.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,c="",d=AE,m=xE,v=CE;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError)),r=aT(i,1,!1,null,null,o,c,null,d,m,v,_T),i[ji]=r.current,Lp(i),new tg(r)},Mc.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var c=!1,d="",m=AE,v=xE,w=CE,N=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.formState!==void 0&&(N=o.formState)),r=aT(i,1,!0,r,o??null,c,d,N,m,v,w,_T),r.context=oT(null),o=r.current,c=Hn(),c=ra(c),d=ur(c),d.callback=null,hr(o,d,c),o=c,r.current.lanes=o,ia(r,o),es(r),i[ji]=r.current,Lp(i),new pd(r)},Mc.version="19.2.3",Mc}var IT;function aR(){if(IT)return sg.exports;IT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),sg.exports=rR(),sg.exports}var oR=aR();const lR=rS(oR);var ge=(n=>(n.HOME="HOME",n.MARKETPLACE="MARKETPLACE",n.CREATE="CREATE",n.SOCIAL="SOCIAL",n.PROFILE="PROFILE",n.AUTH="AUTH",n.HELP="HELP",n.CREATORS="CREATORS",n.BACKSTAGE="BACKSTAGE",n.ADMIN="ADMIN",n.USER_MANAGEMENT="USER_MANAGEMENT",n.MINTING="MINTING",n))(ge||{}),Gn=(n=>(n.LISTENER="LISTENER",n.FAN_CLUB="FAN_CLUB",n.LABEL_EXEC="LABEL_EXEC",n.DJ_PRO="DJ_PRO",n))(Gn||{});const cR=({setView:n})=>{const[e,t]=de.useState([]);return de.useEffect(()=>{(async()=>{try{const l=await(await fetch("https://tomato-elderly-lungfish-379.mypinata.cloud/ipfs/QmQd2yB5Tqr4T2pB1kP6s3jxJdFp1q1b1q1b1q1b1q1b1/CLOUDSHIP")).json();t(l)}catch(a){console.error("Error fetching NFTs:",a)}})()},[]),_.jsxs("div",{children:[_.jsx("title",{children:"LATITUDE | NFT Marketplace"}),_.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),_.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),_.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=JetBrains+Mono:wght@300;500&display=swap",rel:"stylesheet"}),_.jsxs("nav",{className:"nav-dock",children:[_.jsxs("div",{className:"logo",children:["LAT",_.jsx("span",{children:"ITUDE"})]}),_.jsxs("div",{className:"nav-links",children:[_.jsx("a",{href:"#",children:"Explore"}),_.jsx("a",{href:"#",children:"Cloudship"}),_.jsx("a",{href:"#",children:"Fleet"}),_.jsx("a",{href:"#",children:"Hangar"})]}),_.jsxs("div",{children:[_.jsx("button",{className:"nav-btn active",children:"0x7F...441"}),_.jsx("button",{onClick:()=>n(ge.HOME),className:"text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-latitude-red transition-colors",children:"Close"})]})]}),_.jsxs("div",{className:"main-container",children:[_.jsxs("div",{className:"hero-dock",children:[_.jsxs("div",{className:"hero-info",children:[_.jsx("span",{className:"cloudship-label",children:"LATITUDE SYSTEM v4.0"}),_.jsx("h1",{children:"THE NEW LACQUER STANDARD."}),_.jsxs("p",{className:"mb-8 font-mono text-sm leading-relaxed text-gray-600",children:["Digital assets docked in high-fidelity precision. ",_.jsx("br",{}),"Secure your position in the fleet."]}),_.jsx("button",{className:"cta-button",children:"Initialize Protocol"})]}),_.jsxs("div",{className:"hero-visual lacquer-surface",children:[_.jsx("div",{className:"specular-blob"}),_.jsx("div",{className:"h-full flex items-center justify-center",children:_.jsx("div",{className:"w-52 h-52 border-10 border-white transform rotate-45 flex items-center justify-center",children:_.jsx("div",{className:"w-36 h-36 bg-white"})})})]})]}),_.jsxs("div",{className:"section-header",children:[_.jsx("span",{className:"cloudship-label bg-black",children:"PRIORITY ACCESS"}),_.jsx("h2",{children:"Cloudship Limited Edition"}),_.jsx("p",{className:"font-mono text-xs mt-2",children:"Modular aerospace vessels available for immediate docking."})]}),_.jsx("div",{className:"cloudship-dock",children:e.map(s=>_.jsx("div",{className:"cloudship-card",children:_.jsxs("div",{className:"inner",children:[_.jsxs("div",{className:"visual-area",children:[_.jsx("img",{src:s.imageUrl,alt:s.name,className:"ship-shape"}),_.jsx("div",{className:"specular-blob"})]}),_.jsx("h3",{children:s.name}),_.jsxs("div",{className:"meta",children:[_.jsxs("span",{className:"price-tag",children:[s.price," ETH"]}),_.jsxs("div",{className:"stats-mono",children:[_.jsx("span",{children:"Engine: V-88"}),_.jsx("span",{children:"Core: Plasma"})]})]})]})},s.id))}),_.jsx("div",{className:"section-header",children:_.jsx("h2",{children:"Marketplace"})}),_.jsxs("div",{className:"market-grid",children:[_.jsxs("div",{className:"market-item",children:[_.jsx("div",{className:"h-44 bg-gray-100 mb-4 border border-gray-300"}),_.jsx("h4",{className:"text-sm font-bold",children:"LATITUDE FRAGMENT #091"}),_.jsxs("div",{className:"stats-mono",children:[_.jsx("span",{children:"Current Bid"}),_.jsx("span",{className:"text-red-600",children:"0.88 ETH"})]})]}),_.jsxs("div",{className:"market-item",children:[_.jsx("div",{className:"h-44 bg-gray-100 mb-4 border border-gray-300"}),_.jsx("h4",{className:"text-sm font-bold",children:"LATITUDE FRAGMENT #092"}),_.jsxs("div",{className:"stats-mono",children:[_.jsx("span",{children:"Current Bid"}),_.jsx("span",{className:"text-red-600",children:"1.12 ETH"})]})]}),_.jsxs("div",{className:"market-item",children:[_.jsx("div",{className:"h-44 bg-gray-100 mb-4 border border-gray-300"}),_.jsx("h4",{className:"text-sm font-bold",children:"LATITUDE FRAGMENT #093"}),_.jsxs("div",{className:"stats-mono",children:[_.jsx("span",{children:"Current Bid"}),_.jsx("span",{className:"text-red-600",children:"0.45 ETH"})]})]}),_.jsxs("div",{className:"market-item",children:[_.jsx("div",{className:"h-44 bg-gray-100 mb-4 border border-gray-300"}),_.jsx("h4",{className:"text-sm font-bold",children:"LATITUDE FRAGMENT #094"}),_.jsxs("div",{className:"stats-mono",children:[_.jsx("span",{children:"Current Bid"}),_.jsx("span",{className:"text-red-600",children:"2.40 ETH"})]})]})]})]})]})},uR=()=>{};var RT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=function(n,e){if(!n)throw vl(e)},vl=function(n){return new Error("Firebase Database ("+aS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},hR=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],u=n[t++],f=n[t++],p=((a&7)<<18|(l&63)<<12|(u&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],u=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|u&63)}}return e.join("")},E_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],u=a+1<n.length,f=u?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,E=l>>2,b=(l&3)<<4|f>>4;let S=(f&15)<<2|g>>6,M=g&63;p||(M=64,u||(S=64)),s.push(t[E],t[b],t[S],t[M])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(oS(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],f=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const b=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||f==null||g==null||b==null)throw new dR;const S=l<<2|f>>4;if(s.push(S),g!==64){const M=f<<4&240|g>>2;if(s.push(M),b!==64){const H=g<<6&192|b;s.push(H)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class dR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lS=function(n){const e=oS(n);return E_.encodeByteArray(e,!0)},Fd=function(n){return lS(n).replace(/\./g,"")},Bd=function(n){try{return E_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(n){return cS(void 0,n)}function cS(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!mR(t)||(n[t]=cS(n[t],e[t]));return n}function mR(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=()=>pR().__FIREBASE_DEFAULTS__,_R=()=>{if(typeof process>"u"||typeof RT>"u")return;const n=RT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bd(n[1]);return e&&JSON.parse(e)},xf=()=>{try{return uR()||gR()||_R()||yR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},uS=n=>{var e,t;return(t=(e=xf())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},hS=n=>{const e=uS(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},dS=()=>{var n;return(n=xf())==null?void 0:n.config},fS=n=>{var e;return(e=xf())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function T_(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Fd(JSON.stringify(t)),Fd(JSON.stringify(u)),""].join(".")}const Yc={};function vR(){const n={prod:[],emulator:[]};for(const e of Object.keys(Yc))Yc[e]?n.emulator.push(e):n.prod.push(e);return n}function ER(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let NT=!1;function b_(n,e){if(typeof window>"u"||typeof document>"u"||!$r(window.location.host)||Yc[n]===e||Yc[n]||NT)return;Yc[n]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",l=vR().prod.length>0;function u(){const S=document.getElementById(s);S&&S.remove()}function f(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,M){S.setAttribute("width","24"),S.setAttribute("id",M),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{NT=!0,u()},S}function E(S,M){S.setAttribute("id",M),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function b(){const S=ER(s),M=t("text"),H=document.getElementById(M)||document.createElement("span"),$=t("learnmore"),J=document.getElementById($)||document.createElement("a"),ee=t("preprendIcon"),ce=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const me=S.element;f(me),E(J,$);const we=g();p(ce,ee),me.append(ce,H,J,we),document.body.appendChild(me)}l?(H.innerText="Preview backend disconnected.",ce.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ce.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,H.innerText="Preview backend running in this workspace."),H.setAttribute("id",M)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function w_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_n())}function TR(){var e;const n=(e=xf())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function gS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wR(){const n=_n();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function SR(){return aS.NODE_ADMIN===!0}function AR(){return!TR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _S(){try{return typeof indexedDB=="object"}catch{return!1}}function yS(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function xR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR="FirebaseError";class Oi extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=CR,Object.setPrototypeOf(this,Oi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ya.prototype.create)}}class Ya{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],u=l?IR(l,s):"Error",f=`${this.serviceName}: ${u} (${a}).`;return new Oi(a,f,s)}}function IR(n,e){return n.replace(RR,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const RR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(n){return JSON.parse(n)}function Kt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=ru(Bd(l[0])||""),t=ru(Bd(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},NR=function(n){const e=vS(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},OR=function(n){const e=vS(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function al(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function kg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Hd(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function Vs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],u=e[a];if(OT(l)&&OT(u)){if(!Vs(l,u))return!1}else if(l!==u)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function OT(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function zc(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Fc(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let b=0;b<16;b++)s[b]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let b=0;b<16;b++)s[b]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let b=16;b<80;b++){const S=s[b-3]^s[b-8]^s[b-14]^s[b-16];s[b]=(S<<1|S>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],u=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,E;for(let b=0;b<80;b++){b<40?b<20?(g=f^l&(u^f),E=1518500249):(g=l^u^f,E=1859775393):b<60?(g=l&u|f&(l|u),E=2400959708):(g=l^u^f,E=3395469782);const S=(a<<5|a>>>27)+g+p+E+s[b]&4294967295;p=f,f=u,u=(l<<30|l>>>2)&4294967295,l=a,a=S}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let u=this.inbuf_;for(;a<t;){if(u===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[u]=e.charCodeAt(a),++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}else for(;a<t;)if(l[u]=e[a],++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function kR(n,e){const t=new MR(n,e);return t.subscribe.bind(t)}class MR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");PR(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=lg),a.error===void 0&&(a.error=lg),a.complete===void 0&&(a.complete=lg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function lg(){}function Cf(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,te(s<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(s)-56320;a=65536+(l<<10)+u}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},If=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=1e3,jR=2,UR=14400*1e3,zR=.5;function DT(n,e=VR,t=jR){const s=e*Math.pow(t,n),a=Math.round(zR*s*(Math.random()-.5)*2);return Math.min(UR,s+a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n){return n&&n._delegate?n._delegate:n}class ci{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Su;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HR(e))try{this.getOrInitializeService({instanceIdentifier:Na})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=Na){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Na){return this.instances.has(e)}getOptions(e=Na){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&u.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const l=this.instances.get(s);return l&&e(l,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:BR(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Na){return this.component?this.component.multipleInstances?e:Na:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BR(n){return n===Na?void 0:n}function HR(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new FR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const GR={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},KR=Pe.INFO,YR={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},QR=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=YR[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Au{constructor(e){this.name=e,this._logLevel=KR,this._logHandler=QR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const WR=(n,e)=>e.some(t=>n instanceof t);let kT,MT;function $R(){return kT||(kT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XR(){return MT||(MT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ES=new WeakMap,Mg=new WeakMap,TS=new WeakMap,cg=new WeakMap,S_=new WeakMap;function JR(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",u)},l=()=>{t(Mr(n.result)),a()},u=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&ES.set(t,n)}).catch(()=>{}),S_.set(e,n),e}function ZR(n){if(Mg.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",u),n.removeEventListener("abort",u)},l=()=>{t(),a()},u=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",u),n.addEventListener("abort",u)});Mg.set(n,e)}let Pg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Mg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||TS.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Mr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function eN(n){Pg=n(Pg)}function tN(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ug(this),e,...t);return TS.set(s,e.sort?e.sort():[e]),Mr(s)}:XR().includes(n)?function(...e){return n.apply(ug(this),e),Mr(ES.get(this))}:function(...e){return Mr(n.apply(ug(this),e))}}function nN(n){return typeof n=="function"?tN(n):(n instanceof IDBTransaction&&ZR(n),WR(n,$R())?new Proxy(n,Pg):n)}function Mr(n){if(n instanceof IDBRequest)return JR(n);if(cg.has(n))return cg.get(n);const e=nN(n);return e!==n&&(cg.set(n,e),S_.set(e,n)),e}const ug=n=>S_.get(n);function bS(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const u=indexedDB.open(n,e),f=Mr(u);return s&&u.addEventListener("upgradeneeded",p=>{s(Mr(u.result),p.oldVersion,p.newVersion,Mr(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const iN=["get","getKey","getAll","getAllKeys","count"],sN=["put","add","delete","clear"],hg=new Map;function PT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(hg.get(e))return hg.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=sN.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||iN.includes(t)))return;const l=async function(u,...f){const p=this.transaction(u,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),a&&p.done]))[0]};return hg.set(e,l),l}eN(n=>({...n,get:(e,t,s)=>PT(e,t)||n.get(e,t,s),has:(e,t)=>!!PT(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(aN(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function aN(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lg="@firebase/app",LT="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new Au("@firebase/app"),oN="@firebase/app-compat",lN="@firebase/analytics-compat",cN="@firebase/analytics",uN="@firebase/app-check-compat",hN="@firebase/app-check",dN="@firebase/auth",fN="@firebase/auth-compat",mN="@firebase/database",pN="@firebase/data-connect",gN="@firebase/database-compat",_N="@firebase/functions",yN="@firebase/functions-compat",vN="@firebase/installations",EN="@firebase/installations-compat",TN="@firebase/messaging",bN="@firebase/messaging-compat",wN="@firebase/performance",SN="@firebase/performance-compat",AN="@firebase/remote-config",xN="@firebase/remote-config-compat",CN="@firebase/storage",IN="@firebase/storage-compat",RN="@firebase/firestore",NN="@firebase/ai",ON="@firebase/firestore-compat",DN="firebase",kN="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="[DEFAULT]",MN={[Lg]:"fire-core",[oN]:"fire-core-compat",[cN]:"fire-analytics",[lN]:"fire-analytics-compat",[hN]:"fire-app-check",[uN]:"fire-app-check-compat",[dN]:"fire-auth",[fN]:"fire-auth-compat",[mN]:"fire-rtdb",[pN]:"fire-data-connect",[gN]:"fire-rtdb-compat",[_N]:"fire-fn",[yN]:"fire-fn-compat",[vN]:"fire-iid",[EN]:"fire-iid-compat",[TN]:"fire-fcm",[bN]:"fire-fcm-compat",[wN]:"fire-perf",[SN]:"fire-perf-compat",[AN]:"fire-rc",[xN]:"fire-rc-compat",[CN]:"fire-gcs",[IN]:"fire-gcs-compat",[RN]:"fire-fst",[ON]:"fire-fst-compat",[NN]:"fire-vertex","fire-js":"fire-js",[DN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=new Map,PN=new Map,jg=new Map;function VT(n,e){try{n.container.addComponent(e)}catch(t){js.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ni(n){const e=n.name;if(jg.has(e))return js.debug(`There were multiple attempts to register component ${e}.`),!1;jg.set(e,n);for(const t of qd.values())VT(t,n);for(const t of PN.values())VT(t,n);return!0}function Xr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Tn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new Ya("app","Firebase",LN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=kN;function A_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Vg,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw Pr.create("bad-app-name",{appName:String(a)});if(t||(t=dS()),!t)throw Pr.create("no-options");const l=qd.get(a);if(l){if(Vs(t,l.options)&&Vs(s,l.config))return l;throw Pr.create("duplicate-app",{appName:a})}const u=new qR(a);for(const p of jg.values())u.addComponent(p);const f=new VN(t,s,u);return qd.set(a,f),f}function Rf(n=Vg){const e=qd.get(n);if(!e&&n===Vg&&dS())return A_();if(!e)throw Pr.create("no-app",{appName:n});return e}function Mn(n,e,t){let s=MN[n]??n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const u=[`Unable to register library "${s}" with version "${e}":`];a&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),js.warn(u.join(" "));return}Ni(new ci(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN="firebase-heartbeat-database",UN=1,au="firebase-heartbeat-store";let dg=null;function wS(){return dg||(dg=bS(jN,UN,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(au)}catch(t){console.warn(t)}}}}).catch(n=>{throw Pr.create("idb-open",{originalErrorMessage:n.message})})),dg}async function zN(n){try{const t=(await wS()).transaction(au),s=await t.objectStore(au).get(SS(n));return await t.done,s}catch(e){if(e instanceof Oi)js.warn(e.message);else{const t=Pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});js.warn(t.message)}}}async function jT(n,e){try{const s=(await wS()).transaction(au,"readwrite");await s.objectStore(au).put(e,SS(n)),await s.done}catch(t){if(t instanceof Oi)js.warn(t.message);else{const s=Pr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});js.warn(s.message)}}}function SS(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=1024,BN=30;class HN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new GN(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=UT();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(u=>u.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>BN){const u=KN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){js.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=UT(),{heartbeatsToSend:s,unsentEntries:a}=qN(this._heartbeatsCache.heartbeats),l=Fd(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return js.warn(t),""}}}function UT(){return new Date().toISOString().substring(0,10)}function qN(n,e=FN){const t=[];let s=n.slice();for(const a of n){const l=t.find(u=>u.agent===a.agent);if(l){if(l.dates.push(a.date),zT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),zT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class GN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _S()?yS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zN(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return jT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return jT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zT(n){return Fd(JSON.stringify({version:2,heartbeats:n})).length}function KN(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(n){Ni(new ci("platform-logger",e=>new rN(e),"PRIVATE")),Ni(new ci("heartbeat",e=>new HN(e),"PRIVATE")),Mn(Lg,LT,n),Mn(Lg,LT,"esm2020"),Mn("fire-js","")}YN("");var QN="firebase",WN="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn(QN,WN,"app");const AS="@firebase/installations",x_="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=1e4,CS=`w:${x_}`,IS="FIS_v2",$N="https://firebaseinstallations.googleapis.com/v1",XN=3600*1e3,JN="installations",ZN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ja=new Ya(JN,ZN,eO);function RS(n){return n instanceof Oi&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS({projectId:n}){return`${$N}/projects/${n}/installations`}function OS(n){return{token:n.token,requestStatus:2,expiresIn:nO(n.expiresIn),creationTime:Date.now()}}async function DS(n,e){const s=(await e.json()).error;return ja.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function kS({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function tO(n,{refreshToken:e}){const t=kS(n);return t.append("Authorization",iO(e)),t}async function MS(n){const e=await n();return e.status>=500&&e.status<600?n():e}function nO(n){return Number(n.replace("s","000"))}function iO(n){return`${IS} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sO({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=NS(n),a=kS(n),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const u={fid:t,authVersion:IS,appId:n.appId,sdkVersion:CS},f={method:"POST",headers:a,body:JSON.stringify(u)},p=await MS(()=>fetch(s,f));if(p.ok){const g=await p.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:OS(g.authToken)}}else throw await DS("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO=/^[cdef][\w-]{21}$/,Ug="";function oO(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=lO(n);return aO.test(t)?t:Ug}catch{return Ug}}function lO(n){return rO(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=new Map;function VS(n,e){const t=Nf(n);jS(t,e),cO(t,e)}function jS(n,e){const t=LS.get(n);if(t)for(const s of t)s(e)}function cO(n,e){const t=uO();t&&t.postMessage({key:n,fid:e}),hO()}let ka=null;function uO(){return!ka&&"BroadcastChannel"in self&&(ka=new BroadcastChannel("[Firebase] FID Change"),ka.onmessage=n=>{jS(n.data.key,n.data.fid)}),ka}function hO(){LS.size===0&&ka&&(ka.close(),ka=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO="firebase-installations-database",fO=1,Ua="firebase-installations-store";let fg=null;function C_(){return fg||(fg=bS(dO,fO,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ua)}}})),fg}async function Gd(n,e){const t=Nf(n),a=(await C_()).transaction(Ua,"readwrite"),l=a.objectStore(Ua),u=await l.get(t);return await l.put(e,t),await a.done,(!u||u.fid!==e.fid)&&VS(n,e.fid),e}async function US(n){const e=Nf(n),s=(await C_()).transaction(Ua,"readwrite");await s.objectStore(Ua).delete(e),await s.done}async function Of(n,e){const t=Nf(n),a=(await C_()).transaction(Ua,"readwrite"),l=a.objectStore(Ua),u=await l.get(t),f=e(u);return f===void 0?await l.delete(t):await l.put(f,t),await a.done,f&&(!u||u.fid!==f.fid)&&VS(n,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(n){let e;const t=await Of(n.appConfig,s=>{const a=mO(s),l=pO(n,a);return e=l.registrationPromise,l.installationEntry});return t.fid===Ug?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function mO(n){const e=n||{fid:oO(),registrationStatus:0};return zS(e)}function pO(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(ja.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=gO(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_O(n)}:{installationEntry:e}}async function gO(n,e){try{const t=await sO(n,e);return Gd(n.appConfig,t)}catch(t){throw RS(t)&&t.customData.serverCode===409?await US(n.appConfig):await Gd(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function _O(n){let e=await FT(n.appConfig);for(;e.registrationStatus===1;)await PS(100),e=await FT(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await I_(n);return s||t}return e}function FT(n){return Of(n,e=>{if(!e)throw ja.create("installation-not-found");return zS(e)})}function zS(n){return yO(n)?{fid:n.fid,registrationStatus:0}:n}function yO(n){return n.registrationStatus===1&&n.registrationTime+xS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vO({appConfig:n,heartbeatServiceProvider:e},t){const s=EO(n,t),a=tO(n,t),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const u={installation:{sdkVersion:CS,appId:n.appId}},f={method:"POST",headers:a,body:JSON.stringify(u)},p=await MS(()=>fetch(s,f));if(p.ok){const g=await p.json();return OS(g)}else throw await DS("Generate Auth Token",p)}function EO(n,{fid:e}){return`${NS(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(n,e=!1){let t;const s=await Of(n.appConfig,l=>{if(!FS(l))throw ja.create("not-registered");const u=l.authToken;if(!e&&wO(u))return l;if(u.requestStatus===1)return t=TO(n,e),l;{if(!navigator.onLine)throw ja.create("app-offline");const f=AO(l);return t=bO(n,f),f}});return t?await t:s.authToken}async function TO(n,e){let t=await BT(n.appConfig);for(;t.authToken.requestStatus===1;)await PS(100),t=await BT(n.appConfig);const s=t.authToken;return s.requestStatus===0?R_(n,e):s}function BT(n){return Of(n,e=>{if(!FS(e))throw ja.create("not-registered");const t=e.authToken;return xO(t)?{...e,authToken:{requestStatus:0}}:e})}async function bO(n,e){try{const t=await vO(n,e),s={...e,authToken:t};return await Gd(n.appConfig,s),t}catch(t){if(RS(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await US(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Gd(n.appConfig,s)}throw t}}function FS(n){return n!==void 0&&n.registrationStatus===2}function wO(n){return n.requestStatus===2&&!SO(n)}function SO(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+XN}function AO(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function xO(n){return n.requestStatus===1&&n.requestTime+xS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CO(n){const e=n,{installationEntry:t,registrationPromise:s}=await I_(e);return s?s.catch(console.error):R_(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IO(n,e=!1){const t=n;return await RO(t),(await R_(t,e)).token}async function RO(n){const{registrationPromise:e}=await I_(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(n){if(!n||!n.options)throw mg("App Configuration");if(!n.name)throw mg("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw mg(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function mg(n){return ja.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS="installations",OO="installations-internal",DO=n=>{const e=n.getProvider("app").getImmediate(),t=NO(e),s=Xr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},kO=n=>{const e=n.getProvider("app").getImmediate(),t=Xr(e,BS).getImmediate();return{getId:()=>CO(t),getToken:a=>IO(t,a)}};function MO(){Ni(new ci(BS,DO,"PUBLIC")),Ni(new ci(OO,kO,"PRIVATE"))}MO();Mn(AS,x_);Mn(AS,x_,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="analytics",PO="firebase_id",LO="origin",VO=60*1e3,jO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",N_="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new Au("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Kn=new Ya("analytics","Analytics",UO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(n){if(!n.startsWith(N_)){const e=Kn.create("invalid-gtag-resource",{gtagURL:n});return wn.warn(e.message),""}return n}function HS(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function FO(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function BO(n,e){const t=FO("firebase-js-sdk-policy",{createScriptURL:zO}),s=document.createElement("script"),a=`${N_}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(a):a,s.async=!0,document.head.appendChild(s)}function HO(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function qO(n,e,t,s,a,l){const u=s[a];try{if(u)await e[u];else{const p=(await HS(t)).find(g=>g.measurementId===a);p&&await e[p.appId]}}catch(f){wn.error(f)}n("config",a,l)}async function GO(n,e,t,s,a){try{let l=[];if(a&&a.send_to){let u=a.send_to;Array.isArray(u)||(u=[u]);const f=await HS(t);for(const p of u){const g=f.find(b=>b.measurementId===p),E=g&&e[g.appId];if(E)l.push(E);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",s,a||{})}catch(l){wn.error(l)}}function KO(n,e,t,s){async function a(l,...u){try{if(l==="event"){const[f,p]=u;await GO(n,e,t,f,p)}else if(l==="config"){const[f,p]=u;await qO(n,e,t,s,f,p)}else if(l==="consent"){const[f,p]=u;n("consent",f,p)}else if(l==="get"){const[f,p,g]=u;n("get",f,p,g)}else if(l==="set"){const[f]=u;n("set",f)}else n(l,...u)}catch(f){wn.error(f)}}return a}function YO(n,e,t,s,a){let l=function(...u){window[s].push(arguments)};return window[a]&&typeof window[a]=="function"&&(l=window[a]),window[a]=KO(l,n,e,t),{gtagCore:l,wrappedGtag:window[a]}}function QO(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(N_)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO=30,$O=1e3;class XO{constructor(e={},t=$O){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const qS=new XO;function JO(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ZO(n){var u;const{appId:e,apiKey:t}=n,s={method:"GET",headers:JO(t)},a=jO.replace("{app-id}",e),l=await fetch(a,s);if(l.status!==200&&l.status!==304){let f="";try{const p=await l.json();(u=p.error)!=null&&u.message&&(f=p.error.message)}catch{}throw Kn.create("config-fetch-failed",{httpStatus:l.status,responseMessage:f})}return l.json()}async function e2(n,e=qS,t){const{appId:s,apiKey:a,measurementId:l}=n.options;if(!s)throw Kn.create("no-app-id");if(!a){if(l)return{measurementId:l,appId:s};throw Kn.create("no-api-key")}const u=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new i2;return setTimeout(async()=>{f.abort()},VO),GS({appId:s,apiKey:a,measurementId:l},u,f,e)}async function GS(n,{throttleEndTimeMillis:e,backoffCount:t},s,a=qS){var f;const{appId:l,measurementId:u}=n;try{await t2(s,e)}catch(p){if(u)return wn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:l,measurementId:u};throw p}try{const p=await ZO(n);return a.deleteThrottleMetadata(l),p}catch(p){const g=p;if(!n2(g)){if(a.deleteThrottleMetadata(l),u)return wn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:l,measurementId:u};throw p}const E=Number((f=g==null?void 0:g.customData)==null?void 0:f.httpStatus)===503?DT(t,a.intervalMillis,WO):DT(t,a.intervalMillis),b={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return a.setThrottleMetadata(l,b),wn.debug(`Calling attemptFetch again in ${E} millis`),GS(n,b,s,a)}}function t2(n,e){return new Promise((t,s)=>{const a=Math.max(e-Date.now(),0),l=setTimeout(t,a);n.addEventListener(()=>{clearTimeout(l),s(Kn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function n2(n){if(!(n instanceof Oi)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class i2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function s2(n,e,t,s,a){if(a&&a.global){n("event",t,s);return}else{const l=await e,u={...s,send_to:l};n("event",t,u)}}async function r2(n,e,t,s){if(s&&s.global){const a={};for(const l of Object.keys(t))a[`user_properties.${l}`]=t[l];return n("set",a),Promise.resolve()}else{const a=await e;n("config",a,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a2(){if(_S())try{await yS()}catch(n){return wn.warn(Kn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return wn.warn(Kn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function o2(n,e,t,s,a,l,u){const f=e2(n);f.then(S=>{t[S.measurementId]=S.appId,n.options.measurementId&&S.measurementId!==n.options.measurementId&&wn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>wn.error(S)),e.push(f);const p=a2().then(S=>{if(S)return s.getId()}),[g,E]=await Promise.all([f,p]);QO(l)||BO(l,g.measurementId),a("js",new Date);const b=(u==null?void 0:u.config)??{};return b[LO]="firebase",b.update=!0,E!=null&&(b[PO]=E),a("config",g.measurementId,b),g.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e){this.app=e}_delete(){return delete Zo[this.app.options.appId],Promise.resolve()}}let Zo={},HT=[];const qT={};let pg="dataLayer",c2="gtag",GT,O_,KT=!1;function u2(){const n=[];if(pS()&&n.push("This is a browser extension environment."),xR()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,a)=>`(${a+1}) ${s}`).join(" "),t=Kn.create("invalid-analytics-context",{errorInfo:e});wn.warn(t.message)}}function h2(n,e,t){u2();const s=n.options.appId;if(!s)throw Kn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)wn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Kn.create("no-api-key");if(Zo[s]!=null)throw Kn.create("already-exists",{id:s});if(!KT){HO(pg);const{wrappedGtag:l,gtagCore:u}=YO(Zo,HT,qT,pg,c2);O_=l,GT=u,KT=!0}return Zo[s]=o2(n,HT,qT,e,GT,pg,t),new l2(n)}function d2(n=Rf()){n=vt(n);const e=Xr(n,Kd);return e.isInitialized()?e.getImmediate():f2(n)}function f2(n,e={}){const t=Xr(n,Kd);if(t.isInitialized()){const a=t.getImmediate();if(Vs(e,t.getOptions()))return a;throw Kn.create("already-initialized")}return t.initialize({options:e})}function m2(n,e,t){n=vt(n),r2(O_,Zo[n.app.options.appId],e,t).catch(s=>wn.error(s))}function p2(n,e,t,s){n=vt(n),s2(O_,Zo[n.app.options.appId],e,t,s).catch(a=>wn.error(a))}const YT="@firebase/analytics",QT="0.10.19";function g2(){Ni(new ci(Kd,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return h2(s,a,t)},"PUBLIC")),Ni(new ci("analytics-internal",n,"PRIVATE")),Mn(YT,QT),Mn(YT,QT,"esm2020");function n(e){try{const t=e.getProvider(Kd).getImmediate();return{logEvent:(s,a,l)=>p2(t,s,a,l),setUserProperties:(s,a)=>m2(t,s,a)}}catch(t){throw Kn.create("interop-component-reg-failed",{reason:t})}}}g2();function KS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _2=KS,YS=new Ya("auth","Firebase",KS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=new Au("@firebase/auth");function y2(n,...e){Yd.logLevel<=Pe.WARN&&Yd.warn(`Auth (${Qa}): ${n}`,...e)}function xd(n,...e){Yd.logLevel<=Pe.ERROR&&Yd.error(`Auth (${Qa}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n,...e){throw k_(n,...e)}function Ii(n,...e){return k_(n,...e)}function D_(n,e,t){const s={..._2(),[e]:t};return new Ya("auth","Firebase",s).create(e,{appName:n.name})}function is(n){return D_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function v2(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&ui(n,"argument-error"),D_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function k_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return YS.create(n,...e)}function ve(n,e,...t){if(!n)throw k_(e,...t)}function ks(n){const e="INTERNAL ASSERTION FAILED: "+n;throw xd(e),new Error(e)}function Us(n,e){n||ks(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function E2(){return WT()==="http:"||WT()==="https:"}function WT(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E2()||pS()||"connection"in navigator)?navigator.onLine:!0}function b2(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Us(t>e,"Short delay should be less than long delay!"),this.isMobile=w_()||gS()}get(){return T2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(n,e){Us(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ks("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ks("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ks("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],A2=new xu(3e4,6e4);function Jr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Zr(n,e,t,s,a={}){return WS(n,a,async()=>{let l={},u={};s&&(e==="GET"?u=s:l={body:JSON.stringify(s)});const f=El({key:n.config.apiKey,...u}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:p,...l};return bR()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&$r(n.emulatorConfig.host)&&(g.credentials="include"),QS.fetch()(await $S(n,n.config.apiHost,t,f),g)})}async function WS(n,e,t){n._canInitEmulator=!1;const s={...w2,...e};try{const a=new C2(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw _d(n,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const f=l.ok?u.errorMessage:u.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw _d(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw _d(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw _d(n,"user-disabled",u);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw D_(n,E,g);ui(n,E)}}catch(a){if(a instanceof Oi)throw a;ui(n,"network-request-failed",{message:String(a)})}}async function Cu(n,e,t,s,a={}){const l=await Zr(n,e,t,s,a);return"mfaPendingCredential"in l&&ui(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function $S(n,e,t,s){const a=`${e}${t}?${s}`,l=n,u=l.config.emulator?M_(n.config,a):`${n.config.apiScheme}://${a}`;return S2.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function x2(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class C2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ii(this.auth,"network-request-failed")),A2.get())})}}function _d(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Ii(n,e,s);return a.customData._tokenResponse=t,a}function $T(n){return n!==void 0&&n.enterprise!==void 0}class I2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return x2(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function R2(n,e){return Zr(n,"GET","/v2/recaptchaConfig",Jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(n,e){return Zr(n,"POST","/v1/accounts:delete",e)}async function Qd(n,e){return Zr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function O2(n,e=!1){const t=vt(n),s=await t.getIdToken(e),a=P_(s);ve(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,u=l==null?void 0:l.sign_in_provider;return{claims:a,token:s,authTime:Qc(gg(a.auth_time)),issuedAtTime:Qc(gg(a.iat)),expirationTime:Qc(gg(a.exp)),signInProvider:u||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function gg(n){return Number(n)*1e3}function P_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return xd("JWT malformed, contained fewer than 3 sections"),null;try{const a=Bd(t);return a?JSON.parse(a):(xd("Failed to decode base64 JWT payload"),null)}catch(a){return xd("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function XT(n){const e=P_(n);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ou(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Oi&&D2(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function D2({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qc(this.lastLoginAt),this.creationTime=Qc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wd(n){var b;const e=n.auth,t=await n.getIdToken(),s=await ou(n,Qd(e,{idToken:t}));ve(s==null?void 0:s.users.length,e,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const l=(b=a.providerUserInfo)!=null&&b.length?XS(a.providerUserInfo):[],u=P2(n.providerData,l),f=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!(u!=null&&u.length),g=f?p:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new Fg(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(n,E)}async function M2(n){const e=vt(n);await Wd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function P2(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function XS(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(n,e){const t=await WS(n,{},async()=>{const s=El({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,u=await $S(n,a,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return n.emulatorConfig&&$r(n.emulatorConfig.host)&&(p.credentials="include"),QS.fetch()(u,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function V2(n,e){return Zr(n,"POST","/v2/accounts:revokeToken",Jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):XT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=XT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await L2(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,u=new el;return s&&(ve(typeof s=="string","internal-error",{appName:e}),u.refreshToken=s),a&&(ve(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),l&&(ve(typeof l=="number","internal-error",{appName:e}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new el,this.toJSON())}_performRefresh(){return ks("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n,e){ve(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ai{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new k2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Fg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await ou(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return O2(this,e)}reload(){return M2(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ai({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Wd(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(is(this.auth));const e=await this.getIdToken();return await ou(this,N2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,l=t.phoneNumber??void 0,u=t.photoURL??void 0,f=t.tenantId??void 0,p=t._redirectEventId??void 0,g=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:b,emailVerified:S,isAnonymous:M,providerData:H,stsTokenManager:$}=t;ve(b&&$,e,"internal-error");const J=el.fromJSON(this.name,$);ve(typeof b=="string",e,"internal-error"),Cr(s,e.name),Cr(a,e.name),ve(typeof S=="boolean",e,"internal-error"),ve(typeof M=="boolean",e,"internal-error"),Cr(l,e.name),Cr(u,e.name),Cr(f,e.name),Cr(p,e.name),Cr(g,e.name),Cr(E,e.name);const ee=new Ai({uid:b,auth:e,email:a,emailVerified:S,displayName:s,isAnonymous:M,photoURL:u,phoneNumber:l,tenantId:f,stsTokenManager:J,createdAt:g,lastLoginAt:E});return H&&Array.isArray(H)&&(ee.providerData=H.map(ce=>({...ce}))),p&&(ee._redirectEventId=p),ee}static async _fromIdTokenResponse(e,t,s=!1){const a=new el;a.updateFromServerResponse(t);const l=new Ai({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Wd(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];ve(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?XS(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),f=new el;f.updateFromIdToken(s);const p=new Ai({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:u}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Fg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=new Map;function Ms(n){Us(n instanceof Function,"Expected a class definition");let e=JT.get(n);return e?(Us(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,JT.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}JS.type="NONE";const ZT=JS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(n,e,t){return`firebase:${n}:${e}:${t}`}class tl{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=Cd(this.userKey,a.apiKey,l),this.fullPersistenceKey=Cd("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Qd(this.auth,{idToken:e}).catch(()=>{});return t?Ai._fromGetAccountInfoResponse(this.auth,t,e):null}return Ai._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new tl(Ms(ZT),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Ms(ZT);const u=Cd(s,e.config.apiKey,e.name);let f=null;for(const g of t)try{const E=await g._get(u);if(E){let b;if(typeof E=="string"){const S=await Qd(e,{idToken:E}).catch(()=>{});if(!S)break;b=await Ai._fromGetAccountInfoResponse(e,S,E)}else b=Ai._fromJSON(e,E);g!==l&&(f=b),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new tl(l,e,s):(l=p[0],f&&await l._set(u,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(u)}catch{}})),new tl(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ZS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sA(e))return"Blackberry";if(rA(e))return"Webos";if(eA(e))return"Safari";if((e.includes("chrome/")||tA(e))&&!e.includes("edge/"))return"Chrome";if(iA(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ZS(n=_n()){return/firefox\//i.test(n)}function eA(n=_n()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tA(n=_n()){return/crios\//i.test(n)}function nA(n=_n()){return/iemobile/i.test(n)}function iA(n=_n()){return/android/i.test(n)}function sA(n=_n()){return/blackberry/i.test(n)}function rA(n=_n()){return/webos/i.test(n)}function L_(n=_n()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function j2(n=_n()){var e;return L_(n)&&!!((e=window.navigator)!=null&&e.standalone)}function U2(){return wR()&&document.documentMode===10}function aA(n=_n()){return L_(n)||iA(n)||rA(n)||sA(n)||/windows phone/i.test(n)||nA(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(n,e=[]){let t;switch(n){case"Browser":t=eb(_n());break;case"Worker":t=`${eb(_n())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Qa}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((u,f)=>{try{const p=e(l);u(p)}catch(p){f(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F2(n,e={}){return Zr(n,"GET","/v2/passwordPolicy",Jr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2=6;class H2{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??B2,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tb(this),this.idTokenSubscription=new tb(this),this.beforeStateQueue=new z2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=YS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ms(t)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await tl.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Qd(this,{idToken:e}),s=await Ai._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(Tn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===f)&&(p!=null&&p.user)&&(s=p.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wd(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=b2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(is(this));const t=e?vt(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(is(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(is(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ms(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await F2(this),t=new H2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ya("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await V2(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ms(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await tl.create(this,[Ms(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(f,this,"internal-error"),f.then(()=>{u||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&y2(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function qs(n){return vt(n)}class tb{constructor(e){this.auth=e,this.observer=null,this.addObserver=kR(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Df={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function G2(n){Df=n}function lA(n){return Df.loadJS(n)}function K2(){return Df.recaptchaEnterpriseScript}function Y2(){return Df.gapiScript}function Q2(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class W2{constructor(){this.enterprise=new $2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class $2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const X2="recaptcha-enterprise",cA="NO_RECAPTCHA";class J2{constructor(e){this.type=X2,this.auth=qs(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,f)=>{R2(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new I2(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,u(g.siteKey)}}).catch(p=>{f(p)})})}function a(l,u,f){const p=window.grecaptcha;$T(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{u(g)}).catch(()=>{u(cA)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new W2().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{s(this.auth).then(f=>{if(!t&&$T(window.grecaptcha))a(f,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=K2();p.length!==0&&(p+=f),lA(p).then(()=>{a(f,l,u)}).catch(g=>{u(g)})}}).catch(f=>{u(f)})})}}async function nb(n,e,t,s=!1,a=!1){const l=new J2(n);let u;if(a)u=cA;else try{u=await l.verify(t)}catch{u=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Bg(n,e,t,s,a){var l;if((l=n._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await nb(n,e,t,t==="getOobCode");return s(n,u)}else return s(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await nb(n,e,t,t==="getOobCode");return s(n,f)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(n,e){const t=Xr(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Vs(l,e??{}))return a;ui(a,"already-initialized")}return t.initialize({options:e})}function eD(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ms);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function tD(n,e,t){const s=qs(n);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=uA(e),{host:u,port:f}=nD(e),p=f===null?"":`:${f}`,g={url:`${l}//${u}${p}/`},E=Object.freeze({host:u,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(Vs(g,s.config.emulator)&&Vs(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,$r(u)?(T_(`${l}//${u}${p}`),b_("Auth",!0)):iD()}function uA(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function nD(n){const e=uA(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:ib(s.substr(l.length+1))}}else{const[l,u]=s.split(":");return{host:l,port:ib(u)}}}function ib(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function iD(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ks("not implemented")}_getIdTokenResponse(e){return ks("not implemented")}_linkToIdToken(e,t){return ks("not implemented")}_getReauthenticationResolver(e){return ks("not implemented")}}async function sD(n,e){return Zr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rD(n,e){return Cu(n,"POST","/v1/accounts:signInWithPassword",Jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aD(n,e){return Cu(n,"POST","/v1/accounts:signInWithEmailLink",Jr(n,e))}async function oD(n,e){return Cu(n,"POST","/v1/accounts:signInWithEmailLink",Jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu extends V_{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new lu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new lu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bg(e,t,"signInWithPassword",rD);case"emailLink":return aD(e,{email:this._email,oobCode:this._password});default:ui(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bg(e,s,"signUpPassword",sD);case"emailLink":return oD(e,{idToken:t,email:this._email,oobCode:this._password});default:ui(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(n,e){return Cu(n,"POST","/v1/accounts:signInWithIdp",Jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD="http://localhost";class za extends V_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new za(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ui("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...l}=t;if(!s||!a)return null;const u=new za(s,a);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return nl(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,nl(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nl(e,t)}buildRequest(){const e={requestUri:lD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=El(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uD(n){const e=zc(Fc(n)).link,t=e?zc(Fc(e)).deep_link_id:null,s=zc(Fc(n)).deep_link_id;return(s?zc(Fc(s)).link:null)||s||t||e||n}class j_{constructor(e){const t=zc(Fc(e)),s=t.apiKey??null,a=t.oobCode??null,l=cD(t.mode??null);ve(s&&a&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=a,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=uD(e);try{return new j_(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(){this.providerId=Tl.PROVIDER_ID}static credential(e,t){return lu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=j_.parseLink(t);return ve(s,"argument-error"),lu._fromEmailAndCode(e,s.code,s.tenantId)}}Tl.PROVIDER_ID="password";Tl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Tl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends U_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Iu{constructor(){super("facebook.com")}static credential(e){return za._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends Iu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return za._fromParams({providerId:Ds.PROVIDER_ID,signInMethod:Ds.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ds.credentialFromTaggedObject(e)}static credentialFromError(e){return Ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ds.credential(t,s)}catch{return null}}}Ds.GOOGLE_SIGN_IN_METHOD="google.com";Ds.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Iu{constructor(){super("github.com")}static credential(e){return za._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Iu{constructor(){super("twitter.com")}static credential(e,t){return za._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Or.credential(t,s)}catch{return null}}}Or.TWITTER_SIGN_IN_METHOD="twitter.com";Or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(n,e){return Cu(n,"POST","/v1/accounts:signUp",Jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await Ai._fromIdTokenResponse(e,s,a),u=sb(s);return new zs({user:l,providerId:u,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=sb(s);return new zs({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function sb(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hD(n){var a;if(Tn(n.app))return Promise.reject(is(n));const e=qs(n);if(await e._initializationPromise,(a=e.currentUser)!=null&&a.isAnonymous)return new zs({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await hA(e,{returnSecureToken:!0}),s=await zs._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d extends Oi{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,$d.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new $d(e,t,s,a)}}function dA(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?$d._fromErrorAndOperation(n,l,e,s):l})}async function dD(n,e,t=!1){const s=await ou(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return zs._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fD(n,e,t=!1){const{auth:s}=n;if(Tn(s.app))return Promise.reject(is(s));const a="reauthenticate";try{const l=await ou(n,dA(s,a,e,n),t);ve(l.idToken,s,"internal-error");const u=P_(l.idToken);ve(u,s,"internal-error");const{sub:f}=u;return ve(n.uid===f,s,"user-mismatch"),zs._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&ui(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fA(n,e,t=!1){if(Tn(n.app))return Promise.reject(is(n));const s="signIn",a=await dA(n,s,e),l=await zs._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}async function mD(n,e){return fA(qs(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(n){const e=qs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pD(n,e,t){if(Tn(n.app))return Promise.reject(is(n));const s=qs(n),u=await Bg(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hA).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&mA(n),p}),f=await zs._fromIdTokenResponse(s,"signIn",u);return await s._updateCurrentUser(f.user),f}function gD(n,e,t){return Tn(n.app)?Promise.reject(is(n)):mD(vt(n),Tl.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&mA(n),s})}function _D(n,e,t,s){return vt(n).onIdTokenChanged(e,t,s)}function yD(n,e,t){return vt(n).beforeAuthStateChanged(e,t)}function vD(n,e,t,s){return vt(n).onAuthStateChanged(e,t,s)}function ED(n){return vt(n).signOut()}const Xd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xd,"1"),this.storage.removeItem(Xd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD=1e3,bD=10;class gA extends pA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=aA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,f,p)=>{this.notifyListeners(u,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(s);!t&&this.localCache[s]===u||this.notifyListeners(s,u)},l=this.storage.getItem(s);U2()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,bD):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},TD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gA.type="LOCAL";const wD=gA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A extends pA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_A.type="SESSION";const yA=_A;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SD(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new kf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const f=Array.from(u).map(async g=>g(t.origin,l)),p=await SD(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,u;return new Promise((f,p)=>{const g=z_("",20);a.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);u={messageChannel:a,onMessage(b){const S=b;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(S.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(){return window}function xD(n){ss().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(){return typeof ss().WorkerGlobalScope<"u"&&typeof ss().importScripts=="function"}async function CD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ID(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function RD(){return vA()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="firebaseLocalStorageDb",ND=1,Jd="firebaseLocalStorage",TA="fbase_key";class Ru{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mf(n,e){return n.transaction([Jd],e?"readwrite":"readonly").objectStore(Jd)}function OD(){const n=indexedDB.deleteDatabase(EA);return new Ru(n).toPromise()}function Hg(){const n=indexedDB.open(EA,ND);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Jd,{keyPath:TA})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Jd)?e(s):(s.close(),await OD(),e(await Hg()))})})}async function rb(n,e,t){const s=Mf(n,!0).put({[TA]:e,value:t});return new Ru(s).toPromise()}async function DD(n,e){const t=Mf(n,!1).get(e),s=await new Ru(t).toPromise();return s===void 0?null:s.value}function ab(n,e){const t=Mf(n,!0).delete(e);return new Ru(t).toPromise()}const kD=800,MD=3;class bA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>MD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kf._getInstance(RD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await CD(),!this.activeServiceWorker)return;this.sender=new AD(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ID()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hg();return await rb(e,Xd,"1"),await ab(e,Xd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>rb(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>DD(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ab(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Mf(a,!1).getAll();return new Ru(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bA.type="LOCAL";const PD=bA;new xu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(n,e){return e?Ms(e):(ve(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_ extends V_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nl(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function LD(n){return fA(n.auth,new F_(n),n.bypassAuthState)}function VD(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),fD(t,new F_(n),n.bypassAuthState)}async function jD(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),dD(t,new F_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:u,type:f}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LD;case"linkViaPopup":case"linkViaRedirect":return jD;case"reauthViaPopup":case"reauthViaRedirect":return VD;default:ui(this.auth,"internal-error")}}resolve(e){Us(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Us(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD=new xu(2e3,1e4);async function zD(n,e,t){if(Tn(n.app))return Promise.reject(Ii(n,"operation-not-supported-in-this-environment"));const s=qs(n);v2(n,e,U_);const a=wA(s,t);return new Ma(s,"signInViaPopup",e,a).executeNotNull()}class Ma extends SA{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Ma.currentPopupAction&&Ma.currentPopupAction.cancel(),Ma.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){Us(this.filter.length===1,"Popup operations only handle one event");const e=z_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ii(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ii(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ma.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ii(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UD.get())};e()}}Ma.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD="pendingRedirect",Id=new Map;class BD extends SA{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Id.get(this.auth._key());if(!e){try{const s=await HD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Id.set(this.auth._key(),e)}return this.bypassAuthState||Id.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HD(n,e){const t=KD(e),s=GD(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function qD(n,e){Id.set(n._key(),e)}function GD(n){return Ms(n._redirectPersistence)}function KD(n){return Cd(FD,n.config.apiKey,n.name)}async function YD(n,e,t=!1){if(Tn(n.app))return Promise.reject(is(n));const s=qs(n),a=wA(s,e),u=await new BD(s,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await s._persistUserIfCurrent(u.user),await s._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD=600*1e3;class WD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$D(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!AA(e)){const a=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Ii(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QD&&this.cachedEventUids.clear(),this.cachedEventUids.has(ob(e))}saveEventToCache(e){this.cachedEventUids.add(ob(e)),this.lastProcessedEventTime=Date.now()}}function ob(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function AA({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $D(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AA(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XD(n,e={}){return Zr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZD=/^https?/;async function ek(n){if(n.config.emulator)return;const{authorizedDomains:e}=await XD(n);for(const t of e)try{if(tk(t))return}catch{}ui(n,"unauthorized-domain")}function tk(n){const e=zg(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===s}if(!ZD.test(t))return!1;if(JD.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=new xu(3e4,6e4);function lb(){const n=ss().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ik(n){return new Promise((e,t)=>{var a,l,u;function s(){lb(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lb(),t(Ii(n,"network-request-failed"))},timeout:nk.get()})}if((l=(a=ss().gapi)==null?void 0:a.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((u=ss().gapi)!=null&&u.load)s();else{const f=Q2("iframefcb");return ss()[f]=()=>{gapi.load?s():t(Ii(n,"network-request-failed"))},lA(`${Y2()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw Rd=null,e})}let Rd=null;function sk(n){return Rd=Rd||ik(n),Rd}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=new xu(5e3,15e3),ak="__/auth/iframe",ok="emulator/auth/iframe",lk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ck=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uk(n){const e=n.config;ve(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?M_(e,ok):`https://${n.config.authDomain}/${ak}`,s={apiKey:e.apiKey,appName:n.name,v:Qa},a=ck.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${El(s).slice(1)}`}async function hk(n){const e=await sk(n),t=ss().gapi;return ve(t,n,"internal-error"),e.open({where:document.body,url:uk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lk,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const u=Ii(n,"network-request-failed"),f=ss().setTimeout(()=>{l(u)},rk.get());function p(){ss().clearTimeout(f),a(s)}s.ping(p).then(p,()=>{l(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fk=500,mk=600,pk="_blank",gk="http://localhost";class cb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _k(n,e,t,s=fk,a=mk){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p={...dk,width:s.toString(),height:a.toString(),top:l,left:u},g=_n().toLowerCase();t&&(f=tA(g)?pk:t),ZS(g)&&(e=e||gk,p.scrollbars="yes");const E=Object.entries(p).reduce((S,[M,H])=>`${S}${M}=${H},`,"");if(j2(g)&&f!=="_self")return yk(e||"",f),new cb(null);const b=window.open(e||"",f,E);ve(b,n,"popup-blocked");try{b.focus()}catch{}return new cb(b)}function yk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk="__/auth/handler",Ek="emulator/auth/handler",Tk=encodeURIComponent("fac");async function ub(n,e,t,s,a,l){ve(n.config.authDomain,n,"auth-domain-config-required"),ve(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Qa,eventId:a};if(e instanceof U_){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",kg(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,b]of Object.entries({}))u[E]=b}if(e instanceof Iu){const E=e.getScopes().filter(b=>b!=="");E.length>0&&(u.scopes=E.join(","))}n.tenantId&&(u.tid=n.tenantId);const f=u;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const p=await n._getAppCheckToken(),g=p?`#${Tk}=${encodeURIComponent(p)}`:"";return`${bk(n)}?${El(f).slice(1)}${g}`}function bk({config:n}){return n.emulator?M_(n,Ek):`https://${n.authDomain}/${vk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="webStorageSupport";class wk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yA,this._completeRedirectFn=YD,this._overrideRedirectResult=qD}async _openPopup(e,t,s,a){var u;Us((u=this.eventManagers[e._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const l=await ub(e,t,s,zg(),a);return _k(e,l,z_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await ub(e,t,s,zg(),a);return xD(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Us(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await hk(e),s=new WD(e);return t.register("authEvent",a=>(ve(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_g,{type:_g},a=>{var u;const l=(u=a==null?void 0:a[0])==null?void 0:u[_g];l!==void 0&&t(!!l),ui(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ek(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return aA()||eA()||L_()}}const Sk=wk;var hb="@firebase/auth",db="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ck(n){Ni(new ci("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=s.options;ve(u&&!u.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:u,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oA(n)},g=new q2(s,a,l,p);return eD(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ni(new ci("auth-internal",e=>{const t=qs(e.getProvider("auth").getImmediate());return(s=>new Ak(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(hb,db,xk(n)),Mn(hb,db,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=300,Rk=fS("authIdTokenMaxAge")||Ik;let fb=null;const Nk=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Rk)return;const a=t==null?void 0:t.token;fb!==a&&(fb=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function xA(n=Rf()){const e=Xr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Z2(n,{popupRedirectResolver:Sk,persistence:[PD,wD,yA]}),s=fS("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const u=Nk(l.toString());yD(t,u,()=>u(t.currentUser)),_D(t,f=>u(f))}}const a=uS("auth");return a&&tD(t,`http://${a}`),t}function Ok(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}G2({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=Ii("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",Ok().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ck("Browser");var mb={};const pb="@firebase/database",gb="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let CA="";function Dk(n){CA=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Kt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ru(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ds(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kk(e)}}catch{}return new Mk},Pa=IA("localStorage"),Pk=IA("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new Au("@firebase/database"),Lk=(function(){let n=1;return function(){return n++}})(),RA=function(n){const e=LR(n),t=new DR;t.update(e);const s=t.digest();return E_.encodeByteArray(s)},Nu=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Nu.apply(null,s):typeof s=="object"?e+=Kt(s):e+=s,e+=" "}return e};let Wc=null,_b=!0;const Vk=function(n,e){te(!0,"Can't turn on custom loggers persistently."),il.logLevel=Pe.VERBOSE,Wc=il.log.bind(il)},cn=function(...n){if(_b===!0&&(_b=!1,Wc===null&&Pk.get("logging_enabled")===!0&&Vk()),Wc){const e=Nu.apply(null,n);Wc(e)}},Ou=function(n){return function(...e){cn(n,...e)}},qg=function(...n){const e="FIREBASE INTERNAL ERROR: "+Nu(...n);il.error(e)},Fs=function(...n){const e=`FIREBASE FATAL ERROR: ${Nu(...n)}`;throw il.error(e),new Error(e)},Sn=function(...n){const e="FIREBASE WARNING: "+Nu(...n);il.warn(e)},jk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Sn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},B_=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Uk=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ol="[MIN_NAME]",Fa="[MAX_NAME]",Wa=function(n,e){if(n===e)return 0;if(n===ol||e===Fa)return-1;if(e===ol||n===Fa)return 1;{const t=yb(n),s=yb(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},zk=function(n,e){return n===e?0:n<e?-1:1},Pc=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Kt(e))},H_=function(n){if(typeof n!="object"||n===null)return Kt(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Kt(e[s]),t+=":",t+=H_(n[e[s]]);return t+="}",t},NA=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function hn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const OA=function(n){te(!B_(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,u,f,p;n===0?(l=0,u=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=f+s,u=Math.round(n*Math.pow(2,t-f)-Math.pow(2,t))):(l=0,u=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const E=g.join("");let b="";for(p=0;p<64;p+=8){let S=parseInt(E.substr(p,8),2).toString(16);S.length===1&&(S="0"+S),b=b+S}return b.toLowerCase()},Fk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Bk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Hk(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const qk=new RegExp("^-?(0*)\\d{1,10}$"),Gk=-2147483648,Kk=2147483647,yb=function(n){if(qk.test(n)){const e=Number(n);if(e>=Gk&&e<=Kk)return e}return null},bl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Sn("Exception was thrown by user callback.",t),e},Math.floor(0))}},Yk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$c=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Tn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Sn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(cn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Sn(e)}}class Nd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Nd.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="5",DA="v",kA="s",MA="r",PA="f",LA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,VA="ls",jA="p",Gg="ac",UA="websocket",zA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,t,s,a,l=!1,u="",f=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pa.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pa.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function $k(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function BA(n,e,t){te(typeof e=="string","typeof type must == string"),te(typeof t=="object","typeof params must == object");let s;if(e===UA)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===zA)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$k(n)&&(t.ns=n.namespace);const a=[];return hn(t,(l,u)=>{a.push(l+"="+u)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.counters_={}}incrementCounter(e,t=1){ds(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return fR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg={},vg={};function G_(n){const e=n.toString();return yg[e]||(yg[e]=new Xk),yg[e]}function Jk(n,e){const t=n.toString();return vg[t]||(vg[t]=e()),vg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&bl(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb="start",eM="close",tM="pLPCommand",nM="pRTLPCB",HA="id",qA="pw",GA="ser",iM="cb",sM="seg",rM="ts",aM="d",oM="dframe",KA=1870,YA=30,lM=KA-YA,cM=25e3,uM=3e4;class Jo{constructor(e,t,s,a,l,u,f){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ou(e),this.stats_=G_(t),this.urlFn=p=>(this.appCheckToken&&(p[Gg]=this.appCheckToken),BA(t,zA,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Zk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(uM)),Uk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new K_((...l)=>{const[u,f,p,g,E]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===vb)this.id=f,this.password=p;else if(u===eM)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[vb]="t",s[GA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[iM]=this.scriptTagHolder.uniqueCallbackIdentifier),s[DA]=q_,this.transportSessionId&&(s[kA]=this.transportSessionId),this.lastSessionId&&(s[VA]=this.lastSessionId),this.applicationId&&(s[jA]=this.applicationId),this.appCheckToken&&(s[Gg]=this.appCheckToken),typeof location<"u"&&location.hostname&&LA.test(location.hostname)&&(s[MA]=PA);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jo.forceAllow_=!0}static forceDisallow(){Jo.forceDisallow_=!0}static isAvailable(){return Jo.forceAllow_?!0:!Jo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Fk()&&!Bk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Kt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=lS(t),a=NA(s,lM);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[oM]="t",s[HA]=e,s[qA]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Kt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class K_{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Lk(),window[tM+this.uniqueCallbackIdentifier]=e,window[nM+this.uniqueCallbackIdentifier]=t,this.myIFrame=K_.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){cn("frame writing exception"),f.stack&&cn(f.stack),cn(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||cn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[HA]=this.myID,e[qA]=this.myPW,e[GA]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+YA+s.length<=KA;){const u=this.pendingSegs.shift();s=s+"&"+sM+a+"="+u.seg+"&"+rM+a+"="+u.ts+"&"+aM+a+"="+u.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(cM)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{cn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM=16384,dM=45e3;let Zd=null;typeof MozWebSocket<"u"?Zd=MozWebSocket:typeof WebSocket<"u"&&(Zd=WebSocket);class Si{constructor(e,t,s,a,l,u,f){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ou(this.connId),this.stats_=G_(t),this.connURL=Si.connectionURL_(t,u,f,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const u={};return u[DA]=q_,typeof location<"u"&&location.hostname&&LA.test(location.hostname)&&(u[MA]=PA),t&&(u[kA]=t),s&&(u[VA]=s),a&&(u[Gg]=a),l&&(u[jA]=l),BA(e,UA,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pa.set("previous_websocket_failure",!0);try{let s;SR(),this.mySock=new Zd(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){Si.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Zd!==null&&!Si.forceDisallow_}static previouslyFailed(){return Pa.isInMemoryStorage||Pa.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pa.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=ru(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(te(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Kt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=NA(t,hM);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(dM))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Si.responsesRequiredToBeHealthy=2;Si.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{static get ALL_TRANSPORTS(){return[Jo,Si]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Si&&Si.isAvailable();let s=t&&!Si.previouslyFailed();if(e.webSocketOnly&&(t||Sn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Si];else{const a=this.transports_=[];for(const l of cu.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);cu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM=6e4,mM=5e3,pM=10*1024,gM=100*1024,Eg="t",Eb="d",_M="s",Tb="r",yM="e",bb="o",wb="a",Sb="n",Ab="p",vM="h";class EM{constructor(e,t,s,a,l,u,f,p,g,E){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ou("c:"+this.id+":"),this.transportManager_=new cu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=$c(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>pM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Eg in e){const t=e[Eg];t===wb?this.upgradeIfSecondaryHealthy_():t===Tb?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===bb&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Pc("t",e),s=Pc("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ab,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wb,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Sb,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Pc("t",e),s=Pc("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Pc(Eg,e);if(Eb in e){const s=e[Eb];if(t===vM){const a={...s};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===Sb){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===_M?this.onConnectionShutdown_(s):t===Tb?this.onReset_(s):t===yM?qg("Server Error: "+s):t===bb?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):qg("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),q_!==s&&Sn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),$c(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(fM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$c(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ab,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.allowedEvents_=e,this.listeners_={},te(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){te(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef extends WA{static getInstance(){return new ef}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!w_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return te(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=32,Cb=768;class lt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ye(){return new lt("")}function ze(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Fr(n){return n.pieces_.length-n.pieceNum_}function ht(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new lt(n.pieces_,e)}function Y_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function TM(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function uu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function $A(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new lt(e,0)}function wt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof lt)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new lt(t,0)}function Le(n){return n.pieceNum_>=n.pieces_.length}function bn(n,e){const t=ze(n),s=ze(e);if(t===null)return e;if(t===s)return bn(ht(n),ht(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function bM(n,e){const t=uu(n,0),s=uu(e,0);for(let a=0;a<t.length&&a<s.length;a++){const l=Wa(t[a],s[a]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function XA(n,e){if(Fr(n)!==Fr(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function li(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Fr(n)>Fr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class wM{constructor(e,t){this.errorPrefix_=t,this.parts_=uu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=If(this.parts_[s]);JA(this)}}function SM(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=If(e),JA(n)}function AM(n){const e=n.parts_.pop();n.byteLength_-=If(e),n.parts_.length>0&&(n.byteLength_-=1)}function JA(n){if(n.byteLength_>Cb)throw new Error(n.errorPrefix_+"has a key path longer than "+Cb+" bytes ("+n.byteLength_+").");if(n.parts_.length>xb)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xb+") or object contains a cycle "+Oa(n))}function Oa(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_ extends WA{static getInstance(){return new Q_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return te(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=1e3,xM=300*1e3,Ib=30*1e3,CM=1.3,IM=3e4,RM="server_kill",Rb=3;class Ls extends QA{constructor(e,t,s,a,l,u,f,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=Ls.nextPersistentConnectionId_++,this.log_=Ou("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Lc,this.maxReconnectDelay_=xM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Q_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ef.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(Kt(l)),te(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new Su,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?t.resolve(f):t.reject(f)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),te(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),te(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const f={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(u).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},u="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(u,l,f=>{const p=f.d,g=f.s;Ls.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ds(e,"w")){const s=al(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Sn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||OR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ib)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=NR(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,u=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),te(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},u="n";a&&(l.q=s,l.t=a),this.sendRequest(u,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,u=>{a&&setTimeout(()=>{a(u.s,u.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const u={p:t,d:s};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:e,request:u,onComplete:a}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Kt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):qg("Unrecognized action received from server: "+Kt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){te(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Lc,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Lc,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>IM&&(this.reconnectDelay_=Lc),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*CM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Ls.nextConnectionId_++,l=this.lastSessionId;let u=!1,f=null;const p=function(){f?f.close():(u=!0,s())},g=function(b){te(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(b)};this.realtime_={close:p,sendRequest:g};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[b,S]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);u?cn("getToken() completed but was canceled"):(cn("getToken() completed. Creating connection."),this.authToken_=b&&b.accessToken,this.appCheckToken_=S&&S.token,f=new EM(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,M=>{Sn(M+" ("+this.repoInfo_.toString()+")"),this.interrupt(RM)},l))}catch(b){this.log_("Failed to get token: "+b),u||(this.repoInfo_.nodeAdmin&&Sn(b),p())}}}interrupt(e){cn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){cn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],kg(this.interruptReasons_)&&(this.reconnectDelay_=Lc,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>H_(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new lt(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){cn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Rb&&(this.reconnectDelay_=Ib,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){cn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Rb&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+CA.replace(/\./g,"-")]=1,w_()?e["framework.cordova"]=1:gS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ef.getInstance().currentlyOnline();return kg(this.interruptReasons_)&&e}}Ls.nextPersistentConnectionId_=0;Ls.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new De(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new De(ol,e),a=new De(ol,t);return this.compare(s,a)!==0}minPost(){return De.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yd;class ZA extends Pf{static get __EMPTY_NODE(){return yd}static set __EMPTY_NODE(e){yd=e}compare(e,t){return Wa(e.name,t.name)}isDefinedOn(e){throw vl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return De.MIN}maxPost(){return new De(Fa,yd)}makePost(e,t){return te(typeof e=="string","KeyIndex indexValue must always be a string."),new De(e,yd)}toString(){return".key"}}const sl=new ZA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vd=class{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?s(e.key,t):1,a&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},qn=class Bc{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Bc.RED,this.left=a??ns.EMPTY_NODE,this.right=l??ns.EMPTY_NODE}copy(e,t,s,a,l){return new Bc(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return ns.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ns.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Bc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Bc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};qn.RED=!0;qn.BLACK=!1;class NM{copy(e,t,s,a,l){return this}insert(e,t,s){return new qn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let ns=class Od{constructor(e,t=Od.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Od(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,qn.BLACK,null,null))}remove(e){return new Od(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vd(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new vd(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new vd(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new vd(this.root_,null,this.comparator_,!0,e)}};ns.EMPTY_NODE=new NM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OM(n,e){return Wa(n.name,e.name)}function W_(n,e){return Wa(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kg;function DM(n){Kg=n}const ex=function(n){return typeof n=="number"?"number:"+OA(n):"string:"+n},tx=function(n){if(n.isLeafNode()){const e=n.val();te(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ds(e,".sv"),"Priority must be a string or number.")}else te(n===Kg||n.isEmpty(),"priority of unexpected type.");te(n===Kg||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nb;class Zt{static set __childrenNodeConstructor(e){Nb=e}static get __childrenNodeConstructor(){return Nb}constructor(e,t=Zt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,te(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),tx(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Zt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Zt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Le(e)?this:ze(e)===".priority"?this.priorityNode_:Zt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Zt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=ze(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(te(s!==".priority"||Fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Zt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ht(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ex(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=OA(this.value_):e+=this.value_,this.lazyHash_=RA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Zt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Zt.__childrenNodeConstructor?-1:(te(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Zt.VALUE_TYPE_ORDER.indexOf(t),l=Zt.VALUE_TYPE_ORDER.indexOf(s);return te(a>=0,"Unknown leaf type: "+t),te(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Zt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nx,ix;function kM(n){nx=n}function MM(n){ix=n}class PM extends Pf{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Wa(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return De.MIN}maxPost(){return new De(Fa,new Zt("[PRIORITY-POST]",ix))}makePost(e,t){const s=nx(e);return new De(t,new Zt("[PRIORITY-POST]",s))}toString(){return".priority"}}const St=new PM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM=Math.log(2);class VM{constructor(e){const t=l=>parseInt(Math.log(l)/LM,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const tf=function(n,e,t,s){n.sort(e);const a=function(p,g){const E=g-p;let b,S;if(E===0)return null;if(E===1)return b=n[p],S=t?t(b):b,new qn(S,b.node,qn.BLACK,null,null);{const M=parseInt(E/2,10)+p,H=a(p,M),$=a(M+1,g);return b=n[M],S=t?t(b):b,new qn(S,b.node,qn.BLACK,H,$)}},l=function(p){let g=null,E=null,b=n.length;const S=function(H,$){const J=b-H,ee=b;b-=H;const ce=a(J+1,ee),me=n[J],we=t?t(me):me;M(new qn(we,me.node,$,null,ce))},M=function(H){g?(g.left=H,g=H):(E=H,g=H)};for(let H=0;H<p.count;++H){const $=p.nextBitIsOne(),J=Math.pow(2,p.count-(H+1));$?S(J,qn.BLACK):(S(J,qn.BLACK),S(J,qn.RED))}return E},u=new VM(n.length),f=l(u);return new ns(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tg;const Ho={};class Ps{static get Default(){return te(Ho&&St,"ChildrenNode.ts has not been loaded"),Tg=Tg||new Ps({".priority":Ho},{".priority":St}),Tg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=al(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ns?t:null}hasIndex(e){return ds(this.indexSet_,e.toString())}addIndex(e,t){te(e!==sl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(De.Wrap);let u=l.getNext();for(;u;)a=a||e.isDefinedOn(u.node),s.push(u),u=l.getNext();let f;a?f=tf(s,e.getCompare()):f=Ho;const p=e.toString(),g={...this.indexSet_};g[p]=e;const E={...this.indexes_};return E[p]=f,new Ps(E,g)}addToIndexes(e,t){const s=Hd(this.indexes_,(a,l)=>{const u=al(this.indexSet_,l);if(te(u,"Missing index implementation for "+l),a===Ho)if(u.isDefinedOn(e.node)){const f=[],p=t.getIterator(De.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),tf(f,u.getCompare())}else return Ho;else{const f=t.get(e.name);let p=a;return f&&(p=p.remove(new De(e.name,f))),p.insert(e,e.node)}});return new Ps(s,this.indexSet_)}removeFromIndexes(e,t){const s=Hd(this.indexes_,a=>{if(a===Ho)return a;{const l=t.get(e.name);return l?a.remove(new De(e.name,l)):a}});return new Ps(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc;class Ee{static get EMPTY_NODE(){return Vc||(Vc=new Ee(new ns(W_),null,Ps.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&tx(this.priorityNode_),this.children_.isEmpty()&&te(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vc}updatePriority(e){return this.children_.isEmpty()?this:new Ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Vc:t}}getChild(e){const t=ze(e);return t===null?this:this.getImmediateChild(t).getChild(ht(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(te(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new De(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const u=a.isEmpty()?Vc:this.priorityNode_;return new Ee(a,u,l)}}updateChild(e,t){const s=ze(e);if(s===null)return t;{te(ze(e)!==".priority"||Fr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(ht(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(St,(u,f)=>{t[u]=f.val(e),s++,l&&Ee.INTEGER_REGEXP_.test(u)?a=Math.max(a,Number(u)):l=!1}),!e&&l&&a<2*s){const u=[];for(const f in t)u[f]=t[f];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ex(this.getPriority().val())+":"),this.forEachChild(St,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":RA(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new De(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new De(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new De(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,De.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,De.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Du?-1:0}withIndex(e){if(e===sl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ee(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===sl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(St),a=t.getIterator(St);let l=s.getNext(),u=a.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=s.getNext(),u=a.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===sl?null:this.indexMap_.get(e.toString())}}Ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jM extends Ee{constructor(){super(new ns(W_),Ee.EMPTY_NODE,Ps.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ee.EMPTY_NODE}isEmpty(){return!1}}const Du=new jM;Object.defineProperties(De,{MIN:{value:new De(ol,Ee.EMPTY_NODE)},MAX:{value:new De(Fa,Du)}});ZA.__EMPTY_NODE=Ee.EMPTY_NODE;Zt.__childrenNodeConstructor=Ee;DM(Du);MM(Du);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM=!0;function Gt(n,e=null){if(n===null)return Ee.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),te(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Zt(t,Gt(e))}if(!(n instanceof Array)&&UM){const t=[];let s=!1;if(hn(n,(u,f)=>{if(u.substring(0,1)!=="."){const p=Gt(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new De(u,p)))}}),t.length===0)return Ee.EMPTY_NODE;const l=tf(t,OM,u=>u.name,W_);if(s){const u=tf(t,St.getCompare());return new Ee(l,Gt(e),new Ps({".priority":u},{".priority":St}))}else return new Ee(l,Gt(e),Ps.Default)}else{let t=Ee.EMPTY_NODE;return hn(n,(s,a)=>{if(ds(n,s)&&s.substring(0,1)!=="."){const l=Gt(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(Gt(e))}}kM(Gt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM extends Pf{constructor(e){super(),this.indexPath_=e,te(!Le(e)&&ze(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Wa(e.name,t.name):l}makePost(e,t){const s=Gt(e),a=Ee.EMPTY_NODE.updateChild(this.indexPath_,s);return new De(t,a)}maxPost(){const e=Ee.EMPTY_NODE.updateChild(this.indexPath_,Du);return new De(Fa,e)}toString(){return uu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM extends Pf{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Wa(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return De.MIN}maxPost(){return De.MAX}makePost(e,t){const s=Gt(e);return new De(t,s)}toString(){return".value"}}const BM=new FM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(n){return{type:"value",snapshotNode:n}}function ll(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function hu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function du(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function HM(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.index_=e}updateChild(e,t,s,a,l,u){te(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(t);return f.getChild(a).equals(s.getChild(a))&&f.isEmpty()===s.isEmpty()||(u!=null&&(s.isEmpty()?e.hasChild(t)?u.trackChildChange(hu(t,f)):te(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(ll(t,s)):u.trackChildChange(du(t,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(St,(a,l)=>{t.hasChild(a)||s.trackChildChange(hu(a,l))}),t.isLeafNode()||t.forEachChild(St,(a,l)=>{if(e.hasChild(a)){const u=e.getImmediateChild(a);u.equals(l)||s.trackChildChange(du(a,l,u))}else s.trackChildChange(ll(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ee.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e){this.indexedFilter_=new $_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=fu.getStartPost_(e),this.endPost_=fu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,a,l,u){return this.matches(new De(t,s))||(s=Ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,a,l,u)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Ee.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(Ee.EMPTY_NODE);const l=this;return t.forEachChild(St,(u,f)=>{l.matches(new De(u,f))||(a=a.updateImmediateChild(u,Ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new fu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,a,l,u){return this.rangedFilter_.matches(new De(t,s))||(s=Ee.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,a,l,u):this.fullLimitUpdateChild_(e,t,s,l,u)}updateFullNode(e,t,s){let a;if(t.isLeafNode()||t.isEmpty())a=Ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=Ee.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))a=a.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(Ee.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let u=0;for(;l.hasNext();){const f=l.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:a=a.updateImmediateChild(f.name,Ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,a,l){let u;if(this.reverse_){const b=this.index_.getCompare();u=(S,M)=>b(M,S)}else u=this.index_.getCompare();const f=e;te(f.numChildren()===this.limit_,"");const p=new De(t,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),E=this.rangedFilter_.matches(p);if(f.hasChild(t)){const b=f.getImmediateChild(t);let S=a.getChildAfterChild(this.index_,g,this.reverse_);for(;S!=null&&(S.name===t||f.hasChild(S.name));)S=a.getChildAfterChild(this.index_,S,this.reverse_);const M=S==null?1:u(S,p);if(E&&!s.isEmpty()&&M>=0)return l!=null&&l.trackChildChange(du(t,s,b)),f.updateImmediateChild(t,s);{l!=null&&l.trackChildChange(hu(t,b));const $=f.updateImmediateChild(t,Ee.EMPTY_NODE);return S!=null&&this.rangedFilter_.matches(S)?(l!=null&&l.trackChildChange(ll(S.name,S.node)),$.updateImmediateChild(S.name,S.node)):$}}else return s.isEmpty()?e:E&&u(g,p)>=0?(l!=null&&(l.trackChildChange(hu(g.name,g.node)),l.trackChildChange(ll(t,s))),f.updateImmediateChild(t,s).updateImmediateChild(g.name,Ee.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=St}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return te(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return te(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ol}hasEnd(){return this.endSet_}getIndexEndValue(){return te(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return te(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Fa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return te(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===St}copy(){const e=new X_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function GM(n){return n.loadsAllData()?new $_(n.getIndex()):n.hasLimit()?new qM(n):new fu(n)}function Ob(n){const e={};if(n.isDefault())return e;let t;if(n.index_===St?t="$priority":n.index_===BM?t="$value":n.index_===sl?t="$key":(te(n.index_ instanceof zM,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Kt(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Kt(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Kt(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Kt(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Kt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Db(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==St&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends QA{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(te(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Ou("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const u=nf.getListenId_(e,s),f={};this.listens_[u]=f;const p=Ob(e._queryParams);this.restRequest_(l+".json",p,(g,E)=>{let b=E;if(g===404&&(b=null,g=null),g===null&&this.onDataUpdate_(l,b,!1,s),al(this.listens_,u)===f){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",a(S,null)}})}unlisten(e,t){const s=nf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Ob(e._queryParams),s=e._path.toString(),a=new Su;return this.restRequest_(s+".json",t,(l,u)=>{let f=u;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(s,f,!1,null),a.resolve(f)):a.reject(new Error(f))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+El(t);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=ru(f.responseText)}catch{Sn("Failed to parse JSON response for "+u+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&Sn("Got unsuccessful REST response for "+u+" Status: "+f.status),s(f.status);s=null}},f.open("GET",u,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(){this.rootNode_=Ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(){return{value:null,children:new Map}}function rx(n,e,t){if(Le(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=ze(e);n.children.has(s)||n.children.set(s,sf());const a=n.children.get(s);e=ht(e),rx(a,e,t)}}function Yg(n,e,t){n.value!==null?t(e,n.value):YM(n,(s,a)=>{const l=new lt(e.toString()+"/"+s);Yg(a,l,t)})}function YM(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&hn(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=10*1e3,WM=30*1e3,$M=300*1e3;class XM{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new QM(e);const s=kb+(WM-kb)*Math.random();$c(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;hn(e,(a,l)=>{l>0&&ds(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),$c(this.reportStats_.bind(this),Math.floor(Math.random()*2*$M))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xi||(xi={}));function J_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Z_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ey(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=xi.ACK_USER_WRITE,this.source=J_()}operationForChild(e){if(Le(this.path)){if(this.affectedTree.value!=null)return te(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new rf(Ye(),t,this.revert)}}else return te(ze(this.path)===e,"operationForChild called for unrelated child."),new rf(ht(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,t){this.source=e,this.path=t,this.type=xi.LISTEN_COMPLETE}operationForChild(e){return Le(this.path)?new mu(this.source,Ye()):new mu(this.source,ht(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=xi.OVERWRITE}operationForChild(e){return Le(this.path)?new Ba(this.source,Ye(),this.snap.getImmediateChild(e)):new Ba(this.source,ht(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=xi.MERGE}operationForChild(e){if(Le(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new Ba(this.source,Ye(),t.value):new cl(this.source,Ye(),t)}else return te(ze(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new cl(this.source,ht(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Le(e))return this.isFullyInitialized()&&!this.filtered_;const t=ze(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ZM(n,e,t,s){const a=[],l=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(HM(u.childName,u.snapshotNode))}),jc(n,a,"child_removed",e,s,t),jc(n,a,"child_added",e,s,t),jc(n,a,"child_moved",l,s,t),jc(n,a,"child_changed",e,s,t),jc(n,a,"value",e,s,t),a}function jc(n,e,t,s,a,l){const u=s.filter(f=>f.type===t);u.sort((f,p)=>tP(n,f,p)),u.forEach(f=>{const p=eP(n,f,l);a.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,n.query_))})})}function eP(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function tP(n,e,t){if(e.childName==null||t.childName==null)throw vl("Should only compare child_ events.");const s=new De(e.childName,e.snapshotNode),a=new De(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(n,e){return{eventCache:n,serverCache:e}}function Xc(n,e,t,s){return Lf(new Br(e,t,s),n.serverCache)}function ax(n,e,t,s){return Lf(n.eventCache,new Br(e,t,s))}function af(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ha(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bg;const nP=()=>(bg||(bg=new ns(zk)),bg);class ut{static fromObject(e){let t=new ut(null);return hn(e,(s,a)=>{t=t.set(new lt(s),a)}),t}constructor(e,t=nP()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ye(),value:this.value};if(Le(e))return null;{const s=ze(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(ht(e),t);return l!=null?{path:wt(new lt(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Le(e))return this;{const t=ze(e),s=this.children.get(t);return s!==null?s.subtree(ht(e)):new ut(null)}}set(e,t){if(Le(e))return new ut(t,this.children);{const s=ze(e),l=(this.children.get(s)||new ut(null)).set(ht(e),t),u=this.children.insert(s,l);return new ut(this.value,u)}}remove(e){if(Le(e))return this.children.isEmpty()?new ut(null):new ut(null,this.children);{const t=ze(e),s=this.children.get(t);if(s){const a=s.remove(ht(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new ut(null):new ut(this.value,l)}else return this}}get(e){if(Le(e))return this.value;{const t=ze(e),s=this.children.get(t);return s?s.get(ht(e)):null}}setTree(e,t){if(Le(e))return t;{const s=ze(e),l=(this.children.get(s)||new ut(null)).setTree(ht(e),t);let u;return l.isEmpty()?u=this.children.remove(s):u=this.children.insert(s,l),new ut(this.value,u)}}fold(e){return this.fold_(Ye(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(wt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Ye(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Le(e))return null;{const l=ze(e),u=this.children.get(l);return u?u.findOnPath_(ht(e),wt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ye(),t)}foreachOnPath_(e,t,s){if(Le(e))return this;{this.value&&s(t,this.value);const a=ze(e),l=this.children.get(a);return l?l.foreachOnPath_(ht(e),wt(t,a),s):new ut(null)}}foreach(e){this.foreach_(Ye(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(wt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.writeTree_=e}static empty(){return new Ri(new ut(null))}}function Jc(n,e,t){if(Le(e))return new Ri(new ut(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const u=bn(a,e);return l=l.updateChild(u,t),new Ri(n.writeTree_.set(a,l))}else{const a=new ut(t),l=n.writeTree_.setTree(e,a);return new Ri(l)}}}function Qg(n,e,t){let s=n;return hn(t,(a,l)=>{s=Jc(s,wt(e,a),l)}),s}function Mb(n,e){if(Le(e))return Ri.empty();{const t=n.writeTree_.setTree(e,new ut(null));return new Ri(t)}}function Wg(n,e){return $a(n,e)!=null}function $a(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(bn(t.path,e)):null}function Pb(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(St,(s,a)=>{e.push(new De(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new De(s,a.value))}),e}function Lr(n,e){if(Le(e))return n;{const t=$a(n,e);return t!=null?new Ri(new ut(t)):new Ri(n.writeTree_.subtree(e))}}function $g(n){return n.writeTree_.isEmpty()}function ul(n,e){return ox(Ye(),n.writeTree_,e)}function ox(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(te(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=ox(wt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(wt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(n,e){return hx(e,n)}function iP(n,e,t,s,a){te(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=Jc(n.visibleWrites,e,t)),n.lastWriteId=s}function sP(n,e,t,s){te(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=Qg(n.visibleWrites,e,t),n.lastWriteId=s}function rP(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function aP(n,e){const t=n.allWrites.findIndex(f=>f.writeId===e);te(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,u=n.allWrites.length-1;for(;a&&u>=0;){const f=n.allWrites[u];f.visible&&(u>=t&&oP(f,s.path)?a=!1:li(s.path,f.path)&&(l=!0)),u--}if(a){if(l)return lP(n),!0;if(s.snap)n.visibleWrites=Mb(n.visibleWrites,s.path);else{const f=s.children;hn(f,p=>{n.visibleWrites=Mb(n.visibleWrites,wt(s.path,p))})}return!0}else return!1}function oP(n,e){if(n.snap)return li(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&li(wt(n.path,t),e))return!0;return!1}function lP(n){n.visibleWrites=lx(n.allWrites,cP,Ye()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function cP(n){return n.visible}function lx(n,e,t){let s=Ri.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const u=l.path;let f;if(l.snap)li(t,u)?(f=bn(t,u),s=Jc(s,f,l.snap)):li(u,t)&&(f=bn(u,t),s=Jc(s,Ye(),l.snap.getChild(f)));else if(l.children){if(li(t,u))f=bn(t,u),s=Qg(s,f,l.children);else if(li(u,t))if(f=bn(u,t),Le(f))s=Qg(s,Ye(),l.children);else{const p=al(l.children,ze(f));if(p){const g=p.getChild(ht(f));s=Jc(s,Ye(),g)}}}else throw vl("WriteRecord should have .snap or .children")}}return s}function cx(n,e,t,s,a){if(!s&&!a){const l=$a(n.visibleWrites,e);if(l!=null)return l;{const u=Lr(n.visibleWrites,e);if($g(u))return t;if(t==null&&!Wg(u,Ye()))return null;{const f=t||Ee.EMPTY_NODE;return ul(u,f)}}}else{const l=Lr(n.visibleWrites,e);if(!a&&$g(l))return t;if(!a&&t==null&&!Wg(l,Ye()))return null;{const u=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(li(g.path,e)||li(e,g.path))},f=lx(n.allWrites,u,e),p=t||Ee.EMPTY_NODE;return ul(f,p)}}}function uP(n,e,t){let s=Ee.EMPTY_NODE;const a=$a(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(St,(l,u)=>{s=s.updateImmediateChild(l,u)}),s;if(t){const l=Lr(n.visibleWrites,e);return t.forEachChild(St,(u,f)=>{const p=ul(Lr(l,new lt(u)),f);s=s.updateImmediateChild(u,p)}),Pb(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}else{const l=Lr(n.visibleWrites,e);return Pb(l).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}}function hP(n,e,t,s,a){te(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=wt(e,t);if(Wg(n.visibleWrites,l))return null;{const u=Lr(n.visibleWrites,l);return $g(u)?a.getChild(t):ul(u,a.getChild(t))}}function dP(n,e,t,s){const a=wt(e,t),l=$a(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const u=Lr(n.visibleWrites,a);return ul(u,s.getNode().getImmediateChild(t))}else return null}function fP(n,e){return $a(n.visibleWrites,e)}function mP(n,e,t,s,a,l,u){let f;const p=Lr(n.visibleWrites,e),g=$a(p,Ye());if(g!=null)f=g;else if(t!=null)f=ul(p,t);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const E=[],b=u.getCompare(),S=l?f.getReverseIteratorFrom(s,u):f.getIteratorFrom(s,u);let M=S.getNext();for(;M&&E.length<a;)b(M,s)!==0&&E.push(M),M=S.getNext();return E}else return[]}function pP(){return{visibleWrites:Ri.empty(),allWrites:[],lastWriteId:-1}}function of(n,e,t,s){return cx(n.writeTree,n.treePath,e,t,s)}function ty(n,e){return uP(n.writeTree,n.treePath,e)}function Lb(n,e,t,s){return hP(n.writeTree,n.treePath,e,t,s)}function lf(n,e){return fP(n.writeTree,wt(n.treePath,e))}function gP(n,e,t,s,a,l){return mP(n.writeTree,n.treePath,e,t,s,a,l)}function ny(n,e,t){return dP(n.writeTree,n.treePath,e,t)}function ux(n,e){return hx(wt(n.treePath,e),n.writeTree)}function hx(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;te(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),te(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,du(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,hu(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,ll(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,du(s,e.snapshotNode,a.oldSnap));else throw vl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const dx=new yP;class iy{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Br(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ny(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ha(this.viewCache_),l=gP(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(n){return{filter:n}}function EP(n,e){te(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),te(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function TP(n,e,t,s,a){const l=new _P;let u,f;if(t.type===xi.OVERWRITE){const g=t;g.source.fromUser?u=Xg(n,e,g.path,g.snap,s,a,l):(te(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!Le(g.path),u=cf(n,e,g.path,g.snap,s,a,f,l))}else if(t.type===xi.MERGE){const g=t;g.source.fromUser?u=wP(n,e,g.path,g.children,s,a,l):(te(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),u=Jg(n,e,g.path,g.children,s,a,f,l))}else if(t.type===xi.ACK_USER_WRITE){const g=t;g.revert?u=xP(n,e,g.path,s,a,l):u=SP(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===xi.LISTEN_COMPLETE)u=AP(n,e,t.path,s,l);else throw vl("Unknown operation type: "+t.type);const p=l.getChanges();return bP(e,u,p),{viewCache:u,changes:p}}function bP(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=af(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(sx(af(e)))}}function fx(n,e,t,s,a,l){const u=e.eventCache;if(lf(s,t)!=null)return e;{let f,p;if(Le(t))if(te(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ha(e),E=g instanceof Ee?g:Ee.EMPTY_NODE,b=ty(s,E);f=n.filter.updateFullNode(e.eventCache.getNode(),b,l)}else{const g=of(s,Ha(e));f=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=ze(t);if(g===".priority"){te(Fr(t)===1,"Can't have a priority with additional path components");const E=u.getNode();p=e.serverCache.getNode();const b=Lb(s,t,E,p);b!=null?f=n.filter.updatePriority(E,b):f=u.getNode()}else{const E=ht(t);let b;if(u.isCompleteForChild(g)){p=e.serverCache.getNode();const S=Lb(s,t,u.getNode(),p);S!=null?b=u.getNode().getImmediateChild(g).updateChild(E,S):b=u.getNode().getImmediateChild(g)}else b=ny(s,g,e.serverCache);b!=null?f=n.filter.updateChild(u.getNode(),g,b,E,a,l):f=u.getNode()}}return Xc(e,f,u.isFullyInitialized()||Le(t),n.filter.filtersNodes())}}function cf(n,e,t,s,a,l,u,f){const p=e.serverCache;let g;const E=u?n.filter:n.filter.getIndexedFilter();if(Le(t))g=E.updateFullNode(p.getNode(),s,null);else if(E.filtersNodes()&&!p.isFiltered()){const M=p.getNode().updateChild(t,s);g=E.updateFullNode(p.getNode(),M,null)}else{const M=ze(t);if(!p.isCompleteForPath(t)&&Fr(t)>1)return e;const H=ht(t),J=p.getNode().getImmediateChild(M).updateChild(H,s);M===".priority"?g=E.updatePriority(p.getNode(),J):g=E.updateChild(p.getNode(),M,J,H,dx,null)}const b=ax(e,g,p.isFullyInitialized()||Le(t),E.filtersNodes()),S=new iy(a,b,l);return fx(n,b,t,a,S,f)}function Xg(n,e,t,s,a,l,u){const f=e.eventCache;let p,g;const E=new iy(a,e,l);if(Le(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,u),p=Xc(e,g,!0,n.filter.filtersNodes());else{const b=ze(t);if(b===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=Xc(e,g,f.isFullyInitialized(),f.isFiltered());else{const S=ht(t),M=f.getNode().getImmediateChild(b);let H;if(Le(S))H=s;else{const $=E.getCompleteChild(b);$!=null?Y_(S)===".priority"&&$.getChild($A(S)).isEmpty()?H=$:H=$.updateChild(S,s):H=Ee.EMPTY_NODE}if(M.equals(H))p=e;else{const $=n.filter.updateChild(f.getNode(),b,H,S,E,u);p=Xc(e,$,f.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function Vb(n,e){return n.eventCache.isCompleteForChild(e)}function wP(n,e,t,s,a,l,u){let f=e;return s.foreach((p,g)=>{const E=wt(t,p);Vb(e,ze(E))&&(f=Xg(n,f,E,g,a,l,u))}),s.foreach((p,g)=>{const E=wt(t,p);Vb(e,ze(E))||(f=Xg(n,f,E,g,a,l,u))}),f}function jb(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function Jg(n,e,t,s,a,l,u,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Le(t)?g=s:g=new ut(null).setTree(t,s);const E=e.serverCache.getNode();return g.children.inorderTraversal((b,S)=>{if(E.hasChild(b)){const M=e.serverCache.getNode().getImmediateChild(b),H=jb(n,M,S);p=cf(n,p,new lt(b),H,a,l,u,f)}}),g.children.inorderTraversal((b,S)=>{const M=!e.serverCache.isCompleteForChild(b)&&S.value===null;if(!E.hasChild(b)&&!M){const H=e.serverCache.getNode().getImmediateChild(b),$=jb(n,H,S);p=cf(n,p,new lt(b),$,a,l,u,f)}}),p}function SP(n,e,t,s,a,l,u){if(lf(a,t)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Le(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return cf(n,e,t,p.getNode().getChild(t),a,l,f,u);if(Le(t)){let g=new ut(null);return p.getNode().forEachChild(sl,(E,b)=>{g=g.set(new lt(E),b)}),Jg(n,e,t,g,a,l,f,u)}else return e}else{let g=new ut(null);return s.foreach((E,b)=>{const S=wt(t,E);p.isCompleteForPath(S)&&(g=g.set(E,p.getNode().getChild(S)))}),Jg(n,e,t,g,a,l,f,u)}}function AP(n,e,t,s,a){const l=e.serverCache,u=ax(e,l.getNode(),l.isFullyInitialized()||Le(t),l.isFiltered());return fx(n,u,t,s,dx,a)}function xP(n,e,t,s,a,l){let u;if(lf(s,t)!=null)return e;{const f=new iy(s,e,a),p=e.eventCache.getNode();let g;if(Le(t)||ze(t)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=of(s,Ha(e));else{const b=e.serverCache.getNode();te(b instanceof Ee,"serverChildren would be complete if leaf node"),E=ty(s,b)}E=E,g=n.filter.updateFullNode(p,E,l)}else{const E=ze(t);let b=ny(s,E,e.serverCache);b==null&&e.serverCache.isCompleteForChild(E)&&(b=p.getImmediateChild(E)),b!=null?g=n.filter.updateChild(p,E,b,ht(t),f,l):e.eventCache.getNode().hasChild(E)?g=n.filter.updateChild(p,E,Ee.EMPTY_NODE,ht(t),f,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=of(s,Ha(e)),u.isLeafNode()&&(g=n.filter.updateFullNode(g,u,l)))}return u=e.serverCache.isFullyInitialized()||lf(s,Ye())!=null,Xc(e,g,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,a=new $_(s.getIndex()),l=GM(s);this.processor_=vP(l);const u=t.serverCache,f=t.eventCache,p=a.updateFullNode(Ee.EMPTY_NODE,u.getNode(),null),g=l.updateFullNode(Ee.EMPTY_NODE,f.getNode(),null),E=new Br(p,u.isFullyInitialized(),a.filtersNodes()),b=new Br(g,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=Lf(b,E),this.eventGenerator_=new JM(this.query_)}get query(){return this.query_}}function IP(n){return n.viewCache_.serverCache.getNode()}function RP(n){return af(n.viewCache_)}function NP(n,e){const t=Ha(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Le(e)&&!t.getImmediateChild(ze(e)).isEmpty())?t.getChild(e):null}function Ub(n){return n.eventRegistrations_.length===0}function OP(n,e){n.eventRegistrations_.push(e)}function zb(n,e,t){const s=[];if(t){te(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(t,a);u&&s.push(u)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const u=n.eventRegistrations_[l];if(!u.matches(e))a.push(u);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return s}function Fb(n,e,t,s){e.type===xi.MERGE&&e.source.queryId!==null&&(te(Ha(n.viewCache_),"We should always have a full cache before handling merges"),te(af(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=TP(n.processor_,a,e,t,s);return EP(n.processor_,l.viewCache),te(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,mx(n,l.changes,l.viewCache.eventCache.getNode(),null)}function DP(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(St,(l,u)=>{s.push(ll(l,u))}),t.isFullyInitialized()&&s.push(sx(t.getNode())),mx(n,s,t.getNode(),e)}function mx(n,e,t,s){const a=s?[s]:n.eventRegistrations_;return ZM(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uf;class px{constructor(){this.views=new Map}}function kP(n){te(!uf,"__referenceConstructor has already been defined"),uf=n}function MP(){return te(uf,"Reference.ts has not been loaded"),uf}function PP(n){return n.views.size===0}function sy(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return te(l!=null,"SyncTree gave us an op for an invalid query."),Fb(l,e,t,s)}else{let l=[];for(const u of n.views.values())l=l.concat(Fb(u,e,t,s));return l}}function gx(n,e,t,s,a){const l=e._queryIdentifier,u=n.views.get(l);if(!u){let f=of(t,a?s:null),p=!1;f?p=!0:s instanceof Ee?(f=ty(t,s),p=!1):(f=Ee.EMPTY_NODE,p=!1);const g=Lf(new Br(f,p,!1),new Br(s,a,!1));return new CP(e,g)}return u}function LP(n,e,t,s,a,l){const u=gx(n,e,s,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),OP(u,t),DP(u,t)}function VP(n,e,t,s){const a=e._queryIdentifier,l=[];let u=[];const f=Hr(n);if(a==="default")for(const[p,g]of n.views.entries())u=u.concat(zb(g,t,s)),Ub(g)&&(n.views.delete(p),g.query._queryParams.loadsAllData()||l.push(g.query));else{const p=n.views.get(a);p&&(u=u.concat(zb(p,t,s)),Ub(p)&&(n.views.delete(a),p.query._queryParams.loadsAllData()||l.push(p.query)))}return f&&!Hr(n)&&l.push(new(MP())(e._repo,e._path)),{removed:l,events:u}}function _x(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Vr(n,e){let t=null;for(const s of n.views.values())t=t||NP(s,e);return t}function yx(n,e){if(e._queryParams.loadsAllData())return jf(n);{const s=e._queryIdentifier;return n.views.get(s)}}function vx(n,e){return yx(n,e)!=null}function Hr(n){return jf(n)!=null}function jf(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hf;function jP(n){te(!hf,"__referenceConstructor has already been defined"),hf=n}function UP(){return te(hf,"Reference.ts has not been loaded"),hf}let zP=1;class Bb{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ut(null),this.pendingWriteTree_=pP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ex(n,e,t,s,a){return iP(n.pendingWriteTree_,e,t,s,a),a?wl(n,new Ba(J_(),e,t)):[]}function FP(n,e,t,s){sP(n.pendingWriteTree_,e,t,s);const a=ut.fromObject(t);return wl(n,new cl(J_(),e,a))}function Dr(n,e,t=!1){const s=rP(n.pendingWriteTree_,e);if(aP(n.pendingWriteTree_,e)){let l=new ut(null);return s.snap!=null?l=l.set(Ye(),!0):hn(s.children,u=>{l=l.set(new lt(u),!0)}),wl(n,new rf(s.path,l,t))}else return[]}function ku(n,e,t){return wl(n,new Ba(Z_(),e,t))}function BP(n,e,t){const s=ut.fromObject(t);return wl(n,new cl(Z_(),e,s))}function HP(n,e){return wl(n,new mu(Z_(),e))}function qP(n,e,t){const s=ay(n,t);if(s){const a=oy(s),l=a.path,u=a.queryId,f=bn(l,e),p=new mu(ey(u),f);return ly(n,l,p)}else return[]}function Tx(n,e,t,s,a=!1){const l=e._path,u=n.syncPointTree_.get(l);let f=[];if(u&&(e._queryIdentifier==="default"||vx(u,e))){const p=VP(u,e,t,s);PP(u)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=p.removed;if(f=p.events,!a){const E=g.findIndex(S=>S._queryParams.loadsAllData())!==-1,b=n.syncPointTree_.findOnPath(l,(S,M)=>Hr(M));if(E&&!b){const S=n.syncPointTree_.subtree(l);if(!S.isEmpty()){const M=QP(S);for(let H=0;H<M.length;++H){const $=M[H],J=$.query,ee=Ax(n,$);n.listenProvider_.startListening(Zc(J),pu(n,J),ee.hashFn,ee.onComplete)}}}!b&&g.length>0&&!s&&(E?n.listenProvider_.stopListening(Zc(e),null):g.forEach(S=>{const M=n.queryToTagMap.get(Uf(S));n.listenProvider_.stopListening(Zc(S),M)}))}WP(n,g)}return f}function bx(n,e,t,s){const a=ay(n,s);if(a!=null){const l=oy(a),u=l.path,f=l.queryId,p=bn(u,e),g=new Ba(ey(f),p,t);return ly(n,u,g)}else return[]}function GP(n,e,t,s){const a=ay(n,s);if(a){const l=oy(a),u=l.path,f=l.queryId,p=bn(u,e),g=ut.fromObject(t),E=new cl(ey(f),p,g);return ly(n,u,E)}else return[]}function KP(n,e,t,s=!1){const a=e._path;let l=null,u=!1;n.syncPointTree_.foreachOnPath(a,(S,M)=>{const H=bn(S,a);l=l||Vr(M,H),u=u||Hr(M)});let f=n.syncPointTree_.get(a);f?(u=u||Hr(f),l=l||Vr(f,Ye())):(f=new px,n.syncPointTree_=n.syncPointTree_.set(a,f));let p;l!=null?p=!0:(p=!1,l=Ee.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((M,H)=>{const $=Vr(H,Ye());$&&(l=l.updateImmediateChild(M,$))}));const g=vx(f,e);if(!g&&!e._queryParams.loadsAllData()){const S=Uf(e);te(!n.queryToTagMap.has(S),"View does not exist, but we have a tag");const M=$P();n.queryToTagMap.set(S,M),n.tagToQueryMap.set(M,S)}const E=Vf(n.pendingWriteTree_,a);let b=LP(f,e,t,E,l,p);if(!g&&!u&&!s){const S=yx(f,e);b=b.concat(XP(n,e,S))}return b}function ry(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(u,f)=>{const p=bn(u,e),g=Vr(f,p);if(g)return g});return cx(a,e,l,t,!0)}function YP(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(g,E)=>{const b=bn(g,t);s=s||Vr(E,b)});let a=n.syncPointTree_.get(t);a?s=s||Vr(a,Ye()):(a=new px,n.syncPointTree_=n.syncPointTree_.set(t,a));const l=s!=null,u=l?new Br(s,!0,!1):null,f=Vf(n.pendingWriteTree_,e._path),p=gx(a,e,f,l?u.getNode():Ee.EMPTY_NODE,l);return RP(p)}function wl(n,e){return wx(e,n.syncPointTree_,null,Vf(n.pendingWriteTree_,Ye()))}function wx(n,e,t,s){if(Le(n.path))return Sx(n,e,t,s);{const a=e.get(Ye());t==null&&a!=null&&(t=Vr(a,Ye()));let l=[];const u=ze(n.path),f=n.operationForChild(u),p=e.children.get(u);if(p&&f){const g=t?t.getImmediateChild(u):null,E=ux(s,u);l=l.concat(wx(f,p,g,E))}return a&&(l=l.concat(sy(a,n,s,t))),l}}function Sx(n,e,t,s){const a=e.get(Ye());t==null&&a!=null&&(t=Vr(a,Ye()));let l=[];return e.children.inorderTraversal((u,f)=>{const p=t?t.getImmediateChild(u):null,g=ux(s,u),E=n.operationForChild(u);E&&(l=l.concat(Sx(E,f,p,g)))}),a&&(l=l.concat(sy(a,n,s,t))),l}function Ax(n,e){const t=e.query,s=pu(n,t);return{hashFn:()=>(IP(e)||Ee.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return s?qP(n,t._path,s):HP(n,t._path);{const l=Hk(a,t);return Tx(n,t,null,l)}}}}function pu(n,e){const t=Uf(e);return n.queryToTagMap.get(t)}function Uf(n){return n._path.toString()+"$"+n._queryIdentifier}function ay(n,e){return n.tagToQueryMap.get(e)}function oy(n){const e=n.indexOf("$");return te(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new lt(n.substr(0,e))}}function ly(n,e,t){const s=n.syncPointTree_.get(e);te(s,"Missing sync point for query tag that we're tracking");const a=Vf(n.pendingWriteTree_,e);return sy(s,t,a,null)}function QP(n){return n.fold((e,t,s)=>{if(t&&Hr(t))return[jf(t)];{let a=[];return t&&(a=_x(t)),hn(s,(l,u)=>{a=a.concat(u)}),a}})}function Zc(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(UP())(n._repo,n._path):n}function WP(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const a=Uf(s),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function $P(){return zP++}function XP(n,e,t){const s=e._path,a=pu(n,e),l=Ax(n,t),u=n.listenProvider_.startListening(Zc(e),a,l.hashFn,l.onComplete),f=n.syncPointTree_.subtree(s);if(a)te(!Hr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,E,b)=>{if(!Le(g)&&E&&Hr(E))return[jf(E).query];{let S=[];return E&&(S=S.concat(_x(E).map(M=>M.query))),hn(b,(M,H)=>{S=S.concat(H)}),S}});for(let g=0;g<p.length;++g){const E=p[g];n.listenProvider_.stopListening(Zc(E),pu(n,E))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new cy(t)}node(){return this.node_}}class uy{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=wt(this.path_,e);return new uy(this.syncTree_,t)}node(){return ry(this.syncTree_,this.path_)}}const JP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Hb=function(n,e,t){if(!n||typeof n!="object")return n;if(te(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return ZP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return e4(n[".sv"],e);te(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},ZP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:te(!1,"Unexpected server value: "+n)}},e4=function(n,e,t){n.hasOwnProperty("increment")||te(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&te(!1,"Unexpected increment value: "+s);const a=e.node();if(te(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const u=a.getValue();return typeof u!="number"?s:u+s},xx=function(n,e,t,s){return hy(e,new uy(t,n),s)},Cx=function(n,e,t){return hy(n,new cy(e),t)};function hy(n,e,t){const s=n.getPriority().val(),a=Hb(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const u=n,f=Hb(u.getValue(),e,t);return f!==u.getValue()||a!==u.getPriority().val()?new Zt(f,Gt(a)):n}else{const u=n;return l=u,a!==u.getPriority().val()&&(l=l.updatePriority(new Zt(a))),u.forEachChild(St,(f,p)=>{const g=hy(p,e.getImmediateChild(f),t);g!==p&&(l=l.updateImmediateChild(f,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function fy(n,e){let t=e instanceof lt?e:new lt(e),s=n,a=ze(t);for(;a!==null;){const l=al(s.node.children,a)||{children:{},childCount:0};s=new dy(a,s,l),t=ht(t),a=ze(t)}return s}function Sl(n){return n.node.value}function Ix(n,e){n.node.value=e,Zg(n)}function Rx(n){return n.node.childCount>0}function t4(n){return Sl(n)===void 0&&!Rx(n)}function zf(n,e){hn(n.node.children,(t,s)=>{e(new dy(t,n,s))})}function Nx(n,e,t,s){t&&e(n),zf(n,a=>{Nx(a,e,!0)})}function n4(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Mu(n){return new lt(n.parent===null?n.name:Mu(n.parent)+"/"+n.name)}function Zg(n){n.parent!==null&&i4(n.parent,n.name,n)}function i4(n,e,t){const s=t4(t),a=ds(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,Zg(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,Zg(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4=/[\[\].#$\/\u0000-\u001F\u007F]/,r4=/[\[\].#$\u0000-\u001F\u007F]/,wg=10*1024*1024,my=function(n){return typeof n=="string"&&n.length!==0&&!s4.test(n)},Ox=function(n){return typeof n=="string"&&n.length!==0&&!r4.test(n)},a4=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ox(n)},o4=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!B_(n)||n&&typeof n=="object"&&ds(n,".sv")},l4=function(n,e,t,s){Ff(Cf(n,"value"),e,t)},Ff=function(n,e,t){const s=t instanceof lt?new wM(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Oa(s));if(typeof e=="function")throw new Error(n+"contains a function "+Oa(s)+" with contents = "+e.toString());if(B_(e))throw new Error(n+"contains "+e.toString()+" "+Oa(s));if(typeof e=="string"&&e.length>wg/3&&If(e)>wg)throw new Error(n+"contains a string greater than "+wg+" utf8 bytes "+Oa(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(hn(e,(u,f)=>{if(u===".value")a=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!my(u)))throw new Error(n+" contains an invalid key ("+u+") "+Oa(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);SM(s,u),Ff(n,f,s),AM(s)}),a&&l)throw new Error(n+' contains ".value" child '+Oa(s)+" in addition to actual children.")}},c4=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=uu(s);for(let u=0;u<l.length;u++)if(!(l[u]===".priority"&&u===l.length-1)){if(!my(l[u]))throw new Error(n+"contains an invalid key ("+l[u]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(bM);let a=null;for(t=0;t<e.length;t++){if(s=e[t],a!==null&&li(a,s))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+s.toString());a=s}},u4=function(n,e,t,s){const a=Cf(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];hn(e,(u,f)=>{const p=new lt(u);if(Ff(a,f,wt(t,p)),Y_(p)===".priority"&&!o4(f))throw new Error(a+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),c4(a,l)},Dx=function(n,e,t,s){if(!Ox(t))throw new Error(Cf(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},h4=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Dx(n,e,t)},d4=function(n,e){if(ze(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},f4=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!my(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!a4(t))throw new Error(Cf(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function py(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!XA(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function hi(n,e,t){py(n,t),p4(n,s=>li(s,e)||li(e,s))}function p4(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(g4(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function g4(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Wc&&cn("event: "+t.toString()),bl(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _4="repo_interrupt",y4=25;class v4{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new m4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=sf(),this.transactionQueueTree_=new dy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function E4(n,e,t){if(n.stats_=G_(n.repoInfo_),n.forceRestClient_||Yk())n.server_=new nf(n.repoInfo_,(s,a,l,u)=>{qb(n,s,a,l,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Gb(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Kt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Ls(n.repoInfo_,e,(s,a,l,u)=>{qb(n,s,a,l,u)},s=>{Gb(n,s)},s=>{b4(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Jk(n.repoInfo_,()=>new XM(n.stats_,n.server_)),n.infoData_=new KM,n.infoSyncTree_=new Bb({startListening:(s,a,l,u)=>{let f=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(f=ku(n.infoSyncTree_,s._path,p),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),gy(n,"connected",!1),n.serverSyncTree_=new Bb({startListening:(s,a,l,u)=>(n.server_.listen(s,l,a,(f,p)=>{const g=u(f,p);hi(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function T4(n){const t=n.infoData_.getNode(new lt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Bf(n){return JP({timestamp:T4(n)})}function qb(n,e,t,s,a){n.dataUpdateCount++;const l=new lt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(a)if(s){const p=Hd(t,g=>Gt(g));u=GP(n.serverSyncTree_,l,p,a)}else{const p=Gt(t);u=bx(n.serverSyncTree_,l,p,a)}else if(s){const p=Hd(t,g=>Gt(g));u=BP(n.serverSyncTree_,l,p)}else{const p=Gt(t);u=ku(n.serverSyncTree_,l,p)}let f=l;u.length>0&&(f=hl(n,l)),hi(n.eventQueue_,f,u)}function Gb(n,e){gy(n,"connected",e),e===!1&&x4(n)}function b4(n,e){hn(e,(t,s)=>{gy(n,t,s)})}function gy(n,e,t){const s=new lt("/.info/"+e),a=Gt(t);n.infoData_.updateSnapshot(s,a);const l=ku(n.infoSyncTree_,s,a);hi(n.eventQueue_,s,l)}function _y(n){return n.nextWriteId_++}function w4(n,e,t){const s=YP(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(a=>{const l=Gt(a).withIndex(e._queryParams.getIndex());KP(n.serverSyncTree_,e,t,!0);let u;if(e._queryParams.loadsAllData())u=ku(n.serverSyncTree_,e._path,l);else{const f=pu(n.serverSyncTree_,e);u=bx(n.serverSyncTree_,e._path,l,f)}return hi(n.eventQueue_,e._path,u),Tx(n.serverSyncTree_,e,t,null,!0),l},a=>(Pu(n,"get for query "+Kt(e)+" failed: "+a),Promise.reject(new Error(a))))}function S4(n,e,t,s,a){Pu(n,"set",{path:e.toString(),value:t,priority:s});const l=Bf(n),u=Gt(t,s),f=ry(n.serverSyncTree_,e),p=Cx(u,f,l),g=_y(n),E=Ex(n.serverSyncTree_,e,p,g,!0);py(n.eventQueue_,E),n.server_.put(e.toString(),u.val(!0),(S,M)=>{const H=S==="ok";H||Sn("set at "+e+" failed: "+S);const $=Dr(n.serverSyncTree_,g,!H);hi(n.eventQueue_,e,$),e_(n,a,S,M)});const b=vy(n,e);hl(n,b),hi(n.eventQueue_,b,[])}function A4(n,e,t,s){Pu(n,"update",{path:e.toString(),value:t});let a=!0;const l=Bf(n),u={};if(hn(t,(f,p)=>{a=!1,u[f]=xx(wt(e,f),Gt(p),n.serverSyncTree_,l)}),a)cn("update() called with empty data.  Don't do anything."),e_(n,s,"ok",void 0);else{const f=_y(n),p=FP(n.serverSyncTree_,e,u,f);py(n.eventQueue_,p),n.server_.merge(e.toString(),t,(g,E)=>{const b=g==="ok";b||Sn("update at "+e+" failed: "+g);const S=Dr(n.serverSyncTree_,f,!b),M=S.length>0?hl(n,e):e;hi(n.eventQueue_,M,S),e_(n,s,g,E)}),hn(t,g=>{const E=vy(n,wt(e,g));hl(n,E)}),hi(n.eventQueue_,e,[])}}function x4(n){Pu(n,"onDisconnectEvents");const e=Bf(n),t=sf();Yg(n.onDisconnect_,Ye(),(a,l)=>{const u=xx(a,l,n.serverSyncTree_,e);rx(t,a,u)});let s=[];Yg(t,Ye(),(a,l)=>{s=s.concat(ku(n.serverSyncTree_,a,l));const u=vy(n,a);hl(n,u)}),n.onDisconnect_=sf(),hi(n.eventQueue_,Ye(),s)}function C4(n){n.persistentConnection_&&n.persistentConnection_.interrupt(_4)}function Pu(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),cn(t,...e)}function e_(n,e,t,s){e&&bl(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;s&&(l+=": "+s);const u=new Error(l);u.code=a,e(u)}})}function kx(n,e,t){return ry(n.serverSyncTree_,e,t)||Ee.EMPTY_NODE}function yy(n,e=n.transactionQueueTree_){if(e||Hf(n,e),Sl(e)){const t=Px(n,e);te(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&I4(n,Mu(e),t)}else Rx(e)&&zf(e,t=>{yy(n,t)})}function I4(n,e,t){const s=t.map(g=>g.currentWriteId),a=kx(n,e,s);let l=a;const u=a.hash();for(let g=0;g<t.length;g++){const E=t[g];te(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const b=bn(e,E.path);l=l.updateChild(b,E.currentOutputSnapshotRaw)}const f=l.val(!0),p=e;n.server_.put(p.toString(),f,g=>{Pu(n,"transaction put response",{path:p.toString(),status:g});let E=[];if(g==="ok"){const b=[];for(let S=0;S<t.length;S++)t[S].status=2,E=E.concat(Dr(n.serverSyncTree_,t[S].currentWriteId)),t[S].onComplete&&b.push(()=>t[S].onComplete(null,!0,t[S].currentOutputSnapshotResolved)),t[S].unwatcher();Hf(n,fy(n.transactionQueueTree_,e)),yy(n,n.transactionQueueTree_),hi(n.eventQueue_,e,E);for(let S=0;S<b.length;S++)bl(b[S])}else{if(g==="datastale")for(let b=0;b<t.length;b++)t[b].status===3?t[b].status=4:t[b].status=0;else{Sn("transaction at "+p.toString()+" failed: "+g);for(let b=0;b<t.length;b++)t[b].status=4,t[b].abortReason=g}hl(n,e)}},u)}function hl(n,e){const t=Mx(n,e),s=Mu(t),a=Px(n,t);return R4(n,a,s),s}function R4(n,e,t){if(e.length===0)return;const s=[];let a=[];const u=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=bn(t,p.path);let E=!1,b;if(te(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)E=!0,b=p.abortReason,a=a.concat(Dr(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=y4)E=!0,b="maxretry",a=a.concat(Dr(n.serverSyncTree_,p.currentWriteId,!0));else{const S=kx(n,p.path,u);p.currentInputSnapshot=S;const M=e[f].update(S.val());if(M!==void 0){Ff("transaction failed: Data returned ",M,p.path);let H=Gt(M);typeof M=="object"&&M!=null&&ds(M,".priority")||(H=H.updatePriority(S.getPriority()));const J=p.currentWriteId,ee=Bf(n),ce=Cx(H,S,ee);p.currentOutputSnapshotRaw=H,p.currentOutputSnapshotResolved=ce,p.currentWriteId=_y(n),u.splice(u.indexOf(J),1),a=a.concat(Ex(n.serverSyncTree_,p.path,ce,p.currentWriteId,p.applyLocally)),a=a.concat(Dr(n.serverSyncTree_,J,!0))}else E=!0,b="nodata",a=a.concat(Dr(n.serverSyncTree_,p.currentWriteId,!0))}hi(n.eventQueue_,t,a),a=[],E&&(e[f].status=2,(function(S){setTimeout(S,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(b==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(b),!1,null))))}Hf(n,n.transactionQueueTree_);for(let f=0;f<s.length;f++)bl(s[f]);yy(n,n.transactionQueueTree_)}function Mx(n,e){let t,s=n.transactionQueueTree_;for(t=ze(e);t!==null&&Sl(s)===void 0;)s=fy(s,t),e=ht(e),t=ze(e);return s}function Px(n,e){const t=[];return Lx(n,e,t),t.sort((s,a)=>s.order-a.order),t}function Lx(n,e,t){const s=Sl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);zf(e,a=>{Lx(n,a,t)})}function Hf(n,e){const t=Sl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,Ix(e,t.length>0?t:void 0)}zf(e,s=>{Hf(n,s)})}function vy(n,e){const t=Mu(Mx(n,e)),s=fy(n.transactionQueueTree_,e);return n4(s,a=>{Sg(n,a)}),Sg(n,s),Nx(s,a=>{Sg(n,a)}),t}function Sg(n,e){const t=Sl(e);if(t){const s=[];let a=[],l=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(te(l===u-1,"All SENT items should be at beginning of queue."),l=u,t[u].status=3,t[u].abortReason="set"):(te(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),a=a.concat(Dr(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&s.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?Ix(e,void 0):t.length=l+1,hi(n.eventQueue_,Mu(e),a);for(let u=0;u<s.length;u++)bl(s[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N4(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function O4(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Sn(`Invalid query segment '${t}' in query '${n}'`)}return e}const Kb=function(n,e){const t=D4(n),s=t.namespace;t.domain==="firebase.com"&&Fs(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Fs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||jk();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new FA(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new lt(t.pathString)}},D4=function(n){let e="",t="",s="",a="",l="",u=!0,f="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(f=n.substring(0,g-1),n=n.substring(g+2));let E=n.indexOf("/");E===-1&&(E=n.length);let b=n.indexOf("?");b===-1&&(b=n.length),e=n.substring(0,Math.min(E,b)),E<b&&(a=N4(n.substring(E,b)));const S=O4(n.substring(Math.min(n.length,b)));g=e.indexOf(":"),g>=0?(u=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const M=e.slice(0,g);if(M.toLowerCase()==="localhost")t="localhost";else if(M.split(".").length<=2)t=M;else{const H=e.indexOf(".");s=e.substring(0,H).toLowerCase(),t=e.substring(H+1),l=s}"ns"in S&&(l=S.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:u,scheme:f,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k4{constructor(e,t,s,a){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Kt(this.snapshot.exportVal())}}class M4{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return te(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Le(this._path)?null:Y_(this._path)}get ref(){return new Gs(this._repo,this._path)}get _queryIdentifier(){const e=Db(this._queryParams),t=H_(e);return t==="{}"?"default":t}get _queryObject(){return Db(this._queryParams)}isEqual(e){if(e=vt(e),!(e instanceof Ey))return!1;const t=this._repo===e._repo,s=XA(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+TM(this._path)}}class Gs extends Ey{constructor(e,t){super(e,t,new X_,!1)}get parent(){const e=$A(this._path);return e===null?null:new Gs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gu{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),s=t_(this.ref,e);return new gu(this._node.getChild(t),s,St)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,a)=>e(new gu(a,t_(this.ref,s),St)))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Uc(n,e){return n=vt(n),n._checkNotDeleted("ref"),e!==void 0?t_(n._root,e):n._root}function t_(n,e){return n=vt(n),ze(n._path)===null?h4("child","path",e):Dx("child","path",e),new Gs(n._repo,wt(n._path,e))}function L4(n,e){n=vt(n),d4("set",n._path),l4("set",e,n._path);const t=new Su;return S4(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function V4(n,e){u4("update",e,n._path);const t=new Su;return A4(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Ag(n){n=vt(n);const e=new P4(()=>{}),t=new Ty(e);return w4(n._repo,n,t).then(s=>new gu(s,new Gs(n._repo,n._path),n._queryParams.getIndex()))}class Ty{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new k4("value",this,new gu(e.snapshotNode,new Gs(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new M4(this,e,t):null}matches(e){return e instanceof Ty?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}kP(Gs);jP(Gs);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j4="FIREBASE_DATABASE_EMULATOR_HOST",n_={};let U4=!1;function z4(n,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),u=$r(l);n.repoInfo_=new FA(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function F4(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Fs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),cn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=Kb(l,a),f=u.repoInfo,p;typeof process<"u"&&mb&&(p=mb[j4]),p?(l=`http://${p}?ns=${f.namespace}`,u=Kb(l,a),f=u.repoInfo):u.repoInfo.secure;const g=new Wk(n.name,n.options,e);f4("Invalid Firebase Database URL",u),Le(u.path)||Fs("Database URL must point to the root of a Firebase Database (not including a child path).");const E=H4(f,n,g,new Qk(n,t));return new q4(E,n)}function B4(n,e){const t=n_[e];(!t||t[n.key]!==n)&&Fs(`Database ${e}(${n.repoInfo_}) has already been deleted.`),C4(n),delete t[n.key]}function H4(n,e,t,s){let a=n_[e.name];a||(a={},n_[e.name]=a);let l=a[n.toURLString()];return l&&Fs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new v4(n,U4,t,s),a[n.toURLString()]=l,l}class q4{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(E4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gs(this._repo,Ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(B4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Fs("Cannot call "+e+" on a deleted database.")}}function G4(n=Rf(),e){const t=Xr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=hS("database");s&&K4(t,...s)}return t}function K4(n,e,t,s={}){n=vt(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&Vs(s,l.repoInfo_.emulatorOptions))return;Fs("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Fs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Nd(Nd.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:mS(s.mockUserToken,n.app.options.projectId);u=new Nd(f)}$r(e)&&(T_(e),b_("Database",!0)),z4(l,a,s,u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y4(n){Dk(Qa),Ni(new ci("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return F4(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Mn(pb,gb,n),Mn(pb,gb,"esm2020")}Ls.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ls.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Y4();const Q4={apiKey:"AIzaSyDoIC3zpgHLx0AVl_PkkWWtv0ECF01KVKc",authDomain:"fleet-edition-3fd2a.firebaseapp.com",databaseURL:"https://fleet-edition-3fd2a-default-rtdb.firebaseio.com",projectId:"fleet-edition-3fd2a",storageBucket:"fleet-edition-3fd2a.firebasestorage.app",messagingSenderId:"1009606221480",appId:"1:1009606221480:web:d708ca852d2ce46bb4ec9d",measurementId:"G-BYJFWDGYNL"},by=A_(Q4);d2(by);xA(by);const Yo=G4(by);var Yb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jr,Vx;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,x){function I(){}I.prototype=x.prototype,C.F=x.prototype,C.prototype=new I,C.prototype.constructor=C,C.D=function(P,D,V){for(var R=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)R[dt-2]=arguments[dt];return x.prototype[D].apply(P,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(C,x,I){I||(I=0);const P=Array(16);if(typeof x=="string")for(var D=0;D<16;++D)P[D]=x.charCodeAt(I++)|x.charCodeAt(I++)<<8|x.charCodeAt(I++)<<16|x.charCodeAt(I++)<<24;else for(D=0;D<16;++D)P[D]=x[I++]|x[I++]<<8|x[I++]<<16|x[I++]<<24;x=C.g[0],I=C.g[1],D=C.g[2];let V=C.g[3],R;R=x+(V^I&(D^V))+P[0]+3614090360&4294967295,x=I+(R<<7&4294967295|R>>>25),R=V+(D^x&(I^D))+P[1]+3905402710&4294967295,V=x+(R<<12&4294967295|R>>>20),R=D+(I^V&(x^I))+P[2]+606105819&4294967295,D=V+(R<<17&4294967295|R>>>15),R=I+(x^D&(V^x))+P[3]+3250441966&4294967295,I=D+(R<<22&4294967295|R>>>10),R=x+(V^I&(D^V))+P[4]+4118548399&4294967295,x=I+(R<<7&4294967295|R>>>25),R=V+(D^x&(I^D))+P[5]+1200080426&4294967295,V=x+(R<<12&4294967295|R>>>20),R=D+(I^V&(x^I))+P[6]+2821735955&4294967295,D=V+(R<<17&4294967295|R>>>15),R=I+(x^D&(V^x))+P[7]+4249261313&4294967295,I=D+(R<<22&4294967295|R>>>10),R=x+(V^I&(D^V))+P[8]+1770035416&4294967295,x=I+(R<<7&4294967295|R>>>25),R=V+(D^x&(I^D))+P[9]+2336552879&4294967295,V=x+(R<<12&4294967295|R>>>20),R=D+(I^V&(x^I))+P[10]+4294925233&4294967295,D=V+(R<<17&4294967295|R>>>15),R=I+(x^D&(V^x))+P[11]+2304563134&4294967295,I=D+(R<<22&4294967295|R>>>10),R=x+(V^I&(D^V))+P[12]+1804603682&4294967295,x=I+(R<<7&4294967295|R>>>25),R=V+(D^x&(I^D))+P[13]+4254626195&4294967295,V=x+(R<<12&4294967295|R>>>20),R=D+(I^V&(x^I))+P[14]+2792965006&4294967295,D=V+(R<<17&4294967295|R>>>15),R=I+(x^D&(V^x))+P[15]+1236535329&4294967295,I=D+(R<<22&4294967295|R>>>10),R=x+(D^V&(I^D))+P[1]+4129170786&4294967295,x=I+(R<<5&4294967295|R>>>27),R=V+(I^D&(x^I))+P[6]+3225465664&4294967295,V=x+(R<<9&4294967295|R>>>23),R=D+(x^I&(V^x))+P[11]+643717713&4294967295,D=V+(R<<14&4294967295|R>>>18),R=I+(V^x&(D^V))+P[0]+3921069994&4294967295,I=D+(R<<20&4294967295|R>>>12),R=x+(D^V&(I^D))+P[5]+3593408605&4294967295,x=I+(R<<5&4294967295|R>>>27),R=V+(I^D&(x^I))+P[10]+38016083&4294967295,V=x+(R<<9&4294967295|R>>>23),R=D+(x^I&(V^x))+P[15]+3634488961&4294967295,D=V+(R<<14&4294967295|R>>>18),R=I+(V^x&(D^V))+P[4]+3889429448&4294967295,I=D+(R<<20&4294967295|R>>>12),R=x+(D^V&(I^D))+P[9]+568446438&4294967295,x=I+(R<<5&4294967295|R>>>27),R=V+(I^D&(x^I))+P[14]+3275163606&4294967295,V=x+(R<<9&4294967295|R>>>23),R=D+(x^I&(V^x))+P[3]+4107603335&4294967295,D=V+(R<<14&4294967295|R>>>18),R=I+(V^x&(D^V))+P[8]+1163531501&4294967295,I=D+(R<<20&4294967295|R>>>12),R=x+(D^V&(I^D))+P[13]+2850285829&4294967295,x=I+(R<<5&4294967295|R>>>27),R=V+(I^D&(x^I))+P[2]+4243563512&4294967295,V=x+(R<<9&4294967295|R>>>23),R=D+(x^I&(V^x))+P[7]+1735328473&4294967295,D=V+(R<<14&4294967295|R>>>18),R=I+(V^x&(D^V))+P[12]+2368359562&4294967295,I=D+(R<<20&4294967295|R>>>12),R=x+(I^D^V)+P[5]+4294588738&4294967295,x=I+(R<<4&4294967295|R>>>28),R=V+(x^I^D)+P[8]+2272392833&4294967295,V=x+(R<<11&4294967295|R>>>21),R=D+(V^x^I)+P[11]+1839030562&4294967295,D=V+(R<<16&4294967295|R>>>16),R=I+(D^V^x)+P[14]+4259657740&4294967295,I=D+(R<<23&4294967295|R>>>9),R=x+(I^D^V)+P[1]+2763975236&4294967295,x=I+(R<<4&4294967295|R>>>28),R=V+(x^I^D)+P[4]+1272893353&4294967295,V=x+(R<<11&4294967295|R>>>21),R=D+(V^x^I)+P[7]+4139469664&4294967295,D=V+(R<<16&4294967295|R>>>16),R=I+(D^V^x)+P[10]+3200236656&4294967295,I=D+(R<<23&4294967295|R>>>9),R=x+(I^D^V)+P[13]+681279174&4294967295,x=I+(R<<4&4294967295|R>>>28),R=V+(x^I^D)+P[0]+3936430074&4294967295,V=x+(R<<11&4294967295|R>>>21),R=D+(V^x^I)+P[3]+3572445317&4294967295,D=V+(R<<16&4294967295|R>>>16),R=I+(D^V^x)+P[6]+76029189&4294967295,I=D+(R<<23&4294967295|R>>>9),R=x+(I^D^V)+P[9]+3654602809&4294967295,x=I+(R<<4&4294967295|R>>>28),R=V+(x^I^D)+P[12]+3873151461&4294967295,V=x+(R<<11&4294967295|R>>>21),R=D+(V^x^I)+P[15]+530742520&4294967295,D=V+(R<<16&4294967295|R>>>16),R=I+(D^V^x)+P[2]+3299628645&4294967295,I=D+(R<<23&4294967295|R>>>9),R=x+(D^(I|~V))+P[0]+4096336452&4294967295,x=I+(R<<6&4294967295|R>>>26),R=V+(I^(x|~D))+P[7]+1126891415&4294967295,V=x+(R<<10&4294967295|R>>>22),R=D+(x^(V|~I))+P[14]+2878612391&4294967295,D=V+(R<<15&4294967295|R>>>17),R=I+(V^(D|~x))+P[5]+4237533241&4294967295,I=D+(R<<21&4294967295|R>>>11),R=x+(D^(I|~V))+P[12]+1700485571&4294967295,x=I+(R<<6&4294967295|R>>>26),R=V+(I^(x|~D))+P[3]+2399980690&4294967295,V=x+(R<<10&4294967295|R>>>22),R=D+(x^(V|~I))+P[10]+4293915773&4294967295,D=V+(R<<15&4294967295|R>>>17),R=I+(V^(D|~x))+P[1]+2240044497&4294967295,I=D+(R<<21&4294967295|R>>>11),R=x+(D^(I|~V))+P[8]+1873313359&4294967295,x=I+(R<<6&4294967295|R>>>26),R=V+(I^(x|~D))+P[15]+4264355552&4294967295,V=x+(R<<10&4294967295|R>>>22),R=D+(x^(V|~I))+P[6]+2734768916&4294967295,D=V+(R<<15&4294967295|R>>>17),R=I+(V^(D|~x))+P[13]+1309151649&4294967295,I=D+(R<<21&4294967295|R>>>11),R=x+(D^(I|~V))+P[4]+4149444226&4294967295,x=I+(R<<6&4294967295|R>>>26),R=V+(I^(x|~D))+P[11]+3174756917&4294967295,V=x+(R<<10&4294967295|R>>>22),R=D+(x^(V|~I))+P[2]+718787259&4294967295,D=V+(R<<15&4294967295|R>>>17),R=I+(V^(D|~x))+P[9]+3951481745&4294967295,C.g[0]=C.g[0]+x&4294967295,C.g[1]=C.g[1]+(D+(R<<21&4294967295|R>>>11))&4294967295,C.g[2]=C.g[2]+D&4294967295,C.g[3]=C.g[3]+V&4294967295}s.prototype.v=function(C,x){x===void 0&&(x=C.length);const I=x-this.blockSize,P=this.C;let D=this.h,V=0;for(;V<x;){if(D==0)for(;V<=I;)a(this,C,V),V+=this.blockSize;if(typeof C=="string"){for(;V<x;)if(P[D++]=C.charCodeAt(V++),D==this.blockSize){a(this,P),D=0;break}}else for(;V<x;)if(P[D++]=C[V++],D==this.blockSize){a(this,P),D=0;break}}this.h=D,this.o+=x},s.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var x=1;x<C.length-8;++x)C[x]=0;x=this.o*8;for(var I=C.length-8;I<C.length;++I)C[I]=x&255,x/=256;for(this.v(C),C=Array(16),x=0,I=0;I<4;++I)for(let P=0;P<32;P+=8)C[x++]=this.g[I]>>>P&255;return C};function l(C,x){var I=f;return Object.prototype.hasOwnProperty.call(I,C)?I[C]:I[C]=x(C)}function u(C,x){this.h=x;const I=[];let P=!0;for(let D=C.length-1;D>=0;D--){const V=C[D]|0;P&&V==x||(I[D]=V,P=!1)}this.g=I}var f={};function p(C){return-128<=C&&C<128?l(C,function(x){return new u([x|0],x<0?-1:0)}):new u([C|0],C<0?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return b;if(C<0)return J(g(-C));const x=[];let I=1;for(let P=0;C>=I;P++)x[P]=C/I|0,I*=4294967296;return new u(x,0)}function E(C,x){if(C.length==0)throw Error("number format error: empty string");if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(C.charAt(0)=="-")return J(E(C.substring(1),x));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=g(Math.pow(x,8));let P=b;for(let V=0;V<C.length;V+=8){var D=Math.min(8,C.length-V);const R=parseInt(C.substring(V,V+D),x);D<8?(D=g(Math.pow(x,D)),P=P.j(D).add(g(R))):(P=P.j(I),P=P.add(g(R)))}return P}var b=p(0),S=p(1),M=p(16777216);n=u.prototype,n.m=function(){if($(this))return-J(this).m();let C=0,x=1;for(let I=0;I<this.g.length;I++){const P=this.i(I);C+=(P>=0?P:4294967296+P)*x,x*=4294967296}return C},n.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(H(this))return"0";if($(this))return"-"+J(this).toString(C);const x=g(Math.pow(C,6));var I=this;let P="";for(;;){const D=we(I,x).g;I=ee(I,D.j(x));let V=((I.g.length>0?I.g[0]:I.h)>>>0).toString(C);if(I=D,H(I))return V+P;for(;V.length<6;)V="0"+V;P=V+P}},n.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function H(C){if(C.h!=0)return!1;for(let x=0;x<C.g.length;x++)if(C.g[x]!=0)return!1;return!0}function $(C){return C.h==-1}n.l=function(C){return C=ee(this,C),$(C)?-1:H(C)?0:1};function J(C){const x=C.g.length,I=[];for(let P=0;P<x;P++)I[P]=~C.g[P];return new u(I,~C.h).add(S)}n.abs=function(){return $(this)?J(this):this},n.add=function(C){const x=Math.max(this.g.length,C.g.length),I=[];let P=0;for(let D=0;D<=x;D++){let V=P+(this.i(D)&65535)+(C.i(D)&65535),R=(V>>>16)+(this.i(D)>>>16)+(C.i(D)>>>16);P=R>>>16,V&=65535,R&=65535,I[D]=R<<16|V}return new u(I,I[I.length-1]&-2147483648?-1:0)};function ee(C,x){return C.add(J(x))}n.j=function(C){if(H(this)||H(C))return b;if($(this))return $(C)?J(this).j(J(C)):J(J(this).j(C));if($(C))return J(this.j(J(C)));if(this.l(M)<0&&C.l(M)<0)return g(this.m()*C.m());const x=this.g.length+C.g.length,I=[];for(var P=0;P<2*x;P++)I[P]=0;for(P=0;P<this.g.length;P++)for(let D=0;D<C.g.length;D++){const V=this.i(P)>>>16,R=this.i(P)&65535,dt=C.i(D)>>>16,Nt=C.i(D)&65535;I[2*P+2*D]+=R*Nt,ce(I,2*P+2*D),I[2*P+2*D+1]+=V*Nt,ce(I,2*P+2*D+1),I[2*P+2*D+1]+=R*dt,ce(I,2*P+2*D+1),I[2*P+2*D+2]+=V*dt,ce(I,2*P+2*D+2)}for(C=0;C<x;C++)I[C]=I[2*C+1]<<16|I[2*C];for(C=x;C<2*x;C++)I[C]=0;return new u(I,0)};function ce(C,x){for(;(C[x]&65535)!=C[x];)C[x+1]+=C[x]>>>16,C[x]&=65535,x++}function me(C,x){this.g=C,this.h=x}function we(C,x){if(H(x))throw Error("division by zero");if(H(C))return new me(b,b);if($(C))return x=we(J(C),x),new me(J(x.g),J(x.h));if($(x))return x=we(C,J(x)),new me(J(x.g),x.h);if(C.g.length>30){if($(C)||$(x))throw Error("slowDivide_ only works with positive integers.");for(var I=S,P=x;P.l(C)<=0;)I=Xe(I),P=Xe(P);var D=Se(I,1),V=Se(P,1);for(P=Se(P,2),I=Se(I,2);!H(P);){var R=V.add(P);R.l(C)<=0&&(D=D.add(I),V=R),P=Se(P,1),I=Se(I,1)}return x=ee(C,D.j(x)),new me(D,x)}for(D=b;C.l(x)>=0;){for(I=Math.max(1,Math.floor(C.m()/x.m())),P=Math.ceil(Math.log(I)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),V=g(I),R=V.j(x);$(R)||R.l(C)>0;)I-=P,V=g(I),R=V.j(x);H(V)&&(V=S),D=D.add(V),C=ee(C,R)}return new me(D,C)}n.B=function(C){return we(this,C).h},n.and=function(C){const x=Math.max(this.g.length,C.g.length),I=[];for(let P=0;P<x;P++)I[P]=this.i(P)&C.i(P);return new u(I,this.h&C.h)},n.or=function(C){const x=Math.max(this.g.length,C.g.length),I=[];for(let P=0;P<x;P++)I[P]=this.i(P)|C.i(P);return new u(I,this.h|C.h)},n.xor=function(C){const x=Math.max(this.g.length,C.g.length),I=[];for(let P=0;P<x;P++)I[P]=this.i(P)^C.i(P);return new u(I,this.h^C.h)};function Xe(C){const x=C.g.length+1,I=[];for(let P=0;P<x;P++)I[P]=C.i(P)<<1|C.i(P-1)>>>31;return new u(I,C.h)}function Se(C,x){const I=x>>5;x%=32;const P=C.g.length-I,D=[];for(let V=0;V<P;V++)D[V]=x>0?C.i(V+I)>>>x|C.i(V+I+1)<<32-x:C.i(V+I);return new u(D,C.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Vx=s,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=E,jr=u}).apply(typeof Yb<"u"?Yb:typeof self<"u"?self:typeof window<"u"?window:{});var Ed=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jx,Hc,Ux,Dd,i_,zx,Fx,Bx;(function(){var n,e=Object.defineProperty;function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ed=="object"&&Ed];for(var y=0;y<h.length;++y){var T=h[y];if(T&&T.Math==Math)return T}throw Error("Cannot find global object")}var s=t(this);function a(h,y){if(y)e:{var T=s;h=h.split(".");for(var A=0;A<h.length-1;A++){var j=h[A];if(!(j in T))break e;T=T[j]}h=h[h.length-1],A=T[h],y=y(A),y!=A&&y!=null&&e(T,h,{configurable:!0,writable:!0,value:y})}}a("Symbol.dispose",function(h){return h||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(h){return h||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(h){return h||function(y){var T=[],A;for(A in y)Object.prototype.hasOwnProperty.call(y,A)&&T.push([A,y[A]]);return T}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function f(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function p(h,y,T){return h.call.apply(h.bind,arguments)}function g(h,y,T){return g=p,g.apply(null,arguments)}function E(h,y){var T=Array.prototype.slice.call(arguments,1);return function(){var A=T.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function b(h,y){function T(){}T.prototype=y.prototype,h.Z=y.prototype,h.prototype=new T,h.prototype.constructor=h,h.Ob=function(A,j,B){for(var ne=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)ne[Re-2]=arguments[Re];return y.prototype[j].apply(A,ne)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?h=>h&&AsyncContext.Snapshot.wrap(h):h=>h;function M(h){const y=h.length;if(y>0){const T=Array(y);for(let A=0;A<y;A++)T[A]=h[A];return T}return[]}function H(h,y){for(let A=1;A<arguments.length;A++){const j=arguments[A];var T=typeof j;if(T=T!="object"?T:j?Array.isArray(j)?"array":T:"null",T=="array"||T=="object"&&typeof j.length=="number"){T=h.length||0;const B=j.length||0;h.length=T+B;for(let ne=0;ne<B;ne++)h[T+ne]=j[ne]}else h.push(j)}}class ${constructor(y,T){this.i=y,this.j=T,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function J(h){u.setTimeout(()=>{throw h},0)}function ee(){var h=C;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class ce{constructor(){this.h=this.g=null}add(y,T){const A=me.get();A.set(y,T),this.h?this.h.next=A:this.g=A,this.h=A}}var me=new $(()=>new we,h=>h.reset());class we{constructor(){this.next=this.g=this.h=null}set(y,T){this.h=y,this.g=T,this.next=null}reset(){this.next=this.g=this.h=null}}let Xe,Se=!1,C=new ce,x=()=>{const h=Promise.resolve(void 0);Xe=()=>{h.then(I)}};function I(){for(var h;h=ee();){try{h.h.call(h.g)}catch(T){J(T)}var y=me;y.j(h),y.h<100&&(y.h++,h.next=y.g,y.g=h)}Se=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function D(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const T=()=>{};u.addEventListener("test",T,y),u.removeEventListener("test",T,y)}catch{}return h})();function R(h){return/^[\s\xa0]*$/.test(h)}function dt(h,y){D.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h&&this.init(h,y)}b(dt,D),dt.prototype.init=function(h,y){const T=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget,y||(T=="mouseover"?y=h.fromElement:T=="mouseout"&&(y=h.toElement)),this.relatedTarget=y,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=h.pointerType,this.state=h.state,this.i=h,h.defaultPrevented&&dt.Z.h.call(this)},dt.prototype.h=function(){dt.Z.h.call(this);const h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Nt="closure_listenable_"+(Math.random()*1e6|0),K=0;function se(h,y,T,A,j){this.listener=h,this.proxy=null,this.src=y,this.type=T,this.capture=!!A,this.ha=j,this.key=++K,this.da=this.fa=!1}function le(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Ve(h,y,T){for(const A in h)y.call(T,h[A],A,h)}function Qe(h,y){for(const T in h)y.call(void 0,h[T],T,h)}function k(h){const y={};for(const T in h)y[T]=h[T];return y}const Y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ie(h,y){let T,A;for(let j=1;j<arguments.length;j++){A=arguments[j];for(T in A)h[T]=A[T];for(let B=0;B<Y.length;B++)T=Y[B],Object.prototype.hasOwnProperty.call(A,T)&&(h[T]=A[T])}}function re(h){this.src=h,this.g={},this.h=0}re.prototype.add=function(h,y,T,A,j){const B=h.toString();h=this.g[B],h||(h=this.g[B]=[],this.h++);const ne=xe(h,y,A,j);return ne>-1?(y=h[ne],T||(y.fa=!1)):(y=new se(y,this.src,B,!!A,j),y.fa=T,h.push(y)),y};function be(h,y){const T=y.type;if(T in h.g){var A=h.g[T],j=Array.prototype.indexOf.call(A,y,void 0),B;(B=j>=0)&&Array.prototype.splice.call(A,j,1),B&&(le(y),h.g[T].length==0&&(delete h.g[T],h.h--))}}function xe(h,y,T,A){for(let j=0;j<h.length;++j){const B=h[j];if(!B.da&&B.listener==y&&B.capture==!!T&&B.ha==A)return j}return-1}var he="closure_lm_"+(Math.random()*1e6|0),et={};function Je(h,y,T,A,j){if(Array.isArray(y)){for(let B=0;B<y.length;B++)Je(h,y[B],T,A,j);return null}return T=Ol(T),h&&h[Nt]?h.J(y,T,f(A)?!!A.capture:!1,j):Ot(h,y,T,!1,A,j)}function Ot(h,y,T,A,j,B){if(!y)throw Error("Invalid event type");const ne=f(j)?!!j.capture:!!j;let Re=ea(h);if(Re||(h[he]=Re=new re(h)),T=Re.add(y,T,A,ne,B),T.proxy)return T;if(A=Ks(),T.proxy=A,A.src=h,A.listener=T,h.addEventListener)V||(j=ne),j===void 0&&(j=!1),h.addEventListener(y.toString(),A,j);else if(h.attachEvent)h.attachEvent(ki(y.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return T}function Ks(){function h(T){return y.call(h.src,h.listener,T)}const y=Rl;return h}function Di(h,y,T,A,j){if(Array.isArray(y))for(var B=0;B<y.length;B++)Di(h,y[B],T,A,j);else A=f(A)?!!A.capture:!!A,T=Ol(T),h&&h[Nt]?(h=h.i,B=String(y).toString(),B in h.g&&(y=h.g[B],T=xe(y,T,A,j),T>-1&&(le(y[T]),Array.prototype.splice.call(y,T,1),y.length==0&&(delete h.g[B],h.h--)))):h&&(h=ea(h))&&(y=h.g[y.toString()],h=-1,y&&(h=xe(y,T,A,j)),(T=h>-1?y[h]:null)&&Ys(T))}function Ys(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[Nt])be(y.i,h);else{var T=h.type,A=h.proxy;y.removeEventListener?y.removeEventListener(T,A,h.capture):y.detachEvent?y.detachEvent(ki(T),A):y.addListener&&y.removeListener&&y.removeListener(A),(T=ea(y))?(be(T,h),T.h==0&&(T.src=null,y[he]=null)):le(h)}}}function ki(h){return h in et?et[h]:et[h]="on"+h}function Rl(h,y){if(h.da)h=!0;else{y=new dt(y,this);const T=h.listener,A=h.ha||h.src;h.fa&&Ys(h),h=T.call(A,y)}return h}function ea(h){return h=h[he],h instanceof re?h:null}var Nl="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ol(h){return typeof h=="function"?h:(h[Nl]||(h[Nl]=function(y){return h.handleEvent(y)}),h[Nl])}function Dt(){P.call(this),this.i=new re(this),this.M=this,this.G=null}b(Dt,P),Dt.prototype[Nt]=!0,Dt.prototype.removeEventListener=function(h,y,T,A){Di(this,h,y,T,A)};function Ht(h,y){var T,A=h.G;if(A)for(T=[];A;A=A.G)T.push(A);if(h=h.M,A=y.type||y,typeof y=="string")y=new D(y,h);else if(y instanceof D)y.target=y.target||h;else{var j=y;y=new D(A,h),ie(y,j)}j=!0;let B,ne;if(T)for(ne=T.length-1;ne>=0;ne--)B=y.g=T[ne],j=Qs(B,A,!0,y)&&j;if(B=y.g=h,j=Qs(B,A,!0,y)&&j,j=Qs(B,A,!1,y)&&j,T)for(ne=0;ne<T.length;ne++)B=y.g=T[ne],j=Qs(B,A,!1,y)&&j}Dt.prototype.N=function(){if(Dt.Z.N.call(this),this.i){var h=this.i;for(const y in h.g){const T=h.g[y];for(let A=0;A<T.length;A++)le(T[A]);delete h.g[y],h.h--}}this.G=null},Dt.prototype.J=function(h,y,T,A){return this.i.add(String(h),y,!1,T,A)},Dt.prototype.K=function(h,y,T,A){return this.i.add(String(h),y,!0,T,A)};function Qs(h,y,T,A){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();let j=!0;for(let B=0;B<y.length;++B){const ne=y[B];if(ne&&!ne.da&&ne.capture==T){const Re=ne.listener,xt=ne.ha||ne.src;ne.fa&&be(h.i,ne),j=Re.call(xt,A)!==!1&&j}}return j&&!A.defaultPrevented}function sm(h,y){if(typeof h!="function")if(h&&typeof h.handleEvent=="function")h=g(h.handleEvent,h);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:u.setTimeout(h,y||0)}function Bu(h){h.g=sm(()=>{h.g=null,h.i&&(h.i=!1,Bu(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class yn extends P{constructor(y,T){super(),this.m=y,this.l=T,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Bu(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ta(h){P.call(this),this.h=h,this.g={}}b(ta,P);var Dl=[];function kl(h){Ve(h.g,function(y,T){this.g.hasOwnProperty(T)&&Ys(y)},h),h.g={}}ta.prototype.N=function(){ta.Z.N.call(this),kl(this)},ta.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ws=u.JSON.stringify,rm=u.JSON.parse,Hu=class{stringify(h){return u.JSON.stringify(h,void 0)}parse(h){return u.JSON.parse(h,void 0)}};function qu(){}function Gu(){}var di={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function tn(){D.call(this,"d")}b(tn,D);function Yn(){D.call(this,"c")}b(Yn,D);var At={},Ku=null;function to(){return Ku=Ku||new Dt}At.Ia="serverreachability";function Yu(h){D.call(this,At.Ia,h)}b(Yu,D);function Mi(h){const y=to();Ht(y,new Yu(y))}At.STAT_EVENT="statevent";function na(h,y){D.call(this,At.STAT_EVENT,h),this.stat=y}b(na,D);function kt(h){const y=to();Ht(y,new na(y,h))}At.Ja="timingevent";function Pi(h,y){D.call(this,At.Ja,h),this.size=y}b(Pi,D);function Li(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){h()},y)}function fi(){this.g=!0}fi.prototype.ua=function(){this.g=!1};function am(h,y,T,A,j,B){h.info(function(){if(h.g)if(B){var ne="",Re=B.split("&");for(let We=0;We<Re.length;We++){var xt=Re[We].split("=");if(xt.length>1){const _t=xt[0];xt=xt[1];const Xn=_t.split("_");ne=Xn.length>=2&&Xn[1]=="type"?ne+(_t+"="+xt+"&"):ne+(_t+"=redacted&")}}}else ne=null;else ne=B;return"XMLHTTP REQ ("+A+") [attempt "+j+"]: "+y+`
`+T+`
`+ne})}function Qu(h,y,T,A,j,B,ne){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+j+"]: "+y+`
`+T+`
`+B+" "+ne})}function Vi(h,y,T,A){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+om(h,T)+(A?" "+A:"")})}function ia(h,y){h.info(function(){return"TIMEOUT: "+y})}fi.prototype.info=function(){};function om(h,y){if(!h.g)return y;if(!y)return null;try{const B=JSON.parse(y);if(B){for(h=0;h<B.length;h++)if(Array.isArray(B[h])){var T=B[h];if(!(T.length<2)){var A=T[1];if(Array.isArray(A)&&!(A.length<1)){var j=A[0];if(j!="noop"&&j!="stop"&&j!="close")for(let ne=1;ne<A.length;ne++)A[ne]=""}}}}return Ws(B)}catch{return y}}var sa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ml={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Pl;function ra(){}b(ra,qu),ra.prototype.g=function(){return new XMLHttpRequest},Pl=new ra;function fs(h){return encodeURIComponent(String(h))}function Wu(h){var y=1;h=h.split(":");const T=[];for(;y>0&&h.length;)T.push(h.shift()),y--;return h.length&&T.push(h.join(":")),T}function mi(h,y,T,A){this.j=h,this.i=y,this.l=T,this.S=A||1,this.V=new ta(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new pi}function pi(){this.i=null,this.g="",this.h=!1}var Mt={},$t={};function ji(h,y,T){h.M=1,h.A=aa(Lt(y)),h.u=T,h.R=!0,no(h,null)}function no(h,y){h.F=Date.now(),Ui(h),h.B=Lt(h.A);var T=h.B,A=h.S;Array.isArray(A)||(A=[String(A)]),ao(T.i,"t",A),h.C=0,T=h.j.L,h.h=new pi,h.g=uh(h.j,T?y:null,!h.u),h.P>0&&(h.O=new yn(g(h.Y,h,h.g),h.P)),y=h.V,T=h.g,A=h.ba;var j="readystatechange";Array.isArray(j)||(j&&(Dl[0]=j.toString()),j=Dl);for(let B=0;B<j.length;B++){const ne=Je(T,j[B],A||y.handleEvent,!1,y.h||y);if(!ne)break;y.g[ne.key]=ne}y=h.J?k(h.J):{},h.u?(h.v||(h.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.B,h.v,h.u,y)):(h.v="GET",h.g.ea(h.B,h.v,null,y)),Mi(),am(h.i,h.v,h.B,h.l,h.S,h.u)}mi.prototype.ba=function(h){h=h.target;const y=this.O;y&&yi(h)==3?y.j():this.Y(h)},mi.prototype.Y=function(h){try{if(h==this.g)e:{const Re=yi(this.g),xt=this.g.ya(),We=this.g.ca();if(!(Re<3)&&(Re!=3||this.g&&(this.h.h||this.g.la()||nn(this.g)))){this.K||Re!=4||xt==7||(xt==8||We<=0?Mi(3):Mi(2)),zi(this);var y=this.g.ca();this.X=y;var T=lm(this);if(this.o=y==200,Qu(this.i,this.v,this.B,this.l,this.S,Re,y),this.o){if(this.U&&!this.L){t:{if(this.g){var A,j=this.g;if((A=j.g?j.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(A)){var B=A;break t}}B=null}if(h=B)Vi(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Fi(this,h);else{this.o=!1,this.m=3,kt(12),Pn(this),Qn(this);break e}}if(this.R){h=!0;let _t;for(;!this.K&&this.C<T.length;)if(_t=Xu(this,T),_t==$t){Re==4&&(this.m=4,kt(14),h=!1),Vi(this.i,this.l,null,"[Incomplete Response]");break}else if(_t==Mt){this.m=4,kt(15),Vi(this.i,this.l,T,"[Invalid Chunk]"),h=!1;break}else Vi(this.i,this.l,_t,null),Fi(this,_t);if($u(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||T.length!=0||this.h.h||(this.m=1,kt(16),h=!1),this.o=this.o&&h,!h)Vi(this.i,this.l,T,"[Invalid Chunked Response]"),Pn(this),Qn(this);else if(T.length>0&&!this.W){this.W=!0;var ne=this.j;ne.g==this&&ne.aa&&!ne.P&&(ne.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),$l(ne),ne.P=!0,kt(11))}}else Vi(this.i,this.l,T,null),Fi(this,T);Re==4&&Pn(this),this.o&&!this.K&&(Re==4?ah(this.j,this):(this.o=!1,Ui(this)))}else ps(this.g),y==400&&T.indexOf("Unknown SID")>0?(this.m=3,kt(12)):(this.m=0,kt(13)),Pn(this),Qn(this)}}}catch{}finally{}};function lm(h){if(!$u(h))return h.g.la();const y=nn(h.g);if(y==="")return"";let T="";const A=y.length,j=yi(h.g)==4;if(!h.h.i){if(typeof TextDecoder>"u")return Pn(h),Qn(h),"";h.h.i=new u.TextDecoder}for(let B=0;B<A;B++)h.h.h=!0,T+=h.h.i.decode(y[B],{stream:!(j&&B==A-1)});return y.length=0,h.h.g+=T,h.C=0,h.h.g}function $u(h){return h.g?h.v=="GET"&&h.M!=2&&h.j.Aa:!1}function Xu(h,y){var T=h.C,A=y.indexOf(`
`,T);return A==-1?$t:(T=Number(y.substring(T,A)),isNaN(T)?Mt:(A+=1,A+T>y.length?$t:(y=y.slice(A,A+T),h.C=A+T,y)))}mi.prototype.cancel=function(){this.K=!0,Pn(this)};function Ui(h){h.T=Date.now()+h.H,io(h,h.H)}function io(h,y){if(h.D!=null)throw Error("WatchDog timer not null");h.D=Li(g(h.aa,h),y)}function zi(h){h.D&&(u.clearTimeout(h.D),h.D=null)}mi.prototype.aa=function(){this.D=null;const h=Date.now();h-this.T>=0?(ia(this.i,this.B),this.M!=2&&(Mi(),kt(17)),Pn(this),this.m=2,Qn(this)):io(this,this.T-h)};function Qn(h){h.j.I==0||h.K||ah(h.j,h)}function Pn(h){zi(h);var y=h.O;y&&typeof y.dispose=="function"&&y.dispose(),h.O=null,kl(h.V),h.g&&(y=h.g,h.g=null,y.abort(),y.dispose())}function Fi(h,y){try{var T=h.j;if(T.I!=0&&(T.g==h||Hi(T.h,h))){if(!h.L&&Hi(T.h,h)&&T.I==3){try{var A=T.Ba.g.parse(y)}catch{A=null}if(Array.isArray(A)&&A.length==3){var j=A;if(j[0]==0){e:if(!T.v){if(T.g)if(T.g.F+3e3<h.F)ho(T),ir(T);else break e;fa(T),kt(18)}}else T.xa=j[1],0<T.xa-T.K&&j[2]<37500&&T.F&&T.A==0&&!T.C&&(T.C=Li(g(T.Va,T),6e3));Bi(T.h)<=1&&T.ta&&(T.ta=void 0)}else Wi(T,11)}else if((h.L||T.g==h)&&ho(T),!R(y))for(j=T.Ba.g.parse(y),y=0;y<j.length;y++){let We=j[y];const _t=We[0];if(!(_t<=T.K))if(T.K=_t,We=We[1],T.I==2)if(We[0]=="c"){T.M=We[1],T.ba=We[2];const Xn=We[3];Xn!=null&&(T.ka=Xn,T.j.info("VER="+T.ka));const $i=We[4];$i!=null&&(T.za=$i,T.j.info("SVER="+T.za));const vi=We[5];vi!=null&&typeof vi=="number"&&vi>0&&(A=1.5*vi,T.O=A,T.j.info("backChannelRequestTimeoutMs_="+A)),A=T;const Ei=h.g;if(Ei){const ma=Ei.g?Ei.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ma){var B=A.h;B.g||ma.indexOf("spdy")==-1&&ma.indexOf("quic")==-1&&ma.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(jl(B,B.h),B.h=null))}if(A.G){const fo=Ei.g?Ei.g.getResponseHeader("X-HTTP-Session-Id"):null;fo&&(A.wa=fo,tt(A.J,A.G,fo))}}T.I=3,T.l&&T.l.ra(),T.aa&&(T.T=Date.now()-h.F,T.j.info("Handshake RTT: "+T.T+"ms")),A=T;var ne=h;if(A.na=ch(A,A.L?A.ba:null,A.W),ne.L){Ul(A.h,ne);var Re=ne,xt=A.O;xt&&(Re.H=xt),Re.D&&(zi(Re),Ui(Re)),A.g=ne}else sh(A);T.i.length>0&&Qi(T)}else We[0]!="stop"&&We[0]!="close"||Wi(T,7);else T.I==3&&(We[0]=="stop"||We[0]=="close"?We[0]=="stop"?Wi(T,7):Ql(T):We[0]!="noop"&&T.l&&T.l.qa(We),T.A=0)}}Mi(4)}catch{}}var Pt=class{constructor(h,y){this.g=h,this.map=y}};function Ll(h){this.l=h||10,u.PerformanceNavigationTiming?(h=u.performance.getEntriesByType("navigation"),h=h.length>0&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Vl(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Bi(h){return h.h?1:h.g?h.g.size:0}function Hi(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function jl(h,y){h.g?h.g.add(y):h.h=y}function Ul(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}Ll.prototype.cancel=function(){if(this.i=zl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function zl(h){if(h.h!=null)return h.i.concat(h.h.G);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const T of h.g.values())y=y.concat(T.G);return y}return M(h.i)}var Ju=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function so(h,y){if(h){h=h.split("&");for(let T=0;T<h.length;T++){const A=h[T].indexOf("=");let j,B=null;A>=0?(j=h[T].substring(0,A),B=h[T].substring(A+1)):j=h[T],y(j,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function Ln(h){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;h instanceof Ln?(this.l=h.l,Xt(this,h.j),this.o=h.o,this.g=h.g,$s(this,h.u),this.h=h.h,Fl(this,nh(h.i)),this.m=h.m):h&&(y=String(h).match(Ju))?(this.l=!1,Xt(this,y[1]||"",!0),this.o=qi(y[2]||""),this.g=qi(y[3]||"",!0),$s(this,y[4]),this.h=qi(y[5]||"",!0),Fl(this,y[6]||"",!0),this.m=qi(y[7]||"")):(this.l=!1,this.i=new Js(null,this.l))}Ln.prototype.toString=function(){const h=[];var y=this.j;y&&h.push(oa(y,ro,!0),":");var T=this.g;return(T||y=="file")&&(h.push("//"),(y=this.o)&&h.push(oa(y,ro,!0),"@"),h.push(fs(T).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),T=this.u,T!=null&&h.push(":",String(T))),(T=this.h)&&(this.g&&T.charAt(0)!="/"&&h.push("/"),h.push(oa(T,T.charAt(0)=="/"?Bl:Zu,!0))),(T=this.i.toString())&&h.push("?",T),(T=this.m)&&h.push("#",oa(T,eh)),h.join("")},Ln.prototype.resolve=function(h){const y=Lt(this);let T=!!h.j;T?Xt(y,h.j):T=!!h.o,T?y.o=h.o:T=!!h.g,T?y.g=h.g:T=h.u!=null;var A=h.h;if(T)$s(y,h.u);else if(T=!!h.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var j=y.h.lastIndexOf("/");j!=-1&&(A=y.h.slice(0,j+1)+A)}if(j=A,j==".."||j==".")A="";else if(j.indexOf("./")!=-1||j.indexOf("/.")!=-1){A=j.lastIndexOf("/",0)==0,j=j.split("/");const B=[];for(let ne=0;ne<j.length;){const Re=j[ne++];Re=="."?A&&ne==j.length&&B.push(""):Re==".."?((B.length>1||B.length==1&&B[0]!="")&&B.pop(),A&&ne==j.length&&B.push("")):(B.push(Re),A=!0)}A=B.join("/")}else A=j}return T?y.h=A:T=h.i.toString()!=="",T?Fl(y,nh(h.i)):T=!!h.m,T&&(y.m=h.m),y};function Lt(h){return new Ln(h)}function Xt(h,y,T){h.j=T?qi(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function $s(h,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);h.u=y}else h.u=null}function Fl(h,y,T){y instanceof Js?(h.i=y,oo(h.i,h.l)):(T||(y=oa(y,Xs)),h.i=new Js(y,h.l))}function tt(h,y,T){h.i.set(y,T)}function aa(h){return tt(h,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),h}function qi(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function oa(h,y,T){return typeof h=="string"?(h=encodeURI(h).replace(y,An),T&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function An(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var ro=/[#\/\?@]/g,Zu=/[#\?:]/g,Bl=/[#\?]/g,Xs=/[#\?@]/g,eh=/#/g;function Js(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function xn(h){h.g||(h.g=new Map,h.h=0,h.i&&so(h.i,function(y,T){h.add(decodeURIComponent(y.replace(/\+/g," ")),T)}))}n=Js.prototype,n.add=function(h,y){xn(this),this.i=null,h=Zs(this,h);let T=this.g.get(h);return T||this.g.set(h,T=[]),T.push(y),this.h+=1,this};function th(h,y){xn(h),y=Zs(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function Hl(h,y){return xn(h),y=Zs(h,y),h.g.has(y)}n.forEach=function(h,y){xn(this),this.g.forEach(function(T,A){T.forEach(function(j){h.call(y,j,A,this)},this)},this)};function ql(h,y){xn(h);let T=[];if(typeof y=="string")Hl(h,y)&&(T=T.concat(h.g.get(Zs(h,y))));else for(h=Array.from(h.g.values()),y=0;y<h.length;y++)T=T.concat(h[y]);return T}n.set=function(h,y){return xn(this),this.i=null,h=Zs(this,h),Hl(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},n.get=function(h,y){return h?(h=ql(this,h),h.length>0?String(h[0]):y):y};function ao(h,y,T){th(h,y),T.length>0&&(h.i=null,h.g.set(Zs(h,y),M(T)),h.h+=T.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(let A=0;A<y.length;A++){var T=y[A];const j=fs(T);T=ql(this,T);for(let B=0;B<T.length;B++){let ne=j;T[B]!==""&&(ne+="="+fs(T[B])),h.push(ne)}}return this.i=h.join("&")};function nh(h){const y=new Js;return y.i=h.i,h.g&&(y.g=new Map(h.g),y.h=h.h),y}function Zs(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function oo(h,y){y&&!h.j&&(xn(h),h.i=null,h.g.forEach(function(T,A){const j=A.toLowerCase();A!=j&&(th(this,A),ao(this,j,T))},h)),h.j=y}function gi(h,y){const T=new fi;if(u.Image){const A=new Image;A.onload=E(Wn,T,"TestLoadImage: loaded",!0,y,A),A.onerror=E(Wn,T,"TestLoadImage: error",!1,y,A),A.onabort=E(Wn,T,"TestLoadImage: abort",!1,y,A),A.ontimeout=E(Wn,T,"TestLoadImage: timeout",!1,y,A),u.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else y(!1)}function Gl(h,y){const T=new fi,A=new AbortController,j=setTimeout(()=>{A.abort(),Wn(T,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:A.signal}).then(B=>{clearTimeout(j),B.ok?Wn(T,"TestPingServer: ok",!0,y):Wn(T,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(j),Wn(T,"TestPingServer: error",!1,y)})}function Wn(h,y,T,A,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),A(T)}catch{}}function er(){this.g=new Hu}function Gi(h){this.i=h.Sb||null,this.h=h.ab||!1}b(Gi,qu),Gi.prototype.g=function(){return new la(this.i,this.h)};function la(h,y){Dt.call(this),this.H=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}b(la,Dt),n=la.prototype,n.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=h,this.D=y,this.readyState=1,_i(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};h&&(y.body=h),(this.H||u).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,tr(this)),this.readyState=0},n.Pa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;lo(this)}else h.text().then(this.Oa.bind(this),this.ga.bind(this))};function lo(h){h.j.read().then(h.Ma.bind(h)).catch(h.ga.bind(h))}n.Ma=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?tr(this):_i(this),this.readyState==3&&lo(this)}},n.Oa=function(h){this.g&&(this.response=this.responseText=h,tr(this))},n.Na=function(h){this.g&&(this.response=h,tr(this))},n.ga=function(){this.g&&tr(this)};function tr(h){h.readyState=4,h.l=null,h.j=null,h.B=null,_i(h)}n.setRequestHeader=function(h,y){this.A.append(h,y)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var T=y.next();!T.done;)T=T.value,h.push(T[0]+": "+T[1]),T=y.next();return h.join(`\r
`)};function _i(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(la.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function $n(h){let y="";return Ve(h,function(T,A){y+=A,y+=":",y+=T,y+=`\r
`}),y}function ca(h,y,T){e:{for(A in T){var A=!1;break e}A=!0}A||(T=$n(T),typeof h=="string"?T!=null&&fs(T):tt(h,y,T))}function st(h){Dt.call(this),this.headers=new Map,this.L=h||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}b(st,Dt);var Ki=/^https?$/i,Kl=["POST","PUT"];n=st.prototype,n.Fa=function(h){this.H=h},n.ea=function(h,y,T,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Pl.g(),this.g.onreadystatechange=S(g(this.Ca,this));try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(B){ua(this,B);return}if(h=T||"",T=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var j in A)T.set(j,A[j]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const B of A.keys())T.set(B,A.get(B));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(T.keys()).find(B=>B.toLowerCase()=="content-type"),j=u.FormData&&h instanceof u.FormData,!(Array.prototype.indexOf.call(Kl,y,void 0)>=0)||A||j||T.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,ne]of T)this.g.setRequestHeader(B,ne);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(h),this.v=!1}catch(B){ua(this,B)}};function ua(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.o=5,Yl(h),ms(h)}function Yl(h){h.A||(h.A=!0,Ht(h,"complete"),Ht(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=h||7,Ht(this,"complete"),Ht(this,"abort"),ms(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ms(this,!0)),st.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ha(this):this.Xa())},n.Xa=function(){ha(this)};function ha(h){if(h.h&&typeof l<"u"){if(h.v&&yi(h)==4)setTimeout(h.Ca.bind(h),0);else if(Ht(h,"readystatechange"),yi(h)==4){h.h=!1;try{const B=h.ca();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var T;if(!(T=y)){var A;if(A=B===0){let ne=String(h.D).match(Ju)[1]||null;!ne&&u.self&&u.self.location&&(ne=u.self.location.protocol.slice(0,-1)),A=!Ki.test(ne?ne.toLowerCase():"")}T=A}if(T)Ht(h,"complete"),Ht(h,"success");else{h.o=6;try{var j=yi(h)>2?h.g.statusText:""}catch{j=""}h.l=j+" ["+h.ca()+"]",Yl(h)}}finally{ms(h)}}}}function ms(h,y){if(h.g){h.m&&(clearTimeout(h.m),h.m=null);const T=h.g;h.g=null,y||Ht(h,"ready");try{T.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function yi(h){return h.g?h.g.readyState:0}n.ca=function(){try{return yi(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),rm(y)}};function nn(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.F){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function ps(h){const y={};h=(h.g&&yi(h)>=2&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(R(h[A]))continue;var T=Wu(h[A]);const j=T[0];if(T=T[1],typeof T!="string")continue;T=T.trim();const B=y[j]||[];y[j]=B,B.push(T)}Qe(y,function(A){return A.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yi(h,y,T){return T&&T.internalChannelParams&&T.internalChannelParams[h]||y}function nr(h){this.za=0,this.i=[],this.j=new fi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Yi("failFast",!1,h),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Yi("baseRetryDelayMs",5e3,h),this.Za=Yi("retryDelaySeedMs",1e4,h),this.Ta=Yi("forwardChannelMaxRetries",2,h),this.va=Yi("forwardChannelRequestTimeoutMs",2e4,h),this.ma=h&&h.xmlHttpFactory||void 0,this.Ua=h&&h.Rb||void 0,this.Aa=h&&h.useFetchStreams||!1,this.O=void 0,this.L=h&&h.supportsCrossDomainXhr||!1,this.M="",this.h=new Ll(h&&h.concurrentRequestLimit),this.Ba=new er,this.S=h&&h.fastHandshake||!1,this.R=h&&h.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=h&&h.Pb||!1,h&&h.ua&&this.j.ua(),h&&h.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&h&&h.detectBufferingProxy||!1,this.ia=void 0,h&&h.longPollingTimeout&&h.longPollingTimeout>0&&(this.ia=h.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=nr.prototype,n.ka=8,n.I=1,n.connect=function(h,y,T,A){kt(0),this.W=h,this.H=y||{},T&&A!==void 0&&(this.H.OSID=T,this.H.OAID=A),this.F=this.X,this.J=ch(this,null,this.W),Qi(this)};function Ql(h){if(co(h),h.I==3){var y=h.V++,T=Lt(h.J);if(tt(T,"SID",h.M),tt(T,"RID",y),tt(T,"TYPE","terminate"),da(h,T),y=new mi(h,h.j,y),y.M=2,y.A=aa(Lt(T)),T=!1,u.navigator&&u.navigator.sendBeacon)try{T=u.navigator.sendBeacon(y.A.toString(),"")}catch{}!T&&u.Image&&(new Image().src=y.A,T=!0),T||(y.g=uh(y.j,null),y.g.ea(y.A)),y.F=Date.now(),Ui(y)}lh(h)}function ir(h){h.g&&($l(h),h.g.cancel(),h.g=null)}function co(h){ir(h),h.v&&(u.clearTimeout(h.v),h.v=null),ho(h),h.h.cancel(),h.m&&(typeof h.m=="number"&&u.clearTimeout(h.m),h.m=null)}function Qi(h){if(!Vl(h.h)&&!h.m){h.m=!0;var y=h.Ea;Xe||x(),Se||(Xe(),Se=!0),C.add(y,h),h.D=0}}function uo(h,y){return Bi(h.h)>=h.h.j-(h.m?1:0)?!1:h.m?(h.i=y.G.concat(h.i),!0):h.I==1||h.I==2||h.D>=(h.Sa?0:h.Ta)?!1:(h.m=Li(g(h.Ea,h,y),oh(h,h.D)),h.D++,!0)}n.Ea=function(h){if(this.m)if(this.m=null,this.I==1){if(!h){this.V=Math.floor(Math.random()*1e5),h=this.V++;const j=new mi(this,this.j,h);let B=this.o;if(this.U&&(B?(B=k(B),ie(B,this.U)):B=this.U),this.u!==null||this.R||(j.J=B,B=null),this.S)e:{for(var y=0,T=0;T<this.i.length;T++){t:{var A=this.i[T];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(y+=A,y>4096){y=T;break e}if(y===4096||T===this.i.length-1){y=T+1;break e}}y=1e3}else y=1e3;y=ih(this,j,y),T=Lt(this.J),tt(T,"RID",h),tt(T,"CVER",22),this.G&&tt(T,"X-HTTP-Session-Id",this.G),da(this,T),B&&(this.R?y="headers="+fs($n(B))+"&"+y:this.u&&ca(T,this.u,B)),jl(this.h,j),this.Ra&&tt(T,"TYPE","init"),this.S?(tt(T,"$req",y),tt(T,"SID","null"),j.U=!0,ji(j,T,null)):ji(j,T,y),this.I=2}}else this.I==3&&(h?Wl(this,h):this.i.length==0||Vl(this.h)||Wl(this))};function Wl(h,y){var T;y?T=y.l:T=h.V++;const A=Lt(h.J);tt(A,"SID",h.M),tt(A,"RID",T),tt(A,"AID",h.K),da(h,A),h.u&&h.o&&ca(A,h.u,h.o),T=new mi(h,h.j,T,h.D+1),h.u===null&&(T.J=h.o),y&&(h.i=y.G.concat(h.i)),y=ih(h,T,1e3),T.H=Math.round(h.va*.5)+Math.round(h.va*.5*Math.random()),jl(h.h,T),ji(T,A,y)}function da(h,y){h.H&&Ve(h.H,function(T,A){tt(y,A,T)}),h.l&&Ve({},function(T,A){tt(y,A,T)})}function ih(h,y,T){T=Math.min(h.i.length,T);const A=h.l?g(h.l.Ka,h.l,h):null;e:{var j=h.i;let Re=-1;for(;;){const xt=["count="+T];Re==-1?T>0?(Re=j[0].g,xt.push("ofs="+Re)):Re=0:xt.push("ofs="+Re);let We=!0;for(let _t=0;_t<T;_t++){var B=j[_t].g;const Xn=j[_t].map;if(B-=Re,B<0)Re=Math.max(0,j[_t].g-100),We=!1;else try{B="req"+B+"_"||"";try{var ne=Xn instanceof Map?Xn:Object.entries(Xn);for(const[$i,vi]of ne){let Ei=vi;f(vi)&&(Ei=Ws(vi)),xt.push(B+$i+"="+encodeURIComponent(Ei))}}catch($i){throw xt.push(B+"type="+encodeURIComponent("_badmap")),$i}}catch{A&&A(Xn)}}if(We){ne=xt.join("&");break e}}ne=void 0}return h=h.i.splice(0,T),y.G=h,ne}function sh(h){if(!h.g&&!h.v){h.Y=1;var y=h.Da;Xe||x(),Se||(Xe(),Se=!0),C.add(y,h),h.A=0}}function fa(h){return h.g||h.v||h.A>=3?!1:(h.Y++,h.v=Li(g(h.Da,h),oh(h,h.A)),h.A++,!0)}n.Da=function(){if(this.v=null,rh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var h=4*this.T;this.j.info("BP detection timer enabled: "+h),this.B=Li(g(this.Wa,this),h)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,kt(10),ir(this),rh(this))};function $l(h){h.B!=null&&(u.clearTimeout(h.B),h.B=null)}function rh(h){h.g=new mi(h,h.j,"rpc",h.Y),h.u===null&&(h.g.J=h.o),h.g.P=0;var y=Lt(h.na);tt(y,"RID","rpc"),tt(y,"SID",h.M),tt(y,"AID",h.K),tt(y,"CI",h.F?"0":"1"),!h.F&&h.ia&&tt(y,"TO",h.ia),tt(y,"TYPE","xmlhttp"),da(h,y),h.u&&h.o&&ca(y,h.u,h.o),h.O&&(h.g.H=h.O);var T=h.g;h=h.ba,T.M=1,T.A=aa(Lt(y)),T.u=null,T.R=!0,no(T,h)}n.Va=function(){this.C!=null&&(this.C=null,ir(this),fa(this),kt(19))};function ho(h){h.C!=null&&(u.clearTimeout(h.C),h.C=null)}function ah(h,y){var T=null;if(h.g==y){ho(h),$l(h),h.g=null;var A=2}else if(Hi(h.h,y))T=y.G,Ul(h.h,y),A=1;else return;if(h.I!=0){if(y.o)if(A==1){T=y.u?y.u.length:0,y=Date.now()-y.F;var j=h.D;A=to(),Ht(A,new Pi(A,T)),Qi(h)}else sh(h);else if(j=y.m,j==3||j==0&&y.X>0||!(A==1&&uo(h,y)||A==2&&fa(h)))switch(T&&T.length>0&&(y=h.h,y.i=y.i.concat(T)),j){case 1:Wi(h,5);break;case 4:Wi(h,10);break;case 3:Wi(h,6);break;default:Wi(h,2)}}}function oh(h,y){let T=h.Qa+Math.floor(Math.random()*h.Za);return h.isActive()||(T*=2),T*y}function Wi(h,y){if(h.j.info("Error code "+y),y==2){var T=g(h.bb,h),A=h.Ua;const j=!A;A=new Ln(A||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Xt(A,"https"),aa(A),j?gi(A.toString(),T):Gl(A.toString(),T)}else kt(2);h.I=0,h.l&&h.l.pa(y),lh(h),co(h)}n.bb=function(h){h?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function lh(h){if(h.I=0,h.ja=[],h.l){const y=zl(h.h);(y.length!=0||h.i.length!=0)&&(H(h.ja,y),H(h.ja,h.i),h.h.i.length=0,M(h.i),h.i.length=0),h.l.oa()}}function ch(h,y,T){var A=T instanceof Ln?Lt(T):new Ln(T);if(A.g!="")y&&(A.g=y+"."+A.g),$s(A,A.u);else{var j=u.location;A=j.protocol,y=y?y+"."+j.hostname:j.hostname,j=+j.port;const B=new Ln(null);A&&Xt(B,A),y&&(B.g=y),j&&$s(B,j),T&&(B.h=T),A=B}return T=h.G,y=h.wa,T&&y&&tt(A,T,y),tt(A,"VER",h.ka),da(h,A),A}function uh(h,y,T){if(y&&!h.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Aa&&!h.ma?new st(new Gi({ab:T})):new st(h.ma),y.Fa(h.L),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function hh(){}n=hh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function sr(){}sr.prototype.g=function(h,y){return new vn(h,y)};function vn(h,y){Dt.call(this),this.g=new nr(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(h?h["X-WebChannel-Client-Profile"]=y.sa:h={"X-WebChannel-Client-Profile":y.sa}),this.g.U=h,(h=y&&y.Qb)&&!R(h)&&(this.g.u=h),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!R(y)&&(this.g.G=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new gs(this)}b(vn,Dt),vn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},vn.prototype.close=function(){Ql(this.g)},vn.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var T={};T.__data__=h,h=T}else this.v&&(T={},T.__data__=Ws(h),h=T);y.i.push(new Pt(y.Ya++,h)),y.I==3&&Qi(y)},vn.prototype.N=function(){this.g.l=null,delete this.j,Ql(this.g),delete this.g,vn.Z.N.call(this)};function dh(h){tn.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const T in y){h=T;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}b(dh,tn);function fh(){Yn.call(this),this.status=1}b(fh,Yn);function gs(h){this.g=h}b(gs,hh),gs.prototype.ra=function(){Ht(this.g,"a")},gs.prototype.qa=function(h){Ht(this.g,new dh(h))},gs.prototype.pa=function(h){Ht(this.g,new fh)},gs.prototype.oa=function(){Ht(this.g,"b")},sr.prototype.createWebChannel=sr.prototype.g,vn.prototype.send=vn.prototype.o,vn.prototype.open=vn.prototype.m,vn.prototype.close=vn.prototype.close,Bx=function(){return new sr},Fx=function(){return to()},zx=At,i_={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},sa.NO_ERROR=0,sa.TIMEOUT=8,sa.HTTP_ERROR=6,Dd=sa,Ml.COMPLETE="complete",Ux=Ml,Gu.EventType=di,di.OPEN="a",di.CLOSE="b",di.ERROR="c",di.MESSAGE="d",Dt.prototype.listen=Dt.prototype.J,Hc=Gu,st.prototype.listenOnce=st.prototype.K,st.prototype.getLastError=st.prototype.Ha,st.prototype.getLastErrorCode=st.prototype.ya,st.prototype.getStatus=st.prototype.ca,st.prototype.getResponseJson=st.prototype.La,st.prototype.getResponseText=st.prototype.la,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Fa,jx=st}).apply(typeof Ed<"u"?Ed:typeof self<"u"?self:typeof window<"u"?window:{});const Qb="@firebase/firestore",Wb="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pn.UNAUTHENTICATED=new pn(null),pn.GOOGLE_CREDENTIALS=new pn("google-credentials-uid"),pn.FIRST_PARTY=new pn("first-party-uid"),pn.MOCK_USER=new pn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=new Au("@firebase/firestore");function Qo(){return qa.logLevel}function ae(n,...e){if(qa.logLevel<=Pe.DEBUG){const t=e.map(wy);qa.debug(`Firestore (${Al}): ${n}`,...t)}}function Bs(n,...e){if(qa.logLevel<=Pe.ERROR){const t=e.map(wy);qa.error(`Firestore (${Al}): ${n}`,...t)}}function dl(n,...e){if(qa.logLevel<=Pe.WARN){const t=e.map(wy);qa.warn(`Firestore (${Al}): ${n}`,...t)}}function wy(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Hx(n,s,t)}function Hx(n,e,t){let s=`FIRESTORE (${Al}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Bs(s),new Error(s)}function Ze(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||Hx(e,a,s)}function Ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends Oi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class W4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(pn.UNAUTHENTICATED)))}shutdown(){}}class $4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class X4{constructor(e){this.t=e,this.currentUser=pn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ze(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new Ur;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ur,e.enqueueRetryable((()=>a(this.currentUser)))};const u=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},f=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ur)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ze(typeof s.accessToken=="string",31837,{l:s}),new qx(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ze(e===null||typeof e=="string",2055,{h:e}),new pn(e)}}class J4{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=pn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Z4{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new J4(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(pn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class $b{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eL{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ze(this.o===void 0,3512);const s=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const u=l.token!==this.m;return this.m=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const a=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new $b(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new $b(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tL(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=tL(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Fe(n,e){return n<e?-1:n>e?1:0}function s_(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const a=n.charAt(s),l=e.charAt(s);if(a!==l)return xg(a)===xg(l)?Fe(a,l):xg(a)?1:-1}return Fe(n.length,e.length)}const nL=55296,iL=57343;function xg(n){const e=n.charCodeAt(0);return e>=nL&&e<=iL}function fl(n,e,t){return n.length===e.length&&n.every(((s,a)=>t(s,e[a])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb="__name__";class ts{constructor(e,t,s){t===void 0?t=0:t>e.length&&Te(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Te(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ts.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ts?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=ts.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Fe(e.length,t.length)}static compareSegments(e,t){const s=ts.isNumericId(e),a=ts.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?ts.extractNumericId(e).compare(ts.extractNumericId(t)):s_(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return jr.fromString(e.substring(4,e.length-2))}}class pt extends ts{construct(e,t,s){return new pt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new fe(Z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new pt(t)}static emptyPath(){return new pt([])}}const sL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class un extends ts{construct(e,t,s){return new un(e,t,s)}static isValidIdentifier(e){return sL.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),un.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xb}static keyField(){return new un([Xb])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new fe(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let u=!1;for(;a<e.length;){const f=e[a];if(f==="\\"){if(a+1===e.length)throw new fe(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new fe(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else f==="`"?(u=!u,a++):f!=="."||u?(s+=f,a++):(l(),a++)}if(l(),u)throw new fe(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new un(t)}static emptyPath(){return new un([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(pt.fromString(e))}static fromName(e){return new _e(pt.fromString(e).popFirst(5))}static empty(){return new _e(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new pt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(n,e,t){if(!t)throw new fe(Z.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function rL(n,e,t,s){if(e===!0&&s===!0)throw new fe(Z.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Jb(n){if(!_e.isDocumentKey(n))throw new fe(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Zb(n){if(_e.isDocumentKey(n))throw new fe(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Kx(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ay(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te(12329,{type:typeof n})}function ml(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new fe(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ay(n);throw new fe(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Lu(n,e){if(!Kx(n))throw new fe(Z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const u=n[s];if(a&&typeof u!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&u!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new fe(Z.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=-62135596800,tw=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*tw);return new gt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fe(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fe(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ew)throw new fe(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/tw}_compareTo(e){return this.seconds===e.seconds?Fe(this.nanoseconds,e.nanoseconds):Fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:gt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Lu(e,gt._jsonSchema))return new gt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ew;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}gt._jsonSchemaVersion="firestore/timestamp/1.0",gt._jsonSchema={type:Bt("string",gt._jsonSchemaVersion),seconds:Bt("number"),nanoseconds:Bt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new gt(0,0))}static max(){return new Ae(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=-1;function aL(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=Ae.fromTimestamp(s===1e9?new gt(t+1,0):new gt(t,s));return new qr(a,_e.empty(),e)}function oL(n){return new qr(n.readTime,n.key,_u)}class qr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new qr(Ae.min(),_e.empty(),_u)}static max(){return new qr(Ae.max(),_e.empty(),_u)}}function lL(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(n.documentKey,e.documentKey),t!==0?t:Fe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xl(n){if(n.code!==Z.FAILED_PRECONDITION||n.message!==cL)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new X(((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof X?t:X.resolve(t)}catch(t){return X.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):X.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):X.reject(t)}static resolve(e){return new X(((t,s)=>{t(e)}))}static reject(e){return new X(((t,s)=>{s(e)}))}static waitFor(e){return new X(((t,s)=>{let a=0,l=0,u=!1;e.forEach((f=>{++a,f.next((()=>{++l,u&&l===a&&t()}),(p=>s(p)))})),u=!0,l===a&&t()}))}static or(e){let t=X.resolve(!1);for(const s of e)t=t.next((a=>a?X.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,l)=>{s.push(t.call(this,a,l))})),this.waitFor(s)}static mapArray(e,t){return new X(((s,a)=>{const l=e.length,u=new Array(l);let f=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((E=>{u[g]=E,++f,f===l&&s(u)}),(E=>a(E)))}}))}static doWhile(e,t){return new X(((s,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):s()};l()}))}}function hL(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Cl(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}qf.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=-1;function Gf(n){return n==null}function df(n){return n===0&&1/n==-1/0}function dL(n){return typeof n=="number"&&Number.isInteger(n)&&!df(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx="";function fL(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=nw(e)),e=mL(n.get(t),e);return nw(e)}function mL(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case Yx:t+="";break;default:t+=l}}return t}function nw(n){return n+Yx+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Xa(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Qx(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t){this.comparator=e,this.root=t||ln.EMPTY}insert(e,t){return new Et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ln.BLACK,null,null))}remove(e){return new Et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ln.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Td(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Td(this.root,e,this.comparator,!1)}getReverseIterator(){return new Td(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Td(this.root,e,this.comparator,!0)}}class Td{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ln{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??ln.RED,this.left=a??ln.EMPTY,this.right=l??ln.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new ln(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return ln.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return ln.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ln.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ln.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}}ln.EMPTY=null,ln.RED=!0,ln.BLACK=!1;ln.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new ln(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.comparator=e,this.data=new Et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sw(this.data.getIterator())}getIteratorFrom(e){return new sw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Wt(this.comparator);return t.data=e,t}}class sw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.fields=e,e.sort(un.comparator)}static empty(){return new Ci([])}unionWith(e){let t=new Wt(un.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ci(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fl(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Wx("Invalid base64 string: "+l):l}})(e);return new dn(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let u=0;u<a.length;++u)l+=String.fromCharCode(a[u]);return l})(e);return new dn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dn.EMPTY_BYTE_STRING=new dn("");const pL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gr(n){if(Ze(!!n,39018),typeof n=="string"){let e=0;const t=pL.exec(n);if(Ze(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Rt(n.seconds),nanos:Rt(n.nanos)}}function Rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Kr(n){return typeof n=="string"?dn.fromBase64String(n):dn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x="server_timestamp",Xx="__type__",Jx="__previous_value__",Zx="__local_write_time__";function Cy(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Xx])==null?void 0:s.stringValue)===$x}function Kf(n){const e=n.mapValue.fields[Jx];return Cy(e)?Kf(e):e}function yu(n){const e=Gr(n.mapValue.fields[Zx].timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e,t,s,a,l,u,f,p,g,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=u,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=E}}const ff="(default)";class vu{constructor(e,t){this.projectId=e,this.database=t||ff}static empty(){return new vu("","")}get isDefaultDatabase(){return this.database===ff}isEqual(e){return e instanceof vu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="__type__",_L="__max__",bd={mapValue:{}},tC="__vector__",mf="value";function Yr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Cy(n)?4:vL(n)?9007199254740991:yL(n)?10:11:Te(28295,{value:n})}function us(n,e){if(n===e)return!0;const t=Yr(n);if(t!==Yr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return yu(n).isEqual(yu(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const u=Gr(a.timestampValue),f=Gr(l.timestampValue);return u.seconds===f.seconds&&u.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(a,l){return Kr(a.bytesValue).isEqual(Kr(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(a,l){return Rt(a.geoPointValue.latitude)===Rt(l.geoPointValue.latitude)&&Rt(a.geoPointValue.longitude)===Rt(l.geoPointValue.longitude)})(n,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return Rt(a.integerValue)===Rt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const u=Rt(a.doubleValue),f=Rt(l.doubleValue);return u===f?df(u)===df(f):isNaN(u)&&isNaN(f)}return!1})(n,e);case 9:return fl(n.arrayValue.values||[],e.arrayValue.values||[],us);case 10:case 11:return(function(a,l){const u=a.mapValue.fields||{},f=l.mapValue.fields||{};if(iw(u)!==iw(f))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(f[p]===void 0||!us(u[p],f[p])))return!1;return!0})(n,e);default:return Te(52216,{left:n})}}function Eu(n,e){return(n.values||[]).find((t=>us(t,e)))!==void 0}function pl(n,e){if(n===e)return 0;const t=Yr(n),s=Yr(e);if(t!==s)return Fe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Fe(n.booleanValue,e.booleanValue);case 2:return(function(l,u){const f=Rt(l.integerValue||l.doubleValue),p=Rt(u.integerValue||u.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(n,e);case 3:return rw(n.timestampValue,e.timestampValue);case 4:return rw(yu(n),yu(e));case 5:return s_(n.stringValue,e.stringValue);case 6:return(function(l,u){const f=Kr(l),p=Kr(u);return f.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,u){const f=l.split("/"),p=u.split("/");for(let g=0;g<f.length&&g<p.length;g++){const E=Fe(f[g],p[g]);if(E!==0)return E}return Fe(f.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,u){const f=Fe(Rt(l.latitude),Rt(u.latitude));return f!==0?f:Fe(Rt(l.longitude),Rt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return aw(n.arrayValue,e.arrayValue);case 10:return(function(l,u){var S,M,H,$;const f=l.fields||{},p=u.fields||{},g=(S=f[mf])==null?void 0:S.arrayValue,E=(M=p[mf])==null?void 0:M.arrayValue,b=Fe(((H=g==null?void 0:g.values)==null?void 0:H.length)||0,(($=E==null?void 0:E.values)==null?void 0:$.length)||0);return b!==0?b:aw(g,E)})(n.mapValue,e.mapValue);case 11:return(function(l,u){if(l===bd.mapValue&&u===bd.mapValue)return 0;if(l===bd.mapValue)return 1;if(u===bd.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),g=u.fields||{},E=Object.keys(g);p.sort(),E.sort();for(let b=0;b<p.length&&b<E.length;++b){const S=s_(p[b],E[b]);if(S!==0)return S;const M=pl(f[p[b]],g[E[b]]);if(M!==0)return M}return Fe(p.length,E.length)})(n.mapValue,e.mapValue);default:throw Te(23264,{he:t})}}function rw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Fe(n,e);const t=Gr(n),s=Gr(e),a=Fe(t.seconds,s.seconds);return a!==0?a:Fe(t.nanos,s.nanos)}function aw(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=pl(t[a],s[a]);if(l)return l}return Fe(t.length,s.length)}function gl(n){return r_(n)}function r_(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Gr(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Kr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return _e.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=r_(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const u of s)l?l=!1:a+=",",a+=`${u}:${r_(t.fields[u])}`;return a+"}"})(n.mapValue):Te(61005,{value:n})}function kd(n){switch(Yr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Kf(n);return e?16+kd(e):16;case 5:return 2*n.stringValue.length;case 6:return Kr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,l)=>a+kd(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let a=0;return Xa(s.fields,((l,u)=>{a+=l.length+kd(u)})),a})(n.mapValue);default:throw Te(13486,{value:n})}}function a_(n){return!!n&&"integerValue"in n}function Iy(n){return!!n&&"arrayValue"in n}function ow(n){return!!n&&"nullValue"in n}function lw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Md(n){return!!n&&"mapValue"in n}function yL(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[eC])==null?void 0:s.stringValue)===tC}function eu(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Xa(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=eu(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=eu(n.arrayValue.values[t]);return e}return{...n}}function vL(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===_L}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.value=e}static empty(){return new ai({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Md(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eu(t)}setAll(e){let t=un.emptyPath(),s={},a=[];e.forEach(((u,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=f.popLast()}u?s[f.lastSegment()]=eu(u):a.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Md(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return us(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Md(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Xa(t,((a,l)=>e[a]=l));for(const a of s)delete e[a]}clone(){return new ai(eu(this.value))}}function nC(n){const e=[];return Xa(n.fields,((t,s)=>{const a=new un([t]);if(Md(s)){const l=nC(s.mapValue).fields;if(l.length===0)e.push(a);else for(const u of l)e.push(a.child(u))}else e.push(a)})),new Ci(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t,s,a,l,u,f){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=u,this.documentState=f}static newInvalidDocument(e){return new gn(e,0,Ae.min(),Ae.min(),Ae.min(),ai.empty(),0)}static newFoundDocument(e,t,s,a){return new gn(e,1,t,Ae.min(),s,a,0)}static newNoDocument(e,t){return new gn(e,2,t,Ae.min(),Ae.min(),ai.empty(),0)}static newUnknownDocument(e,t){return new gn(e,3,t,Ae.min(),Ae.min(),ai.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ai.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ai.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,t){this.position=e,this.inclusive=t}}function cw(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],u=n.position[a];if(l.field.isKeyField()?s=_e.comparator(_e.fromName(u.referenceValue),t.key):s=pl(u,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function uw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!us(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t="asc"){this.field=e,this.dir=t}}function EL(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{}class Yt extends iC{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new bL(e,t,s):t==="array-contains"?new AL(e,s):t==="in"?new xL(e,s):t==="not-in"?new CL(e,s):t==="array-contains-any"?new IL(e,s):new Yt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new wL(e,s):new SL(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(pl(t,this.value)):t!==null&&Yr(this.value)===Yr(t)&&this.matchesComparison(pl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hs extends iC{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new hs(e,t)}matches(e){return sC(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function sC(n){return n.op==="and"}function rC(n){return TL(n)&&sC(n)}function TL(n){for(const e of n.filters)if(e instanceof hs)return!1;return!0}function o_(n){if(n instanceof Yt)return n.field.canonicalString()+n.op.toString()+gl(n.value);if(rC(n))return n.filters.map((e=>o_(e))).join(",");{const e=n.filters.map((t=>o_(t))).join(",");return`${n.op}(${e})`}}function aC(n,e){return n instanceof Yt?(function(s,a){return a instanceof Yt&&s.op===a.op&&s.field.isEqual(a.field)&&us(s.value,a.value)})(n,e):n instanceof hs?(function(s,a){return a instanceof hs&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((l,u,f)=>l&&aC(u,a.filters[f])),!0):!1})(n,e):void Te(19439)}function oC(n){return n instanceof Yt?(function(t){return`${t.field.canonicalString()} ${t.op} ${gl(t.value)}`})(n):n instanceof hs?(function(t){return t.op.toString()+" {"+t.getFilters().map(oC).join(" ,")+"}"})(n):"Filter"}class bL extends Yt{constructor(e,t,s){super(e,t,s),this.key=_e.fromName(s.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class wL extends Yt{constructor(e,t){super(e,"in",t),this.keys=lC("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class SL extends Yt{constructor(e,t){super(e,"not-in",t),this.keys=lC("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function lC(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>_e.fromName(s.referenceValue)))}class AL extends Yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Iy(t)&&Eu(t.arrayValue,this.value)}}class xL extends Yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Eu(this.value.arrayValue,t)}}class CL extends Yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Eu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Eu(this.value.arrayValue,t)}}class IL extends Yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Iy(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Eu(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e,t=null,s=[],a=[],l=null,u=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=u,this.endAt=f,this.Te=null}}function hw(n,e=null,t=[],s=[],a=null,l=null,u=null){return new RL(n,e,t,s,a,l,u)}function Ry(n){const e=Ie(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>o_(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),Gf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>gl(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>gl(s))).join(",")),e.Te=t}return e.Te}function Ny(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!EL(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!aC(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!uw(n.startAt,e.startAt)&&uw(n.endAt,e.endAt)}function l_(n){return _e.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t=null,s=[],a=[],l=null,u="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=u,this.startAt=f,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function NL(n,e,t,s,a,l,u,f){return new Yf(n,e,t,s,a,l,u,f)}function Oy(n){return new Yf(n)}function dw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function OL(n){return n.collectionGroup!==null}function tu(n){const e=Ie(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let f=new Wt(un.comparator);return u.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(f=f.add(g.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new gf(l,s))})),t.has(un.keyField().canonicalString())||e.Ie.push(new gf(un.keyField(),s))}return e.Ie}function rs(n){const e=Ie(n);return e.Ee||(e.Ee=DL(e,tu(n))),e.Ee}function DL(n,e){if(n.limitType==="F")return hw(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new gf(a.field,l)}));const t=n.endAt?new pf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new pf(n.startAt.position,n.startAt.inclusive):null;return hw(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function c_(n,e,t){return new Yf(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Qf(n,e){return Ny(rs(n),rs(e))&&n.limitType===e.limitType}function cC(n){return`${Ry(rs(n))}|lt:${n.limitType}`}function Wo(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>oC(a))).join(", ")}]`),Gf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>gl(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>gl(a))).join(",")),`Target(${s})`})(rs(n))}; limitType=${n.limitType})`}function Wf(n,e){return e.isFoundDocument()&&(function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):_e.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,a){for(const l of tu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0})(n,e)&&(function(s,a){return!(s.startAt&&!(function(u,f,p){const g=cw(u,f,p);return u.inclusive?g<=0:g<0})(s.startAt,tu(s),a)||s.endAt&&!(function(u,f,p){const g=cw(u,f,p);return u.inclusive?g>=0:g>0})(s.endAt,tu(s),a))})(n,e)}function kL(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function uC(n){return(e,t)=>{let s=!1;for(const a of tu(n)){const l=ML(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function ML(n,e,t){const s=n.field.isKeyField()?_e.comparator(e.key,t.key):(function(l,u,f){const p=u.data.field(l),g=f.data.field(l);return p!==null&&g!==null?pl(p,g):Te(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Te(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Xa(this.inner,((t,s)=>{for(const[a,l]of s)e(a,l)}))}isEmpty(){return Qx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PL=new Et(_e.comparator);function Hs(){return PL}const hC=new Et(_e.comparator);function qc(...n){let e=hC;for(const t of n)e=e.insert(t.key,t);return e}function dC(n){let e=hC;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function La(){return nu()}function fC(){return nu()}function nu(){return new Ja((n=>n.toString()),((n,e)=>n.isEqual(e)))}const LL=new Et(_e.comparator),VL=new Wt(_e.comparator);function Be(...n){let e=VL;for(const t of n)e=e.add(t);return e}const jL=new Wt(Fe);function UL(){return jL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:df(e)?"-0":e}}function mC(n){return{integerValue:""+n}}function zL(n,e){return dL(e)?mC(e):Dy(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this._=void 0}}function FL(n,e,t){return n instanceof _f?(function(a,l){const u={fields:{[Xx]:{stringValue:$x},[Zx]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&Cy(l)&&(l=Kf(l)),l&&(u.fields[Jx]=l),{mapValue:u}})(t,e):n instanceof Tu?gC(n,e):n instanceof bu?_C(n,e):(function(a,l){const u=pC(a,l),f=fw(u)+fw(a.Ae);return a_(u)&&a_(a.Ae)?mC(f):Dy(a.serializer,f)})(n,e)}function BL(n,e,t){return n instanceof Tu?gC(n,e):n instanceof bu?_C(n,e):t}function pC(n,e){return n instanceof yf?(function(s){return a_(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class _f extends $f{}class Tu extends $f{constructor(e){super(),this.elements=e}}function gC(n,e){const t=yC(e);for(const s of n.elements)t.some((a=>us(a,s)))||t.push(s);return{arrayValue:{values:t}}}class bu extends $f{constructor(e){super(),this.elements=e}}function _C(n,e){let t=yC(e);for(const s of n.elements)t=t.filter((a=>!us(a,s)));return{arrayValue:{values:t}}}class yf extends $f{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function fw(n){return Rt(n.integerValue||n.doubleValue)}function yC(n){return Iy(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function HL(n,e){return n.field.isEqual(e.field)&&(function(s,a){return s instanceof Tu&&a instanceof Tu||s instanceof bu&&a instanceof bu?fl(s.elements,a.elements,us):s instanceof yf&&a instanceof yf?us(s.Ae,a.Ae):s instanceof _f&&a instanceof _f})(n.transform,e.transform)}class qL{constructor(e,t){this.version=e,this.transformResults=t}}class as{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new as}static exists(e){return new as(void 0,e)}static updateTime(e){return new as(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pd(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Xf{}function vC(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new TC(n.key,as.none()):new Vu(n.key,n.data,as.none());{const t=n.data,s=ai.empty();let a=new Wt(un.comparator);for(let l of e.fields)if(!a.has(l)){let u=t.field(l);u===null&&l.length>1&&(l=l.popLast(),u=t.field(l)),u===null?s.delete(l):s.set(l,u),a=a.add(l)}return new Za(n.key,s,new Ci(a.toArray()),as.none())}}function GL(n,e,t){n instanceof Vu?(function(a,l,u){const f=a.value.clone(),p=pw(a.fieldTransforms,l,u.transformResults);f.setAll(p),l.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Za?(function(a,l,u){if(!Pd(a.precondition,l))return void l.convertToUnknownDocument(u.version);const f=pw(a.fieldTransforms,l,u.transformResults),p=l.data;p.setAll(EC(a)),p.setAll(f),l.convertToFoundDocument(u.version,p).setHasCommittedMutations()})(n,e,t):(function(a,l,u){l.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function iu(n,e,t,s){return n instanceof Vu?(function(l,u,f,p){if(!Pd(l.precondition,u))return f;const g=l.value.clone(),E=gw(l.fieldTransforms,p,u);return g.setAll(E),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null})(n,e,t,s):n instanceof Za?(function(l,u,f,p){if(!Pd(l.precondition,u))return f;const g=gw(l.fieldTransforms,p,u),E=u.data;return E.setAll(EC(l)),E.setAll(g),u.convertToFoundDocument(u.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((b=>b.field)))})(n,e,t,s):(function(l,u,f){return Pd(l.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):f})(n,e,t)}function KL(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=pC(s.transform,a||null);l!=null&&(t===null&&(t=ai.empty()),t.set(s.field,l))}return t||null}function mw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&fl(s,a,((l,u)=>HL(l,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Vu extends Xf{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Za extends Xf{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function EC(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function pw(n,e,t){const s=new Map;Ze(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let a=0;a<t.length;a++){const l=n[a],u=l.transform,f=e.data.field(l.field);s.set(l.field,BL(u,f,t[a]))}return s}function gw(n,e,t){const s=new Map;for(const a of n){const l=a.transform,u=t.data.field(a.field);s.set(a.field,FL(l,u,e))}return s}class TC extends Xf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YL extends Xf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&GL(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=iu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=iu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=fC();return this.mutations.forEach((a=>{const l=e.get(a.key),u=l.overlayedDocument;let f=this.applyToLocalView(u,l.mutatedFields);f=t.has(a.key)?null:f;const p=vC(u,f);p!==null&&s.set(a.key,p),u.isValidDocument()||u.convertToNoDocument(Ae.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Be())}isEqual(e){return this.batchId===e.batchId&&fl(this.mutations,e.mutations,((t,s)=>mw(t,s)))&&fl(this.baseMutations,e.baseMutations,((t,s)=>mw(t,s)))}}class ky{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){Ze(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return LL})();const l=e.mutations;for(let u=0;u<l.length;u++)a=a.insert(l[u].key,s[u].version);return new ky(e,t,s,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft,qe;function XL(n){switch(n){case Z.OK:return Te(64938);case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return Te(15467,{code:n})}}function bC(n){if(n===void 0)return Bs("GRPC error has no .code"),Z.UNKNOWN;switch(n){case Ft.OK:return Z.OK;case Ft.CANCELLED:return Z.CANCELLED;case Ft.UNKNOWN:return Z.UNKNOWN;case Ft.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case Ft.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case Ft.INTERNAL:return Z.INTERNAL;case Ft.UNAVAILABLE:return Z.UNAVAILABLE;case Ft.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case Ft.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case Ft.NOT_FOUND:return Z.NOT_FOUND;case Ft.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case Ft.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case Ft.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case Ft.ABORTED:return Z.ABORTED;case Ft.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case Ft.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case Ft.DATA_LOSS:return Z.DATA_LOSS;default:return Te(39323,{code:n})}}(qe=Ft||(Ft={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JL(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZL=new jr([4294967295,4294967295],0);function _w(n){const e=JL().encode(n),t=new Vx;return t.update(e),new Uint8Array(t.digest())}function yw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new jr([t,s],0),new jr([a,l],0)]}class My{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Gc(`Invalid padding: ${t}`);if(s<0)throw new Gc(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Gc(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Gc(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=jr.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(jr.fromNumber(s)));return a.compare(ZL)===1&&(a=new jr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=_w(e),[s,a]=yw(t);for(let l=0;l<this.hashCount;l++){const u=this.ye(s,a,l);if(!this.we(u))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),u=new My(l,a,t);return s.forEach((f=>u.insert(f))),u}insert(e){if(this.ge===0)return;const t=_w(e),[s,a]=yw(t);for(let l=0;l<this.hashCount;l++){const u=this.ye(s,a,l);this.Se(u)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Gc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,ju.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Jf(Ae.min(),a,new Et(Fe),Hs(),Be())}}class ju{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ju(s,t,Be(),Be(),Be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t,s,a){this.be=e,this.removedTargetIds=t,this.key=s,this.De=a}}class wC{constructor(e,t){this.targetId=e,this.Ce=t}}class SC{constructor(e,t,s=dn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class vw{constructor(){this.ve=0,this.Fe=Ew(),this.Me=dn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Be(),t=Be(),s=Be();return this.Fe.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Te(38017,{changeType:l})}})),new ju(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Ew()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ze(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class eV{constructor(e){this.Ge=e,this.ze=new Map,this.je=Hs(),this.Je=wd(),this.He=wd(),this.Ye=new Et(Fe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const l=a.target;if(l_(l))if(s===0){const u=new _e(l.path);this.et(t,u,gn.newNoDocument(u,Ae.min()))}else Ze(s===1,20013,{expectedCount:s});else{const u=this._t(t);if(u!==s){const f=this.ut(e),p=f?this.ct(f,e,u):1;if(p!==0){this.it(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,g)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let u,f;try{u=Kr(s).toUint8Array()}catch(p){if(p instanceof Wx)return dl("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new My(u,a,l)}catch(p){return dl(p instanceof Gc?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.ge===0?null:f}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((l=>{const u=this.Ge.ht(),f=`projects/${u.projectId}/databases/${u.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((l,u)=>{const f=this.ot(u);if(f){if(l.current&&l_(f.target)){const p=new _e(f.target.path);this.It(p).has(u)||this.Et(u,p)||this.et(u,p,gn.newNoDocument(p,e))}l.Be&&(t.set(u,l.ke()),l.qe())}}));let s=Be();this.He.forEach(((l,u)=>{let f=!0;u.forEachWhile((p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(s=s.add(l))})),this.je.forEach(((l,u)=>u.setReadTime(e)));const a=new Jf(e,t,this.Ye,this.je,s);return this.je=Hs(),this.Je=wd(),this.He=wd(),this.Ye=new Et(Fe),a}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.Qe(t,1):a.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new vw,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Wt(Fe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Wt(Fe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new vw),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function wd(){return new Et(_e.comparator)}function Ew(){return new Et(_e.comparator)}const tV={asc:"ASCENDING",desc:"DESCENDING"},nV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iV={and:"AND",or:"OR"};class sV{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function u_(n,e){return n.useProto3Json||Gf(e)?e:{value:e}}function vf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function AC(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function rV(n,e){return vf(n,e.toTimestamp())}function os(n){return Ze(!!n,49232),Ae.fromTimestamp((function(t){const s=Gr(t);return new gt(s.seconds,s.nanos)})(n))}function Py(n,e){return h_(n,e).canonicalString()}function h_(n,e){const t=(function(a){return new pt(["projects",a.projectId,"databases",a.database])})(n).child("documents");return e===void 0?t:t.child(e)}function xC(n){const e=pt.fromString(n);return Ze(OC(e),10190,{key:e.toString()}),e}function d_(n,e){return Py(n.databaseId,e.path)}function Cg(n,e){const t=xC(e);if(t.get(1)!==n.databaseId.projectId)throw new fe(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new fe(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _e(IC(t))}function CC(n,e){return Py(n.databaseId,e)}function aV(n){const e=xC(n);return e.length===4?pt.emptyPath():IC(e)}function f_(n){return new pt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function IC(n){return Ze(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Tw(n,e,t){return{name:d_(n,e),fields:t.value.mapValue.fields}}function oV(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Te(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,E){return g.useProto3Json?(Ze(E===void 0||typeof E=="string",58123),dn.fromBase64String(E||"")):(Ze(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),dn.fromUint8Array(E||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,f=u&&(function(g){const E=g.code===void 0?Z.UNKNOWN:bC(g.code);return new fe(E,g.message||"")})(u);t=new SC(s,a,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=Cg(n,s.document.name),l=os(s.document.updateTime),u=s.document.createTime?os(s.document.createTime):Ae.min(),f=new ai({mapValue:{fields:s.document.fields}}),p=gn.newFoundDocument(a,l,u,f),g=s.targetIds||[],E=s.removedTargetIds||[];t=new Ld(g,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=Cg(n,s.document),l=s.readTime?os(s.readTime):Ae.min(),u=gn.newNoDocument(a,l),f=s.removedTargetIds||[];t=new Ld([],f,u.key,u)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=Cg(n,s.document),l=s.removedTargetIds||[];t=new Ld([],l,a,null)}else{if(!("filter"in e))return Te(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,u=new $L(a,l),f=s.targetId;t=new wC(f,u)}}return t}function lV(n,e){let t;if(e instanceof Vu)t={update:Tw(n,e.key,e.value)};else if(e instanceof TC)t={delete:d_(n,e.key)};else if(e instanceof Za)t={update:Tw(n,e.key,e.data),updateMask:_V(e.fieldMask)};else{if(!(e instanceof YL))return Te(16599,{Vt:e.type});t={verify:d_(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,u){const f=u.transform;if(f instanceof _f)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Tu)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof bu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof yf)return{fieldPath:u.field.canonicalString(),increment:f.Ae};throw Te(20930,{transform:u.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:rV(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te(27497)})(n,e.precondition)),t}function cV(n,e){return n&&n.length>0?(Ze(e!==void 0,14353),n.map((t=>(function(a,l){let u=a.updateTime?os(a.updateTime):os(l);return u.isEqual(Ae.min())&&(u=os(l)),new qL(u,a.transformResults||[])})(t,e)))):[]}function uV(n,e){return{documents:[CC(n,e.path)]}}function hV(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=CC(n,a);const l=(function(g){if(g.length!==0)return NC(hs.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const u=(function(g){if(g.length!==0)return g.map((E=>(function(S){return{field:$o(S.field),direction:mV(S.dir)}})(E)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const f=u_(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:t,parent:a}}function dV(n){let e=aV(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Ze(s===1,65062);const E=t.from[0];E.allDescendants?a=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(b){const S=RC(b);return S instanceof hs&&rC(S)?S.getFilters():[S]})(t.where));let u=[];t.orderBy&&(u=(function(b){return b.map((S=>(function(H){return new gf(Xo(H.field),(function(J){switch(J){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(H.direction))})(S)))})(t.orderBy));let f=null;t.limit&&(f=(function(b){let S;return S=typeof b=="object"?b.value:b,Gf(S)?null:S})(t.limit));let p=null;t.startAt&&(p=(function(b){const S=!!b.before,M=b.values||[];return new pf(M,S)})(t.startAt));let g=null;return t.endAt&&(g=(function(b){const S=!b.before,M=b.values||[];return new pf(M,S)})(t.endAt)),NL(e,a,u,l,f,"F",p,g)}function fV(n,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function RC(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Xo(t.unaryFilter.field);return Yt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Xo(t.unaryFilter.field);return Yt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Xo(t.unaryFilter.field);return Yt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Xo(t.unaryFilter.field);return Yt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Yt.create(Xo(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return hs.create(t.compositeFilter.filters.map((s=>RC(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Te(1026)}})(t.compositeFilter.op))})(n):Te(30097,{filter:n})}function mV(n){return tV[n]}function pV(n){return nV[n]}function gV(n){return iV[n]}function $o(n){return{fieldPath:n.canonicalString()}}function Xo(n){return un.fromServerFormat(n.fieldPath)}function NC(n){return n instanceof Yt?(function(t){if(t.op==="=="){if(lw(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NAN"}};if(ow(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(lw(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NOT_NAN"}};if(ow(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$o(t.field),op:pV(t.op),value:t.value}}})(n):n instanceof hs?(function(t){const s=t.getFilters().map((a=>NC(a)));return s.length===1?s[0]:{compositeFilter:{op:gV(t.op),filters:s}}})(n):Te(54877,{filter:n})}function _V(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function OC(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t,s,a,l=Ae.min(),u=Ae.min(),f=dn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(e){this.yt=e}}function vV(n){const e=dV({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?c_(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(){this.Cn=new TV}addToCollectionParentIndex(e,t){return this.Cn.add(t),X.resolve()}getCollectionParents(e,t){return X.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return X.resolve()}deleteFieldIndex(e,t){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,t){return X.resolve()}getDocumentsMatchingTarget(e,t){return X.resolve(null)}getIndexType(e,t){return X.resolve(0)}getFieldIndexes(e,t){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,t){return X.resolve(qr.min())}getMinOffsetFromCollectionGroup(e,t){return X.resolve(qr.min())}updateCollectionGroup(e,t,s){return X.resolve()}updateIndexEntries(e,t){return X.resolve()}}class TV{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Wt(pt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Wt(pt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},DC=41943040;class Dn{static withCacheSize(e){return new Dn(e,Dn.DEFAULT_COLLECTION_PERCENTILE,Dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn.DEFAULT_COLLECTION_PERCENTILE=10,Dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dn.DEFAULT=new Dn(DC,Dn.DEFAULT_COLLECTION_PERCENTILE,Dn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dn.DISABLED=new Dn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new _l(0)}static cr(){return new _l(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="LruGarbageCollector",bV=1048576;function Sw([n,e],[t,s]){const a=Fe(n,t);return a===0?Fe(e,s):a}class wV{constructor(e){this.Ir=e,this.buffer=new Wt(Sw),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Sw(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class SV{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ae(ww,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Cl(t)?ae(ww,"Ignoring IndexedDB error during garbage collection: ",t):await xl(t)}await this.Vr(3e5)}))}}class AV{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return X.resolve(qf.ce);const s=new wV(t);return this.mr.forEachTarget(e,(a=>s.Ar(a.sequenceNumber))).next((()=>this.mr.pr(e,(a=>s.Ar(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(bw)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bw):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,a,l,u,f,p,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((b=>(b>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),a=this.params.maximumSequenceNumbersToCollect):a=b,u=Date.now(),this.nthSequenceNumber(e,a)))).next((b=>(s=b,f=Date.now(),this.removeTargets(e,s,t)))).next((b=>(l=b,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((b=>(g=Date.now(),Qo()<=Pe.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-E}ms
	Determined least recently used ${a} in `+(f-u)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${b} documents in `+(g-p)+`ms
Total Duration: ${g-E}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:b}))))}}function xV(n,e){return new AV(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{constructor(){this.changes=new Ja((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,gn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?X.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RV{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&iu(s.mutation,a,Ci.empty(),gt.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Be()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Be()){const a=La();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((l=>{let u=qc();return l.forEach(((f,p)=>{u=u.insert(f,p.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const s=La();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Be())))}populateOverlays(e,t,s){const a=[];return s.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((u,f)=>{t.set(u,f)}))}))}computeViews(e,t,s,a){let l=Hs();const u=nu(),f=(function(){return nu()})();return t.forEach(((p,g)=>{const E=s.get(g.key);a.has(g.key)&&(E===void 0||E.mutation instanceof Za)?l=l.insert(g.key,g):E!==void 0?(u.set(g.key,E.mutation.getFieldMask()),iu(E.mutation,g,E.mutation.getFieldMask(),gt.now())):u.set(g.key,Ci.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,E)=>u.set(g,E))),t.forEach(((g,E)=>f.set(g,new IV(E,u.get(g)??null)))),f)))}recalculateAndSaveOverlays(e,t){const s=nu();let a=new Et(((u,f)=>u-f)),l=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const f of u)f.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let E=s.get(p)||Ci.empty();E=f.applyToLocalView(g,E),s.set(p,E);const b=(a.get(f.batchId)||Be()).add(p);a=a.insert(f.batchId,b)}))})).next((()=>{const u=[],f=a.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),g=p.key,E=p.value,b=fC();E.forEach((S=>{if(!l.has(S)){const M=vC(t.get(S),s.get(S));M!==null&&b.set(S,M),l=l.add(S)}})),u.push(this.documentOverlayCache.saveOverlays(e,g,b))}return X.waitFor(u)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return(function(u){return _e.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):OL(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((l=>{const u=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):X.resolve(La());let f=_u,p=l;return u.next((g=>X.forEach(g,((E,b)=>(f<b.largestBatchId&&(f=b.largestBatchId),l.get(E)?X.resolve():this.remoteDocumentCache.getEntry(e,E).next((S=>{p=p.insert(E,S)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,Be()))).next((E=>({batchId:f,changes:dC(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next((s=>{let a=qc();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let u=qc();return this.indexManager.getCollectionParents(e,l).next((f=>X.forEach(f,(p=>{const g=(function(b,S){return new Yf(S,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next((E=>{E.forEach(((b,S)=>{u=u.insert(b,S)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((u=>(l=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a)))).next((u=>{l.forEach(((p,g)=>{const E=g.getKey();u.get(E)===null&&(u=u.insert(E,gn.newInvalidDocument(E)))}));let f=qc();return u.forEach(((p,g)=>{const E=l.get(p);E!==void 0&&iu(E.mutation,g,Ci.empty(),gt.now()),Wf(t,g)&&(f=f.insert(p,g))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NV{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return X.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:os(a.createTime)}})(t)),X.resolve()}getNamedQuery(e,t){return X.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(a){return{name:a.name,query:vV(a.bundledQuery),readTime:os(a.readTime)}})(t)),X.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV{constructor(){this.overlays=new Et(_e.comparator),this.qr=new Map}getOverlay(e,t){return X.resolve(this.overlays.get(t))}getOverlays(e,t){const s=La();return X.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&s.set(a,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,l)=>{this.St(e,t,l)})),X.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.qr.get(s);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(s)),X.resolve()}getOverlaysForCollection(e,t,s){const a=La(),l=t.length+1,u=new _e(t.child("")),f=this.overlays.getIteratorFrom(u);for(;f.hasNext();){const p=f.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return X.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new Et(((g,E)=>g-E));const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let E=l.get(g.largestBatchId);E===null&&(E=La(),l=l.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const f=La(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,E)=>f.set(g,E))),!(f.size()>=a)););return X.resolve(f)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const u=this.qr.get(a.largestBatchId).delete(s.key);this.qr.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(s.key,new WL(t,s));let l=this.qr.get(t);l===void 0&&(l=Be(),this.qr.set(t,l)),this.qr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV{constructor(){this.sessionToken=dn.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(){this.Qr=new Wt(en.$r),this.Ur=new Wt(en.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new en(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new en(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new _e(new pt([])),s=new en(t,e),a=new en(t,e+1),l=[];return this.Ur.forEachInRange([s,a],(u=>{this.Gr(u),l.push(u.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new _e(new pt([])),s=new en(t,e),a=new en(t,e+1);let l=Be();return this.Ur.forEachInRange([s,a],(u=>{l=l.add(u.key)})),l}containsKey(e){const t=new en(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class en{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return _e.comparator(e.key,t.key)||Fe(e.Yr,t.Yr)}static Kr(e,t){return Fe(e.Yr,t.Yr)||_e.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Wt(en.$r)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new QL(l,t,s,a);this.mutationQueue.push(u);for(const f of a)this.Zr=this.Zr.add(new en(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return X.resolve(u)}lookupMutationBatch(e,t){return X.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ei(s),l=a<0?0:a;return X.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?xy:this.tr-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new en(t,0),a=new en(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([s,a],(u=>{const f=this.Xr(u.Yr);l.push(f)})),X.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Wt(Fe);return t.forEach((a=>{const l=new en(a,0),u=new en(a,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,u],(f=>{s=s.add(f.Yr)}))})),X.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;_e.isDocumentKey(l)||(l=l.child(""));const u=new en(new _e(l),0);let f=new Wt(Fe);return this.Zr.forEachWhile((p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(f=f.add(p.Yr)),!0)}),u),X.resolve(this.ti(f))}ti(e){const t=[];return e.forEach((s=>{const a=this.Xr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){Ze(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return X.forEach(t.mutations,(a=>{const l=new en(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new en(t,0),a=this.Zr.firstAfterOrEqual(s);return X.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(e){this.ri=e,this.docs=(function(){return new Et(_e.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,u=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:u}),this.size+=u-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return X.resolve(s?s.document.mutableCopy():gn.newInvalidDocument(t))}getEntries(e,t){let s=Hs();return t.forEach((a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():gn.newInvalidDocument(a))})),X.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Hs();const u=t.path,f=new _e(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:g,value:{document:E}}=p.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||lL(oL(E),s)<=0||(a.has(E.key)||Wf(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return X.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Te(9500)}ii(e,t){return X.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new PV(this)}getSize(e){return X.resolve(this.size)}}class PV extends CV{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Nr.addEntry(e,a)):this.Nr.removeEntry(s)})),X.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LV{constructor(e){this.persistence=e,this.si=new Ja((t=>Ry(t)),Ny),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.oi=0,this._i=new Ly,this.targetCount=0,this.ai=_l.ur()}forEachTarget(e,t){return this.si.forEach(((s,a)=>t(a))),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),X.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new _l(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,X.resolve()}updateTargetData(e,t){return this.Pr(t),X.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.si.forEach(((u,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.si.delete(u),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),a++)})),X.waitFor(l).next((()=>a))}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return X.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),X.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((u=>{l.push(a.markPotentiallyOrphaned(e,u))})),X.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),X.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return X.resolve(s)}containsKey(e,t){return X.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,t){this.ui={},this.overlays={},this.ci=new qf(0),this.li=!1,this.li=!0,this.hi=new DV,this.referenceDelegate=e(this),this.Pi=new LV(this),this.indexManager=new EV,this.remoteDocumentCache=(function(a){return new MV(a)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new yV(t),this.Ii=new NV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new OV,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new kV(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){ae("MemoryPersistence","Starting transaction:",e);const a=new VV(this.ci.next());return this.referenceDelegate.Ei(),s(a).next((l=>this.referenceDelegate.di(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Ai(e,t){return X.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class VV extends uL{constructor(e){super(),this.currentSequenceNumber=e}}class Vy{constructor(e){this.persistence=e,this.Ri=new Ly,this.Vi=null}static mi(e){return new Vy(e)}get fi(){if(this.Vi)return this.Vi;throw Te(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),X.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),X.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),X.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((a=>this.fi.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.fi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.fi,(s=>{const a=_e.fromPath(s);return this.gi(e,a).next((l=>{l||t.removeEntry(a,Ae.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return X.or([()=>X.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Ef{constructor(e,t){this.persistence=e,this.pi=new Ja((s=>fL(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=xV(this,t)}static mi(e,t){return new Ef(e,t)}Ei(){}di(e){return X.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return X.forEach(this.pi,((s,a)=>this.br(e,s,a).next((l=>l?X.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ii(e,(u=>this.br(e,u,t).next((f=>{f||(s++,l.removeEntry(u,Ae.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),X.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),X.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),X.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=kd(e.data.value)),t}br(e,t,s){return X.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.pi.get(t);return X.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=a}static As(e,t){let s=Be(),a=Be();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new jy(e,t.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UV{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return AR()?8:hL(_n())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ys(e,t).next((u=>{l.result=u})).next((()=>{if(!l.result)return this.ws(e,t,a,s).next((u=>{l.result=u}))})).next((()=>{if(l.result)return;const u=new jV;return this.Ss(e,t,u).next((f=>{if(l.result=f,this.Vs)return this.bs(e,t,u,f.size)}))})).next((()=>l.result))}bs(e,t,s,a){return s.documentReadCount<this.fs?(Qo()<=Pe.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Wo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),X.resolve()):(Qo()<=Pe.DEBUG&&ae("QueryEngine","Query:",Wo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.gs*a?(Qo()<=Pe.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Wo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rs(t))):X.resolve())}ys(e,t){if(dw(t))return X.resolve(null);let s=rs(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=c_(t,null,"F"),s=rs(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const u=Be(...l);return this.ps.getDocuments(e,u).next((f=>this.indexManager.getMinOffset(e,s).next((p=>{const g=this.Ds(t,f);return this.Cs(t,g,u,p.readTime)?this.ys(e,c_(t,null,"F")):this.vs(e,g,t,p)}))))})))))}ws(e,t,s,a){return dw(t)||a.isEqual(Ae.min())?X.resolve(null):this.ps.getDocuments(e,s).next((l=>{const u=this.Ds(t,l);return this.Cs(t,u,s,a)?X.resolve(null):(Qo()<=Pe.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Wo(t)),this.vs(e,u,t,aL(a,_u)).next((f=>f)))}))}Ds(e,t){let s=new Wt(uC(e));return t.forEach(((a,l)=>{Wf(e,l)&&(s=s.add(l))})),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,s){return Qo()<=Pe.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Wo(t)),this.ps.getDocumentsMatchingQuery(e,t,qr.min(),s)}vs(e,t,s,a){return this.ps.getDocumentsMatchingQuery(e,s,a).next((l=>(t.forEach((u=>{l=l.insert(u.key,u)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy="LocalStore",zV=3e8;class FV{constructor(e,t,s,a){this.persistence=e,this.Fs=t,this.serializer=a,this.Ms=new Et(Fe),this.xs=new Ja((l=>Ry(l)),Ny),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RV(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function BV(n,e,t,s){return new FV(n,e,t,s)}async function MC(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((l=>(a=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const u=[],f=[];let p=Be();for(const g of a){u.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}for(const g of l){f.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(s,p).next((g=>({Ls:g,removedBatchIds:u,addedBatchIds:f})))}))}))}function HV(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(f,p,g,E){const b=g.batch,S=b.keys();let M=X.resolve();return S.forEach((H=>{M=M.next((()=>E.getEntry(p,H))).next(($=>{const J=g.docVersions.get(H);Ze(J!==null,48541),$.version.compareTo(J)<0&&(b.applyToRemoteDocument($,g),$.isValidDocument()&&($.setReadTime(g.commitVersion),E.addEntry($)))}))})),M.next((()=>f.mutationQueue.removeMutationBatch(p,b)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(f){let p=Be();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(p=p.add(f.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function PC(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function qV(n,e){const t=Ie(n),s=e.snapshotVersion;let a=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const u=t.Ns.newChangeBuffer({trackRemovals:!0});a=t.Ms;const f=[];e.targetChanges.forEach(((E,b)=>{const S=a.get(b);if(!S)return;f.push(t.Pi.removeMatchingKeys(l,E.removedDocuments,b).next((()=>t.Pi.addMatchingKeys(l,E.addedDocuments,b))));let M=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(b)!==null?M=M.withResumeToken(dn.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):E.resumeToken.approximateByteSize()>0&&(M=M.withResumeToken(E.resumeToken,s)),a=a.insert(b,M),(function($,J,ee){return $.resumeToken.approximateByteSize()===0||J.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=zV?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0})(S,M,E)&&f.push(t.Pi.updateTargetData(l,M))}));let p=Hs(),g=Be();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),f.push(GV(l,u,e.documentUpdates).next((E=>{p=E.ks,g=E.qs}))),!s.isEqual(Ae.min())){const E=t.Pi.getLastRemoteSnapshotVersion(l).next((b=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,s)));f.push(E)}return X.waitFor(f).next((()=>u.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.Ms=a,l)))}function GV(n,e,t){let s=Be(),a=Be();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let u=Hs();return t.forEach(((f,p)=>{const g=l.get(f);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(f)),p.isNoDocument()&&p.version.isEqual(Ae.min())?(e.removeEntry(f,p.readTime),u=u.insert(f,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),u=u.insert(f,p)):ae(Uy,"Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",p.version)})),{ks:u,qs:a}}))}function KV(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=xy),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function YV(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.Pi.getTargetData(s,e).next((l=>l?(a=l,X.resolve(a)):t.Pi.allocateTargetId(s).next((u=>(a=new kr(e,u,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.Ms.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function m_(n,e,t){const s=Ie(n),a=s.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(u=>s.persistence.referenceDelegate.removeTarget(u,a)))}catch(u){if(!Cl(u))throw u;ae(Uy,`Failed to update sequence numbers for target ${e}: ${u}`)}s.Ms=s.Ms.remove(e),s.xs.delete(a.target)}function Aw(n,e,t){const s=Ie(n);let a=Ae.min(),l=Be();return s.persistence.runTransaction("Execute query","readwrite",(u=>(function(p,g,E){const b=Ie(p),S=b.xs.get(E);return S!==void 0?X.resolve(b.Ms.get(S)):b.Pi.getTargetData(g,E)})(s,u,rs(e)).next((f=>{if(f)return a=f.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(u,f.targetId).next((p=>{l=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(u,e,t?a:Ae.min(),t?l:Be()))).next((f=>(QV(s,kL(e),f),{documents:f,Qs:l})))))}function QV(n,e,t){let s=n.Os.get(e)||Ae.min();t.forEach(((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Os.set(e,s)}class xw{constructor(){this.activeTargetIds=UL()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WV{constructor(){this.Mo=new xw,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new xw,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $V{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="ConnectivityMonitor";class Iw{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ae(Cw,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ae(Cw,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sd=null;function p_(){return Sd===null?Sd=(function(){return 268435456+Math.round(2147483648*Math.random())})():Sd++,"0x"+Sd.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="RestConnection",XV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class JV{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${a}`,this.Wo=this.databaseId.database===ff?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Go(e,t,s,a,l){const u=p_(),f=this.zo(e,t.toUriEncodedString());ae(Ig,`Sending RPC '${e}' ${u}:`,f,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,a,l);const{host:g}=new URL(f),E=$r(g);return this.Jo(e,f,p,s,E).then((b=>(ae(Ig,`Received RPC '${e}' ${u}: `,b),b)),(b=>{throw dl(Ig,`RPC '${e}' ${u} failed with error: `,b,"url: ",f,"request:",s),b}))}Ho(e,t,s,a,l,u){return this.Go(e,t,s,a,l)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Al})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,l)=>e[l]=a)),s&&s.headers.forEach(((a,l)=>e[l]=a))}zo(e,t){const s=XV[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="WebChannelConnection";class e3 extends JV{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const u=p_();return new Promise(((f,p)=>{const g=new jx;g.setWithCredentials(!0),g.listenOnce(Ux.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Dd.NO_ERROR:const b=g.getResponseJson();ae(mn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(b)),f(b);break;case Dd.TIMEOUT:ae(mn,`RPC '${e}' ${u} timed out`),p(new fe(Z.DEADLINE_EXCEEDED,"Request time out"));break;case Dd.HTTP_ERROR:const S=g.getStatus();if(ae(mn,`RPC '${e}' ${u} failed with status:`,S,"response text:",g.getResponseText()),S>0){let M=g.getResponseJson();Array.isArray(M)&&(M=M[0]);const H=M==null?void 0:M.error;if(H&&H.status&&H.message){const $=(function(ee){const ce=ee.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(ce)>=0?ce:Z.UNKNOWN})(H.status);p(new fe($,H.message))}else p(new fe(Z.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new fe(Z.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{l_:e,streamId:u,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{ae(mn,`RPC '${e}' ${u} completed.`)}}));const E=JSON.stringify(a);ae(mn,`RPC '${e}' ${u} sending request:`,a),g.send(t,"POST",E,s,15)}))}T_(e,t,s){const a=p_(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=Bx(),f=Fx(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const E=l.join("");ae(mn,`Creating RPC '${e}' stream ${a}: ${E}`,p);const b=u.createWebChannel(E,p);this.I_(b);let S=!1,M=!1;const H=new ZV({Yo:J=>{M?ae(mn,`Not sending because RPC '${e}' stream ${a} is closed:`,J):(S||(ae(mn,`Opening RPC '${e}' stream ${a} transport.`),b.open(),S=!0),ae(mn,`RPC '${e}' stream ${a} sending:`,J),b.send(J))},Zo:()=>b.close()}),$=(J,ee,ce)=>{J.listen(ee,(me=>{try{ce(me)}catch(we){setTimeout((()=>{throw we}),0)}}))};return $(b,Hc.EventType.OPEN,(()=>{M||(ae(mn,`RPC '${e}' stream ${a} transport opened.`),H.o_())})),$(b,Hc.EventType.CLOSE,(()=>{M||(M=!0,ae(mn,`RPC '${e}' stream ${a} transport closed`),H.a_(),this.E_(b))})),$(b,Hc.EventType.ERROR,(J=>{M||(M=!0,dl(mn,`RPC '${e}' stream ${a} transport errored. Name:`,J.name,"Message:",J.message),H.a_(new fe(Z.UNAVAILABLE,"The operation could not be completed")))})),$(b,Hc.EventType.MESSAGE,(J=>{var ee;if(!M){const ce=J.data[0];Ze(!!ce,16349);const me=ce,we=(me==null?void 0:me.error)||((ee=me[0])==null?void 0:ee.error);if(we){ae(mn,`RPC '${e}' stream ${a} received error:`,we);const Xe=we.status;let Se=(function(I){const P=Ft[I];if(P!==void 0)return bC(P)})(Xe),C=we.message;Se===void 0&&(Se=Z.INTERNAL,C="Unknown error status: "+Xe+" with message "+we.message),M=!0,H.a_(new fe(Se,C)),b.close()}else ae(mn,`RPC '${e}' stream ${a} received:`,ce),H.u_(ce)}})),$(f,zx.STAT_EVENT,(J=>{J.stat===i_.PROXY?ae(mn,`RPC '${e}' stream ${a} detected buffering proxy`):J.stat===i_.NOPROXY&&ae(mn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{H.__()}),0),H}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Rg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n){return new sV(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=a,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&ae("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="PersistentStream";class VC{constructor(e,t,s,a,l,u,f,p){this.Mi=e,this.S_=s,this.b_=a,this.connection=l,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new LC(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(Bs(t.toString()),Bs("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new fe(Z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.J_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ae(Rw,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ae(Rw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class t3 extends VC{constructor(e,t,s,a,l,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,u),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=oV(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Ae.min();const u=l.targetChange;return u.targetIds&&u.targetIds.length?Ae.min():u.readTime?os(u.readTime):Ae.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=f_(this.serializer),t.addTarget=(function(l,u){let f;const p=u.target;if(f=l_(p)?{documents:uV(l,p)}:{query:hV(l,p).ft},f.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){f.resumeToken=AC(l,u.resumeToken);const g=u_(l,u.expectedCount);g!==null&&(f.expectedCount=g)}else if(u.snapshotVersion.compareTo(Ae.min())>0){f.readTime=vf(l,u.snapshotVersion.toTimestamp());const g=u_(l,u.expectedCount);g!==null&&(f.expectedCount=g)}return f})(this.serializer,e);const s=fV(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=f_(this.serializer),t.removeTarget=e,this.q_(t)}}class n3 extends VC{constructor(e,t,s,a,l,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,u),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=cV(e.writeResults,e.commitTime),s=os(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=f_(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>lV(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{}class s3 extends i3{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new fe(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,u])=>this.connection.Go(e,h_(t,s),a,l,u))).catch((l=>{throw l.name==="FirebaseError"?(l.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new fe(Z.UNKNOWN,l.toString())}))}Ho(e,t,s,a,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Ho(e,h_(t,s),a,u,f,l))).catch((u=>{throw u.name==="FirebaseError"?(u.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new fe(Z.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class r3{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Bs(t),this.aa=!1):ae("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="RemoteStore";class a3{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((u=>{s.enqueueAndForget((async()=>{eo(this)&&(ae(Ga,"Restarting streams for network reachability change."),await(async function(p){const g=Ie(p);g.Ea.add(4),await Uu(g),g.Ra.set("Unknown"),g.Ea.delete(4),await em(g)})(this))}))})),this.Ra=new r3(s,a)}}async function em(n){if(eo(n))for(const e of n.da)await e(!0)}async function Uu(n){for(const e of n.da)await e(!1)}function jC(n,e){const t=Ie(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Hy(t)?By(t):Il(t).O_()&&Fy(t,e))}function zy(n,e){const t=Ie(n),s=Il(t);t.Ia.delete(e),s.O_()&&UC(t,e),t.Ia.size===0&&(s.O_()?s.L_():eo(t)&&t.Ra.set("Unknown"))}function Fy(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Il(n).Y_(e)}function UC(n,e){n.Va.Ue(e),Il(n).Z_(e)}function By(n){n.Va=new eV({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Il(n).start(),n.Ra.ua()}function Hy(n){return eo(n)&&!Il(n).x_()&&n.Ia.size>0}function eo(n){return Ie(n).Ea.size===0}function zC(n){n.Va=void 0}async function o3(n){n.Ra.set("Online")}async function l3(n){n.Ia.forEach(((e,t)=>{Fy(n,e)}))}async function c3(n,e){zC(n),Hy(n)?(n.Ra.ha(e),By(n)):n.Ra.set("Unknown")}async function u3(n,e,t){if(n.Ra.set("Online"),e instanceof SC&&e.state===2&&e.cause)try{await(async function(a,l){const u=l.cause;for(const f of l.targetIds)a.Ia.has(f)&&(await a.remoteSyncer.rejectListen(f,u),a.Ia.delete(f),a.Va.removeTarget(f))})(n,e)}catch(s){ae(Ga,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Tf(n,s)}else if(e instanceof Ld?n.Va.Ze(e):e instanceof wC?n.Va.st(e):n.Va.tt(e),!t.isEqual(Ae.min()))try{const s=await PC(n.localStore);t.compareTo(s)>=0&&await(function(l,u){const f=l.Va.Tt(u);return f.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.Ia.get(g);E&&l.Ia.set(g,E.withResumeToken(p.resumeToken,u))}})),f.targetMismatches.forEach(((p,g)=>{const E=l.Ia.get(p);if(!E)return;l.Ia.set(p,E.withResumeToken(dn.EMPTY_BYTE_STRING,E.snapshotVersion)),UC(l,p);const b=new kr(E.target,p,g,E.sequenceNumber);Fy(l,b)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(s){ae(Ga,"Failed to raise snapshot:",s),await Tf(n,s)}}async function Tf(n,e,t){if(!Cl(e))throw e;n.Ea.add(1),await Uu(n),n.Ra.set("Offline"),t||(t=()=>PC(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ae(Ga,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await em(n)}))}function FC(n,e){return e().catch((t=>Tf(n,t,e)))}async function tm(n){const e=Ie(n),t=Qr(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:xy;for(;h3(e);)try{const a=await KV(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,d3(e,a)}catch(a){await Tf(e,a)}BC(e)&&HC(e)}function h3(n){return eo(n)&&n.Ta.length<10}function d3(n,e){n.Ta.push(e);const t=Qr(n);t.O_()&&t.X_&&t.ea(e.mutations)}function BC(n){return eo(n)&&!Qr(n).x_()&&n.Ta.length>0}function HC(n){Qr(n).start()}async function f3(n){Qr(n).ra()}async function m3(n){const e=Qr(n);for(const t of n.Ta)e.ea(t.mutations)}async function p3(n,e,t){const s=n.Ta.shift(),a=ky.from(s,e,t);await FC(n,(()=>n.remoteSyncer.applySuccessfulWrite(a))),await tm(n)}async function g3(n,e){e&&Qr(n).X_&&await(async function(s,a){if((function(u){return XL(u)&&u!==Z.ABORTED})(a.code)){const l=s.Ta.shift();Qr(s).B_(),await FC(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a))),await tm(s)}})(n,e),BC(n)&&HC(n)}async function Nw(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),ae(Ga,"RemoteStore received new credentials");const s=eo(t);t.Ea.add(3),await Uu(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await em(t)}async function _3(n,e){const t=Ie(n);e?(t.Ea.delete(2),await em(t)):e||(t.Ea.add(2),await Uu(t),t.Ra.set("Unknown"))}function Il(n){return n.ma||(n.ma=(function(t,s,a){const l=Ie(t);return l.sa(),new t3(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:o3.bind(null,n),t_:l3.bind(null,n),r_:c3.bind(null,n),H_:u3.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Hy(n)?By(n):n.Ra.set("Unknown")):(await n.ma.stop(),zC(n))}))),n.ma}function Qr(n){return n.fa||(n.fa=(function(t,s,a){const l=Ie(t);return l.sa(),new n3(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:f3.bind(null,n),r_:g3.bind(null,n),ta:m3.bind(null,n),na:p3.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await tm(n)):(await n.fa.stop(),n.Ta.length>0&&(ae(Ga,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const u=Date.now()+s,f=new qy(e,t,u,a,l);return f.start(s),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gy(n,e){if(Bs("AsyncQueue",`${e}: ${n}`),Cl(n))return new fe(Z.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{static emptySet(e){return new rl(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||_e.comparator(t.key,s.key):(t,s)=>_e.comparator(t.key,s.key),this.keyedMap=qc(),this.sortedSet=new Et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new rl;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(){this.ga=new Et(_e.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Te(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class yl{constructor(e,t,s,a,l,u,f,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=u,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const u=[];return t.forEach((f=>{u.push({type:0,doc:f})})),new yl(e,t,rl.emptySet(t),u,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y3{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class v3{constructor(){this.queries=Dw(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=Ie(t),l=a.queries;a.queries=Dw(),l.forEach(((u,f)=>{for(const p of f.Sa)p.onError(s)}))})(this,new fe(Z.ABORTED,"Firestore shutting down"))}}function Dw(){return new Ja((n=>cC(n)),Qf)}async function E3(n,e){const t=Ie(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.ba()&&e.Da()&&(s=2):(l=new y3,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(a,!0);break;case 1:l.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const f=Gy(u,`Initialization of query '${Wo(e.query)}' failed`);return void e.onError(f)}t.queries.set(a,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Ky(t)}async function T3(n,e){const t=Ie(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const u=l.Sa.indexOf(e);u>=0&&(l.Sa.splice(u,1),l.Sa.length===0?a=e.Da()?0:1:!l.ba()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function b3(n,e){const t=Ie(n);let s=!1;for(const a of e){const l=a.query,u=t.queries.get(l);if(u){for(const f of u.Sa)f.Fa(a)&&(s=!0);u.wa=a}}s&&Ky(t)}function w3(n,e,t){const s=Ie(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function Ky(n){n.Ca.forEach((e=>{e.next()}))}var g_,kw;(kw=g_||(g_={})).Ma="default",kw.Cache="cache";class S3{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new yl(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=yl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==g_.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.key=e}}class GC{constructor(e){this.key=e}}class A3{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Be(),this.mutatedKeys=Be(),this.eu=uC(e),this.tu=new rl(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Ow,a=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,u=a,f=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((E,b)=>{const S=a.get(E),M=Wf(this.query,b)?b:null,H=!!S&&this.mutatedKeys.has(S.key),$=!!M&&(M.hasLocalMutations||this.mutatedKeys.has(M.key)&&M.hasCommittedMutations);let J=!1;S&&M?S.data.isEqual(M.data)?H!==$&&(s.track({type:3,doc:M}),J=!0):this.su(S,M)||(s.track({type:2,doc:M}),J=!0,(p&&this.eu(M,p)>0||g&&this.eu(M,g)<0)&&(f=!0)):!S&&M?(s.track({type:0,doc:M}),J=!0):S&&!M&&(s.track({type:1,doc:S}),J=!0,(p||g)&&(f=!0)),J&&(M?(u=u.add(M),l=$?l.add(E):l.delete(E)):(u=u.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const E=this.query.limitType==="F"?u.last():u.first();u=u.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{tu:u,iu:s,Cs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const u=e.iu.ya();u.sort(((E,b)=>(function(M,H){const $=J=>{switch(J){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{Rt:J})}};return $(M)-$(H)})(E.type,b.type)||this.eu(E.doc,b.doc))),this.ou(s),a=a??!1;const f=t&&!a?this._u():[],p=this.Xa.size===0&&this.current&&!a?1:0,g=p!==this.Za;return this.Za=p,u.length!==0||g?{snapshot:new yl(this.query,e.tu,l,u,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ow,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Be(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new GC(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new qC(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Be();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return yl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Yy="SyncEngine";class x3{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class C3{constructor(e){this.key=e,this.hu=!1}}class I3{constructor(e,t,s,a,l,u){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new Ja((f=>cC(f)),Qf),this.Iu=new Map,this.Eu=new Set,this.du=new Et(_e.comparator),this.Au=new Map,this.Ru=new Ly,this.Vu={},this.mu=new Map,this.fu=_l.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function R3(n,e,t=!0){const s=XC(n);let a;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.lu()):a=await KC(s,e,t,!0),a}async function N3(n,e){const t=XC(n);await KC(t,e,!0,!1)}async function KC(n,e,t,s){const a=await YV(n.localStore,rs(e)),l=a.targetId,u=n.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await O3(n,e,l,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&jC(n.remoteStore,a),f}async function O3(n,e,t,s,a){n.pu=(b,S,M)=>(async function($,J,ee,ce){let me=J.view.ru(ee);me.Cs&&(me=await Aw($.localStore,J.query,!1).then((({documents:C})=>J.view.ru(C,me))));const we=ce&&ce.targetChanges.get(J.targetId),Xe=ce&&ce.targetMismatches.get(J.targetId)!=null,Se=J.view.applyChanges(me,$.isPrimaryClient,we,Xe);return Pw($,J.targetId,Se.au),Se.snapshot})(n,b,S,M);const l=await Aw(n.localStore,e,!0),u=new A3(e,l.Qs),f=u.ru(l.documents),p=ju.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=u.applyChanges(f,n.isPrimaryClient,p);Pw(n,t,g.au);const E=new x3(e,t,u);return n.Tu.set(e,E),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),g.snapshot}async function D3(n,e,t){const s=Ie(n),a=s.Tu.get(e),l=s.Iu.get(a.targetId);if(l.length>1)return s.Iu.set(a.targetId,l.filter((u=>!Qf(u,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await m_(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&zy(s.remoteStore,a.targetId),__(s,a.targetId)})).catch(xl)):(__(s,a.targetId),await m_(s.localStore,a.targetId,!0))}async function k3(n,e){const t=Ie(n),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),zy(t.remoteStore,s.targetId))}async function M3(n,e,t){const s=F3(n);try{const a=await(function(u,f){const p=Ie(u),g=gt.now(),E=f.reduce(((M,H)=>M.add(H.key)),Be());let b,S;return p.persistence.runTransaction("Locally write mutations","readwrite",(M=>{let H=Hs(),$=Be();return p.Ns.getEntries(M,E).next((J=>{H=J,H.forEach(((ee,ce)=>{ce.isValidDocument()||($=$.add(ee))}))})).next((()=>p.localDocuments.getOverlayedDocuments(M,H))).next((J=>{b=J;const ee=[];for(const ce of f){const me=KL(ce,b.get(ce.key).overlayedDocument);me!=null&&ee.push(new Za(ce.key,me,nC(me.value.mapValue),as.exists(!0)))}return p.mutationQueue.addMutationBatch(M,g,ee,f)})).next((J=>{S=J;const ee=J.applyToLocalDocumentSet(b,$);return p.documentOverlayCache.saveOverlays(M,J.batchId,ee)}))})).then((()=>({batchId:S.batchId,changes:dC(b)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(u,f,p){let g=u.Vu[u.currentUser.toKey()];g||(g=new Et(Fe)),g=g.insert(f,p),u.Vu[u.currentUser.toKey()]=g})(s,a.batchId,t),await zu(s,a.changes),await tm(s.remoteStore)}catch(a){const l=Gy(a,"Failed to persist write");t.reject(l)}}async function YC(n,e){const t=Ie(n);try{const s=await qV(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const u=t.Au.get(l);u&&(Ze(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?u.hu=!0:a.modifiedDocuments.size>0?Ze(u.hu,14607):a.removedDocuments.size>0&&(Ze(u.hu,42227),u.hu=!1))})),await zu(t,s,e)}catch(s){await xl(s)}}function Mw(n,e,t){const s=Ie(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((l,u)=>{const f=u.view.va(e);f.snapshot&&a.push(f.snapshot)})),(function(u,f){const p=Ie(u);p.onlineState=f;let g=!1;p.queries.forEach(((E,b)=>{for(const S of b.Sa)S.va(f)&&(g=!0)})),g&&Ky(p)})(s.eventManager,e),a.length&&s.Pu.H_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function P3(n,e,t){const s=Ie(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),l=a&&a.key;if(l){let u=new Et(_e.comparator);u=u.insert(l,gn.newNoDocument(l,Ae.min()));const f=Be().add(l),p=new Jf(Ae.min(),new Map,new Et(Fe),u,f);await YC(s,p),s.du=s.du.remove(l),s.Au.delete(e),Qy(s)}else await m_(s.localStore,e,!1).then((()=>__(s,e,t))).catch(xl)}async function L3(n,e){const t=Ie(n),s=e.batch.batchId;try{const a=await HV(t.localStore,e);WC(t,s,null),QC(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await zu(t,a)}catch(a){await xl(a)}}async function V3(n,e,t){const s=Ie(n);try{const a=await(function(u,f){const p=Ie(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let E;return p.mutationQueue.lookupMutationBatch(g,f).next((b=>(Ze(b!==null,37113),E=b.keys(),p.mutationQueue.removeMutationBatch(g,b)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,E,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E))).next((()=>p.localDocuments.getDocuments(g,E)))}))})(s.localStore,e);WC(s,e,t),QC(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await zu(s,a)}catch(a){await xl(a)}}function QC(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function WC(n,e,t){const s=Ie(n);let a=s.Vu[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Vu[s.currentUser.toKey()]=a}}function __(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((s=>{n.Ru.containsKey(s)||$C(n,s)}))}function $C(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(zy(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Qy(n))}function Pw(n,e,t){for(const s of t)s instanceof qC?(n.Ru.addReference(s.key,e),j3(n,s)):s instanceof GC?(ae(Yy,"Document no longer in limbo: "+s.key),n.Ru.removeReference(s.key,e),n.Ru.containsKey(s.key)||$C(n,s.key)):Te(19791,{wu:s})}function j3(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Eu.has(s)||(ae(Yy,"New document in limbo: "+t),n.Eu.add(s),Qy(n))}function Qy(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new _e(pt.fromString(e)),s=n.fu.next();n.Au.set(s,new C3(t)),n.du=n.du.insert(t,s),jC(n.remoteStore,new kr(rs(Oy(t.path)),s,"TargetPurposeLimboResolution",qf.ce))}}async function zu(n,e,t){const s=Ie(n),a=[],l=[],u=[];s.Tu.isEmpty()||(s.Tu.forEach(((f,p)=>{u.push(s.pu(p,e,t).then((g=>{var E;if((g||t)&&s.isPrimaryClient){const b=g?!g.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,b?"current":"not-current")}if(g){a.push(g);const b=jy.As(p.targetId,g);l.push(b)}})))})),await Promise.all(u),s.Pu.H_(a),await(async function(p,g){const E=Ie(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(b=>X.forEach(g,(S=>X.forEach(S.Es,(M=>E.persistence.referenceDelegate.addReference(b,S.targetId,M))).next((()=>X.forEach(S.ds,(M=>E.persistence.referenceDelegate.removeReference(b,S.targetId,M)))))))))}catch(b){if(!Cl(b))throw b;ae(Uy,"Failed to update sequence numbers: "+b)}for(const b of g){const S=b.targetId;if(!b.fromCache){const M=E.Ms.get(S),H=M.snapshotVersion,$=M.withLastLimboFreeSnapshotVersion(H);E.Ms=E.Ms.insert(S,$)}}})(s.localStore,l))}async function U3(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){ae(Yy,"User change. New user:",e.toKey());const s=await MC(t.localStore,e);t.currentUser=e,(function(l,u){l.mu.forEach((f=>{f.forEach((p=>{p.reject(new fe(Z.CANCELLED,u))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await zu(t,s.Ls)}}function z3(n,e){const t=Ie(n),s=t.Au.get(e);if(s&&s.hu)return Be().add(s.key);{let a=Be();const l=t.Iu.get(e);if(!l)return a;for(const u of l){const f=t.Tu.get(u);a=a.unionWith(f.view.nu)}return a}}function XC(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=YC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=z3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=P3.bind(null,e),e.Pu.H_=b3.bind(null,e.eventManager),e.Pu.yu=w3.bind(null,e.eventManager),e}function F3(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=L3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=V3.bind(null,e),e}class bf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return BV(this.persistence,new UV,e.initialUser,this.serializer)}Cu(e){return new kC(Vy.mi,this.serializer)}Du(e){return new WV}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bf.provider={build:()=>new bf};class B3 extends bf{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ze(this.persistence.referenceDelegate instanceof Ef,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new SV(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Dn.withCacheSize(this.cacheSizeBytes):Dn.DEFAULT;return new kC((s=>Ef.mi(s,t)),this.serializer)}}class y_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Mw(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=U3.bind(null,this.syncEngine),await _3(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new v3})()}createDatastore(e){const t=Zf(e.databaseInfo.databaseId),s=(function(l){return new e3(l)})(e.databaseInfo);return(function(l,u,f,p){return new s3(l,u,f,p)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,l,u,f){return new a3(s,a,l,u,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>Mw(this.syncEngine,t,0)),(function(){return Iw.v()?new Iw:new $V})())}createSyncEngine(e,t){return(function(a,l,u,f,p,g,E){const b=new I3(a,l,u,f,p,g);return E&&(b.gu=!0),b})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(a){const l=Ie(a);ae(Ga,"RemoteStore shutting down."),l.Ea.add(5),await Uu(l),l.Aa.shutdown(),l.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}y_.provider={build:()=>new y_};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H3{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Bs("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="FirestoreClient";class q3{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=pn.UNAUTHENTICATED,this.clientId=Sy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async u=>{ae(Wr,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(s,(u=>(ae(Wr,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Gy(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Ng(n,e){n.asyncQueue.verifyOperationInProgress(),ae(Wr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async a=>{s.isEqual(a)||(await MC(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Lw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await G3(n);ae(Wr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Nw(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,a)=>Nw(e.remoteStore,a))),n._onlineComponents=e}async function G3(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae(Wr,"Using user provided OfflineComponentProvider");try{await Ng(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===Z.FAILED_PRECONDITION||a.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;dl("Error using user provided cache. Falling back to memory cache: "+t),await Ng(n,new bf)}}else ae(Wr,"Using default OfflineComponentProvider"),await Ng(n,new B3(void 0));return n._offlineComponents}async function JC(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae(Wr,"Using user provided OnlineComponentProvider"),await Lw(n,n._uninitializedComponentsProvider._online)):(ae(Wr,"Using default OnlineComponentProvider"),await Lw(n,new y_))),n._onlineComponents}function K3(n){return JC(n).then((e=>e.syncEngine))}async function Y3(n){const e=await JC(n),t=e.eventManager;return t.onListen=R3.bind(null,e.syncEngine),t.onUnlisten=D3.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=N3.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=k3.bind(null,e.syncEngine),t}function Q3(n,e,t={}){const s=new Ur;return n.asyncQueue.enqueueAndForget((async()=>(function(l,u,f,p,g){const E=new H3({next:S=>{E.Nu(),u.enqueueAndForget((()=>T3(l,b)));const M=S.docs.has(f);!M&&S.fromCache?g.reject(new fe(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):M&&S.fromCache&&p&&p.source==="server"?g.reject(new fe(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),b=new S3(Oy(f.path),E,{includeMetadataChanges:!0,qa:!0});return E3(l,b)})(await Y3(n),n.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="firestore.googleapis.com",jw=!0;class Uw{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new fe(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=eI,this.ssl=jw}else this.host=e.host,this.ssl=e.ssl??jw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=DC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<bV)throw new fe(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ZC(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new fe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new fe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new fe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nm{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new W4;switch(s.type){case"firstParty":return new Z4(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new fe(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Vw.get(t);s&&(ae("ComponentProvider","Removing Datastore"),Vw.delete(t),s.terminate())})(this),Promise.resolve()}}function W3(n,e,t,s={}){var g;n=ml(n,nm);const a=$r(e),l=n._getSettings(),u={...l,emulatorOptions:n._getEmulatorOptions()},f=`${e}:${t}`;a&&(T_(`https://${f}`),b_("Firestore",!0)),l.host!==eI&&l.host!==f&&dl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:f,ssl:a,emulatorOptions:s};if(!Vs(p,u)&&(n._setSettings(p),s.mockUserToken)){let E,b;if(typeof s.mockUserToken=="string")E=s.mockUserToken,b=pn.MOCK_USER;else{E=mS(s.mockUserToken,(g=n._app)==null?void 0:g.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new fe(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new pn(S)}n._authCredentials=new $4(new qx(E,b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Wy(this.firestore,e,this._query)}}class Qt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qt(this.firestore,e,this._key)}toJSON(){return{type:Qt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Lu(t,Qt._jsonSchema))return new Qt(e,s||null,new _e(pt.fromString(t.referencePath)))}}Qt._jsonSchemaVersion="firestore/documentReference/1.0",Qt._jsonSchema={type:Bt("string",Qt._jsonSchemaVersion),referencePath:Bt("string")};class zr extends Wy{constructor(e,t,s){super(e,t,Oy(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qt(this.firestore,null,new _e(e))}withConverter(e){return new zr(this.firestore,e,this._path)}}function $3(n,e,...t){if(n=vt(n),Gx("collection","path",e),n instanceof nm){const s=pt.fromString(e,...t);return Zb(s),new zr(n,null,s)}{if(!(n instanceof Qt||n instanceof zr))throw new fe(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(pt.fromString(e,...t));return Zb(s),new zr(n.firestore,null,s)}}function Vd(n,e,...t){if(n=vt(n),arguments.length===1&&(e=Sy.newId()),Gx("doc","path",e),n instanceof nm){const s=pt.fromString(e,...t);return Jb(s),new Qt(n,null,new _e(s))}{if(!(n instanceof Qt||n instanceof zr))throw new fe(Z.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(pt.fromString(e,...t));return Jb(s),new Qt(n.firestore,n instanceof zr?n.converter:null,new _e(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="AsyncQueue";class Fw{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new LC(this,"async_queue_retry"),this._c=()=>{const s=Rg();s&&ae(zw,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Rg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Rg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ur;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Cl(e))throw e;ae(zw,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Bs("INTERNAL UNHANDLED ERROR: ",Bw(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=qy.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(a),a}uc(){this.nc&&Te(47125,{Pc:Bw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Bw(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class im extends nm{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new Fw,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fw(e),this._firestoreClient=void 0,await e}}}function X3(n,e){const t=typeof n=="object"?n:Rf(),s=typeof n=="string"?n:ff,a=Xr(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=hS("firestore");l&&W3(a,...l)}return a}function tI(n){if(n._terminated)throw new fe(Z.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||J3(n),n._firestoreClient}function J3(n){var s,a,l;const e=n._freezeSettings(),t=(function(f,p,g,E){return new gL(f,p,g,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,ZC(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new q3(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oi(dn.fromBase64String(e))}catch(t){throw new fe(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new oi(dn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:oi._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Lu(e,oi._jsonSchema))return oi.fromBase64String(e.bytes)}}oi._jsonSchemaVersion="firestore/bytes/1.0",oi._jsonSchema={type:Bt("string",oi._jsonSchemaVersion),bytes:Bt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new fe(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new un(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fe(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fe(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Fe(this._lat,e._lat)||Fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ls._jsonSchemaVersion}}static fromJSON(e){if(Lu(e,ls._jsonSchema))return new ls(e.latitude,e.longitude)}}ls._jsonSchemaVersion="firestore/geoPoint/1.0",ls._jsonSchema={type:Bt("string",ls._jsonSchemaVersion),latitude:Bt("number"),longitude:Bt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:cs._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Lu(e,cs._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new cs(e.vectorValues);throw new fe(Z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}cs._jsonSchemaVersion="firestore/vectorValue/1.0",cs._jsonSchema={type:Bt("string",cs._jsonSchemaVersion),vectorValues:Bt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z3=/^__.*__$/;class ej{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Za(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vu(e,this.data,t,this.fieldTransforms)}}function iI(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{Ac:n})}}class Xy{constructor(e,t,s,a,l,u){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Xy({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var a;const t=(a=this.path)==null?void 0:a.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return wf(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(iI(this.Ac)&&Z3.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class tj{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Zf(e)}Cc(e,t,s,a=!1){return new Xy({Ac:e,methodName:t,Dc:s,path:un.emptyPath(),fc:!1,bc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sI(n){const e=n._freezeSettings(),t=Zf(n._databaseId);return new tj(n._databaseId,!!e.ignoreUndefinedProperties,t)}function rI(n,e,t,s,a,l={}){const u=n.Cc(l.merge||l.mergeFields?2:0,e,t,a);cI("Data must be an object, but it was:",u,s);const f=oI(s,u);let p,g;if(l.merge)p=new Ci(u.fieldMask),g=u.fieldTransforms;else if(l.mergeFields){const E=[];for(const b of l.mergeFields){const S=nj(e,b,t);if(!u.contains(S))throw new fe(Z.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);sj(E,S)||E.push(S)}p=new Ci(E),g=u.fieldTransforms.filter((b=>p.covers(b.field)))}else p=null,g=u.fieldTransforms;return new ej(new ai(f),p,g)}function aI(n,e){if(lI(n=vt(n)))return cI("Unsupported field value:",e,n),oI(n,e);if(n instanceof nI)return(function(s,a){if(!iI(a.Ac))throw a.Sc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Sc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,a){const l=[];let u=0;for(const f of s){let p=aI(f,a.wc(u));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),u++}return{arrayValue:{values:l}}})(n,e)}return(function(s,a){if((s=vt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return zL(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=gt.fromDate(s);return{timestampValue:vf(a.serializer,l)}}if(s instanceof gt){const l=new gt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:vf(a.serializer,l)}}if(s instanceof ls)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof oi)return{bytesValue:AC(a.serializer,s._byteString)};if(s instanceof Qt){const l=a.databaseId,u=s.firestore._databaseId;if(!u.isEqual(l))throw a.Sc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Py(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof cs)return(function(u,f){return{mapValue:{fields:{[eC]:{stringValue:tC},[mf]:{arrayValue:{values:u.toArray().map((g=>{if(typeof g!="number")throw f.Sc("VectorValues must only contain numeric values.");return Dy(f.serializer,g)}))}}}}}})(s,a);throw a.Sc(`Unsupported field value: ${Ay(s)}`)})(n,e)}function oI(n,e){const t={};return Qx(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xa(n,((s,a)=>{const l=aI(a,e.mc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function lI(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof ls||n instanceof oi||n instanceof Qt||n instanceof nI||n instanceof cs)}function cI(n,e,t){if(!lI(t)||!Kx(t)){const s=Ay(t);throw s==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+s)}}function nj(n,e,t){if((e=vt(e))instanceof $y)return e._internalPath;if(typeof e=="string")return uI(n,e);throw wf("Field path arguments must be of type string or ",n,!1,void 0,t)}const ij=new RegExp("[~\\*/\\[\\]]");function uI(n,e,t){if(e.search(ij)>=0)throw wf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new $y(...e.split("."))._internalPath}catch{throw wf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function wf(n,e,t,s,a){const l=s&&!s.isEmpty(),u=a!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||u)&&(p+=" (found",l&&(p+=` in field ${s}`),u&&(p+=` in document ${a}`),p+=")"),new fe(Z.INVALID_ARGUMENT,f+n+p)}function sj(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(dI("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rj extends hI{data(){return super.data()}}function dI(n,e){return typeof e=="string"?uI(n,e):e instanceof $y?e._internalPath:e._delegate._internalPath}class aj{convertValue(e,t="none"){switch(Yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Xa(e,((a,l)=>{s[a]=this.convertValue(l,t)})),s}convertVectorValue(e){var s,a,l;const t=(l=(a=(s=e.fields)==null?void 0:s[mf].arrayValue)==null?void 0:a.values)==null?void 0:l.map((u=>Rt(u.doubleValue)));return new cs(t)}convertGeoPoint(e){return new ls(Rt(e.latitude),Rt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Kf(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(yu(e));default:return null}}convertTimestamp(e){const t=Gr(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=pt.fromString(e);Ze(OC(s),9688,{name:e});const a=new vu(s.get(1),s.get(3)),l=new _e(s.popFirst(5));return a.isEqual(t)||Bs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Kc{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Va extends hI{constructor(e,t,s,a,l,u){super(e,t,s,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new jd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(dI("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(Z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Va._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Va._jsonSchemaVersion="firestore/documentSnapshot/1.0",Va._jsonSchema={type:Bt("string",Va._jsonSchemaVersion),bundleSource:Bt("string","DocumentSnapshot"),bundleName:Bt("string"),bundle:Bt("string")};class jd extends Va{data(e={}){return super.data(e)}}class su{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Kc(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new jd(this._firestore,this._userDataWriter,s.key,s,new Kc(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fe(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map((f=>{const p=new jd(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Kc(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}}))}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const p=new jd(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Kc(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,E=-1;return f.type!==0&&(g=u.indexOf(f.doc.key),u=u.delete(f.doc.key)),f.type!==1&&(u=u.add(f.doc),E=u.indexOf(f.doc.key)),{type:oj(f.type),doc:p,oldIndex:g,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(Z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=su._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Sy.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function oj(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lj(n){n=ml(n,Qt);const e=ml(n.firestore,im);return Q3(tI(e),n._key).then((t=>hj(e,n,t)))}su._jsonSchemaVersion="firestore/querySnapshot/1.0",su._jsonSchema={type:Bt("string",su._jsonSchemaVersion),bundleSource:Bt("string","QuerySnapshot"),bundleName:Bt("string"),bundle:Bt("string")};class cj extends aj{constructor(e){super(),this.firestore=e}convertBytes(e){return new oi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Qt(this.firestore,null,t)}}function Hw(n,e,t){n=ml(n,Qt);const s=ml(n.firestore,im),a=fI(n.converter,e,t);return mI(s,[rI(sI(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,as.none())])}function uj(n,e){const t=ml(n.firestore,im),s=Vd(n),a=fI(n.converter,e);return mI(t,[rI(sI(n.firestore),"addDoc",s._key,a,n.converter!==null,{}).toMutation(s._key,as.exists(!1))]).then((()=>s))}function mI(n,e){return(function(s,a){const l=new Ur;return s.asyncQueue.enqueueAndForget((async()=>M3(await K3(s),a,l))),l.promise})(tI(n),e)}function hj(n,e,t){const s=t.docs.get(e._key),a=new cj(n);return new Va(n,a,e._key,s,new Kc(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){Al=a})(Qa),Ni(new ci("firestore",((s,{instanceIdentifier:a,options:l})=>{const u=s.getProvider("app").getImmediate(),f=new im(new X4(s.getProvider("auth-internal")),new eL(u,s.getProvider("app-check-internal")),(function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new fe(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vu(g.options.projectId,E)})(u,a),u);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Mn(Qb,Wb,e),Mn(Qb,Wb,"esm2020")})();const dj={mintAsset:async(n,e)=>{try{const t=e.type==="music"?`users/${n}/audio`:"assets",s=$3(Yo,t),a={...e,creatorId:n,ownerId:n,createdAt:Date.now()},l=await uj(s,a);return{...a,id:l.id}}catch(t){throw console.error("Asset Minting Error:",t),new Error(t.message||"Failed to deploy asset to the network.")}}};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=["user","model","function","system"];var Gw;(function(n){n.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",n.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",n.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",n.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",n.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(Gw||(Gw={}));var Kw;(function(n){n.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",n.BLOCK_NONE="BLOCK_NONE"})(Kw||(Kw={}));var Yw;(function(n){n.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",n.NEGLIGIBLE="NEGLIGIBLE",n.LOW="LOW",n.MEDIUM="MEDIUM",n.HIGH="HIGH"})(Yw||(Yw={}));var Qw;(function(n){n.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",n.SAFETY="SAFETY",n.OTHER="OTHER"})(Qw||(Qw={}));var Sf;(function(n){n.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",n.STOP="STOP",n.MAX_TOKENS="MAX_TOKENS",n.SAFETY="SAFETY",n.RECITATION="RECITATION",n.OTHER="OTHER"})(Sf||(Sf={}));var Ww;(function(n){n.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",n.RETRIEVAL_QUERY="RETRIEVAL_QUERY",n.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",n.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",n.CLASSIFICATION="CLASSIFICATION",n.CLUSTERING="CLUSTERING"})(Ww||(Ww={}));var $w;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.AUTO="AUTO",n.ANY="ANY",n.NONE="NONE"})($w||($w={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xw;(function(n){n.STRING="STRING",n.NUMBER="NUMBER",n.INTEGER="INTEGER",n.BOOLEAN="BOOLEAN",n.ARRAY="ARRAY",n.OBJECT="OBJECT"})(Xw||(Xw={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class qo extends kn{constructor(e,t){super(e),this.response=t}}class Jw extends kn{constructor(e,t,s,a){super(e),this.status=t,this.statusText=s,this.errorDetails=a}}class Ud extends kn{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fj="https://generativelanguage.googleapis.com",mj="v1beta",pj="0.12.0",gj="genai-js";var Ka;(function(n){n.GENERATE_CONTENT="generateContent",n.STREAM_GENERATE_CONTENT="streamGenerateContent",n.COUNT_TOKENS="countTokens",n.EMBED_CONTENT="embedContent",n.BATCH_EMBED_CONTENTS="batchEmbedContents"})(Ka||(Ka={}));class pI{constructor(e,t,s,a,l){this.model=e,this.task=t,this.apiKey=s,this.stream=a,this.requestOptions=l}toString(){var e,t;const s=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||mj;let l=`${((t=this.requestOptions)===null||t===void 0?void 0:t.baseUrl)||fj}/${s}/${this.model}:${this.task}`;return this.stream&&(l+="?alt=sse"),l}}function _j(n){const e=[];return n!=null&&n.apiClient&&e.push(n.apiClient),e.push(`${gj}/${pj}`),e.join(" ")}async function yj(n){const e=new Headers;e.append("Content-Type","application/json"),e.append("x-goog-api-client",_j(n.requestOptions)),e.append("x-goog-api-key",n.apiKey);let t=n.requestOptions.customHeaders;if(t){if(!(t instanceof Headers))try{t=new Headers(t)}catch(s){throw new Ud(`unable to convert customHeaders value ${JSON.stringify(t)} to Headers: ${s.message}`)}for(const[s,a]of t.entries()){if(s==="x-goog-api-key")throw new Ud(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new Ud(`Header name ${s} can only be set using the apiClient field`);e.append(s,a)}}return e}async function vj(n,e,t,s,a,l){const u=new pI(n,e,t,s,l);return{url:u.toString(),fetchOptions:Object.assign(Object.assign({},Tj(l)),{method:"POST",headers:await yj(u),body:a})}}async function Fu(n,e,t,s,a,l){return Ej(n,e,t,s,a,l,fetch)}async function Ej(n,e,t,s,a,l,u=fetch){const f=new pI(n,e,t,s,l);let p;try{const g=await vj(n,e,t,s,a,l);if(p=await u(g.url,g.fetchOptions),!p.ok){let E="",b;try{const S=await p.json();E=S.error.message,S.error.details&&(E+=` ${JSON.stringify(S.error.details)}`,b=S.error.details)}catch{}throw new Jw(`Error fetching from ${f.toString()}: [${p.status} ${p.statusText}] ${E}`,p.status,p.statusText,b)}}catch(g){let E=g;throw g instanceof Jw||g instanceof Ud||(E=new kn(`Error fetching from ${f.toString()}: ${g.message}`),E.stack=g.stack),E}return p}function Tj(n){const e={};if((n==null?void 0:n.timeout)>=0){const t=new AbortController,s=t.signal;setTimeout(()=>t.abort(),n.timeout),e.signal=s}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(n){return n.text=()=>{if(n.candidates&&n.candidates.length>0){if(n.candidates.length>1&&console.warn(`This response had ${n.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),zd(n.candidates[0]))throw new qo(`${Ir(n)}`,n);return bj(n)}else if(n.promptFeedback)throw new qo(`Text not available. ${Ir(n)}`,n);return""},n.functionCall=()=>{if(n.candidates&&n.candidates.length>0){if(n.candidates.length>1&&console.warn(`This response had ${n.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),zd(n.candidates[0]))throw new qo(`${Ir(n)}`,n);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Zw(n)[0]}else if(n.promptFeedback)throw new qo(`Function call not available. ${Ir(n)}`,n)},n.functionCalls=()=>{if(n.candidates&&n.candidates.length>0){if(n.candidates.length>1&&console.warn(`This response had ${n.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),zd(n.candidates[0]))throw new qo(`${Ir(n)}`,n);return Zw(n)}else if(n.promptFeedback)throw new qo(`Function call not available. ${Ir(n)}`,n)},n}function bj(n){var e,t,s,a;const l=[];if(!((t=(e=n.candidates)===null||e===void 0?void 0:e[0].content)===null||t===void 0)&&t.parts)for(const u of(a=(s=n.candidates)===null||s===void 0?void 0:s[0].content)===null||a===void 0?void 0:a.parts)u.text&&l.push(u.text);return l.length>0?l.join(""):""}function Zw(n){var e,t,s,a;const l=[];if(!((t=(e=n.candidates)===null||e===void 0?void 0:e[0].content)===null||t===void 0)&&t.parts)for(const u of(a=(s=n.candidates)===null||s===void 0?void 0:s[0].content)===null||a===void 0?void 0:a.parts)u.functionCall&&l.push(u.functionCall);if(l.length>0)return l}const wj=[Sf.RECITATION,Sf.SAFETY];function zd(n){return!!n.finishReason&&wj.includes(n.finishReason)}function Ir(n){var e,t,s;let a="";if((!n.candidates||n.candidates.length===0)&&n.promptFeedback)a+="Response was blocked",!((e=n.promptFeedback)===null||e===void 0)&&e.blockReason&&(a+=` due to ${n.promptFeedback.blockReason}`),!((t=n.promptFeedback)===null||t===void 0)&&t.blockReasonMessage&&(a+=`: ${n.promptFeedback.blockReasonMessage}`);else if(!((s=n.candidates)===null||s===void 0)&&s[0]){const l=n.candidates[0];zd(l)&&(a+=`Candidate was blocked due to ${l.finishReason}`,l.finishMessage&&(a+=`: ${l.finishMessage}`))}return a}function wu(n){return this instanceof wu?(this.v=n,this):new wu(n)}function Sj(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=t.apply(n,e||[]),a,l=[];return a={},u("next"),u("throw"),u("return"),a[Symbol.asyncIterator]=function(){return this},a;function u(S){s[S]&&(a[S]=function(M){return new Promise(function(H,$){l.push([S,M,H,$])>1||f(S,M)})})}function f(S,M){try{p(s[S](M))}catch(H){b(l[0][3],H)}}function p(S){S.value instanceof wu?Promise.resolve(S.value.v).then(g,E):b(l[0][2],S)}function g(S){f("next",S)}function E(S){f("throw",S)}function b(S,M){S(M),l.shift(),l.length&&f(l[0][0],l[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Aj(n){const e=n.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),t=Ij(e),[s,a]=t.tee();return{stream:Cj(s),response:xj(a)}}async function xj(n){const e=[],t=n.getReader();for(;;){const{done:s,value:a}=await t.read();if(s)return Jy(Rj(e));e.push(a)}}function Cj(n){return Sj(this,arguments,function*(){const t=n.getReader();for(;;){const{value:s,done:a}=yield wu(t.read());if(a)break;yield yield wu(Jy(s))}})}function Ij(n){const e=n.getReader();return new ReadableStream({start(s){let a="";return l();function l(){return e.read().then(({value:u,done:f})=>{if(f){if(a.trim()){s.error(new kn("Failed to parse stream"));return}s.close();return}a+=u;let p=a.match(eS),g;for(;p;){try{g=JSON.parse(p[1])}catch{s.error(new kn(`Error parsing JSON response: "${p[1]}"`));return}s.enqueue(g),a=a.substring(p[0].length),p=a.match(eS)}return l()})}}})}function Rj(n){const e=n[n.length-1],t={promptFeedback:e==null?void 0:e.promptFeedback};for(const s of n)if(s.candidates)for(const a of s.candidates){const l=a.index;if(t.candidates||(t.candidates=[]),t.candidates[l]||(t.candidates[l]={index:a.index}),t.candidates[l].citationMetadata=a.citationMetadata,t.candidates[l].finishReason=a.finishReason,t.candidates[l].finishMessage=a.finishMessage,t.candidates[l].safetyRatings=a.safetyRatings,a.content&&a.content.parts){t.candidates[l].content||(t.candidates[l].content={role:a.content.role||"user",parts:[]});const u={};for(const f of a.content.parts)f.text&&(u.text=f.text),f.functionCall&&(u.functionCall=f.functionCall),Object.keys(u).length===0&&(u.text=""),t.candidates[l].content.parts.push(u)}}return t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gI(n,e,t,s){const a=await Fu(e,Ka.STREAM_GENERATE_CONTENT,n,!0,JSON.stringify(t),s);return Aj(a)}async function _I(n,e,t,s){const l=await(await Fu(e,Ka.GENERATE_CONTENT,n,!1,JSON.stringify(t),s)).json();return{response:Jy(l)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(n){if(n!=null){if(typeof n=="string")return{role:"system",parts:[{text:n}]};if(n.text)return{role:"system",parts:[n]};if(n.parts)return n.role?n:{role:"system",parts:n.parts}}}function Af(n){let e=[];if(typeof n=="string")e=[{text:n}];else for(const t of n)typeof t=="string"?e.push({text:t}):e.push(t);return Nj(e)}function Nj(n){const e={role:"user",parts:[]},t={role:"function",parts:[]};let s=!1,a=!1;for(const l of n)"functionResponse"in l?(t.parts.push(l),a=!0):(e.parts.push(l),s=!0);if(s&&a)throw new kn("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!a)throw new kn("No content is provided for sending chat message.");return s?e:t}function Og(n){let e;return n.contents?e=n:e={contents:[Af(n)]},n.systemInstruction&&(e.systemInstruction=yI(n.systemInstruction)),e}function Oj(n){return typeof n=="string"||Array.isArray(n)?{content:Af(n)}:n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=["text","inlineData","functionCall","functionResponse"],Dj={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall"],system:["text"]};function kj(n){let e=!1;for(const t of n){const{role:s,parts:a}=t;if(!e&&s!=="user")throw new kn(`First content should be with role 'user', got ${s}`);if(!qw.includes(s))throw new kn(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(qw)}`);if(!Array.isArray(a))throw new kn("Content should have 'parts' property with an array of Parts");if(a.length===0)throw new kn("Each Content should have at least one part");const l={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0};for(const f of a)for(const p of tS)p in f&&(l[p]+=1);const u=Dj[s];for(const f of tS)if(!u.includes(f)&&l[f]>0)throw new kn(`Content with role '${s}' can't contain '${f}' part`);e=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="SILENT_ERROR";class Mj{constructor(e,t,s,a){this.model=t,this.params=s,this.requestOptions=a,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,s!=null&&s.history&&(kj(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var t,s,a,l,u;await this._sendPromise;const f=Af(e),p={safetySettings:(t=this.params)===null||t===void 0?void 0:t.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(a=this.params)===null||a===void 0?void 0:a.tools,toolConfig:(l=this.params)===null||l===void 0?void 0:l.toolConfig,systemInstruction:(u=this.params)===null||u===void 0?void 0:u.systemInstruction,contents:[...this._history,f]};let g;return this._sendPromise=this._sendPromise.then(()=>_I(this._apiKey,this.model,p,this.requestOptions)).then(E=>{var b;if(E.response.candidates&&E.response.candidates.length>0){this._history.push(f);const S=Object.assign({parts:[],role:"model"},(b=E.response.candidates)===null||b===void 0?void 0:b[0].content);this._history.push(S)}else{const S=Ir(E.response);S&&console.warn(`sendMessage() was unsuccessful. ${S}. Inspect response object for details.`)}g=E}),await this._sendPromise,g}async sendMessageStream(e){var t,s,a,l,u;await this._sendPromise;const f=Af(e),p={safetySettings:(t=this.params)===null||t===void 0?void 0:t.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(a=this.params)===null||a===void 0?void 0:a.tools,toolConfig:(l=this.params)===null||l===void 0?void 0:l.toolConfig,systemInstruction:(u=this.params)===null||u===void 0?void 0:u.systemInstruction,contents:[...this._history,f]},g=gI(this._apiKey,this.model,p,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>g).catch(E=>{throw new Error(nS)}).then(E=>E.response).then(E=>{if(E.candidates&&E.candidates.length>0){this._history.push(f);const b=Object.assign({},E.candidates[0].content);b.role||(b.role="model"),this._history.push(b)}else{const b=Ir(E);b&&console.warn(`sendMessageStream() was unsuccessful. ${b}. Inspect response object for details.`)}}).catch(E=>{E.message!==nS&&console.error(E)}),g}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pj(n,e,t,s){return(await Fu(e,Ka.COUNT_TOKENS,n,!1,JSON.stringify(Object.assign(Object.assign({},t),{model:e})),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lj(n,e,t,s){return(await Fu(e,Ka.EMBED_CONTENT,n,!1,JSON.stringify(t),s)).json()}async function Vj(n,e,t,s){const a=t.requests.map(u=>Object.assign(Object.assign({},u),{model:e}));return(await Fu(e,Ka.BATCH_EMBED_CONTENTS,n,!1,JSON.stringify({requests:a}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jj{constructor(e,t,s){this.apiKey=e,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=yI(t.systemInstruction),this.requestOptions=s||{}}async generateContent(e){const t=Og(e);return _I(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction},t),this.requestOptions)}async generateContentStream(e){const t=Og(e);return gI(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction},t),this.requestOptions)}startChat(e){return new Mj(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction},e),this.requestOptions)}async countTokens(e){const t=Og(e);return Pj(this.apiKey,this.model,t,this.requestOptions)}async embedContent(e){const t=Oj(e);return Lj(this.apiKey,this.model,t,this.requestOptions)}async batchEmbedContents(e){return Vj(this.apiKey,this.model,e,this.requestOptions)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new kn("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new jj(this.apiKey,e,t)}}const Uj=({user:n,userTier:e,onMint:t,walletConnected:s,setView:a})=>{const[l,u]=de.useState(!1),[f,p]=de.useState("empty"),[g,E]=de.useState(0),[b,S]=de.useState(!1),[M,H]=de.useState(!1),[$,J]=de.useState(null),[ee,ce]=de.useState(null),[me,we]=de.useState(!1),[Xe,Se]=de.useState(0),C=de.useRef(null),[x,I]=de.useState(!1),[P,D]=de.useState(""),[V,R]=de.useState(""),[dt,Nt]=de.useState({low:42,mid:68,high:55,gain:50,comp:35}),[K,se]=de.useState(0),[le,Ve]=de.useState({title:"",artist:(n==null?void 0:n.name)||"",type:"music",price:.5,description:""});de.useEffect(()=>{const he=window.SpeechRecognition||window.webkitSpeechRecognition;if(he){const et=new he;return et.continuous=!0,et.interimResults=!1,et.lang="en-US",et.onresult=Je=>{const Ot=Je.results[Je.results.length-1][0].transcript.toLowerCase();D(Ot),Ot.includes("play")&&k(),Ot.includes("stop")&&Y(),Ot.includes("pause")&&Y(),Ot.includes("rewind")&&ie(),Ot.includes("forward")&&re()},x&&et.start(),()=>et.stop()}},[x]);const Qe=he=>{var et,Je;if((et=he.target.files)!=null&&et[0]){p("loading"),E(0);const Ot=he.target.files[0];J(Ot),ce({name:Ot.name,type:((Je=Ot.name.split(".").pop())==null?void 0:Je.toUpperCase())||"UNKNOWN",size:(Ot.size/(1024*1024)).toFixed(2)+" MB"});const Ks=URL.createObjectURL(Ot);C.current&&(C.current.src=Ks);let Di=0;const Ys=setInterval(()=>{Di+=5,E(Di),Di>=100&&(clearInterval(Ys),p("ready"))},30)}},k=()=>{var he;f==="ready"&&(we(!0),Se(0),(he=C.current)==null||he.play())},Y=()=>{var he;we(!1),Se(0),(he=C.current)==null||he.pause()},ie=()=>{f==="ready"&&(we(!1),Se(-5),C.current&&(C.current.currentTime=Math.max(0,C.current.currentTime-10)),setTimeout(()=>Se(0),500))},re=()=>{f==="ready"&&(we(!1),Se(5),C.current&&(C.current.currentTime=Math.min(C.current.duration||0,C.current.currentTime+10)),setTimeout(()=>Se(0),500))},be=async()=>{if(n){u(!0);try{const he=await dj.mintAsset(n.id,{title:le.title,artist:le.artist,price:le.price,type:le.type,imageUrl:`https://picsum.photos/600/600?random=${Math.random()}`,description:le.description});t(he),H(!0),setTimeout(()=>H(!1),5e3)}catch(he){alert(he.message)}finally{u(!1)}}},xe=(ee==null?void 0:ee.type)==="WAV"||(ee==null?void 0:ee.type)==="FLAC"||(ee==null?void 0:ee.type)==="AIFF";return _.jsxs("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-in pb-32",children:[_.jsx("audio",{ref:C,onEnded:Y,hidden:!0}),_.jsxs("header",{className:"border-b border-black/10 dark:border-white/10 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4",children:[_.jsxs("div",{children:[_.jsxs("h2",{className:"text-4xl sm:text-6xl font-black text-black dark:text-white uppercase tracking-tighter italic",children:["NFT ",_.jsx("span",{className:"text-latitude-red",children:"Studio"})]}),_.jsx("p",{className:"text-gray-500 text-xs sm:text-sm font-bold uppercase tracking-widest mt-2",children:"Sovereign Mastering Protocol"})]}),_.jsxs("div",{className:"flex flex-col items-start sm:items-end gap-2",children:[_.jsx("button",{onClick:()=>a(ge.HOME),className:"text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-latitude-red transition-colors",children:"Back to Home"}),_.jsxs("button",{onClick:()=>I(!x),className:`flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl border transition-all ${x?"border-latitude-red text-latitude-red bg-latitude-red/10 animate-pulse":"border-black/10 text-gray-500 bg-white/40 dark:bg-black/40 hover:border-latitude-red"}`,children:[_.jsx("span",{className:"text-[9px] sm:text-[10px] font-black uppercase tracking-widest",children:x?"Voice Engine Engaged":"Initialize Voice Commands"}),_.jsxs("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:[_.jsx("path",{d:"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"}),_.jsx("path",{d:"M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"})]})]}),x&&P&&_.jsxs("span",{className:"text-[9px] font-mono text-latitude-red uppercase animate-fade-in italic",children:['Heard: "',P,'"']})]})]}),_.jsxs("div",{className:"grid lg:grid-cols-12 gap-8",children:[_.jsxs("div",{className:"lg:col-span-8 space-y-8",children:[_.jsx("div",{className:"bg-white dark:bg-[#0f0f0f] border-x-4 border-latitude-solana/20 p-5 rounded-lg flex items-center justify-between shadow-xl border border-black/5 dark:border-white/5",children:_.jsxs("div",{className:"flex items-center gap-6",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("div",{className:"w-3 h-3 bg-latitude-solana rounded-full shadow-[0_0_12px_#14F195] animate-pulse"}),_.jsxs("div",{className:"flex flex-col",children:[_.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest text-latitude-solana leading-none",children:"Compute Node: Active"}),_.jsx("span",{className:"text-[8px] font-mono text-gray-500 mt-1",children:"Sovereign Rack #04"})]})]}),_.jsx("div",{className:"h-8 w-px bg-black/10 dark:bg-white/10"}),_.jsxs("div",{className:"flex flex-col",children:[_.jsx("span",{className:"text-[9px] font-black uppercase tracking-widest text-black dark:text-white italic",children:"Tesla T4 Accelerated"}),_.jsx("span",{className:"text-[7px] font-mono text-latitude-teal uppercase",children:"AI Rendering Enclave"})]})]})}),_.jsxs("div",{className:"bg-vst border-x-4 border-gray-800 rounded-lg relative overflow-hidden shadow-2xl",children:[_.jsxs("div",{className:"bg-[#222] border-b border-black/60 p-4 flex justify-between items-center px-8",children:[_.jsx("span",{className:"text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]",children:"Signal Ingestion"}),_.jsxs("div",{className:"flex gap-2",children:[_.jsx("div",{className:"w-2 h-2 rounded-full bg-latitude-solana"}),_.jsx("div",{className:"w-2 h-2 rounded-full bg-latitude-red"})]})]}),_.jsx("div",{className:"p-10 flex flex-col md:flex-row items-center gap-10 bg-gradient-to-b from-[#1a1a1a] to-[#121212]",children:_.jsxs("div",{className:"flex-1 space-y-6",children:[_.jsxs("div",{className:"space-y-2",children:[_.jsxs("h3",{className:"text-xl font-black text-white uppercase tracking-tighter italic",children:["Source ",_.jsx("span",{className:"text-latitude-red",children:"Frequency"})]}),_.jsx("p",{className:"text-[9px] text-gray-500 uppercase font-bold tracking-widest",children:"Master Studio Quality (WAV/FLAC)"})]}),_.jsxs("div",{className:"flex flex-wrap items-center gap-6",children:[_.jsx("input",{type:"file",onChange:Qe,className:"hidden",id:"master-file",accept:"audio/*"}),_.jsx("label",{htmlFor:"master-file",className:"px-10 py-5 bg-latitude-red text-white font-black uppercase text-xs rounded-sm cursor-pointer hover:bg-red-600 transition-all shadow-xl border-b-4 border-black/40",children:$?`Loaded: ${$.name}`:"Inject Signal"}),ee&&_.jsxs("div",{className:"flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5",children:[_.jsxs("div",{className:`px-3 py-1 rounded font-black text-[10px] uppercase ${xe?"bg-latitude-solana text-black":"bg-latitude-blue text-white"}`,children:[ee.type," ",xe&&"Hi-Fi"]}),_.jsx("span",{className:"text-[10px] font-mono text-gray-500 uppercase",children:ee.size})]})]})]})})]}),_.jsxs("div",{className:"bg-[#111] border-4 border-gray-800 rounded-xl h-auto sm:h-[450px] relative overflow-hidden flex flex-col items-center p-4 sm:p-8 shadow-inner shadow-black",children:[_.jsx("div",{className:"absolute top-4 left-6 text-[9px] font-black text-gray-700 uppercase tracking-[0.5em]",children:"Latitude Transport Engine"}),_.jsx("div",{className:"flex-1 w-full cassette-glow relative min-h-[150px] sm:min-h-0",children:f==="empty"&&_.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-10",children:_.jsx("span",{className:"px-8 py-3 bg-black/60 border border-white/10 text-white/20 text-xs font-black uppercase tracking-[0.6em] backdrop-blur-sm",children:"AWAITING_SIGNAL"})})}),_.jsx("div",{className:"flex items-end gap-2 bg-[#181818] p-4 sm:p-6 rounded-t-3xl border-x-2 border-t-2 border-white/5 w-full max-w-xl shadow-2xl relative mt-4",children:_.jsx("div",{className:"flex-1 grid grid-cols-4 gap-2",children:[{label:"RW",action:ie,icon:"⏪"},{label:"STOP",action:Y,icon:"■",active:!me&&Xe===0},{label:"PLAY",action:k,icon:"▶",active:me},{label:"FF",action:re,icon:"⏩"}].map(he=>_.jsxs("button",{onClick:he.action,className:`h-16 flex flex-col items-center justify-center rounded-sm transition-all border-b-4 ${he.active?"bg-latitude-red border-red-900 text-white shadow-inner scale-95":"bg-[#2a2a2a] border-black hover:bg-[#333] text-gray-500 hover:text-white"}`,children:[_.jsx("span",{className:"text-lg mb-1",children:he.icon}),_.jsx("span",{className:"text-[8px] font-black uppercase tracking-widest",children:he.label})]},he.label))})})]})]}),_.jsx("div",{className:"lg:col-span-4 space-y-8",children:_.jsxs("div",{className:"bg-white dark:bg-[#111] p-6 sm:p-10 rounded-xl border border-black/5 dark:border-white/5 space-y-8 sm:space-y-10 shadow-xl sticky top-8",children:[_.jsx("div",{className:"border-b border-black/10 dark:border-white/10 pb-6",children:_.jsxs("h3",{className:"text-3xl font-black text-black dark:text-white uppercase tracking-tighter italic leading-none",children:["Deploy ",_.jsx("span",{className:"text-latitude-red",children:"Data"})]})}),_.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[_.jsxs("div",{children:[_.jsx("label",{className:"block text-[10px] font-black text-gray-500 mb-3 uppercase tracking-widest",children:"Signal Designation"}),_.jsx("input",{className:"w-full bg-gray-50 dark:bg-black border border-black/10 dark:border-white/10 p-4 sm:p-5 rounded-sm text-black dark:text-white focus:border-latitude-red focus:outline-none transition-all font-mono text-sm",value:le.title,onChange:he=>Ve({...le,title:he.target.value}),placeholder:"SIGNAL_UID"})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-[10px] font-black text-gray-500 mb-3 uppercase tracking-widest",children:"Metadata"}),_.jsx("textarea",{className:"w-full bg-gray-50 dark:bg-black border border-black/10 dark:border-white/10 p-4 sm:p-5 rounded-sm text-black dark:text-white focus:border-latitude-red focus:outline-none transition-all text-sm h-36 sm:h-48 font-mono",value:le.description,onChange:he=>Ve({...le,description:he.target.value}),placeholder:"Signal footprint..."})]}),_.jsx("button",{onClick:be,disabled:l||f!=="ready",className:"w-full py-6 sm:py-7 bg-latitude-red text-white font-black uppercase tracking-[0.5em] rounded-sm shadow-2xl hover:bg-black transition-all disabled:opacity-30 border-b-4 border-red-950 text-xs",children:l?"DEPLOYING...":"COMMIT TO NETWORK"})]})]})})]})]})},zj=new vI("AIzaSyAVbuN7R8uaBllKyqn899-5NWouROpG100"),Fj=async(n,e)=>{try{const t=zj.getGenerativeModel({model:"gemini-1.5-flash"}),a=`You are "Latitude_AI", a cool, knowledgeable DJ and moderator in a decentralized music chatroom. 
      Keep responses brief, hype up the music, and be helpful.
      
      Recent Chat Context:
      ${n.map(p=>`${p.user}: ${p.text}`).join(`
`)}
      
      User said: ${e}
      
      Respond as Latitude_AI:`;return(await(await t.generateContent(a)).response).text()||"..."}catch(t){return console.error("Gemini Chat Error:",t),"Connection interrupted."}},iS=["Global Lounge","Synth Club","Video Art","Cougar Den"],Bj=({user:n,setView:e})=>{const[t,s]=de.useState(iS[0]),[a,l]=de.useState([{id:"1",user:"System",text:"Welcome to the Latitude Global Lounge.",timestamp:Date.now(),isSystem:!0},{id:"2",user:"Latitude_AI",text:"I am your AI host. What are we listening to tonight?",timestamp:Date.now(),isSystem:!0}]),[u,f]=de.useState(""),[p,g]=de.useState(!1),[E,b]=de.useState(["Neon Odyssey - Sol-Runner","Protocol Zero - Shadow Studio"]),[S,M]=de.useState(""),H=de.useRef(null);de.useEffect(()=>{var ee;(ee=H.current)==null||ee.scrollIntoView({behavior:"smooth"})},[a]);const $=async ee=>{if(ee.preventDefault(),!u.trim())return;const ce={id:Date.now().toString(),user:(n==null?void 0:n.name)||"Explorer",text:u,timestamp:Date.now()};l(we=>[...we,ce]),f(""),g(!0);const me=a.slice(-5).map(we=>({user:we.user,text:we.text}));setTimeout(async()=>{const we=await Fj(me,ce.text),Xe={id:(Date.now()+1).toString(),user:"Latitude_AI",text:we,timestamp:Date.now(),isSystem:!0};l(Se=>[...Se,Xe]),g(!1)},1500)},J=ee=>{if(ee.preventDefault(),!!S.trim()){if((n==null?void 0:n.tier)!==Gn.FAN_CLUB&&(n==null?void 0:n.tier)!==Gn.LABEL_EXEC&&(n==null?void 0:n.tier)!==Gn.DJ_PRO){alert("AI Playlist access requires a Fan Club membership ($9.99)!");return}b(ce=>[...ce,S]),M("")}};return _.jsxs("div",{className:"h-full flex flex-col md:flex-row gap-6 animate-fade-in p-4 sm:p-6 lg:p-8 bg-white dark:bg-black transition-colors",children:[_.jsx("button",{onClick:()=>e(ge.HOME),className:"absolute top-4 left-4 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-latitude-red transition-colors",children:"Back to Home"}),_.jsxs("div",{className:"w-full md:w-72 flex-shrink-0 space-y-6",children:[_.jsxs("div",{children:[_.jsx("h3",{className:"text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4",children:"Frequency Channels"}),_.jsx("div",{className:"space-y-2",children:iS.map(ee=>_.jsxs("button",{onClick:()=>s(ee),className:`w-full text-left px-5 py-4 border text-[11px] font-black uppercase tracking-[0.2em] transition-all rounded-xl ${t===ee?"border-latitude-red bg-latitude-red/10 text-latitude-red shadow-lg":"border-black/5 dark:border-white/5 text-gray-500 hover:text-black dark:hover:text-white bg-black/5 dark:bg-white/5"}`,children:["# ",ee]},ee))})]}),_.jsxs("div",{className:"p-6 bg-black/5 dark:bg-[#0c0c0c] border border-black/10 dark:border-white/10 rounded-3xl relative overflow-hidden group shadow-xl",children:[_.jsx("h4",{className:"text-[9px] font-black text-latitude-red mb-3 uppercase tracking-widest flex items-center gap-2 italic",children:"AI Playlist Core"}),_.jsx("div",{className:"space-y-3 mb-6",children:E.map((ee,ce)=>_.jsx("div",{className:"text-[10px] text-black dark:text-gray-300 font-mono tracking-tighter truncate border-l-2 border-latitude-red pl-2",children:ee},ce))}),_.jsxs("form",{onSubmit:J,className:"space-y-2",children:[_.jsx("input",{type:"text",value:S,onChange:ee=>M(ee.target.value),placeholder:"Queue track...",className:"w-full bg-white dark:bg-black border border-black/10 dark:border-white/10 p-3 text-[9px] rounded-lg outline-none text-black dark:text-white"}),_.jsx("button",{className:"w-full py-2 bg-black dark:bg-white text-white dark:text-black text-[8px] font-black uppercase rounded-lg shadow-lg",children:"Inject Frequency"})]}),(n==null?void 0:n.tier)!==Gn.FAN_CLUB&&_.jsx("p",{className:"mt-4 text-[7px] text-gray-500 uppercase text-center font-bold tracking-widest",children:"Locked: Join Fan Club"})]})]}),_.jsxs("div",{className:"flex-1 flex flex-col border border-black/10 dark:border-white/10 bg-black/5 dark:bg-[#080808] rounded-[40px] overflow-hidden shadow-2xl relative h-[calc(100vh - 12rem)] md:h-auto",children:[_.jsx("div",{className:"p-6 border-b border-black/5 dark:border-white/5 bg-white/60 dark:bg-black/60 backdrop-blur-xl",children:_.jsxs("div",{className:"flex flex-col",children:[_.jsxs("h2",{className:"font-black text-xl text-black dark:text-white uppercase italic tracking-tighter",children:["#",t]}),_.jsx("p",{className:"text-[9px] text-gray-600 uppercase tracking-widest font-black",children:"Sync Frequency: Live"})]})}),_.jsxs("div",{className:"flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar",children:[a.map(ee=>_.jsxs("div",{className:`flex flex-col ${ee.user===(n==null?void 0:n.name)||ee.user==="You"?"items-end":"items-start"}`,children:[_.jsx("div",{className:"flex items-center gap-2 mb-2",children:_.jsx("span",{className:`text-[10px] font-black uppercase tracking-widest ${ee.isSystem?"text-latitude-red":"text-gray-500"}`,children:ee.user})}),_.jsx("div",{className:`max-w-[75%] p-4 text-sm border shadow-xl rounded-2xl transition-all ${ee.user===(n==null?void 0:n.name)||ee.user==="You"?"border-latitude-red/20 bg-latitude-red text-white":ee.isSystem?"border-latitude-red/10 bg-latitude-red/5 text-latitude-red italic":"border-black/5 dark:border-white/5 bg-white dark:bg-black/40 text-black dark:text-gray-300"}`,children:ee.text})]},ee.id)),_.jsx("div",{ref:H})]}),_.jsxs("form",{onSubmit:$,className:"p-6 bg-white/60 dark:bg-black/60 backdrop-blur-xl border-t border-black/10 dark:border-white/10 flex gap-4",children:[_.jsx("input",{type:"text",value:u,onChange:ee=>f(ee.target.value),className:"flex-1 bg-white dark:bg-black border border-black/10 dark:border-white/10 p-5 text-black dark:text-white font-mono text-xs focus:outline-none focus:border-latitude-red transition-all rounded-2xl placeholder:text-gray-400",placeholder:"Message lounge..."}),_.jsx("button",{type:"submit",className:"px-10 bg-latitude-red text-white font-black uppercase tracking-widest text-[10px] rounded-2xl shadow-xl border-b-4 border-red-950",children:"Send"})]})]})]})},Hj=({user:n,nfts:e,onUpdateProfile:t,setView:s})=>{const[a,l]=de.useState("COLLECTION");if(!n)return null;const u=e.filter(p=>p.ownerId===n.id||p.creatorId===n.id),f=()=>_.jsxs("div",{className:"bg-[#0a0a0a] border border-white/10 rounded-xl p-6 mt-8",children:[_.jsx("h2",{className:"text-xl font-bold mb-4",children:"Admin Panel"}),_.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[_.jsx("button",{onClick:()=>s(ge.BACKSTAGE),className:"admin-btn",children:"Backstage"}),_.jsx("button",{onClick:()=>s(ge.MINTING),className:"admin-btn",children:"Minting"}),_.jsx("button",{onClick:()=>s(ge.HELP),className:"admin-btn",children:"Help"}),_.jsx("button",{onClick:()=>s(ge.SOCIAL),className:"admin-btn",children:"Social"})]})]});return _.jsxs("div",{className:"min-h-screen bg-black text-white font-mono p-4 sm:p-6 lg:p-8",children:[_.jsx("button",{onClick:()=>s(ge.HOME),className:"absolute top-4 right-4 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-latitude-red transition-colors z-10",children:"Close"}),_.jsxs("div",{className:"flex flex-col lg:flex-row gap-8 mt-12",children:[_.jsxs("aside",{className:"lg:w-1/3 xl:w-1/4 flex-shrink-0",children:[_.jsxs("div",{className:"bg-[#0a0a0a] border border-white/10 rounded-xl p-6 sticky top-8",children:[_.jsxs("div",{className:"flex flex-col items-center",children:[_.jsx("img",{src:n.avatarUrl,alt:"Avatar",className:"w-32 h-32 rounded-full border-4 border-white/10"}),_.jsx("h1",{className:"mt-4 text-2xl font-bold",children:n.name}),_.jsx("p",{className:"text-sm text-gray-500 truncate w-full text-center",children:n.walletAddress||"0x..."}),_.jsx("p",{className:"mt-4 text-center text-sm text-gray-400",children:n.bio})]}),_.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-4 text-center",children:[_.jsxs("div",{className:"bg-black/40 p-3 rounded-lg",children:[_.jsx("p",{className:"text-xs text-gray-500",children:"Holdings"}),_.jsx("p",{className:"text-lg font-bold",children:u.length})]}),_.jsxs("div",{className:"bg-black/40 p-3 rounded-lg",children:[_.jsx("p",{className:"text-xs text-gray-500",children:"Net Value"}),_.jsxs("p",{className:"text-lg font-bold",children:[u.reduce((p,g)=>p+g.price,0).toFixed(2)," SOL"]})]}),_.jsxs("div",{className:"bg-black/40 p-3 rounded-lg",children:[_.jsx("p",{className:"text-xs text-gray-500",children:"Rank"}),_.jsx("p",{className:"text-lg font-bold",children:"#14"})]}),_.jsxs("div",{className:"bg-black/40 p-3 rounded-lg",children:[_.jsx("p",{className:"text-xs text-gray-500",children:"Tier"}),_.jsx("p",{className:"text-lg font-bold",children:n.tier})]})]}),_.jsx("button",{className:"mt-6 w-full py-3 bg-latitude-red text-white font-black uppercase tracking-widest text-xs rounded-lg hover:bg-red-600 transition-all",children:"Initiate Trade"})]}),n.isAdmin&&_.jsx(f,{})]}),_.jsxs("main",{className:"flex-1",children:[_.jsx("nav",{className:"flex space-x-2 sm:space-x-4 border-b border-white/10 mb-8",children:["COLLECTION","ACTIVITY","FAVORITES","ARCHIVE"].map(p=>_.jsx("button",{onClick:()=>l(p),className:`px-3 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors ${a===p?"text-latitude-red border-b-2 border-latitude-red":"text-gray-500 hover:text-white"}`,children:p},p))}),_.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",children:u.map(p=>_.jsxs("div",{className:"bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden group transition-all hover:border-latitude-red/50 hover:shadow-2xl hover:shadow-latitude-red/10",children:[_.jsxs("div",{className:"relative aspect-square",children:[_.jsx("img",{src:p.imageUrl,alt:p.title,className:"w-full h-full object-cover"}),_.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"})]}),_.jsx("div",{className:"p-4",children:_.jsxs("div",{className:"flex justify-between items-start",children:[_.jsxs("div",{children:[_.jsxs("p",{className:"text-xs text-gray-400",children:[p.type," // ",p.id]}),_.jsx("h3",{className:"font-bold text-lg text-white",children:p.title})]}),_.jsxs("div",{className:"text-right",children:[_.jsx("p",{className:"text-xs text-gray-400",children:"Last"}),_.jsxs("p",{className:"font-bold text-lg text-latitude-solana",children:[p.price," SOL"]})]})]})})]},p.id))})]})]})]})},Ad=({setView:n})=>{const[e,t]=de.useState(!0);de.useEffect(()=>{const a=l=>{const u=(l.clientX/window.innerWidth-.5)*20,f=(l.clientY/window.innerHeight-.5)*20,p=document.querySelector(".brand-h1");p&&(p.style.transform=`translate3d(${u}px, ${f}px, 0)`)};return document.addEventListener("mousemove",a),()=>{document.removeEventListener("mousemove",a)}},[]);const s=a=>{a.preventDefault();const l=a.target.querySelector(".btn-primary");l&&(l.innerHTML=e?"VALIDATING...":"GENERATING...",l.style.backgroundColor="#000",l.style.color="#ff0000",l.style.border="1px solid #ff0000",setTimeout(()=>{l.innerHTML="ACCESS GRANTED",l.style.boxShadow="0 0 50px #ff0000",setTimeout(()=>n(ge.PROFILE),1e3)},1500))};return _.jsxs(_.Fragment,{children:[_.jsx("style",{children:`
        :root {
            --obsidian: #050505;
            --magma: #ff0000;
            --magma-dim: #5c0000;
            --glass: rgba(10, 10, 10, 0.8);
            --fissure-glow: drop-shadow(0 0 8px rgba(255, 0, 0, 0.4));
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            cursor: crosshair;
        }
        .auth-body {
            background-color: var(--obsidian);
            color: white;
            font-family: 'Inter', sans-serif;
            overflow: hidden;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .grain-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 100;
            opacity: 0.04;
        }
        .fissure-container {
            position: relative;
            width: 100vw;
            height: 100vh;
            display: grid;
            grid-template-columns: 1fr 1fr;
            background: 
                radial-gradient(circle at 70% 50%, var(--magma-dim) 0%, transparent 60%),
                linear-gradient(135deg, #0a0a0a 0%, #000 100%);
        }
        .plate-left {
            position: relative;
            padding: 4rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 2;
            clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
            background: var(--obsidian);
            border-right: 2px solid var(--magma);
            box-shadow: 20px 0 80px rgba(0,0,0,0.8);
            animation: plateShift 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes plateShift {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
        }
        .brand-h1 {
            font-size: clamp(3rem, 8vw, 10rem);
            line-height: 0.85;
            letter-spacing: -0.05em;
            margin-bottom: 1rem;
            text-transform: uppercase;
            font-weight: 900;
            filter: var(--fissure-glow);
        }
        .brand-sub {
            font-family: 'Space Mono', monospace;
            font-size: 0.75rem;
            letter-spacing: 0.5em;
            color: var(--magma);
            text-transform: uppercase;
            opacity: 0;
            animation: fadeIn 1s 0.8s forwards;
        }
        .plate-right {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4rem;
        }
        .auth-portal {
            width: 100%;
            max-width: 420px;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeIn 1.5s 0.5s forwards;
        }
        @keyframes fadeIn {
            to { opacity: 1; transform: translateY(0); }
        }
        .input-group {
            position: relative;
            margin-bottom: 2.5rem;
        }
        .input-group label {
            font-family: 'Space Mono', monospace;
            font-size: 0.65rem;
            color: #666;
            text-transform: uppercase;
            display: block;
            margin-bottom: 0.5rem;
            transition: color 0.3s;
        }
        input {
            width: 100%;
            background: transparent;
            border: none;
            border-bottom: 1px solid #333;
            padding: 1rem 0;
            color: white;
            font-family: 'Space Mono', monospace;
            font-size: 1rem;
            outline: none;
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        input:focus {
            border-bottom-color: var(--magma);
            padding-left: 10px;
        }
        input:focus + label {
            color: var(--magma);
        }
        .magma-line {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 1px;
            width: 0;
            background: var(--magma);
            transition: width 0.4s ease;
            box-shadow: 0 0 10px var(--magma);
        }
        input:focus ~ .magma-line {
            width: 100%;
        }
        .actions {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin-top: 4rem;
        }
        .btn-primary {
            background: var(--magma);
            color: white;
            border: none;
            padding: 1.5rem;
            font-family: 'Space Mono', monospace;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            position: relative;
            overflow: hidden;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover {
            transform: scale(1.02);
            box-shadow: 0 0 30px rgba(255, 0, 0, 0.3);
        }
        .btn-primary::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }
        .btn-primary:hover::after {
            left: 100%;
        }
        .btn-secondary {
            background: transparent;
            color: #666;
            border: 1px solid #333;
            padding: 1rem;
            font-family: 'Space Mono', monospace;
            font-size: 0.7rem;
            text-transform: uppercase;
            transition: all 0.3s;
        }
        .btn-secondary:hover {
            border-color: var(--magma);
            color: white;
        }
        .shard {
            position: absolute;
            background: var(--magma);
            opacity: 0.2;
            pointer-events: none;
        }
        .shard-1 { width: 2px; height: 100px; top: 10%; right: 40%; transform: rotate(45deg); }
        .shard-2 { width: 1px; height: 200px; bottom: 5%; left: 45%; transform: rotate(-15deg); }
        @media (max-width: 900px) {
            .fissure-container { grid-template-columns: 1fr; }
            .plate-left { 
                clip-path: none; 
                border-right: none; 
                border-bottom: 4px solid var(--magma);
                height: 40vh;
                padding: 2rem;
                align-items: center;
                text-align: center;
            }
            .plate-right { height: 60vh; padding: 2rem; }
            .brand-h1 { font-size: 4rem; }
        }
      `}),_.jsxs("div",{className:"auth-body",children:[_.jsx("svg",{className:"absolute w-0 h-0",children:_.jsx("filter",{id:"noiseFilter",children:_.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.65",numOctaves:"3",stitchTiles:"stitch"})})}),_.jsx("div",{className:"grain-overlay",style:{filter:"url(#noiseFilter)"}}),_.jsxs("main",{className:"fissure-container",children:[_.jsxs("section",{className:"plate-left",children:[_.jsx("div",{className:"shard shard-1"}),_.jsx("div",{className:"shard shard-2"}),_.jsx("p",{className:"brand-sub",children:"Creative Sovereignty"}),_.jsx("h1",{className:"brand-h1",children:"LATITUDE"}),_.jsx("p",{className:"brand-sub opacity-40",style:{letterSpacing:"0.1em"},children:"EST. MMXXIV ©"})]}),_.jsx("section",{className:"plate-right",children:_.jsx("div",{className:"auth-portal",children:_.jsxs("form",{onSubmit:s,children:[_.jsxs("div",{className:"input-group",children:[_.jsx("label",{htmlFor:"identity",children:"Sovereign Identity"}),_.jsx("input",{type:"text",id:"identity",placeholder:"EMAIL OR PSEUDONYM",autoComplete:"off"}),_.jsx("div",{className:"magma-line"})]}),_.jsxs("div",{className:"input-group",children:[_.jsx("label",{htmlFor:"key",children:"Access Cipher"}),_.jsx("input",{type:"password",id:"key",placeholder:"••••••••••••",autoComplete:"off"}),_.jsx("div",{className:"magma-line"})]}),_.jsxs("div",{className:"actions",children:[_.jsx("button",{type:"submit",className:"btn-primary",children:e?"Initiate Descent":"Create Sovereign ID"}),_.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>t(!e),children:e?"Request Passage (Register)":"Already have an ID (Login)"}),_.jsx("button",{onClick:()=>n(ge.HOME),className:"btn-secondary",children:"Continue as Guest"})]})]})})})]})]})]})},qj=({setView:n})=>(de.useEffect(()=>{const e=document.querySelector(".lattice-bg"),t=l=>{if(e){const u=l.clientX/window.innerWidth*100,f=l.clientY/window.innerHeight*100;e.style.setProperty("--mouse-x",`${u}%`),e.style.setProperty("--mouse-y",`${f}%`)}};document.addEventListener("mousemove",t);const s=document.querySelectorAll(".lattice-item"),a=new IntersectionObserver(l=>{l.forEach((u,f)=>{u.isIntersecting&&setTimeout(()=>{u.target.style.opacity="1",u.target.style.transform="translateY(0)"},f*100)})},{threshold:.1});return s.forEach(l=>{l.style.opacity="0",l.style.transform="translateY(30px)",l.style.transition="all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",a.observe(l)}),()=>{document.removeEventListener("mousemove",t),s.forEach(l=>a.unobserve(l))}},[]),_.jsxs(_.Fragment,{children:[_.jsx("style",{children:`
        :root {
            --black: #080808;
            --iron-dark: #121212;
            --iron-light: #2a2a2a;
            --blood-red: #ff0000;
            --oxide-red: #8b0000;
            --lattice-opacity: 0.15;
            --transition: cubic-bezier(0.23, 1, 0.32, 1);
        }
        .help-body {
            background-color: var(--black);
            color: white;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
            line-height: 1.4;
        }
        .lattice-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background-image: 
                linear-gradient(var(--iron-light) 1px, transparent 1px),
                linear-gradient(90deg, var(--iron-light) 1px, transparent 1px);
            background-size: 60px 60px;
            opacity: var(--lattice-opacity);
            mask-image: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 80%);
            pointer-events: none;
        }
        .topography {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
            opacity: 0.4;
            background: 
                radial-gradient(circle at 20% 30%, var(--oxide-red) 0%, transparent 40%),
                radial-gradient(circle at 80% 70%, #1a0000 0%, transparent 50%);
            filter: contrast(150%) brightness(50%);
        }
        .noise {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.05;
            pointer-events: none;
            background: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        .help-header {
            padding: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 1px solid var(--iron-light);
        }
        .brand {
            font-weight: 900;
            font-size: 1.5rem;
            letter-spacing: -0.05em;
            text-transform: uppercase;
            display: flex;
            flex-direction: column;
        }
        .brand span:last-child {
            color: var(--blood-red);
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.7rem;
            letter-spacing: 0.5em;
            margin-top: 4px;
        }
        .status-pill {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.65rem;
            padding: 6px 12px;
            border: 1px solid var(--blood-red);
            color: var(--blood-red);
            text-transform: uppercase;
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.4; }
            100% { opacity: 1; }
        }
        .help-main {
            padding: 4rem 2rem;
            max-width: 1400px;
            margin: 0 auto;
        }
        .hero-title {
            font-size: clamp(3rem, 10vw, 8rem);
            line-height: 0.85;
            text-transform: uppercase;
            margin-bottom: 4rem;
            letter-spacing: -0.04em;
            animation: slideUp 1s var(--transition);
        }
        .hero-title-red {
             color: var(--blood-red);
        }
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .search-container {
            position: relative;
            width: 100%;
            max-width: 800px;
            margin-bottom: 8rem;
        }
        .search-input {
            width: 100%;
            background: transparent;
            border: none;
            border-bottom: 2px solid var(--iron-light);
            padding: 1.25rem 0;
            color: white;
            font-size: 1.25rem;
            font-family: 'JetBrains Mono', monospace;
            outline: none;
            transition: border-color 0.4s var(--transition);
        }
        .search-input:focus {
            border-bottom-color: var(--blood-red);
        }
        .search-label {
            position: absolute;
            top: -1.25rem;
            left: 0;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.7rem;
            color: var(--blood-red);
            text-transform: uppercase;
        }
        .lattice-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2px;
            background-color: var(--iron-light);
            border: 1px solid var(--iron-light);
        }
        .lattice-item {
            background-color: var(--black);
            padding: 2.5rem;
            min-height: 350px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: all 0.5s var(--transition);
            position: relative;
            overflow: hidden;
        }
        .lattice-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, var(--blood-red) 0%, transparent 100%);
            opacity: 0;
            transition: opacity 0.5s var(--transition);
            z-index: 0;
        }
        .lattice-item:hover::before {
            opacity: 0.05;
        }
        .lattice-item:hover {
            background-color: #0c0c0c;
        }
        .lattice-item h3 {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.75rem;
            color: var(--blood-red);
            text-transform: uppercase;
            letter-spacing: 0.2em;
            margin-bottom: 1.25rem;
            z-index: 1;
        }
        .lattice-item h2 {
            font-size: 1.75rem;
            text-transform: uppercase;
            font-weight: 900;
            z-index: 1;
            margin-bottom: 0.625rem;
        }
        .lattice-item p {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            color: #888;
            z-index: 1;
        }
        .lattice-link {
            margin-top: auto;
            align-self: flex-start;
            text-decoration: none;
            color: white;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.7rem;
            text-transform: uppercase;
            border-bottom: 1px solid var(--blood-red);
            padding-bottom: 4px;
            z-index: 1;
            transition: padding-right 0.3s var(--transition);
        }
        .lattice-item:hover .lattice-link {
            padding-right: 1.25rem;
            color: var(--blood-red);
        }
        .strata-section {
            margin-top: 8rem;
            border-top: 1px solid var(--iron-light);
            padding-top: 2.5rem;
            display: flex;
            flex-wrap: wrap;
            gap: 4rem;
        }
        .strata-column {
            flex: 1;
            min-width: 280px;
        }
        .strata-header {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.65rem;
            color: var(--iron-light);
            margin-bottom: 2rem;
            text-transform: uppercase;
            display: flex;
            align-items: center;
        }
        .strata-header::after {
            content: '';
            flex: 1;
            height: 1px;
            background: var(--iron-light);
            margin-left: 1.25rem;
        }
        .data-row {
            display: flex;
            justify-content: space-between;
            padding: 1rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.8rem;
            transition: color 0.3s;
        }
        .data-row:hover {
            color: var(--blood-red);
        }
        .data-row span:last-child {
            color: #555;
        }
        .help-footer {
            padding: 6.25rem 2.5rem;
            border-top: 1px solid var(--iron-light);
            margin-top: 8rem;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        .coord {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.6rem;
            color: #444;
            writing-mode: vertical-rl;
        }
        .support-cta {
            text-align: right;
        }
        .support-cta h4 {
            font-size: 2rem;
            text-transform: uppercase;
            margin-bottom: 0.625rem;
        }
        .red-btn {
            background: var(--blood-red);
            color: white;
            padding: 1rem 2.5rem;
            text-decoration: none;
            font-weight: 900;
            display: inline-block;
            transition: transform 0.3s var(--transition);
        }
        .red-btn:hover {
            transform: skewX(-10deg);
        }
        @media (max-width: 768px) {
          .help-main { padding: 2rem 1rem; }
          .help-header { padding: 1rem; }
          .hero-title { font-size: 4rem; }
          .strata-section { margin-top: 4rem; }
          .help-footer { padding: 4rem 1rem; }
        }
      `}),_.jsxs("div",{className:"help-body",children:[_.jsx("div",{className:"topography"}),_.jsx("div",{className:"lattice-bg"}),_.jsx("div",{className:"noise"}),_.jsxs("header",{className:"help-header",children:[_.jsxs("div",{className:"brand",children:[_.jsx("span",{children:"Latitude"}),_.jsx("span",{children:"Creative Sovereignty"})]}),_.jsxs("div",{className:"flex gap-4 items-center",children:[_.jsx("div",{className:"status-pill",children:"System: Nominal"}),_.jsx("button",{onClick:()=>n(ge.HOME),className:"text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-latitude-red transition-colors",children:"Close"})]})]}),_.jsxs("main",{className:"help-main",children:[_.jsxs("h1",{className:"hero-title",children:["Support",_.jsx("br",{}),_.jsx("span",{className:"hero-title-red",children:"Infrastructure"})]}),_.jsxs("div",{className:"search-container",children:[_.jsx("label",{className:"search-label",children:"Query Core Database"}),_.jsx("input",{type:"text",className:"search-input",placeholder:"Enter keywords (e.g. Protocol, Governance, Access)..."})]}),_.jsxs("div",{className:"lattice-grid",children:[_.jsxs("div",{className:"lattice-item",children:[_.jsx("h3",{children:"001 // Access"}),_.jsxs("div",{children:[_.jsx("h2",{children:"Foundational Gateway"}),_.jsx("p",{children:"Onboarding protocols for new sovereign entities. Permission structures and identity verification."})]}),_.jsx("a",{href:"#",className:"lattice-link",children:"Initialize Access"})]}),_.jsxs("div",{className:"lattice-item",children:[_.jsx("h3",{children:"002 // Governance"}),_.jsxs("div",{children:[_.jsx("h2",{children:"Consensus Engine"}),_.jsx("p",{children:"Understanding the voting mechanisms and proposal submission within the Latitude ecosystem."})]}),_.jsx("a",{href:"#",className:"lattice-link",children:"Review Policy"})]}),_.jsxs("div",{className:"lattice-item",children:[_.jsx("h3",{children:"003 // Technical"}),_.jsxs("div",{children:[_.jsx("h2",{children:"Iron Lattice API"}),_.jsx("p",{children:"Documentation for programmatic interaction with the sovereignty layer and data exports."})]}),_.jsx("a",{href:"#",className:"lattice-link",children:"Read Docs"})]}),_.jsxs("div",{className:"lattice-item",children:[_.jsx("h3",{children:"004 // Asset Management"}),_.jsxs("div",{children:[_.jsx("h2",{children:"Creative Capital"}),_.jsx("p",{children:"Security protocols for intellectual property and decentralized storage redundancy."})]}),_.jsx("a",{href:"#",className:"lattice-link",children:"Secure Assets"})]}),_.jsxs("div",{className:"lattice-item",children:[_.jsx("h3",{children:"005 // Disputes"}),_.jsxs("div",{children:[_.jsx("h2",{children:"Arbiter Node"}),_.jsx("p",{children:"The mechanism for conflict resolution and creative mediation within the sovereign network."})]}),_.jsx("a",{href:"#",className:"lattice-link",children:"Open Case"})]}),_.jsxs("div",{className:"lattice-item",children:[_.jsx("h3",{children:"006 // Network"}),_.jsxs("div",{children:[_.jsx("h2",{children:"Global Topography"}),_.jsx("p",{children:"Real-time status of Latitude nodes and distributed infrastructure latency reports."})]}),_.jsx("a",{href:"#",className:"lattice-link",children:"View Map"})]})]}),_.jsxs("div",{className:"strata-section",children:[_.jsxs("div",{className:"strata-column",children:[_.jsx("div",{className:"strata-header",children:"Recent Updates"}),_.jsxs("div",{className:"data-row",children:[_.jsx("span",{children:"Patch 4.9.1 - Iron Masking"}),_.jsx("span",{children:"24m ago"})]}),_.jsxs("div",{className:"data-row",children:[_.jsx("span",{children:"Sovereignty Ledger Sync"}),_.jsx("span",{children:"2h ago"})]}),_.jsxs("div",{className:"data-row",children:[_.jsx("span",{children:"Governance Proposal #882"}),_.jsx("span",{children:"5h ago"})]}),_.jsxs("div",{className:"data-row",children:[_.jsx("span",{children:"Latency Optimization"}),_.jsx("span",{children:"12h ago"})]})]}),_.jsxs("div",{className:"strata-column",children:[_.jsx("div",{className:"strata-header",children:"System Vitals"}),_.jsxs("div",{className:"data-row",children:[_.jsx("span",{children:"Global Uptime"}),_.jsx("span",{children:"99.999%"})]}),_.jsxs("div",{className:"data-row",children:[_.jsx("span",{children:"Active Nodes"}),_.jsx("span",{children:"14,202"})]}),_.jsxs("div",{className:"data-row",children:[_.jsx("span",{children:"Archive Depth"}),_.jsx("span",{children:"4.2 PB"})]}),_.jsxs("div",{className:"data-row",children:[_.jsx("span",{children:"Threat Level"}),_.jsx("span",{children:"Minimal"})]})]})]})]}),_.jsxs("footer",{className:"help-footer",children:[_.jsx("div",{className:"coord",children:"40.7128° N, 74.0060° W // LATITUDE SYSTEM"}),_.jsxs("div",{className:"support-cta",children:[_.jsx("h4",{children:"Can't find the protocol?"}),_.jsx("a",{href:"#",className:"red-btn",children:"Contact the Arbiter"})]})]})]})]})),Gj=({nfts:n,setView:e})=>{const[t,s]=de.useState("overview");return _.jsxs("div",{className:"p-4 sm:p-6 md:p-12 max-w-7xl mx-auto animate-fade-in pb-32",children:[_.jsxs("header",{className:"mb-16 border-b border-white/10 pb-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-8",children:[_.jsxs("div",{className:"text-center md:text-left",children:[_.jsxs("h1",{className:"text-6xl sm:text-7xl md:text-9xl font-black text-white uppercase tracking-tighter italic leading-none",children:["Super ",_.jsx("span",{className:"text-latitude-red",children:"Admin"})]}),_.jsx("p",{className:"text-latitude-teal font-mono text-sm mt-4 uppercase tracking-widest sm:tracking-[0.6em]",children:"Global Sovereignty Control • V4.2.0"})]}),_.jsxs("div",{className:"flex items-center gap-4",children:[_.jsxs("div",{className:"bg-vst p-6 rounded-3xl border border-white/10 text-right min-w-[200px] shadow-2xl",children:[_.jsx("p",{className:"text-[10px] text-gray-500 uppercase font-black tracking-[0.4em] mb-2",children:"Network Load Delta"}),_.jsx("p",{className:"text-4xl font-mono text-latitude-solana animate-pulse",children:"0.02 MS"}),_.jsx("div",{className:"h-1 w-full bg-latitude-solana/10 rounded-full mt-2 overflow-hidden",children:_.jsx("div",{className:"h-full bg-latitude-solana w-1/4"})})]}),_.jsx("button",{onClick:()=>e(ge.HOME),className:"text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-latitude-red transition-colors",children:"Close"})]})]}),_.jsx("div",{className:"flex flex-wrap gap-4 mb-16 justify-center md:justify-start",children:["overview","users","tournaments","system"].map(a=>_.jsx("button",{onClick:()=>s(a),className:`px-8 sm:px-12 py-4 sm:py-5 text-xs font-black uppercase tracking-widest sm:tracking-[0.4em] transition-all rounded-2xl border ${t===a?"bg-latitude-red border-latitude-red text-white shadow-[0_0_30px_rgba(255,0,0,0.3)] scale-105":"bg-vst/40 border-white/5 text-gray-500 hover:text-white hover:bg-white/5"}`,children:a},a))}),_.jsxs("div",{className:"grid lg:grid-cols-4 gap-10",children:[t==="overview"&&_.jsx(_.Fragment,{children:[{label:"Total Volume",value:"1.2k SOL",sub:"+22% (24h)",color:"text-latitude-solana"},{label:"Network Nodes",value:"4,096",sub:"99.9% Sync",color:"text-latitude-blue"},{label:"Asset Depth",value:n.length.toString(),sub:"Minted Signal",color:"text-latitude-purple"},{label:"Burn Rate",value:"0.005 SOL",sub:"Per Tx",color:"text-latitude-red"}].map((a,l)=>_.jsxs("div",{className:"bg-vst/40 backdrop-blur-md p-8 sm:p-10 rounded-3xl sm:rounded-[50px] border border-white/5 group hover:border-latitude-red transition-all shadow-xl",children:[_.jsx("p",{className:"text-[10px] text-gray-600 uppercase font-black tracking-widest sm:tracking-[0.3em] mb-6",children:a.label}),_.jsx("p",{className:`text-4xl sm:text-5xl font-black uppercase italic tracking-tighter ${a.color}`,children:a.value}),_.jsx("p",{className:"text-[10px] text-gray-500 mt-4 font-mono uppercase tracking-widest",children:a.sub})]},l))}),t==="users"&&_.jsx("div",{className:"lg:col-span-4",children:_.jsxs("button",{onClick:()=>e(ge.USER_MANAGEMENT),className:"w-full bg-vst/40 backdrop-blur-md p-10 rounded-[50px] border border-white/5 group hover:border-latitude-blue transition-all shadow-xl text-left",children:[_.jsx("h3",{className:"text-3xl font-black text-white uppercase italic tracking-tighter",children:"User Hierarchy"}),_.jsx("p",{className:"text-gray-500 mt-4 font-mono uppercase text-xs leading-loose tracking-[0.2em]",children:"Manage user roles, permissions, and the relationships between different user types."}),_.jsx("div",{className:"mt-8",children:_.jsx("span",{className:"px-10 py-5 bg-latitude-blue text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl shadow-xl group-hover:bg-white group-hover:text-black transition-all",children:"Manage Users"})})]})}),t==="tournaments"&&_.jsxs("div",{className:"lg:col-span-4 space-y-12",children:[_.jsxs("div",{className:"bg-vst/40 backdrop-blur-md p-10 rounded-[50px] border border-white/5 shadow-2xl",children:[_.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center mb-10 gap-4",children:[_.jsxs("h3",{className:"text-2xl sm:text-3xl font-black text-white uppercase italic tracking-tighter",children:["Active Battle ",_.jsx("span",{className:"text-latitude-red",children:"Governance"})]}),_.jsx("button",{className:"px-6 py-2 bg-latitude-solana text-black font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-white transition-all",children:"Export Protocol Log"})]}),_.jsx("div",{className:"overflow-x-auto",children:_.jsxs("table",{className:"w-full text-left min-w-[800px]",children:[_.jsx("thead",{className:"text-[10px] font-black uppercase text-gray-600 border-b border-white/5",children:_.jsxs("tr",{children:[_.jsx("th",{className:"pb-6 tracking-[0.3em]",children:"Signal ID"}),_.jsx("th",{className:"pb-6 tracking-[0.3em]",children:"Competitors"}),_.jsx("th",{className:"pb-6 tracking-[0.3em]",children:"Prize Pool"}),_.jsx("th",{className:"pb-6 tracking-[0.3em]",children:"Audit Status"}),_.jsx("th",{className:"pb-6 tracking-[0.3em]",children:"Actions"})]})}),_.jsxs("tbody",{className:"font-mono text-xs",children:[_.jsxs("tr",{className:"border-b border-white/5 group hover:bg-white/5 transition-colors",children:[_.jsx("td",{className:"py-8 text-latitude-teal font-black",children:"#LAT-B1_SOL"}),_.jsx("td",{className:"py-8 text-white uppercase",children:"GLITCH_K vs SURFER_S"}),_.jsx("td",{className:"py-8 text-latitude-solana font-black text-lg",children:"25.5 SOL"}),_.jsx("td",{className:"py-8",children:_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"}),_.jsx("span",{className:"text-green-500 font-black uppercase tracking-widest",children:"CLEAR_SIGNAL"})]})}),_.jsxs("td",{className:"py-8 flex flex-wrap gap-3",children:[_.jsx("button",{className:"px-5 py-2 bg-white/5 hover:bg-latitude-red text-white transition-all rounded-xl border border-white/10 uppercase font-black text-[9px] tracking-widest",children:"Flag Split"}),_.jsx("button",{className:"px-5 py-2 bg-white/5 hover:bg-latitude-blue text-white transition-all rounded-xl border border-white/10 uppercase font-black text-[9px] tracking-widest",children:"Adjust Pool"})]})]}),_.jsxs("tr",{className:"border-b border-white/5 group hover:bg-white/5 transition-colors",children:[_.jsx("td",{className:"py-8 text-latitude-teal font-black",children:"#LAT-B2_SYN"}),_.jsx("td",{className:"py-8 text-white uppercase",children:"VOID_RUN vs SHADOW_W"}),_.jsx("td",{className:"py-8 text-latitude-solana font-black text-lg",children:"12.0 SOL"}),_.jsx("td",{className:"py-8",children:_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_10px_#eab308]"}),_.jsx("span",{className:"text-yellow-500 font-black uppercase tracking-widest",children:"PENDING_REVIEW"})]})}),_.jsxs("td",{className:"py-8 flex flex-wrap gap-3",children:[_.jsx("button",{className:"px-5 py-2 bg-latitude-red text-white transition-all rounded-xl uppercase font-black text-[9px] tracking-widest",children:"Review Dispute"}),_.jsx("button",{className:"px-5 py-2 bg-white/5 hover:bg-latitude-blue text-white transition-all rounded-xl border border-white/10 uppercase font-black text-[9px] tracking-widest",children:"Lock Sync"})]})]})]})]})})]}),_.jsxs("div",{className:"grid md:grid-cols-2 gap-10",children:[_.jsxs("div",{className:"bg-latitude-blue/5 p-10 border border-latitude-blue/20 rounded-[50px] shadow-2xl relative overflow-hidden group",children:[_.jsx("div",{className:"absolute top-0 right-0 p-8 text-5xl opacity-10 group-hover:scale-125 transition-transform",children:"💎"}),_.jsx("h3",{className:"text-2xl font-black text-latitude-blue uppercase mb-4 italic tracking-tighter",children:"Prize Liquidity Escrow"}),_.jsx("p",{className:"text-xs text-gray-500 font-mono mb-8 uppercase leading-relaxed tracking-widest",children:"Audit the smart contract wallets holding tournament prizes. Total locked value across all active rings must exceed 100.0 SOL to maintain network integrity."}),_.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[_.jsx("input",{className:"bg-black/60 border border-white/10 p-5 rounded-2xl flex-1 font-mono text-xs text-latitude-blue focus:outline-none focus:border-latitude-blue",placeholder:"Enter Escrow Hash..."}),_.jsx("button",{className:"px-10 py-5 bg-latitude-blue text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl shadow-xl hover:bg-white hover:text-black transition-all",children:"Audit Hub"})]})]}),_.jsxs("div",{className:"bg-latitude-purple/5 p-10 border border-latitude-purple/20 rounded-[50px] shadow-2xl relative overflow-hidden group",children:[_.jsx("div",{className:"absolute top-0 right-0 p-8 text-5xl opacity-10 group-hover:scale-125 transition-transform",children:"⚖️"}),_.jsx("h3",{className:"text-2xl font-black text-latitude-purple uppercase mb-4 italic tracking-tighter",children:"Global Split Policy"}),_.jsx("p",{className:"text-xs text-gray-500 font-mono mb-8 uppercase leading-relaxed tracking-widest",children:"Adjust the default platform cut for high-volume battles. Current global delta is 5.0%. Executives can lower this for Tier 3 partnerships to incentivize adoption."}),_.jsxs("div",{className:"flex flex-col sm:flex-row gap-6 items-center",children:[_.jsx("input",{type:"range",className:"flex-1 accent-latitude-purple w-full sm:w-auto",min:"0",max:"10",step:"0.5"}),_.jsx("span",{className:"text-2xl font-black text-white font-mono",children:"5.0%"}),_.jsx("button",{className:"px-8 py-4 bg-latitude-purple text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl shadow-xl hover:bg-white hover:text-black transition-all",children:"Set Delta"})]})]})]})]}),t==="system"&&_.jsxs("div",{className:"lg:col-span-4 space-y-12",children:[_.jsxs("div",{className:"bg-latitude-red/5 p-8 sm:p-12 border border-latitude-red/20 rounded-[50px] sm:rounded-[80px] text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden",children:[_.jsx("div",{className:"absolute inset-0 bg-latitude-red/5 animate-pulse opacity-50"}),_.jsx("h3",{className:"text-3xl sm:text-5xl font-black text-latitude-red uppercase mb-6 italic tracking-tighter relative z-10",children:"PROTOCOL KILLSWITCH"}),_.jsx("p",{className:"text-gray-500 mb-10 max-w-2xl mx-auto font-mono uppercase text-xs leading-loose tracking-[0.2em] relative z-10",children:"Permanently disable all NFT deployments, marketplace trades, and battle prizes across the entire Latitude ecosystem. This action requires multisig authorization from 3 root admins and is only for catastrophic system breaches."}),_.jsx("button",{className:"px-12 sm:px-16 py-5 sm:py-6 bg-latitude-red text-white font-black uppercase tracking-widest sm:tracking-[0.5em] text-xs rounded-3xl hover:scale-110 active:scale-95 transition-all shadow-2xl relative z-10",children:"INITIATE GLOBAL LOCKDOWN"})]}),_.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{label:"Latency Threshold",val:"250ms",color:"text-latitude-teal"},{label:"Max Splits",val:"12",color:"text-latitude-blue"},{label:"Indexing Speed",val:"Ultra-Fast",color:"text-latitude-solana"}].map((a,l)=>_.jsxs("div",{className:"bg-vst/60 p-8 rounded-[40px] border border-white/5 text-center",children:[_.jsx("p",{className:"text-[10px] font-black text-gray-600 uppercase tracking-widest mb-4",children:a.label}),_.jsx("p",{className:`text-2xl font-black uppercase tracking-tighter italic ${a.color}`,children:a.val}),_.jsx("button",{className:"mt-6 text-[9px] font-black text-white/40 hover:text-white transition-all uppercase tracking-widest",children:"Adjust Configuration"})]},l))})]})]})]})},Kj={id:"b1",competitors:[{id:"c1",name:"GLITCH_KING",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=glitch",votes:142,currentLyrics:""},{id:"c2",name:"SOL_SURFER",avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=surfer",votes:128,currentLyrics:""}],djName:"V0ID_WALKER",isLive:!1,startTime:Date.now(),status:"live",phase:"IDLE",timer:60,bpm:90,prizePool:25.5,disputeStatus:"clear"},Yj=({user:n,setView:e})=>{const[t,s]=de.useState(Kj),[a,l]=de.useState(!1),[u,f]=de.useState(!1),[p,g]=de.useState(0),[E,b]=de.useState(0),[S,M]=de.useState([]),[H,$]=de.useState(""),J=de.useRef(null),ee=de.useRef(null);de.useEffect(()=>{M([{id:"1",user:"Listener_X",text:"Ready for this set!",timestamp:Date.now()},{id:"2",user:"Vibe_Master",text:"BPM is perfect.",timestamp:Date.now()}])},[]);const ce=C=>{b(I=>I+C);const x={id:Date.now().toString(),user:"SYSTEM",text:`${(n==null?void 0:n.name)||"Guest"} tipped the DJ ${C} SOL! 💎`,timestamp:Date.now(),isSystem:!0};M(I=>[...I,x])},me=C=>{if(C.preventDefault(),!H.trim())return;const x={id:Date.now().toString(),user:(n==null?void 0:n.name)||"Guest",text:H,timestamp:Date.now()};M(I=>[...I,x]),$("")},we=async()=>{try{const C=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1},video:!0});ee.current=C,J.current&&(J.current.srcObject=C),f(!0),s(x=>({...x,isLive:!0}))}catch{alert("Capture hardware access denied.")}},Xe=()=>{var C;(C=ee.current)==null||C.getTracks().forEach(x=>x.stop()),f(!1),s(x=>({...x,isLive:!1}))},Se=(n==null?void 0:n.tier)===Gn.DJ_PRO||(n==null?void 0:n.isAdmin);return _.jsxs("div",{className:"min-h-screen p-4 sm:p-6 md:p-12 animate-fade-in relative pb-32 bg-white dark:bg-black transition-colors",children:[_.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.03)_0%,_transparent_70%)] pointer-events-none"}),_.jsxs("header",{className:"flex flex-col md:flex-row justify-between items-center mb-16 relative z-10 gap-8",children:[_.jsxs("div",{children:[_.jsxs("h2",{className:"text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter italic text-black dark:text-white",children:["The ",_.jsx("span",{className:"text-latitude-red",children:"Ring"})]}),_.jsxs("div",{className:"flex items-center gap-4 mt-2",children:[_.jsxs("span",{className:"text-[10px] font-black uppercase tracking-widest text-gray-500",children:["Live Set: ",t.djName]}),t.isLive&&_.jsx("div",{className:"px-3 py-1 bg-latitude-red rounded-full text-[8px] font-black text-white animate-pulse",children:"ON AIR"})]})]}),_.jsxs("div",{className:"flex flex-col items-center md:items-end gap-4",children:[_.jsx("button",{onClick:()=>e(ge.HOME),className:"text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-latitude-red transition-colors",children:"Back to Home"}),_.jsxs("div",{className:"bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-8 py-4 rounded-3xl text-center",children:[_.jsx("span",{className:"text-[8px] font-black uppercase tracking-widest text-gray-500 block mb-1",children:"DJ Tips Recieved"}),_.jsxs("span",{className:"text-2xl font-black italic text-latitude-solana",children:[E.toFixed(2)," SOL"]})]}),Se&&_.jsx("button",{onClick:()=>l(!a),className:`px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-xl transition-all ${a?"bg-latitude-teal text-black":"bg-black text-white dark:bg-white dark:text-black"}`,children:a?"Close Studio":"Open Broadcast Hub"})]})]}),_.jsxs("div",{className:"grid lg:grid-cols-4 gap-8 relative z-10",children:[_.jsxs("div",{className:"lg:col-span-3 space-y-8",children:[_.jsxs("div",{className:"aspect-video bg-black dark:bg-[#111] border-4 border-gray-800 rounded-[40px] overflow-hidden shadow-2xl relative",children:[_.jsx("video",{ref:J,autoPlay:!0,muted:u,playsInline:!0,className:`w-full h-full object-cover ${!u&&"hidden"}`}),!u&&_.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-gray-700",children:[_.jsx("span",{className:"text-5xl mb-4",children:"📡"}),_.jsx("span",{className:"text-[10px] font-black uppercase tracking-[0.5em]",children:"SIGNAL_LOST"})]})]}),_.jsxs("div",{className:"flex flex-wrap gap-4 justify-center",children:[_.jsx("button",{onClick:()=>ce(.1),className:"px-6 py-3 sm:px-8 sm:py-4 bg-latitude-solana text-black font-black uppercase rounded-2xl text-[10px] hover:scale-105 transition-all shadow-lg border-b-4 border-green-900",children:"Tip 0.1 SOL"}),_.jsx("button",{onClick:()=>ce(.5),className:"px-6 py-3 sm:px-8 sm:py-4 bg-latitude-solana text-black font-black uppercase rounded-2xl text-[10px] hover:scale-105 transition-all shadow-lg border-b-4 border-green-900",children:"Tip 0.5 SOL"}),_.jsx("button",{onClick:()=>ce(1),className:"px-6 py-3 sm:px-8 sm:py-4 bg-latitude-red text-white font-black uppercase rounded-2xl text-[10px] hover:scale-105 transition-all shadow-lg border-b-4 border-red-950",children:"Tip 1.0 SOL"})]})]}),_.jsxs("div",{className:"bg-black/5 dark:bg-[#080808] border border-black/10 dark:border-white/10 rounded-[40px] flex flex-col h-[600px] overflow-hidden shadow-2xl",children:[_.jsx("div",{className:"p-6 border-b border-black/5 dark:border-white/5 bg-black/5 dark:bg-black/40",children:_.jsx("h3",{className:"text-xs font-black uppercase tracking-widest text-black dark:text-white italic",children:"Crowd Chat"})}),_.jsx("div",{className:"flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar",children:S.map(C=>_.jsxs("div",{className:"text-[11px]",children:[_.jsxs("span",{className:`font-black uppercase tracking-tighter mr-2 ${C.isSystem?"text-latitude-red":(n==null?void 0:n.name)===C.user?"text-latitude-teal":"text-gray-500"}`,children:[C.user,":"]}),_.jsx("span",{className:"text-gray-600 dark:text-gray-400 font-medium",children:C.text})]},C.id))}),_.jsxs("form",{onSubmit:me,className:"p-4 border-t border-black/5 dark:border-white/5 flex gap-2",children:[_.jsx("input",{type:"text",value:H,onChange:C=>$(C.target.value),placeholder:"Say something to the DJ...",className:"flex-1 bg-white dark:bg-black border border-black/10 dark:border-white/10 p-3 rounded-xl text-[10px] outline-none text-black dark:text-white"}),_.jsx("button",{className:"px-4 bg-latitude-red text-white text-[10px] font-black uppercase rounded-xl",children:"Send"})]})]})]}),a&&_.jsx("div",{className:"fixed bottom-0 left-0 w-full z-50 bg-white dark:bg-[#080808] border-t-4 border-latitude-teal p-6 sm:p-10 shadow-2xl animate-slide-up",children:_.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col md:flex-row gap-8 sm:gap-12 items-center",children:[_.jsxs("div",{className:"flex-1 text-center md:text-left",children:[_.jsx("h4",{className:"text-xl sm:text-2xl font-black uppercase italic text-black dark:text-white mb-2",children:"DJ Broadcast Hub"}),_.jsx("p",{className:"text-[9px] text-gray-500 uppercase font-mono tracking-widest",children:"PRO_LINK v4.0 Active"})]}),_.jsx("div",{className:"flex gap-4",children:u?_.jsx("button",{onClick:Xe,className:"px-8 sm:px-12 py-4 sm:py-5 bg-latitude-red text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl border-b-4 border-red-950",children:"Kill Signal"}):_.jsx("button",{onClick:we,className:"px-8 sm:px-12 py-4 sm:py-5 bg-latitude-solana text-black font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl border-b-4 border-green-900",children:"Start Broadcast"})})]})})]})};var Da=(n=>(n.RECORD_LABEL="RECORD_LABEL",n.ARTIST="ARTIST",n.MOVIE_STUDIO="MOVIE_STUDIO",n.TV_CHANNEL="TV_CHANNEL",n.ART_STUDIO="ART_STUDIO",n.NFT_ARTIST="NFT_ARTIST",n))(Da||{});const Go={createUser:async n=>{await L4(Uc(Yo,"users/"+n.id),n)},getUser:async n=>{const e=await Ag(Uc(Yo,"users/"+n));return e.exists()?e.val():null},updateUser:async(n,e)=>{await V4(Uc(Yo,"users/"+n),e)},getUsersByRole:async n=>{const e=await Ag(Uc(Yo,"users")),t=[];if(e.exists()){const s=e.val();for(const a in s)s[a].role===n&&t.push(s[a])}return t},getUsersByParent:async n=>{const e=await Ag(Uc(Yo,"users")),t=[];if(e.exists()){const s=e.val();for(const a in s)s[a].parent===n&&t.push(s[a])}return t}},Qj=({setView:n})=>{const[e,t]=de.useState([]),[s,a]=de.useState(!1),[l,u]=de.useState(null);return de.useEffect(()=>{(async()=>{a(!0);try{const p=await Go.getUsersByRole(Da.RECORD_LABEL),g=await Go.getUsersByRole(Da.ARTIST),E=await Go.getUsersByRole(Da.MOVIE_STUDIO),b=await Go.getUsersByRole(Da.TV_CHANNEL),S=await Go.getUsersByRole(Da.ART_STUDIO),M=await Go.getUsersByRole(Da.NFT_ARTIST);t([...p,...g,...E,...b,...S,...M])}catch(p){u(p.message)}finally{a(!1)}})()},[]),_.jsxs("div",{className:"p-4 sm:p-6 md:p-8",children:[_.jsx("button",{onClick:()=>n(ge.ADMIN),className:"absolute top-4 right-4 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-latitude-red transition-colors z-10",children:"Back to Admin"}),_.jsx("h1",{className:"text-3xl font-bold mb-6 text-white",children:"User Management"}),s&&_.jsx("p",{className:"text-white",children:"Loading users..."}),l&&_.jsxs("p",{className:"text-red-500 bg-red-900/20 p-4 rounded-lg",children:["Error: ",l]}),_.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:e.map(f=>_.jsxs("div",{className:"bg-vst/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 transition-all hover:border-latitude-blue/50",children:[_.jsx("p",{className:"text-xl font-bold text-white",children:f.name}),_.jsx("p",{className:"text-sm text-gray-400 font-mono mt-1",children:f.email}),_.jsxs("div",{className:"mt-4 pt-4 border-t border-white/10",children:[_.jsxs("p",{className:"text-xs text-gray-500 uppercase font-black",children:["Role: ",_.jsx("span",{className:"text-latitude-blue font-mono lowercase",children:f.role})]}),f.parent&&_.jsxs("p",{className:"text-xs text-gray-500 uppercase font-black mt-2",children:["Parent: ",_.jsx("span",{className:"text-latitude-teal font-mono lowercase",children:f.parent})]})]})]},f.id))})]})},Wj=({setView:n})=>_.jsxs("div",{className:"p-8 text-white",children:[_.jsx("h1",{className:"text-2xl font-bold",children:"Minting Page"}),_.jsx("p",{children:"This is where the minting functionality will be."}),_.jsx("button",{onClick:()=>n(ge.PROFILE),className:"mt-4 px-4 py-2 bg-latitude-red text-white rounded",children:"Back to Profile"})]}),$j=()=>{const[n,e]=de.useState(!1),[t,s]=de.useState(""),[a,l]=de.useState([{role:"ai",text:"Hello! I am Gemma_AI, your Latitude concierge. How can I assist your creative journey today?"}]),[u,f]=de.useState(!1),p=async()=>{if(!t.trim())return;const g=t;s(""),l(E=>[...E,{role:"user",text:g}]),f(!0);try{const b=new vI("AIzaSyAVbuN7R8uaBllKyqn899-5NWouROpG100").getGenerativeModel({model:"gemini-1.5-flash"}),S=`You are Gemma_AI, a helpful support assistant for the Latitude NFT Music/Film platform. 
        You answer questions about Phantom Wallet, SOL, Revenue Splits (5% fee), and Tiers (Listener, Fan Club, Label Exec). 
        User Query: ${g}`,$=(await(await b.generateContent(S)).response).text();l(J=>[...J,{role:"ai",text:$||"I'm having trouble connecting to the network."}])}catch{l(b=>[...b,{role:"ai",text:"Signal lost. Please try again later."}])}finally{f(!1)}};return _.jsx("div",{className:"fixed bottom-6 right-6 z-[60]",children:n?_.jsxs("div",{className:"w-80 h-96 glass rounded-2xl flex flex-col shadow-2xl overflow-hidden border-latitude-red/20",children:[_.jsxs("div",{className:"p-4 bg-latitude-red text-white flex justify-between items-center",children:[_.jsx("span",{className:"font-bold text-sm tracking-wider uppercase",children:"Gemma_AI Support"}),_.jsx("button",{onClick:()=>e(!1),children:"×"})]}),_.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 text-xs",children:[a.map((g,E)=>_.jsx("div",{className:`flex ${g.role==="ai"?"justify-start":"justify-end"}`,children:_.jsx("div",{className:`p-3 rounded-xl max-w-[85%] ${g.role==="ai"?"bg-gray-800 text-gray-200":"bg-latitude-red text-white"}`,children:g.text})},E)),u&&_.jsx("div",{className:"text-latitude-red animate-pulse",children:"Gemma is thinking..."})]}),_.jsx("div",{className:"p-3 border-t border-white/10 flex gap-2",children:_.jsx("input",{value:t,onChange:g=>s(g.target.value),onKeyPress:g=>g.key==="Enter"&&p(),className:"flex-1 bg-black/20 border border-white/10 rounded-full px-4 py-2 text-xs text-white focus:outline-none focus:border-latitude-red",placeholder:"Ask anything..."})})]}):_.jsx("button",{onClick:()=>e(!0),className:"w-14 h-14 bg-latitude-red rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform animate-float",children:_.jsx("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:_.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"})})})})},Xj=({isOpen:n,onClose:e,setView:t,isAdmin:s})=>{const[a,l]=de.useState(""),u=[{id:ge.HOME,label:"Studio Home",icon:"🏠",description:"Return to central studio"},{id:ge.MARKETPLACE,label:"Marketplace",icon:"🛒",description:"Browse and collect NFTs"},{id:ge.CREATE,label:"Mint Asset",icon:"💎",description:"Create new music or film NFT"},{id:ge.SOCIAL,label:"Social Lounge",icon:"💬",description:"Connect with other creators"},{id:ge.PRICING,label:"Tier Selection",icon:"⚡",description:"Manage your membership status"},{id:ge.PROFILE,label:"Your Profile",icon:"👤",description:"View your collection and identity"},{id:ge.HELP,label:"Help & Docs",icon:"❓",description:"Phantom setup and platform guide"}];s&&u.push({id:ge.ADMIN,label:"Admin Command Center",icon:"🛠️",description:"Global system management"});const f=u.filter(p=>p.label.toLowerCase().includes(a.toLowerCase())||p.description.toLowerCase().includes(a.toLowerCase()));return de.useEffect(()=>{const p=g=>{g.key==="Escape"&&e()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[e]),n?_.jsxs("div",{className:"fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4 bg-black/60 backdrop-blur-md transition-all animate-fade-in",children:[_.jsxs("div",{className:"w-full max-w-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl rounded-2xl overflow-hidden animate-slide-up",children:[_.jsxs("div",{className:"p-4 border-b border-white/10 flex items-center gap-3",children:[_.jsx("span",{className:"text-xl",children:"🔍"}),_.jsx("input",{autoFocus:!0,type:"text",placeholder:"Search commands or navigate...",className:"w-full bg-transparent border-none focus:outline-none text-lg text-white font-medium",value:a,onChange:p=>l(p.target.value)}),_.jsx("kbd",{className:"hidden md:block bg-white/5 border border-white/10 px-2 py-1 rounded text-[10px] text-gray-500 font-mono",children:"ESC"})]}),_.jsx("div",{className:"max-h-[50vh] overflow-y-auto p-2 scrollbar-hide",children:f.length>0?f.map(p=>_.jsxs("button",{onClick:()=>{t(p.id),e(),l("")},className:"w-full flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors text-left group border border-transparent hover:border-white/5",children:[_.jsx("div",{className:"w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg text-xl group-hover:scale-110 transition-transform",children:p.icon}),_.jsxs("div",{className:"flex-1",children:[_.jsx("div",{className:"text-white font-bold uppercase tracking-wider text-sm",children:p.label}),_.jsx("div",{className:"text-gray-500 text-xs",children:p.description})]}),_.jsx("div",{className:"opacity-0 group-hover:opacity-100 transition-opacity text-latitude-red font-mono text-xs",children:"JUMP ↵"})]},p.id)):_.jsxs("div",{className:"p-8 text-center text-gray-500 italic",children:['No commands found for "',a,'"']})}),_.jsxs("div",{className:"p-3 bg-white/5 border-t border-white/10 flex justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-widest",children:[_.jsx("div",{children:"Latitude Navigation Engine"}),_.jsxs("div",{className:"flex gap-4",children:[_.jsx("span",{children:"↑↓ Navigate"}),_.jsx("span",{children:"↵ Select"})]})]})]}),_.jsx("div",{className:"absolute inset-0 -z-10",onClick:e})]}):null},Jj={apiKey:"AIzaSyDoIC3zpgHLx0AVl_PkkWWtv0ECF01KVKc",authDomain:"fleet-edition-3fd2a.firebaseapp.com",databaseURL:"https://fleet-edition-3fd2a-default-rtdb.firebaseio.com",projectId:"fleet-edition-3fd2a",storageBucket:"fleet-edition-3fd2a.firebasestorage.app",messagingSenderId:"1009606221480",appId:"1:1009606221480:web:d708ca852d2ce46bb4ec9d",measurementId:"G-BYJFWDGYNL"},EI=A_(Jj),Ko=xA(EI),Dg=X3(EI),Zj={"fan@latitude.com":{id:"fan-user-123",name:"Alex Fan",handle:"alexfan",bio:"Just a dedicated fan of great music.",avatarUrl:"https://picsum.photos/seed/alexfan/200",bannerUrl:"https://picsum.photos/seed/alexfan-banner/1500/500",tier:Gn.FAN_CLUB,walletAddress:"FjT8...hNpc",socials:{twitter:"@alexfanmusic",instagram:"alexfanmusic"}},"exec@latitude.com":{id:"exec-user-456",name:"Samantha Exec",handle:"sam_exec",bio:"Executive at a leading music label.",avatarUrl:"https://picsum.photos/seed/samexec/200",bannerUrl:"https://picsum.photos/seed/samexec-banner/1500/500",tier:Gn.LABEL_EXEC,walletAddress:"9uFe...pQxR",socials:{twitter:"@sam_exec",instagram:"samantha_exec"},isAdmin:!0}};class eU{constructor(){this.currentUser=null,this.googleProvider=new Ds,this.subscribers=[];const e=localStorage.getItem("latitude_user");e&&(this.currentUser=JSON.parse(e)),vD(Ko,t=>{t?this.fetchUserProfile(t.uid).then(s=>{this.currentUser=s,this.broadcastAuthChange(s)}):(this.currentUser=null,this.broadcastAuthChange(null))})}validatePassword(e){return/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})$/.test(e)}async login(e,t){try{const a=(await gD(Ko,e,t)).user,l=await this.fetchUserProfile(a.uid);if(!l){const u=Zj[e];if(u)return await this.createUserProfile(a.uid,u),this.currentUser=u,localStorage.setItem("latitude_user",JSON.stringify(u)),u;throw new Error("User profile not found.")}return this.currentUser=l,localStorage.setItem("latitude_user",JSON.stringify(l)),l}catch(s){throw console.error("Login error:",s),s}}async signup(e,t,s){if(!this.validatePassword(t))throw new Error("Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character.");try{const l=(await pD(Ko,e,t)).user,u={id:l.uid,name:s,handle:e.split("@")[0],email:e,bio:"New Latitude user",avatarUrl:`https://picsum.photos/seed/${l.uid}/200`,bannerUrl:`https://picsum.photos/seed/${l.uid}-banner/1500/500`,tier:Gn.LISTENER,socials:{}};return await this.createUserProfile(l.uid,u),this.currentUser=u,localStorage.setItem("latitude_user",JSON.stringify(u)),u}catch(a){throw console.error("Signup error:",a),a}}async signInWithGoogle(){var e;try{const s=(await zD(Ko,this.googleProvider)).user;let a=await this.fetchUserProfile(s.uid);if(!a){const l={id:s.uid,name:s.displayName||"Google User",handle:((e=s.email)==null?void 0:e.split("@")[0])||s.uid,email:s.email||void 0,bio:"Joined via Google",avatarUrl:s.photoURL||`https://picsum.photos/seed/${s.uid}/200`,bannerUrl:`https://picsum.photos/seed/${s.uid}-banner/1500/500`,tier:Gn.LISTENER,socials:{}};await this.createUserProfile(s.uid,l),a=l}return this.currentUser=a,localStorage.setItem("latitude_user",JSON.stringify(a)),a}catch(t){throw console.error("Google sign-in error:",t),t}}async signInAsGuest(){try{const t=(await hD(Ko)).user;let s=await this.fetchUserProfile(t.uid);if(!s){const a={id:t.uid,name:"Guest User",handle:`guest_${t.uid.substring(0,5)}`,bio:"Exploring Latitude as a guest.",avatarUrl:"https://picsum.photos/seed/guest/200",bannerUrl:"https://picsum.photos/seed/guest-banner/1500/500",tier:Gn.LISTENER,socials:{}};await this.createUserProfile(t.uid,a),s=a}return this.currentUser=s,localStorage.setItem("latitude_user",JSON.stringify(s)),s}catch(e){throw console.error("Guest sign-in error:",e),e}}async logout(){await ED(Ko),this.currentUser=null,localStorage.removeItem("latitude_user")}getCurrentUser(){return this.currentUser}async fetchUserProfile(e){try{const t=Vd(Dg,"users",e),s=await lj(t);return s.exists()?s.data():null}catch(t){return console.error("Error fetching user profile:",t),null}}async createUserProfile(e,t){try{const s=Vd(Dg,"users",e);await Hw(s,{...t,id:e})}catch(s){console.error("Error creating user profile:",s)}}async updateProfile(e){if(this.currentUser)try{const t=Vd(Dg,"users",this.currentUser.id);await Hw(t,e,{merge:!0}),this.currentUser={...this.currentUser,...e},localStorage.setItem("latitude_user",JSON.stringify(this.currentUser)),this.broadcastAuthChange(this.currentUser)}catch(t){console.error("Error updating profile:",t)}}subscribeToAuth(e){return this.subscribers.push(e),e(this.currentUser),()=>{this.subscribers=this.subscribers.filter(t=>t!==e)}}broadcastAuthChange(e){this.subscribers.forEach(t=>t(e))}}const sS=new eU,tU=({setView:n})=>(de.useEffect(()=>{const e=t=>{const s=t.clientX/window.innerWidth,a=t.clientY/window.innerHeight;document.querySelectorAll(".scaffold-box").forEach((u,f)=>{if(u instanceof HTMLElement){const p=(f+1)*20;u.style.transform=`translate(${s*p}px, ${a*p}px)`}});const l=document.querySelectorAll(".scaffold-line");l[0]instanceof HTMLElement&&(l[0].style.transform=`translateX(${s*10}px)`),l[1]instanceof HTMLElement&&(l[1].style.transform=`translateX(${s*-10}px)`)};return console.log("LATITUDE: CORE_INITIATED"),document.addEventListener("mousemove",e),()=>{document.removeEventListener("mousemove",e)}},[]),_.jsxs("div",{children:[_.jsx("title",{children:"LATITUDE | Creative Sovereignty"}),_.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),_.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),_.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@900&family=JetBrains+Mono:wght@300;500&display=swap",rel:"stylesheet"}),_.jsx("div",{className:"scaffold-overlay"}),_.jsx("div",{className:"scaffold-line v left-[10vw]"}),_.jsx("div",{className:"scaffold-line v left-[90vw]"}),_.jsx("div",{className:"scaffold-line h top-[15vh]"}),_.jsx("div",{className:"obsidian-reflect"}),_.jsxs("nav",{children:[_.jsx("div",{className:"logo",children:"LATITUDE"}),_.jsxs("div",{className:"nav-links",children:[_.jsx("span",{className:"mono mb-5",children:"System Status: Active"}),_.jsx("a",{href:"#",className:"nav-link",onClick:()=>n(ge.MARKETPLACE),children:"MARKETPLACE"}),_.jsx("a",{href:"#",className:"nav-link",onClick:()=>n(ge.HELP),children:"HELP"}),_.jsx("a",{href:"#",className:"nav-link",children:"MANIFESTO"})]})]}),_.jsxs("div",{className:"scaffold-box box-1",children:[_.jsx("span",{className:"mono",children:"Module 01 // Autonomy"}),_.jsx("p",{className:"mt-5 text-sm opacity-60 font-light",children:"The dismantling of creative boundaries through linear precision. We build the scaffolding for the sovereign mind."})]}),_.jsxs("div",{className:"scaffold-box box-2",children:[_.jsx("span",{className:"mono",children:"Phase // V.04"}),_.jsx("div",{className:"mt-4 w-full h-0.5 bg-red-500/40"})]}),_.jsx("main",{children:_.jsxs("div",{className:"hero-container",children:[_.jsx("div",{className:"title-wrap",children:_.jsx("h1",{children:"CREATIVE"})}),_.jsx("div",{className:"title-wrap",children:_.jsx("h1",{className:"text-transparent stroke-white animation-delay-100",children:"SOVEREIGNTY"})}),_.jsx("div",{className:"accent-block"}),_.jsxs("div",{className:"hero-meta",children:[_.jsx("div",{className:"hero-description",children:"Designing the future of independent creation. A radical framework for the obsidian age. No concessions. No compromises."}),_.jsx("div",{className:"flex items-end justify-end",children:_.jsxs("div",{className:"mono text-right",children:["Latitude Engine",_.jsx("br",{}),"Build: 2024.99.X",_.jsx("br",{}),"Location: Void_Null"]})})]})]})}),_.jsxs("div",{className:"status-bar",children:[_.jsx("div",{className:"coordinates mono",children:"40.7128° N, 74.0060° W // OFFSET: 0.003"}),_.jsx("button",{className:"cta-btn",onClick:()=>n(ge.AUTH),children:"Initiate Sovereignty"})]})]})),nU=({setView:n,isLoggedIn:e})=>_.jsxs("nav",{className:"flex items-center justify-between p-6 bg-obsidian-deep border-b border-blood-dim fixed top-0 w-full z-50",children:[_.jsx("div",{className:"logo font-cursive text-3xl text-etch-red cursor-pointer",onClick:()=>n(ge.HOME),children:"Latitude"}),_.jsx("div",{className:"nav-links flex gap-8 font-mono text-sm uppercase tracking-widest text-text-secondary",children:e?_.jsxs(_.Fragment,{children:[_.jsx("button",{onClick:()=>n(ge.PROFILE),className:"hover:text-etch-red transition-colors",children:"Profile"}),_.jsx("button",{onClick:()=>n(ge.MARKETPLACE),className:"hover:text-etch-red transition-colors",children:"Marketplace"}),_.jsx("button",{onClick:()=>n(ge.CREATE),className:"hover:text-etch-red transition-colors",children:"Studio"}),_.jsx("button",{onClick:()=>n(ge.SOCIAL),className:"hover:text-etch-red transition-colors",children:"Social (Ai DJ)"}),_.jsx("button",{onClick:()=>n(ge.BACKSTAGE),className:"hover:text-etch-red transition-colors",children:"Backstage"}),_.jsx("button",{onClick:()=>n(ge.ADMIN),className:"hover:text-etch-red transition-colors",children:"Admin"})]}):_.jsx(_.Fragment,{})})]}),iU=[{id:"1",title:"Neon Odyssey",artist:"Sol-Runner",price:1.5,type:"music",imageUrl:"https://picsum.photos/400/400?random=1",description:"A 24-minute ambient journey across the Solana desert.",isBackstageUnlocked:!0,createdAt:Date.now()-864e5},{id:"2",title:"Protocol Zero",artist:"Shadow Studio",price:4.2,type:"video",imageUrl:"https://picsum.photos/400/400?random=2",description:"Animated short exploring the genesis of the network.",createdAt:Date.now()-1728e5}],sU=()=>{const[n,e]=de.useState(ge.HOME),[t,s]=de.useState(!1),[a,l]=de.useState(sS.getCurrentUser()),[u,f]=de.useState(iU);de.useEffect(()=>{const g=sS.subscribeToAuth(E=>{!E&&(a==null?void 0:a.id)!=="super_admin"?l(null):E&&l(E)});return()=>g()},[a==null?void 0:a.id]);const p=()=>{if([ge.CREATE,ge.ADMIN,ge.PROFILE,ge.BACKSTAGE,ge.USER_MANAGEMENT,ge.MINTING].includes(n)&&!a)return _.jsx(Ad,{setView:e});switch(n){case ge.HOME:return _.jsx(tU,{setView:e});case ge.MARKETPLACE:return _.jsx(cR,{items:u,user:a,setView:e,onBuy:E=>alert("Bought NFT Signal "+E)});case ge.HELP:return _.jsx(qj,{setView:e});case ge.SOCIAL:return _.jsx(Bj,{user:a,setView:e});case ge.CREATE:return _.jsx(Uj,{user:a,userTier:a!=null&&a.isAdmin?Gn.LABEL_EXEC:(a==null?void 0:a.tier)||Gn.LISTENER,walletConnected:!0,onMint:E=>f([E,...u]),setView:e});case ge.PROFILE:return _.jsx(Hj,{user:a,nfts:u,onUpdateProfile:E=>l(E),setView:e});case ge.BACKSTAGE:return _.jsx(Yj,{user:a,setView:e});case ge.MINTING:return _.jsx(Wj,{setView:e});case ge.AUTH:return _.jsx(Ad,{setView:e});case ge.ADMIN:return a!=null&&a.isAdmin?_.jsx(Gj,{nfts:u,setView:e}):_.jsx(Ad,{setView:e});case ge.USER_MANAGEMENT:return a!=null&&a.isAdmin?_.jsx(Qj,{setView:e}):_.jsx(Ad,{setView:e});default:return _.jsx("div",{className:"text-center p-20 font-mono italic",children:"SIGNAL_LOST"})}};return _.jsxs("div",{className:"app-shell",children:[_.jsx(nU,{setView:e,isLoggedIn:!!a}),_.jsx("div",{className:"main-content",children:p()}),_.jsx(Xj,{isOpen:t,onClose:()=>s(!1),setView:e,isAdmin:(a==null?void 0:a.isAdmin)||!1}),_.jsx($j,{})]})};lR.createRoot(document.getElementById("root")).render(_.jsx(eR.StrictMode,{children:_.jsx(sU,{})}));
