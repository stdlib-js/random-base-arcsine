// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.1-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sin@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-half-pi@v0.1.1-esm/index.mjs";function g(e,t){return!h(e)||j(e)?new TypeError(a("0nr6v,NI",e)):!h(t)||j(t)?new TypeError(a("0nr6w,NJ",t)):e>=t?new RangeError(a("0nrNK",e,t)):null}function v(e,t,n){return t+f(u(c*e()),2)*(n-t)}function b(){var h,j,f,u,c,b;if(0===arguments.length)j=m();else if(1===arguments.length){if(!s(h=arguments[0]))throw new TypeError(a("0nr2V,FD",h));if(i(h,"prng")){if(!r(h.prng))throw new TypeError(a("0nr6u,JI","prng",h.prng));j=h.prng}else j=m(h)}else{if(u=g(c=arguments[0],b=arguments[1]))throw u;if(arguments.length>2){if(!s(h=arguments[2]))throw new TypeError(a("0nr2V,FD",h));if(i(h,"prng")){if(!r(h.prng))throw new TypeError(a("0nr6u,JI","prng",h.prng));j=h.prng}else j=m(h)}else j=m()}return e(f=void 0===c?R:J,"NAME","arcsine"),h&&h.prng?(e(f,"seed",null),e(f,"seedLength",null),n(f,"state",o(null),d),e(f,"stateLength",null),e(f,"byteLength",null),e(f,"toJSON",o(null)),e(f,"PRNG",j)):(t(f,"seed",x),t(f,"seedLength",y),n(f,"state",E,L),t(f,"stateLength",w),t(f,"byteLength",N),e(f,"toJSON",T),e(f,"PRNG",j),j=j.normalized),f;function x(){return j.seed}function y(){return j.seedLength}function w(){return j.stateLength}function N(){return j.byteLength}function E(){return j.state}function L(e){j.state=e}function T(){var e={type:"PRNG"};return e.name=f.NAME,e.state=p(j.state),e.params=void 0===c?[]:[c,b],e}function J(){return v(j,c,b)}function R(e,t){return l(e)||l(t)||e>=t?NaN:v(j,e,t)}}var x=b();e(x,"factory",b);export{x as default,b as factory};
//# sourceMappingURL=index.mjs.map
