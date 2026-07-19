"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var m=f(function(D,j){
var I=require('@stdlib/math-base-special-floor/dist'),K=128;function p(r,e,i,v,q,a,o,C){var n,u,c,t,s;if(r<=0)return a;if(n=q,u=C,r<=K){for(c=i[n],a[u]=e+c,n+=v,u+=o,s=1;s<r;s++)c+=i[n],a[u]=e+c,n+=v,u+=o;return a}return t=I(r/2),p(t,e,i,v,n,a,o,u),u+=(t-1)*o,p(r-t,a[u],i,v,n+t*v,a,o,u+o),a}j.exports=p
});var E=f(function(F,x){
var l=require('@stdlib/strided-base-stride2offset/dist'),L=m();function S(r,e,i,v,q,a){return L(r,e,i,v,l(r,v),q,a,l(r,a)),q}x.exports=S
});var _=f(function(G,R){
var Z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=E(),b=m();Z(O,"ndarray",b);R.exports=O
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),z=_(),w,B=h(g(__dirname,"./native.js"));k(B)?w=z:w=B;module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
