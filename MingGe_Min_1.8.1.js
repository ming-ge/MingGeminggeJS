/*  MingGEjs类库1.8.1
 *  
 *  你会用JQUERY，那你也会用这个类库，因为语法都是一样的,那有开发文档吗？和JQUERY一样，要开发文档干嘛？
 *
 *  MingGe的运行绝对比JQUERY快，因为够精简，MingGejs是你的最佳选择，请多多支持，
 *
 *  作者：明哥先生-QQ399195513 QQ群：461550716 官网：www.shearphoto.com
 */
!function(a,b,c){var f,g,h,i,H,d="1.8.1",e=document,j=encodeURIComponent,k=!!e.getElementsByClassName,l=!!e.querySelectorAll,m=Array.prototype.slice,n=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,o=Object.prototype.toString,p={fast:200,slow:600,normal:400},q=/alpha\([^)]*\)/,r=/^\s*(matrix3d|translate3d|translateX|translateY|translateZ|scale3d|scaleX|scaleY|scaleZ|rotate3d|rotateX|rotateY|rotateZ|perspective|matrix|translate|translateX|translateY|scale|scaleX|scaleY|rotate|skew|skewX|skewY)\s*$/i,s=function(a){a=a.toLowerCase();var b=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},t=function(a){var b=n.exec(a),c=!1;return null===b?!1:c=b[1]?["getElementById","id",b[1],{Id:!0}]:b[2]?["getElementsByTagName","tagName",b[2],{Tag:!0}]:["getElementsByClassName","className",b[3],{Class:!0}]},u=function(a){return a.replace(/[\t\r\n\f\v]/g,function(a){return{"\t":"\\t","\r":"\\r","\n":"\\n","\f":"\\f","\v":"\\v"}[a]}).replace(/[\x00-\x1f\x7f-\x9f\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,function(a){return"\\u"+("000"+a.charCodeAt(0).toString(16)).slice(-4)}).replace(/\\([\}\]])/g,function(a,b){return b})},v=function(a){return a.replace(/[\]\}\"\'\\\/]/g,function(a){return"\\"+a})},w={forEve:function(a,b,c,d,e){var g,h,i;e?(h=e,g=this.mouse(c,d,b)):(g=c,h=b),i=this.bindCallback.call(a,g,h,d,e),i.callback=c,d&&(i.callback.isOne=1),this.addElemEve(a,b,i),f(a,h,i)},transform:!1,bindCallback:function(b,c,d,e){var f=this;return function(g){d!==!0||e||w.DelElemEve(f,c,b),b.call(f,g||a.event)}},isMouse:function(a){var b={mouseenter:"mouseover",mouseleave:"mouseout"}[a];return b&&f.add?b:null},mouse:function(b,c,d){var f=[],g=[];return function(h){var i=h.relatedTarget,j=i;if(null==i||g.indexOf(i)>-1){return c&&w.DelElemEve(this,d,b),b.call(this,h),void 0}if(!(this==a||this==e||i==this||f.indexOf(i)>-1)){for(;i&&i!=this;){try{i=i.parentNode}catch(k){break}}if(i==this){return f.push(j),!1}g.push(j),c&&w.DelElemEve(this,d,b),b.call(this,h)}}},setScroll_LT:function(a,b){if(h){h[a]=b}else{var c=e.documentElement,d=e.body;c?(c[a]=b,c[a]?h=c:(d[a]=b,d[a]&&(h=d))):(h=d,d[a]=b)}},getScroll_LT:function(a){var b,c,d;return h?h[a]:(b=e.documentElement,c=e.body,b?(d=b[a])?(h=b,d):(d=c[a],d?(h=c,d):0):(h=c,c[a]))},setS:function(b,c){return G.isUndefined(c)?w.getCS.call(this,b,!0):(c=parseFloat(c),G.isNumber(c)&&G.each.call(this.nodeList,function(){try{this==a||this==e?w.setScroll_LT(b,c):this[b]=c}catch(d){}}),this)},winWH:function(a){var b=e.documentElement||e.body,c="scroll"+a,d="client"+a;return Math.max(b[c],b[d])},getCS:function(b,c){var d=this.nodeList[0];if(d&&(d==a||d==e)){return c?w.getScroll_LT(b):(e.documentElement||e.body)[b]}try{return d[b]}catch(f){return}},getFilter:function(a){var b;return(b=w.original("filter",w.oStyleValue(a)))?(b=/opacity\s*=\s*([0-9]+)/.exec(b),b=b?0.01*parseInt(b[1]):1):b=1,b},getDisplay:function(a){if(/^(div|ul|p|h1|h2|h3|h4|h5|h6|dd|dt|dl|ol|table|nav|form)$/i.test(a)){return"block"}if(/^(span|ul|b|a|em|strong|img)$/i.test(a)){return"inline"}if(/^li$/i.test(a)){return"list-item"}if(/^(input|button)$/i.test(a)){return"inline-block"}if("TD"==a){return"table-cell"}if("TR"==a){return"table-row"}var d,b=e.createElement(a),c=e.body;return b.style.visibility="hidden",c.appendChild(b),d=w.original("display",w.oStyleValue(b)),c.removeChild(b),d},seachIndex:function(a,b){return a[0] in b?a[0]:a[1] in b?a[1]:!1},isIndex:function(a,b){return a in b},jsonp:function(b){var k,m,n,p,q,c=H(b.url),d=H(b.jsonp),e=H(b.jsonpCallback),f=b.success,g=b.timeout,h=b.error,i=b.data,l=G.isTxt(d),o=G.isString(e)?j(m=e):m="MingGe"+Math.random().toString().slice(2);try{if(d=l?j(d):"callback",c=c.replace(/([^\?&\\\/]+?)\s*=\s*\?+$/,function(a,b){return k=!0,(l?d:b)+"="+o}),k||(c=G.urlRevise(c,d+"="+o)),c=G.urlRevise(c,G.objToUrl(i)),null==a[m]){return G.isFunction(b.complete)&&b.complete(),p=function(){q&&q[0].removeChild(q[1]);try{delete a[m]}catch(b){a[m]=null}},a[m]=function(a){n&&(clearTimeout(n),n=null),G.isFunction(f)&&f(w.JsonString.StringToJson(a)||a,"success"),p()},q=G.createScript(c),g||(g=30000),n=setTimeout(function(){G.isFunction(h)&&h(505),p()},g),!0}}catch(r){G.isFunction(h)&&h(500)}return !1},addElemEve:function(b,c,d){b===a&&(b=G);var e=b.MingGeBind,f=G.isObject(e);f&&G.isArray(e[c])?e[c].push(d):(f||(b.MingGeBind=e={}),e[c]=[d])},eachDel:function(a,b,c,d){var e=[];return G.each(a,function(a,f){c&&f.callback!=c?e.push(f):g(b,d,f)}),e},DelElemEve:function(b,c,d){var e,g,f=b===a?(e=G).MingGeBind:(e=b).MingGeBind;f&&(c?(g=this.isMouse(c)||c,f[c]&&(f[c]=this.eachDel(f[c],b,d,g),G.isEmptyObject(f[c])&&delete f[c])):G.each(f,function(a,c){g=w.isMouse(a)||a,f[a]=w.eachDel(c,b,d,g),G.isEmptyObject(f[a])&&delete f[a]}),G.isEmptyObject(f)&&delete e.MingGeBind)},htmlVal:function(a,b){try{return G.isTxt(b)?(G.each.call(this.nodeList,function(){w.isIndex(a,this)&&(this[a]=b)}),this):this.nodeList[0]?this.nodeList[0][a]:null}catch(d){return null}},oStyleValue:function(b){var c=b.currentStyle?b.currentStyle:a.getComputedStyle(b,null);return c.getPropertyValue?[c,"getPropertyValue"]:[c,"getAttribute"]},original:function(a,b){return b[0][b[1]](G.styleName(a))},find:function(a){var b,e,c=0,d=new G();if(e=z(a)){for(;b=this.nodeList[c++];){y.call(d,b,e)}d.nodeList=A(d.nodeList)}return d},filter:function(a){var b,e,f,c=0,d=new G();if(d.SelectorTxt=this.SelectorTxt,e=t(a),!e){return d}for(f=new RegExp("(^|\\s)"+e[2]+"(\\s|$)",e[3].Tag&&"i");b=this.nodeList[c++];){f.test(b[e[1]])&&d.nodeList.push(b),d.nodeList=A(d.nodeList)}return d},animate:function(a,b,c,d){d=H(d),d=G.isString(d)&&/^(linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier\s*\(.+\))$/.test(d)?d:"ease-out";var h,e=w.transition+"TimingFunction",f={},g=this,i=function(){h&&(clearInterval(h),h=null);for(var a,d,b=0;a=g.nodeList[b++];){try{a.isMingGeAnimate&&(d=a.style,d[w.transition]=d[e]=null,c.call(a))}catch(f){}}};return f[w.transition]=b+"ms",f[e]=d,this.css(f),setTimeout(function(){g.css(a)},5),h=setInterval(w.timeCompute(new Date().getTime(),b-1,i),5),this},cmdFun:function(a){try{return{"\u5916\u524d":"beforeBegin",beforeBegin:"beforeBegin","\u5916\u540e":"afterEnd",afterEnd:"afterEnd","\u5185\u524d":"afterBegin",afterBegin:"afterBegin"}[a=G.trim(a)]||"beforeEnd"}catch(b){return"beforeEnd"}},insertHTML:function(a,b){return b=w.cmdFun(b),a=H(a),G.isTxt(a)&&this.each(function(){try{this.insertAdjacentHTML(b,a)}catch(c){}}),this},createNode:function(a,b,c){var f,g,h,i,j,k,d=new G(),l={};return a=G.trim(a),G.isTxt(b)?l.html=G.trim(b):G.isObject(b)&&(l=b,l.value&&(l.html=l.value,delete l.value)),c=w.cmdFun(c),f=function(){try{h=e.createElement("div"),i=e.createElement(a),j="MingGeTemp"+Math.random().toString().slice(2),k,g=g||w.seachIndex(["value","innerHTML"],i),h.appendChild(i);for(k in l){"id"!=k&&G.isTxt(l[k])&&("html"==k||i.setAttribute(k,l[k]))}i.id=j,this.insertAdjacentHTML(c,h.innerHTML),i=e.getElementById(j),l.id?i.id=l.id:i.removeAttribute?i.removeAttribute("id"):i.id="",l.html&&g&&(i[g]=l.html)}catch(b){}i&&d.nodeList.push(i)},this.each(f),d.SelectorTxt=e.body,d.SelectorStr="000",d},timeCompute:function(a,b,c){return function(){var d=new Date().getTime()-a;(d>b||0>d)&&c()}},ajax:function(){this.serverdata=this.erromsg=this.timeout=this.stop=this.xmlhttp=!1,this.transit=!0},ajaxPrototype:{get:function(a,b,c){return this.simplify(a,"get",!0,b,c,20000,!0)},post:function(a,b,c){return this.simplify(a,"post",!0,b,c,20000,!1)},getJSON:function(a,b,c){return this.simplify(a,"get",!0,b,c,20000,!0,/[\?&]+.+\s*=\s*\?/.test(a)?"jsonp":"json")},simplify:function(a,b,c,d,e,f,g,h){if(G.isFunction(d)){var i=e;e=d,d=i||null}return this.ajax({url:a,type:b,dataType:h,timeout:f,async:c,lock:!0,cache:g,complete:!1,data:d,success:e}),this},Del:function(a,b,c){try{a.onreadystatechange=null}catch(d){a.onreadystatechange=function(){}}this.stop!==!0&&(this.removeUploadEve(),this.timeout&&(clearTimeout(this.timeout),this.timeout=!1),this.erromsg=b,this.transit=!0,G.isFunction(c.error)&&c.error(b))},handle:function(a,b){if(4==a.readyState){if(this.stop===!0){return}if(this.transit=!0,this.removeUploadEve(),this.timeout&&(clearTimeout(this.timeout),this.timeout=!1),200==a.status){try{a.onreadystatechange=null}catch(c){a.onreadystatechange=function(){}}var d=this.serverdata=H(a.responseText);G.isFunction(b.success)&&("JSON"==b.dataType&&(d=w.JsonString.StringToJson(d)||d),b.success(d,"success"))}else{this.Del(a,"\u72b6\u6001\uff1a"+a.status,b)}}else{0==a.readyState&&this.Del(a,0,b)}},out:function(a,b){try{b.onreadystatechange=null}catch(c){b.onreadystatechange=function(){}}this.transit=!0,this.erromsg=504,this.stop=!0,this.removeUploadEve(),G.isFunction(a.error)&&a.error(504)},removeUploadEve:function(){},ajax:function(b){var c,d,e,f,g;if(G.isString(b.url)){if(this.stop=this.erromsg=!1,b=G.extend({type:"GET",timeout:20000,async:!0},b),c=parseFloat(H(b.timeout)),b.timeout=0/0==c?20000:c,G.isString(b.dataType)&&"JSONP"==(b.dataType=H(b.dataType.toUpperCase()))){return w.jsonp(b)||alert('Operation failed, please check "jsonpCallback" settings'),void 0}if(!b.lock||this.transit){b.async=!!b.async,this.transit=!1,G.isString(b.type)&&(b.type=b.type.toUpperCase()),d=a.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP"),e=function(){d.setRequestHeader("Content-Type","application/x-www-form-urlencoded")},b.data=G.objToUrl(b.data),G.isTxt(b.data)?b.data=H(b.data):"[object FormData]"==o.call(b.data)?(G.isFunction(b.progress)&&(d.upload.addEventListener("progress",b.progress,!1),this.removeUploadEve=function(){d.upload.removeEventListener("progress",b.progress,!1)}),e=function(){},b.type="POST"):b.data="",f=""==b.data?null:b.data,g=this,G.isFunction(b.complete)&&b.complete(),b.async===!0&&(d.onreadystatechange=function(){g.handle(d,b)}),b.timeout&&b.async&&(this.timeout=setTimeout(function(){g.timeout=!1,g.out(b,d)},b.timeout));try{switch(b.type){case"POST":d.open("POST",b.url,b.async),e();break;default:d.open("GET",G.urlRevise(b.url,f),b.async),b.cache===!0||d.setRequestHeader("If-Modified-Since","0")}d.send(f)}catch(h){return this.Del(d,h,b),void 0}b.async===!1&&g.handle(d,b)}}}},JsonString:{_json_:null,JsonToString:function(a){try{this._json_=[],this._read_(a,!0);var b=u(this._json_.join("").replace(/,([\}\]])/g,function(a,b){return b}));return this._json_=null,b}catch(c){return alert("Format does not match, conversion fails"),void 0}},StringToJson:function(b,c){if(G.isString(b)){try{if(null==c&&/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return a.JSON&&a.JSON.parse?a.JSON.parse(b):new Function("return ("+b+")")()}if(c){var d=new Function("return ("+b+")")();return type=this._type_(d),"[object Object]"!==type&&"[object Array]"!==type?!1:d}return !1}catch(e){return !1}}},_type_:function(a){return G.isNumber(a.nodeType)?"[object DOC]":o.call(a)},_addjson_:function(a,b,c){var e={"[object Object]":b,"[object Array]":c};this._json_.push(e[a])},_addstring_:function(b){var d,c=typeof b;return"string"===c?'"'+v(b)+'"':"number"===c&&0/0!=b?b:null==b?"null":"boolean"===c?b.toString():(d=this._type_(b),"number"!=typeof b.nodeType&&b!=a&&"[object Object]"===d||"[object Array]"===d?!1:'""')},_read_:function(a,b){var d,e,f,c=this._type_(a);if(b&&"[object Object]"!==c&&"[object Array]"!==c){return alert("Your incoming is not an array or JSON"),this._json_=null}this._addjson_(c,"{","[",b),d=a.constructor.prototype;for(e in a){G.isUndefined(d[e])&&(f=this._addstring_(a[e]),"boolean"!=typeof f?this._addjson_(c,'"'+v(e)+'":'+f+",",f+","):(this._addjson_(c,'"'+v(e)+'":',""),this._read_(a[e],!1)))}b=b?"":",",this._addjson_(c,"}"+b,"]"+b)}},opacity:!1,transition:!1,style:function(a,b,c){var d,e,f,g,h,i;return c=G.isTxt(c)?H(c):"",r.test(b)?(e=new RegExp(""+b+"\\s?\\((.*)\\)","i"),f=a[w.transform],c?b+="("+c+")":b="",d=[w.transform,f?e.test(f)?f.replace(e,b):f+" "+b:b]):"opacity"==b?("opacity"==w.opacity?(i=parseFloat(c,10),d=["opacity",isNaN(i)?null:i]):(g=a.filter,h="NaN"==parseInt(c,10)+""?"":"alpha(opacity="+100*c+")",d=q.test(g)?["filter",g.replace(q,h)]:["filter",h]),d):[b,c]},ready:function(b){function c(){try{var d=function(){"complete"===e.readyState&&(f(e,"readystatechange",d),b())},g=a.frameElement}catch(h){return f(e,"readystatechange",d),void 0}if(null!=g){return f(e,"readystatechange",d),void 0}try{e.documentElement.doScroll("left")}catch(d){return setTimeout(c,13),void 0}b()}var d;G.isFunction(b)&&(e.addEventListener?(d=function(){e.removeEventListener("DOMContentLoaded",d,!1),b()},e.addEventListener("DOMContentLoaded",d,!1)):c())}},x=function(a){var c,d;try{return m.call(a)}catch(b){for(c=[],d=0;d<a.length;d++){c[d]=a[d]}return c}},y=function(a,b){var c,d,g,f,h,i;if(b[0]||b[1][3].Id&&e===a){return c=b[1][2],d=a[b[1][0]]("MingGeAllelem2015"===c?"*":c),d&&(d=b[1][3].Id?[d]:x(d),this.nodeList=this.nodeList.concat(d)),void 0}for(f=a.getElementsByTagName("*"),h=0,i=new RegExp("(^|\\s)"+b[1][2]+"(\\s|$)");g=f[h++];){i.test(g[b[1][1]])&&this.nodeList.push(g)}},z=function(a){var b=t(a);return b?[b[3].Tag||k&&b[3].Class,b]:!1},A=function(a){var b=0,c=[];if(a.item||G.isArray(a)){for(;b<a.length;b++){-1==G.inArray(a[b],c)&&c.push(a[b])}}return c},B=function(a,b,c){var g,i,k,l,f,h,j,m,n,d=a.match(/[^\,]+/g),e=b.match(/[^\,]+/g);if(d&&e){for(f="",h=" "==c,j=/^[\w-_]+/,m=0;m<d.length;m++){for(g=d[m]+c,l=h||(k=g.match(j)),n=0;n<e.length;n++){l?g==e[n]?f+=g+",":k?(i=e[n].match(j),i?i[0]==k[0]&&(f+=g+e[n].replace(j,"")+","):f+=g+e[n]+","):f+=g+e[n]+",":f+=e[n]+g+","}}return f.replace(/,+$/,"")}},C=function(b,c,d,f){var g,h,i,k,j;try{if(i=!1,d){if(c.SelectorTxt===e||c.SelectorTxt===a){return f}if(c.SelectorTxt&&""!=b){if(d.filter){if(c.SelectorTxt.ownerDocument){return c.SelectorStr&&"000"!==c.SelectorStr?(h="#"+(c.SelectorTxt.id||(i=!0,c.SelectorTxt.id="tempMingGeId2015")),g=B(h,f.SelectorStr=B(c.SelectorStr,b,"")," "),f.nodeList=x(c.SelectorTxt.querySelectorAll(g)),f.SelectorTxt=c.SelectorTxt,i&&c.SelectorTxt.removeAttribute("id"),f):-1}g=B(c.SelectorTxt,b,"")}else{if("000"===c.SelectorStr){return -1}if(c.SelectorTxt.ownerDocument){return h="#"+(c.SelectorTxt.id||(i=!0,c.SelectorTxt.id="tempMingGeId2015")),g=c.SelectorStr?B(h,f.SelectorStr=B(c.SelectorStr,b," ")," "):B(h,f.SelectorStr=b," "),f.nodeList=x(c.SelectorTxt.querySelectorAll(g)),f.SelectorTxt=c.SelectorTxt,i&&c.SelectorTxt.removeAttribute("id"),f}g=B(c.SelectorTxt,b," ")}}f.nodeList=x(e.querySelectorAll(g)),f.SelectorTxt=g}else{j=/^#([\w-_]+)$/.exec(b),f.nodeList=j?(k=e.getElementById(j[1]))?[k]:[]:x(e.querySelectorAll(b)),f.SelectorTxt=b}}catch(l){}return f},D=function(a,b,c){var f,g,h,i,j,d=new G();if(G.isString(a)){if(a=H(a),l&&-1!=(f=C(a,b,c,d))){return f}if(g=a.match(/[^\,]+/g),h=[],g){if(i=g.length,1===i){return E(g[0],b,c)}for(j=0;i>j;j++){h=h.concat(E(g[j],b,c).nodeList)}return d.nodeList=A(h),d}return d}return c?d:d.init(a||0,e)},E=function(a,b,c){var e,f,d=a.match(/[^\s]+/g);if(d){if(e=d.length,c&&c.filter&&e>2){return new G()}for(f=0;e>f;f++){b=F(d[f],f,b,c)}}return b},F=function(a,b,c,d){var g,f=a.match(/[\.#]?([\w-]+)/g);if(f){for(g=0;g<f.length;g++){c=0==b?0==g?d?d.find?w.find.call(c,f[0]):w.filter.call(c,f[0]):new G().init(f[0],e):w.filter.call(c,f[g]):0==g?w.find.call(c,f[0]):w.filter.call(c,f[g])}}return c},G=a.MingGe=function(b){return this===a||this.MingGe?D(b):(this.nodeList=[],void 0)};G.fn=G.prototype={version:"\u4f60\u4f7f\u7528\u7684\u7248\u672c\u662fMingGejs"+d,init:function(b,c){var d;return G.isFunction(b)?(w.ready(b),this):(b===a||b===e||b.ownerDocument?(this.SelectorTxt=b,this.nodeList=[b]):(d=z(b))&&y.call(this,c,d),this)},is:function(a){switch(a=H(a)){case":animate":return this.nodeList[0]?this.nodeList[0].isMingGeAnimate?!0:!1:!1}},append:function(a){return w.createNode.call(this,a,{},"beforeEnd")},createNode:function(){return w.createNode.apply(this,arguments)},load:function(a,b){if(G.isFunction(a)){return this.bind("load",a)}var c=this,d=function(a){c.each(function(){var b=w.seachIndex(["value","innerHTML"],this);b&&(this[b]=a)})};return null==b?G.get(a,null,d):G.post(a,b,d),this},insertHTML:function(){return w.insertHTML.apply(this,arguments)},stop:function(){return w.transition||(w.transition=G.html5Attribute("transition")),w.transition?this.each(function(){var a,b;this.isMingGeAnimate&&(delete this.isMingGeAnimate,this.mingGeAnimateList&&delete this.mingGeAnimateList,a=w.transition+"TimingFunction",b=this.style,b[w.transition]=b[a]=null)}):this},fadeToggle:function(a,b){return this.each(function(){var c=w.oStyleValue(this);"none"==w.original("display",c)?G(this).fadeIn(a,b):G(this).fadeOut(a,b)})},attr:function(a,b){var d,c=this.nodeList[0];if(c){if(G.isObject(a)){return G.each.call(this.nodeList,function(){d=this,this.setAttribute&&G.each(a,function(a,b){G.isString(a)&&G.isTxt(b)&&d.setAttribute(a,b)})}),this}if(G.isUndefined(b)){return c.getAttribute&&G.isString(a)?c.getAttribute(a):null}G.isString(a)&&G.isTxt(b)&&G.each.call(this.nodeList,function(){this.setAttribute&&this.setAttribute(a,b)})}return this},fadeOut:function(a,b){var c=new G();return w.transition||(w.transition=G.html5Attribute("transition")),this.each(function(){var a=w.oStyleValue(this);1==this.nodeType&&("none"==w.original("display",a)||this.isMingGeAnimate||c.nodeList.push(this))}),w.transition?c.animate({opacity:0},a,function(){G(this).css({display:"none",opacity:null}),G.isFunction(b)&&b.call(this)},"ease"):c.css("display","none"),this},hide:function(){return G.each.call(this.nodeList,function(){1==this.nodeType&&"none"!=w.original("display",w.oStyleValue(this))&&(this.style.display="none")}),this},show:function(){return G.each.call(this.nodeList,function(){var a=w.oStyleValue(this);1==this.nodeType&&"none"==w.original("display",a)&&("none"==this.style.display?(this.style.display="","none"==w.original("display",a)&&(this.style.display=w.getDisplay(this.tagName))):this.style.display=w.getDisplay(this.tagName))}),this},fadeIn:function(a,b){w.transition||(w.transition=G.html5Attribute("transition"));var c=new G();return this.each(function(){var a=w.oStyleValue(this);if(1==this.nodeType&&"none"==w.original("display",a)){if(this.isMingGeAnimate){return}w.transition&&G(this).css("opacity",0),c.nodeList.push(this),"none"==this.style.display?(this.style.display="","none"==w.original("display",a)&&(this.style.display=w.getDisplay(this.tagName))):this.style.display=w.getDisplay(this.tagName)}}),w.transition&&setTimeout(function(){c.animate({opacity:1},a,function(){G(this).css("opacity",null),G.isFunction(b)&&b.call(this)},"ease")},5),this},animate:function(a,b,c,d){var f,e,g,h,l,i,j,k;if(w.transition||(w.transition=G.html5Attribute("transition")),!w.transition){return this.css(a),this}if(!G.isObject(a)){return this}for(e=typeof b,("number"!==e||0/0==b)&&("string"===e?(b=H(b),p[b]?b=p[b]:(b=parseFloat(b),G.isNumber(b)||(b=500))):("function"===e&&(c=b),b=500)),G.isFunction(c)||(g=d,d=c,c=G.isFunction(g)?g:function(){}),f=function(){var d,b,a=this.mingGeAnimateList;G.isArray(a)&&a.length>0?(b=new G(),b.nodeList=[this],d=a[0],a.splice(0,1),w.animate.apply(b,d)):(delete this.mingGeAnimateList,delete this.isMingGeAnimate),c.call(this)},i=0,j=new G(),k=[a,b,f,d];h=this.nodeList[i++];){1==h.nodeType&&(h.isMingGeAnimate?h.mingGeAnimateList?h.mingGeAnimateList.push(k):h.mingGeAnimateList=[k]:(h.isMingGeAnimate=1,j.nodeList.push(h),l||(l=!0)))}return l&&w.animate.apply(j,k),this},empty:function(){return this.each(function(){if(1==this.nodeType){var b=w.seachIndex(["value","innerHTML"],this);b&&(this[b]="")}})},remove:function(){var a=[];return this.each(function(){try{this.parentNode.removeChild(this),G(this).unbind().stop()}catch(b){a.push(this)}}),this.nodeList=a,a=null,this},bind:function(a,b,c){var d,g,h,i,e=0;if(G.isString(a)&&G.isFunction(b)){for(a=H(a),g=w.isMouse(a);d=this.nodeList[e++];){w.forEve(d,a,b,c,g)}}else{if(G.isObject(a)){for(;d=this.nodeList[e++];){for(i in a){h=H(i),G.isString(i)&&G.isFunction(a[i])&&w.forEve(d,h,a[i],c,w.isMouse(h))}}}}return this},unbind:function(a,b){var d,g,e=0,f=typeof a;if("function"==f){b=a,a=c}else{if(g=typeof b,"string"!=f&&"undefined"!=f||"function"!=g&&"undefined"!=g){return this}}for(a=H(a);d=this.nodeList[e++];){w.DelElemEve(d,a,b)}return this},one:function(a,b){return this.bind(a,b,!0)},SelectorStr:!1,SelectorTxt:!1,nodeList:[],ready:function(a){return w.ready(a),this},parent:function(a){for(var b,f,c=0,d=new G();b=this.nodeList[c++];){(f=b.parentNode)&&("BODY"==f.tagName||d.nodeList.push(f))}return d.nodeList=A(d.nodeList),d.SelectorTxt=e.body,d.SelectorStr="000",a?d.filter(a):d},addClass:function(a){return G.isString(a)&&(a=H(a),this.each(function(){if(1===this.nodeType){var b=this.className||"";b=A(H(b+" "+a).split(/\s+/)).join(" "),""==b||(this.className=b)}})),this},hasClass:function(a){try{return G.isString(a)&&RegExp("(^|\\s)"+H(a)+"($|\\s)").test(this.nodeList[0].className)}catch(b){return !1}},removeClass:function(a){return G.isString(a)?(a="("+H(a).replace(RegExp("\\s+","g"),"|")+")",this.each(function(){if(1===this.nodeType){var b=this.className;b&&(this.className=b=H(b.replace(/\s+/g,"  ").replace(RegExp("(^|\\s)"+a+"($|\\s)","g")," ")),""==b&&(this.removeAttribute?this.removeAttribute("class"):this.className=""))}})):G.isUndefined(a)&&this.each(function(){1===this.nodeType&&this.className&&(this.removeAttribute?this.removeAttribute("class"):this.className="")}),a="",this},children:function(a){return a?this.find(a):l?this.find("*"):this.find("MingGeAllelem2015")},find:function(a){return D(a,this,{find:!0})},filter:function(a){var b=D(a,this,{filter:!0});return this.SelectorTxt.ownerDocument&&!this.SelectorStr&&b.nodeList[0]&&(b.SelectorTxt=b.nodeList[0],b.SelectorStr=!1),b},index:function(b){try{return b?G.inArray(b.nodeType||b==a?b:b.nodeList[0],this.nodeList):G.inArray(this.nodeList[0],this.nodeList[0].parentNode.getElementsByTagName("*"))}catch(c){return -1}},eq:function(a){var b=new G();return b=null==a?this:(a=0>a?this.nodeList.length+a:a,this.nodeList[a]&&(b.nodeList=[b.SelectorTxt=this.nodeList[a]]),b)},size:function(){return this.nodeList.length},each:function(a){if(G.isFunction(a)){for(var b=this.nodeList.length,c=0;b>c;c++){try{a.call(this.nodeList[c],c,b)}catch(d){}}}return this},clientWidth:function(){return w.getCS.call(this,"clientWidth")},clientHeight:function(){return w.getCS.call(this,"clientHeight")},scrollWidth:function(){return w.getCS.call(this,"scrollWidth")},scrollHeight:function(){return w.getCS.call(this,"scrollHeight")},scrollLeft:function(a){return w.setS.call(this,"scrollLeft",a)},scrollTop:function(a){return w.setS.call(this,"scrollTop",a)},val:function(a){return w.htmlVal.call(this,"value",a)},html:function(a){return w.htmlVal.call(this,"innerHTML",a)},text:function(a){return w.htmlVal.call(this,w.isIndex("textContent",e.body)?"textContent":"innerText",a)},css:function(a,b){var d,e,g,i,c=0,f={},h=typeof a;if(w.opacity||(w.opacity=G.html5Attribute("opacity")||"filter"),w.transform||(w.transform=G.html5Attribute("transform")),"string"===h){if(a=G.styleName(H(a)),G.isUndefined(b)){return(d=this.nodeList[0])&&d.ownerDocument?r.test(a)?(i=d.style[w.transform],i?(c=new RegExp(""+a+"\\s?\\((.*)\\)","i").exec(i),c&&c[1]):null):"filter"==w.opacity?w.getFilter(d):w.original(a,w.oStyleValue(d)):null}for(;d=this.nodeList[c++];){try{g=d.style,f=w.style(g,a,b),g[f[0]]=f[1]}catch(j){}}}else{if(G.isObject(a)){for(;d=this.nodeList[c++];){g=d.style;for(e in a){try{1==c&&(f[e]=w.style(g,G.styleName(e),a[e])),g[f[e][0]]=f[e][1]}catch(j){}}}}}return this},get:function(a){return null==a?this.nodeList:(a=0>a?this.nodeList.length+a:a,this.nodeList[a])}},G.fn.extend=G.extend=function(){var b,c,d,a=arguments.length;if(1===a&&"[object Object]"===o.call(arguments[0])){for(b in arguments[0]){this[b]||(this[b]=arguments[0][b])}return !0}return a>1?(c=arguments[0],d=arguments[1],G.isObject(d)&&G.isObject(c)?(G.each(d,function(a,b){c[a]=b}),c):arguments[1]||arguments[0]):!1},w.ajax.prototype=w.ajaxPrototype,G.extend({parseJSON:function(a,b){return w.JsonString.StringToJson(a,b)},toJSON:function(a){return w.JsonString.JsonToString(a)},setVar:function(c){try{delete a[b]}catch(d){a[b]=null}a[c]=G},isObject:function(b){try{return"[object Object]"==o.call(b)&&"number"!=typeof b.nodeType&&b!=a&&!!b}catch(c){return !1}},update:function(a){for(var b,c=0,d=[];b=a.nodeList[c++];){b.ownerDocument?b.parentNode&&d.push(b):d.push(b)}a.nodeList=d},isArray:function(a){return"[object Array]"===o.call(a)},isFunction:function(a){return"[object Function]"===o.call(a)},isEmptyObject:function(a){for(var b in a){if(a.hasOwnProperty(b)&&null!=a[b]){return !1}}return !0},createScript:function(a){var c,b=e.getElementsByTagName("head").item(0);return b?(c=e.createElement("script"),G.isString(a)&&(c.src=a),b.appendChild(c),[b,c]):void 0},post:function(a,b,c){return new w.ajax().post(a,b,c)},get:function(a,b,c){return new w.ajax().get(a,b,c)},getJSON:function(a,b,c){return new w.ajax().getJSON(a,b,c)},ajax:function(a){var b=new w.ajax();return G.isObject(a)&&b.ajax(a),b},styleName:function(a){try{return a.replace(/-([a-z])/gi,function(a,b){return b.toUpperCase()})}catch(b){return a}},userAgent:s(navigator.userAgent),isIe:function(){return"msie"===this.userAgent.browser?this.userAgent.version.charAt(0):!1},isTxt:function(a){var b=typeof a;return"string"==b||"number"==b&&0/0!==a},isNumber:function(a){return !(null===a||isNaN(a))},isUndefined:function(a){return"undefined"==typeof a},isString:function(a){return"string"==typeof a},each:function(a,b){var c,d=0;if(G.isFunction(a)){for(;c=this[d++];){a.call(c)}}else{if((G.isObject(a)||G.isArray(a))&&G.isFunction(b)){for(d in a){a.hasOwnProperty&&a.hasOwnProperty(d)&&b(d,a[d])}return !0}}return !1},objToUrl:function(a){if(G.isObject(a)){var b="";return G.each(a,function(a,c){G.isTxt(c)&&(b+=j(a)+"="+j(c)+"&")}),b.replace(/&+$/,"")}return a},getMobile:function(){if(i){return i}var a=navigator.userAgent,b=a.match(/(Android)\s+([\d.]+)/),c=a.match(/(iPad).*OS\s([\d_]+)/),d=!c&&a.match(/(iPhone\sOS)\s([\d_]+)/),e=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),g=(e&&a.match(/TouchPad/),a.match(/Kindle\/([\d.]+)/)),h=a.match(/Silk\/([\d._]+)/),j=a.match(/(BlackBerry).*Version\/([\d.]+)/);return i={webkit:"webkit"==this.userAgent.browser,android:b&&b[2],ipad:c&&c[2].replace(/_/g,"."),iphone:d&&d[2].replace(/_/g,"."),webos:e&&e[2],kindle:g&&g[1],silk:h?h[1]:b&&a.match(/Kindle Fire/),blackberry:j&&j[2]}},inArray:function(a,b){if(b.indexOf){return b.indexOf(a)}for(var c=0,d=b.length;d>c;c++){if(b[c]===a){return c}}return -1},urlRevise:function(a,b){return""!=b&&G.isTxt(b)&&(a+=/\?/.test(a)?"&"+b:"?"+b),a},isHtml5:function(){return !!e.createElement("canvas").getContext},html5Attribute:function(a){var b,c,d,f,g;try{for(b=a?a.toLowerCase():"transform",a=b.replace(/^\w/,a.charAt(0).toUpperCase()),c=e.body.style,d=[b,"Ms"+a,"Moz"+a,"Webkit"+a,"O"+a],f=!1,g=0;5>g;g++){if(d[g] in c){f=d[g];break}}}catch(h){}return f}}),G.each(["width","height","top","left"],function(b,c){G.fn[c]=function(b,c){return function(d){if(null==d){var f=this.nodeList[0],g="offset"+c;if(!f){return null}if(f==a||f==e){if("Width"==c){return w.winWH("Width")}if("Height"==c){return w.winWH("Height")}f=e.body}return g in f?f[g]:null}return/^[0-9]+$/.test(d)&&(d+="px"),this.css(b,d)}}(c,c.replace(/^\w/,c.charAt(0).toUpperCase()))}),G.fn.on=G.fn.bind,G.fn.off=G.fn.unbind,function(){var a,c,b={add:[function(){a=arguments,a[0].addEventListener(a[1],a[2],!1)},function(){a=arguments,a[0].removeEventListener(a[1],a[2],!1)}],att:[function(){a=arguments,a[0].attachEvent("on"+a[1],a[2])},function(){a=arguments,a[0].detachEvent("on"+a[1],a[2])}],on:[function(){a=arguments,a[0]["on"+a[1]]=a[2]},function(){a=arguments,a[0]["on"+a[1]]=null}]};e.addEventListener?(c=b.add,c[0].add=1):e.attachEvent?(c=b.att,c[0].att=1):(c=b.on,c[0].on=1),f=G.addEvent=c[0],g=G.delEvent=c[1],b=a=c=null}(),H=G.trim=function(a){try{return a.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,"")}catch(b){return a}},function(a){for(var b,c=0;b=a[c++];){G.fn[b]=function(a){return function(b){return G.isUndefined(b)?(G.each.call(this.nodeList,function(){if(this[a]){this[a]()}else{var b=this.MingGeBind,c=this;b&&b[a]&&G.each(b[a].concat(),function(b,d){var e=d.callback;try{e.isOne&&w.DelElemEve(c,a,e),e.call(c)}catch(f){}})}}),this):this.bind(a,b)}}(b)}a=c=null}(["blur","focus","focusin","focusout","resize","scroll","unload","click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","mouseenter","mouseleave","change","select","submit","keydown","keypress","keyup","error","touchstart","touchmove","touchend","touchcancel"]),a[b]=G}(window,"$");