/// <reference types="./mod.d.ts" />
var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return n({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l,v=function(r,n,t){var e,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=o,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),v="get"in t,y="set"in t,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&a&&a.call(r,n,t.get),y&&u&&u.call(r,n,t.set),r},y=e,s=v,p=(l=t()?y:s,l);var b=function(r,n,t){p(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})},g=b,m=l;var d=function(r,n,t){m(r,n,{configurable:!1,enumerable:!1,get:t})},h=d,w=l;var A=function(r,n,t,e){w(r,n,{configurable:!1,enumerable:!1,get:t,set:e})},E=A;var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var O=function(){return j&&"symbol"==typeof Symbol.toStringTag},N=Object.prototype.toString,_=N;var T=function(r){return _.call(r)},I=Object.prototype.hasOwnProperty;var U=function(r,n){return null!=r&&I.call(r,n)},P="function"==typeof Symbol?Symbol.toStringTag:"",L=U,S=P,M=N;var F=T,R=function(r){var n,t,e;if(null==r)return M.call(r);t=r[S],n=L(r,S);try{r[S]=void 0}catch(n){return M.call(r)}return e=M.call(r),n?r[S]=t:delete r[S],e},x=O()?R:F,V=x;var B=Array.isArray?Array.isArray:function(r){return"[object Array]"===V(r)},G=B;var C=function(r){return"object"==typeof r&&null!==r&&!G(r)},Y=/./;var q=function(r){return"boolean"==typeof r},H=Boolean.prototype.toString;var k=x,X=function(r){try{return H.call(r),!0}catch(r){return!1}},J=O();var W=function(r){return"object"==typeof r&&(r instanceof Boolean||(J?X(r):"[object Boolean]"===k(r)))},z=q,D=W;var K=g,Q=function(r){return z(r)||D(r)},Z=W;K(Q,"isPrimitive",q),K(Q,"isObject",Z);var $=Q;var rr="object"==typeof self?self:null,nr="object"==typeof window?window:null,tr=$.isPrimitive,er=function(){return new Function("return this;")()},or=rr,ir=nr,ar="object"==typeof r?r:null;var ur=function(r){if(arguments.length){if(!tr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return er()}if(or)return or;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")},fr=ur(),cr=fr.document&&fr.document.childNodes,lr=Int8Array,vr=Y,yr=cr,sr=lr;var pr=function(){return"function"==typeof vr||"object"==typeof sr||"function"==typeof yr};var br=function(){return/^\s*function\s*([^(]*)/i},gr=br;g(gr,"REGEXP",br());var mr=gr,dr=B;var hr=function(r){return null!==r&&"object"==typeof r};g(hr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!dr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(hr));var wr=hr;var Ar=x,Er=mr.REGEXP,jr=function(r){return wr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Or=function(r){var n,t,e;if(("Object"===(t=Ar(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=Er.exec(e.toString()))return n[1]}return jr(r)?"Buffer":t},Nr=Or,_r=Nr;var Tr=function(r){var n;return null===r?"null":"object"===(n=typeof r)?_r(r).toLowerCase():n},Ir=Nr;var Ur=Tr,Pr=function(r){return Ir(r).toLowerCase()},Lr=pr()?Pr:Ur;var Sr=function(r){return"function"===Lr(r)},Mr=Object.getPrototypeOf;var Fr=function(r){return r.__proto__},Rr=x,xr=Fr;var Vr=function(r){var n=xr(r);return n||null===n?n:"[object Function]"===Rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Br=Mr,Gr=Vr,Cr=Sr(Object.getPrototypeOf)?Br:Gr;var Yr=function(r){return null==r?null:(r=Object(r),Cr(r))},qr=C,Hr=Sr,kr=Yr,Xr=U,Jr=x,Wr=Object.prototype;var zr=function(r){var n;return!!qr(r)&&(!(n=kr(r))||!Xr(r,"constructor")&&Xr(n,"constructor")&&Hr(n.constructor)&&"[object Function]"===Jr(n.constructor)&&Xr(n,"isPrototypeOf")&&Hr(n.isPrototypeOf)&&(n===Wr||function(r){var n;for(n in r)if(!Xr(r,n))return!1;return!0}(r)))},Dr=zr;var Kr=function(r){return function(){return r}};var Qr=function(){},Zr=Math.floor,$r=Zr;var rn=function(r){return $r(r)===r},nn=rn;var tn=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&nn(r.length)&&r.length>=0&&r.length<=9007199254740991},en=x,on="function"==typeof Uint32Array;var an=function(r){return on&&r instanceof Uint32Array||"[object Uint32Array]"===en(r)};var un=function(r){return"number"==typeof r},fn=Number,cn=fn.prototype.toString;var ln=x,vn=fn,yn=function(r){try{return cn.call(r),!0}catch(r){return!1}},sn=O();var pn=function(r){return"object"==typeof r&&(r instanceof vn||(sn?yn(r):"[object Number]"===ln(r)))},bn=un,gn=pn;var mn=g,dn=function(r){return bn(r)||gn(r)},hn=pn;mn(dn,"isPrimitive",un),mn(dn,"isObject",hn);var wn=dn,An=Number.POSITIVE_INFINITY,En=fn.NEGATIVE_INFINITY,jn=An,On=En,Nn=rn;var _n=function(r){return r<jn&&r>On&&Nn(r)},Tn=wn.isPrimitive,In=_n;var Un=function(r){return Tn(r)&&In(r)},Pn=wn.isObject,Ln=_n;var Sn=function(r){return Pn(r)&&Ln(r.valueOf())},Mn=Un,Fn=Sn;var Rn=g,xn=function(r){return Mn(r)||Fn(r)},Vn=Sn;Rn(xn,"isPrimitive",Un),Rn(xn,"isObject",Vn);var Bn=xn.isPrimitive;var Gn=function(r){return Bn(r)&&r>0},Cn=xn.isObject;var Yn=function(r){return Cn(r)&&r.valueOf()>0},qn=Gn,Hn=Yn;var kn=g,Xn=function(r){return qn(r)||Hn(r)},Jn=Yn;kn(Xn,"isPrimitive",Gn),kn(Xn,"isObject",Jn);var Wn=Xn,zn="function"==typeof Uint32Array?Uint32Array:null,Dn=an,Kn=zn;var Qn=function(){var r,n;if("function"!=typeof Kn)return!1;try{n=new Kn(n=[1,3.14,-3.14,4294967296,4294967297]),r=Dn(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Zn="function"==typeof Uint32Array?Uint32Array:void 0,$n=function(){throw new Error("not implemented")},rt=Qn()?Zn:$n,nt=An;var tt=function(r){return r!=r},et=function(r){return 0===r&&1/r===nt},ot=tt,it=En,at=An;var ut=function(r,n){var t,e,o,i;if(2===(t=arguments.length))return ot(r)||ot(n)?NaN:r===at||n===at?at:r===n&&0===r?et(r)?r:n:r>n?r:n;for(e=it,i=0;i<t;i++){if(ot(o=arguments[i])||o===at)return o;(o>e||o===e&&0===o&&et(o))&&(e=o)}return e};var ft=function(r,n){var t,e;return((t=(65535&(r>>>=0))>>>0)*(e=(65535&(n>>>=0))>>>0)>>>0)+((r>>>16>>>0)*e+t*(n>>>16>>>0)<<16>>>0)>>>0};var ct=function(r,n,t,e,o){var i,a,u,f;if(r<=0)return e;if(1===t&&1===o){if((u=r%8)>0)for(f=0;f<u;f++)e[f]=n[f];if(r<8)return e;for(f=u;f<r;f+=8)e[f]=n[f],e[f+1]=n[f+1],e[f+2]=n[f+2],e[f+3]=n[f+3],e[f+4]=n[f+4],e[f+5]=n[f+5],e[f+6]=n[f+6],e[f+7]=n[f+7];return e}for(i=t<0?(1-r)*t:0,a=o<0?(1-r)*o:0,f=0;f<r;f++)e[a]=n[i],i+=t,a+=o;return e};var lt=function(r,n,t,e,o,i,a){var u,f,c,l;if(r<=0)return o;if(u=e,f=a,1===t&&1===i){if((c=r%8)>0)for(l=0;l<c;l++)o[f]=n[u],u+=t,f+=i;if(r<8)return o;for(l=c;l<r;l+=8)o[f]=n[u],o[f+1]=n[u+1],o[f+2]=n[u+2],o[f+3]=n[u+3],o[f+4]=n[u+4],o[f+5]=n[u+5],o[f+6]=n[u+6],o[f+7]=n[u+7],u+=8,f+=8;return o}for(l=0;l<r;l++)o[f]=n[u],u+=t,f+=i;return o},vt=ct;g(vt,"ndarray",lt);var yt=vt;var st=function(){};var pt=Sr,bt=mr.REGEXP,gt=function(){return"foo"===st.name}();var mt=function(r){if(!1===pt(r))throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return gt?r.name:bt.exec(r.toString())[1]},dt=mt,ht=x,wt="function"==typeof Float64Array;var At="function"==typeof Float64Array?Float64Array:null,Et=function(r){return wt&&r instanceof Float64Array||"[object Float64Array]"===ht(r)},jt=At;var Ot=function(){var r,n;if("function"!=typeof jt)return!1;try{n=new jt([1,3.14,-3.14,NaN]),r=Et(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r},Nt=Ot;var _t="function"==typeof Float64Array?Float64Array:void 0,Tt=function(){throw new Error("not implemented")},It=Nt()?_t:Tt,Ut=x,Pt="function"==typeof Int8Array;var Lt="function"==typeof Int8Array?Int8Array:null,St=function(r){return Pt&&r instanceof Int8Array||"[object Int8Array]"===Ut(r)},Mt=Lt;var Ft=function(){var r,n;if("function"!=typeof Mt)return!1;try{n=new Mt([1,3.14,-3.14,128]),r=St(n)&&1===n[0]&&3===n[1]&&-3===n[2]&&-128===n[3]}catch(n){r=!1}return r};var Rt="function"==typeof Int8Array?Int8Array:void 0,xt=function(){throw new Error("not implemented")},Vt=Ft()?Rt:xt,Bt=x,Gt="function"==typeof Uint8Array;var Ct="function"==typeof Uint8Array?Uint8Array:null,Yt=function(r){return Gt&&r instanceof Uint8Array||"[object Uint8Array]"===Bt(r)},qt=Ct;var Ht=function(){var r,n;if("function"!=typeof qt)return!1;try{n=new qt(n=[1,3.14,-3.14,256,257]),r=Yt(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var kt="function"==typeof Uint8Array?Uint8Array:void 0,Xt=function(){throw new Error("not implemented")},Jt=Ht()?kt:Xt,Wt=x,zt="function"==typeof Uint8ClampedArray;var Dt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Kt=function(r){return zt&&r instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===Wt(r)},Qt=Dt;var Zt=function(){var r,n;if("function"!=typeof Qt)return!1;try{n=new Qt([-1,0,1,3.14,4.99,255,256]),r=Kt(n)&&0===n[0]&&0===n[1]&&1===n[2]&&3===n[3]&&5===n[4]&&255===n[5]&&255===n[6]}catch(n){r=!1}return r};var $t="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,re=function(){throw new Error("not implemented")},ne=Zt()?$t:re,te=x,ee="function"==typeof Int16Array;var oe="function"==typeof Int16Array?Int16Array:null,ie=function(r){return ee&&r instanceof Int16Array||"[object Int16Array]"===te(r)},ae=oe;var ue=function(){var r,n;if("function"!=typeof ae)return!1;try{n=new ae([1,3.14,-3.14,32768]),r=ie(n)&&1===n[0]&&3===n[1]&&-3===n[2]&&-32768===n[3]}catch(n){r=!1}return r};var fe="function"==typeof Int16Array?Int16Array:void 0,ce=function(){throw new Error("not implemented")},le=ue()?fe:ce,ve=x,ye="function"==typeof Uint16Array;var se="function"==typeof Uint16Array?Uint16Array:null,pe=function(r){return ye&&r instanceof Uint16Array||"[object Uint16Array]"===ve(r)},be=se;var ge=function(){var r,n;if("function"!=typeof be)return!1;try{n=new be(n=[1,3.14,-3.14,65536,65537]),r=pe(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var me="function"==typeof Uint16Array?Uint16Array:void 0,de=function(){throw new Error("not implemented")},he=ge()?me:de,we=x,Ae="function"==typeof Int32Array;var Ee="function"==typeof Int32Array?Int32Array:null,je=function(r){return Ae&&r instanceof Int32Array||"[object Int32Array]"===we(r)},Oe=Ee;var Ne=function(){var r,n;if("function"!=typeof Oe)return!1;try{n=new Oe([1,3.14,-3.14,2147483648]),r=je(n)&&1===n[0]&&3===n[1]&&-3===n[2]&&-2147483648===n[3]}catch(n){r=!1}return r};var _e="function"==typeof Int32Array?Int32Array:void 0,Te=function(){throw new Error("not implemented")},Ie=Ne()?_e:Te,Ue=x,Pe="function"==typeof Float32Array;var Le="function"==typeof Float32Array?Float32Array:null,Se=function(r){return Pe&&r instanceof Float32Array||"[object Float32Array]"===Ue(r)},Me=An,Fe=Le;var Re=function(){var r,n;if("function"!=typeof Fe)return!1;try{n=new Fe([1,3.14,-3.14,5e40]),r=Se(n)&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===Me}catch(n){r=!1}return r};var xe="function"==typeof Float32Array?Float32Array:void 0,Ve=function(){throw new Error("not implemented")},Be=Re()?xe:Ve,Ge=Nr,Ce=dt,Ye=Yr,qe=It,He=[It,Be,Ie,rt,le,he,Vt,Jt,ne],ke=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],Xe=Nt()?Ye(qe):Je;function Je(){}Xe="TypedArray"===Ce(Xe)?Xe:Je;var We=function(r,n){if("function"!=typeof n)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+n+"`.");return r instanceof n},ze=Nr,De=Yr,Ke=[[It,"Float64Array"],[Be,"Float32Array"],[Ie,"Int32Array"],[rt,"Uint32Array"],[le,"Int16Array"],[he,"Uint16Array"],[Vt,"Int8Array"],[Jt,"Uint8Array"],[ne,"Uint8ClampedArray"]];var Qe=function(r){var n,t;if("object"!=typeof r||null===r)return!1;if(r instanceof Xe)return!0;for(t=0;t<He.length;t++)if(r instanceof He[t])return!0;for(;r;){for(n=Ge(r),t=0;t<ke.length;t++)if(ke[t]===n)return!0;r=Ye(r)}return!1},Ze=function(r){var n,t;for(t=0;t<Ke.length;t++)if(We(r,Ke[t][0]))return Ke[t][1];for(;r;){for(n=ze(r),t=0;t<Ke.length;t++)if(n===Ke[t][1])return Ke[t][1];r=De(r)}};var $e=function(r){var n,t;if(!Qe(r))throw new TypeError("invalid argument. Must provide a typed array. Value: `"+r+"`.");for((n={}).type=Ze(r),n.data=[],t=0;t<r.length;t++)n.data.push(r[t]);return n},ro=Zr;var no=function(){return ro(1+4294967294*Math.random())>>>0},to=g,eo=h,oo=E,io=U,ao=Dr,uo=tn,fo=an,co=$.isPrimitive,lo=Wn.isPrimitive,vo=rt,yo=ut,so=ft,po=yt,bo=$e,go=no,mo=624,ho=[0,2567483615];function wo(r,n){var t;return t=n?"option":"argument",r.length<631?new RangeError("invalid "+t+". `state` array has insufficient length."):1!==r[0]?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: 1. Actual: "+r[0]+"."):3!==r[1]?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: 3. Actual: "+r[1]+"."):r[2]!==mo?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+mo+". Actual: "+r[2]+"."):1!==r[627]?new RangeError("invalid "+t+". `state` array has an incompatible section length. Expected: "+1..toString()+". Actual: "+r[627]+"."):r[629]!==r.length-630?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-630)+". Actual: "+r[629]+"."):null}function Ao(r,n,t){var e;for(r[0]=t>>>0,e=1;e<n;e++)t=((t=r[e-1]>>>0)^t>>>30)>>>0,r[e]=so(t,1812433253)+e>>>0;return r}function Eo(r,n,t,e){var o,i,a,u;for(i=1,a=0,u=yo(n,e);u>0;u--)o=r[i-1]>>>0,o=so(o=(o^o>>>30)>>>0,1664525)>>>0,r[i]=(r[i]>>>0^o)+t[a]+a>>>0,a+=1,(i+=1)>=n&&(r[0]=r[n-1],i=1),a>=e&&(a=0);for(u=n-1;u>0;u--)o=r[i-1]>>>0,o=so(o=(o^o>>>30)>>>0,1566083941)>>>0,r[i]=(r[i]>>>0^o)-i>>>0,(i+=1)>=n&&(r[0]=r[n-1],i=1);return r[0]=2147483648,r}function jo(r){var n,t;for(227,t=0;t<227;t++)n=2147483648&r[t]|2147483647&r[t+1],r[t]=r[t+397]^n>>>1^ho[1&n];for(623;t<623;t++)n=2147483648&r[t]|2147483647&r[t+1],r[t]=r[t-227]^n>>>1^ho[1&n];return n=2147483648&r[623]|2147483647&r[0],r[623]=r[396]^n>>>1^ho[1&n],r}var Oo=function(r){var n,t,e,o,i,a;if(e={},arguments.length){if(!ao(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(io(r,"copy")&&(e.copy=r.copy,!co(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(io(r,"state")){if(t=r.state,e.state=!0,!fo(t))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+t+"`.");if(a=wo(t,!0))throw a;!1===e.copy?n=t:(n=new vo(t.length),po(t.length,t,1,n,1)),t=new vo(n.buffer,n.byteOffset+3*n.BYTES_PER_ELEMENT,mo),o=new vo(n.buffer,n.byteOffset+630*n.BYTES_PER_ELEMENT,t[629])}if(void 0===o)if(io(r,"seed"))if(o=r.seed,e.seed=!0,lo(o)){if(o>4294967295)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");o>>>=0}else{if(!1===uo(o)||o.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");if(1===o.length){if(o=o[0],!lo(o))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");if(o>4294967295)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");o>>>=0}else i=o.length,(n=new vo(630+i))[0]=1,n[1]=3,n[2]=mo,n[627]=1,n[628]=mo,n[629]=i,po.ndarray(i,o,1,0,n,1,630),t=new vo(n.buffer,n.byteOffset+3*n.BYTES_PER_ELEMENT,mo),o=new vo(n.buffer,n.byteOffset+630*n.BYTES_PER_ELEMENT,i),t=Eo(t=Ao(t,mo,19650218),mo,o,i)}else o=go()>>>0}else o=go()>>>0;return void 0===t&&((n=new vo(631))[0]=1,n[1]=3,n[2]=mo,n[627]=1,n[628]=mo,n[629]=1,n[630]=o,t=new vo(n.buffer,n.byteOffset+3*n.BYTES_PER_ELEMENT,mo),o=new vo(n.buffer,n.byteOffset+630*n.BYTES_PER_ELEMENT,1),t=Ao(t,mo,o)),to(p,"NAME","mt19937"),eo(p,"seed",u),eo(p,"seedLength",f),oo(p,"state",v,y),eo(p,"stateLength",c),eo(p,"byteLength",l),to(p,"toJSON",s),to(p,"MIN",1),to(p,"MAX",4294967295),to(p,"normalized",b),to(b,"NAME",p.NAME),eo(b,"seed",u),eo(b,"seedLength",f),oo(b,"state",v,y),eo(b,"stateLength",c),eo(b,"byteLength",l),to(b,"toJSON",s),to(b,"MIN",0),to(b,"MAX",.9999999999999999),p;function u(){var r=n[629];return po(r,o,1,new vo(r),1)}function f(){return n[629]}function c(){return n.length}function l(){return n.byteLength}function v(){var r=n.length;return po(r,n,1,new vo(r),1)}function y(r){var i;if(!fo(r))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+r+"`.");if(i=wo(r,!1))throw i;!1===e.copy?e.state&&r.length===n.length?po(r.length,r,1,n,1):(n=r,e.state=!0):(r.length!==n.length&&(n=new vo(r.length)),po(r.length,r,1,n,1)),t=new vo(n.buffer,n.byteOffset+3*n.BYTES_PER_ELEMENT,mo),o=new vo(n.buffer,n.byteOffset+630*n.BYTES_PER_ELEMENT,n[629])}function s(){var r={type:"PRNG"};return r.name=p.NAME,r.state=bo(n),r.params=[],r}function p(){var r,e;return(e=n[628])>=mo&&(t=jo(t),e=0),r=t[e],n[628]=e+1,r^=r>>>11,r^=r<<7&2636928640,r^=r<<15&4022730752,(r^=r>>>18)>>>0}function b(){return 11102230246251565e-32*(67108864*(p()>>>5)+(p()>>>6))}},No=Oo({seed:no()});g(No,"factory",Oo);var _o=No,To=wn.isPrimitive,Io=tt;var Uo=function(r){return To(r)&&Io(r)},Po=wn.isObject,Lo=tt;var So=function(r){return Po(r)&&Lo(r.valueOf())},Mo=Uo,Fo=So;var Ro=g,xo=function(r){return Mo(r)||Fo(r)},Vo=So;Ro(xo,"isPrimitive",Uo),Ro(xo,"isObject",Vo);var Bo=wn.isPrimitive,Go=xo;var Co=function(r,n){return!Bo(r)||Go(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!Bo(n)||Go(n)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+n+"`."):r>=n?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+r+","+n+"]`."):null},Yo=rn;var qo=function(r){return Yo(r/2)};var Ho=function(r){return qo(r>0?r-1:r+1)},ko=An,Xo=En;var Jo=function(r){return r===ko||r===Xo},Wo=Math.sqrt;var zo,Do=function(r){return Math.abs(r)},Ko={uint16:he,uint8:Jt};(zo=new Ko.uint16(1))[0]=4660;var Qo,Zo,$o=52===new Ko.uint8(zo.buffer)[0];!0===$o?(Qo=1,Zo=0):(Qo=0,Zo=1);var ri=rt,ni={HIGH:Qo,LOW:Zo},ti=new It(1),ei=new ri(ti.buffer),oi=ni.HIGH,ii=ni.LOW;var ai=function(r,n){return ti[0]=n,r[0]=ei[oi],r[1]=ei[ii],r};var ui=function(r,n){return 1===arguments.length?ai([0,0],r):ai(r,n)},fi=rt,ci=!0===$o?0:1,li=new It(1),vi=new fi(li.buffer);var yi=function(r,n){return li[0]=r,vi[ci]=n>>>0,li[0]},si=yi;var pi=function(r){return 0|r},bi=rt,gi=!0===$o?1:0,mi=new It(1),di=new bi(mi.buffer);var hi,wi,Ai=function(r){return mi[0]=r,di[gi]};!0===$o?(hi=1,wi=0):(hi=0,wi=1);var Ei=rt,ji={HIGH:hi,LOW:wi},Oi=new It(1),Ni=new Ei(Oi.buffer),_i=ji.HIGH,Ti=ji.LOW;var Ii=function(r,n){return Ni[_i]=r,Ni[Ti]=n,Oi[0]},Ui=Ii,Pi=ui,Li=Ai,Si=Ui,Mi=[0,0];var Fi=function(r,n){var t,e;return Pi(Mi,r),t=Mi[0],t&=2147483647,e=Li(n),Si(t|=e&=2147483648,Mi[1])},Ri=Ho,xi=Fi,Vi=En,Bi=An;var Gi=function(r,n){return n===Vi?Bi:n===Bi?0:n>0?Ri(n)?r:0:Ri(n)?xi(Bi,r):Bi},Ci=Ai;var Yi=function(r,n){return(2147483647&Ci(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},qi=Do,Hi=An;var ki=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:qi(r)<1==(n===Hi)?0:Hi},Xi=rt,Ji=!0===$o?1:0,Wi=new It(1),zi=new Xi(Wi.buffer);var Di=function(r,n){return Wi[0]=r,zi[Ji]=n>>>0,Wi[0]};var Ki=Ai,Qi=si,Zi=Di,$i=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},ra=[1,1.5],na=[0,.5849624872207642],ta=[0,1.350039202129749e-8];var ea=si,oa=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var ia=Jo,aa=tt,ua=Do;var fa=function(r,n){return aa(n)||ia(n)?(r[0]=n,r[1]=0,r):0!==n&&ua(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var ca=Ai;var la=function(r){var n=ca(r);return(n=(2146435072&n)>>>20)-1023|0},va=An,ya=En,sa=tt,pa=Jo,ba=Fi,ga=function(r,n){return 1===arguments.length?fa([0,0],r):fa(r,n)},ma=la,da=ui,ha=Ui,wa=[0,0],Aa=[0,0];var Ea=function(r,n){var t,e;return 0===r||sa(r)||pa(r)?r:(ga(wa,r),n+=wa[1],(n+=ma(r=wa[0]))<-1074?ba(0,r):n>1023?r<0?ya:va:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,da(Aa,r),t=Aa[0],t&=2148532223,e*ha(t|=n+1023<<20,Aa[1])))},ja=Ea;var Oa=Ai,Na=Di,_a=si,Ta=pi,Ia=ja,Ua=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Pa=tt,La=Ho,Sa=Jo,Ma=rn,Fa=Wo,Ra=Do,xa=ui,Va=si,Ba=pi,Ga=En,Ca=An,Ya=Gi,qa=Yi,Ha=ki,ka=function(r,n,t){var e,o,i,a,u,f,c,l,v,y,s,p,b,g,m,d,h,w,A,E;return w=0,t<1048576&&(w-=53,t=Ki(n*=9007199254740992)),w+=(t>>20)-1023|0,t=1072693248|(A=1048575&t|0),A<=235662?E=0:A<767610?E=1:(E=0,w+=1,t-=1048576),e=524288+(t>>1|536870912),u=(h=1/((n=Zi(n,t))+(c=ra[E])))*((d=n-c)-(a=Qi(o=d*h,0))*(f=Zi(0,e+=E<<18))-a*(n-(f-c))),m=(i=o*o)*i*$i(i),f=Qi(f=3+(i=a*a)+(m+=u*(a+o)),0),b=(s=-7.028461650952758e-9*(v=Qi(v=(d=a*f)+(h=u*f+(m-(f-3-i))*o),0))+.9617966939259756*(h-(v-d))+ta[E])-((p=Qi(p=(y=.9617967009544373*v)+s+(l=na[E])+(g=w),0))-g-l-y),r[0]=p,r[1]=b,r},Xa=function(r,n){var t,e,o,i,a;return t=(a=1.9259629911266175e-8*(o=n-1)-1.4426950408889634*(o*o*oa(o)))-((e=ea(e=(i=1.4426950216293335*o)+a,0))-i),r[0]=e,r[1]=t,r},Ja=function(r,n,t){var e,o,i,a,u,f,c,l,v,y;return y=((v=2147483647&r|0)>>20)-1023|0,l=0,v>1071644672&&(e=((l=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-y>>>0,r<0&&(l=-l),n-=i=Na(0,e)),f=(u=.6931471805599453*(t-((i=_a(i=t+n,0))-n))+-1.904654299957768e-9*i)-((c=(a=.6931471824645996*i)+u)-a),o=c-(i=c*c)*Ua(i),r=Oa(c=1-(c*o/(o-2)-(f+c*f)-c)),r=Ta(r),c=(r+=l<<20>>>0)>>20<=0?Ia(c,l):Na(c,r)},Wa=1e300,za=1e-300,Da=[0,0],Ka=[0,0];var Qa=function r(n,t){var e,o,i,a,u,f,c,l,v,y,s,p,b,g;if(Pa(n)||Pa(t))return NaN;if(xa(Da,t),u=Da[0],0===Da[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return Fa(n);if(-.5===t)return 1/Fa(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Sa(t))return Ha(n,t)}if(xa(Da,n),a=Da[0],0===Da[1]){if(0===a)return Ya(n,t);if(1===n)return 1;if(-1===n&&La(t))return-1;if(Sa(n))return n===Ga?r(-0,-t):t<0?0:Ca}if(n<0&&!1===Ma(t))return(n-n)/(n-n);if(i=Ra(n),e=2147483647&a|0,o=2147483647&u|0,c=u>>>31|0,f=(f=a>>>31|0)&&La(t)?-1:1,o>1105199104){if(o>1139802112)return qa(n,t);if(e<1072693247)return 1===c?f*Wa*Wa:f*za*za;if(e>1072693248)return 0===c?f*Wa*Wa:f*za*za;s=Xa(Ka,i)}else s=ka(Ka,i,e);if(y=(t-(l=Va(t,0)))*s[0]+t*s[1],v=l*s[0],xa(Da,p=y+v),b=Ba(Da[0]),g=Ba(Da[1]),b>=1083179008){if(0!=(b-1083179008|g))return f*Wa*Wa;if(y+8008566259537294e-32>p-v)return f*Wa*Wa}else if((2147483647&b)>=1083231232){if(0!=(b-3230714880|g))return f*za*za;if(y<=p-v)return f*za*za}return f*(p=Ja(b,v,y))},Za=Qa;var $a=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},ru=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var nu=function(r,n){var t,e,o,i;return o=(i=r*r)*i,e=i*$a(i),e+=o*o*ru(i),(o=1-(t=.5*i))+(1-o-t+(i*e-r*n))},tu=-.16666666666666632;var eu=function(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(tu+o*t):r-(o*(.5*n-e*t)-n-e*tu)},ou=rt,iu=!0===$o?0:1,au=new It(1),uu=new ou(au.buffer);var fu=function(r){return au[0]=r,uu[iu]},cu=Zr,lu=ja,vu=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],yu=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],su=5.960464477539063e-8,pu=du(20),bu=du(20),gu=du(20),mu=du(20);function du(r){var n,t;for(n=[],t=0;t<r;t++)n.push(0);return n}function hu(r,n,t,e,o,i,a,u,f){var c,l,v,y,s,p,b,g,m;for(y=i,m=e[t],g=t,s=0;g>0;s++)l=su*m|0,mu[s]=m-16777216*l|0,m=e[g-1]+l,g-=1;if(m=lu(m,o),m-=8*cu(.125*m),m-=b=0|m,v=0,o>0?(b+=s=mu[t-1]>>24-o,mu[t-1]-=s<<24-o,v=mu[t-1]>>23-o):0===o?v=mu[t-1]>>23:m>=.5&&(v=2),v>0){for(b+=1,c=0,s=0;s<t;s++)g=mu[s],0===c?0!==g&&(c=1,mu[s]=16777216-g):mu[s]=16777215-g;if(o>0)switch(o){case 1:mu[t-1]&=8388607;break;case 2:mu[t-1]&=4194303}2===v&&(m=1-m,0!==c&&(m-=lu(1,o)))}if(0===m){for(g=0,s=t-1;s>=i;s--)g|=mu[s];if(0===g){for(p=1;0===mu[i-p];p++);for(s=t+1;s<=t+p;s++){for(f[u+s]=vu[a+s],l=0,g=0;g<=u;g++)l+=r[g]*f[u+(s-g)];e[s]=l}return hu(r,n,t+=p,e,o,i,a,u,f)}}if(0===m)for(t-=1,o-=24;0===mu[t];)t-=1,o-=24;else(m=lu(m,-o))>=16777216?(l=su*m|0,mu[t]=m-16777216*l|0,o+=24,mu[t+=1]=l):mu[t]=0|m;for(l=lu(1,o),s=t;s>=0;s--)e[s]=l*mu[s],l*=su;for(s=t;s>=0;s--){for(l=0,p=0;p<=y&&p<=t-s;p++)l+=yu[p]*e[s+p];gu[t-s]=l}for(l=0,s=t;s>=0;s--)l+=gu[s];for(n[0]=0===v?l:-l,l=gu[0]-l,s=1;s<=t;s++)l+=gu[s];return n[1]=0===v?l:-l,7&b}var wu=function(r,n,t,e){var o,i,a,u,f,c,l;for(4,(i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),c=i-(a=e-1),l=a+4,f=0;f<=l;f++)pu[f]=c<0?0:vu[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=a;c++)o+=r[c]*pu[a+(f-c)];bu[f]=o}return 4,hu(r,n,4,bu,u,4,i,a,pu)},Au=Math.round,Eu=Ai;var ju=Ai,Ou=fu,Nu=Ui,_u=wu,Tu=function(r,n,t){var e,o,i,a,u;return i=r-1.5707963267341256*(e=Au(.6366197723675814*r)),a=6077100506506192e-26*e,u=n>>20|0,t[0]=i-a,u-(Eu(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=i)-(i=o-(a=6077100506303966e-26*e))-a),t[0]=i-a,u-(Eu(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=i)-(i=o-(a=20222662487111665e-37*e))-a),t[0]=i-a)),t[1]=i-t[0]-a,e},Iu=1.5707963267341256,Uu=6077100506506192e-26,Pu=2*Uu,Lu=4*Uu,Su=[0,0,0],Mu=[0,0];var Fu=function(r,n){var t,e,o,i,a,u,f;if((o=2147483647&ju(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Tu(r,o,n):o<=1073928572?r>0?(f=r-Iu,n[0]=f-Uu,n[1]=f-n[0]-Uu,1):(f=r+Iu,n[0]=f+Uu,n[1]=f-n[0]+Uu,-1):r>0?(f=r-2*Iu,n[0]=f-Pu,n[1]=f-n[0]-Pu,2):(f=r+2*Iu,n[0]=f+Pu,n[1]=f-n[0]+Pu,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Tu(r,o,n):r>0?(f=r-3*Iu,n[0]=f-1.8231301519518578e-10,n[1]=f-n[0]-1.8231301519518578e-10,3):(f=r+3*Iu,n[0]=f+1.8231301519518578e-10,n[1]=f-n[0]+1.8231301519518578e-10,-3):1075388923===o?Tu(r,o,n):r>0?(f=r-4*Iu,n[0]=f-Lu,n[1]=f-n[0]-Lu,4):(f=r+4*Iu,n[0]=f+Lu,n[1]=f-n[0]+Lu,-4);if(o<1094263291)return Tu(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Ou(r),f=Nu(o-((e=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)Su[a]=0|f,f=16777216*(f-Su[a]);for(Su[2]=f,i=3;0===Su[i-1];)i-=1;return u=_u(Su,Mu,e,i),r<0?(n[0]=-Mu[0],n[1]=-Mu[1],-u):(n[0]=Mu[0],n[1]=Mu[1],u)},Ru=Ai,xu=nu,Vu=eu,Bu=Fu,Gu=[0,0];var Cu=Za,Yu=function(r){var n;if(n=Ru(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Vu(r,0);if(n>=2146435072)return NaN;switch(3&Bu(r,Gu)){case 0:return Vu(Gu[0],Gu[1]);case 1:return xu(Gu[0],Gu[1]);case 2:return-Vu(Gu[0],Gu[1]);default:return-xu(Gu[0],Gu[1])}};var qu=function(r,n,t){return n+Cu(Yu(1.5707963267948966*r()),2)*(t-n)},Hu=g,ku=h,Xu=E,Ju=Dr,Wu=Sr,zu=U,Du=Kr,Ku=Qr,Qu=_o.factory,Zu=tt,$u=$e,rf=Co,nf=qu;var tf=function(){var r,n,t,e,o,i;if(0===arguments.length)n=Qu();else if(1===arguments.length){if(!Ju(r=arguments[0]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(zu(r,"prng")){if(!Wu(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");n=r.prng}else n=Qu(r)}else{if(e=rf(o=arguments[0],i=arguments[1]))throw e;if(arguments.length>2){if(!Ju(r=arguments[2]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(zu(r,"prng")){if(!Wu(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");n=r.prng}else n=Qu(r)}else n=Qu()}return Hu(t=void 0===o?p:s,"NAME","arcsine"),r&&r.prng?(Hu(t,"seed",null),Hu(t,"seedLength",null),Xu(t,"state",Du(null),Ku),Hu(t,"stateLength",null),Hu(t,"byteLength",null),Hu(t,"toJSON",Du(null)),Hu(t,"PRNG",n)):(ku(t,"seed",a),ku(t,"seedLength",u),Xu(t,"state",l,v),ku(t,"stateLength",f),ku(t,"byteLength",c),Hu(t,"toJSON",y),Hu(t,"PRNG",n),n=n.normalized),t;function a(){return n.seed}function u(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function v(r){n.state=r}function y(){var r={type:"PRNG"};return r.name=t.NAME,r.state=$u(n.state),r.params=void 0===o?[]:[o,i],r}function s(){return nf(n,o,i)}function p(r,t){return Zu(r)||Zu(t)||r>=t?NaN:nf(n,r,t)}},ef=tf();g(ef,"factory",tf);var of=ef;export{of as default};
//# sourceMappingURL=mod.js.map
