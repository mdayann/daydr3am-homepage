(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[400],{4651:function(a,b,c){"use strict";c.d(b,{Ee:function(){return m}});var d=c(6052),e=c(5031),f=c(7294),g=c(7375);function h(){return(h=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function i(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}var j=["htmlWidth","htmlHeight","alt"],k=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],l=f.forwardRef(function(a,b){var c=a.htmlWidth,d=a.htmlHeight,e=a.alt,g=i(a,j);return f.createElement("img",h({width:c,height:d,ref:b,alt:e},g))}),m=(0,d.Gp)(function(a,b){var c,j,m,n,o,p,q,r,s,t,u,v,w,x,y,z=a.fallbackSrc,A=a.fallback,B=a.src,C=a.srcSet,D=a.align,E=a.fit,F=a.loading,G=a.ignoreFallback,H=a.crossOrigin,I=i(a,k),J=null!=F||G|| void 0===z&& void 0===A,K=(j=(c=h({},a,{ignoreFallback:J})).loading,m=c.src,n=c.srcSet,o=c.onLoad,p=c.onError,q=c.crossOrigin,r=c.sizes,s=c.ignoreFallback,t=(0,f.useState)("pending"),u=t[0],v=t[1],(0,f.useEffect)(function(){v(m?"loading":"pending")},[m]),w=(0,f.useRef)(),x=(0,f.useCallback)(function(){if(m){y();var a=new Image();a.src=m,q&&(a.crossOrigin=q),n&&(a.srcset=n),r&&(a.sizes=r),j&&(a.loading=j),a.onload=function(a){y(),v("loaded"),null==o||o(a)},a.onerror=function(a){y(),v("failed"),null==p||p(a)},w.current=a}},[m,q,n,r,o,p,j]),y=function(){w.current&&(w.current.onload=null,w.current.onerror=null,w.current=null)},(0,g.Gw)(function(){if(!s)return"loading"===u&&x(),function(){y()}},[u,x,s]),s?"loaded":u),L=h({ref:b,objectFit:E,objectPosition:D},J?I:(0,e.CE)(I,["onError","onLoad"]));return"loaded"!==K?A||f.createElement(d.m$.img,h({as:l,className:"chakra-image__placeholder",src:z},L)):f.createElement(d.m$.img,h({as:l,src:B,srcSet:C,crossOrigin:H,loading:F,className:"chakra-image"},L))});e.Ts&&(m.displayName="Image")},2709:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/modetokyo",function(){return c(5116)}])},603:function(a,b,c){"use strict";c.d(b,{P4:function(){return i},Et:function(){return j},Pg:function(){return k}});var d=c(5893),e=c(1664),f=c(5675),g=c(8527),h=c(917),i=function(a){var b=a.children,c=a.href,e=a.title,h=a.thumbnail;return(0,d.jsx)(g.xu,{w:"100%",textAlign:"center",children:(0,d.jsxs)(g.fG,{cursor:"pointer",children:[(0,d.jsx)(f.default,{src:h,alt:e,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,d.jsx)(g.AB,{href:c,target:"_blank",children:(0,d.jsx)(g.xv,{mt:2,children:e})}),(0,d.jsx)(g.xv,{fontSize:14,children:b})]})})},j=function(a){var b=a.children,c=a.id,h=a.title,i=a.thumbnail;return(0,d.jsx)(g.xu,{w:"100%",textAlign:"center",children:(0,d.jsx)(e.default,{href:"/works/".concat(c),scroll:!1,children:(0,d.jsxs)(g.fG,{cursor:"pointer",children:[(0,d.jsx)(f.default,{src:i,alt:h,className:"grid-item-thumbnail",placeholder:"blur"}),(0,d.jsx)(g.AB,{href:"/works/".concat(c),children:(0,d.jsx)(g.xv,{mt:2,fontSize:20,children:h})}),(0,d.jsx)(g.xv,{fontSize:14,children:b})]})})})},k=function(){return(0,d.jsx)(h.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},2857:function(a,b,c){"use strict";var d=c(5893),e=c(9235),f=c(9008),g=c(603),h={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};b.Z=function(a){var b=a.children,c=a.title;return(0,d.jsx)(e.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:h,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsxs)(f.default,{children:[(0,d.jsxs)("title",{children:[c," - Muhammad Dayan"]}),(0,d.jsx)("meta",{name:"twitter:title",content:c}),(0,d.jsx)("meta",{property:"og:title",content:c})]}),b,(0,d.jsx)(g.Pg,{})]})})}},3562:function(a,b,c){"use strict";var d=c(5934);function e(){var a,b,c=(a=["\n  text-align: justify;\n  text-indent: 1em;\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return e=function(){return c},c}var f=d.Z.p(e());b.Z=f},3922:function(a,b,c){"use strict";c.d(b,{Dx:function(){return i},WZ:function(){return j},h_:function(){return k}});var d=c(5893),e=c(1664),f=c(8527),g=c(4651),h=c(9876),i=function(a){var b=a.children;return(0,d.jsxs)(f.xu,{children:[(0,d.jsx)(e.default,{href:"/works",children:(0,d.jsx)(f.rU,{children:"Works"})}),(0,d.jsxs)("span",{children:[" ",(0,d.jsx)(h.XC,{})," "]}),(0,d.jsx)(f.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:b})]})},j=function(a){var b=a.src,c=a.alt;return(0,d.jsx)(g.Ee,{borderRadius:"lg",w:"full",src:b,alt:c,mb:4})},k=function(a){var b=a.children;return(0,d.jsx)(f.Ct,{colorScheme:"green",mr:2,children:b})}},5116:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return j}});var d=c(5893),e=c(8527),f=c(2857),g=c(9876),h=c(3922),i=c(3562),j=!0;b.default=function(){return(0,d.jsx)(f.Z,{title:"mode.tokyo",children:(0,d.jsxs)(e.W2,{children:[(0,d.jsxs)(h.Dx,{children:["mode.tokyo ",(0,d.jsx)(e.Ct,{children:"2016"})]}),(0,d.jsx)(i.Z,{children:"The mode magazine for understanding to personally enjoy Japan."}),(0,d.jsxs)(i.Z,{children:["It is one of the projects launched at"," ",(0,d.jsxs)(e.rU,{href:"https://innolab.jp/",target:"_blank",children:["Open Innovation Lab (電通イノラボ) ",(0,d.jsx)(g.h0,{mx:"2px"})]}),", aiming to visualize the impact of media contents on the visit of foreign high-intellect class to Japan, who are highly interested in Japanese culture. I joined the project to build its mobile app for iOS where you can read free articles of the magazine."]}),(0,d.jsx)(i.Z,{children:"電子版としてiOSアプリを担当。日英仏対応。 きゅんくんやラブリーサマーちゃんなどを誌面で取り上げている。 本雑誌はISIDイノラボ様と角川アスキー総合研究所様の共同プロジェクトです。"}),(0,d.jsxs)(e.aV,{ml:4,my:4,children:[(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(h.h_,{children:"Platform"}),(0,d.jsx)("span",{children:"iOS"})]}),(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(h.h_,{children:"Stack"}),(0,d.jsx)("span",{children:"Swift"})]}),(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(h.h_,{children:"Press release"}),(0,d.jsxs)(e.rU,{href:"https://www.isid.co.jp/english/news/release/2015/pdf/20150930_ModeTokyo.pdf",children:["ISID Starts a Research Project to Visualize Impact of Media Contents on Visit of Foreign High-Intellect Class to Japan"," ",(0,d.jsx)(g.h0,{mx:"2px"})]})]}),(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(h.h_,{children:"Press release"}),(0,d.jsxs)(e.rU,{href:"https://innolab.jp/news/achievement/335",children:["メディアコンテンツが訪日行動に与える影響を可視化する研究プロジェクトを始動"," ",(0,d.jsx)(g.h0,{mx:"2px"})]})]})]}),(0,d.jsx)(h.WZ,{src:"/images/works/modetokyo_eyecatch.png",alt:"mode.tokyo"}),(0,d.jsxs)(e.MI,{columns:2,gap:2,children:[(0,d.jsx)(h.WZ,{src:"/images/works/modetokyo_01.png",alt:"mode.tokyo"}),(0,d.jsx)(h.WZ,{src:"/images/works/modetokyo_02.png",alt:"mode.tokyo"})]}),(0,d.jsx)(h.WZ,{src:"/images/works/modetokyo_03.jpg",alt:"mode.tokyo"})]})})}}},function(a){a.O(0,[774,888,179],function(){return a(a.s=2709)}),_N_E=a.O()}])