(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function u(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(c){if(c.ep)return;c.ep=!0;const f=u(c);fetch(c.href,f)}})();function Ng(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Xs={exports:{}},Bi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function nb(){if(zp)return Bi;zp=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function u(o,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var m in c)m!=="key"&&(f[m]=c[m])}else f=c;return c=f.ref,{$$typeof:l,type:o,key:h,ref:c!==void 0?c:null,props:f}}return Bi.Fragment=i,Bi.jsx=u,Bi.jsxs=u,Bi}var Mp;function lb(){return Mp||(Mp=1,Xs.exports=nb()),Xs.exports}var q=lb(),Vs={exports:{}},zi={},qs={exports:{}},Zs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function ib(){return Np||(Np=1,(function(l){function i(D,Y){var F=D.length;D.push(Y);e:for(;0<F;){var ie=F-1>>>1,x=D[ie];if(0<c(x,Y))D[ie]=Y,D[F]=x,F=ie;else break e}}function u(D){return D.length===0?null:D[0]}function o(D){if(D.length===0)return null;var Y=D[0],F=D.pop();if(F!==Y){D[0]=F;e:for(var ie=0,x=D.length,N=x>>>1;ie<N;){var X=2*(ie+1)-1,Q=D[X],K=X+1,ne=D[K];if(0>c(Q,F))K<x&&0>c(ne,Q)?(D[ie]=ne,D[K]=F,ie=K):(D[ie]=Q,D[X]=F,ie=X);else if(K<x&&0>c(ne,F))D[ie]=ne,D[K]=F,ie=K;else break e}}return Y}function c(D,Y){var F=D.sortIndex-Y.sortIndex;return F!==0?F:D.id-Y.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var h=Date,m=h.now();l.unstable_now=function(){return h.now()-m}}var A=[],g=[],y=1,v=null,B=3,k=!1,L=!1,P=!1,Z=!1,J=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function W(D){for(var Y=u(g);Y!==null;){if(Y.callback===null)o(g);else if(Y.startTime<=D)o(g),Y.sortIndex=Y.expirationTime,i(A,Y);else break;Y=u(g)}}function _(D){if(P=!1,W(D),!L)if(u(A)!==null)L=!0,I||(I=!0,pe());else{var Y=u(g);Y!==null&&me(_,Y.startTime-D)}}var I=!1,ee=-1,ye=5,ve=-1;function De(){return Z?!0:!(l.unstable_now()-ve<ye)}function Ne(){if(Z=!1,I){var D=l.unstable_now();ve=D;var Y=!0;try{e:{L=!1,P&&(P=!1,H(ee),ee=-1),k=!0;var F=B;try{t:{for(W(D),v=u(A);v!==null&&!(v.expirationTime>D&&De());){var ie=v.callback;if(typeof ie=="function"){v.callback=null,B=v.priorityLevel;var x=ie(v.expirationTime<=D);if(D=l.unstable_now(),typeof x=="function"){v.callback=x,W(D),Y=!0;break t}v===u(A)&&o(A),W(D)}else o(A);v=u(A)}if(v!==null)Y=!0;else{var N=u(g);N!==null&&me(_,N.startTime-D),Y=!1}}break e}finally{v=null,B=F,k=!1}Y=void 0}}finally{Y?pe():I=!1}}}var pe;if(typeof G=="function")pe=function(){G(Ne)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,xe=Oe.port2;Oe.port1.onmessage=Ne,pe=function(){xe.postMessage(null)}}else pe=function(){J(Ne,0)};function me(D,Y){ee=J(function(){D(l.unstable_now())},Y)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(D){D.callback=null},l.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<D?Math.floor(1e3/D):5},l.unstable_getCurrentPriorityLevel=function(){return B},l.unstable_next=function(D){switch(B){case 1:case 2:case 3:var Y=3;break;default:Y=B}var F=B;B=Y;try{return D()}finally{B=F}},l.unstable_requestPaint=function(){Z=!0},l.unstable_runWithPriority=function(D,Y){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var F=B;B=D;try{return Y()}finally{B=F}},l.unstable_scheduleCallback=function(D,Y,F){var ie=l.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ie+F:ie):F=ie,D){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=F+x,D={id:y++,callback:Y,priorityLevel:D,startTime:F,expirationTime:x,sortIndex:-1},F>ie?(D.sortIndex=F,i(g,D),u(A)===null&&D===u(g)&&(P?(H(ee),ee=-1):P=!0,me(_,F-ie))):(D.sortIndex=x,i(A,D),L||k||(L=!0,I||(I=!0,pe()))),D},l.unstable_shouldYield=De,l.unstable_wrapCallback=function(D){var Y=B;return function(){var F=B;B=Y;try{return D.apply(this,arguments)}finally{B=F}}}})(Zs)),Zs}var kp;function rb(){return kp||(kp=1,qs.exports=ib()),qs.exports}var Ks={exports:{}},Ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function ub(){if(Lp)return Ae;Lp=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function B(x){return x===null||typeof x!="object"?null:(x=v&&x[v]||x["@@iterator"],typeof x=="function"?x:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,P={};function Z(x,N,X){this.props=x,this.context=N,this.refs=P,this.updater=X||k}Z.prototype.isReactComponent={},Z.prototype.setState=function(x,N){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,N,"setState")},Z.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function J(){}J.prototype=Z.prototype;function H(x,N,X){this.props=x,this.context=N,this.refs=P,this.updater=X||k}var G=H.prototype=new J;G.constructor=H,L(G,Z.prototype),G.isPureReactComponent=!0;var W=Array.isArray,_={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function ee(x,N,X,Q,K,ne){return X=ne.ref,{$$typeof:l,type:x,key:N,ref:X!==void 0?X:null,props:ne}}function ye(x,N){return ee(x.type,N,void 0,void 0,void 0,x.props)}function ve(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function De(x){var N={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(X){return N[X]})}var Ne=/\/+/g;function pe(x,N){return typeof x=="object"&&x!==null&&x.key!=null?De(""+x.key):N.toString(36)}function Oe(){}function xe(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(Oe,Oe):(x.status="pending",x.then(function(N){x.status==="pending"&&(x.status="fulfilled",x.value=N)},function(N){x.status==="pending"&&(x.status="rejected",x.reason=N)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function me(x,N,X,Q,K){var ne=typeof x;(ne==="undefined"||ne==="boolean")&&(x=null);var te=!1;if(x===null)te=!0;else switch(ne){case"bigint":case"string":case"number":te=!0;break;case"object":switch(x.$$typeof){case l:case i:te=!0;break;case y:return te=x._init,me(te(x._payload),N,X,Q,K)}}if(te)return K=K(x),te=Q===""?"."+pe(x,0):Q,W(K)?(X="",te!=null&&(X=te.replace(Ne,"$&/")+"/"),me(K,N,X,"",function(V){return V})):K!=null&&(ve(K)&&(K=ye(K,X+(K.key==null||x&&x.key===K.key?"":(""+K.key).replace(Ne,"$&/")+"/")+te)),N.push(K)),1;te=0;var se=Q===""?".":Q+":";if(W(x))for(var he=0;he<x.length;he++)Q=x[he],ne=se+pe(Q,he),te+=me(Q,N,X,ne,K);else if(he=B(x),typeof he=="function")for(x=he.call(x),he=0;!(Q=x.next()).done;)Q=Q.value,ne=se+pe(Q,he++),te+=me(Q,N,X,ne,K);else if(ne==="object"){if(typeof x.then=="function")return me(xe(x),N,X,Q,K);throw N=String(x),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return te}function D(x,N,X){if(x==null)return x;var Q=[],K=0;return me(x,Q,"","",function(ne){return N.call(X,ne,K++)}),Q}function Y(x){if(x._status===-1){var N=x._result;N=N(),N.then(function(X){(x._status===0||x._status===-1)&&(x._status=1,x._result=X)},function(X){(x._status===0||x._status===-1)&&(x._status=2,x._result=X)}),x._status===-1&&(x._status=0,x._result=N)}if(x._status===1)return x._result.default;throw x._result}var F=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function ie(){}return Ae.Children={map:D,forEach:function(x,N,X){D(x,function(){N.apply(this,arguments)},X)},count:function(x){var N=0;return D(x,function(){N++}),N},toArray:function(x){return D(x,function(N){return N})||[]},only:function(x){if(!ve(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Ae.Component=Z,Ae.Fragment=u,Ae.Profiler=c,Ae.PureComponent=H,Ae.StrictMode=o,Ae.Suspense=A,Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_,Ae.__COMPILER_RUNTIME={__proto__:null,c:function(x){return _.H.useMemoCache(x)}},Ae.cache=function(x){return function(){return x.apply(null,arguments)}},Ae.cloneElement=function(x,N,X){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var Q=L({},x.props),K=x.key,ne=void 0;if(N!=null)for(te in N.ref!==void 0&&(ne=void 0),N.key!==void 0&&(K=""+N.key),N)!I.call(N,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&N.ref===void 0||(Q[te]=N[te]);var te=arguments.length-2;if(te===1)Q.children=X;else if(1<te){for(var se=Array(te),he=0;he<te;he++)se[he]=arguments[he+2];Q.children=se}return ee(x.type,K,void 0,void 0,ne,Q)},Ae.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:f,_context:x},x},Ae.createElement=function(x,N,X){var Q,K={},ne=null;if(N!=null)for(Q in N.key!==void 0&&(ne=""+N.key),N)I.call(N,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(K[Q]=N[Q]);var te=arguments.length-2;if(te===1)K.children=X;else if(1<te){for(var se=Array(te),he=0;he<te;he++)se[he]=arguments[he+2];K.children=se}if(x&&x.defaultProps)for(Q in te=x.defaultProps,te)K[Q]===void 0&&(K[Q]=te[Q]);return ee(x,ne,void 0,void 0,null,K)},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(x){return{$$typeof:m,render:x}},Ae.isValidElement=ve,Ae.lazy=function(x){return{$$typeof:y,_payload:{_status:-1,_result:x},_init:Y}},Ae.memo=function(x,N){return{$$typeof:g,type:x,compare:N===void 0?null:N}},Ae.startTransition=function(x){var N=_.T,X={};_.T=X;try{var Q=x(),K=_.S;K!==null&&K(X,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(ie,F)}catch(ne){F(ne)}finally{_.T=N}},Ae.unstable_useCacheRefresh=function(){return _.H.useCacheRefresh()},Ae.use=function(x){return _.H.use(x)},Ae.useActionState=function(x,N,X){return _.H.useActionState(x,N,X)},Ae.useCallback=function(x,N){return _.H.useCallback(x,N)},Ae.useContext=function(x){return _.H.useContext(x)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(x,N){return _.H.useDeferredValue(x,N)},Ae.useEffect=function(x,N,X){var Q=_.H;if(typeof X=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Q.useEffect(x,N)},Ae.useId=function(){return _.H.useId()},Ae.useImperativeHandle=function(x,N,X){return _.H.useImperativeHandle(x,N,X)},Ae.useInsertionEffect=function(x,N){return _.H.useInsertionEffect(x,N)},Ae.useLayoutEffect=function(x,N){return _.H.useLayoutEffect(x,N)},Ae.useMemo=function(x,N){return _.H.useMemo(x,N)},Ae.useOptimistic=function(x,N){return _.H.useOptimistic(x,N)},Ae.useReducer=function(x,N,X){return _.H.useReducer(x,N,X)},Ae.useRef=function(x){return _.H.useRef(x)},Ae.useState=function(x){return _.H.useState(x)},Ae.useSyncExternalStore=function(x,N,X){return _.H.useSyncExternalStore(x,N,X)},Ae.useTransition=function(){return _.H.useTransition()},Ae.version="19.1.1",Ae}var $p;function Tc(){return $p||($p=1,Ks.exports=ub()),Ks.exports}var Is={exports:{}},bt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function ob(){if(Qp)return bt;Qp=1;var l=Tc();function i(A){var g="https://react.dev/errors/"+A;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+A+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(i(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(A,g,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:v==null?null:""+v,children:A,containerInfo:g,implementation:y}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(A,g){if(A==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,bt.createPortal=function(A,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return f(A,g,null,y)},bt.flushSync=function(A){var g=h.T,y=o.p;try{if(h.T=null,o.p=2,A)return A()}finally{h.T=g,o.p=y,o.d.f()}},bt.preconnect=function(A,g){typeof A=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(A,g))},bt.prefetchDNS=function(A){typeof A=="string"&&o.d.D(A)},bt.preinit=function(A,g){if(typeof A=="string"&&g&&typeof g.as=="string"){var y=g.as,v=m(y,g.crossOrigin),B=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?o.d.S(A,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:B,fetchPriority:k}):y==="script"&&o.d.X(A,{crossOrigin:v,integrity:B,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},bt.preinitModule=function(A,g){if(typeof A=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=m(g.as,g.crossOrigin);o.d.M(A,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(A)},bt.preload=function(A,g){if(typeof A=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,v=m(y,g.crossOrigin);o.d.L(A,y,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},bt.preloadModule=function(A,g){if(typeof A=="string")if(g){var y=m(g.as,g.crossOrigin);o.d.m(A,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(A)},bt.requestFormReset=function(A){o.d.r(A)},bt.unstable_batchedUpdates=function(A,g){return A(g)},bt.useFormState=function(A,g,y){return h.H.useFormState(A,g,y)},bt.useFormStatus=function(){return h.H.useHostTransitionStatus()},bt.version="19.1.1",bt}var Up;function kg(){if(Up)return Is.exports;Up=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),Is.exports=ob(),Is.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function sb(){if(jp)return zi;jp=1;var l=rb(),i=Tc(),u=kg();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(f(e)!==e)throw Error(o(188))}function A(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,n=t;;){var r=a.return;if(r===null)break;var s=r.alternate;if(s===null){if(n=r.return,n!==null){a=n;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===a)return m(r),e;if(s===n)return m(r),t;s=s.sibling}throw Error(o(188))}if(a.return!==n.return)a=r,n=s;else{for(var d=!1,p=r.child;p;){if(p===a){d=!0,a=r,n=s;break}if(p===n){d=!0,n=r,a=s;break}p=p.sibling}if(!d){for(p=s.child;p;){if(p===a){d=!0,a=s,n=r;break}if(p===n){d=!0,n=s,a=r;break}p=p.sibling}if(!d)throw Error(o(189))}}if(a.alternate!==n)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),G=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),ve=Symbol.for("react.activity"),De=Symbol.for("react.memo_cache_sentinel"),Ne=Symbol.iterator;function pe(e){return e===null||typeof e!="object"?null:(e=Ne&&e[Ne]||e["@@iterator"],typeof e=="function"?e:null)}var Oe=Symbol.for("react.client.reference");function xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case Z:return"Profiler";case P:return"StrictMode";case _:return"Suspense";case I:return"SuspenseList";case ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case G:return(e.displayName||"Context")+".Provider";case H:return(e._context.displayName||"Context")+".Consumer";case W:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:xe(e.type)||"Memo";case ye:t=e._payload,e=e._init;try{return xe(e(t))}catch{}}return null}var me=Array.isArray,D=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},ie=[],x=-1;function N(e){return{current:e}}function X(e){0>x||(e.current=ie[x],ie[x]=null,x--)}function Q(e,t){x++,ie[x]=e.current,e.current=t}var K=N(null),ne=N(null),te=N(null),se=N(null);function he(e,t){switch(Q(te,t),Q(ne,e),Q(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ip(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ip(t),e=rp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(K),Q(K,e)}function V(){X(K),X(ne),X(te)}function de(e){e.memoizedState!==null&&Q(se,e);var t=K.current,a=rp(t,e.type);t!==a&&(Q(ne,e),Q(K,a))}function ge(e){ne.current===e&&(X(K),X(ne)),se.current===e&&(X(se),wi._currentValue=F)}var Ce=Object.prototype.hasOwnProperty,$e=l.unstable_scheduleCallback,Ie=l.unstable_cancelCallback,Je=l.unstable_shouldYield,vt=l.unstable_requestPaint,Pe=l.unstable_now,sa=l.unstable_getCurrentPriorityLevel,qt=l.unstable_ImmediatePriority,kn=l.unstable_UserBlockingPriority,Ra=l.unstable_NormalPriority,nn=l.unstable_LowPriority,Ml=l.unstable_IdlePriority,Hc=l.log,H0=l.unstable_setDisableYieldValue,Nl=null,Ct=null;function Da(e){if(typeof Hc=="function"&&H0(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Nl,e)}catch{}}var Ot=Math.clz32?Math.clz32:Y0,_0=Math.log,G0=Math.LN2;function Y0(e){return e>>>=0,e===0?32:31-(_0(e)/G0|0)|0}var Yi=256,Xi=4194304;function ln(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vi(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var p=n&134217727;return p!==0?(n=p&~s,n!==0?r=ln(n):(d&=p,d!==0?r=ln(d):a||(a=p&~e,a!==0&&(r=ln(a))))):(p=n&~s,p!==0?r=ln(p):d!==0?r=ln(d):a||(a=n&~e,a!==0&&(r=ln(a)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:r}function kl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function X0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _c(){var e=Yi;return Yi<<=1,(Yi&4194048)===0&&(Yi=256),e}function Gc(){var e=Xi;return Xi<<=1,(Xi&62914560)===0&&(Xi=4194304),e}function Mu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ll(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function V0(e,t,a,n,r,s){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var p=e.entanglements,b=e.expirationTimes,w=e.hiddenUpdates;for(a=d&~a;0<a;){var $=31-Ot(a),j=1<<$;p[$]=0,b[$]=-1;var C=w[$];if(C!==null)for(w[$]=null,$=0;$<C.length;$++){var O=C[$];O!==null&&(O.lane&=-536870913)}a&=~j}n!==0&&Yc(e,n,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function Yc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Ot(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function Xc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Ot(a),r=1<<n;r&t|e[n]&t&&(e[n]|=t),a&=~r}}function Nu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ku(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vc(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:wp(e.type))}function q0(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var Ba=Math.random().toString(36).slice(2),mt="__reactFiber$"+Ba,xt="__reactProps$"+Ba,Ln="__reactContainer$"+Ba,Lu="__reactEvents$"+Ba,Z0="__reactListeners$"+Ba,K0="__reactHandles$"+Ba,qc="__reactResources$"+Ba,$l="__reactMarker$"+Ba;function $u(e){delete e[mt],delete e[xt],delete e[Lu],delete e[Z0],delete e[K0]}function $n(e){var t=e[mt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ln]||a[mt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=cp(e);e!==null;){if(a=e[mt])return a;e=cp(e)}return t}e=a,a=e.parentNode}return null}function Qn(e){if(e=e[mt]||e[Ln]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ql(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Un(e){var t=e[qc];return t||(t=e[qc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function rt(e){e[$l]=!0}var Zc=new Set,Kc={};function rn(e,t){jn(e,t),jn(e+"Capture",t)}function jn(e,t){for(Kc[e]=t,e=0;e<t.length;e++)Zc.add(t[e])}var I0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ic={},Jc={};function J0(e){return Ce.call(Jc,e)?!0:Ce.call(Ic,e)?!1:I0.test(e)?Jc[e]=!0:(Ic[e]=!0,!1)}function qi(e,t,a){if(J0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Zi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ca(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var Qu,Fc;function Hn(e){if(Qu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Qu=t&&t[1]||"",Fc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qu+e+Fc}var Uu=!1;function ju(e,t){if(!e||Uu)return"";Uu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(O){var C=O}Reflect.construct(e,[],j)}else{try{j.call()}catch(O){C=O}e.call(j.prototype)}}else{try{throw Error()}catch(O){C=O}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(O){if(O&&C&&typeof O.stack=="string")return[O.stack,C.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),d=s[0],p=s[1];if(d&&p){var b=d.split(`
`),w=p.split(`
`);for(r=n=0;n<b.length&&!b[n].includes("DetermineComponentFrameRoot");)n++;for(;r<w.length&&!w[r].includes("DetermineComponentFrameRoot");)r++;if(n===b.length||r===w.length)for(n=b.length-1,r=w.length-1;1<=n&&0<=r&&b[n]!==w[r];)r--;for(;1<=n&&0<=r;n--,r--)if(b[n]!==w[r]){if(n!==1||r!==1)do if(n--,r--,0>r||b[n]!==w[r]){var $=`
`+b[n].replace(" at new "," at ");return e.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",e.displayName)),$}while(1<=n&&0<=r);break}}}finally{Uu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Hn(a):""}function F0(e){switch(e.tag){case 26:case 27:case 5:return Hn(e.type);case 16:return Hn("Lazy");case 13:return Hn("Suspense");case 19:return Hn("SuspenseList");case 0:case 15:return ju(e.type,!1);case 11:return ju(e.type.render,!1);case 1:return ju(e.type,!0);case 31:return Hn("Activity");default:return""}}function Wc(e){try{var t="";do t+=F0(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function W0(e){var t=Pc(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){n=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ki(e){e._valueTracker||(e._valueTracker=W0(e))}function ef(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Pc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var P0=/[\n"\\]/g;function Qt(e){return e.replace(P0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Hu(e,t,a,n,r,s,d,p){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$t(t)):e.value!==""+$t(t)&&(e.value=""+$t(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?_u(e,d,$t(t)):a!=null?_u(e,d,$t(a)):n!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+$t(p):e.removeAttribute("name")}function tf(e,t,a,n,r,s,d,p){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;a=a!=null?""+$t(a):"",t=t!=null?""+$t(t):a,p||t===e.value||(e.value=t),e.defaultValue=t}n=n??r,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=p?e.checked:!!n,e.defaultChecked=!!n,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function _u(e,t,a){t==="number"&&Ii(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function _n(e,t,a,n){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&n&&(e[a].defaultSelected=!0)}else{for(a=""+$t(a),t=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,n&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function af(e,t,a){if(t!=null&&(t=""+$t(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+$t(a):""}function nf(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(o(92));if(me(n)){if(1<n.length)throw Error(o(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=$t(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function Gn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var em=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lf(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||em.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function rf(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var r in t)n=t[r],t.hasOwnProperty(r)&&a[r]!==n&&lf(e,r,n)}else for(var s in t)t.hasOwnProperty(s)&&lf(e,s,t[s])}function Gu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),am=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ji(e){return am.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Yu=null;function Xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yn=null,Xn=null;function uf(e){var t=Qn(e);if(t&&(e=t.stateNode)){var a=e[xt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Hu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Qt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var r=n[xt]||null;if(!r)throw Error(o(90));Hu(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&ef(n)}break e;case"textarea":af(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&_n(e,!!a.multiple,t,!1)}}}var Vu=!1;function of(e,t,a){if(Vu)return e(t,a);Vu=!0;try{var n=e(t);return n}finally{if(Vu=!1,(Yn!==null||Xn!==null)&&(Lr(),Yn&&(t=Yn,e=Xn,Xn=Yn=null,uf(t),e)))for(t=0;t<e.length;t++)uf(e[t])}}function Ul(e,t){var a=e.stateNode;if(a===null)return null;var n=a[xt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=!1;if(fa)try{var jl={};Object.defineProperty(jl,"passive",{get:function(){qu=!0}}),window.addEventListener("test",jl,jl),window.removeEventListener("test",jl,jl)}catch{qu=!1}var za=null,Zu=null,Fi=null;function sf(){if(Fi)return Fi;var e,t=Zu,a=t.length,n,r="value"in za?za.value:za.textContent,s=r.length;for(e=0;e<a&&t[e]===r[e];e++);var d=a-e;for(n=1;n<=d&&t[a-n]===r[s-n];n++);return Fi=r.slice(e,1<n?1-n:void 0)}function Wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pi(){return!0}function cf(){return!1}function St(e){function t(a,n,r,s,d){this._reactName=a,this._targetInst=r,this.type=n,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(a=e[p],this[p]=a?a(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Pi:cf,this.isPropagationStopped=cf,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},er=St(un),Hl=y({},un,{view:0,detail:0}),nm=St(Hl),Ku,Iu,_l,tr=y({},Hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_l&&(_l&&e.type==="mousemove"?(Ku=e.screenX-_l.screenX,Iu=e.screenY-_l.screenY):Iu=Ku=0,_l=e),Ku)},movementY:function(e){return"movementY"in e?e.movementY:Iu}}),ff=St(tr),lm=y({},tr,{dataTransfer:0}),im=St(lm),rm=y({},Hl,{relatedTarget:0}),Ju=St(rm),um=y({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),om=St(um),sm=y({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cm=St(sm),fm=y({},un,{data:0}),df=St(fm),dm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pm[e])?!!t[e]:!1}function Fu(){return gm}var mm=y({},Hl,{key:function(e){if(e.key){var t=dm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(e){return e.type==="keypress"?Wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Am=St(mm),bm=y({},tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hf=St(bm),ym=y({},Hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),vm=St(ym),xm=y({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sm=St(xm),Em=y({},tr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tm=St(Em),wm=y({},un,{newState:0,oldState:0}),Cm=St(wm),Om=[9,13,27,32],Wu=fa&&"CompositionEvent"in window,Gl=null;fa&&"documentMode"in document&&(Gl=document.documentMode);var Rm=fa&&"TextEvent"in window&&!Gl,pf=fa&&(!Wu||Gl&&8<Gl&&11>=Gl),gf=" ",mf=!1;function Af(e,t){switch(e){case"keyup":return Om.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function Dm(e,t){switch(e){case"compositionend":return bf(t);case"keypress":return t.which!==32?null:(mf=!0,gf);case"textInput":return e=t.data,e===gf&&mf?null:e;default:return null}}function Bm(e,t){if(Vn)return e==="compositionend"||!Wu&&Af(e,t)?(e=sf(),Fi=Zu=za=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pf&&t.locale!=="ko"?null:t.data;default:return null}}var zm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zm[e.type]:t==="textarea"}function vf(e,t,a,n){Yn?Xn?Xn.push(n):Xn=[n]:Yn=n,t=_r(t,"onChange"),0<t.length&&(a=new er("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Yl=null,Xl=null;function Mm(e){ep(e,0)}function ar(e){var t=Ql(e);if(ef(t))return e}function xf(e,t){if(e==="change")return t}var Sf=!1;if(fa){var Pu;if(fa){var eo="oninput"in document;if(!eo){var Ef=document.createElement("div");Ef.setAttribute("oninput","return;"),eo=typeof Ef.oninput=="function"}Pu=eo}else Pu=!1;Sf=Pu&&(!document.documentMode||9<document.documentMode)}function Tf(){Yl&&(Yl.detachEvent("onpropertychange",wf),Xl=Yl=null)}function wf(e){if(e.propertyName==="value"&&ar(Xl)){var t=[];vf(t,Xl,e,Xu(e)),of(Mm,t)}}function Nm(e,t,a){e==="focusin"?(Tf(),Yl=t,Xl=a,Yl.attachEvent("onpropertychange",wf)):e==="focusout"&&Tf()}function km(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ar(Xl)}function Lm(e,t){if(e==="click")return ar(t)}function $m(e,t){if(e==="input"||e==="change")return ar(t)}function Qm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:Qm;function Vl(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var r=a[n];if(!Ce.call(t,r)||!Rt(e[r],t[r]))return!1}return!0}function Cf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Of(e,t){var a=Cf(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Cf(a)}}function Rf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Df(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ii(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ii(e.document)}return t}function to(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Um=fa&&"documentMode"in document&&11>=document.documentMode,qn=null,ao=null,ql=null,no=!1;function Bf(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;no||qn==null||qn!==Ii(n)||(n=qn,"selectionStart"in n&&to(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ql&&Vl(ql,n)||(ql=n,n=_r(ao,"onSelect"),0<n.length&&(t=new er("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=qn)))}function on(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Zn={animationend:on("Animation","AnimationEnd"),animationiteration:on("Animation","AnimationIteration"),animationstart:on("Animation","AnimationStart"),transitionrun:on("Transition","TransitionRun"),transitionstart:on("Transition","TransitionStart"),transitioncancel:on("Transition","TransitionCancel"),transitionend:on("Transition","TransitionEnd")},lo={},zf={};fa&&(zf=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function sn(e){if(lo[e])return lo[e];if(!Zn[e])return e;var t=Zn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in zf)return lo[e]=t[a];return e}var Mf=sn("animationend"),Nf=sn("animationiteration"),kf=sn("animationstart"),jm=sn("transitionrun"),Hm=sn("transitionstart"),_m=sn("transitioncancel"),Lf=sn("transitionend"),$f=new Map,io="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");io.push("scrollEnd");function Zt(e,t){$f.set(e,t),rn(t,[e])}var Qf=new WeakMap;function Ut(e,t){if(typeof e=="object"&&e!==null){var a=Qf.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Wc(t)},Qf.set(e,t),t)}return{value:e,source:t,stack:Wc(t)}}var jt=[],Kn=0,ro=0;function nr(){for(var e=Kn,t=ro=Kn=0;t<e;){var a=jt[t];jt[t++]=null;var n=jt[t];jt[t++]=null;var r=jt[t];jt[t++]=null;var s=jt[t];if(jt[t++]=null,n!==null&&r!==null){var d=n.pending;d===null?r.next=r:(r.next=d.next,d.next=r),n.pending=r}s!==0&&Uf(a,r,s)}}function lr(e,t,a,n){jt[Kn++]=e,jt[Kn++]=t,jt[Kn++]=a,jt[Kn++]=n,ro|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function uo(e,t,a,n){return lr(e,t,a,n),ir(e)}function In(e,t){return lr(e,null,null,t),ir(e)}function Uf(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var r=!1,s=e.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-Ot(a),e=s.hiddenUpdates,n=e[r],n===null?e[r]=[t]:n.push(t),t.lane=a|536870912),s):null}function ir(e){if(50<Ai)throw Ai=0,ps=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Jn={};function Gm(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,a,n){return new Gm(e,t,a,n)}function oo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function da(e,t){var a=e.alternate;return a===null?(a=Dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function jf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function rr(e,t,a,n,r,s){var d=0;if(n=e,typeof e=="function")oo(e)&&(d=1);else if(typeof e=="string")d=XA(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ve:return e=Dt(31,a,t,r),e.elementType=ve,e.lanes=s,e;case L:return cn(a.children,r,s,t);case P:d=8,r|=24;break;case Z:return e=Dt(12,a,t,r|2),e.elementType=Z,e.lanes=s,e;case _:return e=Dt(13,a,t,r),e.elementType=_,e.lanes=s,e;case I:return e=Dt(19,a,t,r),e.elementType=I,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:case G:d=10;break e;case H:d=9;break e;case W:d=11;break e;case ee:d=14;break e;case ye:d=16,n=null;break e}d=29,a=Error(o(130,e===null?"null":typeof e,"")),n=null}return t=Dt(d,a,t,r),t.elementType=e,t.type=n,t.lanes=s,t}function cn(e,t,a,n){return e=Dt(7,e,n,t),e.lanes=a,e}function so(e,t,a){return e=Dt(6,e,null,t),e.lanes=a,e}function co(e,t,a){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Fn=[],Wn=0,ur=null,or=0,Ht=[],_t=0,fn=null,ha=1,pa="";function dn(e,t){Fn[Wn++]=or,Fn[Wn++]=ur,ur=e,or=t}function Hf(e,t,a){Ht[_t++]=ha,Ht[_t++]=pa,Ht[_t++]=fn,fn=e;var n=ha;e=pa;var r=32-Ot(n)-1;n&=~(1<<r),a+=1;var s=32-Ot(t)+r;if(30<s){var d=r-r%5;s=(n&(1<<d)-1).toString(32),n>>=d,r-=d,ha=1<<32-Ot(t)+r|a<<r|n,pa=s+e}else ha=1<<s|a<<r|n,pa=e}function fo(e){e.return!==null&&(dn(e,1),Hf(e,1,0))}function ho(e){for(;e===ur;)ur=Fn[--Wn],Fn[Wn]=null,or=Fn[--Wn],Fn[Wn]=null;for(;e===fn;)fn=Ht[--_t],Ht[_t]=null,pa=Ht[--_t],Ht[_t]=null,ha=Ht[--_t],Ht[_t]=null}var yt=null,qe=null,ze=!1,hn=null,ea=!1,po=Error(o(519));function pn(e){var t=Error(o(418,""));throw Il(Ut(t,e)),po}function _f(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[mt]=e,t[xt]=n,a){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(a=0;a<yi.length;a++)we(yi[a],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":we("invalid",t),tf(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Ki(t);break;case"select":we("invalid",t);break;case"textarea":we("invalid",t),nf(t,n.value,n.defaultValue,n.children),Ki(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||lp(t.textContent,a)?(n.popover!=null&&(we("beforetoggle",t),we("toggle",t)),n.onScroll!=null&&we("scroll",t),n.onScrollEnd!=null&&we("scrollend",t),n.onClick!=null&&(t.onclick=Gr),t=!0):t=!1,t||pn(e)}function Gf(e){for(yt=e.return;yt;)switch(yt.tag){case 5:case 13:ea=!1;return;case 27:case 3:ea=!0;return;default:yt=yt.return}}function Zl(e){if(e!==yt)return!1;if(!ze)return Gf(e),ze=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bs(e.type,e.memoizedProps)),a=!a),a&&qe&&pn(e),Gf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){qe=It(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}qe=null}}else t===27?(t=qe,Za(e.type)?(e=ks,ks=null,qe=e):qe=t):qe=yt?It(e.stateNode.nextSibling):null;return!0}function Kl(){qe=yt=null,ze=!1}function Yf(){var e=hn;return e!==null&&(wt===null?wt=e:wt.push.apply(wt,e),hn=null),e}function Il(e){hn===null?hn=[e]:hn.push(e)}var go=N(null),gn=null,ga=null;function Ma(e,t,a){Q(go,t._currentValue),t._currentValue=a}function ma(e){e._currentValue=go.current,X(go)}function mo(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Ao(e,t,a,n){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var d=r.child;s=s.firstContext;e:for(;s!==null;){var p=s;s=r;for(var b=0;b<t.length;b++)if(p.context===t[b]){s.lanes|=a,p=s.alternate,p!==null&&(p.lanes|=a),mo(s.return,a,e),n||(d=null);break e}s=p.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(o(341));d.lanes|=a,s=d.alternate,s!==null&&(s.lanes|=a),mo(d,a,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function Jl(e,t,a,n){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(o(387));if(d=d.memoizedProps,d!==null){var p=r.type;Rt(r.pendingProps.value,d.value)||(e!==null?e.push(p):e=[p])}}else if(r===se.current){if(d=r.alternate,d===null)throw Error(o(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(wi):e=[wi])}r=r.return}e!==null&&Ao(t,e,a,n),t.flags|=262144}function sr(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function mn(e){gn=e,ga=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function At(e){return Xf(gn,e)}function cr(e,t){return gn===null&&mn(e),Xf(e,t)}function Xf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ga===null){if(e===null)throw Error(o(308));ga=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ga=ga.next=t;return a}var Ym=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Xm=l.unstable_scheduleCallback,Vm=l.unstable_NormalPriority,lt={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bo(){return{controller:new Ym,data:new Map,refCount:0}}function Fl(e){e.refCount--,e.refCount===0&&Xm(Vm,function(){e.controller.abort()})}var Wl=null,yo=0,Pn=0,el=null;function qm(e,t){if(Wl===null){var a=Wl=[];yo=0,Pn=xs(),el={status:"pending",value:void 0,then:function(n){a.push(n)}}}return yo++,t.then(Vf,Vf),t}function Vf(){if(--yo===0&&Wl!==null){el!==null&&(el.status="fulfilled");var e=Wl;Wl=null,Pn=0,el=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Zm(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var r=0;r<a.length;r++)(0,a[r])(t)},function(r){for(n.status="rejected",n.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),n}var qf=D.S;D.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&qm(e,t),qf!==null&&qf(e,t)};var An=N(null);function vo(){var e=An.current;return e!==null?e:Ge.pooledCache}function fr(e,t){t===null?Q(An,An.current):Q(An,t.pool)}function Zf(){var e=vo();return e===null?null:{parent:lt._currentValue,pool:e}}var Pl=Error(o(460)),Kf=Error(o(474)),dr=Error(o(542)),xo={then:function(){}};function If(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hr(){}function Jf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(hr,hr),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wf(e),e;default:if(typeof t.status=="string")t.then(hr,hr);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=n}},function(n){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wf(e),e}throw ei=t,Pl}}var ei=null;function Ff(){if(ei===null)throw Error(o(459));var e=ei;return ei=null,e}function Wf(e){if(e===Pl||e===dr)throw Error(o(483))}var Na=!1;function So(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Eo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ke&2)!==0){var r=n.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),n.pending=t,t=ir(e),Uf(e,null,a),t}return lr(e,n,t,a),ir(e)}function ti(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Xc(e,a)}}function To(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var r=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?r=s=d:s=s.next=d,a=a.next}while(a!==null);s===null?r=s=t:s=s.next=t}else r=s=t;a={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var wo=!1;function ai(){if(wo){var e=el;if(e!==null)throw e}}function ni(e,t,a,n){wo=!1;var r=e.updateQueue;Na=!1;var s=r.firstBaseUpdate,d=r.lastBaseUpdate,p=r.shared.pending;if(p!==null){r.shared.pending=null;var b=p,w=b.next;b.next=null,d===null?s=w:d.next=w,d=b;var $=e.alternate;$!==null&&($=$.updateQueue,p=$.lastBaseUpdate,p!==d&&(p===null?$.firstBaseUpdate=w:p.next=w,$.lastBaseUpdate=b))}if(s!==null){var j=r.baseState;d=0,$=w=b=null,p=s;do{var C=p.lane&-536870913,O=C!==p.lane;if(O?(Re&C)===C:(n&C)===C){C!==0&&C===Pn&&(wo=!0),$!==null&&($=$.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var ce=e,ue=p;C=t;var je=a;switch(ue.tag){case 1:if(ce=ue.payload,typeof ce=="function"){j=ce.call(je,j,C);break e}j=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=ue.payload,C=typeof ce=="function"?ce.call(je,j,C):ce,C==null)break e;j=y({},j,C);break e;case 2:Na=!0}}C=p.callback,C!==null&&(e.flags|=64,O&&(e.flags|=8192),O=r.callbacks,O===null?r.callbacks=[C]:O.push(C))}else O={lane:C,tag:p.tag,payload:p.payload,callback:p.callback,next:null},$===null?(w=$=O,b=j):$=$.next=O,d|=C;if(p=p.next,p===null){if(p=r.shared.pending,p===null)break;O=p,p=O.next,O.next=null,r.lastBaseUpdate=O,r.shared.pending=null}}while(!0);$===null&&(b=j),r.baseState=b,r.firstBaseUpdate=w,r.lastBaseUpdate=$,s===null&&(r.shared.lanes=0),Ya|=d,e.lanes=d,e.memoizedState=j}}function Pf(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function ed(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pf(a[e],t)}var tl=N(null),pr=N(0);function td(e,t){e=Ea,Q(pr,e),Q(tl,t),Ea=e|t.baseLanes}function Co(){Q(pr,Ea),Q(tl,tl.current)}function Oo(){Ea=pr.current,X(tl),X(pr)}var $a=0,Se=null,Qe=null,et=null,gr=!1,al=!1,bn=!1,mr=0,li=0,nl=null,Km=0;function Fe(){throw Error(o(321))}function Ro(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Rt(e[a],t[a]))return!1;return!0}function Do(e,t,a,n,r,s){return $a=s,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Ud:jd,bn=!1,s=a(n,r),bn=!1,al&&(s=nd(t,a,n,r)),ad(e),s}function ad(e){D.H=Sr;var t=Qe!==null&&Qe.next!==null;if($a=0,et=Qe=Se=null,gr=!1,li=0,nl=null,t)throw Error(o(300));e===null||ut||(e=e.dependencies,e!==null&&sr(e)&&(ut=!0))}function nd(e,t,a,n){Se=e;var r=0;do{if(al&&(nl=null),li=0,al=!1,25<=r)throw Error(o(301));if(r+=1,et=Qe=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}D.H=tA,s=t(a,n)}while(al);return s}function Im(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?ii(t):t,e=e.useState()[0],(Qe!==null?Qe.memoizedState:null)!==e&&(Se.flags|=1024),t}function Bo(){var e=mr!==0;return mr=0,e}function zo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Mo(e){if(gr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gr=!1}$a=0,et=Qe=Se=null,al=!1,li=mr=0,nl=null}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Se.memoizedState=et=e:et=et.next=e,et}function tt(){if(Qe===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=et===null?Se.memoizedState:et.next;if(t!==null)et=t,Qe=e;else{if(e===null)throw Se.alternate===null?Error(o(467)):Error(o(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},et===null?Se.memoizedState=et=e:et=et.next=e}return et}function No(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ii(e){var t=li;return li+=1,nl===null&&(nl=[]),e=Jf(nl,e,t),t=Se,(et===null?t.memoizedState:et.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Ud:jd),e}function Ar(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ii(e);if(e.$$typeof===G)return At(e)}throw Error(o(438,String(e)))}function ko(e){var t=null,a=Se.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=Se.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=No(),Se.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=De;return t.index++,a}function Aa(e,t){return typeof t=="function"?t(e):t}function br(e){var t=tt();return Lo(t,Qe,e)}function Lo(e,t,a){var n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=a;var r=e.baseQueue,s=n.pending;if(s!==null){if(r!==null){var d=r.next;r.next=s.next,s.next=d}t.baseQueue=r=s,n.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var p=d=null,b=null,w=t,$=!1;do{var j=w.lane&-536870913;if(j!==w.lane?(Re&j)===j:($a&j)===j){var C=w.revertLane;if(C===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),j===Pn&&($=!0);else if(($a&C)===C){w=w.next,C===Pn&&($=!0);continue}else j={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},b===null?(p=b=j,d=s):b=b.next=j,Se.lanes|=C,Ya|=C;j=w.action,bn&&a(s,j),s=w.hasEagerState?w.eagerState:a(s,j)}else C={lane:j,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},b===null?(p=b=C,d=s):b=b.next=C,Se.lanes|=j,Ya|=j;w=w.next}while(w!==null&&w!==t);if(b===null?d=s:b.next=p,!Rt(s,e.memoizedState)&&(ut=!0,$&&(a=el,a!==null)))throw a;e.memoizedState=s,e.baseState=d,e.baseQueue=b,n.lastRenderedState=s}return r===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function $o(e){var t=tt(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var n=a.dispatch,r=a.pending,s=t.memoizedState;if(r!==null){a.pending=null;var d=r=r.next;do s=e(s,d.action),d=d.next;while(d!==r);Rt(s,t.memoizedState)||(ut=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,n]}function ld(e,t,a){var n=Se,r=tt(),s=ze;if(s){if(a===void 0)throw Error(o(407));a=a()}else a=t();var d=!Rt((Qe||r).memoizedState,a);d&&(r.memoizedState=a,ut=!0),r=r.queue;var p=ud.bind(null,n,r,e);if(ri(2048,8,p,[e]),r.getSnapshot!==t||d||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,ll(9,yr(),rd.bind(null,n,r,a,t),null),Ge===null)throw Error(o(349));s||($a&124)!==0||id(n,t,a)}return a}function id(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Se.updateQueue,t===null?(t=No(),Se.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function rd(e,t,a,n){t.value=a,t.getSnapshot=n,od(t)&&sd(e)}function ud(e,t,a){return a(function(){od(t)&&sd(e)})}function od(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Rt(e,a)}catch{return!0}}function sd(e){var t=In(e,2);t!==null&&kt(t,e,2)}function Qo(e){var t=Et();if(typeof e=="function"){var a=e;if(e=a(),bn){Da(!0);try{a()}finally{Da(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:e},t}function cd(e,t,a,n){return e.baseState=a,Lo(e,Qe,typeof n=="function"?n:Aa)}function Jm(e,t,a,n,r){if(xr(e))throw Error(o(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};D.T!==null?a(!0):s.isTransition=!1,n(s),a=t.pending,a===null?(s.next=t.pending=s,fd(t,s)):(s.next=a.next,t.pending=a.next=s)}}function fd(e,t){var a=t.action,n=t.payload,r=e.state;if(t.isTransition){var s=D.T,d={};D.T=d;try{var p=a(r,n),b=D.S;b!==null&&b(d,p),dd(e,t,p)}catch(w){Uo(e,t,w)}finally{D.T=s}}else try{s=a(r,n),dd(e,t,s)}catch(w){Uo(e,t,w)}}function dd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){hd(e,t,n)},function(n){return Uo(e,t,n)}):hd(e,t,a)}function hd(e,t,a){t.status="fulfilled",t.value=a,pd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,fd(e,a)))}function Uo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,pd(t),t=t.next;while(t!==n)}e.action=null}function pd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function gd(e,t){return t}function md(e,t){if(ze){var a=Ge.formState;if(a!==null){e:{var n=Se;if(ze){if(qe){t:{for(var r=qe,s=ea;r.nodeType!==8;){if(!s){r=null;break t}if(r=It(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){qe=It(r.nextSibling),n=r.data==="F!";break e}}pn(n)}n=!1}n&&(t=a[0])}}return a=Et(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gd,lastRenderedState:t},a.queue=n,a=Ld.bind(null,Se,n),n.dispatch=a,n=Qo(!1),s=Yo.bind(null,Se,!1,n.queue),n=Et(),r={state:t,dispatch:null,action:e,pending:null},n.queue=r,a=Jm.bind(null,Se,r,s,a),r.dispatch=a,n.memoizedState=e,[t,a,!1]}function Ad(e){var t=tt();return bd(t,Qe,e)}function bd(e,t,a){if(t=Lo(e,t,gd)[0],e=br(Aa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=ii(t)}catch(d){throw d===Pl?dr:d}else n=t;t=tt();var r=t.queue,s=r.dispatch;return a!==t.memoizedState&&(Se.flags|=2048,ll(9,yr(),Fm.bind(null,r,a),null)),[n,s,e]}function Fm(e,t){e.action=t}function yd(e){var t=tt(),a=Qe;if(a!==null)return bd(t,a,e);tt(),t=t.memoizedState,a=tt();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function ll(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=Se.updateQueue,t===null&&(t=No(),Se.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function yr(){return{destroy:void 0,resource:void 0}}function vd(){return tt().memoizedState}function vr(e,t,a,n){var r=Et();n=n===void 0?null:n,Se.flags|=e,r.memoizedState=ll(1|t,yr(),a,n)}function ri(e,t,a,n){var r=tt();n=n===void 0?null:n;var s=r.memoizedState.inst;Qe!==null&&n!==null&&Ro(n,Qe.memoizedState.deps)?r.memoizedState=ll(t,s,a,n):(Se.flags|=e,r.memoizedState=ll(1|t,s,a,n))}function xd(e,t){vr(8390656,8,e,t)}function Sd(e,t){ri(2048,8,e,t)}function Ed(e,t){return ri(4,2,e,t)}function Td(e,t){return ri(4,4,e,t)}function wd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cd(e,t,a){a=a!=null?a.concat([e]):null,ri(4,4,wd.bind(null,t,e),a)}function jo(){}function Od(e,t){var a=tt();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Ro(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Rd(e,t){var a=tt();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Ro(t,n[1]))return n[0];if(n=e(),bn){Da(!0);try{e()}finally{Da(!1)}}return a.memoizedState=[n,t],n}function Ho(e,t,a){return a===void 0||($a&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=zh(),Se.lanes|=e,Ya|=e,a)}function Dd(e,t,a,n){return Rt(a,t)?a:tl.current!==null?(e=Ho(e,a,n),Rt(e,t)||(ut=!0),e):($a&42)===0?(ut=!0,e.memoizedState=a):(e=zh(),Se.lanes|=e,Ya|=e,t)}function Bd(e,t,a,n,r){var s=Y.p;Y.p=s!==0&&8>s?s:8;var d=D.T,p={};D.T=p,Yo(e,!1,t,a);try{var b=r(),w=D.S;if(w!==null&&w(p,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var $=Zm(b,n);ui(e,t,$,Nt(e))}else ui(e,t,n,Nt(e))}catch(j){ui(e,t,{then:function(){},status:"rejected",reason:j},Nt())}finally{Y.p=s,D.T=d}}function Wm(){}function _o(e,t,a,n){if(e.tag!==5)throw Error(o(476));var r=zd(e).queue;Bd(e,r,t,F,a===null?Wm:function(){return Md(e),a(n)})}function zd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Md(e){var t=zd(e).next.queue;ui(e,t,{},Nt())}function Go(){return At(wi)}function Nd(){return tt().memoizedState}function kd(){return tt().memoizedState}function Pm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Nt();e=ka(a);var n=La(t,e,a);n!==null&&(kt(n,t,a),ti(n,t,a)),t={cache:bo()},e.payload=t;return}t=t.return}}function eA(e,t,a){var n=Nt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},xr(e)?$d(t,a):(a=uo(e,t,a,n),a!==null&&(kt(a,e,n),Qd(a,t,n)))}function Ld(e,t,a){var n=Nt();ui(e,t,a,n)}function ui(e,t,a,n){var r={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(xr(e))$d(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,p=s(d,a);if(r.hasEagerState=!0,r.eagerState=p,Rt(p,d))return lr(e,t,r,0),Ge===null&&nr(),!1}catch{}finally{}if(a=uo(e,t,r,n),a!==null)return kt(a,e,n),Qd(a,t,n),!0}return!1}function Yo(e,t,a,n){if(n={lane:2,revertLane:xs(),action:n,hasEagerState:!1,eagerState:null,next:null},xr(e)){if(t)throw Error(o(479))}else t=uo(e,a,n,2),t!==null&&kt(t,e,2)}function xr(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function $d(e,t){al=gr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Qd(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Xc(e,a)}}var Sr={readContext:At,use:Ar,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe},Ud={readContext:At,use:Ar,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:xd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,vr(4194308,4,wd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return vr(4194308,4,e,t)},useInsertionEffect:function(e,t){vr(4,2,e,t)},useMemo:function(e,t){var a=Et();t=t===void 0?null:t;var n=e();if(bn){Da(!0);try{e()}finally{Da(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Et();if(a!==void 0){var r=a(t);if(bn){Da(!0);try{a(t)}finally{Da(!1)}}}else r=t;return n.memoizedState=n.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=eA.bind(null,Se,e),[n.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:function(e){e=Qo(e);var t=e.queue,a=Ld.bind(null,Se,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:jo,useDeferredValue:function(e,t){var a=Et();return Ho(a,e,t)},useTransition:function(){var e=Qo(!1);return e=Bd.bind(null,Se,e.queue,!0,!1),Et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=Se,r=Et();if(ze){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),Ge===null)throw Error(o(349));(Re&124)!==0||id(n,t,a)}r.memoizedState=a;var s={value:a,getSnapshot:t};return r.queue=s,xd(ud.bind(null,n,s,e),[e]),n.flags|=2048,ll(9,yr(),rd.bind(null,n,s,a,t),null),a},useId:function(){var e=Et(),t=Ge.identifierPrefix;if(ze){var a=pa,n=ha;a=(n&~(1<<32-Ot(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=mr++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Km++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Go,useFormState:md,useActionState:md,useOptimistic:function(e){var t=Et();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Yo.bind(null,Se,!0,a),a.dispatch=t,[e,t]},useMemoCache:ko,useCacheRefresh:function(){return Et().memoizedState=Pm.bind(null,Se)}},jd={readContext:At,use:Ar,useCallback:Od,useContext:At,useEffect:Sd,useImperativeHandle:Cd,useInsertionEffect:Ed,useLayoutEffect:Td,useMemo:Rd,useReducer:br,useRef:vd,useState:function(){return br(Aa)},useDebugValue:jo,useDeferredValue:function(e,t){var a=tt();return Dd(a,Qe.memoizedState,e,t)},useTransition:function(){var e=br(Aa)[0],t=tt().memoizedState;return[typeof e=="boolean"?e:ii(e),t]},useSyncExternalStore:ld,useId:Nd,useHostTransitionStatus:Go,useFormState:Ad,useActionState:Ad,useOptimistic:function(e,t){var a=tt();return cd(a,Qe,e,t)},useMemoCache:ko,useCacheRefresh:kd},tA={readContext:At,use:Ar,useCallback:Od,useContext:At,useEffect:Sd,useImperativeHandle:Cd,useInsertionEffect:Ed,useLayoutEffect:Td,useMemo:Rd,useReducer:$o,useRef:vd,useState:function(){return $o(Aa)},useDebugValue:jo,useDeferredValue:function(e,t){var a=tt();return Qe===null?Ho(a,e,t):Dd(a,Qe.memoizedState,e,t)},useTransition:function(){var e=$o(Aa)[0],t=tt().memoizedState;return[typeof e=="boolean"?e:ii(e),t]},useSyncExternalStore:ld,useId:Nd,useHostTransitionStatus:Go,useFormState:yd,useActionState:yd,useOptimistic:function(e,t){var a=tt();return Qe!==null?cd(a,Qe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ko,useCacheRefresh:kd},il=null,oi=0;function Er(e){var t=oi;return oi+=1,il===null&&(il=[]),Jf(il,e,t)}function si(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Tr(e,t){throw t.$$typeof===v?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hd(e){var t=e._init;return t(e._payload)}function _d(e){function t(E,S){if(e){var T=E.deletions;T===null?(E.deletions=[S],E.flags|=16):T.push(S)}}function a(E,S){if(!e)return null;for(;S!==null;)t(E,S),S=S.sibling;return null}function n(E){for(var S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function r(E,S){return E=da(E,S),E.index=0,E.sibling=null,E}function s(E,S,T){return E.index=T,e?(T=E.alternate,T!==null?(T=T.index,T<S?(E.flags|=67108866,S):T):(E.flags|=67108866,S)):(E.flags|=1048576,S)}function d(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function p(E,S,T,U){return S===null||S.tag!==6?(S=so(T,E.mode,U),S.return=E,S):(S=r(S,T),S.return=E,S)}function b(E,S,T,U){var le=T.type;return le===L?$(E,S,T.props.children,U,T.key):S!==null&&(S.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ye&&Hd(le)===S.type)?(S=r(S,T.props),si(S,T),S.return=E,S):(S=rr(T.type,T.key,T.props,null,E.mode,U),si(S,T),S.return=E,S)}function w(E,S,T,U){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=co(T,E.mode,U),S.return=E,S):(S=r(S,T.children||[]),S.return=E,S)}function $(E,S,T,U,le){return S===null||S.tag!==7?(S=cn(T,E.mode,U,le),S.return=E,S):(S=r(S,T),S.return=E,S)}function j(E,S,T){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=so(""+S,E.mode,T),S.return=E,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case B:return T=rr(S.type,S.key,S.props,null,E.mode,T),si(T,S),T.return=E,T;case k:return S=co(S,E.mode,T),S.return=E,S;case ye:var U=S._init;return S=U(S._payload),j(E,S,T)}if(me(S)||pe(S))return S=cn(S,E.mode,T,null),S.return=E,S;if(typeof S.then=="function")return j(E,Er(S),T);if(S.$$typeof===G)return j(E,cr(E,S),T);Tr(E,S)}return null}function C(E,S,T,U){var le=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return le!==null?null:p(E,S,""+T,U);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case B:return T.key===le?b(E,S,T,U):null;case k:return T.key===le?w(E,S,T,U):null;case ye:return le=T._init,T=le(T._payload),C(E,S,T,U)}if(me(T)||pe(T))return le!==null?null:$(E,S,T,U,null);if(typeof T.then=="function")return C(E,S,Er(T),U);if(T.$$typeof===G)return C(E,S,cr(E,T),U);Tr(E,T)}return null}function O(E,S,T,U,le){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return E=E.get(T)||null,p(S,E,""+U,le);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case B:return E=E.get(U.key===null?T:U.key)||null,b(S,E,U,le);case k:return E=E.get(U.key===null?T:U.key)||null,w(S,E,U,le);case ye:var Ee=U._init;return U=Ee(U._payload),O(E,S,T,U,le)}if(me(U)||pe(U))return E=E.get(T)||null,$(S,E,U,le,null);if(typeof U.then=="function")return O(E,S,T,Er(U),le);if(U.$$typeof===G)return O(E,S,T,cr(S,U),le);Tr(S,U)}return null}function ce(E,S,T,U){for(var le=null,Ee=null,re=S,oe=S=0,st=null;re!==null&&oe<T.length;oe++){re.index>oe?(st=re,re=null):st=re.sibling;var Be=C(E,re,T[oe],U);if(Be===null){re===null&&(re=st);break}e&&re&&Be.alternate===null&&t(E,re),S=s(Be,S,oe),Ee===null?le=Be:Ee.sibling=Be,Ee=Be,re=st}if(oe===T.length)return a(E,re),ze&&dn(E,oe),le;if(re===null){for(;oe<T.length;oe++)re=j(E,T[oe],U),re!==null&&(S=s(re,S,oe),Ee===null?le=re:Ee.sibling=re,Ee=re);return ze&&dn(E,oe),le}for(re=n(re);oe<T.length;oe++)st=O(re,E,oe,T[oe],U),st!==null&&(e&&st.alternate!==null&&re.delete(st.key===null?oe:st.key),S=s(st,S,oe),Ee===null?le=st:Ee.sibling=st,Ee=st);return e&&re.forEach(function(Wa){return t(E,Wa)}),ze&&dn(E,oe),le}function ue(E,S,T,U){if(T==null)throw Error(o(151));for(var le=null,Ee=null,re=S,oe=S=0,st=null,Be=T.next();re!==null&&!Be.done;oe++,Be=T.next()){re.index>oe?(st=re,re=null):st=re.sibling;var Wa=C(E,re,Be.value,U);if(Wa===null){re===null&&(re=st);break}e&&re&&Wa.alternate===null&&t(E,re),S=s(Wa,S,oe),Ee===null?le=Wa:Ee.sibling=Wa,Ee=Wa,re=st}if(Be.done)return a(E,re),ze&&dn(E,oe),le;if(re===null){for(;!Be.done;oe++,Be=T.next())Be=j(E,Be.value,U),Be!==null&&(S=s(Be,S,oe),Ee===null?le=Be:Ee.sibling=Be,Ee=Be);return ze&&dn(E,oe),le}for(re=n(re);!Be.done;oe++,Be=T.next())Be=O(re,E,oe,Be.value,U),Be!==null&&(e&&Be.alternate!==null&&re.delete(Be.key===null?oe:Be.key),S=s(Be,S,oe),Ee===null?le=Be:Ee.sibling=Be,Ee=Be);return e&&re.forEach(function(ab){return t(E,ab)}),ze&&dn(E,oe),le}function je(E,S,T,U){if(typeof T=="object"&&T!==null&&T.type===L&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case B:e:{for(var le=T.key;S!==null;){if(S.key===le){if(le=T.type,le===L){if(S.tag===7){a(E,S.sibling),U=r(S,T.props.children),U.return=E,E=U;break e}}else if(S.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ye&&Hd(le)===S.type){a(E,S.sibling),U=r(S,T.props),si(U,T),U.return=E,E=U;break e}a(E,S);break}else t(E,S);S=S.sibling}T.type===L?(U=cn(T.props.children,E.mode,U,T.key),U.return=E,E=U):(U=rr(T.type,T.key,T.props,null,E.mode,U),si(U,T),U.return=E,E=U)}return d(E);case k:e:{for(le=T.key;S!==null;){if(S.key===le)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){a(E,S.sibling),U=r(S,T.children||[]),U.return=E,E=U;break e}else{a(E,S);break}else t(E,S);S=S.sibling}U=co(T,E.mode,U),U.return=E,E=U}return d(E);case ye:return le=T._init,T=le(T._payload),je(E,S,T,U)}if(me(T))return ce(E,S,T,U);if(pe(T)){if(le=pe(T),typeof le!="function")throw Error(o(150));return T=le.call(T),ue(E,S,T,U)}if(typeof T.then=="function")return je(E,S,Er(T),U);if(T.$$typeof===G)return je(E,S,cr(E,T),U);Tr(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,S!==null&&S.tag===6?(a(E,S.sibling),U=r(S,T),U.return=E,E=U):(a(E,S),U=so(T,E.mode,U),U.return=E,E=U),d(E)):a(E,S)}return function(E,S,T,U){try{oi=0;var le=je(E,S,T,U);return il=null,le}catch(re){if(re===Pl||re===dr)throw re;var Ee=Dt(29,re,null,E.mode);return Ee.lanes=U,Ee.return=E,Ee}finally{}}}var rl=_d(!0),Gd=_d(!1),Gt=N(null),ta=null;function Qa(e){var t=e.alternate;Q(it,it.current&1),Q(Gt,e),ta===null&&(t===null||tl.current!==null||t.memoizedState!==null)&&(ta=e)}function Yd(e){if(e.tag===22){if(Q(it,it.current),Q(Gt,e),ta===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(ta=e)}}else Ua()}function Ua(){Q(it,it.current),Q(Gt,Gt.current)}function ba(e){X(Gt),ta===e&&(ta=null),X(it)}var it=N(0);function wr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ns(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Xo(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:y({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vo={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Nt(),r=ka(n);r.payload=t,a!=null&&(r.callback=a),t=La(e,r,n),t!==null&&(kt(t,e,n),ti(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Nt(),r=ka(n);r.tag=1,r.payload=t,a!=null&&(r.callback=a),t=La(e,r,n),t!==null&&(kt(t,e,n),ti(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Nt(),n=ka(a);n.tag=2,t!=null&&(n.callback=t),t=La(e,n,a),t!==null&&(kt(t,e,a),ti(t,e,a))}};function Xd(e,t,a,n,r,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,d):t.prototype&&t.prototype.isPureReactComponent?!Vl(a,n)||!Vl(r,s):!0}function Vd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Vo.enqueueReplaceState(t,t.state,null)}function yn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=y({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}var Cr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function qd(e){Cr(e)}function Zd(e){console.error(e)}function Kd(e){Cr(e)}function Or(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Id(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function qo(e,t,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Or(e,t)},a}function Jd(e){return e=ka(e),e.tag=3,e}function Fd(e,t,a,n){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var s=n.value;e.payload=function(){return r(s)},e.callback=function(){Id(t,a,n)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Id(t,a,n),typeof r!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var p=n.stack;this.componentDidCatch(n.value,{componentStack:p!==null?p:""})})}function aA(e,t,a,n,r){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Jl(t,a,r,!0),a=Gt.current,a!==null){switch(a.tag){case 13:return ta===null?ms():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=r,n===xo?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),bs(e,n,r)),!1;case 22:return a.flags|=65536,n===xo?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),bs(e,n,r)),!1}throw Error(o(435,a.tag))}return bs(e,n,r),ms(),!1}if(ze)return t=Gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,n!==po&&(e=Error(o(422),{cause:n}),Il(Ut(e,a)))):(n!==po&&(t=Error(o(423),{cause:n}),Il(Ut(t,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,n=Ut(n,a),r=qo(e.stateNode,n,r),To(e,r),Ze!==4&&(Ze=2)),!1;var s=Error(o(520),{cause:n});if(s=Ut(s,a),mi===null?mi=[s]:mi.push(s),Ze!==4&&(Ze=2),t===null)return!0;n=Ut(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=qo(a.stateNode,n,e),To(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Xa===null||!Xa.has(s))))return a.flags|=65536,r&=-r,a.lanes|=r,r=Jd(r),Fd(r,e,a,n),To(a,r),!1}a=a.return}while(a!==null);return!1}var Wd=Error(o(461)),ut=!1;function dt(e,t,a,n){t.child=e===null?Gd(t,null,a,n):rl(t,e.child,a,n)}function Pd(e,t,a,n,r){a=a.render;var s=t.ref;if("ref"in n){var d={};for(var p in n)p!=="ref"&&(d[p]=n[p])}else d=n;return mn(t),n=Do(e,t,a,d,s,r),p=Bo(),e!==null&&!ut?(zo(e,t,r),ya(e,t,r)):(ze&&p&&fo(t),t.flags|=1,dt(e,t,n,r),t.child)}function eh(e,t,a,n,r){if(e===null){var s=a.type;return typeof s=="function"&&!oo(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,th(e,t,s,n,r)):(e=rr(a.type,null,n,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!es(e,r)){var d=s.memoizedProps;if(a=a.compare,a=a!==null?a:Vl,a(d,n)&&e.ref===t.ref)return ya(e,t,r)}return t.flags|=1,e=da(s,n),e.ref=t.ref,e.return=t,t.child=e}function th(e,t,a,n,r){if(e!==null){var s=e.memoizedProps;if(Vl(s,n)&&e.ref===t.ref)if(ut=!1,t.pendingProps=n=s,es(e,r))(e.flags&131072)!==0&&(ut=!0);else return t.lanes=e.lanes,ya(e,t,r)}return Zo(e,t,a,n,r)}function ah(e,t,a){var n=t.pendingProps,r=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=s!==null?s.baseLanes|a:a,e!==null){for(r=t.child=e.child,s=0;r!==null;)s=s|r.lanes|r.childLanes,r=r.sibling;t.childLanes=s&~n}else t.childLanes=0,t.child=null;return nh(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fr(t,s!==null?s.cachePool:null),s!==null?td(t,s):Co(),Yd(t);else return t.lanes=t.childLanes=536870912,nh(e,t,s!==null?s.baseLanes|a:a,a)}else s!==null?(fr(t,s.cachePool),td(t,s),Ua(),t.memoizedState=null):(e!==null&&fr(t,null),Co(),Ua());return dt(e,t,r,a),t.child}function nh(e,t,a,n){var r=vo();return r=r===null?null:{parent:lt._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&fr(t,null),Co(),Yd(t),e!==null&&Jl(e,t,n,!0),null}function Rr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Zo(e,t,a,n,r){return mn(t),a=Do(e,t,a,n,void 0,r),n=Bo(),e!==null&&!ut?(zo(e,t,r),ya(e,t,r)):(ze&&n&&fo(t),t.flags|=1,dt(e,t,a,r),t.child)}function lh(e,t,a,n,r,s){return mn(t),t.updateQueue=null,a=nd(t,n,a,r),ad(e),n=Bo(),e!==null&&!ut?(zo(e,t,s),ya(e,t,s)):(ze&&n&&fo(t),t.flags|=1,dt(e,t,a,s),t.child)}function ih(e,t,a,n,r){if(mn(t),t.stateNode===null){var s=Jn,d=a.contextType;typeof d=="object"&&d!==null&&(s=At(d)),s=new a(n,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Vo,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=n,s.state=t.memoizedState,s.refs={},So(t),d=a.contextType,s.context=typeof d=="object"&&d!==null?At(d):Jn,s.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(Xo(t,a,d,n),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&Vo.enqueueReplaceState(s,s.state,null),ni(t,n,s,r),ai(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){s=t.stateNode;var p=t.memoizedProps,b=yn(a,p);s.props=b;var w=s.context,$=a.contextType;d=Jn,typeof $=="object"&&$!==null&&(d=At($));var j=a.getDerivedStateFromProps;$=typeof j=="function"||typeof s.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,$||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(p||w!==d)&&Vd(t,s,n,d),Na=!1;var C=t.memoizedState;s.state=C,ni(t,n,s,r),ai(),w=t.memoizedState,p||C!==w||Na?(typeof j=="function"&&(Xo(t,a,j,n),w=t.memoizedState),(b=Na||Xd(t,a,b,n,C,w,d))?($||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=w),s.props=n,s.state=w,s.context=d,n=b):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,Eo(e,t),d=t.memoizedProps,$=yn(a,d),s.props=$,j=t.pendingProps,C=s.context,w=a.contextType,b=Jn,typeof w=="object"&&w!==null&&(b=At(w)),p=a.getDerivedStateFromProps,(w=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==j||C!==b)&&Vd(t,s,n,b),Na=!1,C=t.memoizedState,s.state=C,ni(t,n,s,r),ai();var O=t.memoizedState;d!==j||C!==O||Na||e!==null&&e.dependencies!==null&&sr(e.dependencies)?(typeof p=="function"&&(Xo(t,a,p,n),O=t.memoizedState),($=Na||Xd(t,a,$,n,C,O,b)||e!==null&&e.dependencies!==null&&sr(e.dependencies))?(w||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,O,b),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,O,b)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=O),s.props=n,s.state=O,s.context=b,n=$):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),n=!1)}return s=n,Rr(e,t),n=(t.flags&128)!==0,s||n?(s=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&n?(t.child=rl(t,e.child,null,r),t.child=rl(t,null,a,r)):dt(e,t,a,r),t.memoizedState=s.state,e=t.child):e=ya(e,t,r),e}function rh(e,t,a,n){return Kl(),t.flags|=256,dt(e,t,a,n),t.child}var Ko={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Io(e){return{baseLanes:e,cachePool:Zf()}}function Jo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Yt),e}function uh(e,t,a){var n=t.pendingProps,r=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(it.current&2)!==0),d&&(r=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(ze){if(r?Qa(t):Ua(),ze){var p=qe,b;if(b=p){e:{for(b=p,p=ea;b.nodeType!==8;){if(!p){p=null;break e}if(b=It(b.nextSibling),b===null){p=null;break e}}p=b}p!==null?(t.memoizedState={dehydrated:p,treeContext:fn!==null?{id:ha,overflow:pa}:null,retryLane:536870912,hydrationErrors:null},b=Dt(18,null,null,0),b.stateNode=p,b.return=t,t.child=b,yt=t,qe=null,b=!0):b=!1}b||pn(t)}if(p=t.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return Ns(p)?t.lanes=32:t.lanes=536870912,null;ba(t)}return p=n.children,n=n.fallback,r?(Ua(),r=t.mode,p=Dr({mode:"hidden",children:p},r),n=cn(n,r,a,null),p.return=t,n.return=t,p.sibling=n,t.child=p,r=t.child,r.memoizedState=Io(a),r.childLanes=Jo(e,d,a),t.memoizedState=Ko,n):(Qa(t),Fo(t,p))}if(b=e.memoizedState,b!==null&&(p=b.dehydrated,p!==null)){if(s)t.flags&256?(Qa(t),t.flags&=-257,t=Wo(e,t,a)):t.memoizedState!==null?(Ua(),t.child=e.child,t.flags|=128,t=null):(Ua(),r=n.fallback,p=t.mode,n=Dr({mode:"visible",children:n.children},p),r=cn(r,p,a,null),r.flags|=2,n.return=t,r.return=t,n.sibling=r,t.child=n,rl(t,e.child,null,a),n=t.child,n.memoizedState=Io(a),n.childLanes=Jo(e,d,a),t.memoizedState=Ko,t=r);else if(Qa(t),Ns(p)){if(d=p.nextSibling&&p.nextSibling.dataset,d)var w=d.dgst;d=w,n=Error(o(419)),n.stack="",n.digest=d,Il({value:n,source:null,stack:null}),t=Wo(e,t,a)}else if(ut||Jl(e,t,a,!1),d=(a&e.childLanes)!==0,ut||d){if(d=Ge,d!==null&&(n=a&-a,n=(n&42)!==0?1:Nu(n),n=(n&(d.suspendedLanes|a))!==0?0:n,n!==0&&n!==b.retryLane))throw b.retryLane=n,In(e,n),kt(d,e,n),Wd;p.data==="$?"||ms(),t=Wo(e,t,a)}else p.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,qe=It(p.nextSibling),yt=t,ze=!0,hn=null,ea=!1,e!==null&&(Ht[_t++]=ha,Ht[_t++]=pa,Ht[_t++]=fn,ha=e.id,pa=e.overflow,fn=t),t=Fo(t,n.children),t.flags|=4096);return t}return r?(Ua(),r=n.fallback,p=t.mode,b=e.child,w=b.sibling,n=da(b,{mode:"hidden",children:n.children}),n.subtreeFlags=b.subtreeFlags&65011712,w!==null?r=da(w,r):(r=cn(r,p,a,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,n=r,r=t.child,p=e.child.memoizedState,p===null?p=Io(a):(b=p.cachePool,b!==null?(w=lt._currentValue,b=b.parent!==w?{parent:w,pool:w}:b):b=Zf(),p={baseLanes:p.baseLanes|a,cachePool:b}),r.memoizedState=p,r.childLanes=Jo(e,d,a),t.memoizedState=Ko,n):(Qa(t),a=e.child,e=a.sibling,a=da(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function Fo(e,t){return t=Dr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Dr(e,t){return e=Dt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Wo(e,t,a){return rl(t,e.child,null,a),e=Fo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oh(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),mo(e.return,t,a)}function Po(e,t,a,n,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:r}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=r)}function sh(e,t,a){var n=t.pendingProps,r=n.revealOrder,s=n.tail;if(dt(e,t,n.children,a),n=it.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oh(e,a,t);else if(e.tag===19)oh(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(Q(it,n),r){case"forwards":for(a=t.child,r=null;a!==null;)e=a.alternate,e!==null&&wr(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),Po(t,!1,r,a,s);break;case"backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&wr(e)===null){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}Po(t,!0,a,null,s);break;case"together":Po(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ya(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ya|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Jl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=da(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=da(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function es(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&sr(e)))}function nA(e,t,a){switch(t.tag){case 3:he(t,t.stateNode.containerInfo),Ma(t,lt,e.memoizedState.cache),Kl();break;case 27:case 5:de(t);break;case 4:he(t,t.stateNode.containerInfo);break;case 10:Ma(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Qa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?uh(e,t,a):(Qa(t),e=ya(e,t,a),e!==null?e.sibling:null);Qa(t);break;case 19:var r=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Jl(e,t,a,!1),n=(a&t.childLanes)!==0),r){if(n)return sh(e,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Q(it,it.current),n)break;return null;case 22:case 23:return t.lanes=0,ah(e,t,a);case 24:Ma(t,lt,e.memoizedState.cache)}return ya(e,t,a)}function ch(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ut=!0;else{if(!es(e,a)&&(t.flags&128)===0)return ut=!1,nA(e,t,a);ut=(e.flags&131072)!==0}else ut=!1,ze&&(t.flags&1048576)!==0&&Hf(t,or,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,r=n._init;if(n=r(n._payload),t.type=n,typeof n=="function")oo(n)?(e=yn(n,e),t.tag=1,t=ih(null,t,n,e,a)):(t.tag=0,t=Zo(null,t,n,e,a));else{if(n!=null){if(r=n.$$typeof,r===W){t.tag=11,t=Pd(null,t,n,e,a);break e}else if(r===ee){t.tag=14,t=eh(null,t,n,e,a);break e}}throw t=xe(n)||n,Error(o(306,t,""))}}return t;case 0:return Zo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,r=yn(n,t.pendingProps),ih(e,t,n,r,a);case 3:e:{if(he(t,t.stateNode.containerInfo),e===null)throw Error(o(387));n=t.pendingProps;var s=t.memoizedState;r=s.element,Eo(e,t),ni(t,n,null,a);var d=t.memoizedState;if(n=d.cache,Ma(t,lt,n),n!==s.cache&&Ao(t,[lt],a,!0),ai(),n=d.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=rh(e,t,n,a);break e}else if(n!==r){r=Ut(Error(o(424)),t),Il(r),t=rh(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qe=It(e.firstChild),yt=t,ze=!0,hn=null,ea=!0,a=Gd(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Kl(),n===r){t=ya(e,t,a);break e}dt(e,t,n,a)}t=t.child}return t;case 26:return Rr(e,t),e===null?(a=pp(t.type,null,t.pendingProps,null))?t.memoizedState=a:ze||(a=t.type,e=t.pendingProps,n=Yr(te.current).createElement(a),n[mt]=t,n[xt]=e,pt(n,a,e),rt(n),t.stateNode=n):t.memoizedState=pp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return de(t),e===null&&ze&&(n=t.stateNode=fp(t.type,t.pendingProps,te.current),yt=t,ea=!0,r=qe,Za(t.type)?(ks=r,qe=It(n.firstChild)):qe=r),dt(e,t,t.pendingProps.children,a),Rr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ze&&((r=n=qe)&&(n=zA(n,t.type,t.pendingProps,ea),n!==null?(t.stateNode=n,yt=t,qe=It(n.firstChild),ea=!1,r=!0):r=!1),r||pn(t)),de(t),r=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,n=s.children,Bs(r,s)?n=null:d!==null&&Bs(r,d)&&(t.flags|=32),t.memoizedState!==null&&(r=Do(e,t,Im,null,null,a),wi._currentValue=r),Rr(e,t),dt(e,t,n,a),t.child;case 6:return e===null&&ze&&((e=a=qe)&&(a=MA(a,t.pendingProps,ea),a!==null?(t.stateNode=a,yt=t,qe=null,e=!0):e=!1),e||pn(t)),null;case 13:return uh(e,t,a);case 4:return he(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=rl(t,null,n,a):dt(e,t,n,a),t.child;case 11:return Pd(e,t,t.type,t.pendingProps,a);case 7:return dt(e,t,t.pendingProps,a),t.child;case 8:return dt(e,t,t.pendingProps.children,a),t.child;case 12:return dt(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ma(t,t.type,n.value),dt(e,t,n.children,a),t.child;case 9:return r=t.type._context,n=t.pendingProps.children,mn(t),r=At(r),n=n(r),t.flags|=1,dt(e,t,n,a),t.child;case 14:return eh(e,t,t.type,t.pendingProps,a);case 15:return th(e,t,t.type,t.pendingProps,a);case 19:return sh(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=Dr(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=da(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return ah(e,t,a);case 24:return mn(t),n=At(lt),e===null?(r=vo(),r===null&&(r=Ge,s=bo(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=a),r=s),t.memoizedState={parent:n,cache:r},So(t),Ma(t,lt,r)):((e.lanes&a)!==0&&(Eo(e,t),ni(t,null,null,a),ai()),r=e.memoizedState,s=t.memoizedState,r.parent!==n?(r={parent:n,cache:n},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Ma(t,lt,n)):(n=s.cache,Ma(t,lt,n),n!==r.cache&&Ao(t,[lt],a,!0))),dt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function va(e){e.flags|=4}function fh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yp(t)){if(t=Gt.current,t!==null&&((Re&4194048)===Re?ta!==null:(Re&62914560)!==Re&&(Re&536870912)===0||t!==ta))throw ei=xo,Kf;e.flags|=8192}}function Br(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Gc():536870912,e.lanes|=t,cl|=t)}function ci(e,t){if(!ze)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,n|=r.subtreeFlags&65011712,n|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function lA(e,t,a){var n=t.pendingProps;switch(ho(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ma(lt),V(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zl(t)?va(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Yf())),Ve(t),null;case 26:return a=t.memoizedState,e===null?(va(t),a!==null?(Ve(t),fh(t,a)):(Ve(t),t.flags&=-16777217)):a?a!==e.memoizedState?(va(t),Ve(t),fh(t,a)):(Ve(t),t.flags&=-16777217):(e.memoizedProps!==n&&va(t),Ve(t),t.flags&=-16777217),null;case 27:ge(t),a=te.current;var r=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&va(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return Ve(t),null}e=K.current,Zl(t)?_f(t):(e=fp(r,n,a),t.stateNode=e,va(t))}return Ve(t),null;case 5:if(ge(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&va(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return Ve(t),null}if(e=K.current,Zl(t))_f(t);else{switch(r=Yr(te.current),e){case 1:e=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?r.createElement(a,{is:n.is}):r.createElement(a)}}e[mt]=t,e[xt]=n;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=e;e:switch(pt(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&va(t)}}return Ve(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&va(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(o(166));if(e=te.current,Zl(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,r=yt,r!==null)switch(r.tag){case 27:case 5:n=r.memoizedProps}e[mt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||lp(e.nodeValue,a)),e||pn(t)}else e=Yr(e).createTextNode(n),e[mt]=t,t.stateNode=e}return Ve(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Zl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[mt]=t}else Kl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),r=!1}else r=Yf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(ba(t),t):(ba(t),null)}if(ba(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,r=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(r=n.alternate.memoizedState.cachePool.pool);var s=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==r&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Br(t,t.updateQueue),Ve(t),null;case 4:return V(),e===null&&ws(t.stateNode.containerInfo),Ve(t),null;case 10:return ma(t.type),Ve(t),null;case 19:if(X(it),r=t.memoizedState,r===null)return Ve(t),null;if(n=(t.flags&128)!==0,s=r.rendering,s===null)if(n)ci(r,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=wr(e),s!==null){for(t.flags|=128,ci(r,!1),e=s.updateQueue,t.updateQueue=e,Br(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)jf(a,e),a=a.sibling;return Q(it,it.current&1|2),t.child}e=e.sibling}r.tail!==null&&Pe()>Nr&&(t.flags|=128,n=!0,ci(r,!1),t.lanes=4194304)}else{if(!n)if(e=wr(s),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Br(t,e),ci(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!ze)return Ve(t),null}else 2*Pe()-r.renderingStartTime>Nr&&a!==536870912&&(t.flags|=128,n=!0,ci(r,!1),t.lanes=4194304);r.isBackwards?(s.sibling=t.child,t.child=s):(e=r.last,e!==null?e.sibling=s:t.child=s,r.last=s)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Pe(),t.sibling=null,e=it.current,Q(it,n?e&1|2:e&1),t):(Ve(t),null);case 22:case 23:return ba(t),Oo(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),a=t.updateQueue,a!==null&&Br(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&X(An),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ma(lt),Ve(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function iA(e,t){switch(ho(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ma(lt),V(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ge(t),null;case 13:if(ba(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Kl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(it),null;case 4:return V(),null;case 10:return ma(t.type),null;case 22:case 23:return ba(t),Oo(),e!==null&&X(An),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ma(lt),null;case 25:return null;default:return null}}function dh(e,t){switch(ho(t),t.tag){case 3:ma(lt),V();break;case 26:case 27:case 5:ge(t);break;case 4:V();break;case 13:ba(t);break;case 19:X(it);break;case 10:ma(t.type);break;case 22:case 23:ba(t),Oo(),e!==null&&X(An);break;case 24:ma(lt)}}function fi(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var r=n.next;a=r;do{if((a.tag&e)===e){n=void 0;var s=a.create,d=a.inst;n=s(),d.destroy=n}a=a.next}while(a!==r)}}catch(p){_e(t,t.return,p)}}function ja(e,t,a){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var s=r.next;n=s;do{if((n.tag&e)===e){var d=n.inst,p=d.destroy;if(p!==void 0){d.destroy=void 0,r=t;var b=a,w=p;try{w()}catch($){_e(r,b,$)}}}n=n.next}while(n!==s)}}catch($){_e(t,t.return,$)}}function hh(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{ed(t,a)}catch(n){_e(e,e.return,n)}}}function ph(e,t,a){a.props=yn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){_e(e,t,n)}}function di(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(r){_e(e,t,r)}}function aa(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(r){_e(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){_e(e,t,r)}else a.current=null}function gh(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(r){_e(e,e.return,r)}}function ts(e,t,a){try{var n=e.stateNode;CA(n,e.type,a,t),n[xt]=t}catch(r){_e(e,e.return,r)}}function mh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function as(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ns(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Gr));else if(n!==4&&(n===27&&Za(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ns(e,t,a),e=e.sibling;e!==null;)ns(e,t,a),e=e.sibling}function zr(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zr(e,t,a),e=e.sibling;e!==null;)zr(e,t,a),e=e.sibling}function Ah(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);pt(t,n,a),t[mt]=e,t[xt]=a}catch(s){_e(e,e.return,s)}}var xa=!1,We=!1,ls=!1,bh=typeof WeakSet=="function"?WeakSet:Set,ot=null;function rA(e,t){if(e=e.containerInfo,Rs=Ir,e=Df(e),to(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var r=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var d=0,p=-1,b=-1,w=0,$=0,j=e,C=null;t:for(;;){for(var O;j!==a||r!==0&&j.nodeType!==3||(p=d+r),j!==s||n!==0&&j.nodeType!==3||(b=d+n),j.nodeType===3&&(d+=j.nodeValue.length),(O=j.firstChild)!==null;)C=j,j=O;for(;;){if(j===e)break t;if(C===a&&++w===r&&(p=d),C===s&&++$===n&&(b=d),(O=j.nextSibling)!==null)break;j=C,C=j.parentNode}j=O}a=p===-1||b===-1?null:{start:p,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ds={focusedElem:e,selectionRange:a},Ir=!1,ot=t;ot!==null;)if(t=ot,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ot=e;else for(;ot!==null;){switch(t=ot,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,r=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var ce=yn(a.type,r,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(ce,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(ue){_e(a,a.return,ue)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ms(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ms(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,ot=e;break}ot=t.return}}function yh(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ha(e,a),n&4&&fi(5,a);break;case 1:if(Ha(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(d){_e(a,a.return,d)}else{var r=yn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){_e(a,a.return,d)}}n&64&&hh(a),n&512&&di(a,a.return);break;case 3:if(Ha(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{ed(e,t)}catch(d){_e(a,a.return,d)}}break;case 27:t===null&&n&4&&Ah(a);case 26:case 5:Ha(e,a),t===null&&n&4&&gh(a),n&512&&di(a,a.return);break;case 12:Ha(e,a);break;case 13:Ha(e,a),n&4&&Sh(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=gA.bind(null,a),NA(e,a))));break;case 22:if(n=a.memoizedState!==null||xa,!n){t=t!==null&&t.memoizedState!==null||We,r=xa;var s=We;xa=n,(We=t)&&!s?_a(e,a,(a.subtreeFlags&8772)!==0):Ha(e,a),xa=r,We=s}break;case 30:break;default:Ha(e,a)}}function vh(e){var t=e.alternate;t!==null&&(e.alternate=null,vh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$u(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,Tt=!1;function Sa(e,t,a){for(a=a.child;a!==null;)xh(e,t,a),a=a.sibling}function xh(e,t,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Nl,a)}catch{}switch(a.tag){case 26:We||aa(a,t),Sa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:We||aa(a,t);var n=Xe,r=Tt;Za(a.type)&&(Xe=a.stateNode,Tt=!1),Sa(e,t,a),xi(a.stateNode),Xe=n,Tt=r;break;case 5:We||aa(a,t);case 6:if(n=Xe,r=Tt,Xe=null,Sa(e,t,a),Xe=n,Tt=r,Xe!==null)if(Tt)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(s){_e(a,t,s)}else try{Xe.removeChild(a.stateNode)}catch(s){_e(a,t,s)}break;case 18:Xe!==null&&(Tt?(e=Xe,sp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Di(e)):sp(Xe,a.stateNode));break;case 4:n=Xe,r=Tt,Xe=a.stateNode.containerInfo,Tt=!0,Sa(e,t,a),Xe=n,Tt=r;break;case 0:case 11:case 14:case 15:We||ja(2,a,t),We||ja(4,a,t),Sa(e,t,a);break;case 1:We||(aa(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&ph(a,t,n)),Sa(e,t,a);break;case 21:Sa(e,t,a);break;case 22:We=(n=We)||a.memoizedState!==null,Sa(e,t,a),We=n;break;default:Sa(e,t,a)}}function Sh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Di(e)}catch(a){_e(t,t.return,a)}}function uA(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new bh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new bh),t;default:throw Error(o(435,e.tag))}}function is(e,t){var a=uA(e);t.forEach(function(n){var r=mA.bind(null,e,n);a.has(n)||(a.add(n),n.then(r,r))})}function Bt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var r=a[n],s=e,d=t,p=d;e:for(;p!==null;){switch(p.tag){case 27:if(Za(p.type)){Xe=p.stateNode,Tt=!1;break e}break;case 5:Xe=p.stateNode,Tt=!1;break e;case 3:case 4:Xe=p.stateNode.containerInfo,Tt=!0;break e}p=p.return}if(Xe===null)throw Error(o(160));xh(s,d,r),Xe=null,Tt=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Eh(t,e),t=t.sibling}var Kt=null;function Eh(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bt(t,e),zt(e),n&4&&(ja(3,e,e.return),fi(3,e),ja(5,e,e.return));break;case 1:Bt(t,e),zt(e),n&512&&(We||a===null||aa(a,a.return)),n&64&&xa&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var r=Kt;if(Bt(t,e),zt(e),n&512&&(We||a===null||aa(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(n){case"title":s=r.getElementsByTagName("title")[0],(!s||s[$l]||s[mt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(n),r.head.insertBefore(s,r.querySelector("head > title"))),pt(s,n,a),s[mt]=e,rt(s),n=s;break e;case"link":var d=Ap("link","href",r).get(n+(a.href||""));if(d){for(var p=0;p<d.length;p++)if(s=d[p],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(p,1);break t}}s=r.createElement(n),pt(s,n,a),r.head.appendChild(s);break;case"meta":if(d=Ap("meta","content",r).get(n+(a.content||""))){for(p=0;p<d.length;p++)if(s=d[p],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(p,1);break t}}s=r.createElement(n),pt(s,n,a),r.head.appendChild(s);break;default:throw Error(o(468,n))}s[mt]=e,rt(s),n=s}e.stateNode=n}else bp(r,e.type,e.stateNode);else e.stateNode=mp(r,n,e.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?bp(r,e.type,e.stateNode):mp(r,n,e.memoizedProps)):n===null&&e.stateNode!==null&&ts(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bt(t,e),zt(e),n&512&&(We||a===null||aa(a,a.return)),a!==null&&n&4&&ts(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bt(t,e),zt(e),n&512&&(We||a===null||aa(a,a.return)),e.flags&32){r=e.stateNode;try{Gn(r,"")}catch(O){_e(e,e.return,O)}}n&4&&e.stateNode!=null&&(r=e.memoizedProps,ts(e,r,a!==null?a.memoizedProps:r)),n&1024&&(ls=!0);break;case 6:if(Bt(t,e),zt(e),n&4){if(e.stateNode===null)throw Error(o(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(O){_e(e,e.return,O)}}break;case 3:if(qr=null,r=Kt,Kt=Xr(t.containerInfo),Bt(t,e),Kt=r,zt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Di(t.containerInfo)}catch(O){_e(e,e.return,O)}ls&&(ls=!1,Th(e));break;case 4:n=Kt,Kt=Xr(e.stateNode.containerInfo),Bt(t,e),zt(e),Kt=n;break;case 12:Bt(t,e),zt(e);break;case 13:Bt(t,e),zt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(fs=Pe()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,is(e,n)));break;case 22:r=e.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,w=xa,$=We;if(xa=w||r,We=$||b,Bt(t,e),We=$,xa=w,zt(e),n&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(a===null||b||xa||We||vn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){b=a=t;try{if(s=b.stateNode,r)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{p=b.stateNode;var j=b.memoizedProps.style,C=j!=null&&j.hasOwnProperty("display")?j.display:null;p.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(O){_e(b,b.return,O)}}}else if(t.tag===6){if(a===null){b=t;try{b.stateNode.nodeValue=r?"":b.memoizedProps}catch(O){_e(b,b.return,O)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,is(e,a))));break;case 19:Bt(t,e),zt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,is(e,n)));break;case 30:break;case 21:break;default:Bt(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(mh(n)){a=n;break}n=n.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var r=a.stateNode,s=as(e);zr(e,s,r);break;case 5:var d=a.stateNode;a.flags&32&&(Gn(d,""),a.flags&=-33);var p=as(e);zr(e,p,d);break;case 3:case 4:var b=a.stateNode.containerInfo,w=as(e);ns(e,w,b);break;default:throw Error(o(161))}}catch($){_e(e,e.return,$)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Th(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Th(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ha(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)yh(e,t.alternate,t),t=t.sibling}function vn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ja(4,t,t.return),vn(t);break;case 1:aa(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&ph(t,t.return,a),vn(t);break;case 27:xi(t.stateNode);case 26:case 5:aa(t,t.return),vn(t);break;case 22:t.memoizedState===null&&vn(t);break;case 30:vn(t);break;default:vn(t)}e=e.sibling}}function _a(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,r=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:_a(r,s,a),fi(4,s);break;case 1:if(_a(r,s,a),n=s,r=n.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(w){_e(n,n.return,w)}if(n=s,r=n.updateQueue,r!==null){var p=n.stateNode;try{var b=r.shared.hiddenCallbacks;if(b!==null)for(r.shared.hiddenCallbacks=null,r=0;r<b.length;r++)Pf(b[r],p)}catch(w){_e(n,n.return,w)}}a&&d&64&&hh(s),di(s,s.return);break;case 27:Ah(s);case 26:case 5:_a(r,s,a),a&&n===null&&d&4&&gh(s),di(s,s.return);break;case 12:_a(r,s,a);break;case 13:_a(r,s,a),a&&d&4&&Sh(r,s);break;case 22:s.memoizedState===null&&_a(r,s,a),di(s,s.return);break;case 30:break;default:_a(r,s,a)}t=t.sibling}}function rs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Fl(a))}function us(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fl(e))}function na(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wh(e,t,a,n),t=t.sibling}function wh(e,t,a,n){var r=t.flags;switch(t.tag){case 0:case 11:case 15:na(e,t,a,n),r&2048&&fi(9,t);break;case 1:na(e,t,a,n);break;case 3:na(e,t,a,n),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fl(e)));break;case 12:if(r&2048){na(e,t,a,n),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,p=s.onPostCommit;typeof p=="function"&&p(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){_e(t,t.return,b)}}else na(e,t,a,n);break;case 13:na(e,t,a,n);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?na(e,t,a,n):hi(e,t):s._visibility&2?na(e,t,a,n):(s._visibility|=2,ul(e,t,a,n,(t.subtreeFlags&10256)!==0)),r&2048&&rs(d,t);break;case 24:na(e,t,a,n),r&2048&&us(t.alternate,t);break;default:na(e,t,a,n)}}function ul(e,t,a,n,r){for(r=r&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,d=t,p=a,b=n,w=d.flags;switch(d.tag){case 0:case 11:case 15:ul(s,d,p,b,r),fi(8,d);break;case 23:break;case 22:var $=d.stateNode;d.memoizedState!==null?$._visibility&2?ul(s,d,p,b,r):hi(s,d):($._visibility|=2,ul(s,d,p,b,r)),r&&w&2048&&rs(d.alternate,d);break;case 24:ul(s,d,p,b,r),r&&w&2048&&us(d.alternate,d);break;default:ul(s,d,p,b,r)}t=t.sibling}}function hi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,r=n.flags;switch(n.tag){case 22:hi(a,n),r&2048&&rs(n.alternate,n);break;case 24:hi(a,n),r&2048&&us(n.alternate,n);break;default:hi(a,n)}t=t.sibling}}var pi=8192;function ol(e){if(e.subtreeFlags&pi)for(e=e.child;e!==null;)Ch(e),e=e.sibling}function Ch(e){switch(e.tag){case 26:ol(e),e.flags&pi&&e.memoizedState!==null&&qA(Kt,e.memoizedState,e.memoizedProps);break;case 5:ol(e);break;case 3:case 4:var t=Kt;Kt=Xr(e.stateNode.containerInfo),ol(e),Kt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=pi,pi=16777216,ol(e),pi=t):ol(e));break;default:ol(e)}}function Oh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function gi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];ot=n,Dh(n,e)}Oh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rh(e),e=e.sibling}function Rh(e){switch(e.tag){case 0:case 11:case 15:gi(e),e.flags&2048&&ja(9,e,e.return);break;case 3:gi(e);break;case 12:gi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Mr(e)):gi(e);break;default:gi(e)}}function Mr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];ot=n,Dh(n,e)}Oh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ja(8,t,t.return),Mr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Mr(t));break;default:Mr(t)}e=e.sibling}}function Dh(e,t){for(;ot!==null;){var a=ot;switch(a.tag){case 0:case 11:case 15:ja(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Fl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,ot=n;else e:for(a=e;ot!==null;){n=ot;var r=n.sibling,s=n.return;if(vh(n),n===a){ot=null;break e}if(r!==null){r.return=s,ot=r;break e}ot=s}}}var oA={getCacheForType:function(e){var t=At(lt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},sA=typeof WeakMap=="function"?WeakMap:Map,ke=0,Ge=null,Te=null,Re=0,Le=0,Mt=null,Ga=!1,sl=!1,os=!1,Ea=0,Ze=0,Ya=0,xn=0,ss=0,Yt=0,cl=0,mi=null,wt=null,cs=!1,fs=0,Nr=1/0,kr=null,Xa=null,ht=0,Va=null,fl=null,dl=0,ds=0,hs=null,Bh=null,Ai=0,ps=null;function Nt(){if((ke&2)!==0&&Re!==0)return Re&-Re;if(D.T!==null){var e=Pn;return e!==0?e:xs()}return Vc()}function zh(){Yt===0&&(Yt=(Re&536870912)===0||ze?_c():536870912);var e=Gt.current;return e!==null&&(e.flags|=32),Yt}function kt(e,t,a){(e===Ge&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(hl(e,0),qa(e,Re,Yt,!1)),Ll(e,a),((ke&2)===0||e!==Ge)&&(e===Ge&&((ke&2)===0&&(xn|=a),Ze===4&&qa(e,Re,Yt,!1)),la(e))}function Mh(e,t,a){if((ke&6)!==0)throw Error(o(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||kl(e,t),r=n?dA(e,t):As(e,t,!0),s=n;do{if(r===0){sl&&!n&&qa(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!cA(a)){r=As(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var p=e;r=mi;var b=p.current.memoizedState.isDehydrated;if(b&&(hl(p,d).flags|=256),d=As(p,d,!1),d!==2){if(os&&!b){p.errorRecoveryDisabledLanes|=s,xn|=s,r=4;break e}s=wt,wt=r,s!==null&&(wt===null?wt=s:wt.push.apply(wt,s))}r=d}if(s=!1,r!==2)continue}}if(r===1){hl(e,0),qa(e,t,0,!0);break}e:{switch(n=e,s=r,s){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:qa(n,t,Yt,!Ga);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(r=fs+300-Pe(),10<r)){if(qa(n,t,Yt,!Ga),Vi(n,0,!0)!==0)break e;n.timeoutHandle=up(Nh.bind(null,n,a,wt,kr,cs,t,Yt,xn,cl,Ga,s,2,-0,0),r);break e}Nh(n,a,wt,kr,cs,t,Yt,xn,cl,Ga,s,0,-0,0)}}break}while(!0);la(e)}function Nh(e,t,a,n,r,s,d,p,b,w,$,j,C,O){if(e.timeoutHandle=-1,j=t.subtreeFlags,(j&8192||(j&16785408)===16785408)&&(Ti={stylesheets:null,count:0,unsuspend:VA},Ch(t),j=ZA(),j!==null)){e.cancelPendingCommit=j(Hh.bind(null,e,t,s,a,n,r,d,p,b,$,1,C,O)),qa(e,s,d,!w);return}Hh(e,t,s,a,n,r,d,p,b)}function cA(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var r=a[n],s=r.getSnapshot;r=r.value;try{if(!Rt(s(),r))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qa(e,t,a,n){t&=~ss,t&=~xn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var r=t;0<r;){var s=31-Ot(r),d=1<<s;n[s]=-1,r&=~d}a!==0&&Yc(e,a,t)}function Lr(){return(ke&6)===0?(bi(0),!1):!0}function gs(){if(Te!==null){if(Le===0)var e=Te.return;else e=Te,ga=gn=null,Mo(e),il=null,oi=0,e=Te;for(;e!==null;)dh(e.alternate,e),e=e.return;Te=null}}function hl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,RA(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),gs(),Ge=e,Te=a=da(e.current,null),Re=t,Le=0,Mt=null,Ga=!1,sl=kl(e,t),os=!1,cl=Yt=ss=xn=Ya=Ze=0,wt=mi=null,cs=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-Ot(n),s=1<<r;t|=e[r],n&=~s}return Ea=t,nr(),a}function kh(e,t){Se=null,D.H=Sr,t===Pl||t===dr?(t=Ff(),Le=3):t===Kf?(t=Ff(),Le=4):Le=t===Wd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Mt=t,Te===null&&(Ze=1,Or(e,Ut(t,e.current)))}function Lh(){var e=D.H;return D.H=Sr,e===null?Sr:e}function $h(){var e=D.A;return D.A=oA,e}function ms(){Ze=4,Ga||(Re&4194048)!==Re&&Gt.current!==null||(sl=!0),(Ya&134217727)===0&&(xn&134217727)===0||Ge===null||qa(Ge,Re,Yt,!1)}function As(e,t,a){var n=ke;ke|=2;var r=Lh(),s=$h();(Ge!==e||Re!==t)&&(kr=null,hl(e,t)),t=!1;var d=Ze;e:do try{if(Le!==0&&Te!==null){var p=Te,b=Mt;switch(Le){case 8:gs(),d=6;break e;case 3:case 2:case 9:case 6:Gt.current===null&&(t=!0);var w=Le;if(Le=0,Mt=null,pl(e,p,b,w),a&&sl){d=0;break e}break;default:w=Le,Le=0,Mt=null,pl(e,p,b,w)}}fA(),d=Ze;break}catch($){kh(e,$)}while(!0);return t&&e.shellSuspendCounter++,ga=gn=null,ke=n,D.H=r,D.A=s,Te===null&&(Ge=null,Re=0,nr()),d}function fA(){for(;Te!==null;)Qh(Te)}function dA(e,t){var a=ke;ke|=2;var n=Lh(),r=$h();Ge!==e||Re!==t?(kr=null,Nr=Pe()+500,hl(e,t)):sl=kl(e,t);e:do try{if(Le!==0&&Te!==null){t=Te;var s=Mt;t:switch(Le){case 1:Le=0,Mt=null,pl(e,t,s,1);break;case 2:case 9:if(If(s)){Le=0,Mt=null,Uh(t);break}t=function(){Le!==2&&Le!==9||Ge!==e||(Le=7),la(e)},s.then(t,t);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:If(s)?(Le=0,Mt=null,Uh(t)):(Le=0,Mt=null,pl(e,t,s,7));break;case 5:var d=null;switch(Te.tag){case 26:d=Te.memoizedState;case 5:case 27:var p=Te;if(!d||yp(d)){Le=0,Mt=null;var b=p.sibling;if(b!==null)Te=b;else{var w=p.return;w!==null?(Te=w,$r(w)):Te=null}break t}}Le=0,Mt=null,pl(e,t,s,5);break;case 6:Le=0,Mt=null,pl(e,t,s,6);break;case 8:gs(),Ze=6;break e;default:throw Error(o(462))}}hA();break}catch($){kh(e,$)}while(!0);return ga=gn=null,D.H=n,D.A=r,ke=a,Te!==null?0:(Ge=null,Re=0,nr(),Ze)}function hA(){for(;Te!==null&&!Je();)Qh(Te)}function Qh(e){var t=ch(e.alternate,e,Ea);e.memoizedProps=e.pendingProps,t===null?$r(e):Te=t}function Uh(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=lh(a,t,t.pendingProps,t.type,void 0,Re);break;case 11:t=lh(a,t,t.pendingProps,t.type.render,t.ref,Re);break;case 5:Mo(t);default:dh(a,t),t=Te=jf(t,Ea),t=ch(a,t,Ea)}e.memoizedProps=e.pendingProps,t===null?$r(e):Te=t}function pl(e,t,a,n){ga=gn=null,Mo(t),il=null,oi=0;var r=t.return;try{if(aA(e,r,t,a,Re)){Ze=1,Or(e,Ut(a,e.current)),Te=null;return}}catch(s){if(r!==null)throw Te=r,s;Ze=1,Or(e,Ut(a,e.current)),Te=null;return}t.flags&32768?(ze||n===1?e=!0:sl||(Re&536870912)!==0?e=!1:(Ga=e=!0,(n===2||n===9||n===3||n===6)&&(n=Gt.current,n!==null&&n.tag===13&&(n.flags|=16384))),jh(t,e)):$r(t)}function $r(e){var t=e;do{if((t.flags&32768)!==0){jh(t,Ga);return}e=t.return;var a=lA(t.alternate,t,Ea);if(a!==null){Te=a;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Ze===0&&(Ze=5)}function jh(e,t){do{var a=iA(e.alternate,e);if(a!==null){a.flags&=32767,Te=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Te=e;return}Te=e=a}while(e!==null);Ze=6,Te=null}function Hh(e,t,a,n,r,s,d,p,b){e.cancelPendingCommit=null;do Qr();while(ht!==0);if((ke&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(s=t.lanes|t.childLanes,s|=ro,V0(e,a,s,d,p,b),e===Ge&&(Te=Ge=null,Re=0),fl=t,Va=e,dl=a,ds=s,hs=r,Bh=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,AA(Ra,function(){return Vh(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null,r=Y.p,Y.p=2,d=ke,ke|=4;try{rA(e,t,a)}finally{ke=d,Y.p=r,D.T=n}}ht=1,_h(),Gh(),Yh()}}function _h(){if(ht===1){ht=0;var e=Va,t=fl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var n=Y.p;Y.p=2;var r=ke;ke|=4;try{Eh(t,e);var s=Ds,d=Df(e.containerInfo),p=s.focusedElem,b=s.selectionRange;if(d!==p&&p&&p.ownerDocument&&Rf(p.ownerDocument.documentElement,p)){if(b!==null&&to(p)){var w=b.start,$=b.end;if($===void 0&&($=w),"selectionStart"in p)p.selectionStart=w,p.selectionEnd=Math.min($,p.value.length);else{var j=p.ownerDocument||document,C=j&&j.defaultView||window;if(C.getSelection){var O=C.getSelection(),ce=p.textContent.length,ue=Math.min(b.start,ce),je=b.end===void 0?ue:Math.min(b.end,ce);!O.extend&&ue>je&&(d=je,je=ue,ue=d);var E=Of(p,ue),S=Of(p,je);if(E&&S&&(O.rangeCount!==1||O.anchorNode!==E.node||O.anchorOffset!==E.offset||O.focusNode!==S.node||O.focusOffset!==S.offset)){var T=j.createRange();T.setStart(E.node,E.offset),O.removeAllRanges(),ue>je?(O.addRange(T),O.extend(S.node,S.offset)):(T.setEnd(S.node,S.offset),O.addRange(T))}}}}for(j=[],O=p;O=O.parentNode;)O.nodeType===1&&j.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<j.length;p++){var U=j[p];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}Ir=!!Rs,Ds=Rs=null}finally{ke=r,Y.p=n,D.T=a}}e.current=t,ht=2}}function Gh(){if(ht===2){ht=0;var e=Va,t=fl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var n=Y.p;Y.p=2;var r=ke;ke|=4;try{yh(e,t.alternate,t)}finally{ke=r,Y.p=n,D.T=a}}ht=3}}function Yh(){if(ht===4||ht===3){ht=0,vt();var e=Va,t=fl,a=dl,n=Bh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ht=5:(ht=0,fl=Va=null,Xh(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Xa=null),ku(a),t=t.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Nl,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=D.T,r=Y.p,Y.p=2,D.T=null;try{for(var s=e.onRecoverableError,d=0;d<n.length;d++){var p=n[d];s(p.value,{componentStack:p.stack})}}finally{D.T=t,Y.p=r}}(dl&3)!==0&&Qr(),la(e),r=e.pendingLanes,(a&4194090)!==0&&(r&42)!==0?e===ps?Ai++:(Ai=0,ps=e):Ai=0,bi(0)}}function Xh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fl(t)))}function Qr(e){return _h(),Gh(),Yh(),Vh()}function Vh(){if(ht!==5)return!1;var e=Va,t=ds;ds=0;var a=ku(dl),n=D.T,r=Y.p;try{Y.p=32>a?32:a,D.T=null,a=hs,hs=null;var s=Va,d=dl;if(ht=0,fl=Va=null,dl=0,(ke&6)!==0)throw Error(o(331));var p=ke;if(ke|=4,Rh(s.current),wh(s,s.current,d,a),ke=p,bi(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Nl,s)}catch{}return!0}finally{Y.p=r,D.T=n,Xh(e,t)}}function qh(e,t,a){t=Ut(a,t),t=qo(e.stateNode,t,2),e=La(e,t,2),e!==null&&(Ll(e,2),la(e))}function _e(e,t,a){if(e.tag===3)qh(e,e,a);else for(;t!==null;){if(t.tag===3){qh(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Xa===null||!Xa.has(n))){e=Ut(a,e),a=Jd(2),n=La(t,a,2),n!==null&&(Fd(a,n,t,e),Ll(n,2),la(n));break}}t=t.return}}function bs(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new sA;var r=new Set;n.set(t,r)}else r=n.get(t),r===void 0&&(r=new Set,n.set(t,r));r.has(a)||(os=!0,r.add(a),e=pA.bind(null,e,t,a),t.then(e,e))}function pA(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ge===e&&(Re&a)===a&&(Ze===4||Ze===3&&(Re&62914560)===Re&&300>Pe()-fs?(ke&2)===0&&hl(e,0):ss|=a,cl===Re&&(cl=0)),la(e)}function Zh(e,t){t===0&&(t=Gc()),e=In(e,t),e!==null&&(Ll(e,t),la(e))}function gA(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Zh(e,a)}function mA(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(o(314))}n!==null&&n.delete(t),Zh(e,a)}function AA(e,t){return $e(e,t)}var Ur=null,gl=null,ys=!1,jr=!1,vs=!1,Sn=0;function la(e){e!==gl&&e.next===null&&(gl===null?Ur=gl=e:gl=gl.next=e),jr=!0,ys||(ys=!0,yA())}function bi(e,t){if(!vs&&jr){vs=!0;do for(var a=!1,n=Ur;n!==null;){if(e!==0){var r=n.pendingLanes;if(r===0)var s=0;else{var d=n.suspendedLanes,p=n.pingedLanes;s=(1<<31-Ot(42|e)+1)-1,s&=r&~(d&~p),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,Fh(n,s))}else s=Re,s=Vi(n,n===Ge?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||kl(n,s)||(a=!0,Fh(n,s));n=n.next}while(a);vs=!1}}function bA(){Kh()}function Kh(){jr=ys=!1;var e=0;Sn!==0&&(OA()&&(e=Sn),Sn=0);for(var t=Pe(),a=null,n=Ur;n!==null;){var r=n.next,s=Ih(n,t);s===0?(n.next=null,a===null?Ur=r:a.next=r,r===null&&(gl=a)):(a=n,(e!==0||(s&3)!==0)&&(jr=!0)),n=r}bi(e)}function Ih(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-Ot(s),p=1<<d,b=r[d];b===-1?((p&a)===0||(p&n)!==0)&&(r[d]=X0(p,t)):b<=t&&(e.expiredLanes|=p),s&=~p}if(t=Ge,a=Re,a=Vi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Ie(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||kl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Ie(n),ku(a)){case 2:case 8:a=kn;break;case 32:a=Ra;break;case 268435456:a=Ml;break;default:a=Ra}return n=Jh.bind(null,e),a=$e(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Ie(n),e.callbackPriority=2,e.callbackNode=null,2}function Jh(e,t){if(ht!==0&&ht!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Qr()&&e.callbackNode!==a)return null;var n=Re;return n=Vi(e,e===Ge?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Mh(e,n,t),Ih(e,Pe()),e.callbackNode!=null&&e.callbackNode===a?Jh.bind(null,e):null)}function Fh(e,t){if(Qr())return null;Mh(e,t,!0)}function yA(){DA(function(){(ke&6)!==0?$e(qt,bA):Kh()})}function xs(){return Sn===0&&(Sn=_c()),Sn}function Wh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ji(""+e)}function Ph(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function vA(e,t,a,n,r){if(t==="submit"&&a&&a.stateNode===r){var s=Wh((r[xt]||null).action),d=n.submitter;d&&(t=(t=d[xt]||null)?Wh(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var p=new er("action","action",null,n,r);e.push({event:p,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Sn!==0){var b=d?Ph(r,d):new FormData(r);_o(a,{pending:!0,data:b,method:r.method,action:s},null,b)}}else typeof s=="function"&&(p.preventDefault(),b=d?Ph(r,d):new FormData(r),_o(a,{pending:!0,data:b,method:r.method,action:s},s,b))},currentTarget:r}]})}}for(var Ss=0;Ss<io.length;Ss++){var Es=io[Ss],xA=Es.toLowerCase(),SA=Es[0].toUpperCase()+Es.slice(1);Zt(xA,"on"+SA)}Zt(Mf,"onAnimationEnd"),Zt(Nf,"onAnimationIteration"),Zt(kf,"onAnimationStart"),Zt("dblclick","onDoubleClick"),Zt("focusin","onFocus"),Zt("focusout","onBlur"),Zt(jm,"onTransitionRun"),Zt(Hm,"onTransitionStart"),Zt(_m,"onTransitionCancel"),Zt(Lf,"onTransitionEnd"),jn("onMouseEnter",["mouseout","mouseover"]),jn("onMouseLeave",["mouseout","mouseover"]),jn("onPointerEnter",["pointerout","pointerover"]),jn("onPointerLeave",["pointerout","pointerover"]),rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rn("onBeforeInput",["compositionend","keypress","textInput","paste"]),rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yi));function ep(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],r=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var d=n.length-1;0<=d;d--){var p=n[d],b=p.instance,w=p.currentTarget;if(p=p.listener,b!==s&&r.isPropagationStopped())break e;s=p,r.currentTarget=w;try{s(r)}catch($){Cr($)}r.currentTarget=null,s=b}else for(d=0;d<n.length;d++){if(p=n[d],b=p.instance,w=p.currentTarget,p=p.listener,b!==s&&r.isPropagationStopped())break e;s=p,r.currentTarget=w;try{s(r)}catch($){Cr($)}r.currentTarget=null,s=b}}}}function we(e,t){var a=t[Lu];a===void 0&&(a=t[Lu]=new Set);var n=e+"__bubble";a.has(n)||(tp(t,e,2,!1),a.add(n))}function Ts(e,t,a){var n=0;t&&(n|=4),tp(a,e,n,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function ws(e){if(!e[Hr]){e[Hr]=!0,Zc.forEach(function(a){a!=="selectionchange"&&(EA.has(a)||Ts(a,!1,e),Ts(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hr]||(t[Hr]=!0,Ts("selectionchange",!1,t))}}function tp(e,t,a,n){switch(wp(t)){case 2:var r=JA;break;case 8:r=FA;break;default:r=js}a=r.bind(null,t,a,e),r=void 0,!qu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),n?r!==void 0?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):r!==void 0?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function Cs(e,t,a,n,r){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var p=n.stateNode.containerInfo;if(p===r)break;if(d===4)for(d=n.return;d!==null;){var b=d.tag;if((b===3||b===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;p!==null;){if(d=$n(p),d===null)return;if(b=d.tag,b===5||b===6||b===26||b===27){n=s=d;continue e}p=p.parentNode}}n=n.return}of(function(){var w=s,$=Xu(a),j=[];e:{var C=$f.get(e);if(C!==void 0){var O=er,ce=e;switch(e){case"keypress":if(Wi(a)===0)break e;case"keydown":case"keyup":O=Am;break;case"focusin":ce="focus",O=Ju;break;case"focusout":ce="blur",O=Ju;break;case"beforeblur":case"afterblur":O=Ju;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=im;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=vm;break;case Mf:case Nf:case kf:O=om;break;case Lf:O=Sm;break;case"scroll":case"scrollend":O=nm;break;case"wheel":O=Tm;break;case"copy":case"cut":case"paste":O=cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=hf;break;case"toggle":case"beforetoggle":O=Cm}var ue=(t&4)!==0,je=!ue&&(e==="scroll"||e==="scrollend"),E=ue?C!==null?C+"Capture":null:C;ue=[];for(var S=w,T;S!==null;){var U=S;if(T=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||T===null||E===null||(U=Ul(S,E),U!=null&&ue.push(vi(S,U,T))),je)break;S=S.return}0<ue.length&&(C=new O(C,ce,null,a,$),j.push({event:C,listeners:ue}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",C&&a!==Yu&&(ce=a.relatedTarget||a.fromElement)&&($n(ce)||ce[Ln]))break e;if((O||C)&&(C=$.window===$?$:(C=$.ownerDocument)?C.defaultView||C.parentWindow:window,O?(ce=a.relatedTarget||a.toElement,O=w,ce=ce?$n(ce):null,ce!==null&&(je=f(ce),ue=ce.tag,ce!==je||ue!==5&&ue!==27&&ue!==6)&&(ce=null)):(O=null,ce=w),O!==ce)){if(ue=ff,U="onMouseLeave",E="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ue=hf,U="onPointerLeave",E="onPointerEnter",S="pointer"),je=O==null?C:Ql(O),T=ce==null?C:Ql(ce),C=new ue(U,S+"leave",O,a,$),C.target=je,C.relatedTarget=T,U=null,$n($)===w&&(ue=new ue(E,S+"enter",ce,a,$),ue.target=T,ue.relatedTarget=je,U=ue),je=U,O&&ce)t:{for(ue=O,E=ce,S=0,T=ue;T;T=ml(T))S++;for(T=0,U=E;U;U=ml(U))T++;for(;0<S-T;)ue=ml(ue),S--;for(;0<T-S;)E=ml(E),T--;for(;S--;){if(ue===E||E!==null&&ue===E.alternate)break t;ue=ml(ue),E=ml(E)}ue=null}else ue=null;O!==null&&ap(j,C,O,ue,!1),ce!==null&&je!==null&&ap(j,je,ce,ue,!0)}}e:{if(C=w?Ql(w):window,O=C.nodeName&&C.nodeName.toLowerCase(),O==="select"||O==="input"&&C.type==="file")var le=xf;else if(yf(C))if(Sf)le=$m;else{le=km;var Ee=Nm}else O=C.nodeName,!O||O.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?w&&Gu(w.elementType)&&(le=xf):le=Lm;if(le&&(le=le(e,w))){vf(j,le,a,$);break e}Ee&&Ee(e,C,w),e==="focusout"&&w&&C.type==="number"&&w.memoizedProps.value!=null&&_u(C,"number",C.value)}switch(Ee=w?Ql(w):window,e){case"focusin":(yf(Ee)||Ee.contentEditable==="true")&&(qn=Ee,ao=w,ql=null);break;case"focusout":ql=ao=qn=null;break;case"mousedown":no=!0;break;case"contextmenu":case"mouseup":case"dragend":no=!1,Bf(j,a,$);break;case"selectionchange":if(Um)break;case"keydown":case"keyup":Bf(j,a,$)}var re;if(Wu)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else Vn?Af(e,a)&&(oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(pf&&a.locale!=="ko"&&(Vn||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&Vn&&(re=sf()):(za=$,Zu="value"in za?za.value:za.textContent,Vn=!0)),Ee=_r(w,oe),0<Ee.length&&(oe=new df(oe,e,null,a,$),j.push({event:oe,listeners:Ee}),re?oe.data=re:(re=bf(a),re!==null&&(oe.data=re)))),(re=Rm?Dm(e,a):Bm(e,a))&&(oe=_r(w,"onBeforeInput"),0<oe.length&&(Ee=new df("onBeforeInput","beforeinput",null,a,$),j.push({event:Ee,listeners:oe}),Ee.data=re)),vA(j,e,w,a,$)}ep(j,t)})}function vi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function _r(e,t){for(var a=t+"Capture",n=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=Ul(e,a),r!=null&&n.unshift(vi(e,r,s)),r=Ul(e,t),r!=null&&n.push(vi(e,r,s))),e.tag===3)return n;e=e.return}return[]}function ml(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ap(e,t,a,n,r){for(var s=t._reactName,d=[];a!==null&&a!==n;){var p=a,b=p.alternate,w=p.stateNode;if(p=p.tag,b!==null&&b===n)break;p!==5&&p!==26&&p!==27||w===null||(b=w,r?(w=Ul(a,s),w!=null&&d.unshift(vi(a,w,b))):r||(w=Ul(a,s),w!=null&&d.push(vi(a,w,b)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var TA=/\r\n?/g,wA=/\u0000|\uFFFD/g;function np(e){return(typeof e=="string"?e:""+e).replace(TA,`
`).replace(wA,"")}function lp(e,t){return t=np(t),np(e)===t}function Gr(){}function Ue(e,t,a,n,r,s){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Gn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Gn(e,""+n);break;case"className":Zi(e,"class",n);break;case"tabIndex":Zi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Zi(e,a,n);break;case"style":rf(e,n,s);break;case"data":if(t!=="object"){Zi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ji(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&Ue(e,t,"name",r.name,r,null),Ue(e,t,"formEncType",r.formEncType,r,null),Ue(e,t,"formMethod",r.formMethod,r,null),Ue(e,t,"formTarget",r.formTarget,r,null)):(Ue(e,t,"encType",r.encType,r,null),Ue(e,t,"method",r.method,r,null),Ue(e,t,"target",r.target,r,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Ji(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Gr);break;case"onScroll":n!=null&&we("scroll",e);break;case"onScrollEnd":n!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Ji(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":we("beforetoggle",e),we("toggle",e),qi(e,"popover",n);break;case"xlinkActuate":ca(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ca(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ca(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ca(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ca(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ca(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ca(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ca(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ca(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":qi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=tm.get(a)||a,qi(e,a,n))}}function Os(e,t,a,n,r,s){switch(a){case"style":rf(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Gn(e,n):(typeof n=="number"||typeof n=="bigint")&&Gn(e,""+n);break;case"onScroll":n!=null&&we("scroll",e);break;case"onScrollEnd":n!=null&&we("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Gr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),t=a.slice(2,r?a.length-7:void 0),s=e[xt]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof n=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,r);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):qi(e,a,n)}}}function pt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var n=!1,r=!1,s;for(s in a)if(a.hasOwnProperty(s)){var d=a[s];if(d!=null)switch(s){case"src":n=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ue(e,t,s,d,a,null)}}r&&Ue(e,t,"srcSet",a.srcSet,a,null),n&&Ue(e,t,"src",a.src,a,null);return;case"input":we("invalid",e);var p=s=d=r=null,b=null,w=null;for(n in a)if(a.hasOwnProperty(n)){var $=a[n];if($!=null)switch(n){case"name":r=$;break;case"type":d=$;break;case"checked":b=$;break;case"defaultChecked":w=$;break;case"value":s=$;break;case"defaultValue":p=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(o(137,t));break;default:Ue(e,t,n,$,a,null)}}tf(e,s,p,b,w,d,r,!1),Ki(e);return;case"select":we("invalid",e),n=d=s=null;for(r in a)if(a.hasOwnProperty(r)&&(p=a[r],p!=null))switch(r){case"value":s=p;break;case"defaultValue":d=p;break;case"multiple":n=p;default:Ue(e,t,r,p,a,null)}t=s,a=d,e.multiple=!!n,t!=null?_n(e,!!n,t,!1):a!=null&&_n(e,!!n,a,!0);return;case"textarea":we("invalid",e),s=r=n=null;for(d in a)if(a.hasOwnProperty(d)&&(p=a[d],p!=null))switch(d){case"value":n=p;break;case"defaultValue":r=p;break;case"children":s=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(o(91));break;default:Ue(e,t,d,p,a,null)}nf(e,n,r,s),Ki(e);return;case"option":for(b in a)if(a.hasOwnProperty(b)&&(n=a[b],n!=null))switch(b){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ue(e,t,b,n,a,null)}return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(n=0;n<yi.length;n++)we(yi[n],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(n=a[w],n!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ue(e,t,w,n,a,null)}return;default:if(Gu(t)){for($ in a)a.hasOwnProperty($)&&(n=a[$],n!==void 0&&Os(e,t,$,n,a,void 0));return}}for(p in a)a.hasOwnProperty(p)&&(n=a[p],n!=null&&Ue(e,t,p,n,a,null))}function CA(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,d=null,p=null,b=null,w=null,$=null;for(O in a){var j=a[O];if(a.hasOwnProperty(O)&&j!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":b=j;default:n.hasOwnProperty(O)||Ue(e,t,O,null,n,j)}}for(var C in n){var O=n[C];if(j=a[C],n.hasOwnProperty(C)&&(O!=null||j!=null))switch(C){case"type":s=O;break;case"name":r=O;break;case"checked":w=O;break;case"defaultChecked":$=O;break;case"value":d=O;break;case"defaultValue":p=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,t));break;default:O!==j&&Ue(e,t,C,O,n,j)}}Hu(e,d,p,b,w,$,s,r);return;case"select":O=d=p=C=null;for(s in a)if(b=a[s],a.hasOwnProperty(s)&&b!=null)switch(s){case"value":break;case"multiple":O=b;default:n.hasOwnProperty(s)||Ue(e,t,s,null,n,b)}for(r in n)if(s=n[r],b=a[r],n.hasOwnProperty(r)&&(s!=null||b!=null))switch(r){case"value":C=s;break;case"defaultValue":p=s;break;case"multiple":d=s;default:s!==b&&Ue(e,t,r,s,n,b)}t=p,a=d,n=O,C!=null?_n(e,!!a,C,!1):!!n!=!!a&&(t!=null?_n(e,!!a,t,!0):_n(e,!!a,a?[]:"",!1));return;case"textarea":O=C=null;for(p in a)if(r=a[p],a.hasOwnProperty(p)&&r!=null&&!n.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Ue(e,t,p,null,n,r)}for(d in n)if(r=n[d],s=a[d],n.hasOwnProperty(d)&&(r!=null||s!=null))switch(d){case"value":C=r;break;case"defaultValue":O=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==s&&Ue(e,t,d,r,n,s)}af(e,C,O);return;case"option":for(var ce in a)if(C=a[ce],a.hasOwnProperty(ce)&&C!=null&&!n.hasOwnProperty(ce))switch(ce){case"selected":e.selected=!1;break;default:Ue(e,t,ce,null,n,C)}for(b in n)if(C=n[b],O=a[b],n.hasOwnProperty(b)&&C!==O&&(C!=null||O!=null))switch(b){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:Ue(e,t,b,C,n,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in a)C=a[ue],a.hasOwnProperty(ue)&&C!=null&&!n.hasOwnProperty(ue)&&Ue(e,t,ue,null,n,C);for(w in n)if(C=n[w],O=a[w],n.hasOwnProperty(w)&&C!==O&&(C!=null||O!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(o(137,t));break;default:Ue(e,t,w,C,n,O)}return;default:if(Gu(t)){for(var je in a)C=a[je],a.hasOwnProperty(je)&&C!==void 0&&!n.hasOwnProperty(je)&&Os(e,t,je,void 0,n,C);for($ in n)C=n[$],O=a[$],!n.hasOwnProperty($)||C===O||C===void 0&&O===void 0||Os(e,t,$,C,n,O);return}}for(var E in a)C=a[E],a.hasOwnProperty(E)&&C!=null&&!n.hasOwnProperty(E)&&Ue(e,t,E,null,n,C);for(j in n)C=n[j],O=a[j],!n.hasOwnProperty(j)||C===O||C==null&&O==null||Ue(e,t,j,C,n,O)}var Rs=null,Ds=null;function Yr(e){return e.nodeType===9?e:e.ownerDocument}function ip(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Bs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zs=null;function OA(){var e=window.event;return e&&e.type==="popstate"?e===zs?!1:(zs=e,!0):(zs=null,!1)}var up=typeof setTimeout=="function"?setTimeout:void 0,RA=typeof clearTimeout=="function"?clearTimeout:void 0,op=typeof Promise=="function"?Promise:void 0,DA=typeof queueMicrotask=="function"?queueMicrotask:typeof op<"u"?function(e){return op.resolve(null).then(e).catch(BA)}:up;function BA(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function sp(e,t){var a=t,n=0,r=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(0<n&&8>n){a=n;var d=e.ownerDocument;if(a&1&&xi(d.documentElement),a&2&&xi(d.body),a&4)for(a=d.head,xi(a),d=a.firstChild;d;){var p=d.nextSibling,b=d.nodeName;d[$l]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=p}}if(r===0){e.removeChild(s),Di(t);return}r--}else a==="$"||a==="$?"||a==="$!"?r++:n=a.charCodeAt(0)-48;else n=0;a=s}while(a);Di(t)}function Ms(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ms(a),$u(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function zA(e,t,a,n){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[$l])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=It(e.nextSibling),e===null)break}return null}function MA(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=It(e.nextSibling),e===null))return null;return e}function Ns(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function NA(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var ks=null;function cp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function fp(e,t,a){switch(t=Yr(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function xi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$u(e)}var Xt=new Map,dp=new Set;function Xr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ta=Y.d;Y.d={f:kA,r:LA,D:$A,C:QA,L:UA,m:jA,X:_A,S:HA,M:GA};function kA(){var e=Ta.f(),t=Lr();return e||t}function LA(e){var t=Qn(e);t!==null&&t.tag===5&&t.type==="form"?Md(t):Ta.r(e)}var Al=typeof document>"u"?null:document;function hp(e,t,a){var n=Al;if(n&&typeof t=="string"&&t){var r=Qt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),dp.has(r)||(dp.add(r),e={rel:e,crossOrigin:a,href:t},n.querySelector(r)===null&&(t=n.createElement("link"),pt(t,"link",e),rt(t),n.head.appendChild(t)))}}function $A(e){Ta.D(e),hp("dns-prefetch",e,null)}function QA(e,t){Ta.C(e,t),hp("preconnect",e,t)}function UA(e,t,a){Ta.L(e,t,a);var n=Al;if(n&&e&&t){var r='link[rel="preload"][as="'+Qt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+Qt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+Qt(a.imageSizes)+'"]')):r+='[href="'+Qt(e)+'"]';var s=r;switch(t){case"style":s=bl(e);break;case"script":s=yl(e)}Xt.has(s)||(e=y({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Xt.set(s,e),n.querySelector(r)!==null||t==="style"&&n.querySelector(Si(s))||t==="script"&&n.querySelector(Ei(s))||(t=n.createElement("link"),pt(t,"link",e),rt(t),n.head.appendChild(t)))}}function jA(e,t){Ta.m(e,t);var a=Al;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Qt(n)+'"][href="'+Qt(e)+'"]',s=r;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=yl(e)}if(!Xt.has(s)&&(e=y({rel:"modulepreload",href:e},t),Xt.set(s,e),a.querySelector(r)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ei(s)))return}n=a.createElement("link"),pt(n,"link",e),rt(n),a.head.appendChild(n)}}}function HA(e,t,a){Ta.S(e,t,a);var n=Al;if(n&&e){var r=Un(n).hoistableStyles,s=bl(e);t=t||"default";var d=r.get(s);if(!d){var p={loading:0,preload:null};if(d=n.querySelector(Si(s)))p.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Xt.get(s))&&Ls(e,a);var b=d=n.createElement("link");rt(b),pt(b,"link",e),b._p=new Promise(function(w,$){b.onload=w,b.onerror=$}),b.addEventListener("load",function(){p.loading|=1}),b.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Vr(d,t,n)}d={type:"stylesheet",instance:d,count:1,state:p},r.set(s,d)}}}function _A(e,t){Ta.X(e,t);var a=Al;if(a&&e){var n=Un(a).hoistableScripts,r=yl(e),s=n.get(r);s||(s=a.querySelector(Ei(r)),s||(e=y({src:e,async:!0},t),(t=Xt.get(r))&&$s(e,t),s=a.createElement("script"),rt(s),pt(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(r,s))}}function GA(e,t){Ta.M(e,t);var a=Al;if(a&&e){var n=Un(a).hoistableScripts,r=yl(e),s=n.get(r);s||(s=a.querySelector(Ei(r)),s||(e=y({src:e,async:!0,type:"module"},t),(t=Xt.get(r))&&$s(e,t),s=a.createElement("script"),rt(s),pt(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(r,s))}}function pp(e,t,a,n){var r=(r=te.current)?Xr(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=bl(a.href),a=Un(r).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=bl(a.href);var s=Un(r).hoistableStyles,d=s.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=r.querySelector(Si(e)))&&!s._p&&(d.instance=s,d.state.loading=5),Xt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Xt.set(e,a),s||YA(r,e,a,d.state))),t&&n===null)throw Error(o(528,""));return d}if(t&&n!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=yl(a),a=Un(r).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function bl(e){return'href="'+Qt(e)+'"'}function Si(e){return'link[rel="stylesheet"]['+e+"]"}function gp(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function YA(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),pt(t,"link",a),rt(t),e.head.appendChild(t))}function yl(e){return'[src="'+Qt(e)+'"]'}function Ei(e){return"script[async]"+e}function mp(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Qt(a.href)+'"]');if(n)return t.instance=n,rt(n),n;var r=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),rt(n),pt(n,"style",r),Vr(n,a.precedence,e),t.instance=n;case"stylesheet":r=bl(a.href);var s=e.querySelector(Si(r));if(s)return t.state.loading|=4,t.instance=s,rt(s),s;n=gp(a),(r=Xt.get(r))&&Ls(n,r),s=(e.ownerDocument||e).createElement("link"),rt(s);var d=s;return d._p=new Promise(function(p,b){d.onload=p,d.onerror=b}),pt(s,"link",n),t.state.loading|=4,Vr(s,a.precedence,e),t.instance=s;case"script":return s=yl(a.src),(r=e.querySelector(Ei(s)))?(t.instance=r,rt(r),r):(n=a,(r=Xt.get(s))&&(n=y({},a),$s(n,r)),e=e.ownerDocument||e,r=e.createElement("script"),rt(r),pt(r,"link",n),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Vr(n,a.precedence,e));return t.instance}function Vr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=n.length?n[n.length-1]:null,s=r,d=0;d<n.length;d++){var p=n[d];if(p.dataset.precedence===t)s=p;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ls(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $s(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var qr=null;function Ap(e,t,a){if(qr===null){var n=new Map,r=qr=new Map;r.set(a,n)}else r=qr,n=r.get(a),n||(n=new Map,r.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var s=a[r];if(!(s[$l]||s[mt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var p=n.get(d);p?p.push(s):n.set(d,[s])}}return n}function bp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function XA(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function yp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ti=null;function VA(){}function qA(e,t,a){if(Ti===null)throw Error(o(475));var n=Ti;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=bl(a.href),s=e.querySelector(Si(r));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Zr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=s,rt(s);return}s=e.ownerDocument||e,a=gp(a),(r=Xt.get(r))&&Ls(a,r),s=s.createElement("link"),rt(s);var d=s;d._p=new Promise(function(p,b){d.onload=p,d.onerror=b}),pt(s,"link",a),t.instance=s}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Zr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function ZA(){if(Ti===null)throw Error(o(475));var e=Ti;return e.stylesheets&&e.count===0&&Qs(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Qs(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Zr(){if(this.count--,this.count===0){if(this.stylesheets)Qs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kr=null;function Qs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kr=new Map,t.forEach(KA,e),Kr=null,Zr.call(e))}function KA(e,t){if(!(t.state.loading&4)){var a=Kr.get(e);if(a)var n=a.get(null);else{a=new Map,Kr.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var d=r[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),n=d)}n&&a.set(null,n)}r=t.instance,d=r.getAttribute("data-precedence"),s=a.get(d)||n,s===n&&a.set(null,r),a.set(d,r),this.count++,n=Zr.bind(this),r.addEventListener("load",n),r.addEventListener("error",n),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var wi={$$typeof:G,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function IA(e,t,a,n,r,s,d,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mu(0),this.hiddenUpdates=Mu(null),this.identifierPrefix=n,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function vp(e,t,a,n,r,s,d,p,b,w,$,j){return e=new IA(e,t,a,d,p,b,w,j),t=1,s===!0&&(t|=24),s=Dt(3,null,null,t),e.current=s,s.stateNode=e,t=bo(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:t},So(s),e}function xp(e){return e?(e=Jn,e):Jn}function Sp(e,t,a,n,r,s){r=xp(r),n.context===null?n.context=r:n.pendingContext=r,n=ka(t),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=La(e,n,t),a!==null&&(kt(a,e,t),ti(a,e,t))}function Ep(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Us(e,t){Ep(e,t),(e=e.alternate)&&Ep(e,t)}function Tp(e){if(e.tag===13){var t=In(e,67108864);t!==null&&kt(t,e,67108864),Us(e,67108864)}}var Ir=!0;function JA(e,t,a,n){var r=D.T;D.T=null;var s=Y.p;try{Y.p=2,js(e,t,a,n)}finally{Y.p=s,D.T=r}}function FA(e,t,a,n){var r=D.T;D.T=null;var s=Y.p;try{Y.p=8,js(e,t,a,n)}finally{Y.p=s,D.T=r}}function js(e,t,a,n){if(Ir){var r=Hs(n);if(r===null)Cs(e,t,n,Jr,a),Cp(e,n);else if(PA(r,e,t,a,n))n.stopPropagation();else if(Cp(e,n),t&4&&-1<WA.indexOf(e)){for(;r!==null;){var s=Qn(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=ln(s.pendingLanes);if(d!==0){var p=s;for(p.pendingLanes|=2,p.entangledLanes|=2;d;){var b=1<<31-Ot(d);p.entanglements[1]|=b,d&=~b}la(s),(ke&6)===0&&(Nr=Pe()+500,bi(0))}}break;case 13:p=In(s,2),p!==null&&kt(p,s,2),Lr(),Us(s,2)}if(s=Hs(n),s===null&&Cs(e,t,n,Jr,a),s===r)break;r=s}r!==null&&n.stopPropagation()}else Cs(e,t,n,null,a)}}function Hs(e){return e=Xu(e),_s(e)}var Jr=null;function _s(e){if(Jr=null,e=$n(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Jr=e,null}function wp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sa()){case qt:return 2;case kn:return 8;case Ra:case nn:return 32;case Ml:return 268435456;default:return 32}default:return 32}}var Gs=!1,Ka=null,Ia=null,Ja=null,Ci=new Map,Oi=new Map,Fa=[],WA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cp(e,t){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oi.delete(t.pointerId)}}function Ri(e,t,a,n,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Qn(t),t!==null&&Tp(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function PA(e,t,a,n,r){switch(t){case"focusin":return Ka=Ri(Ka,e,t,a,n,r),!0;case"dragenter":return Ia=Ri(Ia,e,t,a,n,r),!0;case"mouseover":return Ja=Ri(Ja,e,t,a,n,r),!0;case"pointerover":var s=r.pointerId;return Ci.set(s,Ri(Ci.get(s)||null,e,t,a,n,r)),!0;case"gotpointercapture":return s=r.pointerId,Oi.set(s,Ri(Oi.get(s)||null,e,t,a,n,r)),!0}return!1}function Op(e){var t=$n(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,q0(e.priority,function(){if(a.tag===13){var n=Nt();n=Nu(n);var r=In(a,n);r!==null&&kt(r,a,n),Us(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Hs(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Yu=n,a.target.dispatchEvent(n),Yu=null}else return t=Qn(a),t!==null&&Tp(t),e.blockedOn=a,!1;t.shift()}return!0}function Rp(e,t,a){Fr(e)&&a.delete(t)}function eb(){Gs=!1,Ka!==null&&Fr(Ka)&&(Ka=null),Ia!==null&&Fr(Ia)&&(Ia=null),Ja!==null&&Fr(Ja)&&(Ja=null),Ci.forEach(Rp),Oi.forEach(Rp)}function Wr(e,t){e.blockedOn===t&&(e.blockedOn=null,Gs||(Gs=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,eb)))}var Pr=null;function Dp(e){Pr!==e&&(Pr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Pr===e&&(Pr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],r=e[t+2];if(typeof n!="function"){if(_s(n||a)===null)continue;break}var s=Qn(a);s!==null&&(e.splice(t,3),t-=3,_o(s,{pending:!0,data:r,method:a.method,action:n},n,r))}}))}function Di(e){function t(b){return Wr(b,e)}Ka!==null&&Wr(Ka,e),Ia!==null&&Wr(Ia,e),Ja!==null&&Wr(Ja,e),Ci.forEach(t),Oi.forEach(t);for(var a=0;a<Fa.length;a++){var n=Fa[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Fa.length&&(a=Fa[0],a.blockedOn===null);)Op(a),a.blockedOn===null&&Fa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var r=a[n],s=a[n+1],d=r[xt]||null;if(typeof s=="function")d||Dp(a);else if(d){var p=null;if(s&&s.hasAttribute("formAction")){if(r=s,d=s[xt]||null)p=d.formAction;else if(_s(r)!==null)continue}else p=d.action;typeof p=="function"?a[n+1]=p:(a.splice(n,3),n-=3),Dp(a)}}}function Ys(e){this._internalRoot=e}eu.prototype.render=Ys.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,n=Nt();Sp(a,n,e,t,null,null)},eu.prototype.unmount=Ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sp(e.current,2,null,e,null,null),Lr(),t[Ln]=null}};function eu(e){this._internalRoot=e}eu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Fa.length&&t!==0&&t<Fa[a].priority;a++);Fa.splice(a,0,e),a===0&&Op(e)}};var Bp=i.version;if(Bp!=="19.1.1")throw Error(o(527,Bp,"19.1.1"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=A(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var tb={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{Nl=tu.inject(tb),Ct=tu}catch{}}return zi.createRoot=function(e,t){if(!c(e))throw Error(o(299));var a=!1,n="",r=qd,s=Zd,d=Kd,p=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks)),t=vp(e,1,!1,null,null,a,n,r,s,d,p,null),e[Ln]=t.current,ws(e),new Ys(t)},zi.hydrateRoot=function(e,t,a){if(!c(e))throw Error(o(299));var n=!1,r="",s=qd,d=Zd,p=Kd,b=null,w=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(p=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks),a.formState!==void 0&&(w=a.formState)),t=vp(e,1,!0,t,a??null,n,r,s,d,p,b,w),t.context=xp(null),a=t.current,n=Nt(),n=Nu(n),r=ka(n),r.callback=null,La(a,r,n),a=n,t.current.lanes=a,Ll(t,a),la(t),e[Ln]=t.current,ws(e),new eu(t)},zi.version="19.1.1",zi}var Hp;function cb(){if(Hp)return Vs.exports;Hp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(i){console.error(i)}}return l(),Vs.exports=sb(),Vs.exports}var fb=cb(),ft=function(){return ft=Object.assign||function(i){for(var u,o=1,c=arguments.length;o<c;o++){u=arguments[o];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(i[f]=u[f])}return i},ft.apply(this,arguments)};function Qi(l,i,u){if(u||arguments.length===2)for(var o=0,c=i.length,f;o<c;o++)(f||!(o in i))&&(f||(f=Array.prototype.slice.call(i,0,o)),f[o]=i[o]);return l.concat(f||Array.prototype.slice.call(i))}var R=Tc();const M=Ng(R);var Ye="-ms-",Li="-moz-",Me="-webkit-",Lg="comm",Su="rule",wc="decl",db="@import",$g="@keyframes",hb="@layer",Qg=Math.abs,Cc=String.fromCharCode,ic=Object.assign;function pb(l,i){return ct(l,0)^45?(((i<<2^ct(l,0))<<2^ct(l,1))<<2^ct(l,2))<<2^ct(l,3):0}function Ug(l){return l.trim()}function Oa(l,i){return(l=i.exec(l))?l[0]:l}function be(l,i,u){return l.replace(i,u)}function su(l,i,u){return l.indexOf(i,u)}function ct(l,i){return l.charCodeAt(i)|0}function wl(l,i,u){return l.slice(i,u)}function ia(l){return l.length}function jg(l){return l.length}function ki(l,i){return i.push(l),l}function gb(l,i){return l.map(i).join("")}function _p(l,i){return l.filter(function(u){return!Oa(u,i)})}var Eu=1,Cl=1,Hg=0,Vt=0,at=0,Bl="";function Tu(l,i,u,o,c,f,h,m){return{value:l,root:i,parent:u,type:o,props:c,children:f,line:Eu,column:Cl,length:h,return:"",siblings:m}}function Pa(l,i){return ic(Tu("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},i)}function vl(l){for(;l.root;)l=Pa(l.root,{children:[l]});ki(l,l.siblings)}function mb(){return at}function Ab(){return at=Vt>0?ct(Bl,--Vt):0,Cl--,at===10&&(Cl=1,Eu--),at}function Ft(){return at=Vt<Hg?ct(Bl,Vt++):0,Cl++,at===10&&(Cl=1,Eu++),at}function On(){return ct(Bl,Vt)}function cu(){return Vt}function wu(l,i){return wl(Bl,l,i)}function rc(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bb(l){return Eu=Cl=1,Hg=ia(Bl=l),Vt=0,[]}function yb(l){return Bl="",l}function Js(l){return Ug(wu(Vt-1,uc(l===91?l+2:l===40?l+1:l)))}function vb(l){for(;(at=On())&&at<33;)Ft();return rc(l)>2||rc(at)>3?"":" "}function xb(l,i){for(;--i&&Ft()&&!(at<48||at>102||at>57&&at<65||at>70&&at<97););return wu(l,cu()+(i<6&&On()==32&&Ft()==32))}function uc(l){for(;Ft();)switch(at){case l:return Vt;case 34:case 39:l!==34&&l!==39&&uc(at);break;case 40:l===41&&uc(l);break;case 92:Ft();break}return Vt}function Sb(l,i){for(;Ft()&&l+at!==57;)if(l+at===84&&On()===47)break;return"/*"+wu(i,Vt-1)+"*"+Cc(l===47?l:Ft())}function Eb(l){for(;!rc(On());)Ft();return wu(l,Vt)}function Tb(l){return yb(fu("",null,null,null,[""],l=bb(l),0,[0],l))}function fu(l,i,u,o,c,f,h,m,A){for(var g=0,y=0,v=h,B=0,k=0,L=0,P=1,Z=1,J=1,H=0,G="",W=c,_=f,I=o,ee=G;Z;)switch(L=H,H=Ft()){case 40:if(L!=108&&ct(ee,v-1)==58){su(ee+=be(Js(H),"&","&\f"),"&\f",Qg(g?m[g-1]:0))!=-1&&(J=-1);break}case 34:case 39:case 91:ee+=Js(H);break;case 9:case 10:case 13:case 32:ee+=vb(L);break;case 92:ee+=xb(cu()-1,7);continue;case 47:switch(On()){case 42:case 47:ki(wb(Sb(Ft(),cu()),i,u,A),A);break;default:ee+="/"}break;case 123*P:m[g++]=ia(ee)*J;case 125*P:case 59:case 0:switch(H){case 0:case 125:Z=0;case 59+y:J==-1&&(ee=be(ee,/\f/g,"")),k>0&&ia(ee)-v&&ki(k>32?Yp(ee+";",o,u,v-1,A):Yp(be(ee," ","")+";",o,u,v-2,A),A);break;case 59:ee+=";";default:if(ki(I=Gp(ee,i,u,g,y,c,m,G,W=[],_=[],v,f),f),H===123)if(y===0)fu(ee,i,I,I,W,f,v,m,_);else switch(B===99&&ct(ee,3)===110?100:B){case 100:case 108:case 109:case 115:fu(l,I,I,o&&ki(Gp(l,I,I,0,0,c,m,G,c,W=[],v,_),_),c,_,v,m,o?W:_);break;default:fu(ee,I,I,I,[""],_,0,m,_)}}g=y=k=0,P=J=1,G=ee="",v=h;break;case 58:v=1+ia(ee),k=L;default:if(P<1){if(H==123)--P;else if(H==125&&P++==0&&Ab()==125)continue}switch(ee+=Cc(H),H*P){case 38:J=y>0?1:(ee+="\f",-1);break;case 44:m[g++]=(ia(ee)-1)*J,J=1;break;case 64:On()===45&&(ee+=Js(Ft())),B=On(),y=v=ia(G=ee+=Eb(cu())),H++;break;case 45:L===45&&ia(ee)==2&&(P=0)}}return f}function Gp(l,i,u,o,c,f,h,m,A,g,y,v){for(var B=c-1,k=c===0?f:[""],L=jg(k),P=0,Z=0,J=0;P<o;++P)for(var H=0,G=wl(l,B+1,B=Qg(Z=h[P])),W=l;H<L;++H)(W=Ug(Z>0?k[H]+" "+G:be(G,/&\f/g,k[H])))&&(A[J++]=W);return Tu(l,i,u,c===0?Su:m,A,g,y,v)}function wb(l,i,u,o){return Tu(l,i,u,Lg,Cc(mb()),wl(l,2,-2),0,o)}function Yp(l,i,u,o,c){return Tu(l,i,u,wc,wl(l,0,o),wl(l,o+1,-1),o,c)}function _g(l,i,u){switch(pb(l,i)){case 5103:return Me+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+l+l;case 4789:return Li+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+l+Li+l+Ye+l+l;case 5936:switch(ct(l,i+11)){case 114:return Me+l+Ye+be(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return Me+l+Ye+be(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return Me+l+Ye+be(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return Me+l+Ye+l+l;case 6165:return Me+l+Ye+"flex-"+l+l;case 5187:return Me+l+be(l,/(\w+).+(:[^]+)/,Me+"box-$1$2"+Ye+"flex-$1$2")+l;case 5443:return Me+l+Ye+"flex-item-"+be(l,/flex-|-self/g,"")+(Oa(l,/flex-|baseline/)?"":Ye+"grid-row-"+be(l,/flex-|-self/g,""))+l;case 4675:return Me+l+Ye+"flex-line-pack"+be(l,/align-content|flex-|-self/g,"")+l;case 5548:return Me+l+Ye+be(l,"shrink","negative")+l;case 5292:return Me+l+Ye+be(l,"basis","preferred-size")+l;case 6060:return Me+"box-"+be(l,"-grow","")+Me+l+Ye+be(l,"grow","positive")+l;case 4554:return Me+be(l,/([^-])(transform)/g,"$1"+Me+"$2")+l;case 6187:return be(be(be(l,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),l,"")+l;case 5495:case 3959:return be(l,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return be(be(l,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+Ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+l+l;case 4200:if(!Oa(l,/flex-|baseline/))return Ye+"grid-column-align"+wl(l,i)+l;break;case 2592:case 3360:return Ye+be(l,"template-","")+l;case 4384:case 3616:return u&&u.some(function(o,c){return i=c,Oa(o.props,/grid-\w+-end/)})?~su(l+(u=u[i].value),"span",0)?l:Ye+be(l,"-start","")+l+Ye+"grid-row-span:"+(~su(u,"span",0)?Oa(u,/\d+/):+Oa(u,/\d+/)-+Oa(l,/\d+/))+";":Ye+be(l,"-start","")+l;case 4896:case 4128:return u&&u.some(function(o){return Oa(o.props,/grid-\w+-start/)})?l:Ye+be(be(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return be(l,/(.+)-inline(.+)/,Me+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ia(l)-1-i>6)switch(ct(l,i+1)){case 109:if(ct(l,i+4)!==45)break;case 102:return be(l,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+Li+(ct(l,i+3)==108?"$3":"$2-$3"))+l;case 115:return~su(l,"stretch",0)?_g(be(l,"stretch","fill-available"),i,u)+l:l}break;case 5152:case 5920:return be(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,c,f,h,m,A,g){return Ye+c+":"+f+g+(h?Ye+c+"-span:"+(m?A:+A-+f)+g:"")+l});case 4949:if(ct(l,i+6)===121)return be(l,":",":"+Me)+l;break;case 6444:switch(ct(l,ct(l,14)===45?18:11)){case 120:return be(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Me+(ct(l,14)===45?"inline-":"")+"box$3$1"+Me+"$2$3$1"+Ye+"$2box$3")+l;case 100:return be(l,":",":"+Ye)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return be(l,"scroll-","scroll-snap-")+l}return l}function pu(l,i){for(var u="",o=0;o<l.length;o++)u+=i(l[o],o,l,i)||"";return u}function Cb(l,i,u,o){switch(l.type){case hb:if(l.children.length)break;case db:case wc:return l.return=l.return||l.value;case Lg:return"";case $g:return l.return=l.value+"{"+pu(l.children,o)+"}";case Su:if(!ia(l.value=l.props.join(",")))return""}return ia(u=pu(l.children,o))?l.return=l.value+"{"+u+"}":""}function Ob(l){var i=jg(l);return function(u,o,c,f){for(var h="",m=0;m<i;m++)h+=l[m](u,o,c,f)||"";return h}}function Rb(l){return function(i){i.root||(i=i.return)&&l(i)}}function Db(l,i,u,o){if(l.length>-1&&!l.return)switch(l.type){case wc:l.return=_g(l.value,l.length,u);return;case $g:return pu([Pa(l,{value:be(l.value,"@","@"+Me)})],o);case Su:if(l.length)return gb(u=l.props,function(c){switch(Oa(c,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":vl(Pa(l,{props:[be(c,/:(read-\w+)/,":"+Li+"$1")]})),vl(Pa(l,{props:[c]})),ic(l,{props:_p(u,o)});break;case"::placeholder":vl(Pa(l,{props:[be(c,/:(plac\w+)/,":"+Me+"input-$1")]})),vl(Pa(l,{props:[be(c,/:(plac\w+)/,":"+Li+"$1")]})),vl(Pa(l,{props:[be(c,/:(plac\w+)/,Ye+"input-$1")]})),vl(Pa(l,{props:[c]})),ic(l,{props:_p(u,o)});break}return""})}}var Bb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lt={},Ol=typeof process<"u"&&Lt!==void 0&&(Lt.REACT_APP_SC_ATTR||Lt.SC_ATTR)||"data-styled",Gg="active",Yg="data-styled-version",Cu="6.1.19",Oc=`/*!sc*/
`,gu=typeof window<"u"&&typeof document<"u",zb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==""?Lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.SC_DISABLE_SPEEDY!==void 0&&Lt.SC_DISABLE_SPEEDY!==""&&Lt.SC_DISABLE_SPEEDY!=="false"&&Lt.SC_DISABLE_SPEEDY),Mb={},Ou=Object.freeze([]),Rl=Object.freeze({});function Xg(l,i,u){return u===void 0&&(u=Rl),l.theme!==u.theme&&l.theme||i||u.theme}var Vg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Nb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kb=/(^-|-$)/g;function Xp(l){return l.replace(Nb,"-").replace(kb,"")}var Lb=/(a)(d)/gi,au=52,Vp=function(l){return String.fromCharCode(l+(l>25?39:97))};function oc(l){var i,u="";for(i=Math.abs(l);i>au;i=i/au|0)u=Vp(i%au)+u;return(Vp(i%au)+u).replace(Lb,"$1-$2")}var Fs,qg=5381,El=function(l,i){for(var u=i.length;u;)l=33*l^i.charCodeAt(--u);return l},Zg=function(l){return El(qg,l)};function Kg(l){return oc(Zg(l)>>>0)}function $b(l){return l.displayName||l.name||"Component"}function Ws(l){return typeof l=="string"&&!0}var Ig=typeof Symbol=="function"&&Symbol.for,Jg=Ig?Symbol.for("react.memo"):60115,Qb=Ig?Symbol.for("react.forward_ref"):60112,Ub={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hb=((Fs={})[Qb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fs[Jg]=Fg,Fs);function qp(l){return("type"in(i=l)&&i.type.$$typeof)===Jg?Fg:"$$typeof"in l?Hb[l.$$typeof]:Ub;var i}var _b=Object.defineProperty,Gb=Object.getOwnPropertyNames,Zp=Object.getOwnPropertySymbols,Yb=Object.getOwnPropertyDescriptor,Xb=Object.getPrototypeOf,Kp=Object.prototype;function Wg(l,i,u){if(typeof i!="string"){if(Kp){var o=Xb(i);o&&o!==Kp&&Wg(l,o,u)}var c=Gb(i);Zp&&(c=c.concat(Zp(i)));for(var f=qp(l),h=qp(i),m=0;m<c.length;++m){var A=c[m];if(!(A in jb||u&&u[A]||h&&A in h||f&&A in f)){var g=Yb(i,A);try{_b(l,A,g)}catch{}}}}return l}function Dn(l){return typeof l=="function"}function Rc(l){return typeof l=="object"&&"styledComponentId"in l}function wn(l,i){return l&&i?"".concat(l," ").concat(i):l||i||""}function sc(l,i){if(l.length===0)return"";for(var u=l[0],o=1;o<l.length;o++)u+=l[o];return u}function Ui(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function cc(l,i,u){if(u===void 0&&(u=!1),!u&&!Ui(l)&&!Array.isArray(l))return i;if(Array.isArray(i))for(var o=0;o<i.length;o++)l[o]=cc(l[o],i[o]);else if(Ui(i))for(var o in i)l[o]=cc(l[o],i[o]);return l}function Dc(l,i){Object.defineProperty(l,"toString",{value:i})}function Bn(l){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var Vb=(function(){function l(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return l.prototype.indexOfGroup=function(i){for(var u=0,o=0;o<i;o++)u+=this.groupSizes[o];return u},l.prototype.insertRules=function(i,u){if(i>=this.groupSizes.length){for(var o=this.groupSizes,c=o.length,f=c;i>=f;)if((f<<=1)<0)throw Bn(16,"".concat(i));this.groupSizes=new Uint32Array(f),this.groupSizes.set(o),this.length=f;for(var h=c;h<f;h++)this.groupSizes[h]=0}for(var m=this.indexOfGroup(i+1),A=(h=0,u.length);h<A;h++)this.tag.insertRule(m,u[h])&&(this.groupSizes[i]++,m++)},l.prototype.clearGroup=function(i){if(i<this.length){var u=this.groupSizes[i],o=this.indexOfGroup(i),c=o+u;this.groupSizes[i]=0;for(var f=o;f<c;f++)this.tag.deleteRule(o)}},l.prototype.getGroup=function(i){var u="";if(i>=this.length||this.groupSizes[i]===0)return u;for(var o=this.groupSizes[i],c=this.indexOfGroup(i),f=c+o,h=c;h<f;h++)u+="".concat(this.tag.getRule(h)).concat(Oc);return u},l})(),du=new Map,mu=new Map,hu=1,nu=function(l){if(du.has(l))return du.get(l);for(;mu.has(hu);)hu++;var i=hu++;return du.set(l,i),mu.set(i,l),i},qb=function(l,i){hu=i+1,du.set(l,i),mu.set(i,l)},Zb="style[".concat(Ol,"][").concat(Yg,'="').concat(Cu,'"]'),Kb=new RegExp("^".concat(Ol,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ib=function(l,i,u){for(var o,c=u.split(","),f=0,h=c.length;f<h;f++)(o=c[f])&&l.registerName(i,o)},Jb=function(l,i){for(var u,o=((u=i.textContent)!==null&&u!==void 0?u:"").split(Oc),c=[],f=0,h=o.length;f<h;f++){var m=o[f].trim();if(m){var A=m.match(Kb);if(A){var g=0|parseInt(A[1],10),y=A[2];g!==0&&(qb(y,g),Ib(l,y,A[3]),l.getTag().insertRules(g,c)),c.length=0}else c.push(m)}}},Ip=function(l){for(var i=document.querySelectorAll(Zb),u=0,o=i.length;u<o;u++){var c=i[u];c&&c.getAttribute(Ol)!==Gg&&(Jb(l,c),c.parentNode&&c.parentNode.removeChild(c))}};function Fb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Pg=function(l){var i=document.head,u=l||i,o=document.createElement("style"),c=(function(m){var A=Array.from(m.querySelectorAll("style[".concat(Ol,"]")));return A[A.length-1]})(u),f=c!==void 0?c.nextSibling:null;o.setAttribute(Ol,Gg),o.setAttribute(Yg,Cu);var h=Fb();return h&&o.setAttribute("nonce",h),u.insertBefore(o,f),o},Wb=(function(){function l(i){this.element=Pg(i),this.element.appendChild(document.createTextNode("")),this.sheet=(function(u){if(u.sheet)return u.sheet;for(var o=document.styleSheets,c=0,f=o.length;c<f;c++){var h=o[c];if(h.ownerNode===u)return h}throw Bn(17)})(this.element),this.length=0}return l.prototype.insertRule=function(i,u){try{return this.sheet.insertRule(u,i),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},l.prototype.getRule=function(i){var u=this.sheet.cssRules[i];return u&&u.cssText?u.cssText:""},l})(),Pb=(function(){function l(i){this.element=Pg(i),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(i,u){if(i<=this.length&&i>=0){var o=document.createTextNode(u);return this.element.insertBefore(o,this.nodes[i]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},l.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},l})(),ey=(function(){function l(i){this.rules=[],this.length=0}return l.prototype.insertRule=function(i,u){return i<=this.length&&(this.rules.splice(i,0,u),this.length++,!0)},l.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},l.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},l})(),Jp=gu,ty={isServer:!gu,useCSSOMInjection:!zb},Au=(function(){function l(i,u,o){i===void 0&&(i=Rl),u===void 0&&(u={});var c=this;this.options=ft(ft({},ty),i),this.gs=u,this.names=new Map(o),this.server=!!i.isServer,!this.server&&gu&&Jp&&(Jp=!1,Ip(this)),Dc(this,function(){return(function(f){for(var h=f.getTag(),m=h.length,A="",g=function(v){var B=(function(J){return mu.get(J)})(v);if(B===void 0)return"continue";var k=f.names.get(B),L=h.getGroup(v);if(k===void 0||!k.size||L.length===0)return"continue";var P="".concat(Ol,".g").concat(v,'[id="').concat(B,'"]'),Z="";k!==void 0&&k.forEach(function(J){J.length>0&&(Z+="".concat(J,","))}),A+="".concat(L).concat(P,'{content:"').concat(Z,'"}').concat(Oc)},y=0;y<m;y++)g(y);return A})(c)})}return l.registerId=function(i){return nu(i)},l.prototype.rehydrate=function(){!this.server&&gu&&Ip(this)},l.prototype.reconstructWithOptions=function(i,u){return u===void 0&&(u=!0),new l(ft(ft({},this.options),i),this.gs,u&&this.names||void 0)},l.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(i=(function(u){var o=u.useCSSOMInjection,c=u.target;return u.isServer?new ey(c):o?new Wb(c):new Pb(c)})(this.options),new Vb(i)));var i},l.prototype.hasNameForId=function(i,u){return this.names.has(i)&&this.names.get(i).has(u)},l.prototype.registerName=function(i,u){if(nu(i),this.names.has(i))this.names.get(i).add(u);else{var o=new Set;o.add(u),this.names.set(i,o)}},l.prototype.insertRules=function(i,u,o){this.registerName(i,u),this.getTag().insertRules(nu(i),o)},l.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},l.prototype.clearRules=function(i){this.getTag().clearGroup(nu(i)),this.clearNames(i)},l.prototype.clearTag=function(){this.tag=void 0},l})(),ay=/&/g,ny=/^\s*\/\/.*$/gm;function e0(l,i){return l.map(function(u){return u.type==="rule"&&(u.value="".concat(i," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(i," ")),u.props=u.props.map(function(o){return"".concat(i," ").concat(o)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=e0(u.children,i)),u})}function ly(l){var i,u,o,c=Rl,f=c.options,h=f===void 0?Rl:f,m=c.plugins,A=m===void 0?Ou:m,g=function(B,k,L){return L.startsWith(u)&&L.endsWith(u)&&L.replaceAll(u,"").length>0?".".concat(i):B},y=A.slice();y.push(function(B){B.type===Su&&B.value.includes("&")&&(B.props[0]=B.props[0].replace(ay,u).replace(o,g))}),h.prefix&&y.push(Db),y.push(Cb);var v=function(B,k,L,P){k===void 0&&(k=""),L===void 0&&(L=""),P===void 0&&(P="&"),i=P,u=k,o=new RegExp("\\".concat(u,"\\b"),"g");var Z=B.replace(ny,""),J=Tb(L||k?"".concat(L," ").concat(k," { ").concat(Z," }"):Z);h.namespace&&(J=e0(J,h.namespace));var H=[];return pu(J,Ob(y.concat(Rb(function(G){return H.push(G)})))),H};return v.hash=A.length?A.reduce(function(B,k){return k.name||Bn(15),El(B,k.name)},qg).toString():"",v}var iy=new Au,fc=ly(),t0=M.createContext({shouldForwardProp:void 0,styleSheet:iy,stylis:fc});t0.Consumer;M.createContext(void 0);function dc(){return R.useContext(t0)}var ry=(function(){function l(i,u){var o=this;this.inject=function(c,f){f===void 0&&(f=fc);var h=o.name+f.hash;c.hasNameForId(o.id,h)||c.insertRules(o.id,h,f(o.rules,h,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=u,Dc(this,function(){throw Bn(12,String(o.name))})}return l.prototype.getName=function(i){return i===void 0&&(i=fc),this.name+i.hash},l})(),uy=function(l){return l>="A"&&l<="Z"};function Fp(l){for(var i="",u=0;u<l.length;u++){var o=l[u];if(u===1&&o==="-"&&l[0]==="-")return l;uy(o)?i+="-"+o.toLowerCase():i+=o}return i.startsWith("ms-")?"-"+i:i}var a0=function(l){return l==null||l===!1||l===""},n0=function(l){var i,u,o=[];for(var c in l){var f=l[c];l.hasOwnProperty(c)&&!a0(f)&&(Array.isArray(f)&&f.isCss||Dn(f)?o.push("".concat(Fp(c),":"),f,";"):Ui(f)?o.push.apply(o,Qi(Qi(["".concat(c," {")],n0(f),!1),["}"],!1)):o.push("".concat(Fp(c),": ").concat((i=c,(u=f)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||i in Bb||i.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return o};function en(l,i,u,o){if(a0(l))return[];if(Rc(l))return[".".concat(l.styledComponentId)];if(Dn(l)){if(!Dn(f=l)||f.prototype&&f.prototype.isReactComponent||!i)return[l];var c=l(i);return en(c,i,u,o)}var f;return l instanceof ry?u?(l.inject(u,o),[l.getName(o)]):[l]:Ui(l)?n0(l):Array.isArray(l)?Array.prototype.concat.apply(Ou,l.map(function(h){return en(h,i,u,o)})):[l.toString()]}function l0(l){for(var i=0;i<l.length;i+=1){var u=l[i];if(Dn(u)&&!Rc(u))return!1}return!0}var oy=Zg(Cu),sy=(function(){function l(i,u,o){this.rules=i,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&l0(i),this.componentId=u,this.baseHash=El(oy,u),this.baseStyle=o,Au.registerId(u)}return l.prototype.generateAndInjectStyles=function(i,u,o){var c=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,u,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))c=wn(c,this.staticRulesId);else{var f=sc(en(this.rules,i,u,o)),h=oc(El(this.baseHash,f)>>>0);if(!u.hasNameForId(this.componentId,h)){var m=o(f,".".concat(h),void 0,this.componentId);u.insertRules(this.componentId,h,m)}c=wn(c,h),this.staticRulesId=h}else{for(var A=El(this.baseHash,o.hash),g="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")g+=v;else if(v){var B=sc(en(v,i,u,o));A=El(A,B+y),g+=B}}if(g){var k=oc(A>>>0);u.hasNameForId(this.componentId,k)||u.insertRules(this.componentId,k,o(g,".".concat(k),void 0,this.componentId)),c=wn(c,k)}}return c},l})(),ji=M.createContext(void 0);ji.Consumer;function cy(l){var i=M.useContext(ji),u=R.useMemo(function(){return(function(o,c){if(!o)throw Bn(14);if(Dn(o)){var f=o(c);return f}if(Array.isArray(o)||typeof o!="object")throw Bn(8);return c?ft(ft({},c),o):o})(l.theme,i)},[l.theme,i]);return l.children?M.createElement(ji.Provider,{value:u},l.children):null}var Ps={};function fy(l,i,u){var o=Rc(l),c=l,f=!Ws(l),h=i.attrs,m=h===void 0?Ou:h,A=i.componentId,g=A===void 0?(function(W,_){var I=typeof W!="string"?"sc":Xp(W);Ps[I]=(Ps[I]||0)+1;var ee="".concat(I,"-").concat(Kg(Cu+I+Ps[I]));return _?"".concat(_,"-").concat(ee):ee})(i.displayName,i.parentComponentId):A,y=i.displayName,v=y===void 0?(function(W){return Ws(W)?"styled.".concat(W):"Styled(".concat($b(W),")")})(l):y,B=i.displayName&&i.componentId?"".concat(Xp(i.displayName),"-").concat(i.componentId):i.componentId||g,k=o&&c.attrs?c.attrs.concat(m).filter(Boolean):m,L=i.shouldForwardProp;if(o&&c.shouldForwardProp){var P=c.shouldForwardProp;if(i.shouldForwardProp){var Z=i.shouldForwardProp;L=function(W,_){return P(W,_)&&Z(W,_)}}else L=P}var J=new sy(u,B,o?c.componentStyle:void 0);function H(W,_){return(function(I,ee,ye){var ve=I.attrs,De=I.componentStyle,Ne=I.defaultProps,pe=I.foldedComponentIds,Oe=I.styledComponentId,xe=I.target,me=M.useContext(ji),D=dc(),Y=I.shouldForwardProp||D.shouldForwardProp,F=Xg(ee,me,Ne)||Rl,ie=(function(ne,te,se){for(var he,V=ft(ft({},te),{className:void 0,theme:se}),de=0;de<ne.length;de+=1){var ge=Dn(he=ne[de])?he(V):he;for(var Ce in ge)V[Ce]=Ce==="className"?wn(V[Ce],ge[Ce]):Ce==="style"?ft(ft({},V[Ce]),ge[Ce]):ge[Ce]}return te.className&&(V.className=wn(V.className,te.className)),V})(ve,ee,F),x=ie.as||xe,N={};for(var X in ie)ie[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&ie.theme===F||(X==="forwardedAs"?N.as=ie.forwardedAs:Y&&!Y(X,x)||(N[X]=ie[X]));var Q=(function(ne,te){var se=dc(),he=ne.generateAndInjectStyles(te,se.styleSheet,se.stylis);return he})(De,ie),K=wn(pe,Oe);return Q&&(K+=" "+Q),ie.className&&(K+=" "+ie.className),N[Ws(x)&&!Vg.has(x)?"class":"className"]=K,ye&&(N.ref=ye),R.createElement(x,N)})(G,W,_)}H.displayName=v;var G=M.forwardRef(H);return G.attrs=k,G.componentStyle=J,G.displayName=v,G.shouldForwardProp=L,G.foldedComponentIds=o?wn(c.foldedComponentIds,c.styledComponentId):"",G.styledComponentId=B,G.target=o?c.target:l,Object.defineProperty(G,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(W){this._foldedDefaultProps=o?(function(_){for(var I=[],ee=1;ee<arguments.length;ee++)I[ee-1]=arguments[ee];for(var ye=0,ve=I;ye<ve.length;ye++)cc(_,ve[ye],!0);return _})({},c.defaultProps,W):W}}),Dc(G,function(){return".".concat(G.styledComponentId)}),f&&Wg(G,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),G}function Wp(l,i){for(var u=[l[0]],o=0,c=i.length;o<c;o+=1)u.push(i[o],l[o+1]);return u}var Pp=function(l){return Object.assign(l,{isCss:!0})};function ae(l){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];if(Dn(l)||Ui(l))return Pp(en(Wp(Ou,Qi([l],i,!0))));var o=l;return i.length===0&&o.length===1&&typeof o[0]=="string"?en(o):Pp(en(Wp(o,i)))}function hc(l,i,u){if(u===void 0&&(u=Rl),!i)throw Bn(1,i);var o=function(c){for(var f=[],h=1;h<arguments.length;h++)f[h-1]=arguments[h];return l(i,u,ae.apply(void 0,Qi([c],f,!1)))};return o.attrs=function(c){return hc(l,i,ft(ft({},u),{attrs:Array.prototype.concat(u.attrs,c).filter(Boolean)}))},o.withConfig=function(c){return hc(l,i,ft(ft({},u),c))},o}var i0=function(l){return hc(fy,l)},z=i0;Vg.forEach(function(l){z[l]=i0(l)});var dy=(function(){function l(i,u){this.rules=i,this.componentId=u,this.isStatic=l0(i),Au.registerId(this.componentId+1)}return l.prototype.createStyles=function(i,u,o,c){var f=c(sc(en(this.rules,u,o,c)),""),h=this.componentId+i;o.insertRules(h,h,f)},l.prototype.removeStyles=function(i,u){u.clearRules(this.componentId+i)},l.prototype.renderStyles=function(i,u,o,c){i>2&&Au.registerId(this.componentId+i),this.removeStyles(i,o),this.createStyles(i,u,o,c)},l})();function hy(l){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];var o=ae.apply(void 0,Qi([l],i,!1)),c="sc-global-".concat(Kg(JSON.stringify(o))),f=new dy(o,c),h=function(A){var g=dc(),y=M.useContext(ji),v=M.useRef(g.styleSheet.allocateGSInstance(c)).current;return g.styleSheet.server&&m(v,A,g.styleSheet,y,g.stylis),M.useLayoutEffect(function(){if(!g.styleSheet.server)return m(v,A,g.styleSheet,y,g.stylis),function(){return f.removeStyles(v,g.styleSheet)}},[v,A,g.styleSheet,y,g.stylis]),null};function m(A,g,y,v,B){if(f.isStatic)f.renderStyles(A,Mb,y,B);else{var k=ft(ft({},g),{theme:Xg(g,v,h.defaultProps)});f.renderStyles(A,k,y,B)}}return M.memo(h)}var py=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`;const Bc="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",zc="inset 2px 2px 3px rgba(0,0,0,0.2)",Wt=()=>ae`
  -webkit-text-fill-color: ${({theme:l})=>l.materialTextDisabled};
  color: ${({theme:l})=>l.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:l})=>l.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Pt=({background:l="material",color:i="materialText"}={})=>ae`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:u})=>u[l]};
  color: ${({theme:u})=>u[i]};
`,Gi=({mainColor:l="black",secondaryColor:i="transparent",pixelSize:u=2})=>ae`
  background-image: ${[`linear-gradient(
      45deg,
      ${l} 25%,
      transparent 25%,
      transparent 75%,
      ${l} 75%
    )`,`linear-gradient(
      45deg,
      ${l} 25%,
      transparent 25%,
      transparent 75%,
      ${l} 75%
    )`].join(",")};
  background-color: ${i};
  background-size: ${`${u*2}px ${u*2}px`};
  background-position: 0 0, ${`${u}px ${u}px`};
`,zn=()=>ae`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:l})=>l.materialText};
  background: ${({$disabled:l,theme:i})=>l?i.flatLight:i.canvas};
  border: 2px solid ${({theme:l})=>l.canvas};
  outline: 2px solid ${({theme:l})=>l.flatDark};
  outline-offset: -4px;
`,xl={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},gy=({theme:l,topLeftInner:i,bottomRightInner:u,hasShadow:o=!1,hasInsetShadow:c=!1})=>[o?Bc:!1,c?zc:!1,i!==null?`inset 1px 1px 0px 1px ${l[i]}`:!1,u!==null?`inset -1px -1px 0 1px ${l[u]}`:!1].filter(Boolean).join(", "),Ke=({invert:l=!1,style:i="button"}={})=>{const u={topLeftOuter:l?"bottomRightOuter":"topLeftOuter",topLeftInner:l?"bottomRightInner":"topLeftInner",bottomRightInner:l?"topLeftInner":"bottomRightInner",bottomRightOuter:l?"topLeftOuter":"bottomRightOuter"};return ae`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:o})=>o[xl[i][u.topLeftOuter]]};
    border-top-color: ${({theme:o})=>o[xl[i][u.topLeftOuter]]};
    border-right-color: ${({theme:o})=>o[xl[i][u.bottomRightOuter]]};
    border-bottom-color: ${({theme:o})=>o[xl[i][u.bottomRightOuter]]};
    box-shadow: ${({theme:o,shadow:c})=>gy({theme:o,topLeftInner:xl[i][u.topLeftInner],bottomRightInner:xl[i][u.bottomRightInner],hasShadow:c})};
  `},Dl=()=>ae`
  outline: 2px dotted ${({theme:l})=>l.materialText};
`,my=l=>Buffer.from(l).toString("base64"),Ay=typeof btoa<"u"?btoa:my,lu=(l,i=0)=>{const u=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${i} 13 13)">
      <polygon fill="${l}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${Ay(u)})`},Mc=(l="default")=>ae`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:i})=>Gi({mainColor:l==="flat"?i.flatLight:i.material,secondaryColor:l==="flat"?i.canvas:i.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Pt()}
    ${l==="flat"?zn():Ke({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:i})=>i.material};
  }
  ::-webkit-scrollbar-button {
    ${Pt()}
    ${l==="flat"?zn():Ke({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${l==="default"?Ke({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:i})=>lu(i.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:i})=>lu(i.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:i})=>lu(i.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:i})=>lu(i.materialText,0)};
  }
`,by=z.a`
  color: ${({theme:l})=>l.anchor};
  font-size: inherit;
  text-decoration: ${({underline:l})=>l?"underline":"none"};
  &:visited {
    color: ${({theme:l})=>l.anchorVisited};
  }
`,yy=R.forwardRef(({children:l,underline:i=!0,...u},o)=>M.createElement(by,{ref:o,underline:i,...u},l));yy.displayName="Anchor";const vy=z.header`
  ${Ke()};
  ${Pt()};

  position: ${l=>{var i;return(i=l.position)!==null&&i!==void 0?i:l.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,xy=R.forwardRef(({children:l,fixed:i=!0,position:u="fixed",...o},c)=>M.createElement(vy,{fixed:i,position:i!==!1?u:void 0,ref:c,...o},l));xy.displayName="AppBar";const Nn=()=>{};function Cn(l,i,u){return u!==null&&l>u?u:i!==null&&l<i?i:l}function Sy(l){if(Math.abs(l)<1){const u=l.toExponential().split("e-"),o=u[0].split(".")[1];return(o?o.length:0)+parseInt(u[1],10)}const i=l.toString().split(".")[1];return i?i.length:0}function eg(l,i,u){const o=Math.round((l-u)/i)*i+u;return Number(o.toFixed(Sy(i)))}function tn(l){return typeof l=="number"?`${l}px`:l}const Ey=z.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:l})=>`
    height: ${l};
    width: ${l};
    `}
  border-radius: ${({square:l})=>l?0:"50%"};
  overflow: hidden;
  ${({noBorder:l,theme:i})=>!l&&`
    border-top: 2px solid ${i.borderDark};
    border-left: 2px solid ${i.borderDark};
    border-bottom: 2px solid ${i.borderLightest};
    border-right: 2px solid ${i.borderLightest};
    background: ${i.material};
  `}
  ${({src:l})=>!l&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Ty=z.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,wy=R.forwardRef(({alt:l="",children:i,noBorder:u=!1,size:o=35,square:c=!1,src:f,...h},m)=>M.createElement(Ey,{noBorder:u,ref:m,size:tn(o),square:c,src:f,...h},f?M.createElement(Ty,{src:f,alt:l}):i));wy.displayName="Avatar";const gt={sm:"28px",md:"36px",lg:"44px"},Cy=ae`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:l="md"})=>gt[l]};
  width: ${({fullWidth:l,size:i="md",square:u})=>l?"100%":u?gt[i]:"auto"};
  padding: ${({square:l})=>l?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:l})=>!l&&"2px"};
  }
  padding-top: ${({active:l,disabled:i})=>l&&!i&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,Ru=z.button`
  ${({active:l,disabled:i,primary:u,theme:o,variant:c})=>c==="flat"?ae`
          ${zn()}
          ${u?`
          border: 2px solid ${o.checkmark};
            outline: 2px solid ${o.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${o.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!l&&!i&&Dl}
            outline-offset: -4px;
          }
        `:c==="menu"||c==="thin"?ae`
          ${Pt()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!i&&!l&&Ke({style:"buttonThin"})}
          }
          &:active {
            ${!i&&Ke({style:"buttonThinPressed"})}
          }
          ${l&&Ke({style:"buttonThinPressed"})}
          ${i&&Wt()}
        `:ae`
          ${Pt()};
          border: none;
          ${i&&Wt()}
          ${l?Gi({mainColor:o.material,secondaryColor:o.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${u?ae`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${o.borderDarkest};
                `:ae`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Ke(l?{style:c==="raised"?"window":"button",invert:!0}:{style:c==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!i&&Ke({style:c==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!l&&!i&&Dl}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${l?"0":"1px"};
          }
        `}
  ${Cy}
`,Mn=R.forwardRef(({onClick:l,disabled:i=!1,children:u,type:o="button",fullWidth:c=!1,size:f="md",square:h=!1,active:m=!1,onTouchStart:A=Nn,primary:g=!1,variant:y="default",...v},B)=>M.createElement(Ru,{active:m,disabled:i,$disabled:i,fullWidth:c,onClick:i?void 0:l,onTouchStart:A,primary:g,ref:B,size:f,square:h,type:o,variant:y,...v},u));Mn.displayName="Button";function an({defaultValue:l,onChange:i,onChangePropName:u="onChange",readOnly:o,value:c,valuePropName:f="value"}){const h=c!==void 0,[m,A]=R.useState(l),g=R.useCallback(y=>{h||A(y)},[h]);if(h&&typeof i!="function"&&!o){const y=`Warning: You provided a \`${f}\` prop to a component without an \`${u}\` handler.${f==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${u}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${u}\` function that updates \`${f}\`.`}`;console.warn(y)}return[h?c:m,g]}const pc=z.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${l=>gt[l.size]};
  width: ${l=>l.square?gt[l.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${l=>l.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${l=>gt[l.size]};
  color: ${({theme:l})=>l.materialText};
  pointer-events: ${({$disabled:l})=>l?"none":"auto"};
  font-weight: ${({primary:l})=>l?"bold":"normal"};
  &:hover {
    ${({theme:l,$disabled:i})=>!i&&`
        color: ${l.materialTextInvert};
        background: ${l.hoverBackground};
      `}

    cursor: default;
  }
  ${l=>l.$disabled&&Wt()}
`,Oy=R.forwardRef(({size:l="lg",disabled:i,square:u,children:o,onClick:c,primary:f,...h},m)=>M.createElement(pc,{$disabled:i,size:l,square:u,onClick:i?void 0:c,primary:f,role:"menuitem",ref:m,"aria-disabled":i,...h},o));Oy.displayName="MenuListItem";const Ry=z.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${l=>l.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Ke({style:"window"})}
  ${Pt()}
  ${l=>l.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;Ry.displayName="MenuList";const ua=20,bu=z.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${ua}px;
  height: ${ua}px;
  opacity: 0;
  z-index: -1;
`,Nc=z.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:l})=>l?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:l})=>l.materialText};
  ${l=>l.$disabled&&Wt()}

  ${pc} & {
    margin: 0;
    height: 100%;
  }
  ${pc}:hover & {
    ${({$disabled:l,theme:i})=>!l&&ae`
        color: ${i.materialTextInvert};
      `};
  }
`,kc=z.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${bu}:focus ~ & {
    ${Dl}
  }
  ${bu}:not(:disabled) ~ &:active {
    ${Dl}
  }
`,oa=z.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:l})=>l.borderDark};
  border-top-color: ${({theme:l})=>l.borderDark};
  border-right-color: ${({theme:l})=>l.borderLightest};
  border-bottom-color: ${({theme:l})=>l.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:l})=>l.borderDarkest};
    border-top-color: ${({theme:l})=>l.borderDarkest};
    border-right-color: ${({theme:l})=>l.borderLight};
    border-bottom-color: ${({theme:l})=>l.borderLight};

    pointer-events: none;
    ${l=>l.shadow&&`box-shadow:${zc};`}
  }
`,Dy=z.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Mc()}
`,Lc=R.forwardRef(({children:l,shadow:i=!0,...u},o)=>M.createElement(oa,{ref:o,shadow:i,...u},M.createElement(Dy,null,l)));Lc.displayName="ScrollView";const r0=ae`
  width: ${ua}px;
  height: ${ua}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,By=z(oa)`
  ${r0}
  width: ${ua}px;
  height: ${ua}px;
  background: ${({$disabled:l,theme:i})=>l?i.material:i.canvas};
  &:before {
    box-shadow: none;
  }
`,zy=z.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:l,theme:i})=>l?i.flatLight:i.canvas};
  ${r0}
  width: ${ua-4}px;
  height: ${ua-4}px;
  outline: none;
  border: 2px solid ${({theme:l})=>l.flatDark};
  background: ${({$disabled:l,theme:i})=>l?i.flatLight:i.canvas};
`,My=z.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:l,theme:i})=>l?i.checkmarkDisabled:i.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${l=>l.$disabled?l.theme.checkmarkDisabled:l.theme.checkmark};
  }
`,Ny=z.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:l,theme:i})=>Gi({mainColor:l?i.checkmarkDisabled:i.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,ky={flat:zy,default:By},Ly=R.forwardRef(({checked:l,className:i="",defaultChecked:u=!1,disabled:o=!1,indeterminate:c=!1,label:f="",onChange:h=Nn,style:m={},value:A,variant:g="default",...y},v)=>{var B;const[k,L]=an({defaultValue:u,onChange:h,readOnly:(B=y.readOnly)!==null&&B!==void 0?B:o,value:l}),P=R.useCallback(H=>{const G=H.target.checked;L(G),h(H)},[h,L]),Z=ky[g];let J=null;return c?J=Ny:k&&(J=My),M.createElement(Nc,{$disabled:o,className:i,style:m},M.createElement(bu,{disabled:o,onChange:o?void 0:P,readOnly:o,type:"checkbox",value:A,checked:k,"data-indeterminate":c,ref:v,...y}),M.createElement(Z,{$disabled:o,role:"presentation"},J&&M.createElement(J,{$disabled:o,variant:g})),f&&M.createElement(kc,null,f))});Ly.displayName="Checkbox";const u0=z.div`
  ${({orientation:l,theme:i,size:u="100%"})=>l==="vertical"?`
    height: ${tn(u)};
    border-left: 2px solid ${i.borderDark};
    border-right: 2px solid ${i.borderLightest};
    margin: 0;
    `:`
    width: ${tn(u)};
    border-bottom: 2px solid ${i.borderLightest};
    border-top: 2px solid ${i.borderDark};
    margin: 0;
    `}
`;u0.displayName="Separator";const $y=z(Ru)`
  padding-left: 8px;
`,Qy=z(u0)`
  height: 21px;
  position: relative;
  top: 0;
`,o0=z.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,Uy=z.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:l})=>l};

  ${({$disabled:l})=>l?ae`
          border: 2px solid ${({theme:i})=>i.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:i})=>i.materialTextDisabledShadow}
          );
        `:ae`
          border: 2px solid ${({theme:i})=>i.materialText};
        `}
  ${o0}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Dl}
    outline-offset: -8px;
  }
`,jy=z.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:l})=>l?ae`
          border-top: 6px solid ${({theme:i})=>i.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:i})=>i.materialTextDisabledShadow}
          );
        `:ae`
          border-top: 6px solid ${({theme:i})=>i.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:l})=>l==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,Hy=R.forwardRef(({value:l,defaultValue:i,onChange:u=Nn,disabled:o=!1,variant:c="default",...f},h)=>{var m;const[A,g]=an({defaultValue:i,onChange:u,readOnly:(m=f.readOnly)!==null&&m!==void 0?m:o,value:l}),y=v=>{const B=v.target.value;g(B),u(v)};return M.createElement($y,{disabled:o,as:"div",variant:c,size:"md"},M.createElement(o0,{onChange:y,readOnly:o,disabled:o,value:A??"#008080",type:"color",ref:h,...f}),M.createElement(Uy,{$disabled:o,color:A??"#008080",role:"presentation"}),c==="default"&&M.createElement(Qy,{orientation:"vertical"}),M.createElement(jy,{$disabled:o,variant:c}))});Hy.displayName="ColorInput";const _y=z.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:l})=>ae`
    width: ${11*l}px;
    height: ${21*l}px;
    margin: ${l}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${Gi({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:l})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${l}px;
      border-left: ${l}px solid var(--react95-digit-bg-color);
      border-right: ${l}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${l}px;
      border-left: ${l}px solid var(--react95-digit-primary-color);
      border-right: ${l}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${l}px;
      width: ${9*l}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${l}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${l*2}px);
      top: ${2*l}px;
      left: ${l}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${l}px;
      border-left: ${l}px solid var(--react95-digit-bg-color);
      border-right: ${l}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${l}px solid var(--react95-digit-primary-color);
      border-right: ${l}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${l}px;
      width: ${9*l}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${l}px;
    }
    span.center:after {
      bottom: ${l}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${l}px;
      border-top: ${l}px solid var(--react95-digit-bg-color);
      border-bottom: ${l}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*l}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${l}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${l*2}px);
      top: ${l}px;
      left: ${l*2}px;
    }
  `}
`,tg=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Gy=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Yy({digit:l=0,pixelSize:i=2,...u}){const o=Gy[Number(l)].map((c,f)=>c?`${tg[f]} active`:tg[f]);return M.createElement(_y,{pixelSize:i,...u},o.map((c,f)=>M.createElement("span",{className:c,key:f})))}const Xy=z.div`
  ${Ke({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Vy={sm:1,md:2,lg:3,xl:4},qy=R.forwardRef(({value:l=0,minLength:i=3,size:u="md",...o},c)=>{const f=R.useMemo(()=>l.toString().padStart(i,"0").split(""),[i,l]);return M.createElement(Xy,{ref:c,...o},f.map((h,m)=>M.createElement(Yy,{digit:h,pixelSize:Vy[u],key:m})))});qy.displayName="Counter";const s0=ae`
  display: flex;
  align-items: center;
  width: ${({fullWidth:l})=>l?"100%":"auto"};
  min-height: ${gt.md};
`,Zy=z(oa).attrs({"data-testid":"variant-default"})`
  ${s0}
  background: ${({$disabled:l,theme:i})=>l?i.material:i.canvas};
`,Ky=z.div.attrs({"data-testid":"variant-flat"})`
  ${zn()}
  ${s0}
  position: relative;
`,c0=ae`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:l})=>l.canvasText};
  ${({disabled:l,variant:i})=>i!=="flat"&&l&&Wt()}
`,Iy=z.input`
  ${c0}
  padding: 0 8px;
`,Jy=z.textarea`
  ${c0}
  padding: 8px;
  resize: none;
  ${({variant:l})=>Mc(l)}
`,f0=R.forwardRef(({className:l,disabled:i=!1,fullWidth:u,onChange:o=Nn,shadow:c=!0,style:f,variant:h="default",...m},A)=>{const g=h==="flat"?Ky:Zy,y=R.useMemo(()=>{var v;return m.multiline?M.createElement(Jy,{disabled:i,onChange:i?void 0:o,readOnly:i,ref:A,variant:h,...m}):M.createElement(Iy,{disabled:i,onChange:i?void 0:o,readOnly:i,ref:A,type:(v=m.type)!==null&&v!==void 0?v:"text",variant:h,...m})},[i,o,m,A,h]);return M.createElement(g,{className:l,fullWidth:u,$disabled:i,shadow:c,style:f},y)});f0.displayName="TextInput";const Fy=z.div`
  display: inline-flex;
  align-items: center;
`,gc=z(Mn)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:l})=>l==="flat"?ae`
          height: calc(50% - 1px);
        `:ae`
          height: 50%;
        `}
`,Wy=z.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:l})=>l==="flat"?ae`
          height: calc(${gt.md} - 4px);
        `:ae`
          height: ${gt.md};
          margin-left: 2px;
        `}
`,ag=z.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:l})=>l?ae`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:i})=>i.materialText};
        `:ae`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:i})=>i.materialText};
        `}
  ${gc}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:l})=>l.materialTextDisabledShadow}
    );
    ${({invert:l})=>l?ae`
            border-bottom-color: ${({theme:i})=>i.materialTextDisabled};
          `:ae`
            border-top-color: ${({theme:i})=>i.materialTextDisabled};
          `}
  }
`,d0=R.forwardRef(({className:l,defaultValue:i,disabled:u=!1,max:o,min:c,onChange:f,readOnly:h,step:m=1,style:A,value:g,variant:y="default",width:v,...B},k)=>{const[L,P]=an({defaultValue:i,onChange:f,readOnly:h,value:g}),Z=R.useCallback(I=>{const ee=parseFloat(I.target.value);P(ee)},[P]),J=R.useCallback(I=>{const ee=Cn(parseFloat(((L??0)+I).toFixed(2)),c??null,o??null);P(ee),f?.(ee)},[o,c,f,P,L]),H=R.useCallback(()=>{L!==void 0&&f?.(L)},[f,L]),G=R.useCallback(()=>{J(m)},[J,m]),W=R.useCallback(()=>{J(-m)},[J,m]),_=y==="flat"?"flat":"raised";return M.createElement(Fy,{className:l,style:{...A,width:v!==void 0?tn(v):"auto"},...B},M.createElement(f0,{value:L,variant:y,onChange:Z,disabled:u,type:"number",readOnly:h,ref:k,fullWidth:!0,onBlur:H}),M.createElement(Wy,{variant:y},M.createElement(gc,{"data-testid":"increment",variant:_,disabled:u||h,onClick:G},M.createElement(ag,{invert:!0})),M.createElement(gc,{"data-testid":"decrement",variant:_,disabled:u||h,onClick:W},M.createElement(ag,null))))});d0.displayName="NumberInput";function Py(){const l="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let i="";for(let u=0;u<10;u+=1)i+=l[Math.floor(Math.random()*l.length)];return i}const h0=l=>R.useMemo(()=>Py(),[l]),p0=ae`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,g0=ae`
  background: ${({theme:l})=>l.hoverBackground};
  color: ${({theme:l})=>l.canvasTextInvert};
`,$c=z.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,ev=z.div`
  ${p0}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${$c}:focus & {
    ${g0}
    border: 2px dotted ${({theme:l})=>l.focusSecondary};
  }
`,m0=ae`
  height: ${gt.md};
  display: inline-block;
  color: ${({$disabled:l=!1,theme:i})=>l?Wt():i.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:l})=>l?"default":"pointer"};
`,tv=z(oa)`
  ${m0}
  background: ${({$disabled:l=!1,theme:i})=>l?i.material:i.canvas};
  &:focus {
    outline: 0;
  }
`,av=z.div`
  ${zn()}
  ${m0}
  background: ${({$disabled:l=!1,theme:i})=>l?i.flatLight:i.canvas};
`,nv=z.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${p0}
  cursor: pointer;
  &:disabled {
    ${Wt()};
    background: ${({theme:l})=>l.material};
    cursor: default;
  }
`,A0=z(Ru).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:l="default"})=>l==="flat"?ae`
          height: 100%;
          margin-right: 0;
        `:ae`
          height: 100%;
        `}
  ${({native:l=!1,variant:i="default"})=>l&&(i==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:l=!1,native:i=!1})=>l||i?"none":"auto"}
`,lv=z.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:l=!1,theme:i})=>l?i.materialTextDisabled:i.materialText};
  ${({$disabled:l=!1,theme:i})=>l&&`
    filter: drop-shadow(1px 1px 0px ${i.materialTextDisabledShadow});
    border-top-color: ${i.materialTextDisabled};
    `}
  ${A0}:active & {
    margin-top: 2px;
  }
`,iv=z.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:l})=>l.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${Bc};
  ${({variant:l="default"})=>l==="flat"?ae`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:i})=>i.flatDark};
        `:ae`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:i})=>i.borderDarkest};
        `}
  ${({variant:l="default"})=>Mc(l)}
`,rv=z.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${gt.md} - 4px);
  line-height: calc(${gt.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:l})=>l.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:l})=>l?g0:""}
  user-select: none;
`,uv=[],b0=({className:l,defaultValue:i,disabled:u,native:o,onChange:c,options:f=uv,readOnly:h,style:m,value:A,variant:g,width:y})=>{var v;const B=R.useMemo(()=>f.filter(Boolean),[f]),[k,L]=an({defaultValue:i??((v=B?.[0])===null||v===void 0?void 0:v.value),onChange:c,readOnly:h,value:A}),P=!(u||h),Z=R.useMemo(()=>({className:l,style:{...m,width:y}}),[l,m,y]),J=R.useMemo(()=>M.createElement(A0,{as:"div","data-testid":"select-button",$disabled:u,native:o,tabIndex:-1,variant:g==="flat"?"flat":"raised"},M.createElement(lv,{"data-testid":"select-icon",$disabled:u})),[u,o,g]),H=R.useMemo(()=>g==="flat"?av:tv,[g]);return R.useMemo(()=>({isEnabled:P,options:B,value:k,setValue:L,wrapperProps:Z,DropdownButton:J,Wrapper:H}),[J,H,P,B,L,k,Z])},ov={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},sv=1e3,cv=({onBlur:l,onChange:i,onClose:u,onFocus:o,onKeyDown:c,onMouseDown:f,onOpen:h,open:m,options:A,readOnly:g,value:y,selectRef:v,setValue:B,wrapperRef:k})=>{const L=R.useRef(null),P=R.useRef([]),Z=R.useRef(0),J=R.useRef(0),H=R.useRef(),G=R.useRef("search"),W=R.useRef(""),_=R.useRef(),[I,ee]=an({defaultValue:!1,onChange:h,onChangePropName:"onOpen",readOnly:g,value:m,valuePropName:"open"}),ye=R.useMemo(()=>{const V=A.findIndex(de=>de.value===y);return Z.current=Cn(V,0,null),A[V]},[A,y]),[ve,De]=R.useState(A[0]),Ne=R.useCallback(V=>{const de=L.current,ge=P.current[V];if(!ge||!de){H.current=V;return}H.current=void 0;const Ce=de.clientHeight,$e=de.scrollTop,Ie=de.scrollTop+Ce,Je=ge.offsetTop,vt=ge.offsetHeight,Pe=ge.offsetTop+ge.offsetHeight;Je<$e&&de.scrollTo(0,Je),Pe>Ie&&de.scrollTo(0,Je-Ce+vt),ge.focus({preventScroll:!0})},[L]),pe=R.useCallback((V,{scroll:de}={})=>{var ge;const Ce=A.length-1;let $e;switch(V){case"first":{$e=0;break}case"last":{$e=Ce;break}case"next":{$e=Cn(J.current+1,0,Ce);break}case"previous":{$e=Cn(J.current-1,0,Ce);break}case"selected":{$e=Cn((ge=Z.current)!==null&&ge!==void 0?ge:0,0,Ce);break}default:$e=V}J.current=$e,De(A[$e]),de&&Ne($e)},[J,A,Ne]),Oe=R.useCallback(({fromEvent:V})=>{ee(!0),pe("selected",{scroll:!0}),h?.({fromEvent:V})},[pe,h,ee]),xe=R.useCallback(()=>{G.current="search",W.current="",clearTimeout(_.current)},[]),me=R.useCallback(({focusSelect:V,fromEvent:de})=>{var ge;u?.({fromEvent:de}),ee(!1),De(A[0]),xe(),H.current=void 0,V&&((ge=v.current)===null||ge===void 0||ge.focus())},[xe,u,A,v,ee]),D=R.useCallback(({fromEvent:V})=>{I?me({focusSelect:!1,fromEvent:V}):Oe({fromEvent:V})},[me,Oe,I]),Y=R.useCallback((V,{fromEvent:de})=>{Z.current!==V&&(Z.current=V,B(A[V].value),i?.(A[V],{fromEvent:de}))},[i,A,B]),F=R.useCallback(({focusSelect:V,fromEvent:de})=>{Y(J.current,{fromEvent:de}),me({focusSelect:V,fromEvent:de})},[me,Y]),ie=R.useCallback((V,{fromEvent:de,select:ge})=>{var Ce;switch(G.current==="cycleFirstLetter"&&V!==W.current&&(G.current="search"),V===W.current?G.current="cycleFirstLetter":W.current+=V,G.current){case"search":{let $e=A.findIndex(Ie=>{var Je;return((Je=Ie.label)===null||Je===void 0?void 0:Je.toLocaleUpperCase().indexOf(W.current))===0});$e<0&&($e=A.findIndex(Ie=>{var Je;return((Je=Ie.label)===null||Je===void 0?void 0:Je.toLocaleUpperCase().indexOf(V))===0}),W.current=V),$e>=0&&(ge?Y($e,{fromEvent:de}):pe($e,{scroll:!0}));break}case"cycleFirstLetter":{const $e=ge?(Ce=Z.current)!==null&&Ce!==void 0?Ce:-1:J.current;let Ie=A.findIndex((Je,vt)=>{var Pe;return vt>$e&&((Pe=Je.label)===null||Pe===void 0?void 0:Pe.toLocaleUpperCase().indexOf(V))===0});Ie<0&&(Ie=A.findIndex(Je=>{var vt;return((vt=Je.label)===null||vt===void 0?void 0:vt.toLocaleUpperCase().indexOf(V))===0})),Ie>=0&&(ge?Y(Ie,{fromEvent:de}):pe(Ie,{scroll:!0}));break}}clearTimeout(_.current),_.current=setTimeout(()=>{G.current==="search"&&(W.current="")},sv)},[pe,A,Y]),x=R.useCallback(V=>{var de;V.button===0&&(V.preventDefault(),(de=v.current)===null||de===void 0||de.focus(),D({fromEvent:V}),f?.(V))},[f,v,D]),N=R.useCallback(V=>{F({focusSelect:!0,fromEvent:V})},[F]),X=R.useCallback(V=>{const{altKey:de,code:ge,ctrlKey:Ce,metaKey:$e,shiftKey:Ie}=V,{ARROW_DOWN:Je,ARROW_UP:vt,END:Pe,ENTER:sa,ESC:qt,HOME:kn,SPACE:Ra,TAB:nn}=ov,Ml=de||Ce||$e||Ie;if(!(ge===nn&&(de||Ce||$e)||ge!==nn&&Ml))switch(ge){case Je:{if(V.preventDefault(),!I){Oe({fromEvent:V});return}pe("next",{scroll:!0});break}case vt:{if(V.preventDefault(),!I){Oe({fromEvent:V});return}pe("previous",{scroll:!0});break}case Pe:{if(V.preventDefault(),!I){Oe({fromEvent:V});return}pe("last",{scroll:!0});break}case sa:{if(!I)return;V.preventDefault(),F({focusSelect:!0,fromEvent:V});break}case qt:{if(!I)return;V.preventDefault(),me({focusSelect:!0,fromEvent:V});break}case kn:{if(V.preventDefault(),!I){Oe({fromEvent:V});return}pe("first",{scroll:!0});break}case Ra:{V.preventDefault(),I?F({focusSelect:!0,fromEvent:V}):Oe({fromEvent:V});break}case nn:{if(!I)return;Ie||V.preventDefault(),F({focusSelect:!Ie,fromEvent:V});break}default:!Ml&&ge.match(/^Key/)&&(V.preventDefault(),V.stopPropagation(),ie(ge.replace(/^Key/,""),{select:!I,fromEvent:V}))}},[pe,me,I,Oe,ie,F]),Q=R.useCallback(V=>{X(V),c?.(V)},[X,c]),K=R.useCallback(V=>{pe(V)},[pe]),ne=R.useCallback(V=>{I||(xe(),l?.(V))},[xe,l,I]),te=R.useCallback(V=>{xe(),o?.(V)},[xe,o]),se=R.useCallback(V=>{L.current=V,H.current!==void 0&&Ne(H.current)},[Ne]),he=R.useCallback((V,de)=>{P.current[de]=V,H.current===de&&Ne(H.current)},[Ne]);return R.useEffect(()=>{if(!I)return()=>{};const V=de=>{var ge;const Ce=de.target;!((ge=k.current)===null||ge===void 0)&&ge.contains(Ce)||(de.preventDefault(),me({focusSelect:!1,fromEvent:de}))};return document.addEventListener("mousedown",V),()=>{document.removeEventListener("mousedown",V)}},[me,I,k]),R.useMemo(()=>({activeOption:ve,handleActivateOptionIndex:K,handleBlur:ne,handleButtonKeyDown:Q,handleDropdownKeyDown:X,handleFocus:te,handleMouseDown:x,handleOptionClick:N,handleSetDropdownRef:se,handleSetOptionRef:he,open:I,selectedOption:ye}),[ve,K,ne,Q,te,X,x,N,se,he,I,ye])},fv=R.forwardRef(({className:l,defaultValue:i,disabled:u,onChange:o,options:c,readOnly:f,style:h,value:m,variant:A,width:g,...y},v)=>{const{isEnabled:B,options:k,setValue:L,value:P,DropdownButton:Z,Wrapper:J}=b0({defaultValue:i,disabled:u,native:!0,onChange:o,options:c,readOnly:f,value:m,variant:A}),H=R.useCallback(G=>{const W=k.find(_=>_.value===G.target.value);W&&(L(W.value),o?.(W,{fromEvent:G}))},[o,k,L]);return M.createElement(J,{className:l,style:{...h,width:g}},M.createElement($c,null,M.createElement(nv,{...y,disabled:u,onChange:B?H:Nn,ref:v,value:P},k.map((G,W)=>{var _;return M.createElement("option",{key:`${G.value}-${W}`,value:G.value},(_=G.label)!==null&&_!==void 0?_:G.value)})),Z))});fv.displayName="SelectNative";function dv({activateOptionIndex:l,active:i,index:u,onClick:o,option:c,selected:f,setRef:h}){const m=R.useCallback(()=>{l(u)},[l,u]),A=R.useCallback(y=>{h(y,u)},[u,h]),g=h0();return M.createElement(rv,{active:i,"aria-selected":f?"true":void 0,"data-value":c.value,id:g,onClick:o,onMouseEnter:m,ref:A,role:"option",tabIndex:0},c.label)}function hv({"aria-label":l,"aria-labelledby":i,className:u,defaultValue:o,disabled:c=!1,formatDisplay:f,inputProps:h,labelId:m,menuMaxHeight:A,name:g,onBlur:y,onChange:v,onClose:B,onFocus:k,onKeyDown:L,onMouseDown:P,onOpen:Z,open:J,options:H,readOnly:G,shadow:W=!0,style:_,variant:I="default",value:ee,width:ye="auto",...ve},De){const{isEnabled:Ne,options:pe,setValue:Oe,value:xe,wrapperProps:me,DropdownButton:D,Wrapper:Y}=b0({className:u,defaultValue:o,disabled:c,native:!1,onChange:v,options:H,style:_,readOnly:G,value:ee,variant:I,width:ye}),F=R.useRef(null),ie=R.useRef(null),x=R.useRef(null),{activeOption:N,handleActivateOptionIndex:X,handleBlur:Q,handleButtonKeyDown:K,handleDropdownKeyDown:ne,handleFocus:te,handleMouseDown:se,handleOptionClick:he,handleSetDropdownRef:V,handleSetOptionRef:de,open:ge,selectedOption:Ce}=cv({onBlur:y,onChange:v,onClose:B,onFocus:k,onKeyDown:L,onMouseDown:P,onOpen:Z,open:J,options:pe,value:xe,selectRef:ie,setValue:Oe,wrapperRef:x});R.useImperativeHandle(De,()=>({focus:sa=>{var qt;(qt=ie.current)===null||qt===void 0||qt.focus(sa)},node:F.current,value:String(xe)}),[xe]);const $e=R.useMemo(()=>Ce?typeof f=="function"?f(Ce):Ce.label:"",[f,Ce]),Ie=Ne?1:void 0,Je=R.useMemo(()=>A?{overflow:"auto",maxHeight:A}:void 0,[A]),vt=h0(),Pe=R.useMemo(()=>pe.map((sa,qt)=>{const kn=`${xe}-${qt}`,Ra=sa===N,nn=sa===Ce;return M.createElement(dv,{activateOptionIndex:X,active:Ra,index:qt,key:kn,onClick:he,option:sa,selected:nn,setRef:de})}),[N,X,he,de,pe,Ce,xe]);return M.createElement(Y,{...me,$disabled:c,ref:x,shadow:W,style:{..._,width:ye}},M.createElement("input",{name:g,ref:F,type:"hidden",value:String(xe),...h}),M.createElement($c,{"aria-disabled":c,"aria-expanded":ge,"aria-haspopup":"listbox","aria-label":l,"aria-labelledby":i??m,"aria-owns":Ne&&ge?vt:void 0,onBlur:Q,onFocus:te,onKeyDown:K,onMouseDown:Ne?se:P,ref:ie,role:"button",tabIndex:Ie,...ve},M.createElement(ev,null,$e),D),Ne&&ge&&M.createElement(iv,{id:vt,onKeyDown:ne,ref:V,role:"listbox",style:Je,tabIndex:0,variant:I},Pe))}const y0=R.forwardRef(hv);y0.displayName="Select";const pv=z.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${l=>l.noPadding?"0":"4px"};
`,mc=R.forwardRef(function({children:i,noPadding:u=!1,...o},c){return M.createElement(pv,{noPadding:u,ref:c,...o},i)});mc.displayName="Toolbar";const gv=z.div`
  padding: 16px;
`,Qc=R.forwardRef(function({children:i,...u},o){return M.createElement(gv,{ref:o,...u},i)});Qc.displayName="WindowContent";const mv=z.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:l})=>l.material};
  ${({active:l})=>l===!1?ae`
          background: ${({theme:i})=>i.headerNotActiveBackground};
          color: ${({theme:i})=>i.headerNotActiveText};
        `:ae`
          background: ${({theme:i})=>i.headerBackground};
          color: ${({theme:i})=>i.headerText};
        `}

  ${Ru} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,Uc=R.forwardRef(function({active:i=!0,children:u,...o},c){return M.createElement(mv,{active:i,ref:c,...o},u)});Uc.displayName="WindowHeader";const Av=z.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Ke({style:"window"})}
  ${Pt()}
`,bv=z.span`
  ${({theme:l})=>ae`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${l.borderLightest} 16.67%,
      ${l.material} 16.67%,
      ${l.material} 33.33%,
      ${l.borderDark} 33.33%,
      ${l.borderDark} 50%,
      ${l.borderLightest} 50%,
      ${l.borderLightest} 66.67%,
      ${l.material} 66.67%,
      ${l.material} 83.33%,
      ${l.borderDark} 83.33%,
      ${l.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,jc=R.forwardRef(({children:l,resizable:i=!1,resizeRef:u,shadow:o=!0,...c},f)=>M.createElement(Av,{ref:f,shadow:o,...c},l,i&&M.createElement(bv,{"data-testid":"resizeHandle",ref:u})));jc.displayName="Window";const yv=z(Lc)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:l})=>l.canvas};
`,vv=z.div`
  display: flex;
  background: ${({theme:l})=>l.materialDark};
  color: #dfe0e3;
`,xv=z.div`
  display: flex;
  flex-wrap: wrap;
`,wa=z.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Sv=z.span`
  cursor: pointer;

  background: ${({active:l,theme:i})=>l?i.hoverBackground:"transparent"};
  color: ${({active:l,theme:i})=>l?i.canvasTextInvert:i.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:l,active:i})=>i?"none":l.materialDark};
  }
`,Ev=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Tv(l,i){return new Date(l,i+1,0).getDate()}function wv(l,i,u){return new Date(l,i,u).getDay()}function Cv(l){const i=new Date(Date.parse(l)),u=i.getUTCDate(),o=i.getUTCMonth(),c=i.getUTCFullYear();return{day:u,month:o,year:c}}const Ov=R.forwardRef(({className:l,date:i=new Date().toISOString(),onAccept:u,onCancel:o,shadow:c=!0},f)=>{const[h,m]=R.useState(()=>Cv(i)),{year:A,month:g,day:y}=h,v=R.useCallback(({value:Z})=>{m(J=>({...J,month:Z}))},[]),B=R.useCallback(Z=>{m(J=>({...J,year:Z}))},[]),k=R.useCallback(Z=>{m(J=>({...J,day:Z}))},[]),L=R.useCallback(()=>{const Z=[h.year,h.month+1,h.day].map(J=>String(J).padStart(2,"0")).join("-");u?.(Z)},[h.day,h.month,h.year,u]),P=R.useMemo(()=>{const Z=Array.from({length:42}),J=wv(A,g,1);let H=y;const G=Tv(A,g);return H=H<G?H:G,Z.forEach((W,_)=>{if(_>=J&&_<G+J){const I=_-J+1;Z[_]=M.createElement(wa,{key:_,onClick:()=>{k(I)}},M.createElement(Sv,{active:I===H},I))}else Z[_]=M.createElement(wa,{key:_})}),Z},[y,k,g,A]);return M.createElement(jc,{className:l,ref:f,shadow:c,style:{margin:20}},M.createElement(Uc,null,M.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),M.createElement(Qc,null,M.createElement(mc,{noPadding:!0,style:{justifyContent:"space-between"}},M.createElement(y0,{options:Ev,value:g,onChange:v,width:128,menuMaxHeight:200}),M.createElement(d0,{value:A,onChange:B,width:100})),M.createElement(yv,null,M.createElement(vv,null,M.createElement(wa,null,"S"),M.createElement(wa,null,"M"),M.createElement(wa,null,"T"),M.createElement(wa,null,"W"),M.createElement(wa,null,"T"),M.createElement(wa,null,"F"),M.createElement(wa,null,"S")),M.createElement(xv,null,P)),M.createElement(mc,{noPadding:!0,style:{justifyContent:"space-between"}},M.createElement(Mn,{fullWidth:!0,onClick:o,disabled:!o},"Cancel"),M.createElement(Mn,{fullWidth:!0,onClick:u?L:void 0,disabled:!u},"OK"))))});Ov.displayName="DatePicker";const Rv=l=>{switch(l){case"status":case"well":return ae`
        ${Ke({style:"status"})}
      `;case"window":case"outside":return ae`
        ${Ke({style:"window"})}
      `;case"field":return ae`
        ${Ke({style:"field"})}
      `;default:return ae`
        ${Ke()}
      `}},Dv=z.div`
  position: relative;
  font-size: 1rem;
  ${({variant:l})=>Rv(l)}
  ${({variant:l})=>Pt(l==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Du=R.forwardRef(({children:l,shadow:i=!1,variant:u="window",...o},c)=>M.createElement(Dv,{ref:c,shadow:i,variant:u,...o},l));Du.displayName="Frame";const Bv=z.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:l,variant:i})=>i==="flat"?l.flatDark:l.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:l})=>l.materialText};
  ${({variant:l})=>l!=="flat"&&ae`
      box-shadow: -1px -1px 0 1px ${({theme:i})=>i.borderDark},
        inset -1px -1px 0 1px ${({theme:i})=>i.borderDark};
    `}
  ${l=>l.$disabled&&Wt()}
`,zv=z.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:l,variant:i})=>i==="flat"?l.canvas:l.material};
`,Mv=R.forwardRef(({label:l,disabled:i=!1,variant:u="default",children:o,...c},f)=>M.createElement(Bv,{"aria-disabled":i,$disabled:i,variant:u,ref:f,...c},l&&M.createElement(zv,{variant:u},l),o));Mv.displayName="GroupBox";const Nv=z.div`
  ${({theme:l,size:i="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${tn(i)};
  width: 5px;
  border-top: 2px solid ${l.borderLightest};
  border-left: 2px solid ${l.borderLightest};
  border-bottom: 2px solid ${l.borderDark};
  border-right: 2px solid ${l.borderDark};
  background: ${l.material};
`}
`;Nv.displayName="Handle";const kv="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Lv=z.div`
  display: inline-block;
  height: ${({size:l})=>tn(l)};
  width: ${({size:l})=>tn(l)};
`,$v=z.span`
  display: block;
  background: ${kv};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Qv=R.forwardRef(({size:l=30,...i},u)=>M.createElement(Lv,{size:l,ref:u,...i},M.createElement($v,null)));Qv.displayName="Hourglass";const Uv=z.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,jv=z.div`
  position: relative;
`,Hv=z.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:l})=>l.material};
  border-top: 4px solid ${({theme:l})=>l.borderLightest};
  border-left: 4px solid ${({theme:l})=>l.borderLightest};
  border-bottom: 4px solid ${({theme:l})=>l.borderDark};
  border-right: 4px solid ${({theme:l})=>l.borderDark};

  outline: 1px dotted ${({theme:l})=>l.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:l})=>l.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:l})=>l.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,_v=z(oa).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Gv=z.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:l})=>l.material};
  border-left: 2px solid ${({theme:l})=>l.borderLightest};
  border-bottom: 2px solid ${({theme:l})=>l.borderDarkest};
  border-right: 2px solid ${({theme:l})=>l.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:l})=>l.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:l})=>l.material};
    border-left: 2px solid ${({theme:l})=>l.borderLightest};
    border-right: 2px solid ${({theme:l})=>l.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:l})=>l.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:l})=>l.material};
    border: 2px solid ${({theme:l})=>l.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:l})=>l.borderLightest},
      1px 1px 0 1px ${({theme:l})=>l.borderDarkest};
  }
`,Yv=R.forwardRef(({backgroundStyles:l,children:i,...u},o)=>M.createElement(Uv,{ref:o,...u},M.createElement(jv,null,M.createElement(Hv,null,M.createElement(_v,{style:l},i)),M.createElement(Gv,null))));Yv.displayName="Monitor";const Xv=z.div`
  display: inline-block;
  height: ${gt.md};
  width: 100%;
`,Vv=z(oa)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,v0=ae`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,qv=z.div`
  position: relative;
  top: 4px;
  ${v0}
  background: ${({theme:l})=>l.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:l})=>l.materialText};
`,Zv=z.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${v0}
  color: ${({theme:l})=>l.materialTextInvert};
  background: ${({theme:l})=>l.progress};
  clip-path: polygon(
    0 0,
    ${({value:l=0})=>l}% 0,
    ${({value:l=0})=>l}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Kv=z.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,x0=17,Iv=z.span`
  display: inline-block;
  width: ${x0}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:l})=>l.progress};
  border-color: ${({theme:l})=>l.material};
  border-width: 0px 1px;
  border-style: solid;
`,Jv=R.forwardRef(({hideValue:l=!1,shadow:i=!0,value:u,variant:o="default",...c},f)=>{const h=l?null:`${u}%`,m=R.useRef(null),[A,g]=R.useState([]),y=R.useCallback(()=>{if(!m.current||u===void 0)return;const v=m.current.getBoundingClientRect().width,B=Math.round(u/100*v/x0);g(Array.from({length:B}))},[u]);return R.useEffect(()=>(y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)),[y]),M.createElement(Xv,{"aria-valuenow":u!==void 0?Math.round(u):void 0,ref:f,role:"progressbar",variant:o,...c},M.createElement(Vv,{variant:o,shadow:i},o==="default"?M.createElement(M.Fragment,null,M.createElement(qv,{"data-testid":"defaultProgress1"},h),M.createElement(Zv,{"data-testid":"defaultProgress2",value:u},h)):M.createElement(Kv,{ref:m,"data-testid":"tileProgress"},A.map((v,B)=>M.createElement(Iv,{key:B})))))});Jv.displayName="ProgressBar";const S0=ae`
  width: ${ua}px;
  height: ${ua}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Fv=z(oa)`
  ${S0}
  background: ${({$disabled:l,theme:i})=>l?i.material:i.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,Wv=z.div`
  ${zn()}
  ${S0}
  outline: none;
  background: ${({$disabled:l,theme:i})=>l?i.flatLight:i.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:l})=>l.flatDark};
    border-radius: 50%;
  }
`,Pv=z.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${l=>l.$disabled?l.theme.checkmarkDisabled:l.theme.checkmark};
`,e1={flat:Wv,default:Fv},t1=R.forwardRef(({checked:l,className:i="",disabled:u=!1,label:o="",onChange:c,style:f={},variant:h="default",...m},A)=>{const g=e1[h];return M.createElement(Nc,{$disabled:u,className:i,style:f},M.createElement(g,{$disabled:u,role:"presentation"},l&&M.createElement(Pv,{$disabled:u,variant:h})),M.createElement(bu,{disabled:u,onChange:u?void 0:c,readOnly:u,type:"radio",checked:l,ref:A,...m}),o&&M.createElement(kc,null,o))});t1.displayName="Radio";const a1=typeof window<"u"?R.useLayoutEffect:R.useEffect;function En(l){const i=R.useRef(l);return a1(()=>{i.current=l}),R.useCallback((...u)=>(0,i.current)(...u),[])}function ng(l,i){typeof l=="function"?l(i):l&&(l.current=i)}function lg(l,i){return R.useMemo(()=>l==null&&i==null?null:u=>{ng(l,u),ng(i,u)},[l,i])}var n1=kg();let Bu=!0,Ac=!1,ig;const l1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i1(l){if("type"in l){const{type:i,tagName:u}=l;if(u==="INPUT"&&l1[i]&&!l.readOnly||u==="TEXTAREA"&&!l.readOnly)return!0}return!!("isContentEditable"in l&&l.isContentEditable)}function r1(l){l.metaKey||l.altKey||l.ctrlKey||(Bu=!0)}function ec(){Bu=!1}function u1(){this.visibilityState==="hidden"&&Ac&&(Bu=!0)}function o1(l){l.addEventListener("keydown",r1,!0),l.addEventListener("mousedown",ec,!0),l.addEventListener("pointerdown",ec,!0),l.addEventListener("touchstart",ec,!0),l.addEventListener("visibilitychange",u1,!0)}function s1(l){const{target:i}=l;try{return i.matches(":focus-visible")}catch{}return Bu||i1(i)}function c1(){Ac=!0,window.clearTimeout(ig),ig=window.setTimeout(()=>{Ac=!1},100)}function f1(){const l=R.useCallback(i=>{const u=n1.findDOMNode(i);u!=null&&o1(u.ownerDocument)},[]);return{isFocusVisible:s1,onBlurVisible:c1,ref:l}}function d1(l,i,u){return(u-i)*l+i}function iu(l,i){if(i!==void 0&&"changedTouches"in l){for(let u=0;u<l.changedTouches.length;u+=1){const o=l.changedTouches[u];if(o.identifier===i)return{x:o.clientX,y:o.clientY}}return!1}return"clientX"in l?{x:l.clientX,y:l.clientY}:!1}function ru(l){return l&&l.ownerDocument||document}function h1(l,i){var u;const{index:o}=(u=l.reduce((c,f,h)=>{const m=Math.abs(i-f);return c===null||m<c.distance||m===c.distance?{distance:m,index:h}:c},null))!==null&&u!==void 0?u:{};return o??-1}const p1=z.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:l})=>l?"41px":"39px"};
    ${({isFocused:l,theme:i})=>l&&`
        outline: 2px dotted ${i.materialText};
        `}
  }

  ${({orientation:l,size:i})=>l==="vertical"?ae`
          height: ${i};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:u})=>u?"41px":"39px"};
          }
        `:ae`
          width: ${i};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:u})=>u?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:l})=>l?"none":"auto"};
`,E0=()=>ae`
  position: absolute;
  ${({orientation:l})=>l==="vertical"?ae`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:ae`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,g1=z(oa)`
  ${E0()}
`,m1=z(oa)`
  ${E0()}

  border-left-color: ${({theme:l})=>l.flatLight};
  border-top-color: ${({theme:l})=>l.flatLight};
  border-right-color: ${({theme:l})=>l.canvas};
  border-bottom-color: ${({theme:l})=>l.canvas};
  &:before {
    border-left-color: ${({theme:l})=>l.flatDark};
    border-top-color: ${({theme:l})=>l.flatDark};
    border-right-color: ${({theme:l})=>l.flatLight};
    border-bottom-color: ${({theme:l})=>l.flatLight};
  }
`,A1=z.span`
  position: relative;
  ${({orientation:l})=>l==="vertical"?ae`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:ae`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:l})=>l==="flat"?ae`
          ${zn()}
          outline: 2px solid ${({theme:i})=>i.flatDark};
          background: ${({theme:i})=>i.flatLight};
        `:ae`
          ${Pt()}
          ${Ke()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:l,theme:i})=>l&&Gi({mainColor:i.material,secondaryColor:i.borderLightest})}
`,Tl=6,b1=z.span`
  display: inline-block;
  position: absolute;

  ${({orientation:l})=>l==="vertical"?ae`
          right: ${-Tl-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Tl}px;
          border-bottom: 2px solid ${({theme:i})=>i.materialText};
        `:ae`
          bottom: ${-Tl}px;
          height: ${Tl}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:i})=>i.materialText};
          border-right: 1px solid ${({theme:i})=>i.materialText};
        `}

  color:  ${({theme:l})=>l.materialText};
  ${({$disabled:l,theme:i})=>l&&ae`
      ${Wt()}
      box-shadow: 1px 1px 0px ${i.materialTextDisabledShadow};
      border-color: ${i.materialTextDisabled};
    `}
`,y1=z.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:l})=>l==="vertical"?ae`
          transform: translate(${Tl+2}px, ${Tl+1}px);
        `:ae`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,v1=R.forwardRef(({defaultValue:l,disabled:i=!1,marks:u=!1,max:o=100,min:c=0,name:f,onChange:h,onChangeCommitted:m,onMouseDown:A,orientation:g="horizontal",size:y="100%",step:v=1,value:B,variant:k="default",...L},P)=>{const Z=k==="flat"?m1:g1,J=g==="vertical",[H=c,G]=an({defaultValue:l,onChange:h??m,value:B}),{isFocusVisible:W,onBlurVisible:_,ref:I}=f1(),[ee,ye]=R.useState(!1),ve=R.useRef(),De=R.useRef(null),Ne=lg(I,ve),pe=lg(P,Ne),Oe=En(Q=>{W(Q)&&ye(!0)}),xe=En(()=>{ee!==!1&&(ye(!1),_())}),me=R.useRef(),D=R.useMemo(()=>u===!0&&Number.isFinite(v)?[...Array(Math.round((o-c)/v)+1)].map((Q,K)=>({label:void 0,value:c+v*K})):Array.isArray(u)?u:[],[u,o,c,v]),Y=En(Q=>{const K=(o-c)/10,ne=D.map(he=>he.value),te=ne.indexOf(H);let se=0;switch(Q.key){case"Home":se=c;break;case"End":se=o;break;case"PageUp":v&&(se=H+K);break;case"PageDown":v&&(se=H-K);break;case"ArrowRight":case"ArrowUp":v?se=H+v:se=ne[te+1]||ne[ne.length-1];break;case"ArrowLeft":case"ArrowDown":v?se=H-v:se=ne[te-1]||ne[0];break;default:return}Q.preventDefault(),v&&(se=eg(se,v,c)),se=Cn(se,c,o),G(se),ye(!0),h?.(se),m?.(se)}),F=R.useCallback(Q=>{if(!ve.current)return 0;const K=ve.current.getBoundingClientRect();let ne;J?ne=(K.bottom-Q.y)/K.height:ne=(Q.x-K.left)/K.width;let te;if(te=d1(ne,c,o),v)te=eg(te,v,c);else{const se=D.map(V=>V.value),he=h1(se,te);te=se[he]}return te=Cn(te,c,o),te},[D,o,c,v,J]),ie=En(Q=>{var K;const ne=iu(Q,me.current);if(!ne)return;const te=F(ne);(K=De.current)===null||K===void 0||K.focus(),G(te),ye(!0),h?.(te)}),x=En(Q=>{const K=iu(Q,me.current);if(!K)return;const ne=F(K);m?.(ne),me.current=void 0;const te=ru(ve.current);te.removeEventListener("mousemove",ie),te.removeEventListener("mouseup",x),te.removeEventListener("touchmove",ie),te.removeEventListener("touchend",x)}),N=En(Q=>{var K;A?.(Q),Q.preventDefault(),(K=De.current)===null||K===void 0||K.focus(),ye(!0);const ne=iu(Q,me.current);if(ne){const se=F(ne);G(se),h?.(se)}const te=ru(ve.current);te.addEventListener("mousemove",ie),te.addEventListener("mouseup",x)}),X=En(Q=>{var K;Q.preventDefault();const ne=Q.changedTouches[0];ne!=null&&(me.current=ne.identifier),(K=De.current)===null||K===void 0||K.focus(),ye(!0);const te=iu(Q,me.current);if(te){const he=F(te);G(he),h?.(he)}const se=ru(ve.current);se.addEventListener("touchmove",ie),se.addEventListener("touchend",x)});return R.useEffect(()=>{const{current:Q}=ve;Q?.addEventListener("touchstart",X);const K=ru(Q);return()=>{Q?.removeEventListener("touchstart",X),K.removeEventListener("mousemove",ie),K.removeEventListener("mouseup",x),K.removeEventListener("touchmove",ie),K.removeEventListener("touchend",x)}},[x,ie,X]),M.createElement(p1,{$disabled:i,hasMarks:!!D.length,isFocused:ee,onMouseDown:N,orientation:g,ref:pe,size:tn(y),...L},M.createElement("input",{disabled:i,name:f,type:"hidden",value:H??0}),D&&D.map(Q=>M.createElement(b1,{$disabled:i,"data-testid":"tick",key:Q.value/(o-c)*100,orientation:g,style:{[J?"bottom":"left"]:`${(Q.value-c)/(o-c)*100}%`}},Q.label&&M.createElement(y1,{"aria-hidden":!0,"data-testid":"mark",orientation:g},Q.label))),M.createElement(Z,{orientation:g,variant:k}),M.createElement(A1,{$disabled:i,"aria-disabled":i?!0:void 0,"aria-orientation":g,"aria-valuemax":o,"aria-valuemin":c,"aria-valuenow":H,onBlur:xe,onFocus:Oe,onKeyDown:Y,orientation:g,ref:De,role:"slider",style:{[J?"bottom":"left"]:`${(J?-100:0)+100*(H-c)/(o-c)}%`},tabIndex:i?void 0:0,variant:k}))});v1.displayName="Slider";const x1=z.tbody`
  background: ${({theme:l})=>l.canvas};
  display: table-row-group;
  box-shadow: ${zc};
  overflow-y: auto;
`,T0=R.forwardRef(function({children:i,...u},o){return M.createElement(x1,{ref:o,...u},i)});T0.displayName="TableBody";const S1=z.td`
  padding: 0 8px;
`,w0=R.forwardRef(function({children:i,...u},o){return M.createElement(S1,{ref:o,...u},i)});w0.displayName="TableDataCell";const E1=z.thead`
  display: table-header-group;
`,C0=R.forwardRef(function({children:i,...u},o){return M.createElement(E1,{ref:o,...u},i)});C0.displayName="TableHead";const T1=z.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:l})=>l.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Ke()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:l})=>!l&&ae`
      &:active {
        &:before {
          ${Ke({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:l})=>l.materialText};
  ${({$disabled:l})=>l&&Wt()}
  &:hover {
    color: ${({theme:l})=>l.materialText};
    ${({$disabled:l})=>l&&Wt()}
  }
`,O0=R.forwardRef(function({disabled:i=!1,children:u,onClick:o,onTouchStart:c=Nn,sort:f,...h},m){const A=f==="asc"?"ascending":f==="desc"?"descending":void 0;return M.createElement(T1,{$disabled:i,"aria-disabled":i,"aria-sort":A,onClick:i?void 0:o,onTouchStart:i?void 0:c,ref:m,...h},M.createElement("div",null,u))});O0.displayName="TableHeadCell";const w1=z.tr`
  color: inherit;
  display: table-row;
  height: calc(${gt.md} - 2px);
  line-height: calc(${gt.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:l})=>l.canvasText};
  &:hover {
    background: ${({theme:l})=>l.hoverBackground};
    color: ${({theme:l})=>l.canvasTextInvert};
  }
`,R0=R.forwardRef(function({children:i,...u},o){return M.createElement(w1,{ref:o,...u},i)});R0.displayName="TableRow";const C1=z.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,O1=z(oa)`
  &:before {
    box-shadow: none;
  }
`,D0=R.forwardRef(({children:l,...i},u)=>M.createElement(O1,null,M.createElement(C1,{ref:u,...i},l)));D0.displayName="Table";const R1=z.button`
  ${Pt()}
  ${Ke()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${gt.md};
  line-height: ${gt.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:l})=>l.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Dl}
    outline-offset: -6px;
  }
  ${l=>l.selected&&`
    z-index: 1;
    height: calc(${gt.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:l})=>l.material};
    bottom: -4px;
    left: 2px;
  }
`,D1=R.forwardRef(({value:l,onClick:i,selected:u=!1,children:o,...c},f)=>M.createElement(R1,{"aria-selected":u,selected:u,onClick:h=>i?.(l,h),ref:f,role:"tab",...c},o));D1.displayName="Tab";const B1=z.div`
  ${Pt()}
  ${Ke()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,z1=R.forwardRef(({children:l,...i},u)=>M.createElement(B1,{ref:u,...i},l));z1.displayName="TabBody";const M1=z.div`
  position: relative;
  ${({isMultiRow:l,theme:i})=>l&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${i.borderDark};
  }
  `}
`,N1=z.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:l})=>l.borderDarkest};
    border-left: 2px solid ${({theme:l})=>l.borderLightest};
  }
`;function k1(l,i){const u=[];for(let o=i;o>0;o-=1)u.push(l.splice(0,Math.ceil(l.length/o)));return u}const L1=R.forwardRef(({value:l,onChange:i=Nn,children:u,rows:o=1,...c},f)=>{const h=R.useMemo(()=>{var m;const A=(m=M.Children.map(u,v=>{if(!M.isValidElement(v))return null;const B={selected:v.props.value===l,onClick:i};return M.cloneElement(v,B)}))!==null&&m!==void 0?m:[],g=k1(A,o).map((v,B)=>({key:B,tabs:v})),y=g.findIndex(v=>v.tabs.some(B=>B.props.selected));return g.push(g.splice(y,1)[0]),g},[u,i,o,l]);return M.createElement(M1,{...c,isMultiRow:o>1,role:"tablist",ref:f},h.map(m=>M.createElement(N1,{key:m.key},m.tabs)))});L1.displayName="Tabs";const $1=["blur","focus"],Q1=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function rg(l){return"nativeEvent"in l&&$1.includes(l.type)}function ug(l){return"nativeEvent"in l&&Q1.includes(l.type)}const U1={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},j1=z.span`
  position: absolute;

  z-index: 1;
  display: ${l=>l.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:l})=>l.borderDarkest};
  background: ${({theme:l})=>l.tooltip};
  box-shadow: ${Bc};
  text-align: center;
  font-size: 1rem;
  ${l=>U1[l.position]}
`,H1=z.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,_1=R.forwardRef(({className:l,children:i,disableFocusListener:u=!1,disableMouseListener:o=!1,enterDelay:c=1e3,leaveDelay:f=0,onBlur:h,onClose:m,onFocus:A,onMouseEnter:g,onMouseLeave:y,onOpen:v,style:B,text:k,position:L="top",...P},Z)=>{const[J,H]=R.useState(!1),[G,W]=R.useState(),[_,I]=R.useState(),ee=!u,ye=!o,ve=F=>{window.clearTimeout(G),window.clearTimeout(_);const ie=window.setTimeout(()=>{H(!0),v?.(F)},c);W(ie)},De=F=>{F.persist(),rg(F)?A?.(F):ug(F)&&g?.(F),ve(F)},Ne=F=>{window.clearTimeout(G),window.clearTimeout(_);const ie=window.setTimeout(()=>{H(!1),m?.(F)},f);I(ie)},pe=F=>{F.persist(),rg(F)?h?.(F):ug(F)&&y?.(F),Ne(F)},Oe=ee?pe:void 0,xe=ee?De:void 0,me=ye?De:void 0,D=ye?pe:void 0,Y=ee?0:void 0;return M.createElement(H1,{"data-testid":"tooltip-wrapper",onBlur:Oe,onFocus:xe,onMouseEnter:me,onMouseLeave:D,tabIndex:Y},M.createElement(j1,{className:l,"data-testid":"tooltip",position:L,ref:Z,show:J,style:B,...P},k),i)});_1.displayName="Tooltip";const bc=z(kc)`
  white-space: nowrap;
`,B0=ae`
  :focus {
    outline: none;
  }

  ${({$disabled:l})=>l?"cursor: default;":ae`
          cursor: pointer;

          :focus {
            ${bc} {
              background: ${({theme:i})=>i.hoverBackground};
              color: ${({theme:i})=>i.materialTextInvert};
              outline: 2px dotted ${({theme:i})=>i.focusSecondary};
            }
          }
        `}
`,G1=z.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:l})=>l&&ae`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:i})=>i.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:l})=>l.borderDark};
      font-size: 12px;
    }
  }
`,Y1=z.li`
  position: relative;
  padding-left: ${({hasItems:l})=>l?"0":"13px"};

  ${({isRootLevel:l})=>l?ae`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:i})=>i.material};
            }
          }
        `:ae`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:i})=>i.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:l})=>l.borderDark};
    }
  }
`,X1=z.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,V1=z.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:l})=>l.materialText};
  user-select: none;
  padding-left: 18px;
  ${B0};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,og=z(Nc)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${B0};
`,q1=z.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function sg(l,i){return l.includes(i)?l.filter(u=>u!==i):[...l,i]}function cg(l){l.preventDefault()}function z0({className:l,disabled:i,expanded:u,innerRef:o,level:c,select:f,selected:h,style:m,tree:A=[]}){const g=c===0,y=R.useCallback(v=>{var B,k;const L=!!(v.items&&v.items.length>0),P=u.includes(v.id),Z=(B=i||v.disabled)!==null&&B!==void 0?B:!1,J=Z?cg:_=>f(_,v),H=Z?cg:_=>f(_,v),G=h===v.id,W=M.createElement(q1,{"aria-hidden":!0},v.icon);return M.createElement(Y1,{key:v.label,isRootLevel:g,role:"treeitem","aria-expanded":P,"aria-selected":G,hasItems:L},L?M.createElement(X1,{open:P},M.createElement(V1,{onClick:J,$disabled:Z},M.createElement(og,{$disabled:Z},W,M.createElement(bc,null,v.label))),P&&M.createElement(z0,{className:l,disabled:Z,expanded:u,level:c+1,select:f,selected:h,style:m,tree:(k=v.items)!==null&&k!==void 0?k:[]})):M.createElement(og,{as:"button",$disabled:Z,onClick:H},W,M.createElement(bc,null,v.label)))},[l,i,u,g,c,f,h,m]);return M.createElement(G1,{className:g?l:void 0,style:g?m:void 0,ref:g?o:void 0,role:g?"tree":"group",isRootLevel:g},A.map(y))}function Z1({className:l,defaultExpanded:i=[],defaultSelected:u,disabled:o=!1,expanded:c,onNodeSelect:f,onNodeToggle:h,selected:m,style:A,tree:g=[]},y){const[v,B]=an({defaultValue:i,onChange:h,onChangePropName:"onNodeToggle",value:c,valuePropName:"expanded"}),[k,L]=an({defaultValue:u,onChange:f,onChangePropName:"onNodeSelect",value:m,valuePropName:"selected"}),P=R.useCallback((H,G)=>{if(h){const W=sg(v,G);h(H,W)}B(W=>sg(W,G))},[v,h,B]),Z=R.useCallback((H,G)=>{L(G),f&&f(H,G)},[f,L]),J=R.useCallback((H,G)=>{H.preventDefault(),Z(H,G.id),G.items&&G.items.length&&P(H,G.id)},[Z,P]);return M.createElement(z0,{className:l,disabled:o,expanded:v,level:0,innerRef:y,select:J,selected:k,style:A,tree:g})}const K1=R.forwardRef(Z1);K1.displayName="TreeView";const I1="/scriptkitty/assets/ms_sans_serif-Du8rjN1q.woff2",J1="/scriptkitty/assets/ms_sans_serif_bold-D5dpRRHG.woff2",fg="/scriptkitty/assets/ms_sans_serif_bold_rus-B8S1QBHE.woff2",F1=ae`
@font-face {
    font-family: 'ms_sans_serif';
    src: url('${I1}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${J1}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif_rus';
    src: url('${fg}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif_rus';
    src: url('${fg}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
`,He={md:"1220px",prmd:"968px",sm:"576px",xs:"376px"},W1=hy`
    ${py} ${F1}

    #root {
        display: grid;
        place-items: center;
        min-height: 100dvh;
        min-width: 100dvw;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: black;

        margin: 0;

        overflow: hidden;
    }

    :root {
        --title-size: 27px;
        --sub-size: 18px;
        --description-size: 18px;
        --link-color: #0010d1;
        --light-blue-color: #1dffdc;
    }

    * {
        font-family: 'ms_sans_serif', 'ms_sans_serif_rus' !important;

        &::selection {
            background-color: #060084;

            color: white;
        }

        @media (max-width: ${He.prmd}) {
            &::-webkit-scrollbar {
                width: 13px !important;
            }

            &::-webkit-scrollbar-button {
                display: none !important;
            }
        }
    }

    p, a, h1, h2  {
        font-weight: bold;
        color: black;
        letter-spacing: 1px;
    }

    a {
        position: relative;

        color: var(--link-color);

        &::after {
            content: '';

            position: absolute;
            bottom: -3px;
            left: 0;

            width: 100%;
            height: 2px;

            background-color: var(--link-color);
        }
    }

    @media(max-width: ${He.md}) {
        :root {
            --title-size: 22px;
            --sub-size: 16px;
        }
    }

    @media (max-width: ${He.prmd}) {
        :root {
            --title-size: 19px;
            --description-size: 15px;
        }
    }

    @media (max-width: ${He.sm}) {
        :root {
            --title-size: 17px;
            --sub-size: 13px;
            --description-size: 13px;
        }
    }
`,P1=z.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    cursor: pointer;

    text-align: center;

    display: grid;
    justify-content: center;
    gap: 3px;

    padding: 0;

    background-color: transparent;
    border: none;
`,ex=z.div`
    position: relative;

    width: 70px;
    height: 70px;
    margin: 0 auto;
`,tx=z.img`
    width: 100%;
`,ax=z.img`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 20px;
`,nx=z.p`
    font-size: 13px;
    color: white;
    text-align: center;
    font-weight: 400;
    border: 1px solid transparent;

    box-sizing: border-box;

    padding: 5px;
    max-width: 105px;
    width: 100%;
`,lx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAAAAAA7VNdtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA60lEQVR42s3VvRGFIAzA8ayQkViCFdzgNTRpGSJD0LMHQ7zSAXxB8/wsIIWnfxvM8Tu8oxCc72/AGniOGjPHNda34wQBQEgMSxTlCf+IKIZDMog78pHqLlloJOlym1zItktfwl6EAxn429foNjJ19izJfO7bIgjnUou4C8nvIEViC1FmJ/n2U5iIvI3gG+9llFaCtRbJyyYtiU9NAvuKTIqNZJ0YSJJJ0kWTIJI0f5gumgT8dKpN3O0EJW8jaZRspEySjWQTSfZTCmncJNe5nbj7ieEqtbH2/I9v4BhyL/EzcZKnznAmCJZeTX7FTKQRgCAjGQAAAABJRU5ErkJggg==",ix="/scriptkitty/avatar-image.png";function rx({openWindow:l}){const[i,u]=R.useState(!1),o=R.useRef(null),c=()=>u(!0),f=()=>{u(!1),l()};return R.useEffect(()=>{const h=m=>{o.current&&!o.current.contains(m.target)&&u(!1)};document.addEventListener("mousedown",h)},[]),q.jsxs(P1,{ref:o,onClick:c,onDoubleClick:f,children:[q.jsxs(ex,{children:[q.jsx(tx,{src:ix,alt:"avatarImg",style:{filter:i?"brightness(0.8) sepia(1) hue-rotate(200deg) saturate(5)":"initial"}}),q.jsx(ax,{src:lx,alt:"shortcutIcon"})]}),q.jsx(nx,{style:{backgroundColor:i?"var(--link-color)":"transparent",border:i?"1px dotted white":"1px dotted transparent"},children:"KITTEN20.EXE"})]})}const M0=()=>{const[l,i]=R.useState(0);return R.useEffect(()=>{if(!document.fonts){i(100);return}i(10),document.fonts.ready.then(()=>{setTimeout(()=>{i(100)},1e3)}).catch(o=>{console.error("fonts loading error:",o),i(100)});const u=setInterval(()=>{i(o=>o>=90?o:o+5)},300);return()=>clearInterval(u)},[]),{inPercents:l,haveFontsBeenLoaded:l===100}},ux=z(jc)`
    max-width: 1482px;
    max-height: 954px;
    width: calc(100% - 40px);
    margin: 0 20px;

    position: relative;
    z-index: 1;

    @media (max-width: ${He.md}) {
        width: calc(100% - 20px);
        margin: 0 10px;
    }
`,ox=z(Uc)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    * {
        color: white;
    }
`,sx=z(Qc)`
    padding: 4px;
    height: calc(100% - 40px);
    max-height: 87.5dvh;        

    overflow: auto;

    display: grid;
    gap: 12px;
`,cx=z(Lc)`
    padding: 0px 2px;

    & > div {
        padding: 2px 0;
    }
`,fx=z.span`
    display: inline-block;

    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;

    transform: rotateZ(45deg);
    position: relative;

    &:before,
    &:after {
        content: '';
        position: absolute;
        background: ${({theme:l})=>l.materialText};
    }

    &:before {
        height: 100%;
        width: 3px;
        left: 50%;
        transform: translateX(-50%);
    }

    &:after {
        height: 3px;
        width: 100%;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
    }
`;function dx({children:l}){const{haveFontsBeenLoaded:i}=M0();return q.jsxs(ox,{children:[q.jsx("p",{children:i&&"KITTEN20.EXE"}),l]})}const hx=z.div`
    position: absolute;
    top: 0;
    left: 0;

    width: calc(100% - 8px);
    height: calc(100% - 8px);
    padding: 4px;

    background-color: #c6c6c6;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;z.p`
    color: white;
    font-size: var(--description-size);
`;const px=z(Du).attrs({variant:"field"})`
    font-size: var(--description-size);
    font-weight: bold;
    text-align: center;

    width: 80%;
    height: 38px;
    margin: 0 auto;

    position: relative;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
`,gx=z.div`
    background-color: #060084;

    height: calc(100% - 4px);

    position: absolute;
    top: 2px;
    left: 2px;
    z-index: -1;
`,mx=z.p`
    font-size: var(--sub-size);

    width: 80%;
    margin: 0 auto;

    &::after {
        content: '';
        animation: loading-dots 1.5s infinite;
    }

    @keyframes loading-dots {
            0% { content: ''; }
            25% { content: '.'; }
            50% { content: '..'; }
            75% { content: '...'; }
            100% { content: ''; }
        }
`,Ax=()=>{const[l,i]=R.useState(0);return R.useEffect(()=>{if(i(5),document.readyState==="complete"){i(100);return}const u=setInterval(()=>{i(c=>c>=95?c:c+Math.random()*10)},200),o=()=>{clearInterval(u),setTimeout(()=>{i(100)},300)};return window.addEventListener("load",o),()=>{clearInterval(u),window.removeEventListener("load",o)}},[]),{inPercents:l,hasWindowBeenLoaded:l===100}};function bx({totalLoadingProgress:l}){return R.useEffect(()=>{let i=0;document.title="Loading";const u=setInterval(()=>{i>=3?(i=0,document.title="Loading"):(i+=1,document.title+=".")},300);return()=>clearInterval(u)},[]),q.jsxs(hx,{children:[q.jsx(mx,{children:"Loading"}),q.jsxs(px,{style:{color:l<50?"#060084":"white"},children:[q.jsx(gx,{style:{width:`calc(${l}% - 4px)`}}),l+"%"]})]})}function yx(){const{inPercents:l}=M0(),{inPercents:i}=Ax(),u=Math.round(l*.3+i*.7),o=u===100;return R.useEffect(()=>{o&&(document.title="KITTEN20.EXE")},[o]),o?q.jsx(q.Fragment,{}):q.jsx(bx,{totalLoadingProgress:u,hasPageBeenLoaded:o})}const vx=(l,i,u,o)=>{const c=[u,{code:i,...o||{}}];if(l?.services?.logger?.forward)return l.services.logger.forward(c,"warn","react-i18next::",!0);Rn(c[0])&&(c[0]=`react-i18next:: ${c[0]}`),l?.services?.logger?.warn?l.services.logger.warn(...c):console?.warn&&console.warn(...c)},dg={},yc=(l,i,u,o)=>{Rn(u)&&dg[u]||(Rn(u)&&(dg[u]=new Date),vx(l,i,u,o))},N0=(l,i)=>()=>{if(l.isInitialized)i();else{const u=()=>{setTimeout(()=>{l.off("initialized",u)},0),i()};l.on("initialized",u)}},vc=(l,i,u)=>{l.loadNamespaces(i,N0(l,u))},hg=(l,i,u,o)=>{if(Rn(u)&&(u=[u]),l.options.preload&&l.options.preload.indexOf(i)>-1)return vc(l,u,o);u.forEach(c=>{l.options.ns.indexOf(c)<0&&l.options.ns.push(c)}),l.loadLanguages(i,N0(l,o))},xx=(l,i,u={})=>!i.languages||!i.languages.length?(yc(i,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:i.languages}),!0):i.hasLoadedNamespace(l,{lng:u.lng,precheck:(o,c)=>{if(u.bindI18n&&u.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!c(o.isLanguageChangingTo,l))return!1}}),Rn=l=>typeof l=="string",Sx=l=>typeof l=="object"&&l!==null,Ex=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Tx={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},wx=l=>Tx[l],Cx=l=>l.replace(Ex,wx);let xc={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Cx};const Ox=(l={})=>{xc={...xc,...l}},Rx=()=>xc;let k0;const Dx=l=>{k0=l},Bx=()=>k0,zx={type:"3rdParty",init(l){Ox(l.options.react),Dx(l)}},Mx=R.createContext();class Nx{constructor(){this.usedNamespaces={}}addUsedNamespaces(i){i.forEach(u=>{this.usedNamespaces[u]||(this.usedNamespaces[u]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const kx=(l,i)=>{const u=R.useRef();return R.useEffect(()=>{u.current=l},[l,i]),u.current},L0=(l,i,u,o)=>l.getFixedT(i,u,o),Lx=(l,i,u,o)=>R.useCallback(L0(l,i,u,o),[l,i,u,o]),zl=(l,i={})=>{const{i18n:u}=i,{i18n:o,defaultNS:c}=R.useContext(Mx)||{},f=u||o||Bx();if(f&&!f.reportNamespaces&&(f.reportNamespaces=new Nx),!f){yc(f,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const W=(I,ee)=>Rn(ee)?ee:Sx(ee)&&Rn(ee.defaultValue)?ee.defaultValue:Array.isArray(I)?I[I.length-1]:I,_=[W,{},!1];return _.t=W,_.i18n={},_.ready=!1,_}f.options.react?.wait&&yc(f,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const h={...Rx(),...f.options.react,...i},{useSuspense:m,keyPrefix:A}=h;let g=c||f.options?.defaultNS;g=Rn(g)?[g]:g||["translation"],f.reportNamespaces.addUsedNamespaces?.(g);const y=(f.isInitialized||f.initializedStoreOnce)&&g.every(W=>xx(W,f,h)),v=Lx(f,i.lng||null,h.nsMode==="fallback"?g:g[0],A),B=()=>v,k=()=>L0(f,i.lng||null,h.nsMode==="fallback"?g:g[0],A),[L,P]=R.useState(B);let Z=g.join();i.lng&&(Z=`${i.lng}${Z}`);const J=kx(Z),H=R.useRef(!0);R.useEffect(()=>{const{bindI18n:W,bindI18nStore:_}=h;H.current=!0,!y&&!m&&(i.lng?hg(f,i.lng,g,()=>{H.current&&P(k)}):vc(f,g,()=>{H.current&&P(k)})),y&&J&&J!==Z&&H.current&&P(k);const I=()=>{H.current&&P(k)};return W&&f?.on(W,I),_&&f?.store.on(_,I),()=>{H.current=!1,f&&W&&W?.split(" ").forEach(ee=>f.off(ee,I)),_&&f&&_.split(" ").forEach(ee=>f.store.off(ee,I))}},[f,Z]),R.useEffect(()=>{H.current&&y&&P(B)},[f,A,y]);const G=[L,f,y];if(G.t=L,G.i18n=f,G.ready=y,y||!y&&!m)return G;throw new Promise(W=>{i.lng?hg(f,i.lng,g,()=>W()):vc(f,g,()=>W())})},fe=l=>typeof l=="string",Mi=()=>{let l,i;const u=new Promise((o,c)=>{l=o,i=c});return u.resolve=l,u.reject=i,u},pg=l=>l==null?"":""+l,$x=(l,i,u)=>{l.forEach(o=>{i[o]&&(u[o]=i[o])})},Qx=/###/g,gg=l=>l&&l.indexOf("###")>-1?l.replace(Qx,"."):l,mg=l=>!l||fe(l),$i=(l,i,u)=>{const o=fe(i)?i.split("."):i;let c=0;for(;c<o.length-1;){if(mg(l))return{};const f=gg(o[c]);!l[f]&&u&&(l[f]=new u),Object.prototype.hasOwnProperty.call(l,f)?l=l[f]:l={},++c}return mg(l)?{}:{obj:l,k:gg(o[c])}},Ag=(l,i,u)=>{const{obj:o,k:c}=$i(l,i,Object);if(o!==void 0||i.length===1){o[c]=u;return}let f=i[i.length-1],h=i.slice(0,i.length-1),m=$i(l,h,Object);for(;m.obj===void 0&&h.length;)f=`${h[h.length-1]}.${f}`,h=h.slice(0,h.length-1),m=$i(l,h,Object),m?.obj&&typeof m.obj[`${m.k}.${f}`]<"u"&&(m.obj=void 0);m.obj[`${m.k}.${f}`]=u},Ux=(l,i,u,o)=>{const{obj:c,k:f}=$i(l,i,Object);c[f]=c[f]||[],c[f].push(u)},yu=(l,i)=>{const{obj:u,k:o}=$i(l,i);if(u&&Object.prototype.hasOwnProperty.call(u,o))return u[o]},jx=(l,i,u)=>{const o=yu(l,u);return o!==void 0?o:yu(i,u)},$0=(l,i,u)=>{for(const o in i)o!=="__proto__"&&o!=="constructor"&&(o in l?fe(l[o])||l[o]instanceof String||fe(i[o])||i[o]instanceof String?u&&(l[o]=i[o]):$0(l[o],i[o],u):l[o]=i[o]);return l},Sl=l=>l.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Hx={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const _x=l=>fe(l)?l.replace(/[&<>"'\/]/g,i=>Hx[i]):l;class Gx{constructor(i){this.capacity=i,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(i){const u=this.regExpMap.get(i);if(u!==void 0)return u;const o=new RegExp(i);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(i,o),this.regExpQueue.push(i),o}}const Yx=[" ",",","?","!",";"],Xx=new Gx(20),Vx=(l,i,u)=>{i=i||"",u=u||"";const o=Yx.filter(h=>i.indexOf(h)<0&&u.indexOf(h)<0);if(o.length===0)return!0;const c=Xx.getRegExp(`(${o.map(h=>h==="?"?"\\?":h).join("|")})`);let f=!c.test(l);if(!f){const h=l.indexOf(u);h>0&&!c.test(l.substring(0,h))&&(f=!0)}return f},Sc=(l,i,u=".")=>{if(!l)return;if(l[i])return Object.prototype.hasOwnProperty.call(l,i)?l[i]:void 0;const o=i.split(u);let c=l;for(let f=0;f<o.length;){if(!c||typeof c!="object")return;let h,m="";for(let A=f;A<o.length;++A)if(A!==f&&(m+=u),m+=o[A],h=c[m],h!==void 0){if(["string","number","boolean"].indexOf(typeof h)>-1&&A<o.length-1)continue;f+=A-f+1;break}c=h}return c},Hi=l=>l?.replace("_","-"),qx={type:"logger",log(l){this.output("log",l)},warn(l){this.output("warn",l)},error(l){this.output("error",l)},output(l,i){console?.[l]?.apply?.(console,i)}};class vu{constructor(i,u={}){this.init(i,u)}init(i,u={}){this.prefix=u.prefix||"i18next:",this.logger=i||qx,this.options=u,this.debug=u.debug}log(...i){return this.forward(i,"log","",!0)}warn(...i){return this.forward(i,"warn","",!0)}error(...i){return this.forward(i,"error","")}deprecate(...i){return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(i,u,o,c){return c&&!this.debug?null:(fe(i[0])&&(i[0]=`${o}${this.prefix} ${i[0]}`),this.logger[u](i))}create(i){return new vu(this.logger,{prefix:`${this.prefix}:${i}:`,...this.options})}clone(i){return i=i||this.options,i.prefix=i.prefix||this.prefix,new vu(this.logger,i)}}var ra=new vu;class zu{constructor(){this.observers={}}on(i,u){return i.split(" ").forEach(o=>{this.observers[o]||(this.observers[o]=new Map);const c=this.observers[o].get(u)||0;this.observers[o].set(u,c+1)}),this}off(i,u){if(this.observers[i]){if(!u){delete this.observers[i];return}this.observers[i].delete(u)}}emit(i,...u){this.observers[i]&&Array.from(this.observers[i].entries()).forEach(([c,f])=>{for(let h=0;h<f;h++)c(...u)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([c,f])=>{for(let h=0;h<f;h++)c.apply(c,[i,...u])})}}class bg extends zu{constructor(i,u={ns:["translation"],defaultNS:"translation"}){super(),this.data=i||{},this.options=u,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(i){this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}removeNamespaces(i){const u=this.options.ns.indexOf(i);u>-1&&this.options.ns.splice(u,1)}getResource(i,u,o,c={}){const f=c.keySeparator!==void 0?c.keySeparator:this.options.keySeparator,h=c.ignoreJSONStructure!==void 0?c.ignoreJSONStructure:this.options.ignoreJSONStructure;let m;i.indexOf(".")>-1?m=i.split("."):(m=[i,u],o&&(Array.isArray(o)?m.push(...o):fe(o)&&f?m.push(...o.split(f)):m.push(o)));const A=yu(this.data,m);return!A&&!u&&!o&&i.indexOf(".")>-1&&(i=m[0],u=m[1],o=m.slice(2).join(".")),A||!h||!fe(o)?A:Sc(this.data?.[i]?.[u],o,f)}addResource(i,u,o,c,f={silent:!1}){const h=f.keySeparator!==void 0?f.keySeparator:this.options.keySeparator;let m=[i,u];o&&(m=m.concat(h?o.split(h):o)),i.indexOf(".")>-1&&(m=i.split("."),c=u,u=m[1]),this.addNamespaces(u),Ag(this.data,m,c),f.silent||this.emit("added",i,u,o,c)}addResources(i,u,o,c={silent:!1}){for(const f in o)(fe(o[f])||Array.isArray(o[f]))&&this.addResource(i,u,f,o[f],{silent:!0});c.silent||this.emit("added",i,u,o)}addResourceBundle(i,u,o,c,f,h={silent:!1,skipCopy:!1}){let m=[i,u];i.indexOf(".")>-1&&(m=i.split("."),c=o,o=u,u=m[1]),this.addNamespaces(u);let A=yu(this.data,m)||{};h.skipCopy||(o=JSON.parse(JSON.stringify(o))),c?$0(A,o,f):A={...A,...o},Ag(this.data,m,A),h.silent||this.emit("added",i,u,o)}removeResourceBundle(i,u){this.hasResourceBundle(i,u)&&delete this.data[i][u],this.removeNamespaces(u),this.emit("removed",i,u)}hasResourceBundle(i,u){return this.getResource(i,u)!==void 0}getResourceBundle(i,u){return u||(u=this.options.defaultNS),this.getResource(i,u)}getDataByLanguage(i){return this.data[i]}hasLanguageSomeTranslations(i){const u=this.getDataByLanguage(i);return!!(u&&Object.keys(u)||[]).find(c=>u[c]&&Object.keys(u[c]).length>0)}toJSON(){return this.data}}var Q0={processors:{},addPostProcessor(l){this.processors[l.name]=l},handle(l,i,u,o,c){return l.forEach(f=>{i=this.processors[f]?.process(i,u,o,c)??i}),i}};const U0=Symbol("i18next/PATH_KEY");function Zx(){const l=[],i=Object.create(null);let u;return i.get=(o,c)=>(u?.revoke?.(),c===U0?l:(l.push(c),u=Proxy.revocable(o,i),u.proxy)),Proxy.revocable(Object.create(null),i).proxy}function Ec(l,i){const{[U0]:u}=l(Zx());return u.join(i?.keySeparator??".")}const yg={},vg=l=>!fe(l)&&typeof l!="boolean"&&typeof l!="number";class xu extends zu{constructor(i,u={}){super(),$x(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],i,this),this.options=u,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=ra.create("translator")}changeLanguage(i){i&&(this.language=i)}exists(i,u={interpolation:{}}){const o={...u};return i==null?!1:this.resolve(i,o)?.res!==void 0}extractFromKey(i,u){let o=u.nsSeparator!==void 0?u.nsSeparator:this.options.nsSeparator;o===void 0&&(o=":");const c=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator;let f=u.ns||this.options.defaultNS||[];const h=o&&i.indexOf(o)>-1,m=!this.options.userDefinedKeySeparator&&!u.keySeparator&&!this.options.userDefinedNsSeparator&&!u.nsSeparator&&!Vx(i,o,c);if(h&&!m){const A=i.match(this.interpolator.nestingRegexp);if(A&&A.length>0)return{key:i,namespaces:fe(f)?[f]:f};const g=i.split(o);(o!==c||o===c&&this.options.ns.indexOf(g[0])>-1)&&(f=g.shift()),i=g.join(c)}return{key:i,namespaces:fe(f)?[f]:f}}translate(i,u,o){let c=typeof u=="object"?{...u}:u;if(typeof c!="object"&&this.options.overloadTranslationOptionHandler&&(c=this.options.overloadTranslationOptionHandler(arguments)),typeof c=="object"&&(c={...c}),c||(c={}),i==null)return"";typeof i=="function"&&(i=Ec(i,{...this.options,...c})),Array.isArray(i)||(i=[String(i)]);const f=c.returnDetails!==void 0?c.returnDetails:this.options.returnDetails,h=c.keySeparator!==void 0?c.keySeparator:this.options.keySeparator,{key:m,namespaces:A}=this.extractFromKey(i[i.length-1],c),g=A[A.length-1];let y=c.nsSeparator!==void 0?c.nsSeparator:this.options.nsSeparator;y===void 0&&(y=":");const v=c.lng||this.language,B=c.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(v?.toLowerCase()==="cimode")return B?f?{res:`${g}${y}${m}`,usedKey:m,exactUsedKey:m,usedLng:v,usedNS:g,usedParams:this.getUsedParamsDetails(c)}:`${g}${y}${m}`:f?{res:m,usedKey:m,exactUsedKey:m,usedLng:v,usedNS:g,usedParams:this.getUsedParamsDetails(c)}:m;const k=this.resolve(i,c);let L=k?.res;const P=k?.usedKey||m,Z=k?.exactUsedKey||m,J=["[object Number]","[object Function]","[object RegExp]"],H=c.joinArrays!==void 0?c.joinArrays:this.options.joinArrays,G=!this.i18nFormat||this.i18nFormat.handleAsObject,W=c.count!==void 0&&!fe(c.count),_=xu.hasDefaultValue(c),I=W?this.pluralResolver.getSuffix(v,c.count,c):"",ee=c.ordinal&&W?this.pluralResolver.getSuffix(v,c.count,{ordinal:!1}):"",ye=W&&!c.ordinal&&c.count===0,ve=ye&&c[`defaultValue${this.options.pluralSeparator}zero`]||c[`defaultValue${I}`]||c[`defaultValue${ee}`]||c.defaultValue;let De=L;G&&!L&&_&&(De=ve);const Ne=vg(De),pe=Object.prototype.toString.apply(De);if(G&&De&&Ne&&J.indexOf(pe)<0&&!(fe(H)&&Array.isArray(De))){if(!c.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const Oe=this.options.returnedObjectHandler?this.options.returnedObjectHandler(P,De,{...c,ns:A}):`key '${m} (${this.language})' returned an object instead of string.`;return f?(k.res=Oe,k.usedParams=this.getUsedParamsDetails(c),k):Oe}if(h){const Oe=Array.isArray(De),xe=Oe?[]:{},me=Oe?Z:P;for(const D in De)if(Object.prototype.hasOwnProperty.call(De,D)){const Y=`${me}${h}${D}`;_&&!L?xe[D]=this.translate(Y,{...c,defaultValue:vg(ve)?ve[D]:void 0,joinArrays:!1,ns:A}):xe[D]=this.translate(Y,{...c,joinArrays:!1,ns:A}),xe[D]===Y&&(xe[D]=De[D])}L=xe}}else if(G&&fe(H)&&Array.isArray(L))L=L.join(H),L&&(L=this.extendTranslation(L,i,c,o));else{let Oe=!1,xe=!1;!this.isValidLookup(L)&&_&&(Oe=!0,L=ve),this.isValidLookup(L)||(xe=!0,L=m);const D=(c.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&xe?void 0:L,Y=_&&ve!==L&&this.options.updateMissing;if(xe||Oe||Y){if(this.logger.log(Y?"updateKey":"missingKey",v,g,m,Y?ve:L),h){const N=this.resolve(m,{...c,keySeparator:!1});N&&N.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let F=[];const ie=this.languageUtils.getFallbackCodes(this.options.fallbackLng,c.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ie&&ie[0])for(let N=0;N<ie.length;N++)F.push(ie[N]);else this.options.saveMissingTo==="all"?F=this.languageUtils.toResolveHierarchy(c.lng||this.language):F.push(c.lng||this.language);const x=(N,X,Q)=>{const K=_&&Q!==L?Q:D;this.options.missingKeyHandler?this.options.missingKeyHandler(N,g,X,K,Y,c):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(N,g,X,K,Y,c),this.emit("missingKey",N,g,X,L)};this.options.saveMissing&&(this.options.saveMissingPlurals&&W?F.forEach(N=>{const X=this.pluralResolver.getSuffixes(N,c);ye&&c[`defaultValue${this.options.pluralSeparator}zero`]&&X.indexOf(`${this.options.pluralSeparator}zero`)<0&&X.push(`${this.options.pluralSeparator}zero`),X.forEach(Q=>{x([N],m+Q,c[`defaultValue${Q}`]||ve)})}):x(F,m,ve))}L=this.extendTranslation(L,i,c,k,o),xe&&L===m&&this.options.appendNamespaceToMissingKey&&(L=`${g}${y}${m}`),(xe||Oe)&&this.options.parseMissingKeyHandler&&(L=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${g}${y}${m}`:m,Oe?L:void 0,c))}return f?(k.res=L,k.usedParams=this.getUsedParamsDetails(c),k):L}extendTranslation(i,u,o,c,f){if(this.i18nFormat?.parse)i=this.i18nFormat.parse(i,{...this.options.interpolation.defaultVariables,...o},o.lng||this.language||c.usedLng,c.usedNS,c.usedKey,{resolved:c});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init({...o,interpolation:{...this.options.interpolation,...o.interpolation}});const A=fe(i)&&(o?.interpolation?.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let g;if(A){const v=i.match(this.interpolator.nestingRegexp);g=v&&v.length}let y=o.replace&&!fe(o.replace)?o.replace:o;if(this.options.interpolation.defaultVariables&&(y={...this.options.interpolation.defaultVariables,...y}),i=this.interpolator.interpolate(i,y,o.lng||this.language||c.usedLng,o),A){const v=i.match(this.interpolator.nestingRegexp),B=v&&v.length;g<B&&(o.nest=!1)}!o.lng&&c&&c.res&&(o.lng=this.language||c.usedLng),o.nest!==!1&&(i=this.interpolator.nest(i,(...v)=>f?.[0]===v[0]&&!o.context?(this.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${u[0]}`),null):this.translate(...v,u),o)),o.interpolation&&this.interpolator.reset()}const h=o.postProcess||this.options.postProcess,m=fe(h)?[h]:h;return i!=null&&m?.length&&o.applyPostProcessor!==!1&&(i=Q0.handle(m,i,u,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...c,usedParams:this.getUsedParamsDetails(o)},...o}:o,this)),i}resolve(i,u={}){let o,c,f,h,m;return fe(i)&&(i=[i]),i.forEach(A=>{if(this.isValidLookup(o))return;const g=this.extractFromKey(A,u),y=g.key;c=y;let v=g.namespaces;this.options.fallbackNS&&(v=v.concat(this.options.fallbackNS));const B=u.count!==void 0&&!fe(u.count),k=B&&!u.ordinal&&u.count===0,L=u.context!==void 0&&(fe(u.context)||typeof u.context=="number")&&u.context!=="",P=u.lngs?u.lngs:this.languageUtils.toResolveHierarchy(u.lng||this.language,u.fallbackLng);v.forEach(Z=>{this.isValidLookup(o)||(m=Z,!yg[`${P[0]}-${Z}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(m)&&(yg[`${P[0]}-${Z}`]=!0,this.logger.warn(`key "${c}" for languages "${P.join(", ")}" won't get resolved as namespace "${m}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),P.forEach(J=>{if(this.isValidLookup(o))return;h=J;const H=[y];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(H,y,J,Z,u);else{let W;B&&(W=this.pluralResolver.getSuffix(J,u.count,u));const _=`${this.options.pluralSeparator}zero`,I=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(B&&(u.ordinal&&W.indexOf(I)===0&&H.push(y+W.replace(I,this.options.pluralSeparator)),H.push(y+W),k&&H.push(y+_)),L){const ee=`${y}${this.options.contextSeparator||"_"}${u.context}`;H.push(ee),B&&(u.ordinal&&W.indexOf(I)===0&&H.push(ee+W.replace(I,this.options.pluralSeparator)),H.push(ee+W),k&&H.push(ee+_))}}let G;for(;G=H.pop();)this.isValidLookup(o)||(f=G,o=this.getResource(J,Z,G,u))}))})}),{res:o,usedKey:c,exactUsedKey:f,usedLng:h,usedNS:m}}isValidLookup(i){return i!==void 0&&!(!this.options.returnNull&&i===null)&&!(!this.options.returnEmptyString&&i==="")}getResource(i,u,o,c={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(i,u,o,c):this.resourceStore.getResource(i,u,o,c)}getUsedParamsDetails(i={}){const u=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=i.replace&&!fe(i.replace);let c=o?i.replace:i;if(o&&typeof i.count<"u"&&(c.count=i.count),this.options.interpolation.defaultVariables&&(c={...this.options.interpolation.defaultVariables,...c}),!o){c={...c};for(const f of u)delete c[f]}return c}static hasDefaultValue(i){const u="defaultValue";for(const o in i)if(Object.prototype.hasOwnProperty.call(i,o)&&u===o.substring(0,u.length)&&i[o]!==void 0)return!0;return!1}}class xg{constructor(i){this.options=i,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ra.create("languageUtils")}getScriptPartFromCode(i){if(i=Hi(i),!i||i.indexOf("-")<0)return null;const u=i.split("-");return u.length===2||(u.pop(),u[u.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(u.join("-"))}getLanguagePartFromCode(i){if(i=Hi(i),!i||i.indexOf("-")<0)return i;const u=i.split("-");return this.formatLanguageCode(u[0])}formatLanguageCode(i){if(fe(i)&&i.indexOf("-")>-1){let u;try{u=Intl.getCanonicalLocales(i)[0]}catch{}return u&&this.options.lowerCaseLng&&(u=u.toLowerCase()),u||(this.options.lowerCaseLng?i.toLowerCase():i)}return this.options.cleanCode||this.options.lowerCaseLng?i.toLowerCase():i}isSupportedCode(i){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(i=this.getLanguagePartFromCode(i)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(i)>-1}getBestMatchFromCodes(i){if(!i)return null;let u;return i.forEach(o=>{if(u)return;const c=this.formatLanguageCode(o);(!this.options.supportedLngs||this.isSupportedCode(c))&&(u=c)}),!u&&this.options.supportedLngs&&i.forEach(o=>{if(u)return;const c=this.getScriptPartFromCode(o);if(this.isSupportedCode(c))return u=c;const f=this.getLanguagePartFromCode(o);if(this.isSupportedCode(f))return u=f;u=this.options.supportedLngs.find(h=>{if(h===f)return h;if(!(h.indexOf("-")<0&&f.indexOf("-")<0)&&(h.indexOf("-")>0&&f.indexOf("-")<0&&h.substring(0,h.indexOf("-"))===f||h.indexOf(f)===0&&f.length>1))return h})}),u||(u=this.getFallbackCodes(this.options.fallbackLng)[0]),u}getFallbackCodes(i,u){if(!i)return[];if(typeof i=="function"&&(i=i(u)),fe(i)&&(i=[i]),Array.isArray(i))return i;if(!u)return i.default||[];let o=i[u];return o||(o=i[this.getScriptPartFromCode(u)]),o||(o=i[this.formatLanguageCode(u)]),o||(o=i[this.getLanguagePartFromCode(u)]),o||(o=i.default),o||[]}toResolveHierarchy(i,u){const o=this.getFallbackCodes((u===!1?[]:u)||this.options.fallbackLng||[],i),c=[],f=h=>{h&&(this.isSupportedCode(h)?c.push(h):this.logger.warn(`rejecting language code not found in supportedLngs: ${h}`))};return fe(i)&&(i.indexOf("-")>-1||i.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&f(this.formatLanguageCode(i)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&f(this.getScriptPartFromCode(i)),this.options.load!=="currentOnly"&&f(this.getLanguagePartFromCode(i))):fe(i)&&f(this.formatLanguageCode(i)),o.forEach(h=>{c.indexOf(h)<0&&f(this.formatLanguageCode(h))}),c}}const Sg={zero:0,one:1,two:2,few:3,many:4,other:5},Eg={select:l=>l===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Kx{constructor(i,u={}){this.languageUtils=i,this.options=u,this.logger=ra.create("pluralResolver"),this.pluralRulesCache={}}addRule(i,u){this.rules[i]=u}clearCache(){this.pluralRulesCache={}}getRule(i,u={}){const o=Hi(i==="dev"?"en":i),c=u.ordinal?"ordinal":"cardinal",f=JSON.stringify({cleanedCode:o,type:c});if(f in this.pluralRulesCache)return this.pluralRulesCache[f];let h;try{h=new Intl.PluralRules(o,{type:c})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Eg;if(!i.match(/-|_/))return Eg;const A=this.languageUtils.getLanguagePartFromCode(i);h=this.getRule(A,u)}return this.pluralRulesCache[f]=h,h}needsPlural(i,u={}){let o=this.getRule(i,u);return o||(o=this.getRule("dev",u)),o?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(i,u,o={}){return this.getSuffixes(i,o).map(c=>`${u}${c}`)}getSuffixes(i,u={}){let o=this.getRule(i,u);return o||(o=this.getRule("dev",u)),o?o.resolvedOptions().pluralCategories.sort((c,f)=>Sg[c]-Sg[f]).map(c=>`${this.options.prepend}${u.ordinal?`ordinal${this.options.prepend}`:""}${c}`):[]}getSuffix(i,u,o={}){const c=this.getRule(i,o);return c?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${c.select(u)}`:(this.logger.warn(`no plural rule found for: ${i}`),this.getSuffix("dev",u,o))}}const Tg=(l,i,u,o=".",c=!0)=>{let f=jx(l,i,u);return!f&&c&&fe(u)&&(f=Sc(l,u,o),f===void 0&&(f=Sc(i,u,o))),f},tc=l=>l.replace(/\$/g,"$$$$");class Ix{constructor(i={}){this.logger=ra.create("interpolator"),this.options=i,this.format=i?.interpolation?.format||(u=>u),this.init(i)}init(i={}){i.interpolation||(i.interpolation={escapeValue:!0});const{escape:u,escapeValue:o,useRawValueToEscape:c,prefix:f,prefixEscaped:h,suffix:m,suffixEscaped:A,formatSeparator:g,unescapeSuffix:y,unescapePrefix:v,nestingPrefix:B,nestingPrefixEscaped:k,nestingSuffix:L,nestingSuffixEscaped:P,nestingOptionsSeparator:Z,maxReplaces:J,alwaysFormat:H}=i.interpolation;this.escape=u!==void 0?u:_x,this.escapeValue=o!==void 0?o:!0,this.useRawValueToEscape=c!==void 0?c:!1,this.prefix=f?Sl(f):h||"{{",this.suffix=m?Sl(m):A||"}}",this.formatSeparator=g||",",this.unescapePrefix=y?"":v||"-",this.unescapeSuffix=this.unescapePrefix?"":y||"",this.nestingPrefix=B?Sl(B):k||Sl("$t("),this.nestingSuffix=L?Sl(L):P||Sl(")"),this.nestingOptionsSeparator=Z||",",this.maxReplaces=J||1e3,this.alwaysFormat=H!==void 0?H:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const i=(u,o)=>u?.source===o?(u.lastIndex=0,u):new RegExp(o,"g");this.regexp=i(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=i(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=i(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(i,u,o,c){let f,h,m;const A=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},g=k=>{if(k.indexOf(this.formatSeparator)<0){const J=Tg(u,A,k,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(J,void 0,o,{...c,...u,interpolationkey:k}):J}const L=k.split(this.formatSeparator),P=L.shift().trim(),Z=L.join(this.formatSeparator).trim();return this.format(Tg(u,A,P,this.options.keySeparator,this.options.ignoreJSONStructure),Z,o,{...c,...u,interpolationkey:P})};this.resetRegExp();const y=c?.missingInterpolationHandler||this.options.missingInterpolationHandler,v=c?.interpolation?.skipOnVariables!==void 0?c.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:k=>tc(k)},{regex:this.regexp,safeValue:k=>this.escapeValue?tc(this.escape(k)):tc(k)}].forEach(k=>{for(m=0;f=k.regex.exec(i);){const L=f[1].trim();if(h=g(L),h===void 0)if(typeof y=="function"){const Z=y(i,f,c);h=fe(Z)?Z:""}else if(c&&Object.prototype.hasOwnProperty.call(c,L))h="";else if(v){h=f[0];continue}else this.logger.warn(`missed to pass in variable ${L} for interpolating ${i}`),h="";else!fe(h)&&!this.useRawValueToEscape&&(h=pg(h));const P=k.safeValue(h);if(i=i.replace(f[0],P),v?(k.regex.lastIndex+=h.length,k.regex.lastIndex-=f[0].length):k.regex.lastIndex=0,m++,m>=this.maxReplaces)break}}),i}nest(i,u,o={}){let c,f,h;const m=(A,g)=>{const y=this.nestingOptionsSeparator;if(A.indexOf(y)<0)return A;const v=A.split(new RegExp(`${y}[ ]*{`));let B=`{${v[1]}`;A=v[0],B=this.interpolate(B,h);const k=B.match(/'/g),L=B.match(/"/g);((k?.length??0)%2===0&&!L||L.length%2!==0)&&(B=B.replace(/'/g,'"'));try{h=JSON.parse(B),g&&(h={...g,...h})}catch(P){return this.logger.warn(`failed parsing options string in nesting for key ${A}`,P),`${A}${y}${B}`}return h.defaultValue&&h.defaultValue.indexOf(this.prefix)>-1&&delete h.defaultValue,A};for(;c=this.nestingRegexp.exec(i);){let A=[];h={...o},h=h.replace&&!fe(h.replace)?h.replace:h,h.applyPostProcessor=!1,delete h.defaultValue;const g=/{.*}/.test(c[1])?c[1].lastIndexOf("}")+1:c[1].indexOf(this.formatSeparator);if(g!==-1&&(A=c[1].slice(g).split(this.formatSeparator).map(y=>y.trim()).filter(Boolean),c[1]=c[1].slice(0,g)),f=u(m.call(this,c[1].trim(),h),h),f&&c[0]===i&&!fe(f))return f;fe(f)||(f=pg(f)),f||(this.logger.warn(`missed to resolve ${c[1]} for nesting ${i}`),f=""),A.length&&(f=A.reduce((y,v)=>this.format(y,v,o.lng,{...o,interpolationkey:c[1].trim()}),f.trim())),i=i.replace(c[0],f),this.regexp.lastIndex=0}return i}}const Jx=l=>{let i=l.toLowerCase().trim();const u={};if(l.indexOf("(")>-1){const o=l.split("(");i=o[0].toLowerCase().trim();const c=o[1].substring(0,o[1].length-1);i==="currency"&&c.indexOf(":")<0?u.currency||(u.currency=c.trim()):i==="relativetime"&&c.indexOf(":")<0?u.range||(u.range=c.trim()):c.split(";").forEach(h=>{if(h){const[m,...A]=h.split(":"),g=A.join(":").trim().replace(/^'+|'+$/g,""),y=m.trim();u[y]||(u[y]=g),g==="false"&&(u[y]=!1),g==="true"&&(u[y]=!0),isNaN(g)||(u[y]=parseInt(g,10))}})}return{formatName:i,formatOptions:u}},wg=l=>{const i={};return(u,o,c)=>{let f=c;c&&c.interpolationkey&&c.formatParams&&c.formatParams[c.interpolationkey]&&c[c.interpolationkey]&&(f={...f,[c.interpolationkey]:void 0});const h=o+JSON.stringify(f);let m=i[h];return m||(m=l(Hi(o),c),i[h]=m),m(u)}},Fx=l=>(i,u,o)=>l(Hi(u),o)(i);class Wx{constructor(i={}){this.logger=ra.create("formatter"),this.options=i,this.init(i)}init(i,u={interpolation:{}}){this.formatSeparator=u.interpolation.formatSeparator||",";const o=u.cacheInBuiltFormats?wg:Fx;this.formats={number:o((c,f)=>{const h=new Intl.NumberFormat(c,{...f});return m=>h.format(m)}),currency:o((c,f)=>{const h=new Intl.NumberFormat(c,{...f,style:"currency"});return m=>h.format(m)}),datetime:o((c,f)=>{const h=new Intl.DateTimeFormat(c,{...f});return m=>h.format(m)}),relativetime:o((c,f)=>{const h=new Intl.RelativeTimeFormat(c,{...f});return m=>h.format(m,f.range||"day")}),list:o((c,f)=>{const h=new Intl.ListFormat(c,{...f});return m=>h.format(m)})}}add(i,u){this.formats[i.toLowerCase().trim()]=u}addCached(i,u){this.formats[i.toLowerCase().trim()]=wg(u)}format(i,u,o,c={}){const f=u.split(this.formatSeparator);if(f.length>1&&f[0].indexOf("(")>1&&f[0].indexOf(")")<0&&f.find(m=>m.indexOf(")")>-1)){const m=f.findIndex(A=>A.indexOf(")")>-1);f[0]=[f[0],...f.splice(1,m)].join(this.formatSeparator)}return f.reduce((m,A)=>{const{formatName:g,formatOptions:y}=Jx(A);if(this.formats[g]){let v=m;try{const B=c?.formatParams?.[c.interpolationkey]||{},k=B.locale||B.lng||c.locale||c.lng||o;v=this.formats[g](m,k,{...y,...c,...B})}catch(B){this.logger.warn(B)}return v}else this.logger.warn(`there was no format function for ${g}`);return m},i)}}const Px=(l,i)=>{l.pending[i]!==void 0&&(delete l.pending[i],l.pendingCount--)};class eS extends zu{constructor(i,u,o,c={}){super(),this.backend=i,this.store=u,this.services=o,this.languageUtils=o.languageUtils,this.options=c,this.logger=ra.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=c.maxParallelReads||10,this.readingCalls=0,this.maxRetries=c.maxRetries>=0?c.maxRetries:5,this.retryTimeout=c.retryTimeout>=1?c.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(o,c.backend,c)}queueLoad(i,u,o,c){const f={},h={},m={},A={};return i.forEach(g=>{let y=!0;u.forEach(v=>{const B=`${g}|${v}`;!o.reload&&this.store.hasResourceBundle(g,v)?this.state[B]=2:this.state[B]<0||(this.state[B]===1?h[B]===void 0&&(h[B]=!0):(this.state[B]=1,y=!1,h[B]===void 0&&(h[B]=!0),f[B]===void 0&&(f[B]=!0),A[v]===void 0&&(A[v]=!0)))}),y||(m[g]=!0)}),(Object.keys(f).length||Object.keys(h).length)&&this.queue.push({pending:h,pendingCount:Object.keys(h).length,loaded:{},errors:[],callback:c}),{toLoad:Object.keys(f),pending:Object.keys(h),toLoadLanguages:Object.keys(m),toLoadNamespaces:Object.keys(A)}}loaded(i,u,o){const c=i.split("|"),f=c[0],h=c[1];u&&this.emit("failedLoading",f,h,u),!u&&o&&this.store.addResourceBundle(f,h,o,void 0,void 0,{skipCopy:!0}),this.state[i]=u?-1:2,u&&o&&(this.state[i]=0);const m={};this.queue.forEach(A=>{Ux(A.loaded,[f],h),Px(A,i),u&&A.errors.push(u),A.pendingCount===0&&!A.done&&(Object.keys(A.loaded).forEach(g=>{m[g]||(m[g]={});const y=A.loaded[g];y.length&&y.forEach(v=>{m[g][v]===void 0&&(m[g][v]=!0)})}),A.done=!0,A.errors.length?A.callback(A.errors):A.callback())}),this.emit("loaded",m),this.queue=this.queue.filter(A=>!A.done)}read(i,u,o,c=0,f=this.retryTimeout,h){if(!i.length)return h(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:i,ns:u,fcName:o,tried:c,wait:f,callback:h});return}this.readingCalls++;const m=(g,y)=>{if(this.readingCalls--,this.waitingReads.length>0){const v=this.waitingReads.shift();this.read(v.lng,v.ns,v.fcName,v.tried,v.wait,v.callback)}if(g&&y&&c<this.maxRetries){setTimeout(()=>{this.read.call(this,i,u,o,c+1,f*2,h)},f);return}h(g,y)},A=this.backend[o].bind(this.backend);if(A.length===2){try{const g=A(i,u);g&&typeof g.then=="function"?g.then(y=>m(null,y)).catch(m):m(null,g)}catch(g){m(g)}return}return A(i,u,m)}prepareLoading(i,u,o={},c){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),c&&c();fe(i)&&(i=this.languageUtils.toResolveHierarchy(i)),fe(u)&&(u=[u]);const f=this.queueLoad(i,u,o,c);if(!f.toLoad.length)return f.pending.length||c(),null;f.toLoad.forEach(h=>{this.loadOne(h)})}load(i,u,o){this.prepareLoading(i,u,{},o)}reload(i,u,o){this.prepareLoading(i,u,{reload:!0},o)}loadOne(i,u=""){const o=i.split("|"),c=o[0],f=o[1];this.read(c,f,"read",void 0,void 0,(h,m)=>{h&&this.logger.warn(`${u}loading namespace ${f} for language ${c} failed`,h),!h&&m&&this.logger.log(`${u}loaded namespace ${f} for language ${c}`,m),this.loaded(i,h,m)})}saveMissing(i,u,o,c,f,h={},m=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(u)){this.logger.warn(`did not save key "${o}" as the namespace "${u}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(o==null||o==="")){if(this.backend?.create){const A={...h,isUpdate:f},g=this.backend.create.bind(this.backend);if(g.length<6)try{let y;g.length===5?y=g(i,u,o,c,A):y=g(i,u,o,c),y&&typeof y.then=="function"?y.then(v=>m(null,v)).catch(m):m(null,y)}catch(y){m(y)}else g(i,u,o,c,m,A)}!i||!i[0]||this.store.addResource(i[0],u,o,c)}}}const Cg=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:l=>{let i={};if(typeof l[1]=="object"&&(i=l[1]),fe(l[1])&&(i.defaultValue=l[1]),fe(l[2])&&(i.tDescription=l[2]),typeof l[2]=="object"||typeof l[3]=="object"){const u=l[3]||l[2];Object.keys(u).forEach(o=>{i[o]=u[o]})}return i},interpolation:{escapeValue:!0,format:l=>l,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Og=l=>(fe(l.ns)&&(l.ns=[l.ns]),fe(l.fallbackLng)&&(l.fallbackLng=[l.fallbackLng]),fe(l.fallbackNS)&&(l.fallbackNS=[l.fallbackNS]),l.supportedLngs?.indexOf?.("cimode")<0&&(l.supportedLngs=l.supportedLngs.concat(["cimode"])),typeof l.initImmediate=="boolean"&&(l.initAsync=l.initImmediate),l),uu=()=>{},tS=l=>{Object.getOwnPropertyNames(Object.getPrototypeOf(l)).forEach(u=>{typeof l[u]=="function"&&(l[u]=l[u].bind(l))})};class _i extends zu{constructor(i={},u){if(super(),this.options=Og(i),this.services={},this.logger=ra,this.modules={external:[]},tS(this),u&&!this.isInitialized&&!i.isClone){if(!this.options.initAsync)return this.init(i,u),this;setTimeout(()=>{this.init(i,u)},0)}}init(i={},u){this.isInitializing=!0,typeof i=="function"&&(u=i,i={}),i.defaultNS==null&&i.ns&&(fe(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const o=Cg();this.options={...o,...this.options,...Og(i)},this.options.interpolation={...o.interpolation,...this.options.interpolation},i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const c=g=>g?typeof g=="function"?new g:g:null;if(!this.options.isClone){this.modules.logger?ra.init(c(this.modules.logger),this.options):ra.init(null,this.options);let g;this.modules.formatter?g=this.modules.formatter:g=Wx;const y=new xg(this.options);this.store=new bg(this.options.resources,this.options);const v=this.services;v.logger=ra,v.resourceStore=this.store,v.languageUtils=y,v.pluralResolver=new Kx(y,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==o.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),g&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(v.formatter=c(g),v.formatter.init&&v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new Ix(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new eS(c(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",(k,...L)=>{this.emit(k,...L)}),this.modules.languageDetector&&(v.languageDetector=c(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=c(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new xu(this.services,this.options),this.translator.on("*",(k,...L)=>{this.emit(k,...L)}),this.modules.external.forEach(k=>{k.init&&k.init(this)})}if(this.format=this.options.interpolation.format,u||(u=uu),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const g=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);g.length>0&&g[0]!=="dev"&&(this.options.lng=g[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(g=>{this[g]=(...y)=>this.store[g](...y)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(g=>{this[g]=(...y)=>(this.store[g](...y),this)});const m=Mi(),A=()=>{const g=(y,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),m.resolve(v),u(y,v)};if(this.languages&&!this.isInitialized)return g(null,this.t.bind(this));this.changeLanguage(this.options.lng,g)};return this.options.resources||!this.options.initAsync?A():setTimeout(A,0),m}loadResources(i,u=uu){let o=u;const c=fe(i)?i:this.language;if(typeof i=="function"&&(o=i),!this.options.resources||this.options.partialBundledLanguages){if(c?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return o();const f=[],h=m=>{if(!m||m==="cimode")return;this.services.languageUtils.toResolveHierarchy(m).forEach(g=>{g!=="cimode"&&f.indexOf(g)<0&&f.push(g)})};c?h(c):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(A=>h(A)),this.options.preload?.forEach?.(m=>h(m)),this.services.backendConnector.load(f,this.options.ns,m=>{!m&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),o(m)})}else o(null)}reloadResources(i,u,o){const c=Mi();return typeof i=="function"&&(o=i,i=void 0),typeof u=="function"&&(o=u,u=void 0),i||(i=this.languages),u||(u=this.options.ns),o||(o=uu),this.services.backendConnector.reload(i,u,f=>{c.resolve(),o(f)}),c}use(i){if(!i)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!i.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return i.type==="backend"&&(this.modules.backend=i),(i.type==="logger"||i.log&&i.warn&&i.error)&&(this.modules.logger=i),i.type==="languageDetector"&&(this.modules.languageDetector=i),i.type==="i18nFormat"&&(this.modules.i18nFormat=i),i.type==="postProcessor"&&Q0.addPostProcessor(i),i.type==="formatter"&&(this.modules.formatter=i),i.type==="3rdParty"&&this.modules.external.push(i),this}setResolvedLanguage(i){if(!(!i||!this.languages)&&!(["cimode","dev"].indexOf(i)>-1)){for(let u=0;u<this.languages.length;u++){const o=this.languages[u];if(!(["cimode","dev"].indexOf(o)>-1)&&this.store.hasLanguageSomeTranslations(o)){this.resolvedLanguage=o;break}}!this.resolvedLanguage&&this.languages.indexOf(i)<0&&this.store.hasLanguageSomeTranslations(i)&&(this.resolvedLanguage=i,this.languages.unshift(i))}}changeLanguage(i,u){this.isLanguageChangingTo=i;const o=Mi();this.emit("languageChanging",i);const c=m=>{this.language=m,this.languages=this.services.languageUtils.toResolveHierarchy(m),this.resolvedLanguage=void 0,this.setResolvedLanguage(m)},f=(m,A)=>{A?this.isLanguageChangingTo===i&&(c(A),this.translator.changeLanguage(A),this.isLanguageChangingTo=void 0,this.emit("languageChanged",A),this.logger.log("languageChanged",A)):this.isLanguageChangingTo=void 0,o.resolve((...g)=>this.t(...g)),u&&u(m,(...g)=>this.t(...g))},h=m=>{!i&&!m&&this.services.languageDetector&&(m=[]);const A=fe(m)?m:m&&m[0],g=this.store.hasLanguageSomeTranslations(A)?A:this.services.languageUtils.getBestMatchFromCodes(fe(m)?[m]:m);g&&(this.language||c(g),this.translator.language||this.translator.changeLanguage(g),this.services.languageDetector?.cacheUserLanguage?.(g)),this.loadResources(g,y=>{f(y,g)})};return!i&&this.services.languageDetector&&!this.services.languageDetector.async?h(this.services.languageDetector.detect()):!i&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(h):this.services.languageDetector.detect(h):h(i),o}getFixedT(i,u,o){const c=(f,h,...m)=>{let A;typeof h!="object"?A=this.options.overloadTranslationOptionHandler([f,h].concat(m)):A={...h},A.lng=A.lng||c.lng,A.lngs=A.lngs||c.lngs,A.ns=A.ns||c.ns,A.keyPrefix!==""&&(A.keyPrefix=A.keyPrefix||o||c.keyPrefix);const g=this.options.keySeparator||".";let y;return A.keyPrefix&&Array.isArray(f)?y=f.map(v=>(typeof v=="function"&&(v=Ec(v,{...this.options,...h})),`${A.keyPrefix}${g}${v}`)):(typeof f=="function"&&(f=Ec(f,{...this.options,...h})),y=A.keyPrefix?`${A.keyPrefix}${g}${f}`:f),this.t(y,A)};return fe(i)?c.lng=i:c.lngs=i,c.ns=u,c.keyPrefix=o,c}t(...i){return this.translator?.translate(...i)}exists(...i){return this.translator?.exists(...i)}setDefaultNamespace(i){this.options.defaultNS=i}hasLoadedNamespace(i,u={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=u.lng||this.resolvedLanguage||this.languages[0],c=this.options?this.options.fallbackLng:!1,f=this.languages[this.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const h=(m,A)=>{const g=this.services.backendConnector.state[`${m}|${A}`];return g===-1||g===0||g===2};if(u.precheck){const m=u.precheck(this,h);if(m!==void 0)return m}return!!(this.hasResourceBundle(o,i)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||h(o,i)&&(!c||h(f,i)))}loadNamespaces(i,u){const o=Mi();return this.options.ns?(fe(i)&&(i=[i]),i.forEach(c=>{this.options.ns.indexOf(c)<0&&this.options.ns.push(c)}),this.loadResources(c=>{o.resolve(),u&&u(c)}),o):(u&&u(),Promise.resolve())}loadLanguages(i,u){const o=Mi();fe(i)&&(i=[i]);const c=this.options.preload||[],f=i.filter(h=>c.indexOf(h)<0&&this.services.languageUtils.isSupportedCode(h));return f.length?(this.options.preload=c.concat(f),this.loadResources(h=>{o.resolve(),u&&u(h)}),o):(u&&u(),Promise.resolve())}dir(i){if(i||(i=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!i)return"rtl";try{const c=new Intl.Locale(i);if(c&&c.getTextInfo){const f=c.getTextInfo();if(f&&f.direction)return f.direction}}catch{}const u=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],o=this.services?.languageUtils||new xg(Cg());return i.toLowerCase().indexOf("-latn")>1?"ltr":u.indexOf(o.getLanguagePartFromCode(i))>-1||i.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(i={},u){return new _i(i,u)}cloneInstance(i={},u=uu){const o=i.forkResourceStore;o&&delete i.forkResourceStore;const c={...this.options,...i,isClone:!0},f=new _i(c);if((i.debug!==void 0||i.prefix!==void 0)&&(f.logger=f.logger.clone(i)),["store","services","language"].forEach(m=>{f[m]=this[m]}),f.services={...this.services},f.services.utils={hasLoadedNamespace:f.hasLoadedNamespace.bind(f)},o){const m=Object.keys(this.store.data).reduce((A,g)=>(A[g]={...this.store.data[g]},A[g]=Object.keys(A[g]).reduce((y,v)=>(y[v]={...A[g][v]},y),A[g]),A),{});f.store=new bg(m,c),f.services.resourceStore=f.store}return f.translator=new xu(f.services,c),f.translator.on("*",(m,...A)=>{f.emit(m,...A)}),f.init(c,u),f.translator.options=c,f.translator.backendConnector.services.utils={hasLoadedNamespace:f.hasLoadedNamespace.bind(f)},f}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const nt=_i.createInstance();nt.createInstance=_i.createInstance;nt.createInstance;nt.dir;nt.init;nt.loadResources;nt.reloadResources;nt.use;nt.changeLanguage;nt.getFixedT;nt.t;nt.exists;nt.setDefaultNamespace;nt.hasLoadedNamespace;nt.loadNamespaces;nt.loadLanguages;const aS="Hi, I'm Daniil Ulyanov!",nS="A {{age}}-Year-Old Frontend Developer from Russia, who loves old school computer games, delicious pizza, Breakcore music and JavaScript!",lS="Developing projects since 2021.",iS="Type",rS="Name",uS="Level",oS="years",sS="since",cS="to",fS="Stack",dS="Freelance",hS="I gained my first experience as a freelance developer. I managed to practice with a lot of technologies. I was involved in a variety of tasks: starting from fixing bugs in CSS to refactoring the code of online shops from scratch using TypeScript + React.",pS="Linkiiie.ru",gS="I was involved in the development of a startup for aggregating links to useful tutorials. Specifically, I was engaged in code reviews and frontend development based on Figma designs. I managed to gain teamwork experience through close interaction with backend developers.",mS="DESC-Studio.ru",AS="I was part of an outsourced web development team. My responsibilities varied by projects: participating in code reviews, frontend development based on Figma designs (using React + TypeScript), and email layouts for mailings. I was interacting with designers, teamleader and backend developers. I managed to consolidate my knowledge of React, JavaScript and TypeScript, as well as gain experience with multilingual websites.",bS="QChart.io",yS="I managed to participate in the frontend development of a stock analytics startup. The project was written in React with the backend based on Nest.js with data aggregation over WebSockets. I was able to build the frontend using a combination of React + TypeScript + Zustand and participate in a lot of code reviews.",vS="Slex.io / Slavi.io / SimpleDev",xS="I was actively involved in the frontend development of four projects: a cryptocurrency wallet, a stock exchange, a telegram web-app (@richteddy_bot) and corporate website based on React / Next.js + TypeScript. The projects allowed me to reveal my skills in a variety of tasks: from component layout to working with a large number of factories processing APIs, long polling connection APIs showing locations of different items on YandexMaps, creating clicker-apps (Hamster Combat styled like), creating custom admin-panels and etc. Constantly participated in code reviews on GitLab.",SS="where can you find me?",ES="Coded and designed by Daniil Ulyanov in 2025",TS="Project version",wS="Check the Repo!",CS="Русская версия",OS={welcomeTitle:aS,welcomeDescription:nS,welcomeWorkingSince:lS,knowledgesType:iS,knowledgesName:rS,knowledgesLevel:uS,knowledgesYears:oS,experienceSince:sS,experienceTo:cS,experienceStack:fS,experienceFreelanceTitle:dS,experienceFreelanceDescription:hS,experienceLinkiiieTitle:pS,experienceLinkiiieDescription:gS,experienceDESCTitle:mS,experienceDESCDescription:AS,experienceQChartTitle:bS,experienceQChartDescription:yS,experienceSlexTitle:vS,experienceSlexDescription:xS,contactsTitle:SS,codedAndDesigned:ES,projectVersion:TS,checkTheRepo:wS,switchToLanguage:CS},RS="Привет, я Даниил Ульянов!",DS="{{age}}-летний фронтенд-разработчик из России, который очень любит олдскульные игры, вкусную пиццу, брейккор и JavaScript!",BS="Разрабатываю проекты с 2021 года.",zS="Навык",MS="Технология",NS="Опыт",kS="лет",LS="c",$S="по",QS="Стек",US="Фриланс",jS="Я обрёл свой первый опыт в качестве фриланс-разработчика. Мне удалось попрактиковаться с большим количеством технологий. Занимался простыми и сложными тасками: от CSS-багфиксов до переписывания небольших магазинов с нуля на TypeScript + React.",HS="Linkiiie.ru",_S="Я участвовал в разработке стартапа по агрегации ссылок на полезные руководства. В частности, занимался код-ревью и фронтенд-разработкой по дизайну на Figma. Обрёл опыт командной работы благодаря тесному взаимодействию с бэкенд-разработчиками.",GS="DESC-Studio.ru",YS="Я был частью команды по веб-разработке на аутсорсе. Мои обязанности различались по проектам: участие в код-ревью, фронтенд-разработке по дизайну Figma (на React + TypeScript) и вёрстке писем для рассылок. Взаимодействовал с дизайнерами, тимлидом и бэкенд-разработчиками. Удалось закрепить знания React, JavaScript и TypeScript, а также обрести опыт работы с многоязычными сайтами.",XS="QChart.io",VS="Я смог принять участие в фронтенд-разработке стартапа по биржевой аналитике. Проект был написан на React с бэкендом на Nest.js с агрегацией данных через веб-сокеты. Мне удалось создать фронтенд на сочетании React + TypeScript + Zustand и поучаствовать с большим количеством код-ревью.",qS="Slex.io / Slavi.io / SimpleDev",ZS="Я принимал активное участие в разработке интерфейса четырех проектов: криптовалютного кошелька, крипто-биржи, telegram web-app (@richteddy_bot) и корпоративного сайта на базе React / Next.js + TypeScript. Проекты позволили мне раскрыть свои навыки в самых разных задачах: от обычной вёрстки Реакт-компонентов до работы с большим количеством API-фабрик, лонг-поллинг API, показывающих местоположение различных объектов на Яндекс-картах, создания приложений-кликеров (в стиле Hamster Combat), создания пользовательских панелей администратора и т.д. Постоянно участвовал в обзорах кода на GitLab.",KS="где можно меня найти?",IS="Разработано Даниилом Ульяновым в 2025 году",JS="Версия проекта",FS="Глянуть репозиторий!",WS="English version",PS={welcomeTitle:RS,welcomeDescription:DS,welcomeWorkingSince:BS,knowledgesType:zS,knowledgesName:MS,knowledgesLevel:NS,knowledgesYears:kS,experienceSince:LS,experienceTo:$S,experienceStack:QS,experienceFreelanceTitle:US,experienceFreelanceDescription:jS,experienceLinkiiieTitle:HS,experienceLinkiiieDescription:_S,experienceDESCTitle:GS,experienceDESCDescription:YS,experienceQChartTitle:XS,experienceQChartDescription:VS,experienceSlexTitle:qS,experienceSlexDescription:ZS,contactsTitle:KS,codedAndDesigned:IS,projectVersion:JS,checkTheRepo:FS,switchToLanguage:WS},j0={en:{translation:OS},ru:{translation:PS}};nt.use(zx).init({resources:j0,lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}});const ou=Object.keys(j0),Rg="language",eE=z(Mn)`
    padding: 5px 10px !important;
    height: auto;

    display: flex;
    gap: 10px;

    img {
        height: 50px;
    }

    p {
        font-size: var(--sub-size);
    }

    
    @media (max-width: ${He.prmd}) {
        padding: 10px 15px !important;

        img {
            height: 30px;
        }
    }
`,tE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU8AAAD4CAYAAABsdWSLAAAABHNCSVQICAgIfAhkiAAACHpJREFUeJzt3FuopQUZgOF/Oc5opnksqbxJsiINGoIOJJqCHaB0OpihoxlppUNiIkZEXUQJimlampZleCgMyrJAU6LsgGgElRgWHSAkk9SZPY7O7LX3XquLug/eX/dWfJ77j+9frLVe/qtvMgzDZGjq3JjZMTuBZ7b5s2l2txELAZ6zxBMgEE+AQDwBAvEECMQTIBBPgEA8AQLxBAjEEyAQT4BAPAEC8QQIxBMg2H2IZ95O/fjVm+rSPZ7/gmvL3GQy2b/unM/7xarJpF3CG7OzG3O1b8zzuhb4dIk/v2EYhqH+BMfsrGbz+dY6u+vJhQ/X2ZuuOOuHZc6bJ0AgngCBeAIE4gkQiCdAIJ4AgXgCBOIJEIgnQCCeAIF4AgTiCRCIJ0CQryoN6/dKl5GGYRgu+vtv0nWkfS65oK4c/ra0e569/Zd/SXNbt+/MO9fCZ7e8Jc8+evi7nroHeZodeP+P8uznrvz5U/cgq+CAfZ+X5t525MvzzkPXL6e57edfnK+mnfvSjd+os8Mw3FqGvHkCBOIJEIgnQCCeAIF4AgTiCRCIJ0AgngCBeAIE4gkQiCdAIJ4AgXgCBOIJEOSTdNPFpXw+atf27Wlu+YQtdeXw4rNPzrNnnbYpzf3snr/mnXf+up3Bmy6t5J3z2TzP7lh8og1O2kXEMQ4Y8Tkf27Yjz25Yvy7NvfXNh+WdR7/+ZWluesMP886tV307zS0dnJMyLL1wuQ/HBnrzBAjEEyAQT4BAPAEC8QQIxBMgEE+AQDwBAvEECMQTIBBPgEA8AQLxBAh2r4OL0+W89MDvX5Xmdnzre3nn45dfl2d3/eSXae6oiy/IOzeeeVSa+8Gdf8w7V0ZcG5rNZ22wr8yWV+KzDsNwxGEH59lNx706ze29fSHvXNh8fppbeqBd9RqGYdjz7FPS3L6nvzfvXDyn/78rb54AgXgCBOIJEIgnQCCeAIF4AgTiCRCIJ0AgngCBeAIE4gkQiCdAIJ4AgXgCBCNO0i3lpVfceE+ae//x78g7D3j70Xl24TOXprlt79mSd+551slp7rTT3p13row41Tab19tyq3+Tbjbi9N6pJ2zMszuvvyXNLVz9nbxz5fBD09y+t34t73xsw15p7puxC8Mw7kRm5c0TIBBPgEA8AQLxBAjEEyAQT4BAPAEC8QQIxBMgEE+AQDwBAvEECMQTIBBPgKCfpFvsJ+nOPvkNaW7c8bJ2JmsYhmG/ay4ctXk1LY84KzcZsXc2X1mDrc3KiJN0Y552w+ZNqzo3DP15x/zXDopztQvDMAy3//S3ebby5gkQiCdAIJ4AgXgCBOIJEIgnQCCeAIF4AgTiCRCIJ0AgngCBeAIE4gkQ5KtK0+lyXrqw8V1xcvUv8PxXvTEz5nnH3ZBabSuzds1psgZf6faNx4+YHvO9rMXv97nx250ecdyq7/TmCRCIJ0AgngCBeAIE4gkQiCdAIJ4AgXgCBOIJEIgnQCCeAIF4AgTiCRCIJ0CQT9ItLk7z0q07F/IsT5/5vJ8Sm8TbcrPZ6p8ve+zJrau+c63U72UtfgtjTKdLq77TmydAIJ4AgXgCBOIJEIgnQCCeAIF4AgTiCRCIJ0AgngCBeAIE4gkQiCdA0K8qTZfz0ocW/pln10a9EjPmYtDqX6YZ87wH7f2iVd9ZPbLjkRHTz67v9Lnyy9216KoSwLOCeAIE4gkQiCdAIJ4AgXgCBOIJEIgnQCCeAIF4AgTiCRCIJ0AgngCBeAIE/STdiBNQr/rTfXmWZ6Z/v+6YNrj6F+mGVz7whzw7WYt7a/xf0w98cdV3evMECMQTIBBPgEA8AQLxBAjEEyAQT4BAPAEC8QQIxBMgEE+AQDwBAvEECPJVpem0X1X6zJfuTHMfOen1eefBT2zLs/MvXJ7mdnvwobxz5fQT09y6k07IO8dYma2syd5iZWWWZ+cjzkDNbr41za371nf7zkNe0gY/fU7e+fDz90tzX7v53rxzcXGaZytvngCBeAIE4gkQiCdAIJ4AgXgCBOIJEIgnQCCeAIF4AgTiCRCIJ0AgngCBeAIEI07SLeelnzrjyDQ3ufr6vHP+4zvy7JOveUWa2+OGL+edjw3r09y1X/153vnJM4/Ks7N5P9W22paW+/m8i77+izx7xonHprn9j23/l2EYhumFl6a5vc44L+886J3HpblPfeyDeecdd96dZytvngCBeAIE4gkQiCdAIJ4AgXgCBOIJEIgnQCCeAIF4AgTiCRCIJ0AgngCBeAIE+STd4nQpL51s3tJ2LmzNO5c/8dE8u+6Yo9Pcjbfdl3fedOvv0tzOxX4q8LwP9dNns/msDa7BKbvllfiswzDc9os/59mf3fO3NLf5+Nfmne/7/GfT3I677so71112TZrb41f35p3T6SF5tvLmCRCIJ0AgngCBeAIE4gkQiCdAIJ4AgXgCBOIJEIgnQCCeAIF4AgTiCRDsPgxDOmuza9c0nzja9soD9y9zGy77fF053PuPx/PsV867Oc09+PD2vHMtLC+v5NnZLF4qmuSV2dJS/5w7d/VrYnX2iuvvzjtvueP+NLdl85vyzjded2Wa23bJZXnnrt/3Hg2xgd48AQLxBAjEEyAQT4BAPAEC8QQIxBMgEE+AQDwBAvEECMQTIBBPgEA8AQLxBAgmQwzo+hdvOiVv3XDQ5WVsMkzSKbthGIZhnq5O/W9xvJs2Zmc15sTbmMddg9Nyfemz7oM+J8yHeT8rt/jouXV06V+33FjmvHkCBOIJEIgnQCCeAIF4AgTiCRCIJ0AgngCBeAIE4gkQiCdAIJ4AgXgCBJOhn4nZMGLvPnFu3YidwDPbyojZx0fMTsuQN0+AQDwBAvEECMQTIBBPgEA8AQLxBAjEEyAQT4BAPAEC8QQIxBMgEE+AQDwBgv8AZ7CXNgRxrpwAAAAASUVORK5CYII=",aE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU8AAAD5CAYAAACnKbcuAAAABHNCSVQICAgIfAhkiAAABXVJREFUeJzt3LGOlGUUgOHvhw1EAU000dpyCxOtaBQLr0dpvQ3svBRNNHFDYaW0JiZagImoq7A7wAy7+9tY2ICTd3QH2OfpT85kZ3j5qjONMabRnPbcprPAs2/ewmyaOxeXAZxp4gkQiCdAIJ4AgXgCBOIJEIgnQCCeAIF4AgTiCRCIJ0AgngCBeAIE4gkQ7Ix45u3GjRvvlrlr1659WebGGGOaplfr7DxvcukKWNc09cuR8zzfq7N7e3sflrnr169/V+a8PAEC8QQIxBMgEE+AQDwBAvEECMQTIBBPgEA8AQLxBAjEEyAQT4BAPAGCfFXp6tWrX5S53d3dfBnp4sWLdRR4DiyXy9yH5XL5eRx9swx5eQIE4gkQiCdAIJ4AgXgCBOIJEIgnQCCeAIF4AgTiCRCIJ0AgngCBeAIE4gkQ5JN0Y4zXytDjx4/jus1m53lOc9NU/zx9J/zTtn6Dm+ytNvy8r9fRMuTlCRCIJ0AgngCBeAIE4gkQiCdAIJ4AgXgCBOIJEIgnQCCeAIF4AgTiCRCIJ0CwUweXy2WaOzo6qisBnujRo0enus/LEyAQT4BAPAEC8QQIxBMgEE+AQDwBAvEECMQTIBBPgEA8AQLxBAjEEyDIV5VWq1Wac1UJ+D/UJlVengCBeAIE4gkQiCdAIJ4AgXgCBOIJEIgnQCCeAIF4AgTiCRCIJ0AgngCBeAIE+STdJ5/9kubOX/imrtzIFOfmLezcxLY+7yZ7ebptfS/P2+/3aHnvP/sc6/DyBAjEEyAQT4BAPAEC8QQIxBMgEE+AQDwBAvEECMQTIBBPgEA8AQLxBAjEEyDIJ+n+2F+kuXfe260rWcNZOl92VjgzuJ5bN38+1X1engCBeAIE4gkQiCdAIJ4AgXgCBOIJEIgnQCCeAIF4AgTiCRCIJ0AgngBBvqq0WKzS3N3fHtSVrMEFnhePS1nrWRy2JlVengCBeAIE4gkQiCdAIJ4AgXgCBOIJEIgnQCCeAIF4AgTiCRCIJ0AgngCBeAIE/STd/UWa+/XPZV0J8ESLg9akyssTIBBPgEA8AQLxBAjEEyAQT4BAPAEC8QQIxBMgEE+AQDwBAvEECMQTIMhXlR4ePkhzP9z8tq7cyDS1/yfm+eTUd7KuOc5NW9jJevp3Mx+3JlX+dQME4gkQiCdAIJ4AgXgCBOIJEIgnQCCeAIF4AgTiCRCIJ0AgngCBeAIE4gkQ5JN0t976Ks298cH7dSXAE939ei/NvX277fPyBAjEEyAQT4BAPAEC8QQIxBMgEE+AQDwBAvEECMQTIBBPgEA8AQLxBAjEEyDIJ+lW+7+3udvx/hPrmTaYnbe0l6fb1veyyd4tWO3vn+o+L0+AQDwBAvEECMQTIBBPgEA8AQLxBAjEEyAQT4BAPAEC8QQIxBMgEE+AIF9VOlku29zhQV3JOlzgefG4lLWWk1VrUuXlCRCIJ0AgngCBeAIE4gkQiCdAIJ4AgXgCBOIJEIgnQCCeAIF4AgTiCRCIJ0CwM+LRqgfnzi3K3MGPP10qc2OM8dIrV+oo8Bx4eL+frHw4tSaN2EAvT4BAPAEC8QQIxBMgEE+AQDwBAvEECMQTIBBPgEA8AQLxBAjEEyAQT4BAPAGCfJLu7snRR2Xu6M6dT8vcGGNM3y8u19nj4+M2mP46f5s2mOXf1e9mk+9lk9/DGXF+ZyfPzpcvHdbZ/csvf1zXliEvT4BAPAEC8QQIxBMgEE+AQDwBAvEECMQTIBBPgEA8AQLxBAjEEyAQT4BgGv3GzIU4dyXOjTHG+Q1mgWdfPH82xhjjIM6typCXJ0AgngCBeAIE4gkQiCdAIJ4AgXgCBOIJEIgnQCCeAIF4AgTiCRCIJ0AgngDBX4+itOeZt4yBAAAAAElFTkSuQmCC";function nE({currentLanguage:l}){switch(l){case"en":return q.jsx("img",{src:aE,alt:"ruIcon"});case"ru":return q.jsx("img",{src:tE,alt:"gbIcon"});default:return q.jsx("img",{src:"",alt:"lang-not-found"})}}function lE(){const{t:l}=zl();R.useEffect(()=>{const o=new URLSearchParams(window.location.search).get(Rg);ou.forEach(c=>{o===c&&nt.changeLanguage(c)})},[]);const i=()=>{const u=nt.language===ou[0]?ou[1]:ou[0],o=new URL(window.location.href);o.searchParams.set(Rg,u),nt.changeLanguage(u),window.history.replaceState({},"",o.toString())};return q.jsxs(eE,{onClick:i,children:[q.jsx(nE,{currentLanguage:nt.language}),q.jsx("p",{children:l("switchToLanguage")})]})}const iE=z.footer`
    display: grid;
    gap: 8px;
`,rE=z.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    z-index: 2;

    &::after {
        content: '';

        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: -1;

        height: 2px;
        width: 100%;

        background-color: black;
    }
`,uE=z.p`
    padding: 0 10px;
    margin: 0 auto;

    background-color: #c6c6c6;
    font-size: var(--description-size);

    display: inline-block;

    @media (max-width: ${He.sm}) {
        padding: 0 5px;
        max-width: 185px;

        text-align: center;
    }
`,oE=z.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    @media (max-width: ${He.sm}) {
        flex-direction: column;
    }

    @media (max-width: 715px) {
        flex-direction: column;
    }
`,sE=z.div`
    &, * {
        font-weight: bold;
        font-size: var(--description-size);
    }

    @media (max-width: ${He.sm}) {
        text-align: center;

        display: grid;
    }

    @media (max-width: ${He.xs}) {
        display: grid;
        justify-content: center;

        a {
            width: max-content;
            margin: 0 auto;
        }
    }
`;function cE(){const{t:l}=zl();return q.jsxs(iE,{children:[q.jsx(rE,{children:q.jsx(uE,{children:l("codedAndDesigned")})}),q.jsxs(oE,{children:[q.jsx(lE,{}),q.jsxs(sE,{children:[l("projectVersion"),": ","2.0.0","."," ",q.jsx("a",{href:"https://github.com/kitten20/personal-website",children:l("checkTheRepo")})]})]})]})}function fE({children:l}){const[i,u]=R.useState(!1),o=R.useRef(null),c=()=>{o.current&&(o.current.scrollTop=0),u(!0)},f=()=>u(!1);return q.jsxs(q.Fragment,{children:[q.jsxs(ux,{style:{transform:i?"translateY(-300%)":"initial"},children:[q.jsx(dx,{children:q.jsx(Mn,{onClick:c,children:q.jsx(fx,{})})}),q.jsx(cx,{children:q.jsxs(sx,{ref:o,children:[l,q.jsx(cE,{}),q.jsx(yx,{})]})})]}),q.jsx(rx,{openWindow:f})]})}const Jt=l=>(l?new Date(l):new Date).getFullYear(),Ca=l=>(l?new Date(l):new Date).toLocaleDateString(),dE=z.div`
    @media (min-width: ${He.prmd}) {
        &, & > div {
            height: 100%;
            overflow: auto;
        }   
    }
`,hE=z(D0)`
    height: 100%;

    display: flex;
    flex-direction: column;

    * {
        font-weight: bold;
        font-size: var(--sub-size);
    }
`,Dg=z(R0)`
    width: 100%;

    display: flex;

    &:hover {
        img {
            filter: invert(1);
        }
    }
`,ac=z(O0)`
    &:first-child {
        width: 12.5%;
    }

    &:nth-child(2) {
        width: 43.75%;
    }

    &:last-child {
        width: 43.75%;
        padding-right: 26px;
        
        @media (max-width: ${He.prmd}) {
            padding-right: 8px;
        }
    }

    @media (max-width: ${He.prmd}) {
        &:first-child {
            width: 25%;
        }

        &:nth-child(2), &:last-child {
            width: 37.5%;
        }
    }
`,pE=z(C0)`
    display: flex;

    tr {
        display: contents;
    }
`,gE=z(T0)`
    height: 100%;
    padding: 5px 0;

    display: grid;
    gap: 5px;

    @media (max-width: ${He.prmd}) {
        overflow: visible;
    }
`,nc=z(w0)`
    text-align: center;

    &:first-child {
        width: 12.5%;
    }

    &:nth-child(2), &:last-child {
        width: 43.75%;
    }

    @media (max-width: ${He.prmd}) {
        &:first-child {
            width: 25%;
        }

        &:nth-child(2), &:last-child {
            width: 37.5%;
        }
    }
`,mE=z.img`
    height: 34px;
`,AE=Jt();function bE({rows:l}){const{t:i}=zl();return q.jsx(dE,{children:q.jsxs(hE,{children:[q.jsx(pE,{children:q.jsxs(Dg,{children:[q.jsx(ac,{children:i("knowledgesType")}),q.jsx(ac,{children:i("knowledgesName")}),q.jsx(ac,{children:i("knowledgesLevel")})]})}),q.jsx(gE,{children:l.map((u,o)=>q.jsxs(Dg,{children:[q.jsx(nc,{children:q.jsx(mE,{src:u.imgSrc,alt:u.imgSrc,draggable:!1})}),q.jsx(nc,{children:i(u.name)}),q.jsxs(nc,{children:[AE-u.experienceSince,"+ ",i("knowledgesYears")]})]},o))})]})})}const yE=z.div`
    display: flex;
    gap: 12px;

    @media (max-width: ${He.prmd}) {
        flex-direction: column;
    }
`,vE=z(Du)`
    min-width: 386px;
    width: min-content;
    padding: 2px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    img {
        width: 100%;
    }

    @media (max-width: ${He.prmd}) {
        min-width: 300px;
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: ${He.sm}) {
        min-width: 250px;
    }
`,xE=z.div`
    display: grid;
    justify-content: space-between;
    gap: 15px;

    @media (min-width: ${He.prmd}) {
        max-height: 386px;
    }

    @media (max-width: ${He.prmd}) {
        max-width: 300px;
        margin-left: auto;
        margin-right: auto;
    }
`,SE=z.h1`
    font-size: var(--title-size);

    @media (max-width: ${He.prmd}) {
        text-align: center;
    }
`,Bg=z.p`
    font-size: var(--description-size);

    @media (max-width: ${He.prmd}) {
        text-align: center;
    }
`,EE=z(bE)`
    height: 100%;
`,TE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAAXNSR0IArs4c6QAAAAZQTFRFAAAAR3BMgOdWxwAAAAJ0Uk5T/wDltzBKAAAAQElEQVR42mOgEmA8+ABIHP8BIj4AifMKQOIcA4w4DyKOw5UcBBEHbBgYFI/IMDAUnwOy/s8HitX3Awk55gcIcwE7GhazNCMZygAAAABJRU5ErkJggg==",wE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAAXNSR0IArs4c6QAAAAZQTFRFAAAAR3BMgOdWxwAAAAJ0Uk5T/wDltzBKAAAAP0lEQVR42mOgDmD8f/ABkDj+A0R8YGCQ4VcAEnwMMIIfRLA/ABE/gAQjiGCwARIsMiAlIJY8SIwfRDA/QBgMALWLEGSo5F45AAAAAElFTkSuQmCC",CE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAAXNSR0IArs4c6QAAAAZQTFRFR3BMAAAAnyqEUQAAAAF0Uk5TAEDm2GYAAABkSURBVAjXY2BAAw/YGRgYf8g3MDD2GDYwMLMlHGBgZj5wgIGRLQEoxmMAJP7/B0rMkDzAwL+B9wODxMN2CQaDx8d5GBLSn7FBCDAXLAFWAlYM1gYxAGQU2FCw8WCLwFaCLUcFAMmXJeFlIAyaAAAAAElFTkSuQmCC",OE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAAZQTFRFR3BMAAAAnyqEUQAAAAF0Uk5TAEDm2GYAAABpSURBVHjanZNBCgQxDMOk/396L3uY0BQN40tDLSikNkOqykU+FPaCuKh8LV/L1wTK1wSGD+ckc/4EzPfO2wEIAdgAAQgBeADoBFBve/gfAcjtM9Y1bYBQgaASBRVKqFhTxYDq1vvyZv1/z9ACxz0whCYAAAAASUVORK5CYII=",RE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAAZQTFRFR3BMAAAAnyqEUQAAAAF0Uk5TAEDm2GYAAABlSURBVHja1dM5EgAhDANBzf8/vaFYbLmcosiFOuHSLwCgEHBSnQlNap8FzIIYA+ouDDjHsuzJuQATYAtq74IZ8AbQDPYnSd/jkdgLuou+FtQ/MRkoAIsz7oOIH2P8ojdQzQm0zwfRagGqvrHm5QAAAABJRU5ErkJggg==",DE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAAlQTFRFR3BMAAAAAAAAFmsJkwAAAAJ0Uk5TAO9GJjLRAAAAVElEQVR42r3RMQrAQAhE0cm//6EDKVKMybjCsr/UBxZqWzQDKmAvABcXEAEzwJNfgACYATDhE0pDQGgJEOtBfyIRvf3uE5EV95Xos7T3L0ehGOh4NyYYAx+I4/dvAAAAAElFTkSuQmCC",BE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAAZQTFRFR3BMAAAAnyqEUQAAAAF0Uk5TAEDm2GYAAABlSURBVHjatdJJCsQwDEXBX/e/dO9aECkWGKJVTL1FPORmgKO+J0Uwc60YuYaZ56BzcPSs/gg6270HRi4Ppg3jfFFImy8K/w/MSXXYHhrbj9D9UXQPtaZ72NzpoLbg6AHkPgjkbn7QGgDUQnmSPAAAAABJRU5ErkJggg==",zE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAAXNSR0IArs4c6QAAAAZQTFRFR3BMAAAAnyqEUQAAAAF0Uk5TAEDm2GYAAABCSURBVHjadYuxDQAhEMN8Yo9f5deiO0ZjMERQhEQFKdzEZi8nIEFIjSL1K/xuj/wA/S7yXviwcmQgjPJCTIBhVANYNGQ0cQu7BuAAAAAASUVORK5CYII=",ME=Jt()-Jt("2006-07-31"),NE=[{imgSrc:TE,name:"JavaScript",experienceSince:Jt("2021-06-21")},{imgSrc:CE,name:"React",experienceSince:Jt("2022-11-09")},{imgSrc:BE,name:"SCSS",experienceSince:Jt("2022-12-19")},{imgSrc:wE,name:"TypeScript",experienceSince:Jt("2023-08-18")},{imgSrc:OE,name:"Next.js",experienceSince:Jt("2023-08-18")},{imgSrc:RE,name:"Github",experienceSince:Jt("2021-01-16")},{imgSrc:DE,name:"Gitlab",experienceSince:Jt("2023-08-18")},{imgSrc:zE,name:"Figma",experienceSince:Jt("2021-02-05")}];function kE(){const{t:l}=zl();return q.jsxs(yE,{children:[q.jsx(vE,{children:q.jsx("img",{src:"avatar-image.png",alt:"avatar"})}),q.jsxs(xE,{children:[q.jsx(SE,{children:l("welcomeTitle")}),q.jsx(Bg,{children:l("welcomeDescription",{age:ME})}),q.jsx(Bg,{children:l("welcomeWorkingSince")}),q.jsx(EE,{rows:NE})]})]})}const LE=z(Du)`
    width: 100%;
    padding: 15px 20px;

    background-color: black;

    display: grid;
    gap: 25px;

    @media (max-width: ${He.sm}) {
        padding: 15px 10px;
        max-width: 300px;
        margin: 0 auto;
    }
`,$E=z.div`
    display: grid;
    gap: 5px;
`,QE=z.p`
    color: white;
    font-size: var(--sub-size);
`,UE=z.p`
    color: var(--light-blue-color);
    font-size: var(--sub-size);
`,jE=z.p`
    color: white;
    font-size: var(--sub-size);
`,zg=z.span`
    opacity: 0;
    font-size: var(--sub-size) !important;
`,HE=[{title:"experienceFreelanceTitle",stack:["HTML","CSS","SCSS","JavaScript","TypeScript","React","Styled-components"],description:"experienceFreelanceDescription",startDate:Ca("2021-06-21")},{title:"experienceLinkiiieTitle",stack:["JavaScript","SCSS","GitHub","Figma"],description:"experienceLinkiiieDescription",startDate:Ca("2021-12-19"),endDate:Ca("2022-07-13")},{title:"experienceDESCTitle",stack:["HTML","CSS","SCSS (+modules)","JavaScript","TypeScript","React","GitHub"],description:"experienceDESCDescription",startDate:Ca("2022-08-22"),endDate:Ca("2023-06-27")},{title:"experienceQChartTitle",stack:["TypeScript","React","Styled-Components","WebSockets","GitHub","Figma"],description:"experienceQChartDescription",startDate:Ca("2022-11-09"),endDate:Ca("2023-01-10")},{title:"experienceSlexTitle",stack:["HTML","CSS","SCSS","JavaScript","TypeScript","React","Styled-components"],description:"experienceSlexDescription",startDate:Ca("2023-08-18"),endDate:Ca("2025-06-16")}];function _E(){const{t:l}=zl();return q.jsx(LE,{children:HE.map(({title:i,startDate:u,endDate:o,stack:c,description:f},h)=>q.jsxs($E,{children:[q.jsxs(QE,{children:["• ",l(i)," — ",!o&&l("experienceSince")+" ",u,o&&" "+l("experienceTo")+" "+o]}),q.jsxs(UE,{children:[q.jsx(zg,{children:"•"})," ",l("experienceStack")+": "+c.join(", ")+"."]}),q.jsxs(jE,{children:[q.jsx(zg,{children:"•"})," ",l(f)]})]},h))})}const GE=z.a`
    width: 70px;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
        display: none;
    }

    @media (max-width: ${He.sm}) {
        width: 55px;
        height: 55px;
    }
`,YE=z(Mn)`
    padding: 10px;
    width: 100%;
    height: 100%;

    &:active {
        padding: inherit;

        img {
            filter: blur(1px);
        }
    }

    img {
        height: 50px;
        width: 50px;
    }

    @media (max-width: ${He.sm}) {
        img {
            width: 100%;
            height: 100%;
        }
    }
`;function Ni({href:l,imgSrc:i}){return q.jsx(GE,{href:l,target:"_blank",draggable:!1,children:q.jsx(YE,{primary:!0,children:q.jsx("img",{src:i,alt:i,draggable:!1})})})}const XE=z.div`
    display: grid;
    gap: 12px;
    justify-content: center;

    padding: 12px 0;
    margin: 0 auto;

    @media (max-width: ${He.sm}) {
        justify-content: initial;

        max-width: 300px;
        width: 100%;
        padding: 6px 0;
    }
`,VE=z.p`
    font-size: var(--title-size);
    text-transform: capitalize;
    text-align: center;
`,qE=z.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;

    @media (max-width: ${He.sm}) {
        justify-content: space-between;
        gap: 5px;
    }

    @media (max-width: ${He.xs}) {
        justify-content: center;

        max-width: 230px;
        margin: 0 auto;
    }
`,ZE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAAAXNSR0IArs4c6QAAAAZQTFRFR3BMAAAAnyqEUQAAAAF0Uk5TAEDm2GYAAAClSURBVHjardGxCQMxEETRFQoUqgGDSrnSdODGzp24hAsvEPpG6x2wU+NN9GCYSWT/uRFvnoFKoAcSKEHJjCRQhS2QCBRhE+ByZDgdDR4Mn+XO8GSWhQpXZXj5bAyfPTaGz+6dscpzTa7ylRaAMweOEpFPWWVaW0hcvmnWntYdeTccZknIQvnE8wtZMIQuNKHC4chCEgxhE5pQ2N/IgmFxXbj9+PEvjoy3iun0lsQAAAAASUVORK5CYII=",KE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA+AQMAAAChj48sAAAAAXNSR0IArs4c6QAAAAZQTFRFR3BMAAAAnyqEUQAAAAF0Uk5TAEDm2GYAAADUSURBVHjajc+9bcQwDAXgJxiISy0QQKN4lUwSqctaBrKIgyygkoWgd/wpLOCuuFd9gEiRhCZ3eBLZHJnsjoMcDmqg2QxnlERRMUjURnU1TAU9QAo0647+bRZS6ol97OR1XIrUc1Pk4YP7jRKQG8c01LEgngaqGMpc0A15xWXYJxjge4j2F1h+fp4ei91YdqaBhhPYFCV3IFNQfghQkX/ZEtmR/xjYuz9dihrY5NNwIgkMDRgOAN+GaYObYijKv0Jib7DHbXFlMjTfDpiwFEAcH8AX8AD+Pc2lmg/lawAAAABJRU5ErkJggg==",IE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAAAXNSR0IArs4c6QAAAAZQTFRFAAAAR3BMgOdWxwAAAAJ0Uk5T/wDltzBKAAAAdUlEQVR42s3SsQ2AIBCF4TMWlI7AKIzmdY7hKDLKjUBJQTgT75AEJMbOv/oKQnMPIlxZIIEBL5gBBVPFQ6bAeoUjxRpacOwxfOyo/dnAhxwxZsXGKNiZBAcHAVfEDkmQnCJYBS25gTdD4J/wXn/3exJ1JGU2J7K2kxO8C7xoAAAAAElFTkSuQmCC",JE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAAXNSR0IArs4c6QAAAAlQTFRFR3BMAAAAAAAAFmsJkwAAAAJ0Uk5TAOo2TMZeAAAAkklEQVR42u3V2wqEMAxF0XP2/3/0vE1ggiltBlTIflAEuyreqmmappdlQMfxzdoPCSJ3AdBWZIBdAHEgUAHWejTiGkBVBEAC1gJ/BjgFWABUADGwAsB5bA2UF+IzgJj8ECAAEOwDaVLSAayAfK5iu8yi2e2Am/eg/xS674GaQPqLIZT3l+Wv0T+AC8Cz4k/T9LQ+Zx4H+m1tkGYAAAAASUVORK5CYII=",FE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAAAXNSR0IArs4c6QAAAAZQTFRFR3BMAAAAnyqEUQAAAAF0Uk5TAEDm2GYAAACZSURBVHjardGxDcMgEIXhZ1G4CyN4FFbKBniDrMQoHoF0FIiXg1fgwkUs+RfF1wAnHZ7rBbwH2I+1dhyGjVYxxI52BkfAIuwTTkgTq3BcwAt5YhPKBYJQDV/yM5BicwN7qIshCs2AreBPULd4gl426C+DuosWyBqJ2DyZY+ujkn1UzwNYmeGEBAgAQgJcNfiObHA7sKTHlv4DNccM4Z2CgzQAAAAASUVORK5CYII=";function WE(){const{t:l}=zl();return q.jsxs(XE,{children:[q.jsx(VE,{children:l("contactsTitle")}),q.jsxs(qE,{children:[q.jsx(Ni,{href:"t.me/qMilly",imgSrc:ZE}),q.jsx(Ni,{href:"https://discordapp.com/users/426331342436040704",imgSrc:FE}),q.jsx(Ni,{href:"https://soundcloud.com/qrellyq/tracks",imgSrc:JE}),q.jsx(Ni,{href:"https://github.com/kitten20",imgSrc:KE}),q.jsx(Ni,{href:"https://www.linkedin.com/in/daniil-ulyanov-175819374/",imgSrc:IE})]})]})}function PE(){return q.jsxs(fE,{children:[q.jsx(kE,{}),q.jsx(_E,{}),q.jsx(WE,{})]})}const eT=z.div`
    width: 100vw;
    height: 100svh;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    overflow: hidden;
`,Tn=z.div`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    position: absolute;
    z-index: -10;

    background-image: radial-gradient(
        2px 2px at 50px 200px,
        #f97ee8,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(2px 2px at 40px 70px, #cc3d8b, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 120px 40px, #72a9e2, rgba(0, 0, 0, 0));
    background-repeat: repeat;
    background-size: 250px 250px;
    opacity: 0;
    animation: zoom 10s infinite;

  &:nth-child(2) {
    animation-delay: 1.3s;

    background-position: 10% 90%;
    background-image: radial-gradient(
        2px 2px at 50px 200px,
        #6c296a,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(2px 2px at 40px 70px, #da669a, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 120px 40px, #2a79a7, rgba(0, 0, 0, 0));
  }

  &:nth-child(3) {
    animation-delay: 2.6s;

    background-position: 20% 50%;
    background-size: 270px 500px;
    background-image: radial-gradient(
        2px 2px at 50px 200px,
        #8c4c83,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(2px 2px at 40px 70px, #f1cfb6, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 120px 40px, #40d5f7, rgba(0, 0, 0, 0));
  }

  &:nth-child(4) {
    animation-delay: 3.9s;

    background-position: 40% -80%;
    background-image: radial-gradient(
        2px 2px at 50px 200px,
        #97aac9,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(2px 2px at 40px 70px, #6c6697, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 120px 40px, #fbafcd, rgba(0, 0, 0, 0));
  }

  &:nth-child(5) {
    animation-delay: 5.2s;

    background-position: 90% -30%;
    background-image: radial-gradient(
        2px 2px at 50px 200px,
        #97aac9,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(2px 2px at 40px 70px, #6c6697, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 120px 40px, #fbafcd, rgba(0, 0, 0, 0));
  }

  &:nth-child(6) {
    animation-delay: 6.5s;

    background-position: 100% -50%;
    background-image: radial-gradient(
        2px 2px at 50px 200px,
        #97aac9,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(2px 2px at 40px 70px, #6c6697, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 120px 40px, #fbafcd, rgba(0, 0, 0, 0));
  }

  &:nth-child(7) {
    animation-delay: 7.8s;

    background-position: 120% -30%;
    background-image: radial-gradient(
        2px 2px at 50px 200px,
        #97aac9,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(2px 2px at 40px 70px, #6c6697, rgba(0, 0, 0, 0)),
      radial-gradient(3px 4px at 120px 40px, #fbafcd, rgba(0, 0, 0, 0));
  }

  @keyframes zoom {
    0% {
      opacity: 0;
      transform: scale(0.5);
      transform: rotate(5deg);
      animation-timing-function: ease-in;
    }

    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(2.2);
    }
  }
`;function tT(){return q.jsxs(eT,{children:[q.jsx(Tn,{}),q.jsx(Tn,{}),q.jsx(Tn,{}),q.jsx(Tn,{}),q.jsx(Tn,{}),q.jsx(Tn,{}),q.jsx(Tn,{})]})}var lc,Mg;function aT(){if(Mg)return lc;Mg=1;var l={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return lc=l,lc}var nT=aT();const lT=Ng(nT);function iT(){return q.jsxs(cy,{theme:lT,children:[q.jsx(tT,{}),q.jsx(W1,{}),q.jsx(PE,{})]})}fb.createRoot(document.getElementById("root")).render(q.jsx(iT,{}));
