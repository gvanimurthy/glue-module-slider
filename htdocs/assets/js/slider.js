/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
(function( $ ) {// start closure
	'use strict';


	/**
	 * Dump debug messages to console if available, otherwise to status bar.
	 */
	$.debug = function() {
		var console = window.console;

		if ( typeof console !== 'undefined' && typeof console.log === 'function' ) {
			console.log.apply( console, Array.prototype.slice.call( arguments ));
		// remove comments on else condition if testing IE6 issues in dev environment (do not use for production)
		// } else {
			// TODO join arguments to get string
			//window.status = message;
		}
	};


}( jQuery ));
var qg = qg || {};
/**
 * "Got style?" Some scripts are going to rely on the browser currently having CSS available and enabled.
 * This simple script will test if styles are supported on page load,
 * then makes the boolean result available via qg.gotStyle().
 *
 * jquery.got-style.js
 * @version 0.2
 * Changelog:
 *   *  0.1 Initial implementation
 *   *  0.2 Refactor: simplify style test
 *   *  0.3 store method on qg object (replace deprecated $.browser object)
 *
 * @author Andrew Ramsden
 * @see http://irama.org/web/dhtml/got-style/
 * @license Common Public License Version 1.0 <http://www.opensource.org/licenses/cpl1.0.txt>
 *
 * @requires jQuery (tested with 1.3.1) <http://jquery.com/>
 *
 */

/*global qg*/
(function( $, qg ) {// start closure
	'use strict';


	var gotStyle = $( '<div />' ).css( 'width', '1px' ).width() === 1;


	/**
	 * @returns boolean Whether the browser has CSS available and enabled.
	 */
	qg.gotStyle = function() { return gotStyle; };


}( jQuery, qg )); /* end closure */
var qg = qg || {};
/**
 * "Compact" base plugin (Unobtrusive DHTML clickey-hidey content sections)
 * jquery.compact.js
 * @version 3.5.2
 * Changelog:
 *   *  2.0 has been rewritten using jquery.
 *   *  2.5 includes ARIA roles, states and properties .
 *   *  3.0a includes improved ARIA keyboard nav, and removed dependency on large utilities file .
 *   *  3.0b separated to central core funtionality "compact" file.
 *   *  3.0 Added fullHeight plugin to measure the height of an element accurately (even if it is hidden)
 *   *  3.1 Added support for passing the type of compact plugin as an option, rather than setting as a class in the markup.
 *   *      Also, tweaks to slider, slideshow and tabbed plugins.
 *   *  3.2 Improvements to $.frag to support updating of hash value
 *   *  3.3 Added support for fieldset/legend combos. Also added support for content before and after tabbed sections (within compact container)
 *   *  3.4 Move UI button title attributes into link text (but visually hidden) so that all assistive technologies can successfully render the button label.
 *   *  3.5 Components updated: Slideshow 0.96, Slider 0.94, Tabbed 0.93, ARIA key nav 0.93, fixed behaviour of $.frag for Firefox.
 *   *  3.5.1 Slideshow 0.98
 *   *  3.5.2 split onready code into jquery.compact.init.js to run after plugins
 *
 * @author Andrew Ramsden
 * @see http://irama.org/web/dhtml/compact/
 * @license GNU GENERAL PUBLIC LICENSE (GPL) <http://www.gnu.org/licenses/gpl.html>
 *
 * @requires jQuery (tested with 1.4.2) <http://jquery.com/>
 * @requires jQuery jARIA plugin <http://outstandingelephant.com/jaria/>
 *
 * @optional (but reccommended) jQuery Got Style? plugin <http://irama.org/web/dhtml/got-style/>
 * @optional (but reccommended) jQuery ARIA keyboard navigation plugin <http://irama.org/web/dhtml/aria/key-nav/>
 * @optional jQuery Cookies plugin <http://plugins.jquery.com/project/cookie>
 *
 */

jQuery.compact = {};
jQuery.compact._conf = {
	autoInitialise : true,
	compactClass   : 'compact',
	activeClass    : 'active',
	activeClasses  : '.compact-slider-active, .compact-slideshow-active, .compact-tabbed-active, .choices' // other active classes (for benefit of IE6 that can't handle .slideshow.active selectors), and ignore .choices
};

/*globals qg*/
(function( $, qg ) {// start closure
	'use strict';

	$.compact._handleResizeEvent = function () {
		// for (id in $.compact) {
		$.each( $.compact, function( id ) {
			// ignore internal functions/objects
			if (id.substr(0,1) === '_') { return true; }

			// all other objects are available plugins
			$.compact[id].handleResizeEvent();
		});
	};

	$.fn.compact = function (options) {
		options = options || {};
		$(this).each(function () {
			var $this = $( this );
			// for (id in $.compact) {
			$.each( $.compact, function( id ) {

				// ignore internal functions/objects
				if (id.substr(0,1) === '_') { return true; }

				// all other objects are available plugins
				if ($this.is($.compact[id].conf.containerSelector)) {
					$.compact[id].init( $this[ 0 ], options );
					return false; // break out of loop and anonymous function
				}
			});

			if (typeof options.type !== 'undefined' && options.type !== '') {
				if (typeof $.compact[options.type] !== 'undefined') {
					$.compact[options.type].init( $this[ 0 ], options );
					return; // break out of loop and anonymous function
				} else {
					// compact type not found
					$.debug('DEBUG: Compact plugin type not found for container element (with options.type of "'+options.type+'"). Make sure options.type is correct and the required plugin file has been included.');
					return; // break out of loop and anonymous function
				}
			} else if ( ! $(this).is( $.compact._conf.activeClasses )) {
				// compact type not found
				$.debug('DEBUG: Compact plugin type not found for container element (with class="'+$(this).attr('class')+'"). Make sure the required plugin file has been included.');
				return; // break out of loop and anonymous function
			}

		});

		return $(this); // facilitate chaining
	};

/**
 * Include some cut-back utilities here to avoid including all utilities.
 */
	/**
	 * Mimics the API of $.cookie plugin <http://plugins.jquery.com/project/cookie>
	 * Tests for the existence of the plugin and handles if not available.
	 *
	 * @example $.cookie('the_cookie', 'the_value');
	 * @desc Set the value of a cookie.
	 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
	 * @desc Create a cookie with all available options.
	 * @example $.cookie('the_cookie', 'the_value');
	 * @desc Create a session cookie.
	 * @example $.cookie('the_cookie', null);
	 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
	 *       used when the cookie was set.
	 *
	 * @param String name The name of the cookie.
	 * @param String value The value of the cookie.
	 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
	 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
	 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
	 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
	 *                             when the the browser exits.
	 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
	 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
	 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
	 *                        require a secure protocol (like HTTPS).
	 */
	$.compact._cookie = function (reference, /* optional */ value, /* optional */ options) {
		// is the cookie plugin available?

		if ($.cookie) {
			value = value || null;
			options = options || {};

			if (typeof reference === 'undefined') {
				$.debug('DEBUG: No reference was sent for call to $.compact._cookie()');
				return false;
			}

			if (value === null) {
				// getting cookie
				return $.cookie(reference);
			} else {
				// setting cookie
				return $.cookie(reference, value, options);
			}
		} else {
			$.debug('DEBUG: Cookie plugin not available to save state of compact section widgets.');
			return null;
		}
	};

	/**
	 * Get the the first and biggest heading inside the current element
	 * @version 3.2
	 * @author Andrew Ramsden <irama.org>
	 * @return jQueryNode The first and biggest heading within the target element,
	 *         or a blank h2 if no headings found.
	 */
	$.fn.firstHeading = function(includeAllDescendants) {
		includeAllDescendants = includeAllDescendants||false;

		// @since 3.0: Discovered that jQuery returns nodes in selector order, not DOM order,
		//             which means, this can all be shortened to one line...
		var heading, headingSelector = 'h1:first, h2:first, h3:first, h4:first, h5:first, h6:first';

		// @since 3.2: Support added for fieldset/legend combo
		if ($(this).get(0).tagName === 'FIELDSET') {
			headingSelector = 'legend:first, h1:first, h2:first, h3:first, h4:first, h5:first, h6:first';
		}

		// @since 3.1: Can specify whether to include all descendants (true) or just direct
		//             children headings (false).
		if (includeAllDescendants) {
			return (heading = $(this).find(headingSelector).eq(0)).text() !== '' ? heading : $('<h2></h2>');
		} else {
			return (heading = $(this).children(headingSelector).eq(0)).text() !== '' ? heading : $('<h2></h2>');
		}
	};

	/**
	 * A plugin to measure the height of an element accurately (even if it is hidden)
	 */
	$.fn.fullHeight = function () {
		var fullHeight;

		// if element is hidden, unhide it, then measure
		if ($(this).css('display') === 'none') {

			// make element display for a second
			$(this).css('display', 'block');

			// measure
			fullHeight = $(this).outerHeight(true);

			// restore
			$(this).css('display', 'none');

		} else {
			fullHeight = $(this).outerHeight(true);
		}

		return fullHeight;
	};

	/**
	 * A plugin to filter a nodeset to return only nodes that aren't display:none;
	 * this plugin is required because jQuery :visible doesn't return elements that
	 * are fading in (even though they are not display:none).
	 */
	$.fn.visible = function () {
		return $(this).filter(function(){
			return ($(this).css('display') === 'none')? false : true ;
		});
	};

	/**
	 * Gets and sets the anchor portion of the URL (after the #)
	 */
	$.frag = function (updatedFrag, jumpToFragment) {
		updatedFrag = updatedFrag || null;
		jumpToFragment = jumpToFragment || false;

		var currentX, currentY, currentFragment;

		if (updatedFrag !== null) {
			if (jumpToFragment) {
				window.location.hash = updatedFrag;
			} else if ( qg.oldIE && qg.oldIEversion < 8 ) {
				// IE and Firefox don't deal with fragment changes correctly

				// get current scroll position
				currentY = $(window).scrollLeft();
				currentX = $(window).scrollTop();

				// Reset hash
				window.location.hash = updatedFrag;

				// Correct the scroll position
				$(window).scrollTop(currentX);
				$(window).scrollLeft(currentY);
			} else {
				// other modern browsers don't jump using the replace method
				window.location.replace('#'+updatedFrag);
			}
			return updatedFrag;
		} else {
			currentFragment = window.location.hash.replace('#','');
			return currentFragment;
		}
	};

}( jQuery, qg )); /* end closure */
/**
 * "The Slider" (compact sliding panels)
 * jquery.compact.slider.js
 * @version 0.94
 * Changelog:
 *   * 0.8 Added an adjustment of sliders on DOMLoad to fix issue that webkit sometimes renders incorrectly on load.
 *   * 0.9 Aria roles and states/properties integrated. (IN PROGRESS)
 *   * 0.91 Support added for changing control text and title text as options passed on initialisation and support added for CSS image replacement mode.
 *   * 0.92 Move UI button title attributes into link text (but visually hidden) so that all assistive technologies can successfully render the button label.
 *   * 0.93 Updated hold/release of next/prev buttons so endless loop bug can't be triggered. Also added option to disable hold next/prev support.
 *   * 0.94 Now has own unique 'active' class so IE6 doesn't get confused when styling active state.
 *
 * @author Andrew Ramsden <http://irama.org/>
 * @see http://irama.org/web/dhtml/compact/slider/
 * @license GNU GENERAL PUBLIC LICENSE (GPL) <http://www.gnu.org/licenses/gpl.html>
 *
 * @requires jQuery (tested with 1.4.2) <http://jquery.com/>
 * @requires jQuery jARIA plugin <http://outstandingelephant.com/jaria/>
 * @requires jQuery Compact base plugin <http://irama.org/web/dhtml/compact/>
 *
 * @optional (but reccommended) jQuery ResizeEvents plugin <http://irama.org/web/dhtml/resize-events/>
 * @optional (but reccommended) jQuery Got Style? plugin <http://irama.org/web/dhtml/got-style/>
 * @optional (but reccommended) jQuery ARIA keyboard navigation plugin <http://irama.org/web/dhtml/aria/key-nav/>
 * @optional jQuery Cookies plugin <http://plugins.jquery.com/project/cookie>
 *
 * TODO:
 *   * Extract classnames to config. (COMPLETE)
 *   * Improve resize handling (currently based on global selector, rather than actual widget initialised). (COMPLETE)
 *   * Separate preferences that can be passed as plugin is instantiated for a container. (COMPLETE)
 *   * ARIA integration (roles, props and key nav).
 *   * Improve mouse interaction. Holding mouse down on next/prev should move through multiple panels as long as mouse is down. (COMPLETE)
 */
