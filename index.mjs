// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";var s=128;function n(r,e,i,d,o,a,m,f){var l,p,j,u,v;if(r<=0)return a;if(l=o,p=f,r<=s){for(j=0,v=0;v<r;v++)j+=i[l],a[p]=e+j,l+=d,p+=m;return a}return n(u=t(r/2),e,i,d,l,a,m,p),n(r-u,a[p+=(u-1)*m],i,d,l+u*d,a,m,p+m),a}function i(r,t,s,i,d,o){return n(r,t,s,i,e(r,i),d,o,e(r,o)),d}r(i,"ndarray",n);export{i as default,n as ndarray};
//# sourceMappingURL=index.mjs.map