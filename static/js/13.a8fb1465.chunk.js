(this["webpackJsonpsvg-map-animations"]=this["webpackJsonpsvg-map-animations"]||[]).push([[13],{282:function(e,t,n){},330:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return J}));var i=n(38),r=n(8),a=n(107),c=n(99),o=n(335),s=n(154),l=n.p+"static/media/bg-desktop.3ce90e71.webp",d=n(213),u=n(16),j=n(22),b=n(0),f=n(267),h=n(46);var x,O,p,m=n(133),g=n(328),v=n(224),w=n(268),k=n(4),S=Object(c.a)(o.a)(x||(x=Object(a.a)(["\n  cursor: pointer;\n  height: 0.7rem;\n  width: 0.7rem;\n  border-radius: 50%;\n  border: 1px solid #333;\n  ","\n"])),(function(e){return e.isActive&&Object(m.c)(O||(O=Object(a.a)(["\n      border-color: #a01f26;\n      background-color: #a01f26;\n      outline: 1px solid #a01f26;\n      outline-offset: 0.45rem;\n    "])))})),y=Object(g.a)(o.a),T=Object(b.forwardRef)((function(e,t){var n=e.animationSpeed,a=void 0===n?.35:n,c=e.indicatorSxProps,s=e.centerMode,l=e.sx,d=e.outerSx,u=e.gap,x=void 0===u?16:u,O=Object(b.useState)(e.speed),p=Object(r.a)(O,2),m=p[0],g=p[1],w=Object(b.useState)(1),T=Object(r.a)(w,2),C=(T[0],T[1]),M=function(e,t){var n=t.size,a=Object(b.useRef)([].concat(Object(i.a)(e),Object(i.a)(b.Children.map(e,(function(e,t){return Object(b.cloneElement)(e,{key:"cloned__".concat(t)})}))))),c=Object(b.useState)((function(){return a.current.slice(0,n)})),o=Object(r.a)(c,2),s=o[0],l=o[1],d=Object(b.useState)(n-1),u=Object(r.a)(d,2),j=u[0],x=u[1],O=Object(b.useState)("next"),p=Object(r.a)(O,2),m=p[0],g=p[1],v=Object(b.useMemo)((function(){var t=j-(n-1)/2;return t<0&&(t+=e.length),t>=e.length&&(t-=e.length),t}),[j,n,e.length]),w=Object(b.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=(j+e)%a.current.length,n=Object(f.a)(s,(function(t){Object(h.range)(e).forEach((function(){return t.shift()})),Object(h.range)(e).forEach((function(e){var n=(j+e+1)%a.current.length;t.push(a.current[n])}))}));g("next"),x(t),l(n)}),[s,j]),k=Object(b.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=j-e;t<0&&(t+=a.current.length);var i=j-n,r=Object(f.a)(s,(function(t){Object(h.range)(e).forEach((function(){return t.pop()})),Object(h.range)(e).forEach((function(){--i<0&&(i+=a.current.length),t.unshift(a.current[i])}))}));g("prev"),x(t),l(r)}),[j,n,s]);return[s,k,w,{current:v,direction:m}]}(b.Children.toArray(e.children),{size:e.slidesToShow+2}),R=Object(r.a)(M,4),_=R[0],z=R[1],P=R[2],E=R[3],I=E.current,G=E.direction;Object(b.useImperativeHandle)(t,(function(){return{next:P,prev:z}}));var L=Object(b.useMemo)((function(){return Math.round((e.slidesToShow+1)/2)}),[e.slidesToShow]),A=Object(b.useRef)();Object(b.useEffect)((function(){g(e.speed)}),[e.speed]),Object(b.useEffect)((function(){return m?A.current=setInterval((function(){return P()}),m):(A.current&&clearInterval(A.current),A.current=void 0),function(){A.current&&clearInterval(A.current)}}),[m,P]);var D=Object(b.useMemo)((function(){var t=x*(e.slidesToShow-1);return(1*e.size.width-t)/(e.slidesToShow+(s?1:0))}),[e.slidesToShow,e.size,x,s]),B=Object(b.useCallback)((function(e){return!!s&&e===L}),[s,L]),Y=Object(b.useMemo)((function(){return{initial:{opacity:0,x:"prev"===G?"-200%":"200%",flex:0},animate:function(t){var n=t.index;return{opacity:0===n||n===e.slidesToShow+1?0:1,x:0,flex:B(n)?2:1}},exit:{opacity:0,x:"prev"===G?"200%":"-200%",flex:0}}}),[G,B,e.slidesToShow]),J=Object(b.useMemo)((function(){return{initial:{width:0},animate:function(e){var t=e.index;return{width:D,scale:B(t)?1.8:1}},exit:{width:0}}}),[B,D]),H=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(I!==t){var i=t;n&&I>=t&&(i+=e.slidesToShow),g(0),I<i?(C(i-I),P(i-I),setTimeout((function(){g(e.speed),C(1)}),(i-I+1)*(null!==a&&void 0!==a?a:550))):(C(I-i),z(I-i),setTimeout((function(){g(e.speed),C(1)}),(I-i+1)*(null!==a&&void 0!==a?a:550)))}};return Object(k.jsxs)(o.a,{sx:d,children:[Object(k.jsx)(o.a,{sx:Object(j.a)({display:"flex",alignItems:"center",gap:"".concat(x,"px"),ml:"-".concat(D+x,"px"),mr:"-".concat(D+x,"px")},l),children:Object(k.jsx)(v.a,{initial:!1,children:_.map((function(e,t){return Object(k.jsx)(y,{layout:!0,transition:{duration:a},variants:Y,initial:"initial",animate:"animate",exit:"exit",style:{originX:.5,originY:.5},sx:{display:"flex",justifyContent:"center"},custom:{index:t},className:t===L?"center":"",children:Object(k.jsx)(y,{layout:!0,variants:J,transition:{duration:a},custom:{index:t},style:{width:D},children:Object(b.cloneElement)(e,{onClick:1*e.props["data-index"]===L?e.props.onClick:function(){console.log(1*e.props["data-index"]),H(1*e.props["data-index"],!0)}})})},"".concat(e.key))}))})}),Object(k.jsx)(o.a,{sx:c,children:Object(k.jsx)(o.a,{sx:{display:"grid",gridTemplateColumns:"repeat(".concat(e.slidesToShow,",1fr)"),gridGap:"2rem"},children:Object(h.range)(e.slidesToShow).map((function(e){return Object(k.jsx)(S,{isActive:e===I,onClick:function(){H(e)}})}))})})]})})),C=Object(b.forwardRef)((function(e,t){return Object(k.jsx)(w.SizeMe,{children:function(n){var i=n.size;return Object(k.jsx)(T,Object(j.a)({ref:t,size:i},e))}})})),M=(n(282),n(162)),R=n(319);function _(e){return Object(k.jsx)("svg",Object(j.a)(Object(j.a)({width:"99.141",height:"53.683",viewBox:"0 0 99.141 53.683"},e),{},{children:Object(k.jsxs)("g",{id:"Group_349","data-name":"Group 349",transform:"translate(0 1.5)",children:[Object(k.jsx)("line",{id:"Line_264","data-name":"Line 264",x2:"81.086",transform:"translate(0 25.342)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"}),Object(k.jsx)("path",{id:"Path_1266","data-name":"Path 1266",d:"M350.258,7071.391l15.084,11.018-15.084,10.23",transform:"translate(-284.256 -7057.109)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"}),Object(k.jsx)("path",{id:"Path_1267","data-name":"Path 1267",d:"M333.7,7102.161a25.342,25.342,0,1,0,0-39.421",transform:"translate(-277.33 -7057.108)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"})]})}))}function z(e){return Object(k.jsx)("svg",Object(j.a)(Object(j.a)({width:"99.14",height:"53.683",viewBox:"0 0 99.14 53.683"},e),{},{children:Object(k.jsxs)("g",{id:"Group_348","data-name":"Group 348",transform:"translate(-332.203 -7055.609)",children:[Object(k.jsx)("line",{id:"Line_264","data-name":"Line 264",x1:"81.086",transform:"translate(350.258 7082.451)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"}),Object(k.jsx)("path",{id:"Path_1266","data-name":"Path 1266",d:"M365.342,7071.391l-15.084,11.018,15.084,10.23",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"}),Object(k.jsx)("path",{id:"Path_1267","data-name":"Path 1267",d:"M374.97,7102.161a25.342,25.342,0,1,1,0-39.421",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"})]})}))}function P(e){return Object(k.jsx)("svg",Object(j.a)(Object(j.a)({width:"28.572",height:"28.572",viewBox:"0 0 28.572 28.572"},e),{},{children:Object(k.jsxs)("g",{id:"Group_347","data-name":"Group 347",transform:"translate(1.768 1.768)",children:[Object(k.jsx)("line",{id:"Line_287","data-name":"Line 287",x2:"25.036",y2:"25.036",fill:"none",stroke:"#fff","stroke-width":"5"}),Object(k.jsx)("line",{id:"Line_288","data-name":"Line 288",y1:"25.036",x2:"25.036",fill:"none",stroke:"#fff","stroke-width":"5"})]})}))}var E,I,G,L=Object(c.a)(o.a)(p||(p=Object(a.a)(["\n  p {\n    color: white;\n    font-weight: 600;\n    font-size: 20px;\n    display: none;\n    font-family: Raleway;\n  }\n  p:nth-of-type(2) {\n    display: inline-block;\n  }\n"])));function A(e){var t=e.sx,n=e.open,i=e.onClose,a=e.slidesData,c=(e.initial,Object(b.useRef)(null)),l=Object(b.useRef)(null),u=Object(b.useRef)(null),f=Object(b.useState)(!1),h=Object(r.a)(f,2),x=h[0],O=h[1];return Object(b.useEffect)((function(){O(n)}),[n]),Object(k.jsx)(M.b,{open:n,sx:Object(j.a)({bgcolor:"rgba(0,0,0,.75)","& *":{boxSizing:"border-box"}},t),children:Object(k.jsxs)(o.a,{sx:{display:"flex",flexDirection:"column",alignItems:"stretch",width:"100vw",height:"100vh",p:1},children:[Object(k.jsxs)(o.a,{sx:{display:"grid",gridTemplateColumns:"1fr auto auto auto",gridGap:"1rem",padding:"1rem",alignItems:"center",width:"100%",height:"100%"},children:[Object(k.jsx)(L,{ref:u}),Object(k.jsx)(o.a,{}),Object(k.jsx)(o.a,{}),Object(k.jsx)(P,{style:{height:"1.7rem",width:"1.7rem",cursor:"pointer"},onClick:i})]}),Object(k.jsx)(o.a,{sx:{flex:1},children:x&&Object(k.jsxs)(o.a,{sx:{display:"grid",gridTemplateColumns:"20vw 1fr 20vw"},children:[Object(k.jsx)(o.a,{sx:{alignSelf:"center",ml:2,zIndex:1201,cursor:"pointer"},onClick:function(){var e,t;null===(e=c.current)||void 0===e||e.prev(),null===(t=l.current)||void 0===t||t.prev()},children:Object(k.jsx)(z,{})}),Object(k.jsx)(C,{ref:c,slidesToShow:1,indicatorSxProps:{display:"none"},outerSx:{pb:2,height:"100%"},sx:{height:"100%"},gap:0,children:a.slides.map((function(e){return Object(k.jsxs)(o.a,{children:[Object(k.jsx)(R.a,{container:u.current,children:Object(k.jsx)(s.a,{sx:{color:"white"},children:e.layers[0].text})}),Object(k.jsx)(d.AspectRatio,{ratio:"4/3",children:Object(k.jsx)("img",{src:e.params.bg.image})})]},e.id)}))}),Object(k.jsx)(o.a,{sx:{alignSelf:"center",mr:2,zIndex:1201,justifySelf:"end",cursor:"pointer"},onClick:function(){var e,t;console.log(c.current),null===(e=c.current)||void 0===e||e.next(),null===(t=l.current)||void 0===t||t.next()},children:Object(k.jsx)(_,{})})]})}),Object(k.jsx)(o.a,{sx:{height:"15vh",width:"".concat(20*a.slides.length,"vh"),alignSelf:"center"},children:Object(k.jsx)(C,{ref:l,slidesToShow:a.slides.length,indicatorSxProps:{display:"none"},outerSx:{pb:2},children:a.slides.map((function(e){return Object(k.jsx)(o.a,{sx:{height:"15vh"},children:Object(k.jsx)(d.AspectRatio,{ratio:"4/3",children:Object(k.jsx)("img",{src:e.params.bg.image})})},"".concat(e.id,"-thumb"))}))})})]})})}var D=Object(c.a)("img")(E||(E=Object(a.a)(["\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n  object-position: center;\n"]))),B=Object(c.a)(o.a)(I||(I=Object(a.a)(['\n  &:after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.46);\n    display: block;\n    content: "";\n  }\n']))),Y=Object(c.a)(s.a)(G||(G=Object(a.a)(["\n  color: #a01f26;\n  font-weight: 600;\n  text-align: center;\n  font-size: 12px;\n  font-family: Raleway;\n  display: inline-block;\n\n  will-change: transform;\n  transition: transform 0.6s ease;\n  transform: scale(1);\n  transform-origin: top center;\n  .center & {\n    transform: translateY(-0.5rem) scale(0.75);\n  }\n"])));function J(e){var t=Object(u.b)(),n=t.width,a=t.height,c=Object(b.useState)(-1),s=Object(r.a)(c,2),j=s[0],f=s[1],x=Object(b.useMemo)((function(){var t=Object(i.a)(e.slidesData.slides);return j<0||Object(h.range)(j).forEach((function(){var e=t.shift();t.push(e)})),{slides:t}}),[e.slidesData,j]);return Object(k.jsxs)(o.a,{sx:{width:"100vw",height:"100vh",position:"absolute",top:0,left:0,bottom:0,overflow:"hidden"},children:[Object(k.jsx)(B,{sx:{position:"absolute",top:0,left:0,right:0},children:Object(k.jsx)(d.AspectRatio,{ratio:"".concat(n,"/").concat(2*a/3),children:Object(k.jsx)(D,{src:l})})}),Object(k.jsxs)(o.a,{sx:{position:"absolute",bottom:0,left:"".concat(1e4/1920,"vw"),right:"".concat(1e4/1920,"vw")},children:[Object(k.jsx)(C,{slidesToShow:5,speed:j>=0?0:3e3,animationSpeed:.6,indicatorSxProps:{width:"auto",pb:4,alignSelf:"center"},centerMode:!0,sx:{transform:"translateY(-50%)",height:300},outerSx:{display:"flex",flexDirection:"column"},children:e.slidesData.slides.map((function(e,t){return Object(k.jsxs)(o.a,{"data-key":e.id,"data-index":t,sx:{position:"relative",cursor:"pointer"},onClick:function(){return f(t-1)},children:[Object(k.jsx)(d.AspectRatio,{ratio:"4/3",children:Object(k.jsx)("img",{src:e.params.bg.image})}),Object(k.jsx)(Y,{sx:{position:"absolute",top:"calc(100% + 16px)",left:0,right:0},children:e.layers[0].text})]},e.id)}))}),j>=0&&Object(k.jsx)(A,{open:!0,slidesData:x,initial:1,onClose:function(){return f(-1)}})]})]})}}}]);
//# sourceMappingURL=13.a8fb1465.chunk.js.map