;
if (typeof jQuery.compact == 'undefined') {
	jQuery.compact = {};
}
jQuery.compact.slider = {};

/**
 * Default options, these can be overridden for each call to compactSlider
 */
jQuery.compact.slider.defaultOptions = {
	type                : 'slider',
	controlsMatchHeight : true,
	animationDuration   : 500,
	collapseDuration    : 250,
	cookieExpiryDays    : 30,
	nextControlText       : '>',
	nextControlTitleText  : 'Next',
	prevControlText       : '<',
	prevControlTitleText  : 'Previous',
	supportHoldToScroll   : true, // set to false to disable holding of next/prev buttons to auto scroll through items.
	supportCSSImgReplace  : true, // if you would like to replace the ascii control characters with images, set this to true
	                               // and ensure the path to a transparent image is also sent as an option. You should then
								   // style the clearPixel image to displace the text, so when images are disabled, the
								   // ascii characters become visible.
								   // See examples at http://irama.org/web/dhtml/compact/slider/ for more information.
	clearPixelImg         : 'displacement.png'
};

/**
 * Global configuration (these apply to every instance of compactSlider, etc...)
 * Adjust to suit your preferred markup.
 */
jQuery.compact.slider.conf = {
	containerSelector   : '.'+$.compact._conf.compactClass+'.slider',
	activeClass         : 'compact-slider-active',
	controlElClass      : 'slider-control',
	cookieRefPrefix     : 'c.slider#',
	prevControlClass    : 'prev-panel',
	nextControlClass    : 'next-panel',
	sliderElClass       : 'sliding-tray',
	viewportElClass     : 'viewport',
	contentsElClass     : 'slider-contents',
	measureElClass      : 'measure',
	panelClass          : 'section',
	loadingClass        : 'loading',
	clearPixelClass     : 'for-css-replacement',
	holdControlInterval : 300, // (in ms) When a control is held down (mousedown) how often should it jump to next panel?
	errorMargin         : 1  // FF2 & FF3 seem to be 1px out (rounding error??)
};




