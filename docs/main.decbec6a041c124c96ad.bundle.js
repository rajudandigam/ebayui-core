(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1002:function(e,t,n){"use strict";n.r(t);n(525),n(703);var i=n(0),r=n.n(i),o=n(86),c=n.n(o),a=n(22);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l="ebay.github.io"===location.host?"/ebayui-core/":"/",u=[{id:"1",title:"DS6",href:""+l},{id:"2",title:"DS4",href:l+"ds4/"}].map(function(e){return s({},e,{href:e.href+(location.search||""),active:location.pathname===e.href,onClick:function(t){t.preventDefault(),location.replace(e.href+(location.search||""))}})}),h=function(){return r.a.createElement(a.WithTooltip,{placement:"top",trigger:"click",closeOnClick:!0,tooltip:function(){return r.a.createElement(a.TooltipLinkList,{links:u})}},r.a.createElement(a.IconButton,{title:"Set the design system for the components"},r.a.createElement(a.Icons,{icon:"paintbrush"})))};c.a.register("ebayui/theme-switcher",function(){c.a.add("ebayui/theme-switcher",{type:o.types.TOOL,title:"design system switcher",match:function(e){return"story"===e.viewMode},render:function(){return r.a.createElement(h,null)}})})},415:function(e,t,n){n(416),n(1002),e.exports=n(885)},437:function(e,t){}},[[415,1,2]]]);