(this["webpackJsonpsvg-map-animations"]=this["webpackJsonpsvg-map-animations"]||[]).push([[13],{282:function(e,t,n){},330:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return J}));var i=n(8),r=n(105),a=n(97),s=n(335),c=n(152),o=n.p+"static/media/bg-desktop.3ce90e71.webp",l=n(212),d=n(16),j=n(37),u=n(2),b=n(38),h=n(267);var f,x,O,p=n(131),m=n(328),g=n(223),v=n(268),w=n(184),k=n(4),y=Object(a.a)(s.a)(f||(f=Object(r.a)(["\n  height: 0.7rem;\n  width: 0.7rem;\n  border-radius: 50%;\n  border: 1px solid #333;\n  ","\n"])),(function(e){return e.isActive&&Object(p.c)(x||(x=Object(r.a)(["\n      border-color: #a01f26;\n      background-color: #a01f26;\n      outline: 1px solid #a01f26;\n      outline-offset: 0.45rem;\n    "])))})),S=Object(m.a)(s.a),T=Object(u.forwardRef)((function(e,t){var n=e.animationSpeed,r=void 0===n?.55:n,a=e.indicatorSxProps,c=e.centerMode,o=e.sx,l=e.outerSx,d=e.gap,f=void 0===d?16:d,x=function(e,t){var n=t.size,r=Object(u.useRef)([].concat(Object(b.a)(e),Object(b.a)(u.Children.map(e,(function(e,t){return Object(u.cloneElement)(e,{key:"cloned__".concat(t)})}))))),a=Object(u.useState)((function(){return r.current.slice(0,n)})),s=Object(i.a)(a,2),c=s[0],o=s[1],l=Object(u.useState)(n-1),d=Object(i.a)(l,2),j=d[0],f=d[1],x=Object(u.useMemo)((function(){var t=j-(n-1)/2;return t<0&&(t+=e.length),t>=e.length&&(t-=e.length),t}),[j,n,e.length]),O=Object(u.useCallback)((function(){var e=(j+1)%r.current.length,t=Object(h.a)(c,(function(t){t.shift(),t.push(r.current[e])}));o(t),f(e)}),[c,j]),p=Object(u.useCallback)((function(){var t=j-1;t<0&&(t+=e.length);var n=t-e.length;n<0&&(n+=e.length);var i=Object(h.a)(c,(function(t){t.pop(),t.unshift(e[n])}));o(i),f(t)}),[e,c,j]);return[c,p,O,{current:x}]}(u.Children.toArray(e.children),{size:e.slidesToShow+2}),O=Object(i.a)(x,4),p=O[0],m=O[1],v=O[2],T=O[3].current;Object(u.useImperativeHandle)(t,(function(){return{next:v,prev:m}}));var C=Object(u.useMemo)((function(){return Math.round((e.slidesToShow+1)/2)}),[e.slidesToShow]),M=Object(u.useRef)();Object(u.useEffect)((function(){return e.speed&&(M.current=setInterval(v,e.speed)),function(){M.current&&clearInterval(M.current)}}),[e.speed,v]);var R=Object(u.useMemo)((function(){var t=f*(e.slidesToShow-1);return(1*e.size.width-t)/(e.slidesToShow+(c?1:0))}),[e.slidesToShow,e.size,f,c]),_=Object(u.useCallback)((function(e){return!!c&&e===C}),[c,C]),z=Object(u.useMemo)((function(){return{initial:{opacity:0,x:"200%",flex:0},animate:function(t){var n=t.index;return{opacity:0===n||n===e.slidesToShow+1?0:1,x:0,flex:_(n)?2:1}},exit:{opacity:0,x:"-200%",flex:0}}}),[_,e.slidesToShow]),P=Object(u.useMemo)((function(){return{initial:{width:0},animate:function(e){var t=e.index;return{width:R,scale:_(t)?1.8:1}},exit:{width:0}}}),[_,R]);return Object(k.jsxs)(s.a,{sx:l,children:[Object(k.jsx)(s.a,{sx:Object(j.a)({display:"flex",alignItems:"center",gap:"".concat(f,"px"),ml:"-".concat(R+f,"px"),mr:"-".concat(R+f,"px")},o),children:Object(k.jsx)(g.a,{initial:!1,children:p.map((function(e,t){return Object(k.jsx)(S,{layout:!0,transition:{duration:r},variants:z,initial:"initial",animate:"animate",exit:"exit",style:{originX:.5,originY:.5},sx:{display:"flex",justifyContent:"center"},custom:{index:t},className:t===C?"center":"",children:Object(k.jsx)(S,{layout:!0,variants:P,transition:{duration:r},custom:{index:t},style:{width:R},children:e})},e.key)}))})}),Object(k.jsx)(s.a,{sx:a,children:Object(k.jsx)(s.a,{sx:{display:"grid",gridTemplateColumns:"repeat(".concat(e.slidesToShow,",1fr)"),gridGap:"2rem"},children:Object(w.range)(e.slidesToShow).map((function(e){return Object(k.jsx)(y,{isActive:e===T})}))})})]})})),C=Object(u.forwardRef)((function(e,t){return Object(k.jsx)(v.SizeMe,{children:function(n){var i=n.size;return Object(k.jsx)(T,Object(j.a)({ref:t,size:i},e))}})})),M=(n(282),n(160)),R=n(319);function _(e){return Object(k.jsx)("svg",Object(j.a)(Object(j.a)({width:"99.141",height:"53.683",viewBox:"0 0 99.141 53.683"},e),{},{children:Object(k.jsxs)("g",{id:"Group_349","data-name":"Group 349",transform:"translate(0 1.5)",children:[Object(k.jsx)("line",{id:"Line_264","data-name":"Line 264",x2:"81.086",transform:"translate(0 25.342)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"}),Object(k.jsx)("path",{id:"Path_1266","data-name":"Path 1266",d:"M350.258,7071.391l15.084,11.018-15.084,10.23",transform:"translate(-284.256 -7057.109)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"}),Object(k.jsx)("path",{id:"Path_1267","data-name":"Path 1267",d:"M333.7,7102.161a25.342,25.342,0,1,0,0-39.421",transform:"translate(-277.33 -7057.108)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"})]})}))}function z(e){return Object(k.jsx)("svg",Object(j.a)(Object(j.a)({width:"99.14",height:"53.683",viewBox:"0 0 99.14 53.683"},e),{},{children:Object(k.jsxs)("g",{id:"Group_348","data-name":"Group 348",transform:"translate(-332.203 -7055.609)",children:[Object(k.jsx)("line",{id:"Line_264","data-name":"Line 264",x1:"81.086",transform:"translate(350.258 7082.451)",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"}),Object(k.jsx)("path",{id:"Path_1266","data-name":"Path 1266",d:"M365.342,7071.391l-15.084,11.018,15.084,10.23",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"}),Object(k.jsx)("path",{id:"Path_1267","data-name":"Path 1267",d:"M374.97,7102.161a25.342,25.342,0,1,1,0-39.421",fill:"none",stroke:"#fff","stroke-miterlimit":"10","stroke-width":"3"})]})}))}function P(e){return Object(k.jsx)("svg",Object(j.a)(Object(j.a)({width:"28.572",height:"28.572",viewBox:"0 0 28.572 28.572"},e),{},{children:Object(k.jsxs)("g",{id:"Group_347","data-name":"Group 347",transform:"translate(1.768 1.768)",children:[Object(k.jsx)("line",{id:"Line_287","data-name":"Line 287",x2:"25.036",y2:"25.036",fill:"none",stroke:"#fff","stroke-width":"5"}),Object(k.jsx)("line",{id:"Line_288","data-name":"Line 288",y1:"25.036",x2:"25.036",fill:"none",stroke:"#fff","stroke-width":"5"})]})}))}var G,I,L,A=Object(a.a)(s.a)(O||(O=Object(r.a)(["\n  p {\n    color: white;\n    font-weight: 600;\n    font-size: 20px;\n    display: none;\n    font-family: Raleway;\n  }\n  p:nth-of-type(2) {\n    display: inline-block;\n  }\n"])));function D(e){var t=e.sx,n=e.open,r=e.onClose,a=e.slidesData,o=(e.initial,Object(u.useRef)(null)),d=Object(u.useRef)(null),b=Object(u.useRef)(null),h=Object(u.useState)(!1),f=Object(i.a)(h,2),x=f[0],O=f[1];return Object(u.useEffect)((function(){O(n)}),[n]),Object(k.jsx)(M.b,{open:n,sx:Object(j.a)({bgcolor:"rgba(0,0,0,.75)","& *":{boxSizing:"border-box"}},t),children:Object(k.jsxs)(s.a,{sx:{display:"flex",flexDirection:"column",alignItems:"stretch",width:"100vw",height:"100vh",p:1},children:[Object(k.jsxs)(s.a,{sx:{display:"grid",gridTemplateColumns:"1fr auto auto auto",gridGap:"1rem",padding:"1rem",alignItems:"center"},children:[Object(k.jsx)(A,{ref:b}),Object(k.jsx)(s.a,{}),Object(k.jsx)(s.a,{}),Object(k.jsx)(P,{style:{height:"1.7rem",width:"1.7rem",cursor:"pointer"},onClick:r})]}),Object(k.jsx)(s.a,{sx:{flex:1},children:x&&Object(k.jsxs)(s.a,{sx:{display:"grid",gridTemplateColumns:"20vw 1fr 20vw"},children:[Object(k.jsx)(s.a,{sx:{alignSelf:"center",ml:2,zIndex:1201,cursor:"pointer"},onClick:function(){var e,t;null===(e=o.current)||void 0===e||e.prev(),null===(t=d.current)||void 0===t||t.prev()},children:Object(k.jsx)(z,{})}),Object(k.jsx)(C,{ref:o,slidesToShow:1,indicatorSxProps:{display:"none"},outerSx:{pb:2,height:"100%"},sx:{height:"100%"},gap:0,children:a.slides.map((function(e){return Object(k.jsxs)(s.a,{children:[Object(k.jsx)(R.a,{container:b.current,children:Object(k.jsx)(c.a,{sx:{color:"white"},children:e.layers[1].text})}),Object(k.jsx)(l.AspectRatio,{ratio:"4/3",children:Object(k.jsx)("img",{src:e.params.bg.image})})]},e.id)}))}),Object(k.jsx)(s.a,{sx:{alignSelf:"center",mr:2,zIndex:1201,justifySelf:"end",cursor:"pointer"},onClick:function(){var e,t;console.log(o.current),null===(e=o.current)||void 0===e||e.next(),null===(t=d.current)||void 0===t||t.next()},children:Object(k.jsx)(_,{})})]})}),Object(k.jsx)(s.a,{sx:{height:"15vh",width:"".concat(20*a.slides.length,"vh"),alignSelf:"center"},children:Object(k.jsx)(C,{ref:d,slidesToShow:a.slides.length,indicatorSxProps:{display:"none"},outerSx:{pb:2},children:a.slides.map((function(e){return Object(k.jsx)(s.a,{sx:{height:"15vh"},children:Object(k.jsx)(l.AspectRatio,{ratio:"4/3",children:Object(k.jsx)("img",{src:e.params.bg.image})})},e.id)}))})})]})})}var B=Object(a.a)("img")(G||(G=Object(r.a)(["\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n  object-position: center;\n"]))),E=Object(a.a)(s.a)(I||(I=Object(r.a)(['\n  &:after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.46);\n    display: block;\n    content: "";\n  }\n']))),Y=Object(a.a)(c.a)(L||(L=Object(r.a)(["\n  color: #a01f26;\n  font-weight: 600;\n  text-align: center;\n  font-size: 12px;\n  font-family: Raleway;\n  display: inline-block;\n\n  will-change: transform;\n  transition: transform 0.6s ease;\n  transform: scale(1);\n  transform-origin: top center;\n  .center & {\n    transform: translateY(-0.5rem) scale(0.75);\n  }\n"])));function J(e){var t=Object(d.b)(),n=t.width,r=t.height,a=Object(u.useState)(!1),c=Object(i.a)(a,2),j=c[0],b=c[1];return Object(k.jsxs)(s.a,{sx:{width:"100vw",height:"100vh",position:"absolute",top:0,left:0,bottom:0,overflow:"hidden"},children:[Object(k.jsx)(E,{sx:{position:"absolute",top:0,left:0,right:0},children:Object(k.jsx)(l.AspectRatio,{ratio:"".concat(n,"/").concat(2*r/3),children:Object(k.jsx)(B,{src:o})})}),Object(k.jsxs)(s.a,{sx:{position:"absolute",top:"calc(66.66vh - 1rem)",left:"".concat(1e4/1920,"vw"),right:"".concat(1e4/1920,"vw")},children:[Object(k.jsx)(C,{slidesToShow:5,speed:j?0:3e3,animationSpeed:.6,indicatorSxProps:{position:"fixed",bottom:"3rem",left:"50%",transform:"translateX(-50%)"},centerMode:!0,sx:{transform:"translateY(-50%)",height:300},children:e.slidesData.slides.map((function(e){return Object(k.jsxs)(s.a,{"data-key":e.id,sx:{position:"relative",cursor:"pointer"},onClick:function(){return b(!0)},children:[Object(k.jsx)(l.AspectRatio,{ratio:"4/3",children:Object(k.jsx)("img",{src:e.params.bg.image})}),Object(k.jsx)(Y,{sx:{position:"absolute",top:"calc(100% + 16px)",left:0,right:0},children:e.layers[1].text})]},e.id)}))}),Object(k.jsx)(D,{open:j,slidesData:e.slidesData,initial:1,onClose:function(){return b(!1)}})]})]})}}}]);
//# sourceMappingURL=13.8871754b.chunk.js.map