// start closure (protects variables from global scope)
(function($){

	// init vars global to the scope of this plugin
		$.compact.slider.initialised = [];
		holdIntervalId = null;
		numberOfMovesWhileHeld = 0;



	$.fn.compactSlider = function (options) {

		options = options || {};

		$(this).each(function () {
			initCompactSlider.apply(this, [options])
		});

		return $(this); // facilitate chaining
	};

	$.compact.slider.init = function (containerEl, /* optional */ options) {
		options = options || {};

		initCompactSlider.apply(containerEl, [options]);
	};


	$.compact.slider.handleResizeEvent = function() {
		for (n=0; n<$.compact.slider.initialised.length; n++) {
			containerEl = $('#'+$.compact.slider.initialised[n]);
			scrollToPanel(containerEl, containerEl.data('currentPanel'));
		}
	};

	$(document).ready( function() {
		/* On document ready, give the browser time to render, then check to see if heights are set correctly */
		window.setTimeout(adjustAllSliders, 250);
	});

	adjustAllSliders = function () {
		for (n=0; n<$.compact.slider.initialised.length; n++) {
			$('#'+$.compact.slider.initialised[n]).each(adjustSlidingPanels, [true]);
		}
	};


	initCompactSlider = function (options) {

		// is CSS supported? (if gotStyle plugin is not avialable, assume it is supported).
			if (typeof $.browser.gotStyle != 'undefined' && $.browser.gotStyle(this) === false) {
				$.debug('DEBUG: Your browser does not have CSS support available or enabled, slider script exiting');
				return;
			}

		// does the container have the correct classes and an id?
			if (typeof $(this).attr('id') == 'undefined') {
				$.debug('DEBUG: Each "compact slider" ('+$.compact.slider.conf.containerSelector+') container must have a unique id');
				return;
			}
			if (!$(this).is($.compact.slider.conf.containerSelector)) {
				// add the appropriate classes
				$(this).addClass($.compact.slider.conf.containerSelector.split('.').join(' '));
			}

		// Merge runtime options with defaults
		// Note: The first argument sent to extend is an empty object to
		// prevent extend from overriding the default $.AKN.defaultOptions object.
			options = (typeof options == 'undefined')
				? $.compact.slider.defaultOptions
				: $.extend({}, $.compact.slider.defaultOptions, options)
			;
			$(this).data('options', options);



		// setup controls
		// v0.92: title text now becomes part of the link text to support assistive technologies that don't render the title attribute.
			prevControl = $('<a class="'+$.compact.slider.conf.controlElClass+' '+$.compact.slider.conf.prevControlClass+
			                '" id="'+$(this).attr('id')+'-'+$.compact.slider.conf.prevControlClass+'" href="#previous"'+
							' title="'+options.prevControlTitleText+'">'+
				            '<span class="button-symbol">'+options.prevControlText+'</span>'+
				            '<span class="button-title">'+options.prevControlTitleText+'</span></a>'
			)
				.click(handleClickPrevious)
				.ariaRole('button')
				.ariaState('controls',$(this).attr('id'))
			;
			nextControl = $('<a class="'+$.compact.slider.conf.controlElClass+' '+$.compact.slider.conf.nextControlClass+
			                '" id="'+$(this).attr('id')+'-'+$.compact.slider.conf.nextControlClass+'" href="#next"'+
							' title="'+options.nextControlTitleText+'">'+
				            '<span class="button-symbol">'+options.nextControlText+'</span>'+
				            '<span class="button-title">'+options.nextControlTitleText+'</span></a>'
			)
				.click(handleClickNext)
				.ariaRole('button')
				.ariaState('controls',$(this).attr('id'))
			;

		// If hold to scroll support is enabled, setup event handlers
			if (options.supportHoldToScroll) {

				prevControl.mousedown(handleHoldPrevious);
				nextControl.mousedown(handleHoldNext);
				/**
				 * Delegate mouseup to body so that it is never missed!
				 * (even if the user clicks and drags off button before release).
				 */
				$('body').bind('mouseup', handleNextPrevRelease);
			}


		// add window element
			viewportEl = $('<div class="'+$.compact.slider.conf.viewportElClass+'"><div class="'+$.compact.slider.conf.sliderElClass+'"></div></div>');
			sliderEl = viewportEl.find('.'+$.compact.slider.conf.sliderElClass);
			sliderEl.append ($(this).contents('.'+$.compact.slider.conf.panelClass));
			$(this).contents('.'+$.compact.slider.conf.panelClass).remove();
			contentsEl = $('<div class="'+$.compact.slider.conf.contentsElClass+'"></div>')
				.append(prevControl)
				.append(viewportEl)
				.append(nextControl)
			;
			$(this).append(contentsEl);


		// add clearPixel images if CSSImageReplacement mode is enabled
			if (options.supportCSSImgReplace) {
				contentsEl.find('a.'+$.compact.slider.conf.controlElClass+' span.button-symbol').prepend('<img src="'+options.clearPixelImg+'" alt="" class="'+$.compact.slideshow.conf.clearPixelClass+'" />');
			}

		// draw curtain until ready
			$(this)
				.addClass($.compact.slider.conf.loadingClass)
				.children().css('visibility','hidden')
			;

		// add active class
			$(this)
				.addClass($.compact.slider.conf.activeClass)
				.ariaState({
					live     : 'assertive',
					atomic   : 'false',
					relevant : 'all'
				})
				//.width('auto')
				.after('<div class="'+$.compact.slider.conf.measureElClass+'" style="width:100%;clear:both;height:0;padding:0;margin:0;border:none;float:none;"></div>');
			;

		// set the sliding-tray element to an approximate width that will encompass all panels
			panels = $(this).find('.'+$.compact.slider.conf.panelClass);
			firstPanelWidth = panels.eq(0).outerWidth(true); // will include margins
			sliderEl.width(firstPanelWidth * panels.size() * 4); // Webkit has trouble at large text sizes unless size is multiplied (by 4 should be enough)


		// get initial panel (from cookie if available)
			currentPanelIndex = $.compact._cookie($.compact.slider.conf.cookieRefPrefix+$(this).attr('id')+'.current');
			currentPanelIndex = (currentPanelIndex !== null) ? parseInt(currentPanelIndex) : 0 ;


		// load current panel
			scrollToPanel(this, currentPanelIndex, doAnimation=false);


		// Keep a record of the id of each initialised container
			$.compact.slider.initialised[$.compact.slider.initialised.length++] = $(this).attr('id');

		// IE6 needs some time (10ms?) or else it will only display 1 initially (???)
		// FF2/3 need some time (10ms?) or else some edge cases one too few panels will be displayed initially
			//window.setTimeout('adjustSlidingPanelsId(\'#'+$(this).attr('id')+'\')', 10);

	};

	adjustSlidingPanelsId = function (containerSelector) {
		$(containerSelector).each(adjustSlidingPanels, [true]);
	};

	adjustSlidingPanels = function (inital) {

		// was this function called during initialisation?
			inital = inital||false;

		// init node references
			options = $(this).data('options');
			panels = $(this).find('.'+$.compact.slider.conf.panelClass);
			firstPanel = panels.eq(0);
			prevControl = $(this).find('.'+$.compact.slider.conf.prevControlClass);
			nextControl = $(this).find('.'+$.compact.slider.conf.nextControlClass);
			viewportEl = $(this).find('.'+$.compact.slider.conf.viewportElClass);
			contentsEl = $(this).find('.'+$.compact.slider.conf.contentsElClass);

			controlWidths =
				prevControl.outerWidth(true) +
				nextControl.outerWidth(true)
			;

		// allow panels to expand
			panels.height('auto');


		// set consistent height of panels (based on tallest panel)
			tallestSoFar = 0;
			widestSoFar = 0;
			panels
				.each(function(){
					if ($(this).height() > tallestSoFar) {
						tallestSoFar = $(this).height();
					}
				})
				.height(tallestSoFar)
			;

		// set height of contents element (in case controls get pushed over to wrap
			contentsEl.height(firstPanel.outerHeight(true));



		// should controls be given matching height?
			if (options.controlsMatchHeight) {
				// store height
					firstPanelHeight = firstPanel.outerHeight();

				// set heigt of controls
					prevControl.height(firstPanelHeight).css({'margin-top':firstPanel.css('margin-top'),'margin-bottom':firstPanel.css('margin-bottom')});
					nextControl.height(firstPanelHeight).css({'margin-top':firstPanel.css('margin-top'),'margin-bottom':firstPanel.css('margin-bottom')});

				// set height for clearPixelImage if required
					if (options.supportCSSImgReplace) {
						prevControl.find('img.'+$.compact.slider.conf.clearPixelClass).height(firstPanelHeight);
						nextControl.find('img.'+$.compact.slider.conf.clearPixelClass).height(firstPanelHeight);
					}
			}



		// how many panels can we fit??
			totalPanels = panels.size();
			availableWidth = $(this).next('.'+$.compact.slider.conf.measureElClass).innerWidth() - controlWidths;
			panelsDisplayed = 0;
			panelIndex = $(this).data('currentPanel');
			nextPanelWidth = parseInt(panels.eq(panelIndex).outerWidth(true));
			widthUsedSoFar = 0;

			while (panelsDisplayed < totalPanels && (widthUsedSoFar+nextPanelWidth) < availableWidth) {
				widthUsedSoFar = widthUsedSoFar+nextPanelWidth;

				panelsDisplayed++;
				panelIndex++;

				if (panels.eq(panelIndex).size() == 0) {
					// no more on the right, check if more from the left would fit
						previousWidthUsedSoFar = widthUsedSoFar;
						panelIndex = $(this).data('currentPanel');
						nextPanelWidth = parseInt(panels.eq(panelIndex).outerWidth(true));

						while (panelsDisplayed < totalPanels && (widthUsedSoFar+nextPanelWidth) < availableWidth) {
							widthUsedSoFar = widthUsedSoFar+nextPanelWidth;
							panelsDisplayed++;
							panelIndex--;

							nextPanelWidth = parseInt(panels.eq(panelIndex).outerWidth(true));
						}

					// if width changed, scroll to new panel
						if (previousWidthUsedSoFar != widthUsedSoFar) {
							scrollToPanel(this, panelIndex);
							return; // don't animate this scroll
						} else {
							// no change (no room for extra elements)
							// just break out of while loop, then continue
								break;
						}
				}
				nextPanelWidth = parseInt(panels.eq(panelIndex).outerWidth(true));
			}

		// at least one panel must be displayed
			if (panelsDisplayed == 0) {
				panelsDisplayed = 1;
				widthUsedSoFar =  parseInt(panels.eq(panelIndex).outerWidth(true));
			}


		// Set widths of viewport and contents

			// Is this the initialisation phase?
			if (inital) { // The initialisation phase, don't animate the dimensions this time.

				// set width of contents, for centering.
					contentsEl.width(widthUsedSoFar + controlWidths + $.compact.slider.conf.errorMargin);

				// set viewport width for num of panels that will fit
					viewportEl.width(widthUsedSoFar);


				// reveal the widget
					$(this)
						.removeClass($.compact.slider.conf.loadingClass) // no longer loadin
						.fadeTo(0,0) // drop opacity to 0
						.children().css('visibility','visible') // re-instate children
						.end() // back up to container
							.fadeTo(options.animationDuration, 1) // fade container in
					;

			} else { // Not the initialisation phase, so, animate stuff

				// Is the viewport getting bigger or smaller?
				if (widthUsedSoFar < $(this).data('currentViewPortWidth')) { // getting smaller, animate viewport first

					// set viewport width for num of panels that will fit
						viewportEl.stop().animate(
							{width: widthUsedSoFar},
							options.collapseDuration
						);

					// set width of contents, for centering.
						contentsEl.stop().animate(
							{width: widthUsedSoFar + controlWidths + $.compact.slider.conf.errorMargin},
							options.collapseDuration+50 // slightly slower
						);

				} else { // getting bigger, animate contents first

					// store number of panels for later
						$(this).data('numPanelsDisplayed', panelsDisplayed);
						$(this).data('currentViewPortWidth', widthUsedSoFar);

					// set width of contents, for centering.

						contentsEl.stop().animate(
							{width: widthUsedSoFar + controlWidths + $.compact.slider.conf.errorMargin},
							options.collapseDuration
						);

					// set viewport width for num of panels that will fit
						viewportEl.stop().animate(
							{width: widthUsedSoFar},
							options.collapseDuration
						);

					// check to see if whitespace at end
						if (totalPanels - $(this).data('currentPanel') < panelsDisplayed) {
							scrollToPanel(this, totalPanels - panelsDisplayed);
						}

					// update the disabled/enabled state of the controls and panels/links
						updatePanelStates(panels, $(this).data('currentPanel'), panelsDisplayed);
						updateControlStates(this);
						return;
				}
			}



		// store number of panels and viewport width for later
			$(this).data('numPanelsDisplayed', panelsDisplayed);
			$(this).data('currentViewPortWidth', widthUsedSoFar);

		// update the disabled/enabled state of the controls and panels/links
			updatePanelStates(panels, $(this).data('currentPanel'), panelsDisplayed);
			updateControlStates(this);

	};

	updatePanelStates = function (panels, currentIndex, panelsDisplayed) {
		// update ARIA states/properties
			for (n = 0; n < panels.size(); n++) {
				if (n < currentIndex || n >= (currentIndex + panelsDisplayed)) {
					// These panels are hidden
					//   * remove links from tab order
					//   * set hidden
						panels.eq(n)
							.ariaState('hidden','true')
							.find('a').attr('tabindex','-1')
				} else {
					// These panels are visible
					//   * add links to tab order
					//   * set visible
						panels.eq(n)
							.ariaState('hidden','false')
							.find('a').attr('tabindex','') // add back into tabindex ('0' is recommended by ARIA, but not supported by some browsers. '' should work universally)
				}
			}
	};

	updateControlStates = function (containerEl) {

		panels = $(containerEl).find('.'+$.compact.slider.conf.panelClass);
		prevControl = $(containerEl).find('.'+$.compact.slider.conf.prevControlClass);
		nextControl = $(containerEl).find('.'+$.compact.slider.conf.nextControlClass);

		// are there hidden panels on the left?
			if ($(containerEl).data('currentPanel') != 0) {
				// enable previous control
					prevControl.removeClass('disabled prev-disabled');
			} else {
				// disable previous control
					prevControl.addClass('disabled prev-disabled');
			}

		// are there hidden panels on the right?
			if ($(containerEl).data('currentPanel')+$(containerEl).data('numPanelsDisplayed') < panels.size()) {
				// enable previous control
					nextControl.removeClass('disabled next-disabled');
			} else {
				// disable previous control
					nextControl.addClass('disabled next-disabled');
			}
	};


	handleHoldPrevious = function () {
		// reset count
			numberOfMovesWhileHeld = 0;

		// set busy
			containerEl = $(this).getSliderContainer().ariaState('busy','true');

		// trigger first scroll immediately
			prevHeldInterval($(this).attr('id'));

		// set interval
			holdIntervalId = window.setInterval('prevHeldInterval("'+$(this).attr('id')+'")', $.compact.slider.conf.holdControlInterval);

		// return false, prevent default action
			return false;
	};

	handleHoldNext = function () {
		// reset count
			numberOfMovesWhileHeld = 0;

		// set busy
			containerEl = $(this).getSliderContainer().ariaState('busy','true');

		// trigger first scroll immediately
			nextHeldInterval($(this).attr('id'));

		// set interval
			holdIntervalId = window.setInterval('nextHeldInterval("'+$(this).attr('id')+'")', $.compact.slider.conf.holdControlInterval);

		// return false, prevent default action
			return false;
	};

	/**
	 * on release, clear all animiations (this event handler delegated to the body)
	 */
	handleNextPrevRelease = function () {

		if (holdIntervalId == null) {
			return;
		}

		// clear interval
			window.clearInterval(holdIntervalId);
			holdIntervalId = null;

		// for each slider
			$($.compact.slider.conf.containerSelector).each(function(){
				// Tidy up on release (adjustments, etc...)
					adjustSlidingPanels.apply($(this));

				// end busy
					$(this).ariaState('busy','false');
			});

		// return false, prevent default action
			return false;
	};

	/**
	 * Occurs repeatedly while 'previous' control is being held down
	 */
	prevHeldInterval = function (controlId) {
		numberOfMovesWhileHeld++;
		result = doPrevious.apply($('#'+controlId),[
			doAdjustments = false // hold off doing adjustments till control is released (better performance)
		]);
		//updateControlStates($(this).parents($.compact.slider.conf.containerSelector+':first'));

		// If we've hit the end of the slider, release
			if (!result) {
				handleNextPrevRelease();
			}
	};

	/**
	 * Occurs repeatedly while 'next' control is being held down
	 */
	nextHeldInterval = function (controlId) {
		numberOfMovesWhileHeld++;
		result = doNext.apply($('#'+controlId),[
			doAdjustments = false // hold off doing adjustments till control is released (better performance)
		]);
		//updateControlStates($(this).parents($.compact.slider.conf.containerSelector+':first'));

		// If we've hit the end of the slider, release
			if (!result) {
				handleNextPrevRelease();
			}
	};

	/**
	 * Triggered on 'click' even of 'previous' control
	 */
	handleClickPrevious = function () {

		// Only perform click action if no moves occurred while held
			if (numberOfMovesWhileHeld == 0) {
				containerEl = $(this).getSliderContainer().ariaState('busy','true');
				doPrevious.apply(this);
				containerEl.ariaState('busy','false');
			}

		// reset count
			numberOfMovesWhileHeld = 0;

		// return false, prevent default action
			return false;
	};

	/**
	 * Triggered on 'click' even of 'next' control
	 */
	handleClickNext = function () {

		// Only perform click action if no moves occurred while held
			if (numberOfMovesWhileHeld == 0) {
				containerEl = $(this).getSliderContainer().ariaState('busy','true');
				doNext.apply(this);
				containerEl.ariaState('busy','false');
			}

		// reset count
			numberOfMovesWhileHeld = 0;

		// return false, prevent default action
			return false;
	};

	/**
	 * Navigate to 'previous' panel
	 */
	doPrevious = function(/* optinal */ doAdjustments) {
		// set defaults for optional arguments
			doAdjustments = (typeof doAdjustments == 'undefined')? true : doAdjustments ;

		// do nothing for disabled controls
			if ($(this).is('.disabled')) {
				return false;
			}

		// slide panels
			return scrollToPanel(
				containerEl   = $(this).getSliderContainer(),
				newPanelIndex = $(containerEl).data('currentPanel') - 1,
				doAnimation = true,
				doAdjustments
			);
	};

	/**
	 * Navigate to 'next' panel
	 */
	doNext = function(/* optinal */ doAdjustments) {
		// set defaults for optional arguments
			doAdjustments = (typeof doAdjustments == 'undefined')? true : doAdjustments ;

		// do nothing for disabled controls
			if ($(this).is('.disabled')) {
				return false;
			}

		// slide panels
			return scrollToPanel(
				containerEl   = $(this).getSliderContainer(),
				newPanelIndex = $(containerEl).data('currentPanel') + 1,
				doAnimation = true,
				doAdjustments
			);
	};


	/**
	 * Scroll to the specified panel. Either with or without animated scrolling.
	 */
	scrollToPanel = function (containerEl, newPanelIndex, /* optional */ doAnimation, /* optional */ doAdjustments) {

		// get all panels
			panels = $(containerEl).find('.'+$.compact.slider.conf.panelClass);

		// check to ensure newPanelIndex is within bounds, otherwise bail!
			if (newPanelIndex < 0 || newPanelIndex+$(containerEl).data('numPanelsDisplayed') > panels.size()) {
				// Update controls so user knows they have reached the end
					updateControlStates(containerEl);
				// bail!
					return false;
			}

		// set defaults for optional arguments
			doAnimation = (typeof doAnimation == 'undefined')? true : doAnimation ;
			doAdjustments = (typeof doAdjustments == 'undefined')? true : doAdjustments ;

		// get options
			options = $(containerEl).data('options');

		// find slider element
			sliderEl = $(containerEl).find('.'+$.compact.slider.conf.sliderElClass);

		// scroll!
			if (doAnimation) {
				// animate to new 'left' position
					sliderEl.stop().animate({left : - (panels.eq(newPanelIndex).position().left)}, options.animationDuration);
			} else {
				// no animation, just set 'left' propery
					sliderEl.stop().css('left', - (panels.eq(newPanelIndex).position().left));
			}

		// update current data variables
			$(containerEl).data('currentPanel', newPanelIndex);

		// update cookie
			updateCurrentPanelCookie(containerEl, newPanelIndex);

		if (doAdjustments) {
			// adjust dimensions and update control states
				adjustSlidingPanels.apply(containerEl);
		}

		return true;
	};

	updateCurrentPanelCookie = function (containerEl, newPanelIndex) {
		// init
			cookieRef = $.compact.slider.conf.cookieRefPrefix+$(containerEl).attr('id')+'.current';

		// get options
			options = $(containerEl).data('options');

		// has the value changed?
			if ($.compact._cookie(cookieRef) != newPanelIndex) {

				$.compact._cookie(
					cookieRef,
					newPanelIndex+'',
					{expires : options.cookieExpiryDays}
				);
			}
	};


	$.fn.getSliderContainer = function () {
		return $(this).parents($.compact.slider.conf.containerSelector+':first');
	};

})(jQuery); /* end closure *//**
 * "The Slideshow" (compact panels with slideshow)
 * jquery.compact.slideshow.js
 * @version 0.98
 * Changelog:
 *   * 0.9  when using variableHeight mode, height is now adjusted after resize event detected
 *   * 0.91 Now storing current panel reference as $.data() on container. This fixes a bug where Chrome would get confused as to which panel was the current panel.
 *   * 0.92 Support added for changing control text and title text as options passed on initialisation.
 *   * 0.93 Support added for CSS image replacement mode.
 *   * 0.94 Changes to how cookies are handled.
 *   * 0.95 Move UI button title attributes into link text (but visually hidden) so that all assistive technologies can successfully render the button label.
 *   * 0.96 Now tests to ensure ARIA keyboard nav plugin exists before trying to use it. Also now has own unique 'active' class so IE6 doesn't get confused when styling active state.
 *   * 0.97 Now allows playback controls to be configured to appear before or after the panel controls in the generated source order (can make some stylings easier).
 *   * 0.98 Now auto-generates unique ids for slideshow sections if ids are not found in the source markup.
 *
 * @author Andrew Ramsden <http://irama.org/>
 * @see http://irama.org/web/dhtml/compact/slideshow/
 * @license GNU GENERAL PUBLIC LICENSE (GPL) <http://www.gnu.org/licenses/gpl.html>
 *
 * @requires jQuery (tested with 1.4.2) <http://jquery.com/>
 * @requires jQuery jARIA plugin <http://outstandingelephant.com/jaria/>
 * @requires jQuery Compact base plugin <http://irama.org/web/dhtml/compact/>
 *
 * @optional (but reccommended) jQuery ResizeEvents plugin <http://irama.org/web/dhtml/resize-events/>
 * @optional (but reccommended) jQuery Got Style? plugin <http://irama.org/web/dhtml/got-style/>
 * @optional (but reccommended) jQuery ARIA keyboard navigation plugin <http://irama.org/web/dhtml/aria/key-nav/>
 * @optional jQuery Cookies plugin <http://plugins.jquery.com/project/cookie>
 *
 * Notes:
 *   * To instantiate, call $($.compact.slideshow.conf.containerSelector).compactPanels(); on
 *     document ready, or just before the body tag.
 *
 * TODO:
 *   * Update animation toggle control (COMPLETE)
 *   * Extract classnames to config. (COMPLETE)
 *   * Nice styles (COMPLETE)
 *   * Separate preferences that can be passed as plugin is instantiated for a container. (COMPLETE)
 *   * Create text resize detector plugin to throw custom "x-text-resize" and "x-window-resize" event (COMPLETE)
 *   * Fix resize event handler (text is obscured) (COMPLETE)
 *   * ARIA integration (roles, props and key nav).
 */
