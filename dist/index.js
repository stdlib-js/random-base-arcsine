"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var h=s(function(re,q){
var f=require('@stdlib/assert-is-number/dist').isPrimitive,m=require('@stdlib/error-tools-fmtprodmsg/dist'),d=require('@stdlib/assert-is-nan/dist');function W(r,e){return !f(r)||d(r)?new TypeError(m('0nr6v',r)):!f(e)||d(e)?new TypeError(m('0nr6w',e)):r>=e?new RangeError(m('0nrEJ',r,e)):null;}q.exports=W
});var N=s(function(te,y){
var _=require('@stdlib/math-base-special-pow/dist'),k=require('@stdlib/math-base-special-sin/dist'),B=require('@stdlib/constants-float64-half-pi/dist');function C(r,e,t){return e+_(k(B*r()),2)*(t-e)}y.exports=C
});var c=s(function(ne,x){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),w=require('@stdlib/utils-define-nonenumerable-read-write-accessor/dist'),b=require('@stdlib/assert-is-plain-object/dist'),L=require('@stdlib/assert-is-function/dist'),O=require('@stdlib/assert-has-own-property/dist'),S=require('@stdlib/utils-constant-function/dist'),D=require('@stdlib/utils-noop/dist'),g=require('@stdlib/random-base-mt19937/dist').factory,E=require('@stdlib/math-base-assert-is-nan/dist'),K=require('@stdlib/array-to-json/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),Q=h(),R=N();function U(){var r,e,t,l,i,u;if(arguments.length===0)e=g();else if(arguments.length===1){if(r=arguments[0],!b(r))throw new TypeError(p('0nr2V',r));if(O(r,"prng")){if(!L(r.prng))throw new TypeError(p('0nr6u',"prng",r.prng));e=r.prng}else e=g(r)}else{if(i=arguments[0],u=arguments[1],l=Q(i,u),l)throw l;if(arguments.length>2){if(r=arguments[2],!b(r))throw new TypeError(p('0nr2V',r));if(O(r,"prng")){if(!L(r.prng))throw new TypeError(p('0nr6u',"prng",r.prng));e=r.prng}else e=g(r)}else e=g()}return i===void 0?t=I:t=H,a(t,"NAME","arcsine"),r&&r.prng?(a(t,"seed",null),a(t,"seedLength",null),w(t,"state",S(null),D),a(t,"stateLength",null),a(t,"byteLength",null),a(t,"toJSON",S(null)),a(t,"PRNG",e)):(o(t,"seed",V),o(t,"seedLength",j),w(t,"state",J,M),o(t,"stateLength",F),o(t,"byteLength",G),a(t,"toJSON",z),a(t,"PRNG",e),e=e.normalized),t;function V(){return e.seed}function j(){return e.seedLength}function F(){return e.stateLength}function G(){return e.byteLength}function J(){return e.state}function M(n){e.state=n}function z(){var n={};return n.type="PRNG",n.name=t.NAME,n.state=K(e.state),i===void 0?n.params=[]:n.params=[i,u],n}function H(){return R(e,i,u)}function I(n,v){return E(n)||E(v)||n>=v?NaN:R(e,n,v)}}x.exports=U
});var T=s(function(ae,P){
var X=c(),Y=X();P.exports=Y
});var Z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=T(),$=c();Z(A,"factory",$);module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map