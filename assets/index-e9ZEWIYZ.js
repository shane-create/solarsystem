(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const np=document.querySelector(".hamburger-wrapper"),Wg=document.querySelector(".add-button"),Xg=document.querySelector(".presets-container"),qg=document.querySelector(".title"),$g=document.querySelector(".menu"),jg=document.querySelector(".preset-saver"),ec=document.getElementById("saveButton"),Fu=document.getElementById("preset-input");ec.disabled=!0;let jr,nc;const Yg="/solarsystem/";let Aa,Xs,ph=[];function Kg(){np.classList.toggle("active"),$g.classList.toggle("active"),Xg.classList.toggle("active"),qg.classList.toggle("active")}function ip(){Wg.classList.toggle("active"),jg.classList.toggle("active"),np.classList.toggle("hide")}function Qg(){function i(n){const r=n.match(/v=([^&]+)/);return r?r[1]:null}fetch(`${Yg}/testJSON/songs.json`).then(n=>n.json()).then(n=>{ph=n.songs.map(r=>({num:r.num,id:i(r.url)})),t()}).catch(n=>console.error("Error loading songs:",n));function t(){const n=document.createElement("script");n.src="https://www.youtube.com/iframe_api",document.head.appendChild(n)}function e(){jr=new YT.Player("player",{height:"0",width:"0",videoId:"",events:{onReady:()=>console.log("YouTube Player ready")}})}return window.onYouTubeIframeAPIReady=e,nc={volume:30},nc}function Zg(){return jr}document.addEventListener("keydown",i=>{const t=i.key;if(["1","2","3","4","5"].includes(t)){const e=parseInt(t)-1;Xs=ph[e],jr&&Xs&&(jr.loadVideoById(Xs.id),jr.setVolume(nc.volume),jr.playVideo())}});Fu.addEventListener("input",()=>{Aa=Fu.value.trim(),Aa.length>0?ec.disabled=!1:ec.disabled=!0});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mh="176",Zr={ROTATE:0,DOLLY:1,PAN:2},Yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jg=0,Ou=1,t_=2,rp=1,e_=2,ci=3,ki=0,yn=1,hi=2,Li=0,Jr=1,Vu=2,Bu=3,ku=4,n_=5,sr=100,i_=101,r_=102,s_=103,o_=104,a_=200,l_=201,c_=202,h_=203,ic=204,rc=205,u_=206,d_=207,f_=208,p_=209,m_=210,g_=211,__=212,v_=213,y_=214,sc=0,oc=1,ac=2,is=3,lc=4,cc=5,hc=6,uc=7,sp=0,E_=1,x_=2,Ni=0,T_=1,S_=2,M_=3,A_=4,w_=5,b_=6,R_=7,op=300,rs=301,ss=302,dc=303,fc=304,Wa=306,pc=1e3,ar=1001,mc=1002,Bn=1003,C_=1004,No=1005,Wn=1006,pl=1007,lr=1008,Kn=1009,ap=1010,lp=1011,Ks=1012,gh=1013,fr=1014,di=1015,fo=1016,_h=1017,vh=1018,Qs=1020,cp=35902,hp=1021,up=1022,On=1023,Zs=1026,Js=1027,dp=1028,yh=1029,fp=1030,Eh=1031,xh=1033,ha=33776,ua=33777,da=33778,fa=33779,gc=35840,_c=35841,vc=35842,yc=35843,Ec=36196,xc=37492,Tc=37496,Sc=37808,Mc=37809,Ac=37810,wc=37811,bc=37812,Rc=37813,Cc=37814,Ic=37815,Pc=37816,Dc=37817,Lc=37818,Nc=37819,Uc=37820,Fc=37821,pa=36492,Oc=36494,Vc=36495,pp=36283,Bc=36284,kc=36285,zc=36286,I_=3200,P_=3201,mp=0,D_=1,Ii="",An="srgb",os="srgb-linear",wa="linear",Ee="srgb",Cr=7680,zu=519,L_=512,N_=513,U_=514,gp=515,F_=516,O_=517,V_=518,B_=519,Hu=35044,Gu="300 es",fi=2e3,ba=2001;class vr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ma=Math.PI/180,Hc=180/Math.PI;function po(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function k_(i,t){return(i%t+t)%t}function ml(i,t,e){return(1-e)*i+e*t}function Ds(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const z_={DEG2RAD:ma};class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,r,s,o,l,c,h){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,l,c,h)}set(t,e,n,r,s,o,l,c,h){const u=this.elements;return u[0]=t,u[1]=r,u[2]=l,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],l=n[3],c=n[6],h=n[1],u=n[4],d=n[7],m=n[2],_=n[5],x=n[8],M=r[0],g=r[3],p=r[6],I=r[1],D=r[4],P=r[7],V=r[2],F=r[5],S=r[8];return s[0]=o*M+l*I+c*V,s[3]=o*g+l*D+c*F,s[6]=o*p+l*P+c*S,s[1]=h*M+u*I+d*V,s[4]=h*g+u*D+d*F,s[7]=h*p+u*P+d*S,s[2]=m*M+_*I+x*V,s[5]=m*g+_*D+x*F,s[8]=m*p+_*P+x*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],l=t[5],c=t[6],h=t[7],u=t[8];return e*o*u-e*l*h-n*s*u+n*l*c+r*s*h-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],l=t[5],c=t[6],h=t[7],u=t[8],d=u*o-l*h,m=l*c-u*s,_=h*s-o*c,x=e*d+n*m+r*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return t[0]=d*M,t[1]=(r*h-u*n)*M,t[2]=(l*n-r*o)*M,t[3]=m*M,t[4]=(u*e-r*c)*M,t[5]=(r*s-l*e)*M,t[6]=_*M,t[7]=(n*c-h*e)*M,t[8]=(o*e-n*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,l){const c=Math.cos(s),h=Math.sin(s);return this.set(n*c,n*h,-n*(c*o+h*l)+o+t,-r*h,r*c,-r*(-h*o+c*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(gl.makeScale(t,e)),this}rotate(t){return this.premultiply(gl.makeRotation(-t)),this}translate(t,e){return this.premultiply(gl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new Kt;function _p(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function to(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function H_(){const i=to("canvas");return i.style.display="block",i}const Wu={};function ga(i){i in Wu||(Wu[i]=!0,console.warn(i))}function G_(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function W_(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function X_(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xu=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qu=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q_(){const i={enabled:!0,workingColorSpace:os,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ee&&(r.r=pi(r.r),r.g=pi(r.g),r.b=pi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ee&&(r.r=ts(r.r),r.g=ts(r.g),r.b=ts(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ii?wa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[os]:{primaries:t,whitePoint:n,transfer:wa,toXYZ:Xu,fromXYZ:qu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:t,whitePoint:n,transfer:Ee,toXYZ:Xu,fromXYZ:qu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}const me=q_();function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ir;class $_{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ir===void 0&&(Ir=to("canvas")),Ir.width=t.width,Ir.height=t.height;const r=Ir.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Ir}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=to("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=pi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let j_=0;class Th{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=po(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(_l(r[o].image)):s.push(_l(r[o]))}else s=_l(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function _l(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Y_=0;class dn extends vr{constructor(t=dn.DEFAULT_IMAGE,e=dn.DEFAULT_MAPPING,n=ar,r=ar,s=Wn,o=lr,l=On,c=Kn,h=dn.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=po(),this.name="",this.source=new Th(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==op)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pc:t.x=t.x-Math.floor(t.x);break;case ar:t.x=t.x<0?0:1;break;case mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pc:t.y=t.y-Math.floor(t.y);break;case ar:t.y=t.y<0?0:1;break;case mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=op;dn.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,e=0,n=0,r=1){Te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,h=c[0],u=c[4],d=c[8],m=c[1],_=c[5],x=c[9],M=c[2],g=c[6],p=c[10];if(Math.abs(u-m)<.01&&Math.abs(d-M)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+m)<.1&&Math.abs(d+M)<.1&&Math.abs(x+g)<.1&&Math.abs(h+_+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const D=(h+1)/2,P=(_+1)/2,V=(p+1)/2,F=(u+m)/4,S=(d+M)/4,T=(x+g)/4;return D>P&&D>V?D<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(D),r=F/n,s=S/n):P>V?P<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(P),n=F/r,s=T/r):V<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(V),n=S/s,r=T/s),this.set(n,r,s,e),this}let I=Math.sqrt((g-x)*(g-x)+(d-M)*(d-M)+(m-u)*(m-u));return Math.abs(I)<.001&&(I=1),this.x=(g-x)/I,this.y=(d-M)/I,this.z=(m-u)/I,this.w=Math.acos((h+_+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K_ extends vr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth?n.depth:1,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);const r={width:t,height:e,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const s=new dn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Th(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pr extends K_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class vp extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q_ extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,l){let c=n[r+0],h=n[r+1],u=n[r+2],d=n[r+3];const m=s[o+0],_=s[o+1],x=s[o+2],M=s[o+3];if(l===0){t[e+0]=c,t[e+1]=h,t[e+2]=u,t[e+3]=d;return}if(l===1){t[e+0]=m,t[e+1]=_,t[e+2]=x,t[e+3]=M;return}if(d!==M||c!==m||h!==_||u!==x){let g=1-l;const p=c*m+h*_+u*x+d*M,I=p>=0?1:-1,D=1-p*p;if(D>Number.EPSILON){const V=Math.sqrt(D),F=Math.atan2(V,p*I);g=Math.sin(g*F)/V,l=Math.sin(l*F)/V}const P=l*I;if(c=c*g+m*P,h=h*g+_*P,u=u*g+x*P,d=d*g+M*P,g===1-l){const V=1/Math.sqrt(c*c+h*h+u*u+d*d);c*=V,h*=V,u*=V,d*=V}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,o){const l=n[r],c=n[r+1],h=n[r+2],u=n[r+3],d=s[o],m=s[o+1],_=s[o+2],x=s[o+3];return t[e]=l*x+u*d+c*_-h*m,t[e+1]=c*x+u*m+h*d-l*_,t[e+2]=h*x+u*_+l*m-c*d,t[e+3]=u*x-l*d-c*m-h*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,l=Math.cos,c=Math.sin,h=l(n/2),u=l(r/2),d=l(s/2),m=c(n/2),_=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=m*u*d+h*_*x,this._y=h*_*d-m*u*x,this._z=h*u*x+m*_*d,this._w=h*u*d-m*_*x;break;case"YXZ":this._x=m*u*d+h*_*x,this._y=h*_*d-m*u*x,this._z=h*u*x-m*_*d,this._w=h*u*d+m*_*x;break;case"ZXY":this._x=m*u*d-h*_*x,this._y=h*_*d+m*u*x,this._z=h*u*x+m*_*d,this._w=h*u*d-m*_*x;break;case"ZYX":this._x=m*u*d-h*_*x,this._y=h*_*d+m*u*x,this._z=h*u*x-m*_*d,this._w=h*u*d+m*_*x;break;case"YZX":this._x=m*u*d+h*_*x,this._y=h*_*d+m*u*x,this._z=h*u*x-m*_*d,this._w=h*u*d-m*_*x;break;case"XZY":this._x=m*u*d-h*_*x,this._y=h*_*d-m*u*x,this._z=h*u*x+m*_*d,this._w=h*u*d+m*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],l=e[5],c=e[9],h=e[2],u=e[6],d=e[10],m=n+l+d;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(u-c)*_,this._y=(s-h)*_,this._z=(o-r)*_}else if(n>l&&n>d){const _=2*Math.sqrt(1+n-l-d);this._w=(u-c)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+h)/_}else if(l>d){const _=2*Math.sqrt(1+l-n-d);this._w=(s-h)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(c+u)/_}else{const _=2*Math.sqrt(1+d-n-l);this._w=(o-r)/_,this._x=(s+h)/_,this._y=(c+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,l=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+o*l+r*h-s*c,this._y=r*u+o*c+s*l-n*h,this._z=s*u+o*h+n*c-r*l,this._w=o*u-n*l-r*c-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let l=o*t._w+n*t._x+r*t._y+s*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-l*l;if(c<=Number.EPSILON){const _=1-e;return this._w=_*o+e*this._w,this._x=_*n+e*this._x,this._y=_*r+e*this._y,this._z=_*s+e*this._z,this.normalize(),this}const h=Math.sqrt(c),u=Math.atan2(h,l),d=Math.sin((1-e)*u)/h,m=Math.sin(e*u)/h;return this._w=o*d+this._w*m,this._x=n*d+this._x*m,this._y=r*d+this._y*m,this._z=s*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($u.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,l=t.z,c=t.w,h=2*(o*r-l*n),u=2*(l*e-s*r),d=2*(s*n-o*e);return this.x=e+c*h+o*d-l*u,this.y=n+c*u+l*h-s*d,this.z=r+c*d+s*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,l=e.y,c=e.z;return this.x=r*c-s*l,this.y=s*o-n*c,this.z=n*l-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vl.copy(this).projectOnVector(t),this.sub(vl)}reflect(t){return this.sub(vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new z,$u=new mr;class mo{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(s,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Uo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Uo.copy(n.boundingBox)),Uo.applyMatrix4(t.matrixWorld),this.union(Uo)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),Fo.subVectors(this.max,Ls),Pr.subVectors(t.a,Ls),Dr.subVectors(t.b,Ls),Lr.subVectors(t.c,Ls),Si.subVectors(Dr,Pr),Mi.subVectors(Lr,Dr),Ki.subVectors(Pr,Lr);let e=[0,-Si.z,Si.y,0,-Mi.z,Mi.y,0,-Ki.z,Ki.y,Si.z,0,-Si.x,Mi.z,0,-Mi.x,Ki.z,0,-Ki.x,-Si.y,Si.x,0,-Mi.y,Mi.x,0,-Ki.y,Ki.x,0];return!yl(e,Pr,Dr,Lr,Fo)||(e=[1,0,0,0,1,0,0,0,1],!yl(e,Pr,Dr,Lr,Fo))?!1:(Oo.crossVectors(Si,Mi),e=[Oo.x,Oo.y,Oo.z],yl(e,Pr,Dr,Lr,Fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ri=[new z,new z,new z,new z,new z,new z,new z,new z],Dn=new z,Uo=new mo,Pr=new z,Dr=new z,Lr=new z,Si=new z,Mi=new z,Ki=new z,Ls=new z,Fo=new z,Oo=new z,Qi=new z;function yl(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Qi.fromArray(i,s);const l=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),c=t.dot(Qi),h=e.dot(Qi),u=n.dot(Qi);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>l)return!1}return!0}const Z_=new mo,Ns=new z,El=new z;class Sh{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Z_.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);const e=Ns.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ns,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(El.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(El)),this.expandByPoint(Ns.copy(t.center).sub(El))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new z,xl=new z,Vo=new z,Ai=new z,Tl=new z,Bo=new z,Sl=new z;class yp{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){xl.copy(t).add(e).multiplyScalar(.5),Vo.copy(e).sub(t).normalize(),Ai.copy(this.origin).sub(xl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Vo),l=Ai.dot(this.direction),c=-Ai.dot(Vo),h=Ai.lengthSq(),u=Math.abs(1-o*o);let d,m,_,x;if(u>0)if(d=o*c-l,m=o*l-c,x=s*u,d>=0)if(m>=-x)if(m<=x){const M=1/u;d*=M,m*=M,_=d*(d+o*m+2*l)+m*(o*d+m+2*c)+h}else m=s,d=Math.max(0,-(o*m+l)),_=-d*d+m*(m+2*c)+h;else m=-s,d=Math.max(0,-(o*m+l)),_=-d*d+m*(m+2*c)+h;else m<=-x?(d=Math.max(0,-(-o*s+l)),m=d>0?-s:Math.min(Math.max(-s,-c),s),_=-d*d+m*(m+2*c)+h):m<=x?(d=0,m=Math.min(Math.max(-s,-c),s),_=m*(m+2*c)+h):(d=Math.max(0,-(o*s+l)),m=d>0?s:Math.min(Math.max(-s,-c),s),_=-d*d+m*(m+2*c)+h);else m=o>0?-s:s,d=Math.max(0,-(o*m+l)),_=-d*d+m*(m+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xl).addScaledVector(Vo,m),_}intersectSphere(t,e){si.subVectors(t.center,this.origin);const n=si.dot(this.direction),r=si.dot(si)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,l,c;const h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,m=this.origin;return h>=0?(n=(t.min.x-m.x)*h,r=(t.max.x-m.x)*h):(n=(t.max.x-m.x)*h,r=(t.min.x-m.x)*h),u>=0?(s=(t.min.y-m.y)*u,o=(t.max.y-m.y)*u):(s=(t.max.y-m.y)*u,o=(t.min.y-m.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(l=(t.min.z-m.z)*d,c=(t.max.z-m.z)*d):(l=(t.max.z-m.z)*d,c=(t.min.z-m.z)*d),n>c||l>r)||((l>n||n!==n)&&(n=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,n,r,s){Tl.subVectors(e,t),Bo.subVectors(n,t),Sl.crossVectors(Tl,Bo);let o=this.direction.dot(Sl),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Ai.subVectors(this.origin,t);const c=l*this.direction.dot(Bo.crossVectors(Ai,Bo));if(c<0)return null;const h=l*this.direction.dot(Tl.cross(Ai));if(h<0||c+h>o)return null;const u=-l*Ai.dot(Sl);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(t,e,n,r,s,o,l,c,h,u,d,m,_,x,M,g){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,l,c,h,u,d,m,_,x,M,g)}set(t,e,n,r,s,o,l,c,h,u,d,m,_,x,M,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=l,p[13]=c,p[2]=h,p[6]=u,p[10]=d,p[14]=m,p[3]=_,p[7]=x,p[11]=M,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Nr.setFromMatrixColumn(t,0).length(),s=1/Nr.setFromMatrixColumn(t,1).length(),o=1/Nr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(r),h=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const m=o*u,_=o*d,x=l*u,M=l*d;e[0]=c*u,e[4]=-c*d,e[8]=h,e[1]=_+x*h,e[5]=m-M*h,e[9]=-l*c,e[2]=M-m*h,e[6]=x+_*h,e[10]=o*c}else if(t.order==="YXZ"){const m=c*u,_=c*d,x=h*u,M=h*d;e[0]=m+M*l,e[4]=x*l-_,e[8]=o*h,e[1]=o*d,e[5]=o*u,e[9]=-l,e[2]=_*l-x,e[6]=M+m*l,e[10]=o*c}else if(t.order==="ZXY"){const m=c*u,_=c*d,x=h*u,M=h*d;e[0]=m-M*l,e[4]=-o*d,e[8]=x+_*l,e[1]=_+x*l,e[5]=o*u,e[9]=M-m*l,e[2]=-o*h,e[6]=l,e[10]=o*c}else if(t.order==="ZYX"){const m=o*u,_=o*d,x=l*u,M=l*d;e[0]=c*u,e[4]=x*h-_,e[8]=m*h+M,e[1]=c*d,e[5]=M*h+m,e[9]=_*h-x,e[2]=-h,e[6]=l*c,e[10]=o*c}else if(t.order==="YZX"){const m=o*c,_=o*h,x=l*c,M=l*h;e[0]=c*u,e[4]=M-m*d,e[8]=x*d+_,e[1]=d,e[5]=o*u,e[9]=-l*u,e[2]=-h*u,e[6]=_*d+x,e[10]=m-M*d}else if(t.order==="XZY"){const m=o*c,_=o*h,x=l*c,M=l*h;e[0]=c*u,e[4]=-d,e[8]=h*u,e[1]=m*d+M,e[5]=o*u,e[9]=_*d-x,e[2]=x*d-_,e[6]=l*u,e[10]=M*d+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(J_,t,tv)}lookAt(t,e,n){const r=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),wi.crossVectors(n,Sn),wi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),wi.crossVectors(n,Sn)),wi.normalize(),ko.crossVectors(Sn,wi),r[0]=wi.x,r[4]=ko.x,r[8]=Sn.x,r[1]=wi.y,r[5]=ko.y,r[9]=Sn.y,r[2]=wi.z,r[6]=ko.z,r[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],l=n[4],c=n[8],h=n[12],u=n[1],d=n[5],m=n[9],_=n[13],x=n[2],M=n[6],g=n[10],p=n[14],I=n[3],D=n[7],P=n[11],V=n[15],F=r[0],S=r[4],T=r[8],y=r[12],v=r[1],A=r[5],L=r[9],b=r[13],Z=r[2],nt=r[6],tt=r[10],it=r[14],Y=r[3],pt=r[7],Tt=r[11],bt=r[15];return s[0]=o*F+l*v+c*Z+h*Y,s[4]=o*S+l*A+c*nt+h*pt,s[8]=o*T+l*L+c*tt+h*Tt,s[12]=o*y+l*b+c*it+h*bt,s[1]=u*F+d*v+m*Z+_*Y,s[5]=u*S+d*A+m*nt+_*pt,s[9]=u*T+d*L+m*tt+_*Tt,s[13]=u*y+d*b+m*it+_*bt,s[2]=x*F+M*v+g*Z+p*Y,s[6]=x*S+M*A+g*nt+p*pt,s[10]=x*T+M*L+g*tt+p*Tt,s[14]=x*y+M*b+g*it+p*bt,s[3]=I*F+D*v+P*Z+V*Y,s[7]=I*S+D*A+P*nt+V*pt,s[11]=I*T+D*L+P*tt+V*Tt,s[15]=I*y+D*b+P*it+V*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],l=t[5],c=t[9],h=t[13],u=t[2],d=t[6],m=t[10],_=t[14],x=t[3],M=t[7],g=t[11],p=t[15];return x*(+s*c*d-r*h*d-s*l*m+n*h*m+r*l*_-n*c*_)+M*(+e*c*_-e*h*m+s*o*m-r*o*_+r*h*u-s*c*u)+g*(+e*h*d-e*l*_-s*o*d+n*o*_+s*l*u-n*h*u)+p*(-r*l*u-e*c*d+e*l*m+r*o*d-n*o*m+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],l=t[5],c=t[6],h=t[7],u=t[8],d=t[9],m=t[10],_=t[11],x=t[12],M=t[13],g=t[14],p=t[15],I=d*g*h-M*m*h+M*c*_-l*g*_-d*c*p+l*m*p,D=x*m*h-u*g*h-x*c*_+o*g*_+u*c*p-o*m*p,P=u*M*h-x*d*h+x*l*_-o*M*_-u*l*p+o*d*p,V=x*d*c-u*M*c-x*l*m+o*M*m+u*l*g-o*d*g,F=e*I+n*D+r*P+s*V;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/F;return t[0]=I*S,t[1]=(M*m*s-d*g*s-M*r*_+n*g*_+d*r*p-n*m*p)*S,t[2]=(l*g*s-M*c*s+M*r*h-n*g*h-l*r*p+n*c*p)*S,t[3]=(d*c*s-l*m*s-d*r*h+n*m*h+l*r*_-n*c*_)*S,t[4]=D*S,t[5]=(u*g*s-x*m*s+x*r*_-e*g*_-u*r*p+e*m*p)*S,t[6]=(x*c*s-o*g*s-x*r*h+e*g*h+o*r*p-e*c*p)*S,t[7]=(o*m*s-u*c*s+u*r*h-e*m*h-o*r*_+e*c*_)*S,t[8]=P*S,t[9]=(x*d*s-u*M*s-x*n*_+e*M*_+u*n*p-e*d*p)*S,t[10]=(o*M*s-x*l*s+x*n*h-e*M*h-o*n*p+e*l*p)*S,t[11]=(u*l*s-o*d*s-u*n*h+e*d*h+o*n*_-e*l*_)*S,t[12]=V*S,t[13]=(u*M*r-x*d*r+x*n*m-e*M*m-u*n*g+e*d*g)*S,t[14]=(x*l*r-o*M*r-x*n*c+e*M*c+o*n*g-e*l*g)*S,t[15]=(o*d*r-u*l*r+u*n*c-e*d*c-o*n*m+e*l*m)*S,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,l=t.y,c=t.z,h=s*o,u=s*l;return this.set(h*o+n,h*l-r*c,h*c+r*l,0,h*l+r*c,u*l+n,u*c-r*o,0,h*c-r*l,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,l=e._z,c=e._w,h=s+s,u=o+o,d=l+l,m=s*h,_=s*u,x=s*d,M=o*u,g=o*d,p=l*d,I=c*h,D=c*u,P=c*d,V=n.x,F=n.y,S=n.z;return r[0]=(1-(M+p))*V,r[1]=(_+P)*V,r[2]=(x-D)*V,r[3]=0,r[4]=(_-P)*F,r[5]=(1-(m+p))*F,r[6]=(g+I)*F,r[7]=0,r[8]=(x+D)*S,r[9]=(g-I)*S,r[10]=(1-(m+M))*S,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Nr.set(r[0],r[1],r[2]).length();const o=Nr.set(r[4],r[5],r[6]).length(),l=Nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ln.copy(this);const h=1/s,u=1/o,d=1/l;return Ln.elements[0]*=h,Ln.elements[1]*=h,Ln.elements[2]*=h,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,e.setFromRotationMatrix(Ln),n.x=s,n.y=o,n.z=l,this}makePerspective(t,e,n,r,s,o,l=fi){const c=this.elements,h=2*s/(e-t),u=2*s/(n-r),d=(e+t)/(e-t),m=(n+r)/(n-r);let _,x;if(l===fi)_=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(l===ba)_=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,l=fi){const c=this.elements,h=1/(e-t),u=1/(n-r),d=1/(o-s),m=(e+t)*h,_=(n+r)*u;let x,M;if(l===fi)x=(o+s)*d,M=-2*d;else if(l===ba)x=s*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=M,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Nr=new z,Ln=new Ce,J_=new z(0,0,0),tv=new z(1,1,1),wi=new z,ko=new z,Sn=new z,ju=new Ce,Yu=new mr;class Qn{constructor(t=0,e=0,n=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],l=r[8],c=r[1],h=r[5],u=r[9],d=r[2],m=r[6],_=r[10];switch(e){case"XYZ":this._y=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(te(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ju.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ju,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Ep{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ev=0;const Ku=new z,Ur=new mr,oi=new Ce,zo=new z,Us=new z,nv=new z,iv=new mr,Qu=new z(1,0,0),Zu=new z(0,1,0),Ju=new z(0,0,1),td={type:"added"},rv={type:"removed"},Fr={type:"childadded",child:null},Ml={type:"childremoved",child:null};class fn extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const t=new z,e=new Qn,n=new mr,r=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Kt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ur.setFromAxisAngle(t,e),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(t,e){return Ur.setFromAxisAngle(t,e),this.quaternion.premultiply(Ur),this}rotateX(t){return this.rotateOnAxis(Qu,t)}rotateY(t){return this.rotateOnAxis(Zu,t)}rotateZ(t){return this.rotateOnAxis(Ju,t)}translateOnAxis(t,e){return Ku.copy(t).applyQuaternion(this.quaternion),this.position.add(Ku.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qu,t)}translateY(t){return this.translateOnAxis(Zu,t)}translateZ(t){return this.translateOnAxis(Ju,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zo.copy(t):zo.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Us,zo,this.up):oi.lookAt(zo,Us,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(oi),this.quaternion.premultiply(Ur.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(td),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rv),Ml.child=t,this.dispatchEvent(Ml),Ml.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(td),Fr.child=t,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,nv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,iv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?{min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}:void 0,boundingSphere:l.boundingSphere?{radius:l.boundingSphere.radius,center:l.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const d=c[h];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(s(t.materials,this.material[c]));r.material=l}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(t.animations,c))}}if(e){const l=o(t.geometries),c=o(t.materials),h=o(t.textures),u=o(t.images),d=o(t.shapes),m=o(t.skeletons),_=o(t.animations),x=o(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(l){const c=[];for(const h in l){const u=l[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}fn.DEFAULT_UP=new z(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new z,ai=new z,Al=new z,li=new z,Or=new z,Vr=new z,ed=new z,wl=new z,bl=new z,Rl=new z,Cl=new Te,Il=new Te,Pl=new Te;class Fn{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Nn.subVectors(t,e),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Nn.subVectors(r,e),ai.subVectors(n,e),Al.subVectors(t,e);const o=Nn.dot(Nn),l=Nn.dot(ai),c=Nn.dot(Al),h=ai.dot(ai),u=ai.dot(Al),d=o*h-l*l;if(d===0)return s.set(0,0,0),null;const m=1/d,_=(h*c-l*u)*m,x=(o*u-l*c)*m;return s.set(1-_-x,x,_)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,n,r,s,o,l,c){return this.getBarycoord(t,e,n,r,li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,li.x),c.addScaledVector(o,li.y),c.addScaledVector(l,li.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return Cl.setScalar(0),Il.setScalar(0),Pl.setScalar(0),Cl.fromBufferAttribute(t,e),Il.fromBufferAttribute(t,n),Pl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Cl,s.x),o.addScaledVector(Il,s.y),o.addScaledVector(Pl,s.z),o}static isFrontFacing(t,e,n,r){return Nn.subVectors(n,e),ai.subVectors(t,e),Nn.cross(ai).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Nn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Fn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,l;Or.subVectors(r,n),Vr.subVectors(s,n),wl.subVectors(t,n);const c=Or.dot(wl),h=Vr.dot(wl);if(c<=0&&h<=0)return e.copy(n);bl.subVectors(t,r);const u=Or.dot(bl),d=Vr.dot(bl);if(u>=0&&d<=u)return e.copy(r);const m=c*d-u*h;if(m<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Or,o);Rl.subVectors(t,s);const _=Or.dot(Rl),x=Vr.dot(Rl);if(x>=0&&_<=x)return e.copy(s);const M=_*h-c*x;if(M<=0&&h>=0&&x<=0)return l=h/(h-x),e.copy(n).addScaledVector(Vr,l);const g=u*x-_*d;if(g<=0&&d-u>=0&&_-x>=0)return ed.subVectors(s,r),l=(d-u)/(d-u+(_-x)),e.copy(r).addScaledVector(ed,l);const p=1/(g+M+m);return o=M*p,l=m*p,e.copy(n).addScaledVector(Or,o).addScaledVector(Vr,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function Dl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class le{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=me.workingColorSpace){if(t=k_(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Dl(o,s,t+1/3),this.g=Dl(o,s,t),this.b=Dl(o,s,t-1/3)}return me.toWorkingColorSpace(this,r),this}setStyle(t,e=An){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){const n=xp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return me.fromWorkingColorSpace(sn.copy(this),t),Math.round(te(sn.r*255,0,255))*65536+Math.round(te(sn.g*255,0,255))*256+Math.round(te(sn.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(sn.copy(this),e);const n=sn.r,r=sn.g,s=sn.b,o=Math.max(n,r,s),l=Math.min(n,r,s);let c,h;const u=(l+o)/2;if(l===o)c=0,h=0;else{const d=o-l;switch(h=u<=.5?d/(o+l):d/(2-o-l),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=An){me.fromWorkingColorSpace(sn.copy(this),t);const e=sn.r,n=sn.g,r=sn.b;return t!==An?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(Ho);const n=ml(bi.h,Ho.h,e),r=ml(bi.s,Ho.s,e),s=ml(bi.l,Ho.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new le;le.NAMES=xp;let sv=0;class go extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=po(),this.name="",this.type="Material",this.blending=Jr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=rc,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ic&&(n.blendSrc=this.blendSrc),this.blendDst!==rc&&(n.blendDst=this.blendDst),this.blendEquation!==sr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const l in s){const c=s[l];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Mh extends go{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fe=new z,Go=new qt;let ov=0;class Xn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ov++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hu,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Go.fromBufferAttribute(this,e),Go.applyMatrix3(t),this.setXY(e,Go.x,Go.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),r=gn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hu&&(t.usage=this.usage),t}}class Tp extends Xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sp extends Xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qn extends Xn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let av=0;const Rn=new Ce,Ll=new fn,Br=new z,Mn=new mo,Fs=new mo,$e=new z;class ji extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_p(t)?Sp:Tp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Ll.lookAt(t),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qn(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sh);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const l=e[s];Fs.setFromBufferAttribute(l),this.morphTargetsRelative?($e.addVectors(Mn.min,Fs.min),Mn.expandByPoint($e),$e.addVectors(Mn.max,Fs.max),Mn.expandByPoint($e)):(Mn.expandByPoint(Fs.min),Mn.expandByPoint(Fs.max))}Mn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)$e.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared($e));if(e)for(let s=0,o=e.length;s<o;s++){const l=e[s],c=this.morphTargetsRelative;for(let h=0,u=l.count;h<u;h++)$e.fromBufferAttribute(l,h),c&&(Br.fromBufferAttribute(t,h),$e.add(Br)),r=Math.max(r,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],c=[];for(let T=0;T<n.count;T++)l[T]=new z,c[T]=new z;const h=new z,u=new z,d=new z,m=new qt,_=new qt,x=new qt,M=new z,g=new z;function p(T,y,v){h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,v),m.fromBufferAttribute(s,T),_.fromBufferAttribute(s,y),x.fromBufferAttribute(s,v),u.sub(h),d.sub(h),_.sub(m),x.sub(m);const A=1/(_.x*x.y-x.x*_.y);isFinite(A)&&(M.copy(u).multiplyScalar(x.y).addScaledVector(d,-_.y).multiplyScalar(A),g.copy(d).multiplyScalar(_.x).addScaledVector(u,-x.x).multiplyScalar(A),l[T].add(M),l[y].add(M),l[v].add(M),c[T].add(g),c[y].add(g),c[v].add(g))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let T=0,y=I.length;T<y;++T){const v=I[T],A=v.start,L=v.count;for(let b=A,Z=A+L;b<Z;b+=3)p(t.getX(b+0),t.getX(b+1),t.getX(b+2))}const D=new z,P=new z,V=new z,F=new z;function S(T){V.fromBufferAttribute(r,T),F.copy(V);const y=l[T];D.copy(y),D.sub(V.multiplyScalar(V.dot(y))).normalize(),P.crossVectors(F,y);const A=P.dot(c[T])<0?-1:1;o.setXYZW(T,D.x,D.y,D.z,A)}for(let T=0,y=I.length;T<y;++T){const v=I[T],A=v.start,L=v.count;for(let b=A,Z=A+L;b<Z;b+=3)S(t.getX(b+0)),S(t.getX(b+1)),S(t.getX(b+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const r=new z,s=new z,o=new z,l=new z,c=new z,h=new z,u=new z,d=new z;if(t)for(let m=0,_=t.count;m<_;m+=3){const x=t.getX(m+0),M=t.getX(m+1),g=t.getX(m+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,M),o.fromBufferAttribute(e,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,g),l.add(u),c.add(u),h.add(u),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let m=0,_=e.count;m<_;m+=3)r.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(m+0,u.x,u.y,u.z),n.setXYZ(m+1,u.x,u.y,u.z),n.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(l,c){const h=l.array,u=l.itemSize,d=l.normalized,m=new h.constructor(c.length*u);let _=0,x=0;for(let M=0,g=c.length;M<g;M++){l.isInterleavedBufferAttribute?_=c[M]*l.data.stride+l.offset:_=c[M]*u;for(let p=0;p<u;p++)m[x++]=h[_++]}return new Xn(m,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ji,n=this.index.array,r=this.attributes;for(const l in r){const c=r[l],h=t(c,n);e.setAttribute(l,h)}const s=this.morphAttributes;for(const l in s){const c=[],h=s[l];for(let u=0,d=h.length;u<d;u++){const m=h[u],_=t(m,n);c.push(_)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const h=o[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let d=0,m=h.length;d<m;d++){const _=h[d];u.push(_.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const h in r){const u=r[h];this.setAttribute(h,u.clone(e))}const s=t.morphAttributes;for(const h in s){const u=[],d=s[h];for(let m=0,_=d.length;m<_;m++)u.push(d[m].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,u=o.length;h<u;h++){const d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nd=new Ce,Zi=new yp,Wo=new Sh,id=new z,Xo=new z,qo=new z,$o=new z,Nl=new z,jo=new z,rd=new z,Yo=new z;class bn extends fn{constructor(t=new ji,e=new Mh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(s&&l){jo.set(0,0,0);for(let c=0,h=s.length;c<h;c++){const u=l[c],d=s[c];u!==0&&(Nl.fromBufferAttribute(d,t),o?jo.addScaledVector(Nl,u):jo.addScaledVector(Nl.sub(e),u))}e.add(jo)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(s),Zi.copy(t.ray).recast(t.near),!(Wo.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Wo,id)===null||Zi.origin.distanceToSquared(id)>(t.far-t.near)**2))&&(nd.copy(s).invert(),Zi.copy(t.ray).applyMatrix4(nd),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,l=s.index,c=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,m=s.groups,_=s.drawRange;if(l!==null)if(Array.isArray(o))for(let x=0,M=m.length;x<M;x++){const g=m[x],p=o[g.materialIndex],I=Math.max(g.start,_.start),D=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let P=I,V=D;P<V;P+=3){const F=l.getX(P),S=l.getX(P+1),T=l.getX(P+2);r=Ko(this,p,t,n,h,u,d,F,S,T),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const x=Math.max(0,_.start),M=Math.min(l.count,_.start+_.count);for(let g=x,p=M;g<p;g+=3){const I=l.getX(g),D=l.getX(g+1),P=l.getX(g+2);r=Ko(this,o,t,n,h,u,d,I,D,P),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,M=m.length;x<M;x++){const g=m[x],p=o[g.materialIndex],I=Math.max(g.start,_.start),D=Math.min(c.count,Math.min(g.start+g.count,_.start+_.count));for(let P=I,V=D;P<V;P+=3){const F=P,S=P+1,T=P+2;r=Ko(this,p,t,n,h,u,d,F,S,T),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const x=Math.max(0,_.start),M=Math.min(c.count,_.start+_.count);for(let g=x,p=M;g<p;g+=3){const I=g,D=g+1,P=g+2;r=Ko(this,o,t,n,h,u,d,I,D,P),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function lv(i,t,e,n,r,s,o,l){let c;if(t.side===yn?c=n.intersectTriangle(o,s,r,!0,l):c=n.intersectTriangle(r,s,o,t.side===ki,l),c===null)return null;Yo.copy(l),Yo.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Yo);return h<e.near||h>e.far?null:{distance:h,point:Yo.clone(),object:i}}function Ko(i,t,e,n,r,s,o,l,c,h){i.getVertexPosition(l,Xo),i.getVertexPosition(c,qo),i.getVertexPosition(h,$o);const u=lv(i,t,e,n,Xo,qo,$o,rd);if(u){const d=new z;Fn.getBarycoord(rd,Xo,qo,$o,d),r&&(u.uv=Fn.getInterpolatedAttribute(r,l,c,h,d,new qt)),s&&(u.uv1=Fn.getInterpolatedAttribute(s,l,c,h,d,new qt)),o&&(u.normal=Fn.getInterpolatedAttribute(o,l,c,h,d,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const m={a:l,b:c,c:h,normal:new z,materialIndex:0};Fn.getNormal(Xo,qo,$o,m.normal),u.face=m,u.barycoord=d}return u}class _o extends ji{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],h=[],u=[],d=[];let m=0,_=0;x("z","y","x",-1,-1,n,e,t,o,s,0),x("z","y","x",1,-1,n,e,-t,o,s,1),x("x","z","y",1,1,t,n,e,r,o,2),x("x","z","y",1,-1,t,n,-e,r,o,3),x("x","y","z",1,-1,t,e,n,r,s,4),x("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new qn(h,3)),this.setAttribute("normal",new qn(u,3)),this.setAttribute("uv",new qn(d,2));function x(M,g,p,I,D,P,V,F,S,T,y){const v=P/S,A=V/T,L=P/2,b=V/2,Z=F/2,nt=S+1,tt=T+1;let it=0,Y=0;const pt=new z;for(let Tt=0;Tt<tt;Tt++){const bt=Tt*A-b;for(let Ht=0;Ht<nt;Ht++){const Wt=Ht*v-L;pt[M]=Wt*I,pt[g]=bt*D,pt[p]=Z,h.push(pt.x,pt.y,pt.z),pt[M]=0,pt[g]=0,pt[p]=F>0?1:-1,u.push(pt.x,pt.y,pt.z),d.push(Ht/S),d.push(1-Tt/T),it+=1}}for(let Tt=0;Tt<T;Tt++)for(let bt=0;bt<S;bt++){const Ht=m+bt+nt*Tt,Wt=m+bt+nt*(Tt+1),Q=m+(bt+1)+nt*(Tt+1),lt=m+(bt+1)+nt*Tt;c.push(Ht,Wt,lt),c.push(Wt,Q,lt),Y+=6}l.addGroup(_,Y,y),_+=Y,m+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function as(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function un(i){const t={};for(let e=0;e<i.length;e++){const n=as(i[e]);for(const r in n)t[r]=n[r]}return t}function cv(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}const hv={clone:as,merge:un};var uv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends go{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uv,this.fragmentShader=dv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=cv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ap extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new z,sd=new qt,od=new qt;class wn extends Ap{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hc*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,sd,od),e.subVectors(od,sd)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ma*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,h=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/h,r*=o.width/c,n*=o.height/h}const l=this.filmOffset;l!==0&&(s+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const kr=-90,zr=1;class fv extends fn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(kr,zr,t,e);r.layers=this.layers,this.add(r);const s=new wn(kr,zr,t,e);s.layers=this.layers,this.add(s);const o=new wn(kr,zr,t,e);o.layers=this.layers,this.add(o);const l=new wn(kr,zr,t,e);l.layers=this.layers,this.add(l);const c=new wn(kr,zr,t,e);c.layers=this.layers,this.add(c);const h=new wn(kr,zr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,l,c]=e;for(const h of e)this.remove(h);if(t===fi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,c,h,u]=this.children,d=t.getRenderTarget(),m=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,l),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,h),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(d,m,_),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Ah extends dn{constructor(t=[],e=rs,n,r,s,o,l,c,h,u){super(t,e,n,r,s,o,l,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pv extends pr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ah(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _o(5,5,5),s=new zi({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Li});s.uniforms.tEquirect.value=e;const o=new bn(r,s),l=e.minFilter;return e.minFilter===lr&&(e.minFilter=Wn),new fv(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class Qo extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mv={type:"move"};class Ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const l=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const M of t.hand.values()){const g=e.getJointPose(M,n),p=this._getHandJoint(h,M);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],m=u.position.distanceTo(d.position),_=.02,x=.005;h.inputState.pinching&&m>_+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&m<=_-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(mv)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qo;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class gv extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Fl=new z,_v=new z,vv=new Kt;class Ci{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Fl.subVectors(n,e).cross(_v.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vv.getNormalMatrix(t),r=this.coplanarPoint(Fl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new Sh,Zo=new z;class wh{constructor(t=new Ci,e=new Ci,n=new Ci,r=new Ci,s=new Ci,o=new Ci){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fi){const n=this.planes,r=t.elements,s=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],m=r[7],_=r[8],x=r[9],M=r[10],g=r[11],p=r[12],I=r[13],D=r[14],P=r[15];if(n[0].setComponents(c-s,m-h,g-_,P-p).normalize(),n[1].setComponents(c+s,m+h,g+_,P+p).normalize(),n[2].setComponents(c+o,m+u,g+x,P+I).normalize(),n[3].setComponents(c-o,m-u,g-x,P-I).normalize(),n[4].setComponents(c-l,m-d,g-M,P-D).normalize(),e===fi)n[5].setComponents(c+l,m+d,g+M,P+D).normalize();else if(e===ba)n[5].setComponents(l,d,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Zo.x=r.normal.x>0?t.max.x:t.min.x,Zo.y=r.normal.y>0?t.max.y:t.min.y,Zo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wp extends dn{constructor(t,e,n=fr,r,s,o,l=Bn,c=Bn,h,u=Zs){if(u!==Zs&&u!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,l,c,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Th(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Xa extends ji{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,l=Math.floor(n),c=Math.floor(r),h=l+1,u=c+1,d=t/l,m=e/c,_=[],x=[],M=[],g=[];for(let p=0;p<u;p++){const I=p*m-o;for(let D=0;D<h;D++){const P=D*d-s;x.push(P,-I,0),M.push(0,0,1),g.push(D/l),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let I=0;I<l;I++){const D=I+h*p,P=I+h*(p+1),V=I+1+h*(p+1),F=I+1+h*p;_.push(D,P,F),_.push(P,V,F)}this.setIndex(_),this.setAttribute("position",new qn(x,3)),this.setAttribute("normal",new qn(M,3)),this.setAttribute("uv",new qn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.width,t.height,t.widthSegments,t.heightSegments)}}class bh extends ji{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+l,Math.PI);let h=0;const u=[],d=new z,m=new z,_=[],x=[],M=[],g=[];for(let p=0;p<=n;p++){const I=[],D=p/n;let P=0;p===0&&o===0?P=.5/e:p===n&&c===Math.PI&&(P=-.5/e);for(let V=0;V<=e;V++){const F=V/e;d.x=-t*Math.cos(r+F*s)*Math.sin(o+D*l),d.y=t*Math.cos(o+D*l),d.z=t*Math.sin(r+F*s)*Math.sin(o+D*l),x.push(d.x,d.y,d.z),m.copy(d).normalize(),M.push(m.x,m.y,m.z),g.push(F+P,1-D),I.push(h++)}u.push(I)}for(let p=0;p<n;p++)for(let I=0;I<e;I++){const D=u[p][I+1],P=u[p][I],V=u[p+1][I],F=u[p+1][I+1];(p!==0||o>0)&&_.push(D,P,F),(p!==n-1||c<Math.PI)&&_.push(P,V,F)}this.setIndex(_),this.setAttribute("position",new qn(x,3)),this.setAttribute("normal",new qn(M,3)),this.setAttribute("uv",new qn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class yv extends go{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mp,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ad extends yv{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ev extends go{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=I_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xv extends go{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ld={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Tv{constructor(t,e,n){const r=this;let s=!1,o=0,l=0,c;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){l++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,l),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,l),o===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){const d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,m=h.length;d<m;d+=2){const _=h[d],x=h[d+1];if(_.global&&(_.lastIndex=0),_.test(u))return x}return null}}}const Sv=new Tv;class qa{constructor(t){this.manager=t!==void 0?t:Sv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}qa.DEFAULT_MATERIAL_NAME="__DEFAULT";class bp extends qa{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=ld.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const l=to("img");function c(){u(),ld.add(t,this),e&&e(this),s.manager.itemEnd(t)}function h(d){u(),r&&r(d),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){l.removeEventListener("load",c,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(t),l.src=t,l}}class Mv extends qa{constructor(t){super(t)}load(t,e,n,r){const s=new Ah;s.colorSpace=An;const o=new bp(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let l=0;function c(h){o.load(t[h],function(u){s.images[h]=u,l++,l===6&&(s.needsUpdate=!0,e&&e(s))},void 0,r)}for(let h=0;h<t.length;++h)c(h);return s}}class Av extends qa{constructor(t){super(t)}load(t,e,n,r){const s=new dn,o=new bp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(l){s.image=l,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Rp extends fn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ol=new Ce,cd=new z,hd=new z;class wv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wh,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;cd.setFromMatrixPosition(t.matrixWorld),e.position.copy(cd),hd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hd),e.updateMatrixWorld(),Ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ud=new Ce,Os=new z,Vl=new z;class bv extends wv{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qt(4,2),this._viewportCount=6,this._viewports=[new Te(2,1,1,1),new Te(0,1,1,1),new Te(3,1,1,1),new Te(1,1,1,1),new Te(3,0,1,1),new Te(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Os.setFromMatrixPosition(t.matrixWorld),n.position.copy(Os),Vl.copy(n.position),Vl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Vl),n.updateMatrixWorld(),r.makeTranslation(-Os.x,-Os.y,-Os.z),ud.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud)}}class Rv extends Rp{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new bv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Cv extends Ap{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,l=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Iv extends Rp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pv extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Dv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=dd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function dd(){return performance.now()}class fd{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Lv extends vr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function pd(i,t,e,n){const r=Nv(n);switch(e){case hp:return i*t;case dp:return i*t/r.components*r.byteLength;case yh:return i*t/r.components*r.byteLength;case fp:return i*t*2/r.components*r.byteLength;case Eh:return i*t*2/r.components*r.byteLength;case up:return i*t*3/r.components*r.byteLength;case On:return i*t*4/r.components*r.byteLength;case xh:return i*t*4/r.components*r.byteLength;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case da:case fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _c:case yc:return Math.max(i,16)*Math.max(t,8)/4;case gc:case vc:return Math.max(i,8)*Math.max(t,8)/2;case Ec:case xc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Uc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pa:case Oc:case Vc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case pp:case Bc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case kc:case zc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Nv(i){switch(i){case Kn:case ap:return{byteLength:1,components:1};case Ks:case lp:case fo:return{byteLength:2,components:1};case _h:case vh:return{byteLength:2,components:4};case fr:case gh:case di:return{byteLength:4,components:1};case cp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cp(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Uv(i){const t=new WeakMap;function e(l,c){const h=l.array,u=l.usage,d=h.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,h,u),l.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,c,h){const u=c.array,d=c.updateRanges;if(i.bindBuffer(h,l),d.length===0)i.bufferSubData(h,0,u);else{d.sort((_,x)=>_.start-x.start);let m=0;for(let _=1;_<d.length;_++){const x=d[m],M=d[_];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++m,d[m]=M)}d.length=m+1;for(let _=0,x=d.length;_<x;_++){const M=d[_];i.bufferSubData(h,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=t.get(l);c&&(i.deleteBuffer(c.buffer),t.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const u=t.get(l);(!u||u.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=t.get(l);if(h===void 0)t.set(l,e(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,c),h.version=l.version}}return{get:r,remove:s,update:o}}var Fv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ov=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$v=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ay=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dy="gl_FragColor = linearToOutputTexel( gl_FragColor );",fy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,py=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ey=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ty=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,My=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ay=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,by=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ry=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Py=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ly=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ny=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Oy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,By=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ky=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$y=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ky=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,EE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ME=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,HE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,GE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,WE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,t0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,n0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,i0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,o0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,h0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,f0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:Fv,alphahash_pars_fragment:Ov,alphamap_fragment:Vv,alphamap_pars_fragment:Bv,alphatest_fragment:kv,alphatest_pars_fragment:zv,aomap_fragment:Hv,aomap_pars_fragment:Gv,batching_pars_vertex:Wv,batching_vertex:Xv,begin_vertex:qv,beginnormal_vertex:$v,bsdfs:jv,iridescence_fragment:Yv,bumpmap_pars_fragment:Kv,clipping_planes_fragment:Qv,clipping_planes_pars_fragment:Zv,clipping_planes_pars_vertex:Jv,clipping_planes_vertex:ty,color_fragment:ey,color_pars_fragment:ny,color_pars_vertex:iy,color_vertex:ry,common:sy,cube_uv_reflection_fragment:oy,defaultnormal_vertex:ay,displacementmap_pars_vertex:ly,displacementmap_vertex:cy,emissivemap_fragment:hy,emissivemap_pars_fragment:uy,colorspace_fragment:dy,colorspace_pars_fragment:fy,envmap_fragment:py,envmap_common_pars_fragment:my,envmap_pars_fragment:gy,envmap_pars_vertex:_y,envmap_physical_pars_fragment:Ry,envmap_vertex:vy,fog_vertex:yy,fog_pars_vertex:Ey,fog_fragment:xy,fog_pars_fragment:Ty,gradientmap_pars_fragment:Sy,lightmap_pars_fragment:My,lights_lambert_fragment:Ay,lights_lambert_pars_fragment:wy,lights_pars_begin:by,lights_toon_fragment:Cy,lights_toon_pars_fragment:Iy,lights_phong_fragment:Py,lights_phong_pars_fragment:Dy,lights_physical_fragment:Ly,lights_physical_pars_fragment:Ny,lights_fragment_begin:Uy,lights_fragment_maps:Fy,lights_fragment_end:Oy,logdepthbuf_fragment:Vy,logdepthbuf_pars_fragment:By,logdepthbuf_pars_vertex:ky,logdepthbuf_vertex:zy,map_fragment:Hy,map_pars_fragment:Gy,map_particle_fragment:Wy,map_particle_pars_fragment:Xy,metalnessmap_fragment:qy,metalnessmap_pars_fragment:$y,morphinstance_vertex:jy,morphcolor_vertex:Yy,morphnormal_vertex:Ky,morphtarget_pars_vertex:Qy,morphtarget_vertex:Zy,normal_fragment_begin:Jy,normal_fragment_maps:tE,normal_pars_fragment:eE,normal_pars_vertex:nE,normal_vertex:iE,normalmap_pars_fragment:rE,clearcoat_normal_fragment_begin:sE,clearcoat_normal_fragment_maps:oE,clearcoat_pars_fragment:aE,iridescence_pars_fragment:lE,opaque_fragment:cE,packing:hE,premultiplied_alpha_fragment:uE,project_vertex:dE,dithering_fragment:fE,dithering_pars_fragment:pE,roughnessmap_fragment:mE,roughnessmap_pars_fragment:gE,shadowmap_pars_fragment:_E,shadowmap_pars_vertex:vE,shadowmap_vertex:yE,shadowmask_pars_fragment:EE,skinbase_vertex:xE,skinning_pars_vertex:TE,skinning_vertex:SE,skinnormal_vertex:ME,specularmap_fragment:AE,specularmap_pars_fragment:wE,tonemapping_fragment:bE,tonemapping_pars_fragment:RE,transmission_fragment:CE,transmission_pars_fragment:IE,uv_pars_fragment:PE,uv_pars_vertex:DE,uv_vertex:LE,worldpos_vertex:NE,background_vert:UE,background_frag:FE,backgroundCube_vert:OE,backgroundCube_frag:VE,cube_vert:BE,cube_frag:kE,depth_vert:zE,depth_frag:HE,distanceRGBA_vert:GE,distanceRGBA_frag:WE,equirect_vert:XE,equirect_frag:qE,linedashed_vert:$E,linedashed_frag:jE,meshbasic_vert:YE,meshbasic_frag:KE,meshlambert_vert:QE,meshlambert_frag:ZE,meshmatcap_vert:JE,meshmatcap_frag:t0,meshnormal_vert:e0,meshnormal_frag:n0,meshphong_vert:i0,meshphong_frag:r0,meshphysical_vert:s0,meshphysical_frag:o0,meshtoon_vert:a0,meshtoon_frag:l0,points_vert:c0,points_frag:h0,shadow_vert:u0,shadow_frag:d0,sprite_vert:f0,sprite_frag:p0},mt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Gn={basic:{uniforms:un([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:un([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new le(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:un([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:un([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:un([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new le(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:un([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:un([mt.points,mt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:un([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:un([mt.common,mt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:un([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:un([mt.sprite,mt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:un([mt.common,mt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:un([mt.lights,mt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Gn.physical={uniforms:un([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Jo={r:0,b:0,g:0},tr=new Qn,m0=new Ce;function g0(i,t,e,n,r,s,o){const l=new le(0);let c=s===!0?0:1,h,u,d=null,m=0,_=null;function x(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?e:t).get(P)),P}function M(D){let P=!1;const V=x(D);V===null?p(l,c):V&&V.isColor&&(p(V,1),P=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(D,P){const V=x(P);V&&(V.isCubeTexture||V.mapping===Wa)?(u===void 0&&(u=new bn(new _o(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:as(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),tr.copy(P.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),u.material.uniforms.envMap.value=V,u.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(m0.makeRotationFromEuler(tr)),u.material.toneMapped=me.getTransfer(V.colorSpace)!==Ee,(d!==V||m!==V.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,d=V,m=V.version,_=i.toneMapping),u.layers.enableAll(),D.unshift(u,u.geometry,u.material,0,0,null)):V&&V.isTexture&&(h===void 0&&(h=new bn(new Xa(2,2),new zi({name:"BackgroundMaterial",uniforms:as(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=V,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=me.getTransfer(V.colorSpace)!==Ee,V.matrixAutoUpdate===!0&&V.updateMatrix(),h.material.uniforms.uvTransform.value.copy(V.matrix),(d!==V||m!==V.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,d=V,m=V.version,_=i.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function p(D,P){D.getRGB(Jo,Mp(i)),n.buffers.color.setClear(Jo.r,Jo.g,Jo.b,P,o)}function I(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return l},setClearColor:function(D,P=1){l.set(D),c=P,p(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(D){c=D,p(l,c)},render:M,addToRenderList:g,dispose:I}}function _0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let s=r,o=!1;function l(v,A,L,b,Z){let nt=!1;const tt=d(b,L,A);s!==tt&&(s=tt,h(s.object)),nt=_(v,b,L,Z),nt&&x(v,b,L,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,P(v,A,L,b),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return i.createVertexArray()}function h(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function d(v,A,L){const b=L.wireframe===!0;let Z=n[v.id];Z===void 0&&(Z={},n[v.id]=Z);let nt=Z[A.id];nt===void 0&&(nt={},Z[A.id]=nt);let tt=nt[b];return tt===void 0&&(tt=m(c()),nt[b]=tt),tt}function m(v){const A=[],L=[],b=[];for(let Z=0;Z<e;Z++)A[Z]=0,L[Z]=0,b[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:b,object:v,attributes:{},index:null}}function _(v,A,L,b){const Z=s.attributes,nt=A.attributes;let tt=0;const it=L.getAttributes();for(const Y in it)if(it[Y].location>=0){const Tt=Z[Y];let bt=nt[Y];if(bt===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(bt=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(bt=v.instanceColor)),Tt===void 0||Tt.attribute!==bt||bt&&Tt.data!==bt.data)return!0;tt++}return s.attributesNum!==tt||s.index!==b}function x(v,A,L,b){const Z={},nt=A.attributes;let tt=0;const it=L.getAttributes();for(const Y in it)if(it[Y].location>=0){let Tt=nt[Y];Tt===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(Tt=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(Tt=v.instanceColor));const bt={};bt.attribute=Tt,Tt&&Tt.data&&(bt.data=Tt.data),Z[Y]=bt,tt++}s.attributes=Z,s.attributesNum=tt,s.index=b}function M(){const v=s.newAttributes;for(let A=0,L=v.length;A<L;A++)v[A]=0}function g(v){p(v,0)}function p(v,A){const L=s.newAttributes,b=s.enabledAttributes,Z=s.attributeDivisors;L[v]=1,b[v]===0&&(i.enableVertexAttribArray(v),b[v]=1),Z[v]!==A&&(i.vertexAttribDivisor(v,A),Z[v]=A)}function I(){const v=s.newAttributes,A=s.enabledAttributes;for(let L=0,b=A.length;L<b;L++)A[L]!==v[L]&&(i.disableVertexAttribArray(L),A[L]=0)}function D(v,A,L,b,Z,nt,tt){tt===!0?i.vertexAttribIPointer(v,A,L,Z,nt):i.vertexAttribPointer(v,A,L,b,Z,nt)}function P(v,A,L,b){M();const Z=b.attributes,nt=L.getAttributes(),tt=A.defaultAttributeValues;for(const it in nt){const Y=nt[it];if(Y.location>=0){let pt=Z[it];if(pt===void 0&&(it==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),it==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor)),pt!==void 0){const Tt=pt.normalized,bt=pt.itemSize,Ht=t.get(pt);if(Ht===void 0)continue;const Wt=Ht.buffer,Q=Ht.type,lt=Ht.bytesPerElement,At=Q===i.INT||Q===i.UNSIGNED_INT||pt.gpuType===gh;if(pt.isInterleavedBufferAttribute){const dt=pt.data,Nt=dt.stride,de=pt.offset;if(dt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<Y.locationSize;Ut++)p(Y.location+Ut,dt.meshPerAttribute);v.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ut=0;Ut<Y.locationSize;Ut++)g(Y.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Ut=0;Ut<Y.locationSize;Ut++)D(Y.location+Ut,bt/Y.locationSize,Q,Tt,Nt*lt,(de+bt/Y.locationSize*Ut)*lt,At)}else{if(pt.isInstancedBufferAttribute){for(let dt=0;dt<Y.locationSize;dt++)p(Y.location+dt,pt.meshPerAttribute);v.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let dt=0;dt<Y.locationSize;dt++)g(Y.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let dt=0;dt<Y.locationSize;dt++)D(Y.location+dt,bt/Y.locationSize,Q,Tt,bt*lt,bt/Y.locationSize*dt*lt,At)}}else if(tt!==void 0){const Tt=tt[it];if(Tt!==void 0)switch(Tt.length){case 2:i.vertexAttrib2fv(Y.location,Tt);break;case 3:i.vertexAttrib3fv(Y.location,Tt);break;case 4:i.vertexAttrib4fv(Y.location,Tt);break;default:i.vertexAttrib1fv(Y.location,Tt)}}}}I()}function V(){T();for(const v in n){const A=n[v];for(const L in A){const b=A[L];for(const Z in b)u(b[Z].object),delete b[Z];delete A[L]}delete n[v]}}function F(v){if(n[v.id]===void 0)return;const A=n[v.id];for(const L in A){const b=A[L];for(const Z in b)u(b[Z].object),delete b[Z];delete A[L]}delete n[v.id]}function S(v){for(const A in n){const L=n[A];if(L[v.id]===void 0)continue;const b=L[v.id];for(const Z in b)u(b[Z].object),delete b[Z];delete L[v.id]}}function T(){y(),o=!0,s!==r&&(s=r,h(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:T,resetDefaultState:y,dispose:V,releaseStatesOfGeometry:F,releaseStatesOfProgram:S,initAttributes:M,enableAttribute:g,disableUnusedAttributes:I}}function v0(i,t,e){let n;function r(h){n=h}function s(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function o(h,u,d){d!==0&&(i.drawArraysInstanced(n,h,u,d),e.update(u,n,d))}function l(h,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,d);let _=0;for(let x=0;x<d;x++)_+=u[x];e.update(_,n,1)}function c(h,u,d,m){if(d===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<h.length;x++)o(h[x],u[x],m[x]);else{_.multiDrawArraysInstancedWEBGL(n,h,0,u,0,m,0,d);let x=0;for(let M=0;M<d;M++)x+=u[M]*m[M];e.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function y0(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(S){return!(S!==On&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(S){const T=S===fo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Kn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==di&&!T)}function c(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const u=c(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const d=e.logarithmicDepthBuffer===!0,m=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),V=x>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:m,maxTextures:_,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:P,vertexTextures:V,maxSamples:F}}function E0(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Ci,l=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const _=d.length!==0||m||n!==0||r;return r=m,n=d.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,m){e=u(d,m,0)},this.setState=function(d,m,_){const x=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!r||x===null||x.length===0||s&&!g)s?u(null):h();else{const I=s?0:n,D=I*4;let P=p.clippingState||null;c.value=P,P=u(x,m,D,_);for(let V=0;V!==D;++V)P[V]=e[V];p.clippingState=P,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=I}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,m,_,x){const M=d!==null?d.length:0;let g=null;if(M!==0){if(g=c.value,x!==!0||g===null){const p=_+M*4,I=m.matrixWorldInverse;l.getNormalMatrix(I),(g===null||g.length<p)&&(g=new Float32Array(p));for(let D=0,P=_;D!==M;++D,P+=4)o.copy(d[D]).applyMatrix4(I,l),o.normal.toArray(g,P),g[P+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}function x0(i){let t=new WeakMap;function e(o,l){return l===dc?o.mapping=rs:l===fc&&(o.mapping=ss),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===dc||l===fc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const h=new pv(c.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",r),e(h.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Kr=4,md=[.125,.215,.35,.446,.526,.582],or=20,Bl=new Cv,gd=new le;let kl=null,zl=0,Hl=0,Gl=!1;const nr=(1+Math.sqrt(5))/2,Hr=1/nr,_d=[new z(-nr,Hr,0),new z(nr,Hr,0),new z(-Hr,0,nr),new z(Hr,0,nr),new z(0,nr,-Hr),new z(0,nr,Hr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],T0=new z;class vd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:l=T0}=s;kl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kl,zl,Hl),this._renderer.xr.enabled=Gl,t.scissorTest=!1,ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:fo,format:On,colorSpace:os,depthBuffer:!1},r=yd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yd(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S0(s)),this._blurMaterial=M0(s,t,e)}return r}_compileMaterial(t){const e=new bn(this._lodPlanes[0],t);this._renderer.compile(e,Bl)}_sceneToCubeUV(t,e,n,r,s){const c=new wn(90,1,e,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,_=d.toneMapping;d.getClearColor(gd),d.toneMapping=Ni,d.autoClear=!1;const x=new Mh({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),M=new bn(new _o,x);let g=!1;const p=t.background;p?p.isColor&&(x.color.copy(p),t.background=null,g=!0):(x.color.copy(gd),g=!0);for(let I=0;I<6;I++){const D=I%3;D===0?(c.up.set(0,h[I],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[I],s.y,s.z)):D===1?(c.up.set(0,0,h[I]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[I],s.z)):(c.up.set(0,h[I],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[I]));const P=this._cubeSize;ta(r,D*P,I>2?P:0,P,P),d.setRenderTarget(r),g&&d.render(M,c),d.render(t,c)}M.geometry.dispose(),M.material.dispose(),d.toneMapping=_,d.autoClear=m,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===rs||t.mapping===ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ed());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new bn(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=t;const c=this._cubeSize;ta(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Bl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=_d[(r-s-1)%_d.length];this._blur(t,s-1,s,o,l)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,l){const c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new bn(this._lodPlanes[r],h),m=h.uniforms,_=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*or-1),M=s/x,g=isFinite(s)?1+Math.floor(u*M):or;g>or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${or}`);const p=[];let I=0;for(let S=0;S<or;++S){const T=S/M,y=Math.exp(-T*T/2);p.push(y),S===0?I+=y:S<g&&(I+=2*y)}for(let S=0;S<p.length;S++)p[S]=p[S]/I;m.envMap.value=t.texture,m.samples.value=g,m.weights.value=p,m.latitudinal.value=o==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:D}=this;m.dTheta.value=x,m.mipInt.value=D-n;const P=this._sizeLods[r],V=3*P*(r>D-Kr?r-D+Kr:0),F=4*(this._cubeSize-P);ta(e,V,F,3*P,2*P),c.setRenderTarget(e),c.render(d,Bl)}}function S0(i){const t=[],e=[],n=[];let r=i;const s=i-Kr+1+md.length;for(let o=0;o<s;o++){const l=Math.pow(2,r);e.push(l);let c=1/l;o>i-Kr?c=md[o-i+Kr-1]:o===0&&(c=0),n.push(c);const h=1/(l-2),u=-h,d=1+h,m=[u,u,d,u,d,d,u,u,d,d,u,d],_=6,x=6,M=3,g=2,p=1,I=new Float32Array(M*x*_),D=new Float32Array(g*x*_),P=new Float32Array(p*x*_);for(let F=0;F<_;F++){const S=F%3*2/3-1,T=F>2?0:-1,y=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];I.set(y,M*x*F),D.set(m,g*x*F);const v=[F,F,F,F,F,F];P.set(v,p*x*F)}const V=new ji;V.setAttribute("position",new Xn(I,M)),V.setAttribute("uv",new Xn(D,g)),V.setAttribute("faceIndex",new Xn(P,p)),t.push(V),r>Kr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yd(i,t,e){const n=new pr(i,t,e);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function M0(i,t,e){const n=new Float32Array(or),r=new z(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Ed(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function xd(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Rh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function A0(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const c=l.mapping,h=c===dc||c===fc,u=c===rs||c===ss;if(h||u){let d=t.get(l);const m=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==m)return e===null&&(e=new vd(i)),d=h?e.fromEquirectangular(l,d):e.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),d.texture;if(d!==void 0)return d.texture;{const _=l.image;return h&&_&&_.height>0||u&&_&&r(_)?(e===null&&(e=new vd(i)),d=h?e.fromEquirectangular(l):e.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,t.set(l,d),l.addEventListener("dispose",s),d.texture):null}}}return l}function r(l){let c=0;const h=6;for(let u=0;u<h;u++)l[u]!==void 0&&c++;return c===h}function s(l){const c=l.target;c.removeEventListener("dispose",s);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function w0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&ga("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function b0(i,t,e,n){const r={},s=new WeakMap;function o(d){const m=d.target;m.index!==null&&t.remove(m.index);for(const x in m.attributes)t.remove(m.attributes[x]);m.removeEventListener("dispose",o),delete r[m.id];const _=s.get(m);_&&(t.remove(_),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function l(d,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,e.memory.geometries++),m}function c(d){const m=d.attributes;for(const _ in m)t.update(m[_],i.ARRAY_BUFFER)}function h(d){const m=[],_=d.index,x=d.attributes.position;let M=0;if(_!==null){const I=_.array;M=_.version;for(let D=0,P=I.length;D<P;D+=3){const V=I[D+0],F=I[D+1],S=I[D+2];m.push(V,F,F,S,S,V)}}else if(x!==void 0){const I=x.array;M=x.version;for(let D=0,P=I.length/3-1;D<P;D+=3){const V=D+0,F=D+1,S=D+2;m.push(V,F,F,S,S,V)}}else return;const g=new(_p(m)?Sp:Tp)(m,1);g.version=M;const p=s.get(d);p&&t.remove(p),s.set(d,g)}function u(d){const m=s.get(d);if(m){const _=d.index;_!==null&&m.version<_.version&&h(d)}else h(d);return s.get(d)}return{get:l,update:c,getWireframeAttribute:u}}function R0(i,t,e){let n;function r(m){n=m}let s,o;function l(m){s=m.type,o=m.bytesPerElement}function c(m,_){i.drawElements(n,_,s,m*o),e.update(_,n,1)}function h(m,_,x){x!==0&&(i.drawElementsInstanced(n,_,s,m*o,x),e.update(_,n,x))}function u(m,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,m,0,x);let g=0;for(let p=0;p<x;p++)g+=_[p];e.update(g,n,1)}function d(m,_,x,M){if(x===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<m.length;p++)h(m[p]/o,_[p],M[p]);else{g.multiDrawElementsInstancedWEBGL(n,_,0,s,m,0,M,0,x);let p=0;for(let I=0;I<x;I++)p+=_[I]*M[I];e.update(p,n,1)}}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function C0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=l*(s/3);break;case i.LINES:e.lines+=l*(s/2);break;case i.LINE_STRIP:e.lines+=l*(s-1);break;case i.LINE_LOOP:e.lines+=l*s;break;case i.POINTS:e.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function I0(i,t,e){const n=new WeakMap,r=new Te;function s(o,l,c){const h=o.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=u!==void 0?u.length:0;let m=n.get(l);if(m===void 0||m.count!==d){let v=function(){T.dispose(),n.delete(l),l.removeEventListener("dispose",v)};var _=v;m!==void 0&&m.texture.dispose();const x=l.morphAttributes.position!==void 0,M=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],I=l.morphAttributes.normal||[],D=l.morphAttributes.color||[];let P=0;x===!0&&(P=1),M===!0&&(P=2),g===!0&&(P=3);let V=l.attributes.position.count*P,F=1;V>t.maxTextureSize&&(F=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const S=new Float32Array(V*F*4*d),T=new vp(S,V,F,d);T.type=di,T.needsUpdate=!0;const y=P*4;for(let A=0;A<d;A++){const L=p[A],b=I[A],Z=D[A],nt=V*F*4*A;for(let tt=0;tt<L.count;tt++){const it=tt*y;x===!0&&(r.fromBufferAttribute(L,tt),S[nt+it+0]=r.x,S[nt+it+1]=r.y,S[nt+it+2]=r.z,S[nt+it+3]=0),M===!0&&(r.fromBufferAttribute(b,tt),S[nt+it+4]=r.x,S[nt+it+5]=r.y,S[nt+it+6]=r.z,S[nt+it+7]=0),g===!0&&(r.fromBufferAttribute(Z,tt),S[nt+it+8]=r.x,S[nt+it+9]=r.y,S[nt+it+10]=r.z,S[nt+it+11]=Z.itemSize===4?r.w:1)}}m={count:d,texture:T,size:new qt(V,F)},n.set(l,m),l.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let x=0;for(let g=0;g<h.length;g++)x+=h[g];const M=l.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function P0(i,t,e,n){let r=new WeakMap;function s(c){const h=n.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:o}}const Ip=new dn,Td=new wp(1,1),Pp=new vp,Dp=new Q_,Lp=new Ah,Sd=[],Md=[],Ad=new Float32Array(16),wd=new Float32Array(9),bd=new Float32Array(4);function gs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Sd[r];if(s===void 0&&(s=new Float32Array(r),Sd[r]=s),t!==0){n.toArray(s,0);for(let o=1,l=0;o!==t;++o)l+=e,i[o].toArray(s,l)}return s}function Xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $a(i,t){let e=Md[t];e===void 0&&(e=new Int32Array(t),Md[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function D0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function F0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;bd.set(n),i.uniformMatrix2fv(this.addr,!1,bd),qe(e,n)}}function O0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;wd.set(n),i.uniformMatrix3fv(this.addr,!1,wd),qe(e,n)}}function V0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Ad.set(n),i.uniformMatrix4fv(this.addr,!1,Ad),qe(e,n)}}function B0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function k0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function H0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function G0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function W0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function X0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function $0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Td.compareFunction=gp,s=Td):s=Ip,e.setTexture2D(t||s,r)}function j0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Dp,r)}function Y0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Lp,r)}function K0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Pp,r)}function Q0(i){switch(i){case 5126:return D0;case 35664:return L0;case 35665:return N0;case 35666:return U0;case 35674:return F0;case 35675:return O0;case 35676:return V0;case 5124:case 35670:return B0;case 35667:case 35671:return k0;case 35668:case 35672:return z0;case 35669:case 35673:return H0;case 5125:return G0;case 36294:return W0;case 36295:return X0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return K0}}function Z0(i,t){i.uniform1fv(this.addr,t)}function J0(i,t){const e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function tx(i,t){const e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function ex(i,t){const e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function nx(i,t){const e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ix(i,t){const e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function rx(i,t){const e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sx(i,t){i.uniform1iv(this.addr,t)}function ox(i,t){i.uniform2iv(this.addr,t)}function ax(i,t){i.uniform3iv(this.addr,t)}function lx(i,t){i.uniform4iv(this.addr,t)}function cx(i,t){i.uniform1uiv(this.addr,t)}function hx(i,t){i.uniform2uiv(this.addr,t)}function ux(i,t){i.uniform3uiv(this.addr,t)}function dx(i,t){i.uniform4uiv(this.addr,t)}function fx(i,t,e){const n=this.cache,r=t.length,s=$a(e,r);Xe(n,s)||(i.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Ip,s[o])}function px(i,t,e){const n=this.cache,r=t.length,s=$a(e,r);Xe(n,s)||(i.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Dp,s[o])}function mx(i,t,e){const n=this.cache,r=t.length,s=$a(e,r);Xe(n,s)||(i.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Lp,s[o])}function gx(i,t,e){const n=this.cache,r=t.length,s=$a(e,r);Xe(n,s)||(i.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Pp,s[o])}function _x(i){switch(i){case 5126:return Z0;case 35664:return J0;case 35665:return tx;case 35666:return ex;case 35674:return nx;case 35675:return ix;case 35676:return rx;case 5124:case 35670:return sx;case 35667:case 35671:return ox;case 35668:case 35672:return ax;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return hx;case 36295:return ux;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}class vx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Q0(e.type)}}class yx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_x(e.type)}}class Ex{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(t,e[l.id],n)}}}const Wl=/(\w+)(\])?(\[|\.)?/g;function Rd(i,t){i.seq.push(t),i.map[t.id]=t}function xx(i,t,e){const n=i.name,r=n.length;for(Wl.lastIndex=0;;){const s=Wl.exec(n),o=Wl.lastIndex;let l=s[1];const c=s[2]==="]",h=s[3];if(c&&(l=l|0),h===void 0||h==="["&&o+2===r){Rd(e,h===void 0?new vx(l,i,t):new yx(l,i,t));break}else{let d=e.map[l];d===void 0&&(d=new Ex(l),Rd(e,d)),e=d}}}class _a{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);xx(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const l=e[s],c=n[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Cd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Tx=37297;let Sx=0;function Mx(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const l=o+1;n.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return n.join(`
`)}const Id=new Kt;function Ax(i){me._getMatrix(Id,me.workingColorSpace,i);const t=`mat3( ${Id.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case wa:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Mx(i.getShaderSource(t),o)}else return r}function wx(i,t){const e=Ax(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function bx(i,t){let e;switch(t){case T_:e="Linear";break;case S_:e="Reinhard";break;case M_:e="Cineon";break;case A_:e="ACESFilmic";break;case b_:e="AgX";break;case R_:e="Neutral";break;case w_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ea=new z;function Rx(){me.getLuminanceCoefficients(ea);const i=ea.x.toFixed(4),t=ea.y.toFixed(4),e=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function Ix(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Px(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:l}}return e}function Bs(i){return i!==""}function Dd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ld(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(i){return i.replace(Dx,Nx)}const Lx=new Map;function Nx(i,t){let e=Qt[t];if(e===void 0){const n=Lx.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gc(e)}const Ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nd(i){return i.replace(Ux,Fx)}function Fx(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ud(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ox(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===e_?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ci&&(t="SHADOWMAP_TYPE_VSM"),t}function Vx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rs:case ss:t="ENVMAP_TYPE_CUBE";break;case Wa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function kx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sp:t="ENVMAP_BLENDING_MULTIPLY";break;case E_:t="ENVMAP_BLENDING_MIX";break;case x_:t="ENVMAP_BLENDING_ADD";break}return t}function zx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Hx(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,l=e.fragmentShader;const c=Ox(e),h=Vx(e),u=Bx(e),d=kx(e),m=zx(e),_=Cx(e),x=Ix(s),M=r.createProgram();let g,p,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Bs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Bs).join(`
`),p.length>0&&(p+=`
`)):(g=[Ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),p=[Ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Ni?bx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,wx("linearToOutputTexel",e.outputColorSpace),Rx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),o=Gc(o),o=Dd(o,e),o=Ld(o,e),l=Gc(l),l=Dd(l,e),l=Ld(l,e),o=Nd(o),l=Nd(l),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const D=I+g+o,P=I+p+l,V=Cd(r,r.VERTEX_SHADER,D),F=Cd(r,r.FRAGMENT_SHADER,P);r.attachShader(M,V),r.attachShader(M,F),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function S(A){if(i.debug.checkShaderErrors){const L=r.getProgramInfoLog(M).trim(),b=r.getShaderInfoLog(V).trim(),Z=r.getShaderInfoLog(F).trim();let nt=!0,tt=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,V,F);else{const it=Pd(r,V,"vertex"),Y=Pd(r,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+it+`
`+Y)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(b===""||Z==="")&&(tt=!1);tt&&(A.diagnostics={runnable:nt,programLog:L,vertexShader:{log:b,prefix:g},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(V),r.deleteShader(F),T=new _a(r,M),y=Px(r,M)}let T;this.getUniforms=function(){return T===void 0&&S(this),T};let y;this.getAttributes=function(){return y===void 0&&S(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(M,Tx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sx++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=V,this.fragmentShader=F,this}let Gx=0;class Wx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xx(t),e.set(t,n)),n}}class Xx{constructor(t){this.id=Gx++,this.code=t,this.usedTimes=0}}function qx(i,t,e,n,r,s,o){const l=new Ep,c=new Wx,h=new Set,u=[],d=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return h.add(y),y===0?"uv":`uv${y}`}function g(y,v,A,L,b){const Z=L.fog,nt=b.geometry,tt=y.isMeshStandardMaterial?L.environment:null,it=(y.isMeshStandardMaterial?e:t).get(y.envMap||tt),Y=it&&it.mapping===Wa?it.image.height:null,pt=x[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const Tt=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,bt=Tt!==void 0?Tt.length:0;let Ht=0;nt.morphAttributes.position!==void 0&&(Ht=1),nt.morphAttributes.normal!==void 0&&(Ht=2),nt.morphAttributes.color!==void 0&&(Ht=3);let Wt,Q,lt,At;if(pt){const oe=Gn[pt];Wt=oe.vertexShader,Q=oe.fragmentShader}else Wt=y.vertexShader,Q=y.fragmentShader,c.update(y),lt=c.getVertexShaderID(y),At=c.getFragmentShaderID(y);const dt=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),de=b.isInstancedMesh===!0,Ut=b.isBatchedMesh===!0,we=!!y.map,Se=!!y.matcap,Jt=!!it,U=!!y.aoMap,tn=!!y.lightMap,ee=!!y.bumpMap,ne=!!y.normalMap,Rt=!!y.displacementMap,ye=!!y.emissiveMap,wt=!!y.metalnessMap,N=!!y.roughnessMap,w=y.anisotropy>0,G=y.clearcoat>0,K=y.dispersion>0,rt=y.iridescence>0,$=y.sheen>0,_t=y.transmission>0,ft=w&&!!y.anisotropyMap,Dt=G&&!!y.clearcoatMap,Ft=G&&!!y.clearcoatNormalMap,at=G&&!!y.clearcoatRoughnessMap,Et=rt&&!!y.iridescenceMap,Ot=rt&&!!y.iridescenceThicknessMap,kt=$&&!!y.sheenColorMap,St=$&&!!y.sheenRoughnessMap,ie=!!y.specularMap,jt=!!y.specularColorMap,ge=!!y.specularIntensityMap,O=_t&&!!y.transmissionMap,gt=_t&&!!y.thicknessMap,j=!!y.gradientMap,et=!!y.alphaMap,vt=y.alphaTest>0,ht=!!y.alphaHash,Xt=!!y.extensions;let Me=Ni;y.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Me=i.toneMapping);const Ve={shaderID:pt,shaderType:y.type,shaderName:y.name,vertexShader:Wt,fragmentShader:Q,defines:y.defines,customVertexShaderID:lt,customFragmentShaderID:At,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Ut,batchingColor:Ut&&b._colorsTexture!==null,instancing:de,instancingColor:de&&b.instanceColor!==null,instancingMorph:de&&b.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:os,alphaToCoverage:!!y.alphaToCoverage,map:we,matcap:Se,envMap:Jt,envMapMode:Jt&&it.mapping,envMapCubeUVHeight:Y,aoMap:U,lightMap:tn,bumpMap:ee,normalMap:ne,displacementMap:m&&Rt,emissiveMap:ye,normalMapObjectSpace:ne&&y.normalMapType===D_,normalMapTangentSpace:ne&&y.normalMapType===mp,metalnessMap:wt,roughnessMap:N,anisotropy:w,anisotropyMap:ft,clearcoat:G,clearcoatMap:Dt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:at,dispersion:K,iridescence:rt,iridescenceMap:Et,iridescenceThicknessMap:Ot,sheen:$,sheenColorMap:kt,sheenRoughnessMap:St,specularMap:ie,specularColorMap:jt,specularIntensityMap:ge,transmission:_t,transmissionMap:O,thicknessMap:gt,gradientMap:j,opaque:y.transparent===!1&&y.blending===Jr&&y.alphaToCoverage===!1,alphaMap:et,alphaTest:vt,alphaHash:ht,combine:y.combine,mapUv:we&&M(y.map.channel),aoMapUv:U&&M(y.aoMap.channel),lightMapUv:tn&&M(y.lightMap.channel),bumpMapUv:ee&&M(y.bumpMap.channel),normalMapUv:ne&&M(y.normalMap.channel),displacementMapUv:Rt&&M(y.displacementMap.channel),emissiveMapUv:ye&&M(y.emissiveMap.channel),metalnessMapUv:wt&&M(y.metalnessMap.channel),roughnessMapUv:N&&M(y.roughnessMap.channel),anisotropyMapUv:ft&&M(y.anisotropyMap.channel),clearcoatMapUv:Dt&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:St&&M(y.sheenRoughnessMap.channel),specularMapUv:ie&&M(y.specularMap.channel),specularColorMapUv:jt&&M(y.specularColorMap.channel),specularIntensityMapUv:ge&&M(y.specularIntensityMap.channel),transmissionMapUv:O&&M(y.transmissionMap.channel),thicknessMapUv:gt&&M(y.thicknessMap.channel),alphaMapUv:et&&M(y.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(ne||w),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!nt.attributes.uv&&(we||et),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Nt,skinning:b.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Ht,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:we&&y.map.isVideoTexture===!0&&me.getTransfer(y.map.colorSpace)===Ee,decodeVideoTextureEmissive:ye&&y.emissiveMap.isVideoTexture===!0&&me.getTransfer(y.emissiveMap.colorSpace)===Ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===hi,flipSided:y.side===yn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Xt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&y.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ve.vertexUv1s=h.has(1),Ve.vertexUv2s=h.has(2),Ve.vertexUv3s=h.has(3),h.clear(),Ve}function p(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)v.push(A),v.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(I(v,y),D(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function I(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function D(y,v){l.disableAll(),v.supportsVertexTextures&&l.enable(0),v.instancing&&l.enable(1),v.instancingColor&&l.enable(2),v.instancingMorph&&l.enable(3),v.matcap&&l.enable(4),v.envMap&&l.enable(5),v.normalMapObjectSpace&&l.enable(6),v.normalMapTangentSpace&&l.enable(7),v.clearcoat&&l.enable(8),v.iridescence&&l.enable(9),v.alphaTest&&l.enable(10),v.vertexColors&&l.enable(11),v.vertexAlphas&&l.enable(12),v.vertexUv1s&&l.enable(13),v.vertexUv2s&&l.enable(14),v.vertexUv3s&&l.enable(15),v.vertexTangents&&l.enable(16),v.anisotropy&&l.enable(17),v.alphaHash&&l.enable(18),v.batching&&l.enable(19),v.dispersion&&l.enable(20),v.batchingColor&&l.enable(21),y.push(l.mask),l.disableAll(),v.fog&&l.enable(0),v.useFog&&l.enable(1),v.flatShading&&l.enable(2),v.logarithmicDepthBuffer&&l.enable(3),v.reverseDepthBuffer&&l.enable(4),v.skinning&&l.enable(5),v.morphTargets&&l.enable(6),v.morphNormals&&l.enable(7),v.morphColors&&l.enable(8),v.premultipliedAlpha&&l.enable(9),v.shadowMapEnabled&&l.enable(10),v.doubleSided&&l.enable(11),v.flipSided&&l.enable(12),v.useDepthPacking&&l.enable(13),v.dithering&&l.enable(14),v.transmission&&l.enable(15),v.sheen&&l.enable(16),v.opaque&&l.enable(17),v.pointsUvs&&l.enable(18),v.decodeVideoTexture&&l.enable(19),v.decodeVideoTextureEmissive&&l.enable(20),v.alphaToCoverage&&l.enable(21),y.push(l.mask)}function P(y){const v=x[y.type];let A;if(v){const L=Gn[v];A=hv.clone(L.uniforms)}else A=y.uniforms;return A}function V(y,v){let A;for(let L=0,b=u.length;L<b;L++){const Z=u[L];if(Z.cacheKey===v){A=Z,++A.usedTimes;break}}return A===void 0&&(A=new Hx(i,v,y,s),u.push(A)),A}function F(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function S(y){c.remove(y)}function T(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:P,acquireProgram:V,releaseProgram:F,releaseShaderCache:S,programs:u,dispose:T}}function $x(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function r(o,l,c){i.get(o)[l]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function jx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Od(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(d,m,_,x,M,g){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:m,material:_,groupOrder:x,renderOrder:d.renderOrder,z:M,group:g},i[t]=p):(p.id=d.id,p.object=d,p.geometry=m,p.material=_,p.groupOrder=x,p.renderOrder=d.renderOrder,p.z=M,p.group=g),t++,p}function l(d,m,_,x,M,g){const p=o(d,m,_,x,M,g);_.transmission>0?n.push(p):_.transparent===!0?r.push(p):e.push(p)}function c(d,m,_,x,M,g){const p=o(d,m,_,x,M,g);_.transmission>0?n.unshift(p):_.transparent===!0?r.unshift(p):e.unshift(p)}function h(d,m){e.length>1&&e.sort(d||jx),n.length>1&&n.sort(m||Fd),r.length>1&&r.sort(m||Fd)}function u(){for(let d=t,m=i.length;d<m;d++){const _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:h}}function Yx(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Od,i.set(n,[o])):r>=s.length?(o=new Od,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Kx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new le};break;case"SpotLight":e={position:new z,direction:new z,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function Qx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Zx=0;function Jx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tT(i){const t=new Kx,e=Qx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new z);const r=new z,s=new Ce,o=new Ce;function l(h){let u=0,d=0,m=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let _=0,x=0,M=0,g=0,p=0,I=0,D=0,P=0,V=0,F=0,S=0;h.sort(Jx);for(let y=0,v=h.length;y<v;y++){const A=h[y],L=A.color,b=A.intensity,Z=A.distance,nt=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=L.r*b,d+=L.g*b,m+=L.b*b;else if(A.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(A.sh.coefficients[tt],b);S++}else if(A.isDirectionalLight){const tt=t.get(A);if(tt.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const it=A.shadow,Y=e.get(A);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,n.directionalShadow[_]=Y,n.directionalShadowMap[_]=nt,n.directionalShadowMatrix[_]=A.shadow.matrix,I++}n.directional[_]=tt,_++}else if(A.isSpotLight){const tt=t.get(A);tt.position.setFromMatrixPosition(A.matrixWorld),tt.color.copy(L).multiplyScalar(b),tt.distance=Z,tt.coneCos=Math.cos(A.angle),tt.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),tt.decay=A.decay,n.spot[M]=tt;const it=A.shadow;if(A.map&&(n.spotLightMap[V]=A.map,V++,it.updateMatrices(A),A.castShadow&&F++),n.spotLightMatrix[M]=it.matrix,A.castShadow){const Y=e.get(A);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,n.spotShadow[M]=Y,n.spotShadowMap[M]=nt,P++}M++}else if(A.isRectAreaLight){const tt=t.get(A);tt.color.copy(L).multiplyScalar(b),tt.halfWidth.set(A.width*.5,0,0),tt.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=tt,g++}else if(A.isPointLight){const tt=t.get(A);if(tt.color.copy(A.color).multiplyScalar(A.intensity),tt.distance=A.distance,tt.decay=A.decay,A.castShadow){const it=A.shadow,Y=e.get(A);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,Y.shadowCameraNear=it.camera.near,Y.shadowCameraFar=it.camera.far,n.pointShadow[x]=Y,n.pointShadowMap[x]=nt,n.pointShadowMatrix[x]=A.shadow.matrix,D++}n.point[x]=tt,x++}else if(A.isHemisphereLight){const tt=t.get(A);tt.skyColor.copy(A.color).multiplyScalar(b),tt.groundColor.copy(A.groundColor).multiplyScalar(b),n.hemi[p]=tt,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=m;const T=n.hash;(T.directionalLength!==_||T.pointLength!==x||T.spotLength!==M||T.rectAreaLength!==g||T.hemiLength!==p||T.numDirectionalShadows!==I||T.numPointShadows!==D||T.numSpotShadows!==P||T.numSpotMaps!==V||T.numLightProbes!==S)&&(n.directional.length=_,n.spot.length=M,n.rectArea.length=g,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=P+V-F,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=S,T.directionalLength=_,T.pointLength=x,T.spotLength=M,T.rectAreaLength=g,T.hemiLength=p,T.numDirectionalShadows=I,T.numPointShadows=D,T.numSpotShadows=P,T.numSpotMaps=V,T.numLightProbes=S,n.version=Zx++)}function c(h,u){let d=0,m=0,_=0,x=0,M=0;const g=u.matrixWorldInverse;for(let p=0,I=h.length;p<I;p++){const D=h[p];if(D.isDirectionalLight){const P=n.directional[d];P.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(g),d++}else if(D.isSpotLight){const P=n.spot[_];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(g),P.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(g),_++}else if(D.isRectAreaLight){const P=n.rectArea[x];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(g),o.identity(),s.copy(D.matrixWorld),s.premultiply(g),o.extractRotation(s),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),x++}else if(D.isPointLight){const P=n.point[m];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(g),m++}else if(D.isHemisphereLight){const P=n.hemi[M];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(g),M++}}}return{setup:l,setupView:c,state:n}}function Vd(i){const t=new tT(i),e=[],n=[];function r(u){h.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function l(){t.setup(e)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function eT(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let l;return o===void 0?(l=new Vd(i),t.set(r,[l])):s>=o.length?(l=new Vd(i),o.push(l)):l=o[s],l}function n(){t=new WeakMap}return{get:e,dispose:n}}const nT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rT(i,t,e){let n=new wh;const r=new qt,s=new qt,o=new Te,l=new Ev({depthPacking:P_}),c=new xv,h={},u=e.maxTextureSize,d={[ki]:yn,[yn]:ki,[hi]:hi},m=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:nT,fragmentShader:iT}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const x=new ji;x.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new bn(x,m),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rp;let p=this.type;this.render=function(F,S,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||F.length===0)return;const y=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Li),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const b=p!==ci&&this.type===ci,Z=p===ci&&this.type!==ci;for(let nt=0,tt=F.length;nt<tt;nt++){const it=F[nt],Y=it.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const pt=Y.getFrameExtents();if(r.multiply(pt),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pt.x),r.x=s.x*pt.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pt.y),r.y=s.y*pt.y,Y.mapSize.y=s.y)),Y.map===null||b===!0||Z===!0){const bt=this.type!==ci?{minFilter:Bn,magFilter:Bn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new pr(r.x,r.y,bt),Y.map.texture.name=it.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const Tt=Y.getViewportCount();for(let bt=0;bt<Tt;bt++){const Ht=Y.getViewport(bt);o.set(s.x*Ht.x,s.y*Ht.y,s.x*Ht.z,s.y*Ht.w),L.viewport(o),Y.updateMatrices(it,bt),n=Y.getFrustum(),P(S,T,Y.camera,it,this.type)}Y.isPointLightShadow!==!0&&this.type===ci&&I(Y,T),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(y,v,A)};function I(F,S){const T=t.update(M);m.defines.VSM_SAMPLES!==F.blurSamples&&(m.defines.VSM_SAMPLES=F.blurSamples,_.defines.VSM_SAMPLES=F.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new pr(r.x,r.y)),m.uniforms.shadow_pass.value=F.map.texture,m.uniforms.resolution.value=F.mapSize,m.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(S,null,T,m,M,null),_.uniforms.shadow_pass.value=F.mapPass.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(S,null,T,_,M,null)}function D(F,S,T,y){let v=null;const A=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(A!==void 0)v=A;else if(v=T.isPointLight===!0?c:l,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){const L=v.uuid,b=S.uuid;let Z=h[L];Z===void 0&&(Z={},h[L]=Z);let nt=Z[b];nt===void 0&&(nt=v.clone(),Z[b]=nt,S.addEventListener("dispose",V)),v=nt}if(v.visible=S.visible,v.wireframe=S.wireframe,y===ci?v.side=S.shadowSide!==null?S.shadowSide:S.side:v.side=S.shadowSide!==null?S.shadowSide:d[S.side],v.alphaMap=S.alphaMap,v.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,v.map=S.map,v.clipShadows=S.clipShadows,v.clippingPlanes=S.clippingPlanes,v.clipIntersection=S.clipIntersection,v.displacementMap=S.displacementMap,v.displacementScale=S.displacementScale,v.displacementBias=S.displacementBias,v.wireframeLinewidth=S.wireframeLinewidth,v.linewidth=S.linewidth,T.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const L=i.properties.get(v);L.light=T}return v}function P(F,S,T,y,v){if(F.visible===!1)return;if(F.layers.test(S.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&v===ci)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);const b=t.update(F),Z=F.material;if(Array.isArray(Z)){const nt=b.groups;for(let tt=0,it=nt.length;tt<it;tt++){const Y=nt[tt],pt=Z[Y.materialIndex];if(pt&&pt.visible){const Tt=D(F,pt,y,v);F.onBeforeShadow(i,F,S,T,b,Tt,Y),i.renderBufferDirect(T,null,b,Tt,F,Y),F.onAfterShadow(i,F,S,T,b,Tt,Y)}}}else if(Z.visible){const nt=D(F,Z,y,v);F.onBeforeShadow(i,F,S,T,b,nt,null),i.renderBufferDirect(T,null,b,nt,F,null),F.onAfterShadow(i,F,S,T,b,nt,null)}}const L=F.children;for(let b=0,Z=L.length;b<Z;b++)P(L[b],S,T,y,v)}function V(F){F.target.removeEventListener("dispose",V);for(const T in h){const y=h[T],v=F.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const sT={[sc]:oc,[ac]:hc,[lc]:uc,[is]:cc,[oc]:sc,[hc]:ac,[uc]:lc,[cc]:is};function oT(i,t){function e(){let O=!1;const gt=new Te;let j=null;const et=new Te(0,0,0,0);return{setMask:function(vt){j!==vt&&!O&&(i.colorMask(vt,vt,vt,vt),j=vt)},setLocked:function(vt){O=vt},setClear:function(vt,ht,Xt,Me,Ve){Ve===!0&&(vt*=Me,ht*=Me,Xt*=Me),gt.set(vt,ht,Xt,Me),et.equals(gt)===!1&&(i.clearColor(vt,ht,Xt,Me),et.copy(gt))},reset:function(){O=!1,j=null,et.set(-1,0,0,0)}}}function n(){let O=!1,gt=!1,j=null,et=null,vt=null;return{setReversed:function(ht){if(gt!==ht){const Xt=t.get("EXT_clip_control");ht?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),gt=ht;const Me=vt;vt=null,this.setClear(Me)}},getReversed:function(){return gt},setTest:function(ht){ht?dt(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(ht){j!==ht&&!O&&(i.depthMask(ht),j=ht)},setFunc:function(ht){if(gt&&(ht=sT[ht]),et!==ht){switch(ht){case sc:i.depthFunc(i.NEVER);break;case oc:i.depthFunc(i.ALWAYS);break;case ac:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case lc:i.depthFunc(i.EQUAL);break;case cc:i.depthFunc(i.GEQUAL);break;case hc:i.depthFunc(i.GREATER);break;case uc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=ht}},setLocked:function(ht){O=ht},setClear:function(ht){vt!==ht&&(gt&&(ht=1-ht),i.clearDepth(ht),vt=ht)},reset:function(){O=!1,j=null,et=null,vt=null,gt=!1}}}function r(){let O=!1,gt=null,j=null,et=null,vt=null,ht=null,Xt=null,Me=null,Ve=null;return{setTest:function(oe){O||(oe?dt(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(oe){gt!==oe&&!O&&(i.stencilMask(oe),gt=oe)},setFunc:function(oe,pn,be){(j!==oe||et!==pn||vt!==be)&&(i.stencilFunc(oe,pn,be),j=oe,et=pn,vt=be)},setOp:function(oe,pn,be){(ht!==oe||Xt!==pn||Me!==be)&&(i.stencilOp(oe,pn,be),ht=oe,Xt=pn,Me=be)},setLocked:function(oe){O=oe},setClear:function(oe){Ve!==oe&&(i.clearStencil(oe),Ve=oe)},reset:function(){O=!1,gt=null,j=null,et=null,vt=null,ht=null,Xt=null,Me=null,Ve=null}}}const s=new e,o=new n,l=new r,c=new WeakMap,h=new WeakMap;let u={},d={},m=new WeakMap,_=[],x=null,M=!1,g=null,p=null,I=null,D=null,P=null,V=null,F=null,S=new le(0,0,0),T=0,y=!1,v=null,A=null,L=null,b=null,Z=null;const nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,it=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Y)[1]),tt=it>=1):Y.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),tt=it>=2);let pt=null,Tt={};const bt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),Wt=new Te().fromArray(bt),Q=new Te().fromArray(Ht);function lt(O,gt,j,et){const vt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(O,ht),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<j;Xt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(gt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return ht}const At={};At[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),dt(i.DEPTH_TEST),o.setFunc(is),ee(!1),ne(Ou),dt(i.CULL_FACE),U(Li);function dt(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Nt(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function de(O,gt){return d[O]!==gt?(i.bindFramebuffer(O,gt),d[O]=gt,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=gt),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ut(O,gt){let j=_,et=!1;if(O){j=m.get(gt),j===void 0&&(j=[],m.set(gt,j));const vt=O.textures;if(j.length!==vt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Xt=vt.length;ht<Xt;ht++)j[ht]=i.COLOR_ATTACHMENT0+ht;j.length=vt.length,et=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,et=!0);et&&i.drawBuffers(j)}function we(O){return x!==O?(i.useProgram(O),x=O,!0):!1}const Se={[sr]:i.FUNC_ADD,[i_]:i.FUNC_SUBTRACT,[r_]:i.FUNC_REVERSE_SUBTRACT};Se[s_]=i.MIN,Se[o_]=i.MAX;const Jt={[a_]:i.ZERO,[l_]:i.ONE,[c_]:i.SRC_COLOR,[ic]:i.SRC_ALPHA,[m_]:i.SRC_ALPHA_SATURATE,[f_]:i.DST_COLOR,[u_]:i.DST_ALPHA,[h_]:i.ONE_MINUS_SRC_COLOR,[rc]:i.ONE_MINUS_SRC_ALPHA,[p_]:i.ONE_MINUS_DST_COLOR,[d_]:i.ONE_MINUS_DST_ALPHA,[g_]:i.CONSTANT_COLOR,[__]:i.ONE_MINUS_CONSTANT_COLOR,[v_]:i.CONSTANT_ALPHA,[y_]:i.ONE_MINUS_CONSTANT_ALPHA};function U(O,gt,j,et,vt,ht,Xt,Me,Ve,oe){if(O===Li){M===!0&&(Nt(i.BLEND),M=!1);return}if(M===!1&&(dt(i.BLEND),M=!0),O!==n_){if(O!==g||oe!==y){if((p!==sr||P!==sr)&&(i.blendEquation(i.FUNC_ADD),p=sr,P=sr),oe)switch(O){case Jr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vu:i.blendFunc(i.ONE,i.ONE);break;case Bu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ku:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ku:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}I=null,D=null,V=null,F=null,S.set(0,0,0),T=0,g=O,y=oe}return}vt=vt||gt,ht=ht||j,Xt=Xt||et,(gt!==p||vt!==P)&&(i.blendEquationSeparate(Se[gt],Se[vt]),p=gt,P=vt),(j!==I||et!==D||ht!==V||Xt!==F)&&(i.blendFuncSeparate(Jt[j],Jt[et],Jt[ht],Jt[Xt]),I=j,D=et,V=ht,F=Xt),(Me.equals(S)===!1||Ve!==T)&&(i.blendColor(Me.r,Me.g,Me.b,Ve),S.copy(Me),T=Ve),g=O,y=!1}function tn(O,gt){O.side===hi?Nt(i.CULL_FACE):dt(i.CULL_FACE);let j=O.side===yn;gt&&(j=!j),ee(j),O.blending===Jr&&O.transparent===!1?U(Li):U(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const et=O.stencilWrite;l.setTest(et),et&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ye(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(O){v!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),v=O)}function ne(O){O!==Jg?(dt(i.CULL_FACE),O!==A&&(O===Ou?i.cullFace(i.BACK):O===t_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),A=O}function Rt(O){O!==L&&(tt&&i.lineWidth(O),L=O)}function ye(O,gt,j){O?(dt(i.POLYGON_OFFSET_FILL),(b!==gt||Z!==j)&&(i.polygonOffset(gt,j),b=gt,Z=j)):Nt(i.POLYGON_OFFSET_FILL)}function wt(O){O?dt(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function N(O){O===void 0&&(O=i.TEXTURE0+nt-1),pt!==O&&(i.activeTexture(O),pt=O)}function w(O,gt,j){j===void 0&&(pt===null?j=i.TEXTURE0+nt-1:j=pt);let et=Tt[j];et===void 0&&(et={type:void 0,texture:void 0},Tt[j]=et),(et.type!==O||et.texture!==gt)&&(pt!==j&&(i.activeTexture(j),pt=j),i.bindTexture(O,gt||At[O]),et.type=O,et.texture=gt)}function G(){const O=Tt[pt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function K(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ot(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(O){Wt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Wt.copy(O))}function St(O){Q.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Q.copy(O))}function ie(O,gt){let j=h.get(gt);j===void 0&&(j=new WeakMap,h.set(gt,j));let et=j.get(O);et===void 0&&(et=i.getUniformBlockIndex(gt,O.name),j.set(O,et))}function jt(O,gt){const et=h.get(gt).get(O);c.get(gt)!==et&&(i.uniformBlockBinding(gt,et,O.__bindingPointIndex),c.set(gt,et))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},pt=null,Tt={},d={},m=new WeakMap,_=[],x=null,M=!1,g=null,p=null,I=null,D=null,P=null,V=null,F=null,S=new le(0,0,0),T=0,y=!1,v=null,A=null,L=null,b=null,Z=null,Wt.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:dt,disable:Nt,bindFramebuffer:de,drawBuffers:Ut,useProgram:we,setBlending:U,setMaterial:tn,setFlipSided:ee,setCullFace:ne,setLineWidth:Rt,setPolygonOffset:ye,setScissorTest:wt,activeTexture:N,bindTexture:w,unbindTexture:G,compressedTexImage2D:K,compressedTexImage3D:rt,texImage2D:Et,texImage3D:Ot,updateUBOMapping:ie,uniformBlockBinding:jt,texStorage2D:Ft,texStorage3D:at,texSubImage2D:$,texSubImage3D:_t,compressedTexSubImage2D:ft,compressedTexSubImage3D:Dt,scissor:kt,viewport:St,reset:ge}}function aT(i,t,e,n,r,s,o){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qt,u=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,w){return _?new OffscreenCanvas(N,w):to("canvas")}function M(N,w,G){let K=1;const rt=wt(N);if((rt.width>G||rt.height>G)&&(K=G/Math.max(rt.width,rt.height)),K<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const $=Math.floor(K*rt.width),_t=Math.floor(K*rt.height);d===void 0&&(d=x($,_t));const ft=w?x($,_t):d;return ft.width=$,ft.height=_t,ft.getContext("2d").drawImage(N,0,0,$,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+$+"x"+_t+")."),ft}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),N;return N}function g(N){return N.generateMipmaps}function p(N){i.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(N,w,G,K,rt=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let $=w;if(w===i.RED&&(G===i.FLOAT&&($=i.R32F),G===i.HALF_FLOAT&&($=i.R16F),G===i.UNSIGNED_BYTE&&($=i.R8)),w===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.R8UI),G===i.UNSIGNED_SHORT&&($=i.R16UI),G===i.UNSIGNED_INT&&($=i.R32UI),G===i.BYTE&&($=i.R8I),G===i.SHORT&&($=i.R16I),G===i.INT&&($=i.R32I)),w===i.RG&&(G===i.FLOAT&&($=i.RG32F),G===i.HALF_FLOAT&&($=i.RG16F),G===i.UNSIGNED_BYTE&&($=i.RG8)),w===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RG8UI),G===i.UNSIGNED_SHORT&&($=i.RG16UI),G===i.UNSIGNED_INT&&($=i.RG32UI),G===i.BYTE&&($=i.RG8I),G===i.SHORT&&($=i.RG16I),G===i.INT&&($=i.RG32I)),w===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGB8UI),G===i.UNSIGNED_SHORT&&($=i.RGB16UI),G===i.UNSIGNED_INT&&($=i.RGB32UI),G===i.BYTE&&($=i.RGB8I),G===i.SHORT&&($=i.RGB16I),G===i.INT&&($=i.RGB32I)),w===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGBA8UI),G===i.UNSIGNED_SHORT&&($=i.RGBA16UI),G===i.UNSIGNED_INT&&($=i.RGBA32UI),G===i.BYTE&&($=i.RGBA8I),G===i.SHORT&&($=i.RGBA16I),G===i.INT&&($=i.RGBA32I)),w===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),w===i.RGBA){const _t=rt?wa:me.getTransfer(K);G===i.FLOAT&&($=i.RGBA32F),G===i.HALF_FLOAT&&($=i.RGBA16F),G===i.UNSIGNED_BYTE&&($=_t===Ee?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function P(N,w){let G;return N?w===null||w===fr||w===Qs?G=i.DEPTH24_STENCIL8:w===di?G=i.DEPTH32F_STENCIL8:w===Ks&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===fr||w===Qs?G=i.DEPTH_COMPONENT24:w===di?G=i.DEPTH_COMPONENT32F:w===Ks&&(G=i.DEPTH_COMPONENT16),G}function V(N,w){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==Bn&&N.minFilter!==Wn?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function F(N){const w=N.target;w.removeEventListener("dispose",F),T(w),w.isVideoTexture&&u.delete(w)}function S(N){const w=N.target;w.removeEventListener("dispose",S),v(w)}function T(N){const w=n.get(N);if(w.__webglInit===void 0)return;const G=N.source,K=m.get(G);if(K){const rt=K[w.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&y(N),Object.keys(K).length===0&&m.delete(G)}n.remove(N)}function y(N){const w=n.get(N);i.deleteTexture(w.__webglTexture);const G=N.source,K=m.get(G);delete K[w.__cacheKey],o.memory.textures--}function v(N){const w=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let rt=0;rt<w.__webglFramebuffer[K].length;rt++)i.deleteFramebuffer(w.__webglFramebuffer[K][rt]);else i.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)i.deleteFramebuffer(w.__webglFramebuffer[K]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=N.textures;for(let K=0,rt=G.length;K<rt;K++){const $=n.get(G[K]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(G[K])}n.remove(N)}let A=0;function L(){A=0}function b(){const N=A;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),A+=1,N}function Z(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function nt(N,w){const G=n.get(N);if(N.isVideoTexture&&Rt(N),N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){const K=N.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,N,w);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+w)}function tt(N,w){const G=n.get(N);if(N.version>0&&G.__version!==N.version){Q(G,N,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+w)}function it(N,w){const G=n.get(N);if(N.version>0&&G.__version!==N.version){Q(G,N,w);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+w)}function Y(N,w){const G=n.get(N);if(N.version>0&&G.__version!==N.version){lt(G,N,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+w)}const pt={[pc]:i.REPEAT,[ar]:i.CLAMP_TO_EDGE,[mc]:i.MIRRORED_REPEAT},Tt={[Bn]:i.NEAREST,[C_]:i.NEAREST_MIPMAP_NEAREST,[No]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[pl]:i.LINEAR_MIPMAP_NEAREST,[lr]:i.LINEAR_MIPMAP_LINEAR},bt={[L_]:i.NEVER,[B_]:i.ALWAYS,[N_]:i.LESS,[gp]:i.LEQUAL,[U_]:i.EQUAL,[V_]:i.GEQUAL,[F_]:i.GREATER,[O_]:i.NOTEQUAL};function Ht(N,w){if(w.type===di&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Wn||w.magFilter===pl||w.magFilter===No||w.magFilter===lr||w.minFilter===Wn||w.minFilter===pl||w.minFilter===No||w.minFilter===lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,pt[w.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,pt[w.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,pt[w.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Tt[w.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Tt[w.minFilter]),w.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,bt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Bn||w.minFilter!==No&&w.minFilter!==lr||w.type===di&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Wt(N,w){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",F));const K=w.source;let rt=m.get(K);rt===void 0&&(rt={},m.set(K,rt));const $=Z(w);if($!==N.__cacheKey){rt[$]===void 0&&(rt[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),rt[$].usedTimes++;const _t=rt[N.__cacheKey];_t!==void 0&&(rt[N.__cacheKey].usedTimes--,_t.usedTimes===0&&y(w)),N.__cacheKey=$,N.__webglTexture=rt[$].texture}return G}function Q(N,w,G){let K=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=i.TEXTURE_3D);const rt=Wt(N,w),$=w.source;e.bindTexture(K,N.__webglTexture,i.TEXTURE0+G);const _t=n.get($);if($.version!==_t.__version||rt===!0){e.activeTexture(i.TEXTURE0+G);const ft=me.getPrimaries(me.workingColorSpace),Dt=w.colorSpace===Ii?null:me.getPrimaries(w.colorSpace),Ft=w.colorSpace===Ii||ft===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let at=M(w.image,!1,r.maxTextureSize);at=ye(w,at);const Et=s.convert(w.format,w.colorSpace),Ot=s.convert(w.type);let kt=D(w.internalFormat,Et,Ot,w.colorSpace,w.isVideoTexture);Ht(K,w);let St;const ie=w.mipmaps,jt=w.isVideoTexture!==!0,ge=_t.__version===void 0||rt===!0,O=$.dataReady,gt=V(w,at);if(w.isDepthTexture)kt=P(w.format===Js,w.type),ge&&(jt?e.texStorage2D(i.TEXTURE_2D,1,kt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,kt,at.width,at.height,0,Et,Ot,null));else if(w.isDataTexture)if(ie.length>0){jt&&ge&&e.texStorage2D(i.TEXTURE_2D,gt,kt,ie[0].width,ie[0].height);for(let j=0,et=ie.length;j<et;j++)St=ie[j],jt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,St.width,St.height,Et,Ot,St.data):e.texImage2D(i.TEXTURE_2D,j,kt,St.width,St.height,0,Et,Ot,St.data);w.generateMipmaps=!1}else jt?(ge&&e.texStorage2D(i.TEXTURE_2D,gt,kt,at.width,at.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,Et,Ot,at.data)):e.texImage2D(i.TEXTURE_2D,0,kt,at.width,at.height,0,Et,Ot,at.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){jt&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,kt,ie[0].width,ie[0].height,at.depth);for(let j=0,et=ie.length;j<et;j++)if(St=ie[j],w.format!==On)if(Et!==null)if(jt){if(O)if(w.layerUpdates.size>0){const vt=pd(St.width,St.height,w.format,w.type);for(const ht of w.layerUpdates){const Xt=St.data.subarray(ht*vt/St.data.BYTES_PER_ELEMENT,(ht+1)*vt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ht,St.width,St.height,1,Et,Xt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,St.width,St.height,at.depth,Et,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,kt,St.width,St.height,at.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,St.width,St.height,at.depth,Et,Ot,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,kt,St.width,St.height,at.depth,0,Et,Ot,St.data)}else{jt&&ge&&e.texStorage2D(i.TEXTURE_2D,gt,kt,ie[0].width,ie[0].height);for(let j=0,et=ie.length;j<et;j++)St=ie[j],w.format!==On?Et!==null?jt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,St.width,St.height,Et,St.data):e.compressedTexImage2D(i.TEXTURE_2D,j,kt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,St.width,St.height,Et,Ot,St.data):e.texImage2D(i.TEXTURE_2D,j,kt,St.width,St.height,0,Et,Ot,St.data)}else if(w.isDataArrayTexture)if(jt){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,kt,at.width,at.height,at.depth),O)if(w.layerUpdates.size>0){const j=pd(at.width,at.height,w.format,w.type);for(const et of w.layerUpdates){const vt=at.data.subarray(et*j/at.data.BYTES_PER_ELEMENT,(et+1)*j/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,at.width,at.height,1,Et,Ot,vt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Et,Ot,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,at.width,at.height,at.depth,0,Et,Ot,at.data);else if(w.isData3DTexture)jt?(ge&&e.texStorage3D(i.TEXTURE_3D,gt,kt,at.width,at.height,at.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Et,Ot,at.data)):e.texImage3D(i.TEXTURE_3D,0,kt,at.width,at.height,at.depth,0,Et,Ot,at.data);else if(w.isFramebufferTexture){if(ge)if(jt)e.texStorage2D(i.TEXTURE_2D,gt,kt,at.width,at.height);else{let j=at.width,et=at.height;for(let vt=0;vt<gt;vt++)e.texImage2D(i.TEXTURE_2D,vt,kt,j,et,0,Et,Ot,null),j>>=1,et>>=1}}else if(ie.length>0){if(jt&&ge){const j=wt(ie[0]);e.texStorage2D(i.TEXTURE_2D,gt,kt,j.width,j.height)}for(let j=0,et=ie.length;j<et;j++)St=ie[j],jt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Et,Ot,St):e.texImage2D(i.TEXTURE_2D,j,kt,Et,Ot,St);w.generateMipmaps=!1}else if(jt){if(ge){const j=wt(at);e.texStorage2D(i.TEXTURE_2D,gt,kt,j.width,j.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Ot,at)}else e.texImage2D(i.TEXTURE_2D,0,kt,Et,Ot,at);g(w)&&p(K),_t.__version=$.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function lt(N,w,G){if(w.image.length!==6)return;const K=Wt(N,w),rt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+G);const $=n.get(rt);if(rt.version!==$.__version||K===!0){e.activeTexture(i.TEXTURE0+G);const _t=me.getPrimaries(me.workingColorSpace),ft=w.colorSpace===Ii?null:me.getPrimaries(w.colorSpace),Dt=w.colorSpace===Ii||_t===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const Ft=w.isCompressedTexture||w.image[0].isCompressedTexture,at=w.image[0]&&w.image[0].isDataTexture,Et=[];for(let et=0;et<6;et++)!Ft&&!at?Et[et]=M(w.image[et],!0,r.maxCubemapSize):Et[et]=at?w.image[et].image:w.image[et],Et[et]=ye(w,Et[et]);const Ot=Et[0],kt=s.convert(w.format,w.colorSpace),St=s.convert(w.type),ie=D(w.internalFormat,kt,St,w.colorSpace),jt=w.isVideoTexture!==!0,ge=$.__version===void 0||K===!0,O=rt.dataReady;let gt=V(w,Ot);Ht(i.TEXTURE_CUBE_MAP,w);let j;if(Ft){jt&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,ie,Ot.width,Ot.height);for(let et=0;et<6;et++){j=Et[et].mipmaps;for(let vt=0;vt<j.length;vt++){const ht=j[vt];w.format!==On?kt!==null?jt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,0,0,ht.width,ht.height,kt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,ie,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,0,0,ht.width,ht.height,kt,St,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,ie,ht.width,ht.height,0,kt,St,ht.data)}}}else{if(j=w.mipmaps,jt&&ge){j.length>0&&gt++;const et=wt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,ie,et.width,et.height)}for(let et=0;et<6;et++)if(at){jt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Et[et].width,Et[et].height,kt,St,Et[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ie,Et[et].width,Et[et].height,0,kt,St,Et[et].data);for(let vt=0;vt<j.length;vt++){const Xt=j[vt].image[et].image;jt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,0,0,Xt.width,Xt.height,kt,St,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,ie,Xt.width,Xt.height,0,kt,St,Xt.data)}}else{jt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,kt,St,Et[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ie,kt,St,Et[et]);for(let vt=0;vt<j.length;vt++){const ht=j[vt];jt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,0,0,kt,St,ht.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,ie,kt,St,ht.image[et])}}}g(w)&&p(i.TEXTURE_CUBE_MAP),$.__version=rt.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function At(N,w,G,K,rt,$){const _t=s.convert(G.format,G.colorSpace),ft=s.convert(G.type),Dt=D(G.internalFormat,_t,ft,G.colorSpace),Ft=n.get(w),at=n.get(G);if(at.__renderTarget=w,!Ft.__hasExternalTextures){const Et=Math.max(1,w.width>>$),Ot=Math.max(1,w.height>>$);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,$,Dt,Et,Ot,w.depth,0,_t,ft,null):e.texImage2D(rt,$,Dt,Et,Ot,0,_t,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),ne(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,rt,at.__webglTexture,0,ee(w)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,rt,at.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(N,w,G){if(i.bindRenderbuffer(i.RENDERBUFFER,N),w.depthBuffer){const K=w.depthTexture,rt=K&&K.isDepthTexture?K.type:null,$=P(w.stencilBuffer,rt),_t=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=ee(w);ne(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,$,w.width,w.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,$,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,$,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,N)}else{const K=w.textures;for(let rt=0;rt<K.length;rt++){const $=K[rt],_t=s.convert($.format,$.colorSpace),ft=s.convert($.type),Dt=D($.internalFormat,_t,ft,$.colorSpace),Ft=ee(w);G&&ne(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Dt,w.width,w.height):ne(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft,Dt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(N,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(w.depthTexture);K.__renderTarget=w,(!K.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),nt(w.depthTexture,0);const rt=K.__webglTexture,$=ee(w);if(w.depthTexture.format===Zs)ne(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(w.depthTexture.format===Js)ne(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function de(N){const w=n.get(N),G=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){const K=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){const rt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",rt)};K.addEventListener("dispose",rt),w.__depthDisposeCallback=rt}w.__boundDepthTexture=K}if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const K=N.texture.mipmaps;K&&K.length>0?Nt(w.__webglFramebuffer[0],N):Nt(w.__webglFramebuffer,N)}else if(G){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=i.createRenderbuffer(),dt(w.__webglDepthbuffer[K],N,!1);else{const rt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=w.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,$)}}else{const K=N.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),dt(w.__webglDepthbuffer,N,!1);else{const rt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,$)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(N,w,G){const K=n.get(N);w!==void 0&&At(K.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&de(N)}function we(N){const w=N.texture,G=n.get(N),K=n.get(w);N.addEventListener("dispose",S);const rt=N.textures,$=N.isWebGLCubeRenderTarget===!0,_t=rt.length>1;if(_t||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=w.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[ft]=[];for(let Dt=0;Dt<w.mipmaps.length;Dt++)G.__webglFramebuffer[ft][Dt]=i.createFramebuffer()}else G.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let ft=0;ft<w.mipmaps.length;ft++)G.__webglFramebuffer[ft]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(_t)for(let ft=0,Dt=rt.length;ft<Dt;ft++){const Ft=n.get(rt[ft]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&ne(N)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ft=0;ft<rt.length;ft++){const Dt=rt[ft];G.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ft]);const Ft=s.convert(Dt.format,Dt.colorSpace),at=s.convert(Dt.type),Et=D(Dt.internalFormat,Ft,at,Dt.colorSpace,N.isXRRenderTarget===!0),Ot=ee(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Et,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,G.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(G.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,w);for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0)for(let Dt=0;Dt<w.mipmaps.length;Dt++)At(G.__webglFramebuffer[ft][Dt],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt);else At(G.__webglFramebuffer[ft],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ft=0,Dt=rt.length;ft<Dt;ft++){const Ft=rt[ft],at=n.get(Ft);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),Ht(i.TEXTURE_2D,Ft),At(G.__webglFramebuffer,N,Ft,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),g(Ft)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ft=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,K.__webglTexture),Ht(ft,w),w.mipmaps&&w.mipmaps.length>0)for(let Dt=0;Dt<w.mipmaps.length;Dt++)At(G.__webglFramebuffer[Dt],N,w,i.COLOR_ATTACHMENT0,ft,Dt);else At(G.__webglFramebuffer,N,w,i.COLOR_ATTACHMENT0,ft,0);g(w)&&p(ft),e.unbindTexture()}N.depthBuffer&&de(N)}function Se(N){const w=N.textures;for(let G=0,K=w.length;G<K;G++){const rt=w[G];if(g(rt)){const $=I(N),_t=n.get(rt).__webglTexture;e.bindTexture($,_t),p($),e.unbindTexture()}}}const Jt=[],U=[];function tn(N){if(N.samples>0){if(ne(N)===!1){const w=N.textures,G=N.width,K=N.height;let rt=i.COLOR_BUFFER_BIT;const $=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(N),ft=w.length>1;if(ft)for(let Ft=0;Ft<w.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);const Dt=N.texture.mipmaps;Dt&&Dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Ft=0;Ft<w.length;Ft++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Ft]);const at=n.get(w[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,G,K,0,0,G,K,rt,i.NEAREST),c===!0&&(Jt.length=0,U.length=0,Jt.push(i.COLOR_ATTACHMENT0+Ft),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Jt.push($),U.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Ft=0;Ft<w.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Ft]);const at=n.get(w[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){const w=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ee(N){return Math.min(r.maxSamples,N.samples)}function ne(N){const w=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Rt(N){const w=o.render.frame;u.get(N)!==w&&(u.set(N,w),N.update())}function ye(N,w){const G=N.colorSpace,K=N.format,rt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==os&&G!==Ii&&(me.getTransfer(G)===Ee?(K!==On||rt!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function wt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=b,this.resetTextureUnits=L,this.setTexture2D=nt,this.setTexture2DArray=tt,this.setTexture3D=it,this.setTextureCube=Y,this.rebindTextures=Ut,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=At,this.useMultisampledRTT=ne}function lT(i,t){function e(n,r=Ii){let s;const o=me.getTransfer(r);if(n===Kn)return i.UNSIGNED_BYTE;if(n===_h)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===cp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ap)return i.BYTE;if(n===lp)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===gh)return i.INT;if(n===fr)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===fo)return i.HALF_FLOAT;if(n===hp)return i.ALPHA;if(n===up)return i.RGB;if(n===On)return i.RGBA;if(n===Zs)return i.DEPTH_COMPONENT;if(n===Js)return i.DEPTH_STENCIL;if(n===dp)return i.RED;if(n===yh)return i.RED_INTEGER;if(n===fp)return i.RG;if(n===Eh)return i.RG_INTEGER;if(n===xh)return i.RGBA_INTEGER;if(n===ha||n===ua||n===da||n===fa)if(o===Ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ha)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ha)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gc||n===_c||n===vc||n===yc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===gc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_c)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ec||n===xc||n===Tc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ec||n===xc)return o===Ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Tc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sc||n===Mc||n===Ac||n===wc||n===bc||n===Rc||n===Cc||n===Ic||n===Pc||n===Dc||n===Lc||n===Nc||n===Uc||n===Fc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Sc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ac)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ic)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fc)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pa||n===Oc||n===Vc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===pa)return o===Ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pp||n===Bc||n===kc||n===zc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===pa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Bc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const cT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new dn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new zi({vertexShader:cT,fragmentShader:hT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bn(new Xa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dT extends vr{constructor(t,e){super();const n=this;let r=null,s=1,o=null,l="local-floor",c=1,h=null,u=null,d=null,m=null,_=null,x=null;const M=new uT,g=e.getContextAttributes();let p=null,I=null;const D=[],P=[],V=new qt;let F=null;const S=new wn;S.viewport=new Te;const T=new wn;T.viewport=new Te;const y=[S,T],v=new Pv;let A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let lt=D[Q];return lt===void 0&&(lt=new Ul,D[Q]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(Q){let lt=D[Q];return lt===void 0&&(lt=new Ul,D[Q]=lt),lt.getGripSpace()},this.getHand=function(Q){let lt=D[Q];return lt===void 0&&(lt=new Ul,D[Q]=lt),lt.getHandSpace()};function b(Q){const lt=P.indexOf(Q.inputSource);if(lt===-1)return;const At=D[lt];At!==void 0&&(At.update(Q.inputSource,Q.frame,h||o),At.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Z(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",nt);for(let Q=0;Q<D.length;Q++){const lt=P[Q];lt!==null&&(P[Q]=null,D[Q].disconnect(lt))}A=null,L=null,M.reset(),t.setRenderTarget(p),_=null,m=null,d=null,r=null,I=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){l=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",nt),g.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,dt=null,Nt=null;g.depth&&(Nt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=g.stencil?Js:Zs,dt=g.stencil?Qs:fr);const de={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:s};d=new XRWebGLBinding(r,e),m=d.createProjectionLayer(de),r.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),I=new pr(m.textureWidth,m.textureHeight,{format:On,type:Kn,depthTexture:new wp(m.textureWidth,m.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const At={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,e,At),r.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),I=new pr(_.framebufferWidth,_.framebufferHeight,{format:On,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await r.requestReferenceSpace(l),Wt.setContext(r),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function nt(Q){for(let lt=0;lt<Q.removed.length;lt++){const At=Q.removed[lt],dt=P.indexOf(At);dt>=0&&(P[dt]=null,D[dt].disconnect(At))}for(let lt=0;lt<Q.added.length;lt++){const At=Q.added[lt];let dt=P.indexOf(At);if(dt===-1){for(let de=0;de<D.length;de++)if(de>=P.length){P.push(At),dt=de;break}else if(P[de]===null){P[de]=At,dt=de;break}if(dt===-1)break}const Nt=D[dt];Nt&&Nt.connect(At)}}const tt=new z,it=new z;function Y(Q,lt,At){tt.setFromMatrixPosition(lt.matrixWorld),it.setFromMatrixPosition(At.matrixWorld);const dt=tt.distanceTo(it),Nt=lt.projectionMatrix.elements,de=At.projectionMatrix.elements,Ut=Nt[14]/(Nt[10]-1),we=Nt[14]/(Nt[10]+1),Se=(Nt[9]+1)/Nt[5],Jt=(Nt[9]-1)/Nt[5],U=(Nt[8]-1)/Nt[0],tn=(de[8]+1)/de[0],ee=Ut*U,ne=Ut*tn,Rt=dt/(-U+tn),ye=Rt*-U;if(lt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ye),Q.translateZ(Rt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Nt[10]===-1)Q.projectionMatrix.copy(lt.projectionMatrix),Q.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const wt=Ut+Rt,N=we+Rt,w=ee-ye,G=ne+(dt-ye),K=Se*we/N*wt,rt=Jt*we/N*wt;Q.projectionMatrix.makePerspective(w,G,K,rt,wt,N),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function pt(Q,lt){lt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(lt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let lt=Q.near,At=Q.far;M.texture!==null&&(M.depthNear>0&&(lt=M.depthNear),M.depthFar>0&&(At=M.depthFar)),v.near=T.near=S.near=lt,v.far=T.far=S.far=At,(A!==v.near||L!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,L=v.far),S.layers.mask=Q.layers.mask|2,T.layers.mask=Q.layers.mask|4,v.layers.mask=S.layers.mask|T.layers.mask;const dt=Q.parent,Nt=v.cameras;pt(v,dt);for(let de=0;de<Nt.length;de++)pt(Nt[de],dt);Nt.length===2?Y(v,S,T):v.projectionMatrix.copy(S.projectionMatrix),Tt(Q,v,dt)};function Tt(Q,lt,At){At===null?Q.matrix.copy(lt.matrixWorld):(Q.matrix.copy(At.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(lt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(lt.projectionMatrix),Q.projectionMatrixInverse.copy(lt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Hc*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(m===null&&_===null))return c},this.setFoveation=function(Q){c=Q,m!==null&&(m.fixedFoveation=Q),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(v)};let bt=null;function Ht(Q,lt){if(u=lt.getViewerPose(h||o),x=lt,u!==null){const At=u.views;_!==null&&(t.setRenderTargetFramebuffer(I,_.framebuffer),t.setRenderTarget(I));let dt=!1;At.length!==v.cameras.length&&(v.cameras.length=0,dt=!0);for(let Ut=0;Ut<At.length;Ut++){const we=At[Ut];let Se=null;if(_!==null)Se=_.getViewport(we);else{const U=d.getViewSubImage(m,we);Se=U.viewport,Ut===0&&(t.setRenderTargetTextures(I,U.colorTexture,U.depthStencilTexture),t.setRenderTarget(I))}let Jt=y[Ut];Jt===void 0&&(Jt=new wn,Jt.layers.enable(Ut),Jt.viewport=new Te,y[Ut]=Jt),Jt.matrix.fromArray(we.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(we.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(Se.x,Se.y,Se.width,Se.height),Ut===0&&(v.matrix.copy(Jt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),dt===!0&&v.cameras.push(Jt)}const Nt=r.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Ut=d.getDepthInformation(At[0]);Ut&&Ut.isValid&&Ut.texture&&M.init(t,Ut,r.renderState)}}for(let At=0;At<D.length;At++){const dt=P[At],Nt=D[At];dt!==null&&Nt!==void 0&&Nt.update(dt,lt,h||o)}bt&&bt(Q,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),x=null}const Wt=new Cp;Wt.setAnimationLoop(Ht),this.setAnimationLoop=function(Q){bt=Q},this.dispose=function(){}}}const er=new Qn,fT=new Ce;function pT(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Mp(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,I,D,P){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),m(g,p),p.isMeshPhysicalMaterial&&_(g,p,P)):p.isMeshMatcapMaterial?(s(g,p),x(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),M(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&l(g,p)):p.isPointsMaterial?c(g,p,I,D):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===yn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===yn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const I=t.get(p),D=I.envMap,P=I.envMapRotation;D&&(g.envMap.value=D,er.copy(P),er.x*=-1,er.y*=-1,er.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),g.envMapRotation.value.setFromMatrix4(fT.makeRotationFromEuler(er)),g.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function l(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,I,D){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*I,g.scale.value=D*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function m(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function _(g,p,I){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=I.texture,g.transmissionSamplerSize.value.set(I.width,I.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function M(g,p){const I=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(I.matrixWorld),g.nearDistance.value=I.shadow.camera.near,g.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function mT(i,t,e,n){let r={},s={},o=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(I,D){const P=D.program;n.uniformBlockBinding(I,P)}function h(I,D){let P=r[I.id];P===void 0&&(x(I),P=u(I),r[I.id]=P,I.addEventListener("dispose",g));const V=D.program;n.updateUBOMapping(I,V);const F=t.render.frame;s[I.id]!==F&&(m(I),s[I.id]=F)}function u(I){const D=d();I.__bindingPointIndex=D;const P=i.createBuffer(),V=I.__size,F=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,V,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,P),P}function d(){for(let I=0;I<l;I++)if(o.indexOf(I)===-1)return o.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(I){const D=r[I.id],P=I.uniforms,V=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let F=0,S=P.length;F<S;F++){const T=Array.isArray(P[F])?P[F]:[P[F]];for(let y=0,v=T.length;y<v;y++){const A=T[y];if(_(A,F,y,V)===!0){const L=A.__offset,b=Array.isArray(A.value)?A.value:[A.value];let Z=0;for(let nt=0;nt<b.length;nt++){const tt=b[nt],it=M(tt);typeof tt=="number"||typeof tt=="boolean"?(A.__data[0]=tt,i.bufferSubData(i.UNIFORM_BUFFER,L+Z,A.__data)):tt.isMatrix3?(A.__data[0]=tt.elements[0],A.__data[1]=tt.elements[1],A.__data[2]=tt.elements[2],A.__data[3]=0,A.__data[4]=tt.elements[3],A.__data[5]=tt.elements[4],A.__data[6]=tt.elements[5],A.__data[7]=0,A.__data[8]=tt.elements[6],A.__data[9]=tt.elements[7],A.__data[10]=tt.elements[8],A.__data[11]=0):(tt.toArray(A.__data,Z),Z+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(I,D,P,V){const F=I.value,S=D+"_"+P;if(V[S]===void 0)return typeof F=="number"||typeof F=="boolean"?V[S]=F:V[S]=F.clone(),!0;{const T=V[S];if(typeof F=="number"||typeof F=="boolean"){if(T!==F)return V[S]=F,!0}else if(T.equals(F)===!1)return T.copy(F),!0}return!1}function x(I){const D=I.uniforms;let P=0;const V=16;for(let S=0,T=D.length;S<T;S++){const y=Array.isArray(D[S])?D[S]:[D[S]];for(let v=0,A=y.length;v<A;v++){const L=y[v],b=Array.isArray(L.value)?L.value:[L.value];for(let Z=0,nt=b.length;Z<nt;Z++){const tt=b[Z],it=M(tt),Y=P%V,pt=Y%it.boundary,Tt=Y+pt;P+=pt,Tt!==0&&V-Tt<it.storage&&(P+=V-Tt),L.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=P,P+=it.storage}}}const F=P%V;return F>0&&(P+=V-F),I.__size=P,I.__cache={},this}function M(I){const D={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(D.boundary=4,D.storage=4):I.isVector2?(D.boundary=8,D.storage=8):I.isVector3||I.isColor?(D.boundary=16,D.storage=12):I.isVector4?(D.boundary=16,D.storage=16):I.isMatrix3?(D.boundary=48,D.storage=48):I.isMatrix4?(D.boundary=64,D.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),D}function g(I){const D=I.target;D.removeEventListener("dispose",g);const P=o.indexOf(D.__bindingPointIndex);o.splice(P,1),i.deleteBuffer(r[D.id]),delete r[D.id],delete s[D.id]}function p(){for(const I in r)i.deleteBuffer(r[I]);o=[],r={},s={}}return{bind:c,update:h,dispose:p}}class gT{constructor(t={}){const{canvas:e=H_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const x=new Uint32Array(4),M=new Int32Array(4);let g=null,p=null;const I=[],D=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let V=!1;this._outputColorSpace=An;let F=0,S=0,T=null,y=-1,v=null;const A=new Te,L=new Te;let b=null;const Z=new le(0);let nt=0,tt=e.width,it=e.height,Y=1,pt=null,Tt=null;const bt=new Te(0,0,tt,it),Ht=new Te(0,0,tt,it);let Wt=!1;const Q=new wh;let lt=!1,At=!1;const dt=new Ce,Nt=new Ce,de=new z,Ut=new Te,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Se=!1;function Jt(){return T===null?Y:1}let U=n;function tn(R,B){return e.getContext(R,B)}try{const R={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mh}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),U===null){const B="webgl2";if(U=tn(B,R),U===null)throw tn(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ee,ne,Rt,ye,wt,N,w,G,K,rt,$,_t,ft,Dt,Ft,at,Et,Ot,kt,St,ie,jt,ge,O;function gt(){ee=new w0(U),ee.init(),jt=new lT(U,ee),ne=new y0(U,ee,t,jt),Rt=new oT(U,ee),ne.reverseDepthBuffer&&m&&Rt.buffers.depth.setReversed(!0),ye=new C0(U),wt=new $x,N=new aT(U,ee,Rt,wt,ne,jt,ye),w=new x0(P),G=new A0(P),K=new Uv(U),ge=new _0(U,K),rt=new b0(U,K,ye,ge),$=new P0(U,rt,K,ye),kt=new I0(U,ne,N),at=new E0(wt),_t=new qx(P,w,G,ee,ne,ge,at),ft=new pT(P,wt),Dt=new Yx,Ft=new eT(ee),Ot=new g0(P,w,G,Rt,$,_,c),Et=new rT(P,$,ne),O=new mT(U,ye,ne,Rt),St=new v0(U,ee,ye),ie=new R0(U,ee,ye),ye.programs=_t.programs,P.capabilities=ne,P.extensions=ee,P.properties=wt,P.renderLists=Dt,P.shadowMap=Et,P.state=Rt,P.info=ye}gt();const j=new dT(P,U);this.xr=j,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(tt,it,!1))},this.getSize=function(R){return R.set(tt,it)},this.setSize=function(R,B,X=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}tt=R,it=B,e.width=Math.floor(R*Y),e.height=Math.floor(B*Y),X===!0&&(e.style.width=R+"px",e.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(tt*Y,it*Y).floor()},this.setDrawingBufferSize=function(R,B,X){tt=R,it=B,Y=X,e.width=Math.floor(R*X),e.height=Math.floor(B*X),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(bt)},this.setViewport=function(R,B,X,W){R.isVector4?bt.set(R.x,R.y,R.z,R.w):bt.set(R,B,X,W),Rt.viewport(A.copy(bt).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(Ht)},this.setScissor=function(R,B,X,W){R.isVector4?Ht.set(R.x,R.y,R.z,R.w):Ht.set(R,B,X,W),Rt.scissor(L.copy(Ht).multiplyScalar(Y).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(R){Rt.setScissorTest(Wt=R)},this.setOpaqueSort=function(R){pt=R},this.setTransparentSort=function(R){Tt=R},this.getClearColor=function(R){return R.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(R=!0,B=!0,X=!0){let W=0;if(R){let k=!1;if(T!==null){const ot=T.texture.format;k=ot===xh||ot===Eh||ot===yh}if(k){const ot=T.texture.type,ut=ot===Kn||ot===fr||ot===Ks||ot===Qs||ot===_h||ot===vh,yt=Ot.getClearColor(),Mt=Ot.getClearAlpha(),zt=yt.r,Vt=yt.g,Ct=yt.b;ut?(x[0]=zt,x[1]=Vt,x[2]=Ct,x[3]=Mt,U.clearBufferuiv(U.COLOR,0,x)):(M[0]=zt,M[1]=Vt,M[2]=Ct,M[3]=Mt,U.clearBufferiv(U.COLOR,0,M))}else W|=U.COLOR_BUFFER_BIT}B&&(W|=U.DEPTH_BUFFER_BIT),X&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),Ot.dispose(),Dt.dispose(),Ft.dispose(),wt.dispose(),w.dispose(),G.dispose(),$.dispose(),ge.dispose(),O.dispose(),_t.dispose(),j.dispose(),j.removeEventListener("sessionstart",Ts),j.removeEventListener("sessionend",yi),En.stop()};function et(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const R=ye.autoReset,B=Et.enabled,X=Et.autoUpdate,W=Et.needsUpdate,k=Et.type;gt(),ye.autoReset=R,Et.enabled=B,Et.autoUpdate=X,Et.needsUpdate=W,Et.type=k}function ht(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Xt(R){const B=R.target;B.removeEventListener("dispose",Xt),Me(B)}function Me(R){Ve(R),wt.remove(R)}function Ve(R){const B=wt.get(R).programs;B!==void 0&&(B.forEach(function(X){_t.releaseProgram(X)}),R.isShaderMaterial&&_t.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,X,W,k,ot){B===null&&(B=we);const ut=k.isMesh&&k.matrixWorld.determinant()<0,yt=Ar(R,B,X,W,k);Rt.setMaterial(W,ut);let Mt=X.index,zt=1;if(W.wireframe===!0){if(Mt=rt.getWireframeAttribute(X),Mt===void 0)return;zt=2}const Vt=X.drawRange,Ct=X.attributes.position;let re=Vt.start*zt,ce=(Vt.start+Vt.count)*zt;ot!==null&&(re=Math.max(re,ot.start*zt),ce=Math.min(ce,(ot.start+ot.count)*zt)),Mt!==null?(re=Math.max(re,0),ce=Math.min(ce,Mt.count)):Ct!=null&&(re=Math.max(re,0),ce=Math.min(ce,Ct.count));const Ie=ce-re;if(Ie<0||Ie===1/0)return;ge.setup(k,W,yt,X,Mt);let Re,ae=St;if(Mt!==null&&(Re=K.get(Mt),ae=ie,ae.setIndex(Re)),k.isMesh)W.wireframe===!0?(Rt.setLineWidth(W.wireframeLinewidth*Jt()),ae.setMode(U.LINES)):ae.setMode(U.TRIANGLES);else if(k.isLine){let Pt=W.linewidth;Pt===void 0&&(Pt=1),Rt.setLineWidth(Pt*Jt()),k.isLineSegments?ae.setMode(U.LINES):k.isLineLoop?ae.setMode(U.LINE_LOOP):ae.setMode(U.LINE_STRIP)}else k.isPoints?ae.setMode(U.POINTS):k.isSprite&&ae.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ga("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))ae.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Pt=k._multiDrawStarts,Be=k._multiDrawCounts,fe=k._multiDrawCount,mn=Mt?K.get(Mt).bytesPerElement:1,Ei=wt.get(W).currentProgram.getUniforms();for(let Ne=0;Ne<fe;Ne++)Ei.setValue(U,"_gl_DrawID",Ne),ae.render(Pt[Ne]/mn,Be[Ne])}else if(k.isInstancedMesh)ae.renderInstances(re,Ie,k.count);else if(X.isInstancedBufferGeometry){const Pt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Be=Math.min(X.instanceCount,Pt);ae.renderInstances(re,Ie,Be)}else ae.render(re,Ie)};function oe(R,B,X){R.transparent===!0&&R.side===hi&&R.forceSinglePass===!1?(R.side=yn,R.needsUpdate=!0,ei(R,B,X),R.side=ki,R.needsUpdate=!0,ei(R,B,X),R.side=hi):ei(R,B,X)}this.compile=function(R,B,X=null){X===null&&(X=R),p=Ft.get(X),p.init(B),D.push(p),X.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),R!==X&&R.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const W=new Set;return R.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ot=k.material;if(ot)if(Array.isArray(ot))for(let ut=0;ut<ot.length;ut++){const yt=ot[ut];oe(yt,X,k),W.add(yt)}else oe(ot,X,k),W.add(ot)}),p=D.pop(),W},this.compileAsync=function(R,B,X=null){const W=this.compile(R,B,X);return new Promise(k=>{function ot(){if(W.forEach(function(ut){wt.get(ut).currentProgram.isReady()&&W.delete(ut)}),W.size===0){k(R);return}setTimeout(ot,10)}ee.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let pn=null;function be(R){pn&&pn(R)}function Ts(){En.stop()}function yi(){En.start()}const En=new Cp;En.setAnimationLoop(be),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(R){pn=R,j.setAnimationLoop(R),R===null?En.stop():En.start()},j.addEventListener("sessionstart",Ts),j.addEventListener("sessionend",yi),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(B),B=j.getCamera()),R.isScene===!0&&R.onBeforeRender(P,R,B,T),p=Ft.get(R,D.length),p.init(B),D.push(p),Nt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(Nt),At=this.localClippingEnabled,lt=at.init(this.clippingPlanes,At),g=Dt.get(R,I.length),g.init(),I.push(g),j.enabled===!0&&j.isPresenting===!0){const ot=P.xr.getDepthSensingMesh();ot!==null&&Ss(ot,B,-1/0,P.sortObjects)}Ss(R,B,0,P.sortObjects),g.finish(),P.sortObjects===!0&&g.sort(pt,Tt),Se=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Se&&Ot.addToRenderList(g,R),this.info.render.frame++,lt===!0&&at.beginShadows();const X=p.state.shadowsArray;Et.render(X,R,B),lt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,k=g.transmissive;if(p.setupLights(),B.isArrayCamera){const ot=B.cameras;if(k.length>0)for(let ut=0,yt=ot.length;ut<yt;ut++){const Mt=ot[ut];ti(W,k,R,Mt)}Se&&Ot.render(R);for(let ut=0,yt=ot.length;ut<yt;ut++){const Mt=ot[ut];To(g,R,Mt,Mt.viewport)}}else k.length>0&&ti(W,k,R,B),Se&&Ot.render(R),To(g,R,B);T!==null&&S===0&&(N.updateMultisampleRenderTarget(T),N.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(P,R,B),ge.resetDefaultState(),y=-1,v=null,D.pop(),D.length>0?(p=D[D.length-1],lt===!0&&at.setGlobalState(P.clippingPlanes,p.state.camera)):p=null,I.pop(),I.length>0?g=I[I.length-1]:g=null};function Ss(R,B,X,W){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){W&&Ut.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Nt);const ut=$.update(R),yt=R.material;yt.visible&&g.push(R,ut,yt,X,Ut.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const ut=$.update(R),yt=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ut.copy(R.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Ut.copy(ut.boundingSphere.center)),Ut.applyMatrix4(R.matrixWorld).applyMatrix4(Nt)),Array.isArray(yt)){const Mt=ut.groups;for(let zt=0,Vt=Mt.length;zt<Vt;zt++){const Ct=Mt[zt],re=yt[Ct.materialIndex];re&&re.visible&&g.push(R,ut,re,X,Ut.z,Ct)}}else yt.visible&&g.push(R,ut,yt,X,Ut.z,null)}}const ot=R.children;for(let ut=0,yt=ot.length;ut<yt;ut++)Ss(ot[ut],B,X,W)}function To(R,B,X,W){const k=R.opaque,ot=R.transmissive,ut=R.transparent;p.setupLightsView(X),lt===!0&&at.setGlobalState(P.clippingPlanes,X),W&&Rt.viewport(A.copy(W)),k.length>0&&Sr(k,B,X),ot.length>0&&Sr(ot,B,X),ut.length>0&&Sr(ut,B,X),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function ti(R,B,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new pr(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?fo:Kn,minFilter:lr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));const ot=p.state.transmissionRenderTarget[W.id],ut=W.viewport||A;ot.setSize(ut.z*P.transmissionResolutionScale,ut.w*P.transmissionResolutionScale);const yt=P.getRenderTarget();P.setRenderTarget(ot),P.getClearColor(Z),nt=P.getClearAlpha(),nt<1&&P.setClearColor(16777215,.5),P.clear(),Se&&Ot.render(X);const Mt=P.toneMapping;P.toneMapping=Ni;const zt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),lt===!0&&at.setGlobalState(P.clippingPlanes,W),Sr(R,X,W),N.updateMultisampleRenderTarget(ot),N.updateRenderTargetMipmap(ot),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Ct=0,re=B.length;Ct<re;Ct++){const ce=B[Ct],Ie=ce.object,Re=ce.geometry,ae=ce.material,Pt=ce.group;if(ae.side===hi&&Ie.layers.test(W.layers)){const Be=ae.side;ae.side=yn,ae.needsUpdate=!0,So(Ie,X,W,Re,ae,Pt),ae.side=Be,ae.needsUpdate=!0,Vt=!0}}Vt===!0&&(N.updateMultisampleRenderTarget(ot),N.updateRenderTargetMipmap(ot))}P.setRenderTarget(yt),P.setClearColor(Z,nt),zt!==void 0&&(W.viewport=zt),P.toneMapping=Mt}function Sr(R,B,X){const W=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ot=R.length;k<ot;k++){const ut=R[k],yt=ut.object,Mt=ut.geometry,zt=ut.group;let Vt=ut.material;Vt.allowOverride===!0&&W!==null&&(Vt=W),yt.layers.test(X.layers)&&So(yt,B,X,Mt,Vt,zt)}}function So(R,B,X,W,k,ot){R.onBeforeRender(P,B,X,W,k,ot),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(P,B,X,W,R,ot),k.transparent===!0&&k.side===hi&&k.forceSinglePass===!1?(k.side=yn,k.needsUpdate=!0,P.renderBufferDirect(X,B,W,k,R,ot),k.side=ki,k.needsUpdate=!0,P.renderBufferDirect(X,B,W,k,R,ot),k.side=hi):P.renderBufferDirect(X,B,W,k,R,ot),R.onAfterRender(P,B,X,W,k,ot)}function ei(R,B,X){B.isScene!==!0&&(B=we);const W=wt.get(R),k=p.state.lights,ot=p.state.shadowsArray,ut=k.state.version,yt=_t.getParameters(R,k.state,ot,B,X),Mt=_t.getProgramCacheKey(yt);let zt=W.programs;W.environment=R.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(R.isMeshStandardMaterial?G:w).get(R.envMap||W.environment),W.envMapRotation=W.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,zt===void 0&&(R.addEventListener("dispose",Xt),zt=new Map,W.programs=zt);let Vt=zt.get(Mt);if(Vt!==void 0){if(W.currentProgram===Vt&&W.lightsStateVersion===ut)return Mr(R,yt),Vt}else yt.uniforms=_t.getUniforms(R),R.onBeforeCompile(yt,P),Vt=_t.acquireProgram(yt,Mt),zt.set(Mt,Vt),W.uniforms=yt.uniforms;const Ct=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ct.clippingPlanes=at.uniform),Mr(R,yt),W.needsLights=Mo(R),W.lightsStateVersion=ut,W.needsLights&&(Ct.ambientLightColor.value=k.state.ambient,Ct.lightProbe.value=k.state.probe,Ct.directionalLights.value=k.state.directional,Ct.directionalLightShadows.value=k.state.directionalShadow,Ct.spotLights.value=k.state.spot,Ct.spotLightShadows.value=k.state.spotShadow,Ct.rectAreaLights.value=k.state.rectArea,Ct.ltc_1.value=k.state.rectAreaLTC1,Ct.ltc_2.value=k.state.rectAreaLTC2,Ct.pointLights.value=k.state.point,Ct.pointLightShadows.value=k.state.pointShadow,Ct.hemisphereLights.value=k.state.hemi,Ct.directionalShadowMap.value=k.state.directionalShadowMap,Ct.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ct.spotShadowMap.value=k.state.spotShadowMap,Ct.spotLightMatrix.value=k.state.spotLightMatrix,Ct.spotLightMap.value=k.state.spotLightMap,Ct.pointShadowMap.value=k.state.pointShadowMap,Ct.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Vt,W.uniformsList=null,Vt}function Ms(R){if(R.uniformsList===null){const B=R.currentProgram.getUniforms();R.uniformsList=_a.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function Mr(R,B){const X=wt.get(R);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Ar(R,B,X,W,k){B.isScene!==!0&&(B=we),N.resetTextureUnits();const ot=B.fog,ut=W.isMeshStandardMaterial?B.environment:null,yt=T===null?P.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:os,Mt=(W.isMeshStandardMaterial?G:w).get(W.envMap||ut),zt=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Vt=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ct=!!X.morphAttributes.position,re=!!X.morphAttributes.normal,ce=!!X.morphAttributes.color;let Ie=Ni;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ie=P.toneMapping);const Re=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ae=Re!==void 0?Re.length:0,Pt=wt.get(W),Be=p.state.lights;if(lt===!0&&(At===!0||R!==v)){const Yt=R===v&&W.id===y;at.setState(W,R,Yt)}let fe=!1;W.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Be.state.version||Pt.outputColorSpace!==yt||k.isBatchedMesh&&Pt.batching===!1||!k.isBatchedMesh&&Pt.batching===!0||k.isBatchedMesh&&Pt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Pt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Pt.instancing===!1||!k.isInstancedMesh&&Pt.instancing===!0||k.isSkinnedMesh&&Pt.skinning===!1||!k.isSkinnedMesh&&Pt.skinning===!0||k.isInstancedMesh&&Pt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Pt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Pt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Pt.instancingMorph===!1&&k.morphTexture!==null||Pt.envMap!==Mt||W.fog===!0&&Pt.fog!==ot||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==at.numPlanes||Pt.numIntersection!==at.numIntersection)||Pt.vertexAlphas!==zt||Pt.vertexTangents!==Vt||Pt.morphTargets!==Ct||Pt.morphNormals!==re||Pt.morphColors!==ce||Pt.toneMapping!==Ie||Pt.morphTargetsCount!==ae)&&(fe=!0):(fe=!0,Pt.__version=W.version);let mn=Pt.currentProgram;fe===!0&&(mn=ei(W,B,k));let Ei=!1,Ne=!1,cn=!1;const ve=mn.getUniforms(),Ye=Pt.uniforms;if(Rt.useProgram(mn.program)&&(Ei=!0,Ne=!0,cn=!0),W.id!==y&&(y=W.id,Ne=!0),Ei||v!==R){Rt.buffers.depth.getReversed()?(dt.copy(R.projectionMatrix),W_(dt),X_(dt),ve.setValue(U,"projectionMatrix",dt)):ve.setValue(U,"projectionMatrix",R.projectionMatrix),ve.setValue(U,"viewMatrix",R.matrixWorldInverse);const ke=ve.map.cameraPosition;ke!==void 0&&ke.setValue(U,de.setFromMatrixPosition(R.matrixWorld)),ne.logarithmicDepthBuffer&&ve.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ve.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),v!==R&&(v=R,Ne=!0,cn=!0)}if(k.isSkinnedMesh){ve.setOptional(U,k,"bindMatrix"),ve.setOptional(U,k,"bindMatrixInverse");const Yt=k.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),ve.setValue(U,"boneTexture",Yt.boneTexture,N))}k.isBatchedMesh&&(ve.setOptional(U,k,"batchingTexture"),ve.setValue(U,"batchingTexture",k._matricesTexture,N),ve.setOptional(U,k,"batchingIdTexture"),ve.setValue(U,"batchingIdTexture",k._indirectTexture,N),ve.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&ve.setValue(U,"batchingColorTexture",k._colorsTexture,N));const hn=X.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&kt.update(k,X,mn),(Ne||Pt.receiveShadow!==k.receiveShadow)&&(Pt.receiveShadow=k.receiveShadow,ve.setValue(U,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ye.envMap.value=Mt,Ye.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Ye.envMapIntensity.value=B.environmentIntensity),Ne&&(ve.setValue(U,"toneMappingExposure",P.toneMappingExposure),Pt.needsLights&&kn(Ye,cn),ot&&W.fog===!0&&ft.refreshFogUniforms(Ye,ot),ft.refreshMaterialUniforms(Ye,W,Y,it,p.state.transmissionRenderTarget[R.id]),_a.upload(U,Ms(Pt),Ye,N)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(_a.upload(U,Ms(Pt),Ye,N),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ve.setValue(U,"center",k.center),ve.setValue(U,"modelViewMatrix",k.modelViewMatrix),ve.setValue(U,"normalMatrix",k.normalMatrix),ve.setValue(U,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Yt=W.uniformsGroups;for(let ke=0,ni=Yt.length;ke<ni;ke++){const xn=Yt[ke];O.update(xn,mn),O.bind(xn,mn)}}return mn}function kn(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function Mo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,B,X){const W=wt.get(R);W.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),wt.get(R.texture).__webglTexture=B,wt.get(R.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,B){const X=wt.get(R);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const Ao=U.createFramebuffer();this.setRenderTarget=function(R,B=0,X=0){T=R,F=B,S=X;let W=!0,k=null,ot=!1,ut=!1;if(R){const Mt=wt.get(R);if(Mt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(U.FRAMEBUFFER,null),W=!1;else if(Mt.__webglFramebuffer===void 0)N.setupRenderTarget(R);else if(Mt.__hasExternalTextures)N.rebindTextures(R,wt.get(R.texture).__webglTexture,wt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ct=R.depthTexture;if(Mt.__boundDepthTexture!==Ct){if(Ct!==null&&wt.has(Ct)&&(R.width!==Ct.image.width||R.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(R)}}const zt=R.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(ut=!0);const Vt=wt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Vt[B])?k=Vt[B][X]:k=Vt[B],ot=!0):R.samples>0&&N.useMultisampledRTT(R)===!1?k=wt.get(R).__webglMultisampledFramebuffer:Array.isArray(Vt)?k=Vt[X]:k=Vt,A.copy(R.viewport),L.copy(R.scissor),b=R.scissorTest}else A.copy(bt).multiplyScalar(Y).floor(),L.copy(Ht).multiplyScalar(Y).floor(),b=Wt;if(X!==0&&(k=Ao),Rt.bindFramebuffer(U.FRAMEBUFFER,k)&&W&&Rt.drawBuffers(R,k),Rt.viewport(A),Rt.scissor(L),Rt.setScissorTest(b),ot){const Mt=wt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Mt.__webglTexture,X)}else if(ut){const Mt=wt.get(R.texture),zt=B;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.__webglTexture,X,zt)}else if(R!==null&&X!==0){const Mt=wt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mt.__webglTexture,X)}y=-1},this.readRenderTargetPixels=function(R,B,X,W,k,ot,ut){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=wt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ut!==void 0&&(yt=yt[ut]),yt){Rt.bindFramebuffer(U.FRAMEBUFFER,yt);try{const Mt=R.texture,zt=Mt.format,Vt=Mt.type;if(!ne.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-W&&X>=0&&X<=R.height-k&&U.readPixels(B,X,W,k,jt.convert(zt),jt.convert(Vt),ot)}finally{const Mt=T!==null?wt.get(T).__webglFramebuffer:null;Rt.bindFramebuffer(U.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(R,B,X,W,k,ot,ut){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=wt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ut!==void 0&&(yt=yt[ut]),yt)if(B>=0&&B<=R.width-W&&X>=0&&X<=R.height-k){Rt.bindFramebuffer(U.FRAMEBUFFER,yt);const Mt=R.texture,zt=Mt.format,Vt=Mt.type;if(!ne.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ct=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ct),U.bufferData(U.PIXEL_PACK_BUFFER,ot.byteLength,U.STREAM_READ),U.readPixels(B,X,W,k,jt.convert(zt),jt.convert(Vt),0);const re=T!==null?wt.get(T).__webglFramebuffer:null;Rt.bindFramebuffer(U.FRAMEBUFFER,re);const ce=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await G_(U,ce,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ct),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ot),U.deleteBuffer(Ct),U.deleteSync(ce),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,B=null,X=0){const W=Math.pow(2,-X),k=Math.floor(R.image.width*W),ot=Math.floor(R.image.height*W),ut=B!==null?B.x:0,yt=B!==null?B.y:0;N.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,ut,yt,k,ot),Rt.unbindTexture()};const As=U.createFramebuffer(),ws=U.createFramebuffer();this.copyTextureToTexture=function(R,B,X=null,W=null,k=0,ot=null){ot===null&&(k!==0?(ga("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=k,k=0):ot=0);let ut,yt,Mt,zt,Vt,Ct,re,ce,Ie;const Re=R.isCompressedTexture?R.mipmaps[ot]:R.image;if(X!==null)ut=X.max.x-X.min.x,yt=X.max.y-X.min.y,Mt=X.isBox3?X.max.z-X.min.z:1,zt=X.min.x,Vt=X.min.y,Ct=X.isBox3?X.min.z:0;else{const hn=Math.pow(2,-k);ut=Math.floor(Re.width*hn),yt=Math.floor(Re.height*hn),R.isDataArrayTexture?Mt=Re.depth:R.isData3DTexture?Mt=Math.floor(Re.depth*hn):Mt=1,zt=0,Vt=0,Ct=0}W!==null?(re=W.x,ce=W.y,Ie=W.z):(re=0,ce=0,Ie=0);const ae=jt.convert(B.format),Pt=jt.convert(B.type);let Be;B.isData3DTexture?(N.setTexture3D(B,0),Be=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(N.setTexture2DArray(B,0),Be=U.TEXTURE_2D_ARRAY):(N.setTexture2D(B,0),Be=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const fe=U.getParameter(U.UNPACK_ROW_LENGTH),mn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ei=U.getParameter(U.UNPACK_SKIP_PIXELS),Ne=U.getParameter(U.UNPACK_SKIP_ROWS),cn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Re.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Re.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,zt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Vt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ct);const ve=R.isDataArrayTexture||R.isData3DTexture,Ye=B.isDataArrayTexture||B.isData3DTexture;if(R.isDepthTexture){const hn=wt.get(R),Yt=wt.get(B),ke=wt.get(hn.__renderTarget),ni=wt.get(Yt.__renderTarget);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,ke.__webglFramebuffer),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let xn=0;xn<Mt;xn++)ve&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.get(R).__webglTexture,k,Ct+xn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.get(B).__webglTexture,ot,Ie+xn)),U.blitFramebuffer(zt,Vt,ut,yt,re,ce,ut,yt,U.DEPTH_BUFFER_BIT,U.NEAREST);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||R.isRenderTargetTexture||wt.has(R)){const hn=wt.get(R),Yt=wt.get(B);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,As),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,ws);for(let ke=0;ke<Mt;ke++)ve?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,hn.__webglTexture,k,Ct+ke):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,hn.__webglTexture,k),Ye?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Yt.__webglTexture,ot,Ie+ke):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Yt.__webglTexture,ot),k!==0?U.blitFramebuffer(zt,Vt,ut,yt,re,ce,ut,yt,U.COLOR_BUFFER_BIT,U.NEAREST):Ye?U.copyTexSubImage3D(Be,ot,re,ce,Ie+ke,zt,Vt,ut,yt):U.copyTexSubImage2D(Be,ot,re,ce,zt,Vt,ut,yt);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ye?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(Be,ot,re,ce,Ie,ut,yt,Mt,ae,Pt,Re.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Be,ot,re,ce,Ie,ut,yt,Mt,ae,Re.data):U.texSubImage3D(Be,ot,re,ce,Ie,ut,yt,Mt,ae,Pt,Re):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ot,re,ce,ut,yt,ae,Pt,Re.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ot,re,ce,Re.width,Re.height,ae,Re.data):U.texSubImage2D(U.TEXTURE_2D,ot,re,ce,ut,yt,ae,Pt,Re);U.pixelStorei(U.UNPACK_ROW_LENGTH,fe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ei),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ne),U.pixelStorei(U.UNPACK_SKIP_IMAGES,cn),ot===0&&B.generateMipmaps&&U.generateMipmap(Be),Rt.unbindTexture()},this.copyTextureToTexture3D=function(R,B,X=null,W=null,k=0){return ga('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,B,X,W,k)},this.initRenderTarget=function(R){wt.get(R).__webglFramebuffer===void 0&&N.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),Rt.unbindTexture()},this.resetState=function(){F=0,S=0,T=null,Rt.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}}const Bd={type:"change"},Ch={type:"start"},Np={type:"end"},na=new yp,kd=new Ci,_T=Math.cos(70*z_.DEG2RAD),ze=new z,_n=2*Math.PI,xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xl=1e-6;class vT extends Lv{constructor(t,e=null){super(t,e),this.state=xe.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zr.ROTATE,MIDDLE:Zr.DOLLY,RIGHT:Zr.PAN},this.touches={ONE:Yr.ROTATE,TWO:Yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new mr,this._lastTargetPosition=new z,this._quat=new mr().setFromUnitVectors(t.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fd,this._sphericalDelta=new fd,this._scale=1,this._panOffset=new z,this._rotateStart=new qt,this._rotateEnd=new qt,this._rotateDelta=new qt,this._panStart=new qt,this._panEnd=new qt,this._panDelta=new qt,this._dollyStart=new qt,this._dollyEnd=new qt,this._dollyDelta=new qt,this._dollyDirection=new z,this._mouse=new qt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ET.bind(this),this._onPointerDown=yT.bind(this),this._onPointerUp=xT.bind(this),this._onContextMenu=RT.bind(this),this._onMouseWheel=MT.bind(this),this._onKeyDown=AT.bind(this),this._onTouchStart=wT.bind(this),this._onTouchMove=bT.bind(this),this._onMouseDown=TT.bind(this),this._onMouseMove=ST.bind(this),this._interceptControlDown=CT.bind(this),this._interceptControlUp=IT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bd),this.update(),this.state=xe.NONE}update(t=null){const e=this.object.position;ze.copy(e).sub(this.target),ze.applyQuaternion(this._quat),this._spherical.setFromVector3(ze),this.autoRotate&&this.state===xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=_n:n>Math.PI&&(n-=_n),r<-Math.PI?r+=_n:r>Math.PI&&(r-=_n),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(ze.setFromSpherical(this._spherical),ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const l=ze.length();o=this._clampDistance(l*this._scale);const c=l-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const l=new z(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const h=new z(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(l),this.object.updateMatrixWorld(),o=ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(na.origin.copy(this.object.position),na.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(na.direction))<_T?this.object.lookAt(this.target):(kd.setFromNormalAndCoplanarPoint(this.object.up,this.target),na.intersectPlane(kd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Xl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xl||this._lastTargetPosition.distanceToSquared(this.target)>Xl?(this.dispatchEvent(Bd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?_n/60*this.autoRotateSpeed*t:_n/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ze.setFromMatrixColumn(e,0),ze.multiplyScalar(-t),this._panOffset.add(ze)}_panUp(t,e){this.screenSpacePanning===!0?ze.setFromMatrixColumn(e,1):(ze.setFromMatrixColumn(e,0),ze.crossVectors(this.object.up,ze)),ze.multiplyScalar(t),this._panOffset.add(ze)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ze.copy(r).sub(this.target);let s=ze.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,l=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,l=(t.pageY+e.y)*.5;this._updateZoomParameters(o,l)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new qt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function yT(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ET(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function xT(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Np),this.state=xe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function TT(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xe.DOLLY;break;case Zr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xe.ROTATE}break;case Zr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xe.PAN}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(Ch)}function ST(i){switch(this.state){case xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function MT(i){this.enabled===!1||this.enableZoom===!1||this.state!==xe.NONE||(i.preventDefault(),this.dispatchEvent(Ch),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Np))}function AT(i){this.enabled!==!1&&this._handleKeyDown(i)}function wT(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Yr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=xe.TOUCH_ROTATE;break;case Yr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=xe.TOUCH_PAN;break;default:this.state=xe.NONE}break;case 2:switch(this.touches.TWO){case Yr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xe.TOUCH_DOLLY_PAN;break;case Yr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xe.TOUCH_DOLLY_ROTATE;break;default:this.state=xe.NONE}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(Ch)}function bT(i){switch(this._trackPointer(i),this.state){case xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xe.NONE}}function RT(i){this.enabled!==!1&&i.preventDefault()}function CT(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function IT(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class zd extends fn{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new qt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const Gr=new z,Hd=new Ce,Gd=new Ce,Wd=new z,Xd=new z;class PT{constructor(t={}){const e=this;let n,r,s,o;const l={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:r}},this.render=function(x,M){x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),M.parent===null&&M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),Hd.copy(M.matrixWorldInverse),Gd.multiplyMatrices(M.projectionMatrix,Hd),u(x,x,M),_(x)},this.setSize=function(x,M){n=x,r=M,s=n/2,o=r/2,c.style.width=x+"px",c.style.height=M+"px"};function h(x){x.isCSS2DObject&&(x.element.style.display="none");for(let M=0,g=x.children.length;M<g;M++)h(x.children[M])}function u(x,M,g){if(x.visible===!1){h(x);return}if(x.isCSS2DObject){Gr.setFromMatrixPosition(x.matrixWorld),Gr.applyMatrix4(Gd);const p=Gr.z>=-1&&Gr.z<=1&&x.layers.test(g.layers)===!0,I=x.element;I.style.display=p===!0?"":"none",p===!0&&(x.onBeforeRender(e,M,g),I.style.transform="translate("+-100*x.center.x+"%,"+-100*x.center.y+"%)translate("+(Gr.x*s+s)+"px,"+(-Gr.y*o+o)+"px)",I.parentNode!==c&&c.appendChild(I),x.onAfterRender(e,M,g));const D={distanceToCameraSquared:d(g,x)};l.objects.set(x,D)}for(let p=0,I=x.children.length;p<I;p++)u(x.children[p],M,g)}function d(x,M){return Wd.setFromMatrixPosition(x.matrixWorld),Xd.setFromMatrixPosition(M.matrixWorld),Wd.distanceToSquared(Xd)}function m(x){const M=[];return x.traverseVisible(function(g){g.isCSS2DObject&&M.push(g)}),M}function _(x){const M=m(x).sort(function(p,I){if(p.renderOrder!==I.renderOrder)return I.renderOrder-p.renderOrder;const D=l.objects.get(p).distanceToCameraSquared,P=l.objects.get(I).distanceToCameraSquared;return D-P}),g=M.length;for(let p=0,I=M.length;p<I;p++)M[p].element.style.zIndex=g-p}}}const zn="/solarsystem/";let Up,ks,zs,Pi,cr,hr,Wc,Un,Vs=0;function DT(i,t){console.log("toggled"),i.traverse(e=>{e instanceof bn&&(e.visible=t)})}function LT(){const i=document.querySelector("canvas.threejs");cr=document.createElement("div"),cr.className="earth-label",cr.innerHTML='<p class="hastighed">Hastighed:10</p><p class="selv-hastighed">Hastighed Selv:1</p><p class="rotation">rotation sol:1</p>',zs=document.createElement("div"),zs.className="sun-label",zs.innerHTML="<p class='lys'>lystyrke:10%</p>";const t=new gT({canvas:i,antialias:!0});t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new PT;e.setSize(window.innerWidth,window.innerHeight),e.domElement.style.position="absolute",e.domElement.style.top="0px",e.domElement.style.pointerEvents="none",document.body.appendChild(e.domElement);const n=new Av,r=new Mv,s=75,o=window.innerWidth/window.innerHeight,l=.1,c=1e3,h=new gv,u=new wn(s,o,l,c);u.lookAt(0,0,0),u.position.set(0,20,22);const d=new Iv(16741869,.2);Wc=new Rv(16777215,500),h.add(d,Wc);const m=n.load(zn+"static/textures/earthTexture/earth_albedo.jpg"),_=n.load(zn+"static/textures/earthTexture/earth_normal.png"),x=n.load(zn+"static/textures/earthTexture/cloud_base.jpg"),M=n.load(zn+"static/textures/earthTexture/cloud_alpha.png"),g=n.load("static/textures/sunTexture/sun.jpg"),p=r.load([zn+"static/textures/backgroundTexture/bgCube/px.png",zn+"static/textures/backgroundTexture/bgCube/nx.png",zn+"static/textures/backgroundTexture/bgCube/py.png",zn+"static/textures/backgroundTexture/bgCube/ny.png",zn+"static/textures/backgroundTexture/bgCube/pz.png",zn+"static/textures/backgroundTexture/bgCube/nz.png"]);h.background=p;const I=new ad({map:m,normalMap:_}),D=new ad({map:x,alphaMap:M,transparent:!0}),P=new Mh({map:g,color:new le(16761856)}),V=new bh(1,32,32);Pi=new bn(V,I),hr=new bn(V,D),ks=new bn(V,P);const F=new zd(cr),S=new zd(zs);F.position.set(0,3.5,0),Pi.add(F),S.position.set(0,1.6,0),ks.add(S),ks.scale.setScalar(5),Pi.scale.setScalar(1.5),hr.scale.setScalar(1.55),Pi.position.x=15,hr.position.x=15,h.add(u,hr,Pi,ks);const T=new vT(u,t.domElement);return T.enableDamping=!0,Up=new Dv,Un={earthSpeed:10,earthRotationSpeed:1,lightIntensity:50,aroundSunDirection:1,rotationDirection:()=>{Un.aroundSunDirection*=-1}},{scene:h,camera:u,renderer:t,labelRenderer:e,controls:T,animateParams:Un}}function NT(){const i=(Un.earthSpeed-1)*1.9/99+.1,t=(Un.earthRotationSpeed-.003)*(.15-.003)/99+.003,e=Up.getDelta();Vs+=e*i*Un.aroundSunDirection;const n=Math.round((Un.lightIntensity-1)*999/99+1);Wc.intensity=n;const r=Math.min(n/1e3*250+5,255),s=Math.min(n/1e3*250+5,r-1),o=zs.querySelector(".lys");o&&(o.innerText=`Lystyrke: ${Un.lightIntensity}%`);const l=cr.querySelector(".hastighed");l&&(l.innerText=`Hastighed: ${Un.earthSpeed}`);const c=cr.querySelector(".selv-hastighed");c&&(c.innerText=`Hastighed selv: ${Un.earthRotationSpeed}`);const h=cr.querySelector(".rotation");h&&(h.innerText=`Rotation Sol: ${Un.aroundSunDirection}`),ks.material.color.setRGB(r/255,s/255,0),Pi.rotation.y+=t,hr.rotation.y+=t+.002,Pi.position.x=Math.sin(Vs)*15,Pi.position.z=Math.cos(Vs)*15,hr.position.x=Math.sin(Vs)*15,hr.position.z=Math.cos(Vs)*15}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class $n{constructor(t,e,n,r,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),$n.nextNameID=$n.nextNameID||0,this.$name.id=`lil-gui-name-${++$n.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class UT extends $n{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Xc(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const FT={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Xc,toHexString:Xc},eo={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},OT={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=eo.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const r=i*n<<16^t*n<<8^e*n<<0;return eo.toHexString(r)}},VT={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=eo.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const r=i*n<<16^t*n<<8^e*n<<0;return eo.toHexString(r)}},BT=[FT,eo,OT,VT];function kT(i){return BT.find(t=>t.match(i))}class zT extends $n{constructor(t,e,n,r){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=kT(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Xc(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ql extends $n{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class HT extends $n{constructor(t,e,n,r,s,o){super(t,e,n,"number"),this._initInput(),this.min(r),this.max(s);const l=o!==void 0;this.step(l?o:this._getImplicitStep(),l),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let I=parseFloat(this.$input.value);isNaN(I)||(this._stepExplicit&&(I=this._snap(I)),this.setValue(this._clamp(I)))},n=I=>{const D=parseFloat(this.$input.value);isNaN(D)||(this._snapClampSetValue(D+I),this.$input.value=this.getValue())},r=I=>{I.key==="Enter"&&this.$input.blur(),I.code==="ArrowUp"&&(I.preventDefault(),n(this._step*this._arrowKeyMultiplier(I))),I.code==="ArrowDown"&&(I.preventDefault(),n(this._step*this._arrowKeyMultiplier(I)*-1))},s=I=>{this._inputFocused&&(I.preventDefault(),n(this._step*this._normalizeMouseWheel(I)))};let o=!1,l,c,h,u,d;const m=5,_=I=>{l=I.clientX,c=h=I.clientY,o=!0,u=this.getValue(),d=0,window.addEventListener("mousemove",x),window.addEventListener("mouseup",M)},x=I=>{if(o){const D=I.clientX-l,P=I.clientY-c;Math.abs(P)>m?(I.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(D)>m&&M()}if(!o){const D=I.clientY-h;d-=D*this._step*this._arrowKeyMultiplier(I),u+d>this._max?d=this._max-u:u+d<this._min&&(d=this._min-u),this._snapClampSetValue(u+d)}h=I.clientY},M=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",M)},g=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",_),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(p,I,D,P,V)=>(p-I)/(D-I)*(V-P)+P,e=p=>{const I=this.$slider.getBoundingClientRect();let D=t(p,I.left,I.right,this._min,this._max);this._snapClampSetValue(D)},n=p=>{this._setDraggingStyle(!0),e(p.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=p=>{e(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let o=!1,l,c;const h=p=>{p.preventDefault(),this._setDraggingStyle(!0),e(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(l=p.touches[0].clientX,c=p.touches[0].clientY,o=!0):h(p),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",m))},d=p=>{if(o){const I=p.touches[0].clientX-l,D=p.touches[0].clientY-c;Math.abs(I)>Math.abs(D)?h(p):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",m))}else p.preventDefault(),e(p.touches[0].clientX)},m=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",m)},_=this._callOnFinishChange.bind(this),x=400;let M;const g=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const D=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+D),this.$input.value=this.getValue(),clearTimeout(M),M=setTimeout(_,x)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class GT extends $n{constructor(t,e,n,r){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class WT extends $n{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var XT=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function qT(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let qd=!1;class Ih{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:r,title:s="Controls",closeFolders:o=!1,injectStyles:l=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!qd&&l&&(qT(XT),qd=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=o}add(t,e,n,r,s){if(Object(n)===n)return new GT(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new HT(this,t,e,n,r,s);case"boolean":return new UT(this,t,e);case"string":return new WT(this,t,e);case"function":return new ql(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new zT(this,t,e,n)}addFolder(t){const e=new Ih({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof ql||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ql)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}let ir,ur;const ui=[];function $T(i,t,e){ir=new Ih,ui.volume=ir.add(t,"volume",0,100,1).name("Volume").onChange(n=>{ur=e(),ur&&ur.setVolume&&ur.setVolume(n)}),ui.earthSpeed=ir.add(i,"earthSpeed",1,100,1).name("Earth Speed"),ui.earthRotationSpeed=ir.add(i,"earthRotationSpeed",1,100,1).name("Earth Rotation Speed"),ui.lightIntensity=ir.add(i,"lightIntensity",1,100,1).name("Light Intensity"),ui.rotationDirection=ir.add(i,"rotationDirection").name("Change Rotation Direction")}function jT(i,t,e){const n=i.songNum;e.aroundSunDirection=i.rotationDirection,ui.earthSpeed.setValue(i.earthSpeed),ui.earthRotationSpeed.setValue(i.earthRotationSpeed),ui.lightIntensity.setValue(i.lightIntensity),ui.volume.setValue(i.volume),ur&&n&&t&&(ur.loadVideoById(t[n-1].id),ur.playVideo())}function KT(i){ir.show(i)}const QT=()=>{};var $d={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=function(i){const t=[];let e=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},ZT=function(i){const t=[];let e=0,n=0;for(;e<i.length;){const r=i[e++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=i[e++];t[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=i[e++],o=i[e++],l=i[e++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[n++]=String.fromCharCode(55296+(c>>10)),t[n++]=String.fromCharCode(56320+(c&1023))}else{const s=i[e++],o=i[e++];t[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Op={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const s=i[r],o=r+1<i.length,l=o?i[r+1]:0,c=r+2<i.length,h=c?i[r+2]:0,u=s>>2,d=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,_=h&63;c||(_=64,o||(m=64)),n.push(e[u],e[d],e[m],e[_])}return n.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(Fp(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):ZT(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const s=e[i.charAt(r++)],l=r<i.length?e[i.charAt(r)]:0;++r;const h=r<i.length?e[i.charAt(r)]:64;++r;const d=r<i.length?e[i.charAt(r)]:64;if(++r,s==null||l==null||h==null||d==null)throw new JT;const m=s<<2|l>>4;if(n.push(m),h!==64){const _=l<<4&240|h>>2;if(n.push(_),d!==64){const x=h<<6&192|d;n.push(x)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class JT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tS=function(i){const t=Fp(i);return Op.encodeByteArray(t,!0)},Ra=function(i){return tS(i).replace(/\./g,"")},eS=function(i){try{return Op.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=()=>nS().__FIREBASE_DEFAULTS__,rS=()=>{if(typeof process>"u"||typeof $d>"u")return;const i=$d.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},sS=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&eS(i[1]);return t&&JSON.parse(t)},Ph=()=>{try{return QT()||iS()||rS()||sS()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},oS=i=>{var t,e;return(e=(t=Ph())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[i]},aS=i=>{const t=oS(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Vp=()=>{var i;return(i=Ph())===null||i===void 0?void 0:i.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",r=i.iat||0,s=i.sub||i.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Ra(JSON.stringify(e)),Ra(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uS(){var i;const t=(i=Ph())===null||i===void 0?void 0:i.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dS(){return!uS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fS(){try{return typeof indexedDB=="object"}catch{return!1}}function pS(){return new Promise((i,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="FirebaseError";class _s extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=mS,Object.setPrototypeOf(this,_s.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bp.prototype.create)}}class Bp{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?gS(s,n):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new _s(r,l,n)}}function gS(i,t){return i.replace(_S,(e,n)=>{const r=t[n];return r!=null?String(r):`<${n}?>`})}const _S=/\{\$([^}]+)}/g;function no(i,t){if(i===t)return!0;const e=Object.keys(i),n=Object.keys(t);for(const r of e){if(!n.includes(r))return!1;const s=i[r],o=t[r];if(jd(s)&&jd(o)){if(!no(s,o))return!1}else if(s!==o)return!1}for(const r of n)if(!e.includes(r))return!1;return!0}function jd(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(i){return i&&i._delegate?i._delegate:i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(i){return i.endsWith(".cloudworkstations.dev")}async function vS(i){return(await fetch(i,{credentials:"include"})).ok}class ro{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new lS;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(xS(t))try{this.getOrInitializeService({instanceIdentifier:rr})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(t=rr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=rr){return this.instances.has(t)}getOptions(t=rr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);n===l&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ES(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=rr){return this.component?this.component.multipleInstances?t:rr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ES(i){return i===rr?void 0:i}function xS(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new yS(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ue||(ue={}));const SS={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},MS=ue.INFO,AS={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},wS=(i,t,...e)=>{if(t<i.logLevel)return;const n=new Date().toISOString(),r=AS[t];if(r)console[r](`[${n}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class zp{constructor(t){this.name=t,this._logLevel=MS,this._logHandler=wS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ue))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?SS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...t),this._logHandler(this,ue.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...t),this._logHandler(this,ue.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...t),this._logHandler(this,ue.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...t),this._logHandler(this,ue.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...t),this._logHandler(this,ue.ERROR,...t)}}const bS=(i,t)=>t.some(e=>i instanceof e);let Yd,Kd;function RS(){return Yd||(Yd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CS(){return Kd||(Kd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hp=new WeakMap,qc=new WeakMap,Gp=new WeakMap,$l=new WeakMap,Dh=new WeakMap;function IS(i){const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",o)},s=()=>{e(Ui(i.result)),r()},o=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Hp.set(e,i)}).catch(()=>{}),Dh.set(t,i),t}function PS(i){if(qc.has(i))return;const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",o),i.removeEventListener("abort",o)},s=()=>{e(),r()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",o),i.addEventListener("abort",o)});qc.set(i,t)}let $c={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return qc.get(i);if(t==="objectStoreNames")return i.objectStoreNames||Gp.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ui(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function DS(i){$c=i($c)}function LS(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=i.call(jl(this),t,...e);return Gp.set(n,t.sort?t.sort():[t]),Ui(n)}:CS().includes(i)?function(...t){return i.apply(jl(this),t),Ui(Hp.get(this))}:function(...t){return Ui(i.apply(jl(this),t))}}function NS(i){return typeof i=="function"?LS(i):(i instanceof IDBTransaction&&PS(i),bS(i,RS())?new Proxy(i,$c):i)}function Ui(i){if(i instanceof IDBRequest)return IS(i);if($l.has(i))return $l.get(i);const t=NS(i);return t!==i&&($l.set(i,t),Dh.set(t,i)),t}const jl=i=>Dh.get(i);function US(i,t,{blocked:e,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(i,t),l=Ui(o);return n&&o.addEventListener("upgradeneeded",c=>{n(Ui(o.result),c.oldVersion,c.newVersion,Ui(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const FS=["get","getKey","getAll","getAllKeys","count"],OS=["put","add","delete","clear"],Yl=new Map;function Qd(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(Yl.get(t))return Yl.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,r=OS.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(r||FS.includes(e)))return;const s=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let h=c.store;return n&&(h=h.index(l.shift())),(await Promise.all([h[e](...l),r&&c.done]))[0]};return Yl.set(t,s),s}DS(i=>({...i,get:(t,e,n)=>Qd(t,e)||i.get(t,e,n),has:(t,e)=>!!Qd(t,e)||i.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(BS(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function BS(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const jc="@firebase/app",Zd="0.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new zp("@firebase/app"),kS="@firebase/app-compat",zS="@firebase/analytics-compat",HS="@firebase/analytics",GS="@firebase/app-check-compat",WS="@firebase/app-check",XS="@firebase/auth",qS="@firebase/auth-compat",$S="@firebase/database",jS="@firebase/data-connect",YS="@firebase/database-compat",KS="@firebase/functions",QS="@firebase/functions-compat",ZS="@firebase/installations",JS="@firebase/installations-compat",tM="@firebase/messaging",eM="@firebase/messaging-compat",nM="@firebase/performance",iM="@firebase/performance-compat",rM="@firebase/remote-config",sM="@firebase/remote-config-compat",oM="@firebase/storage",aM="@firebase/storage-compat",lM="@firebase/firestore",cM="@firebase/vertexai",hM="@firebase/firestore-compat",uM="firebase",dM="11.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="[DEFAULT]",fM={[jc]:"fire-core",[kS]:"fire-core-compat",[HS]:"fire-analytics",[zS]:"fire-analytics-compat",[WS]:"fire-app-check",[GS]:"fire-app-check-compat",[XS]:"fire-auth",[qS]:"fire-auth-compat",[$S]:"fire-rtdb",[jS]:"fire-data-connect",[YS]:"fire-rtdb-compat",[KS]:"fire-fn",[QS]:"fire-fn-compat",[ZS]:"fire-iid",[JS]:"fire-iid-compat",[tM]:"fire-fcm",[eM]:"fire-fcm-compat",[nM]:"fire-perf",[iM]:"fire-perf-compat",[rM]:"fire-rc",[sM]:"fire-rc-compat",[oM]:"fire-gcs",[aM]:"fire-gcs-compat",[lM]:"fire-fst",[hM]:"fire-fst-compat",[cM]:"fire-vertex","fire-js":"fire-js",[uM]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new Map,pM=new Map,Kc=new Map;function Jd(i,t){try{i.container.addComponent(t)}catch(e){gi.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function Ia(i){const t=i.name;if(Kc.has(t))return gi.debug(`There were multiple attempts to register component ${t}.`),!1;Kc.set(t,i);for(const e of Ca.values())Jd(e,i);for(const e of pM.values())Jd(e,i);return!0}function mM(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}function gM(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fi=new Bp("app","Firebase",_M);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ro("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Fi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yM=dM;function Wp(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const n=Object.assign({name:Yc,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw Fi.create("bad-app-name",{appName:String(r)});if(e||(e=Vp()),!e)throw Fi.create("no-options");const s=Ca.get(r);if(s){if(no(e,s.options)&&no(n,s.config))return s;throw Fi.create("duplicate-app",{appName:r})}const o=new TS(r);for(const c of Kc.values())o.addComponent(c);const l=new vM(e,n,o);return Ca.set(r,l),l}function EM(i=Yc){const t=Ca.get(i);if(!t&&i===Yc&&Vp())return Wp();if(!t)throw Fi.create("no-app",{appName:i});return t}function es(i,t,e){var n;let r=(n=fM[i])!==null&&n!==void 0?n:i;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const l=[`Unable to register library "${r}" with version "${t}":`];s&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),gi.warn(l.join(" "));return}Ia(new ro(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xM="firebase-heartbeat-database",TM=1,so="firebase-heartbeat-store";let Kl=null;function Xp(){return Kl||(Kl=US(xM,TM,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(so)}catch(e){console.warn(e)}}}}).catch(i=>{throw Fi.create("idb-open",{originalErrorMessage:i.message})})),Kl}async function SM(i){try{const e=(await Xp()).transaction(so),n=await e.objectStore(so).get(qp(i));return await e.done,n}catch(t){if(t instanceof _s)gi.warn(t.message);else{const e=Fi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});gi.warn(e.message)}}}async function tf(i,t){try{const n=(await Xp()).transaction(so,"readwrite");await n.objectStore(so).put(t,qp(i)),await n.done}catch(e){if(e instanceof _s)gi.warn(e.message);else{const n=Fi.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});gi.warn(n.message)}}}function qp(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM=1024,AM=30;class wM{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new RM(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ef();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>AM){const o=CM(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){gi.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ef(),{heartbeatsToSend:n,unsentEntries:r}=bM(this._heartbeatsCache.heartbeats),s=Ra(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return gi.warn(e),""}}}function ef(){return new Date().toISOString().substring(0,10)}function bM(i,t=MM){const e=[];let n=i.slice();for(const r of i){const s=e.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),nf(e)>t){s.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),nf(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class RM{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fS()?pS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await SM(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return tf(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return tf(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function nf(i){return Ra(JSON.stringify({version:2,heartbeats:i})).length}function CM(i){if(i.length===0)return-1;let t=0,e=i[0].date;for(let n=1;n<i.length;n++)i[n].date<e&&(e=i[n].date,t=n);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IM(i){Ia(new ro("platform-logger",t=>new VS(t),"PRIVATE")),Ia(new ro("heartbeat",t=>new wM(t),"PRIVATE")),es(jc,Zd,i),es(jc,Zd,"esm2017"),es("fire-js","")}IM("");var PM="firebase",DM="11.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */es(PM,DM,"app");var rf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oi,$p;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(S,T){function y(){}y.prototype=T.prototype,S.D=T.prototype,S.prototype=new y,S.prototype.constructor=S,S.C=function(v,A,L){for(var b=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)b[Z-2]=arguments[Z];return T.prototype[A].apply(v,b)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,T,y){y||(y=0);var v=Array(16);if(typeof T=="string")for(var A=0;16>A;++A)v[A]=T.charCodeAt(y++)|T.charCodeAt(y++)<<8|T.charCodeAt(y++)<<16|T.charCodeAt(y++)<<24;else for(A=0;16>A;++A)v[A]=T[y++]|T[y++]<<8|T[y++]<<16|T[y++]<<24;T=S.g[0],y=S.g[1],A=S.g[2];var L=S.g[3],b=T+(L^y&(A^L))+v[0]+3614090360&4294967295;T=y+(b<<7&4294967295|b>>>25),b=L+(A^T&(y^A))+v[1]+3905402710&4294967295,L=T+(b<<12&4294967295|b>>>20),b=A+(y^L&(T^y))+v[2]+606105819&4294967295,A=L+(b<<17&4294967295|b>>>15),b=y+(T^A&(L^T))+v[3]+3250441966&4294967295,y=A+(b<<22&4294967295|b>>>10),b=T+(L^y&(A^L))+v[4]+4118548399&4294967295,T=y+(b<<7&4294967295|b>>>25),b=L+(A^T&(y^A))+v[5]+1200080426&4294967295,L=T+(b<<12&4294967295|b>>>20),b=A+(y^L&(T^y))+v[6]+2821735955&4294967295,A=L+(b<<17&4294967295|b>>>15),b=y+(T^A&(L^T))+v[7]+4249261313&4294967295,y=A+(b<<22&4294967295|b>>>10),b=T+(L^y&(A^L))+v[8]+1770035416&4294967295,T=y+(b<<7&4294967295|b>>>25),b=L+(A^T&(y^A))+v[9]+2336552879&4294967295,L=T+(b<<12&4294967295|b>>>20),b=A+(y^L&(T^y))+v[10]+4294925233&4294967295,A=L+(b<<17&4294967295|b>>>15),b=y+(T^A&(L^T))+v[11]+2304563134&4294967295,y=A+(b<<22&4294967295|b>>>10),b=T+(L^y&(A^L))+v[12]+1804603682&4294967295,T=y+(b<<7&4294967295|b>>>25),b=L+(A^T&(y^A))+v[13]+4254626195&4294967295,L=T+(b<<12&4294967295|b>>>20),b=A+(y^L&(T^y))+v[14]+2792965006&4294967295,A=L+(b<<17&4294967295|b>>>15),b=y+(T^A&(L^T))+v[15]+1236535329&4294967295,y=A+(b<<22&4294967295|b>>>10),b=T+(A^L&(y^A))+v[1]+4129170786&4294967295,T=y+(b<<5&4294967295|b>>>27),b=L+(y^A&(T^y))+v[6]+3225465664&4294967295,L=T+(b<<9&4294967295|b>>>23),b=A+(T^y&(L^T))+v[11]+643717713&4294967295,A=L+(b<<14&4294967295|b>>>18),b=y+(L^T&(A^L))+v[0]+3921069994&4294967295,y=A+(b<<20&4294967295|b>>>12),b=T+(A^L&(y^A))+v[5]+3593408605&4294967295,T=y+(b<<5&4294967295|b>>>27),b=L+(y^A&(T^y))+v[10]+38016083&4294967295,L=T+(b<<9&4294967295|b>>>23),b=A+(T^y&(L^T))+v[15]+3634488961&4294967295,A=L+(b<<14&4294967295|b>>>18),b=y+(L^T&(A^L))+v[4]+3889429448&4294967295,y=A+(b<<20&4294967295|b>>>12),b=T+(A^L&(y^A))+v[9]+568446438&4294967295,T=y+(b<<5&4294967295|b>>>27),b=L+(y^A&(T^y))+v[14]+3275163606&4294967295,L=T+(b<<9&4294967295|b>>>23),b=A+(T^y&(L^T))+v[3]+4107603335&4294967295,A=L+(b<<14&4294967295|b>>>18),b=y+(L^T&(A^L))+v[8]+1163531501&4294967295,y=A+(b<<20&4294967295|b>>>12),b=T+(A^L&(y^A))+v[13]+2850285829&4294967295,T=y+(b<<5&4294967295|b>>>27),b=L+(y^A&(T^y))+v[2]+4243563512&4294967295,L=T+(b<<9&4294967295|b>>>23),b=A+(T^y&(L^T))+v[7]+1735328473&4294967295,A=L+(b<<14&4294967295|b>>>18),b=y+(L^T&(A^L))+v[12]+2368359562&4294967295,y=A+(b<<20&4294967295|b>>>12),b=T+(y^A^L)+v[5]+4294588738&4294967295,T=y+(b<<4&4294967295|b>>>28),b=L+(T^y^A)+v[8]+2272392833&4294967295,L=T+(b<<11&4294967295|b>>>21),b=A+(L^T^y)+v[11]+1839030562&4294967295,A=L+(b<<16&4294967295|b>>>16),b=y+(A^L^T)+v[14]+4259657740&4294967295,y=A+(b<<23&4294967295|b>>>9),b=T+(y^A^L)+v[1]+2763975236&4294967295,T=y+(b<<4&4294967295|b>>>28),b=L+(T^y^A)+v[4]+1272893353&4294967295,L=T+(b<<11&4294967295|b>>>21),b=A+(L^T^y)+v[7]+4139469664&4294967295,A=L+(b<<16&4294967295|b>>>16),b=y+(A^L^T)+v[10]+3200236656&4294967295,y=A+(b<<23&4294967295|b>>>9),b=T+(y^A^L)+v[13]+681279174&4294967295,T=y+(b<<4&4294967295|b>>>28),b=L+(T^y^A)+v[0]+3936430074&4294967295,L=T+(b<<11&4294967295|b>>>21),b=A+(L^T^y)+v[3]+3572445317&4294967295,A=L+(b<<16&4294967295|b>>>16),b=y+(A^L^T)+v[6]+76029189&4294967295,y=A+(b<<23&4294967295|b>>>9),b=T+(y^A^L)+v[9]+3654602809&4294967295,T=y+(b<<4&4294967295|b>>>28),b=L+(T^y^A)+v[12]+3873151461&4294967295,L=T+(b<<11&4294967295|b>>>21),b=A+(L^T^y)+v[15]+530742520&4294967295,A=L+(b<<16&4294967295|b>>>16),b=y+(A^L^T)+v[2]+3299628645&4294967295,y=A+(b<<23&4294967295|b>>>9),b=T+(A^(y|~L))+v[0]+4096336452&4294967295,T=y+(b<<6&4294967295|b>>>26),b=L+(y^(T|~A))+v[7]+1126891415&4294967295,L=T+(b<<10&4294967295|b>>>22),b=A+(T^(L|~y))+v[14]+2878612391&4294967295,A=L+(b<<15&4294967295|b>>>17),b=y+(L^(A|~T))+v[5]+4237533241&4294967295,y=A+(b<<21&4294967295|b>>>11),b=T+(A^(y|~L))+v[12]+1700485571&4294967295,T=y+(b<<6&4294967295|b>>>26),b=L+(y^(T|~A))+v[3]+2399980690&4294967295,L=T+(b<<10&4294967295|b>>>22),b=A+(T^(L|~y))+v[10]+4293915773&4294967295,A=L+(b<<15&4294967295|b>>>17),b=y+(L^(A|~T))+v[1]+2240044497&4294967295,y=A+(b<<21&4294967295|b>>>11),b=T+(A^(y|~L))+v[8]+1873313359&4294967295,T=y+(b<<6&4294967295|b>>>26),b=L+(y^(T|~A))+v[15]+4264355552&4294967295,L=T+(b<<10&4294967295|b>>>22),b=A+(T^(L|~y))+v[6]+2734768916&4294967295,A=L+(b<<15&4294967295|b>>>17),b=y+(L^(A|~T))+v[13]+1309151649&4294967295,y=A+(b<<21&4294967295|b>>>11),b=T+(A^(y|~L))+v[4]+4149444226&4294967295,T=y+(b<<6&4294967295|b>>>26),b=L+(y^(T|~A))+v[11]+3174756917&4294967295,L=T+(b<<10&4294967295|b>>>22),b=A+(T^(L|~y))+v[2]+718787259&4294967295,A=L+(b<<15&4294967295|b>>>17),b=y+(L^(A|~T))+v[9]+3951481745&4294967295,S.g[0]=S.g[0]+T&4294967295,S.g[1]=S.g[1]+(A+(b<<21&4294967295|b>>>11))&4294967295,S.g[2]=S.g[2]+A&4294967295,S.g[3]=S.g[3]+L&4294967295}n.prototype.u=function(S,T){T===void 0&&(T=S.length);for(var y=T-this.blockSize,v=this.B,A=this.h,L=0;L<T;){if(A==0)for(;L<=y;)r(this,S,L),L+=this.blockSize;if(typeof S=="string"){for(;L<T;)if(v[A++]=S.charCodeAt(L++),A==this.blockSize){r(this,v),A=0;break}}else for(;L<T;)if(v[A++]=S[L++],A==this.blockSize){r(this,v),A=0;break}}this.h=A,this.o+=T},n.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var T=1;T<S.length-8;++T)S[T]=0;var y=8*this.o;for(T=S.length-8;T<S.length;++T)S[T]=y&255,y/=256;for(this.u(S),S=Array(16),T=y=0;4>T;++T)for(var v=0;32>v;v+=8)S[y++]=this.g[T]>>>v&255;return S};function s(S,T){var y=l;return Object.prototype.hasOwnProperty.call(y,S)?y[S]:y[S]=T(S)}function o(S,T){this.h=T;for(var y=[],v=!0,A=S.length-1;0<=A;A--){var L=S[A]|0;v&&L==T||(y[A]=L,v=!1)}this.g=y}var l={};function c(S){return-128<=S&&128>S?s(S,function(T){return new o([T|0],0>T?-1:0)}):new o([S|0],0>S?-1:0)}function h(S){if(isNaN(S)||!isFinite(S))return d;if(0>S)return g(h(-S));for(var T=[],y=1,v=0;S>=y;v++)T[v]=S/y|0,y*=4294967296;return new o(T,0)}function u(S,T){if(S.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S.charAt(0)=="-")return g(u(S.substring(1),T));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(T,8)),v=d,A=0;A<S.length;A+=8){var L=Math.min(8,S.length-A),b=parseInt(S.substring(A,A+L),T);8>L?(L=h(Math.pow(T,L)),v=v.j(L).add(h(b))):(v=v.j(y),v=v.add(h(b)))}return v}var d=c(0),m=c(1),_=c(16777216);i=o.prototype,i.m=function(){if(M(this))return-g(this).m();for(var S=0,T=1,y=0;y<this.g.length;y++){var v=this.i(y);S+=(0<=v?v:4294967296+v)*T,T*=4294967296}return S},i.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x(this))return"0";if(M(this))return"-"+g(this).toString(S);for(var T=h(Math.pow(S,6)),y=this,v="";;){var A=P(y,T).g;y=p(y,A.j(T));var L=((0<y.g.length?y.g[0]:y.h)>>>0).toString(S);if(y=A,x(y))return L+v;for(;6>L.length;)L="0"+L;v=L+v}},i.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function x(S){if(S.h!=0)return!1;for(var T=0;T<S.g.length;T++)if(S.g[T]!=0)return!1;return!0}function M(S){return S.h==-1}i.l=function(S){return S=p(this,S),M(S)?-1:x(S)?0:1};function g(S){for(var T=S.g.length,y=[],v=0;v<T;v++)y[v]=~S.g[v];return new o(y,~S.h).add(m)}i.abs=function(){return M(this)?g(this):this},i.add=function(S){for(var T=Math.max(this.g.length,S.g.length),y=[],v=0,A=0;A<=T;A++){var L=v+(this.i(A)&65535)+(S.i(A)&65535),b=(L>>>16)+(this.i(A)>>>16)+(S.i(A)>>>16);v=b>>>16,L&=65535,b&=65535,y[A]=b<<16|L}return new o(y,y[y.length-1]&-2147483648?-1:0)};function p(S,T){return S.add(g(T))}i.j=function(S){if(x(this)||x(S))return d;if(M(this))return M(S)?g(this).j(g(S)):g(g(this).j(S));if(M(S))return g(this.j(g(S)));if(0>this.l(_)&&0>S.l(_))return h(this.m()*S.m());for(var T=this.g.length+S.g.length,y=[],v=0;v<2*T;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var A=0;A<S.g.length;A++){var L=this.i(v)>>>16,b=this.i(v)&65535,Z=S.i(A)>>>16,nt=S.i(A)&65535;y[2*v+2*A]+=b*nt,I(y,2*v+2*A),y[2*v+2*A+1]+=L*nt,I(y,2*v+2*A+1),y[2*v+2*A+1]+=b*Z,I(y,2*v+2*A+1),y[2*v+2*A+2]+=L*Z,I(y,2*v+2*A+2)}for(v=0;v<T;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=T;v<2*T;v++)y[v]=0;return new o(y,0)};function I(S,T){for(;(S[T]&65535)!=S[T];)S[T+1]+=S[T]>>>16,S[T]&=65535,T++}function D(S,T){this.g=S,this.h=T}function P(S,T){if(x(T))throw Error("division by zero");if(x(S))return new D(d,d);if(M(S))return T=P(g(S),T),new D(g(T.g),g(T.h));if(M(T))return T=P(S,g(T)),new D(g(T.g),T.h);if(30<S.g.length){if(M(S)||M(T))throw Error("slowDivide_ only works with positive integers.");for(var y=m,v=T;0>=v.l(S);)y=V(y),v=V(v);var A=F(y,1),L=F(v,1);for(v=F(v,2),y=F(y,2);!x(v);){var b=L.add(v);0>=b.l(S)&&(A=A.add(y),L=b),v=F(v,1),y=F(y,1)}return T=p(S,A.j(T)),new D(A,T)}for(A=d;0<=S.l(T);){for(y=Math.max(1,Math.floor(S.m()/T.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),L=h(y),b=L.j(T);M(b)||0<b.l(S);)y-=v,L=h(y),b=L.j(T);x(L)&&(L=m),A=A.add(L),S=p(S,b)}return new D(A,S)}i.A=function(S){return P(this,S).h},i.and=function(S){for(var T=Math.max(this.g.length,S.g.length),y=[],v=0;v<T;v++)y[v]=this.i(v)&S.i(v);return new o(y,this.h&S.h)},i.or=function(S){for(var T=Math.max(this.g.length,S.g.length),y=[],v=0;v<T;v++)y[v]=this.i(v)|S.i(v);return new o(y,this.h|S.h)},i.xor=function(S){for(var T=Math.max(this.g.length,S.g.length),y=[],v=0;v<T;v++)y[v]=this.i(v)^S.i(v);return new o(y,this.h^S.h)};function V(S){for(var T=S.g.length+1,y=[],v=0;v<T;v++)y[v]=S.i(v)<<1|S.i(v-1)>>>31;return new o(y,S.h)}function F(S,T){var y=T>>5;T%=32;for(var v=S.g.length-y,A=[],L=0;L<v;L++)A[L]=0<T?S.i(L+y)>>>T|S.i(L+y+1)<<32-T:S.i(L+y);return new o(A,S.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,$p=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=u,Oi=o}).apply(typeof rf<"u"?rf:typeof self<"u"?self:typeof window<"u"?window:{});var ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jp,Hs,Yp,va,Qc,Kp,Qp,Zp;(function(){var i,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,E){return a==Array.prototype||a==Object.prototype||(a[f]=E.value),a};function e(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ia=="object"&&ia];for(var f=0;f<a.length;++f){var E=a[f];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var n=e(this);function r(a,f){if(f)t:{var E=n;a=a.split(".");for(var C=0;C<a.length-1;C++){var H=a[C];if(!(H in E))break t;E=E[H]}a=a[a.length-1],C=E[a],f=f(C),f!=C&&f!=null&&t(E,a,{configurable:!0,writable:!0,value:f})}}function s(a,f){a instanceof String&&(a+="");var E=0,C=!1,H={next:function(){if(!C&&E<a.length){var q=E++;return{value:f(q,a[q]),done:!1}}return C=!0,{done:!0,value:void 0}}};return H[Symbol.iterator]=function(){return H},H}r("Array.prototype.values",function(a){return a||function(){return s(this,function(f,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function h(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function u(a,f,E){return a.call.apply(a.bind,arguments)}function d(a,f,E){if(!a)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var H=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(H,C),a.apply(f,H)}}return function(){return a.apply(f,arguments)}}function m(a,f,E){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?u:d,m.apply(null,arguments)}function _(a,f){var E=Array.prototype.slice.call(arguments,1);return function(){var C=E.slice();return C.push.apply(C,arguments),a.apply(this,C)}}function x(a,f){function E(){}E.prototype=f.prototype,a.aa=f.prototype,a.prototype=new E,a.prototype.constructor=a,a.Qb=function(C,H,q){for(var ct=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)ct[Ae-2]=arguments[Ae];return f.prototype[H].apply(C,ct)}}function M(a){const f=a.length;if(0<f){const E=Array(f);for(let C=0;C<f;C++)E[C]=a[C];return E}return[]}function g(a,f){for(let E=1;E<arguments.length;E++){const C=arguments[E];if(c(C)){const H=a.length||0,q=C.length||0;a.length=H+q;for(let ct=0;ct<q;ct++)a[H+ct]=C[ct]}else a.push(C)}}class p{constructor(f,E){this.i=f,this.j=E,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function I(a){return/^[\s\xa0]*$/.test(a)}function D(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function P(a){return P[" "](a),a}P[" "]=function(){};var V=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function F(a,f,E){for(const C in a)f.call(E,a[C],C,a)}function S(a,f){for(const E in a)f.call(void 0,a[E],E,a)}function T(a){const f={};for(const E in a)f[E]=a[E];return f}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(a,f){let E,C;for(let H=1;H<arguments.length;H++){C=arguments[H];for(E in C)a[E]=C[E];for(let q=0;q<y.length;q++)E=y[q],Object.prototype.hasOwnProperty.call(C,E)&&(a[E]=C[E])}}function A(a){var f=1;a=a.split(":");const E=[];for(;0<f&&a.length;)E.push(a.shift()),f--;return a.length&&E.push(a.join(":")),E}function L(a){l.setTimeout(()=>{throw a},0)}function b(){var a=pt;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class Z{constructor(){this.h=this.g=null}add(f,E){const C=nt.get();C.set(f,E),this.h?this.h.next=C:this.g=C,this.h=C}}var nt=new p(()=>new tt,a=>a.reset());class tt{constructor(){this.next=this.g=this.h=null}set(f,E){this.h=f,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let it,Y=!1,pt=new Z,Tt=()=>{const a=l.Promise.resolve(void 0);it=()=>{a.then(bt)}};var bt=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(E){L(E)}var f=nt;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}Y=!1};function Ht(){this.s=this.s,this.C=this.C}Ht.prototype.s=!1,Ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Wt(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}Wt.prototype.h=function(){this.defaultPrevented=!0};var Q=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const E=()=>{};l.addEventListener("test",E,f),l.removeEventListener("test",E,f)}catch{}return a}();function lt(a,f){if(Wt.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var E=this.type=a.type,C=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(V){t:{try{P(f.nodeName);var H=!0;break t}catch{}H=!1}H||(f=null)}}else E=="mouseover"?f=a.fromElement:E=="mouseout"&&(f=a.toElement);this.relatedTarget=f,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:At[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&lt.aa.h.call(this)}}x(lt,Wt);var At={2:"touch",3:"pen",4:"mouse"};lt.prototype.h=function(){lt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dt="closure_listenable_"+(1e6*Math.random()|0),Nt=0;function de(a,f,E,C,H){this.listener=a,this.proxy=null,this.src=f,this.type=E,this.capture=!!C,this.ha=H,this.key=++Nt,this.da=this.fa=!1}function Ut(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function we(a){this.src=a,this.g={},this.h=0}we.prototype.add=function(a,f,E,C,H){var q=a.toString();a=this.g[q],a||(a=this.g[q]=[],this.h++);var ct=Jt(a,f,C,H);return-1<ct?(f=a[ct],E||(f.fa=!1)):(f=new de(f,this.src,q,!!C,H),f.fa=E,a.push(f)),f};function Se(a,f){var E=f.type;if(E in a.g){var C=a.g[E],H=Array.prototype.indexOf.call(C,f,void 0),q;(q=0<=H)&&Array.prototype.splice.call(C,H,1),q&&(Ut(f),a.g[E].length==0&&(delete a.g[E],a.h--))}}function Jt(a,f,E,C){for(var H=0;H<a.length;++H){var q=a[H];if(!q.da&&q.listener==f&&q.capture==!!E&&q.ha==C)return H}return-1}var U="closure_lm_"+(1e6*Math.random()|0),tn={};function ee(a,f,E,C,H){if(Array.isArray(f)){for(var q=0;q<f.length;q++)ee(a,f[q],E,C,H);return null}return E=rt(E),a&&a[dt]?a.K(f,E,h(C)?!!C.capture:!1,H):ne(a,f,E,!1,C,H)}function ne(a,f,E,C,H,q){if(!f)throw Error("Invalid event type");var ct=h(H)?!!H.capture:!!H,Ae=G(a);if(Ae||(a[U]=Ae=new we(a)),E=Ae.add(f,E,C,ct,q),E.proxy)return E;if(C=Rt(),E.proxy=C,C.src=a,C.listener=E,a.addEventListener)Q||(H=ct),H===void 0&&(H=!1),a.addEventListener(f.toString(),C,H);else if(a.attachEvent)a.attachEvent(N(f.toString()),C);else if(a.addListener&&a.removeListener)a.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Rt(){function a(E){return f.call(a.src,a.listener,E)}const f=w;return a}function ye(a,f,E,C,H){if(Array.isArray(f))for(var q=0;q<f.length;q++)ye(a,f[q],E,C,H);else C=h(C)?!!C.capture:!!C,E=rt(E),a&&a[dt]?(a=a.i,f=String(f).toString(),f in a.g&&(q=a.g[f],E=Jt(q,E,C,H),-1<E&&(Ut(q[E]),Array.prototype.splice.call(q,E,1),q.length==0&&(delete a.g[f],a.h--)))):a&&(a=G(a))&&(f=a.g[f.toString()],a=-1,f&&(a=Jt(f,E,C,H)),(E=-1<a?f[a]:null)&&wt(E))}function wt(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[dt])Se(f.i,a);else{var E=a.type,C=a.proxy;f.removeEventListener?f.removeEventListener(E,C,a.capture):f.detachEvent?f.detachEvent(N(E),C):f.addListener&&f.removeListener&&f.removeListener(C),(E=G(f))?(Se(E,a),E.h==0&&(E.src=null,f[U]=null)):Ut(a)}}}function N(a){return a in tn?tn[a]:tn[a]="on"+a}function w(a,f){if(a.da)a=!0;else{f=new lt(f,this);var E=a.listener,C=a.ha||a.src;a.fa&&wt(a),a=E.call(C,f)}return a}function G(a){return a=a[U],a instanceof we?a:null}var K="__closure_events_fn_"+(1e9*Math.random()>>>0);function rt(a){return typeof a=="function"?a:(a[K]||(a[K]=function(f){return a.handleEvent(f)}),a[K])}function $(){Ht.call(this),this.i=new we(this),this.M=this,this.F=null}x($,Ht),$.prototype[dt]=!0,$.prototype.removeEventListener=function(a,f,E,C){ye(this,a,f,E,C)};function _t(a,f){var E,C=a.F;if(C)for(E=[];C;C=C.F)E.push(C);if(a=a.M,C=f.type||f,typeof f=="string")f=new Wt(f,a);else if(f instanceof Wt)f.target=f.target||a;else{var H=f;f=new Wt(C,a),v(f,H)}if(H=!0,E)for(var q=E.length-1;0<=q;q--){var ct=f.g=E[q];H=ft(ct,C,!0,f)&&H}if(ct=f.g=a,H=ft(ct,C,!0,f)&&H,H=ft(ct,C,!1,f)&&H,E)for(q=0;q<E.length;q++)ct=f.g=E[q],H=ft(ct,C,!1,f)&&H}$.prototype.N=function(){if($.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var E=a.g[f],C=0;C<E.length;C++)Ut(E[C]);delete a.g[f],a.h--}}this.F=null},$.prototype.K=function(a,f,E,C){return this.i.add(String(a),f,!1,E,C)},$.prototype.L=function(a,f,E,C){return this.i.add(String(a),f,!0,E,C)};function ft(a,f,E,C){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var H=!0,q=0;q<f.length;++q){var ct=f[q];if(ct&&!ct.da&&ct.capture==E){var Ae=ct.listener,Ke=ct.ha||ct.src;ct.fa&&Se(a.i,ct),H=Ae.call(Ke,C)!==!1&&H}}return H&&!C.defaultPrevented}function Dt(a,f,E){if(typeof a=="function")E&&(a=m(a,E));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function Ft(a){a.g=Dt(()=>{a.g=null,a.i&&(a.i=!1,Ft(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class at extends Ht{constructor(f,E){super(),this.m=f,this.l=E,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Ft(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Et(a){Ht.call(this),this.h=a,this.g={}}x(Et,Ht);var Ot=[];function kt(a){F(a.g,function(f,E){this.g.hasOwnProperty(E)&&wt(f)},a),a.g={}}Et.prototype.N=function(){Et.aa.N.call(this),kt(this)},Et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var St=l.JSON.stringify,ie=l.JSON.parse,jt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ge(){}ge.prototype.h=null;function O(a){return a.h||(a.h=a.i())}function gt(){}var j={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function et(){Wt.call(this,"d")}x(et,Wt);function vt(){Wt.call(this,"c")}x(vt,Wt);var ht={},Xt=null;function Me(){return Xt=Xt||new $}ht.La="serverreachability";function Ve(a){Wt.call(this,ht.La,a)}x(Ve,Wt);function oe(a){const f=Me();_t(f,new Ve(f))}ht.STAT_EVENT="statevent";function pn(a,f){Wt.call(this,ht.STAT_EVENT,a),this.stat=f}x(pn,Wt);function be(a){const f=Me();_t(f,new pn(f,a))}ht.Ma="timingevent";function Ts(a,f){Wt.call(this,ht.Ma,a),this.size=f}x(Ts,Wt);function yi(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function En(){this.g=!0}En.prototype.xa=function(){this.g=!1};function Ss(a,f,E,C,H,q){a.info(function(){if(a.g)if(q)for(var ct="",Ae=q.split("&"),Ke=0;Ke<Ae.length;Ke++){var pe=Ae[Ke].split("=");if(1<pe.length){var en=pe[0];pe=pe[1];var nn=en.split("_");ct=2<=nn.length&&nn[1]=="type"?ct+(en+"="+pe+"&"):ct+(en+"=redacted&")}}else ct=null;else ct=q;return"XMLHTTP REQ ("+C+") [attempt "+H+"]: "+f+`
`+E+`
`+ct})}function To(a,f,E,C,H,q,ct){a.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+H+"]: "+f+`
`+E+`
`+q+" "+ct})}function ti(a,f,E,C){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+So(a,E)+(C?" "+C:"")})}function Sr(a,f){a.info(function(){return"TIMEOUT: "+f})}En.prototype.info=function(){};function So(a,f){if(!a.g)return f;if(!f)return null;try{var E=JSON.parse(f);if(E){for(a=0;a<E.length;a++)if(Array.isArray(E[a])){var C=E[a];if(!(2>C.length)){var H=C[1];if(Array.isArray(H)&&!(1>H.length)){var q=H[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ct=1;ct<H.length;ct++)H[ct]=""}}}}return St(E)}catch{return f}}var ei={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ms={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Mr;function Ar(){}x(Ar,ge),Ar.prototype.g=function(){return new XMLHttpRequest},Ar.prototype.i=function(){return{}},Mr=new Ar;function kn(a,f,E,C){this.j=a,this.i=f,this.l=E,this.R=C||1,this.U=new Et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mo}function Mo(){this.i=null,this.g="",this.h=!1}var Ao={},As={};function ws(a,f,E){a.L=1,a.v=ke(cn(f)),a.m=E,a.P=!0,R(a,null)}function R(a,f){a.F=Date.now(),W(a),a.A=cn(a.v);var E=a.A,C=a.R;Array.isArray(C)||(C=[String(C)]),pu(E.i,"t",C),a.C=0,E=a.j.J,a.h=new Mo,a.g=Du(a.j,E?f:null,!a.m),0<a.O&&(a.M=new at(m(a.Y,a,a.g),a.O)),f=a.U,E=a.g,C=a.ca;var H="readystatechange";Array.isArray(H)||(H&&(Ot[0]=H.toString()),H=Ot);for(var q=0;q<H.length;q++){var ct=ee(E,H[q],C||f.handleEvent,!1,f.h||f);if(!ct)break;f.g[ct.key]=ct}f=a.H?T(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),oe(),Ss(a.i,a.u,a.A,a.l,a.R,a.m)}kn.prototype.ca=function(a){a=a.target;const f=this.M;f&&ii(a)==3?f.j():this.Y(a)},kn.prototype.Y=function(a){try{if(a==this.g)t:{const nn=ii(this.g);var f=this.g.Ba();const Rr=this.g.Z();if(!(3>nn)&&(nn!=3||this.g&&(this.h.h||this.g.oa()||xu(this.g)))){this.J||nn!=4||f==7||(f==8||0>=Rr?oe(3):oe(2)),ot(this);var E=this.g.Z();this.X=E;e:if(B(this)){var C=xu(this.g);a="";var H=C.length,q=ii(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yt(this),ut(this);var ct="";break e}this.h.i=new l.TextDecoder}for(f=0;f<H;f++)this.h.h=!0,a+=this.h.i.decode(C[f],{stream:!(q&&f==H-1)});C.length=0,this.h.g+=a,this.C=0,ct=this.h.g}else ct=this.g.oa();if(this.o=E==200,To(this.i,this.u,this.A,this.l,this.R,nn,E),this.o){if(this.T&&!this.K){e:{if(this.g){var Ae,Ke=this.g;if((Ae=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(Ae)){var pe=Ae;break e}}pe=null}if(E=pe)ti(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mt(this,E);else{this.o=!1,this.s=3,be(12),yt(this),ut(this);break t}}if(this.P){E=!0;let Pn;for(;!this.J&&this.C<ct.length;)if(Pn=X(this,ct),Pn==As){nn==4&&(this.s=4,be(14),E=!1),ti(this.i,this.l,null,"[Incomplete Response]");break}else if(Pn==Ao){this.s=4,be(15),ti(this.i,this.l,ct,"[Invalid Chunk]"),E=!1;break}else ti(this.i,this.l,Pn,null),Mt(this,Pn);if(B(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nn!=4||ct.length!=0||this.h.h||(this.s=1,be(16),E=!1),this.o=this.o&&E,!E)ti(this.i,this.l,ct,"[Invalid Chunked Response]"),yt(this),ut(this);else if(0<ct.length&&!this.W){this.W=!0;var en=this.j;en.g==this&&en.ba&&!en.M&&(en.j.info("Great, no buffering proxy detected. Bytes received: "+ct.length),dl(en),en.M=!0,be(11))}}else ti(this.i,this.l,ct,null),Mt(this,ct);nn==4&&yt(this),this.o&&!this.J&&(nn==4?Ru(this.j,this):(this.o=!1,W(this)))}else Hg(this.g),E==400&&0<ct.indexOf("Unknown SID")?(this.s=3,be(12)):(this.s=0,be(13)),yt(this),ut(this)}}}catch{}finally{}};function B(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function X(a,f){var E=a.C,C=f.indexOf(`
`,E);return C==-1?As:(E=Number(f.substring(E,C)),isNaN(E)?Ao:(C+=1,C+E>f.length?As:(f=f.slice(C,C+E),a.C=C+E,f)))}kn.prototype.cancel=function(){this.J=!0,yt(this)};function W(a){a.S=Date.now()+a.I,k(a,a.I)}function k(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=yi(m(a.ba,a),f)}function ot(a){a.B&&(l.clearTimeout(a.B),a.B=null)}kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Sr(this.i,this.A),this.L!=2&&(oe(),be(17)),yt(this),this.s=2,ut(this)):k(this,this.S-a)};function ut(a){a.j.G==0||a.J||Ru(a.j,a)}function yt(a){ot(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,kt(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function Mt(a,f){try{var E=a.j;if(E.G!=0&&(E.g==a||ce(E.h,a))){if(!a.K&&ce(E.h,a)&&E.G==3){try{var C=E.Da.g.parse(f)}catch{C=null}if(Array.isArray(C)&&C.length==3){var H=C;if(H[0]==0){t:if(!E.u){if(E.g)if(E.g.F+3e3<a.F)Po(E),Co(E);else break t;ul(E),be(18)}}else E.za=H[1],0<E.za-E.T&&37500>H[2]&&E.F&&E.v==0&&!E.C&&(E.C=yi(m(E.Za,E),6e3));if(1>=re(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Yi(E,11)}else if((a.K||E.g==a)&&Po(E),!I(f))for(H=E.Da.g.parse(f),f=0;f<H.length;f++){let pe=H[f];if(E.T=pe[0],pe=pe[1],E.G==2)if(pe[0]=="c"){E.K=pe[1],E.ia=pe[2];const en=pe[3];en!=null&&(E.la=en,E.j.info("VER="+E.la));const nn=pe[4];nn!=null&&(E.Aa=nn,E.j.info("SVER="+E.Aa));const Rr=pe[5];Rr!=null&&typeof Rr=="number"&&0<Rr&&(C=1.5*Rr,E.L=C,E.j.info("backChannelRequestTimeoutMs_="+C)),C=E;const Pn=a.g;if(Pn){const Lo=Pn.g?Pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Lo){var q=C.h;q.g||Lo.indexOf("spdy")==-1&&Lo.indexOf("quic")==-1&&Lo.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Ie(q,q.h),q.h=null))}if(C.D){const fl=Pn.g?Pn.g.getResponseHeader("X-HTTP-Session-Id"):null;fl&&(C.ya=fl,Yt(C.I,C.D,fl))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-a.F,E.j.info("Handshake RTT: "+E.R+"ms")),C=E;var ct=a;if(C.qa=Pu(C,C.J?C.ia:null,C.W),ct.K){Re(C.h,ct);var Ae=ct,Ke=C.L;Ke&&(Ae.I=Ke),Ae.B&&(ot(Ae),W(Ae)),C.g=ct}else wu(C);0<E.i.length&&Io(E)}else pe[0]!="stop"&&pe[0]!="close"||Yi(E,7);else E.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?Yi(E,7):hl(E):pe[0]!="noop"&&E.l&&E.l.ta(pe),E.v=0)}}oe(4)}catch{}}var zt=class{constructor(a,f){this.g=a,this.map=f}};function Vt(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ct(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function re(a){return a.h?1:a.g?a.g.size:0}function ce(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Ie(a,f){a.g?a.g.add(f):a.h=f}function Re(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Vt.prototype.cancel=function(){if(this.i=ae(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ae(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const E of a.g.values())f=f.concat(E.D);return f}return M(a.i)}function Pt(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var f=[],E=a.length,C=0;C<E;C++)f.push(a[C]);return f}f=[],E=0;for(C in a)f[E++]=a[C];return f}function Be(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var f=[];a=a.length;for(var E=0;E<a;E++)f.push(E);return f}f=[],E=0;for(const C in a)f[E++]=C;return f}}}function fe(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var E=Be(a),C=Pt(a),H=C.length,q=0;q<H;q++)f.call(void 0,C[q],E&&E[q],a)}var mn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ei(a,f){if(a){a=a.split("&");for(var E=0;E<a.length;E++){var C=a[E].indexOf("="),H=null;if(0<=C){var q=a[E].substring(0,C);H=a[E].substring(C+1)}else q=a[E];f(q,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function Ne(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ne){this.h=a.h,ve(this,a.j),this.o=a.o,this.g=a.g,Ye(this,a.s),this.l=a.l;var f=a.i,E=new bs;E.i=f.i,f.g&&(E.g=new Map(f.g),E.h=f.h),hn(this,E),this.m=a.m}else a&&(f=String(a).match(mn))?(this.h=!1,ve(this,f[1]||"",!0),this.o=ni(f[2]||""),this.g=ni(f[3]||"",!0),Ye(this,f[4]),this.l=ni(f[5]||"",!0),hn(this,f[6]||"",!0),this.m=ni(f[7]||"")):(this.h=!1,this.i=new bs(null,this.h))}Ne.prototype.toString=function(){var a=[],f=this.j;f&&a.push(xn(f,uu,!0),":");var E=this.g;return(E||f=="file")&&(a.push("//"),(f=this.o)&&a.push(xn(f,uu,!0),"@"),a.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&a.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&a.push("/"),a.push(xn(E,E.charAt(0)=="/"?Dg:Pg,!0))),(E=this.i.toString())&&a.push("?",E),(E=this.m)&&a.push("#",xn(E,Ng)),a.join("")};function cn(a){return new Ne(a)}function ve(a,f,E){a.j=E?ni(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Ye(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function hn(a,f,E){f instanceof bs?(a.i=f,Ug(a.i,a.h)):(E||(f=xn(f,Lg)),a.i=new bs(f,a.h))}function Yt(a,f,E){a.i.set(f,E)}function ke(a){return Yt(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ni(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function xn(a,f,E){return typeof a=="string"?(a=encodeURI(a).replace(f,Ig),E&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Ig(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var uu=/[#\/\?@]/g,Pg=/[#\?:]/g,Dg=/[#\?]/g,Lg=/[#\?@]/g,Ng=/#/g;function bs(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function xi(a){a.g||(a.g=new Map,a.h=0,a.i&&Ei(a.i,function(f,E){a.add(decodeURIComponent(f.replace(/\+/g," ")),E)}))}i=bs.prototype,i.add=function(a,f){xi(this),this.i=null,a=wr(this,a);var E=this.g.get(a);return E||this.g.set(a,E=[]),E.push(f),this.h+=1,this};function du(a,f){xi(a),f=wr(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function fu(a,f){return xi(a),f=wr(a,f),a.g.has(f)}i.forEach=function(a,f){xi(this),this.g.forEach(function(E,C){E.forEach(function(H){a.call(f,H,C,this)},this)},this)},i.na=function(){xi(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),E=[];for(let C=0;C<f.length;C++){const H=a[C];for(let q=0;q<H.length;q++)E.push(f[C])}return E},i.V=function(a){xi(this);let f=[];if(typeof a=="string")fu(this,a)&&(f=f.concat(this.g.get(wr(this,a))));else{a=Array.from(this.g.values());for(let E=0;E<a.length;E++)f=f.concat(a[E])}return f},i.set=function(a,f){return xi(this),this.i=null,a=wr(this,a),fu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},i.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function pu(a,f,E){du(a,f),0<E.length&&(a.i=null,a.g.set(wr(a,f),M(E)),a.h+=E.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var E=0;E<f.length;E++){var C=f[E];const q=encodeURIComponent(String(C)),ct=this.V(C);for(C=0;C<ct.length;C++){var H=q;ct[C]!==""&&(H+="="+encodeURIComponent(String(ct[C]))),a.push(H)}}return this.i=a.join("&")};function wr(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Ug(a,f){f&&!a.j&&(xi(a),a.i=null,a.g.forEach(function(E,C){var H=C.toLowerCase();C!=H&&(du(this,C),pu(this,H,E))},a)),a.j=f}function Fg(a,f){const E=new En;if(l.Image){const C=new Image;C.onload=_(Ti,E,"TestLoadImage: loaded",!0,f,C),C.onerror=_(Ti,E,"TestLoadImage: error",!1,f,C),C.onabort=_(Ti,E,"TestLoadImage: abort",!1,f,C),C.ontimeout=_(Ti,E,"TestLoadImage: timeout",!1,f,C),l.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=a}else f(!1)}function Og(a,f){const E=new En,C=new AbortController,H=setTimeout(()=>{C.abort(),Ti(E,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:C.signal}).then(q=>{clearTimeout(H),q.ok?Ti(E,"TestPingServer: ok",!0,f):Ti(E,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(H),Ti(E,"TestPingServer: error",!1,f)})}function Ti(a,f,E,C,H){try{H&&(H.onload=null,H.onerror=null,H.onabort=null,H.ontimeout=null),C(E)}catch{}}function Vg(){this.g=new jt}function Bg(a,f,E){const C=E||"";try{fe(a,function(H,q){let ct=H;h(H)&&(ct=St(H)),f.push(C+q+"="+encodeURIComponent(ct))})}catch(H){throw f.push(C+"type="+encodeURIComponent("_badmap")),H}}function wo(a){this.l=a.Ub||null,this.j=a.eb||!1}x(wo,ge),wo.prototype.g=function(){return new bo(this.l,this.j)},wo.prototype.i=function(a){return function(){return a}}({});function bo(a,f){$.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(bo,$),i=bo.prototype,i.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Cs(this)},i.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rs(this)),this.readyState=0},i.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function mu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}i.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Rs(this):Cs(this),this.readyState==3&&mu(this)}},i.Ra=function(a){this.g&&(this.response=this.responseText=a,Rs(this))},i.Qa=function(a){this.g&&(this.response=a,Rs(this))},i.ga=function(){this.g&&Rs(this)};function Rs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Cs(a)}i.setRequestHeader=function(a,f){this.u.append(a,f)},i.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var E=f.next();!E.done;)E=E.value,a.push(E[0]+": "+E[1]),E=f.next();return a.join(`\r
`)};function Cs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gu(a){let f="";return F(a,function(E,C){f+=C,f+=":",f+=E,f+=`\r
`}),f}function cl(a,f,E){t:{for(C in E){var C=!1;break t}C=!0}C||(E=gu(E),typeof a=="string"?E!=null&&encodeURIComponent(String(E)):Yt(a,f,E))}function Le(a){$.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Le,$);var kg=/^https?$/i,zg=["POST","PUT"];i=Le.prototype,i.Ha=function(a){this.J=a},i.ea=function(a,f,E,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Mr.g(),this.v=this.o?O(this.o):O(Mr),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(q){_u(this,q);return}if(a=E||"",E=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var H in C)E.set(H,C[H]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const q of C.keys())E.set(q,C.get(q));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(E.keys()).find(q=>q.toLowerCase()=="content-type"),H=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(zg,f,void 0))||C||H||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ct]of E)this.g.setRequestHeader(q,ct);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Eu(this),this.u=!0,this.g.send(a),this.u=!1}catch(q){_u(this,q)}};function _u(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,vu(a),Ro(a)}function vu(a){a.A||(a.A=!0,_t(a,"complete"),_t(a,"error"))}i.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,_t(this,"complete"),_t(this,"abort"),Ro(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ro(this,!0)),Le.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?yu(this):this.bb())},i.bb=function(){yu(this)};function yu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ii(a)!=4||a.Z()!=2)){if(a.u&&ii(a)==4)Dt(a.Ea,0,a);else if(_t(a,"readystatechange"),ii(a)==4){a.h=!1;try{const ct=a.Z();t:switch(ct){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break t;default:f=!1}var E;if(!(E=f)){var C;if(C=ct===0){var H=String(a.D).match(mn)[1]||null;!H&&l.self&&l.self.location&&(H=l.self.location.protocol.slice(0,-1)),C=!kg.test(H?H.toLowerCase():"")}E=C}if(E)_t(a,"complete"),_t(a,"success");else{a.m=6;try{var q=2<ii(a)?a.g.statusText:""}catch{q=""}a.l=q+" ["+a.Z()+"]",vu(a)}}finally{Ro(a)}}}}function Ro(a,f){if(a.g){Eu(a);const E=a.g,C=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||_t(a,"ready");try{E.onreadystatechange=C}catch{}}}function Eu(a){a.I&&(l.clearTimeout(a.I),a.I=null)}i.isActive=function(){return!!this.g};function ii(a){return a.g?a.g.readyState:0}i.Z=function(){try{return 2<ii(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),ie(f)}};function xu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Hg(a){const f={};a=(a.g&&2<=ii(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<a.length;C++){if(I(a[C]))continue;var E=A(a[C]);const H=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const q=f[H]||[];f[H]=q,q.push(E)}S(f,function(C){return C.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Is(a,f,E){return E&&E.internalChannelParams&&E.internalChannelParams[a]||f}function Tu(a){this.Aa=0,this.i=[],this.j=new En,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Is("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Is("baseRetryDelayMs",5e3,a),this.cb=Is("retryDelaySeedMs",1e4,a),this.Wa=Is("forwardChannelMaxRetries",2,a),this.wa=Is("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Vt(a&&a.concurrentRequestLimit),this.Da=new Vg,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Tu.prototype,i.la=8,i.G=1,i.connect=function(a,f,E,C){be(0),this.W=a,this.H=f||{},E&&C!==void 0&&(this.H.OSID=E,this.H.OAID=C),this.F=this.X,this.I=Pu(this,null,this.W),Io(this)};function hl(a){if(Su(a),a.G==3){var f=a.U++,E=cn(a.I);if(Yt(E,"SID",a.K),Yt(E,"RID",f),Yt(E,"TYPE","terminate"),Ps(a,E),f=new kn(a,a.j,f),f.L=2,f.v=ke(cn(E)),E=!1,l.navigator&&l.navigator.sendBeacon)try{E=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!E&&l.Image&&(new Image().src=f.v,E=!0),E||(f.g=Du(f.j,null),f.g.ea(f.v)),f.F=Date.now(),W(f)}Iu(a)}function Co(a){a.g&&(dl(a),a.g.cancel(),a.g=null)}function Su(a){Co(a),a.u&&(l.clearTimeout(a.u),a.u=null),Po(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Io(a){if(!Ct(a.h)&&!a.s){a.s=!0;var f=a.Ga;it||Tt(),Y||(it(),Y=!0),pt.add(f,a),a.B=0}}function Gg(a,f){return re(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=yi(m(a.Ga,a,f),Cu(a,a.B)),a.B++,!0)}i.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const H=new kn(this,this.j,a);let q=this.o;if(this.S&&(q?(q=T(q),v(q,this.S)):q=this.S),this.m!==null||this.O||(H.H=q,q=null),this.P)t:{for(var f=0,E=0;E<this.i.length;E++){e:{var C=this.i[E];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break e}C=void 0}if(C===void 0)break;if(f+=C,4096<f){f=E;break t}if(f===4096||E===this.i.length-1){f=E+1;break t}}f=1e3}else f=1e3;f=Au(this,H,f),E=cn(this.I),Yt(E,"RID",a),Yt(E,"CVER",22),this.D&&Yt(E,"X-HTTP-Session-Id",this.D),Ps(this,E),q&&(this.O?f="headers="+encodeURIComponent(String(gu(q)))+"&"+f:this.m&&cl(E,this.m,q)),Ie(this.h,H),this.Ua&&Yt(E,"TYPE","init"),this.P?(Yt(E,"$req",f),Yt(E,"SID","null"),H.T=!0,ws(H,E,null)):ws(H,E,f),this.G=2}}else this.G==3&&(a?Mu(this,a):this.i.length==0||Ct(this.h)||Mu(this))};function Mu(a,f){var E;f?E=f.l:E=a.U++;const C=cn(a.I);Yt(C,"SID",a.K),Yt(C,"RID",E),Yt(C,"AID",a.T),Ps(a,C),a.m&&a.o&&cl(C,a.m,a.o),E=new kn(a,a.j,E,a.B+1),a.m===null&&(E.H=a.o),f&&(a.i=f.D.concat(a.i)),f=Au(a,E,1e3),E.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ie(a.h,E),ws(E,C,f)}function Ps(a,f){a.H&&F(a.H,function(E,C){Yt(f,C,E)}),a.l&&fe({},function(E,C){Yt(f,C,E)})}function Au(a,f,E){E=Math.min(a.i.length,E);var C=a.l?m(a.l.Na,a.l,a):null;t:{var H=a.i;let q=-1;for(;;){const ct=["count="+E];q==-1?0<E?(q=H[0].g,ct.push("ofs="+q)):q=0:ct.push("ofs="+q);let Ae=!0;for(let Ke=0;Ke<E;Ke++){let pe=H[Ke].g;const en=H[Ke].map;if(pe-=q,0>pe)q=Math.max(0,H[Ke].g-100),Ae=!1;else try{Bg(en,ct,"req"+pe+"_")}catch{C&&C(en)}}if(Ae){C=ct.join("&");break t}}}return a=a.i.splice(0,E),f.D=a,C}function wu(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;it||Tt(),Y||(it(),Y=!0),pt.add(f,a),a.v=0}}function ul(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=yi(m(a.Fa,a),Cu(a,a.v)),a.v++,!0)}i.Fa=function(){if(this.u=null,bu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=yi(m(this.ab,this),a)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,be(10),Co(this),bu(this))};function dl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function bu(a){a.g=new kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=cn(a.qa);Yt(f,"RID","rpc"),Yt(f,"SID",a.K),Yt(f,"AID",a.T),Yt(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&Yt(f,"TO",a.ja),Yt(f,"TYPE","xmlhttp"),Ps(a,f),a.m&&a.o&&cl(f,a.m,a.o),a.L&&(a.g.I=a.L);var E=a.g;a=a.ia,E.L=1,E.v=ke(cn(f)),E.m=null,E.P=!0,R(E,a)}i.Za=function(){this.C!=null&&(this.C=null,Co(this),ul(this),be(19))};function Po(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ru(a,f){var E=null;if(a.g==f){Po(a),dl(a),a.g=null;var C=2}else if(ce(a.h,f))E=f.D,Re(a.h,f),C=1;else return;if(a.G!=0){if(f.o)if(C==1){E=f.m?f.m.length:0,f=Date.now()-f.F;var H=a.B;C=Me(),_t(C,new Ts(C,E)),Io(a)}else wu(a);else if(H=f.s,H==3||H==0&&0<f.X||!(C==1&&Gg(a,f)||C==2&&ul(a)))switch(E&&0<E.length&&(f=a.h,f.i=f.i.concat(E)),H){case 1:Yi(a,5);break;case 4:Yi(a,10);break;case 3:Yi(a,6);break;default:Yi(a,2)}}}function Cu(a,f){let E=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(E*=2),E*f}function Yi(a,f){if(a.j.info("Error code "+f),f==2){var E=m(a.fb,a),C=a.Xa;const H=!C;C=new Ne(C||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ve(C,"https"),ke(C),H?Fg(C.toString(),E):Og(C.toString(),E)}else be(2);a.G=0,a.l&&a.l.sa(f),Iu(a),Su(a)}i.fb=function(a){a?(this.j.info("Successfully pinged google.com"),be(2)):(this.j.info("Failed to ping google.com"),be(1))};function Iu(a){if(a.G=0,a.ka=[],a.l){const f=ae(a.h);(f.length!=0||a.i.length!=0)&&(g(a.ka,f),g(a.ka,a.i),a.h.i.length=0,M(a.i),a.i.length=0),a.l.ra()}}function Pu(a,f,E){var C=E instanceof Ne?cn(E):new Ne(E);if(C.g!="")f&&(C.g=f+"."+C.g),Ye(C,C.s);else{var H=l.location;C=H.protocol,f=f?f+"."+H.hostname:H.hostname,H=+H.port;var q=new Ne(null);C&&ve(q,C),f&&(q.g=f),H&&Ye(q,H),E&&(q.l=E),C=q}return E=a.D,f=a.ya,E&&f&&Yt(C,E,f),Yt(C,"VER",a.la),Ps(a,C),C}function Du(a,f,E){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new Le(new wo({eb:E})):new Le(a.pa),f.Ha(a.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lu(){}i=Lu.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Do(){}Do.prototype.g=function(a,f){return new Tn(a,f)};function Tn(a,f){$.call(this),this.g=new Tu(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!I(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!I(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new br(this)}x(Tn,$),Tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tn.prototype.close=function(){hl(this.g)},Tn.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var E={};E.__data__=a,a=E}else this.u&&(E={},E.__data__=St(a),a=E);f.i.push(new zt(f.Ya++,a)),f.G==3&&Io(f)},Tn.prototype.N=function(){this.g.l=null,delete this.j,hl(this.g),delete this.g,Tn.aa.N.call(this)};function Nu(a){et.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){t:{for(const E in f){a=E;break t}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}x(Nu,et);function Uu(){vt.call(this),this.status=1}x(Uu,vt);function br(a){this.g=a}x(br,Lu),br.prototype.ua=function(){_t(this.g,"a")},br.prototype.ta=function(a){_t(this.g,new Nu(a))},br.prototype.sa=function(a){_t(this.g,new Uu)},br.prototype.ra=function(){_t(this.g,"b")},Do.prototype.createWebChannel=Do.prototype.g,Tn.prototype.send=Tn.prototype.o,Tn.prototype.open=Tn.prototype.m,Tn.prototype.close=Tn.prototype.close,Zp=function(){return new Do},Qp=function(){return Me()},Kp=ht,Qc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ei.NO_ERROR=0,ei.TIMEOUT=8,ei.HTTP_ERROR=6,va=ei,Ms.COMPLETE="complete",Yp=Ms,gt.EventType=j,j.OPEN="a",j.CLOSE="b",j.ERROR="c",j.MESSAGE="d",$.prototype.listen=$.prototype.K,Hs=gt,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,jp=Le}).apply(typeof ia<"u"?ia:typeof self<"u"?self:typeof window<"u"?window:{});const sf="@firebase/firestore",of="4.7.12";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}an.UNAUTHENTICATED=new an(null),an.GOOGLE_CREDENTIALS=new an("google-credentials-uid"),an.FIRST_PARTY=new an("first-party-uid"),an.MOCK_USER=new an("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs="11.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new zp("@firebase/firestore");function Wr(){return gr.logLevel}function xt(i,...t){if(gr.logLevel<=ue.DEBUG){const e=t.map(Lh);gr.debug(`Firestore (${vs}): ${i}`,...e)}}function _i(i,...t){if(gr.logLevel<=ue.ERROR){const e=t.map(Lh);gr.error(`Firestore (${vs}): ${i}`,...e)}}function ls(i,...t){if(gr.logLevel<=ue.WARN){const e=t.map(Lh);gr.warn(`Firestore (${vs}): ${i}`,...e)}}function Lh(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(i,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Jp(i,n,e)}function Jp(i,t,e){let n=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: ${t} (ID: ${i.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw _i(n),new Error(n)}function _e(i,t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,i||Jp(t,r,n)}function $t(i,t){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class It extends _s{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class LM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(an.UNAUTHENTICATED))}shutdown(){}}class NM{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class UM{constructor(t){this.t=t,this.currentUser=an.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){_e(this.o===void 0,42304);let n=this.i;const r=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let s=new Vi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vi,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},l=c=>{xt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(xt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vi)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(xt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(_e(typeof n.accessToken=="string",31837,{l:n}),new tm(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return _e(t===null||typeof t=="string",2055,{h:t}),new an(t)}}class FM{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=an.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class OM{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new FM(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(an.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class af{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VM{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,gM(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){_e(this.o===void 0,3512);const n=s=>{s.error!=null&&xt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,xt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>n(s))};const r=s=>{xt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?r(s):xt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new af(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(_e(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new af(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BM(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<i;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=BM(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%62))}return n}}function Zt(i,t){return i<t?-1:i>t?1:0}function Zc(i,t){let e=0;for(;e<i.length&&e<t.length;){const n=i.codePointAt(e),r=t.codePointAt(e);if(n!==r){if(n<128&&r<128)return Zt(n,r);{const s=em(),o=kM(s.encode(lf(i,e)),s.encode(lf(t,e)));return o!==0?o:Zt(n,r)}}e+=n>65535?2:1}return Zt(i.length,t.length)}function lf(i,t){return i.codePointAt(t)>65535?i.substring(t,t+2):i.substring(t,t+1)}function kM(i,t){for(let e=0;e<i.length&&e<t.length;++e)if(i[e]!==t[e])return Zt(i[e],t[e]);return Zt(i.length,t.length)}function cs(i,t,e){return i.length===t.length&&i.every((n,r)=>e(n,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=-62135596800,hf=1e6;class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(t){return Ge.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*hf);return new Ge(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new It(st.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new It(st.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<cf)throw new It(st.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new It(st.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hf}_compareTo(t){return this.seconds===t.seconds?Zt(this.nanoseconds,t.nanoseconds):Zt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-cf;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{static fromTimestamp(t){return new Gt(t)}static min(){return new Gt(new Ge(0,0))}static max(){return new Gt(new Ge(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="__name__";class Hn{constructor(t,e,n){e===void 0?e=0:e>t.length&&Bt(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&Bt(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Hn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Hn?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=Hn.compareSegments(t.get(r),e.get(r));if(s!==0)return s}return Zt(t.length,e.length)}static compareSegments(t,e){const n=Hn.isNumericId(t),r=Hn.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?Hn.extractNumericId(t).compare(Hn.extractNumericId(e)):Zc(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Oi.fromString(t.substring(4,t.length-2))}}class Pe extends Hn{construct(t,e,n){return new Pe(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new It(st.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(r=>r.length>0))}return new Pe(e)}static emptyPath(){return new Pe([])}}const zM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends Hn{construct(t,e,n){return new Ze(t,e,n)}static isValidIdentifier(t){return zM.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===uf}static keyField(){return new Ze([uf])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(n.length===0)throw new It(st.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const l=t[r];if(l==="\\"){if(r+1===t.length)throw new It(st.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new It(st.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(n+=l,r++):(s(),r++)}if(s(),o)throw new It(st.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ze(e)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.path=t}static fromPath(t){return new Lt(Pe.fromString(t))}static fromName(t){return new Lt(Pe.fromString(t).popFirst(5))}static empty(){return new Lt(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Pe.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Pe.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Lt(new Pe(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=-1;function HM(i,t){const e=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,r=Gt.fromTimestamp(n===1e9?new Ge(e+1,0):new Ge(e,n));return new Hi(r,Lt.empty(),t)}function GM(i){return new Hi(i.readTime,i.key,oo)}class Hi{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Hi(Gt.min(),Lt.empty(),oo)}static max(){return new Hi(Gt.max(),Lt.empty(),oo)}}function WM(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=Lt.comparator(i.documentKey,t.documentKey),e!==0?e:Zt(i.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(i){if(i.code!==st.FAILED_PRECONDITION||i.message!==XM)throw i;xt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Bt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new J((n,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(n,r)},this.catchCallback=s=>{this.wrapFailure(e,s).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof J?e:J.resolve(e)}catch(e){return J.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):J.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):J.reject(e)}static resolve(t){return new J((e,n)=>{e(t)})}static reject(t){return new J((e,n)=>{n(t)})}static waitFor(t){return new J((e,n)=>{let r=0,s=0,o=!1;t.forEach(l=>{++r,l.next(()=>{++s,o&&s===r&&e()},c=>n(c))}),o=!0,s===r&&e()})}static or(t){let e=J.resolve(!1);for(const n of t)e=e.next(r=>r?J.resolve(r):n());return e}static forEach(t,e){const n=[];return t.forEach((r,s)=>{n.push(e.call(this,r,s))}),this.waitFor(n)}static mapArray(t,e){return new J((n,r)=>{const s=t.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;e(t[h]).next(u=>{o[h]=u,++l,l===s&&n(o)},u=>r(u))}})}static doWhile(t,e){return new J((n,r)=>{const s=()=>{t()===!0?e().next(()=>{s()},r):n()};s()})}}function $M(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Es(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ue(n),this.ce=n=>e.writeSequenceNumber(n))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}ja.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=-1;function Ya(i){return i==null}function Pa(i){return i===0&&1/i==-1/0}function jM(i){return typeof i=="number"&&Number.isInteger(i)&&!Pa(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="";function YM(i){let t="";for(let e=0;e<i.length;e++)t.length>0&&(t=df(t)),t=KM(i.get(e),t);return df(t)}function KM(i,t){let e=t;const n=i.length;for(let r=0;r<n;r++){const s=i.charAt(r);switch(s){case"\0":e+="";break;case im:e+="";break;default:e+=s}}return e}function df(i){return i+im+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function yr(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function rm(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t,e){this.comparator=t,this.root=e||Qe.EMPTY}insert(t,e){return new De(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(t){return new De(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ra(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ra(this.root,t,this.comparator,!1)}getReverseIterator(){return new ra(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ra(this.root,t,this.comparator,!0)}}class ra{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Qe{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=n??Qe.RED,this.left=r??Qe.EMPTY,this.right=s??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Qe(t??this.key,e??this.value,n??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):s===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return Qe.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Bt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Bt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Bt(27949);return t+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Bt(57766)}get value(){throw Bt(16141)}get color(){throw Bt(16727)}get left(){throw Bt(29726)}get right(){throw Bt(36894)}copy(t,e,n,r,s){return this}insert(t,e,n){return new Qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t){this.comparator=t,this.data=new De(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new pf(this.data.getIterator())}getIteratorFrom(t){return new pf(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof We)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=n.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new We(this.comparator);return e.data=t,e}}class pf{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t){this.fields=t,t.sort(Ze.comparator)}static empty(){return new Vn([])}unionWith(t){let e=new We(Ze.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Vn(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return cs(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new sm("Invalid base64 string: "+s):s}}(t);return new Je(e)}static fromUint8Array(t){const e=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new Je(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Zt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const QM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gi(i){if(_e(!!i,39018),typeof i=="string"){let t=0;const e=QM.exec(i);if(_e(!!e,46558,{timestamp:i}),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Ue(i.seconds),nanos:Ue(i.nanos)}}function Ue(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Wi(i){return typeof i=="string"?Je.fromBase64String(i):Je.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="server_timestamp",am="__type__",lm="__previous_value__",cm="__local_write_time__";function Uh(i){var t,e;return((e=(((t=i==null?void 0:i.mapValue)===null||t===void 0?void 0:t.fields)||{})[am])===null||e===void 0?void 0:e.stringValue)===om}function Ka(i){const t=i.mapValue.fields[lm];return Uh(t)?Ka(t):t}function ao(i){const t=Gi(i.mapValue.fields[cm].timestampValue);return new Ge(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(t,e,n,r,s,o,l,c,h,u){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=u}}const Da="(default)";class lo{constructor(t,e){this.projectId=t,this.database=e||Da}static empty(){return new lo("","")}get isDefaultDatabase(){return this.database===Da}isEqual(t){return t instanceof lo&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="__type__",JM="__max__",sa={mapValue:{}},um="__vector__",La="value";function Xi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Uh(i)?4:eA(i)?9007199254740991:tA(i)?10:11:Bt(28295,{value:i})}function Zn(i,t){if(i===t)return!0;const e=Xi(i);if(e!==Xi(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return ao(i).isEqual(ao(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=Gi(r.timestampValue),l=Gi(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(r,s){return Wi(r.bytesValue).isEqual(Wi(s.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(r,s){return Ue(r.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(r.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(i,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ue(r.integerValue)===Ue(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=Ue(r.doubleValue),l=Ue(s.doubleValue);return o===l?Pa(o)===Pa(l):isNaN(o)&&isNaN(l)}return!1}(i,t);case 9:return cs(i.arrayValue.values||[],t.arrayValue.values||[],Zn);case 10:case 11:return function(r,s){const o=r.mapValue.fields||{},l=s.mapValue.fields||{};if(ff(o)!==ff(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Zn(o[c],l[c])))return!1;return!0}(i,t);default:return Bt(52216,{left:i})}}function co(i,t){return(i.values||[]).find(e=>Zn(e,t))!==void 0}function hs(i,t){if(i===t)return 0;const e=Xi(i),n=Xi(t);if(e!==n)return Zt(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return Zt(i.booleanValue,t.booleanValue);case 2:return function(s,o){const l=Ue(s.integerValue||s.doubleValue),c=Ue(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(i,t);case 3:return mf(i.timestampValue,t.timestampValue);case 4:return mf(ao(i),ao(t));case 5:return Zc(i.stringValue,t.stringValue);case 6:return function(s,o){const l=Wi(s),c=Wi(o);return l.compareTo(c)}(i.bytesValue,t.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const u=Zt(l[h],c[h]);if(u!==0)return u}return Zt(l.length,c.length)}(i.referenceValue,t.referenceValue);case 8:return function(s,o){const l=Zt(Ue(s.latitude),Ue(o.latitude));return l!==0?l:Zt(Ue(s.longitude),Ue(o.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return gf(i.arrayValue,t.arrayValue);case 10:return function(s,o){var l,c,h,u;const d=s.fields||{},m=o.fields||{},_=(l=d[La])===null||l===void 0?void 0:l.arrayValue,x=(c=m[La])===null||c===void 0?void 0:c.arrayValue,M=Zt(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((u=x==null?void 0:x.values)===null||u===void 0?void 0:u.length)||0);return M!==0?M:gf(_,x)}(i.mapValue,t.mapValue);case 11:return function(s,o){if(s===sa.mapValue&&o===sa.mapValue)return 0;if(s===sa.mapValue)return 1;if(o===sa.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=o.fields||{},u=Object.keys(h);c.sort(),u.sort();for(let d=0;d<c.length&&d<u.length;++d){const m=Zc(c[d],u[d]);if(m!==0)return m;const _=hs(l[c[d]],h[u[d]]);if(_!==0)return _}return Zt(c.length,u.length)}(i.mapValue,t.mapValue);default:throw Bt(23264,{Pe:e})}}function mf(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return Zt(i,t);const e=Gi(i),n=Gi(t),r=Zt(e.seconds,n.seconds);return r!==0?r:Zt(e.nanos,n.nanos)}function gf(i,t){const e=i.values||[],n=t.values||[];for(let r=0;r<e.length&&r<n.length;++r){const s=hs(e[r],n[r]);if(s)return s}return Zt(e.length,n.length)}function us(i){return Jc(i)}function Jc(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const n=Gi(e);return`time(${n.seconds},${n.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return Wi(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return Lt.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let n="[",r=!0;for(const s of e.values||[])r?r=!1:n+=",",n+=Jc(s);return n+"]"}(i.arrayValue):"mapValue"in i?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",s=!0;for(const o of n)s?s=!1:r+=",",r+=`${o}:${Jc(e.fields[o])}`;return r+"}"}(i.mapValue):Bt(61005,{value:i})}function ya(i){switch(Xi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ka(i);return t?16+ya(t):16;case 5:return 2*i.stringValue.length;case 6:return Wi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((r,s)=>r+ya(s),0)}(i.arrayValue);case 10:case 11:return function(n){let r=0;return yr(n.fields,(s,o)=>{r+=s.length+ya(o)}),r}(i.mapValue);default:throw Bt(13486,{value:i})}}function th(i){return!!i&&"integerValue"in i}function Fh(i){return!!i&&"arrayValue"in i}function _f(i){return!!i&&"nullValue"in i}function vf(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Ea(i){return!!i&&"mapValue"in i}function tA(i){var t,e;return((e=(((t=i==null?void 0:i.mapValue)===null||t===void 0?void 0:t.fields)||{})[hm])===null||e===void 0?void 0:e.stringValue)===um}function qs(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const t={mapValue:{fields:{}}};return yr(i.mapValue.fields,(e,n)=>t.mapValue.fields[e]=qs(n)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=qs(i.arrayValue.values[e]);return t}return Object.assign({},i)}function eA(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===JM}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t){this.value=t}static empty(){return new Cn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ea(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=qs(e)}setAll(t){let e=Ze.emptyPath(),n={},r=[];t.forEach((o,l)=>{if(!e.isImmediateParentOf(l)){const c=this.getFieldsMap(e);this.applyChanges(c,n,r),n={},r=[],e=l.popLast()}o?n[l.lastSegment()]=qs(o):r.push(l.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());Ea(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Zn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Ea(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){yr(e,(r,s)=>t[r]=s);for(const r of n)delete t[r]}clone(){return new Cn(qs(this.value))}}function dm(i){const t=[];return yr(i.fields,(e,n)=>{const r=new Ze([e]);if(Ea(n)){const s=dm(n.mapValue).fields;if(s.length===0)t.push(r);else for(const o of s)t.push(r.child(o))}else t.push(r)}),new Vn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t,e,n,r,s,o,l){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(t){return new ln(t,0,Gt.min(),Gt.min(),Gt.min(),Cn.empty(),0)}static newFoundDocument(t,e,n,r){return new ln(t,1,e,Gt.min(),n,r,0)}static newNoDocument(t,e){return new ln(t,2,e,Gt.min(),Gt.min(),Cn.empty(),0)}static newUnknownDocument(t,e){return new ln(t,3,e,Gt.min(),Gt.min(),Cn.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Gt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Cn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Gt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ln&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ln(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,e){this.position=t,this.inclusive=e}}function yf(i,t,e){let n=0;for(let r=0;r<i.position.length;r++){const s=t[r],o=i.position[r];if(s.field.isKeyField()?n=Lt.comparator(Lt.fromName(o.referenceValue),e.key):n=hs(o,e.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ef(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!Zn(i.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t,e="asc"){this.field=t,this.dir=e}}function nA(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{}class He extends fm{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new rA(t,e,n):e==="array-contains"?new aA(t,n):e==="in"?new lA(t,n):e==="not-in"?new cA(t,n):e==="array-contains-any"?new hA(t,n):new He(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new sA(t,n):new oA(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(hs(e,this.value)):e!==null&&Xi(this.value)===Xi(e)&&this.matchesComparison(hs(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Bt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jn extends fm{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Jn(t,e)}matches(t){return pm(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function pm(i){return i.op==="and"}function mm(i){return iA(i)&&pm(i)}function iA(i){for(const t of i.filters)if(t instanceof Jn)return!1;return!0}function eh(i){if(i instanceof He)return i.field.canonicalString()+i.op.toString()+us(i.value);if(mm(i))return i.filters.map(t=>eh(t)).join(",");{const t=i.filters.map(e=>eh(e)).join(",");return`${i.op}(${t})`}}function gm(i,t){return i instanceof He?function(n,r){return r instanceof He&&n.op===r.op&&n.field.isEqual(r.field)&&Zn(n.value,r.value)}(i,t):i instanceof Jn?function(n,r){return r instanceof Jn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,o,l)=>s&&gm(o,r.filters[l]),!0):!1}(i,t):void Bt(19439)}function _m(i){return i instanceof He?function(e){return`${e.field.canonicalString()} ${e.op} ${us(e.value)}`}(i):i instanceof Jn?function(e){return e.op.toString()+" {"+e.getFilters().map(_m).join(" ,")+"}"}(i):"Filter"}class rA extends He{constructor(t,e,n){super(t,e,n),this.key=Lt.fromName(n.referenceValue)}matches(t){const e=Lt.comparator(t.key,this.key);return this.matchesComparison(e)}}class sA extends He{constructor(t,e){super(t,"in",e),this.keys=vm("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class oA extends He{constructor(t,e){super(t,"not-in",e),this.keys=vm("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function vm(i,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>Lt.fromName(n.referenceValue))}class aA extends He{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Fh(e)&&co(e.arrayValue,this.value)}}class lA extends He{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&co(this.value.arrayValue,e)}}class cA extends He{constructor(t,e){super(t,"not-in",e)}matches(t){if(co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!co(this.value.arrayValue,e)}}class hA extends He{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Fh(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>co(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(t,e=null,n=[],r=[],s=null,o=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=o,this.endAt=l,this.Ie=null}}function xf(i,t=null,e=[],n=[],r=null,s=null,o=null){return new uA(i,t,e,n,r,s,o)}function Oh(i){const t=$t(i);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>eh(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Ya(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>us(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>us(n)).join(",")),t.Ie=e}return t.Ie}function Vh(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!nA(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!gm(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!Ef(i.startAt,t.startAt)&&Ef(i.endAt,t.endAt)}function nh(i){return Lt.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t,e=null,n=[],r=[],s=null,o="F",l=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function dA(i,t,e,n,r,s,o,l){return new Qa(i,t,e,n,r,s,o,l)}function ym(i){return new Qa(i)}function Tf(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function fA(i){return i.collectionGroup!==null}function $s(i){const t=$t(i);if(t.Ee===null){t.Ee=[];const e=new Set;for(const s of t.explicitOrderBy)t.Ee.push(s),e.add(s.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new We(Ze.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.Ee.push(new Ua(s,n))}),e.has(Ze.keyField().canonicalString())||t.Ee.push(new Ua(Ze.keyField(),n))}return t.Ee}function jn(i){const t=$t(i);return t.de||(t.de=pA(t,$s(i))),t.de}function pA(i,t){if(i.limitType==="F")return xf(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new Ua(r.field,s)});const e=i.endAt?new Na(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new Na(i.startAt.position,i.startAt.inclusive):null;return xf(i.path,i.collectionGroup,t,i.filters,i.limit,e,n)}}function ih(i,t,e){return new Qa(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function Za(i,t){return Vh(jn(i),jn(t))&&i.limitType===t.limitType}function Em(i){return`${Oh(jn(i))}|lt:${i.limitType}`}function Xr(i){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>_m(r)).join(", ")}]`),Ya(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>us(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>us(r)).join(",")),`Target(${n})`}(jn(i))}; limitType=${i.limitType})`}function Ja(i,t){return t.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Lt.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(i,t)&&function(n,r){for(const s of $s(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(i,t)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(i,t)&&function(n,r){return!(n.startAt&&!function(o,l,c){const h=yf(o,l,c);return o.inclusive?h<=0:h<0}(n.startAt,$s(n),r)||n.endAt&&!function(o,l,c){const h=yf(o,l,c);return o.inclusive?h>=0:h>0}(n.endAt,$s(n),r))}(i,t)}function mA(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function xm(i){return(t,e)=>{let n=!1;for(const r of $s(i)){const s=gA(r,t,e);if(s!==0)return s;n=n||r.field.isKeyField()}return 0}}function gA(i,t,e){const n=i.field.isKeyField()?Lt.comparator(t.key,e.key):function(s,o,l){const c=o.data.field(s),h=l.data.field(s);return c!==null&&h!==null?hs(c,h):Bt(42886)}(i.field,t,e);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return Bt(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[r,s]of n)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return n.length===1?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){yr(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return rm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=new De(Lt.comparator);function vi(){return _A}const Tm=new De(Lt.comparator);function Gs(...i){let t=Tm;for(const e of i)t=t.insert(e.key,e);return t}function Sm(i){let t=Tm;return i.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function dr(){return js()}function Mm(){return js()}function js(){return new Er(i=>i.toString(),(i,t)=>i.isEqual(t))}const vA=new De(Lt.comparator),yA=new We(Lt.comparator);function se(...i){let t=yA;for(const e of i)t=t.add(e);return t}const EA=new We(Zt);function xA(){return EA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pa(t)?"-0":t}}function Am(i){return{integerValue:""+i}}function TA(i,t){return jM(t)?Am(t):Bh(i,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this._=void 0}}function SA(i,t,e){return i instanceof Fa?function(r,s){const o={fields:{[am]:{stringValue:om},[cm]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Uh(s)&&(s=Ka(s)),s&&(o.fields[lm]=s),{mapValue:o}}(e,t):i instanceof ds?bm(i,t):i instanceof ho?Rm(i,t):function(r,s){const o=wm(r,s),l=Sf(o)+Sf(r.Re);return th(o)&&th(r.Re)?Am(l):Bh(r.serializer,l)}(i,t)}function MA(i,t,e){return i instanceof ds?bm(i,t):i instanceof ho?Rm(i,t):e}function wm(i,t){return i instanceof Oa?function(n){return th(n)||function(s){return!!s&&"doubleValue"in s}(n)}(t)?t:{integerValue:0}:null}class Fa extends tl{}class ds extends tl{constructor(t){super(),this.elements=t}}function bm(i,t){const e=Cm(t);for(const n of i.elements)e.some(r=>Zn(r,n))||e.push(n);return{arrayValue:{values:e}}}class ho extends tl{constructor(t){super(),this.elements=t}}function Rm(i,t){let e=Cm(t);for(const n of i.elements)e=e.filter(r=>!Zn(r,n));return{arrayValue:{values:e}}}class Oa extends tl{constructor(t,e){super(),this.serializer=t,this.Re=e}}function Sf(i){return Ue(i.integerValue||i.doubleValue)}function Cm(i){return Fh(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(t,e){this.field=t,this.transform=e}}function wA(i,t){return i.field.isEqual(t.field)&&function(n,r){return n instanceof ds&&r instanceof ds||n instanceof ho&&r instanceof ho?cs(n.elements,r.elements,Zn):n instanceof Oa&&r instanceof Oa?Zn(n.Re,r.Re):n instanceof Fa&&r instanceof Fa}(i.transform,t.transform)}class bA{constructor(t,e){this.version=t,this.transformResults=e}}class mi{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new mi}static exists(t){return new mi(void 0,t)}static updateTime(t){return new mi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xa(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class el{}function Im(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new Dm(i.key,mi.none()):new vo(i.key,i.data,mi.none());{const e=i.data,n=Cn.empty();let r=new We(Ze.comparator);for(let s of t.fields)if(!r.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?n.delete(s):n.set(s,o),r=r.add(s)}return new xr(i.key,n,new Vn(r.toArray()),mi.none())}}function RA(i,t,e){i instanceof vo?function(r,s,o){const l=r.value.clone(),c=Af(r.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(i,t,e):i instanceof xr?function(r,s,o){if(!xa(r.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Af(r.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Pm(r)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(i,t,e):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Ys(i,t,e,n){return i instanceof vo?function(s,o,l,c){if(!xa(s.precondition,o))return l;const h=s.value.clone(),u=wf(s.fieldTransforms,c,o);return h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(i,t,e,n):i instanceof xr?function(s,o,l,c){if(!xa(s.precondition,o))return l;const h=wf(s.fieldTransforms,c,o),u=o.data;return u.setAll(Pm(s)),u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(i,t,e,n):function(s,o,l){return xa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(i,t,e)}function CA(i,t){let e=null;for(const n of i.fieldTransforms){const r=t.data.field(n.field),s=wm(n.transform,r||null);s!=null&&(e===null&&(e=Cn.empty()),e.set(n.field,s))}return e||null}function Mf(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&cs(n,r,(s,o)=>wA(s,o))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class vo extends el{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class xr extends el{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Pm(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=i.data.field(e);t.set(e,n)}}),t}function Af(i,t,e){const n=new Map;_e(i.length===e.length,32656,{Ve:e.length,me:i.length});for(let r=0;r<e.length;r++){const s=i[r],o=s.transform,l=t.data.field(s.field);n.set(s.field,MA(o,l,e[r]))}return n}function wf(i,t,e){const n=new Map;for(const r of i){const s=r.transform,o=e.data.field(r.field);n.set(r.field,SA(s,o,t))}return n}class Dm extends el{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IA extends el{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&RA(s,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ys(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ys(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Mm();return this.mutations.forEach(r=>{const s=t.get(r.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=e.has(r.key)?null:l;const c=Im(o,l);c!==null&&n.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Gt.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),se())}isEqual(t){return this.batchId===t.batchId&&cs(this.mutations,t.mutations,(e,n)=>Mf(e,n))&&cs(this.baseMutations,t.baseMutations,(e,n)=>Mf(e,n))}}class kh{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){_e(t.mutations.length===n.length,58842,{fe:t.mutations.length,ge:n.length});let r=function(){return vA}();const s=t.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,n[o].version);return new kh(t,e,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,he;function NA(i){switch(i){case st.OK:return Bt(64938);case st.CANCELLED:case st.UNKNOWN:case st.DEADLINE_EXCEEDED:case st.RESOURCE_EXHAUSTED:case st.INTERNAL:case st.UNAVAILABLE:case st.UNAUTHENTICATED:return!1;case st.INVALID_ARGUMENT:case st.NOT_FOUND:case st.ALREADY_EXISTS:case st.PERMISSION_DENIED:case st.FAILED_PRECONDITION:case st.ABORTED:case st.OUT_OF_RANGE:case st.UNIMPLEMENTED:case st.DATA_LOSS:return!0;default:return Bt(15467,{code:i})}}function Lm(i){if(i===void 0)return _i("GRPC error has no .code"),st.UNKNOWN;switch(i){case Oe.OK:return st.OK;case Oe.CANCELLED:return st.CANCELLED;case Oe.UNKNOWN:return st.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return st.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return st.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return st.INTERNAL;case Oe.UNAVAILABLE:return st.UNAVAILABLE;case Oe.UNAUTHENTICATED:return st.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return st.INVALID_ARGUMENT;case Oe.NOT_FOUND:return st.NOT_FOUND;case Oe.ALREADY_EXISTS:return st.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return st.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return st.FAILED_PRECONDITION;case Oe.ABORTED:return st.ABORTED;case Oe.OUT_OF_RANGE:return st.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return st.UNIMPLEMENTED;case Oe.DATA_LOSS:return st.DATA_LOSS;default:return Bt(39323,{code:i})}}(he=Oe||(Oe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=new Oi([4294967295,4294967295],0);function bf(i){const t=em().encode(i),e=new $p;return e.update(t),new Uint8Array(e.digest())}function Rf(i){const t=new DataView(i.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Oi([e,n],0),new Oi([r,s],0)]}class zh{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Ws(`Invalid padding: ${e}`);if(n<0)throw new Ws(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Ws(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Ws(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=Oi.fromNumber(this.pe)}we(t,e,n){let r=t.add(e.multiply(Oi.fromNumber(n)));return r.compare(UA)===1&&(r=new Oi([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=bf(t),[n,r]=Rf(e);for(let s=0;s<this.hashCount;s++){const o=this.we(n,r,s);if(!this.be(o))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new zh(s,r,e);return n.forEach(l=>o.insert(l)),o}insert(t){if(this.pe===0)return;const e=bf(t),[n,r]=Rf(e);for(let s=0;s<this.hashCount;s++){const o=this.we(n,r,s);this.Se(o)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,yo.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new nl(Gt.min(),r,new De(Zt),vi(),se())}}class yo{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new yo(n,e,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t,e,n,r){this.De=t,this.removedTargetIds=e,this.key=n,this.ve=r}}class Nm{constructor(t,e){this.targetId=t,this.Ce=e}}class Um{constructor(t,e,n=Je.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Cf{constructor(){this.Fe=0,this.Me=If(),this.xe=Je.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=se(),e=se(),n=se();return this.Me.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Bt(38017,{changeType:s})}}),new yo(this.xe,this.Oe,t,e,n)}Qe(){this.Ne=!1,this.Me=If()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,_e(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class FA{constructor(t){this.ze=t,this.je=new Map,this.He=vi(),this.Je=oa(),this.Ye=oa(),this.Ze=new De(Zt)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const n=this.rt(e);switch(t.state){case 0:this.it(e)&&n.ke(t.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(t.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(e);break;case 3:this.it(e)&&(n.Ge(),n.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),n.ke(t.resumeToken));break;default:Bt(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((n,r)=>{this.it(r)&&e(r)})}ot(t){const e=t.targetId,n=t.Ce.count,r=this._t(e);if(r){const s=r.target;if(nh(s))if(n===0){const o=new Lt(s.path);this.tt(e,o,ln.newNoDocument(o,Gt.min()))}else _e(n===1,20013,{expectedCount:n});else{const o=this.ut(e);if(o!==n){const l=this.ct(t),c=l?this.lt(l,t,o):1;if(c!==0){this.st(e);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,h)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=e;let o,l;try{o=Wi(n).toUint8Array()}catch(c){if(c instanceof sm)return ls("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new zh(o,r,s)}catch(c){return ls(c instanceof Ws?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(t,e,n){return e.Ce.count===n-this.Tt(t,e.targetId)?0:2}Tt(t,e){const n=this.ze.getRemoteKeysForTarget(e);let r=0;return n.forEach(s=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.tt(e,s,null),r++)}),r}It(t){const e=new Map;this.je.forEach((s,o)=>{const l=this._t(o);if(l){if(s.current&&nh(l.target)){const c=new Lt(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,ln.newNoDocument(c,t))}s.Le&&(e.set(o,s.qe()),s.Qe())}});let n=se();this.Ye.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const h=this._t(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(s))}),this.He.forEach((s,o)=>o.setReadTime(t));const r=new nl(t,e,this.Ze,this.He,n);return this.He=vi(),this.Je=oa(),this.Ye=oa(),this.Ze=new De(Zt),r}et(t,e){if(!this.it(t))return;const n=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,n),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,n){if(!this.it(t))return;const r=this.rt(t);this.dt(t,e)?r.$e(e,1):r.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),n&&(this.He=this.He.insert(e,n))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new Cf,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new We(Zt),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new We(Zt),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||xt("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Cf),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function oa(){return new De(Lt.comparator)}function If(){return new De(Lt.comparator)}const OA={asc:"ASCENDING",desc:"DESCENDING"},VA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BA={and:"AND",or:"OR"};class kA{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function rh(i,t){return i.useProto3Json||Ya(t)?t:{value:t}}function Va(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Fm(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function zA(i,t){return Va(i,t.toTimestamp())}function Yn(i){return _e(!!i,49232),Gt.fromTimestamp(function(e){const n=Gi(e);return new Ge(n.seconds,n.nanos)}(i))}function Hh(i,t){return sh(i,t).canonicalString()}function sh(i,t){const e=function(r){return new Pe(["projects",r.projectId,"databases",r.database])}(i).child("documents");return t===void 0?e:e.child(t)}function Om(i){const t=Pe.fromString(i);return _e(Hm(t),10190,{key:t.toString()}),t}function oh(i,t){return Hh(i.databaseId,t.path)}function Ql(i,t){const e=Om(t);if(e.get(1)!==i.databaseId.projectId)throw new It(st.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+i.databaseId.projectId);if(e.get(3)!==i.databaseId.database)throw new It(st.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+i.databaseId.database);return new Lt(Bm(e))}function Vm(i,t){return Hh(i.databaseId,t)}function HA(i){const t=Om(i);return t.length===4?Pe.emptyPath():Bm(t)}function ah(i){return new Pe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Bm(i){return _e(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Pf(i,t,e){return{name:oh(i,t),fields:e.value.mapValue.fields}}function GA(i,t){let e;if("targetChange"in t){t.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Bt(39313,{state:h})}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(h,u){return h.useProto3Json?(_e(u===void 0||typeof u=="string",58123),Je.fromBase64String(u||"")):(_e(u===void 0||u instanceof Buffer||u instanceof Uint8Array,16193),Je.fromUint8Array(u||new Uint8Array))}(i,t.targetChange.resumeToken),o=t.targetChange.cause,l=o&&function(h){const u=h.code===void 0?st.UNKNOWN:Lm(h.code);return new It(u,h.message||"")}(o);e=new Um(n,r,s,l||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const r=Ql(i,n.document.name),s=Yn(n.document.updateTime),o=n.document.createTime?Yn(n.document.createTime):Gt.min(),l=new Cn({mapValue:{fields:n.document.fields}}),c=ln.newFoundDocument(r,s,o,l),h=n.targetIds||[],u=n.removedTargetIds||[];e=new Ta(h,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const r=Ql(i,n.document),s=n.readTime?Yn(n.readTime):Gt.min(),o=ln.newNoDocument(r,s),l=n.removedTargetIds||[];e=new Ta([],l,o.key,o)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const r=Ql(i,n.document),s=n.removedTargetIds||[];e=new Ta([],s,r,null)}else{if(!("filter"in t))return Bt(11601,{Vt:t});{t.filter;const n=t.filter;n.targetId;const{count:r=0,unchangedNames:s}=n,o=new LA(r,s),l=n.targetId;e=new Nm(l,o)}}return e}function WA(i,t){let e;if(t instanceof vo)e={update:Pf(i,t.key,t.value)};else if(t instanceof Dm)e={delete:oh(i,t.key)};else if(t instanceof xr)e={update:Pf(i,t.key,t.data),updateMask:JA(t.fieldMask)};else{if(!(t instanceof IA))return Bt(16599,{ft:t.type});e={verify:oh(i,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(s,o){const l=o.transform;if(l instanceof Fa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ds)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ho)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Oa)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw Bt(20930,{transform:o.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:zA(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Bt(27497)}(i,t.precondition)),e}function XA(i,t){return i&&i.length>0?(_e(t!==void 0,14353),i.map(e=>function(r,s){let o=r.updateTime?Yn(r.updateTime):Yn(s);return o.isEqual(Gt.min())&&(o=Yn(s)),new bA(o,r.transformResults||[])}(e,t))):[]}function qA(i,t){return{documents:[Vm(i,t.path)]}}function $A(i,t){const e={structuredQuery:{}},n=t.path;let r;t.collectionGroup!==null?(r=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Vm(i,r);const s=function(h){if(h.length!==0)return zm(Jn.create(h,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(u=>function(m){return{field:qr(m.field),direction:KA(m.dir)}}(u))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const l=rh(i,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{gt:e,parent:r}}function jA(i){let t=HA(i.parent);const e=i.structuredQuery,n=e.from?e.from.length:0;let r=null;if(n>0){_e(n===1,65062);const u=e.from[0];u.allDescendants?r=u.collectionId:t=t.child(u.collectionId)}let s=[];e.where&&(s=function(d){const m=km(d);return m instanceof Jn&&mm(m)?m.getFilters():[m]}(e.where));let o=[];e.orderBy&&(o=function(d){return d.map(m=>function(x){return new Ua($r(x.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(e.orderBy));let l=null;e.limit&&(l=function(d){let m;return m=typeof d=="object"?d.value:d,Ya(m)?null:m}(e.limit));let c=null;e.startAt&&(c=function(d){const m=!!d.before,_=d.values||[];return new Na(_,m)}(e.startAt));let h=null;return e.endAt&&(h=function(d){const m=!d.before,_=d.values||[];return new Na(_,m)}(e.endAt)),dA(t,r,o,s,l,"F",c,h)}function YA(i,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Bt(28987,{purpose:r})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function km(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=$r(e.unaryFilter.field);return He.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=$r(e.unaryFilter.field);return He.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$r(e.unaryFilter.field);return He.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$r(e.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Bt(61313);default:return Bt(60726)}}(i):i.fieldFilter!==void 0?function(e){return He.create($r(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Bt(58110);default:return Bt(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return Jn.create(e.compositeFilter.filters.map(n=>km(n)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Bt(1026)}}(e.compositeFilter.op))}(i):Bt(30097,{filter:i})}function KA(i){return OA[i]}function QA(i){return VA[i]}function ZA(i){return BA[i]}function qr(i){return{fieldPath:i.canonicalString()}}function $r(i){return Ze.fromServerFormat(i.fieldPath)}function zm(i){return i instanceof He?function(e){if(e.op==="=="){if(vf(e.value))return{unaryFilter:{field:qr(e.field),op:"IS_NAN"}};if(_f(e.value))return{unaryFilter:{field:qr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(vf(e.value))return{unaryFilter:{field:qr(e.field),op:"IS_NOT_NAN"}};if(_f(e.value))return{unaryFilter:{field:qr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qr(e.field),op:QA(e.op),value:e.value}}}(i):i instanceof Jn?function(e){const n=e.getFilters().map(r=>zm(r));return n.length===1?n[0]:{compositeFilter:{op:ZA(e.op),filters:n}}}(i):Bt(54877,{filter:i})}function JA(i){const t=[];return i.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Hm(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,e,n,r,s=Gt.min(),o=Gt.min(),l=Je.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new Di(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(t){this.wt=t}}function ew(i){const t=jA({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?ih(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(){this.yn=new iw}addToCollectionParentIndex(t,e){return this.yn.add(e),J.resolve()}getCollectionParents(t,e){return J.resolve(this.yn.getEntries(e))}addFieldIndex(t,e){return J.resolve()}deleteFieldIndex(t,e){return J.resolve()}deleteAllFieldIndexes(t){return J.resolve()}createTargetIndexes(t,e){return J.resolve()}getDocumentsMatchingTarget(t,e){return J.resolve(null)}getIndexType(t,e){return J.resolve(0)}getFieldIndexes(t,e){return J.resolve([])}getNextCollectionGroupToUpdate(t){return J.resolve(null)}getMinOffset(t,e){return J.resolve(Hi.min())}getMinOffsetFromCollectionGroup(t,e){return J.resolve(Hi.min())}updateCollectionGroup(t,e,n){return J.resolve()}updateIndexEntries(t,e){return J.resolve()}}class iw{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new We(Pe.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new We(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Gm=41943040;class vn{static withCacheSize(t){return new vn(t,vn.DEFAULT_COLLECTION_PERCENTILE,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn.DEFAULT_COLLECTION_PERCENTILE=10,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vn.DEFAULT=new vn(Gm,vn.DEFAULT_COLLECTION_PERCENTILE,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vn.DISABLED=new vn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t){this.nr=t}next(){return this.nr+=2,this.nr}static rr(){return new fs(0)}static ir(){return new fs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="LruGarbageCollector",rw=1048576;function Nf([i,t],[e,n]){const r=Zt(i,e);return r===0?Zt(t,n):r}class sw{constructor(t){this.cr=t,this.buffer=new We(Nf),this.lr=0}hr(){return++this.lr}Pr(t){const e=[t,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Nf(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ow{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(t){xt(Lf,`Garbage collection scheduled in ${t}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Es(e)?xt(Lf,"Ignoring IndexedDB error during garbage collection: ",e):await ys(e)}await this.Ir(3e5)})}}class aw{constructor(t,e){this.Er=t,this.params=e}calculateTargetCount(t,e){return this.Er.dr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return J.resolve(ja.le);const n=new sw(e);return this.Er.forEachTarget(t,r=>n.Pr(r.sequenceNumber)).next(()=>this.Er.Ar(t,r=>n.Pr(r))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Er.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Er.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(xt("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(Df)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(xt("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Df):this.Rr(t,e))}getCacheSize(t){return this.Er.getCacheSize(t)}Rr(t,e){let n,r,s,o,l,c,h;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(xt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(t,r))).next(d=>(n=d,l=Date.now(),this.removeTargets(t,n,e))).next(d=>(s=d,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(d=>(h=Date.now(),Wr()<=ue.DEBUG&&xt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${d} documents in `+(h-c)+`ms
Total Duration: ${h-u}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:d})))}}function lw(i,t){return new aw(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(){this.changes=new Er(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ln.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?J.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(n!==null&&Ys(n.mutation,r,Vn.empty(),Ge.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,se()).next(()=>n))}getLocalViewOfDocuments(t,e,n=se()){const r=dr();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(s=>{let o=Gs();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const n=dr();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,se()))}populateOverlays(t,e,n){const r=[];return n.forEach(s=>{e.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((o,l)=>{e.set(o,l)})})}computeViews(t,e,n,r){let s=vi();const o=js(),l=function(){return js()}();return e.forEach((c,h)=>{const u=n.get(h.key);r.has(h.key)&&(u===void 0||u.mutation instanceof xr)?s=s.insert(h.key,h):u!==void 0?(o.set(h.key,u.mutation.getFieldMask()),Ys(u.mutation,h,u.mutation.getFieldMask(),Ge.now())):o.set(h.key,Vn.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((h,u)=>o.set(h,u)),e.forEach((h,u)=>{var d;return l.set(h,new hw(u,(d=o.get(h))!==null&&d!==void 0?d:null))}),l))}recalculateAndSaveOverlays(t,e){const n=js();let r=new De((o,l)=>o-l),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=e.get(c);if(h===null)return;let u=n.get(c)||Vn.empty();u=l.applyToLocalView(h,u),n.set(c,u);const d=(r.get(l.batchId)||se()).add(c);r=r.insert(l.batchId,d)})}).next(()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,u=c.value,d=Mm();u.forEach(m=>{if(!s.has(m)){const _=Im(e.get(m),n.get(m));_!==null&&d.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,d))}return J.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,r){return function(o){return Lt.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):fA(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):J.resolve(dr());let l=oo,c=s;return o.next(h=>J.forEach(h,(u,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),s.get(u)?J.resolve():this.remoteDocumentCache.getEntry(t,u).next(m=>{c=c.insert(u,m)}))).next(()=>this.populateOverlays(t,h,s)).next(()=>this.computeViews(t,c,h,se())).next(u=>({batchId:l,changes:Sm(u)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Lt(e)).next(n=>{let r=Gs();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let o=Gs();return this.indexManager.getCollectionParents(t,s).next(l=>J.forEach(l,c=>{const h=function(d,m){return new Qa(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(e,c.child(s));return this.getDocumentsMatchingCollectionQuery(t,h,n,r).next(u=>{u.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r))).next(o=>{s.forEach((c,h)=>{const u=h.getKey();o.get(u)===null&&(o=o.insert(u,ln.newInvalidDocument(u)))});let l=Gs();return o.forEach((c,h)=>{const u=s.get(c);u!==void 0&&Ys(u.mutation,h,Vn.empty(),Ge.now()),Ja(e,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(t){this.serializer=t,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(t,e){return J.resolve(this.Fr.get(e))}saveBundleMetadata(t,e){return this.Fr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:Yn(r.createTime)}}(e)),J.resolve()}getNamedQuery(t,e){return J.resolve(this.Mr.get(e))}saveNamedQuery(t,e){return this.Mr.set(e.name,function(r){return{name:r.name,query:ew(r.bundledQuery),readTime:Yn(r.readTime)}}(e)),J.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.overlays=new De(Lt.comparator),this.Or=new Map}getOverlay(t,e){return J.resolve(this.overlays.get(e))}getOverlays(t,e){const n=dr();return J.forEach(e,r=>this.getOverlay(t,r).next(s=>{s!==null&&n.set(r,s)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((r,s)=>{this.St(t,e,s)}),J.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Or.get(n);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Or.delete(n)),J.resolve()}getOverlaysForCollection(t,e,n){const r=dr(),s=e.length+1,o=new Lt(e.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>n&&r.set(c.getKey(),c)}return J.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new De((h,u)=>h-u);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>n){let u=s.get(h.largestBatchId);u===null&&(u=dr(),s=s.insert(h.largestBatchId,u)),u.set(h.getKey(),h)}}const l=dr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,u)=>l.set(h,u)),!(l.size()>=r)););return J.resolve(l)}St(t,e,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.Or.get(r.largestBatchId).delete(n.key);this.Or.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new DA(e,n));let s=this.Or.get(e);s===void 0&&(s=se(),this.Or.set(e,s)),this.Or.set(e,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(t){return J.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.Nr=new We(je.Br),this.Lr=new We(je.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(t,e){const n=new je(t,e);this.Nr=this.Nr.add(n),this.Lr=this.Lr.add(n)}qr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Qr(new je(t,e))}$r(t,e){t.forEach(n=>this.removeReference(n,e))}Ur(t){const e=new Lt(new Pe([])),n=new je(e,t),r=new je(e,t+1),s=[];return this.Lr.forEachInRange([n,r],o=>{this.Qr(o),s.push(o.key)}),s}Kr(){this.Nr.forEach(t=>this.Qr(t))}Qr(t){this.Nr=this.Nr.delete(t),this.Lr=this.Lr.delete(t)}Wr(t){const e=new Lt(new Pe([])),n=new je(e,t),r=new je(e,t+1);let s=se();return this.Lr.forEachInRange([n,r],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new je(t,0),n=this.Nr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class je{constructor(t,e){this.key=t,this.Gr=e}static Br(t,e){return Lt.comparator(t.key,e.key)||Zt(t.Gr,e.Gr)}static kr(t,e){return Zt(t.Gr,e.Gr)||Lt.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Jn=1,this.zr=new We(je.Br)}checkEmpty(t){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,r){const s=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new PA(s,e,n,r);this.mutationQueue.push(o);for(const l of r)this.zr=this.zr.add(new je(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return J.resolve(o)}lookupMutationBatch(t,e){return J.resolve(this.jr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Hr(n),s=r<0?0:r;return J.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?Nh:this.Jn-1)}getAllMutationBatches(t){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new je(e,0),r=new je(e,Number.POSITIVE_INFINITY),s=[];return this.zr.forEachInRange([n,r],o=>{const l=this.jr(o.Gr);s.push(l)}),J.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new We(Zt);return e.forEach(r=>{const s=new je(r,0),o=new je(r,Number.POSITIVE_INFINITY);this.zr.forEachInRange([s,o],l=>{n=n.add(l.Gr)})}),J.resolve(this.Jr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;Lt.isDocumentKey(s)||(s=s.child(""));const o=new je(new Lt(s),0);let l=new We(Zt);return this.zr.forEachWhile(c=>{const h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===r&&(l=l.add(c.Gr)),!0)},o),J.resolve(this.Jr(l))}Jr(t){const e=[];return t.forEach(n=>{const r=this.jr(n);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){_e(this.Yr(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.zr;return J.forEach(e.mutations,r=>{const s=new je(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.zr=n})}Xn(t){}containsKey(t,e){const n=new je(e,0),r=this.zr.firstAfterOrEqual(n);return J.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,J.resolve()}Yr(t,e){return this.Hr(t)}Hr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}jr(t){const e=this.Hr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(t){this.Zr=t,this.docs=function(){return new De(Lt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,o=this.Zr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return J.resolve(n?n.document.mutableCopy():ln.newInvalidDocument(e))}getEntries(t,e){let n=vi();return e.forEach(r=>{const s=this.docs.get(r);n=n.insert(r,s?s.document.mutableCopy():ln.newInvalidDocument(r))}),J.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=vi();const o=e.path,l=new Lt(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:u}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||WM(GM(u),n)<=0||(r.has(u.key)||Ja(e,u))&&(s=s.insert(u.key,u.mutableCopy()))}return J.resolve(s)}getAllFromCollectionGroup(t,e,n,r){Bt(9500)}Xr(t,e){return J.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new _w(this)}getSize(t){return J.resolve(this.size)}}class _w extends cw{constructor(t){super(),this.vr=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.vr.addEntry(t,r)):this.vr.removeEntry(n)}),J.waitFor(e)}getFromCache(t,e){return this.vr.getEntry(t,e)}getAllFromCache(t,e){return this.vr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(t){this.persistence=t,this.ei=new Er(e=>Oh(e),Vh),this.lastRemoteSnapshotVersion=Gt.min(),this.highestTargetId=0,this.ti=0,this.ni=new Gh,this.targetCount=0,this.ri=fs.rr()}forEachTarget(t,e){return this.ei.forEach((n,r)=>e(r)),J.resolve()}getLastRemoteSnapshotVersion(t){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return J.resolve(this.ti)}allocateTargetId(t){return this.highestTargetId=this.ri.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ti&&(this.ti=e),J.resolve()}ar(t){this.ei.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ri=new fs(e),this.highestTargetId=e),t.sequenceNumber>this.ti&&(this.ti=t.sequenceNumber)}addTargetData(t,e){return this.ar(e),this.targetCount+=1,J.resolve()}updateTargetData(t,e){return this.ar(e),J.resolve()}removeTargetData(t,e){return this.ei.delete(e.target),this.ni.Ur(e.targetId),this.targetCount-=1,J.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.ei.forEach((o,l)=>{l.sequenceNumber<=e&&n.get(l.targetId)===null&&(this.ei.delete(o),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),r++)}),J.waitFor(s).next(()=>r)}getTargetCount(t){return J.resolve(this.targetCount)}getTargetData(t,e){const n=this.ei.get(e)||null;return J.resolve(n)}addMatchingKeys(t,e,n){return this.ni.qr(e,n),J.resolve()}removeMatchingKeys(t,e,n){this.ni.$r(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(o=>{s.push(r.markPotentiallyOrphaned(t,o))}),J.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.ni.Ur(e),J.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ni.Wr(e);return J.resolve(n)}containsKey(t,e){return J.resolve(this.ni.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(t,e){this.ii={},this.overlays={},this.si=new ja(0),this.oi=!1,this.oi=!0,this._i=new pw,this.referenceDelegate=t(this),this.ai=new vw(this),this.indexManager=new nw,this.remoteDocumentCache=function(r){return new gw(r)}(n=>this.referenceDelegate.ui(n)),this.serializer=new tw(e),this.ci=new dw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new fw,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ii[t.toKey()];return n||(n=new mw(e,this.referenceDelegate),this.ii[t.toKey()]=n),n}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(t,e,n){xt("MemoryPersistence","Starting transaction:",t);const r=new yw(this.si.next());return this.referenceDelegate.li(),n(r).next(s=>this.referenceDelegate.hi(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Pi(t,e){return J.or(Object.values(this.ii).map(n=>()=>n.containsKey(t,e)))}}class yw extends qM{constructor(t){super(),this.currentSequenceNumber=t}}class Wh{constructor(t){this.persistence=t,this.Ti=new Gh,this.Ii=null}static Ei(t){return new Wh(t)}get di(){if(this.Ii)return this.Ii;throw Bt(60996)}addReference(t,e,n){return this.Ti.addReference(n,e),this.di.delete(n.toString()),J.resolve()}removeReference(t,e,n){return this.Ti.removeReference(n,e),this.di.add(n.toString()),J.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),J.resolve()}removeTarget(t,e){this.Ti.Ur(e.targetId).forEach(r=>this.di.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(s=>this.di.add(s.toString()))}).next(()=>n.removeTargetData(t,e))}li(){this.Ii=new Set}hi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.di,n=>{const r=Lt.fromPath(n);return this.Ai(t,r).next(s=>{s||e.removeEntry(r,Gt.min())})}).next(()=>(this.Ii=null,e.apply(t)))}updateLimboDocument(t,e){return this.Ai(t,e).next(n=>{n?this.di.delete(e.toString()):this.di.add(e.toString())})}ui(t){return 0}Ai(t,e){return J.or([()=>J.resolve(this.Ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Pi(t,e)])}}class Ba{constructor(t,e){this.persistence=t,this.Ri=new Er(n=>YM(n.path),(n,r)=>n.isEqual(r)),this.garbageCollector=lw(this,e)}static Ei(t,e){return new Ba(t,e)}li(){}hi(t){return J.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.Vr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(r=>n+r))}Vr(t){let e=0;return this.Ar(t,n=>{e++}).next(()=>e)}Ar(t,e){return J.forEach(this.Ri,(n,r)=>this.gr(t,n,r).next(s=>s?J.resolve():e(r)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.Xr(t,o=>this.gr(t,o,e).next(l=>{l||(n++,s.removeEntry(o,Gt.min()))})).next(()=>s.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.Ri.set(e,t.currentSequenceNumber),J.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.Ri.set(n,t.currentSequenceNumber),J.resolve()}removeReference(t,e,n){return this.Ri.set(n,t.currentSequenceNumber),J.resolve()}updateLimboDocument(t,e){return this.Ri.set(e,t.currentSequenceNumber),J.resolve()}ui(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ya(t.data.value)),e}gr(t,e,n){return J.or([()=>this.persistence.Pi(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const r=this.Ri.get(e);return J.resolve(r!==void 0&&r>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.ls=n,this.hs=r}static Ps(t,e){let n=se(),r=se();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Xh(t,e.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return dS()?8:$M(hS())>0?6:4}()}initialize(t,e){this.As=t,this.indexManager=e,this.Ts=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.Rs(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Vs(t,e,r,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Ew;return this.fs(t,e,o).next(l=>{if(s.result=l,this.Is)return this.gs(t,e,o,l.size)})}).next(()=>s.result)}gs(t,e,n,r){return n.documentReadCount<this.Es?(Wr()<=ue.DEBUG&&xt("QueryEngine","SDK will not create cache indexes for query:",Xr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),J.resolve()):(Wr()<=ue.DEBUG&&xt("QueryEngine","Query:",Xr(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(Wr()<=ue.DEBUG&&xt("QueryEngine","The SDK decides to create cache indexes for query:",Xr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,jn(e))):J.resolve())}Rs(t,e){if(Tf(e))return J.resolve(null);let n=jn(e);return this.indexManager.getIndexType(t,n).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=ih(e,null,"F"),n=jn(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(s=>{const o=se(...s);return this.As.getDocuments(t,o).next(l=>this.indexManager.getMinOffset(t,n).next(c=>{const h=this.ps(e,l);return this.ys(e,h,o,c.readTime)?this.Rs(t,ih(e,null,"F")):this.ws(t,h,e,c)}))})))}Vs(t,e,n,r){return Tf(e)||r.isEqual(Gt.min())?J.resolve(null):this.As.getDocuments(t,n).next(s=>{const o=this.ps(e,s);return this.ys(e,o,n,r)?J.resolve(null):(Wr()<=ue.DEBUG&&xt("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Xr(e)),this.ws(t,o,e,HM(r,oo)).next(l=>l))})}ps(t,e){let n=new We(xm(t));return e.forEach((r,s)=>{Ja(t,s)&&(n=n.add(s))}),n}ys(t,e,n,r){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}fs(t,e,n){return Wr()<=ue.DEBUG&&xt("QueryEngine","Using full collection scan to execute query:",Xr(e)),this.As.getDocumentsMatchingQuery(t,e,Hi.min(),n)}ws(t,e,n,r){return this.As.getDocumentsMatchingQuery(t,n,r).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="LocalStore",Tw=3e8;class Sw{constructor(t,e,n,r){this.persistence=t,this.bs=e,this.serializer=r,this.Ss=new De(Zt),this.Ds=new Er(s=>Oh(s),Vh),this.vs=new Map,this.Cs=t.getRemoteDocumentCache(),this.ai=t.getTargetCache(),this.ci=t.getBundleCache(),this.Fs(n)}Fs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new uw(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ss))}}function Mw(i,t,e,n){return new Sw(i,t,e,n)}async function Xm(i,t){const e=$t(i);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(s=>(r=s,e.Fs(t),e.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],l=[];let c=se();for(const h of r){o.push(h.batchId);for(const u of h.mutations)c=c.add(u.key)}for(const h of s){l.push(h.batchId);for(const u of h.mutations)c=c.add(u.key)}return e.localDocuments.getDocuments(n,c).next(h=>({Ms:h,removedBatchIds:o,addedBatchIds:l}))})})}function Aw(i,t){const e=$t(i);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=t.batch.keys(),s=e.Cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,u){const d=h.batch,m=d.keys();let _=J.resolve();return m.forEach(x=>{_=_.next(()=>u.getEntry(c,x)).next(M=>{const g=h.docVersions.get(x);_e(g!==null,48541),M.version.compareTo(g)<0&&(d.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),u.addEntry(M)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,d))}(e,n,t,s).next(()=>s.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let c=se();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(t))).next(()=>e.localDocuments.getDocuments(n,r))})}function qm(i){const t=$t(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ai.getLastRemoteSnapshotVersion(e))}function ww(i,t){const e=$t(i),n=t.snapshotVersion;let r=e.Ss;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.Cs.newChangeBuffer({trackRemovals:!0});r=e.Ss;const l=[];t.targetChanges.forEach((u,d)=>{const m=r.get(d);if(!m)return;l.push(e.ai.removeMatchingKeys(s,u.removedDocuments,d).next(()=>e.ai.addMatchingKeys(s,u.addedDocuments,d)));let _=m.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(d)!==null?_=_.withResumeToken(Je.EMPTY_BYTE_STRING,Gt.min()).withLastLimboFreeSnapshotVersion(Gt.min()):u.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(u.resumeToken,n)),r=r.insert(d,_),function(M,g,p){return M.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=Tw?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(m,_,u)&&l.push(e.ai.updateTargetData(s,_))});let c=vi(),h=se();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(s,u))}),l.push(bw(s,o,t.documentUpdates).next(u=>{c=u.xs,h=u.Os})),!n.isEqual(Gt.min())){const u=e.ai.getLastRemoteSnapshotVersion(s).next(d=>e.ai.setTargetsMetadata(s,s.currentSequenceNumber,n));l.push(u)}return J.waitFor(l).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(e.Ss=r,s))}function bw(i,t,e){let n=se(),r=se();return e.forEach(s=>n=n.add(s)),t.getEntries(i,n).next(s=>{let o=vi();return e.forEach((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(Gt.min())?(t.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(c),o=o.insert(l,c)):xt(qh,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{xs:o,Os:r}})}function Rw(i,t){const e=$t(i);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=Nh),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Cw(i,t){const e=$t(i);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return e.ai.getTargetData(n,t).next(s=>s?(r=s,J.resolve(r)):e.ai.allocateTargetId(n).next(o=>(r=new Di(t,o,"TargetPurposeListen",n.currentSequenceNumber),e.ai.addTargetData(n,r).next(()=>r))))}).then(n=>{const r=e.Ss.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.Ss=e.Ss.insert(n.targetId,n),e.Ds.set(t,n.targetId)),n})}async function lh(i,t,e){const n=$t(i),r=n.Ss.get(t),s=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Es(o))throw o;xt(qh,`Failed to update sequence numbers for target ${t}: ${o}`)}n.Ss=n.Ss.remove(t),n.Ds.delete(r.target)}function Uf(i,t,e){const n=$t(i);let r=Gt.min(),s=se();return n.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,u){const d=$t(c),m=d.Ds.get(u);return m!==void 0?J.resolve(d.Ss.get(m)):d.ai.getTargetData(h,u)}(n,o,jn(t)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,n.ai.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>n.bs.getDocumentsMatchingQuery(o,t,e?r:Gt.min(),e?s:se())).next(l=>(Iw(n,mA(t),l),{documents:l,Ns:s})))}function Iw(i,t,e){let n=i.vs.get(t)||Gt.min();e.forEach((r,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),i.vs.set(t,n)}class Ff{constructor(){this.activeTargetIds=xA()}$s(t){this.activeTargetIds=this.activeTargetIds.add(t)}Us(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Qs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Pw{constructor(){this.So=new Ff,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.So.$s(t),this.Do[t]||"not-current"}updateQueryState(t,e,n){this.Do[t]=e}removeLocalQueryTarget(t){this.So.Us(t)}isLocalQueryTarget(t){return this.So.activeTargetIds.has(t)}clearQueryState(t){delete this.Do[t]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(t){return this.So.activeTargetIds.has(t)}start(){return this.So=new Ff,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{vo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="ConnectivityMonitor";class Vf{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(t){this.Oo.push(t)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){xt(Of,"Network connectivity changed: AVAILABLE");for(const t of this.Oo)t(0)}xo(){xt(Of,"Network connectivity changed: UNAVAILABLE");for(const t of this.Oo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa=null;function ch(){return aa===null?aa=function(){return 268435456+Math.round(2147483648*Math.random())}():aa++,"0x"+aa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl="RestConnection",Lw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Nw{get Bo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Lo=e+"://"+t.host,this.ko=`projects/${n}/databases/${r}`,this.qo=this.databaseId.database===Da?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Qo(t,e,n,r,s){const o=ch(),l=this.$o(t,e.toUriEncodedString());xt(Zl,`Sending RPC '${t}' ${o}:`,l,n);const c={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};this.Uo(c,r,s);const{host:h}=new URL(l),u=kp(h);return this.Ko(t,l,c,n,u).then(d=>(xt(Zl,`Received RPC '${t}' ${o}: `,d),d),d=>{throw ls(Zl,`RPC '${t}' ${o} failed with error: `,d,"url: ",l,"request:",n),d})}Wo(t,e,n,r,s,o){return this.Qo(t,e,n,r,s)}Uo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vs}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((r,s)=>t[s]=r),n&&n.headers.forEach((r,s)=>t[s]=r)}$o(t,e){const n=Lw[t];return`${this.Lo}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(t){this.Go=t.Go,this.zo=t.zo}jo(t){this.Ho=t}Jo(t){this.Yo=t}Zo(t){this.Xo=t}onMessage(t){this.e_=t}close(){this.zo()}send(t){this.Go(t)}t_(){this.Ho()}n_(){this.Yo()}r_(t){this.Xo(t)}i_(t){this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="WebChannelConnection";class Fw extends Nw{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ko(t,e,n,r,s){const o=ch();return new Promise((l,c)=>{const h=new jp;h.setWithCredentials(!0),h.listenOnce(Yp.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case va.NO_ERROR:const d=h.getResponseJson();xt(on,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(d)),l(d);break;case va.TIMEOUT:xt(on,`RPC '${t}' ${o} timed out`),c(new It(st.DEADLINE_EXCEEDED,"Request time out"));break;case va.HTTP_ERROR:const m=h.getStatus();if(xt(on,`RPC '${t}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let _=h.getResponseJson();Array.isArray(_)&&(_=_[0]);const x=_==null?void 0:_.error;if(x&&x.status&&x.message){const M=function(p){const I=p.toLowerCase().replace(/_/g,"-");return Object.values(st).indexOf(I)>=0?I:st.UNKNOWN}(x.status);c(new It(M,x.message))}else c(new It(st.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new It(st.UNAVAILABLE,"Connection failed."));break;default:Bt(9055,{s_:t,streamId:o,o_:h.getLastErrorCode(),__:h.getLastError()})}}finally{xt(on,`RPC '${t}' ${o} completed.`)}});const u=JSON.stringify(r);xt(on,`RPC '${t}' ${o} sending request:`,r),h.send(e,"POST",u,n,15)})}a_(t,e,n){const r=ch(),s=[this.Lo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Zp(),l=Qp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Uo(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const u=s.join("");xt(on,`Creating RPC '${t}' stream ${r}: ${u}`,c);const d=o.createWebChannel(u,c);let m=!1,_=!1;const x=new Uw({Go:g=>{_?xt(on,`Not sending because RPC '${t}' stream ${r} is closed:`,g):(m||(xt(on,`Opening RPC '${t}' stream ${r} transport.`),d.open(),m=!0),xt(on,`RPC '${t}' stream ${r} sending:`,g),d.send(g))},zo:()=>d.close()}),M=(g,p,I)=>{g.listen(p,D=>{try{I(D)}catch(P){setTimeout(()=>{throw P},0)}})};return M(d,Hs.EventType.OPEN,()=>{_||(xt(on,`RPC '${t}' stream ${r} transport opened.`),x.t_())}),M(d,Hs.EventType.CLOSE,()=>{_||(_=!0,xt(on,`RPC '${t}' stream ${r} transport closed`),x.r_())}),M(d,Hs.EventType.ERROR,g=>{_||(_=!0,ls(on,`RPC '${t}' stream ${r} transport errored. Name:`,g.name,"Message:",g.message),x.r_(new It(st.UNAVAILABLE,"The operation could not be completed")))}),M(d,Hs.EventType.MESSAGE,g=>{var p;if(!_){const I=g.data[0];_e(!!I,16349);const D=I,P=(D==null?void 0:D.error)||((p=D[0])===null||p===void 0?void 0:p.error);if(P){xt(on,`RPC '${t}' stream ${r} received error:`,P);const V=P.status;let F=function(y){const v=Oe[y];if(v!==void 0)return Lm(v)}(V),S=P.message;F===void 0&&(F=st.INTERNAL,S="Unknown error status: "+V+" with message "+P.message),_=!0,x.r_(new It(F,S)),d.close()}else xt(on,`RPC '${t}' stream ${r} received:`,I),x.i_(I)}}),M(l,Kp.STAT_EVENT,g=>{g.stat===Qc.PROXY?xt(on,`RPC '${t}' stream ${r} detected buffering proxy`):g.stat===Qc.NOPROXY&&xt(on,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{x.n_()},0),x}}function Jl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(i){return new kA(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(t,e,n=1e3,r=1.5,s=6e4){this.bi=t,this.timerId=e,this.u_=n,this.c_=r,this.l_=s,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(t){this.cancel();const e=Math.floor(this.h_+this.d_()),n=Math.max(0,Date.now()-this.T_),r=Math.max(0,e-n);r>0&&xt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.h_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,r,()=>(this.T_=Date.now(),t())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="PersistentStream";class jm{constructor(t,e,n,r,s,o,l,c){this.bi=t,this.R_=n,this.V_=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new $m(t,e)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(t){this.M_(),this.stream.send(t)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(t,e){this.M_(),this.x_(),this.y_.cancel(),this.m_++,t!==4?this.y_.reset():e&&e.code===st.RESOURCE_EXHAUSTED?(_i(e.toString()),_i("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):e&&e.code===st.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zo(e)}O_(){}auth(){this.state=1;const t=this.N_(this.m_),e=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.m_===e&&this.B_(n,r)},n=>{t(()=>{const r=new It(st.UNKNOWN,"Fetching auth token failed: "+n.message);return this.L_(r)})})}B_(t,e){const n=this.N_(this.m_);this.stream=this.k_(t,e),this.stream.jo(()=>{n(()=>this.listener.jo())}),this.stream.Jo(()=>{n(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(r=>{n(()=>this.L_(r))}),this.stream.onMessage(r=>{n(()=>++this.p_==1?this.q_(r):this.onNext(r))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(t){return xt(Bf,`close with error: ${t}`),this.stream=null,this.close(4,t)}N_(t){return e=>{this.bi.enqueueAndForget(()=>this.m_===t?e():(xt(Bf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ow extends jm{constructor(t,e,n,r,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,o),this.serializer=s}k_(t,e){return this.connection.a_("Listen",t,e)}q_(t){return this.onNext(t)}onNext(t){this.y_.reset();const e=GA(this.serializer,t),n=function(s){if(!("targetChange"in s))return Gt.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Gt.min():o.readTime?Yn(o.readTime):Gt.min()}(t);return this.listener.Q_(e,n)}U_(t){const e={};e.database=ah(this.serializer),e.addTarget=function(s,o){let l;const c=o.target;if(l=nh(c)?{documents:qA(s,c)}:{query:$A(s,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Fm(s,o.resumeToken);const h=rh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Gt.min())>0){l.readTime=Va(s,o.snapshotVersion.toTimestamp());const h=rh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const n=YA(this.serializer,t);n&&(e.labels=n),this.F_(e)}K_(t){const e={};e.database=ah(this.serializer),e.removeTarget=t,this.F_(e)}}class Vw extends jm{constructor(t,e,n,r,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.serializer=s}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(t,e){return this.connection.a_("Write",t,e)}q_(t){return _e(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,_e(!t.writeResults||t.writeResults.length===0,55816),this.listener.z_()}onNext(t){_e(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.y_.reset();const e=XA(t.writeResults,t.commitTime),n=Yn(t.commitTime);return this.listener.j_(n,e)}H_(){const t={};t.database=ah(this.serializer),this.F_(t)}G_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>WA(this.serializer,n))};this.F_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{}class kw extends Bw{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.J_=!1}Y_(){if(this.J_)throw new It(st.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(t,e,n,r){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Qo(t,sh(e,n),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===st.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new It(st.UNKNOWN,s.toString())})}Wo(t,e,n,r,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Wo(t,sh(e,n),r,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===st.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new It(st.UNKNOWN,o.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class zw{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(t){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.na("Offline")))}set(t){this.sa(),this.Z_=0,t==="Online"&&(this.ea=!1),this.na(t)}na(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(_i(e),this.ea=!1):xt("OnlineStateTracker",e)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="RemoteStore";class Hw{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=s,this.ca.vo(o=>{n.enqueueAndForget(async()=>{Tr(this)&&(xt(_r,"Restarting streams for network reachability change."),await async function(c){const h=$t(c);h.aa.add(4),await Eo(h),h.la.set("Unknown"),h.aa.delete(4),await rl(h)}(this))})}),this.la=new zw(n,r)}}async function rl(i){if(Tr(i))for(const t of i.ua)await t(!0)}async function Eo(i){for(const t of i.ua)await t(!1)}function Ym(i,t){const e=$t(i);e._a.has(t.targetId)||(e._a.set(t.targetId,t),Kh(e)?Yh(e):xs(e).b_()&&jh(e,t))}function $h(i,t){const e=$t(i),n=xs(e);e._a.delete(t),n.b_()&&Km(e,t),e._a.size===0&&(n.b_()?n.v_():Tr(e)&&e.la.set("Unknown"))}function jh(i,t){if(i.ha.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Gt.min())>0){const e=i.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}xs(i).U_(t)}function Km(i,t){i.ha.Ke(t),xs(i).K_(t)}function Yh(i){i.ha=new FA({getRemoteKeysForTarget:t=>i.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>i._a.get(t)||null,Pt:()=>i.datastore.serializer.databaseId}),xs(i).start(),i.la.ta()}function Kh(i){return Tr(i)&&!xs(i).w_()&&i._a.size>0}function Tr(i){return $t(i).aa.size===0}function Qm(i){i.ha=void 0}async function Gw(i){i.la.set("Online")}async function Ww(i){i._a.forEach((t,e)=>{jh(i,t)})}async function Xw(i,t){Qm(i),Kh(i)?(i.la.ia(t),Yh(i)):i.la.set("Unknown")}async function qw(i,t,e){if(i.la.set("Online"),t instanceof Um&&t.state===2&&t.cause)try{await async function(r,s){const o=s.cause;for(const l of s.targetIds)r._a.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r._a.delete(l),r.ha.removeTarget(l))}(i,t)}catch(n){xt(_r,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ka(i,n)}else if(t instanceof Ta?i.ha.Xe(t):t instanceof Nm?i.ha.ot(t):i.ha.nt(t),!e.isEqual(Gt.min()))try{const n=await qm(i.localStore);e.compareTo(n)>=0&&await function(s,o){const l=s.ha.It(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const u=s._a.get(h);u&&s._a.set(h,u.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const u=s._a.get(c);if(!u)return;s._a.set(c,u.withResumeToken(Je.EMPTY_BYTE_STRING,u.snapshotVersion)),Km(s,c);const d=new Di(u.target,c,h,u.sequenceNumber);jh(s,d)}),s.remoteSyncer.applyRemoteEvent(l)}(i,e)}catch(n){xt(_r,"Failed to raise snapshot:",n),await ka(i,n)}}async function ka(i,t,e){if(!Es(t))throw t;i.aa.add(1),await Eo(i),i.la.set("Offline"),e||(e=()=>qm(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{xt(_r,"Retrying IndexedDB access"),await e(),i.aa.delete(1),await rl(i)})}function Zm(i,t){return t().catch(e=>ka(i,e,t))}async function sl(i){const t=$t(i),e=qi(t);let n=t.oa.length>0?t.oa[t.oa.length-1].batchId:Nh;for(;$w(t);)try{const r=await Rw(t.localStore,n);if(r===null){t.oa.length===0&&e.v_();break}n=r.batchId,jw(t,r)}catch(r){await ka(t,r)}Jm(t)&&tg(t)}function $w(i){return Tr(i)&&i.oa.length<10}function jw(i,t){i.oa.push(t);const e=qi(i);e.b_()&&e.W_&&e.G_(t.mutations)}function Jm(i){return Tr(i)&&!qi(i).w_()&&i.oa.length>0}function tg(i){qi(i).start()}async function Yw(i){qi(i).H_()}async function Kw(i){const t=qi(i);for(const e of i.oa)t.G_(e.mutations)}async function Qw(i,t,e){const n=i.oa.shift(),r=kh.from(n,t,e);await Zm(i,()=>i.remoteSyncer.applySuccessfulWrite(r)),await sl(i)}async function Zw(i,t){t&&qi(i).W_&&await async function(n,r){if(function(o){return NA(o)&&o!==st.ABORTED}(r.code)){const s=n.oa.shift();qi(n).D_(),await Zm(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await sl(n)}}(i,t),Jm(i)&&tg(i)}async function kf(i,t){const e=$t(i);e.asyncQueue.verifyOperationInProgress(),xt(_r,"RemoteStore received new credentials");const n=Tr(e);e.aa.add(3),await Eo(e),n&&e.la.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.aa.delete(3),await rl(e)}async function Jw(i,t){const e=$t(i);t?(e.aa.delete(2),await rl(e)):t||(e.aa.add(2),await Eo(e),e.la.set("Unknown"))}function xs(i){return i.Pa||(i.Pa=function(e,n,r){const s=$t(e);return s.Y_(),new Ow(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(i.datastore,i.asyncQueue,{jo:Gw.bind(null,i),Jo:Ww.bind(null,i),Zo:Xw.bind(null,i),Q_:qw.bind(null,i)}),i.ua.push(async t=>{t?(i.Pa.D_(),Kh(i)?Yh(i):i.la.set("Unknown")):(await i.Pa.stop(),Qm(i))})),i.Pa}function qi(i){return i.Ta||(i.Ta=function(e,n,r){const s=$t(e);return s.Y_(),new Vw(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(i.datastore,i.asyncQueue,{jo:()=>Promise.resolve(),Jo:Yw.bind(null,i),Zo:Zw.bind(null,i),z_:Kw.bind(null,i),j_:Qw.bind(null,i)}),i.ua.push(async t=>{t?(i.Ta.D_(),await sl(i)):(await i.Ta.stop(),i.oa.length>0&&(xt(_r,`Stopping write stream with ${i.oa.length} pending writes`),i.oa=[]))})),i.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const o=Date.now()+n,l=new Qh(t,e,o,r,s);return l.start(n),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new It(st.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zh(i,t){if(_i("AsyncQueue",`${t}: ${i}`),Es(i))return new It(st.UNAVAILABLE,`${t}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{static emptySet(t){return new ns(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||Lt.comparator(e.key,n.key):(e,n)=>Lt.comparator(e.key,n.key),this.keyedMap=Gs(),this.sortedSet=new De(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ns)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=n.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new ns;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.Ia=new De(Lt.comparator)}track(t){const e=t.doc.key,n=this.Ia.get(e);n?t.type!==0&&n.type===3?this.Ia=this.Ia.insert(e,t):t.type===3&&n.type!==1?this.Ia=this.Ia.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.Ia=this.Ia.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.Ia=this.Ia.remove(e):t.type===1&&n.type===2?this.Ia=this.Ia.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):Bt(63341,{Vt:t,Ea:n}):this.Ia=this.Ia.insert(e,t)}da(){const t=[];return this.Ia.inorderTraversal((e,n)=>{t.push(n)}),t}}class ps{constructor(t,e,n,r,s,o,l,c,h){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(t,e,n,r,s){const o=[];return e.forEach(l=>{o.push({type:0,doc:l})}),new ps(t,e,ns.emptySet(e),o,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Za(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(t=>t.ma())}}class eb{constructor(){this.queries=Hf(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(e,n){const r=$t(e),s=r.queries;r.queries=Hf(),s.forEach((o,l)=>{for(const c of l.Ra)c.onError(n)})})(this,new It(st.ABORTED,"Firestore shutting down"))}}function Hf(){return new Er(i=>Em(i),Za)}async function nb(i,t){const e=$t(i);let n=3;const r=t.query;let s=e.queries.get(r);s?!s.Va()&&t.ma()&&(n=2):(s=new tb,n=t.ma()?0:1);try{switch(n){case 0:s.Aa=await e.onListen(r,!0);break;case 1:s.Aa=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(o){const l=Zh(o,`Initialization of query '${Xr(t.query)}' failed`);return void t.onError(l)}e.queries.set(r,s),s.Ra.push(t),t.ga(e.onlineState),s.Aa&&t.pa(s.Aa)&&Jh(e)}async function ib(i,t){const e=$t(i),n=t.query;let r=3;const s=e.queries.get(n);if(s){const o=s.Ra.indexOf(t);o>=0&&(s.Ra.splice(o,1),s.Ra.length===0?r=t.ma()?0:1:!s.Va()&&t.ma()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function rb(i,t){const e=$t(i);let n=!1;for(const r of t){const s=r.query,o=e.queries.get(s);if(o){for(const l of o.Ra)l.pa(r)&&(n=!0);o.Aa=r}}n&&Jh(e)}function sb(i,t,e){const n=$t(i),r=n.queries.get(t);if(r)for(const s of r.Ra)s.onError(e);n.queries.delete(t)}function Jh(i){i.fa.forEach(t=>{t.next()})}var hh,Gf;(Gf=hh||(hh={})).ya="default",Gf.Cache="cache";class ob{constructor(t,e,n){this.query=t,this.wa=e,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=n||{}}pa(t){if(!this.options.includeMetadataChanges){const n=[];for(const r of t.docChanges)r.type!==3&&n.push(r);t=new ps(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ba?this.Da(t)&&(this.wa.next(t),e=!0):this.va(t,this.onlineState)&&(this.Ca(t),e=!0),this.Sa=t,e}onError(t){this.wa.error(t)}ga(t){this.onlineState=t;let e=!1;return this.Sa&&!this.ba&&this.va(this.Sa,t)&&(this.Ca(this.Sa),e=!0),e}va(t,e){if(!t.fromCache||!this.ma())return!0;const n=e!=="Offline";return(!this.options.Fa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Da(t){if(t.docChanges.length>0)return!0;const e=this.Sa&&this.Sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Ca(t){t=ps.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ba=!0,this.wa.next(t)}ma(){return this.options.source!==hh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(t){this.key=t}}class ng{constructor(t){this.key=t}}class ab{constructor(t,e){this.query=t,this.qa=e,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=se(),this.mutatedKeys=se(),this.Ua=xm(t),this.Ka=new ns(this.Ua)}get Wa(){return this.qa}Ga(t,e){const n=e?e.za:new zf,r=e?e.Ka:this.Ka;let s=e?e.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((u,d)=>{const m=r.get(u),_=Ja(this.query,d)?d:null,x=!!m&&this.mutatedKeys.has(m.key),M=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let g=!1;m&&_?m.data.isEqual(_.data)?x!==M&&(n.track({type:3,doc:_}),g=!0):this.ja(m,_)||(n.track({type:2,doc:_}),g=!0,(c&&this.Ua(_,c)>0||h&&this.Ua(_,h)<0)&&(l=!0)):!m&&_?(n.track({type:0,doc:_}),g=!0):m&&!_&&(n.track({type:1,doc:m}),g=!0,(c||h)&&(l=!0)),g&&(_?(o=o.add(_),s=M?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),n.track({type:1,doc:u})}return{Ka:o,za:n,ys:l,mutatedKeys:s}}ja(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const s=this.Ka;this.Ka=t.Ka,this.mutatedKeys=t.mutatedKeys;const o=t.za.da();o.sort((u,d)=>function(_,x){const M=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Bt(20277,{Vt:g})}};return M(_)-M(x)}(u.type,d.type)||this.Ua(u.doc,d.doc)),this.Ha(n),r=r!=null&&r;const l=e&&!r?this.Ja():[],c=this.$a.size===0&&this.current&&!r?1:0,h=c!==this.Qa;return this.Qa=c,o.length!==0||h?{snapshot:new ps(this.query,t.Ka,s,o,t.mutatedKeys,c===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ya:l}:{Ya:l}}ga(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new zf,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(t){return!this.qa.has(t)&&!!this.Ka.has(t)&&!this.Ka.get(t).hasLocalMutations}Ha(t){t&&(t.addedDocuments.forEach(e=>this.qa=this.qa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.qa=this.qa.delete(e)),this.current=t.current)}Ja(){if(!this.current)return[];const t=this.$a;this.$a=se(),this.Ka.forEach(n=>{this.Za(n.key)&&(this.$a=this.$a.add(n.key))});const e=[];return t.forEach(n=>{this.$a.has(n)||e.push(new ng(n))}),this.$a.forEach(n=>{t.has(n)||e.push(new eg(n))}),e}Xa(t){this.qa=t.Ns,this.$a=se();const e=this.Ga(t.documents);return this.applyChanges(e,!0)}eu(){return ps.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const tu="SyncEngine";class lb{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class cb{constructor(t){this.key=t,this.tu=!1}}class hb{constructor(t,e,n,r,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nu={},this.ru=new Er(l=>Em(l),Za),this.iu=new Map,this.su=new Set,this.ou=new De(Lt.comparator),this._u=new Map,this.au=new Gh,this.uu={},this.cu=new Map,this.lu=fs.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function ub(i,t,e=!0){const n=lg(i);let r;const s=n.ru.get(t);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.eu()):r=await ig(n,t,e,!0),r}async function db(i,t){const e=lg(i);await ig(e,t,!0,!1)}async function ig(i,t,e,n){const r=await Cw(i.localStore,jn(t)),s=r.targetId,o=i.sharedClientState.addLocalQueryTarget(s,e);let l;return n&&(l=await fb(i,t,s,o==="current",r.resumeToken)),i.isPrimaryClient&&e&&Ym(i.remoteStore,r),l}async function fb(i,t,e,n,r){i.Pu=(d,m,_)=>async function(M,g,p,I){let D=g.view.Ga(p);D.ys&&(D=await Uf(M.localStore,g.query,!1).then(({documents:S})=>g.view.Ga(S,D)));const P=I&&I.targetChanges.get(g.targetId),V=I&&I.targetMismatches.get(g.targetId)!=null,F=g.view.applyChanges(D,M.isPrimaryClient,P,V);return Xf(M,g.targetId,F.Ya),F.snapshot}(i,d,m,_);const s=await Uf(i.localStore,t,!0),o=new ab(t,s.Ns),l=o.Ga(s.documents),c=yo.createSynthesizedTargetChangeForCurrentChange(e,n&&i.onlineState!=="Offline",r),h=o.applyChanges(l,i.isPrimaryClient,c);Xf(i,e,h.Ya);const u=new lb(t,e,o);return i.ru.set(t,u),i.iu.has(e)?i.iu.get(e).push(t):i.iu.set(e,[t]),h.snapshot}async function pb(i,t,e){const n=$t(i),r=n.ru.get(t),s=n.iu.get(r.targetId);if(s.length>1)return n.iu.set(r.targetId,s.filter(o=>!Za(o,t))),void n.ru.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await lh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),e&&$h(n.remoteStore,r.targetId),uh(n,r.targetId)}).catch(ys)):(uh(n,r.targetId),await lh(n.localStore,r.targetId,!0))}async function mb(i,t){const e=$t(i),n=e.ru.get(t),r=e.iu.get(n.targetId);e.isPrimaryClient&&r.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),$h(e.remoteStore,n.targetId))}async function gb(i,t,e){const n=Sb(i);try{const r=await function(o,l){const c=$t(o),h=Ge.now(),u=l.reduce((_,x)=>_.add(x.key),se());let d,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let x=vi(),M=se();return c.Cs.getEntries(_,u).next(g=>{x=g,x.forEach((p,I)=>{I.isValidDocument()||(M=M.add(p))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,x)).next(g=>{d=g;const p=[];for(const I of l){const D=CA(I,d.get(I.key).overlayedDocument);D!=null&&p.push(new xr(I.key,D,dm(D.value.mapValue),mi.exists(!0)))}return c.mutationQueue.addMutationBatch(_,h,p,l)}).next(g=>{m=g;const p=g.applyToLocalDocumentSet(d,M);return c.documentOverlayCache.saveOverlays(_,g.batchId,p)})}).then(()=>({batchId:m.batchId,changes:Sm(d)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(r.batchId),function(o,l,c){let h=o.uu[o.currentUser.toKey()];h||(h=new De(Zt)),h=h.insert(l,c),o.uu[o.currentUser.toKey()]=h}(n,r.batchId,e),await xo(n,r.changes),await sl(n.remoteStore)}catch(r){const s=Zh(r,"Failed to persist write");e.reject(s)}}async function rg(i,t){const e=$t(i);try{const n=await ww(e.localStore,t);t.targetChanges.forEach((r,s)=>{const o=e._u.get(s);o&&(_e(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.tu=!0:r.modifiedDocuments.size>0?_e(o.tu,14607):r.removedDocuments.size>0&&(_e(o.tu,42227),o.tu=!1))}),await xo(e,n,t)}catch(n){await ys(n)}}function Wf(i,t,e){const n=$t(i);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const r=[];n.ru.forEach((s,o)=>{const l=o.view.ga(t);l.snapshot&&r.push(l.snapshot)}),function(o,l){const c=$t(o);c.onlineState=l;let h=!1;c.queries.forEach((u,d)=>{for(const m of d.Ra)m.ga(l)&&(h=!0)}),h&&Jh(c)}(n.eventManager,t),r.length&&n.nu.Q_(r),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function _b(i,t,e){const n=$t(i);n.sharedClientState.updateQueryState(t,"rejected",e);const r=n._u.get(t),s=r&&r.key;if(s){let o=new De(Lt.comparator);o=o.insert(s,ln.newNoDocument(s,Gt.min()));const l=se().add(s),c=new nl(Gt.min(),new Map,new De(Zt),o,l);await rg(n,c),n.ou=n.ou.remove(s),n._u.delete(t),eu(n)}else await lh(n.localStore,t,!1).then(()=>uh(n,t,e)).catch(ys)}async function vb(i,t){const e=$t(i),n=t.batch.batchId;try{const r=await Aw(e.localStore,t);og(e,n,null),sg(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await xo(e,r)}catch(r){await ys(r)}}async function yb(i,t,e){const n=$t(i);try{const r=await function(o,l){const c=$t(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let u;return c.mutationQueue.lookupMutationBatch(h,l).next(d=>(_e(d!==null,37113),u=d.keys(),c.mutationQueue.removeMutationBatch(h,d))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,u,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,u)).next(()=>c.localDocuments.getDocuments(h,u))})}(n.localStore,t);og(n,t,e),sg(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await xo(n,r)}catch(r){await ys(r)}}function sg(i,t){(i.cu.get(t)||[]).forEach(e=>{e.resolve()}),i.cu.delete(t)}function og(i,t,e){const n=$t(i);let r=n.uu[n.currentUser.toKey()];if(r){const s=r.get(t);s&&(e?s.reject(e):s.resolve(),r=r.remove(t)),n.uu[n.currentUser.toKey()]=r}}function uh(i,t,e=null){i.sharedClientState.removeLocalQueryTarget(t);for(const n of i.iu.get(t))i.ru.delete(n),e&&i.nu.Tu(n,e);i.iu.delete(t),i.isPrimaryClient&&i.au.Ur(t).forEach(n=>{i.au.containsKey(n)||ag(i,n)})}function ag(i,t){i.su.delete(t.path.canonicalString());const e=i.ou.get(t);e!==null&&($h(i.remoteStore,e),i.ou=i.ou.remove(t),i._u.delete(e),eu(i))}function Xf(i,t,e){for(const n of e)n instanceof eg?(i.au.addReference(n.key,t),Eb(i,n)):n instanceof ng?(xt(tu,"Document no longer in limbo: "+n.key),i.au.removeReference(n.key,t),i.au.containsKey(n.key)||ag(i,n.key)):Bt(19791,{Iu:n})}function Eb(i,t){const e=t.key,n=e.path.canonicalString();i.ou.get(e)||i.su.has(n)||(xt(tu,"New document in limbo: "+e),i.su.add(n),eu(i))}function eu(i){for(;i.su.size>0&&i.ou.size<i.maxConcurrentLimboResolutions;){const t=i.su.values().next().value;i.su.delete(t);const e=new Lt(Pe.fromString(t)),n=i.lu.next();i._u.set(n,new cb(e)),i.ou=i.ou.insert(e,n),Ym(i.remoteStore,new Di(jn(ym(e.path)),n,"TargetPurposeLimboResolution",ja.le))}}async function xo(i,t,e){const n=$t(i),r=[],s=[],o=[];n.ru.isEmpty()||(n.ru.forEach((l,c)=>{o.push(n.Pu(c,t,e).then(h=>{var u;if((h||e)&&n.isPrimaryClient){const d=h?!h.fromCache:(u=e==null?void 0:e.targetChanges.get(c.targetId))===null||u===void 0?void 0:u.current;n.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(h){r.push(h);const d=Xh.Ps(c.targetId,h);s.push(d)}}))}),await Promise.all(o),n.nu.Q_(r),await async function(c,h){const u=$t(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>J.forEach(h,m=>J.forEach(m.ls,_=>u.persistence.referenceDelegate.addReference(d,m.targetId,_)).next(()=>J.forEach(m.hs,_=>u.persistence.referenceDelegate.removeReference(d,m.targetId,_)))))}catch(d){if(!Es(d))throw d;xt(qh,"Failed to update sequence numbers: "+d)}for(const d of h){const m=d.targetId;if(!d.fromCache){const _=u.Ss.get(m),x=_.snapshotVersion,M=_.withLastLimboFreeSnapshotVersion(x);u.Ss=u.Ss.insert(m,M)}}}(n.localStore,s))}async function xb(i,t){const e=$t(i);if(!e.currentUser.isEqual(t)){xt(tu,"User change. New user:",t.toKey());const n=await Xm(e.localStore,t);e.currentUser=t,function(s,o){s.cu.forEach(l=>{l.forEach(c=>{c.reject(new It(st.CANCELLED,o))})}),s.cu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await xo(e,n.Ms)}}function Tb(i,t){const e=$t(i),n=e._u.get(t);if(n&&n.tu)return se().add(n.key);{let r=se();const s=e.iu.get(t);if(!s)return r;for(const o of s){const l=e.ru.get(o);r=r.unionWith(l.view.Wa)}return r}}function lg(i){const t=$t(i);return t.remoteStore.remoteSyncer.applyRemoteEvent=rg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Tb.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=_b.bind(null,t),t.nu.Q_=rb.bind(null,t.eventManager),t.nu.Tu=sb.bind(null,t.eventManager),t}function Sb(i){const t=$t(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=vb.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=yb.bind(null,t),t}class za{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=il(t.databaseInfo.databaseId),this.sharedClientState=this.Au(t),this.persistence=this.Ru(t),await this.persistence.start(),this.localStore=this.Vu(t),this.gcScheduler=this.mu(t,this.localStore),this.indexBackfillerScheduler=this.fu(t,this.localStore)}mu(t,e){return null}fu(t,e){return null}Vu(t){return Mw(this.persistence,new xw,t.initialUser,this.serializer)}Ru(t){return new Wm(Wh.Ei,this.serializer)}Au(t){return new Pw}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}za.provider={build:()=>new za};class Mb extends za{constructor(t){super(),this.cacheSizeBytes=t}mu(t,e){_e(this.persistence.referenceDelegate instanceof Ba,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new ow(n,t.asyncQueue,e)}Ru(t){const e=this.cacheSizeBytes!==void 0?vn.withCacheSize(this.cacheSizeBytes):vn.DEFAULT;return new Wm(n=>Ba.Ei(n,e),this.serializer)}}class dh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Wf(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=xb.bind(null,this.syncEngine),await Jw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new eb}()}createDatastore(t){const e=il(t.databaseInfo.databaseId),n=function(s){return new Fw(s)}(t.databaseInfo);return function(s,o,l,c){return new kw(s,o,l,c)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,r,s,o,l){return new Hw(n,r,s,o,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Wf(this.syncEngine,e,0),function(){return Vf.C()?new Vf:new Dw}())}createSyncEngine(t,e){return function(r,s,o,l,c,h,u){const d=new hb(r,s,o,l,c,h);return u&&(d.hu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const s=$t(r);xt(_r,"RemoteStore shutting down."),s.aa.add(5),await Eo(s),s.ca.shutdown(),s.la.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}dh.provider={build:()=>new dh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.pu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.pu(this.observer.error,t):_i("Uncaught Error in snapshot listener:",t.toString()))}yu(){this.muted=!0}pu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="FirestoreClient";class wb{constructor(t,e,n,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=an.UNAUTHENTICATED,this.clientId=nm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async o=>{xt($i,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(xt($i,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Zh(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function tc(i,t){i.asyncQueue.verifyOperationInProgress(),xt($i,"Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let n=e.initialUser;i.setCredentialChangeListener(async r=>{n.isEqual(r)||(await Xm(t.localStore,r),n=r)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function qf(i,t){i.asyncQueue.verifyOperationInProgress();const e=await bb(i);xt($i,"Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener(n=>kf(t.remoteStore,n)),i.setAppCheckTokenChangeListener((n,r)=>kf(t.remoteStore,r)),i._onlineComponents=t}async function bb(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){xt($i,"Using user provided OfflineComponentProvider");try{await tc(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===st.FAILED_PRECONDITION||r.code===st.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;ls("Error using user provided cache. Falling back to memory cache: "+e),await tc(i,new za)}}else xt($i,"Using default OfflineComponentProvider"),await tc(i,new Mb(void 0));return i._offlineComponents}async function cg(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(xt($i,"Using user provided OnlineComponentProvider"),await qf(i,i._uninitializedComponentsProvider._online)):(xt($i,"Using default OnlineComponentProvider"),await qf(i,new dh))),i._onlineComponents}function Rb(i){return cg(i).then(t=>t.syncEngine)}async function Cb(i){const t=await cg(i),e=t.eventManager;return e.onListen=ub.bind(null,t.syncEngine),e.onUnlisten=pb.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=db.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=mb.bind(null,t.syncEngine),e}function Ib(i,t,e={}){const n=new Vi;return i.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,h){const u=new Ab({next:m=>{u.yu(),o.enqueueAndForget(()=>ib(s,d)),m.fromCache&&c.source==="server"?h.reject(new It(st.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),d=new ob(l,u,{includeMetadataChanges:!0,Fa:!0});return nb(s,d)}(await Cb(i),i.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(i,t,e){if(!e)throw new It(st.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function Pb(i,t,e,n){if(t===!0&&n===!0)throw new It(st.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function jf(i){if(!Lt.isDocumentKey(i))throw new It(st.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Yf(i){if(Lt.isDocumentKey(i))throw new It(st.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function nu(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":Bt(12329,{type:typeof i})}function uo(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new It(st.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=nu(i);throw new It(st.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="firestore.googleapis.com",Kf=!0;class Qf{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new It(st.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dg,this.ssl=Kf}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Kf;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Gm;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<rw)throw new It(st.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Pb("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hg((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new It(st.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new It(st.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new It(st.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ol{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new It(st.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new It(st.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qf(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new LM;switch(n.type){case"firstParty":return new OM(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new It(st.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=$f.get(e);n&&(xt("ComponentProvider","Removing Datastore"),$f.delete(e),n.terminate())}(this),Promise.resolve()}}function Db(i,t,e,n={}){var r;i=uo(i,ol);const s=kp(t),o=i._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:i._getEmulatorOptions()}),c=`${t}:${e}`;s&&vS(`https://${c}`),o.host!==dg&&o.host!==c&&ls("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:c,ssl:s,emulatorOptions:n});if(!no(h,l)&&(i._setSettings(h),n.mockUserToken)){let u,d;if(typeof n.mockUserToken=="string")u=n.mockUserToken,d=an.MOCK_USER;else{u=cS(n.mockUserToken,(r=i._app)===null||r===void 0?void 0:r.options.projectId);const m=n.mockUserToken.sub||n.mockUserToken.user_id;if(!m)throw new It(st.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new an(m)}i._authCredentials=new NM(new tm(u,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new al(this.firestore,t,this._query)}}class In{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new In(this.firestore,t,this._key)}}class Bi extends al{constructor(t,e,n){super(t,e,ym(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new In(this.firestore,null,new Lt(t))}withConverter(t){return new Bi(this.firestore,t,this._path)}}function Lb(i,t,...e){if(i=io(i),ug("collection","path",t),i instanceof ol){const n=Pe.fromString(t,...e);return Yf(n),new Bi(i,null,n)}{if(!(i instanceof In||i instanceof Bi))throw new It(st.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Pe.fromString(t,...e));return Yf(n),new Bi(i.firestore,null,n)}}function Nb(i,t,...e){if(i=io(i),arguments.length===1&&(t=nm.newId()),ug("doc","path",t),i instanceof ol){const n=Pe.fromString(t,...e);return jf(n),new In(i,null,new Lt(n))}{if(!(i instanceof In||i instanceof Bi))throw new It(st.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Pe.fromString(t,...e));return jf(n),new In(i.firestore,i instanceof Bi?i.converter:null,new Lt(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="AsyncQueue";class Jf{constructor(t=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new $m(this,"async_queue_retry"),this.ju=()=>{const n=Jl();n&&xt(Zf,"Visibility state changed to "+n.visibilityState),this.y_.A_()},this.Hu=t;const e=Jl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ju(),this.Yu(t)}enterRestrictedMode(t){if(!this.$u){this.$u=!0,this.Gu=t||!1;const e=Jl();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.ju)}}enqueue(t){if(this.Ju(),this.$u)return new Promise(()=>{});const e=new Vi;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qu.push(t),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(t){if(!Es(t))throw t;xt(Zf,"Operation failed with retryable error: "+t)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(t){const e=this.Hu.then(()=>(this.Wu=!0,t().catch(n=>{throw this.Ku=n,this.Wu=!1,_i("INTERNAL UNHANDLED ERROR: ",tp(n)),n}).then(n=>(this.Wu=!1,n))));return this.Hu=e,e}enqueueAfterDelay(t,e,n){this.Ju(),this.zu.indexOf(t)>-1&&(e=0);const r=Qh.createAndSchedule(this,t,e,n,s=>this.Xu(s));return this.Uu.push(r),r}Ju(){this.Ku&&Bt(47125,{ec:tp(this.Ku)})}verifyOperationInProgress(){}async tc(){let t;do t=this.Hu,await t;while(t!==this.Hu)}nc(t){for(const e of this.Uu)if(e.timerId===t)return!0;return!1}rc(t){return this.tc().then(()=>{this.Uu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Uu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.tc()})}sc(t){this.zu.push(t)}Xu(t){const e=this.Uu.indexOf(t);this.Uu.splice(e,1)}}function tp(i){let t=i.message||"";return i.stack&&(t=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),t}class iu extends ol{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Jf,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Jf(t),this._firestoreClient=void 0,await t}}}function Ub(i,t){const e=typeof i=="object"?i:EM(),n=typeof i=="string"?i:Da,r=mM(e,"firestore").getImmediate({identifier:n});if(!r._initialized){const s=aS("firestore");s&&Db(r,...s)}return r}function fg(i){if(i._terminated)throw new It(st.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||Fb(i),i._firestoreClient}function Fb(i){var t,e,n;const r=i._freezeSettings(),s=function(l,c,h,u){return new ZM(l,c,h,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,hg(u.experimentalLongPollingOptions),u.useFetchStreams,u.isUsingEmulator)}(i._databaseId,((t=i._app)===null||t===void 0?void 0:t.options.appId)||"",i._persistenceKey,r);i._componentsProvider||!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=r.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(i._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),i._firestoreClient=new wb(i._authCredentials,i._appCheckCredentials,i._queue,s,i._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ms(Je.fromBase64String(t))}catch(e){throw new It(st.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ms(Je.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new It(st.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new It(st.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new It(st.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Zt(this._lat,t._lat)||Zt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,r){if(n.length!==r.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==r[s])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=/^__.*__$/;class Vb{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new xr(t,this.data,this.fieldMask,e,this.fieldTransforms):new vo(t,this.data,e,this.fieldTransforms)}}function pg(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Bt(40011,{oc:i})}}class ll{constructor(t,e,n,r,s,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,s===void 0&&this._c(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(t){return new ll(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.ac({path:n,cc:!1});return r.lc(t),r}hc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.ac({path:n,cc:!1});return r._c(),r}Pc(t){return this.ac({path:void 0,cc:!0})}Tc(t){return Ha(t,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}_c(){if(this.path)for(let t=0;t<this.path.length;t++)this.lc(this.path.get(t))}lc(t){if(t.length===0)throw this.Tc("Document fields must not be empty");if(pg(this.oc)&&Ob.test(t))throw this.Tc('Document fields cannot begin and end with "__"')}}class Bb{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||il(t)}dc(t,e,n,r=!1){return new ll({oc:t,methodName:e,Ec:n,path:Ze.emptyPath(),cc:!1,Ic:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kb(i){const t=i._freezeSettings(),e=il(i._databaseId);return new Bb(i._databaseId,!!t.ignoreUndefinedProperties,e)}function zb(i,t,e,n,r,s={}){const o=i.dc(s.merge||s.mergeFields?2:0,t,e,r);_g("Data must be an object, but it was:",o,n);const l=mg(n,o);let c,h;if(s.merge)c=new Vn(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const d of s.mergeFields){const m=Gb(t,d,e);if(!o.contains(m))throw new It(st.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Xb(u,m)||u.push(m)}c=new Vn(u),h=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,h=o.fieldTransforms;return new Vb(new Cn(l),c,h)}function Hb(i,t,e){return new ll({oc:3,Ec:t.settings.Ec,methodName:i._methodName,cc:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class lu extends su{constructor(t,e){super(t),this.Ac=e}_toFieldTransform(t){const e=Hb(this,t,!0),n=this.Ac.map(s=>cu(s,e)),r=new ds(n);return new AA(t.path,r)}isEqual(t){return t instanceof lu&&no(this.Ac,t.Ac)}}function cu(i,t){if(gg(i=io(i)))return _g("Unsupported field value:",t,i),mg(i,t);if(i instanceof su)return function(n,r){if(!pg(r.oc))throw r.Tc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Tc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.cc&&t.oc!==4)throw t.Tc("Nested arrays are not supported");return function(n,r){const s=[];let o=0;for(const l of n){let c=cu(l,r.Pc(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(i,t)}return function(n,r){if((n=io(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return TA(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ge.fromDate(n);return{timestampValue:Va(r.serializer,s)}}if(n instanceof Ge){const s=new Ge(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Va(r.serializer,s)}}if(n instanceof ou)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ms)return{bytesValue:Fm(r.serializer,n._byteString)};if(n instanceof In){const s=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw r.Tc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Hh(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof au)return function(o,l){return{mapValue:{fields:{[hm]:{stringValue:um},[La]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Tc("VectorValues must only contain numeric values.");return Bh(l.serializer,h)})}}}}}}(n,r);throw r.Tc(`Unsupported field value: ${nu(n)}`)}(i,t)}function mg(i,t){const e={};return rm(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):yr(i,(n,r)=>{const s=cu(r,t.uc(n));s!=null&&(e[n]=s)}),{mapValue:{fields:e}}}function gg(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ge||i instanceof ou||i instanceof ms||i instanceof In||i instanceof su||i instanceof au)}function _g(i,t,e){if(!gg(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const n=nu(e);throw n==="an object"?t.Tc(i+" a custom object"):t.Tc(i+" "+n)}}function Gb(i,t,e){if((t=io(t))instanceof ru)return t._internalPath;if(typeof t=="string")return vg(i,t);throw Ha("Field path arguments must be of type string or ",i,!1,void 0,e)}const Wb=new RegExp("[~\\*/\\[\\]]");function vg(i,t,e){if(t.search(Wb)>=0)throw Ha(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,e);try{return new ru(...t.split("."))._internalPath}catch{throw Ha(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,e)}}function Ha(i,t,e,n,r){const s=n&&!n.isEmpty(),o=r!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${n}`),o&&(c+=` in document ${r}`),c+=")"),new It(st.INVALID_ARGUMENT,l+i+c)}function Xb(i,t){return i.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new In(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new qb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Eg("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class qb extends yg{data(){return super.data()}}function Eg(i,t){return typeof t=="string"?vg(i,t):t instanceof ru?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new It(st.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jb{convertValue(t,e="none"){switch(Xi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ue(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Wi(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw Bt(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return yr(t,(r,s)=>{n[r]=this.convertValue(s,e)}),n}convertVectorValue(t){var e,n,r;const s=(r=(n=(e=t.fields)===null||e===void 0?void 0:e[La].arrayValue)===null||n===void 0?void 0:n.values)===null||r===void 0?void 0:r.map(o=>Ue(o.doubleValue));return new au(s)}convertGeoPoint(t){return new ou(Ue(t.latitude),Ue(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ka(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(ao(t));default:return null}}convertTimestamp(t){const e=Gi(t);return new Ge(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Pe.fromString(t);_e(Hm(n),9688,{name:t});const r=new lo(n.get(1),n.get(3)),s=new Lt(n.popFirst(5));return r.isEqual(e)||_i(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(i,t,e){let n;return n=i?e&&(e.merge||e.mergeFields)?i.toFirestore(t,e):i.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Kb extends yg{constructor(t,e,n,r,s,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Sa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Eg("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Sa extends Kb{data(t={}){return super.data(t)}}class Qb{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new la(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Sa(this._firestore,this._userDataWriter,n.key,n,new la(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new It(st.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(l=>{const c=new Sa(r._firestore,r._userDataWriter,l.doc.key,l.doc,new la(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new Sa(r._firestore,r._userDataWriter,l.doc.key,l.doc,new la(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,u=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),u=o.indexOf(l.doc.key)),{type:Zb(l.type),doc:c,oldIndex:h,newIndex:u}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Zb(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Bt(61501,{type:i})}}class Jb extends jb{constructor(t){super(),this.firestore=t}convertBytes(t){return new ms(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new In(this.firestore,null,e)}}function tR(i){i=uo(i,al);const t=uo(i.firestore,iu),e=fg(t),n=new Jb(t);return $b(i._query),Ib(e,i._query).then(r=>new Qb(t,n,i,r))}function eR(i,t,e){i=uo(i,In);const n=uo(i.firestore,iu),r=Yb(i.converter,t,e);return nR(n,[zb(kb(n),"setDoc",i._key,r,i.converter!==null,e).toMutation(i._key,mi.none())])}function nR(i,t){return function(n,r){const s=new Vi;return n.asyncQueue.enqueueAndForget(async()=>gb(await Rb(n),r,s)),s.promise}(fg(i),t)}function iR(...i){return new lu("arrayUnion",i)}(function(t,e=!0){(function(r){vs=r})(yM),Ia(new ro("firestore",(n,{instanceIdentifier:r,options:s})=>{const o=n.getProvider("app").getImmediate(),l=new iu(new UM(n.getProvider("auth-internal")),new VM(o,n.getProvider("app-check-internal")),function(h,u){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new It(st.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lo(h.options.projectId,u)}(o,r),o);return s=Object.assign({useFetchStreams:e},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),es(sf,of,t),es(sf,of,"esm2017")})();const rR="AIzaSyAqp3HdlJ4yCpc-do_IDLprQmS4YUjinbk",sR={apiKey:rR,authDomain:"mental-reload-95d66.firebaseapp.com",projectId:"mental-reload-95d66",storageBucket:"mental-reload-95d66.firebasestorage.app",messagingSenderId:"634955541388",appId:"1:634955541388:web:64a9e7fc037ead46f1c4a9"},oR=Wp(sR),xg=Ub(oR);let Tg,Ma=[];async function Sg(){const i=Lb(xg,"reload");Tg=(await tR(i)).docs[0].data(),Mg()}async function aR(i,t,e,n,r,s,o){let l={name:i,volume:t,songNum:e,earthSpeed:n,earthRotationSpeed:r,lightIntensity:s,rotationDirection:o};const c=Nb(xg,"reload","presets");try{await eR(c,{presets:iR(l)},{merge:!0}),console.log("database updated",l)}catch(h){console.log("det gik mindre godt",h)}Mg()}async function Mg(){return Ma=Tg.presets,Ma.sort((i,t)=>i.name>t.name?1:-1),Ma}const lR=document.querySelector(".hamburger-wrapper"),cR=document.querySelector(".add-button"),ep=document.querySelector(".presets-container"),hR=document.getElementById("saveButton"),uR=document.getElementById("preset-input"),{scene:fh,camera:Ga,renderer:Ag,labelRenderer:wg,controls:dR,animateParams:Qr}=LT(),bg=Qg();$T(Qr,bg,Zg);let ca=!0;function hu(){ca=!ca,Kg(),DT(fh,ca),KT(ca)}function Rg(){ep.innerHTML="",Ma.forEach(i=>{const t=document.createElement("div");t.addEventListener("click",()=>{jT(i,ph,Qr),hu()}),t.className="preset",t.innerHTML=`<p>${i.name}</p>`,ep.appendChild(t)})}window.addEventListener("resize",()=>{Ga.aspect=window.innerWidth/window.innerHeight,Ga.updateProjectionMatrix(),Ag.setSize(window.innerWidth,window.innerHeight),wg.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("DOMContentLoaded",async()=>{await Sg(),Rg(),console.log("loaded")});hR.addEventListener("click",async()=>{if(Aa.length>0){const i=Xs?Xs.num:1;await aR(Aa,bg.volume,i,Qr.earthSpeed,Qr.earthRotationSpeed,Qr.lightIntensity,Qr.aroundSunDirection),await Sg(),uR.value="",Rg(),ip(),hu()}else alert("Please enter a valid preset name.")});lR.addEventListener("click",()=>{hu()});cR.addEventListener("click",async()=>{ip()});function Cg(){NT(),dR.update(),Ag.render(fh,Ga),wg.render(fh,Ga),window.requestAnimationFrame(Cg)}Cg();
