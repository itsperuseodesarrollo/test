!function(f,l,e){var n=/\+/g;function d(e){return e}function m(e){return decodeURIComponent(e.replace(n," "))}var v=f.cookie=function(e,n,o){if(void 0!==n){if(o=f.extend({},v.defaults,o),null===n&&(o.expires=-1),"number"==typeof o.expires){var r=o.expires,t=o.expires=new Date;t.setDate(t.getDate()+r)}return n=v.json?JSON.stringify(n):String(n),l.cookie=[encodeURIComponent(e),"=",v.raw?n:encodeURIComponent(n),o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")}for(var i=v.raw?d:m,u=l.cookie.split("; "),a=0,s=u.length;a<s;a++){var p=u[a].split("=");if(i(p.shift())===e){var c=i(p.join("="));return v.json?JSON.parse(c):c}}return null};v.defaults={},f.removeCookie=function(e,n){return null!==f.cookie(e)&&(f.cookie(e,null,n),!0)}}(jQuery,document);