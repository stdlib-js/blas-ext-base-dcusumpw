"use strict";var p=function(r,u){return function(){return u||r((u={exports:{}}).exports,u),u.exports}};var l=p(function(A,x){
var C=require('@stdlib/math-base-special-floor/dist'),I=128;function m(r,u,n,i,c,e,a,o){var s,v,f,t,q;if(r<=0)return e;if(s=c,v=o,r<=I){for(f=0,q=0;q<r;q++)f+=n[s],e[v]=u+f,s+=i,v+=a;return e}return t=C(r/2),m(t,u,n,i,s,e,a,v),v+=(t-1)*a,m(r-t,e[v],n,i,s+t*i,e,a,v+a),e}x.exports=m
});var E=p(function(D,j){
var K=l();function L(r,u,n,i,c,e){var a,o;return r<=0?c:(i<0?a=(1-r)*i:a=0,e<0?o=(1-r)*e:o=0,K(r,u,n,i,a,c,e,o))}j.exports=L
});var _=p(function(F,R){
var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=E(),Z=l();S(O,"ndarray",Z);R.exports=O
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=_(),w,B=g(b(__dirname,"./native.js"));h(B)?w=k:w=B;module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
