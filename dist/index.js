"use strict";var f=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var m=f(function(D,j){
var I=require('@stdlib/math-base-special-floor/dist'),K=128;function p(r,a,n,i,q,e,o,C){var v,u,c,t,s;if(r<=0)return e;if(v=q,u=C,r<=K){for(c=n[v],e[u]=a+c,v+=i,u+=o,s=1;s<r;s++)c+=n[v],e[u]=a+c,v+=i,u+=o;return e}return t=I(r/2),p(t,a,n,i,v,e,o,u),u+=(t-1)*o,p(r-t,e[u],n,i,v+t*i,e,o,u+o),e}j.exports=p
});var E=f(function(F,x){
var l=require('@stdlib/strided-base-stride2offset/dist'),L=m();function S(r,a,n,i,q,e){return L(r,a,n,i,l(r,i),q,e,l(r,e)),q}x.exports=S
});var _=f(function(G,R){
var Z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=E(),b=m();Z(O,"ndarray",b);R.exports=O
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),z=_(),w,B=h(g(__dirname,"./native.js"));k(B)?w=z:w=B;module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
