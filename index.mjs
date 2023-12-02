// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";function n(r,t,s,i,a,d,o,f){var l,m,u,p,j;if(r<=0)return d;if(l=a,m=f,r<=128){for(u=0,j=0;j<r;j++)u+=s[l],d[m]=t+u,l+=i,m+=o;return d}return n(p=e(r/2),t,s,i,l,d,o,m),n(r-p,d[m+=(p-1)*o],s,i,l+p*i,d,o,m+o),d}function t(r,e,t,s,i,a){return r<=0?i:n(r,e,t,s,s<0?(1-r)*s:0,i,a,a<0?(1-r)*a:0)}r(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
