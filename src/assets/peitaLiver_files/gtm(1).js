
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"392",
  
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.pageType"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"site.name"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:1066460180};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"",["escape",["macro",0],7],"\",a=\"\";switch(b){case \"Search\":a=\"impressions\";break;case \"Product\":a=\"detail\";break;case \"Cart\":case \"Checkout\":a=\"checkout\";break;case \"Confirmation\":a=\"purchase\"}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",4],8,16],"[",["escape",["macro",5],8,16],"].actionField})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",6],8,16],".id})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",6],8,16],".orderTotal})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",4],8,16],".currencyCode})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:\"Ws8NCMm032UQhtv7xgM\"};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"nsaf"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:5783};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__r"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function e(b){b+=\"\\x3d\";for(var d=document.cookie.split(\";\"),c=0;c\u003Cd.length;c++){for(var a=d[c];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return null}var f=JSON.parse(e(\"utm_ns\"));return f.utm_campaign})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:\"f3ddc16c290f3800d44c9a62b77a7ead\"};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],"[",["escape",["macro",5],8,16],"];\"impressions\"!=",["escape",["macro",5],8,16],"\u0026\u0026(a=a.products);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",17],8,16],".map(function(obj){if(\"",["escape",["macro",0],7],"\"==\"Confirmation\")return obj.parent;else return obj.skuFather})||[]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",18],8,16],".toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"",["escape",["macro",19],7],"\".replace(\/,\/g,\"|\").replace(\/ \/g,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",17],8,16],".map(function(a){return a.price})||[]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],".subTotal;a||(a=",["escape",["macro",21],8,16],".reduce(function(a,b){return Number(a)+Number(b)}));return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"",["escape",["macro",0],7],"\"!=\"Search\")return(",["escape",["macro",17],8,16],".map(function(obj){return obj.quantity})||[]).toString();else return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"",["escape",["macro",19],7],"\".length==0)return 0;var pQtd=\"",["escape",["macro",23],7],"\".split(\",\");var tQtd=0;for(var q=0;q\u003CpQtd.length;q++)tQtd+=Number(pQtd[q]);return tQtd})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/^\\\/novo-cart\/.test(",["escape",["macro",25],8,16],")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",27],8,16],".gender})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",17],8,16],".map(function(a){return a.category})||[]).toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",17],8,16],".map(function(a){return a[\"class\"]||\"\"})||[]).toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:0xfa52a1a17716};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",17],8,16],".map(function(obj){if(\"",["escape",["macro",0],7],"\"==\"Confirmation\")return obj.parent;else return obj.sku})||[]})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",0],7],"\";switch(a){case \"Home\":a=\"home\";break;case \"Product\":a=\"product\";break;case \"Cart\":a=\"cart\";break;case \"Confirmation\":a=\"purchase\";break;case \"Search\":a=\/busca|q=\/g.test(\"",["escape",["macro",33],7],"\")?\"searchresults\":\"category\";break;default:a=\"other\"}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",17],8,16],".map(function(a){return a.price})||\"\";return a=parseFloat(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:577};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:\"J2fgOoxHyBuD8FddqPVw\"};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=localStorage.getItem(\"__nlscid\"),b=null!==a\u0026\u0026void 0!==a;return b?a:\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(void 0==",["escape",["macro",27],8,16],"){var a=",["escape",["macro",39],8,16],";var b=null!==a\u0026\u0026void 0!==a;return b?a:\"\"}return userID=",["escape",["macro",27],8,16],".customerId})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:\"PB7N\"};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",33],7],"\";return-1\u003Ca.search(\"busca\")?(a=a.split(\"q\\x3d\"),a[1]):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",32],8,16],".toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"\",a=\"Search\"==",["escape",["macro",0],8,16],"?",["escape",["macro",18],8,16],":",["escape",["macro",32],8,16],";void 0!==a\u0026\u0026a!==[]\u0026\u0026(b=a.slice(0,4));return b.toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",17],8,16],".map(function(a){return a.brand})||[]).toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",17],8,16],".map(function(a){return a.price})||[]).toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",17],8,16],".map(function(a){return a.listPrice})||[]).toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",17],8,16],".map(function(a){return a.name||\"\"})||[]).toString()})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shopping.paymentType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",17],8,16],".filter(function(a){if(\"Netshoes\"===a.seller)return a.price=parseFloat(a.price),a})||[]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003C",["escape",["macro",50],8,16],".length){var c=",["escape",["macro",50],8,16],".map(function(a){return a.quantity}),b=0;c.map(function(a){b+=Number(a)});return b}return 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",17],8,16],".filter(function(a){if(\"Netshoes\"!==a.seller)return a.price=parseFloat(a.price),a})||[]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003C",["escape",["macro",52],8,16],".length){var c=",["escape",["macro",52],8,16],".map(function(a){return a.quantity}),b=0;c.map(function(a){b+=Number(a)});return b}return 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003C",["escape",["macro",50],8,16],".length){var a=",["escape",["macro",50],8,16],".map(function(b){return b.price*b.quantity});a=a.reduce(function(b,a){return b+a});return parseFloat(a.toFixed(2))}return 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003C",["escape",["macro",52],8,16],".length){var a=",["escape",["macro",52],8,16],".map(function(b){return b.price*b.quantity});a=a.reduce(function(b,a){return b+a});return parseFloat(a.toFixed(2))}return 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003C",["escape",["macro",54],8,16],"\u0026\u00260\u003E=",["escape",["macro",55],8,16],")return\"1P\";if(",["escape",["macro",54],8,16],"\u003E=",["escape",["macro",55],8,16],")return\"Mix1P\";if(0\u003C",["escape",["macro",55],8,16],"\u0026\u00260\u003E=",["escape",["macro",54],8,16],")return\"3P\";if(",["escape",["macro",55],8,16],"\u003E",["escape",["macro",54],8,16],")return\"Mix3P\"})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"campaignCode"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\";document.querySelector(\".search-query\")?a=document.querySelector(\".search-query\").innerText:document.querySelectorAll(\".breadcrumb\")\u0026\u0026(a=document.querySelectorAll(\".breadcrumb\")[0].childNodes[1].innerText);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:\"86\"};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:\"54791143359d9\"};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"meliuz_xtra"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(.17*",["escape",["macro",22],8,16],").toFixed(2)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"17819\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",6],8,16],".coupon})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"afiliados\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function e(b){b+=\"\\x3d\";for(var d=document.cookie.split(\";\"),c=0;c\u003Cd.length;c++){for(var a=d[c];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return null}var f=JSON.parse(e(\"utm_ns\"));return f.utm_source})();"]
    },{
      "function":"__u",
      "vtp_component":"PROTOCOL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"site.application"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.self!==window.top?\"true\":\"false\"})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.searchResults"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=-1;\"number\"==typeof window.innerHeight?a=window.innerHeight:document.documentElement\u0026\u0026document.documentElement.clientHeight?a=document.documentElement.clientHeight:document.body\u0026\u0026document.body.clientHeight\u0026\u0026(a=document.body.clientHeight);-1\u003Ca\u0026\u0026(a=20*Math.round(a\/20));var b=-1;\"number\"==typeof window.innerWidth?b=window.innerWidth:document.documentElement\u0026\u0026document.documentElement.clientWidth?b=document.documentElement.clientWidth:document.body\u0026\u0026document.body.clientWidth\u0026\u0026(b=document.body.clientWidth);\n-1\u003Cb\u0026\u0026(b=20*Math.round(b\/20));return 2\u003E=a\u0026\u00262\u003E=b?\"true\":\"false\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"site.domain"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",74],8,16],".replace(\/^(www|shop\\.brasil)\\.{1}\/,\"\").replace(\/\\..*$\/,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\",c=void 0!=",["escape",["macro",69],8,16],",b=",["escape",["macro",69],8,16],";switch(c){case void 0!=b.match(\/me-s_zanx\/g):a=\"zanox\";break;case void 0!=b.match(\/me-s_lmde\/g):a=\"lomadee\";break;case void 0!=b.match(\/me-s_afil\/g):a=\"afilio\";break;case void 0!=b.match(\/me-s_rkten\/g):a=\"rakuten\";break;case void 0!=b.match(\/b2b_\/g):a=\"b2b\";break;case void 0!=b.match(\/_bscp\/g):a=\"buscape\"}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={zanox:10,lomadee:10,afilio:10,rakuten:10};return a[",["escape",["macro",76],8,16],"]||15})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return encodeURIComponent(\"",["escape",["macro",33],7],"\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shopping.orderDiscount"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"lmdsid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"",["escape",["macro",29],7],"\".replace(\/,\\s\/g,\",\").split(\",\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"",["escape",["macro",48],7],"\".replace(\/,\\s\/g,\",\").split(\",\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"\",a=",["escape",["macro",18],8,16],",c=",["escape",["macro",81],8,16],",d=",["escape",["macro",21],8,16],",e=",["escape",["macro",23],8,16],".replace(\/ \/g,\"\").split(\",\"),f=",["escape",["macro",82],8,16],";for(i=0;i\u003Ca.length;i++)\"\"!=a[i]\u0026\u0026(b+=\"prod\\x3d\"+a[i].toString()+\";\"+c[i].toString()+\";\"+d[i].toString()+\";\"+e[i].toString()+\";\"+f[i].toString(),i!=a.length-1\u0026\u0026(b+=\"\\x26\"));return decodeURI(b)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",12],7],"\",b=\/cpar_bscp\/g;a=b.exec(a);return null!=a?\"buscape\":\"lomadee\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:3518};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=void 0!=",["escape",["macro",27],8,16],".userEmail?",["escape",["macro",27],8,16],".userEmail:\"\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=void 0!=",["escape",["macro",68],8,16],"\u0026\u0026null!=",["escape",["macro",68],8,16],",b=\"mobile\"==",["escape",["macro",68],8,16],"?\"m\":\"d\";return a?b:\"\"})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__ctodedup"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",88],8,16],";void 0==a\u0026\u0026(a=\"other\");return-1!=a.search(\"criteo\")?1:0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[],a=",["escape",["macro",19],8,16],".split(\",\"),c=",["escape",["macro",46],8,16],".split(\",\"),d=",["escape",["macro",23],8,16],".split(\",\");for(i=0;i\u003Ca.length;i++)\"\"!=a[i]\u0026\u0026b.push({id:a[i],price:c[i],quantity:d[i]});return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:\"A6A026AA-5257-40E2-8D12-E825A01EB95E\"};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:11271823};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:\"94936fe5-1400-4ed3-b028-d0c97038df6c\"};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:577};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"",["escape",["macro",0],7],"\"!=\"Search\")return(",["escape",["macro",17],8,16],".map(function(obj){return obj.subTotal||obj.subtotal})||[]).toString();else return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:\"12078C818328676\"};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"",["escape",["macro",19],7],"\".length==0)return 0;var pQtd=\"",["escape",["macro",23],7],"\".split(\",\");var tQtd=0;for(var q=0;q\u003CpQtd.length;q++)tQtd+=Number(pQtd[q]);return tQtd})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"",["escape",["macro",97],7],"|\",a=",["escape",["macro",18],8,16],",c=",["escape",["macro",23],8,16],".replace(\/ \/g,\"\").split(\",\"),d=",["escape",["macro",21],8,16],";for(i=0;i\u003Ca.length;i++)\"\"!=a[i]\u0026\u0026\"\"!=c[i]\u0026\u0026\"\"!=d[i]\u0026\u0026(b+=a[i].toString()+\";\"+c[i].toString()+\";\"+d[i].toString(),i!=a.length-1\u0026\u0026(b+=\"|\"));return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:30};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:\"773ed3059447707d9304e4b65aac3632be2a75f3eaff646e\"};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=String(",["escape",["macro",27],8,16],".email);\"undefined\"==a\u0026\u0026(a=\"\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",15],7],["escape",["macro",66],7],"\",b=\/b2b_|cpar_|bd_|me-s_zanx|me-s_ctads|me-s_afil|me-s_lmde|me-s_rkten|me-s_pgit|me-s__zanx|par_mail_pgit|par_mail_anx|fcbk|TEXT_BRD|pesquisa_netshoes|SEMGGL|Google_cpc_pesquisa|SEMYHO|ME-S_GGLE|me-s_cto|me-s_mbd|me-s_mdb|me-s_uol|me-s_rtbhouse|rtbhouse|ME-S_GGLE|me-r_msn|me-s_msn|me-r_uol|me-r_mbd|me-r_mdb|me-r_glb|ME-R_GGLE|organic|referral|hardmob\/g,c=\/sc_|sc-|fanpage|treebo|_BRD\/g.test(a);if(void 0!=a)a=b.exec(a);else return\"a\";b={b2b_:\"b\",\ncpar_:\"c\",bd_:\"e\",\"me-s_zanx\":\"f\",\"me-s_ctads\":\"f\",\"me-s_afil\":\"f\",\"me-s_lmde\":\"f\",\"me-s_rkten\":\"f\",\"me-s_pgit\":\"f\",\"me-s__zanx\":\"f\",par_mail_pgit:\"f\",par_mail_anx:\"f\",fcbk:\"g\",TEXT_BRD:\"h\",pesquisa_netshoes:\"h\",SEMGGL:\"i\",Google_cpc_pesquisa:\"i\",SEMYHO:\"i\",\"ME-S_GGLE\":\"j\",\"me-s_cto\":\"j\",\"me-s_mbd\":\"j\",\"me-s_mdb\":\"j\",\"me-s_uol\":\"j\",\"me-s_rtbhouse\":\"j\",rtbhouse:\"j\",\"me-r_msn\":\"k\",\"me-s_msn\":\"k\",\"me-r_uol\":\"k\",\"me-r_mbd\":\"k\",\"me-r_mdb\":\"k\",\"me-r_glb\":\"k\",\"ME-R_GGLE\":\"k\",organic:\"l\",referral:\"m\",hardmob:\"m\"};\nreturn null!==a\u0026\u0026!1===c?b[a[0]]:\"a\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"\",a=\"Search\"==",["escape",["macro",0],8,16],"?",["escape",["macro",18],8,16],":",["escape",["macro",32],8,16],";void 0!==a\u0026\u0026a!==[]\u0026\u0026(b=a.slice(0,1));return b.toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"\",a=\"Search\"==",["escape",["macro",0],8,16],"?",["escape",["macro",18],8,16],":",["escape",["macro",32],8,16],";void 0!==a\u0026\u0026a!==[]\u0026\u0026(b=a.slice(0,5));return b.toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:\"5c591a8916642e7314ee162fd36f07a19828b5598c768a2c\"};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],";return a=\"Search\"==a?",["escape",["macro",44],8,16],":",["escape",["macro",43],8,16],"})();"]
    },{
      "function":"__r"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:\"g3uptf\"};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=void 0!=",["escape",["macro",29],8,16],"?",["escape",["macro",29],8,16],":\"\";a=a.split(\",\",1);return a.toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){switch(",["escape",["macro",0],8,16],".toLowerCase()){case \"home\":var a={Netshoes:\"4521F529771D9C94AABF\"};break;case \"product\":a={Netshoes:\"65AF00A8744A23E9B3B3\"};break;case \"search\":a={Netshoes:\"1E8A694F7E7FCFD11411\"};break;case \"confirmation\":a={Netshoes:\"28101D0B7C7319C7541D\"};break;case \"cart\":a={Netshoes:\"30C8EDF361B414EF68E7\"}}return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"\",a=\"Search\"==",["escape",["macro",0],8,16],"?",["escape",["macro",18],8,16],":",["escape",["macro",32],8,16],";void 0!==a\u0026\u0026a!==[]\u0026\u0026(b=a.slice(0,4));return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",15],7],"\";return(a=a.match(\/_[0-9]{1,}_[a-zA-Z0-9]{0,}$\/))?a.toString().replace(\/^_\/,\"\").split(\"_\"):[]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",112],8,16],";return a[0]})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_trafficsource"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",114],7],"\",b={};0\u003Ca.length\u0026\u0026(b=eval(\"(\"+a+\")\"));return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",115],8,16],",b=\"\";void 0!==a.traffic\u0026\u0026(b=a.traffic);return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",115],8,16],",b=\"\";void 0!==a.source\u0026\u0026(b=a.source);return b})();"]
    },{
      "function":"__t"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.location.href;a=a.match(\/[?\u0026]([\\w]+)=([^\u0026#]*|\u0026|#|$)\/g);var d={};if(a.length)for(var c=0;a.length\u003Ec;c++){var b=a[c];b=b.substr(1).split(\"\\x3d\");console.log(b);d[b[0]]=b[1]}return d})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"netshoes.com.br static1.netshoes.net afiliados.netshoes.com.br outlook.live.com faq.directtalk.com.br static5.netshoes.net dtbot.directtalk.com.br static3.netshoes.net bmail.uol.com.br static2.netshoes.net mail.terra.com.br mail.live.com mail.google.com search.netshoes.com.mx br-mg6.mail.yahoo.com br-mg5.mail.yahoo.com mail.yahoo.com netshoes-br-stage.ns2online.com.br mail1.oiinternet.com.br mail2.oiinternet.com.br webmail-seguro.com.br app.optimizely.com static4.netshoes.net webmail.uolhost.com.br webmail.r7.com mail3.oiinternet.com.br smtp.21.chegouemail.com.br search.netshoes.com.br busca.netshoes.com.br s0.2mdn.net\".split(\" \")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return[{searchEngineName:\"360.cn\",hostname:[\"360.cn\"],searchParam:\"q\",searchEngineNameSeo:\"360.cn\"},{searchEngineName:\"Alice\",hostname:[\"www.alice.com\",\"aliceadsl.fr\"],searchParam:\"qs\",searchEngineNameSeo:\"alice\"},{searchEngineName:\"Alltheweb\",hostname:[\"www.alltheweb.com\"],searchParam:\"q\",searchEngineNameSeo:\"alltheweb\"},{searchEngineName:\"Altavista\",hostname:[\"www.altavista.com\"],searchParam:\"q\",searchEngineNameSeo:\"altavista\"},{searchEngineName:\"AOL\",hostname:[\"www.aol.com\"],searchParam:\"encquery, q, query\",\nsearchEngineNameSeo:\"aol\"},{searchEngineName:\"Ask\",hostname:[\"www.ask.com\",\"search.aol.fr\",\"alicesuche.aol.de\"],searchParam:\"q\",searchEngineNameSeo:\"ask\"},{searchEngineName:\"Auone\",hostname:[\"search.auone.jp\"],searchParam:\"q\",searchEngineNameSeo:\"auone\"},{searchEngineName:\"Avg\",hostname:[\"isearch.avg.com\"],searchParam:\"q\",searchEngineNameSeo:\"avg\"},{searchEngineName:\"Babylon\",hostname:[\"search.babylon.com\"],searchParam:\"q\",searchEngineNameSeo:\"babylon\"},{searchEngineName:\"Baidu\",hostname:[\"www.baidu.com\"],\nsearchParam:\"wd, word\",searchEngineNameSeo:\"baidu\"},{searchEngineName:\"Biglobe\",hostname:[\"biglobe.ne.jp\"],searchParam:\"q\",searchEngineNameSeo:\"biglobe\"},{searchEngineName:\"Bing\",hostname:[\"www.bing.com\"],searchParam:\"q\",searchEngineNameSeo:\"bing\"},{searchEngineName:\"Centrum.cz\",hostname:[\"search.centrum.cz\"],searchParam:\"q\",searchEngineNameSeo:\"centrum.cz\"},{searchEngineName:\"Comcast\",hostname:[\"search.comcast.net\"],searchParam:\"q\",searchEngineNameSeo:\"comcast\"},{searchEngineName:\"Conduit\",hostname:[\"search.conduit.com\"],\nsearchParam:\"q\",searchEngineNameSeo:\"conduit\"},{searchEngineName:\"CNN\",hostname:[\"www.cnn.com\/SEARCH\"],searchParam:\"query\",searchEngineNameSeo:\"cnn\"},{searchEngineName:\"Daum\",hostname:[\"www.daum.net\"],searchParam:\"q\",searchEngineNameSeo:\"daum\"},{searchEngineName:\"Ekolay\",hostname:[\"www.ekolay.net\"],searchParam:\"q\",searchEngineNameSeo:\"ekolay\"},{searchEngineName:\"Eniro\",hostname:[\"www.eniro.se\"],searchParam:\"search_word\",searchEngineNameSeo:\"eniro\"},{searchEngineName:\"Globo\",hostname:[\"www.globo.com\/busca\"],\nsearchParam:\"q\",searchEngineNameSeo:\"globo\"},{searchEngineName:\"go.mail.ru\",hostname:[\"go.mail.ru\"],searchParam:\"q\",searchEngineNameSeo:\"go.mail.ru\"},{searchEngineName:\"Google\",hostname:[\"www.google.\"],searchParam:\"q\",searchEngineNameSeo:\"google\"},{searchEngineName:\"goo.ne\",hostname:[\"goo.ne.jp\"],searchParam:\"MT\",searchEngineNameSeo:\"goo.ne\"},{searchEngineName:\"haosou.com\",hostname:[\"www.haosou.com\/s\"],searchParam:\"q\",searchEngineNameSeo:\"haosou.com\"},{searchEngineName:\"Incredimail\",hostname:[\"search.incredimail.com\"],\nsearchParam:\"q\",searchEngineNameSeo:\"incredimail\"},{searchEngineName:\"Kvasir\",hostname:[\"www.kvasir.no\"],searchParam:\"q\",searchEngineNameSeo:\"kvasir\"},{searchEngineName:\"Live\",hostname:[\"www.bing.com\"],searchParam:\"q\",searchEngineNameSeo:\"live\"},{searchEngineName:\"Lycos\",hostname:[\"www.lycos.com\"],searchParam:\"q\",searchEngineNameSeo:\"lycos\"},{searchEngineName:\"Lycos\",hostname:[\"search.lycos.\"],searchParam:\"query\",searchEngineNameSeo:\"lycos\"},{searchEngineName:\"Mamma\",hostname:[\"www.mamma.com\/\"],searchParam:\"query\",\nsearchEngineNameSeo:\"mamma\"},{searchEngineName:\"MSN\",hostname:[\"www.msn.com\/\",\"money.msn.com\",\"local.msn.com\"],searchParam:\"q\",searchEngineNameSeo:\"msn\"},{searchEngineName:\"Mynet\",hostname:[\"www.mynet.com\"],searchParam:\"q\",searchEngineNameSeo:\"mynet\"},{searchEngineName:\"Najdi\",hostname:[\"najdi.si\"],searchParam:\"q\",searchEngineNameSeo:\"najdi\"},{searchEngineName:\"Naver\",hostname:[\"www.naver.com\"],searchParam:\"query\",searchEngineNameSeo:\"naver\"},{searchEngineName:\"Netscape\",hostname:[\"search.netscape.com\"],\nsearchParam:\"query\",searchEngineNameSeo:\"netscape\"},{searchEngineName:\"ONET\",hostname:[\"szukaj.onet.pl\"],searchParam:\"q, qt\",searchEngineNameSeo:\"onet\"},{searchEngineName:\"Ozu\",hostname:[\"www.ozu.es\"],searchParam:\"q\",searchEngineNameSeo:\"ozu\"},{searchEngineName:\"Rakuten\",hostname:[\"rakuten.co.jp\"],searchParam:\"qt\",searchEngineNameSeo:\"rakuten\"},{searchEngineName:\"Rambler\",hostname:[\"rambler.ru\"],searchParam:\"query\",searchEngineNameSeo:\"rambler\"},{searchEngineName:\"Search-results\",hostname:[\"search-results.com\"],\nsearchParam:\"q\",searchEngineNameSeo:\"search-results\"},{searchEngineName:\"search.smt.docomo\",hostname:[\"search.smt.docomo.ne.jp\"],searchParam:\"MT\",searchEngineNameSeo:\"search.smt.docomo\"},{searchEngineName:\"Sesam\",hostname:[\"sesam.no\"],searchParam:\"q\",searchEngineNameSeo:\"sesam\"},{searchEngineName:\"Seznam\",hostname:[\"www.seznam.cz\"],searchParam:\"q\",searchEngineNameSeo:\"seznam\"},{searchEngineName:\"So.com\",hostname:[\"www.so.com\/s\"],searchParam:\"q\",searchEngineNameSeo:\"so.com\"},{searchEngineName:\"Sogou\",\nhostname:[\"www.sogou.com\"],searchParam:\"query\",searchEngineNameSeo:\"sogou\"},{searchEngineName:\"Startsiden\",hostname:[\"www.startsiden.no\/sok\"],searchParam:\"q\",searchEngineNameSeo:\"startsiden\"},{searchEngineName:\"Szukacz\",hostname:[\"www.szukacz.pl\"],searchParam:\"q\",searchEngineNameSeo:\"szukacz\"},{searchEngineName:\"Terra\",hostname:[\"buscador.terra.com.br\"],searchParam:\"query\",searchEngineNameSeo:\"terra\"},{searchEngineName:\"Tut.by\",hostname:[\"search.tut.by\"],searchParam:\"query\",searchEngineNameSeo:\"tut.by\"},\n{searchEngineName:\"Ukr\",hostname:[\"search.ukr.net\"],searchParam:\"q\",searchEngineNameSeo:\"ukr\"},{searchEngineName:\"Virgilio\",hostname:[\"search.virgilio.it\"],searchParam:\"qs\",searchEngineNameSeo:\"virgilio\"},{searchEngineName:\"Voila\",hostname:[\"www.voila.fr\"],searchParam:\"rdata\",searchEngineNameSeo:\"voila\"},{searchEngineName:\"Wirtulana Polska\",hostname:[\"www.wp.pl\"],searchParam:\"szukaj\",searchEngineNameSeo:\"wirtulana polska\"},{searchEngineName:\"Yahoo\",hostname:[\"www.yahoo.com\",\"yahoo.cn\",\"m.yahoo.com\"],\nsearchParam:\"p\",searchEngineNameSeo:\"yahoo\"},{searchEngineName:\"Yandex\",hostname:[\"www.yandex.com\",\"yandex.ru\"],searchParam:\"text\",searchEngineNameSeo:\"yandex\"},{searchEngineName:\"Yam\",hostname:[\"www.yam.com\"],searchParam:\"k\",searchEngineNameSeo:\"yam\"}]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shopping.orderDate"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function e(b){b+=\"\\x3d\";for(var d=document.cookie.split(\";\"),c=0;c\u003Cd.length;c++){for(var a=d[c];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return null}var f=JSON.parse(e(\"utm_ns\"));return f.utm_medium})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",6],8,16],".voucher})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",79],8,16],"?parseFloat(",["escape",["macro",79],8,16],"):0,b=",["escape",["macro",124],8,16],"?parseFloat(",["escape",["macro",124],8,16],"):0;a+=b;return parseFloat(a.toString()).toFixed(2)}catch(c){console.warn(\"Error - tVoucherAndDiscountValues\",c)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",6],8,16],".shipping})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",17],8,16],".map(function(a){return a.seller})||[]).toString()})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={\"Clube Netshoes\":739745696866566};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",17],8,16],".map(function(a){return{id:a.skuFather?a.skuFather:a.parent,quantity:a.quantity?Number(a.quantity):1}})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={zattini:12,shoestock:82};return a[",["escape",["macro",75],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={zattini:914};return a[",["escape",["macro",75],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={zattini:\"b161b53\"};return a[",["escape",["macro",75],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={shoestock:\"Shoestock\",zattini:\"Zattini\"};return a[",["escape",["macro",75],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={Netshoes:577};return a[",["escape",["macro",2],8,16],"]||0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={zattini:\"b96a3e2a\"};return a[",["escape",["macro",75],8,16],"]||0})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"click_id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",115],8,16],",b=\"\";void 0!==a.page\u0026\u0026(b=a.page);return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[],a=[\"",["escape",["macro",43],7],"\"],c=[\"",["escape",["macro",23],7],"\"],d=[\"",["escape",["macro",46],7],"\"];for(i=0;i\u003Ca.length;i++)\"\"!=a[i]\u0026\u0026b.push({identifier:a[i],amount:d[i],currency:\"BRL\",quantity:c[i]});return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[],a=",["escape",["macro",43],8,16],".split(\",\"),c=",["escape",["macro",23],8,16],".split(\",\"),d=",["escape",["macro",4],8,16],".currencyCode;for(i=0;i\u003Ca.length;i++)\"\"!=a[i]\u0026\u0026b.push({identifier:a[i],currency:d,quantity:c[i]});return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.uniqueEventId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return String(\/iPad|iPhone|iPod\/.test(navigator.userAgent)\u0026\u0026!window.MSStream)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=navigator.userAgent.toLowerCase();return-1!=a.search(\/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\\.browser|up\\.link|webos|wos)\/i)?\"true\":\"false\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",17],8,16],".map(function(a){return a.variant})||[]).toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",17],8,16],".map(function(a){return a.image||\"\"})||[]).toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",17],8,16],".map(function(a){return a.installments||0})||[]).toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",17],8,16],".map(function(a){return a.size||\"\"})||[]).toString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",17],8,16],".map(function(a){return a.promotionFlags})||[]).toString()})();"]
    },{
      "function":"__u",
      "vtp_component":"PROTOCOL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.campaign"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",6],8,16],".installments})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",27],8,16],".cadType})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"utm_campaign"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByClassName(\"product-seller\")[0];return a=a?a.innerText:\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    }],
  "tags":[{
      "function":"__html",
      "priority":10000,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"utm_ns\",cookieExpirationInDays=15,direct=\"(direct)\",none=\"(none)\",notProvided=\"(not provided)\",notSet=\"(not set)\",queryParams=",["escape",["macro",119],8,16],",refferer=document.referrer;function checkIgnoredRefferer(a){var c=",["escape",["macro",120],8,16],",d=null;if(c)for(var b=0;c.length\u003Eb;b++)if(-1!==a.indexOf(c[b])){d=!0;break}return d}\nfunction checkSearchEngine(a){var c=",["escape",["macro",121],8,16],",d=null;if(c)for(var b=0;c.length\u003Eb;b++){for(var e=0;c[b].hostname.length\u003Ee;e++)if(-1!==a.indexOf(c[b].hostname[e])){d=c[b];break}if(d)break}return d}function getCookieGTM(a){a+=\"\\x3d\";for(var c=document.cookie.split(\";\"),d=0;d\u003Cc.length;d++){for(var b=c[d];\" \"==b.charAt(0);)b=b.substring(1,b.length);if(0==b.indexOf(a))return b.substring(a.length,b.length)}return null}\nfunction eraseCookieGTM(a){document.cookie=a+\"\\x3d; Max-Age\\x3d-99999999;\"}function extractHostname(a){a=-1\u003Ca.indexOf(\"\/\/\")?a.split(\"\/\")[2]:a.split(\"\/\")[0];a=a.split(\":\")[0];return a=a.split(\"?\")[0]}function extractPath(a){a=-1\u003Ca.indexOf(\"\/\/\")?a.split(\"\/\").splice(3,10).join(\"\/\"):a.split(\"\/\").splice(1,10).join(\"\/\");return a=a.split(\"?\")[0]}\nfunction setCookieGTM(a,c,d){var b=\"\";d\u0026\u0026(b=new Date,b.setTime(b.getTime()+864E5*d),b=\"; expires\\x3d\"+b.toUTCString());document.cookie=a+\"\\x3d\"+(c||\"\")+b+\"; path\\x3d\/\"}\nif(queryParams\u0026\u0026Object.keys(queryParams).includes(\"utm_source\")\u0026\u0026queryParams.utm_source){var cookieValue={gclid:notSet,utm_campaign:queryParams.utm_campaign?queryParams.utm_campaign:notSet,utm_content:queryParams.utm_content?queryParams.utm_content:notSet,utm_medium:queryParams.utm_medium?queryParams.utm_medium:notSet,utm_source:queryParams.utm_source,utm_term:queryParams.utm_term?queryParams.utm_term:notSet};setCookieGTM(cookieName,JSON.stringify(cookieValue),cookieExpirationInDays)}else if(queryParams\u0026\u0026\nObject.keys(queryParams).includes(\"gclid\")\u0026\u0026queryParams.gclid)cookieValue={gclid:queryParams.gclid,utm_campaign:notSet,utm_content:notSet,utm_medium:\"cpc\",utm_source:\"google\",utm_term:notSet},setCookieGTM(cookieName,JSON.stringify(cookieValue),cookieExpirationInDays);else if(refferer)if(isSearchEngine=checkSearchEngine(refferer))cookieValue={gclid:notSet,utm_campaign:notSet,utm_content:notSet,utm_medium:\"organic\",utm_source:isSearchEngine.searchEngineNameSeo,utm_term:notProvided},setCookieGTM(cookieName,\nJSON.stringify(cookieValue),cookieExpirationInDays);else{if(!checkIgnoredRefferer(refferer)){var hostname=extractHostname(refferer),path=extractPath(refferer);cookieValue={gclid:notSet,utm_campaign:notSet,utm_content:path,utm_medium:\"referral\",utm_source:hostname,utm_term:notSet};setCookieGTM(cookieName,JSON.stringify(cookieValue),cookieExpirationInDays)}}else getCookieGTM(\"utm_ns\")||(cookieValue={gclid:notSet,utm_campaign:notSet,utm_content:notSet,utm_medium:none,utm_source:direct,utm_term:notSet},\nsetCookieGTM(cookieName,JSON.stringify(cookieValue),cookieExpirationInDays));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":138
    },{
      "function":"__html",
      "priority":8000,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var GTMScriptJS=GTMScriptJS||{};GTMScriptJS.utm_ns={get:function(u){var cookieArray=GTMScriptJS.cookie.get(\"utm_ns\");var cookieValue=cookieArray\u0026\u0026cookieArray.length\u0026\u0026cookieArray[1]?cookieArray[1]:null;var utm_ns=cookieValue?JSON.parse(cookieValue):{};return utm_ns[u]===\"(not set)\"||utm_ns[u]===null?\"\":utm_ns[u]}},GTMScriptJS.request={getValUrl:function(e,r){var r=r||location.search,t=(new RegExp(\"[\\\\?\\x26]\"+e.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\")+\"\\x3d([^\\x26#]*)\")).exec(r);return null==\nt?\"\":decodeURIComponent(t[1].replace(\/\\+\/g,\" \"))},getSearchReferrer:function(e){return this.getReferrer().search(e)},getReferrer:function(){return document.referrer},getValUrlToCookie:function(e){var r=GTMScriptJS.request.getReferrer();if(!(new RegExp(\".*\"+e+\"\\x3d([a-zA-Z0-9_-]{1,})(\\x26|$)\",\"g\")).test(r))r=!1;return GTMScriptJS.request.getValUrl(e,r)}},GTMScriptJS.cookie={set:function(e,r,t){if(r.length\u003E0\u0026\u0026e.length\u003E0){var o=new Date;o.setDate(o.getDate()+t),document.cookie=e+\"\\x3d\"+escape(r)+(null==\nt?\"\":\";expires\\x3d\"+o.toUTCString())+\";path\\x3d\/\"}},get:function(e){return document.cookie.match(new RegExp(e+\"\\x3d([^;]+)\"))},\"delete\":function(e){document.cookie=e+\"\\x3d ; path\\x3d\/\"}},GTMScriptJS.storage={get:function(key){localStorage.getItem(key)},set:function(key,value){localStorage.setItem(key,value)}},GTMScriptJS.nsaf={urlReferrer:GTMScriptJS.request.getReferrer(),urlNsaf:GTMScriptJS.utm_ns.get(\"utm_campaign\"),cookieNsaf:GTMScriptJS.cookie.get(\"nsaf\"),searchReferrer:GTMScriptJS.request.getSearchReferrer(\/^http(.|):\\\/\\\/(((www|afiliados)\\.(",["escape",["macro",75],9],")\\.)|((zattini|novanetshoes)-stage\\.ns2online\\.com.br))\/g),\ncreate:function(){if(\"\"!=this.urlNsaf\u0026\u0026\"https:\"==location.protocol\u0026\u0026(this.searchReferrer\u003C=-1||this.searchReferrer\u003E-1\u0026\u0026null==this.cookieNsaf)){GTMScriptJS.cookie.set(\"nsaf\",this.urlNsaf,",["escape",["macro",77],8,16],");GTMScriptJS.cookie[\"delete\"](\"utm_term\")}},remove:function(){if(\"\"==this.urlNsaf){console.log(\"TRUE\",this.urlNsaf);GTMScriptJS.cookie[\"delete\"](\"nsaf\");GTMScriptJS.cookie[\"delete\"](\"utm_term\")}else if(\"\"==this.urlNsaf\u0026\u0026\"\"!=this.urlReferrer\u0026\u0026this.searchReferrer\u003C=-1\u0026\u0026\"https:\"==location.protocol){GTMScriptJS.cookie[\"delete\"](\"nsaf\");\nGTMScriptJS.cookie[\"delete\"](\"utm_term\")}}},GTMScriptJS.traffic={cookie:\"_trafficsource\",domain:\"www.",["escape",["macro",75],7],".com.br\",getMatch:function(q,t){try{var regexp=t==\"cookie\"?q+\"\\x3d([^;]+)\":\"[?\\x26]\"+q+\"\\x3d([^\\x26]+)\";var match=(t==\"cookie\"?document.cookie:document.location.search).match(regexp);return match?match[1]:\"\"}catch(e){return\"\"}},checkValue:function(q,t){return(t==\"cookie\"?document.cookie:document.location.search).indexOf(q)\u003E-1},getUUID:function(){var d=(new Date).getTime();if(window.performance\u0026\u0026\ntypeof window.performance.now===\"function\")d+=performance.now();var uuid=\"xxxnxxxexxxtxxxsxxxhyxxoxxxexxxsxxx\".replace(\/[xy]\/g,function(c){var r=(d+Math.random()*16)%16|0;d=Math.floor(d\/16);return(c==\"x\"?r:r\u00263|8).toString(16)});return uuid},getSource:function(){var uuid=this.getUUID(),time=180,dataSource=\"\",traffic=\"direct\",source=\"direct\",page=\"",["escape",["macro",78],7],"\",referrer=document.referrer,searchEngine=[[\"daum\",\"q\"],[\"eniro\",\"search_word\"],[\"naver\",\"query\"],[\"google\",\"q\"],[\"yahoo\",\"p\"],[\"msn\",\n\"q\"],[\"bing\",\"q\"],[\"aol\",\"query\"],[\"aol\",\"encquery\"],[\"lycos\",\"query\"],[\"ask\",\"q\"],[\"altavista\",\"q\"],[\"netscape\",\"query\"],[\"cnn\",\"query\"],[\"about\",\"terms\"],[\"mamma\",\"query\"],[\"alltheweb\",\"q\"],[\"voila\",\"rdata\"],[\"virgilio\",\"qs\"],[\"live\",\"q\"],[\"baidu\",\"wd\"],[\"alice\",\"qs\"],[\"yandex\",\"text\"],[\"najdi\",\"q\"],[\"aol\",\"q\"],[\"mama\",\"query\"],[\"seznam\",\"q\"],[\"search\",\"q\"],[\"wirtulana polska\",\"szukaj\"],[\"o*net\",\"qt\"],[\"szukacz\",\"q\"],[\"yam\",\"k\"],[\"pchome\",\"q\"],[\"kvasir\",\"q\"],[\"sesam\",\"q\"],[\"ozu\",\"q\"],[\"terra\",\"query\"],\n[\"mynet\",\"q\"],[\"ekolay\",\"q\"],[\"rambler\",\"words\"]];if(referrer.indexOf(this.domain)!=-1\u0026\u0026RegExp(\"^https\"+\".*\"+this.domain,\"g\").test(document.location.href)\u0026\u0026RegExp(this.cookie,\"g\").test(document.cookie)\u0026\u0026referrer==\"\"){dataSource=eval(\"(\"+this.getMatch(this.cookie,\"cookie\")+\")\");traffic=dataSource.traffic;source=dataSource.source;page=dataSource.page;uuid=dataSource.uuid!=null?dataSource.uuid:uuid}else if(this.checkValue(\"gclid\")){traffic=\"sponsored link\";source=this.getMatch(\"campaign\");if(source==\n\"\")source=this.getMatch(\"gclid\")}else if(this.checkValue(\"gclsrc\")){traffic=\"sponsored link\";source=this.getMatch(\"campaign\");if(source==\"\")source=this.getMatch(\"gclsrc\")}else if(this.checkValue(\"campaign\")){traffic=\"campaign\";source=this.getMatch(\"campaign\")}else if(this.checkValue(\"utm_campaign\")){traffic=\"utm\";source=this.getMatch(\"utm_campaign\")}else if(referrer){traffic=\"referral\";for(var i=0;i\u003CsearchEngine.length;i++)if(referrer.indexOf(searchEngine[i][0])\u003E-1){traffic=\"organic\";break}}else if(this.checkValue(\"utm_campaign\",\n\"cookie\")){traffic=\"utm\";source=this.getMatch(\"utm_campaign\",\"cookie\")}dataSource=JSON.stringify({traffic:traffic||\"\",source:source||\"\",page:page||\"\",uuid:uuid||\"\"});var date=new Date;date.setDate(date.getDate()+time);document.cookie=this.cookie+\"\\x3d\"+dataSource+(null==time?\"\":\";expires\\x3d\"+date.toUTCString())+\";domain\\x3d\"+document.location.hostname.replace(\/www\\.\/g,\"\")+\";path\\x3d\/\";return dataSource}},GTMScriptJS.util={setUserStorage:function(){var dlUser=",["escape",["macro",27],8,16],";var stUser=eval(\"(\"+\nlocalStorage.getItem(\"_dlu\")+\")\");if(typeof dlUser==\"object\"\u0026\u0026typeof stUser!=\"object\")localStorage.setItem(\"_dlu\",JSON.stringify(dlUser))}};if(\"",["escape",["macro",1],7],"\"==\"AjaxDL\")GTMScriptJS.util.setUserStorage();else{console.log(\"second ----\");GTMScriptJS.nsaf.create();GTMScriptJS.nsaf.remove();GTMScriptJS.cookie.set(\"utm_source\",GTMScriptJS.utm_ns.get(\"utm_source\"),180);GTMScriptJS.cookie.set(\"utm_term\",GTMScriptJS.utm_ns.get(\"utm_term\"),",["escape",["macro",77],8,16],");GTMScriptJS.cookie.set(\"utm_campaign\",\nGTMScriptJS.utm_ns.get(\"utm_campaign\"),180);GTMScriptJS.cookie.set(\"click_id\",GTMScriptJS.request.getValUrlToCookie(\"click_id\"),180);GTMScriptJS.cookie.set(\"click_id\",GTMScriptJS.request.getValUrlToCookie(\"clickid\"),180);GTMScriptJS.traffic.getSource()}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "priority":5000,
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){localStorage.setItem(\"__nlscid\",\"",["escape",["macro",40],7],"\")})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":8
    },{
      "function":"__html",
      "priority":999,
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getCityAdsParameterByName(a){a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=new RegExp(\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\");a=a.exec(location.search);return null==a?\"\":decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))}function setCityAdsCookie(a,b,d){var c=new Date;c.setDate(c.getDate()+d);b=escape(b)+(null==d?\"\":\";expires\\x3d\"+c.toUTCString())+\";path\\x3d\/\";document.cookie=a+\"\\x3d\"+b}setCityAdsCookie(\"lmdsid\",getCityAdsParameterByName(\"lmdsid\"),3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":28
    },{
      "function":"__html",
      "priority":999,
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction getUrlParameter(a){a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=new RegExp(\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\");a=a.exec(location.search);return null==a?\"\":decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))}function setCookie(a,b,d){var c=new Date;c.setDate(c.getDate()+d);b=escape(b)+(null==d?\"\":\";expires\\x3d\"+c.toUTCString())+\";path\\x3d\/\";document.cookie=a+\"\\x3d\"+b}setCookie(\"meliuz_xtra\",getUrlParameter(\"xtra\"),",["escape",["macro",77],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "priority":900,
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript id=\"etcntmyAsync\" type=\"text\/gtmscript\"\u003E(function(){var etscr=document.createElement(\"script\");var etcntr=escape(document.referrer);etscr.async=true;etscr.src=\"https:\/\/pages.mailmkt.netshoes.com.br\/page.aspx?QS\\x3d",["escape",["macro",105],7],"\\x26q1\\x3d",["escape",["macro",40],7],"\\x26q2\\x3d",["escape",["macro",0],7],"\\x26q3\\x3d",["escape",["macro",106],7],"\";if(\"",["escape",["macro",0],7],"\"==\"Home\")etscr.src+=\"\\x26q4\\x3d",["escape",["macro",25],7],"\";etscr.src+=\"\\x26r\\x3d",["escape",["macro",107],7],"\";var et=document.getElementById(\"etcntmyAsync\");et.parentNode.insertBefore(etscr,et)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":59
    },{
      "function":"__html",
      "priority":801,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var ord=",["escape",["macro",7],8,16],";var skulist=",["escape",["macro",19],8,16],".replace(\/,\/g,\"|\");var qntlist=",["escape",["macro",23],8,16],".replace(\/,\/g,\"|\");var namelist=",["escape",["macro",48],8,16],".replace(\/,\/g,\"|\");var pSubTotal=\"",["escape",["macro",95],7],"\".replace(\/,\/g,\"|\").split(\"|\");var discount=0;if(\"",["escape",["macro",64],7],"\".length\u003E0){var tOrderTotal=pSubTotal.reduce(function(a,b){return Number(a)+Number(b)},0);discount=(tOrderTotal-Number(\"",["escape",["macro",8],7],"\")).toFixed(2).replace(\/\\.\/g,\"\")}var amtlist=pSubTotal.map(function(n){return Number(n).toFixed(2).replace(\/\\.\/g,\n\"\")}).join(\"|\");if(discount\u003E0){skulist+=\"|Discount\";qntlist+=\"|0\";namelist+=\"|Discount\";amtlist+=\"|-\"+discount}var bsa=document.createElement(\"img\");var src=\"\/\/track.linksynergy.com\/ep?mid\\x3d41212\\x26cur\\x3dBRL\\x26img\\x3d1\";src+=\"\\x26ord\\x3d\"+ord;src+=\"\\x26skulist\\x3d\"+skulist;src+=\"\\x26qlist\\x3d\"+qntlist;src+=\"\\x26amtlist\\x3d\"+amtlist;src+=\"\\x26namelist\\x3d\"+namelist;bsa.src=src;(document.getElementsByTagName(\"head\")[0]||document.getElementsByTagName(\"body\")[0]).appendChild(bsa)})();\u003C\/script\u003E\n\n\n\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "priority":700,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar divPaymentDetails=document.getElementsByClassName(\"ns-w12\")[6];divPaymentDetails\u0026\u0026divPaymentDetails.insertAdjacentHTML(\"afterend\",'\\x3cdiv class\\x3d\"ns-w12\" style\\x3d\"    padding: 25px 0;\" id\\x3d\"affinion-content\"\\x3e\\x3c\/div\\x3e');\u003C\/script\u003E\n\u003Cdiv id=\"WLS_e16afaf066e23560d59c5dc7fac1041f\"\u003E\u003C\/div\u003E\n\u003Cscript language=\"JavaScript1.1\" data-gtmsrc=\"https:\/\/yup.wlscripts.org\/PORTIER_v2\/12\/e16afaf066e23560d59c5dc7fac1041f\n\/[timestamp]\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":4
    },{
      "function":"__html",
      "priority":700,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar divPaymentDetails=document.getElementsByClassName(\"ns-w12\")[2];divPaymentDetails\u0026\u0026divPaymentDetails.insertAdjacentHTML(\"afterend\",'\\x3cdiv class\\x3d\"ns-w12\" style\\x3d\"padding: 25px 15px;\" id\\x3d\"affinion-content\"\\x3e\\x3c\/div\\x3e');\u003C\/script\u003E\n\u003Cdiv id=\"WLS_14b61da335b8c6d7ac9bb16928157894\"\u003E\u003C\/div\u003E\n\u003Cscript language=\"JavaScript1.1\" data-gtmsrc=\"https:\/\/bloodyhell.wlscripts.com\/PORTIER_v2\/12\/14b61da335b8c6d7ac9bb16928157894\/[timestamp]\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":6
    },{
      "function":"__html",
      "priority":700,
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"WLS_0c1220edb700237f265ed57578c8fdfb\"\u003E\u003C\/div\u003E\n\u003Cscript language=\"JavaScript1.1\" data-gtmsrc=\"https:\/\/kuvasz.wlscripts.org\/PORTIER_v2\/12\/0c1220edb700237f265ed57578c8fdfb\/[timestamp]\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "priority":700,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar divPaymentDetails=document.getElementsByClassName(\"ns-w12\")[3];divPaymentDetails\u0026\u0026divPaymentDetails.insertAdjacentHTML(\"afterend\",'\\x3cdiv class\\x3d\"ns-w12\" style\\x3d\"padding: 25px 15px;\" id\\x3d\"affinion-content\"\\x3e\\x3c\/div\\x3e');\u003C\/script\u003E\n\u003Cdiv id=\"WLS_e7d5180593de1e28ef046ae64f99b469\"\u003E\u003C\/div\u003E\n\u003Cscript language=\"JavaScript1.1\" data-gtmsrc=\"https:\/\/quick.wlscripts.org\/PORTIER_v2\/12\/e7d5180593de1e28ef046ae64f99b469\/[timestamp]\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":98
    },{
      "function":"__awct",
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",7],
      "vtp_conversionValue":["macro",8],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":["macro",3],
      "vtp_currencyCode":["macro",9],
      "vtp_conversionLabel":["macro",10],
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":19
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","\/\/secure.lomadee.com\/at\/actionlog?adv=",["escape",["macro",13],12],"\u0026country=BR\u0026transaction=",["escape",["macro",7],12],"\u0026event1=12794\u0026value1=",["escape",["macro",8],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",14],
      "tag_id":22
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","\/\/stats-bq.stylight.net\/track\/",["escape",["macro",16],3],"\/sl?skus=",["escape",["macro",20],12],"\u0026oi=",["escape",["macro",7],12],"\u0026ta=",["escape",["macro",22],12],"\u0026c=",["escape",["macro",9],12],"\u0026ic=",["escape",["macro",24],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",14],
      "tag_id":25
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":31
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":32
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":33
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":34
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":35
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u2","value",["macro",28]],["map","key","u1","value",["macro",29]],["map","key","u10","value",["macro",19]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"visit825",
      "vtp_useImageTag":false,
      "vtp_activityTag":"visit186",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"3254838",
      "vtp_ordinalStandard":["macro",14],
      "vtp_url":["macro",11],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":42
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u15","value",["macro",29]],["map","key","u13","value",["macro",30]],["map","key","u10","value",["macro",19]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"conta493",
      "vtp_useImageTag":false,
      "vtp_activityTag":"conta368",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"3254838",
      "vtp_ordinalStandard":["macro",14],
      "vtp_url":["macro",11],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":45
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":48
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","ecomm_prodid","value",["macro",32]],["map","key","ecomm_totalvalue","value",["macro",22]],["map","key","ecomm_pagetype","value",["macro",34]],["map","key","item_group_id","value",["macro",19]]],
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":["macro",3],
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",11],
      "vtp_enableRdpCheckbox":true,
      "tag_id":51
    },{
      "function":"__sp",
      "vtp_customParams":["list",["map","key","ecomm_pagetype","value",["macro",34]],["map","key","ecomm_totalvalue","value",["macro",8]],["map","key","ecomm_prodid","value",["macro",32]],["map","key","item_group_id","value",["macro",19]]],
      "vtp_conversionId":["macro",3],
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",11],
      "vtp_enableRdpCheckbox":true,
      "tag_id":52
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","ecomm_pagetype","value",["macro",34]],["map","key","item_group_id","value",["macro",19]]],
      "vtp_conversionId":["macro",3],
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",11],
      "vtp_enableRdpCheckbox":true,
      "tag_id":53
    },{
      "function":"__sp",
      "vtp_customParams":["list",["map","key","ecomm_pagetype","value",["macro",34]],["map","key","ecomm_totalvalue","value",["macro",35]],["map","key","ecomm_prodid","value",["macro",32]],["map","key","item_group_id","value",["macro",19]]],
      "vtp_conversionId":["macro",3],
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",11],
      "vtp_enableRdpCheckbox":true,
      "tag_id":54
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","ecomm_prodid","value",["macro",32]],["map","key","ecomm_pagetype","value",["macro",34]],["map","key","item_group_id","value",["macro",19]]],
      "vtp_conversionId":["macro",3],
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",11],
      "vtp_enableRdpCheckbox":true,
      "tag_id":55
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","\/\/bat.bing.com\/action\/0?ti=",["escape",["macro",36],12],"\u0026Ver=2"],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",14],
      "tag_id":56
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","\/\/us.creativecdn.com\/tags?type=img\u0026ncm=1\u0026id=pr_",["escape",["macro",38],12],"_startorder\u0026id=pr_",["escape",["macro",38],12],"_uid_",["escape",["macro",40],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",14],
      "tag_id":58
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":63
    },{
      "function":"__flc",
      "once_per_load":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",25]],["map","key","u2","value","Search"],["map","key","u18","value",["macro",40]],["map","key","u19","value",["macro",42]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"ns_br_c",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br_ns001",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8222049",
      "vtp_ordinalStandard":["macro",14],
      "vtp_url":["macro",11],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":64
    },{
      "function":"__flc",
      "once_per_load":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",25]],["map","key","u2","value","Cart"],["map","key","u5","value",["macro",43]],["map","key","u18","value",["macro",40]],["map","key","u27","value",["macro",22]],["map","key","u30","value",["macro",24]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"ns_br_c",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br_ns005",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8222049",
      "vtp_ordinalStandard":["macro",14],
      "vtp_url":["macro",11],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":65
    },{
      "function":"__flc",
      "once_per_load":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",25]],["map","key","u2","value","Category"],["map","key","u5","value",["macro",44]],["map","key","u18","value",["macro",40]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"ns_br_c",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br_ns002",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8222049",
      "vtp_ordinalStandard":["macro",14],
      "vtp_url":["macro",11],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":66
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",25]],["map","key","u2","value",["macro",25]],["map","key","u18","value",["macro",40]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"ns_br_c",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br_ns00g",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8222049",
      "vtp_ordinalStandard":["macro",14],
      "vtp_url":["macro",11],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":67
    },{
      "function":"__flc",
      "once_per_load":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",25]],["map","key","u2","value","Home"],["map","key","u18","value",["macro",40]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"ns_br_c",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br_ns0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8222049",
      "vtp_ordinalStandard":["macro",14],
      "vtp_url":["macro",11],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":68
    },{
      "function":"__flc",
      "once_per_load":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",25]],["map","key","u2","value","Lista"],["map","key","u5","value",["macro",44]],["map","key","u18","value",["macro",40]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"ns_br_c",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br_ns00",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8222049",
      "vtp_ordinalStandard":["macro",14],
      "vtp_url":["macro",11],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":69
    },{
      "function":"__flc",
      "once_per_load":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",25]],["map","key","u2","value","Product"],["map","key","u5","value",["macro",43]],["map","key","u11","value",["macro",29]],["map","key","u12","value",["macro",45]],["map","key","u13","value",["macro",46]],["map","key","u14","value",["macro",47]],["map","key","u18","value",["macro",40]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"ns_br_c",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br_ns004",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8222049",
      "vtp_ordinalStandard":["macro",14],
      "vtp_url":["macro",11],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":70
    },{
      "function":"__flc",
      "once_per_load":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",25]],["map","key","u2","value","SubHome"],["map","key","u18","value",["macro",40]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"ns_br_c",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br_ns000",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8222049",
      "vtp_ordinalStandard":["macro",14],
      "vtp_url":["macro",11],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":71
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",25]],["map","key","u2","value","Confirmation"],["map","key","u5","value",["macro",43]],["map","key","u6","value",["macro",48]],["map","key","u18","value",["macro",40]],["map","key","u25","value",["macro",49]],["map","key","u30","value",["macro",23]],["map","key","u32","value",["macro",51]],["map","key","u33","value",["macro",53]],["map","key","u34","value",["macro",54]],["map","key","u35","value",["macro",55]],["map","key","u36","value","WhctKJ"],["map","key","u37","value",["macro",56]]],
      "vtp_revenue":["macro",8],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",7],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"ns_br_s",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br_ns0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8222049",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",11],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":72
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":74
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":75
    },{
      "function":"__awct",
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",7],
      "vtp_conversionValue":["macro",8],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":["macro",3],
      "vtp_currencyCode":["macro",9],
      "vtp_conversionLabel":"DE92CLrkxl0QlMjD_AM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":85
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",7],
      "vtp_conversionValue":["macro",8],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"954133894",
      "vtp_currencyCode":["macro",9],
      "vtp_conversionLabel":"Ws8NCMm032UQhtv7xgM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":86
    },{
      "function":"__awct",
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",7],
      "vtp_conversionValue":["macro",8],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"976080635",
      "vtp_currencyCode":["macro",9],
      "vtp_conversionLabel":"lrXjCLWQ7AsQ-5230QM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":87
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",7],
      "vtp_conversionValue":["macro",8],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"962647465",
      "vtp_currencyCode":["macro",9],
      "vtp_conversionLabel":"FmQXCIayyV0QqauDywM",
      "vtp_url":["macro",11],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":88
    },{
      "function":"__paused",
      "vtp_originalTagType":"sp",
      "tag_id":89
    },{
      "function":"__paused",
      "vtp_originalTagType":"sp",
      "tag_id":90
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":["macro",3],
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"e1oJCOSJvwgQlMjD_AM",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",11],
      "vtp_enableRdpCheckbox":true,
      "tag_id":91
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":["macro",3],
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"3BhzCITJwAgQlMjD_AM",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",11],
      "vtp_enableRdpCheckbox":true,
      "tag_id":92
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":["macro",3],
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"co9CCPSHvwgQlMjD_AM",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",11],
      "vtp_enableRdpCheckbox":true,
      "tag_id":93
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":["macro",3],
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"V73LCJTHwAgQlMjD_AM",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",11],
      "vtp_enableRdpCheckbox":true,
      "tag_id":94
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":["macro",3],
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"gOctCPTV1wgQlMjD_AM",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",11],
      "vtp_enableRdpCheckbox":true,
      "tag_id":95
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","ecomm_prodid","value",["macro",18]],["map","key","ecomm_category","value",["macro",58]],["map","key","ecomm_pagetype","value",["macro",34]]],
      "vtp_conversionId":["macro",3],
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",11],
      "vtp_enableRdpCheckbox":true,
      "tag_id":99
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","\/\/www.meliuz.com.br\/pixel\/pa\/",["escape",["macro",59],3],".png?auth=",["escape",["macro",60],12],"\u0026xtra=",["escape",["macro",61],12],"\u0026iso_currency=",["escape",["macro",9],12],"\u0026commission=",["escape",["macro",62],12],"\u0026value=",["escape",["macro",22],12],"\u0026order=",["escape",["macro",7],12],"\""],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",14],
      "tag_id":101
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":103
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":106
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","\/\/www.planckbike.com\/netshoesTransaction?utm_campaign=",["escape",["macro",15],12],"\u0026value=",["escape",["macro",8],12],"\u0026transaction=",["escape",["macro",7],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",14],
      "tag_id":107
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":false,
      "tag_id":128
    },{
      "function":"__awj",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_merchantId":["macro",63],
      "tag_id":688
    },{
      "function":"__awc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_orderRef":["macro",7],
      "vtp_discountCode":["macro",64],
      "vtp_merchantId":["macro",63],
      "vtp_testMode":false,
      "vtp_channel":["macro",65],
      "vtp_currency":"BRL",
      "vtp_orderValue":["macro",22],
      "vtp_group":"default",
      "tag_id":708
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":714
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":718
    },{
      "function":"__cl",
      "tag_id":719
    },{
      "function":"__cl",
      "tag_id":720
    },{
      "function":"__cl",
      "tag_id":721
    },{
      "function":"__cl",
      "tag_id":722
    },{
      "function":"__cl",
      "tag_id":723
    },{
      "function":"__cl",
      "tag_id":724
    },{
      "function":"__cl",
      "tag_id":725
    },{
      "function":"__cl",
      "tag_id":726
    },{
      "function":"__cl",
      "tag_id":727
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar ctoDate=new Date,ctoExpires,ctoValue;ctoDate.setTime(ctoDate.getTime()+2592E6);ctoExpires=ctoDate.toUTCString();ctoValue=-1!=",["escape",["macro",69],8,16],".search(\/utm_source=me-s_cto|utm_source=me-r_cto\/g)?\"criteo\":\"\";document.cookie=\"__ctodedup\\x3d\"+ctoValue+\"; expires\\x3d\"+ctoExpires+\"; path\\x3d\/\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":7
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cstyle type=\"text\/css\"\u003E\n  .left-banner-ad {\n    padding-top: 100px;\n  }\n  .foot-banner-ad {\n    text-align: right;\n    padding-bottom: 30px;\n  }\n  .foot-banner-ad \u003E .fullb {\n    display: block;\n    margin: auto;\n    padding: 0;\n    text-align: center;\n  }\n  .foot-banner-ad \u003E .fullb  p {\n    text-align: left;\n    padding-left: 5px;\n    width: 980px;\n    margin: auto;\n  }\n  .foot-banner-ad \u003E .fullb ins {\n    width: 980px !important;\n    margin: 0px !important;\n  }\n  .foot-banner-ad \u003E .arroba {\n    text-align: center;\n    padding-left: 1px;\n    margin-top: 20px;\n  }\n  .foot-banner-ad \u003E .arroba \u003E .adsbygoogle {\n    margin: 0 18px 0px 18px!important;\n    padding: 0;\n  }\n  .foot-banner-ad \u003E .arroba p {\n    padding-left: 5px;\n    text-align: left;\n    width: 980px;\n    margin: 10px auto;\n  }\n  @media screen and (max-width: 1305px) {\n    .foot-banner-ad {\n      text-align: right;\n      padding-bottom: 30px;\n    }\n    .foot-banner-ad \u003E .fullb {\n      display: block;\n      margin: 0;\n      padding: 0;\n      margin-left: auto;\n    }\n    .foot-banner-ad \u003E .fullb  p {\n      margin-left: 3px;\n      padding-left: 100px;\n    }\n    .foot-banner-ad \u003E .fullb ins {\n      width: 728px !important;\n      margin: 0px !important;\n    }\n    .foot-banner-ad \u003E .arroba {\n      text-align: center;\n      padding-left: 1px;\n      margin-top: 20px;\n    }\n    .foot-banner-ad \u003E .arroba \u003E .adsbygoogle {\n      margin: 0 4px 0px 5px!important;\n      padding: 0;\n    }\n    .foot-banner-ad \u003E .arroba p {\n      padding-left: 5px;\n      width: 100%;\n    }\n  }\n   @media screen and (max-width: 465px) {\n    .foot-banner-ad {\n      padding-top: 30px!important;\n    }\n    .foot-banner-ad \u003E .arroba {\n      margin: auto!important;\n      width: 300px!important;\n    }\n    .foot-banner-ad \u003E .arroba p {\n      padding-left: 0!important;\n      margin: 10px 0!important;\n    }\n    .foot-banner-ad \u003E .arroba \u003E .adsbygoogle {\n      padding: 0!important;\n      margin: 0!important;\n    }\n  }\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Efunction adExchange(){var pageType=\"",["escape",["macro",0],7],"\";if(pageType==\"Search\"\u0026\u0026Number(\"",["escape",["macro",72],7],"\")==0)pageType=\"emptySearch\";var adLayout={\"left\":{\"class\":\".left-banner-ad\",\"pos\":\"beforeend\",\"obj\":\".filters\",\"html\":'\\x3cdiv class\\x3d\"left-banner-ad\" style\\x3d\"display:block; height:100hv; visibility: hidden;\"\\x3e\\x3c\/div\\x3e'},\"foot\":{\"class\":\".foot-banner-ad\",\"pos\":\"beforeend\",\"obj\":\"#content\",\"html\":'\\x3cdiv class\\x3d\"foot-banner-ad\" style\\x3d\"display:block; height:100hv; visibility: hidden;\"\\x3e\\x3c\/div\\x3e'}};\nvar adPage={\"Home\":[{\"slot\":0,\"qtd\":0,\"size\":{\"width\":160,\"height\":600},\"obj\":adLayout.left[\"class\"],\"type\":\"adx\"},{\"slot\":3620416231,\"qtd\":1,\"size\":{\"width\":728,\"height\":90},\"obj\":adLayout.foot[\"class\"],\"type\":\"fullb\"},{\"slot\":3620416231,\"qtd\":3,\"size\":{\"width\":300,\"height\":250},\"obj\":adLayout.foot[\"class\"],\"type\":\"arroba\"}],\"SubHome\":[{\"slot\":7910787151,\"qtd\":3,\"size\":{\"width\":160,\"height\":600},\"obj\":adLayout.left[\"class\"],\"type\":\"adx\"},{\"slot\":7910787151,\"qtd\":1,\"size\":{\"width\":728,\"height\":90},\n\"obj\":adLayout.foot[\"class\"],\"type\":\"fullb\"},{\"slot\":7910787151,\"qtd\":3,\"size\":{\"width\":300,\"height\":250},\"obj\":adLayout.foot[\"class\"],\"type\":\"arroba\"}],\"Search\":[{\"slot\":2003955631,\"qtd\":3,\"size\":{\"width\":160,\"height\":600},\"obj\":adLayout.left[\"class\"],\"type\":\"adx\"},{\"slot\":0,\"qtd\":0,\"size\":{\"width\":728,\"height\":90},\"obj\":adLayout.foot[\"class\"],\"type\":\"fullb\"},{\"slot\":2003955631,\"qtd\":3,\"size\":{\"width\":300,\"height\":250},\"obj\":adLayout.foot[\"class\"],\"type\":\"arroba\"}],\"emptySearch\":[{\"slot\":0,\"qtd\":0,\n\"size\":{\"width\":160,\"height\":600},\"obj\":adLayout.left[\"class\"],\"type\":\"adx\"},{\"slot\":0,\"qtd\":0,\"size\":{\"width\":728,\"height\":90},\"obj\":adLayout.foot[\"class\"],\"type\":\"fullb\"},{\"slot\":4957371391,\"qtd\":3,\"size\":{\"width\":300,\"height\":250},\"obj\":adLayout.foot[\"class\"],\"type\":\"arroba\"}],\"Product\":[{\"slot\":0,\"qtd\":0,\"size\":{\"width\":160,\"height\":600},\"obj\":adLayout.left[\"class\"],\"type\":\"adx\"},{\"slot\":6434079271,\"qtd\":1,\"size\":{\"width\":728,\"height\":90},\"obj\":adLayout.foot[\"class\"],\"type\":\"fullb\"},{\"slot\":6434079271,\n\"qtd\":3,\"size\":{\"width\":300,\"height\":250},\"obj\":adLayout.foot[\"class\"],\"type\":\"arroba\"}]};if(pageType.length\u003E0\u0026\u0026adPage[pageType]!==undefined){if(\"",["escape",["macro",68],7],"\"==\"mobile\"){adPage[pageType][0].qtd=0;adPage[pageType][1].qtd=0;adPage[pageType][2].qtd=1}if(window.matchMedia(\"(max-width: 1305px)\").matches==false)adPage[pageType][1].size={\"width\":980,\"height\":120};var qtdAdx=adPage[pageType][0].qtd;if(qtdAdx\u003E0){var hSibeBar=document.querySelector(\".filters\").children[0].offsetHeight;var hMainContent=\ndocument.querySelector(\"#item-list\").offsetHeight;adPage[pageType][0].qtd=0;for(var i=1;i\u003C=qtdAdx;i++){var hNewSize=hSibeBar+i*adPage[pageType][0].size.height;if(hMainContent\u003E=hNewSize)adPage[pageType][0].qtd=i}}var adJsGoogle=\"\/\/pagead2.googlesyndication.com\/pagead\/js\/adsbygoogle.js\";if(document.querySelectorAll('script[src*\\x3d\"'+adJsGoogle+'\"]').length\u003C=0){var adScript=document.createElement(\"script\");adScript.async=true;adScript.src=adJsGoogle;document.getElementsByTagName(\"head\")[0].append(adScript)}for(var d in adPage[pageType]){var adDataPage=\nadPage[pageType][d];if(adDataPage.qtd\u003E0){for(var l in adLayout)if(document.querySelectorAll(adLayout[l][\"class\"]).length\u003C=0\u0026\u0026adDataPage.obj==adLayout[l][\"class\"]){var obj=document.querySelector(adLayout[l].obj);if(obj)obj.insertAdjacentHTML(adLayout[l].pos,adLayout[l].html)}var adBannerType='\\x3cdiv class\\x3d\"ADX_TYPE\"\\x3e\\x3cp style\\x3d\"color:#8c8c8c;font-size: 10px;\"\\x3ePUBLICIDADE\\x3c\/p\\x3e\\x3c\/div\\x3e';var objAds=document.querySelector(adDataPage.obj);if(objAds)objAds.insertAdjacentHTML(\"beforeend\",\nadBannerType.replace(\/ADX_TYPE\/g,adDataPage.type));for(var q=0;q\u003CadDataPage.qtd;q++)if(adDataPage.slot\u003E0){styleObj=window.getComputedStyle(objAds);if(styleObj.getPropertyValue(\"visibility\")==\"hidden\")objAds.style.visibility=\"visible\";var adBannerHtml='\\x3cins class\\x3d\"adsbygoogle\" style\\x3d\"display:inline-block;width:ADX_WIDTHpx;height:ADX_HEIGHTpx;margin: 2px\" data-ad-client\\x3d\"ca-pub-9624389202684281\" data-ad-slot\\x3d\"ADX_SLOT\"\\x3e\\x3c\/ins\\x3e';var objBannerType=\".\"+adDataPage.type;objBannerType=\ndocument.querySelector(objBannerType);if(objBannerType)objBannerType.insertAdjacentHTML(\"beforeend\",adBannerHtml.replace(\/ADX_HEIGHT\/g,adDataPage.size.height).replace(\/ADX_WIDTH\/g,adDataPage.size.width).replace(\/ADX_SLOT\/g,adDataPage.slot));(adsbygoogle=window.adsbygoogle||[]).push({})}}}}}reloadAdsense=typeof reloadAdsense==\"undefined\"?false:reloadAdsense;if(reloadAdsense==false){reloadAdsense=true;adExchange()};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":9
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"",["escape",["macro",36],7],"\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=",["escape",["macro",36],12],"\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E\u003C\/noscript\u003E "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Econsole.log(",["escape",["macro",79],8,16],");console.log(\"TYPE \\x3d\\x3d\\x3d\\x3d\\x3d\\x3e\",typeof ",["escape",["macro",79],8,16],");(function(){var a=document.createElement(\"img\"),b=\"\/\/secure.lomadee.com\/v2.png?lmdaId\\x3d5783\\x26currency\\x3dBRL\\x26paymentType\\x3dfp\\x26orderId\\x3d",["escape",["macro",7],7],"\\x26lmdsid\\x3d",["escape",["macro",80],7],"\\x26",["escape",["macro",83],7],"\\x26origem\\x3d",["escape",["macro",84],7],"\\x26discount\\x3d",["escape",["macro",79],7],"\";a.src=b;document.getElementsByTagName(\"body\")[0].appendChild(a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:",["escape",["macro",85],8,16],"},{event:\"setCustomerId\",id:\"",["escape",["macro",40],7],"\"},{event:\"setEmail\",email:\"",["escape",["macro",86],7],"\"},{event:\"setSiteType\",type:\"",["escape",["macro",87],7],"\"},{event:\"trackTransaction\",id:\"",["escape",["macro",7],7],"\",new_customer:\"\",deduplication:\"",["escape",["macro",89],7],"\",item:",["escape",["macro",90],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":16
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"COM1Dotz\" type=\"text\/gtmscript\"\u003E(function(){var a={displayLoading:!1,method:\"get\",type:\"html\"},c={displayLoading:!1,method:\"get\",type:\"html\",success:function(b){window.freedom.restClient.request(\"\/\/tag.dotz.com.br\/api\/tracktag?CPFCliente\\x3d\"+JSON.parse(b).cpf+\"\\x26Tag\\x3d",["escape",["macro",91],7],"\\x26ValorTotal\\x3d",["escape",["macro",22],7],"\\x26Pedido\\x3d",["escape",["macro",7],7],"\\x26Acao\\x3dpedido-realizado\",a)},error:function(b){window.freedom.restClient.request(\"\/\/tag.dotz.com.br\/api\/tracktag?CPFCliente\\x3d\\x26Tag\\x3d",["escape",["macro",91],7],"\\x26ValorTotal\\x3d",["escape",["macro",22],7],"\\x26Pedido\\x3d",["escape",["macro",7],7],"\\x26Acao\\x3dErroAoRecuperarCPF\",\na)}};window.freedom.restClient.request(\"\/getcpf\",c)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":17
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"COM1Dotz\" type=\"text\/gtmscript\"\u003E(function(){var b={Tag:\"",["escape",["macro",91],7],"\",ValorTotal:\"",["escape",["macro",22],7],"\",Pedido:\"",["escape",["macro",7],7],"\",Acao:\"pedido-realizado\",Versao:\"1.0\"},c={displayLoading:!1,method:\"get\",type:\"html\",success:function(a){b.CPFCliente=JSON.parse(a).cpf;a={displayLoading:!1,method:\"post\",type:\"html\",data:b};window.freedom.restClient.request(\"\/\/tag.dotz.com.br\/api\/tracktag\",a)},error:function(a){b.Acao=\"ErroAoRecuperarCPF\";a={displayLoading:!1,method:\"post\",type:\"html\",data:b};window.freedom.restClient.request(\"\/\/tag.dotz.com.br\/api\/tracktag\",\na)}};window.freedom.restClient.request(\"\/getcpf\",c)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":18
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _adftrack={pm:343548,divider:encodeURIComponent(\"|\"),comid:",["escape",["macro",92],8,16],",pagename:encodeURIComponent(\"",["escape",["macro",92],7],"|sale\"),order:{sales:\"",["escape",["macro",22],7],"\",orderid:\"",["escape",["macro",7],7],"\",sv1:\"br\",itms:[{productname:\"",["escape",["macro",48],7],"\",productid:\"",["escape",["macro",19],7],"\",svn1:\"",["escape",["macro",23],7],"\",svn2:\"",["escape",["macro",46],7],"\"}]}};\n(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/s.kelkoo.com\/s.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":20
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/services.xg4ken.com\/js\/kenshoo.js?cid=",["escape",["macro",93],12],"\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ekenshoo.trackConversion(\"1211\",",["escape",["macro",93],8,16],",{conversionType:\"",["escape",["macro",49],7],"\",revenue:",["escape",["macro",8],8,16],",currency:\"",["escape",["macro",9],7],"\",orderId:\"",["escape",["macro",7],7],"\",promoCode:\"",["escape",["macro",57],7],"\",product:\"",["escape",["macro",19],7],"\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n   \u003Cimg src=\"https:\/\/1211.xg4ken.com\/pixel\/v1?track=1\u0026amp;token=",["escape",["macro",93],12],"\u0026amp;conversionType=conv\u0026amp;revenue=",["escape",["macro",8],12],"\u0026amp;currency=",["escape",["macro",9],12],"\u0026amp;orderId=",["escape",["macro",7],12],"\u0026amp;promoCode=\u0026amp;product=",["escape",["macro",19],12],"\" width=\"1\" height=\"1\"\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":21
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/ad.zanox.com\/pps\/?",["escape",["macro",96],12],"\u0026amp;mode=[[1]]\u0026amp;CustomerID=[[",["escape",["macro",40],12],"]]\u0026amp;OrderID=[[",["escape",["macro",7],12],"]]\u0026amp;CurrencySymbol=[[",["escape",["macro",9],12],"]]\u0026amp;TotalPrice=[[",["escape",["macro",22],12],"]]\u0026amp;PartnerID=[[]]\u0026amp;ReviewNote=[[",["escape",["macro",98],12],"]]\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg src=\"https:\/\/ad.zanox.com\/pps\/?",["escape",["macro",96],12],"\u0026amp;mode=[[2]]\u0026amp;CustomerID=[[",["escape",["macro",40],12],"]]\u0026amp;OrderID=[[",["escape",["macro",7],12],"]]\u0026amp;CurrencySymbol=[[",["escape",["macro",9],12],"]]\u0026amp;TotalPrice=[[",["escape",["macro",22],12],"]]\u0026amp;PartnerID=[[]]\u0026amp;ReviewNote=[[",["escape",["macro",98],12],"]]\" width=\"1\" height=\"1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":26
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E__za=window.__za||[];__za.push({p:30,v:\"",["escape",["macro",22],7],"\",mid:\"",["escape",["macro",7],7],"\"});(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/www.zoom.com.br\/static\/js\/za.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/www.zoom.com.br\/ajax\/tracker?p=30\u0026amp;v=",["escape",["macro",22],12],"\u0026amp;mid=",["escape",["macro",7],12],"\" width=\"1\" height=\"1\"\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar yp;switch(",["escape",["macro",0],8,16],"){case \"Cart\":yp=27037;break;case \"Confirmation\":yp=27036}var img=document.createElement(\"img\");img.src=\"https:\/\/sp.analytics.yahoo.com\/spp.pl?a\\x3d1000871148085\\x26.yp\\x3d\"+yp+\"\\x26js\\x3dno\";var body=document.getElementsByTagName(\"body\")[0];body.appendChild(img);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:",["escape",["macro",85],8,16],"},{event:\"setCustomerId\",id:\"",["escape",["macro",40],7],"\"},{event:\"setEmail\",email:\"",["escape",["macro",86],7],"\"},{event:\"setSiteType\",type:\"",["escape",["macro",87],7],"\"},{event:\"viewBasket\",item:",["escape",["macro",90],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:",["escape",["macro",85],8,16],"},{event:\"setCustomerId\",id:\"",["escape",["macro",40],7],"\"},{event:\"setEmail\",email:\"",["escape",["macro",86],7],"\"},{event:\"setSiteType\",type:\"",["escape",["macro",87],7],"\"},{event:\"viewHome\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":38
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:",["escape",["macro",85],8,16],"},{event:\"setCustomerId\",id:\"",["escape",["macro",40],7],"\"},{event:\"setEmail\",email:\"",["escape",["macro",86],7],"\"},{event:\"setSiteType\",type:\"",["escape",["macro",87],7],"\"},{event:\"viewItem\",item:\"",["escape",["macro",19],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:",["escape",["macro",85],8,16],"},{event:\"setCustomerId\",id:\"",["escape",["macro",40],7],"\"},{event:\"setEmail\",email:\"",["escape",["macro",86],7],"\"},{event:\"setSiteType\",type:\"",["escape",["macro",87],7],"\"},{event:\"viewList\",item:",["escape",["macro",18],8,16],".slice(0,3)});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var total=",["escape",["macro",8],8,16],".replace(\",\",\"\"),ifrm=document.createElement(\"iframe\"),dfa_prd_arr=\"",["escape",["macro",19],7],"\".replace(\" \",\"\").split(\",\"),dfa_prd_list=\"\",i=0;i\u003Cdfa_prd_arr.length;i++)dfa_prd_list+=\";u14\\x3d\"+dfa_prd_arr[i].split(\"!\")[0];\nifrm.src=\"\/\/3254838.fls.doubleclick.net\/activityi;src\\x3d3254838;type\\x3dconcl663;cat\\x3dconcl350;qty\\x3d",["escape",["macro",23],7],";cost\\x3d",["escape",["macro",8],7],";u1\\x3d",["escape",["macro",29],7],";u2\\x3d",["escape",["macro",28],7],";u7\\x3d",["escape",["macro",64],7],";u8\\x3d",["escape",["macro",49],7],";ord\\x3d",["escape",["macro",7],7],"\"+dfa_prd_list+\"?\";ifrm.style.width=\"1px\";ifrm.style.height=\"1px\";ifrm.style.border=\"0px\";ifrm.style.frameborder=\"0px\";ifrm.style.display=\"none\";document.documentElement.appendChild(ifrm);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"",["escape",["macro",31],7],"\",{em:\"",["escape",["macro",101],7],"\"});fbq(\"track\",\"PageView\");\nfbq(\"track\",\"LogAttribution\",{log_type:\"click\",channel:\"",["escape",["macro",102],7],"\",is_organic:!1,log_id:\"",["escape",["macro",40],7],"\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",31],12],"\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"",["escape",["macro",31],7],"\",{em:\"",["escape",["macro",101],7],"\"});fbq(\"track\",\"PageView\");\nfbq(\"track\",\"Purchase\",{content_ids:",["escape",["macro",19],8,16],".split(\",\"),content_type:\"product\",value:",["escape",["macro",8],8,16],"?parseFloat(",["escape",["macro",8],8,16],"):",["escape",["macro",8],8,16],",currency:\"",["escape",["macro",9],7],"\",last_click:\"roihunter\"});fbq(\"track\",\"LogAttribution\",{log_type:\"click\",channel:\"",["escape",["macro",102],7],"\",is_organic:!1,log_id:\"",["escape",["macro",40],7],"\"});console.log(\"ORDER TOTAL\",",["escape",["macro",8],8,16],");console.log(\"FLOAT ORDER TOTAL\",parseFloat());\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",31],12],"\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":49
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"",["escape",["macro",31],7],"\",{em:\"",["escape",["macro",101],7],"\"});fbq(\"track\",\"PageView\");\nfbq(\"track\",\"ViewContent\",{content_name:\"",["escape",["macro",48],7],"\",content_ids:\"",["escape",["macro",19],7],"\",content_type:\"product\",value:parseFloat(",["escape",["macro",46],8,16],"),currency:\"",["escape",["macro",9],7],"\"});fbq(\"track\",\"LogAttribution\",{log_type:\"click\",channel:\"",["escape",["macro",102],7],"\",is_organic:!1,log_id:\"",["escape",["macro",40],7],"\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",31],12],"\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":50
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript id=\"RTBHouse_AllPages\" type=\"text\/gtmscript\"\u003E(function(){var urlComplement=\"\";var category=\"",["escape",["macro",103],7],"\";var deduplication=\/rtbh\/g.test(\"",["escape",["macro",15],7],"\")?\"false\":\"true\";var ampRTB=\"\";if(\"",["escape",["macro",40],7],"\"!=\"undefined\")ampRTB=\"\\x26id2\\x3dpr_",["escape",["macro",38],7],"_uid_",["escape",["macro",40],7],"\";switch(\"",["escape",["macro",0],7],"\"){case \"Home\":urlComplement=\"home\";break;case \"Product\":urlComplement=\"offer_",["escape",["macro",19],7],"\";break;case \"Cart\":urlComplement=\"basketstatus_",["escape",["macro",19],7],"\";break;case \"Search\":if(\/busca\/g.test(\"",["escape",["macro",33],7],"\")){urlComplement=\n\"",["escape",["macro",104],7],"\";urlComplement=\"listing_\"+urlComplement.toString();break}else{urlComplement=\"category2_\"+category;break}case \"landing\":var url=window.location.href;url=url.split(\"br\/\");url=url[1];urlComplement=\"category2_\"+url;break;case \"Confirmation\":urlComplement=\"orderstatus2_",["escape",["macro",8],7],"_",["escape",["macro",7],7],"_",["escape",["macro",19],7],"\\x26cd\\x3d\"+deduplication;break;default:urlComplement=\"\\x26ncm\\x3d1\";break}if(urlComplement.length\u003E0){var etscr=document.createElement(\"iframe\");\netscr.src=\"\/\/us.creativecdn.com\/tags?id\\x3dpr_",["escape",["macro",38],7],"_\"+urlComplement.replace(\/ \/g,\"\")+ampRTB;etscr.width=0;etscr.height=0;etscr.style.borderWidth=0;etscr.style.borderHeight=0;var et=document.getElementById(\"RTBHouse_AllPages\");et.parentNode.insertBefore(etscr,et)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":57
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/tm.jsuol.com.br\/uoltm.js?id=",["escape",["macro",108],12],"\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Eswitch(\"",["escape",["macro",0],7],"\"){case \"Home\":window.universal_variable={\"page\":{\"type\":\"Home\"}};break;case \"Product\":window.universal_variable={\"page\":{\"type\":\"Product\"},\"product\":{\"sku_code\":\"",["escape",["macro",19],7],"\"}};break;case \"Cart\":var ctitems=[];var ctprodids=",["escape",["macro",18],8,16],";for(i=0;i\u003Cctprodids.length;i++)if(ctprodids[i]!=\"\")ctitems.push({\"product\":{\"sku_code\":ctprodids[i]}});window.universal_variable={\"page\":{\"type\":\"basket\"},\"basket\":{\"line_items\":ctitems}};break;case \"Search\":if(\/busca\/g.test(\"",["escape",["macro",33],7],"\")){var ctitems=\n[];var ctprodids=",["escape",["macro",18],8,16],";for(i=0;i\u003Cctprodids.length;i++)if(ctprodids[i]!=\"\")ctitems.push({\"sku_code\":ctprodids[i]});window.universal_variable={\"page\":{\"type\":\"Category\",\"breadcrumb\":\"",["escape",["macro",109],7],"\"},\"listing\":{\"items\":ctitems}}}break;case \"Confirmation\":var cookies=\"",["escape",["macro",15],7],"\"+\"",["escape",["macro",66],7],"\";var patt=\/netpro_b2b|b2b_integclubeuol|b2b_integclubeuol\/g;var orderID=\"\";var orderTotal=\"\";var ctitems=[];var ctprodids=",["escape",["macro",18],8,16],";if(patt.test(cookies)){orderID=\n",["escape",["macro",7],8,16],";orderTotal=",["escape",["macro",8],8,16],"}for(i=0;i\u003Cctprodids.length;i++)if(ctprodids[i]!=\"\")ctitems.push({\"product\":{\"sku_code\":ctprodids[i]}});window.universal_variable={\"page\":{\"type\":\"confirmation\"},\"transaction\":{\"order_id\":orderID,\"total\":orderTotal,\"line_items\":ctitems}};break;default:break};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cdiv class=\"zx_",["escape",["macro",110],3]," zx_mediaslot\"\u003E\n    \u003Cscript type=\"text\/gtmscript\"\u003Ewindow._zx=window._zx||[];window._zx.push({id:\"",["escape",["macro",110],7],"\"});(function(a){var b=a.createElement(\"script\");b.async=!0;b.src=\"\/\/static.zanox.com\/scripts\/zanox.js\";a=a.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document);\u003C\/script\u003E\n\t \u003Cscript type=\"text\/gtmscript\"\u003Evar page=",["escape",["macro",0],8,16],".toLowerCase(),path=",["escape",["macro",25],8,16],";path=path.substring(1);\nvar arrayCategory=path.split(\"\/\"),zx_productPage=function(){window.zx_identifier=",["escape",["macro",19],8,16],";window.zx_name=",["escape",["macro",48],8,16],";window.zx_price=",["escape",["macro",46],8,16],";window.zx_url=",["escape",["macro",33],8,16],"},zx_searchPage=function(){window.zx_category=arrayCategory},zx_cartPage=function(){window.zx_products=[];var a=[\"",["escape",["macro",19],7],"\"],b=[\"",["escape",["macro",23],7],"\"],c=[\"",["escape",["macro",46],7],"\"];for(i=0;i\u003Ca.length;i++)\"\"!=a[i]\u0026\u0026window.zx_products.push({identifier:a[i],amount:c[i],currency:\"BRL\",\nquantity:b[i]})},zx_confirmationPage=function(){window.zx_products=[];var a=",["escape",["macro",19],8,16],".split(\", \"),b=",["escape",["macro",23],8,16],".split(\", \"),c=",["escape",["macro",46],8,16],".split(\", \");for(i=0;i\u003Ca.length;i++)\"\"!=a[i]\u0026\u0026window.zx_products.push({identifier:a[i],amount:c[i],currency:\"BRL\",quantity:b[i]});window.zx_transaction=",["escape",["macro",7],8,16],";window.zx_total_amount=",["escape",["macro",8],8,16],";window.zx_total_currency=\"BRL\"};\nswitch(page){case \"product\":zx_productPage();break;case \"search\":zx_searchPage();break;case \"cart\":zx_cartPage();break;case \"confirmation\":zx_confirmationPage()};\u003C\/script\u003E\n\u003C\/div\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026amp;.yp=417828\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":73
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cstyle\u003E\n  .foot-banner-ad \u003E .forshop {\n    margin-top: 20px;\n  }\n  .foot-banner-ad \u003E .forshop p {\n    text-align: left !important;\n    padding-left: 133px;\n    margin-bottom: 0px;\n    margin-top: 0px;\n  }\n  .foot-banner-ad \u003E .forshop #afshcontainer {\n    margin: auto;\n  }\n  @media screen and (max-width: 1305px) {\n    .foot-banner-ad \u003E .forshop {\n      padding-left: 1px;\n      margin-top: 20px;\n    }\n    .foot-banner-ad \u003E .forshop p {\n      text-align: left !important;\n      padding-left: 25px;\n      margin-bottom: 0px;\n      margin-top: 0px;\n    }\n  }\n\u003C\/style\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Efunction cutTerm(term,limit){var arrayTerm=term.split(\" \");arrayTerm=arrayTerm.slice(0,limit);var stringTerm=arrayTerm.toString();stringTerm=stringTerm.replace(\/,\/g,\" \");return stringTerm}function checkTerm(term){if(term==\"\"){var url=\"",["escape",["macro",69],7],"\";var searchTerm=url.split(\"q\\x3d\");if(searchTerm.length\u003C=1)return\"\";else{searchTerm=searchTerm[1].split(\"\\x26\");return searchTerm[0]}}else return term}\nfunction adsForShop(){var p=\"",["escape",["macro",0],7],"\";var searchTerm;if(p==\"Product\")searchTerm=cutTerm(\"",["escape",["macro",48],7],"\");else if(p==\"Search\"\u0026\u0026checkTerm(\"",["escape",["macro",42],7],"\")!==\"\")searchTerm=checkTerm(\"",["escape",["macro",42],7],"\");else return;var dataAd={\"Search\":{\"code\":\"srp\",\"element\":\".foot-banner-ad\",\"termSearch\":searchTerm,\"obj\":\".footer-holder\",\"pos\":\"afterbegin\"},\"Product\":{\"code\":\"pdp\",\"element\":\".foot-banner-ad\",\"termSearch\":searchTerm,\"obj\":\".footer-holder\",\"pos\":\"afterbegin\"}};if(p.length\u003E\n0\u0026\u0026dataAd[p]!==undefined\u0026\u0026dataAd[p].termSearch!==\"undefined\"\u0026\u0026dataAd[p].termSearch.length\u003E3){if(document.querySelectorAll(dataAd[p].element).length\u003C=0){var obj=document.querySelector(dataAd[p].obj);if(obj)obj.insertAdjacentHTML(dataAd[p].pos,'\\x3cdiv class\\x3d\"foot-banner-ad\" style\\x3d\"display:block; height:100hv; visibility: hidden;\"\\x3e\\x3c\/div\\x3e')}if(document.querySelectorAll(\"script[src*\\x3d'async-ads.js']\").length\u003C=0)(function(G,o,O,g,L,e){G[g]=G[g]||function(){(G[g][\"q\"]=G[g][\"q\"]||[]).push(arguments)},\nG[g][\"t\"]=1*new Date;L=o.createElement(O),e=o.getElementsByTagName(O)[0];L.async=1;L.src=\"\/\/www.google.com\/adsense\/search\/async-ads.js\";e.parentNode.insertBefore(L,e)})(window,document,\"script\",\"_googCsa\");var mobileEl='\\x3cdiv class\\x3d\"forshop\" id\\x3d\"adsforshop\"\\x3e\\x3cdiv id\\x3d\"afshcontainer\"\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e';var deskEl='\\x3cdiv class\\x3d\"forshop\" id\\x3d\"adsforshop\"\\x3e\\x3cp style\\x3d\"color:#8c8c8c;font-size: 10px;\"\\x3ePUBLICIDADE\\x3c\/p\\x3e\\x3cdiv id\\x3d\"afshcontainer\"\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e';\nvar adElement=document.querySelector(dataAd[p].element);if(\"",["escape",["macro",68],7],"\"!=\"mobile\"){if(adElement)adElement.insertAdjacentHTML(dataAd[p].pos,deskEl)}else if(adElement)adElement.insertAdjacentHTML(dataAd[p].pos,mobileEl);if(\"",["escape",["macro",0],7],"\"==\"Produto\"){var adsPorcentage=1;var adsMinValue=Number(\"",["escape",["macro",46],7],"\");document.getElementById(\"adsforshop\").setAttribute(\"style\",\"padding:30px 0 0 0 !important\")}else{var productsPrice=",["escape",["macro",21],8,16],";adsMinValue=Math.max.apply(null,\nproductsPrice);adsMinValue+=1}var termSearch=dataAd[p].termSearch.split(\" \");termSearch=termSearch.slice(0,3).join(\" \").trim();var contentPage=document.getElementsByTagName(\"body\")[0];var contentSizePage=contentPage.offsetWidth;var wContainer=contentSizePage;if(contentSizePage\u003C468)wContainer=contentSizePage-20;else if(contentSizePage\u003E1300)wContainer=1080;var afshOptions={\"pubId\":\"partner-vert-pla-netshoes-\"+dataAd[p].code,\"query\":termSearch,\"adsafe\":\"low\",\"adtest\":\"off\",\"hl\":\"pt\",\"theme\":\"walleye\",\n\"priceCurrency\":\"BRL\",\"linkTarget\":\"_blank\"};if(\"",["escape",["macro",68],7],"\"==\"mobile\")afshOptions.priceMin=adsMinValue;var afshBlock={\"container\":\"afshcontainer\",\"width\":wContainer,\"height\":300};_googCsa(\"plas\",afshOptions,afshBlock)}}\nif(\"",["escape",["macro",68],7],"\"==\"mobile\"){var percent75Fired=false;window.document.addEventListener(\"scroll\",function(){var d=window.document.documentElement,body=window.document.body,st=\"scrollTop\",sh=\"scrollHeight\",scrollPercent=parseInt((d[st]||body[st])\/((d[sh]||body[sh])-d.clientHeight)*100);if(scrollPercent\u003E=75\u0026\u0026percent75Fired==false){percent75Fired=true;adsForShop()}})}else adsForShop();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":77
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.zoom.com.br\/ajax\/tracker.js?__act_=_mpv__\u0026amp;p=30\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg src=\"\/\/www.zoom.com.br\/ajax\/tracker?__act_=_mpv__\u0026amp;p=30\" width=\"1\" height=\"1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"",["escape",["macro",31],7],"\",{em:\"",["escape",["macro",101],7],"\"});\nfbq(\"track\",\"AddToCart\",{content_name:\"",["escape",["macro",48],7],"\",content_ids:\"",["escape",["macro",19],7],"\",content_type:\"product\",value:parseFloat(",["escape",["macro",46],8,16],"),currency:\"",["escape",["macro",9],7],"\"});fbq(\"track\",\"LogAttribution\",{log_type:\"click\",channel:\"",["escape",["macro",102],7],"\",is_organic:!1,log_id:\"",["escape",["macro",40],7],"\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",31],12],"\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"",["escape",["macro",31],7],"\",{em:\"",["escape",["macro",101],7],"\"});fbq(\"track\",\"PageView\");\nfbq(\"track\",\"Search\",{search_string:\"",["escape",["macro",42],7],"\",content_ids:",["escape",["macro",111],8,16],",content_type:\"product\"});fbq(\"track\",\"LogAttribution\",{log_type:\"click\",channel:\"",["escape",["macro",102],7],"\",is_organic:!1,log_id:\"",["escape",["macro",40],7],"\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",31],12],"\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"883320191811366\",{em:\"",["escape",["macro",101],7],"\"});fbq(\"track\",\"PageView\");\nfbq(\"track\",\"LogAttribution\",{log_type:\"click\",channel:\"",["escape",["macro",102],7],"\",is_organic:!1,log_id:\"",["escape",["macro",40],7],"\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=883320191811366\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cimg src=\"\/\/itau.demdex.net\/event?d_sid=4143587\" width=\"0\" height=\"0\"\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"883320191811366\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Viewcontent\",{content_name:\"parc_ncard_itaucard_2.0_gold_mastercard\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=883320191811366\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=function(){EF.init({eventType:\"pageview\",pageviewProperties:\"\",segment:\"18346\",searchSegment:\"\",sku:\"\",userid:\"553\",pixelHost:\"pixel.everesttech.net\",allow3rdPartyPixels:1});EF.main()};window.EF=window.EF||{};if(window.EF.main)a();else if(window.EF.onloadCallbacks=window.EF.onloadCallbacks||[],window.EF.onloadCallbacks[window.EF.onloadCallbacks.length]=a,!window.EF.jsTagAdded){a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/www.everestjs.net\/static\/st.v3.js\";\nvar b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b);window.EF.jsTagAdded=1}})();\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg src=\"https:\/\/pixel.everesttech.net\/553\/v?\" width=\"1\" height=\"1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":82
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cimg src=\"\/\/itau.demdex.net\/event?d_sid=4143587\" width=\"0\" height=\"0\"\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"883320191811366\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Viewcontent\",{content_name:\"parc_ncard_itaucard_2.0_gold_mastercard\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=883320191811366\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=function(){EF.init({eventType:\"pageview\",pageviewProperties:\"\",segment:\"18346\",searchSegment:\"\",sku:\"\",userid:\"553\",pixelHost:\"pixel.everesttech.net\",allow3rdPartyPixels:1});EF.main()};window.EF=window.EF||{};if(window.EF.main)a();else if(window.EF.onloadCallbacks=window.EF.onloadCallbacks||[],window.EF.onloadCallbacks[window.EF.onloadCallbacks.length]=a,!window.EF.jsTagAdded){a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/www.everestjs.net\/static\/st.v3.js\";\nvar b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b);window.EF.jsTagAdded=1}})();\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg src=\"https:\/\/pixel.everesttech.net\/553\/v?\" width=\"1\" height=\"1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":83
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cimg src=\"\/\/itau.demdex.net\/event?d_sid=4143587\" width=\"0\" height=\"0\"\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"883320191811366\");fbq(\"track\",\"PageView\");fbq(\"track\",\"Viewcontent\",{content_name:\"parc_ncard_itaucard_20_internacional_mastercard\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=883320191811366\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=function(){EF.init({eventType:\"pageview\",pageviewProperties:\"\",segment:\"18346\",searchSegment:\"\",sku:\"\",userid:\"553\",pixelHost:\"pixel.everesttech.net\",allow3rdPartyPixels:1});EF.main()};window.EF=window.EF||{};if(window.EF.main)a();else if(window.EF.onloadCallbacks=window.EF.onloadCallbacks||[],window.EF.onloadCallbacks[window.EF.onloadCallbacks.length]=a,!window.EF.jsTagAdded){a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/www.everestjs.net\/static\/st.v3.js\";\nvar b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b);window.EF.jsTagAdded=1}})();\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg src=\"https:\/\/pixel.everesttech.net\/553\/v?\" width=\"1\" height=\"1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":84
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"Com1RiseAsync\" type=\"text\/gtmscript\"\u003E(function(){var c=\"",["escape",["macro",113],7],"\",a=document.createElement(\"iframe\"),b=document.getElementById(\"Com1RiseAsync\");a.src=\"\/\/netshoes.go2cloud.org\/aff_l?offer_id\\x3d\"+c+\"\\x26adv_sub\\x3d",["escape",["macro",7],7],"\\x26amount\\x3d",["escape",["macro",8],7],"\\x26r\\x3d\"+Math.random();a.width=0;a.height=0;a.style.borderWidth=0;a.style.borderHeight=0;b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"Com1RiseMailAsync\" type=\"text\/gtmscript\"\u003E(function(){var c=\"",["escape",["macro",113],7],"\",a=document.createElement(\"iframe\"),b=document.getElementById(\"Com1RiseMailAsync\");a.src=\"\/\/netshoes.go2cloud.org\/aff_l?offer_id\\x3d\"+c+\"\\x26adv_sub\\x3d",["escape",["macro",7],7],"\\x26amount\\x3d",["escape",["macro",8],7],"\\x26r\\x3d\"+Math.random();a.width=0;a.height=0;a.style.borderWidth=0;a.style.borderHeight=0;b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":97
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/services.xg4ken.com\/js\/kenshoo.js?cid=",["escape",["macro",93],12],"\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ekenshoo.trackConversion(\"1211\",",["escape",["macro",93],8,16],",{conversionType:\"TestGABR_",["escape",["macro",116],7],"\",revenue:",["escape",["macro",8],8,16],",currency:\"",["escape",["macro",9],7],"\",orderId:\"",["escape",["macro",7],7],"\",promoCode:\"",["escape",["macro",117],7],"\",product:\"",["escape",["macro",19],7],"\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n   \u003Cimg src=\"https:\/\/1211.xg4ken.com\/pixel\/v1?track=1\u0026amp;token=",["escape",["macro",93],12],"\u0026amp;conversionType=TestGABR_",["escape",["macro",116],12],"\u0026amp;revenue=",["escape",["macro",8],12],"\u0026amp;currency=",["escape",["macro",9],12],"\u0026amp;orderId=",["escape",["macro",7],12],"\u0026amp;promoCode=",["escape",["macro",117],12],"\u0026amp;product=",["escape",["macro",19],12],"\" width=\"1\" height=\"1\"\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction adExchangeSearchLstDesk(){var b=document.createElement(\"div\"),a=document.createElement(\"ins\"),c=document.querySelector(\"#item-list\");c\u0026\u0026(b.style.marginTop=\"30px\",a.classList.add(\"adsbygoogle\"),a.style.display=\"inline-block\",a.style.width=\"970px\",a.style.height=\"90px\",a.style.margin=\"2px\",a.setAttribute(\"data-ad-client\",\"ca-pub-9624389202684281\"),a.setAttribute(\"data-ad-slot\",\"4033294672\"),b.append(a),c.append(b),(adsbygoogle=window.adsbygoogle||[]).push({}))}adExchangeSearchLstDesk();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":115
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction adExchangeSearchLstMobile(){if(35\u003C=document.querySelectorAll(\".items-wrapper .item\").length){var c=\"4033294672\",b=\/.com.br\\\/lst\\\/\/;(b=b.test(",["escape",["macro",33],8,16],"))\u0026\u0026(c=\"9720599527\");b=document.createElement(\"div\");b.style.marginBottom=\"45px\";b.style.textAlign=\"center\";var a=document.createElement(\"ins\");a.classList.add(\"adsbygoogle\");a.style.display=\"inline-block\";a.style.width=\"300px\";a.style.height=\"50px\";a.setAttribute(\"data-ad-client\",\"ca-pub-9624389202684281\");a.setAttribute(\"data-ad-slot\",\nc);b.append(a);c=document.querySelectorAll(\".items-wrapper .item\")[36];a=c.parentNode;a.insertBefore(b,c);(adsbygoogle=window.adsbygoogle||[]).push({})}}adExchangeSearchLstMobile();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":116
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction adExchangeHomeMobile(){if(\"visible\"===document.querySelector(\".foot-banner-ad\").style.visibility){var b=document.createElement(\"div\");b.style.marginBottom=\"25px\";b.style.textAlign=\"center\";var a=document.createElement(\"ins\");a.classList.add(\"adsbygoogle\");a.style.display=\"inline-block\";a.style.width=\"300px\";a.style.height=\"50px\";a.setAttribute(\"data-ad-client\",\"ca-pub-9624389202684281\");a.setAttribute(\"data-ad-slot\",\"9633851352\");b.append(a);a=document.querySelectorAll(\"main#content \\x3e div\")[11];\nvar c=a.parentNode;c.insertBefore(b,a);(adsbygoogle=window.adsbygoogle||[]).push({})}}adExchangeHomeMobile();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":117
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cstyle\u003E\nul.marketplace li:nth-child(3n) {display: none}\n\u003C\/style\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":120
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d,g,e,a,f,b){c.ktag||(a=function(){a.sendEvent?a.sendEvent(arguments):a.ktq.push(arguments)},a.ktq=[],c.ktag=a,f=d.getElementsByTagName(e)[0],b=d.createElement(e),b.async=!0,b.src=g,f.parentNode.appendChild(b))}(window,document,\"\/\/resources.xg4ken.com\/js\/v2\/ktag.js?tid\\x3dKT-N2BCB-3F0\",\"script\");ktag(\"setup\",\"KT-N2BCB-3F0\",\"\\x3cUSER_ID\\x3e\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"https:\/\/events.xg4ken.com\/pixel\/v2?tid=KT-N2BCB-3F0\u0026amp;noscript=1\" width=\"1\" height=\"1\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript id=\"RTBHouse_click_quick_view\" type=\"text\/gtmscript\"\u003E(function(){var productModal=document.querySelectorAll(\".quick-view-btn\");var urlComplement=\"\";var ampRTB=\"\";if(\"",["escape",["macro",40],7],"\"!=\"undefined\")ampRTB=\"\\x26id2\\x3dpr_",["escape",["macro",38],7],"_uid_",["escape",["macro",40],7],"\";if(\"",["escape",["macro",0],7],"\"==\"Search\")for(var i=0;i\u003CproductModal.length;i++)productModal[i].addEventListener(\"click\",function(e){urlComplement=\"offer_\"+this.getAttribute(\"data-sku\");var etscr=document.createElement(\"iframe\");etscr.src=\"\/\/us.creativecdn.com\/tags?id\\x3dpr_",["escape",["macro",38],7],"_\"+\nurlComplement.replace(\/ \/g,\"\")+ampRTB;etscr.width=0;etscr.height=0;etscr.style.borderWidth=0;etscr.style.borderHeight=0;var et=document.getElementById(\"RTBHouse_click_quick_view\");et.parentNode.insertBefore(etscr,et)})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":131
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var msgErrorHidden=document.querySelector(\".buy-error.hidden\");var urlComplement=\"\";var ampRTB=\"\\x26id2\\x3dpr_",["escape",["macro",38],7],"_uid_",["escape",["macro",40],7],"\";if(\"",["escape",["macro",0],7],"\"==\"Search\")freedom.live(\"#buy-button-now\",\"click\",function(e){var result=document.querySelector(\"#buy-button-now\").getAttribute(\"data-sku\");var calculation=result.substr(0,result.length-3);urlComplement=\"basketadd_\"+calculation;var etscr=document.createElement(\"iframe\");etscr.src=\"\/\/us.creativecdn.com\/tags?id\\x3dpr_",["escape",["macro",38],7],"_\"+\nurlComplement.replace(\/ \/g,\"\")+ampRTB;etscr.width=0;etscr.height=0;etscr.style.borderWidth=0;etscr.style.borderHeight=0;var et=document.getElementById(\"RTBHouse_click_quick_view\");et.parentNode.insertBefore(etscr,et)})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":132
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"4033370\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":137
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"",["escape",["macro",31],7],"\",{em:\"",["escape",["macro",101],7],"\"});fbq(\"track\",\"PageView\");var skus=",["escape",["macro",18],8,16],"||[];\nfbq(\"track\",\"ViewCategory\",{content_category:\"",["escape",["macro",58],7],"\",content_ids:skus.slice(0,8),content_type:\"product\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",31],12],"\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":141
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efor(var tagA=document.getElementsByTagName(\"a\"),texto=\"TV NSports\",achou,i=0;i\u003CtagA.length;i++)if(tagA[i].textContent==texto){achou=tagA[i];break}achou\u0026\u0026achou.setAttribute(\"target\",\"_blank\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":147
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction sendIntegradaData(){var c={token:\"1nt3gr4d4\"};c.values={dataPedido:",["escape",["macro",122],8,16],",numeroPedido:",["escape",["macro",7],8,16],",utm_source:",["escape",["macro",66],8,16],",utm_medium:",["escape",["macro",123],8,16],",utm_campaign:",["escape",["macro",15],8,16],",valor:",["escape",["macro",8],8,16],",cupom:",["escape",["macro",64],8,16],",parceiro:",["escape",["macro",2],8,16],"};var a=",["escape",["macro",18],8,16],";a.forEach(function(a,b){b++;b=\"sku\"+b;c.values[b]=a});a=JSON.stringify(c);var d=new XMLHttpRequest;d.open(\"POST\",\"https:\/\/links.hubconn.com\/_ah\/api\/webtrack\/v1\/createTrack\",\n!0);d.setRequestHeader(\"Content-type\",\"application\/json\");d.send(a)}sendIntegradaData();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Evar rm_trans={affiliateConfig:{ranMID:\"43984\",discountType:\"item\",includeStatus:\"true\",allowCommission:\"true\"},orderid:\"",["escape",["macro",7],7],"\",currency:\"",["escape",["macro",9],7],"\",customerStatus:\"\",conversionType:\"Sale\",customerID:\"",["escape",["macro",40],7],"\",discountCode:\"",["escape",["macro",64],7],"\"!=\"undefined\"?\"",["escape",["macro",64],7],"\":\"\",discountAmount:",["escape",["macro",125],8,16],",taxAmount:",["escape",["macro",126],8,16],",optionalData:{coupon:",["escape",["macro",124],8,16],"?",["escape",["macro",64],8,16],"+\" | voucher\":",["escape",["macro",64],8,16],"},lineitems:[]};\nvar productsArray=",["escape",["macro",17],8,16],";for(x in productsArray)rm_trans.lineitems.push({quantity:productsArray[x].quantity,unitPrice:productsArray[x].price,unitPriceLessTax:productsArray[x].price,SKU:productsArray[x].sku,productName:productsArray[x].name,optionalData:{brand:productsArray[x].brand,cat:productsArray[x].category}});\nwindow.DataLayer?(DataLayer.events=DataLayer.events||{},DataLayer.Sale=DataLayer.Sale||{Basket:rm_trans},DataLayer.Sale.Basket=DataLayer.Sale.Basket||rm_trans):window.DataLayer={Sale:{Basket:rm_trans},events:{}},DataLayer.events.SPIVersion=\"3.3\",DataLayer.Sale.Basket.Ready=!0;function __readRMCookie(e){for(var t=e+\"\\x3d\",a=document.cookie.split(\";\"),r=0;r\u003Ca.length;r++){for(var o=a[r];\" \"==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return\"\"}\nfunction __readRMCookiev2(e,t){for(var a=__readRMCookie(t=t||\"rmStore\");a!==decodeURIComponent(a);)a=decodeURIComponent(a);for(var r=a.split(\"|\"),o=0;o\u003Cr.length;o++){var n=r[o].split(\":\")[0],i=r[o].split(\":\")[1];if(n===e)return i}return\"\"}function __readParam(e,t,a,r){var o=t||\"\",n=a||\"\",i=r||{},s=__readRMCookiev2(e||\"\"),d=i[o],u=(s=i.ignoreCookie||!1?0:s)||d||n;return u=(\"string\"!=typeof u||\"false\"!==u.toLowerCase())\u0026\u0026u}\nfunction sRAN(){var e=DataLayer\u0026\u0026DataLayer.Sale\u0026\u0026DataLayer.Sale.Basket?DataLayer.Sale.Basket:{},t=e.affiliateConfig||{},a=__readParam(\"atm\",\"tagType\",\"pixel\",t),r=__readParam(\"adr\",\"discountType\",\"order\",t),o=__readParam(\"acs\",\"includeStatus\",\"false\",t),n=__readParam(\"arto\",\"removeOrderTax\",\"false\",t),i=__readParam(\"artp\",\"removeTaxFromProducts\",\"false\",t),s=__readParam(\"artd\",\"removeTaxFromDiscount\",\"false\",t),d=__readParam(\"atr\",\"taxRate\",0,t),u=(100+(d=Number(d)))\/100,m=__readParam(\"ald\",\"land\",\n!1,{})||(t.land\u0026\u0026!0===t.land?__readRMCookie(\"ranLandDateTime\"):t.land)||!1,c=__readParam(\"atrv\",\"tr\",!1,{})||(t.tr\u0026\u0026!0===t.tr?__readRMCookie(\"ranSiteID\"):t.tr)||!1,l=!1,p=__readParam(\"amid\",\"ranMID\",\"\",t)||e.ranMID;if(!p)return!1;if(!(void 0===t.allowCommission||\"false\"!==t.allowCommission))return!1;var y=encodeURIComponent(e.orderid||\"OrderNumberNotAvailable\"),v=\"\",N=\"\",f=\"\",C=\"\",_=e.currency||\"\";_=encodeURIComponent(_.toUpperCase());var h=e.taxAmount?Math.abs(Math.round(100*Number(e.taxAmount))):\n0,I=e.discountAmount?Math.abs(Math.round(100*Number(e.discountAmount))):0;s\u0026\u0026d\u0026\u0026(I=Math.round(I\/u));var g=\"pixel\"===a?\"ep\":\"mop\"===a?\"eventnvppixel\":\"ep\",D=(e.customerStatus||\"\")+\"\",R=document.location.protocol+\"\/\/track.linksynergy.com\/\"+g+\"?\",b=\"\";D\u0026\u0026(o\u0026\u0026\"EXISTING\"==D.toUpperCase()||o\u0026\u0026\"RETURNING\"==D.toUpperCase())\u0026\u0026(b=\"R_\");for(var L=[],U=0,S=0;S\u003C(e.lineitems?e.lineitems.length:0);S++){var T=!1,w=window.JSON?JSON.parse(JSON.stringify(e.lineitems[S])):e.lineitems[S],P=Number(w.unitPriceLessTax||\nw.unitPrice||0);i\u0026\u0026d\u0026\u0026!w.unitPriceLessTax\u0026\u0026(P\/=u);for(var x=0;x\u003CL.length;x++)L[x].SKU===w.SKU\u0026\u0026(T=!0,L[x].quantity=Number(L[x].quantity)+Number(w.quantity),L[x].totalValueLessTax=Number(L[x].totalValueLessTax)+Number(w.quantity)*P,L[x].totalValue=Number(L[x].totalValue)+Number(w.quantity)*Number(w.unitPrice));T||(w.totalValue=Number(w.quantity)*Number(w.unitPrice),w.totalValueLessTax=Number(w.quantity)*P,L.push(w)),U+=Number(w.quantity)*P*100}var A={};for(S=0;S\u003CL.length;S++){w=L[S];var k=encodeURIComponent(w.SKU),\nO=w.totalValueLessTax||w.totalValue,M=w.quantity,E=encodeURIComponent(w.productName)||\"\",q=100*Number(O);\"item\"===r.toLowerCase()\u0026\u0026I\u0026\u0026(q-=I*q\/U);var B=w.optionalData;for(var V in B)B.hasOwnProperty(V)\u0026\u0026(A[V]=A[V]||\"\",A[V]+=encodeURIComponent(B[V])+\"|\");v+=b+k+\"|\",N+=M+\"|\",f+=Math.round(q)+\"|\",C+=b+E+\"|\"}v=v.slice(0,-1),N=N.slice(0,-1),f=f.slice(0,-1),C=C.slice(0,-1),I\u0026\u0026\"order\"===r.toLowerCase()?(v+=\"|\"+b+\"DISCOUNT\",C+=\"|\"+b+\"DISCOUNT\",N+=\"|0\",f+=\"|-\"+I):I\u0026\u0026\"item\"===r.toLowerCase()\u0026\u0026(l=!0),n\u0026\u0026h\u0026\u0026(v+=\n\"|\"+b+\"ORDERTAX\",N+=\"|0\",f+=\"|-\"+h,C+=\"|\"+b+\"ORDERTAX\"),R+=\"mid\\x3d\"+p+\"\\x26ord\\x3d\"+y+\"\\x26skulist\\x3d\"+v+\"\\x26qlist\\x3d\"+N+\"\\x26amtlist\\x3d\"+f+\"\\x26cur\\x3d\"+_+\"\\x26namelist\\x3d\"+C+\"\\x26img\\x3d1\\x26\",m\u0026\u0026(R+=\"land\\x3d\"+m+\"\\x26\"),c\u0026\u0026(R+=\"tr\\x3d\"+c+\"\\x26\"),l\u0026\u0026(R+=\"discount\\x3d\"+I+\"\\x26\");B=e.optionalData||{};e.discountCode\u0026\u0026(B.coupon=e.discountCode),e.customerStatus\u0026\u0026(B.custstatus=e.customerStatus),e.customerID\u0026\u0026(B.custid=e.customerID),I\u0026\u0026(B.disamt=I);for(var V in B)B.hasOwnProperty(V)\u0026\u0026(R+=encodeURIComponent(V)+\n\"\\x3d\"+encodeURIComponent(B[V])+\"\\x26\");for(var V in A)A.hasOwnProperty(V)\u0026\u0026(R+=encodeURIComponent(V)+\"list\\x3d\"+A[V].slice(0,-1),I\u0026\u0026\"order\"===r.toLowerCase()\u0026\u0026(R+=\"disamt\"==V||\"margin\"==V?\"|0\":\"|DISCOUNT\"),h\u0026\u0026n\u0026\u0026(R+=\"disamt\"==V||\"margin\"==V?\"|0\":\"|ORDERTAX\"),R+=\"\\x26\");\"\\x26\"===R[R.length-1]\u0026\u0026(R=R.slice(0,-1)),R.length\u003E2037\u0026\u0026(R=R.slice(0,2037),R+=\"\\x26trunc\\x3dtrue\");var j,K=document.createElement(\"img\");K.setAttribute(\"src\",R),K.setAttribute(\"height\",\"1px\"),K.setAttribute(\"width\",\"1px\"),(j=document.getElementsByTagName(\"script\")[0]).parentNode.insertBefore(K,\nj)}\nfunction sDisplay(){var e=null,t=e,a=e,r=e,o=e,n=window.DataLayer\u0026\u0026window.DataLayer.Sale\u0026\u0026window.DataLayer.Sale.Basket?window.DataLayer.Sale.Basket:{},i=n.displayConfig||{},s=(n.customerStatus||\"\")+\"\",d=n.discountAmount?Math.abs(Number(n.discountAmount)):0,u=e,m=\"\",c=__readParam(\"dmid\",\"rdMID\",\"\",i);if(!c)return!1;var l=__readParam(\"dtm\",\"tagType\",\"js\",i),p=\"if\"===(l=\"js\"===l||\"if\"===l||\"img\"===l?l:\"js\")?\"iframe\":\"img\"===l?l:\"script\",y=\"\/\/\"+__readParam(\"ddn\",\"domain\",\"tags.rd.linksynergy.com\",i)+\n\"\/\"+l+\"\/\"+c,v=__readParam(\"dis\",\"includeStatus\",\"false\",i),N=__readParam(\"dcomm\",\"allowCommission\",\"notset\",i);\"true\"===N||!0===N||\"1\"===N||1===N?m=\"1\":\"false\"!==N\u0026\u0026!1!==N\u0026\u0026\"0\"!==N\u0026\u00260!==N||(m=\"0\");var f=\"\";if(s\u0026\u0026(v\u0026\u0026\"EXISTING\"==s.toUpperCase()||v\u0026\u0026\"RETURNING\"==s.toUpperCase())\u0026\u0026(f=\"R_\"),!n.orderid||!n.conversionType)return!1;r=0,a=encodeURIComponent(f+n.orderid),t=\"\",o=\"conv\",u=encodeURIComponent(n.currency||\"\");for(var C=0;C\u003C(n.lineitems?n.lineitems.length:0);C++)r+=Number(n.lineitems[C].unitPriceLessTax)*\nNumber(n.lineitems[C].quantity)||Number(n.lineitems[C].unitPrice)*Number(n.lineitems[C].quantity),t+=encodeURIComponent(n.lineitems[C].SKU)+\",\";r=Math.round(100*(r-d))\/100,t=t.slice(0,-1),o\u0026\u0026(y=y.indexOf(\"?\")\u003E-1?y+\"\\x26pt\\x3d\"+o:y+\"\/?pt\\x3d\"+o),t\u0026\u0026(y=y.indexOf(\"?\")\u003E-1?y+\"\\x26prodID\\x3d\"+t:y+\"\/?prodID\\x3d\"+t),a\u0026\u0026(y=y.indexOf(\"?\")\u003E-1?y+\"\\x26orderNumber\\x3d\"+a:y+\"\/?orderNumber\\x3d\"+a),r\u0026\u0026(y=y.indexOf(\"?\")\u003E-1?y+\"\\x26price\\x3d\"+r:y+\"\/?price\\x3d\"+r),u\u0026\u0026(y=y.indexOf(\"?\")\u003E-1?y+\"\\x26cur\\x3d\"+u:y+\"\/?cur\\x3d\"+\nu),m\u0026\u0026(y=y.indexOf(\"?\")\u003E-1?y+\"\\x26tvalid\\x3d\"+m:y+\"\/?tvalid\\x3d\"+m);var _=document.createElement(p);_.src=y,\"script\"===p?_.type=\"text\/javascript\":\"iframe\"===p\u0026\u0026_.setAttribute(\"style\",\"display: none;\"),document.getElementsByTagName(\"body\")[0].appendChild(_)}\nfunction sSearch(){var e=window.DataLayer\u0026\u0026window.DataLayer.Sale\u0026\u0026window.DataLayer.Sale.Basket?window.DataLayer.Sale.Basket:{},t=e.searchConfig||{},a=encodeURIComponent(\"...TRUNCATED\"),r=__readParam(\"smid\",\"rsMID\",\"\",t);if(!r)return!1;var o=__readParam(\"said\",\"accountID\",\"113\",t),n=function(){var n={};if(n.conversionType=encodeURIComponent(__readParam(\"sct\",\"conversionType\",e.conversionType\u0026\u0026\"sale\"!==(e.conversionType+\"\").toLowerCase()?e.conversionType:\"conv\",t)),n.revenue=0,n.currency=encodeURIComponent(e.currency||\n\"USD\"),n.orderId=encodeURIComponent(e.orderid||\"\"),n.promoCode=encodeURIComponent(e.discountCode||\"\"),n.discountAmount=e.discountAmount?Math.abs(Number(e.discountAmount)):0,n.customerStatus=encodeURIComponent(e.customerStatus||\"\"),n.productIDList=\"\",n.productNameList=\"\",e.lineitems\u0026\u0026e.lineitems.length){for(var i=0;i\u003Ce.lineitems.length;i++)n.revenue+=Number(e.lineitems[i].unitPrice||0)*Number(e.lineitems[i].quantity),n.productIDList+=(e.lineitems[i].SKU||\"NA\")+\",\",n.productNameList+=(e.lineitems[i].productName||\n\"NA\")+\",\";n.revenue=Math.round(100*(n.revenue-n.discountAmount))\/100,n.productIDList=encodeURIComponent(n.productIDList.slice(0,-1)),n.productNameList=encodeURIComponent(n.productNameList.slice(0,-1)),n.productIDList.length\u003E1024\u0026\u0026(n.productIDList=n.productIDList.substring(0,1024-a.length)+a),n.productNameList.length\u003E1024\u0026\u0026(n.productNameList=n.productNameList.substring(0,1024-a.length)+a)}kenshoo.trackConversion(o,r,n)},i=document.location.protocol.indexOf(\"s\")\u003E-1?\"https:\/\/\":\"http:\/\/\";i+=\"services.xg4ken.com\/js\/kenshoo.js?cid\\x3d\"+\nr;var s=document.createElement(\"script\");s.type=\"text\/javascript\",s.src=i,s.onload=n,s.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||n()},document.getElementsByTagName(\"head\")[0].appendChild(s)}sRAN(),sDisplay(),sSearch();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":160
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/gtmscript\"\u003E(function(a){window.DataLayer||(window.DataLayer={});DataLayer.events||(DataLayer.events={});DataLayer.events.SPIVersion=DataLayer.events.SPIVersion||\"3.4\";DataLayer.events.SiteSection=\"1\";var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document.location.protocol+\"\/\/tag.rmp.rakuten.com\/114782.ct.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":161
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/static.percycle.com\/netshoes\/g.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/static.percycle.com\/netshoes\/c.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":167
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/cdn.pn.vg\/c\/netshoes\/pushnews.min.js\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":168
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=\"\\x3cstyle\\x3ediv.bg-sombra{display:none;width:100%;height:100%;position:fixed;background:rgba(0,0,0,.5);z-index:999999}div.quadrado{width:341px;height:333px;padding:0;position:fixed;z-index:9999992;top:50%;margin-top:-166px;left:50%;margin-left:-170px}.fechar-x,div.div-close{height:36px;text-align:center}div.img-floater{float:left;position:absolute;top:0;left:0;z-index:9999999}div.div-close,div.img-floater img{border:0}div.div-close{position:absolute;top:0;left:268px;margin:0;width:54px;padding-bottom:0;z-index:99999999}div.displayzin-none{display:none}.fechar-x{cursor: pointer; display: block; background: #ae03ff; color:#fff; width: 40px; font-size: 31px; font-weight: 700; line-height: 33px; text-decoration: none; font-family: sans-serif;}span.fechar-x {margin-left: 50px;margin-top: 5px;} @media only screen and (max-width: 600px){div.img-floater img {max-width: 100%; height: auto}span.fechar-x {margin-left: 20px}}\\x3c\/style\\x3e\\x3cdiv id\\x3d'bg-sombra-floater' class\\x3d'bg-sombra' id\\x3d'myModal'\\x3e\\x3cdiv class\\x3d'quadrado'\\x3e\\x3cdiv class\\x3d'img-floater'\\x3e\\x3ca href\\x3d'https:\/\/www.netshoes.com.br\/busca?tipo-de-produto\\x3dcartao-presente\\x26mi\\x3dhm_sc_flooter_cartao-presente_280120_mas_00\\x26psn\\x3dBanner_flooter'\\x3e\\x3cimg src\\x3d'https:\/\/static.netshoes.com.br\/bnn\/l_netshoes\/2019-11-29\/4512_Floater_Generico_362x357.gif'\/\\x3e\\x3c\/a\\x3e\\x3c\/div\\x3e\\x3cdiv class\\x3d'div-close'\\x3e\\x3cspan class\\x3d'fechar-x'\\x3ex\\x3cspan\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\",\nd=document.createElement(\"div\");d.innerHTML=b;document.body.insertBefore(d,document.body.firstChild);document.querySelector(\".fechar-x\").addEventListener(\"click\",function(c){c=document.querySelector(\".quadrado\");var a=document.querySelector(\".bg-sombra\"),b=document.querySelector(\"#bg-sombra-floater\");c\u0026\u0026c.classList.add(\"displayzin-none\");a\u0026\u0026a.classList.remove(\"displayzin-none\");b\u0026\u0026b.classList.remove(\"bg-sombra\")});document.querySelector(\".bg-sombra\").addEventListener(\"click\",function(c){c=document.querySelector(\".quadrado\");\nvar a=document.querySelector(\".bg-sombra\"),b=document.querySelector(\"#bg-sombra-floater\");c\u0026\u0026c.classList.add(\"displayzin-none\");a\u0026\u0026a.classList.remove(\"displayzin-none\");b\u0026\u0026b.classList.remove(\"bg-sombra\")})})();function readCookie(b){b+=\"\\x3d\";for(var d=document.cookie.split(\";\"),c=0;c\u003Cd.length;c++){for(var a=d[c];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return null}\nif(null==readCookie(\"HideFloater\")){var date=new Date;date.setTime(date.getTime()+324E5);var expires=date.toGMTString();document.getElementById(\"bg-sombra-floater\").style.display=\"block\";document.cookie=\"HideFloater\\x3dtrue; expires\\x3d\"+expires};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction autoPixelLivelo(){if(\"object\"!==typeof ",["escape",["macro",128],8,16],")return!1;for(var a=0;a\u003C",["escape",["macro",128],8,16],".products.length;a++){var c=a+1,b=\"\",d=encodeURI(",["escape",["macro",128],8,16],".products[a].id)||\"\",e=encodeURI(",["escape",["macro",128],8,16],".products[a].name)||\"\",f=",["escape",["macro",128],8,16],".products[a].price||\"\",g=",["escape",["macro",128],8,16],".products[a].quantity||\"\";b+=\"pr\"+c+\"id\\x3d\"+d+\"\\x26\";b+=\"pr\"+c+\"nm\\x3d\"+e+\"\\x26\";b+=\"pr\"+c+\"pr\\x3d\"+f+\"\\x26\";b+=\"pr\"+c+\"qt\\x3d\"+g+\"\\x26\"}c=\"Netshoes\";c=encodeURI(c);d=",["escape",["macro",78],8,16],";\ne=",["escape",["macro",7],8,16],"||\"\";f=",["escape",["macro",22],8,16],"||\"\";g=",["escape",["macro",126],8,16],"||\"\";var h=new Date;a=\"https:\/\/www.google-analytics.com\/collect?\";a+=\"v\\x3d1\\x26t\\x3devent\\x26tid\\x3dUA-66602774-8\\x26\";a+=\"ec\\x3denhanced-ecommerce\\x26ea\\x3dpurchase\\x26pa\\x3dpurchase\\x26\";a+=\"el\\x3d\"+c+\"\\x26dl\\x3d\"+d+\"\\x26ti\\x3d\"+e+\"\\x26\";a+=\"cd1\\x3d\"+",["escape",["macro",49],8,16],"+\"\\x26\";a+=\"tr\\x3d\"+f+\"\\x26ts\\x3d\"+g+\"\\x26\";a+=b+\"cid\\x3d\"+",["escape",["macro",40],8,16],"+\"\\x26z\\x3d\"+h.getTime();b=document.createElement(\"img\");b.setAttribute(\"src\",\na);b.setAttribute(\"class\",\"pixel-livelo\");b.style.display=\"none\";document.querySelector(\"body\").appendChild(b)}(function(){autoPixelLivelo()})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":174
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar DL=dataLayer[0],domain=DL.site.domain,webcollageSiteIds={\"www.netshoes.com.br\":\"netshoes-br-pt\",\"www.zattini.com.br\":\"zattini-br-pt\"},webcollageSiteId=webcollageSiteIds[domain],skusEnables={\"M19-0592-460\":\"www.netshoes.com.br\"===domain,\"M19-0234-460\":\"www.netshoes.com.br\"===domain,\"M19-0197-460\":\"www.zattini.com.br\"===domain},loadScript=function(a,b){function d(a,c){var b=document.createElement(\"script\");c\u0026\u0026(b.onload=c);b.src=a;b.type=\"text\/javascript\";return b}function f(a){var b=document.createElement(\"div\");\nb.appendChild(a);return b.innerHTML}a instanceof Array||(a=[a]);var c,e=\"dynCall_\"+Math.floor(89999*Math.random()+1E4);counter=a.length;call=function(){0==--counter\u0026\u0026b()};if(document.body)for(c=0;c\u003Ca.length;c++)document.body.appendChild(d(a[c],call));else{window[e]=function(){delete window[e];b instanceof Function\u0026\u0026b()};for(c=0;c\u003Ca.length;c++)document.write(f(d(a[c])));document.write('\\x3cscript type\\x3d\"text\/javascript\"\\x3ewindow.'+e+\"();\\x3c\/script\\x3e\")}},loadedWebcollage=function(){var a=DL.ecommerce.detail.products;\nif(\"product\"===DL.page.pageID\u0026\u0026(a=a.length?a[0]:null,skusEnables[a.skuFather])){var b=document.querySelector(\"div[data-sku-changed-target]\")||document.querySelector(\"#buy-box\");if(b){var d=document.createElement(\"div\");d.id=\"wc-power-page\";b.appendChild(d);webcollageSiteId\u0026\u0026Webcollage.loadProductContent(webcollageSiteId,a.skuFather,{\"power-page\":{autoPlayAndStop:!0}})}}};loadScript(\"https:\/\/scontent.webcollage.net\/api\/v2\/product-content\",loadedWebcollage);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":684
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"",["escape",["macro",31],7],"\",{em:\"",["escape",["macro",101],7],"\"});\nfbq(\"track\",\"AddPaymentInfo\",{value:",["escape",["macro",8],8,16],"?parseFloat(",["escape",["macro",8],8,16],"):",["escape",["macro",8],8,16],",currency:\"",["escape",["macro",9],7],"\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",31],12],"\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":687
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"",["escape",["macro",129],7],"\");\nfbq(\"track\",\"AddToCart\",{content_name:\"",["escape",["macro",48],7],"\",content_ids:\"",["escape",["macro",19],7],"\",content_type:\"product\",value:parseFloat(",["escape",["macro",46],8,16],"),currency:\"",["escape",["macro",9],7],"\",contents:",["escape",["macro",130],8,16],"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",129],12],"\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":693
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"",["escape",["macro",129],7],"\");fbq(\"track\",\"PageView\");\nfbq(\"track\",\"ViewContent\",{content_name:\"",["escape",["macro",48],7],"\",content_ids:\"",["escape",["macro",19],7],"\",content_type:\"product\",value:parseFloat(",["escape",["macro",46],8,16],"),currency:\"",["escape",["macro",9],7],"\",contents:",["escape",["macro",130],8,16],"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",129],12],"\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":697
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"",["escape",["macro",129],7],"\");fbq(\"track\",\"PageView\");\nfbq(\"track\",\"Purchase\",{content_ids:",["escape",["macro",19],8,16],".split(\",\"),content_type:\"product\",value:",["escape",["macro",8],8,16],"?parseFloat(",["escape",["macro",8],8,16],"):",["escape",["macro",8],8,16],",currency:\"",["escape",["macro",9],7],"\",contents:",["escape",["macro",130],8,16],"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",129],12],"\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":701
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Confirmation"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"OrderConfirmation"
    },{
      "function":"_le",
      "arg0":["macro",3],
      "arg1":"0"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"me-s_lmde"
    },{
      "function":"_le",
      "arg0":["macro",13],
      "arg1":"0"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"cpar_styl"
    },{
      "function":"_le",
      "arg0":["macro",16],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Search"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Cart"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Payment"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Product"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"checkout"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"AjaxDL"
    },{
      "function":"_le",
      "arg0":["macro",31],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Home"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"busca"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"sub"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"lst"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"home"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_le",
      "arg0":["macro",36],
      "arg1":"0"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"CONCLUIR COMPRA|FINALIZAR COMPRA",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"CONTINUAR",
      "ignore_case":true
    },{
      "function":"_le",
      "arg0":["macro",38],
      "arg1":"0"
    },{
      "function":"_le",
      "arg0":["macro",41],
      "arg1":"0"
    },{
      "function":"_cn",
      "arg0":["macro",37],
      "arg1":"PRODUTOS DE MODA COM ATÉ 70% OFF"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"Google_cpc_conteudo_remarketing"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"gglepqrlsa"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"me*youtube"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"YTGGL_"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"me-s_afil"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"me-s_zanx"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"me-s_mlz"
    },{
      "function":"_le",
      "arg0":["macro",59],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Login"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"b2b_jacotei"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"Confirmation"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"b2b_plancksports|b2b_planckbike"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"me-s_zanx"
    },{
      "function":"_cn",
      "arg0":["macro",66],
      "arg1":"b2b_vigiadepreco"
    },{
      "function":"_eq",
      "arg0":["macro",67],
      "arg1":"https"
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"cartao"
    },{
      "function":"_eq",
      "arg0":["macro",68],
      "arg1":"mobile"
    },{
      "function":"_cn",
      "arg0":["macro",68],
      "arg1":"mobile"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"((.*)utm_source=(.*))|((.*)gclid=(.*))|((.*)utm_campaign=(.*))"
    },{
      "function":"_eq",
      "arg0":["macro",39],
      "arg1":"{{uCustomerId}}"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"\\w\\S{5,}"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"[0-9]"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"me-s_ctads|me-s_zanx|me-s_rkten|me-s_afil|me-s_flavio",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",70],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"hmg-|dev-|local\\.|ns2online.com.br"
    },{
      "function":"_re",
      "arg0":["macro",71],
      "arg1":"anchietafotofranca|aplicativos-apk|assistirfilmes720p|assistirnovelaonline|blackopshackers|blogdoteimoso|bocabrabadownloads|br-gospel|coroastube|cuckold-cornosdobrasil|deliriosamoresexo|dinossauroreitv|docaralho-videos|efilmesnarede|garotadaplayboy|kakaryandown|macuconews|macuconoticias|marioangelobarreto|megapica|mugen20|muitabuceta|nalutaenalabuta|omsdbweb|otakucabeludo|pinheirinho|portrasdamidiamundial|praiadoprazer|reigaybears|sebastianwe10|semsentido100|Sex|Porno|Porn|Pornografia|Boquete|Blowjob|BJ|Anus|Anal|Buceta|Boceta|Grilo|Grelo|MILF|XXX|Chaturbate|masturbação|Fuck|Analfuck|Gozo|Gozada|Creampie|Tits|Breast|Nasty|Horny|Fucked|Lesbian|POV|Pussy|Cumshot|Penetration|Ebony|Fetish|Gangbang|Grupal|Hentai|Masturbation|Shemale|Squirting|Pornhub|Redtube|Pornstar|Pornstars|Pornô|Squirt|Threesome|Bondage|Cock|Dick|Vulva|Spank|Transviado|Transviada|Clitóris|Punheta|Siririca|Suruba|Ciririca|Menage|xvideos|Pornotube|Porn|Sexploration|Gangbros|Fisting|Stripping|handjob|whiteshit|18-porn|18yo|3some|4some|8teenxxx|adultery|3way|anal-fuck|anal-sex|analsex|analfuck|cuzinho|blow-job|brazzers|bukkake|bukake|bukakke|butthole|buttsex|buttfucking|boqueteira|deepthroat|deep-throat",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"SubHome"
    },{
      "function":"_re",
      "arg0":["macro",29],
      "arg1":"^(disney|jorgealex|kerastase|l-oreal-professionnel|luzdalua|cupom-de-desconto|redken|shoestock|starwars|westcoast)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"\\\/cartao\\-netshoes|\\\/cartao\\-netshoes|\\\/brand|branding|\\\/sub\\\/Smartfit|\\\/campanha\\\/skechers|HomeSmartfit|HomeGrifemackenzie|institucional|trabalhe-conosco|netshoes-empresas|regulamentos|conduta-fornecedores|especial\\\/aplicativos",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"[A-Z0-9a-z._%+-]+(@|\\%2540)[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",73],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"cpar_bscp"
    },{
      "function":"_le",
      "arg0":["macro",85],
      "arg1":"0"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"b2b_dotz"
    },{
      "function":"_le",
      "arg0":["macro",91],
      "arg1":"0"
    },{
      "function":"_cn",
      "arg0":["macro",66],
      "arg1":"cpar_klk"
    },{
      "function":"_le",
      "arg0":["macro",92],
      "arg1":"0"
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"c\\*lp_t\\*yhopqbdg|yhopqcmp"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"me-s_fcbk-xml|dp-facebook|me-r_fcbk-display"
    },{
      "function":"_re",
      "arg0":["macro",57],
      "arg1":"gglepqdsa|nsmsite01|gglepqcmp|netpro_gglepqrlsa|c\\*lp_t\\*gglepqpla|gglepqpla|gglepqrlsa|yhopqcmp"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"c\\*lp_t\\*gglepqbdg|c\\*lp_t\\*yhopqbdg"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"me-s_zanx|me-s_cto"
    },{
      "function":"_le",
      "arg0":["macro",93],
      "arg1":"0"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"me-s_rkten"
    },{
      "function":"_le",
      "arg0":["macro",94],
      "arg1":"0"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"me-s_zanx|par_mail_anx"
    },{
      "function":"_le",
      "arg0":["macro",96],
      "arg1":"0"
    },{
      "function":"_cn",
      "arg0":["macro",66],
      "arg1":"cpar_zoom"
    },{
      "function":"_le",
      "arg0":["macro",99],
      "arg1":"0"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"lmdsid"
    },{
      "function":"_le",
      "arg0":["macro",105],
      "arg1":"0"
    },{
      "function":"_le",
      "arg0":["macro",108],
      "arg1":"0"
    },{
      "function":"_le",
      "arg0":["macro",110],
      "arg1":"0"
    },{
      "function":"_re",
      "arg0":["macro",29],
      "arg1":"(nba|botafogo|corinthians|cruzeiro|flamengo|fluminense|gremio|internacional|palmeiras|santos|saopaulo|vasco|adidasoriginais|all4one|bodytech|bodytechbackup|gifemackenzie|jointhenoise|desimpedidos)(\\\/|)$"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"cpar_zoom"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"Product"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":"COMPRAR",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"Search"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"\/ncard"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"ncard=gold"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"ncard=internacional"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"me-s_pgit"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"par_mail_pgit"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"me-s_mlz"
    },{
      "function":"_eq",
      "arg0":["macro",75],
      "arg1":"clube"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"b2b_int"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"me-s_pgit"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"netpro_b2b_latampass"
    },{
      "function":"_cn",
      "arg0":["macro",57],
      "arg1":"netpro_b2b_dotz"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"b2b_livelo"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"b2b_vaidevisa",
      "ignore_case":true
    },{
      "function":"_le",
      "arg0":["macro",129],
      "arg1":"0"
    },{
      "function":"_re",
      "arg0":["macro",49],
      "arg1":"cartao_visa",
      "ignore_case":true
    }],
  "rules":[
    [["if",0,1],["add",11,23,38,42,73,87,9,10,105,120]],
    [["if",0,2],["add",11,23,38,42,73,75,82,87,89,92,93,9,10,105,120],["block",88]],
    [["if",0,1,4],["add",12,74]],
    [["if",0,2,4],["add",12,74]],
    [["if",0,1,6],["add",13]],
    [["if",0,2,6],["add",13]],
    [["if",8,9],["add",14,107]],
    [["if",9,10],["add",15,82]],
    [["if",9],["add",16,54]],
    [["if",0,9],["add",17,29,82]],
    [["if",9,12],["add",18,29,124]],
    [["if",10,13,14],["add",19,22,31]],
    [["if",1,10,15],["add",19,22,31]],
    [["if",1,12],["add",20,25,36,61,119]],
    [["if",10,16],["add",21,83],["block",88]],
    [["if",1,18],["add",24,34]],
    [["if",1,8],["add",26,30,40,119]],
    [["if",10,23],["add",27,92,93]],
    [["if",18,23],["add",27,72,92,93,108]],
    [["if",12,23],["add",27,72,92,93]],
    [["if",8,23],["add",27,72,92,93,95,106]],
    [["if",10,25,26],["add",28]],
    [["if",10,26,27],["add",28]],
    [["if",1,8],["unless",19,20,21,22],["add",32,52],["block",26]],
    [["if",26,30],["add",33]],
    [["if",1,8,21],["add",35]],
    [["if",1,8,20],["add",37]],
    [["if",1,10],["add",39]],
    [["if",0,1,31],["add",41]],
    [["if",0,2,31],["add",41]],
    [["if",0,1,32],["add",43]],
    [["if",0,2,32],["add",43]],
    [["if",0,1,33],["add",44]],
    [["if",0,1,34],["add",44]],
    [["if",0,2,33],["add",44]],
    [["if",0,2,34],["add",44]],
    [["if",1,35],["add",45,46]],
    [["if",1,4],["add",47,48]],
    [["if",1,36],["add",49,50,51]],
    [["if",0,1,37],["add",53]],
    [["if",0,2,37],["add",53]],
    [["if",1,40,41],["add",55]],
    [["if",1,42],["add",56]],
    [["if",2,42],["add",56]],
    [["if",1],["add",57,1,94,109,110,113,0,118,121,62,63,64,65,66,67,68,69,70]],
    [["if",16,43],["unless",41],["add",58]],
    [["if",0,16,43],["add",59]],
    [["if",0,16,44],["add",60]],
    [["if",1,45],["add",61]],
    [["if",0,1],["unless",46],["add",7,8],["block",9,10]],
    [["if",0,2],["unless",46],["add",7,8],["block",9,10]],
    [["if",1,49],["add",71]],
    [["if",16,51],["unless",50],["add",2]],
    [["if",8,20,23],["add",72]],
    [["if",16],["add",1,88,91,5]],
    [["if",1,41,63],["add",74]],
    [["if",2,41,63],["add",74]],
    [["if",0,16],["add",75,89,120,128],["block",88]],
    [["if",0,2,65],["add",76,77]],
    [["if",0,1,65],["add",76,77]],
    [["if",0,1,67],["add",78]],
    [["if",0,2,67],["add",78]],
    [["if",1,69],["add",79]],
    [["if",0,1,70],["add",79,125]],
    [["if",0,1,71],["add",79]],
    [["if",0,2,70],["add",79,125]],
    [["if",0,2,71],["add",79]],
    [["if",0,1,75],["add",6]],
    [["if",0,16,75],["add",6]],
    [["if",0,2,75],["add",6]],
    [["if",0,16,77],["add",80]],
    [["if",0,1,79],["add",81]],
    [["if",0,2,79],["add",81]],
    [["if",1,81],["add",3]],
    [["if",16,18],["add",84]],
    [["if",12,16],["add",85,90,127],["block",88]],
    [["if",8,16],["add",86,98,111,112],["block",88]],
    [["if",2],["add",91,94,113]],
    [["if",0,23],["add",92,93]],
    [["if",12,23,47],["add",95]],
    [["if",23,86,87],["add",96]],
    [["if",12,26,88],["add",97,126]],
    [["if",16,90],["add",99]],
    [["if",1,91],["add",100,101]],
    [["if",1,92],["add",102]],
    [["if",0,1,93],["add",103]],
    [["if",0,2,93],["add",103]],
    [["if",0,1,94],["add",104]],
    [["if",0,16,94],["add",104]],
    [["if",1,95],["add",4]],
    [["if",1,89],["unless",19],["add",114],["block",98]],
    [["if",1],["unless",48],["add",115],["block",8,10]],
    [["if",0,16,97],["add",116]],
    [["if",0,1,98],["add",117]],
    [["if",0,2,98],["add",117]],
    [["if",1,18,99],["add",122]],
    [["if",1,18,100],["add",122]],
    [["if",0,16,101],["add",123]],
    [["if",1,3],["block",11,22,23,24,25,26,52]],
    [["if",1,5],["block",12]],
    [["if",1,7],["block",13]],
    [["if",9,11],["block",16,54]],
    [["if",16,17],["block",21,88,89,90,98,99,114]],
    [["if",23,24],["block",27]],
    [["if",26,28],["block",28]],
    [["if",9,29],["block",29]],
    [["if",1,38],["block",53,4]],
    [["if",9,39],["block",54]],
    [["if",1,47],["block",7,9]],
    [["if",2],["unless",48],["block",8]],
    [["if",11,16],["block",2,1,91,5]],
    [["if",16],["unless",52],["block",2,5]],
    [["if",16,39],["block",2,1]],
    [["if",23,53,54],["block",72,106,107,108]],
    [["if",23,55],["block",72,95,106,107,108]],
    [["if",23,54,56],["block",72,1,95]],
    [["if",23,57],["block",72,106,107,108]],
    [["if",23,58,59],["block",72,95,106,107,108]],
    [["if",23,60],["block",72,95,106,107,108]],
    [["if",23,61],["block",72,95,106,107,108]],
    [["if",1,53,54],["block",1,106,107,108]],
    [["if",16,53,54],["block",1]],
    [["if",1,11],["block",1,94]],
    [["if",1,39],["block",1,94]],
    [["if",1,57,62],["block",1]],
    [["if",1,24],["block",73]],
    [["if",16,64],["block",75,83,84,85,86]],
    [["if",1,66],["block",76,77]],
    [["if",1,68],["block",78]],
    [["if",1,72],["block",79]],
    [["if",1,73],["block",79,125]],
    [["if",1,74],["block",79]],
    [["if",1,76],["block",6]],
    [["if",16,78],["block",80]],
    [["if",1,80],["block",81]],
    [["if",16,28],["block",91,111,112]],
    [["if",16,82],["block",5]],
    [["if",23,83],["block",92]],
    [["if",0,23,36],["block",93]],
    [["if",23,84],["block",93]],
    [["if",0,2,36],["block",93]],
    [["if",23,58,85],["block",95]],
    [["if",17,26],["block",97]],
    [["if",23,47],["block",106]],
    [["if",23],["unless",48],["block",107,108]],
    [["if",1,96],["block",122]],
    [["if",16],["unless",96],["block",126,127,128]],
    [["if",16],["unless",102],["block",126,127,128]],
    [["if",16,103],["block",126,127]],
    [["if",26,103],["block",126]],
    [["if",26],["unless",96],["block",126]],
    [["if",26],["unless",102],["block",126]],
    [["if",0,16],["unless",104],["block",128]],
    [["if",2],["unless",102],["block",128]],
    [["if",0,2],["unless",104],["block",128]],
    [["if",2],["unless",96],["block",128]]]
},
"runtime":[[50,"__awj",[46,"a"],[52,"b",["require","injectScript"]],["b",[0,[0,"https://www.dwin1.com/",[17,[15,"a"],"merchantId"]],".js"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"awj"]]]
,"permissions":{"__awj":{"inject_script":{"urls":["https:\/\/www.dwin1.com\/*"]}}}

,"security_groups":{
"nonGoogleScripts":["__awj"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ca,da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={eg:!0},ja={};try{ja.__proto__=ia;ha=ja.eg;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=fa,la=function(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Wh=b.prototype},ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null,pa=function(a,b){function c(){}c.prototype=b.prototype;a.Wh=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ni=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-
2]=arguments[h];return b.prototype[e].apply(d,g)}},sa=function(a){return a};var ta=function(a,b){this.a=a;this.i=b};var va=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},xa=function(){this.B={};this.m=!1;this.F={}};xa.prototype.get=function(a){return this.B["dust."+a]};xa.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.B[a]=b))};xa.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var ya=function(a){var b=[],c;for(c in a.B)a.B.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.i=new xa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(va(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};ca=k.prototype;ca.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ca.set=function(a,b){if("length"==a){if(!va(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else va(a)?this.a[Number(a)]=b:this.i.set(a,b)};ca.get=function(a){return"length"==a?this.length():va(a)?this.a[Number(a)]:this.i.get(a)};ca.length=function(){return this.a.length};ca.uc=function(){for(var a=ya(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new k(a)};
var za=function(a,b){if(va(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.B[d]}};ca=k.prototype;ca.pop=function(){return this.a.pop()};ca.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};ca.shift=function(){return this.a.shift()};ca.splice=function(a,b,c){return new k(this.a.splice.apply(this.a,arguments))};ca.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
ca.has=function(a){return va(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var Aa=function(){function a(f,g){if(b[f]){if(b[f].ic+g>b[f].max)throw Error("Quota exceeded");b[f].ic+=g}}var b={},c=void 0,d=void 0,e={wh:function(f){c=f},Me:function(){c&&a(c,1)},yh:function(f){d=f},Ha:function(f){d&&a(d,f)},Th:function(f,g){b[f]=b[f]||{ic:0};b[f].max=g},Vg:function(f){return b[f]&&b[f].ic||0},reset:function(){b={}},Dg:a};e.onFnConsume=e.wh;e.consumeFn=e.Me;e.onStorageConsume=e.yh;e.consumeStorage=e.Ha;e.setMax=e.Th;e.getConsumed=e.Vg;e.reset=e.reset;e.consume=e.Dg;return e};var Ba=function(a,b){this.F=a;this.P=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new xa;this.a=this.B=void 0};Ba.prototype.add=function(a,b){Ca(this,a,b,!1)};var Ca=function(a,b,c,d){if(!a.i.m)if(a.F.Ha(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
Ba.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ha(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};Ba.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};Ba.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Da=function(a){var b=new Ba(a.F,a);a.B&&(b.B=a.B);b.P=a.P;b.a=a.a;return b};var Ea=function(){},Fa=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ga=function(a){return"number"==typeof a&&!isNaN(a)},Ha=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Ia=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ja=function(a,b){if(a&&Ha(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ka=function(a,b){if(!Ga(a)||
!Ga(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ma=function(a,b){for(var c=new La,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Na=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Oa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Pa=function(a){return Math.round(Number(a))||0},Qa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Ra=function(a){var b=[];if(Ha(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Sa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ta=function(){return(new Date).getTime()},La=function(){this.prefix="gtm.";this.values={}};La.prototype.set=function(a,b){this.values[this.prefix+a]=b};La.prototype.get=function(a){return this.values[this.prefix+a]};
var Ua=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Va=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Xa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ya=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},$a=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},ab=function(a){for(var b=B,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},bb=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},cb=function(a){var b=[];Na(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var db=function(a,b){xa.call(this);this.a=a;this.P=b};la(db,xa);db.prototype.toString=function(){return this.a};db.prototype.uc=function(){return new k(ya(this))};db.prototype.i=function(a,b){a.F.Me();return this.P.apply(eb(this,a),Array.prototype.slice.call(arguments,1))};var eb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Ha(d)?fb(e,d):d};c.prototype.F=function(d){return gb(this.m,d)};c.prototype.B=function(){return b.F};return new c(a,b)};
db.prototype.Ka=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var gb=function(a,b){for(var c,d=0;d<b.length&&!(c=fb(a,b[d]),c instanceof ta);d++);return c},fb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof db))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.B;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var ib=function(){xa.call(this)};la(ib,xa);ib.prototype.uc=function(){return new k(ya(this))};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var kb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,lb=function(a){if(null==a)return String(a);var b=kb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},mb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},nb=function(a){if(!a||"object"!=lb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!mb(a,"constructor")&&!mb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||mb(a,b)},E=function(a,b){var c=b||("array"==lb(a)?[]:{}),d;for(d in a)if(mb(a,d)){var e=a[d];"array"==lb(e)?("array"!=lb(c[d])&&(c[d]=[]),c[d]=E(e,c[d])):nb(e)?(nb(c[d])||(c[d]={}),c[d]=E(e,c[d])):c[d]=e}return c};var pb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=ya(h),n=0;n<m.length;n++)l[m[n]]=g(h.get(m[n]))},g=function(h){var l=Ia(d,h);if(-1<l)return e[l];if(h instanceof k){var m=[];d.push(h);e.push(m);for(var n=h.uc(),r=0;r<n.length();r++)m[n.get(r)]=g(h.get(n.get(r)));return m}if(h instanceof ib){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof db){var q=function(){for(var v=Array.prototype.slice.call(arguments,0),u=0;u<v.length;u++)v[u]=ob(v[u],b);var w=b?b.F:Aa(),y=new Ba(w);
b&&(y.a=b.a);return g(h.i.apply(h,[y].concat(v)))};d.push(h);e.push(q);f(h,q);return q}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null;default:if(c)return c(h,b)}};return g(a)},ob=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Ia(d,h);if(-1<l)return e[l];if(Ha(h)||Oa(h)){var m=new k([]);d.push(h);e.push(m);for(var n in h)h.hasOwnProperty(n)&&m.set(n,
g(h[n]));return m}if(nb(h)){var r=new ib;d.push(h);e.push(r);f(h,r);return r}if("function"===typeof h){var t=new db("",function(v){for(var u=Array.prototype.slice.call(arguments,0),w=0;w<u.length;w++)u[w]=pb(this.a(u[w]),b);return g((0,this.m.P)(h,h,u))});d.push(h);e.push(t);f(h,t);return t}var q=typeof h;if(null===h||"string"===q||"number"===q||"boolean"===q)return h;if(void 0!==h&&c)return c(h,b)};return g(a)};var qb={control:function(a,b){return new ta(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.B().Ha(a.length+f.length);return new db(a,function(){return function(g){var h=Da(d);void 0===h.a&&(h.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof ta)return l[m];for(var n=e.get("length"),r=
0;r<n;r++)r<l.length?h.add(e.get(r),l[r]):h.add(e.get(r),void 0);h.add("arguments",new k(l));var t=gb(h,f);if(t instanceof ta)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.B();b.Ha(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ha(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.B(),c=new ib,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ha(g);c.set(e,f)}return c},undefined:function(){}};var rb=function(){this.m=Aa();this.a=new Ba(this.m)},sb=function(a,b,c){var d=new db(b,c);d.m=!0;a.a.set(b,d)};rb.prototype.oc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};rb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=fb(this.a,arguments[c]);return b};rb.prototype.B=function(a,b){var c=Da(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=fb(c,arguments[e]);return d};var tb=function(a){if(a instanceof tb)return a;this.oa=a};tb.prototype.toString=function(){return String(this.oa)};var ub=function(a,b){return pb(a,b,function(c){})},vb=function(a,b){var c=void 0;return ob(a,b,c)};var wb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},xb=function(a){if(void 0==a||Ha(a)||nb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var yb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=wb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):za(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=wb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):za(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var zb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Ab=new ta("break"),Bb=new ta("continue"),Cb=function(a,b){return this.a(a)+this.a(b)},Hb=function(a,b){return this.a(a)&&this.a(b)},Ib=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=Ia(zb,b))return vb(a[b].apply(a,wb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof db){var e=wb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ia(yb.supportedMethods,b)){var f=wb(c);f.unshift(this.m);
return yb[b].apply(a,f)}}if(a instanceof db||a instanceof ib){if(a.has(b)){var g=a.get(b);if(g instanceof db){var h=wb(c);h.unshift(this.m);return g.i.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof db?a.a:a.toString();if("hasOwnProperty"==b)return a.has.apply(a,wb(c))}if(a instanceof tb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Jb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");
var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Kb=function(a){var b=Da(this.m),c=gb(b,Array.prototype.slice.apply(arguments));if(c instanceof ta)return c},Lb=function(){return Ab},Mb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof ta)return d}},Nb=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);Ca(b,d,e,
!0)}}},Ob=function(){return Bb},Pb=function(a,b,c){var d=new k;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Qb=function(a,b){return this.a(a)/this.a(b)},Rb=function(a,b){a=this.a(a);b=this.a(b);var c=a instanceof tb,d=b instanceof tb;return c||d?c&&d?a.oa==b.oa:!1:a==b},Sb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Tb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=gb(e,c);if(f instanceof ta){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof ib||b instanceof k||b instanceof db)for(var g=b.uc(),h=g.length(),l=0;l<h;l++){var m=a(g.get(l)),n=gb(m,c);if(n instanceof ta){if("break"==n.a)break;if("return"==n.a)return n}}}
var Ub=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Tb(function(e){d.set(a,e);return d},b,c)},Wb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Tb(function(e){var f=Da(d);Ca(f,a,e,!0);return f},b,c)},Xb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Tb(function(e){var f=Da(d);f.add(a,e);return f},b,c)},Yb=function(a,b,c,d){function e(n,r){for(var t=0;t<f.length();t++){var q=f.get(t);r.add(q,n.get(q))}}var f=this.a(a);if(!(f instanceof
k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.m;d=this.a(d);var h=Da(g);for(e(g,h);fb(h,b);){var l=gb(h,d);if(l instanceof ta){if("break"===l.a)break;if("return"===l.a)return l}var m=Da(g);e(h,m);fb(m,c);h=m}},Zb=function(a){return this.m.get(this.a(a))},$b=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof ib||a instanceof k||a instanceof db)c=a.get(b);else if("string"==
typeof a)"length"==b?c=a.length:va(b)&&(c=a[b]);else if(a instanceof tb)return;return c},ac=function(a,b){return this.a(a)>this.a(b)},bc=function(a,b){return this.a(a)>=this.a(b)},cc=function(a,b){a=this.a(a);b=this.a(b);a instanceof tb&&(a=a.oa);b instanceof tb&&(b=b.oa);return a===b},ec=function(a,b){return!cc.call(this,a,b)},fc=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof ta)return e},gc=function(a,b){return this.a(a)<this.a(b)},hc=function(a,
b){return this.a(a)<=this.a(b)},ic=function(a,b){return this.a(a)%this.a(b)},jc=function(a,b){return this.a(a)*this.a(b)},kc=function(a){return-this.a(a)},lc=function(a){return!this.a(a)},mc=function(a,b){return!Rb.call(this,a,b)},nc=function(){return null},oc=function(a,b){return this.a(a)||this.a(b)},pc=function(a,b){var c=this.a(a);this.a(b);return c},qc=function(a){return this.a(a)},rc=function(a){return Array.prototype.slice.apply(arguments)},sc=function(a){return new ta("return",this.a(a))},
tc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof db||a instanceof k||a instanceof ib)&&a.set(b,c);return c},uc=function(a,b){return this.a(a)-this.a(b)},vc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ha(d)||!Ha(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.a(d[h]))if(f=this.a(e[h]),f instanceof ta){var l=f.a;if("break"==
l)return;if("return"==l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof ta&&("return"==f.a||"continue"==f.a)))return f},wc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},xc=function(a){a=this.a(a);return a instanceof db?"function":typeof a},yc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},zc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.F(f),e instanceof ta)){if("break"==
e.a)return;if("return"==e.a)return e}for(;this.a(a);){e=this.F(f);if(e instanceof ta){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},Ac=function(a){return~Number(this.a(a))},Bc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},Cc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},Dc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},Ec=function(a,b){return Number(this.a(a))&Number(this.a(b))},Fc=function(a,b){return Number(this.a(a))^Number(this.a(b))},Gc=function(a,
b){return Number(this.a(a))|Number(this.a(b))};var Ic=function(){this.a=new rb;Hc(this)};Ic.prototype.oc=function(a){return Jc(this.a.i(a))};
var Lc=function(a,b){return Jc(Kc.a.B(a,b))},Hc=function(a){var b=function(d,e){var f=a.a,g=String(e);qb.hasOwnProperty(d)&&sb(f,g||d,qb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){sb(a.a,String(d),e)};c(0,Cb);c(1,Hb);c(2,Ib);c(3,Jb);c(53,Kb);c(4,Lb);c(5,Mb);c(52,Nb);c(6,Ob);c(9,Mb);c(50,Pb);c(10,Qb);c(12,Rb);c(13,Sb);c(47,Ub);c(54,Wb);c(55,Xb);c(63,Yb);c(15,Zb);c(16,$b);c(17,$b);c(18,ac);c(19,bc);c(20,cc);c(21,ec);c(22,fc);c(23,gc);c(24,hc);c(25,ic);
c(26,jc);c(27,kc);c(28,lc);c(29,mc);c(45,nc);c(30,oc);c(32,pc);c(33,pc);c(34,qc);c(35,qc);c(46,rc);c(36,sc);c(43,tc);c(37,uc);c(38,vc);c(39,wc);c(40,xc);c(41,yc);c(42,zc);c(58,Ac);c(57,Bc);c(60,Cc);c(61,Dc);c(56,Ec);c(62,Fc);c(59,Gc)},Nc=function(){var a=Kc,b=Mc();sb(a.a,"require",b)},Oc=function(a,b){a.a.a.P=b};function Jc(a){if(a instanceof ta||a instanceof db||a instanceof k||a instanceof ib||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var Pc=[],Qc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Rc=function(a){return Qc[a]},Sc=/[\x00\x22\x26\x27\x3c\x3e]/g;Pc[3]=function(a){return String(a).replace(Sc,Rc)};var Wc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Xc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Yc=function(a){return Xc[a]};Pc[7]=function(a){return String(a).replace(Wc,Yc)};
Pc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Wc,Yc)+"'"}};var Zc=/[\x00\x08-\x0d\x22\x24\x26-\/\x3a\x3c-\x3f\x5b-\x5e\x7b-\x7d\x85\u2028\u2029]/g;Pc[9]=function(a){return String(a).replace(Zc,Yc)};var dd=/['()]/g,ed=function(a){return"%"+a.charCodeAt(0).toString(16)};Pc[12]=function(a){var b=
encodeURIComponent(String(a));dd.lastIndex=0;return dd.test(b)?b.replace(dd,ed):b};var fd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,gd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},jd=function(a){return gd[a]};Pc[16]=function(a){return a};var ld;
var md=[],nd=[],od=[],pd=[],qd=[],rd={},sd,td,ud,vd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},wd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=rd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.Je&&b.Je(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):ld(c,e,b)},yd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=xd(a[e],b,c));return d},zd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=rd[b];return c?c.priorityOverride||0:0},xd=function(a,b,c){if(Ha(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(xd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=md[f];if(!g||b.qd(g))return;c[f]=!0;try{var h=yd(g,b,c);h.vtp_gtmEventId=b.id;d=wd(h,b);ud&&(d=ud.Fg(d,h))}catch(y){b.We&&b.We(y,Number(f)),
d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[xd(a[l],b,c)]=xd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=xd(a[n],b,c);td&&(m=m||r===td.Zb);d.push(r)}return td&&m?td.Ig(d):d.join("");case "escape":d=xd(a[1],b,c);if(td&&Ha(a[1])&&"macro"===a[1][0]&&td.ih(a))return td.Dh(d);d=String(d);for(var t=2;t<a.length;t++)Pc[a[t]]&&(d=Pc[a[t]](d));return d;case "tag":var q=a[1];if(!pd[q])throw Error("Unable to resolve tag reference "+q+".");return d=
{Pe:a[2],index:q};case "zb":var v={arg0:a[2],arg1:a[3],ignore_case:a[5]};v["function"]=a[1];var u=Ad(v,b,c),w=!!a[4];return w||2!==u?w!==(1===u):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Ad=function(a,b,c){try{return sd(yd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Bd=function(){var a=function(b){return{toString:function(){return b}}};return{kf:a("consent"),Pd:a("convert_case_to"),Qd:a("convert_false_to"),Rd:a("convert_null_to"),Sd:a("convert_true_to"),Td:a("convert_undefined_to"),fi:a("debug_mode_metadata"),Ga:a("function"),Wf:a("instance_name"),Yf:a("live_only"),Zf:a("malware_disabled"),$f:a("metadata"),ii:a("original_vendor_template_id"),bg:a("once_per_event"),ze:a("once_per_load"),De:a("setup_tags"),Ee:a("tag_id"),Fe:a("teardown_tags")}}();var Cd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(Cd,Error);function Dd(a,b){if(Ha(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Dd(a[c],b[c])}};var Ed=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(Ed,Error);var Fd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var Hd=function(){return function(a,b){a instanceof Ed||(a=new Ed(a,Gd));b&&a.a.push(b);throw a;}};function Gd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ga(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Id=null,Ld=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Id=Jd(a);for(var e=0;e<nd.length;e++){var f=nd[e],g=Kd(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<pd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Kd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Id(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=Id(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Jd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Ad(od[c],a));return b[c]}};var Md={Fg:function(a,b){b[Bd.Pd]&&"string"===typeof a&&(a=1==b[Bd.Pd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Bd.Rd)&&null===a&&(a=b[Bd.Rd]);b.hasOwnProperty(Bd.Td)&&void 0===a&&(a=b[Bd.Td]);b.hasOwnProperty(Bd.Sd)&&!0===a&&(a=b[Bd.Sd]);b.hasOwnProperty(Bd.Qd)&&!1===a&&(a=b[Bd.Qd]);return a}};var Nd=function(){this.a={}};function Od(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Cd(c,d,g);}}function Pd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Od(e,b,d,g);Od(f,b,d,g)}}}};var Td=function(a){var b=Qd.C,c=this;this.i=new Nd;this.a={};var d={},e=Pd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Na(a,function(f,g){var h={};Na(g,function(l,m){var n=Rd(l,m);h[l]=n.assert;d[l]||(d[l]=n.K)});c.a[f]=function(l,m){var n=h[l];if(!n)throw Sd(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);n.apply(void 0,r);e.apply(void 0,r)}})},Vd=function(a){return Ud.a[a]||
function(){}};function Rd(a,b){var c=vd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Sd;try{return wd(c)}catch(d){return{assert:function(e){throw new Cd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Sd(a,b,c){return new Cd(a,b,c)};var Wd=!1;var Xd={};Xd.ai=Qa('');Xd.Og=Qa('');var Yd=Wd,Zd=Xd.Og,$d=Xd.ai;
var oe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},pe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;oe(b,"/*")&&(b=b.slice(0,-2));oe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},qe=/^[a-z0-9-]+$/i,re=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
te=function(a,b){var c;if(!(c=!se(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!qe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!re.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),r=n.slice(0,n.indexOf("/")),t;var q=l.hostname,v=r;if(0!==v.indexOf("*."))t=q.toLowerCase()===v.toLowerCase();else{v=v.slice(2);var u=q.toLowerCase().indexOf(v.toLowerCase());t=-1===u?!1:q.length===v.length?
!0:q.length!==v.length+u?!1:"."===q[u-1]}if(t){var w=n.slice(n.indexOf("/"));h=pe(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},se=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var we=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,xe={Fn:"function",DustMap:"Object",List:"Array"},F=function(a,b,c){for(var d=0;d<b.length;d++){var e=we.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var n=typeof l;l instanceof db?n="Fn":l instanceof k?n="List":l instanceof ib?n="DustMap":
l instanceof tb&&(n="OpaqueValue");if(n!=h)throw Error("Error in "+a+". Argument "+f+" has type "+n+", which does not match required type "+(xe[h]||h)+".");}}};function ye(a){return""+a}
function ze(a,b){var c=[];return c};var Ae=function(a,b){var c=new db(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},Be=function(a,b){var c=new ib,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Fa(e)?c.set(d,Ae(a+"_"+d,e)):(Ga(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var Ce=function(a,b){F(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new ib;return d=Be("AssertApiSubject",c)};var De=function(a,b){F(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new ib;return d=Be("AssertThatSubject",c)};function Ee(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(ub(arguments[d],c));return vb(a.apply(null,b))}}var Ge=function(){for(var a=Math,b=Fe,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Ee(a[e].bind(a)))}return c};var He=function(a){var b;return b};var Ie=function(a){var b;return b};var Je=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var Ke=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var Le=function(a){F(this.i.a,["message:?string"],arguments);};var Me=function(a,b){F(this.i.a,["min:!number","max:!number"],arguments);return Ka(a,b)};var Ne=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.qg.apply(null,Array.prototype.slice.call(arguments,1))};var Oe=function(){Ne(this,"read_container_data");var a=new ib;a.set("containerId",'GTM-KFL5KMX');a.set("version",'392');a.set("environmentName",'');a.set("debugMode",Yd);a.set("previewMode",$d);a.set("environmentMode",Zd);a.m=!0;return a};var Pe=function(){return(new Date).getTime()};var Qe=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof db)return"function";if(a instanceof tb){a=a.oa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var Re=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Yd||$d)&&a.call(this,e.message)}}}return{parse:b(function(c){return vb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(ub(c))})}};var Se=function(a){return Pa(ub(a,this.m))};var Te=function(a){return Number(ub(a,this.m))};var Ue=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ve=function(a,b,c){var d=null,e=!1;return e?d:null};var Fe="floor ceil round max min abs pow sqrt".split(" ");var We=function(){var a={};return{Wg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Uh:function(b,c){a[b]=c},reset:function(){a={}}}},Xe=function(a,b){F(this.i.a,["apiName:!string","mock:?*"],arguments);};var Ye=function(){this.a={};this.i={}};Ye.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
Ye.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:Fa(b)?Ae(a,b):Be(a,b)};
var $e=function(a){var b=Ze;if(a.i.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function which already exists: getUserAgent.";if(a.a.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function with an existing API name: getUserAgent.";a.i.getUserAgent=Fa(b)?Ae("getUserAgent",b):Be("getUserAgent",b)};function af(){var a={};return a};var H={ub:"_ee",ad:"_syn",li:"_uei",ji:"_pci",Nc:"event_callback",Vb:"event_timeout",ka:"gtag.config"};H.fa="allow_ad_personalization_signals";H.Uc="restricted_data_processing";H.gb="allow_google_signals";H.ia="cookie_expires";H.Ub="cookie_update";H.qb="session_duration";H.na="user_properties";H.Fa="transport_url";H.N="ads_data_redaction";H.o="ad_storage";
H.M="analytics_storage";H.lf="region";H.nf="wait_for_update";H.se=[H.fa,H.gb,H.Ub];H.te=[H.ia,H.Vb,H.qb];var bf={},cf=function(a,b){bf[a]=bf[a]||[];bf[a][b]=!0},df=function(a){for(var b=[],c=bf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var I=function(a){cf("GTM",a)};function ef(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ef);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}pa(ef,Error);ef.prototype.name="CustomError";var ff=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");ef.call(this,d+c[e])};pa(ff,ef);ff.prototype.name="AssertionError";var gf=function(a,b){throw new ff("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var hf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},jf=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var kf;var lf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var mf;a:{var nf=ma.navigator;if(nf){var of=nf.userAgent;if(of){mf=of;break a}}mf=""}var pf=function(a){return-1!=mf.indexOf(a)};var rf=function(a,b,c){this.a=c===qf?a:""};rf.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var sf=function(a){if(a instanceof rf&&a.constructor===rf)return a.a;var b=typeof a;gf("expected object of type SafeHtml, got '"+a+"' of type "+("object"!=b?b:a?Array.isArray(a)?"array":b:"null"));return"type_error:SafeHtml"},qf={},tf=new rf(ma.trustedTypes&&ma.trustedTypes.emptyHTML||"",0,qf);var uf={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},vf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=sf(tf);return!c.parentElement}),wf=function(a,b){if(a.tagName&&uf[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(vf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=sf(b)};var xf=function(a){var b;if(void 0===kf){var c=null,d=ma.trustedTypes;if(d&&d.createPolicy){try{c=d.createPolicy("goog#html",{createHTML:sa,createScript:sa,createScriptURL:sa})}catch(f){ma.console&&ma.console.error(f.message)}kf=c}else kf=c}var e=(b=kf)?b.createHTML(a):a;return new rf(e,null,qf)};var B=window,M=document,yf=navigator,zf=M.currentScript&&M.currentScript.src,Af=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},Bf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Cf=function(a,b,c){var d=M.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Bf(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ma.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var h=g.nonce||g.getAttribute("nonce");if(h&&na.test(h)){oa=h;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=M.getElementsByTagName("script")[0]||M.body||M.head;l.parentNode.insertBefore(d,l);return d},Df=function(){if(zf){var a=zf.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Ef=function(a,b){var c=M.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=M.body&&M.body.lastChild||
M.body||M.head;d.parentNode.insertBefore(c,d);Bf(c,b);void 0!==a&&(c.src=a);return c},Ff=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Gf=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Hf=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){B.setTimeout(a,0)},If=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Jf=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Kf=function(a){var b=M.createElement("div");wf(b,xf("A<div>"+a+"</div>"));b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Lf=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},Mf=function(a){yf.sendBeacon&&yf.sendBeacon(a)||Ff(a)},Nf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Of={},Pf=function(a){return void 0==Of[a]?!1:Of[a]};var Qf=[];function Rf(){var a=Af("google_tag_data",{});a.ics||(a.ics={entries:{},set:Sf,update:Tf,addListener:Uf,notifyListeners:Vf,active:!1});return a.ics}
function Sf(a,b,c,d,e,f){var g=Rf();g.active=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,n=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?m!==e:!n&&!m)){var r=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:r};h[a]=t;r&&B.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,Wf(a),Vf(),cf("TAGGING",2))},f)}}}
function Tf(a,b){var c=Rf();c.active=!0;if(void 0!=b){var d=Xf(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Xf(a);f.quiet?(f.quiet=!1,Wf(a)):g!==d&&Wf(a)}}function Uf(a,b){Qf.push({Le:a,Rg:b})}function Wf(a){for(var b=0;b<Qf.length;++b){var c=Qf[b];Ha(c.Le)&&-1!==c.Le.indexOf(a)&&(c.$e=!0)}}function Vf(a){for(var b=0;b<Qf.length;++b){var c=Qf[b];if(c.$e){c.$e=!1;try{c.Rg({Ke:a})}catch(d){}}}}
var Xf=function(a){var b=Rf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Yf=function(a){return!(Rf().entries[a]||{}).quiet},Zf=function(){return Pf("gtag_cs_api")?Rf().active:!1},$f=function(a,b){Rf().addListener(a,b)},ag=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Yf(b[e]))return!0;return!1}if(c()){var d=!1;$f(b,function(e){d||c()||(d=!0,a(e))})}else a({})},bg=function(a,b){if(!1===Xf(b)){var c=!1;$f([b],function(d){!c&&Xf(b)&&(a(d),c=!0)})}};var cg=[H.o,H.M],dg=function(a){var b=a[H.lf];b&&I(40);var c=a[H.nf];c&&I(41);for(var d=Ha(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<cg.length;f++){var g=cg[f],h=a[cg[f]],l=d[e];Rf().set(g,h,l,"BR","BR-SP",c)}},eg=function(a,b){for(var c=0;c<cg.length;c++){var d=cg[c],e=a[cg[c]];Rf().update(d,e)}Rf().notifyListeners(b)},fg=function(a){var b=Xf(a);return void 0!=b?b:!0},gg=function(){for(var a=[],b=0;b<cg.length;b++){var c=Xf(cg[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},hg=function(a,b){ag(a,b)};var jg=function(a){return ig?M.querySelectorAll(a):null},kg=function(a,b){if(!ig)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!M.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},lg=!1;if(M.querySelectorAll)try{var mg=M.querySelectorAll(":root");mg&&1==mg.length&&mg[0]==M.documentElement&&(lg=!0)}catch(a){}var ig=lg;var Qd={},Q=null,Ag=Math.random();Qd.C="GTM-KFL5KMX";Qd.cc="9n1";Qd.hi="";var Bg={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Cg={__paused:!0,__tg:!0},Dg;for(Dg in Bg)Bg.hasOwnProperty(Dg)&&(Cg[Dg]=!0);var Eg="www.googletagmanager.com/gtm.js";
var Fg=Eg,Gg=Qa(""),Hg=null,Ig=null,Jg="//www.googletagmanager.com/a?id="+Qd.C+"&cv=392",Kg={},Lg={},Mg=function(){var a=Q.sequence||1;Q.sequence=a+1;return a};
var Ng=function(){return"&tc="+pd.filter(function(a){return a}).length},Qg=function(){2022<=Og().length&&Pg()},Sg=function(){Rg||(Rg=B.setTimeout(Pg,500))},Pg=function(){Rg&&(B.clearTimeout(Rg),Rg=void 0);void 0===Tg||Ug[Tg]&&!Vg&&!Wg||(Xg[Tg]||Yg.kh()||0>=Zg--?(I(1),Xg[Tg]=!0):(Yg.Kh(),Ff(Og()),Ug[Tg]=!0,$g=ah=bh=Wg=Vg=""))},Og=function(){var a=Tg;if(void 0===a)return"";var b=df("GTM"),c=df("TAGGING");return[ch,Ug[a]?"":"&es=1",dh[a],b?"&u="+b:"",c?"&ut="+c:"",Ng(),Vg,Wg,bh?bh:"",ah,$g,"&z=0"].join("")},
eh=function(){return[Jg,"&v=3&t=t","&pid="+Ka(),"&rv="+Qd.cc].join("")},fh="0.005000">Math.random(),ch=eh(),gh=function(){ch=eh()},Ug={},Vg="",Wg="",$g="",ah="",bh="",Tg=void 0,dh={},Xg={},Rg=void 0,Yg=function(a,b){var c=0,d=0;return{kh:function(){if(c<a)return!1;Ta()-d>=b&&(c=0);return c>=a},Kh:function(){Ta()-d>=b&&(c=0);c++;d=Ta()}}}(2,1E3),Zg=1E3,hh=function(a,b,c){if(fh&&!Xg[a]&&b){a!==Tg&&(Pg(),Tg=a);var d,e=String(b[Bd.Ga]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;Vg=Vg?Vg+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(rd[g]?"1":"2")+d;$g=$g?$g+"."+h:"&ti="+h;Sg();Qg()}},ih=function(a,b,c){if(fh&&!Xg[a]){a!==Tg&&(Pg(),Tg=a);var d=c+b;Wg=Wg?Wg+"."+d:"&epr="+d;Sg();Qg()}},jh=function(a,b,c){};
var kh={},lh=new La,mh={},nh={},qh={name:"dataLayer",set:function(a,b){E(bb(a,b),mh);oh()},get:function(a){return ph(a,2)},reset:function(){lh=new La;mh={};oh()}},ph=function(a,b){if(2!=b){var c=lh.get(a);fh&&c!==rh(a.split("."))&&I(5);return c}return rh(a.split("."))},rh=function(a){for(var b=mh,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},sh=function(a,b){nh.hasOwnProperty(a)||(lh.set(a,b),E(bb(a,b),mh),oh())},oh=function(a){Na(nh,function(b,c){lh.set(b,c);
E(bb(b,void 0),mh);E(bb(b,c),mh);a&&delete nh[b]})},th=function(a,b,c){kh[a]=kh[a]||{};var d=1!==c?rh(b.split(".")):lh.get(b);"array"===lb(d)||"object"===lb(d)?kh[a][b]=E(d):kh[a][b]=d},uh=function(a,b){if(kh[a])return kh[a][b]},vh=function(a,b){kh[a]&&delete kh[a][b]};var yh={},zh=function(a,b){if(B._gtmexpgrp&&B._gtmexpgrp.hasOwnProperty(a))return B._gtmexpgrp[a];void 0===yh[a]&&(yh[a]=Math.floor(Math.random()*b));return yh[a]};var Ah=/:[0-9]+$/,Bh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Eh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ch(a.protocol)||Ch(B.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
B.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||B.location.hostname).replace(Ah,"").toLowerCase());return Dh(a,b,c,d,e)},Dh=function(a,b,c,d,e){var f,g=Ch(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Fh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Ah,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||cf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ia(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Bh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ch=function(a){return a?a.replace(":",
"").toLowerCase():""},Fh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Gh=function(a){var b=M.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||cf("TAGGING",1),c="/"+c);var d=b.hostname.replace(Ah,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Hh=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Gh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Ih(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Lh=function(a,b,c,d){return Jh(d)?Ih(a,String(b||document.cookie),c):[]},Oh=function(a,b,c,d,e){if(Jh(e)){var f=Mh(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Nh(f,function(g){return g.mc},b);if(1===f.length)return f[0].id;f=Nh(f,function(g){return g.Eb},c);return f[0]?f[0].id:void 0}}};function Ph(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Lh(b,f,!1,d).indexOf(c)}
var Th=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!Jh(c.Ja))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Qh(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.th);g=e(g,"samesite",
c.Oh);c.Rh&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var n=Rh(),r=void 0,t=!1,q=0;q<n.length;++q){var v="none"!==n[q]?n[q]:void 0,u=e(g,"domain",v);u=f(u,c.flags);try{d&&d(a,h)}catch(w){r=w;continue}t=!0;if(!Sh(v,c.path)&&Ph(u,a,b,c.Ja))return 0}if(r&&!t)throw r;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return Sh(m,c.path)?1:Ph(g,a,b,c.Ja)?0:1},Uh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Th(a,b,c)};
function Nh(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function Mh(a,b,c){for(var d=[],e=Lh(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),mc:1*l[0]||1,Eb:1*l[1]||1}))}}return d}
var Qh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Vh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Wh=/(^|\.)doubleclick\.net$/i,Sh=function(a,b){return Wh.test(document.location.hostname)||"/"===b&&Vh.test(a)},Rh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Wh.test(e)||Vh.test(e)||a.push("none");
return a},Jh=function(a){if(!Pf("gtag_cs_api")||!a||!Zf())return!0;if(!Yf(a))return!1;var b=Xf(a);return null==b?!0:!!b};var Xh=function(){for(var a=yf.userAgent+(M.cookie||"")+(M.referrer||""),b=a.length,c=B.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ta()/1E3)].join(".")},$h=function(a,b,c,d,e){var f=Yh(b);return Oh(a,f,Zh(c),d,e)},ai=function(a,b,c,d){var e=""+Yh(c),f=Zh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Yh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Zh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function bi(a,b,c){var d,e=a.Db;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ta())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var ci=["1"],di={},hi=function(a){var b=ei(a.prefix);di[b]||fi(b,a.path,a.domain)||(gi(b,Xh(),a),fi(b,a.path,a.domain))};function gi(a,b,c){var d=ai(b,"1",c.domain,c.path),e=bi(c);e.Ja="ad_storage";Uh(a,d,e)}function fi(a,b,c){var d=$h(a,b,c,ci,"ad_storage");d&&(di[a]=d);return d}function ei(a){return(a||"_gcl")+"_au"};function ii(){for(var a=ji,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function ki(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var ji,li;function mi(a){ji=ji||ki();li=li||ii();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|h>>6,r=h&63;e||(r=64,d||(n=64));b.push(ji[l],ji[m],ji[n],ji[r])}return b.join("")}
function ni(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=li[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}ji=ji||ki();li=li||ii();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var oi;var si=function(){var a=pi,b=qi,c=ri(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Gf(M,"mousedown",d);Gf(M,"keyup",d);Gf(M,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},ti=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};ri().decorators.push(f)},ui=function(a,b,c){for(var d=ri().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==M.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[r])||n&&0<=l[r].indexOf(m)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&Xa(e,g.callback())}}return e},ri=function(){var a=Af("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var vi=/(.*?)\*(.*?)\*(.*)/,wi=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,xi=/^(?:www\.|m\.|amp\.)+/,yi=/([^?#]+)(\?[^#]*)?(#.*)?/;function zi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Bi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(mi(String(d))))}var e=b.join("*");return["1",Ai(e),e].join("*")},Ai=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=oi)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}oi=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^oi[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Di=function(){return function(a){var b=Gh(B.location.href),c=b.search.replace("?",""),d=Bh(c,"_gl",!1,!0)||"";a.query=Ci(d)||{};var e=Eh(b,"fragment").match(zi("_gl"));a.fragment=Ci(e&&e[3]||"")||{}}},Ei=function(a){var b=Di(),c=ri();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Xa(d,e.query),a&&Xa(d,e.fragment));return d},
Ci=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=vi.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===Ai(h,n)){l=!0;break a}l=!1}if(l){for(var r={},t=h?h.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=ni(t[q+1]);return r}}}}catch(v){}};
function Fi(a,b,c,d){function e(n){var r=n,t=zi(a).exec(r),q=r;if(t){var v=t[2],u=t[4];q=t[1];u&&(q=q+v+u)}n=q;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=yi.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function Gi(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=ui(b,1,c),e=ui(b,2,c),f=ui(b,3,c);if(Ya(d)){var g=Bi(d);c?Hi("_gl",g,a):Ii("_gl",g,a,!1)}if(!c&&Ya(e)){var h=Bi(e);Ii("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Ii(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Hi(m,n,r);break a}}"string"==typeof r&&Fi(m,n,r,void 0)}}
function Ii(a,b,c,d){if(c.href){var e=Fi(a,b,c.href,void 0===d?!1:d);lf.test(e)&&(c.href=e)}}
function Hi(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=M.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Fi(a,b,c.action);lf.test(m)&&(c.action=m)}}}
var pi=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Gi(e,e.hostname)}}catch(g){}},qi=function(a){try{if(a.action){var b=Eh(Gh(a.action),"host");Gi(a,b)}}catch(c){}},Ji=function(a,b,c,d){si();ti(a,b,"fragment"===c?2:1,!!d,!1)},Ki=function(a,b){si();ti(a,[Dh(B.location,"host",!0)],b,!0,!0)},Li=function(){var a=M.location.hostname,b=wi.exec(M.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(xi,""),l=e.replace(xi,""),m;if(!(m=h===l)){var n="."+l;m=h.substring(h.length-n.length,h.length)===n}return m},Mi=function(a,b){return!1===a?!1:a||b||Li()};var Ni=/^\w+$/,Oi=/^[\w-]+$/,Pi=/^~?[\w-]+$/,Qi={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Ri=function(){if(!Pf("gtag_cs_api")||!Zf())return!0;var a=Xf("ad_storage");return null==a?!0:!!a},Si=function(a,b){Yf("ad_storage")?Ri()?a():bg(a,"ad_storage"):b?cf("TAGGING",3):ag(function(){Si(a,!0)},["ad_storage"])},Vi=function(a){var b=[];if(!M.cookie)return b;var c=Lh(a,M.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Ti(c[d]);e&&-1===Ia(b,e)&&b.push(e)}return Ui(b)};
function Wi(a){return a&&"string"==typeof a&&a.match(Ni)?a:"_gcl"}
var Yi=function(){var a=Gh(B.location.href),b=Eh(a,"query",!1,void 0,"gclid"),c=Eh(a,"query",!1,void 0,"gclsrc"),d=Eh(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Bh(e,"gclid",!1,void 0);c=c||Bh(e,"gclsrc",!1,void 0)}return Xi(b,c,d)},Xi=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Oi))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Pf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},$i=function(a){var b=Yi();Si(function(){Zi(b,a)})};
function Zi(a,b,c){function d(l,m){var n=aj(l,e);n&&Uh(n,m,f)}b=b||{};var e=Wi(b.prefix);c=c||Ta();var f=bi(b,c,!0);f.Ja="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.Fi?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var cj=function(a,b){var c=Ei(!0);Si(function(){for(var d=Wi(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Qi[f]){var g=aj(f,d),h=c[g];if(h){var l=Math.min(bj(h),Ta()),m;b:{for(var n=l,r=Lh(g,M.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(bj(r[t])>n){m=!0;break b}m=!1}if(!m){var q=bi(b,l,!0);q.Ja="ad_storage";Uh(g,h,q)}}}}Zi(Xi(c.gclid,c.gclsrc),b)})},aj=function(a,b){var c=Qi[a];if(void 0!==c)return b+c},bj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Ti(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var dj=function(a,b,c,d,e){if(Ha(b)){var f=Wi(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=aj(a[l],f);if(m){var n=Lh(m,M.cookie,void 0,"ad_storage");n.length&&(h[m]=n.sort()[n.length-1])}}return h};Si(function(){Ji(g,b,c,d)})}},Ui=function(a){return a.filter(function(b){return Pi.test(b)})},ej=function(a,b){for(var c=Wi(b.prefix),d={},e=0;e<a.length;e++)Qi[a[e]]&&(d[a[e]]=Qi[a[e]]);Si(function(){Na(d,function(f,g){var h=Lh(c+g,M.cookie,void 0,"ad_storage");if(h.length){var l=h[0],m=bj(l),
n={};n[f]=[Ti(l)];Zi(n,b,m)}})})};function fj(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var gj=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(Zf()){var c=Yi();if(fj(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);Ki(function(){return d},3);Ki(function(){var e={};return e._up="1",e},1)}}},hj=function(){var a;if(Ri()){for(var b=[],c=M.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Jd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].Jd]||(g[b[h].Jd]=[]),g[b[h].Jd].push({timestamp:l[1],Tg:l[2]}))}a=g}else a={};return a};var ij=/^\d+\.fls\.doubleclick\.net$/;function jj(a,b){Yf(H.o)?fg(H.o)?a():bg(a,H.o):b?I(42):hg(function(){jj(a,!0)},[H.o])}function kj(a){var b=Gh(B.location.href),c=Eh(b,"host",!1);if(c&&c.match(ij)){var d=Eh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function lj(a,b,c){if("aw"==a||"dc"==a){var d=kj("gcl"+a);if(d)return d.split(".")}var e=Wi(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!fg(H.o)&&c,g;g=Yi()[a]||[];if(0<g.length)return f?["0"]:g}var h=aj(a,e);return h?Vi(h):[]}
var mj=function(a){var b=kj("gac");if(b)return!fg(H.o)&&a?"0":decodeURIComponent(b);var c=hj(),d=[];Na(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].Tg);g=Ui(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},nj=function(a,b){var c=Yi().dc||[];jj(function(){hi(b);var d=di[ei(b.prefix)],e=!1;if(d&&0<c.length){var f=Q.joined_au=Q.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;Mf(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var m=ei(b.prefix),n=di[m];n&&gi(m,n,b)}})};var oj=/[A-Z]+/,pj=/\s/,qj=function(a){if(p(a)&&(a=Sa(a),!pj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(oj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],D:d}}}}},sj=function(a){for(var b={},c=0;c<a.length;++c){var d=qj(a[c]);d&&(b[d.id]=d)}rj(b);var e=[];Na(b,function(f,g){e.push(g)});return e};
function rj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.D[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var tj=function(){var a=!1;return a};var vj=function(a,b,c,d){return(2===uj()||d||"http:"!=B.location.protocol?a:b)+c},uj=function(){var a=Df(),b;if(1===a)a:{var c=Fg;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=M.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Jj=function(a){return fg(H.o)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Hh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},Kj=function(){var a;if(!(a=Gg)){var b;if(!0===B._gtmdgs)b=!0;else{var c=yf&&yf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Pa("0");return zh(1,100)<d?zh(2,2):-1};var Lj=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Mj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Nj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Oj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Qj=function(a){var b;ph("gtm.allowlist")&&I(52);b||(b=ph("gtm.whitelist"));b&&I(9);
var c=b&&$a(Ra(b),Mj),d;ph("gtm.blocklist")&&I(51);d||(d=ph("gtm.blacklist"));d||(d=ph("tagTypeBlacklist"))&&I(3);d?I(8):d=[];Pj()&&(d=Ra(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ia(Ra(d),"google")&&I(2);var e=
d&&$a(Ra(d),Nj),f={};return function(g){var h=g&&g[Bd.Ga];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Lg[h]||[],m=a(h,l);if(b){var n;if(n=m)a:{if(0>Ia(c,h))if(l&&0<l.length)for(var r=0;r<l.length;r++){if(0>Ia(c,l[r])){I(11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=Ia(e,h);if(q)t=q;else{var v=Ma(e,l||[]);v&&I(10);t=v}}var u=!m||t;u||!(0<=Ia(l,"sandboxedScripts"))||c&&-1!==Ia(c,"sandboxedScripts")||(u=Ma(e,Oj));return f[h]=u}},
Pj=function(){return Lj.test(B.location&&B.location.hostname)};var Rj={active:!0,isAllowed:function(){return!0}},Sj=function(a){var b=Q.zones;return b?b.checkState(Qd.C,a):Rj},Tj=function(a){var b=Q.zones;!b&&a&&(b=Q.zones=a());return b};var Uj=function(){},Vj=function(){};var Wj=!1,Xj=0,Yj=[];function Zj(a){if(!Wj){var b=M.createEventObject,c="complete"==M.readyState,d="interactive"==M.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Wj=!0;for(var e=0;e<Yj.length;e++)N(Yj[e])}Yj.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function ak(){if(!Wj&&140>Xj){Xj++;try{M.documentElement.doScroll("left"),Zj()}catch(a){B.setTimeout(ak,50)}}}var bk=function(a){Wj?a():Yj.push(a)};var ck={},dk={},ek=function(a,b,c,d){if(!dk[a]||Cg[b]||"__zone"===b)return-1;var e={};nb(d)&&(e=E(d,e));e.id=c;e.status="timeout";return dk[a].tags.push(e)-1},fk=function(a,b,c,d){if(dk[a]){var e=dk[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function gk(a){for(var b=ck[a]||[],c=0;c<b.length;c++)b[c]();ck[a]={push:function(d){d(Qd.C,dk[a])}}}
var jk=function(a,b,c){dk[a]={tags:[]};Fa(b)&&hk(a,b);c&&B.setTimeout(function(){return gk(a)},Number(c));return ik(a)},hk=function(a,b){ck[a]=ck[a]||[];ck[a].push(Va(function(){return N(function(){b(Qd.C,dk[a])})}))};function ik(a){var b=0,c=0,d=!1;return{add:function(){c++;return Va(function(){b++;d&&b>=c&&gk(a)})},pg:function(){d=!0;b>=c&&gk(a)}}};var kk=function(){function a(d){return!Ga(d)||0>d?0:d}if(!Q._li&&B.performance&&B.performance.timing){var b=B.performance.timing.navigationStart,c=Ga(qh.get("gtm.start"))?qh.get("gtm.start"):0;Q._li={cst:a(c-b),cbt:a(Ig-b)}}};var ok={},pk=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]},qk=!1;
var uk=function(a){},tk=function(){return B.GoogleAnalyticsObject||"ga"},vk=function(a,b){return function(){var c=pk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};var Ak=function(){return!1},Bk=function(){var a={};return function(b,c,d){}};function Ck(a,b,c,d){var e=pd[a],f=Dk(a,b,c,d);if(!f)return null;var g=xd(e[Bd.De],c,[]);if(g&&g.length){var h=g[0];f=Ck(h.index,{J:f,I:1===h.Pe?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Dk(a,b,c,d){function e(){if(f[Bd.Zf])h();else{var w=yd(f,c,[]);var C=ek(c.id,String(f[Bd.Ga]),Number(f[Bd.Ee]),w[Bd.$f]),A=!1;w.vtp_gtmOnSuccess=function(){if(!A){A=!0;var G=Ta()-D;hh(c.id,pd[a],"5");fk(c.id,C,"success",
G);g()}};w.vtp_gtmOnFailure=function(){if(!A){A=!0;var G=Ta()-D;hh(c.id,pd[a],"6");fk(c.id,C,"failure",G);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;hh(c.id,f,"1");var z=function(){var G=Ta()-D;hh(c.id,f,"7");fk(c.id,C,"exception",G);A||(A=!0,h())};var D=Ta();try{wd(w,c)}catch(G){z(G)}}}var f=pd[a],g=b.J,h=b.I,l=b.terminate;if(c.qd(f))return null;var m=xd(f[Bd.Fe],c,[]);if(m&&m.length){var n=m[0],r=Ck(n.index,{J:g,I:h,terminate:l},c,d);if(!r)return null;g=r;h=2===n.Pe?l:r}if(f[Bd.ze]||f[Bd.bg]){var t=f[Bd.ze]?qd:c.Xh,q=g,v=h;if(!t[a]){e=Va(e);
var u=Ek(a,t,e);g=u.J;h=u.I}return function(){t[a](q,v)}}return e}function Ek(a,b,c){var d=[],e=[];b[a]=Fk(d,e,c);return{J:function(){b[a]=Gk;for(var f=0;f<d.length;f++)d[f]()},I:function(){b[a]=Hk;for(var f=0;f<e.length;f++)e[f]()}}}function Fk(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Gk(a){a()}function Hk(a,b){b()};var Kk=function(a,b,c){for(var d=[],e=0;e<pd.length;e++)if(a[e]){var f=pd[e];var g=c.add();try{var h=Ck(e,{J:g,I:g,terminate:g},b,e);h?d.push({ff:e,af:zd(f),oc:h}):(Ik(e,b),g())}catch(m){g()}}c.pg();d.sort(Jk);for(var l=0;l<d.length;l++)d[l].oc();return 0<d.length};function Jk(a,b){var c,d=b.af,e=a.af;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.ff,h=b.ff;f=g>h?1:g<h?-1:0}return f}
function Ik(a,b){if(!fh)return;var c=function(d){var e=b.qd(pd[d])?"3":"4",f=xd(pd[d][Bd.De],b,[]);f&&f.length&&c(f[0].index);hh(b.id,pd[d],e);var g=xd(pd[d][Bd.Fe],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Lk=!1,Qk=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Lk)return!1;Lk=!0}var d=Sj(b),e=!1;if(!d.active){var f=!0;if("gtm.js"===c){f=!1,e=!0,d=Sj(Number.MAX_SAFE_INTEGER);}if(f)return!1}fh&&!Xg[b]&&Tg!==b&&(Pg(),Tg=b,$g=Vg="",dh[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,Sg());
var g={id:b,name:c,qd:Qj(d.isAllowed),Xh:[],We:function(){I(6)},Je:Mk(b)},h=jk(b,a.eventCallback,a.eventTimeout);Nk(b);var l=Ld(g);e&&(l=Ok(l));var m=Kk(l,g,h);"gtm.js"!==c&&"gtm.sync"!==c||uk(Qd.C);switch(c){case "gtm.init":I(19),m&&I(20)}return Pk(l,
m)};function Mk(a){return function(b){fh&&(xb(b)||jh(a,"input",b))}}function Nk(a){th(a,"event",1);th(a,"ecommerce",1);th(a,"gtm");}
function Ok(a){var b=[];for(var c=0;c<a.length;c++)a[c]&&Bg[String(pd[c][Bd.Ga])]&&(b[c]=!0);return b}function Pk(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&pd[c]&&!Cg[String(pd[c][Bd.Ga])])return!0;return!1}function Rk(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Gh(""+c+b).href}}function Sk(a,b){return Tk()?Rk(a,b):void 0}function Tk(){var a=!1;return a};var Uk=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.J=function(){};this.I=function(){};this.eventId=void 0},Vk=function(a){var b=new Uk;b.eventModel=a;return b},Wk=function(a,b){a.targetConfig=b;return a},Xk=function(a,b){a.containerConfig=b;return a},Yk=function(a,b){a.a=b;return a},Zk=function(a,b){a.globalConfig=b;return a},$k=function(a,b){a.J=b;return a},al=function(a,b){a.I=b;return a};
Uk.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var bl=function(a){function b(e){Na(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Na(c,function(e){d.push(e)});return d};var cl;if(3===Qd.cc.length)cl="g";else{var dl="G";cl=dl}
var el={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:cl,OPT:"o"},fl=function(a){var b=Qd.C.split("-"),c=b[0].toUpperCase(),d=el[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Qd.cc.length){var g="w";f="2"+g}else f="";return f+d+Qd.cc+e};var gl=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var hl=function(){return pf("iPhone")&&!pf("iPod")&&!pf("iPad")};pf("Opera");pf("Trident")||pf("MSIE");pf("Edge");!pf("Gecko")||-1!=mf.toLowerCase().indexOf("webkit")&&!pf("Edge")||pf("Trident")||pf("MSIE")||pf("Edge");-1!=mf.toLowerCase().indexOf("webkit")&&!pf("Edge")&&pf("Mobile");pf("Macintosh");pf("Windows");pf("Linux")||pf("CrOS");var il=ma.navigator||null;il&&(il.appVersion||"").indexOf("X11");pf("Android");hl();pf("iPad");pf("iPod");hl()||pf("iPad")||pf("iPod");mf.toLowerCase().indexOf("kaios");var jl=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var kl=function(){};var ll=function(a,b){this.i=a;this.a=null;this.B={};this.P=0;this.F=void 0===b?500:b;this.m=null};la(ll,kl);var nl=function(a){return"function"===typeof a.i.__tcfapi||null!=ml(a)};
ll.prototype.addEventListener=function(a){var b={},c=jf(function(){return a(b)}),d=0;-1!==this.F&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.F));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=void 0!==b.tcString&&"string"!==typeof b.tcString||void 0!==b.gdprApplies&&"boolean"!==typeof b.gdprApplies||void 0!==b.listenerId&&"number"!==typeof b.listenerId||void 0!==b.addtlConsent&&"string"!==typeof b.addtlConsent?2:b.cmpStatus&&"error"!==b.cmpStatus?
0:3,g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{ol(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),d=0),c()}};ll.prototype.removeEventListener=function(a){a&&a.listenerId&&ol(this,"removeEventListener",null,a.listenerId)};
var ql=function(a,b,c){if(!a.purpose||!a.vendor)return!1;var d=pl(a.vendor.consents,void 0===c?"755":c);return d&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:d&&pl(a.purpose.consents,b)},rl=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));return 0===h?ql(a,b,d):1===h?
a.purpose&&a.vendor?pl(a.purpose.legitimateInterests,b)&&pl(a.vendor.legitimateInterests,void 0===d?"755":d):!1:!0},pl=function(a,b){return!(!a||!a[b])},ol=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(ml(a)){sl(a);var f=++a.P;a.B[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},ml=function(a){if(a.a)return a.a;a.a=jl(a.i,"__tcfapiLocator");return a.a},sl=function(a){a.m||
(a.m=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.B[c.callId](c.returnValue,c.success)}catch(e){}},gl(a.i,a.m))};var tl={1:0,3:0,4:0,7:3,9:3,10:3};function ul(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var vl=ul("",550),wl=ul("",500);function xl(){var a=Q.tcf||{};return Q.tcf=a}
var yl=function(a,b){this.m=a;this.a=b;this.i=Ta();},zl=function(a){},Al=function(a){},Gl=function(){var a=xl(),b=new ll(B,3E3),c=new yl(b,a);if((Bl()?!0===B.gtag_enable_tcf_support:!1!==B.gtag_enable_tcf_support)&&!a.active&&("function"===typeof B.__tcfapi||nl(b))){a.active=!0;a.Fb={};Cl();var d=setTimeout(function(){Dl(a);El(a);d=null},wl);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Dl(a),El(a),zl(c);else{var f;if(!1===e.gdprApplies)f=Fl(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in tl)tl.hasOwnProperty(h)&&("1"===h?g["1"]=!1===e.gdprApplies||"error"===e.cmpStatus||0!==e.internalErrorState||"loaded"===e.cmpStatus&&("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus)?!1===e.gdprApplies||"tcunavailable"===e.tcString?!0:Pf("tcf_restrictions")?rl(e,"1",0):ql(e,"1"):!1:g[h]=rl(e,h,tl[h]));f=g}f&&(a.tcString=e.tcString||"tcempty",a.Fb=f,El(a),zl(c))}}),
Al(c)}catch(e){d&&(clearTimeout(d),d=null),Dl(a),El(a)}}};function Dl(a){a.type="e";a.tcString="tcunavailable";a.Fb=Fl()}function Cl(){var a={};dg((a.ad_storage="denied",a.wait_for_update=vl,a))}var Bl=function(){var a=!1;a=!0;return a};function Fl(){var a={},b;for(b in tl)tl.hasOwnProperty(b)&&(a[b]=!0);return a}function El(a){var b={};eg((b.ad_storage=a.Fb["1"]?"granted":"denied",b))}
var Hl=function(){var a=xl();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Il=function(){var a=xl();return a.active?a.tcString||"":""},Jl=function(a){if(!tl.hasOwnProperty(String(a)))return!0;var b=xl();return b.active&&b.Fb?!!b.Fb[String(a)]:!0};function Kl(a,b,c){function d(r){var t;Q.reported_gclid||(Q.reported_gclid={});t=Q.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var v=[],u=function(A,z){z&&v.push(A+"="+encodeURIComponent(z))},w="https://www.google.com";if(Zf()){var y=fg(H.o);u("gcs",gg());r&&u("gcu","1");u("rnd",n);if((!f||g&&"aw.ds"!==g)&&fg(H.o)){var x=Vi("_gcl_aw");u("gclaw",x.join("."))}u("url",String(B.location).split(/[?#]/)[0]);u("dclid",Ll(b,h));!y&&b&&(w="https://pagead2.googlesyndication.com")}
u("gdpr_consent",Il());"1"===Ei(!1)._up&&u("gtm_up","1");u("gclid",Ll(b,f));u("gclsrc",g);u("gtm",fl(!c));var C=w+"/pagead/landing?"+v.join("&");Mf(C)}}var e=Yi(),f=e.gclid||"",g=e.gclsrc,h=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),m=Zf();if(l||m){var n=""+Xh();m?hg(function(){d();fg(H.o)||bg(function(r){return d(!0,r.Ke)},H.o)},[H.o]):d()}}function Ll(a,b){var c=a&&!fg(H.o);return b&&c?"0":b}var Ml=function(a){if(M.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!B.getComputedStyle)return!0;var c=B.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=B.getComputedStyle(d,
null))}return!1};var Vl=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),Xl=["SCRIPT","IMG","SVG","PATH"];function Yl(a){var b;if(a===M.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=Yl(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
var Zl=function(){var a;var b=[],c=M.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];0<=Xl.indexOf(f.tagName.toUpperCase())||0===f.childElementCount&&b.push(f)}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var g=a,h=g.elements,l=[],m=0;m<h.length;m++){var n=h[m],r=n.textContent;n.value&&(r=n.value);r&&r.match(Vl)&&l.push(n)}for(var t=[],q=10<l.length?"3":g.status,v=0;v<l.length&&10>v;v++){var u=l[v];t.push({querySelector:Yl(u),tagName:u.tagName,
isVisible:!Ml(u),type:1})}return{elements:t,status:q}};
var im=function(a){return!(void 0===a||null===a||0===(a+"").length)},jm=function(a,b){var c;if(2===b.aa)return a("ord",Ka(1E11,1E13)),!0;if(3===b.aa)return a("ord","1"),a("num",Ka(1E11,1E13)),!0;if(4===b.aa)return im(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.aa)c="1";else if(6===b.aa)c=b.Ed;else return!1;im(c)&&a("qty",c);im(b.jc)&&a("cost",b.jc);im(b.transactionId)&&a("ord",b.transactionId);return!0},lm=function(a,b,c){function d(x,C,A){n.hasOwnProperty(x)||(C=String(C),m.push(";"+x+"="+(A?
C:km(C))))}var e=a.jd,f=a.Hd,g=a.protocol;g+=f?"//"+e+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";var h=";",l=!fg(H.o)&&a.Gb;l&&(g="https://ade.googlesyndication.com/ddm/activity",h="/",f=!1);var m=[h,"src="+km(e),";type="+km(a.md),";cat="+km(a.xb)],n=a.Kg||{};Na(n,function(x,C){m.push(";"+km(x)+"="+km(C+""))});if(jm(d,a)){im(a.Fc)&&d("u",a.Fc);im(a.Ec)&&d("tran",a.Ec);d("gtm",fl());Zf()&&(d("gcs",gg()),c&&d("gcu","1"));(function(x,C){C&&
d(x,C)})("gdpr_consent",Il());"1"===Ei(!1)._up&&d("gtm_up","1");!1===a.mg&&d("npa","1");if(a.hd){var r=void 0===a.Gb?!0:!!a.Gb,t=lj("dc",a.Ta,r);t&&t.length&&d("gcldc",t.join("."));var q=lj("aw",a.Ta,r);q&&q.length&&d("gclaw",q.join("."));var v=mj(r);v&&d("gac",v);hi({prefix:a.Ta,Db:a.Hg,domain:a.Gg,flags:a.ri});var u=di[ei(a.Ta)];u&&d("auiddc",u)}im(a.Ad)&&d("prd",a.Ad,!0);Na(a.Ld,function(x,C){d(x,C)});m.push(b||"");if(im(a.wc)){var w=a.wc||"";l&&(w=Hh(w));
d("~oref",w)}var y=g+m.join("")+"?";f?Ef(y,a.J):Ff(y,a.J,a.I)}else N(a.I)},km=encodeURIComponent,mm=function(a,b){Zf()?hg(function(){lm(a,b);fg(H.o)||bg(function(){lm(a,b,!0)},H.o)},[H.o]):lm(a,b)};var Hm=function(){var a=!0;Jl(7)&&Jl(9)&&Jl(10)||(a=!1);var b=!0;b=!1;b&&!Gm()&&(a=!1);return a},Gm=function(){var a=!0;Jl(3)&&Jl(4)||(a=!1);return a};function an(){var a=Q;return a.gcq=a.gcq||new bn}
var cn=function(a,b,c){an().register(a,b,c)},dn=function(a,b,c,d){an().push("event",[b,a],c,d)},en=function(a,b){an().push("config",[a],b)},fn=function(a,b,c){an().push("get",[a,b],c)},gn={},hn=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},jn=function(a,b,c,d,e){this.type=a;this.m=b;this.ca=c||"";this.a=d;this.i=e},bn=function(){this.m={};this.i={};this.a=[]},kn=function(a,b){var c=qj(b);return a.m[c.containerId]=a.m[c.containerId]||new hn},
ln=function(a,b,c){if(b){var d=qj(b);if(d&&1===kn(a,b).status){kn(a,b).status=2;var e={};fh&&(e.timeoutId=B.setTimeout(function(){I(38);Sg()},3E3));a.push("require",[e],d.containerId);gn[d.containerId]=Ta();if(tj()){}else{var g="/gtag/js?id="+
encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=B.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Sk(c,g)||h;Cf(l)}}}},mn=function(a,b,c,d){if(d.ca){var e=kn(a,d.ca),f=e.m;if(f){var g=E(c),h=E(e.targetConfig[d.ca]),l=E(e.containerConfig),m=E(e.i),n=E(a.i),r=ph("gtm.uniqueEventId"),t=qj(d.ca).prefix,q=al($k(Zk(Yk(Xk(Wk(Vk(g),h),l),m),n),function(){ih(r,t,"2");}),function(){
ih(r,t,"3");});try{ih(r,t,"1");f(d.ca,b,d.m,q)}catch(v){ih(r,t,"4");}}}};
bn.prototype.register=function(a,b,c){if(3!==kn(this,a).status){kn(this,a).m=b;kn(this,a).status=3;c&&(kn(this,a).i=c);var d=qj(a),e=gn[d.containerId];if(void 0!==e){var f=Q[d.containerId].bootstrap,g=d.prefix.toUpperCase();Q[d.containerId]._spx&&(g=g.toLowerCase());var h=ph("gtm.uniqueEventId"),l=g,m=Ta()-f;if(fh&&!Xg[h]){h!==Tg&&(Pg(),Tg=h);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);ah=ah?ah+","+n:"&cl="+n}delete gn[d.containerId]}this.flush()}};
bn.prototype.push=function(a,b,c,d){var e=Math.floor(Ta()/1E3);ln(this,c,b[0][H.Fa]||this.i[H.Fa]);this.a.push(new jn(a,e,c,b,d));d||this.flush()};
bn.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==kn(this,c.ca).status&&!a)return;fh&&B.clearTimeout(c.a[0].timeoutId);break;case "set":Na(c.a[0],function(n,r){E(bb(n,r),b.i)});break;case "config":var d=c.a[0],e=!!d[H.Yb];delete d[H.Yb];var f=kn(this,c.ca),g=qj(c.ca),h=g.containerId===g.id;e||(h?f.containerConfig={}:f.targetConfig[c.ca]={});f.a&&e||mn(this,H.ka,d,c);f.a=!0;delete d[H.ub];h?E(d,f.containerConfig):
E(d,f.targetConfig[c.ca]);break;case "event":mn(this,c.a[1],c.a[0],c);break;case "get":}this.a.shift()}};var nn=function(a,b,c){};var on=function(a,b,c,d){};var pn=function(a){};var qn=function(a,b,c){};var rn=function(a,b){return!0};var sn=function(a,b){var c;return c};var tn=function(a){};var un=!1,vn=[];function wn(){if(!un){un=!0;for(var a=0;a<vn.length;a++)N(vn[a])}}var xn=function(a){un?N(a):vn.push(a)};var yn=function(a){F(this.i.a,["listener:!Fn"],arguments);Ne(this,"process_dom_events","window","load");xn(pb(a))};var zn=function(a,b){var c;var d=vb(c,this.m);void 0===d&&void 0!==c&&I(45);return d};var An=function(a){var b;var h=vb(b,this.m);void 0===h&&void 0!==b&&I(45);return h};var Bn=function(a,b){var c=null;return vb(c,this.m)};var Cn=function(a){var b;return vb(b,this.m)};var Dn=function(a){var b;return b};var En=function(a,b){b=void 0===b?!0:b;var c;return c};var Fn=function(a){var b=null;return b};var Gn=function(a,b){var c;return c};var Hn=function(a,b){var c;return c};var In=function(a){var b="";return b};var Jn=function(a){var b="";return b};var Ze=function(){Ne(this,"get_user_agent");return B.navigator.userAgent};var Kn=function(a,b){};var Ln={},Mn=function(a,b,c,d){F(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ne(this,"inject_script",a);var e=this.m,f=function(){b instanceof db&&b.Ka(e)},g=function(){c instanceof db&&c.Ka(e)};if(!d){Cf(a,f,g);return}var h=d;Ln[h]?(Ln[h].onSuccess.push(f),Ln[h].onFailure.push(g)):(Ln[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Ln[h].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(n){N(n);
return 0}},g=function(){for(var l=Ln[h].onFailure,m=0;m<l.length;m++)N(l[m]);Ln[h]=null},Cf(a,f,g));};var Nn=function(){return!1},On={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Pn=function(){};var Qn=function(a,b){var c=!1;return c};var Rn=function(){var a="";return a};var Sn=function(){var a="";return a};var Tn=function(a,b,c){};var Un=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var Vn=function(a,b,c){return!1};var Wn=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var Xn=function(a,b,c){var d=this;};var Yn={},Zn={};Yn.getItem=function(a){var b=null;return b};
Yn.setItem=function(a,b){};
Yn.removeItem=function(a){};Yn.clear=function(){};var $n=function(a){var b;return b};var Mc=function(){var a=new Ye;tj()?(a.add("injectHiddenIframe",Ea),a.add("injectScript",Ea)):(a.add("injectHiddenIframe",Kn),a.add("injectScript",Mn));var b=Tn;a.add("Math",Ge());a.add("TestHelper",af());a.add("addEventCallback",pn);a.add("aliasInWindow",rn);a.add("assertApi",Ce);a.add("assertThat",De);a.add("callInWindow",
sn);a.add("callLater",tn);a.add("copyFromDataLayer",zn);a.add("copyFromWindow",An);a.add("createArgumentsQueue",Bn);a.add("createQueue",Cn);a.add("decodeUri",He);a.add("decodeUriComponent",Ie);a.add("encodeUri",Je);a.add("encodeUriComponent",Ke);a.add("fail",Le);a.add("fromBase64",Dn,!("atob"in B));a.add("generateRandom",Me);a.add("getContainerVersion",Oe);a.add("getCookieValues",En);a.add("getQueryParameters",Gn);a.add("getReferrerQueryParameters",Hn);a.add("getReferrerUrl",In);a.add("getTimestamp",
Pe);a.add("getTimestampMillis",Pe);a.add("getType",Qe);a.add("getUrl",Jn);a.add("localStorage",On,!Nn());a.add("logToConsole",Pn);a.add("makeInteger",Se);a.add("makeNumber",Te);a.add("makeString",Ue);a.add("makeTableMap",Ve);a.add("mock",Xe);a.add("queryPermission",Qn);a.add("readCharacterSet",Rn);a.add("readTitle",Sn);a.add("sendPixel",b);a.add("setCookie",Un);a.add("setInWindow",Vn);a.add("sha256",Xn);a.add("templateStorage",Yn);a.add("toBase64",$n,!("btoa"in B));a.add("JSON",Re(function(c){var d=this.m.a;d&&d.log.call(this,"error",c)}));
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;if(f){var g=f.zb();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var Kc,Ud;
function ao(){var a=data.runtime||[],b=data.runtime_lines;Kc=new Ic;bo();ld=function(e,f,g){co(f);var h=new ib;Na(f,function(q,v){var u=vb(v);void 0===u&&void 0!==v&&I(44);h.set(q,u)});Kc.a.a.B=Hd();var l={qg:Vd(e),eventId:void 0!==g?g.id:void 0,zb:function(){return e},log:function(){}};if(Ak()){var m=Bk(),n=void 0,r=void 0;l.da={i:{},a:function(q,v,u){1===v&&(n=q);7===v&&(r=u);m(q,v,u)},m:We()};l.log=function(q,v){if(n){var u=Array.prototype.slice.call(arguments,1);m(n,4,{level:q,source:r,message:u})}}}var t=
Lc(l,[e,h]);Kc.a.a.B=void 0;t instanceof ta&&"return"===t.a&&(t=t.i);return ub(t)};Nc();for(var c=0;c<a.length;c++){var d=a[c];if(!Ha(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Dd(d,b[c]);Kc.oc(d)}}function co(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Fa(b)&&(a.gtmOnSuccess=function(){N(b)});Fa(c)&&(a.gtmOnFailure=function(){N(c)})}
function bo(){var a=Kc;Q.SANDBOXED_JS_SEMAPHORE=Q.SANDBOXED_JS_SEMAPHORE||0;Oc(a,function(b,c,d){Q.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Q.SANDBOXED_JS_SEMAPHORE--}})}function eo(a){void 0!==a&&Na(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Lg[e]=Lg[e]||[];Lg[e].push(b)}})};var fo="HA GF G UA AW DC".split(" "),go=!1,ho={},io=!1;function jo(a,b){var c={event:a};b&&(c.eventModel=E(b),b[H.Nc]&&(c.eventCallback=b[H.Nc]),b[H.Vb]&&(c.eventTimeout=b[H.Vb]));return c}function ko(){return go}
var no={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!nb(a[2])&&
void 0!=a[2])return;c=a[2]}var d=jo(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return io=!0,ko(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Ud.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&nb(a[1])?b=E(a[1]):3==a.length&&p(a[1])&&(b={},nb(a[2])||Ha(a[2])?b[a[1]]=E(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}},consent:function(a){function b(){ko()&&E(a[2],{subcommand:a[1]})}if(3===a.length){I(39);var c=Mg(),d=a[1];"default"===d?(b(),dg(a[2])):"update"===d&&(b(),eg(a[2],c))}}};var oo={policy:!0};
var po=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},ro=function(a){var b=qo(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Io=function(a){if(Ho(a))return a;this.a=a};Io.prototype.$g=function(){return this.a};var Ho=function(a){return!a||"object"!==lb(a)||nb(a)?!1:"getUntrustedUpdateValue"in a};Io.prototype.getUntrustedUpdateValue=Io.prototype.$g;var Jo=[],Ko=!1,Lo=function(a){return B["dataLayer"].push(a)},Mo=function(a){var b=Q["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};function No(a){var b=a._clear;Na(a,function(d,e){"_clear"!==d&&(b&&sh(d,void 0),sh(d,e))});Hg||(Hg=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Mg(),a["gtm.uniqueEventId"]=c,sh("gtm.uniqueEventId",c));return Qk(a)}
function Oo(){for(var a=!1;!Ko&&0<Jo.length;){Ko=!0;delete mh.eventModel;oh();var b=Jo.shift();if(null!=b){var c=Ho(b);if(c){var d=b;b=Ho(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],h=ph(g,1);if(Ha(h)||nb(h))h=E(h);nh[g]=h}}try{if(Fa(b))try{b.call(qh)}catch(u){}else if(Ha(b)){var l=
b;if(p(l[0])){var m=l[0].split("."),n=m.pop(),r=l.slice(1),t=ph(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(u){}}}else{if(Oa(b)){a:{var q=b;if(q.length&&p(q[0])){var v=no[q[0]];if(v&&(!c||!oo[q[0]])){b=v(q);break a}}b=void 0}if(!b){Ko=!1;continue}}a=No(b)||a}}finally{c&&oh(!0)}}Ko=!1}return!a}
function Po(){var a=Oo();try{po(B["dataLayer"],Qd.C)}catch(b){}return a}
var Ro=function(){var a=Af("dataLayer",[]),b=Af("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};bk(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});xn(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<Q.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Io(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Jo.push.apply(Jo,e);if(300<
this.length)for(I(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Oo()&&h};var d=a.slice(0);Jo.push.apply(Jo,d);Qo()&&N(Po)},Qo=function(){var a=!0;return a};var So={};So.Zb=new String("undefined");
var To=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===So.Zb?b:a[d]);return c.join("")}};To.prototype.toString=function(){return this.a("undefined")};To.prototype.valueOf=To.prototype.toString;So.dg=To;So.Zc={};So.Ig=function(a){return new To(a)};var Uo={};So.Lh=function(a,b){var c=Mg();Uo[c]=[a,b];return c};So.Ne=function(a){var b=a?0:1;return function(c){var d=Uo[c];if(d&&"function"===typeof d[b])d[b]();Uo[c]=void 0}};So.ih=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};So.Dh=function(a){if(a===So.Zb)return a;var b=Mg();So.Zc[b]=a;return'google_tag_manager["'+Qd.C+'"].macro('+b+")"};So.uh=function(a,b,c){a instanceof So.dg&&(a=a.a(So.Lh(b,c)),b=Ea);return{od:a,J:b}};var Vo=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||If(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Wo=function(a){Q.hasOwnProperty("autoEventsSettings")||(Q.autoEventsSettings={});var b=Q.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Xo=function(a,b,c){Wo(a)[b]=c},Yo=function(a,b,c,d){var e=Wo(a),f=Ua(e,b,d);e[b]=c(f)},Zo=function(a,b,c){var d=Wo(a);return Ua(d,b,c)};var $o=["input","select","textarea"],ap=["button","hidden","image","reset","submit"],bp=function(a){var b=a.tagName.toLowerCase();return!Ja($o,function(c){return c===b})||"input"===b&&Ja(ap,function(c){return c===a.type.toLowerCase()})?!1:!0},cp=function(a){return a.form?a.form.tagName?a.form:M.getElementById(a.form):Lf(a,["form"],100)},dp=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(bp(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var ep=!!B.MutationObserver,fp=void 0,gp=function(a){if(!fp){var b=function(){var c=M.body;if(c)if(ep)(new MutationObserver(function(){for(var e=0;e<fp.length;e++)N(fp[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Gf(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<fp.length;e++)N(fp[e])}))})}};fp=[];M.body?b():N(b)}fp.push(a)};var sp=B.clearTimeout,tp=B.setTimeout,T=function(a,b,c){if(tj()){b&&N(b)}else return Cf(a,b,c)},up=function(){return new Date},vp=function(){return B.location.href},wp=function(a){return Eh(Gh(a),"fragment")},xp=function(a){return Fh(Gh(a))},yp=function(a,b){return ph(a,b||2)},zp=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Lo(a)):d=Lo(a);return d},Ap=function(a,b){B[a]=b},U=function(a,b,c){b&&
(void 0===B[a]||c&&!B[a])&&(B[a]=b);return B[a]},Bp=function(a,b,c){return Lh(a,b,void 0===c?!0:!!c)},Cp=function(a,b,c){return 0===Uh(a,b,c)},Dp=function(a,b){if(tj()){b&&N(b)}else Ef(a,b)},Ep=function(a){return!!Zo(a,"init",!1)},Fp=function(a){Xo(a,"init",!0)},Gp=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Fg;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";T(vj("https://","http://",c))},Hp=function(a,
b){var c=a[b];return c},Ip=function(a,b,c){fh&&(xb(a)||jh(c,b,a))};
var Jp=So.uh;function fq(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var gq=new La;function hq(a,b){function c(g){var h=Gh(g),l=Eh(h,"protocol"),m=Eh(h,"host",!0),n=Eh(h,"port"),r=Eh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function iq(a){return jq(a)?1:0}
function jq(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ha(c)){for(var d=0;d<c.length;d++){var e=E(a,{});E({arg1:c[d],any_of:void 0},e);if(iq(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(q){}}f=!1}return f;case "_ew":return fq(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Ia(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var n=a.ignore_case?"i":void 0;try{var r=String(c)+n,t=gq.get(r);t||(t=new RegExp(c,n),gq.set(r,t));m=t.test(b)}catch(q){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return hq(b,c)}return!1};var kq={},lq=encodeURI,X=encodeURIComponent,mq=Ff;var nq=function(a,b){if(!a)return!1;var c=Eh(Gh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var oq=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};kq.jh=function(){var a=!1;return a};function Qr(){return B.gaGlobal=B.gaGlobal||{}}var Rr=function(){var a=Qr();a.hid=a.hid||Ka();return a.hid},Sr=function(a,b){var c=Qr();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var as=window,bs=document,cs=function(a){var b=as._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===as["ga-disable-"+a])return!0;try{var c=as.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Ih("AMP_TOKEN",String(bs.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return bs.getElementById("__gaOptOutExtension")?!0:!1};function fs(a){delete a.eventModel[H.ub];hs(a.eventModel)}
var hs=function(a){Na(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.na]||{};Na(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var ks=function(a,b,c){dn(b,c,a)},ls=function(a,b,c){dn(b,c,a,!0)},ns=function(a,b){};
function ms(a,b){}var Y={b:{}};

Y.b.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");var d=c&&c.e&&c.e(b);Ip(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Y.b.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;mm(b,c)}(function(b){Y.__flc=b;Y.__flc.g="flc";Y.__flc.h=!0;Y.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=oq(b.vtp_customVariable||[],"key","value")||{},e={xb:b.vtp_activityTag,hd:c,Ta:b.vtp_conversionCookiePrefix||void 0,jc:void 0,aa:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,jd:b.vtp_advertiserId,md:b.vtp_groupTag,I:b.vtp_gtmOnFailure,J:b.vtp_gtmOnSuccess,
wc:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",Ed:void 0,Hd:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Ec:b.vtp_transactionVariable,transactionId:void 0,Fc:b.vtp_userVariable,Ld:d},f=!fg(H.o)&&void 0!=yp(H.N)&&!1!==yp(H.N);e.Gb=f;if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){T("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,U("google_attr").build([oq(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();

Y.b.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.g="sp";Y.__sp.h=!0;Y.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=U("google_trackConversion");if(Fa(f)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=oq(a.vtp_customParams,
"key","value"));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:fl()};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(h.google_conversion_value=a.vtp_eventValue),a.vtp_eventItems&&(h.google_gtag_event_data={items:a.vtp_eventItems}));a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=
a.vtp_userId);var l=Il();(h.google_additional_params=h.google_additional_params||{}).gdpr_consent=l;f(h)||c()}else c()},e=function(){T(b,d,c)};Zf()?hg(function(){fg(H.o)?e():bg(e,H.o)},[H.o]):(kk(),e())})}();
Y.b.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.priorityOverride=0})(function(a){return String(uh(a.vtp_gtmEventId,"event"))})}();
Y.b.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.priorityOverride=0})(function(a){var b=yp("gtm.referrer",1)||M.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Eh(Gh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):xp(String(b)):String(b)})}();
Y.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Vo(c,"gtm.click");zp(d)}}(function(b){Y.__cl=b;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.priorityOverride=0})(function(b){if(!Ep("cl")){var c=U("document");Gf(c,"click",a,!0);Fp("cl")}N(b.vtp_gtmOnSuccess)})}();Y.b.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.priorityOverride=0})(function(a){return Bp(a.vtp_name,yp("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.b.fls=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;mm(b,c)}(function(b){Y.__fls=b;Y.__fls.g="fls";Y.__fls.h=!0;Y.__fls.priorityOverride=0})(function(b){var c;if(b.vtp_enableProductReporting){var d=function(t){t=t||[];for(var q=[],v=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],u=0;u<t.length;u++)for(var w=0;w<v.length;w++){var y=v[w],x=t[u][y[1]];void 0!==x&&q.push(y[0]+
(u+1)+":"+X(x))}return q.join("|")};switch(b.vtp_dataSource){case "DATA_LAYER":c=d(yp("ecommerce.purchase.products"));break;case "JSON":c=d(b.vtp_productData);break;case "STRING":for(var e=(b.vtp_productData||"").split("|"),f=0;f<e.length;f++){var g=e[f].split(":");g[1]=g[1]&&X(g[1])||"";e[f]=g.join(":")}c=e.join("|")}}var h=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,l=oq(b.vtp_customVariable||
[],"key","value")||{},m={xb:b.vtp_activityTag,hd:h,Ta:b.vtp_conversionCookiePrefix||void 0,jc:b.vtp_revenue,aa:"ITEM_SOLD"===b.vtp_countingMethod?6:5,jd:b.vtp_advertiserId,md:b.vtp_groupTag,I:b.vtp_gtmOnFailure,J:b.vtp_gtmOnSuccess,wc:b.vtp_useImageTag?void 0:b.vtp_url,Ad:c,protocol:"",Ed:b.vtp_quantity,Hd:!b.vtp_useImageTag,Ec:b.vtp_transactionVariable,transactionId:b.vtp_orderId,Fc:b.vtp_userVariable,Ld:l},n=!fg(H.o)&&void 0!=yp(H.N)&&!1!==yp(H.N);m.Gb=n;if(b.vtp_enableAttribution){var r=b.vtp_attributionFields||
[];if(r.length){T("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(m,U("google_attr").build([oq(r,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(m)})}();Y.b.r=["google"],function(){(function(a){Y.__r=a;Y.__r.g="r";Y.__r.h=!0;Y.__r.priorityOverride=0})(function(a){return Ka(a.vtp_min,a.vtp_max)})}();
Y.b.t=["google"],function(){(function(a){Y.__t=a;Y.__t.g="t";Y.__t.h=!0;Y.__t.priorityOverride=0})(function(){return up().getTime()})}();
Y.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.g="u";Y.__u.h=!0;Y.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=yp("gtm.url",1);c=c||vp();var d=b[a("vtp_component")];if(!d||"URL"==d)return xp(String(c));var e=Gh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ha(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var n=0;n<m.length;n++){var r=Eh(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Eh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.b.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=yp(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Ip(d,"v",a.vtp_gtmEventId);return d})}();


Y.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.g="inject_script";Y.__inject_script.h=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(te(Gh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();




Y.b.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Y.__gclidw=b;Y.__gclidw.g="gclidw";Y.__gclidw.h=!0;Y.__gclidw.priorityOverride=100})(function(b){N(b.vtp_gtmOnSuccess);var c,d,e,f;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain,b.vtp_enableCookieFlagsFeature&&(f=b.vtp_cookieFlags));var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h={prefix:e,path:c,domain:d,flags:f};b.vtp_enableCrossDomainFeature&&
(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||Li())&&cj(a,h));$i(h);ej(["aw","dc"],h);nj(g,h);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");dj(a,m,b.vtp_urlPosition,!!b.vtp_formDecoration,l)}var n=yp(H.N);Kl(!1,void 0!=n&&!1!==n);b.vtp_enableUrlPassthroughFeature&&b.vtp_enableUrlPassthrough&&gj()})}();

Y.b.aev=["google"],function(){function a(q,v){var u=uh(q,"gtm");if(u)return u[v]}function b(q,v,u,w){w||(w="element");var y=q+"."+v,x;if(n.hasOwnProperty(y))x=n[y];else{var C=a(q,w);if(C&&(x=u(C),n[y]=x,r.push(y),35<r.length)){var A=r.shift();delete n[A]}}return x}function c(q,v,u){var w=a(q,t[v]);return void 0!==w?w:u}function d(q,v){if(!q)return!1;var u=e(vp());Ha(v)||(v=String(v||"").replace(/\s+/g,"").split(","));for(var w=[u],y=0;y<v.length;y++){var x=v[y];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(A){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(q))return!1}else{var C=x;if(0!=C.length){if(0<=e(q).indexOf(C))return!1;w.push(e(C))}}}return!nq(q,w)}function e(q){m.test(q)||(q="http://"+q);return Eh(Gh(q),"HOST",!0)}function f(q,v,u){switch(q){case "SUBMIT_TEXT":return b(v,"FORM."+q,g,"formSubmitElement")||u;case "LENGTH":var w=b(v,"FORM."+q,h);return void 0===w?u:w;case "INTERACTED_FIELD_ID":return l(v,"id",u);case "INTERACTED_FIELD_NAME":return l(v,"name",
u);case "INTERACTED_FIELD_TYPE":return l(v,"type",u);case "INTERACTED_FIELD_POSITION":var y=a(v,"interactedFormFieldPosition");return void 0===y?u:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(v,"interactSequenceNumber");return void 0===x?u:x;default:return u}}function g(q){switch(q.tagName.toLowerCase()){case "input":return If(q,"value");case "button":return Jf(q);default:return null}}function h(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var v=0,u=0;u<q.elements.length;u++)bp(q.elements[u])&&
v++;return v}}function l(q,v,u){var w=a(q,"interactedFormField");return w&&If(w,v)||u}var m=/^https?:\/\//i,n={},r=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Y.__aev=q;Y.__aev.g="aev";Y.__aev.h=!0;Y.__aev.priorityOverride=
0})(function(q){var v=q.vtp_gtmEventId,u=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(v,"element");return y&&y.tagName||u;case "TEXT":return b(v,w,Jf)||u;case "URL":var x;a:{var C=String(a(v,"elementUrl")||u||""),A=Gh(C),z=String(q.vtp_component||"URL");switch(z){case "URL":x=C;break a;case "IS_OUTBOUND":x=d(C,q.vtp_affiliatedDomains);break a;default:x=Eh(A,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===q.vtp_attribute)D=c(v,
w,u);else{var G=q.vtp_attribute,L=a(v,"element");D=L&&If(L,G)||u||""}return D;case "MD":var O=q.vtp_mdValue,W=b(v,"MD",np);return O&&W?qp(W,O)||u:W||u;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),v,u);default:var ba=c(v,w,u);Ip(ba,"aev",q.vtp_gtmEventId);return ba}})}();
Y.b.awc=["nonGoogleScripts"],function(){var a=!1;(function(b){Y.__awc=b;Y.__awc.g="awc";Y.__awc.h=!0;Y.__awc.priorityOverride=0})(function(b){if(a)b.vtp_gtmOnSuccess();else{var c=b.vtp_channel||"na",d,e,f;if(b.vtp_group&&0<=b.vtp_group.indexOf(":")){d=b.vtp_group;for(var g=b.vtp_group.split("|"),h=[],l=f=0;l<g.length;l++)if(g[l]){var m=g[l].split(":");if(2==m.length&&m[0]&&m[1]){var n=parseFloat(m[1]);isNaN(n)||(h.push(X(m[0])+
":"+n),f+=n)}}e=h.join("|")}else f=b.vtp_orderValue||0,d=(b.vtp_group||"DEFAULT")+":"+f,e=X(b.vtp_group||"DEFAULT")+":"+X(f);var r=b.vtp_testMode?"1":"0";try{var t=["merchant="+X(b.vtp_merchantId),"ref="+X(b.vtp_orderRef),"amount="+X(f),"parts="+e,"ch="+X(c),"testmode="+r];b.vtp_currency&&t.push("cr="+X(b.vtp_currency));b.vtp_discountCode&&t.push("vc="+X(b.vtp_discountCode));mq("https://www.awin1.com/sread.img?tt=ns&tv=2&"+t.join("&"))}catch(v){}try{var q={};q.orderRef=b.vtp_orderRef;q.amount=f;b.vtp_currency&&
(q.currency=b.vtp_currency);q.parts=d;b.vtp_discountCode&&(q.voucher=b.vtp_discountCode);q.channel=c;q.test=r;B.AWIN={Tracking:{Sale:q}};T("https://www.dwin1.com/"+b.vtp_merchantId+".js",b.vtp_gtmOnSuccess,b.vtp_gtmOnFailure);a=!0}catch(v){N(b.vtp_gtmOnFailure)}}})}();
Y.b.awct=["google"],function(){var a=!1,b=[],c=function(g){var h=U("google_trackConversion"),l=g.gtm_onFailure;"function"==typeof h?h(g)||l():l()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}};(function(g){Y.__awct=g;Y.__awct.g="awct";Y.__awct.h=!0;Y.__awct.priorityOverride=
0})(function(g){function h(){q("gdpr_consent",Il());}function l(){}function m(w){var y=!0;w&&l();y&&b.push(n)}kk();var n={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:g.vtp_conversionId,
google_conversion_label:g.vtp_conversionLabel,google_conversion_value:g.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:g.vtp_gtmOnSuccess,gtm_onFailure:g.vtp_gtmOnFailure,google_gtm:fl()};g.vtp_rdp&&(n.google_restricted_data_processing=!0);void 0!=yp(H.N)&&!1!==yp(H.N)&&(n.google_gtm_url_processor=function(w){return w=Jj(w)});var r=function(w){return function(y,
x,C){var A="DATA_LAYER"==w?yp(C):g[x];A&&(n[y]=A)}},t=r("JSON");t("google_conversion_currency","vtp_currencyCode");t("google_conversion_order_id","vtp_orderId");g.vtp_enableProductReporting&&(t=r(g.vtp_productReportingDataSource),t("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),t("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),t("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),t("google_basket_discount","vtp_discount","discount"),t("google_conversion_items",
"vtp_items","items"),n.google_conversion_items&&n.google_conversion_items.map&&(n.google_conversion_items=n.google_conversion_items.map(function(w){return{value:w.price,quantity:w.quantity,item_id:w.id}})));var q=function(w,y){void 0!==y&&((n.google_additional_conversion_params=n.google_additional_conversion_params||{})[w]=y)},v=function(w){return function(y,x,C,A){var z="DATA_LAYER"==w?yp(C):g[x];A(z)&&q(y,z)}};g.vtp_transportUrl&&(n.google_transport_url=g.vtp_transportUrl);var u=Sk(g.vtp_transportUrl,
"/pagead/conversion_async.js");u||(u=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");g.vtp_enableNewCustomerReporting&&(t=v(g.vtp_newCustomerReportingDataSource),t("vdnc","vtp_awNewCustomer","new_customer",function(w){return void 0!=w&&""!==w}),t("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(w){return void 0!=w&&""!==w}));!g.hasOwnProperty("vtp_enableConversionLinker")||
g.vtp_enableConversionLinker?(g.vtp_conversionCookiePrefix&&(n.google_gcl_cookie_prefix=g.vtp_conversionCookiePrefix),n.google_read_gcl_cookie_opt_out=!1):n.google_read_gcl_cookie_opt_out=!0;"1"===Ei(!1)._up&&q("gtm_up","1");h();(function(){Zf()?hg(function(){h();var w=fg(H.o),y=!w&&void 0!=yp(H.N)&&!1!==yp(H.N);!g.vtp_transportUrl&&y&&(n.google_transport_url="https://pagead2.googlesyndication.com/");q("gcs",gg());m(w);w||bg(function(){h();n=E(n);!g.vtp_transportUrl&&n.google_transport_url&&delete n.google_transport_url;
q("gcs",gg());q("gcu","1");m(!0)},H.o)},[H.o]):m(!0)})();a||(a=!0,T(u,f(),e(u)))})}();



Y.b.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.g="paused";Y.__paused.h=!0;Y.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();

Y.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=M.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var n=h.getAttribute("data-gtmsrc");n&&(m.src=n,Bf(m,l));d.insertBefore(m,null);n||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];h.firstChild;)r.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,r,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){N(g)}}}var c=function(d){if(M.body){var e=
d.vtp_gtmOnFailure,f=Jp(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.od,h=f.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(M.body,Kf(g),h,e)()}else tp(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.priorityOverride=0}();




Y.b.img=["customPixels"],function(){(function(a){Y.__img=a;Y.__img.g="img";Y.__img.h=!0;Y.__img.priorityOverride=0})(function(a){var b=Kf('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}mq(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();




var os={};os.macro=function(a){if(So.Zc.hasOwnProperty(a))return So.Zc[a]},os.onHtmlSuccess=So.Ne(!0),os.onHtmlFailure=So.Ne(!1);os.dataLayer=qh;os.callback=function(a){Kg.hasOwnProperty(a)&&Fa(Kg[a])&&Kg[a]();delete Kg[a]};function ps(){Q[Qd.C]=os;Xa(Lg,Y.b);td=td||So;ud=Md}
function qs(){Of.gtm_3pds=!0;Of.gtag_cs_api=!0;Q=B.google_tag_manager=B.google_tag_manager||{};Gl();if(Q[Qd.C]){var a=Q.zones;a&&a.unregisterChild(Qd.C);
}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)md.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)pd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)od.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);nd.push(r)}rd=Y;sd=iq;var q=data.permissions||{},v=data.sandboxed_scripts,u=data.security_groups;
ao();Ud=new Td(q);if(void 0!==v)for(var w=["sandboxedScripts"],y=0;y<v.length;y++){var x=v[y].replace(/^_*/,"");Lg[x]=w}eo(u);ps();Ro();Wj=!1;Xj=0;if("interactive"==M.readyState&&!M.createEventObject||"complete"==M.readyState)Zj();else{Gf(M,"DOMContentLoaded",Zj);Gf(M,"readystatechange",Zj);if(M.createEventObject&&M.documentElement.doScroll){var C=!0;try{C=!B.frameElement}catch(G){}C&&ak()}Gf(B,"load",Zj)}un=!1;"complete"===M.readyState?wn():Gf(B,"load",wn);a:{if(!fh)break a;B.setInterval(gh,864E5);}Ig=(new Date).getTime();}}
(function(a){a()})(qs);

})()
