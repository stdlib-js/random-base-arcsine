// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.13-esm/index.mjs";import{factory as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sin@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-half-pi@esm/index.mjs";function c(e,t){return!h(e)||u(e)?new TypeError(p("invalid argument. First argument must be a number and not NaN. Value: `%s`.",e)):!h(t)||u(t)?new TypeError(p("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",t)):e>=t?new RangeError(p("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",e,t)):null}function b(e,t,n){return t+j(f(g*e()),2)*(n-t)}function v(){var h,u,j,f,g,v;if(0===arguments.length)u=d();else if(1===arguments.length){if(!s(h=arguments[0]))throw new TypeError(p("0Op2h",h));if(i(h,"prng")){if(!r(h.prng))throw new TypeError(p("0Op7M","prng",h.prng));u=h.prng}else u=d(h)}else{if(f=c(g=arguments[0],v=arguments[1]))throw f;if(arguments.length>2){if(!s(h=arguments[2]))throw new TypeError(p("0Op2h",h));if(i(h,"prng")){if(!r(h.prng))throw new TypeError(p("0Op7M","prng",h.prng));u=h.prng}else u=d(h)}else u=d()}return e(j=void 0===g?M:T,"NAME","arcsine"),h&&h.prng?(e(j,"seed",null),e(j,"seedLength",null),n(j,"state",m(null),o),e(j,"stateLength",null),e(j,"byteLength",null),e(j,"toJSON",m(null)),e(j,"PRNG",u)):(t(j,"seed",x),t(j,"seedLength",y),n(j,"state",E,L),t(j,"stateLength",w),t(j,"byteLength",N),e(j,"toJSON",O),e(j,"PRNG",u),u=u.normalized),j;function x(){return u.seed}function y(){return u.seedLength}function w(){return u.stateLength}function N(){return u.byteLength}function E(){return u.state}function L(e){u.state=e}function O(){var e={type:"PRNG"};return e.name=j.NAME,e.state=a(u.state),e.params=void 0===g?[]:[g,v],e}function T(){return b(u,g,v)}function M(e,t){return l(e)||l(t)||e>=t?NaN:b(u,e,t)}}var x=v();e(x,"factory",v);export{x as default,v as factory};
//# sourceMappingURL=index.mjs.map