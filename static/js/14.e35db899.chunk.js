(this["webpackJsonpsvg-map-animations"]=this["webpackJsonpsvg-map-animations"]||[]).push([[14],{147:function(e,t,n){"use strict";var i=n(22),r=n(8),a=n(107),c=n(0),o=n(38),s=n(221),l=n(46);var d,u,j=n(99),f=n(337),b=n(133),h=n(329),x=n(228),O=n(222),p=n(4),m=Object(j.a)(f.a)(d||(d=Object(a.a)(["\n  cursor: pointer;\n  height: 0.7rem;\n  width: 0.7rem;\n  border-radius: 50%;\n  border: 1px solid #333;\n  ","\n"])),(function(e){return e.isActive&&Object(b.c)(u||(u=Object(a.a)(["\n      border-color: #a01f26;\n      background-color: #a01f26;\n      outline: 1px solid #a01f26;\n      outline-offset: 0.45rem;\n    "])))})),g=Object(h.a)(f.a),v=Object(c.forwardRef)((function(e,t){var n=e.animationSpeed,a=void 0===n?.35:n,d=e.indicatorSxProps,u=e.centerMode,j=e.sx,b=e.outerSx,h=e.gap,O=void 0===h?16:h,v=Object(c.useState)(e.speed),w=Object(r.a)(v,2),k=w[0],y=w[1],S=Object(c.useState)(1),C=Object(r.a)(S,2),T=(C[0],C[1]),M=function(e,t){var n=t.size,i=Object(c.useRef)([].concat(Object(o.a)(e),Object(o.a)(c.Children.map(e,(function(e,t){return Object(c.cloneElement)(e,{key:"cloned__".concat(t)})}))))),a=Object(c.useState)((function(){return i.current.slice(0,n)})),d=Object(r.a)(a,2),u=d[0],j=d[1],f=Object(c.useState)(n-1),b=Object(r.a)(f,2),h=b[0],x=b[1],O=Object(c.useState)("next"),p=Object(r.a)(O,2),m=p[0],g=p[1],v=Object(c.useMemo)((function(){var t=h-(n-1)/2;return t<0&&(t+=e.length),t>=e.length&&(t-=e.length),t}),[h,n,e.length]),w=Object(c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=(h+e)%i.current.length,n=Object(s.a)(u,(function(t){Object(l.range)(e).forEach((function(){return t.shift()})),Object(l.range)(e).forEach((function(e){var n=(h+e+1)%i.current.length;t.push(i.current[n])}))}));g("next"),x(t),j(n)}),[u,h]),k=Object(c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=h-e;t<0&&(t+=i.current.length);var r=h-n,a=Object(s.a)(u,(function(t){Object(l.range)(e).forEach((function(){return t.pop()})),Object(l.range)(e).forEach((function(){--r<0&&(r+=i.current.length),t.unshift(i.current[r])}))}));g("prev"),x(t),j(a)}),[h,n,u]);return[u,k,w,{current:v,direction:m,total:e.length}]}(c.Children.toArray(e.children),{size:e.slidesToShow+2}),R=Object(r.a)(M,4),_=R[0],z=R[1],P=R[2],E=R[3],I=E.current,G=E.direction,L=E.total;Object(c.useImperativeHandle)(t,(function(){return{next:P,prev:z}}));var A=Object(c.useMemo)((function(){return Math.round((e.slidesToShow+1)/2)}),[e.slidesToShow]),D=Object(c.useRef)();Object(c.useEffect)((function(){y(e.speed)}),[e.speed]),Object(c.useEffect)((function(){return k?D.current=setInterval((function(){return P()}),k):(D.current&&clearInterval(D.current),D.current=void 0),function(){D.current&&clearInterval(D.current)}}),[k,P]);var B=Object(c.useMemo)((function(){var t=O*(e.slidesToShow-1);return(1*e.size.width-t)/(e.slidesToShow+(u?1:0))}),[e.slidesToShow,e.size,O,u]),Y=Object(c.useCallback)((function(e){return!!u&&e===A}),[u,A]),J=Object(c.useMemo)((function(){return{initial:{opacity:0,x:"prev"===G?"-200%":"200%",flex:0},animate:function(t){var n=t.index;return{opacity:0===n||n===e.slidesToShow+1?0:1,x:0,flex:Y(n)?2:1}},exit:{opacity:0,x:"prev"===G?"200%":"-200%",flex:0}}}),[G,Y,e.slidesToShow]),H=Object(c.useMemo)((function(){return{initial:{width:0},animate:function(e){var t=e.index;return{width:B,scale:Y(t)?2:1}},exit:{width:0}}}),[Y,B]),N=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(I!==t){var i=t;n&&I>=t&&(i+=e.slidesToShow),y(0),I<i?(T(i-I),P(i-I),setTimeout((function(){y(e.speed),T(1)}),(i-I+1)*(null!==a&&void 0!==a?a:550))):(T(I-i),z(I-i),setTimeout((function(){y(e.speed),T(1)}),(I-i+1)*(null!==a&&void 0!==a?a:550)))}};return Object(p.jsxs)(f.a,{sx:b,children:[Object(p.jsx)(f.a,{sx:Object(i.a)({display:"flex",alignItems:"center",gap:"".concat(O,"px"),ml:"-".concat(B+O,"px"),mr:"-".concat(B+O,"px")},j),children:Object(p.jsx)(x.a,{initial:!1,children:_.map((function(e,t){return Object(p.jsx)(g,{layout:!0,transition:{duration:a},variants:J,initial:"initial",animate:"animate",exit:"exit",style:{originX:.5,originY:.5},sx:{display:"flex",justifyContent:"center"},custom:{index:t},className:t===A?"center":"",children:Object(p.jsx)(g,{layout:!0,variants:H,transition:{duration:a},custom:{index:t},style:{width:B},children:Object(c.cloneElement)(e,{onClick:1*e.props["data-index"]===A?e.props.onClick:function(){console.log(1*e.props["data-index"]),N(1*e.props["data-index"],!0)}})})},"".concat(e.key))}))})}),Object(p.jsx)(f.a,{sx:d,children:Object(p.jsx)(f.a,{sx:{display:"grid",gridTemplateColumns:"repeat(".concat(L,",1fr)"),gridGap:"2rem"},children:Object(l.range)(L).map((function(e){return Object(p.jsx)(m,{isActive:e===I,onClick:function(){N(e)}})}))})})]})})),w=Object(c.forwardRef)((function(e,t){return Object(p.jsx)(O.SizeMe,{children:function(n){var r=n.size;return Object(p.jsx)(v,Object(i.a)({ref:t,size:r},e))}})}));t.a=w},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var i=n(22),r=n(8),a=n(107),c=n(99),o=n(337),s=n(164),l=n(321),d=n(155),u=n(147),j=n(156),f=n(4);function b(e){return Object(f.jsx)("svg",Object(i.a)(Object(i.a)({width:"99.141",height:"53.683",viewBox:"0 0 99.141 53.683"},e),{},{children:Object(f.jsxs)("g",{id:"Group_349","data-name":"Group 349",transform:"translate(0 1.5)",children:[Object(f.jsx)("line",{id:"Line_264","data-name":"Line 264",x2:"81.086",transform:"translate(0 25.342)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"}),Object(f.jsx)("path",{id:"Path_1266","data-name":"Path 1266",d:"M350.258,7071.391l15.084,11.018-15.084,10.23",transform:"translate(-284.256 -7057.109)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"}),Object(f.jsx)("path",{id:"Path_1267","data-name":"Path 1267",d:"M333.7,7102.161a25.342,25.342,0,1,0,0-39.421",transform:"translate(-277.33 -7057.108)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"})]})}))}function h(e){return Object(f.jsx)("svg",Object(i.a)(Object(i.a)({width:"99.14",height:"53.683",viewBox:"0 0 99.14 53.683"},e),{},{children:Object(f.jsxs)("g",{id:"Group_348","data-name":"Group 348",transform:"translate(-332.203 -7055.609)",children:[Object(f.jsx)("line",{id:"Line_264","data-name":"Line 264",x1:"81.086",transform:"translate(350.258 7082.451)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"}),Object(f.jsx)("path",{id:"Path_1266","data-name":"Path 1266",d:"M365.342,7071.391l-15.084,11.018,15.084,10.23",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"}),Object(f.jsx)("path",{id:"Path_1267","data-name":"Path 1267",d:"M374.97,7102.161a25.342,25.342,0,1,1,0-39.421",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"})]})}))}var x,O=n(0);function p(e){return Object(f.jsx)("svg",Object(i.a)(Object(i.a)({width:"28.572",height:"28.572",viewBox:"0 0 28.572 28.572"},e),{},{children:Object(f.jsxs)("g",{id:"Group_347","data-name":"Group 347",transform:"translate(1.768 1.768)",children:[Object(f.jsx)("line",{id:"Line_287","data-name":"Line 287",x2:"25.036",y2:"25.036",fill:"none",stroke:"#fff","stroke-width":"5"}),Object(f.jsx)("line",{id:"Line_288","data-name":"Line 288",y1:"25.036",x2:"25.036",fill:"none",stroke:"#fff","stroke-width":"5"})]})}))}var m=Object(c.a)(o.a)(x||(x=Object(a.a)(["\n  p {\n    color: white;\n    font-weight: 600;\n    font-size: 20px;\n    display: none;\n    font-family: Raleway;\n  }\n  p:nth-of-type(2) {\n    display: inline-block;\n  }\n"])));function g(e){var t=e.sx,n=e.open,a=e.onClose,c=e.slidesData,x=(e.initial,Object(O.useRef)(null)),g=Object(O.useRef)(null),v=Object(O.useRef)(null),w=Object(O.useState)(!1),k=Object(r.a)(w,2),y=k[0],S=k[1];return Object(O.useEffect)((function(){S(n)}),[n]),Object(f.jsx)(s.b,{open:n,sx:Object(i.a)({bgcolor:"rgba(0,0,0,.75)","& *":{boxSizing:"border-box"}},t),children:Object(f.jsxs)(o.a,{sx:{display:"flex",flexDirection:"column",alignItems:"stretch",width:"100vw",height:"100vh",p:1},children:[Object(f.jsxs)(o.a,{sx:{display:"grid",gridTemplateColumns:"1fr auto auto auto",gridGap:"1rem",padding:"1rem",alignItems:"center",width:"100%",height:"100%"},children:[Object(f.jsx)(m,{ref:v}),Object(f.jsx)(o.a,{}),Object(f.jsx)(o.a,{}),Object(f.jsx)(p,{style:{height:"1.7rem",width:"1.7rem",cursor:"pointer"},onClick:a})]}),Object(f.jsx)(o.a,{sx:{flex:1},children:y&&Object(f.jsxs)(o.a,{sx:{display:"grid",gridTemplateColumns:"20vw 1fr 20vw"},children:[Object(f.jsx)(o.a,{sx:{alignSelf:"center",ml:2,zIndex:1201,cursor:"pointer"},onClick:function(){var e,t;null===(e=x.current)||void 0===e||e.prev(),null===(t=g.current)||void 0===t||t.prev()},children:Object(f.jsx)(h,{})}),Object(f.jsx)(u.a,{ref:x,slidesToShow:1,indicatorSxProps:{display:"none"},outerSx:{pb:2,height:"100%"},sx:{height:"100%"},gap:0,children:c.slides.map((function(e){return Object(f.jsxs)(o.a,{children:[Object(f.jsx)(l.a,{container:v.current,children:Object(f.jsx)(d.a,{sx:{color:"white"},children:e.layers[0].text})}),Object(f.jsx)(j.AspectRatio,{ratio:"4/3",children:Object(f.jsx)("img",{src:e.params.bg.image})})]},e.id)}))}),Object(f.jsx)(o.a,{sx:{alignSelf:"center",mr:2,zIndex:1201,justifySelf:"end",cursor:"pointer"},onClick:function(){var e,t;console.log(x.current),null===(e=x.current)||void 0===e||e.next(),null===(t=g.current)||void 0===t||t.next()},children:Object(f.jsx)(b,{})})]})}),Object(f.jsx)(o.a,{sx:{height:"15vh",width:"".concat(20*c.slides.length,"vh"),alignSelf:"center"},children:Object(f.jsx)(u.a,{ref:g,slidesToShow:c.slides.length,indicatorSxProps:{display:"none"},outerSx:{pb:2},children:c.slides.map((function(e){return Object(f.jsx)(o.a,{sx:{height:"15vh"},children:Object(f.jsx)(j.AspectRatio,{ratio:"4/3",children:Object(f.jsx)("img",{src:e.params.bg.image})})},"".concat(e.id,"-thumb"))}))})})]})})}},336:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var i,r,a,c=n(38),o=n(8),s=n(107),l=n(99),d=n(337),u=n(155),j=n(16),f=n(0),b=n(46),h=n(156),x=n.p+"static/media/bg-mobile.1df42d90.webp",O=n(147),p=n(191),m=n(4),g=Object(l.a)("img")(i||(i=Object(s.a)(["\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n  object-position: center;\n"]))),v=Object(l.a)(d.a)(r||(r=Object(s.a)(['\n  &:after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.1);\n    display: block;\n    content: "";\n  }\n']))),w=Object(l.a)(u.a)(a||(a=Object(s.a)(["\n  color: #a01f26;\n  font-weight: 600;\n  text-align: center;\n  font-size: 12px;\n  font-family: Raleway;\n  display: inline-block;\n\n  will-change: transform;\n  transition: transform 0.6s ease;\n  transform: scale(1);\n  transform-origin: top center;\n  .center & {\n    transform: translateY(-0.5rem) scale(0.75);\n  }\n"])));function k(e){var t=Object(j.b)(),n=t.width,i=t.height,r=Object(f.useState)(-1),a=Object(o.a)(r,2),s=a[0],l=a[1],u=Object(f.useMemo)((function(){var t=Object(c.a)(e.slidesData.slides);return s<0||Object(b.range)(s).forEach((function(){var e=t.shift();t.push(e)})),{slides:t}}),[e.slidesData,s]);return Object(m.jsxs)(d.a,{sx:{width:"100vw",height:"100vh",position:"absolute",top:0,left:0,bottom:0,overflow:"hidden"},children:[Object(m.jsx)(v,{sx:{position:"absolute",top:0,left:0,right:0},children:Object(m.jsx)(h.AspectRatio,{ratio:"".concat(n,"/").concat(2*i/3),children:Object(m.jsx)(g,{src:x})})}),Object(m.jsxs)(d.a,{sx:{position:"absolute",bottom:0,left:"".concat(1e4/1920,"vw"),right:"".concat(1e4/1920,"vw")},children:[Object(m.jsx)(O.a,{slidesToShow:1,speed:s>=0?0:3e3,animationSpeed:.6,indicatorSxProps:{width:"auto",pb:4,alignSelf:"center"},centerMode:!0,sx:{transform:"translateY(-50%)",height:300},outerSx:{display:"flex",flexDirection:"column"},children:e.slidesData.slides.map((function(e,t){return Object(m.jsxs)(d.a,{"data-key":e.id,"data-index":t,sx:{position:"relative",cursor:"pointer"},onClick:function(){return l(t-1)},children:[Object(m.jsx)(h.AspectRatio,{ratio:"4/3",children:Object(m.jsx)("img",{src:e.params.bg.image})}),Object(m.jsx)(w,{sx:{position:"absolute",top:"calc(100% + 16px)",left:0,right:0},children:e.layers[0].text})]},e.id)}))}),s>=0&&Object(m.jsx)(p.a,{open:!0,slidesData:u,initial:1,onClose:function(){return l(-1)}})]})]})}}}]);
//# sourceMappingURL=14.e35db899.chunk.js.map