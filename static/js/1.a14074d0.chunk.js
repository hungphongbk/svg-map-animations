(this["webpackJsonpsvg-map-animations"]=this["webpackJsonpsvg-map-animations"]||[]).push([[1],{102:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.sxFlexCenter={display:"flex",alignItems:"center",justifyContent:"center"},t.sxFullSize={width:"100%",height:"100%"},t.sxFullSizeAbsolute={position:"absolute",top:0,left:0,right:0,bottom:0}},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(2),a=Object(r.createContext)({})},137:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=(r=n(138))&&"object"===typeof r&&"default"in r?r.default:r,i=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=a((function(e){return i.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));t.default=o},138:function(e,t,n){"use strict";n.r(t),t.default=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return re}));var r=n(0),a=n(2),i=n.n(a),o=n(39),s=(n(11),n(44)),l=Object.keys(o.a),c=l.length;var u=Object(a.createContext)({transformPagePoint:function(e){return e},isStatic:!1}),d=Object(a.createContext)({});var p=n(22),f=n(28),m=f.a?a.useLayoutEffect:a.useEffect;function h(e,t,n,r){var i=Object(a.useContext)(s.a),o=Object(a.useContext)(d).visualElement,l=Object(a.useContext)(p.a),c=Object(a.useRef)(void 0);r||(r=i.renderer),!c.current&&r&&(c.current=r(e,{visualState:t,parent:o,props:n,presenceId:null===l||void 0===l?void 0:l.id,blockInitialAnimation:!1===(null===l||void 0===l?void 0:l.initial)}));var u=c.current;return m((function(){null===u||void 0===u||u.syncRender()})),Object(a.useEffect)((function(){var e;null===(e=null===u||void 0===u?void 0:u.animationState)||void 0===e||e.animateChanges()})),m((function(){return function(){return null===u||void 0===u?void 0:u.notifyUnmount()}}),[]),u}function v(e){return"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}var g=n(8);function y(e){var t=function(e,t){if(Object(g.a)(e)){var n=e.initial,r=e.animate;return{initial:!1===n||Object(g.c)(n)?n:void 0,animate:Object(g.c)(r)?r:void 0}}return!1!==e.inherit?t:{}}(e,Object(a.useContext)(d)),n=t.initial,r=t.animate;return Object(a.useMemo)((function(){return{initial:n,animate:r}}),[b(n),b(r)])}function b(e){return Array.isArray(e)?e.join(" "):e}var O=n(43),j=(n(13),n(5)),x=(n(16),n(12));n(46);n(18);k(0,.5,j.circOut),k(.5,.95,j.linear);function k(e,t,n){return function(r){return r<e?0:r>t?1:n(Object(j.progress)(e,t,r))}}n(41);n(1);var C=n(40);(function(){function e(){this.members=[]}e.prototype.add=function(e){Object(C.a)(this.members,e),e.scheduleRender()},e.prototype.remove=function(e){if(Object(C.b)(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){var t=this.members[this.members.length-1];t&&this.promote(t)}},e.prototype.relegate=function(e){var t,n=this.members.findIndex((function(t){return e===t}));if(0===n)return!1;for(var r=n;r>=0;r--){var a=this.members[r];if(!1!==a.isPresent){t=a;break}}return!!t&&(this.promote(t),!0)},e.prototype.promote=function(e,t){var n,r=this.lead;e!==r&&(this.prevLead=r,this.lead=e,e.show(),r&&(r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues,e.snapshot.isShared=!0),(null===(n=e.root)||void 0===n?void 0:n.isUpdating)&&(e.isLayoutDirty=!0),!1===e.options.crossfade&&r.hide()))},e.prototype.exitAnimationComplete=function(){this.members.forEach((function(e){var t,n,r,a,i;null===(n=(t=e.options).onExitComplete)||void 0===n||n.call(t),null===(i=null===(r=e.resumingFrom)||void 0===r?void 0:(a=r.options).onExitComplete)||void 0===i||i.call(a)}))},e.prototype.scheduleRender=function(){this.members.forEach((function(e){e.instance&&e.scheduleRender(!1)}))},e.prototype.removeLeadSnapshot=function(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}})(),n(57);n(55),n(6);var S=function(e,t){return e.depth-t.depth},_=(function(){function e(){this.children=[],this.isDirty=!1}e.prototype.add=function(e){Object(C.a)(this.children,e),this.isDirty=!0},e.prototype.remove=function(e){Object(C.b)(this.children,e),this.isDirty=!0},e.prototype.forEach=function(e){this.isDirty&&this.children.sort(S),this.isDirty=!1,this.children.forEach(e)}}(),n(25));function E(e){var t=Object(x.a)(e)?e.get():e;return Object(_.a)(t)?t.toValue():t}var w={hasAnimatedSinceResize:!0,hasEverUpdated:!1};var A=1;var P=n(116),T=Object(a.createContext)({});var R=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),t.prototype.getSnapshotBeforeUpdate=function(){return this.updateProps(),null},t.prototype.componentDidUpdate=function(){},t.prototype.updateProps=function(){var e=this.props,t=e.visualElement,n=e.props;t&&t.setProps(n)},t.prototype.render=function(){return this.props.children},t}(i.a.Component);function M(e){var t=e.preloadedFeatures,n=e.createVisualElement,i=e.projectionNodeConstructor,p=e.useRender,m=e.useVisualState,g=e.Component;return t&&Object(o.b)(t),Object(a.forwardRef)((function(e,t){var b=function(e){var t,n=e.layoutId,r=null===(t=Object(a.useContext)(P.a))||void 0===t?void 0:t.id;return r&&void 0!==n?r+"-"+n:n}(e);e=Object(r.__assign)(Object(r.__assign)({},e),{layoutId:b});var j=Object(a.useContext)(u),x=null,k=y(e),C=Object(O.a)((function(){if(w.hasEverUpdated)return A++})),S=m(e,j.isStatic);return!j.isStatic&&f.a&&(k.visualElement=h(g,S,Object(r.__assign)(Object(r.__assign)({},j),e),n),function(e,t,n,r){var i,o=t.layoutId,s=t.layout,l=t.drag,c=t.dragConstraints,u=t.layoutScroll,d=Object(a.useContext)(T);r&&n&&!(null===n||void 0===n?void 0:n.projection)&&(n.projection=new r(e,n.getLatestValues(),null===(i=n.parent)||void 0===i?void 0:i.projection),n.projection.setOptions({layoutId:o,layout:s,alwaysMeasureLayout:Boolean(l)||c&&v(c),visualElement:n,scheduleRender:function(){return n.scheduleRender()},animationType:"string"===typeof s?s:"both",initialPromotionConfig:d,layoutScroll:u}))}(C,e,k.visualElement,i||o.a.projectionNodeConstructor),x=function(e,t,n){var i=[];if(Object(a.useContext)(s.a),!t)return null;for(var u=0;u<c;u++){var d=l[u],p=o.a[d],f=p.isEnabled,m=p.Component;f(e)&&m&&i.push(a.createElement(m,Object(r.__assign)({key:d},e,{visualElement:t})))}return i}(e,k.visualElement)),a.createElement(R,{visualElement:k.visualElement,props:Object(r.__assign)(Object(r.__assign)({},j),e)},x,a.createElement(d.Provider,{value:k},p(g,e,C,function(e,t,n){return Object(a.useCallback)((function(r){var a;r&&(null===(a=e.mount)||void 0===a||a.call(e,r)),t&&(r?t.mount(r):t.unmount()),n&&("function"===typeof n?n(r):v(n)&&(n.current=r))}),[t])}(S,k.visualElement,t),S,j.isStatic)))}))}var L=n(48),V=n(56),D=n(29),I=function(){return{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}};function F(e,t,n){for(var r in t)Object(x.a)(t[r])||Object(V.a)(r,n)||(e[r]=t[r])}function U(e,t,n){var i={};return F(i,e.style||{},e),Object.assign(i,function(e,t,n){var i=e.transformTemplate;return Object(a.useMemo)((function(){var e={style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}};Object(D.a)(e,t,{enableHardwareAcceleration:!n},i);var a=e.vars,o=e.style;return Object(r.__assign)(Object(r.__assign)({},a),o)}),[t])}(e,t,n)),e.transformValues&&(i=e.transformValues(i)),i}function H(e,t,n){var r={},a=U(e,t,n);return Boolean(e.drag)&&!1!==e.dragListener&&(r.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=!0===e.drag?"none":"pan-".concat("x"===e.drag?"y":"x")),r.style=a,r}var B=new Set(["initial","animate","exit","style","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","whileDrag","onPan","onPanStart","onPanEnd","onPanSessionStart","onTap","onTapStart","onTapCancel","onHoverStart","onHoverEnd","whileFocus","whileTap","whileHover","whileInView","onViewportEnter","onViewportLeave","viewport","layoutScroll"]);function z(e){return B.has(e)}var W=function(e){return!z(e)};try{var X=n(137).default;W=function(e){return e.startsWith("on")?!z(e):X(e)}}catch(ae){}var q=n(47),N=function(){return Object(r.__assign)(Object(r.__assign)({},{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}),{attrs:{}})};function Y(e,t){var n=Object(a.useMemo)((function(){var n=N();return Object(q.a)(n,t,{enableHardwareAcceleration:!1},e.transformTemplate),Object(r.__assign)(Object(r.__assign)({},n.attrs),{style:Object(r.__assign)({},n.style)})}),[t]);if(e.style){var i={};F(i,e.style,e),n.style=Object(r.__assign)(Object(r.__assign)({},i),n.style)}return n}function K(e){void 0===e&&(e=!1);return function(t,n,i,o,s,l){var c=s.latestValues,u=(Object(L.a)(t)?Y:H)(n,c,l),d=function(e,t,n){var r={};for(var a in e)(W(a)||!0===n&&z(a)||!t&&!z(a)||e.draggable&&a.startsWith("onDrag"))&&(r[a]=e[a]);return r}(n,"string"===typeof t,e),p=Object(r.__assign)(Object(r.__assign)(Object(r.__assign)({},d),u),{ref:o});return i&&(p["data-projection-id"]=i),Object(a.createElement)(t,p)}}var G=n(59),J=n(58),Z=n(26);function $(e,t,n,r){var a=e.scrapeMotionValuesFromProps,i=e.createRenderState,o=e.onMount,s={latestValues:ee(t,n,r,a),renderState:i()};return o&&(s.mount=function(e){return o(t,e,s)}),s}var Q=function(e){return function(t,n){var r=Object(a.useContext)(d),i=Object(a.useContext)(p.a);return n?$(e,t,r,i):Object(O.a)((function(){return $(e,t,r,i)}))}};function ee(e,t,n,a){var i={},o=!1===(null===n||void 0===n?void 0:n.initial),s=a(e);for(var l in s)i[l]=E(s[l]);var c=e.initial,u=e.animate,d=Object(g.a)(e),p=Object(g.b)(e);t&&p&&!d&&!1!==e.inherit&&(null!==c&&void 0!==c||(c=t.initial),null!==u&&void 0!==u||(u=t.animate));var f=o||!1===c,m=f?u:c;m&&"boolean"!==typeof m&&!Object(Z.a)(m)&&(Array.isArray(m)?m:[m]).forEach((function(t){var n=Object(g.f)(e,t);if(n){var a=n.transitionEnd;n.transition;var o=Object(r.__rest)(n,["transitionEnd","transition"]);for(var s in o){var l=o[s];if(Array.isArray(l))l=l[f?l.length-1:0];null!==l&&(i[s]=l)}for(var s in a)i[s]=a[s]}}));return i}var te={useVisualState:Q({scrapeMotionValuesFromProps:J.a,createRenderState:N,onMount:function(e,t,n){var r=n.renderState,a=n.latestValues;try{r.dimensions="function"===typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(i){r.dimensions={x:0,y:0,width:0,height:0}}Object(q.a)(r,a,{enableHardwareAcceleration:!1},e.transformTemplate),Object(G.a)(t,r)}})},ne={useVisualState:Q({scrapeMotionValuesFromProps:n(27).a,createRenderState:I})};var re=function(e){function t(t,n){return void 0===n&&(n={}),M(e(t,n))}if("undefined"===typeof Proxy)return t;var n=new Map;return new Proxy(t,{get:function(e,r){return n.has(r)||n.set(r,t(r)),n.get(r)}})}((function(e,t,n,a,i){var o=t.forwardMotionProps,s=void 0!==o&&o,l=Object(L.a)(e)?te:ne;return Object(r.__assign)(Object(r.__assign)({},l),{preloadedFeatures:n,useRender:K(s),createVisualElement:a,projectionNodeConstructor:i,Component:e})}))}}]);
//# sourceMappingURL=1.a14074d0.chunk.js.map