(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/uZM":function(e,t,a){e.exports={layout:"layout-module--layout--mFaKB"}},"4EwZ":function(e,t,a){e.exports=a.p+"static/diamond-e22c93180101483314067b46f4f8e0dc.png"},"8H+o":function(e,t,a){e.exports=a.p+"static/logo-enci-orange-2d7668c930a87749d6d6249067de136b.png"},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(_&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(_&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),a=m(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,_="undefined"!=typeof window,v=_&&window.IntersectionObserver,y=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+d+l+s+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=d.default.createElement(R,(0,o.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?d.default.createElement("picture",null,i(r),s):s})),R=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=_&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||_&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:_}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,_=e.durationFadeIn,v=e.Tag,y=e.itemProp,S=e.loading,O=e.draggable,L=h||g;if(!L)return null;var z=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,o.default)({opacity:z?1:0,transition:C?"opacity "+_+"ms":"none"},s),V="boolean"==typeof b?"lightgray":b,H={transitionDelay:_+"ms"},P=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&H,s,f),W={title:t,alt:this.state.isVisible?"":a,style:P,className:m,itemProp:y},T=this.state.isHydrated?p(L):L[0];if(h)return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),V&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&H)}),T.base64&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:W,imageVariants:L,generateSources:x}),T.tracedSVG&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:W,imageVariants:L,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,E(L),d.default.createElement(R,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,o.default)({alt:a,title:t,loading:S},T,{imageVariants:L}))}}));if(g){var j=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete j.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},V&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},C&&H)}),T.base64&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:W,imageVariants:L,generateSources:x}),T.tracedSVG&&d.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:W,imageVariants:L,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,E(L),d.default.createElement(R,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,o.default)({alt:a,title:t,loading:S},T,{imageVariants:L}))}}))}return null},t}(d.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),k=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function V(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}z.propTypes={resolutions:C,sizes:k,fixed:V(c.default.oneOfType([C,c.default.arrayOf(C)])),fluid:V(c.default.oneOfType([k,c.default.arrayOf(k)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var H=z;t.default=H},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("aOmW"),l=a.n(n),s=a("4EwZ"),o=a.n(s),d=a("8H+o"),c=a.n(d),u=a("iSAk"),f=a.n(u),m=function(){return i.a.createElement("div",{className:l.a.header},i.a.createElement("div",{className:l.a.header__logo},i.a.createElement("img",{src:o.a,alt:"logo diamante"})),i.a.createElement("div",{className:l.a.header__clubs},i.a.createElement("img",{className:l.a.header__clubs__fci,src:f.a,alt:"logo fci"}),i.a.createElement("img",{className:l.a.header__clubs__enci,src:c.a,alt:"logo enci"})),i.a.createElement("h1",{className:l.a.header__title},"La Corte dei Grandi"),i.a.createElement("h2",{className:l.a.header__subtitle},"Allevamento cinofilo per la selezione del ",i.a.createElement("span",null,"Cavalier King Charles Spaniel")))},p=a("SxA4"),h=a.n(p),g=function(){return i.a.createElement("div",{className:h.a.footer},"Per qualunque problema di tipo tecnico contattare il ",i.a.createElement("a",{href:"mailto:m.buscaroli+la-corte-dei-grandi@outlook.com"},"Webmaster"),".")},b=a("Wbzz"),_=a("Lnxd"),v=a("ma3e"),y=a("SJmh"),E=a.n(y);var S=function(){return i.a.createElement("div",{className:E.a.navbar},i.a.createElement("ul",{className:E.a.navbar__items},i.a.createElement("li",{className:E.a.navbar__item+" "+E.a.navbar__items__1},i.a.createElement(b.Link,{to:"/"},"Home")),i.a.createElement("li",{className:E.a.navbar__item+" "+E.a.navbar__items__2},i.a.createElement(b.Link,{to:"/about"},"Chi siamo")),i.a.createElement("li",{className:E.a.navbar__item+" "+E.a.navbar__items__3},i.a.createElement(b.Link,{to:"/pets"},"Cuccioli")),i.a.createElement("li",{className:E.a.navbar__item+" "+E.a.navbar__items__4},i.a.createElement(b.Link,{to:"/contacts"},"Contatti")),i.a.createElement("li",{className:E.a.navbar__item+" "+E.a.navbar__items__5},i.a.createElement("a",{href:"https://www.facebook.com/lacortedeigrandi/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(_.b.Provider,{value:{style:{color:"#ff8c00",fontSize:"4rem"}}},i.a.createElement("div",null,i.a.createElement(v.a,null)))))))},w=a("/uZM"),x=a.n(w);t.a=function(e){return i.a.createElement("div",{className:x.a.layout},i.a.createElement(S,null),i.a.createElement(m,null),e.children,i.a.createElement(g,null))}},FWol:function(e,t,a){e.exports={title:"pets-module--title--xTdmK",gallery:"pets-module--gallery--3SYoN",gallery__pic:"pets-module--gallery__pic--2qtq_"}},JE4e:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),l=a("9eSz"),s=a.n(l),o=a("Bl7J"),d=a("FWol"),c=a.n(d);t.default=function(){var e=Object(n.useStaticQuery)("2934299509").allFile.nodes.map((function(e){return e?i.a.createElement("div",{key:e.id,className:c.a.gallery__div},i.a.createElement(s.a,{className:c.a.gallery__pic,fluid:e.childImageSharp.fluid,alt:"cucciolo"})):""}));return i.a.createElement(o.a,null,i.a.createElement("div",null,i.a.createElement("div",{className:c.a.title},"I Nostri Cuccioli"),i.a.createElement("div",{className:c.a.gallery},e)))}},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return l}));var r=a("q1tI"),i=a.n(r),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=i.a.createContext&&i.a.createContext(n),s=function(){return(s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},o=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]])}return a};function d(e){return function(t){return i.a.createElement(c,s({attr:s({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return i.a.createElement(t.tag,s({key:a},t.attr),e(t.child))}))}(e.child))}}function c(e){var t=function(t){var a,r=e.attr,n=e.size,l=e.title,d=o(e,["attr","size","title"]),c=n||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),i.a.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,d,{className:a,style:s(s({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&i.a.createElement("title",null,l),e.children)};return void 0!==l?i.a.createElement(l.Consumer,null,(function(e){return t(e)})):t(n)}},SJmh:function(e,t,a){e.exports={navbar:"navbar-module--navbar--3b3h2",navbar__items:"navbar-module--navbar__items--2fr8V",navbar__items__1:"navbar-module--navbar__items__1--2bfRg",navbar__items__2:"navbar-module--navbar__items__2--3x1mG",navbar__items__3:"navbar-module--navbar__items__3--2iysP",navbar__items__4:"navbar-module--navbar__items__4--1ViOc",navbar__items__5:"navbar-module--navbar__items__5--2lint",navbar__item:"navbar-module--navbar__item--2BHcO"}},SxA4:function(e,t,a){e.exports={footer:"footer-module--footer--R2bpz"}},aOmW:function(e,t,a){e.exports={header:"header-module--header--3A712",header__logo:"header-module--header__logo--2KCOC",header__clubs:"header-module--header__clubs--24oYX",header__clubs__fci:"header-module--header__clubs__fci--1sD-Q",header__clubs__enci:"header-module--header__clubs__enci--2Zgf7",header__title:"header-module--header__title--cFwQT",header__subtitle:"header-module--header__subtitle--1GM6u"}},iSAk:function(e,t,a){e.exports=a.p+"static/logo-fci-orange-dd8080c18c56172cc2fa516e3e9aaf32.png"}}]);
//# sourceMappingURL=component---src-pages-pets-js-c22c48017db74d359441.js.map