(this["webpackJsonpflip-card-template"]=this["webpackJsonpflip-card-template"]||[]).push([[0],{28:function(t,e,n){t.exports=n(57)},30:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=(n(30),n(19)),o=n(13),c=n(15),u=n(7),s=n(17),f=n.n(s),h=n(18),d=function(t,e,n){for(var a=[],r=t.width/n,i=t.height/e,o=0;o<e;o++)for(var c=0;c<n;c++)a.push(new h.a(t,c*r,o*i,r,i));return a},p=function(t,e,n,a){var s,h,p,v,l,w,g,b,m,x,j,O,y,C,M,F,R,k,z,P,B,D,E,I,J,L,T,_,q,A,H,S,U,V,W,G,K;return r.a.async((function(N){for(;;)switch(N.prev=N.next){case 0:return 812/375,e<=n/(812/375)?(p=s=300,h=s/e*n):(p=(h=649.6)/(812/375),s=h/n*e),N.next=4,r.a.awrap(Object(u.a)(t,"/image-puzzle/dating-bg.jpg"));case 4:return v=N.sent,l=f()(t),N.next=8,r.a.awrap(Object(u.a)(t,"/image-puzzle/tingme.jpg"));case 8:for(w=N.sent,g=d(w,3,3),5,x=(s-p)/2,j=(h-3*(m=(p-2*(b=.05*p)-10)/3)-10)/2,O=[],y=0;y<9;y++)C=y%3,M=Math.floor(y/3),O.push({x:x+b+C*(m+5),y:j+M*(m+5),width:m,height:m});for(F=[null],R=!1,k=1;k<9;k++)F.push(k);return z=function(t){var e;if(!R)return t-3>=0&&!F[t-3]?e=t-3:t+3<9&&!F[t+3]?e=t+3:t%3>0&&!F[t-1]?e=t-1:t%3<2&&!F[t+1]&&(e=t+1),void 0!==e&&(F[e]=F[t],F[t]=null),e},function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=0;e<t;){var n=Math.floor(9*Math.random()),a=z(n);void 0!==a&&e++}}(30),P=Object(i.a)(s,h,e,n),B=Object(o.a)(t),D=new c.a(a),E=[],I=[],J=-1,_=function(t){var e=z(t);void 0!==e&&((J=e)-t===3?(L=0,T=-(m+5)):J===t-3?(L=0,T=m+5):J-t===1?(T=0,L=-(m+5)):J===t-1&&(T=0,L=m+5))},D.addEventListener("touchStart",(function(t,e){E[0]=t*devicePixelRatio,E[1]=e*devicePixelRatio,P.unprojectVector2(I,E);for(var n=I[0],a=I[1],r=0;r<O.length;r++){var i=O[r];if(n>=i.x&&n<=i.x+i.width&&a>=i.y&&a<=i.y+i.height){_(r);break}}})),q=!0,H=function(){q=!1,D.cleanup()},S=function(){A&&A()},25,.1,U=0,V=function(t){R&&(U=Math.min(U+2.5*t,1)),Math.abs(L-0)<.1&&(L=0),Math.abs(T-0)<.1&&(T=0),0!==L&&(L+=25*(0-L)*t),0!==T&&(T+=25*(0-T)*t),0===L&&0===T&&(J=!1)},t.clearColor(1,.7,.7,1),W=function(){t.clear(t.COLOR_BUFFER_BIT),B.setProjection(P.combined),B.begin(),B.draw(v,x,0,p,h);for(var e=0;e<9;e++){var n=F[e];if(!n){if(!R)continue;n=0}var a=g[n],r=O[e],i=r.x,o=r.y,c=m;R&&(c=m+5*U),J===e&&(i+=L,o+=T),B.setColor(0,0,0,.5),B.draw(l,i+3,o+3,c,c),B.setColor(1,1,1,1),a.draw(B,i,o,c,c)}if(B.end(),!R){R=!0;for(var u=1;u<9;u++)if(F[u]!==u){R=!1;break}R&&S()}},.016,G=0,K=Date.now(),function t(){var e=(Date.now()-K)/1e3;if((G+=e)>=.016){for(;G>=.016;)V(.016),G-=.016;W()}K=Date.now(),q&&requestAnimationFrame(t)}(),N.abrupt("return",{stop:H,setOnFinish:function(t){return A=t}});case 46:case"end":return N.stop()}}))};var v=document.getElementById("mainCanvas");!function(t){var e=window.devicePixelRatio||1,n=t.clientWidth*e,a=t.clientHeight*e;t.width===n&&t.height===a||(t.width=n,t.height=a)}(v);var l,w=v.getContext("webgl",{antialias:!0});!function t(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return l&&l.stop(),e.next=3,r.a.awrap(p(w,v.width,v.height,v));case 3:(l=e.sent).setOnFinish((function(){return setTimeout(t,3e3)}));case 5:case"end":return e.stop()}}))}()}},[[28,1,2]]]);
//# sourceMappingURL=main.82cbcd4e.chunk.js.map