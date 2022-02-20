(this["webpackJsonpsvg-map-animations"]=this["webpackJsonpsvg-map-animations"]||[]).push([[13],{106:function(t,e,n){"use strict";var r,a=n(103),i=n(112),o=n(229),c=Object(i.a)(o.a)(r||(r=Object(a.a)(["\n  position: relative;\n  @supports (aspect-ratio: 1/1) {\n    aspect-ratio: calc(",');\n  }\n  > :first-child {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n  }\n  > img {\n    height: auto;\n  }\n  ::before {\n    content: "";\n    display: block;\n    width: 100%;\n    @supports not (aspect-ratio: 1/1) {\n      height: 0;\n      padding-bottom: calc(100% / (',"));\n    }\n    @supports (aspect-ratio: 1/1) {\n      aspect-ratio: calc(",");\n    }\n  }\n"])),(function(t){return t.ratio}),(function(t){return t.ratio}),(function(t){return t.ratio}));c.defaultProps={ratio:"1/1"},e.a=c},108:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(114),a=n(118);var i=n(116);function o(t){return function(t){var e=t.props,n=t.name,i=t.defaultTheme,o=Object(a.a)(i);return Object(r.a)({theme:o,name:n,props:e})}({props:t.props,name:t.name,defaultTheme:i.a})}},111:function(t,e,n){"use strict";var r=n(205);e.a=r.a},114:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(13);function a(t){var e=t.theme,n=t.name,a=t.props;if(!e||!e.components||!e.components[n]||!e.components[n].defaultProps)return a;var i,o=Object(r.a)({},a),c=e.components[n].defaultProps;for(i in c)void 0===o[i]&&(o[i]=c[i]);return o}},117:function(t,e,n){"use strict";var r=n(19),a=n(11),i=n(103),o=n(0),c=n(41),u=n(132),s=n(28);var l,p,d=n(112),f=n(229),h=n(121),b=n(218),j=n(159),m=n(133),g=n(4),v=Object(d.a)(f.a)(l||(l=Object(i.a)(["\n  cursor: pointer;\n  height: 0.7rem;\n  width: 0.7rem;\n  border-radius: 50%;\n  border: 1px solid #333;\n  ","\n"])),(function(t){return t.isActive&&Object(h.c)(p||(p=Object(i.a)(["\n      border-color: #a01f26;\n      background-color: #a01f26;\n      outline: 1px solid #a01f26;\n      outline-offset: 0.45rem;\n    "])))})),O=Object(b.a)(f.a),x=Object(o.forwardRef)((function(t,e){var n=t.animationSpeed,i=void 0===n?.35:n,l=t.indicatorSxProps,p=t.centerMode,d=t.sx,h=t.outerSx,b=t.gap,m=void 0===b?16:b,x=t.render,y=Object(o.useState)(t.speed),w=Object(a.a)(y,2),S=w[0],M=w[1],k=Object(o.useState)(1),T=Object(a.a)(k,2),C=(T[0],T[1]),B=function(t,e){var n,r,i=e.size,l=Object(o.useRef)([].concat(Object(c.a)(t),Object(c.a)(o.Children.map(t,(function(t,e){return Object(o.cloneElement)(t,{key:"cloned__".concat(e)})}))))),p=Object(o.useState)((function(){return l.current.slice(0,i)})),d=Object(a.a)(p,2),f=d[0],h=d[1],b=Object(o.useState)(i-1),j=Object(a.a)(b,2),m=j[0],g=j[1],v=Object(o.useState)("next"),O=Object(a.a)(v,2),x=O[0],y=O[1],w=Object(o.useMemo)((function(){var e=m-(i-1)/2;return e<0&&(e+=t.length),e>=t.length&&(e-=t.length),e}),[m,i,t.length]),S=Object(o.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=(m+t)%l.current.length,n=Object(u.a)(f,(function(e){Object(s.range)(t).forEach((function(){return e.shift()})),Object(s.range)(t).forEach((function(t){var n=(m+t+1)%l.current.length;e.push(l.current[n])}))}));y("next"),g(e),h(n)}),[f,m]),M=Object(o.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=m-t;e<0&&(e+=l.current.length);var n=m-i,r=Object(u.a)(f,(function(e){Object(s.range)(t).forEach((function(){return e.pop()})),Object(s.range)(t).forEach((function(){--n<0&&(n+=l.current.length),e.unshift(l.current[n])}))}));y("prev"),g(e),h(r)}),[m,i,f]);return[f,M,S,{current:w,actualCurrent:(n=w-1,r=i,(n%r+r)%r),direction:x,total:t.length}]}(o.Children.toArray(t.children),{size:t.slidesToShow+2}),E=Object(a.a)(B,4),z=E[0],R=E[1],W=E[2],P=E[3],I=P.current,N=P.direction,A=P.total;Object(o.useEffect)((function(){}),[I]),Object(o.useImperativeHandle)(e,(function(){return{next:W,prev:R}}));var J=Object(o.useMemo)((function(){return Math.round((t.slidesToShow+1)/2)}),[t.slidesToShow]),q=Object(o.useRef)();Object(o.useEffect)((function(){M(t.speed)}),[t.speed]),Object(o.useEffect)((function(){return S?q.current=setInterval((function(){return W()}),S):(q.current&&clearInterval(q.current),q.current=void 0),function(){q.current&&clearInterval(q.current)}}),[S,W]);var V=Object(o.useMemo)((function(){var e=m*(t.slidesToShow-1);return(1*t.size.width-e)/(t.slidesToShow+(p?1:0))}),[t.slidesToShow,t.size,m,p]),_=Object(o.useCallback)((function(t){return!!p&&t===J}),[p,J]),D=Object(o.useMemo)((function(){return{initial:{opacity:0,x:"prev"===N?"-200%":"200%",flex:0},animate:function(e){var n=e.index;return{opacity:0===n||n===t.slidesToShow+1?0:1,x:0,flex:_(n)?2:1}},exit:{opacity:0,x:"prev"===N?"200%":"-200%",flex:0}}}),[N,_,t.slidesToShow]),F=Object(o.useMemo)((function(){return{initial:{width:0},animate:function(t){var e=t.index;return{width:V,scale:_(e)?2:1}},exit:{width:0}}}),[_,V]),G=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(I!==e){var r=e;n&&I>=e&&(r+=t.slidesToShow),M(0),I<r?(C(r-I),W(r-I),setTimeout((function(){M(t.speed),C(1)}),(r-I+1)*(null!==i&&void 0!==i?i:550))):(C(I-r),R(I-r),setTimeout((function(){M(t.speed),C(1)}),(I-r+1)*(null!==i&&void 0!==i?i:550)))}};return Object(g.jsxs)(f.a,{sx:h,children:[Object(g.jsx)(f.a,{sx:Object(r.a)({display:"flex",alignItems:"center",gap:"".concat(m,"px"),ml:"-".concat(V+m,"px"),mr:"-".concat(V+m,"px")},d),children:Object(g.jsxs)(j.a,{initial:!1,children:[z.map((function(t,e){return Object(g.jsx)(O,{layout:!0,transition:{duration:i},variants:D,initial:"initial",animate:"animate",exit:"exit",style:{originX:.5,originY:.5},sx:{display:"flex",justifyContent:"center"},custom:{index:e},className:e===J?"center":"",children:Object(g.jsx)(O,{layout:!0,variants:F,transition:{duration:i},custom:{index:e},style:{width:V},children:Object(o.cloneElement)(t,{onClick:1*t.props["data-index"]===J?t.props.onClick:function(){G(1*t.props["data-index"],!0)}})})},"".concat(t.key))})),null===x||void 0===x?void 0:x(P)]})}),Object(g.jsx)(f.a,{sx:l,children:Object(g.jsx)(f.a,{sx:{display:"grid",gridTemplateColumns:"repeat(".concat(A,",1fr)"),gridGap:"2rem"},children:Object(s.range)(A).map((function(t){return Object(g.jsx)(v,{isActive:t===I,onClick:function(){G(t)}})}))})})]})})),y=Object(o.forwardRef)((function(t,e){return Object(g.jsx)(m.SizeMe,{children:function(n){var a=n.size;return Object(g.jsx)(x,Object(r.a)({ref:e,size:a},t))}})}));e.a=y},123:function(t,e,n){"use strict";function r(t,e,n){var r={};return Object.keys(t).forEach((function(a){r[a]=t[a].reduce((function(t,r){return r&&(n&&n[r]&&t.push(n[r]),t.push(e(r))),t}),[]).join(" ")})),r}n.d(e,"a",(function(){return r}))},124:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(122),a={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function i(t,e){return a[e]||"".concat(r.a.generate(t),"-").concat(e)}},125:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(124);function a(t,e){var n={};return e.forEach((function(e){n[e]=Object(r.a)(t,e)})),n}},126:function(t,e,n){"use strict";var r,a=n(103),i=n(112),o=n(134),c=(n(72),Object(i.a)(o.a)(r||(r=Object(a.a)(["\n  background: linear-gradient(\n    to right,\n    #d3af76 0%,\n    #a98843 19.65%,\n    #eae58b 43.1%,\n    #ba9845 64.84%,\n    #9a7d2d 81.6%,\n    #bd9d53 100%\n  );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.75));\n  font-size: 2.8em;\n  @media only screen and(max-width: 425px) {\n    font-size: 28px;\n  } ;\n"]))));e.a=c},134:function(t,e,n){"use strict";var r=n(40),a=n(13),i=n(0),o=(n(104),n(113)),c=n(209),u=n(123),s=n(112),l=n(108),p=n(111),d=n(124),f=n(125);function h(t){return Object(d.a)("MuiTypography",t)}Object(f.a)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var b=n(4),j=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],m=Object(s.a)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,n.variant&&e[n.variant],"inherit"!==n.align&&e["align".concat(Object(p.a)(n.align))],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})((function(t){var e=t.theme,n=t.ownerState;return Object(a.a)({margin:0},n.variant&&e.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},O=i.forwardRef((function(t,e){var n=Object(l.a)({props:t,name:"MuiTypography"}),i=function(t){return v[t]||t}(n.color),s=Object(c.a)(Object(a.a)({},n,{color:i})),d=s.align,f=void 0===d?"inherit":d,O=s.className,x=s.component,y=s.gutterBottom,w=void 0!==y&&y,S=s.noWrap,M=void 0!==S&&S,k=s.paragraph,T=void 0!==k&&k,C=s.variant,B=void 0===C?"body1":C,E=s.variantMapping,z=void 0===E?g:E,R=Object(r.a)(s,j),W=Object(a.a)({},s,{align:f,color:i,className:O,component:x,gutterBottom:w,noWrap:M,paragraph:T,variant:B,variantMapping:z}),P=x||(T?"p":z[B]||g[B])||"span",I=function(t){var e=t.align,n=t.gutterBottom,r=t.noWrap,a=t.paragraph,i=t.variant,o=t.classes,c={root:["root",i,"inherit"!==t.align&&"align".concat(Object(p.a)(e)),n&&"gutterBottom",r&&"noWrap",a&&"paragraph"]};return Object(u.a)(c,h,o)}(W);return Object(b.jsx)(m,Object(a.a)({as:P,ref:e,ownerState:W,className:Object(o.a)(I.root,O)},R))}));e.a=O},228:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return j}));var r,a=n(103),i=n(8),o=n(112),c=n(229),u=n(117),s=n(106),l=n.p+"static/media/logo.770f13c8.webp",p=n(0),d=n(218),f=n(126),h=n(4),b=Object(d.a)(Object(o.a)(f.a)(r||(r=Object(a.a)(["\n  filter: brightness(90%);\n  font-family: Baskvill, serif;\n  position: fixed;\n  left: 5vw;\n  bottom: 8vh;\n  font-size: 40vh;\n"]))));function j(t){var e=t.list,n=Object(i.b)(),r=n.width,a=n.height,o=Object(p.useRef)(null);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(c.a,{sx:{width:"100vw",height:"100vh",position:"absolute",top:0,left:0,bottom:0,overflow:"hidden"},children:[Object(h.jsx)(u.a,{ref:o,slidesToShow:1,speed:3e3,animationSpeed:.6,indicatorSxProps:{width:"auto",pb:4,alignSelf:"center"},outerSx:{display:"flex",flexDirection:"column"},gap:0,render:function(t){return Object(h.jsx)(b,{transition:{duration:.6},initial:{x:"100%",opacity:0},animate:{x:0,opacity:1},exit:{x:"-100%",opacity:0},children:e[t.actualCurrent].title1},t.actualCurrent)},children:e.map((function(t,e){return Object(h.jsxs)(s.a,{"data-key":t.id,"data-index":e,ratio:"".concat(r,"/").concat(a),children:[Object(h.jsx)("img",{src:t.image}),Object(h.jsx)(c.a,{sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",bgcolor:"rgba(0,0,0,.59)"}})]},t.id)}))}),Object(h.jsx)(c.a,{position:"absolute",sx:{top:"2rem",left:"2rem",width:"10vw"},children:Object(h.jsx)(s.a,{ratio:"209.38/152.38",children:Object(h.jsx)("img",{src:l})})})]})})}}}]);
//# sourceMappingURL=13.2906c785.chunk.js.map