;
if (typeof jQuery.compact == 'undefined') {
	jQuery.compact = {};
}

jQuery.compact.slideshow = {};

/**
 * Default options, these can be overridden for each call to compactSlideshow
 */
jQuery.compact.slideshow.defaultOptions = {
	type                     : 'slideshow',
	panelsLoop               : true, // when slideshow or buttons get to the last panel, should it loop back to first panel? (and in reverse)
	slideshowAutoStart       : true, // should the animation start by default?
	slideshowInterval        : 6000, // number of milliseconds till next slide is displayed
	controlsPosition         : 'before', // 'before' (default) or 'after' the slideshow content.
	playbackControlsPosition : 'after', // 'before' or 'after' (default) the generated panel buttons.
	variableHeight           : false, // if set to true, height will animate based on content of current panel. If set to false, height of largest section will be set on load (relies on setting a height attribute for all content images in img tag markup).
	rememberStateInCookie    : true, // if cookie plugin is available the last focussed tab will be remembered (also if slideshow is on or paused is remembered).
	transitionSpeed          : 'slow', // 'slow', 'def' or 'fast'
	heightAdjustSpeed        : 'fast',
	cookieExpiryDays         : 1, // 2012-03-26 bboyle: reducing cookie usage
	nextControlText          : '>',
	nextControlTitleText     : 'Next section',
	prevControlText          : '<',
	prevControlTitleText     : 'Previous section',
	pauseControlText         : '||',
	pauseControlTitleText    : 'Pause slideshow',
	playControlText          : '|>',
	playControlTitleText     : 'Start slideshow',
	supportCSSImgReplace     : false, // if you would like to replace the ascii control characters with images, set this to true
	                               // and ensure the path to a transparent image is also sent as an option. You should then
								   // style the clearPixel image to displace the text, so when images are disabled, the
								   // ascii characters become visible.
								   // See examples at http://irama.org/web/dhtml/compact/slideshow/ for more information.
	clearPixelImg            : 'displacement.png'
};

