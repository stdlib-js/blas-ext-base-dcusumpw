"use strict";var f=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var m=f(function(A,j){
var C=require('@stdlib/math-base-special-floor/dist'),I=128;function p(r,a,v,u,s,e,n,B){var t,i,q,o,c;if(r<=0)return e;if(t=s,i=B,r<=I){for(q=0,c=0;c<r;c++)q+=v[t],e[i]=a+q,t+=u,i+=n;return e}return o=C(r/2),p(o,a,v,u,t,e,n,i),i+=(o-1)*n,p(r-o,e[i],v,u,t+o*u,e,n,i+n),e}j.exports=p
});var E=f(function(D,x){
var l=require('@stdlib/strided-base-stride2offset/dist'),K=m();function L(r,a,v,u,s,e){return K(r,a,v,u,l(r,u),s,e,l(r,e)),s}x.exports=L
});var _=f(function(F,R){
var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=E(),Z=m();S(O,"ndarray",Z);R.exports=O
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=_(),w,d=g(b(__dirname,"./native.js"));h(d)?w=k:w=d;module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
