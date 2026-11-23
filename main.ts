import{mkdirSync as M,readdirSync as R,readFileSync as F,writeFileSync as W}from'node:fs';
const T='01234567........888888898889888.888.............abba0...........9c..............33d3',I='01400000002200',O='00011223210120',U='01102233110001';
function run(p,q){
let n=p.length,D=new Int32Array(256),s=0,C=new Int32Array(64),c=0,Y=new Int32Array(256),o=new Uint8Array(65536),l=0,i=0,pc=0,t=0;
const d=e=>({o:o.slice(0,l),e});
for(;;){
if(t===1e6)return d(10);
if(pc<0||pc>=n)return d(9);
let op=p[pc],h=T.charCodeAt(op);
if(op>83||h===46)return d(5);
let k=h<=57?h-48:h-87,im=+I[k],po=+O[k],pu=+U[k];
if(pc+im>=n)return d(9);
t++;let nx=pc+1+im;
if(s<po)return d(2);
if(s-po+pu>256)return d(3);
pc=nx;
switch(op){
case 0:return d(0);
case 1:D[s++]=(p[nx-1]<<24)>>24;break;
case 2:D[s++]=p[nx-4]|p[nx-3]<<8|p[nx-2]<<16|p[nx-1]<<24;break;
case 3:s--;break;
case 4:D[s]=D[s-1];s++;break;
case 5:{let x=D[s-1];D[s-1]=D[s-2];D[s-2]=x;break;}
case 6:D[s]=D[s-2];s++;break;
case 7:{let a=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=a;break;}
case 23:D[s-1]=-D[s-1]|0;break;
case 27:D[s-1]=~D[s-1];break;
case 48:case 49:case 50:{let r=((p[nx-2]|p[nx-1]<<8)<<16)>>16,x=1;if(op!==48){x=D[--s];x=op===49?x===0:x!==0;}if(x)pc=nx+r;break;}
case 51:if(c===64)return d(7);C[c++]=nx;pc=p[nx-2]|p[nx-1]<<8;break;
case 52:if(!c)return d(8);pc=C[--c];break;
case 64:{let a=D[s-1];if(a<0||a>255)return d(6);D[s-1]=Y[a];break;}
case 65:{let a=D[s-1];if(a<0||a>255)return d(6);Y[a]=D[s-2];s-=2;break;}
case 80:{let g=''+D[s-1];if(l+g.length>65536)return d(11);s--;for(let k=0;k<g.length;k++)o[l++]=g.charCodeAt(k);break;}
case 81:if(l>=65536)return d(11);o[l++]=D[--s]&255;break;
case 82:D[s++]=i<q.length?q[i++]:-1;break;
case 83:return d(D[--s]&255);
default:{
let b=D[s-1],a=D[s-2],r;
if(op<19)r=op===16?(a+b)|0:op===17?(a-b)|0:Math.imul(a,b);
else if(op<23){if(!b)return d(4);r=op===19?a===-2147483648&&b===-1?a:(a/b)|0:op===20?b===-1?0:a%b|0:op===21?Math.floor((a>>>0)/(b>>>0))|0:(a>>>0)%(b>>>0)|0;}
else if(op<27)r=op===24?a&b:op===25?a|b:a^b;
else if(op<31)r=op===28?a<<(b&31):op===29?a>>(b&31):(a>>>(b&31))|0;
else r=op===32?a===b?1:0:op===33?a<b?1:0:(a>>>0)<(b>>>0)?1:0;
s-=2;D[s++]=r;
}}}
}
const A=process.env.MAKEFUN_INPUT_DIR||'/input',B=process.env.MAKEFUN_OUTPUT_DIR||'/output';
for(let id of R(A).sort()){let r=run(F(A+'/'+id+'/program.bin'),F(A+'/'+id+'/input.bin'));M(B+'/'+id,{recursive:true});W(B+'/'+id+'/stdout.bin',r.o);W(B+'/'+id+'/exit.txt',r.e+'\n');}