/**
 * Global configuration (these apply to every instance of compactSlideshow, etc...)
 * Adjust to suit your preferred markup.
 */
jQuery.compact.slideshow.conf = {
	containerSelector : '.'+$.compact._conf.compactClass+'.slideshow',
	activeClass       : 'compact-slideshow-active',
	cookieRefPrefix   : 'c.slideshow#',
	currentRef        : 'current-slideshow-panel', // used as reference for $.data() stored on the container element
	contentsClass     : 'compact-contents',
	windowClass       : 'viewport',
	sliderClass       : 'sliding-tray',
	sectionClass      : 'section',
	controlsClass     : 'controlbar',
	panelsClass       : 'panels',
	currentClass      : 'current',
	actionsClass      : 'actions',
	previousClass     : 'previous',
	nextClass         : 'next',
	toggleClass       : 'toggle-animation',
	animationOnClass  : 'animation-running',
	clearPixelClass   : 'for-css-replacement'
};



// start closure (protects variables from global scope)
(function($){

	// int "global" vars
	var sectionCount = null;
	$.compact.slideshow.initialised = [];


	$.fn.compactSlideshow = function (/* optional */ options) {
		options = options || {};

		$(this).each(function () {
			initCompactSlideshow.apply(this, [options]);
		});

		return $(this); // facilitate chaining
	};

	/**
	 * Each compact plugin has an .init function
	 */
	$.compact.slideshow.init = function (containerEl, /* optional */ options) {
		options = options || {};

		initCompactSlideshow.apply(containerEl, [options]);
	};

	/**
	 * Each compact plugin has an .handleResizeEvent function
	 */
	$.compact.slideshow.handleResizeEvent = function() {
		for (n=0; n<$.compact.slideshow.initialised.length; n++) {
			setStaticHeightForContainer('#'+$.compact.slideshow.initialised[n]);
		}
	};


	setAllSlideshowStaticHeights = function () {
		for (n=0; n<$.compact.slideshow.initialised.length; n++) {

		containerEl = $('#'+$.compact.slideshow.initialised[n]);
		options = containerEl.data('options');
		// set height?
			if (!options.variableHeight) {
				setStaticHeight.apply(containerEl);
			}
		}
	};
	$(document).ready( function() {
		/* On document ready, give the browser time to render, then check to see if heights are set correctly */
		window.setTimeout(setAllSlideshowStaticHeights, 500);
	});


	initCompactSlideshow = function (/* optional */ options) {

		// is CSS supported? (if gotStyle plugin is not avialable, assume it is supported).
			if (qg.gotStyle() === false) {
				$.debug('DEBUG: Your browser does not have CSS support available or enabled, slideshow script exiting');
				return;
			}

		// must have a unique id
			if ($(this).attr('id') == '') {

				$.debug('DEBUG: Each "compact slideshow" ('+$.compact.slideshow.conf.containerSelector+') container must have a unique id');

				return false;
			}
			if (!$(this).is($.compact.slideshow.conf.containerSelector)) {
				// add the appropriate classes
				$(this).addClass($.compact.slideshow.conf.containerSelector.split('.').join(' '));
			}


		// hide while loading
			$(this).css('visibility', 'hidden');


		// Merge runtime options with defaults
		// Note: The first argument sent to extend is an empty object to
		// prevent extend from overriding the default $.AKN.defaultOptions object.
			options = (typeof options == 'undefined')
				? $.compact.slideshow.defaultOptions
				: $.extend({}, $.compact.slideshow.defaultOptions, options)
			;
			$(this).data('options', options);


		// add contents element
			// $.compact.slideshow.conf.contentsClass
			contentsEl = $('<div class="'+$.compact.slideshow.conf.contentsClass+'"></div>');
			heading = $(this).firstHeading().remove();
			if (heading.text() != '') {
				contentsEl.append(heading);
			}

		// add window elements
			windowEl = $('<div class="'+$.compact.slideshow.conf.windowClass+'"><div class="'+$.compact.slideshow.conf.sliderClass+'"></div></div>');

			windowEl.find('.'+$.compact.slideshow.conf.sliderClass).append($(this).contents());


		// remove existing content, replace with containers
			$(this).empty();
			contentsEl.append(windowEl);
			$(this).append(contentsEl);

		// add buttons
			panels = '<ul class="'+$.compact.slideshow.conf.panelsClass+'"></ul>';
			// v0.95: title text now becomes part of the link text to support assistive technologies that don't render the title attribute.
			playBackControls = '<ul class="'+$.compact.slideshow.conf.actionsClass+'">'+

						'<li><a href="#" class="'+$.compact.slideshow.conf.previousClass+'" title="'+options.prevControlTitleText+'">'+
			            '<span class="button-symbol">'+options.prevControlText+'</span>'+
			            '<span class="button-title">'+options.prevControlTitleText+'</span></a></li>'+

						'<li><a href="#" class="'+$.compact.slideshow.conf.toggleClass+'" title="'+options.pauseControlTitleText+'">'+
			            '<span class="button-symbol">'+options.pauseControlText+'</span>'+
			            '<span class="button-title">'+options.pauseControlTitleText+'</span></a></li>'+

						'<li><a href="#" class="'+$.compact.slideshow.conf.nextClass+'" title="'+options.nextControlTitleText+'">'+
			            '<span class="button-symbol">'+options.nextControlText+'</span>'+
			            '<span class="button-title">'+options.nextControlTitleText+'</span></a></li>'+

						'</ul>';

			// v0.97: The order of playback controls and panel buttons can be switched
			buttons = $('<div class="'+$.compact.slideshow.conf.controlsClass+'"></div>');
			if (options.playbackControlsPosition == 'before') {
				buttons.append(playBackControls+panels);
			} else {
				buttons.append(panels+playBackControls);
			}

			if (options.controlsPosition == 'after') {
				$(this).append(buttons);
			} else {
				$(this).prepend(buttons);
			}


		// add actions to buttons
			$(this).find('.'+$.compact.slideshow.conf.previousClass).click(handlePreviousClick);
			$(this).find('.'+$.compact.slideshow.conf.toggleClass).click(toggleAutoTransitions);
			$(this).find('.'+$.compact.slideshow.conf.nextClass).click(handleNextClick);

		// for each section add a link
			sectionCount = 1;
			$(this).find('.'+$.compact.slideshow.conf.sectionClass)
				.ariaState('atomic','true') // each section can be considered atomic
				.each(addSectionTab)
			;

		// add clearPixel images if CSSImageReplacement mode is enabled
			if (options.supportCSSImgReplace !== false) {
				$(this).find('.controlbar a span.button-symbol').prepend('<img src="'+options.clearPixelImg+'" alt="" class="'+$.compact.slideshow.conf.clearPixelClass+'" />');
			}


		// get initial section (from cookie if available)
			//initialSection = $.compact._cookie($.compact.slideshow.conf.cookieRefPrefix+$(this).attr('id')+'.current');

			if (options.rememberStateInCookie) {
				var initialSection = $.compact._cookie($.compact.slideshow.conf.cookieRefPrefix+$(this).attr('id')+'.current');
			} else {
				var initialSection = null;
			}

			if (
				initialSection === null || // no cookie
				$(this).find('.'+$.compact.slideshow.conf.sectionClass+'#'+initialSection).size() == 0 // section stored in cookie no longer exists
			) {
				// first section by default
					initialSection = $(this).find('.'+$.compact.slideshow.conf.sectionClass+':first').attr('id');

			}

		// add initial section to container
			$(this).data($.compact.slideshow.conf.currentRef, initialSection);

		// ensure all sections will contain floated elements
			$(this).find('.'+$.compact.slideshow.conf.sectionClass).css('overflow','hidden');

		// hide all but initial section
			$(this).find('.'+$.compact.slideshow.conf.sectionClass).not('#'+initialSection).hide();
			//currentPanel = $(this).find('.'+$.compact.slideshow.conf.sectionClass+':first-child');

		// highlight initial section link
			$(this).find('.'+$.compact.slideshow.conf.panelsClass+' a[href$=#'+initialSection+']').addClass($.compact.slideshow.conf.currentClass);


		// get slideshow status from cookie
			//slideshowStatus = $.compact._cookie($.compact.slideshow.conf.cookieRefPrefix+$(this).attr('id')+'.status');
			if (options.rememberStateInCookie) {
				var slideshowStatus = $.compact._cookie($.compact.slideshow.conf.cookieRefPrefix+$(this).attr('id')+'.status');
			} else {
				var slideshowStatus = null;
			}

			if (slideshowStatus === null) {
				// start slideshow if autostart is on
					if (options.slideshowAutoStart) {
						// slideshow should be running
							startSlideshow(this);
					} else {
						// ensure controls are up to date
							pauseSlideshow(this);
					}
			} else if (slideshowStatus == 'paused') {
				// slideshow is paused
					pauseSlideshow(this);
			} else {
				// slideshow is running
					startSlideshow(this);
			}

		// if ARIA keyboard nav plugin is available, use it
			if ($.fn.managefocus) {
			// use ARIA keyboard nav for browsers that support it
				$('.'+$.compact.slideshow.conf.panelsClass).managefocus(
					'a',
					{
						// "A menu is often a list of links to important sections of a document or a site"
						// (see: http://www.w3.org/TR/wai-aria/#menu)
						role : 'menu',
						ignoreKeys  : [38,40],
						keyHandlers : {
							38 : panelsNavEvent, // up key will open section
							40 : panelsNavEvent // down key will open section
						}
					}
				);
				$('.'+$.compact.slideshow.conf.actionsClass).managefocus(
					'a',
					{
						// "The toolbar is often a subset of functions found in a menubar, designed to
						// reduced user effort in using these functions" (see: http://www.w3.org/TR/wai-aria/#toolbar)
						role : 'toolbar',
						ignoreKeys  : [38,40],
						keyHandlers : {
							38 : actionsNavEvent, // up key will open section
							40 : actionsNavEvent // down key will open section
						}
					}
				);
			}


		// lastly set active class
			$(this)
				.addClass($.compact.slideshow.conf.activeClass)
				.ariaState('live','polite')
			;

		// Keep a record of the id of each initialised container
			$.compact.slideshow.initialised[$.compact.slideshow.initialised.length++] = $(this).attr('id');


		// now active styles are applied, if container should have static height...
			if (!options.variableHeight) {
				// static height
				// find height of tallest section, set to that height
					windowEl.height(getTallestSlideshowSection(this));
					windowEl.trigger('x-height-change');
			}

		// all content loaded, reveal.
			$(this)
				//.fadeTo(0,0)
				.css('visibility', 'visible')
				//.fadeTo(options.transitionSpeed,1) // fadein is breaking elements pushed outside the container element using negative margins (IE6 & 7).
			;
	};

	panelsNavEvent = function (eventObj) {
		handleTabClick.apply(this);

		eventObj.preventDefault();
		return false;
	};

	actionsNavEvent = function (eventObj) {
		if ($(this).is('.'+$.compact.slideshow.conf.previousClass)) {
			handlePreviousClick.apply(this);
		} else if ($(this).is('.'+$.compact.slideshow.conf.nextClass)) {
			handleNextClick.apply(this);
		} else if ($(this).is('.'+$.compact.slideshow.conf.toggleClass)) {
			toggleAutoTransitions.apply(this);
		}
		eventObj.preventDefault();
		return false;
	};

	setStaticHeightForContainer = function (containerElement) {
		setStaticHeight.apply($(containerElement));
	};

	/**
	 * Sets a static height based on the height of the tallest section
	 */
	setStaticHeight = function() {
		var options = $(this).data('options'),
			windowEl = $(this).find('.'+$.compact.slideshow.conf.windowClass),
			height
		;

		if (options.variableHeight) {
			// animate to the height now required by the current section
				//currentSection = $(containerEl).find('.'+$.compact.slideshow.conf.sectionClass+'.'+$.compact.slideshow.conf.openClass+':first');
				currentSection = getCurrentPanel(this);
				windowEl.stop().animate({'height': $(currentSection).fullHeight()}, options.heightAdjustSpeed, function(){
					$(this).trigger('x-height-change');
				});
		} else {
			// static height
			height = getTallestSlideshowSection(this);

			// only animate and trigger event if height actually changed
			if ( height !== windowEl.height() ) {
				windowEl.stop().animate({'height':height}, options.heightAdjustSpeed, function(){
					$(this).trigger('x-height-change');
				});
			}
		}
	};

	getTallestSlideshowSection = function (containerEl) {
		tallest = 0;
		$(containerEl).find('.'+$.compact.slideshow.conf.sectionClass).each(function() {
			if (tallest < (sectionHeight = $(this).fullHeight())) {
				tallest = sectionHeight;
			}
		});
		return tallest;
	};

	startSlideshow = function (containerEl) {
		_setSlideshowTimeout(containerEl);

		options = $(containerEl).data('options');

		// set cookie
			$.compact._cookie(
				$.compact.slideshow.conf.cookieRefPrefix+$(containerEl).attr('id')+'.status',
				'running',
				{expires : options.cookieExpiryDays}
			);

		// update controls (animation toggle)
			toggle = $(containerEl)
				.data('animation','running')
				.addClass($.compact.slideshow.conf.animationOnClass)
				.find('.'+$.compact.slideshow.conf.actionsClass+' .'+$.compact.slideshow.conf.toggleClass)
			;
			toggle
					.attr('title', options.pauseControlTitleText)
					.ariaState('pressed','true')
					.find('span.button-symbol')
						.text(options.pauseControlText).end()
					.find('span.button-title')
						.text(options.pauseControlTitleText)

			;
			if (options.supportCSSImgReplace !== false) {
				toggle.find('span.button-symbol')
					.prepend('<img src="'+options.clearPixelImg+'" alt="" class="'+$.compact.slideshow.conf.clearPixelClass+'" />');
			}
	};

	pauseSlideshow = function (containerEl) {
		_clearSlideshowTimeout(containerEl);

		options = $(containerEl).data('options');

		// set cookie
			$.compact._cookie(
				$.compact.slideshow.conf.cookieRefPrefix+$(containerEl).attr('id')+'.status',
				'paused',
				{expires : options.cookieExpiryDays}
			);

		// update controls (animation toggle)
			toggle = $(containerEl)
				.data('animation','paused')
				.removeClass($.compact.slideshow.conf.animationOnClass)
				.find('.'+$.compact.slideshow.conf.actionsClass+' .'+$.compact.slideshow.conf.toggleClass)
			;
			toggle
					.attr('title', options.playControlTitleText)
					.ariaState('pressed','false')
					.find('span.button-symbol')
						.text(options.playControlText).end()
					.find('span.button-title')
						.text(options.playControlTitleText)
			;
			if (options.supportCSSImgReplace !== false) {
				toggle.find('span.button-symbol')
					.prepend('<img src="'+options.clearPixelImg+'" alt="" class="'+$.compact.slideshow.conf.clearPixelClass+'" />');
			}
	};

	_clearSlideshowTimeout = function (containerEl) {
		toID = $(containerEl).data('animationTimeoutId');
		if (typeof toID != 'undefined') {
			window.clearTimeout(toID);
		}
	};

	_setSlideshowTimeout = function (containerEl) {
		_clearSlideshowTimeout(containerEl);
		options = $(containerEl).data('options');
		toID = window.setTimeout('handleSlideshowNext(\'#'+$(containerEl).attr('id')+'\')', options.slideshowInterval);
		$(containerEl).data('animationTimeoutId', toID);
	};

	handleSlideshowNext = function (containerId) {
		// find next control, give it a click
			handleNextClick.apply(
				$(containerId).find('.'+$.compact.slideshow.conf.actionsClass+' .'+$.compact.slideshow.conf.nextClass),
				[beAssertive=false]
			);
	};

	addSectionTab = function () {

		containerEl = getContainerEl(this);

		// each section must have a unique id
			if (! $(this).attr('id')) {

				id = containerEl.attr('id')+'-section-'+sectionCount;
				$(this).attr('id', id);

				//$.debug('DEBUG: Each "compact slideshow" ('+$.compact.slideshow.conf.containerSelector+') section must have a unique id. Auto-generating one for this section (#'+id+')');

			} else {
				id = $(this).attr('id');
			}


		//var listItem = $('<li><a href="#'+id+'" title="'+$(this).firstHeading(true).text()+'"><span>'+(sectionCount++)+'</span></a></li>');

		var listItem = $(
			'<li><a href="#'+id+'" title="'+$(this).firstHeading(true).text()+'">'+
			'<span class="button-symbol">'+sectionCount+'</span>'+
			'<span class="button-title">'+(sectionCount++)+'</span></a></li>'
		);


		listItem.find('a')
			.data('section',id)
			.click(handleTabClick)
		;
		containerEl.find('ul.'+$.compact.slideshow.conf.panelsClass).append(listItem);
	};

	handleTabClick = function () {
		containerEl = getContainerEl(this);
		currentPanel = getCurrentPanel(this);
		newPanel = containerEl.find('.'+$.compact.slideshow.conf.sectionClass+'#'+$(this).data('section'));
		if (newPanel.attr('id') == currentPanel.attr('id')) {
			return false;
		}
		jumpToPanel(newPanel);

		return false; // suppress # link being followed
	};

	handlePreviousClick = function () {
		// find container element and options
			containerEl = getContainerEl(this);
			options = $(containerEl).data('options');

		// user initiated action, report assertively (jumpToPanel returns reporting to polite)
			containerEl.ariaState('live','assertive');

		currentPanel = getCurrentPanel(this);
		newPanel = currentPanel.prevAll('.'+$.compact.slideshow.conf.sectionClass+':first');
		if (newPanel.size()>0) {;
			jumpToPanel(newPanel);
		} else if (options.panelsLoop) {
			// load last panel
				newPanel = currentPanel.siblings(':last-child');
				jumpToPanel(newPanel);
		}
		return false; // suppress # link being followed
	};

	/**
	 * ARIA note: After a user initiated action, we want the live region to report updated content
	 * assertively. When the slideshow calls this function, only report changes politely (i.e: beAssertive = false).
	 */
	handleNextClick = function (beAssertive) {
		// find container element and options
			containerEl = getContainerEl(this);
			options = $(containerEl).data('options');

		beAssertive = (beAssertive !== false) ? true : false; // if unspecified default is true

		if (beAssertive) {
			// Note about ARIA 'live' property:
			// this property will be returned to "polite" by the jumpToPanel function after the
			// change has been committed (busy=false) therefore hopefully after the UA has
			// assertively reported it.
			// beAssertive should be set to false if this function is being called but not
			// because of a user-initiated action.
				containerEl.ariaState('live','assertive');
		}

		currentPanel = getCurrentPanel(this);
		newPanel = currentPanel.nextAll('.'+$.compact.slideshow.conf.sectionClass+':first');
		//newPanel = currentPanel.nextAll('.'+$.compact.slideshow.conf.sectionClass).eq(0);
		if (newPanel.size() > 0) {
			jumpToPanel(newPanel);
		} else if (options.panelsLoop) {
			// load first panel
				newPanel = currentPanel.siblings(':first');
				//newPanel = containerEl.find('.'+$.compact.slideshow.conf.sectionClass).eq(0);
				jumpToPanel(newPanel);
		}

		return false; // suppress # link being followed
	};

	toggleAutoTransitions = function () {

		containerEl = getContainerEl(this);
		if (containerEl.data('animation') == 'running') {
			pauseSlideshow(containerEl);
		} else {
			startSlideshow(containerEl);
			handleSlideshowNext(containerEl); // trigger animation straight away
		}

		return false; // suppress # link being followed
	};

	jumpToPanel = function (newPanel) {

		setCurrentPanel(newPanel);
		updatePanelLinks(newPanel);

		// find container element and options
			//var containerEl = getContainerEl(newPanel);
			//var options = $(containerEl).data('options');
			containerEl = getContainerEl(newPanel);
			options = $(containerEl).data('options');

		// find the window element
			windowEl = containerEl.find('.'+$.compact.slideshow.conf.windowClass+':first');

		// For first transition, set window to height of open section
			if (options.variableHeight) {
				windowEl.animate({height:newPanel.fullHeight()}, function(){
					$(this).trigger('x-height-change');
				});
			}

		containerEl.ariaState('busy','true');

		// fadeOut visible sections
			windowEl.find('.'+$.compact.slideshow.conf.sectionClass+':visible').not(newPanel)
				.stop()
				.ariaState('hidden','true')
				.fadeOut(options.transitionSpeed, function() {

					//var containerEl = getContainerEl(newPanel);
					//var options = $(containerEl).data('options');
					containerEl = getContainerEl(newPanel);
					options = $(containerEl).data('options');

					// hide any other panels that slipped through the cracks (happens sometimes)
						containerEl
							.find(
								'.'+$.compact.slideshow.conf.windowClass+':first .'+$.compact.slideshow.conf.sectionClass
							).visible().not(newPanel)
								.stop().hide()
								.ariaState('hidden','true')
						;

					// fadeIn new section (after old section has faded and gone completely)
						//newPanel.stop().fadeIn(options.transitionSpeed).fadeTo(options.transitionSpeed,1,function(){
						newPanel.stop().fadeTo(0,0).show().fadeTo(options.transitionSpeed,1,function(){
							// Clean up for IE 6, 7, 8 (seems to affect only Windows OS with ClearType enabled)
							// (perhaps IE9 also in future? If 9 also suffers, change the next line to include 9)
								if ( qg.oldIE ) {
									$(this).get(0).style.filter = '';
								}

							// update states
								$(this).ariaState('hidden','false');
								// if this action was user-initiated it is now over, return reporting mode to polite
								containerEl
									.ariaState('relevant','all') // content was hidden, other content was revealed
									.ariaState('busy','false')
									.ariaState('live','polite')
								;
						});
				})
			;


		// animate window to height of new section
			if (options.variableHeight) {
				windowEl.stop().animate({height:newPanel.fullHeight()},'','',function(){
					//windowEl.css('height','auto');
					$(this).trigger('x-height-change');
				});
			}


		// set cookie
			$.compact._cookie(
				$.compact.slideshow.conf.cookieRefPrefix+containerEl.attr('id')+'.current',
				newPanel.attr('id'),
				{expires : options.cookieExpiryDays}
			);

		// if panels are auto animating, set new timer
			if (containerEl.data('animation') == 'running') {
				_setSlideshowTimeout(containerEl);
			}

	};

	getContainerEl = function (childEl) {
			return ($(childEl).eq(0).is($.compact.slideshow.conf.containerSelector))
				? $(childEl).eq(0)
				: $(childEl).parents($.compact.slideshow.conf.containerSelector+':first')
			;
	};

	getCurrentPanel = function (childEl, /* optional */ containerEl) {
		containerEl = containerEl || getContainerEl(childEl);
		// find current panel link
			return containerEl.find('#'+containerEl.data($.compact.slideshow.conf.currentRef));
	};

	setCurrentPanel = function (newPanel) {
		getContainerEl(newPanel).data($.compact.slideshow.conf.currentRef, newPanel.attr('id'));
	};


	updatePanelLinks = function (newPanel) {
		getContainerEl(newPanel)
			.find('.'+$.compact.slideshow.conf.panelsClass+' a') // find all panel links
			.removeClass($.compact.slideshow.conf.currentClass) // remove current class

			.filter('[href$=#'+$(newPanel).attr('id')+']') // find newpanel link
			.addClass($.compact.slideshow.conf.currentClass) // flag as current
			//.each(function(){$.debug('new current set to '+$(this).attr('href')+' after matching '+$(newPanel).attr('id'));})
		;
	};

}( jQuery )); /* end closure */
var ResizeEvents;
/**
 * "Compact" base plugin (Unobtrusive DHTML clickey-hidey content sections)
 * jquery.compact.init.js
 * @version 3.5.2
 * Changelog:
 *   *  3.5.1 split from jquery.compact so it can be run after plugins are loaded
 *
 * @author Andrew Ramsden
 * @see http://irama.org/web/dhtml/compact/
 * @license GNU GENERAL PUBLIC LICENSE (GPL) <http://www.gnu.org/licenses/gpl.html>
 *
 * @requires jQuery (tested with 1.4.2) <http://jquery.com/>
 * @requires jQuery jARIA plugin <http://outstandingelephant.com/jaria/>
 *
 * @optional (but reccommended) jQuery ResizeEvents plugin <http://irama.org/web/dhtml/resize-events/>
 * @optional (but reccommended) jQuery Got Style? plugin <http://irama.org/web/dhtml/got-style/>
 * @optional (but reccommended) jQuery ARIA keyboard navigation plugin <http://irama.org/web/dhtml/aria/key-nav/>
 * @optional jQuery Cookies plugin <http://plugins.jquery.com/project/cookie>
 *
 */

