(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"108f":function(e,t,r){"use strict";var o=r("4915"),a=r.n(o);a.a},"1e3f":function(e,t,r){"use strict";var o=r("78b6"),a=r.n(o);a.a},4915:function(e,t,r){},"78b6":function(e,t,r){},bb51:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home columns"},[r("Map",{staticClass:"map column col-8"}),r("Sidebar",{staticClass:"column col-4"})],1)},a=[],n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.map?r("yandex-map",{staticStyle:{width:"100%",height:"100vh"},attrs:{coords:[51.65,39.15],zoom:"13","cluster-options":{1:{clusterDisableClickZoom:!1}},behaviors:["default"],controls:["typeSelector"],"map-type":"map"}},e._l(e.filtered,function(t){return r("ymap-marker",{key:t.id,attrs:{callbacks:{click:function(){e.markerSelect(t)}},"v-show":t.visible,"marker-id":t.id,"marker-type":"placemark",coords:t.coords,"hint-content":t.name,icon:{layout:"default#image",imageHref:t.img,imageSize:[50,50]},"cluster-name":"1"}})})):e._e()],1)},i=[],s=r("be94"),c=r("2b0e"),l=r("e151"),u=r.n(l),p=r("2f62"),m=r("5cfa");c["a"].use(u.a);var d={name:"Map",computed:Object(s["a"])({},Object(p["b"])(["markers","map","filtered"])),methods:{markerSelect:function(e){m["a"].$emit("markerSelect",e)}}},f=d,y=(r("1e3f"),r("2877")),h=Object(y["a"])(f,n,i,!1,null,"2d977dea",null);h.options.__file="Map.vue";var b=h.exports,v=r("5ea5"),k={name:"home",components:{Map:b,Sidebar:v["a"]}},g=k,C=(r("108f"),Object(y["a"])(g,o,a,!1,null,"26ed6553",null));C.options.__file="Home.vue";t["default"]=C.exports},e151:function(e,t,r){!function(e,r){r(t)}(0,function(e){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),a=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)};function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}function i(e,r){var o=[];return function e(r,a){if(r===a)return!0;if(r instanceof Date&&a instanceof Date)return+r==+a;if("object"!==(void 0===r?"undefined":t(r))||"object"!==(void 0===a?"undefined":t(a)))return!1;if(function(e,t){for(var r=o.length;r--;)if(!(o[r][0]!==e&&o[r][0]!==t||o[r][1]!==t&&o[r][1]!==e))return!0;return!1}(r,a))return!0;o.push([r,a]);var n=Object.keys(r),i=n.length;if(Object.keys(a).length!==i)return!1;for(;i--;)if(!e(r[n[i]],a[n[i]]))return!1;return!0}(e,r)}var s=new(function(){function e(){r(this,e),this.events={},this.ymapReady=!1,this.scriptIsNotAttached=!0}return o(e,[{key:"$on",value:function(e,t){var r=this;return this.events[e]||(this.events[e]=[]),this.events[e].push(t),function(){r.events[e]=r.events[e].filter(function(e){return t!==e})}}},{key:"$emit",value:function(e,t){var r=this.events[e];r&&r.forEach(function(e){return e(t)})}}]),e}()),c=["fullscreenControl","geolocationControl","routeEditor","rulerControl","searchControl","trafficControl","typeSelector","zoomControl"];function l(e){return 0===e.filter(function(e){return![].concat(c,["default"]).includes(e)}).length}function u(e,t){var r=n(e);if(!t)return r;switch(r){case"Placemark":return"Point";case"Polyline":return"LineString";default:return r}}function p(e,r){var o=r?{type:"Feature",id:e.properties.markerId,geometry:{type:e.markerType,coordinates:e.coords},properties:e.properties,options:e.options}:new ymaps[e.markerType](e.coords,e.properties,e.options);return o.clusterName=e.clusterName,r||function(e,r){if(e&&"object"===(void 0===e?"undefined":t(e)))for(var o in e)r.events.add(o,e[o])}(e.callbacks,o),o}var m={data:function(){return{ymapEventBus:s,ymapId:"yandexMap"+Math.round(1e5*Math.random()),myMap:{},style:this.ymapClass?"":"width: 100%; height: 100%;"}},props:{coords:{type:Array,validator:function(e){return!e.filter(function(e){return isNaN(e)}).length},required:!0},zoom:{validator:function(e){return!isNaN(e)},default:18},clusterOptions:{type:Object,default:function(){return{}}},clusterCallbacks:{type:Object,default:function(){return{}}},behaviors:{type:Array,default:function(){return["default"]}},controls:{type:Array,default:function(){return["default"]},validator:function(e){return l(e)}},detailedControls:{type:Object,validator:function(e){return l(Object.keys(e))}},scrollZoom:{type:Boolean,default:!0},zoomControl:Object,mapType:{type:String,default:"map",validator:function(e){return["map","satellite","hybrid"].includes(e)}},placemarks:{type:Array,default:function(){return[]}},useObjectManager:{type:Boolean,default:!1},objectManagerClusterize:{type:Boolean,default:!0},ymapClass:String,initWithoutMarkers:{type:Boolean,default:!0},mapLink:String},computed:{coordinates:function(){return this.coords.map(function(e){return+e})}},methods:{init:function(){var e=this;if(window.ymaps&&ymaps.GeoObjectCollection&&(this.initWithoutMarkers||this.$slots.default||this.placemarks.length)){this.$emit("map-initialization-started");for(var t=[],r=this.$slots.default&&this.$slots.default.map(function(e){var t=e.componentOptions&&e.componentOptions.propsData;if(t){var r={};t.balloonTemplate&&(r={balloonContentLayout:ymaps.templateLayoutFactory.createClass(t.balloonTemplate)});var o={markerId:t.markerId,markerType:t.markerType,coords:function e(t){return t.map(function(t){return Array.isArray(t)?e(t):+t})}(t.coords),hintContent:t.hintContent,markerFill:t.markerFill,circleRadius:+t.circleRadius,clusterName:t.clusterName,markerStroke:t.markerStroke,balloon:t.balloon,callbacks:t.callbacks,properties:t.properties,options:t.options,balloonOptions:r};return t.icon&&"default#image"===t.icon.layout?(o.iconLayout=t.icon.layout,o.iconImageHref=t.icon.imageHref,o.iconImageSize=t.icon.imageSize,o.iconImageOffset=t.icon.imageOffset):o.icon=t.icon,o}}).filter(function(e){return e&&e.markerType})||[],o=0;o<r.length;o++){var i=r[o],s=u(i.markerType,this.useObjectManager),c={hintContent:i.hintContent,iconContent:i.icon&&i.icon.content,markerId:i.markerId},l=i.balloon?{balloonContentHeader:i.balloon.header,balloonContentBody:i.balloon.body,balloonContentFooter:i.balloon.footer}:{},m=Object.assign(c,l,i.properties),d=i.iconLayout?{iconLayout:i.iconLayout,iconImageHref:i.iconImageHref,iconImageSize:i.iconImageSize,iconImageOffset:i.iconImageOffset}:{preset:i.icon&&"islands#"+(v=i,(v.icon.color||"blue")+(v.icon.glyph?n(v.icon.glyph):v.icon.content?"Stretchy":""))+"Icon"},f=i.markerStroke?{strokeColor:i.markerStroke.color||"0066ffff",strokeOpacity:parseFloat(i.markerStroke.opacity)>=0?parseFloat(i.markerStroke.opacity):1,strokeStyle:i.markerStroke.style,strokeWidth:parseFloat(i.markerStroke.width)>=0?parseFloat(i.markerStroke.width):1}:{},y=i.markerFill?{fill:i.markerFill.enabled||!0,fillColor:i.markerFill.color||"0066ff99",fillOpacity:parseFloat(i.markerFill.opacity)>=0?parseFloat(i.markerFill.opacity):1,fillImageHref:i.markerFill.imageHref||""}:{},h=Object.assign(d,f,y,i.balloonOptions,i.options);"Circle"===s&&(i.coords=[i.coords,i.circleRadius]);var b=p({properties:m,options:h,markerType:s,coords:i.coords,clusterName:i.clusterName,callbacks:i.callbacks},this.useObjectManager);t.push(b)}var v;if(this.placemarks){var k=this.useObjectManager?"Point":"Placemark";this.placemarks.forEach(function(r){var o=r.properties,a=r.options,n=void 0===a?{}:a,i=r.coords,s=r.clusterName,c=r.callbacks,l=r.balloonTemplate;if(l){var u=ymaps.templateLayoutFactory.createClass(l);n.balloonContentLayout=u}var m=p({properties:o,options:n,markerType:k,coords:i,clusterName:s,callbacks:c},e.useObjectManager);t.push(m)})}this.myMap=new ymaps.Map(this.ymapId,{center:this.coordinates,zoom:+this.zoom,behaviors:this.behaviors,controls:this.controls,type:"yandex#"+this.mapType}),this.zoomControl&&(this.myMap.controls.remove("zoomControl"),this.myMap.controls.add(new ymaps.control.ZoomControl(this.zoomControl))),this.detailedControls&&Object.keys(this.detailedControls).forEach(function(t){e.myMap.controls.remove(t),e.myMap.controls.add(t,e.detailedControls[t])}),!1===this.scrollZoom&&this.myMap.behaviors.disable("scrollZoom");var g={options:this.clusterOptions,callbacks:this.clusterCallbacks,map:this.myMap,useObjectManager:this.useObjectManager,objectManagerClusterize:this.objectManagerClusterize};!function(e,t){var r=t.options,o=t.callbacks,n=t.map,i=t.useObjectManager,s=t.objectManagerClusterize,c={},l=[],u=!0,p=!1,m=void 0;try{for(var d,f=e[Symbol.iterator]();!(u=(d=f.next()).done);u=!0){var y=d.value;y.clusterName?c[y.clusterName]=c[y.clusterName]?[].concat(a(c[y.clusterName]),[y]):[y]:l.push(y)}}catch(e){p=!0,m=e}finally{try{!u&&f.return&&f.return()}finally{if(p)throw m}}for(var h in c){var b=r[h]||{},v=o[h]||{},k=b.layout||"\n      <div>{{ properties.balloonContentHeader }}</div>\n      <div>{{ properties.balloonContentBody }}</div>\n      <div>{{ properties.balloonContentFooter }}</div>\n    ";if(b.clusterBalloonItemContentLayout=ymaps.templateLayoutFactory.createClass(k),i){var g=new ymaps.ObjectManager(Object.assign({clusterize:s},b));for(var C in v)g.clusters.events.add(C,v[C]);g.add(c[h]),n.geoObjects.add(g)}else{var O=new ymaps.Clusterer(b);for(var M in v)O.events.add(M,v[M]);O.add(c[h]),n.geoObjects.add(O)}}if(l.length){var j=i?new ymaps.ObjectManager({clusterize:!1}):new ymaps.GeoObjectCollection;l.forEach(function(e){return j.add(e)}),n.geoObjects.add(j)}}(t,g),this.$emit("map-was-initialized",this.myMap)}}},watch:{coordinates:function(e){this.myMap.panTo&&this.myMap.panTo(e)},placemarks:function(){window.ymaps&&(this.myMap.destroy&&this.myMap.destroy(),this.init())},zoom:function(){this.myMap.setZoom(this.zoom)}},render:function(e){return e("section",{class:"ymap-container"},[e("div",{attrs:{id:this.ymapId,class:this.ymapClass,style:this.style}}),e("div",{attrs:{class:"ymap-markers"}},[this.$slots.default])])},mounted:function(){var e=this;if(this.observer=new MutationObserver(function(e){this.myMap.destroy&&this.myMap.destroy(),this.init()}.bind(this)),this.observer.observe(document.querySelector(".ymap-markers"),{attributes:!0,childList:!0,characterData:!0,subtree:!0}),this.ymapEventBus.scriptIsNotAttached){var t=document.createElement("SCRIPT"),r=this.mapLink||"https://api-maps.yandex.ru/2.1/?lang=ru_RU";t.setAttribute("src",r),t.setAttribute("async",""),t.setAttribute("defer",""),document.body.appendChild(t),this.ymapEventBus.scriptIsNotAttached=!1,t.onload=function(){e.ymapEventBus.ymapReady=!0,e.ymapEventBus.$emit("scriptIsLoaded")}}this.ymapEventBus.ymapReady?ymaps.ready(this.init):this.ymapEventBus.$on("scriptIsLoaded",function(){e.ymapEventBus.initMap=function(){e.myMap.destroy(),e.init()},ymaps.ready(e.init)})},beforeDestroy:function(){this.myMap.geoObjects&&this.myMap.geoObjects.removeAll(),this.observer.disconnect()}},d={data:function(){return{ymapEventBus:s,unwatchArr:[]}},props:{coords:{type:Array,required:!0},hintContent:String,icon:Object,balloon:Object,markerType:{type:String,required:!0},markerFill:Object,markerStroke:Object,clusterName:String,circleRadius:{validator:function(e){return!isNaN(e)},default:1e3},callbacks:Object,balloonTemplate:String,markerId:{type:[String,Number],required:!0},properties:Object,options:Object},render:function(){},mounted:function(){var e=this;for(var t in this.$props)this.unwatchArr.push(this.$watch(t,function(t,r){return o=t,a=r,n=e.ymapEventBus,void(i(o,a)||(n.rerender&&clearTimeout(n.rerender),n.rerender=setTimeout(function(){return n.initMap&&n.initMap()},10)));var o,a,n}))},beforeDestroy:function(){this.unwatchArr.forEach(function(e){return e()})}};m.install=function(e){e.component("yandex-map",m),e.component("ymap-marker",d)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(m);var f=m,y=d;e.yandexMap=f,e.ymapMarker=y,e.default=m,Object.defineProperty(e,"__esModule",{value:!0})})}}]);
//# sourceMappingURL=home.79f58df1.js.map