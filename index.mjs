// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";var n=128;function t(r,s,i,a,d,o,f,l){var m,u,p,j,v;if(r<=0)return o;if(m=d,u=l,r<=n){for(p=0,v=0;v<r;v++)p+=i[m],o[u]=s+p,m+=a,u+=f;return o}return t(j=e(r/2),s,i,a,m,o,f,u),t(r-j,o[u+=(j-1)*f],i,a,m+j*a,o,f,u+f),o}function s(r,e,n,s,i,a){return r<=0?i:t(r,e,n,s,s<0?(1-r)*s:0,i,a,a<0?(1-r)*a:0)}r(s,"ndarray",t);export{s as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