/*globals ResizeEvents */
(function( $, ResizeEvents ) {// start closure
	'use strict';

	// On DOMLoad
	$(function() {

		// Initialise compact sections if not already initialised
		if ($.compact._conf.autoInitialise) {
			$('.'+$.compact._conf.compactClass)
				.not('.'+$.compact._conf.activeClass+', '+$.compact._conf.activeClasses)
					.compact();
		}
		// If ResizeEvents plugin is available, listen for resize events
		if (typeof ResizeEvents !== 'undefined') {
			$(this).each(function() {
				ResizeEvents.bind(
					'x-text-resize x-window-resize', // no need to catch 'x-initial-sizes', handled during init
					function() {
						// Give the browser a few ms to render the any new styles (for text size change)
						// then set the height of the .window element.
						window.setTimeout($.compact._handleResizeEvent, 20);
					}
				);
			});
		}
	});

}( jQuery, ResizeEvents )); /* end closure */
/***
 Copyright 2007 Chris Hoffman

 This software is dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.
***/

/******************************
  Commonly used variable names

  args - an array of function arguments
  attr - an attribute name
  el   - a DOM element
  i    - an array index
  jq   - a jQuery object
  val  - a value
 ******************************/

(function( $, window ) {
	"use strict";

var document = window.document,

ariaStatesNS = "http://www.w3.org/2005/07/aaa",

xhtmlRoles = [
	"main",
	"secondary",
	"navigation",
	"banner",
	"contentinfo",
	"statements",
	"note",
	"seealso",
	"search"
],

xhtmlRolesRegex = new RegExp("^" + xhtmlRoles.join("|") + "$"),

focusableRoles = [
	"button",
	"checkbox",
	"columnheader",
	"combobox",
	"grid",
	"gridcell",
	"group",
	"listbox",
	"listitem",
	"menu",
	"menubar",
	"menuitem",
	"menuitemcheckbox",
	"menuitemradio",
	"option",
	"radio",
	"radiogroup",
	"row",
	"rowheader",
	"slider",
	"spinbutton",
	"tab",
	"tabpanel",
	"textbox",
	"toolbar",
	"tree",
	"treegrid",
	"treeitem"
],

focusableRolesRegex = new RegExp("^(wairole:)?" + focusableRoles.join("|") + "$"),

ariaStateAttr = (function() {
	// Use the aria- attribute form.
	return function(jq, attr, val) {
		if (typeof val !== "undefined") {
			jq.each(function(i, el) {
				$(el).attr("aria-" + attr, val);
			});
		} else {
			return jq.attr("aria-" + attr);
		}
	};
}())

;

$.fn.extend({
	ariaRole : function(role){
		var jq = this;
		if (role) {

			// Add the role: prefix, unless it's one of the XHTML Role Module roles

			role = xhtmlRolesRegex.test(role) ? role : "wairole:" + role;

			jq.each(function(i, el) {
				$(el).attr("role", role);

				if (focusableRolesRegex.test(role) && el.tabIndex < 0) {
					el.tabIndex = 0;
				}
			});
			return jq;
		} else {
			role = jq.eq(0).attr("role");
			if (role) {
				role = role.replace(/^wairole:/, "");
			}
			return role;
		}
	},

	ariaState : function() {
		var args = arguments,
			jq = this;
		if (args.length === 2) {

			// State and value were given as separate arguments.

			jq.each(function(i, el) {
				ariaStateAttr($(el), args[0], args[1]);
			});
			return jq;
		} else {
			if (typeof args[0] === "string") {

				// Just a state was supplied, so return a value.

				return ariaStateAttr(jq.eq(0), args[0]);
			} else {

				// An object was supplied. Set states and values based on the keys/values.

				jq.each(function(i, el){
					$.each(args[0], function(state, val) {
						$(el).ariaState(state, val);
					});
				});
				return jq;
			}
			}
		},

		ariaParse : function() {
		// Parse classnames for ARIA info.

		var jq = this;
		jq.find("*").filter(".axs").each(function(i, el){
			var classNames = $(el).attr("className").split(/\s+/),
				parsingAria = false,
				roleSet = false;

			$.each(classNames, function(i, className) {
				if (className === "axs") {
					parsingAria = true;
					return true;
				}
				if (parsingAria) {
					if (roleSet) {
						var state = className.split(/-/);
						$(el).ariaState(state[0], state[1] || "true");
					} else {
						$(el).ariaRole(className);
						roleSet = true;
					}
				}
			});
		});
		jq.trigger("ariaready");
		return jq;
	}
});

// Add :ariaRole(role) and :ariaState(state[=value]) filters.

$.extend($.expr[':'], {
	// a is the element being tested, m[3] is the argument to the selector.

	ariaRole : "jQuery(a).ariaRole()===m[3]",
	ariaState : "jQuery(a).ariaState(m[3].split(/=/)[0])===(/=/.test(m[3])?m[3].split(/=/)[1]:'true')"
});

$(document).ready(function(){
	$(document).ariaParse();
});

}( jQuery, window ));jQuery(function($) {
    /* start closure */
    "use strict";
    /* Markup enhancements */
    // Initialise slideshows
    // Options
    var slideshowOptions = {
        type: "slideshow",
        controlsPosition: "after",
        slideshowInterval: 8e3,
        variableHeight: !1,
        slideshowAutoStart: !0,
        rememberStateInCookie: !1,
        supportCSSImgReplace: !0,
        clearPixelImg: "/assets/images/displacement.png"
    };
    // only initialise slideshow if there's more than one featured item
    0 === $("body.home").length && $(".news-items .section").length > 1 && $(".news-items").compact(slideshowOptions);

});
//# sourceMappingURL=slider.js.map
