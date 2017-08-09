let parser = new DOMParser();

class RecipePageScraper {
  scrape(url) {
    let recipe = {
      name: '',
      timeTaken: '',
      ingredients: [],
      steps: [],
      photoLink: '',
      calories: ''
    };
    return fetch(url).then(response => response.text()).then(text => {
      let myDoc = parser.parseFromString(text, 'text/html');
      if (myDoc.getElementsByClassName('recipe-summary__h1')[0]) {
        recipe.name = myDoc.getElementsByClassName('recipe-summary__h1')[0].innerText;
      } else {
        recipe.name = 'VIDEO FORMAT';
      }
      if (myDoc.querySelector('.ready-in-time')) {
        recipe.timeTaken = myDoc.querySelector('.ready-in-time').innerText;
      } else {
        recipe.timeTaken = 'N/A';
      }
      if (myDoc.querySelector('.nutrientLine__item--amount')) {
        recipe.calories = myDoc.querySelector('.nutrientLine__item--amount').innerText;
      } else {
        recipe.calores = 'N/A';
      }
      if (myDoc.querySelector('.photo-strip__items')) {
        recipe.photoLink = myDoc.querySelector('.photo-strip__items').children[1].src;
      } else {
        recipe.photoLink = 'https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png';
      }
      let allIngr = [...myDoc.querySelectorAll('.recipe-ingred_txt')];
      let allSteps = [...myDoc.querySelectorAll('.step')];

      for (let ingr of allIngr) {
        recipe.ingredients.push(ingr.innerText);
      }
      for (let step of allSteps) {
        recipe.steps.push(step.innerText);
      }
      recipe.ingredients.splice(recipe.ingredients.length - 3);
      recipe.steps.pop();
      return recipe;
    });
  }
}
module.exports = RecipePageScraper;

function simulator() {
  return `
<!DOCTYPE html>
<html>
<head>
    <title>Steak Soup Recipe - Allrecipes.com</title>
        <meta property="og:title" content="Steak Soup Recipe" />

    <meta property="og:site_name" content="Allrecipes" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta id="metaDescription" name="description" content="Rich, hearty steak soup has chunks of tender round steak, potatoes, carrots, celery, and corn, all simmering in a flavorful tomato-flavored beef broth. ">
        <meta property="og:description" content="Rich, hearty steak soup has chunks of tender round steak, potatoes, carrots, celery, and corn, all simmering in a flavorful tomato-flavored beef broth. " />
                <meta name="robots" content="noodp,noydir" />



        <link id="canonicalUrl" rel="canonical" href="http://allrecipes.com/recipe/214556/steak-soup/" />
        <meta property="og:url" content="http://allrecipes.com/recipe/214556/steak-soup/" />

        <link rel="amphtml" href="https://allrecipes.com/recipe/214556/steak-soup/amp/" />

    <link href='http://css01.media-allrecipes.com/assets/deployables/v-1.83.0.117/main-css.bundled.Css' rel='stylesheet'/>
    <link href='http://css01.media-allrecipes.com/assets/deployables/v-1.83.0.117/recipe-print-css.bundled.Css' rel='stylesheet'/>


                <link rel="next" href="http://allrecipes.com/recipe/214556/steak-soup/reviews/2780146/?internalSource=hub%20recipe&referringContentType=search%20results&clickId=cardslot%201"/>
            <meta property="og:type" content="article" />
            <meta property="og:image" content="http://images.media-allrecipes.com/userphotos/560x315/488609.jpg" />
    <meta property="fb:app_id" content="66102450266" />

    <script type="text/javascript">window.NREUM||(NREUM={});NREUM.info = {"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"55db0cb698","applicationID":"33298262","transactionName":"YwABYUUDXUIABRZbCVpKIllbEFZSCBYHQTFRBxBcQwccYwQFC0IDdwoNQUUNX10EFExgA1cME1B+DFdUGU5L","queueTime":0,"applicationTime":96,"agent":"","atts":""}</script><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={xpid:"XQ4OVVdaGwADVlhaBQcF"};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var o=e[n]={exports:{}};t[n][0].call(o.exports,function(e){var o=t[n][1][e];return r(o||e)},o,o.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(t,e,n){function r(t){try{c.console&&console.log(t)}catch(e){}}var o,i=t("ee"),a=t(19),c={};try{o=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(c.console=!0,o.indexOf("dev")!==-1&&(c.dev=!0),o.indexOf("nr_dev")!==-1&&(c.nrDev=!0))}catch(s){}c.nrDev&&i.on("internal-error",function(t){r(t.stack)}),c.dev&&i.on("fn-err",function(t,e,n){r(n.stack)}),c.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(c,function(t,e){return t}).join(", ")))},{}],2:[function(t,e,n){function r(t,e,n,r,o){try{d?d-=1:i("err",[o||new UncaughtException(t,e,n)])}catch(c){try{i("ierr",[c,s.now(),!0])}catch(u){}}return"function"==typeof f&&f.apply(this,a(arguments))}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function o(t){i("err",[t,s.now()])}var i=t("handle"),a=t(20),c=t("ee"),s=t("loader"),f=window.onerror,u=!1,d=0;s.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(p){"stack"in p&&(t(12),t(11),"addEventListener"in window&&t(6),s.xhrWrappable&&t(13),u=!0)}c.on("fn-start",function(t,e,n){u&&(d+=1)}),c.on("fn-err",function(t,e,n){u&&(this.thrown=!0,o(n))}),c.on("fn-end",function(){u&&!this.thrown&&d>0&&(d-=1)}),c.on("internal-error",function(t){i("ierr",[t,s.now(),!0])})},{}],3:[function(t,e,n){t("loader").features.ins=!0},{}],4:[function(t,e,n){function r(){C++,M=y.hash,this[u]=b.now()}function o(){C--,y.hash!==M&&i(0,!0);var t=b.now();this[l]=~~this[l]+t-this[u],this[d]=t}function i(t,e){E.emit("newURL",[""+y,e])}function a(t,e){t.on(e,function(){this[e]=b.now()})}var c="-start",s="-end",f="-body",u="fn"+c,d="fn"+s,p="cb"+c,h="cb"+s,l="jsTime",m="fetch",v="addEventListener",w=window,y=w.location,b=t("loader");if(w[v]&&b.xhrWrappable){var g=t(9),x=t(10),E=t(8),O=t(6),R=t(12),P=t(7),T=t(13),S=t("ee"),N=S.get("tracer");t(14),b.features.spa=!0;var M,j=w[v],C=0;S.on(u,r),S.on(p,r),S.on(d,o),S.on(h,o),S.buffer([u,d,"xhr-done","xhr-resolved"]),O.buffer([u]),R.buffer(["setTimeout"+s,"clearTimeout"+c,u]),T.buffer([u,"new-xhr","send-xhr"+c]),P.buffer([m+c,m+"-done",m+f+c,m+f+s]),E.buffer(["newURL"]),g.buffer([u]),x.buffer(["propagate",p,h,"executor-err","resolve"+c]),N.buffer([u,"no-"+u]),a(T,"send-xhr"+c),a(S,"xhr-resolved"),a(S,"xhr-done"),a(P,m+c),a(P,m+"-done"),E.on("pushState-end",i),E.on("replaceState-end",i),j("hashchange",i,!0),j("load",i,!0),j("popstate",function(){i(0,C>1)},!0)}},{}],5:[function(t,e,n){function r(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var o=t("ee"),i=t("handle"),a=t(12),c=t(11),s="learResourceTimings",f="addEventListener",u="resourcetimingbufferfull",d="bstResource",p="resource",h="-start",l="-end",m="fn"+h,v="fn"+l,w="bstTimer",y="pushState",b=t("loader");b.features.stn=!0,t(8);var g=NREUM.o.EV;o.on(m,function(t,e){var n=t[0];n instanceof g&&(this.bstStart=b.now())}),o.on(v,function(t,e){var n=t[0];n instanceof g&&i("bst",[n,e,this.bstStart,b.now()])}),a.on(m,function(t,e,n){this.bstStart=b.now(),this.bstType=n}),a.on(v,function(t,e){i(w,[e,this.bstStart,b.now(),this.bstType])}),c.on(m,function(){this.bstStart=b.now()}),c.on(v,function(t,e){i(w,[e,this.bstStart,b.now(),"requestAnimationFrame"])}),o.on(y+h,function(t){this.time=b.now(),this.startPath=location.pathname+location.hash}),o.on(y+l,function(t){i("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),f in window.performance&&(window.performance["c"+s]?window.performance[f](u,function(t){i(d,[window.performance.getEntriesByType(p)]),window.performance["c"+s]()},!1):window.performance[f]("webkit"+u,function(t){i(d,[window.performance.getEntriesByType(p)]),window.performance["webkitC"+s]()},!1)),document[f]("scroll",r,{passive:!0}),document[f]("keypress",r,!1),document[f]("click",r,!1)}},{}],6:[function(t,e,n){function r(t){for(var e=t;e&&!e.hasOwnProperty(u);)e=Object.getPrototypeOf(e);e&&o(e)}function o(t){c.inPlace(t,[u,d],"-",i)}function i(t,e){return t[1]}var a=t("ee").get("events"),c=t(22)(a,!0),s=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";e.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(o(window),o(f.prototype)),a.on(u+"-start",function(t,e){var n=t[1],r=s(n,"nr@wrapped",function(){function t(){if("function"==typeof n.handleEvent)return n.handleEvent.apply(n,arguments)}var e={object:t,"function":n}[typeof n];return e?c(e,"fn-",null,e.name||"anonymous"):n});this.wrapped=t[1]=r}),a.on(d+"-start",function(t){t[1]=this.wrapped||t[1]})},{}],7:[function(t,e,n){function r(t,e,n){var r=t[e];"function"==typeof r&&(t[e]=function(){var t=r.apply(this,arguments);return o.emit(n+"start",arguments,t),t.then(function(e){return o.emit(n+"end",[null,e],t),e},function(e){throw o.emit(n+"end",[e],t),e})})}var o=t("ee").get("fetch"),i=t(19);e.exports=o;var a=window,c="fetch-",s=c+"body-",f=["arrayBuffer","blob","json","text","formData"],u=a.Request,d=a.Response,p=a.fetch,h="prototype";u&&d&&p&&(i(f,function(t,e){r(u[h],e,s),r(d[h],e,s)}),r(a,"fetch",c),o.on(c+"end",function(t,e){var n=this;e?e.clone().arrayBuffer().then(function(t){n.rxSize=t.byteLength,o.emit(c+"done",[null,e],n)}):o.emit(c+"done",[t],n)}))},{}],8:[function(t,e,n){var r=t("ee").get("history"),o=t(22)(r);e.exports=r,o.inPlace(window.history,["pushState","replaceState"],"-")},{}],9:[function(t,e,n){var r=t("ee").get("mutation"),o=t(22)(r),i=NREUM.o.MO;e.exports=r,i&&(window.MutationObserver=function(t){return this instanceof i?new i(o(t,"fn-")):i.apply(this,arguments)},MutationObserver.prototype=i.prototype)},{}],10:[function(t,e,n){function r(t){var e=a.context(),n=c(t,"executor-",e),r=new f(n);return a.context(r).getCtx=function(){return e},a.emit("new-promise",[r,e],e),r}function o(t,e){return e}var i=t(22),a=t("ee").get("promise"),c=i(a),s=t(19),f=NREUM.o.PR;e.exports=a,f&&(window.Promise=r,["all","race"].forEach(function(t){var e=f[t];f[t]=function(n){function r(t){return function(){a.emit("propagate",[null,!o],i),o=o||!t}}var o=!1;s(n,function(e,n){Promise.resolve(n).then(r("all"===t),r(!1))});var i=e.apply(f,arguments),c=f.resolve(i);return c}}),["resolve","reject"].forEach(function(t){var e=f[t];f[t]=function(t){var n=e.apply(f,arguments);return t!==n&&a.emit("propagate",[t,!0],n),n}}),f.prototype["catch"]=function(t){return this.then(null,t)},f.prototype=Object.create(f.prototype,{constructor:{value:r}}),s(Object.getOwnPropertyNames(f),function(t,e){try{r[e]=f[e]}catch(n){}}),a.on("executor-start",function(t){t[0]=c(t[0],"resolve-",this),t[1]=c(t[1],"resolve-",this)}),a.on("executor-err",function(t,e,n){t[1](n)}),c.inPlace(f.prototype,["then"],"then-",o),a.on("then-start",function(t,e){this.promise=e,t[0]=c(t[0],"cb-",this),t[1]=c(t[1],"cb-",this)}),a.on("then-end",function(t,e,n){this.nextPromise=n;var r=this.promise;a.emit("propagate",[r,!0],n)}),a.on("cb-end",function(t,e,n){a.emit("propagate",[n,!0],this.nextPromise)}),a.on("propagate",function(t,e,n){this.getCtx&&!e||(this.getCtx=function(){if(t instanceof Promise)var e=a.context(t);return e&&e.getCtx?e.getCtx():this})}),r.toString=function(){return""+f})},{}],11:[function(t,e,n){var r=t("ee").get("raf"),o=t(22)(r),i="equestAnimationFrame";e.exports=r,o.inPlace(window,["r"+i,"mozR"+i,"webkitR"+i,"msR"+i],"raf-"),r.on("raf-start",function(t){t[0]=o(t[0],"fn-")})},{}],12:[function(t,e,n){function r(t,e,n){t[0]=a(t[0],"fn-",null,n)}function o(t,e,n){this.method=n,this.timerDuration=isNaN(t[1])?0:+t[1],t[0]=a(t[0],"fn-",this,n)}var i=t("ee").get("timer"),a=t(22)(i),c="setTimeout",s="setInterval",f="clearTimeout",u="-start",d="-";e.exports=i,a.inPlace(window,[c,"setImmediate"],c+d),a.inPlace(window,[s],s+d),a.inPlace(window,[f,"clearImmediate"],f+d),i.on(s+u,r),i.on(c+u,o)},{}],13:[function(t,e,n){function r(t,e){d.inPlace(e,["onreadystatechange"],"fn-",c)}function o(){var t=this,e=u.context(t);t.readyState>3&&!e.resolved&&(e.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,y,"fn-",c)}function i(t){b.push(t),l&&(x?x.then(a):v?v(a):(E=-E,O.data=E))}function a(){for(var t=0;t<b.length;t++)r([],b[t]);b.length&&(b=[])}function c(t,e){return e}function s(t,e){for(var n in t)e[n]=t[n];return e}t(6);var f=t("ee"),u=f.get("xhr"),d=t(22)(u),p=NREUM.o,h=p.XHR,l=p.MO,m=p.PR,v=p.SI,w="readystatechange",y=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],b=[];e.exports=u;var g=window.XMLHttpRequest=function(t){var e=new h(t);try{u.emit("new-xhr",[e],e),e.addEventListener(w,o,!1)}catch(n){try{u.emit("internal-error",[n])}catch(r){}}return e};if(s(h,g),g.prototype=h.prototype,d.inPlace(g.prototype,["open","send"],"-xhr-",c),u.on("send-xhr-start",function(t,e){r(t,e),i(e)}),u.on("open-xhr-start",r),l){var x=m&&m.resolve();if(!v&&!m){var E=1,O=document.createTextNode(E);new l(a).observe(O,{characterData:!0})}}else f.on("fn-end",function(t){t[0]&&t[0].type===w||a()})},{}],14:[function(t,e,n){function r(t){var e=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<d;r++)t.removeEventListener(u[r],this.listener,!1);if(!e.aborted){if(n.duration=a.now()-this.startTime,4===t.readyState){e.status=t.status;var i=o(t,this.lastSize);if(i&&(n.rxSize=i),this.sameOrigin){var s=t.getResponseHeader("X-NewRelic-App-Data");s&&(e.cat=s.split(", ").pop())}}else e.status=0;n.cbTime=this.cbTime,f.emit("xhr-done",[t],t),c("xhr",[e,n,this.startTime])}}}function o(t,e){var n=t.responseType;if("json"===n&&null!==e)return e;var r="arraybuffer"===n||"blob"===n||"json"===n?t.response:t.responseText;return l(r)}function i(t,e){var n=s(e),r=t.params;r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.sameOrigin=n.sameOrigin}var a=t("loader");if(a.xhrWrappable){var c=t("handle"),s=t(15),f=t("ee"),u=["load","error","abort","timeout"],d=u.length,p=t("id"),h=t(18),l=t(17),m=window.XMLHttpRequest;a.features.xhr=!0,t(13),f.on("new-xhr",function(t){var e=this;e.totalCbs=0,e.called=0,e.cbTime=0,e.end=r,e.ended=!1,e.xhrGuids={},e.lastSize=null,h&&(h>34||h<10)||window.opera||t.addEventListener("progress",function(t){e.lastSize=t.loaded},!1)}),f.on("open-xhr-start",function(t){this.params={method:t[0]},i(this,t[1]),this.metrics={}}),f.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid)}),f.on("send-xhr-start",function(t,e){var n=this.metrics,r=t[0],o=this;if(n&&r){var i=l(r);i&&(n.txSize=i)}this.startTime=a.now(),this.listener=function(t){try{"abort"===t.type&&(o.params.aborted=!0),("load"!==t.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof e.onload))&&o.end(e)}catch(n){try{f.emit("internal-error",[n])}catch(r){}}};for(var c=0;c<d;c++)e.addEventListener(u[c],this.listener,!1)}),f.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),f.on("xhr-load-added",function(t,e){var n=""+p(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),f.on("xhr-load-removed",function(t,e){var n=""+p(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),f.on("addEventListener-end",function(t,e){e instanceof m&&"load"===t[0]&&f.emit("xhr-load-added",[t[1],t[2]],e)}),f.on("removeEventListener-end",function(t,e){e instanceof m&&"load"===t[0]&&f.emit("xhr-load-removed",[t[1],t[2]],e)}),f.on("fn-start",function(t,e,n){e instanceof m&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=a.now()))}),f.on("fn-end",function(t,e){this.xhrCbStart&&f.emit("xhr-cb-time",[a.now()-this.xhrCbStart,this.onload,e],e)})}},{}],15:[function(t,e,n){e.exports=function(t){var e=document.createElement("a"),n=window.location,r={};e.href=t,r.port=e.port;var o=e.href.split("://");!r.port&&o[1]&&(r.port=o[1].split("/")[0].split("@").pop().split(":")[1]),r.port&&"0"!==r.port||(r.port="https"===o[0]?"443":"80"),r.hostname=e.hostname||n.hostname,r.pathname=e.pathname,r.protocol=o[0],"/"!==r.pathname.charAt(0)&&(r.pathname="/"+r.pathname);var i=!e.protocol||":"===e.protocol||e.protocol===n.protocol,a=e.hostname===document.domain&&e.port===n.port;return r.sameOrigin=i&&(!e.hostname||a),r}},{}],16:[function(t,e,n){function r(){}function o(t,e,n){return function(){return i(t,[f.now()].concat(c(arguments)),e?null:this,n),e?void 0:this}}var i=t("handle"),a=t(19),c=t(20),s=t("ee").get("tracer"),f=t("loader"),u=NREUM;"undefined"==typeof window.newrelic&&(newrelic=u);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",h=p+"ixn-";a(d,function(t,e){u[e]=o(p+e,!0,"api")}),u.addPageAction=o(p+"addPageAction",!0),u.setCurrentRouteName=o(p+"routeName",!0),e.exports=newrelic,u.interaction=function(){return(new r).get()};var l=r.prototype={createTracer:function(t,e){var n={},r=this,o="function"==typeof e;return i(h+"tracer",[f.now(),t,n],r),function(){if(s.emit((o?"":"no-")+"fn-start",[f.now(),r,o],n),o)try{return e.apply(this,arguments)}finally{s.emit("fn-end",[f.now()],n)}}}};a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){l[e]=o(h+e)}),newrelic.noticeError=function(t){"string"==typeof t&&(t=new Error(t)),i("err",[t,f.now()])}},{}],17:[function(t,e,n){e.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(e){return}}}},{}],18:[function(t,e,n){var r=0,o=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);o&&(r=+o[1]),e.exports=r},{}],19:[function(t,e,n){function r(t,e){var n=[],r="",i=0;for(r in t)o.call(t,r)&&(n[i]=e(r,t[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],20:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,o=n-e||0,i=Array(o<0?0:o);++r<o;)i[r]=t[e+r];return i}e.exports=r},{}],21:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],22:[function(t,e,n){function r(t){return!(t&&t instanceof Function&&t.apply&&!t[a])}var o=t("ee"),i=t(20),a="nr@original",c=Object.prototype.hasOwnProperty,s=!1;e.exports=function(t,e){function n(t,e,n,o){function nrWrapper(){var r,a,c,s;try{a=this,r=i(arguments),c="function"==typeof n?n(r,a):n||{}}catch(f){p([f,"",[r,a,o],c])}u(e+"start",[r,a,o],c);try{return s=t.apply(a,r)}catch(d){throw u(e+"err",[r,a,d],c),d}finally{u(e+"end",[r,a,s],c)}}return r(t)?t:(e||(e=""),nrWrapper[a]=t,d(t,nrWrapper),nrWrapper)}function f(t,e,o,i){o||(o="");var a,c,s,f="-"===o.charAt(0);for(s=0;s<e.length;s++)c=e[s],a=t[c],r(a)||(t[c]=n(a,f?c+o:o,i,c))}function u(n,r,o){if(!s||e){var i=s;s=!0;try{t.emit(n,r,o,e)}catch(a){p([a,n,r,o])}s=i}}function d(t,e){if(Object.defineProperty&&Object.keys)try{var n=Object.keys(t);return n.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(r){p([r])}for(var o in t)c.call(t,o)&&(e[o]=t[o]);return e}function p(e){try{t.emit("internal-error",e)}catch(n){}}return t||(t=o),n.inPlace=f,n.flag=a,n}},{}],ee:[function(t,e,n){function r(){}function o(t){function e(t){return t&&t instanceof r?t:t?s(t,c,i):i()}function n(n,r,o,i){if(!p.aborted||i){t&&t(n,r,o);for(var a=e(o),c=l(n),s=c.length,f=0;f<s;f++)c[f].apply(a,r);var d=u[y[n]];return d&&d.push([b,n,r,a]),a}}function h(t,e){w[t]=l(t).concat(e)}function l(t){return w[t]||[]}function m(t){return d[t]=d[t]||o(n)}function v(t,e){f(t,function(t,n){e=e||"feature",y[n]=e,e in u||(u[e]=[])})}var w={},y={},b={on:h,emit:n,get:m,listeners:l,context:e,buffer:v,abort:a,aborted:!1};return b}function i(){return new r}function a(){(u.api||u.feature)&&(p.aborted=!0,u=p.backlog={})}var c="nr@context",s=t("gos"),f=t(19),u={},d={},p=e.exports=o();p.backlog=u},{}],gos:[function(t,e,n){function r(t,e,n){if(o.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return t[e]=r,r}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){o.buffer([t],r),o.emit(t,e,n)}var o=t("ee").get("handle");e.exports=r,r.ee=o},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,i,function(){return o++})}var o=1,i="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!x++){var t=g.info=NREUM.info,e=p.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return u.abort();f(y,function(e,n){t[e]||(t[e]=n)}),s("mark",["onload",a()+g.offset],null,"api");var n=p.createElement("script");n.src="https://"+t.agent,e.parentNode.insertBefore(n,e)}}function o(){"complete"===p.readyState&&i()}function i(){s("mark",["domContent",a()+g.offset],null,"api")}function a(){return E.exists&&performance.now?Math.round(performance.now()):(c=Math.max((new Date).getTime(),c))-g.offset}var c=(new Date).getTime(),s=t("handle"),f=t(19),u=t("ee"),d=window,p=d.document,h="addEventListener",l="attachEvent",m=d.XMLHttpRequest,v=m&&m.prototype;NREUM.o={ST:setTimeout,SI:d.setImmediate,CT:clearTimeout,XHR:m,REQ:d.Request,EV:d.Event,PR:d.Promise,MO:d.MutationObserver};var w=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-spa-1044.min.js"},b=m&&v&&v[h]&&!/CriOS/.test(navigator.userAgent),g=e.exports={offset:c,now:a,origin:w,features:{},xhrWrappable:b};t(16),p[h]?(p[h]("DOMContentLoaded",i,!1),d[h]("load",r,!1)):(p[l]("onreadystatechange",o),d[l]("onload",r)),s("mark",["firstbyte",c],null,"api");var x=0,E=t(21)},{}]},{},["loader",2,14,5,3,4]);</script>

    <!-- Begin comScore Tag - Part 1 -->
    <script>
        var _comscore = _comscore || [];
        _comscore.push({ c1: "2", c2: "6036305" });
        (function() {
            var s = document.createElement("script"), el = document.getElementsByTagName("script")[0];
            s.async = true;
            s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
            el.parentNode.insertBefore(s, el);
        })();
    </script>
    <!-- End comScore Tag Part 1-->
    <link rel="apple-touch-icon-precomposed" sizes="180x180" href="/apple-touch-icon-180x180-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/apple-touch-icon-152x152-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/apple-touch-icon-120x120-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/apple-touch-icon-76x76-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/apple-touch-icon-72x72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/apple-touch-icon-60x60-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/apple-touch-icon-precomposed.png">
    <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
    <meta name="msapplication-TileColor" content="#ffffff">

    <!-- Maxymiser script start -->
    <script type="text/javascript"
            src="//service.maxymiser.net/cdn/allrecipes/js/mmcore.js"></script>
    <!-- Maxymiser script end -->

            <script src="https://karma.mdpcdn.com/service/js-min/karma.header.js" async></script>

    <script src="//assets.adobedtm.com/1c2ad567a53f27e563c4dc2c278a904b84dc5fde/satelliteLib-a07d47e4668bf3c3fa98aff5b2fc6d3f1d0981a3.js"></script>
    <script src='http://js01.media-allrecipes.com/assets/deployables/v-1.83.0.117/main-top.bundled.js' ></script>
        <meta name="correlationId" content="7adb742b-187f-4d55-ae42-b7250a271f1b"/>
</head>


<!-- ARLOG SERVER: RD0003FFA8CF35 LOCAL_IP: 10.255.18.6 MERCH_KEY: MerchData_4_1_1_214556_***_68 -->
<body ng-app="allrecipes" data-scoby-impression='{"id": "214556", "eventType": "Allrecipes.Recipe.PageView", "eventCategory": "Page.View", "value": {"user": {"loginStatus":"no","visitorType":"anonymous"}}}'>
<a id="top"></a>
    <a href="/new-this-month/" class="newThisMonth" rel="nofollow">New this month</a>
    <!-- Begin comScore Tag - Part 2 -->
    <noscript>
        <img src="http://b.scorecardresearch.com/p?c1=2&c2=6036305&cv=2.0&cj=1" />
    </noscript>
    <!-- End comScore Tag - Part 2 -->
    <div class="slider-container" global-ui-events>

        <div id="docking-leaderboard-container" class="leaderboard-wrapper" data-ad-container-autocollapse>
            <div class="docking-leaderboard-container">

                <div id="div-gpt-leaderboard-fixed-1" data-tier="1" class="docking-leaderboard"></div>
            </div>
        </div>

<div class="site-content">

    <header class="header new-nav">
        <section class="magazine-bar">
    <ul class="magazine-bar__social">
        <li>Follow us on:</li>
        <li><a href="http://pinterest.com/allrecipes/" target="_blank" class="pinterest" aria-label="Pinterest" title="Pinterest"><span class="svg-icon--social--pinterest svg-icon--social--pinterest-dims"></span></a></li>
        <li><a href="https://www.facebook.com/allrecipes" target="_blank" class="facebook" aria-label="Facebook" title="Facebook"><span class="svg-icon--social--facebook svg-icon--social--facebook-dims"></span></a></li>
        <li><a href="http://instagram.com/allrecipes" target="_blank" class="instagram" aria-label="Instagram" title="Instagram"><span class="svg-icon--social--instagram svg-icon--social--instagram-dims"></span></a></li>
        <li><a href="https://twitter.com/Allrecipes" target="_blank" class="twitter" aria-label="Twitter" title="Twitter"><span class="svg-icon--social--twitter svg-icon--social--twitter-dims"></span></a></li>
    </ul>
            <a class="magazine-bar__link" href="http://armagazine.com/upper-nav" target="_blank">Get the Allrecipes magazine <span>just $7.99</span></a>



</section>

<section ng-controller="ar_controllers_top_nav" ng-init="init()">
    <ul class="ar-nav-section">
        <li class="ar-logo-tab">
            <a href="/">
                <div class="ar-logo" ng-click="setAnalyticsCookie('ARlogo')">
<img alt="Allrecipes" height="36" src="http://images.media-allrecipes.com/ar-images/ARlogo.svg" width="96" />                </div>
            </a>
        </li>

        <li class="browse-recipes">
            <a href id="navmenu_recipes" class="recipes-txt {active:topBrowseRecipePanel_showing}" popup-trigger="topBrowseRecipePanel"><span>BROWSE</span><span class="icon--chevron-down"></span></a>
        </li>
        <li class="search-tab" ng-controller="ar_controllers_search">
            <div class="nav-search">
                <input id="searchText" type="text" placeholder="Find a recipe" ng-model="search.keywords" ng-keypress="isEnterKey($event) && performSearch()">
                <button class="btn-basic--small search-button" ng-click="performSearch()">
                    <span class="icon svg-icon--top-nav-bar--search-magnify svg-icon--top-nav-bar--search-magnify-dims"></span>
                </button>
                <div popup-trigger="topNavSearchMenu" id="ingredientSearch" class="ingredient-searchtxt" ar-event-focus="click" ar-event-focus-id="setFocus-keywordSearch">Ingredient Search</div>
            </div>
        </li>

        <li class="social-notification" popup-trigger="notifications" ng-class="{active: notifications_showing}">
            <div class="socialNotification" ng-controller="ar_controllers_notifications" ng-Click="setNotificationsViewed()" ng-cloak>
                <span class="svg-icon--top-nav-bar--nav-bell svg-icon--top-nav-bar--nav-bell-dims"></span>
                <span class="notification-count" ng-show="displayCount" ng-bind="notificationCount"></span>
            </div>
        </li>

        <li class="nav-favorites" ng-click="setAnalyticsCookie('favorites')">
            <a href="/cook/my/favorites/">
                <span class="svg-icon--top-nav-bar--grey-heart svg-icon--top-nav-bar--grey-heart-dims"></span>
            </a>
        </li>

            <li class="nav-profile anonymous-user">
                <a href="/account/authenticationwelcome/">
                    <div class="login-state">
                        <div class="img-profile icon svg-icon--top-nav-bar--userhead svg-icon--top-nav-bar--userhead-dims" ng-click="setAnalyticsCookie('profile|profile')"></div>
                        <span class="username icon-user--default" id="offCanvasDisplayName" ng-click="setAnalyticsCookie('create profile|sign up')">Create a profile</span>

                    </div>
                </a>
            </li>
        <li ng-class="{active:topNavSearchMenu_showing}" class="small-screen search-phone--landscape">
            <a href popup-trigger="topNavSearchMenu" ar-event-focus="click" ar-event-focus-id="setFocus-keywordSearch">
                <div class="nav-search">
                    <span><img alt="search" height="23" src="http://images.media-allrecipes.com/ar-images/icons/NavSearchIcon.svg" width="23" /></span>
                </div>
            </a>
        </li>

        <li class="small-screen profile-phone--landscape" ng-class="{active:topNavProfileMenu_showing}" popup-trigger="topNavProfileMenu">
            <a href>
                <div class="login-state">
                    <div class="img-profile icon svg-icon--top-nav-bar--userhead svg-icon--top-nav-bar--userhead-dims"></div>
                </div>
            </a>

        </li>
        <li class="hamburger-tab" ng-class="{active: topNavHamburgerMenu_showing}" popup-trigger="topNavHamburgerMenu">
            <a href>
                <div class="hamburger-nav">
                    <span class="browse-recipes-iconbar"></span>
                    <span class="browse-recipes-iconbar"></span>
                    <span class="browse-recipes-iconbar"></span>
                </div>
            </a>
        </li>
    </ul>

    <social-notification popup-panel="notifications" ng-cloak></social-notification>

    <div class="nav-tab nav-tab__search ng-hide" popup-panel="topNavSearchMenu" ng-cloak>




<form>
    <div data-ng-controller="ar_controllers_search">
        <span class="icon--close" title="Close Ingredient Search" hideWhenClicked></span>
        <div class="input-wrap--home">
            <span class="search-spyglass"><img alt="Allrecipes" height="23" src="http://images.media-allrecipes.com/ar-images/icons/NavSearchIcon.svg" width="23" /></span>
            <input id="searchText" type="text" placeholder="Keywords" ng-model="search.keywords" class="setFocus-keywordSearch">
        </div>



        <div class="input-wrap--home ingredients"
            ar-assign-scrollable-classes="{ outermostWrapper: 'ingredients', clippingFrame: 'ingredient-clipping-frame', draggableElement: 'ingredient-scroller' }">

            <div class="ingredient-clipping-frame">
                <ul class="ingredient-scroller"
                    ng-mousedown="mouseDown($event)" ng-mouseup="mouseUp($event)"
                    ar-touchstart="touchStart($event)" ar-touchend="touchEnd($event)" unselectable="on" onselectstart="return false;">

                    <li ng-repeat="ingredient in search.ingredientsInclude">
						<span>
							<span ng-bind="::ingredient"></span>
							<span class="icon--x ignore-ar-touchstart ignore-ar-touchend" ng-click="removeIngredientInclude(ingredient, $event)" unsubscribe-global-click-handler>&#x2715;</span>
						</span>
                    </li>

                </ul>
                </div>

            <div class="ingredient-add-exclude">

                <input id="includeIngText" type="text" ng-attr-placeholder="{{includeIngPlaceholderText}}" name="txtIncludeIng"
                       ng-model="includeIngredient" ng-focus="hideAds();" ng-blur="showAds()"
                       ng-keydown="(isBackspaceKey($event) && removeLastIngredientInclude($event)) || (isTabKey($event) && addIngredientInclude($event))" class="setFocus-includeIng">
            </div>
            <a class="btn-basic--small include" ng-click="addIngredientInclude($event)" ar-event-focus="click" ar-event-focus-id="setFocus-includeIng" ng-class="{ 'grayed-out': includeIngHitMax }"><span>+</span></a>

        </div>



        <div class="input-wrap--home ingredients"
            ar-assign-scrollable-classes="{ outermostWrapper: 'ingredients', clippingFrame: 'ingredient-clipping-frame', draggableElement: 'ingredient-scroller' }">

            <div class="ingredient-clipping-frame">
                <ul class="ingredient-scroller"
                    ng-mousedown="mouseDown($event)" ng-mouseup="mouseUp($event)"
                    ar-touchstart="touchStart($event)" ar-touchend="touchEnd($event)" unselectable="on" onselectstart="return false;">

                    <li ng-repeat="ingredient in search.ingredientsExclude">
                        <span class="exclude-item">
							<span ng-bind="::ingredient"></span>
                            <span class="icon--x ignore-ar-touchstart ignore-ar-touchend" ng-click="removeIngredientExclude(ingredient, $event)" unsubscribe-global-click-handler>&#x2715;</span>
                        </span>
                    </li>

                </ul>
                </div>

            <div class="ingredient-add-exclude">
                <input id="excludeIngText" type="text" ng-attr-placeholder="{{excludeIngPlaceholderText}}" name="txtExcludeIng"
                       ng-model="excludeIngredient" ng-focus="hideAds();" ng-blur="showAds()"
                       ng-keydown="(isBackspaceKey($event) && removeLastIngredientExclude($event)) || (isTabKey($event) && addIngredientExclude($event))" class="setFocus-excludeIng">
            </div>
            <a class="btn-basic--small exclude" ng-click="addIngredientExclude($event)" ar-event-focus="click" ar-event-focus-id="setFocus-excludeIng" ng-class="{ 'grayed-out': excludeIngHitMax }"><span>&#8212;</span></a>

        </div>

        <div class="nav-tab__buttons">
            <button class="btn-basic--small btn-search" ng-click="performSearch()" ng-cloak>Go</button>
        </div>
    </div>
    <ar-notification></ar-notification>
</form>


    </div>
    <div popup-panel="topBrowseRecipePanel" class="browse-recipe-tab social ng-hide" ng-cloak id="topBrowseRecipePanel">



<section class="hero-link  nav-tab__options recipe-nav-tab__options">
    <div class="grid underline_hero_link">

        <ul class="browse-hubs">
                <li class="browse-hubs__categories">
                    <h3>
                        Meal Type
                    </h3><span class="icon--chevron-right"></span>

                    <ul class="browse-hubs__subcategories">
<li>
                                <a href="/recipes/76/appetizers-and-snacks/" ng-click="setAnalyticsCookie('browse|appetizers \u0026 snacks')" title="Appetizers & Snacks Recipes">
                                    Appetizers &amp; Snacks
                                </a>
                            </li>
<li>
                                <a href="/recipes/78/breakfast-and-brunch/" ng-click="setAnalyticsCookie('browse|breakfast \u0026 brunch')" title="Breakfast & Brunch Recipes">
                                    Breakfast &amp; Brunch
                                </a>
                            </li>
<li>
                                <a href="/recipes/79/desserts/" ng-click="setAnalyticsCookie('browse|desserts')" title="Desserts Recipes">
                                    Desserts
                                </a>
                            </li>
<li>
                                <a href="/recipes/17562/dinner/" ng-click="setAnalyticsCookie('browse|dinner')" title="Dinner Recipes">
                                    Dinner
                                </a>
                            </li>
<li>
                                <a href="/recipes/77/drinks/" ng-click="setAnalyticsCookie('browse|drinks')" title="Drinks Recipes">
                                    Drinks
                                </a>
                            </li>
                    </ul>
                </li>
                <li class="browse-hubs__categories">
                    <h3>
                        Ingredient
                    </h3><span class="icon--chevron-right"></span>

                    <ul class="browse-hubs__subcategories">
<li>
                                <a href="/recipes/200/meat-and-poultry/beef/" ng-click="setAnalyticsCookie('browse|beef')" title="Beef Recipes">
                                    Beef
                                </a>
                            </li>
<li>
                                <a href="/recipes/201/meat-and-poultry/chicken/" ng-click="setAnalyticsCookie('browse|chicken')" title="Chicken Recipes">
                                    Chicken
                                </a>
                            </li>
<li>
                                <a href="/recipes/95/pasta-and-noodles/" ng-click="setAnalyticsCookie('browse|pasta')" title="Pasta Recipes">
                                    Pasta
                                </a>
                            </li>
<li>
                                <a href="/recipes/205/meat-and-poultry/pork/" ng-click="setAnalyticsCookie('browse|pork')" title="Pork Recipes">
                                    Pork
                                </a>
                            </li>
<li>
                                <a href="/recipes/416/seafood/fish/salmon/" ng-click="setAnalyticsCookie('browse|salmon')" title="Salmon Recipes">
                                    Salmon
                                </a>
                            </li>
                    </ul>
                </li>
                <li class="browse-hubs__categories">
                    <h3>
                        Diet &amp; Health
                    </h3><span class="icon--chevron-right"></span>

                    <ul class="browse-hubs__subcategories">
<li>
                                <a href="/recipes/739/healthy-recipes/diabetic/" ng-click="setAnalyticsCookie('browse|diabetic')" title="Diabetic Recipes">
                                    Diabetic
                                </a>
                            </li>
<li>
                                <a href="/recipes/741/healthy-recipes/gluten-free/" ng-click="setAnalyticsCookie('browse|gluten free')" title="Gluten Free Recipes">
                                    Gluten Free
                                </a>
                            </li>
<li>
                                <a href="/recipes/84/healthy-recipes/" ng-click="setAnalyticsCookie('browse|healthy')" title="Healthy Recipes">
                                    Healthy
                                </a>
                            </li>
<li>
                                <a href="/recipes/1232/healthy-recipes/low-calorie/" ng-click="setAnalyticsCookie('browse|low calorie')" title="Low Calorie Recipes">
                                    Low Calorie
                                </a>
                            </li>
<li>
                                <a href="/recipes/1231/healthy-recipes/low-fat/" ng-click="setAnalyticsCookie('browse|low fat')" title="Low Fat Recipes">
                                    Low Fat
                                </a>
                            </li>
                    </ul>
                </li>
                <li class="browse-hubs__categories">
                    <h3>
                        Seasonal
                    </h3><span class="icon--chevron-right"></span>

                    <ul class="browse-hubs__subcategories">
<li>
                                <a href="http://allrecipes.com/recipes/1640/holidays-and-events/labor-day/" ng-click="setAnalyticsCookie('browse|labor day')" title="Labor Day Recipes">
                                    Labor Day
                                </a>
                            </li>
<li>
                                <a href="http://allrecipes.com/recipes/11985/everyday-cooking/family-friendly/back-to-school/" ng-click="setAnalyticsCookie('browse|back to school')" title="Back To School Recipes">
                                    Back To School
                                </a>
                            </li>
<li>
                                <a href="http://allrecipes.com/recipes/196/holidays-and-events/rosh-hashanah/" ng-click="setAnalyticsCookie('browse|rosh hashanah')" title="Rosh Hashanah Recipes">
                                    Rosh Hashanah
                                </a>
                            </li>
<li>
                                <a href="http://allrecipes.com/recipes/1569/everyday-cooking/on-the-go/tailgating/" ng-click="setAnalyticsCookie('browse|tailgating')" title="Tailgating Recipes">
                                    Tailgating
                                </a>
                            </li>
<li>
                                <a href="http://allrecipes.com/recipes/85/holidays-and-events/" ng-click="setAnalyticsCookie('browse|more holidays and events')" title="More Holidays and Events Recipes">
                                    More Holidays and Events
                                </a>
                            </li>
                    </ul>
                </li>
                <li class="browse-hubs__categories">
                    <h3>
                        Dish Type
                    </h3><span class="icon--chevron-right"></span>

                    <ul class="browse-hubs__subcategories">
<li>
                                <a href="/recipes/156/bread/" ng-click="setAnalyticsCookie('browse|breads')" title="Breads Recipes">
                                    Breads
                                </a>
                            </li>
<li>
                                <a href="/recipes/276/desserts/cakes/" ng-click="setAnalyticsCookie('browse|cakes')" title="Cakes Recipes">
                                    Cakes
                                </a>
                            </li>
<li>
                                <a href="/recipes/96/salad/" ng-click="setAnalyticsCookie('browse|salads')" title="Salads Recipes">
                                    Salads
                                </a>
                            </li>
<li>
                                <a href="/recipes/138/drinks/smoothies/" ng-click="setAnalyticsCookie('browse|smoothies')" title="Smoothies Recipes">
                                    Smoothies
                                </a>
                            </li>
<li>
                                <a href="/recipes/94/soups-stews-and-chili/" ng-click="setAnalyticsCookie('browse|soups, stews \u0026 chili')" title="Soups, Stews & Chili Recipes">
                                    Soups, Stews &amp; Chili
                                </a>
                            </li>
                    </ul>
                </li>
                <li class="browse-hubs__categories">
                    <h3>
                        Cooking Style
                    </h3><span class="icon--chevron-right"></span>

                    <ul class="browse-hubs__subcategories">
<li>
                                <a href="/recipes/88/bbq-grilling/" ng-click="setAnalyticsCookie('browse|bbq \u0026 grilling')" title="BBQ & Grilling Recipes">
                                    BBQ &amp; Grilling
                                </a>
                            </li>
<li>
                                <a href="/recipes/1947/everyday-cooking/quick-and-easy/" ng-click="setAnalyticsCookie('browse|quick \u0026 easy')" title="Quick & Easy Recipes">
                                    Quick &amp; Easy
                                </a>
                            </li>
<li>
                                <a href="/recipes/253/everyday-cooking/slow-cooker/" ng-click="setAnalyticsCookie('browse|slow cooker')" title="Slow Cooker Recipes">
                                    Slow Cooker
                                </a>
                            </li>
<li>
                                <a href="/recipes/1227/everyday-cooking/vegan/" ng-click="setAnalyticsCookie('browse|vegan')" title="Vegan Recipes">
                                    Vegan
                                </a>
                            </li>
<li>
                                <a href="/recipes/87/everyday-cooking/vegetarian/" ng-click="setAnalyticsCookie('browse|vegetarian')" title="Vegetarian Recipes">
                                    Vegetarian
                                </a>
                            </li>
                    </ul>
                </li>
                <li class="browse-hubs__categories">
                    <h3>
                        World Cuisine
                    </h3><span class="icon--chevron-right"></span>

                    <ul class="browse-hubs__subcategories">
<li>
                                <a href="/recipes/227/world-cuisine/asian/" ng-click="setAnalyticsCookie('browse|asian')" title="Asian Recipes">
                                    Asian
                                </a>
                            </li>
<li>
                                <a href="/recipes/233/world-cuisine/asian/indian/" ng-click="setAnalyticsCookie('browse|indian')" title="Indian Recipes">
                                    Indian
                                </a>
                            </li>
<li>
                                <a href="/recipes/723/world-cuisine/european/italian/" ng-click="setAnalyticsCookie('browse|italian')" title="Italian Recipes">
                                    Italian
                                </a>
                            </li>
<li>
                                <a href="/recipes/728/world-cuisine/latin-american/mexican/" ng-click="setAnalyticsCookie('browse|mexican')" title="Mexican Recipes">
                                    Mexican
                                </a>
                            </li>
<li>
                                <a href="/recipes/15876/us-recipes/southern/" ng-click="setAnalyticsCookie('browse|southern')" title="Southern Recipes">
                                    Southern
                                </a>
                            </li>
                    </ul>
                </li>
                <li class="browse-hubs__categories">
                    <h3>
                        Special Collections
                    </h3><span class="icon--chevron-right"></span>

                    <ul class="browse-hubs__subcategories">
<li>
                                <a href="http://allrecipes.com/recipes/17235/everyday-cooking/allrecipes-magazine-recipes/" ng-click="setAnalyticsCookie('browse|allrecipes magazine recipes')" title="Allrecipes Magazine Recipes">
                                    Allrecipes Magazine Recipes
                                </a>
                            </li>
<li>
                                <a href="http://allrecipes.com/recipes/16791/everyday-cooking/special-collections/web-show-recipes/food-wishes/" ng-click="setAnalyticsCookie('browse|food wishes with chef john')" title="Food Wishes with Chef John Recipes">
                                    Food Wishes with Chef John
                                </a>
                            </li>
<li>
                                <a href="http://dish.allrecipes.com/trusted-brand-pages/" ng-click="setAnalyticsCookie('browse|trusted brands')" title="Trusted Brands Recipes">
                                    Trusted Brands
                                </a>
                            </li>
                    </ul>
                </li>
        </ul>
    </div>
    <a class="recipe-hero-link__item__text" href="/recipes?grouping=all" ng-click="setAnalyticsCookie('browse|all categories')">All Categories</a>
</section>


    </div>
    <!-- user sign in area -->
    <div class="nav-tab social profile-nav ng-hide" popup-panel="topNavProfileMenu" ng-cloak>
        <ul class="nav-tab__options">

            <li ng-click="setAnalyticsCookie('profile|feed', 'menu')">
                <a href="/account/authenticationwelcome/?loginReferrerUrl=/home" id="navmenu_myFeed">
                    <span class="iconContainer"><span class="icon svg-icon--top-nav-bar--home svg-icon--top-nav-bar--home-dims"></span></span>
                    <span class="itemText">Feed</span>
                </a>
            </li>
            <li ng-click="setAnalyticsCookie('profile|profile', 'menu')">
                <a href="/cook/my/" id="navmenu_myprofile">
                    <span class="iconContainer"><span class="icon svg-icon--top-nav-bar--nav-profile svg-icon--top-nav-bar--nav-profile-dims"></span></span>
                    <span class="itemText">Profile</span>
                </a>
            </li>
            <li ng-click="setAnalyticsCookie('profile|favorites', 'menu')">
                <a href="/cook/my/favorites/" rel="nofollow" id="navmenu_recipebox">
                    <span class="iconContainer">
                        <span class="icon svg-icon--top-nav-bar--grey-heart svg-icon--top-nav-bar--grey-heart-dims"></span>
                    </span>
                    <span class="itemText">Favorites</span>
                </a>
            </li>
            <li ng-click="setAnalyticsCookie('profile|friends', 'menu')">
                <a href="/cook/my/findfriends/" rel="nofollow" id="navmenu_findfriends">
                    <span class="iconContainer">
                        <span class="icon svg-icon--top-nav-bar--nav-friends svg-icon--top-nav-bar--nav-friends-dims"></span>
                    </span>
                    <span class="itemText">Friends</span>
                </a>
            </li>

            <li ng-click="setAnalyticsCookie('profile|shopping list', 'menu')">
                <a href="/my/shopping-lists/" rel="nofollow" id="navmenu_shoppinglist">
                    <span class="iconContainer">
                        <span class="icon svg-icon--top-nav-bar--grey-shopping svg-icon--top-nav-bar--grey-shopping-dims"></span>
                    </span>
                    <span class="itemText">Shopping List</span>
                </a>
            </li>
            <li ng-click="setAnalyticsCookie('profile|settings', 'menu')">
                <a href="/cook/my/account-settings/" rel="nofollow" id="navmenu_settings">
                    <span class="iconContainer">
                        <span class="icon svg-icon--top-nav-bar--nav-settings svg-icon--top-nav-bar--nav-settings-dims"></span>
                    </span>
                    <span class="itemText">Settings</span>
                </a>
            </li>

        </ul>

            <div class="signin" ng-click="setAnalyticsCookie('profile|sign in ', 'menu')">
                <button onclick=" location.href='/account/authenticationwelcome/?actionsource=' +(typeof dataLayer !=='undefined' ? dataLayer.page.category.contentType : '' ) " class="btn-basic--large btn-gold" id="navmenu_signin_signup">Sign In <em>or</em> Sign Up</button>
            </div>

    </div>

    <!-- hub links, etc. -->
    <div class="nav-tab last ng-hide" popup-panel="topNavHamburgerMenu" ng-cloak>

        <ul class="nav-tab__options">
            <li class="underline_link">
                <a href="" id="navmenu_recipes" popup-trigger="browseRecipePanel" ng-click="browseNav()">
                    <span class="icon svg-icon--top-nav-bar--nav-browse-orange svg-icon--top-nav-bar--nav-browse-orange-dims" ng-class="{'active': isActive}"></span>
                    <span class="icon svg-icon--top-nav-bar--nav-browse svg-icon--top-nav-bar--nav-browse-dims" ng-class="{'hidden': isActive}"></span>
                    <span class="nav-link-text">Browse Recipes</span>
                    <span class="icon-chevron" ng-class="{'active': isActive}"></span>
                </a>
            </li>





            <li id="mobile-nav-container" class="browse-div-option ng-hide" popup-panel="browseRecipePanel">




<ul class="nav-tab__mobile-browse">

        <li>
            <input type="checkbox" id="Meal Type"><label for="Meal Type">Meal Type<span class="icon-chevron"></span></label>
            <ul class="mobile-browse-subnav">
<li><a href="/recipes/76/appetizers-and-snacks/" ng-click="setAnalyticsCookie('browse|appetizers \u0026 snacks')" title="Appetizers & Snacks Recipes">Appetizers &amp; Snacks</a></li>
<li><a href="/recipes/78/breakfast-and-brunch/" ng-click="setAnalyticsCookie('browse|breakfast \u0026 brunch')" title="Breakfast & Brunch Recipes">Breakfast &amp; Brunch</a></li>
<li><a href="/recipes/79/desserts/" ng-click="setAnalyticsCookie('browse|desserts')" title="Desserts Recipes">Desserts</a></li>
<li><a href="/recipes/17562/dinner/" ng-click="setAnalyticsCookie('browse|dinner')" title="Dinner Recipes">Dinner</a></li>
<li><a href="/recipes/77/drinks/" ng-click="setAnalyticsCookie('browse|drinks')" title="Drinks Recipes">Drinks</a></li>
            </ul>
        </li>
        <li>
            <input type="checkbox" id="Ingredient"><label for="Ingredient">Ingredient<span class="icon-chevron"></span></label>
            <ul class="mobile-browse-subnav">
<li><a href="/recipes/200/meat-and-poultry/beef/" ng-click="setAnalyticsCookie('browse|beef')" title="Beef Recipes">Beef</a></li>
<li><a href="/recipes/201/meat-and-poultry/chicken/" ng-click="setAnalyticsCookie('browse|chicken')" title="Chicken Recipes">Chicken</a></li>
<li><a href="/recipes/95/pasta-and-noodles/" ng-click="setAnalyticsCookie('browse|pasta')" title="Pasta Recipes">Pasta</a></li>
<li><a href="/recipes/205/meat-and-poultry/pork/" ng-click="setAnalyticsCookie('browse|pork')" title="Pork Recipes">Pork</a></li>
<li><a href="/recipes/416/seafood/fish/salmon/" ng-click="setAnalyticsCookie('browse|salmon')" title="Salmon Recipes">Salmon</a></li>
            </ul>
        </li>
        <li>
            <input type="checkbox" id="Diet &amp; Health"><label for="Diet &amp; Health">Diet &amp; Health<span class="icon-chevron"></span></label>
            <ul class="mobile-browse-subnav">
<li><a href="/recipes/739/healthy-recipes/diabetic/" ng-click="setAnalyticsCookie('browse|diabetic')" title="Diabetic Recipes">Diabetic</a></li>
<li><a href="/recipes/741/healthy-recipes/gluten-free/" ng-click="setAnalyticsCookie('browse|gluten free')" title="Gluten Free Recipes">Gluten Free</a></li>
<li><a href="/recipes/84/healthy-recipes/" ng-click="setAnalyticsCookie('browse|healthy')" title="Healthy Recipes">Healthy</a></li>
<li><a href="/recipes/1232/healthy-recipes/low-calorie/" ng-click="setAnalyticsCookie('browse|low calorie')" title="Low Calorie Recipes">Low Calorie</a></li>
<li><a href="/recipes/1231/healthy-recipes/low-fat/" ng-click="setAnalyticsCookie('browse|low fat')" title="Low Fat Recipes">Low Fat</a></li>
            </ul>
        </li>
        <li>
            <input type="checkbox" id="Seasonal"><label for="Seasonal">Seasonal<span class="icon-chevron"></span></label>
            <ul class="mobile-browse-subnav">
<li><a href="http://allrecipes.com/recipes/1640/holidays-and-events/labor-day/" ng-click="setAnalyticsCookie('browse|labor day')" title="Labor Day Recipes">Labor Day</a></li>
<li><a href="http://allrecipes.com/recipes/11985/everyday-cooking/family-friendly/back-to-school/" ng-click="setAnalyticsCookie('browse|back to school')" title="Back To School Recipes">Back To School</a></li>
<li><a href="http://allrecipes.com/recipes/196/holidays-and-events/rosh-hashanah/" ng-click="setAnalyticsCookie('browse|rosh hashanah')" title="Rosh Hashanah Recipes">Rosh Hashanah</a></li>
<li><a href="http://allrecipes.com/recipes/1569/everyday-cooking/on-the-go/tailgating/" ng-click="setAnalyticsCookie('browse|tailgating')" title="Tailgating Recipes">Tailgating</a></li>
<li><a href="http://allrecipes.com/recipes/85/holidays-and-events/" ng-click="setAnalyticsCookie('browse|more holidays and events')" title="More Holidays and Events Recipes">More Holidays and Events</a></li>
            </ul>
        </li>
        <li>
            <input type="checkbox" id="Dish Type"><label for="Dish Type">Dish Type<span class="icon-chevron"></span></label>
            <ul class="mobile-browse-subnav">
<li><a href="/recipes/156/bread/" ng-click="setAnalyticsCookie('browse|breads')" title="Breads Recipes">Breads</a></li>
<li><a href="/recipes/276/desserts/cakes/" ng-click="setAnalyticsCookie('browse|cakes')" title="Cakes Recipes">Cakes</a></li>
<li><a href="/recipes/96/salad/" ng-click="setAnalyticsCookie('browse|salads')" title="Salads Recipes">Salads</a></li>
<li><a href="/recipes/138/drinks/smoothies/" ng-click="setAnalyticsCookie('browse|smoothies')" title="Smoothies Recipes">Smoothies</a></li>
<li><a href="/recipes/94/soups-stews-and-chili/" ng-click="setAnalyticsCookie('browse|soups, stews \u0026 chili')" title="Soups, Stews & Chili Recipes">Soups, Stews &amp; Chili</a></li>
            </ul>
        </li>
        <li>
            <input type="checkbox" id="Cooking Style"><label for="Cooking Style">Cooking Style<span class="icon-chevron"></span></label>
            <ul class="mobile-browse-subnav">
<li><a href="/recipes/88/bbq-grilling/" ng-click="setAnalyticsCookie('browse|bbq \u0026 grilling')" title="BBQ & Grilling Recipes">BBQ &amp; Grilling</a></li>
<li><a href="/recipes/1947/everyday-cooking/quick-and-easy/" ng-click="setAnalyticsCookie('browse|quick \u0026 easy')" title="Quick & Easy Recipes">Quick &amp; Easy</a></li>
<li><a href="/recipes/253/everyday-cooking/slow-cooker/" ng-click="setAnalyticsCookie('browse|slow cooker')" title="Slow Cooker Recipes">Slow Cooker</a></li>
<li><a href="/recipes/1227/everyday-cooking/vegan/" ng-click="setAnalyticsCookie('browse|vegan')" title="Vegan Recipes">Vegan</a></li>
<li><a href="/recipes/87/everyday-cooking/vegetarian/" ng-click="setAnalyticsCookie('browse|vegetarian')" title="Vegetarian Recipes">Vegetarian</a></li>
            </ul>
        </li>
        <li>
            <input type="checkbox" id="World Cuisine"><label for="World Cuisine">World Cuisine<span class="icon-chevron"></span></label>
            <ul class="mobile-browse-subnav">
<li><a href="/recipes/227/world-cuisine/asian/" ng-click="setAnalyticsCookie('browse|asian')" title="Asian Recipes">Asian</a></li>
<li><a href="/recipes/233/world-cuisine/asian/indian/" ng-click="setAnalyticsCookie('browse|indian')" title="Indian Recipes">Indian</a></li>
<li><a href="/recipes/723/world-cuisine/european/italian/" ng-click="setAnalyticsCookie('browse|italian')" title="Italian Recipes">Italian</a></li>
<li><a href="/recipes/728/world-cuisine/latin-american/mexican/" ng-click="setAnalyticsCookie('browse|mexican')" title="Mexican Recipes">Mexican</a></li>
<li><a href="/recipes/15876/us-recipes/southern/" ng-click="setAnalyticsCookie('browse|southern')" title="Southern Recipes">Southern</a></li>
            </ul>
        </li>
        <li>
            <input type="checkbox" id="Special Collections"><label for="Special Collections">Special Collections<span class="icon-chevron"></span></label>
            <ul class="mobile-browse-subnav">
<li><a href="http://allrecipes.com/recipes/17235/everyday-cooking/allrecipes-magazine-recipes/" ng-click="setAnalyticsCookie('browse|allrecipes magazine recipes')" title="Allrecipes Magazine Recipes">Allrecipes Magazine Recipes</a></li>
<li><a href="http://allrecipes.com/recipes/16791/everyday-cooking/special-collections/web-show-recipes/food-wishes/" ng-click="setAnalyticsCookie('browse|food wishes with chef john')" title="Food Wishes with Chef John Recipes">Food Wishes with Chef John</a></li>
<li><a href="http://dish.allrecipes.com/trusted-brand-pages/" ng-click="setAnalyticsCookie('browse|trusted brands')" title="Trusted Brands Recipes">Trusted Brands</a></li>
            </ul>
        </li>
</ul>

<div class="see-all"><a href="/recipes/?grouping=all" target="_self">See all categories</a></div>


            </li>

            <li ng-click="setAnalyticsData('allrecipes magazine')">
                <a href="http://armagazine.com/mobile-site" id="navmenu_magazine" target="_blank">
                    <span class="icon svg-icon--top-nav-bar--nav-magazine svg-icon--top-nav-bar--nav-magazine-dims"></span>
                    <span>Magazine - Just $7.99</span>
                </a>
            </li>

            <li ng-click="setAnalyticsData('dinner spinner tv')">
                <a href="http://allrecipes.com/DinnerSpinnerTV/" id="navmenu_tv">
                    <span class="icon svg-icon--top-nav-bar--tv_icon svg-icon--top-nav-bar--tv_icon-dims"></span>
                    <span>Dinner Spinner TV</span>
                </a>
            </li>

            <li ng-click="setAnalyticsData('shop')">
                <a href="http://shop.allrecipes.com/shop" id="navmenu_shop" target="_blank">
                    <span class="icon svg-icon--top-nav-bar--nav-shop svg-icon--top-nav-bar--nav-shop-dims"></span>
                    <span>Shop</span>
                </a>
            </li>
            <li class="underline_link" ng-click="setAnalyticsData('cooking school')">
                <a href="http://cookingschool.allrecipes.com/" id="navmenu_cooking_school" target="_blank">
                    <span class="icon svg-icon--top-nav-bar--nav-cookingschool svg-icon--top-nav-bar--nav-cookingschool-dims"></span>
                    <span>Cooking School</span>
                </a>
            </li>
            <li ng-click="setAnalyticsData('articles and tips')">
                <a href="http://dish.allrecipes.com/" target="_self" id="navmenu_articles">
                    <span class="icon svg-icon--top-nav-bar--nav-article svg-icon--top-nav-bar--nav-article-dims"></span>
                    <span>Articles & Tips</span>
                </a>
            </li>
            <li ng-click="setAnalyticsCookie('newsletters')">
                <a href="/cook/my/account-settings/#NewslettersSubscription" id="navmenu_social_gallery">
                    <span class="icon svg-icon--top-nav-bar--nav-newsletters svg-icon--top-nav-bar--nav-newsletters-dims"></span>
                    <span>Newsletters</span>
                </a>
            </li>
            <li ng-click="setAnalyticsData('ask the community')">
                <a href="http://dish.allrecipes.com/ask-the-community/" target="_self" id="navmenu_dish">
                    <span class="icon svg-icon--top-nav-bar--nav-community svg-icon--top-nav-bar--nav-community-dims"></span>
                    <span>Ask the Community</span>
                </a>
            </li>
            <li class="underline_link" ng-click="setAnalyticsData('help')">
                <a href="http://dish.allrecipes.com/customer-service/" id="navmenu_help" target="_self">
                    <span class="icon svg-icon--top-nav-bar--nav-help svg-icon--top-nav-bar--nav-help-dims"></span>
                    <span>Help</span>
                </a>
            </li>
            <li>
                <a href="http://dish.allrecipes.com/allrecipes-jobs-2/" target="_self" ng-click="setAnalyticsData('jobs')">Jobs</a>
                <a href="http://press.allrecipes.com/" ng-click="setAnalyticsData('newsroom')">Newsroom</a>
            </li>

        </ul>
    </div>
</section>

    </header>


    <div class="container-content body-content">

<script type="text/javascript">
    window.AR.Util.CountryCode = "False"  === "True" ? "Canada" : "US";
    window.isDelayedAdsTest = false;
</script>


<div id="ad-is-mobile"></div>
<div id="ad-is-tablet"></div>
<script>
    (function($) {

        window.adConfiguration = {
            "settings": {
                "responsiveGridSlots": 0 }
        };


        var mobileAdElem = document.getElementById('ad-is-mobile');
        var isMobileAds = !(mobileAdElem.offsetWidth === 0 && mobileAdElem.offsetHeight === 0);


        var isTablet = $ && $('#ad-is-tablet').css('display') === 'none';


        window.adService = {
            isDesktop: window.innerWidth > 1024,
            mobileAds: isMobileAds,
            tabletAds: isTablet,
            unitValues: {
                channel: "soup"
            },
            pageTargetingValues: {
                type: "recipe",
                mention_category: "foil",
                mention: "unbranded",
                "status": "visitor",
                "oid": "2CC4E750051D2174-600019100000BC94",
                "fit": "0",
                "r": "214556",
                "id": "214556",
                "k": [21,35,39,46,49,67,97,125,151,169,173,192,201,210,215,221,235,241,245,253,259,617,696]
            },
            suppressInterstitial: true
        };

    })($ || window.jQuery);
</script>

<div class="recipe-container-outer">
    <section class="ar_recipe_index full-page" itemscope itemtype="http://schema.org/Recipe">
        <link itemprop="url" href="http://allrecipes.com/recipe/214556/steak-soup/" />
        <meta itemprop="mainEntityOfPage" content="True" />


        <ul class="breadcrumbs breadcrumbs" data-scroll-left>

    <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
        <a data-internal-referrer-link="recipe breadcrumb" data-click-id="recipe breadcrumb 1" href="/" target="_self" itemprop="url">
            <span class="toggle-similar__title" itemprop="title">
                Home
            </span>
            <span class="icon--chevron-right"></span>
        </a>
    </li>

        <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb" data-list-item>
            <a data-internal-referrer-link="recipe breadcrumb" data-click-id="recipe breadcrumb 2" href="/recipes/" target="_self" itemprop="url">
                <span class="toggle-similar__title" itemprop="title">
                    Recipes
                </span>
                    <span class="icon--chevron-right"></span>
            </a>
        </li>
        <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb" data-list-item>
            <a data-internal-referrer-link="recipe breadcrumb" data-click-id="recipe breadcrumb 3" href="/recipes/94/soups-stews-and-chili/" target="_self" itemprop="url">
                <span class="toggle-similar__title" itemprop="title">
                    Soups, Stews and Chili
                </span>
                    <span class="icon--chevron-right"></span>
            </a>
        </li>
        <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb" data-list-item>
            <a data-internal-referrer-link="recipe breadcrumb" data-click-id="recipe breadcrumb 4" href="/recipes/16369/soup/" target="_self" itemprop="url">
                <span class="toggle-similar__title" itemprop="title">
                    Soup
                </span>
                    <span class="icon--chevron-right"></span>
            </a>
        </li>
        <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb" data-list-item>
            <a data-internal-referrer-link="recipe breadcrumb" data-click-id="recipe breadcrumb 5" href="/recipes/445/beef-soup/" target="_self" itemprop="url">
                <span class="toggle-similar__title" itemprop="title">
                    Beef Soup
                </span>
            </a>
        </li>

</ul>

        <div class="summary-background">
            <div class="summaryGroup clearfix">



<section class="hero-photo hero-photo--downsized ">


                <span ng-controller="ar_controllers_recipe_photo" ng-hide="showplayer" class="hero-photo__image" >
                <a href="/recipe/214556/steak-soup/photos/488609/" class="video-play"
                   ng-click="$event.preventDefault(); openGalery('', 214556, 'Steak Soup', 'http://images.media-allrecipes.com/userphotos/560x315/488609.jpg')">
                        <img class="rec-photo" id=BI_openPhotoModal1 src="http://images.media-allrecipes.com/userphotos/560x315/488609.jpg" alt="Steak Soup" title="Steak Soup" itemprop="image" />
                </a>
                                    <a href="/recipe/214556/steak-soup/photos/488609/" title="See Recipe Pictures" class="icon-photoPage photo-strip" ng-click="$event.preventDefault(); openGalery(null, 214556, 'Steak Soup', 'http://images.media-allrecipes.com/userphotos/560x315/488609.jpg')">

                        <span class="photo-strip__items">
                            <span class="picture-count">26</span>
                                <img src='http://images.media-allrecipes.com/userphotos/250x140/4473671.jpg'>
                                <img src='http://images.media-allrecipes.com/userphotos/250x140/4468201.jpg'>
                                <img src='http://images.media-allrecipes.com/userphotos/250x140/4457375.jpg'>
                                <img src='http://images.media-allrecipes.com/userphotos/250x140/4303626.jpg'>
                                <img src='http://images.media-allrecipes.com/userphotos/250x140/4086870.jpg'>
                                <img src='http://images.media-allrecipes.com/userphotos/250x140/3903319.jpg'>
                        </span>
                    </a>

            </span>
            <ar-notification></ar-notification>
    <div class="photo-with-video">
    </div>

</section>


<section class="recipe-summary clearfix">
    <meta property="og:rating" content="4.63888883590698" />
    <meta property="og:rating_scale" content="5" />
    <div id="karma-lazy-sponsorLogo" class="recipe-summary__logo"></div>
    <h1 class="recipe-summary__h1" itemprop="name">Steak Soup</h1>
    <!--rating stars-->
    <div class="recipe-summary__stars">
        <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 4.63888883590698 >
        <img height="20" width="20" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="20" width="20" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="20" width="20" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="20" width="20" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="20" width="20" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/half-star-2015.svg"  />
</div>
        <span itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating" class="aggregate-rating">
            <meta itemprop="ratingValue" content="4.64">
            <meta itemprop="reviewCount" content="194">
        </span>
    </div>
    <!-- total made it count & read review link -->
    <div class="summary-stats-box">
        <div class="total-made-it" ng-cloak data-ng-show="show" data-ng-controller="ar_controllers_recipe_summary" data-ng-init="init(495,null)">
            <span ng-controller="ar_controllers_recipe_reviews" ng-init="init(214556, 2, 9, 'Recipe', 5, 'MostHelpful')">

                    <a class="read--reviews" ng-click="$event.preventDefault();reviewModalDialog(0, sortBy)" target="_self">
                        <span class="made-it-count" ng-bind="totalRecipeMadeCount |largeNumberDisplay"></span><span>&nbsp;made it</span><span>&nbsp; |&nbsp;</span>
                        <span class="review-count">194 reviews</span>
                    </a>
            </span>
            <span ng-controller="ar_controllers_recipe_photo" ng-hide="showplayer">
                    <a href="/recipe/214556/steak-soup/photos/488609/" class="icon-photoPage-link" ng-click="$event.preventDefault(); openGalery(null, 214556, 'Steak Soup', 'http://images.media-allrecipes.com/userphotos/560x315/488609.jpg')">
                        <span>&nbsp; | &nbsp;</span><span class="picture-count-link"><format-large-number number="26"></format-large-number> photos</span>
                    </a>

            </span>
        </div>
    </div>


    <div class="submitter">
            <div class="submitter__img">
                    <a href="/cook/4835921/"><img class="img-profile img-profile--submitter" src="http://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png" alt="FoodieFamily4" title="FoodieFamily4" /></a>
                <span><span class="icon--cook-card-follower" title="Followers"></span><span><format-large-number number="1"></format-large-number></span></span>
            </div>
        <p>
            <span class="submitter__byline">Recipe by: </span><span class="submitter__name" itemprop="author">FoodieFamily4</span>
        </p>
        <div class="submitter__description" itemprop="description">
&#34;This is an extremely hearty soup that only gets better in the fridge!  It is one of the only soups you will not have to  jazz up on your own, and people will remember you for it!  This is a great cold-weather soup, but my family requests it all year long.&#34;        </div>
    </div>


</section>

            </div>
        </div>

<div ng-controller="ar_controllers_recipe_toolbar" ng-init="init(214556, 'Recipe')">
    <div class="dropdown-heart" data-show-on-scroll="700" ng-show="(yTrigger == true) && (saved == false)" ng-cloak>
        <a href="" class="save-on-click" ng-click="saveOnClick(214556, 'Recipe',&quot;Steak Soup&quot;,'http://images.media-allrecipes.com/userphotos/250x250/488609.jpg')">
            <span class="svg-icon--recipe-navbar--heart_off svg-icon--recipe-navbar--heart_off-dims"></span>
            <span>Save to favorites</span>
        </a>
    </div>
    <section class="recipe-navbar">
        <a href="" class="save-on-click" ng-click="saveOnClick(214556, 'Recipe',&quot;Steak Soup&quot;,'http://images.media-allrecipes.com/userphotos/250x250/488609.jpg')">
            <div ng-switch on="saved" ng-cloak>
                <div ng-switch-when="true">
                    <span class="svg-icon--recipe-navbar--heart_on svg-icon--recipe-navbar--heart_on-dims"></span>
                    <span>Saved</span>
                </div>
                <div ng-switch-when="false">
                    <span class="svg-icon--recipe-navbar--heart_off svg-icon--recipe-navbar--heart_off-dims"></span>
                    <span>Save</span>
                </div>
            </div>
        </a>
        <a href="" ng-click="madeItClick()">
            <span class="svg-icon--recipe-navbar--i_made_it svg-icon--recipe-navbar--i_made_it-dims"></span>
            <span>I Made It</span>
        </a>
        <a href="" class="rate-on-click" ng-click="rateItOnClick(false)">
            <span class="svg-icon--recipe-navbar--rate svg-icon--recipe-navbar--rate-dims"></span>
            <span>Rate it</span>
        </a>
        <a href="" ng-click="openShareModal({&quot;RecipeId&quot;:214556,&quot;RecipeType&quot;:0,&quot;IsLoggedIn&quot;:false,&quot;PinterestUrl&quot;:&quot;http://pinterest.com/pin/create/button/?url=http://allrecipes.com/recipe/214556/steak-soup/?lnkid=usspnt\u0026media=http://images.media-allrecipes.com/userphotos/250x250/488609.jpg\u0026description=Steak%20Soup%20-%20Allrecipes.com&quot;,&quot;FacebookUrl&quot;:&quot;https://facebook.com/sharer.php?u=http://allrecipes.com/recipe/214556/steak-soup/?lnkid=ussfac&quot;,&quot;TwitterUrl&quot;:&quot;https://twitter.com/intent/tweet?url=http://allrecipes.com/recipe/214556/steak-soup/?lnkid=usstwt\u0026text=Steak%20Soup%20-%20Allrecipes.com\u0026via=Allrecipes&quot;,&quot;GooglePlusUrl&quot;:&quot;https://plus.google.com/share?url=http://allrecipes.com/recipe/214556/steak-soup/?lnkid=ussgog&quot;,&quot;ImageUrl&quot;:&quot;http://images.media-allrecipes.com/userphotos/250x250/488609.jpg&quot;,&quot;Title&quot;:&quot;Steak%20Soup%20-%20Allrecipes.com&quot;,&quot;ShareSectionTitle&quot;:null})" hidewhenclicked>
            <span class="icon svg-icon--recipe-navbar--share svg-icon--recipe-navbar--share-dims"></span>
            <span>Share</span>
        </a>
        <a id="print-recipe" ng-href="print/?recipeType=Recipe&{{ printServings }}&{{printMetrics}}">
            <span class="svg-icon--recipe-navbar--print svg-icon--recipe-navbar--print-dims"></span>
            <span>Print</span>
        </a>
    </section>
</div>

        <div data-ad-container-autocollapse class="ad-recipe-page-middle-container ad-mobile-only reserve-ad-space">
    <div id="ad-recipepagemiddle-2" class="ad-recipe-page-middle-2">
        <div id="div-gpt-mob-square-fixed-1" data-tier="1"></div>
    </div>
    <span class="advertisement">ADVERTISEMENT</span>
</div>


        <section class="recipe-ingredients" ng-controller="ar_controllers_recipe_ingredient" ng-init="init(8,214556,'Recipe',0, 'Steak Soup')">
    <div id="msg-add-to-shoppinglist" class="ng-hide" ng-cloak>
        <span>Added to shopping list.</span>
        <a href="">Go to shopping list.</a>
    </div>
    <h2 class="heading__h2--gutters recipe-ingredients__header">Ingredients</h2>
<span class="recipe-ingredients__header__toggles">
        <span class="ready-in-time__container">
            <span class="ready-in-time">2 h 15 m</span>
            <span class="icon--stats-clock"></span>
        </span>

    <meta id="metaRecipeServings" itemprop="recipeYield" content="8">

    <a href id="servings-button" popup-trigger="servingsSection">
        <span class="servings-count" ng-class="{'active': servingsSection_showing}"><span ng-bind="adjustedServings"></span><span class="servings-count__desc" ng-class="{'active': servingsSection_showing}"> servings</span></span>

        <span class="icon--adjust-servings" ng-class="{'active': servingsSection_showing}"></span>
    </a>

        <a href id="nutrition-button" popup-trigger="nutritionSection">
            <span class="calorie-count" ng-class="{'active': nutritionSection_showing}"><span>361</span> <span class="calorie-count__desc" ng-class="{'active': nutritionSection_showing}"> cals</span></span>
            <span class="icon--nutrition-info" ng-class="{'active': nutritionSection_showing}"></span>
        </a>
</span>
    <section class="adjustServings panel ng-hide" ng-class="isServingsPopup ? 'nav-tab' : ''" popup-panel="servingsSection" ignore-global="{{ isServingsPopup ? false : true }}" ng-cloak>
	<div id="msg-scale" style="display:none;">for serving adjustment</div>
    <div class="" style="display:none;">Serving size has been adjusted!</div>
        <div class="subtext">Original recipe yields 8 servings</div>

    <ul class="adjust-servings__form">
        <li>
            <input ng-model="servings" type="number" name="servings" data-role="none" id="servings" class="" min="0" max="300" value="8" data-original="8" ng-focus="hideAds()" ng-blur="showAds()" />
            <a class="btns-one-small" href="" ng-click="getIngredients(214556,'Recipe', true)" id="btn-adjust">Adjust</a>
        </li>
        <li class="adjust-servings__select">
            <label class="radio-lbl">
                <input type="radio" data-role="none" name="isMetric" checked="checked" ng-value="false" ng-model="isMetric" /><span></span>

            </label>
            <span class="measurement-title">US</span>
        </li>
        <li class="adjust-servings__select">
            <label class="radio-lbl">
                <input type="radio" data-role="none" name="isMetric" ng-value="true" ng-model="isMetric" /><span></span>
            </label>
            <span class="measurement-title">Metric</span>
        </li>
    </ul>
	<div id="msg-directions" style="display:none;">Note:  Recipe directions are for original size.</div>
</section>

    <section class="ng-hide recipe-nutrition panel" ng-class="isNutritionPopup ? 'nav-tab' : ''" popup-panel="nutritionSection" ignore-global="{{ isNutritionPopup ? false : true }}" ng-cloak>

        <div class="recipe-nutrition__form" itemprop="nutrition" itemscope itemtype="http://schema.org/NutritionInformation" ng-show="fullNutrition===false">
            <h3>Nutrition</h3>
            <p ng-bind="'Amount per serving (' + servings + ' total)'"></p>
            <ul class="nutrientLine">
                <li class="nutrientLine__item">Calories:</li>
                <li class="nutrientLine__item--amount" itemprop="calories"><span>361</span> kcal</li>
                <li class="nutrientLine__item--grid">
                    <div class="nutriRating">
                        <div class="nutriGradient" style="width: 18%;"></div>
                    </div>
                </li>
                <li class="nutrientLine__item--percent">18%</li>
            </ul>
            <ul class="nutrientLine">
                <li class="nutrientLine__item">Fat: </li>
                <li class="nutrientLine__item--amount" itemprop="fatContent"><span>12.9</span> g</li>
                <li class="nutrientLine__item--grid">
                    <div class="nutriRating">
                        <div class="nutriGradient" style="width: 20%;"></div>
                    </div>
                </li>
                <li class="nutrientLine__item--percent">20%</li>
            </ul>
            <ul class="nutrientLine">
                <li class="nutrientLine__item">Carbs: </li>
                <li class="nutrientLine__item--amount" itemprop="carbohydrateContent"><span>26.9</span>g</li>
                <li class="nutrientLine__item--grid">
                    <div class="nutriRating">
                        <div class="nutriGradient" style="width: 9%;"></div>
                    </div>
                </li>
                <li class="nutrientLine__item--percent">9%</li>
            </ul>
            <ul class="nutrientLine">
                <li class="nutrientLine__item">Protein: </li>
                <li class="nutrientLine__item--amount" itemprop="proteinContent"><span>36</span> g</li>
                <li class="nutrientLine__item--grid">
                    <div class="nutriRating">
                        <div class="nutriGradient" style="width: 72%;"></div>
                    </div>
                </li>
                <li class="nutrientLine__item--percent">72%</li>
            </ul>
            <ul class="nutrientLine">
                <li class="nutrientLine__item">Cholesterol: </li>
                <li class="nutrientLine__item--amount" itemprop="cholesterolContent"><span>84</span> mg</li>
                <li class="nutrientLine__item--grid">
                    <div class="nutriRating">
                        <div class="nutriGradient" style="width: 28%;"></div>
                    </div>
                </li>
                <li class="nutrientLine__item--percent">28%</li>
            </ul>
            <ul class="nutrientLine">
                <li>Sodium: </li>
                <li class="nutrientLine__item--amount" itemprop="sodiumContent"><span>1118</span> mg</li>
                <li class="nutrientLine__item--grid">
                    <div class="nutriRating">
                        <div class="nutriGradient" style="width: 45%;"></div>
                    </div>
                </li>
                <li class="nutrientLine__item--percent">45%</li>
            </ul>
            <p class="recipe-nutrition__blurb">Based on a 2,000 calorie diet</p>
            <a href class="btns-one-small" ng-click="showFullNutrition()">See full nutrition</a>
        </div>

        <div class="recipe-nutrition__form" itemprop="nutrition" itemscope itemtype="http://schema.org/NutritionInformation" ng-show="fullNutrition===true">
            <!-- DETAILED NUTRITION -->
            <div id="nutritiontable" class="fullNutrition">

                <h3>Nutritional Information</h3>
                <p class="recipe-title" ng-bind="::title"></p>
                <div class="top light-underline">
                    1 Serving <br />
                    Servings Per Recipe: <span ng-bind="servings"></span><br />
                    <strong>Amount Per Serving</strong><br />
                    <nutrition-line nutrient="::nutrition.calories" hideunits="true" hidepercent="true" plainname="true"></nutrition-line>
                    <nutrition-line nutrient="::nutrition.caloriesFromFat" boldvalue="true" hideunits="true" hidepercent="true" plainname="true"></nutrition-line>

                </div>
                <div class="daily-value-container bold-underline">
                    <label class="daily-value">% Daily Value *</label>
                </div>
                <ul class="nutrDetList bold-underline">
                    <li class="light-underline">
                        <nutrition-line nutrient="::nutrition.fat"></nutrition-line>
                    </li>
                    <li class="indent light-underline">
                        <nutrition-line nutrient="::nutrition.saturatedFat"></nutrition-line>
                    </li>
                    <li class="light-underline">
                        <nutrition-line nutrient="::nutrition.cholesterol"></nutrition-line>
                    </li>
                    <li class="light-underline">
                        <nutrition-line nutrient="::nutrition.sodium"></nutrition-line>
                    </li>
                    <li class="light-underline">
                        <nutrition-line nutrient="::nutrition.carbohydrates"></nutrition-line>
                    </li>
                    <li class="indent light-underline">
                        <nutrition-line nutrient="::nutrition.sugars"></nutrition-line>
                    </li>
                    <li class="indent light-underline">
                        <nutrition-line nutrient="::nutrition.fiber"></nutrition-line>
                    </li>
                    <li class="light-underline">
                        <nutrition-line nutrient="::nutrition.protein"></nutrition-line>
                    </li>
                    <li class="light-underline">
                        <nutrition-line nutrient="::nutrition.vitaminA"></nutrition-line>
                    </li>
                    <li class="light-underline">
                        <nutrition-line nutrient="::nutrition.vitaminC"></nutrition-line>
                    </li>
                    <li class="light-underline">
                        <nutrition-line nutrient="::nutrition.calcium"></nutrition-line>
                    </li>
                    <li class="light-underline">
                        <nutrition-line nutrient="::nutrition.iron"></nutrition-line>
                    </li>
                    <li class="light-underline">
                        <nutrition-line nutrient="::nutrition.potassium"></nutrition-line>
                    </li>
                    <li class="light-underline">
                        <nutrition-line nutrient="::nutrition.thiamin"></nutrition-line>
                    </li>
                    <li class="light-underline">
                        <nutrition-line nutrient="::nutrition.niacin"></nutrition-line>
                    </li>
                    <li class="light-underline">
                        <nutrition-line nutrient="::nutrition.vitaminB6"></nutrition-line>
                    </li>
                    <li class="light-underline">
                        <nutrition-line nutrient="::nutrition.magnesium"></nutrition-line>
                    </li>
                    <li>
                        <nutrition-line nutrient="::nutrition.folate"></nutrition-line>
                    </li>
                </ul>
                <ul class="key">
                    <li>
                        <span class="left">*</span>
                        <span class="right">Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.</span>
                    </li>
                    <li>
                        <span class="left">**</span>
                        <span class="right">Nutrient information is not available for all ingredients. Amount is based on available nutrient data.</span>
                    </li>
                    <li>
                        <span class="left">(-)</span>
                        <span class="right">Information is not currently available for this nutrient. If you are following a medically restrictive diet, please consult your doctor or registered dietitian before preparing this recipe for personal consumption.</span>
                    </li>
                </ul>
                <div class="button-container">
                    <a href class="btns-one-small" ng-click="showSummaryNutrition()">Hide full nutrition</a>
                </div>
            </div>
        </div>
    </section>

    <ar-notification></ar-notification>

<link href='http://css01.media-allrecipes.com/assets/deployables/v-1.83.0.117/local-offers-css.bundled.Css' rel='stylesheet'/>

    <div class="lo-reservespace">
        <div class="lo-column" ng-controller="ar_controllers_local_offers" ng-cloak >
            <div class="lo-container--slider ">
                <div class="title">
                    <h2>On Sale</h2><span>What's on sale near you.</span>
                </div>
                <div class="onoffswitch">
                    <input type="checkbox" name="myonoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" data-ng-model="userToggleEnabled" ng-model-options="{ getterSetter: true }">
                    <label class="onoffswitch-label" for="myonoffswitch" id="local-offers-toggle-slider">
                        <span class="onoffswitch-inner"></span>
                        <span class="onoffswitch-switch"></span>
                    </label>
                </div>
                <div data-ng-show="userToggleEnabled()">
                    <input type="checkbox" data-ng-click="toggleSettingsState(!showSettings)" data-ng-class="{active:showSettings}">
                    <label class="location-toggle-btn"></label>
                </div>
                <div class="dotted-line--local-offers"></div>
            </div>

            <div data-ng-show="localOffersService.localOffersUserEnabled()">
                <script type="text/html" id="stores-template">
    <![CDATA[
        <div class="retailer carousel-item">
            <div class="logo">
                <img src="<%= this.imageUrl %>"/>
            </div>
            <ul class="info">
                <li><%= this.name %></li>
                <li><%= this.address %></li>
                <li><%= this.city %>, <%= this.state %> <%= this.zip %></li>
                <li class="advertisement"><%= this.sponsoredFlag == true ? "Sponsored" : "" %> </li>
            </ul>
        </div>
    ]]>
</script>



                <section class="sail local-offers" ng-show="showSettings">
                    <div class="buttons-container">
                        <div class="lo-container--settings">
                            <button class="button-reg find-me ui-link" data-scoby-click='{"id": 214556, "eventType": "Allrecipes.RecipeDetail.LocalOffersWidget.FindMeByLocation.Click", "eventCategory": "Engagement.User"}' data-ng-click="findMe()"><span class="pin icon icon--map-pin--white"></span> Find Me</button>
                            <p>or</p>
                            <div class="zip-container">
                                <input type="text" max="99999" placeholder="Enter zip code" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset" ng-model="userZipCode">
                                <button class="button-reg ui-link" data-ng-click="getRetailersByZipCode()">OK</button>
                            </div>
                            <p>Sort stores by</p>
                            <button class="button-reg sort-by ui-link" data-scoby-click='{"id": 214556, "eventType": "Allrecipes.RecipeDetail.LocalOffersWidget.SortByClosestToMe.Click", "eventCategory": "Engagement.User"}' data-ng-class="{active:sortingOption === 'ClosestToMe'}" data-ng-click="sortRetailersList('ClosestToMe')">Closest to me</button>
                            <button class="button-reg sort-by ui-link" data-scoby-click='{ "id": 214556, "eventType": "Allrecipes.RecipeDetail.LocalOffersWidget.SortByMostDeals.Click", "eventCategory": "Engagement.User" }' data-ng-class="{active:sortingOption === 'MostDeals'}" data-ng-click="sortRetailersList('MostDeals')">Most deals</button>
                        </div>
                        <div class="dotted-line--local-offers"></div>
                    </div>
                </section>
                <section class="sail local-offers">
                    <div class="error-msg" data-ng-show="errorMessage">
                        <span data-ng-bind="errorMessage"></span>
                    </div>
                </section>
                <div class="sail local-offers" id="storesOutput"></div>
                <div class="local-offers">
                    <div class="lo-message-box" ng-show="displayOverlay">
                        <div class="lo-msg-arrow-up"></div>
                        <div class="lo-message-box__box">
                            <div class="lo-message-box__title">
                                <div class="lo-message-box__title__text">These nearby stores have ingredients on sale!</div>
                                <div class="lo-message-box__title__icon">
                                    <span class="icon--close" ng-click="closeOverlay()"></span>
                                </div>
                            </div>
                            <a>
                                <div class="lo-message-box__button" ng-click="closeOverlay(); findMe();">
                                    <div class="lo-message-box__button__title">Find the closest stores</div>
                                    <div class="lo-message-box__button__subtitle">(uses your location)</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="clientID"></div>
        </div>
    </div>


        <ul class="checklist dropdownwrapper list-ingredients-1" ng-hide="reloaded" id="lst_ingredients_1">
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="16157" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,16157)" />
                        <span class="recipe-ingred_txt added" data-id="16157" data-nameid="16157" itemprop="ingredients">2 tablespoons butter</span>
                    </label>
                        <div data-ng-repeat='deal in deals["16157"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["16157"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="6305" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,6305)" />
                        <span class="recipe-ingred_txt added" data-id="6305" data-nameid="6305" itemprop="ingredients">2 tablespoons vegetable oil</span>
                    </label>
                        <div data-ng-repeat='deal in deals["6305"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["6305"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="4056" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,4056)" />
                        <span class="recipe-ingred_txt added" data-id="4056" data-nameid="4056" itemprop="ingredients">1 1/2 pounds lean boneless beef round steak, cut into cubes</span>
                    </label>
                        <div data-ng-repeat='deal in deals["4056"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["4056"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="4397" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,4397)" />
                        <span class="recipe-ingred_txt added" data-id="4397" data-nameid="4397" itemprop="ingredients">1/2 cup chopped onion</span>
                    </label>
                        <div data-ng-repeat='deal in deals["4397"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["4397"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="1684" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,1684)" />
                        <span class="recipe-ingred_txt added" data-id="1684" data-nameid="1684" itemprop="ingredients">3 tablespoons all-purpose flour</span>
                    </label>
                        <div data-ng-repeat='deal in deals["1684"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["1684"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="16404" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,16404)" />
                        <span class="recipe-ingred_txt added" data-id="16404" data-nameid="16404" itemprop="ingredients">1 tablespoon paprika</span>
                    </label>
                        <div data-ng-repeat='deal in deals["16404"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["16404"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="16421" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,16421)" />
                        <span class="recipe-ingred_txt added" data-id="16421" data-nameid="16421" itemprop="ingredients">1 teaspoon salt</span>
                    </label>
                        <div data-ng-repeat='deal in deals["16421"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["16421"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="16406" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,16406)" />
                        <span class="recipe-ingred_txt added" data-id="16406" data-nameid="16406" itemprop="ingredients">1/4 teaspoon ground black pepper</span>
                    </label>
                        <div data-ng-repeat='deal in deals["16406"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["16406"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="5460" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,5460)" />
                        <span class="recipe-ingred_txt added" data-id="5460" data-nameid="5460" itemprop="ingredients">4 cups beef broth</span>
                    </label>
                        <div data-ng-repeat='deal in deals["5460"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["5460"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="2496" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,2496)" />
                        <span class="recipe-ingred_txt added" data-id="2496" data-nameid="2496" itemprop="ingredients">2 cups water</span>
                    </label>
                        <div data-ng-repeat='deal in deals["2496"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["2496"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                    </ul>
        <ul class="checklist dropdownwrapper list-ingredients-2" ng-hide="reloaded" id="lst_ingredients_2">
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="4409" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,4409)" />
                        <span class="recipe-ingred_txt added" data-id="4409" data-nameid="4409" itemprop="ingredients">4 sprigs fresh parsley, chopped</span>
                    </label>
                        <div data-ng-repeat='deal in deals["4409"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["4409"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="4292" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,4292)" />
                        <span class="recipe-ingred_txt added" data-id="4292" data-nameid="4292" itemprop="ingredients">2 tablespoons chopped celery leaves</span>
                    </label>
                        <div data-ng-repeat='deal in deals["4292"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["4292"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="16380" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,16380)" />
                        <span class="recipe-ingred_txt added" data-id="16380" data-nameid="16380" itemprop="ingredients">1 bay leaf</span>
                    </label>
                        <div data-ng-repeat='deal in deals["16380"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["16380"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="16399" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,16399)" />
                        <span class="recipe-ingred_txt added" data-id="16399" data-nameid="16399" itemprop="ingredients">1/2 teaspoon dried marjoram</span>
                    </label>
                        <div data-ng-repeat='deal in deals["16399"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["16399"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="20318" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,20318)" />
                        <span class="recipe-ingred_txt added" data-id="20318" data-nameid="20318" itemprop="ingredients">1 1/2 cups peeled, diced Yukon Gold potatoes</span>
                    </label>
                        <div data-ng-repeat='deal in deals["20318"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["20318"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="4279" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,4279)" />
                        <span class="recipe-ingred_txt added" data-id="4279" data-nameid="4279" itemprop="ingredients">1 1/2 cups sliced carrots</span>
                    </label>
                        <div data-ng-repeat='deal in deals["4279"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["4279"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="4292" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,4292)" />
                        <span class="recipe-ingred_txt added" data-id="4292" data-nameid="4292" itemprop="ingredients">1 1/2 cups chopped celery</span>
                    </label>
                        <div data-ng-repeat='deal in deals["4292"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["4292"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="3640" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,3640)" />
                        <span class="recipe-ingred_txt added" data-id="3640" data-nameid="3640" itemprop="ingredients">1 (6 ounce) can tomato paste</span>
                    </label>
                        <div data-ng-repeat='deal in deals["3640"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["3640"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                <li class="checkList__line">
                    <label ng-class="{true: 'checkList__item'}[true]">
                        <input data-id="4314" name="ingredientCheckbox" data-role="none" type="checkbox" value="N" ng-click="saveIngredient($event,4314)" />
                        <span class="recipe-ingred_txt added" data-id="4314" data-nameid="4314" itemprop="ingredients">1 (15.25 ounce) can whole kernel corn, drained</span>
                    </label>
                        <div data-ng-repeat='deal in deals["4314"]'>
                            <div class="offer-container" data-ng-class='{"hide-deals":!deals["4314"] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                                <div class="left">
                                    <p>
                                        <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                        <br/>
                                        <span ng-show='deal.isBIU' data-ng-bind-html='deal.price'></span>
                                        <span ng-show='!deal.isBIU' class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                        <br/>
                                        <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html='deal.clickThroughText'></a>
                                        <br/>
                                        <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                                    </p>
                                    <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                                    <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                                    <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                                </div>
                                <div class="right">
                                    <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                                </div>
                            </div>
                        </div>
                </li>
                            <li class="checkList__line">
                    <label class="checkList__item" id="btn-addtolist">
                        <input name="slCheckbox" data-role="none" type="checkbox"  ng-click="saveRecipe($event,'214556','Recipe')" />
                        <span class="recipe-ingred_txt added white">Add all ingredients to list</span>
                    </label>
                </li>
        </ul>

    <ul ng-cloak ng-repeat="column in ingredientColumns" class="checklist {{ 'list-ingredients-' + column.index }}" id="{{ 'lst_ingredients_' + column.index }}" data-repeat-complete="ingredientsLoaded()">
        <li ng-repeat="ingredient in ingredients | ar_filters_slice:column.start:column.end" class="checkList__line">
            <label ng-class="{true: 'checkList__item'}[ingredient.displayType != 'Heading']">
                <input data-id="{{ingredient.ingredientID}}" name="ingredientCheckbox" type="checkbox" value="N" ng-model="ingredient.isChecked" ng-click="saveIngredient($event,ingredient)" />
                <span class="recipe-ingred_txt" data-id="{{ingredient.ingredientID}}" data-nameid="{{ingredient.ingredientid}}"><span ng-bind="ingredient.displayValue"></span></span>
            </label>

                <div data-ng-repeat='deal in deals[ingredient.ingredientID]'>
                    <div class="offer-container" ng-class='{"hide-deals":!deals[ingredient.ingredientID] || !localOffersService.localOffersUserEnabled()}' ng-cloak>
                        <div class="left">
                            <p>
                                <span class="offer-name" data-ng-bind-html='deal.description'></span>
                                <br/>
                                <span ng-show="deal.isBIU" data-ng-bind-html='deal.price'></span>
                                <span ng-show="!deal.isBIU" class='unit-cost' data-ng-bind-html='deal.priceWithExpiration'></span>
                                <br/>
                                <a data-no-follow-if-external ng-href='{{deal.actionUrl}}' target="_blank" data-ng-click='fireClickPixels(deal.clickPixels)' data-ng-bind-html="deal.clickThroughText"></a>
                                <br/>
                                <span class="advertisement" ng-show='deal.isBIU'>ADVERTISEMENT</span>
                            </p>
                            <div class="tracking-element" load-dom-script script="deal.moatUrl"></div>
                            <img class="tracking-element" data-ng-repeat="trackingUrl in deal.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" />
                            <img class="tracking-element" data-ng-repeat="clickUrl in listClickPixels track by $index" data-ng-src="{{clickUrl}}" />
                        </div>
                        <div class="right">
                            <img data-ng-src='{{deal.imageUrl}}' class="offer-photo" />
                        </div>
                    </div>
                </div>

        </li>
        <li ng-show="column.index == 2" class="checkList__line">
            <label class="checkList__item" id="btn-addtolist">
                <input name="slCheckbox" data-role="none" type="checkbox"  ng-click="saveRecipe($event,'214556','Recipe')" />
                <span class="recipe-ingred_txt added white">Add all ingredients to list</span>
            </label>
        </li>
    </ul>
            <div class="lo-smu-output" data-ng-controller="ar_controllers_recipe_mws" data-ng-show="mws" data-ng-cloak>
                <div class="lo-smu-container">
                    <img data-ng-src='{{mws.originalImagUrl}}' class="lo-smu-photo"/>
                    <p class="lo-smu-title">May we suggest</p>
                    <div class="lo-smu-text">
                        <p class="offer-name" data-ng-bind-html="mws.defaultDisplayDescription"></p>
                        <p data-ng-bind-html="mws.title"></p>
                        <p><a data-no-follow-if-external data-ng-click="fireClickPixel(mws.clickPixels)" data-ng-href='{{mws.actionUrl}}' target="_blank" data-ng-bind-html='mws.clickThroughText'></a></p>
                        <p class="lo-smu-ad">ADVERTISEMENT</p>
                        <div class="tracking-element" load-dom-script script="mws.moatUrl"></div>
                        <img class="tracking-element" data-ng-repeat="trackingUrl in mws.trackingPixels track by $index" data-ng-src="{{trackingUrl}}" alt=""/>
                        <img class="tracking-element" data-ng-repeat="clickPixel in listClickPixels track by $index" data-ng-src="{{clickPixel}}"/>
                    </div>
                </div>
            </div>
</section>
<script>
    var userInformation =
        {
            clientIp: '128.177.113.106'
        };
</script>


        <section class="recipe-directions" data-ng-controller="ar_controllers_recipe_notes" data-ng-init="init(214556, 'recipe')">
    <h2 class="heading__h2--gutters">
        Directions
    </h2>
    <span class="recipe-directions__header--toggles" id="recipe-notes">
    <span class="recipe-notes" ng-show="displayNote" ng-cloak>
        <a href="" ng-click="openNoteModal()">
            <span class="note-text">{{model.addEditText}}</span>
            <span class="svg-icon--actions--edit_icon svg-icon--actions--edit_icon-dims"></span>
        </a>
    </span>


        <span class="recipe-directions--print"><a ng-href="print/?recipeType=Recipe&{{ printServings }}&{{printMetrics}}" data-internal-referrer-link="recipe button" data-click-id="recipe button"><span class="kf-text print">Print</span> <span class="icon--recipe-directions-print"></span></a></span>


    </span>

    <div class="directions--section">
        <div class="directions--section__steps">
            <!-- cooking stats -->
    <ul class="prepTime">
        <li class="prepTime__item"><span class="icon--stats-clock"></span></li>
            <li class="prepTime__item">
                <p class="prepTime__item--type">Prep</p><time itemprop="prepTime" datetime="PT45M"><span class="prepTime__item--time">45</span> m</time>
            </li>
                    <li class="prepTime__item">
                <p class="prepTime__item--type">Cook</p><time itemprop="cookTime" datetime="PT1H30M"><span class="prepTime__item--time">1</span> h <span class="prepTime__item--time">30</span> m</time>
            </li>
                    <li class="prepTime__item">
                <p class="prepTime__item--type">Ready In</p><time itemprop="totalTime" datetime="PT2H15M"><span class="prepTime__item--time">2</span> h <span class="prepTime__item--time">15</span> m</time>
            </li>
    </ul>


            <ol class="list-numbers recipe-directions__list" itemprop="recipeInstructions">
                        <li class="step" ng-class="{'finished': stepIsActive0}" ng-click="stepIsActive0 = !stepIsActive0"><span class="recipe-directions__list--item">Melt butter and oil in a large skillet over medium heat until the foam disappears from the butter, and stir in the steak cubes and onion. Cook and stir until the meat and onion are browned, about 10 minutes. While beef is cooking, mix together flour, paprika, salt, and pepper in a bowl. Sprinkle the flour mixture over the browned meat, and stir to coat.</span></li>
                        <li class="step" ng-class="{'finished': stepIsActive1}" ng-click="stepIsActive1 = !stepIsActive1"><span class="recipe-directions__list--item">In a large soup pot, pour in the beef broth and water, and stir in the parsley, celery leaves, bay leaf, and marjoram. Stir in beef mixture, and bring to a boil. Reduce heat to medium-low, cover the pot, and simmer, stirring occasionally, until meat is tender, about 45 minutes.</span></li>
                        <li class="step" ng-class="{'finished': stepIsActive2}" ng-click="stepIsActive2 = !stepIsActive2"><span class="recipe-directions__list--item">Mix in the potatoes, carrots, celery, tomato paste, and corn; bring the soup back to a simmer, and cook uncovered, stirring occasionally, until the vegetables are tender and the soup is thick, 15 to 20 minutes. Remove bay leaf and serve hot.</span></li>
            </ol>
            <a href="" ng-click="openNoteModal()">
                <ol class="list-numbers recipe-directions__list recipeNotes ng-hide" ng-show="model.itemNote" ng-cloak>
                    <li class="step">
                        <span class="recipe-directions__list--item" ng-bind="model.itemNote"></span>
                    </li>
                </ol>
            </a>
            <div id="karma-lazy-seriesDetails"></div>
        </div>
        <div class="directions--section__right-side">
            <div class="directions--section__tipsAndTricks">
<div class="directions--section__tipsAndTricks__title">
    <span class="directions--section__tipsAndTricks__title__font">You might also like</span>
</div>
<div class="relatedVideos">
            <div class="relatedVideos__item">
                <a href="/video/7285/broccoli-soup-au-gratin/" data-internal-referrer-link="tips and tricks" data-click-id="tips and tricks 1">
                    <img class="relatedVideos__thumbnail" src="http://brightcove.vo.llnwd.net/v1/unsecured/media/1033249144001/201701/2204/1033249144001_5281532327001_5279894174001-th.jpg?pubId=1033249144001" />
                </a>
                <div class="relatedVideos__thumbnail__icon-hasVideo">
                    <a class="icon--videoplay" href="/video/7285/broccoli-soup-au-gratin/" data-internal-referrer-link="tips and tricks" data-click-id="tips and tricks 1"></a>
                </div>
                <div class="relatedVideos__details">
                    <a href="/video/7285/broccoli-soup-au-gratin/" data-internal-referrer-link="tips and tricks" data-click-id="tips and tricks 1">
                        <span class="relatedVideos__details_title">Broccoli Soup Au Gratin</span>
                        <p class="relatedVideos__details__description">An elevated and exciting broccoli soup!</p>
                    </a>
                </div>
            </div>
            <div class="relatedVideos__item">
                <a href="/video/5510/dumpling-soup/" data-internal-referrer-link="tips and tricks" data-click-id="tips and tricks 2">
                    <img class="relatedVideos__thumbnail" src="http://brightcove.vo.llnwd.net/v1/unsecured/media/1033249144001/201604/2606/1033249144001_4830656579001_4827312194001-th.jpg?pubId=1033249144001" />
                </a>
                <div class="relatedVideos__thumbnail__icon-hasVideo">
                    <a class="icon--videoplay" href="/video/5510/dumpling-soup/" data-internal-referrer-link="tips and tricks" data-click-id="tips and tricks 2"></a>
                </div>
                <div class="relatedVideos__details">
                    <a href="/video/5510/dumpling-soup/" data-internal-referrer-link="tips and tricks" data-click-id="tips and tricks 2">
                        <span class="relatedVideos__details_title">Dumpling Soup</span>
                        <p class="relatedVideos__details__description">Comforting potato soup with homemade dumplings!</p>
                    </a>
                </div>
            </div>
            <div class="relatedVideos__item">
                <a href="/video/5497/chicken-zoodle-soup/" data-internal-referrer-link="tips and tricks" data-click-id="tips and tricks 3">
                    <img class="relatedVideos__thumbnail" src="http://brightcove.vo.llnwd.net/v1/unsecured/media/1033249144001/201603/2959/1033249144001_4814607673001_4779928341001-th.jpg?pubId=1033249144001" />
                </a>
                <div class="relatedVideos__thumbnail__icon-hasVideo">
                    <a class="icon--videoplay" href="/video/5497/chicken-zoodle-soup/" data-internal-referrer-link="tips and tricks" data-click-id="tips and tricks 3"></a>
                </div>
                <div class="relatedVideos__details">
                    <a href="/video/5497/chicken-zoodle-soup/" data-internal-referrer-link="tips and tricks" data-click-id="tips and tricks 3">
                        <span class="relatedVideos__details_title">Chicken Zoodle Soup</span>
                        <p class="relatedVideos__details__description">This comforting and nutritious chicken soup trades out the noodles for vibrant sp</p>
                    </a>
                </div>
            </div>

</div>
            </div>
            <div class="mag-cta-desktop">
                <div class="mag-cta" data-ng-controller="ar_controllers_mag_subscription">

    <a ng-href="{{CtaSubscriptionUrl}}" target="_blank" class="ad-mag-homeBtm">
        <h2>Get the magazine</h2>
        <img class="ad-mag-homeBtm__th" alt="Subscribe to Allrecipes Magazine" title="Allrecipes Magazine" src="http://images.media-allrecipes.com/images/75386.png" />
        <div class="ad-mag-homeBtm__text">
            <h4>Get a full year for just $7.99!</h4>
            <p>Cook 5-star weekday dinners every time.</p>
        </div>
    </a>
</div>
            </div>
        </div>
    </div>
</section>


            <section class="recipe-footnotes">
        <h4 class="recipe-footnotes__h4">
            Footnotes
        </h4>
        <ul>
                <li><span class='recipe-footnotes__header'>Cook's Note</span></li>
                <li>You can double this batch and freeze some as well; refrigerating makes the soup thicker and more rich.</li>
                <li><span class='recipe-footnotes__header'>Tip</span></li>
                <li>Aluminum foil helps keep food moist, ensures it cooks evenly, keeps leftovers fresh, and makes clean-up easy.</li>
        </ul>
            <div id="div-sm-branding"></div>
    </section>


        <div data-ng-controller="ar_controllers_made_it" data-ng-init="init(214556, 0, '', '', 0, 0, 0, 495)">
    <!-- made recipe toolbar -->
    <section id="recipe-toolbar" class="recipe-toolbar">
        <!-- photo upload block -->
        <div class="recipe-toolbar__buttons">
            <div class="toolbar-i-made-it">
                <ul>
                    <li>
                        <a class="btns-one-small bg-orange-gold" data-ng-click="save();">
                            <span class="svg-icon--recipe-page--imadeit-white svg-icon--recipe-page--imadeit-white-dims"></span>
                            <h4 class="light">I made it!</h4>
                        </a>
                    </li>

                </ul>
            </div>
            <div data-ng-controller="ar_controllers_photo_upload" ng-init="init(0,214556,true,'i made it')">
            </div>

            <ar-notification></ar-notification>
        </div>
    </section>
</div>


            <h2 class="heading__h2--gutters share">Share</h2>
<section ng-controller="ar_controllers_share_item" id="shareRecipe">
    <section class="recipe-share share-container">
        <a ng-click="socialShareStart('214556', 'pinterest'); socialShareNavigate('http://pinterest.com/pin/create/button/?url=http://allrecipes.com/recipe/214556/steak-soup/?lnkid=usspnt&amp;media=http://images.media-allrecipes.com/userphotos/250x250/488609.jpg&amp;description=Steak%20Soup%20-%20Allrecipes.com', '_blank', PinterestTargetParams);" class="pinterest"><span class="svg-icon--social--pinterest svg-icon--social--pinterest-dims"></span></a>
        <a ng-click="socialShareStart('214556', 'facebook'); socialShareNavigate('https://facebook.com/sharer.php?u=http://allrecipes.com/recipe/214556/steak-soup/?lnkid=ussfac', '_blank', FacebookTargetParams);" class="facebook"><span class="svg-icon--social--facebook svg-icon--social--facebook-dims"></span></a>
        <a ng-click="socialShareStart('214556', 'twitter'); socialShareNavigate('https://twitter.com/intent/tweet?url=http://allrecipes.com/recipe/214556/steak-soup/?lnkid=usstwt&amp;text=Steak%20Soup%20-%20Allrecipes.com&amp;via=Allrecipes', '_blank', TwitterTargetParams);" class="twitter"><span class="svg-icon--social--twitter svg-icon--social--twitter-dims"></span></a>
        <a ng-click="socialShareStart('214556', 'google+'); socialShareNavigate('https://plus.google.com/share?url=http://allrecipes.com/recipe/214556/steak-soup/?lnkid=ussgog', '_blank', GoogleTargetParams);" class="google"><span class="svg-icon--social--google-button svg-icon--social--google-button-dims" style="transform: scale(1.8,1.8)"></span></a>
        <a href="" class="email" ng-click="toggleEmailForm(false)" ><span class="svg-icon--social--email svg-icon--social--email-dims"></span></a>

    </section>

    <section class="email-recipe">
        <form name="emailForm" ng-submit="sendEmail('214556', 'Recipe')" novalidate>
			<section class="show-form ng-hide" ng-cloak ng-show="showForm">

				<div class="input-wrap">
					<input type="email" placeholder="{{::emailPlaceholderText}}" name="txtEmail"
						   ng-model="toEmailAddress" class="ng-valid-email" ng-focus="hideAds(); AddEmailEnabled = true;" ng-blur="showAds()">
					<a class="btn-basic--small" ng-show="AddEmailEnabled" ng-click="addEmail()">Add</a>
				</div>
				<ol class="email-recipe__recipients">
					<li ng-repeat="email in toEmailList">
						<a class="btn-basic--small btn-gold"><span ng-bind="email.address"></span><span class="icon--x" ng-click="deleteEmail(email.address)"></span></a>
	</li>
				</ol>



				<div class="email-recipe__buttons">
					<a class="btns-two-small" ng-click="cancel()">Cancel</a>
					<input class="btns-two-small" type="submit" value="Send">
					<span ng-bind="errorMessage"></span>
				</div>

			</section>
        </form>
    </section>
</section>



<section class="similar-recipes--details" id="grid_recipeListItems" ng-controller="ar_controller_similar_recipes" ng-init="init()" ng-cloak>
    <h2 class="heading__h2--gutters similar notPhoneView">Similar: <span><a href="" ng-class="{ active: isSet(1) }" ng-click="setTab(1, 'recipes')">Recipes</a><a href="" ng-class="{ active: isSet(2) }" ng-click="setTab(2, 'videos')">Videos</a><a href="" ng-class="{ active: isSet(3) }" ng-click="setTab(3, 'categories')">Categories</a><a href="" ng-class="{ active: isSet(4) }" ng-click="setTab(4, 'articles')">Articles</a></span></h2>

    <h2 class="heading__h2--gutters similar phoneView" popup-trigger="similar-content-nav">
        Similar: <span class="selected-content">{{title}}<span class="icon--chevron-down"></span></span>
        <span popup-panel="similar-content-nav" class="similar-content-nav ng-hide">
            <a href="" ng-class="{ active: isSet(1) }" ng-click="setTab(1, 'recipes')">recipes</a>
            <a href="" ng-class="{ active: isSet(2) }" ng-click="setTab(2, 'videos')">videos</a>
            <a href="" ng-class="{ active: isSet(3) }" ng-click="setTab(3, 'categories')">categories</a>
            <a href="" ng-class="{ active: isSet(4) }" ng-click="setTab(4, 'articles')">articles</a>
        </span>
    </h2>

    <div class="similar-recipes__wrap">
        <!--navigation for carousel -->
        <div class="carousel-navigation">
            <a carousel-scroll-left="similarRecipes" ng-if="similarRecipes_atLeftBound===false">
                <div class="icon--chevron-left"></div>
            </a>
            <a carousel-scroll-right="similarRecipes" ng-if="similarRecipes_atRightBound===false">
                <div class="icon--chevron-right"></div>
            </a>
        </div>

        <div class="similar-recipes__container">
            <div id="scrollDiv" carousel-scroll-target="similarRecipes" scroll-event>
                <div id="insideScroll" class="grid slider">


                    <ul class="recipe-carousel" id="similarRecipes" ng-show="isSet(1)">
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar recipe')">
                                <div class="slider-card__recipes">
                                    <ar-save-item class='favorite' data-id="68679" data-type="'Recipe'" data-name="&quot;Hearty Hamburger Soup&quot;" data-imageurl="'http://images.media-allrecipes.com/userphotos/150x150/476132.jpg'"></ar-save-item>
                                    <a href="/recipe/68679/hearty-hamburger-soup/" data-internal-referrer-link="similar_recipe_banner" data-click-id="simslot_1" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/150x150/476132.jpg" alt="Hearty Hamburger Soup Recipe - This thick and hearty hamburger soup is loaded with vegetables and barley." title="Hearty Hamburger Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="similarRecipes" />
                                        <h3 class="slider-card__h3">Hearty Hamburger Soup</h3>
                                    </a>
                                    <a href="">
                                        <div class="slider-card__ratings" data-scroll-to-anchor="reviews">
                                            <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 4.6399998664856 >
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/half-star-2015.svg"  />
</div>
                                            <span class="aggregate-rating">
                                                <meta content="4.64">
                                                <span class="grid-col__reviews"><format-large-number number="291"></format-large-number></span>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar recipe')">
                                <div class="slider-card__recipes">
                                    <ar-save-item class='favorite' data-id="12954" data-type="'Recipe'" data-name="&quot;Kansas City Steak Soup&quot;" data-imageurl="'http://images.media-allrecipes.com/userphotos/150x150/102427.jpg'"></ar-save-item>
                                    <a href="/recipe/12954/kansas-city-steak-soup/" data-internal-referrer-link="similar_recipe_banner" data-click-id="simslot_2" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/150x150/102427.jpg" alt="Kansas City Steak Soup Recipe - Sometimes you just need steak soup and this recipe yields a gallon of it. Really, a whole gallon. This is a roux-based soup made with round steak, tomatoes, carrots, and other vegetables. It freezes beautifully." title="Kansas City Steak Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="similarRecipes" />
                                        <h3 class="slider-card__h3">Kansas City Steak Soup</h3>
                                    </a>
                                    <a href="">
                                        <div class="slider-card__ratings" data-scroll-to-anchor="reviews">
                                            <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 4.51000022888184 >
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/half-star-2015.svg"  />
</div>
                                            <span class="aggregate-rating">
                                                <meta content="4.51">
                                                <span class="grid-col__reviews"><format-large-number number="78"></format-large-number></span>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar recipe')">
                                <div class="slider-card__recipes">
                                    <ar-save-item class='favorite' data-id="231282" data-type="'Recipe'" data-name="&quot;Hearty Italian Meatball Soup&quot;" data-imageurl="'http://images.media-allrecipes.com/userphotos/150x150/998122.jpg'"></ar-save-item>
                                    <a href="/recipe/231282/hearty-italian-meatball-soup/" data-internal-referrer-link="similar_recipe_banner" data-click-id="simslot_3" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/150x150/998122.jpg" alt="Hearty Italian Meatball Soup Recipe - Using canned beef broth and diced Italian-style tomatoes and frozen meatballs and vegetables helps assemble a quick pot of soup." title="Hearty Italian Meatball Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="similarRecipes" />
                                        <h3 class="slider-card__h3">Hearty Italian Meatball Soup</h3>
                                    </a>
                                    <a href="">
                                        <div class="slider-card__ratings" data-scroll-to-anchor="reviews">
                                            <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 4.80999994277954 >
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
</div>
                                            <span class="aggregate-rating">
                                                <meta content="4.81">
                                                <span class="grid-col__reviews"><format-large-number number="36"></format-large-number></span>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar recipe')">
                                <div class="slider-card__recipes">
                                    <ar-save-item class='favorite' data-id="214546" data-type="'Recipe'" data-name="&quot;Joe&#39;s Mom&#39;s Sausage and Tortellini Soup&quot;" data-imageurl="'http://images.media-allrecipes.com/userphotos/150x150/494323.jpg'"></ar-save-item>
                                    <a href="/recipe/214546/joes-moms-sausage-and-tortellini-so/" data-internal-referrer-link="similar_recipe_banner" data-click-id="simslot_4" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/150x150/494323.jpg" alt="Joe's Mom's Sausage and Tortellini So... Recipe - Spicy and delicious! This is an excellent one dish meal that has always satisfied during the cold winter months. Tastes great on its own or with fresh hot bread and topped with Asiago cheese." title="Joe's Mom's Sausage and Tortellini So..."  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="similarRecipes" />
                                        <h3 class="slider-card__h3">Joe's Mom's Sausage and Tortellini So...</h3>
                                    </a>
                                    <a href="">
                                        <div class="slider-card__ratings" data-scroll-to-anchor="reviews">
                                            <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 4.67000007629395 >
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/half-star-2015.svg"  />
</div>
                                            <span class="aggregate-rating">
                                                <meta content="4.67">
                                                <span class="grid-col__reviews"><format-large-number number="9"></format-large-number></span>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar recipe')">
                                <div class="slider-card__recipes">
                                    <ar-save-item class='favorite' data-id="216945" data-type="'Recipe'" data-name="&quot;Hearty Beef Soup&quot;" data-imageurl="'http://images.media-allrecipes.com/userphotos/150x150/746461.jpg'"></ar-save-item>
                                    <a href="/recipe/216945/hearty-beef-soup/" data-internal-referrer-link="similar_recipe_banner" data-click-id="simslot_5" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/150x150/746461.jpg" alt="Hearty Beef Soup Recipe - This is a very filling, hearty soup with bits of beef, pearl barley, and colorful veggies." title="Hearty Beef Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="similarRecipes" />
                                        <h3 class="slider-card__h3">Hearty Beef Soup</h3>
                                    </a>
                                    <a href="">
                                        <div class="slider-card__ratings" data-scroll-to-anchor="reviews">
                                            <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 4.3600001335144 >
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/half-star-2015.svg"  />
</div>
                                            <span class="aggregate-rating">
                                                <meta content="4.36">
                                                <span class="grid-col__reviews"><format-large-number number="7"></format-large-number></span>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar recipe')">
                                <div class="slider-card__recipes">
                                    <ar-save-item class='favorite' data-id="228896" data-type="'Recipe'" data-name="&quot;Steak and Kale Soup&quot;" data-imageurl="'http://images.media-allrecipes.com/userphotos/150x150/888669.jpg'"></ar-save-item>
                                    <a href="/recipe/228896/steak-and-kale-soup/" data-internal-referrer-link="similar_recipe_banner" data-click-id="simslot_6" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/150x150/888669.jpg" alt="Steak and Kale Soup Recipe - A simple soup of leftover steak, robust kale, vegetable juice and savory seasonings makes a perfect quick and easy meal." title="Steak and Kale Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="similarRecipes" />
                                        <h3 class="slider-card__h3">Steak and Kale Soup</h3>
                                    </a>
                                    <a href="">
                                        <div class="slider-card__ratings" data-scroll-to-anchor="reviews">
                                            <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 4.5 >
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/half-star-2015.svg"  />
</div>
                                            <span class="aggregate-rating">
                                                <meta content="4.50">
                                                <span class="grid-col__reviews"><format-large-number number="9"></format-large-number></span>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar recipe')">
                                <div class="slider-card__recipes">
                                    <ar-save-item class='favorite' data-id="234082" data-type="'Recipe'" data-name="&quot;Philly Cheese Steak Soup&quot;" data-imageurl="'http://images.media-allrecipes.com/userphotos/150x150/1228819.jpg'"></ar-save-item>
                                    <a href="/recipe/234082/philly-cheese-steak-soup/" data-internal-referrer-link="similar_recipe_banner" data-click-id="simslot_7" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/150x150/1228819.jpg" alt="Philly Cheese Steak Soup Recipe - The classic Philly cheese steak sandwich, with roast beef, provolone cheese, bell pepper, onion, and mushrooms, turns into a creamy, comforting soup in this easy recipe." title="Philly Cheese Steak Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="similarRecipes" />
                                        <h3 class="slider-card__h3">Philly Cheese Steak Soup</h3>
                                    </a>
                                    <a href="">
                                        <div class="slider-card__ratings" data-scroll-to-anchor="reviews">
                                            <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 4.57000017166138 >
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/half-star-2015.svg"  />
</div>
                                            <span class="aggregate-rating">
                                                <meta content="4.57">
                                                <span class="grid-col__reviews"><format-large-number number="6"></format-large-number></span>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar recipe')">
                                <div class="slider-card__recipes">
                                    <ar-save-item class='favorite' data-id="232322" data-type="'Recipe'" data-name="&quot;Garden Fresh Vegetable Beef Soup&quot;" data-imageurl="'http://images.media-allrecipes.com/userphotos/150x150/1010157.jpg'"></ar-save-item>
                                    <a href="/recipe/232322/garden-fresh-vegetable-beef-soup/" data-internal-referrer-link="similar_recipe_banner" data-click-id="simslot_8" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/150x150/1010157.jpg" alt="Garden Fresh Vegetable Beef Soup Recipe - This version of vegetable beef soup uses a tomato-based broth with chunky fresh vegetables and herbs for the ultimate comfort food on a cold night." title="Garden Fresh Vegetable Beef Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="similarRecipes" />
                                        <h3 class="slider-card__h3">Garden Fresh Vegetable Beef Soup</h3>
                                    </a>
                                    <a href="">
                                        <div class="slider-card__ratings" data-scroll-to-anchor="reviews">
                                            <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 5 >
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
</div>
                                            <span class="aggregate-rating">
                                                <meta content="5.00">
                                                <span class="grid-col__reviews"><format-large-number number="4"></format-large-number></span>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar recipe')">
                                <div class="slider-card__recipes">
                                    <ar-save-item class='favorite' data-id="244934" data-type="'Recipe'" data-name="&quot;Steak Fajita Soup&quot;" data-imageurl="'http://images.media-allrecipes.com/userphotos/150x150/0.jpg'"></ar-save-item>
                                    <a href="/recipe/244934/steak-fajita-soup/" data-internal-referrer-link="similar_recipe_banner" data-click-id="simslot_9" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/150x150/0.jpg" alt="Steak Fajita Soup Recipe - Transform leftover steak into a steak fajita soup loaded with bell peppers, tomatoes, and onion for a Mexican-inspired meal." title="Steak Fajita Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="similarRecipes" />
                                        <h3 class="slider-card__h3">Steak Fajita Soup</h3>
                                    </a>
                                    <a href="">
                                        <div class="slider-card__ratings" data-scroll-to-anchor="reviews">
                                            <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 4.67000007629395 >
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/half-star-2015.svg"  />
</div>
                                            <span class="aggregate-rating">
                                                <meta content="4.67">
                                                <span class="grid-col__reviews"><format-large-number number="3"></format-large-number></span>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar recipe')">
                                <div class="slider-card__recipes">
                                    <ar-save-item class='favorite' data-id="176347" data-type="'Recipe'" data-name="&quot;Saskatchewan City Steak Soup&quot;" data-imageurl="'http://images.media-allrecipes.com/userphotos/150x150/814885.jpg'"></ar-save-item>
                                    <a href="/recipe/176347/saskatchewan-city-steak-soup/" data-internal-referrer-link="similar_recipe_banner" data-click-id="simslot_10" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/150x150/814885.jpg" alt="Saskatchewan City Steak Soup Recipe - A thick and hearty beef and vegetable soup made with celery, carrots, onion, cabbage, green beans, and tomatoes." title="Saskatchewan City Steak Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="similarRecipes" />
                                        <h3 class="slider-card__h3">Saskatchewan City Steak Soup</h3>
                                    </a>
                                    <a href="">
                                        <div class="slider-card__ratings" data-scroll-to-anchor="reviews">
                                            <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 3.67000007629395 >
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/half-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/empty-star.svg"  />
</div>
                                            <span class="aggregate-rating">
                                                <meta content="3.67">
                                                <span class="grid-col__reviews"><format-large-number number="2"></format-large-number></span>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                    </ul>


                    <ul class="video-carousel" id="relatedVideos" ng-show="isSet(2)">
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar video')">
                                <div class="slider-card__videos">
                                    <a href="/video/424/shortcut-squash-soup/" data-internal-referrer-link="similar_video_banner" data-click-id="simslot_1" referring-id="214556">
                                        <img class="slider-card__videos videoImg" data-lazy-load data-original-src="http://brightcove.vo.llnwd.net/e1/pd/1033249144001/1033249144001_1270952519001_11-17-11-sc-squash-soup.jpg?pubId=1033249144001" alt="Shortcut Squash Soup Recipe and Video - Follow these simple shortcuts for delicious butternut squash soup." title="Shortcut Squash Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedVideos" />
                                        <span class="icon--videoplay-small" href="/video/424/shortcut-squash-soup/"></span>
                                        <h3 class="slider-card__h3">Shortcut Squash Soup</h3>
                                        <div class="counts-div">
                                            <span class="svg-icon--actions--playcount_grey svg-icon--actions--playcount_grey-dims"></span>
                                            <span class="counts-text"><format-large-number number="78327"></format-large-number> plays </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar video')">
                                <div class="slider-card__videos">
                                    <a href="/video/564/how-to-make-homemade-chicken-noodle-soup/" data-internal-referrer-link="similar_video_banner" data-click-id="simslot_2" referring-id="214556">
                                        <img class="slider-card__videos videoImg" data-lazy-load data-original-src="http://brightcove.vo.llnwd.net/e1/pd/1033249144001/1033249144001_1494209415001_fw-chickennoodlesoup.jpg?pubId=1033249144001" alt="How to Make Homemade Chicken Noodle Soup Recipe and Video - Watch Chef John make a simple, soothing chicken noodle soup." title="How to Make Homemade Chicken Noodle Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedVideos" />
                                        <span class="icon--videoplay-small" href="/video/564/how-to-make-homemade-chicken-noodle-soup/"></span>
                                        <h3 class="slider-card__h3">How to Make Homemade Chicken Noodl...</h3>
                                        <div class="counts-div">
                                            <span class="svg-icon--actions--playcount_grey svg-icon--actions--playcount_grey-dims"></span>
                                            <span class="counts-text"><format-large-number number="394080"></format-large-number> plays </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar video')">
                                <div class="slider-card__videos">
                                    <a href="/video/793/quick-and-easy-chicken-noodle-soup/" data-internal-referrer-link="similar_video_banner" data-click-id="simslot_3" referring-id="214556">
                                        <img class="slider-card__videos videoImg" data-lazy-load data-original-src="http://brightcove.vo.llnwd.net/d22/unsecured/media/1033249144001/1033249144001_1626596354001_ari-origin05-arc-130-1336426025162.jpg?pubId=1033249144001" alt="Quick and Easy Chicken Noodle Soup Recipe and Video - See how to make hearty chicken noodle soup in just 30 minutes." title="Quick and Easy Chicken Noodle Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedVideos" />
                                        <span class="icon--videoplay-small" href="/video/793/quick-and-easy-chicken-noodle-soup/"></span>
                                        <h3 class="slider-card__h3">Quick and Easy Chicken Noodle Soup</h3>
                                        <div class="counts-div">
                                            <span class="svg-icon--actions--playcount_grey svg-icon--actions--playcount_grey-dims"></span>
                                            <span class="counts-text"><format-large-number number="345475"></format-large-number> plays </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar video')">
                                <div class="slider-card__videos">
                                    <a href="/video/870/broccoli-cheese-soup/" data-internal-referrer-link="similar_video_banner" data-click-id="simslot_4" referring-id="214556">
                                        <img class="slider-card__videos videoImg" data-lazy-load data-original-src="http://brightcove.vo.llnwd.net/d22/unsecured/media/1033249144001/1033249144001_1653328462001_ari-origin05-arc-126-1337805225760.jpg?pubId=1033249144001" alt="Broccoli Cheese Soup Recipe and Video - See how to make quick-and-easy cheese soup with broccoli. " title="Broccoli Cheese Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedVideos" />
                                        <span class="icon--videoplay-small" href="/video/870/broccoli-cheese-soup/"></span>
                                        <h3 class="slider-card__h3">Broccoli Cheese Soup</h3>
                                        <div class="counts-div">
                                            <span class="svg-icon--actions--playcount_grey svg-icon--actions--playcount_grey-dims"></span>
                                            <span class="counts-text"><format-large-number number="161710"></format-large-number> plays </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar video')">
                                <div class="slider-card__videos">
                                    <a href="/video/3826/spicy-vietnamese-beef-noodle-soup/" data-internal-referrer-link="similar_video_banner" data-click-id="simslot_5" referring-id="214556">
                                        <img class="slider-card__videos videoImg" data-lazy-load data-original-src="http://brightcove.vo.llnwd.net/d21/unsecured/media/1033249144001/1033249144001_2581566477001_video-still-for-video-2579416708001.jpg?pubId=1033249144001" alt="Spicy Vietnamese Beef Noodle Soup Recipe and Video - Chef John makes pho, the spicy Vietnamese noodle soup." title="Spicy Vietnamese Beef Noodle Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedVideos" />
                                        <span class="icon--videoplay-small" href="/video/3826/spicy-vietnamese-beef-noodle-soup/"></span>
                                        <h3 class="slider-card__h3">Spicy Vietnamese Beef Noodle Soup</h3>
                                        <div class="counts-div">
                                            <span class="svg-icon--actions--playcount_grey svg-icon--actions--playcount_grey-dims"></span>
                                            <span class="counts-text"><format-large-number number="24542"></format-large-number> plays </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar video')">
                                <div class="slider-card__videos">
                                    <a href="/video/4197/easy-vegetable-beef-soup/" data-internal-referrer-link="similar_video_banner" data-click-id="simslot_6" referring-id="214556">
                                        <img class="slider-card__videos videoImg" data-lazy-load data-original-src="http://brightcove.vo.llnwd.net/d21/unsecured/media/1033249144001/201312/1533/1033249144001_2915655429001_video-still-for-video-2874143013001.jpg?pubId=1033249144001" alt="Easy Vegetable Beef Soup  Recipe and Video - See how to make a super-simple soup with veggies and ground beef." title="Easy Vegetable Beef Soup "  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedVideos" />
                                        <span class="icon--videoplay-small" href="/video/4197/easy-vegetable-beef-soup/"></span>
                                        <h3 class="slider-card__h3">Easy Vegetable Beef Soup </h3>
                                        <div class="counts-div">
                                            <span class="svg-icon--actions--playcount_grey svg-icon--actions--playcount_grey-dims"></span>
                                            <span class="counts-text"><format-large-number number="62807"></format-large-number> plays </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar video')">
                                <div class="slider-card__videos">
                                    <a href="/video/4893/the-best-thai-coconut-soup/" data-internal-referrer-link="similar_video_banner" data-click-id="simslot_7" referring-id="214556">
                                        <img class="slider-card__videos videoImg" data-lazy-load data-original-src="http://brightcove.vo.llnwd.net/v1/unsecured/media/1033249144001/201411/2601/1033249144001_3895455672001_video-still-for-video-3867642501001.jpg?pubId=1033249144001" alt="The Best Thai Coconut Soup Recipe and Video - A delicious, must-have soup recipe." title="The Best Thai Coconut Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedVideos" />
                                        <span class="icon--videoplay-small" href="/video/4893/the-best-thai-coconut-soup/"></span>
                                        <h3 class="slider-card__h3">The Best Thai Coconut Soup</h3>
                                        <div class="counts-div">
                                            <span class="svg-icon--actions--playcount_grey svg-icon--actions--playcount_grey-dims"></span>
                                            <span class="counts-text"><format-large-number number="56589"></format-large-number> plays </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar video')">
                                <div class="slider-card__videos">
                                    <a href="/video/5497/chicken-zoodle-soup/" data-internal-referrer-link="similar_video_banner" data-click-id="simslot_8" referring-id="214556">
                                        <img class="slider-card__videos videoImg" data-lazy-load data-original-src="http://images.media-allrecipes.com/global/recipes/nophoto/nopicture-250x250.png" alt="Chicken Zoodle Soup Recipe and Video - This comforting and nutritious chicken soup trades out the noodles for vibrant sp" title="Chicken Zoodle Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedVideos" />
                                        <span class="icon--videoplay-small" href="/video/5497/chicken-zoodle-soup/"></span>
                                        <h3 class="slider-card__h3">Chicken Zoodle Soup</h3>
                                        <div class="counts-div">
                                            <span class="svg-icon--actions--playcount_grey svg-icon--actions--playcount_grey-dims"></span>
                                            <span class="counts-text"><format-large-number number="19063"></format-large-number> plays </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar video')">
                                <div class="slider-card__videos">
                                    <a href="/video/5510/dumpling-soup/" data-internal-referrer-link="similar_video_banner" data-click-id="simslot_9" referring-id="214556">
                                        <img class="slider-card__videos videoImg" data-lazy-load data-original-src="http://brightcove.vo.llnwd.net/v1/unsecured/media/1033249144001/201604/2606/1033249144001_4830657190001_4827312194001-vs.jpg?pubId=1033249144001" alt="Dumpling Soup Recipe and Video - Comforting potato soup with homemade dumplings!" title="Dumpling Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedVideos" />
                                        <span class="icon--videoplay-small" href="/video/5510/dumpling-soup/"></span>
                                        <h3 class="slider-card__h3">Dumpling Soup</h3>
                                        <div class="counts-div">
                                            <span class="svg-icon--actions--playcount_grey svg-icon--actions--playcount_grey-dims"></span>
                                            <span class="counts-text"><format-large-number number="5082"></format-large-number> plays </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar video')">
                                <div class="slider-card__videos">
                                    <a href="/video/7285/broccoli-soup-au-gratin/" data-internal-referrer-link="similar_video_banner" data-click-id="simslot_10" referring-id="214556">
                                        <img class="slider-card__videos videoImg" data-lazy-load data-original-src="http://brightcove.vo.llnwd.net/v1/unsecured/media/1033249144001/201701/2204/1033249144001_5281532326001_5279894174001-vs.jpg?pubId=1033249144001" alt="Broccoli Soup Au Gratin Recipe and Video - An elevated and exciting broccoli soup!" title="Broccoli Soup Au Gratin"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedVideos" />
                                        <span class="icon--videoplay-small" href="/video/7285/broccoli-soup-au-gratin/"></span>
                                        <h3 class="slider-card__h3">Broccoli Soup Au Gratin</h3>
                                        <div class="counts-div">
                                            <span class="svg-icon--actions--playcount_grey svg-icon--actions--playcount_grey-dims"></span>
                                            <span class="counts-text"><format-large-number number="4146"></format-large-number> plays </span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                    </ul>


                    <ul class="hub-carousel" id="relatedCategories" ng-show="isSet(3)">
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar categories')">
                                <div class="slider-card__hub">
                                    <a href="/recipes/445/soups-stews-and-chili/soup/beef-soup/" target="_self" data-internal-referrer-link="similar_category_banner" data-click-id="simslot_1" referring-id="214556">
                                        <img class="slider-card__img hub" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/136x136/1493606.jpg" alt="" title="Beef Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedCategories" />
                                        <h3 class="slider-card__h3">Beef Soup</h3>
                                        <div class="hub-recipeCount">126 recipes</div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar categories')">
                                <div class="slider-card__hub">
                                    <a href="/recipes/16369/soups-stews-and-chili/soup/" target="_self" data-internal-referrer-link="similar_category_banner" data-click-id="simslot_2" referring-id="214556">
                                        <img class="slider-card__img hub" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/136x136/257086.jpg" alt="" title="Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedCategories" />
                                        <h3 class="slider-card__h3">Soup</h3>
                                        <div class="hub-recipeCount">2893 recipes</div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar categories')">
                                <div class="slider-card__hub">
                                    <a href="/recipes/94/soups-stews-and-chili/" target="_self" data-internal-referrer-link="similar_category_banner" data-click-id="simslot_3" referring-id="214556">
                                        <img class="slider-card__img hub" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/136x136/441436.jpg" alt="" title="Soups, Stews and Chili"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedCategories" />
                                        <h3 class="slider-card__h3">Soups, Stews and Chili</h3>
                                        <div class="hub-recipeCount">4251 recipes</div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar categories')">
                                <div class="slider-card__hub">
                                    <a href="/recipes/1642/everyday-cooking/" target="_self" data-internal-referrer-link="similar_category_banner" data-click-id="simslot_4" referring-id="214556">
                                        <img class="slider-card__img hub" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/136x136/374700.jpg" alt="" title="Everyday Cooking"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedCategories" />
                                        <h3 class="slider-card__h3">Everyday Cooking</h3>
                                        <div class="hub-recipeCount">38443 recipes</div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar categories')">
                                <div class="slider-card__hub">
                                    <a href="/recipes/" target="_self" data-internal-referrer-link="similar_category_banner" data-click-id="simslot_5" referring-id="214556">
                                        <img class="slider-card__img hub" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/136x136/3792913.jpg" alt="" title="Recipes"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedCategories" />
                                        <h3 class="slider-card__h3">Recipes</h3>
                                        <div class="hub-recipeCount">63498 recipes</div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar categories')">
                                <div class="slider-card__hub">
                                    <a href="/recipes/1861/everyday-cooking/convenience-cooking/canned-food/vegetables/" target="_self" data-internal-referrer-link="similar_category_banner" data-click-id="simslot_6" referring-id="214556">
                                        <img class="slider-card__img hub" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/136x136/966369.jpg" alt="" title="Canned Vegetables"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedCategories" />
                                        <h3 class="slider-card__h3">Canned Vegetables</h3>
                                        <div class="hub-recipeCount">2207 recipes</div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar categories')">
                                <div class="slider-card__hub">
                                    <a href="/recipes/1849/everyday-cooking/convenience-cooking/canned-food/" target="_self" data-internal-referrer-link="similar_category_banner" data-click-id="simslot_7" referring-id="214556">
                                        <img class="slider-card__img hub" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/136x136/1526126.jpg" alt="" title="Canned Food Recipes"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedCategories" />
                                        <h3 class="slider-card__h3">Canned Food Recipes</h3>
                                        <div class="hub-recipeCount">6539 recipes</div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar categories')">
                                <div class="slider-card__hub">
                                    <a href="/recipes/17674/main-dish/soups-and-stews/" target="_self" data-internal-referrer-link="similar_category_banner" data-click-id="simslot_8" referring-id="214556">
                                        <img class="slider-card__img hub" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/136x136/744532.jpg" alt="" title="Main Dish Soups and Stews"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedCategories" />
                                        <h3 class="slider-card__h3">Main Dish Soups and Stews</h3>
                                        <div class="hub-recipeCount">153 recipes</div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar categories')">
                                <div class="slider-card__hub">
                                    <a href="/recipes/200/meat-and-poultry/beef/" target="_self" data-internal-referrer-link="similar_category_banner" data-click-id="simslot_9" referring-id="214556">
                                        <img class="slider-card__img hub" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/136x136/272545.jpg" alt="" title="Beef Recipes"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedCategories" />
                                        <h3 class="slider-card__h3">Beef Recipes</h3>
                                        <div class="hub-recipeCount">4521 recipes</div>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar categories')">
                                <div class="slider-card__hub">
                                    <a href="/recipes/83/everyday-cooking/convenience-cooking/" target="_self" data-internal-referrer-link="similar_category_banner" data-click-id="simslot_10" referring-id="214556">
                                        <img class="slider-card__img hub" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/136x136/965715.jpg" alt="" title="Convenience Cooking"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedCategories" />
                                        <h3 class="slider-card__h3">Convenience Cooking</h3>
                                        <div class="hub-recipeCount">8276 recipes</div>
                                    </a>
                                </div>
                            </li>
                    </ul>


                    <ul class="article-carousel" id="relatedArticles" ng-show="isSet(4)">
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar article')">
                                <div class="slider-card__articles">
                                    <a href="/HowTo/super-bowl-chili-cook-off" data-internal-referrer-link="similar_article_banner" data-click-id="simslot_1" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/images/7437.jpg" alt="Super Bowl(R): Chili Cook-Off" title="Super Bowl(R): Chili Cook-Off"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedArticles" />
                                        <h3 class="slider-card__h3">Super Bowl&#174;: Chili Cook-Off</h3>
                                        <span class="article-author">By: Cory Vicens</span>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar article')">
                                <div class="slider-card__articles">
                                    <a href="/HowTo/grilling-101-steak-chicken-and-kabobs" data-internal-referrer-link="similar_article_banner" data-click-id="simslot_2" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/images/7993.jpg" alt="Grilling 101: Steak, Chicken and Kabobs" title="Grilling 101: Steak, Chicken and Kabobs"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedArticles" />
                                        <h3 class="slider-card__h3">Grilling 101: Steak, Chicken and K...</h3>
                                        <span class="article-author">By: Allrecipes Staff</span>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar article')">
                                <div class="slider-card__articles">
                                    <a href="/HowTo/basic-soup-stocks-vegetarian-beef-and-chicken" data-internal-referrer-link="similar_article_banner" data-click-id="simslot_3" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/images/7589.jpg" alt="Basic Soup Stocks: Vegetarian, Beef, and Chicken" title="Basic Soup Stocks: Vegetarian, Beef, and Chicken"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedArticles" />
                                        <h3 class="slider-card__h3">Basic Soup Stocks: Vegetarian, Bee...</h3>
                                        <span class="article-author">By: Allrecipes Staff</span>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar article')">
                                <div class="slider-card__articles">
                                    <a href="/HowTo/cooking-questions-soup" data-internal-referrer-link="similar_article_banner" data-click-id="simslot_4" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/images/7439.jpg" alt="Cooking Questions: Soup" title="Cooking Questions: Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedArticles" />
                                        <h3 class="slider-card__h3">Cooking Questions: Soup</h3>
                                        <span class="article-author">By: Allrecipes Staff</span>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar article')">
                                <div class="slider-card__articles">
                                    <a href="/HowTo/matzo-ball-soup" data-internal-referrer-link="similar_article_banner" data-click-id="simslot_5" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/images/7133.jpg" alt="Matzo Ball Soup" title="Matzo Ball Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedArticles" />
                                        <h3 class="slider-card__h3">Matzo Ball Soup</h3>
                                        <span class="article-author">By: Jennifer Anderson</span>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar article')">
                                <div class="slider-card__articles">
                                    <a href="/HowTo/split-pea-soup" data-internal-referrer-link="similar_article_banner" data-click-id="simslot_6" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/images/21278.jpg" alt="Split Pea Soup" title="Split Pea Soup"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedArticles" />
                                        <h3 class="slider-card__h3">Split Pea Soup</h3>
                                        <span class="article-author">By: Jennifer Anderson</span>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar article')">
                                <div class="slider-card__articles">
                                    <a href="/HowTo/thickening-soups" data-internal-referrer-link="similar_article_banner" data-click-id="simslot_7" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/images/8000.jpg" alt="Thickening Soups" title="Thickening Soups"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedArticles" />
                                        <h3 class="slider-card__h3">Thickening Soups</h3>
                                        <span class="article-author">By: Allrecipes Staff</span>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar article')">
                                <div class="slider-card__articles">
                                    <a href="/HowTo/ideas-for-easy-soup-toppings" data-internal-referrer-link="similar_article_banner" data-click-id="simslot_8" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/images/8821.jpg" alt="Ideas for Easy Soup Toppings" title="Ideas for Easy Soup Toppings"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedArticles" />
                                        <h3 class="slider-card__h3">Ideas for Easy Soup Toppings</h3>
                                        <span class="article-author">By: Jennifer Anderson</span>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar article')">
                                <div class="slider-card__articles">
                                    <a href="/HowTo/budget-friendly-recipes-for-ground-beef" data-internal-referrer-link="similar_article_banner" data-click-id="simslot_9" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/images/20299.jpg" alt="Budget-Friendly Recipes for Ground Beef" title="Budget-Friendly Recipes for Ground Beef"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedArticles" />
                                        <h3 class="slider-card__h3">Budget-Friendly Recipes for Ground...</h3>
                                        <span class="article-author">By: Vanessa Greaves</span>
                                    </a>
                                </div>
                            </li>
                            <li class="slider-card" ng-click="setAnalyticsCookie('similar article')">
                                <div class="slider-card__articles">
                                    <a href="/HowTo/how-to-cook-steak" data-internal-referrer-link="similar_article_banner" data-click-id="simslot_10" referring-id="214556">
                                        <img class="slider-card__img" data-lazy-load data-original-src="http://images.media-allrecipes.com/images/36829.jpg" alt="How to Cook Steak" title="How to Cook Steak"  src="http://images.media-allrecipes.com/ar/spacer.gif" data-container="relatedArticles" />
                                        <h3 class="slider-card__h3">How to Cook Steak</h3>
                                        <span class="article-author">By: Julie Filips</span>
                                    </a>
                                </div>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>



        <div class="mag-cta-mobile">
            <div class="mag-cta" data-ng-controller="ar_controllers_mag_subscription">

    <a ng-href="{{CtaSubscriptionUrl}}" target="_blank" class="ad-mag-homeBtm">
        <h2>Get the magazine</h2>
        <img class="ad-mag-homeBtm__th" alt="Subscribe to Allrecipes Magazine" title="Allrecipes Magazine" src="http://images.media-allrecipes.com/images/75386.png" />
        <div class="ad-mag-homeBtm__text">
            <h4>Get a full year for just $7.99!</h4>
            <p>Cook 5-star weekday dinners every time.</p>
        </div>
    </a>
</div>
        </div>



<script>
    var reviewsInitialSet = {"recipeId":214556,"recipeTitle":"Steak Soup","recipeImageUrl":"http://images.media-allrecipes.com/userphotos/250x250/488609.jpg","heroImage":"http://images.media-allrecipes.com/userphotos/560x315/488609.jpg","reviews":{"MostHelpfulPositive":{"text":"I am thrilled to be the first review. This soup was EXCELLENT! I love soup but have always struggled with veggie/tomato/beef based ones. They just never turn out like I remember mom making. Not until this one that is. I made exactly as written and was very pleased. This would be good with some green beans or peas for added nutrition and color too. Very good full bodied flavor and this will be my go to veggie soup.  Thank you so much for sharing!","rating":5.0,"reviewID":2780146,"helpfulCount":111,"dateLastModified":"October 13, 2010","submitter":{"userID":3567821,"name":"Soup Loving Nicole","profileUrl":"/cook/souplovingnicole/","photo":{"urls":[{"url":"http://images.media-allrecipes.com/userphotos/90x90/00/93/07/930778.jpg"}]},"followersCount":9102,"favoritesCount":813,"madeRecipesCount":1470,"city":null,"region":null}},"MostHelpfulNegative":{"text":"I should have more carefully read the reviews for this before making it.  I would have either cut WAY down on the tomato paste, or completely omitted it.  I was really excited about this soup as I was making it and then when I added the tomato paste, it turned the nice beef broth into a very strong tomato broth.  If you love a strong tomato flavor to your steak soup, then this is a great recipe for you.  If i make this again, I will definitely omit the paste.  Otherwise, this would be a wonderful recipe.","rating":3.0,"reviewID":2802648,"helpfulCount":74,"dateLastModified":"October 25, 2010","submitter":{"userID":1579215,"name":"Corinne","profileUrl":"/cook/1579215/","photo":{"urls":[{"url":"http://images.media-allrecipes.com/userphotos/90x90/00/33/54/335426.jpg"}]},"followersCount":3,"favoritesCount":326,"madeRecipesCount":192,"city":null,"region":null}},"MostPositiveIndex":1,"MostCriticalIndex":2,"Reviews":[{"text":"I am thrilled to be the first review. This soup was EXCELLENT! I love soup but have always struggled with veggie/tomato/beef based ones. They just never turn out like I remember mom making. Not until this one that is. I made exactly as written and was very pleased. This would be good with some green beans or peas for added nutrition and color too. Very good full bodied flavor and this will be my go to veggie soup.  Thank you so much for sharing!","rating":5.0,"reviewID":2780146,"helpfulCount":111,"dateLastModified":"October 13, 2010","submitter":{"userID":3567821,"name":"Soup Loving Nicole","profileUrl":"/cook/souplovingnicole/","photo":{"urls":[{"url":"http://images.media-allrecipes.com/userphotos/90x90/00/93/07/930778.jpg"}]},"followersCount":9102,"favoritesCount":813,"madeRecipesCount":1470,"city":null,"region":null}},{"text":"I should have more carefully read the reviews for this before making it.  I would have either cut WAY down on the tomato paste, or completely omitted it.  I was really excited about this soup as I was making it and then when I added the tomato paste, it turned the nice beef broth into a very strong tomato broth.  If you love a strong tomato flavor to your steak soup, then this is a great recipe for you.  If i make this again, I will definitely omit the paste.  Otherwise, this would be a wonderful recipe.","rating":3.0,"reviewID":2802648,"helpfulCount":74,"dateLastModified":"October 25, 2010","submitter":{"userID":1579215,"name":"Corinne","profileUrl":"/cook/1579215/","photo":{"urls":[{"url":"http://images.media-allrecipes.com/userphotos/90x90/00/33/54/335426.jpg"}]},"followersCount":3,"favoritesCount":326,"madeRecipesCount":192,"city":null,"region":null}},{"text":"YUM!!! The broth for this is fantastic! I only had a tsp of Paprika left in my spice jar, so that is all I used. After reading the reviews, I only used 3 oz of tomato paste and that was perfect for my taste. I substituted peas for the corn and it gave it the perfect hint of color! Will be my go to recipe for sure!","rating":5.0,"reviewID":3022184,"helpfulCount":57,"dateLastModified":"January 26, 2011","submitter":{"userID":3252834,"name":"Kathleen","profileUrl":"/cook/kathleen/","photo":{"urls":[{"url":"http://images.media-allrecipes.com/userphotos/90x90/00/32/84/328465.jpg"}]},"followersCount":213,"favoritesCount":651,"madeRecipesCount":92,"city":null,"region":null}},{"text":"This is very good. It taste like beef stew soup. After reading the reviews and some saying the tomato paste was too much I added it a Tablespoon at a time and used about half the can which was enough for my taste. The marjoram and paprika flavor is nice and while the meat was simmering I added 1/2 c. cabernet wine (dry red wine) which enhanced and brought together the flavors. It took a little longer for my meat to cook to tender. I felt no need to thicken this soup further as it is soup and not stew. Flavors developed more after allowing to rest. Delicious and great with a hunk of crusty bread.","rating":5.0,"reviewID":2805076,"helpfulCount":28,"dateLastModified":"October 26, 2010","submitter":{"userID":2225200,"name":"Linda(LMT)","profileUrl":"/cook/lindalmt/","photo":{"urls":[{"url":"http://images.media-allrecipes.com/userphotos/90x90/02/51/03/2510380.jpg"}]},"followersCount":151,"favoritesCount":1555,"madeRecipesCount":335,"city":null,"region":null}},{"text":"Very easy and absolutely delicious.  I used top sirloin as another reviewer suggested instead of round steak because I wanted to be sure it was tender.  And since some other reviewers were not fans of the tomato paste I just added a bit of the concentrated tomato paste that comes in a tube until it tasted the way I wanted to and it was perfect.  I will definitely make this again.","rating":5.0,"reviewID":3565982,"helpfulCount":23,"dateLastModified":"November 30, 2011","submitter":{"userID":3848767,"name":"Ellen","profileUrl":"/cook/3848767/","photo":{"urls":[{"url":"http://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"}]},"followersCount":1,"favoritesCount":89,"madeRecipesCount":3,"city":null,"region":null}},{"text":"This Soup was Outstanding.  My family loved it.  I made it the first time just as stated and it was very good.  Second time and going forward I add 1 C. of Peas, 1/2 C. Red Wine and 1 Tablespoon Worcestershire Sauce this adds great flavor to the Steak.  I also make it more like a soup not thick.\n My family asks for it all the time even in the summer!  Goes great with Rosemary Flatbread.\nThanks for the excellent Recipe!","rating":5.0,"reviewID":3194055,"helpfulCount":21,"dateLastModified":"April 19, 2011","submitter":{"userID":3159491,"name":"Nancy Reif","profileUrl":"/cook/3159491/","photo":{"urls":[{"url":"http://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"}]},"followersCount":0,"favoritesCount":8,"madeRecipesCount":2,"city":null,"region":null}},{"text":"What I love most about AllRecipes is that I can look at several recipes and gather ideas for the perfect dish. In another recipe the author added diced cabbage. I tweaked that in this recipe to adding kale, for both color and nutrition. I used two small cans (5.5 oz) of V8 juice and skipped the tomato Paste altogether. Not a fan Of tomoto-ey things. Lastly, I replaced the potatoes with barley because of the nutritional benefits it brings. Very yummy.","rating":5.0,"reviewID":3068611,"helpfulCount":17,"dateLastModified":"February 14, 2011","submitter":{"userID":1218101,"name":"CookinGal","profileUrl":"/cook/1218101/","photo":{"urls":[{"url":"http://images.media-allrecipes.com/userphotos/90x90/00/22/92/229234.jpg"}]},"followersCount":3,"favoritesCount":130,"madeRecipesCount":78,"city":null,"region":null}},{"text":"I had leftover medium rare Top Sirloin I had marinated and grilled for a party.   The next day I googled \"steak soup recipe\" and found this one.   A keeper!    Because my steak was already grilled to medium rare I did not put it in with the onions until about a minute before the time came to coat the onion and steak mixture.   I sliced it more thin than cubed so there were more \"pieces\" in the soup.    I used Vidalia onions, because they are my fave when I can get them in California.    I left out the celery leaves, only because I have family that inexplicably dislikes the the taste of celery.   Otherwise I followed the recipe to a \"T.\"    \n\nSuper well received, and the recipe was requested!\n\nWhen I make it again I might add a little more broth because after refrigerating it was much less \"soup like.\"     But it was still good.    I had some leftover red potatoes I had mashed with 1% low fat milk and Smart Balance and simply added the thick steak soup to them and had the equivalent of a healthy delectable Shepherd's Pie.\n\nThanks again!","rating":5.0,"reviewID":3241813,"helpfulCount":16,"dateLastModified":"May 18, 2011","submitter":{"userID":3332159,"name":"westcoastinvader","profileUrl":"/cook/3332159/","photo":{"urls":[{"url":"http://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"}]},"followersCount":0,"favoritesCount":0,"madeRecipesCount":4,"city":null,"region":null}},{"text":"Really good. Using top sirloin insures the beef to be more tender than top round. Putting in crockpot is great.","rating":5.0,"reviewID":2788336,"helpfulCount":16,"dateLastModified":"October 18, 2010","submitter":{"userID":4382869,"name":"Christine Denstaedt","profileUrl":"/cook/4382869/","photo":{"urls":[{"url":"http://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png"}]},"followersCount":0,"favoritesCount":235,"madeRecipesCount":53,"city":null,"region":null}}]},"totalReviews":194};
</script>

<section id="reviews" class="recipe-reviews" ng-controller="ar_controllers_recipe_reviews"
         ng-init="init('214556', 2, 9, 'Recipe', 22, 'MostHelpful')">

    <h2 class="heading__h2--gutters review">Reviews</h2>
        <a class="icon-read--reviews" href="" ng-click="$event.preventDefault();reviewModalDialog(1, sortBy)">
            <span>Read all reviews</span>  <span class="svg-icon--recipe-page--read-reviews svg-icon--recipe-page--read-reviews-dims"></span>
        </a>
    <span class="recipe-reviews__header--count">194</span>




<script>
    var userReview = {"recipeId":0,"userReview":{"text":null,"rating":0.0,"date":null,"recipetype":0}};
</script>

<div class="current-user review-container clearfix current--reviewer" data-ng-controller="ar_controllers_rate_and_review" >
    <div ng-show="model.userReview.rating == 0" class="current-user__rateballoon own-review" ng-cloak>
        <img class="img-profile rateballoon" alt="profile image" src="http://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png" />
        <a href="javascript:void(0);" ng-click="openRating()" id="ratingButton">
            <div class="rateballoon">Rate and review</div>
        </a>
    </div>
    <div ng-show="model.userReview.rating != 0" class="current-user__review own-review" ng-cloak>
        <article class="reviewer-info imadeit-enabled">
            <div class="review-wrapper">
                <ul class="cook-details">
                    <li>
                        <a ng-href=""><img class="img-profile elevate-cook-thumbnail" alt="profile image" src="http://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png" /></a>
                    </li>
                    <li>
                        <h4>My review</h4>
                        <div class="stars-and-date-container">
                            <div data-star-rating data-rating="{{model.userReview.rating}}"></div>
                            <div class="review-date" ng-bind="model.userReview.date | date:'M/d/yyyy'"></div>
                        </div>
                </ul>
                <div ng-bind="model.userReview.text" class="reviewer--text"></div>
            </div>
            <div class="icon--edit-review">
                <ul>
                    <li class="cook-review--count">
                    </li>
                    <li>
                        <a id="lnkEdit" href="javascript:void()" ng-click="openRating()" class="edit-review"><span>Edit review</span></a>
                    </li>
                </ul>
            </div>
        </article>
    </div>
</div>
<ol>
    <li><h4 class="helpful-header">252 Ratings</h4></li>
        <li>
            <div title="185 cooks loved it!">
                <div class="reviewsummary--bar">
                    <div class="reviewsummary--percent" style="width: 73%">&nbsp;</div>
                </div>
                <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 5 >
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
</div>
            </div>
        </li>
        <li>
            <div title="52 cooks liked it!">
                <div class="reviewsummary--bar">
                    <div class="reviewsummary--percent" style="width: 20%">&nbsp;</div>
                </div>
                <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 4 >
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/empty-star.svg"  />
</div>
            </div>
        </li>
        <li>
            <div title="9 cooks thought it was OK">
                <div class="reviewsummary--bar">
                    <div class="reviewsummary--percent" style="width: 3%">&nbsp;</div>
                </div>
                <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 3 >
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/empty-star.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/empty-star.svg"  />
</div>
            </div>
        </li>
        <li>
            <div title="3 cooks didn&#39;t like it">
                <div class="reviewsummary--bar">
                    <div class="reviewsummary--percent" style="width: 1%">&nbsp;</div>
                </div>
                <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 2 >
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/empty-star.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/empty-star.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/empty-star.svg"  />
</div>
            </div>
        </li>
        <li>
            <div title="3 cooks couldn&#39;t eat it">
                <div class="reviewsummary--bar">
                    <div class="reviewsummary--percent" style="width: 1%">&nbsp;</div>
                </div>
                <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 1 >
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/empty-star.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/empty-star.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/empty-star.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/empty-star.svg"  />
</div>
            </div>
        </li>
</ol>
    <div class="review-container clearfix" itemprop="review" itemscope itemtype="http://schema.org/Review">
        <meta id="metaRecipeTitle" itemprop="itemReviewed" />
            <span class="helpful-header">Most helpful positive review</span>

        <article class="reviewer-info imadeit-enabled">
                <div class="recipe-details-cook-stats-container">
    <a href="/cook/souplovingnicole/">


                <ul class="cook-details">
                    <li>

                        <img class="img-profile elevate-cook-thumbnail" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/90x90/00/93/07/930778.jpg" alt="" title=""  src="http://images.media-allrecipes.com/ar/spacer.gif" style="display: inline;" />
                    </li>
                    <li class="cook-info">
                        <h4 itemprop="author">  Soup Loving Nicole
 <!-- no divs on under h4-->
                               <ar-all-star class="arAllStar" togglerId="toggleButton_3567821"></ar-all-star>
                         </h4>


                        <ul class="cook-details__followers followers-count">
                            <li>
                                <span class="icon--cook-card-follower" title="Followers"></span>
                            </li>
                            <li>
                                <span><format-large-number number="9102"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__favorites favorites-count">
                            <li>
                                <span class="icon--cook-card-favorite" title="Favorites"></span>
                            </li>
                            <li>
                                <span><format-large-number number="813"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__recipes-made recipes-made-count">
                            <li>
                                <span class="icon--cook-card-made" title="Recipes Made"></span>
                            </li>
                            <li>
                                <span><format-large-number number="1470"></format-large-number></span>
                            </li>
                        </ul>
                    </li>
                </ul>







    </a>
</div>





            <div class="stars-and-date-container">
                <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 5 >
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
</div>
                <div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
                    <meta itemprop="ratingValue" content="5">
                </div>
                <div class="review-date">10/13/2010</div>
                <meta itemprop="dateCreated" content="2010-10-13">
            </div>
        </article>

        <p itemprop="reviewBody">
I am thrilled to be the first review. This soup was EXCELLENT! I love soup but have always struggled with veggie/tomato/beef based ones. They just never turn out like I remember mom making. Not ...
        </p>
        <div class="review-detail">
            <a class="review-detail__link" href="reviews/2780146/" ng-click="$event.preventDefault();reviewModalDialog(0, sortBy)">
                <span class="icon--expand-icon"></span>
                <span>Read more</span>
            </a>
        </div>
    </div>

    <div class="review-container clearfix" itemprop="review" itemscope itemtype="http://schema.org/Review">
        <meta id="metaRecipeTitle" itemprop="itemReviewed" />
            <span class="helpful-header">Most helpful critical review</span>

        <article class="reviewer-info imadeit-enabled">
                <div class="recipe-details-cook-stats-container">
    <a href="/cook/1579215/">


                <ul class="cook-details">
                    <li>

                        <img class="img-profile elevate-cook-thumbnail" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/90x90/00/33/54/335426.jpg" alt="" title=""  src="http://images.media-allrecipes.com/ar/spacer.gif" style="display: inline;" />
                    </li>
                    <li class="cook-info">
                        <h4 itemprop="author">  Corinne
                         </h4>


                        <ul class="cook-details__followers followers-count">
                            <li>
                                <span class="icon--cook-card-follower" title="Followers"></span>
                            </li>
                            <li>
                                <span><format-large-number number="3"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__favorites favorites-count">
                            <li>
                                <span class="icon--cook-card-favorite" title="Favorites"></span>
                            </li>
                            <li>
                                <span><format-large-number number="326"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__recipes-made recipes-made-count">
                            <li>
                                <span class="icon--cook-card-made" title="Recipes Made"></span>
                            </li>
                            <li>
                                <span><format-large-number number="192"></format-large-number></span>
                            </li>
                        </ul>
                    </li>
                </ul>







    </a>
</div>





            <div class="stars-and-date-container">
                <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 3 >
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/empty-star.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/empty-star.svg"  />
</div>
                <div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
                    <meta itemprop="ratingValue" content="3">
                </div>
                <div class="review-date">10/25/2010</div>
                <meta itemprop="dateCreated" content="2010-10-25">
            </div>
        </article>

        <p itemprop="reviewBody">
I should have more carefully read the reviews for this before making it.  I would have either cut WAY down on the tomato paste, or completely omitted it.  I was really excited about this soup as...
        </p>
        <div class="review-detail">
            <a class="review-detail__link" href="reviews/2802648/" ng-click="$event.preventDefault();reviewModalDialog(1, sortBy)">
                <span class="icon--expand-icon"></span>
                <span>Read more</span>
            </a>
        </div>
    </div>

            <div class="review-divider review-container review-ad-space">
                <div data-ad-container-autocollapse class="ad-recipe-page-middle-container ad-desktop-only">
    <sideloaded-ad ad-slot-hc-type="div-gpt-lazy-leaderboard-fixed-tier3" platform="desktop" class="ad-recipe-page-middle-3"></sideloaded-ad>
</div>

            </div>
            <div class="tabs reviews-sort">
                <div ng-click="getReviews('MostHelpful')" ng-class="{'selected':sortBy=='MostHelpful'}">Most helpful</div>
                <div ng-click="getReviews('MostPositive')" ng-class="{'selected':sortBy=='MostPositive'}">Most positive</div>
                <div ng-click="getReviews('LeastPositive')" ng-class="{'selected':sortBy=='LeastPositive'}">Least positive</div>
                <div ng-click="getReviews('Newest')" ng-class="{'selected':sortBy=='Newest'}">Newest</div>
            </div>
            <div class="review-container dropdown-menu">
                <div ng-controller="ar_controllers_review_details" class="review-detail-nav">
                    <div class="review-detail-nav__container dropdown-menu">
                        <div class="review-detail-nav__sort__dropdownlist" ng-click="toggleShowSortOptions()" id="sort">
                            <span>
                                <span class="review-detail-nav__sort__dropdownlist__text" ng-bind="'Reviews: ' + sortByFriendlyName[sortBy]"></span><span ng-class="indicatorStyle"></span>
                            </span>
                        </div>
                    </div>
                    <ul class="sort-nav exposed" data-ng-cloak ng-class="showSortFiltersStyle" ng-click="toggleShowSortOptions()">
                        <li ng-click="getReviews('MostHelpful')" ng-class="{'btn-grey':sortBy == 'MostHelpful'}" ng-bind="::sortByFriendlyName['MostHelpful']"></li>
                        <li ng-click="getReviews('MostPositive')" ng-class="{'btn-grey':sortBy == 'MostPositive'}" ng-bind="::sortByFriendlyName['MostPositive']"></li>
                        <li ng-click="getReviews('LeastPositive')" ng-class="{'btn-grey':sortBy == 'LeastPositive'}" ng-bind="::sortByFriendlyName['LeastPositive']"></li>
                        <li ng-click="getReviews('Newest')" ng-class="{'btn-grey':sortBy == 'Newest'}" ng-bind="::sortByFriendlyName['Newest']"></li>
                    </ul>
                </div>
            </div>
        <section ar-initial-reviews>

    <div class="review-container clearfix" itemprop="review" itemscope itemtype="http://schema.org/Review">
        <meta id="metaRecipeTitle" itemprop="itemReviewed" />

        <article class="reviewer-info imadeit-enabled">
                <div class="recipe-details-cook-stats-container">
    <a href="/cook/souplovingnicole/">


                <ul class="cook-details">
                    <li>

                        <img class="img-profile elevate-cook-thumbnail" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/90x90/00/93/07/930778.jpg" alt="" title=""  src="http://images.media-allrecipes.com/ar/spacer.gif" style="display: inline;" />
                    </li>
                    <li class="cook-info">
                        <h4 itemprop="author">  Soup Loving Nicole
 <!-- no divs on under h4-->
                               <ar-all-star class="arAllStar" togglerId="toggleButton_3567821"></ar-all-star>
                         </h4>


                        <ul class="cook-details__followers followers-count">
                            <li>
                                <span class="icon--cook-card-follower" title="Followers"></span>
                            </li>
                            <li>
                                <span><format-large-number number="9102"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__favorites favorites-count">
                            <li>
                                <span class="icon--cook-card-favorite" title="Favorites"></span>
                            </li>
                            <li>
                                <span><format-large-number number="813"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__recipes-made recipes-made-count">
                            <li>
                                <span class="icon--cook-card-made" title="Recipes Made"></span>
                            </li>
                            <li>
                                <span><format-large-number number="1470"></format-large-number></span>
                            </li>
                        </ul>
                    </li>
                </ul>







    </a>
</div>





            <div class="stars-and-date-container">
                <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 5 >
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
</div>
                <div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
                    <meta itemprop="ratingValue" content="5">
                </div>
                <div class="review-date">10/13/2010</div>
                <meta itemprop="dateCreated" content="2010-10-13">
            </div>
        </article>

        <p itemprop="reviewBody">
I am thrilled to be the first review. This soup was EXCELLENT! I love soup but have always struggled with veggie/tomato/beef based ones. They just never turn out like I remember mom making. Not ...
        </p>
        <div class="review-detail">
            <a class="review-detail__link" href="reviews/2780146/" ng-click="$event.preventDefault();reviewModalDialog(0, sortBy)">
                <span class="icon--expand-icon"></span>
                <span>Read more</span>
            </a>
        </div>
    </div>

    <div class="review-container clearfix" itemprop="review" itemscope itemtype="http://schema.org/Review">
        <meta id="metaRecipeTitle" itemprop="itemReviewed" />

        <article class="reviewer-info imadeit-enabled">
                <div class="recipe-details-cook-stats-container">
    <a href="/cook/1579215/">


                <ul class="cook-details">
                    <li>

                        <img class="img-profile elevate-cook-thumbnail" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/90x90/00/33/54/335426.jpg" alt="" title=""  src="http://images.media-allrecipes.com/ar/spacer.gif" style="display: inline;" />
                    </li>
                    <li class="cook-info">
                        <h4 itemprop="author">  Corinne
                         </h4>


                        <ul class="cook-details__followers followers-count">
                            <li>
                                <span class="icon--cook-card-follower" title="Followers"></span>
                            </li>
                            <li>
                                <span><format-large-number number="3"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__favorites favorites-count">
                            <li>
                                <span class="icon--cook-card-favorite" title="Favorites"></span>
                            </li>
                            <li>
                                <span><format-large-number number="326"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__recipes-made recipes-made-count">
                            <li>
                                <span class="icon--cook-card-made" title="Recipes Made"></span>
                            </li>
                            <li>
                                <span><format-large-number number="192"></format-large-number></span>
                            </li>
                        </ul>
                    </li>
                </ul>







    </a>
</div>





            <div class="stars-and-date-container">
                <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 3 >
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/empty-star.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/empty-star.svg"  />
</div>
                <div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
                    <meta itemprop="ratingValue" content="3">
                </div>
                <div class="review-date">10/25/2010</div>
                <meta itemprop="dateCreated" content="2010-10-25">
            </div>
        </article>

        <p itemprop="reviewBody">
I should have more carefully read the reviews for this before making it.  I would have either cut WAY down on the tomato paste, or completely omitted it.  I was really excited about this soup as...
        </p>
        <div class="review-detail">
            <a class="review-detail__link" href="reviews/2802648/" ng-click="$event.preventDefault();reviewModalDialog(1, sortBy)">
                <span class="icon--expand-icon"></span>
                <span>Read more</span>
            </a>
        </div>
    </div>

    <div class="review-container clearfix" itemprop="review" itemscope itemtype="http://schema.org/Review">
        <meta id="metaRecipeTitle" itemprop="itemReviewed" />

        <article class="reviewer-info imadeit-enabled">
                <div class="recipe-details-cook-stats-container">
    <a href="/cook/kathleen/">


                <ul class="cook-details">
                    <li>

                        <img class="img-profile elevate-cook-thumbnail" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/90x90/00/32/84/328465.jpg" alt="" title=""  src="http://images.media-allrecipes.com/ar/spacer.gif" style="display: inline;" />
                    </li>
                    <li class="cook-info">
                        <h4 itemprop="author">  Kathleen
                         </h4>


                        <ul class="cook-details__followers followers-count">
                            <li>
                                <span class="icon--cook-card-follower" title="Followers"></span>
                            </li>
                            <li>
                                <span><format-large-number number="213"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__favorites favorites-count">
                            <li>
                                <span class="icon--cook-card-favorite" title="Favorites"></span>
                            </li>
                            <li>
                                <span><format-large-number number="651"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__recipes-made recipes-made-count">
                            <li>
                                <span class="icon--cook-card-made" title="Recipes Made"></span>
                            </li>
                            <li>
                                <span><format-large-number number="92"></format-large-number></span>
                            </li>
                        </ul>
                    </li>
                </ul>







    </a>
</div>





            <div class="stars-and-date-container">
                <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 5 >
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
</div>
                <div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
                    <meta itemprop="ratingValue" content="5">
                </div>
                <div class="review-date">1/26/2011</div>
                <meta itemprop="dateCreated" content="2011-01-26">
            </div>
        </article>

        <p itemprop="reviewBody">
YUM!!! The broth for this is fantastic! I only had a tsp of Paprika left in my spice jar, so that is all I used. After reading the reviews, I only used 3 oz of tomato paste and that was perfect ...
        </p>
        <div class="review-detail">
            <a class="review-detail__link" href="reviews/3022184/" ng-click="$event.preventDefault();reviewModalDialog(2, sortBy)">
                <span class="icon--expand-icon"></span>
                <span>Read more</span>
            </a>
        </div>
    </div>

            <div class="review-divider"></div>
    <div class="review-container clearfix" itemprop="review" itemscope itemtype="http://schema.org/Review">
        <meta id="metaRecipeTitle" itemprop="itemReviewed" />

        <article class="reviewer-info imadeit-enabled">
                <div class="recipe-details-cook-stats-container">
    <a href="/cook/lindalmt/">


                <ul class="cook-details">
                    <li>

                        <img class="img-profile elevate-cook-thumbnail" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/90x90/02/51/03/2510380.jpg" alt="" title=""  src="http://images.media-allrecipes.com/ar/spacer.gif" style="display: inline;" />
                    </li>
                    <li class="cook-info">
                        <h4 itemprop="author">  Linda(LMT)
                         </h4>


                        <ul class="cook-details__followers followers-count">
                            <li>
                                <span class="icon--cook-card-follower" title="Followers"></span>
                            </li>
                            <li>
                                <span><format-large-number number="151"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__favorites favorites-count">
                            <li>
                                <span class="icon--cook-card-favorite" title="Favorites"></span>
                            </li>
                            <li>
                                <span><format-large-number number="1555"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__recipes-made recipes-made-count">
                            <li>
                                <span class="icon--cook-card-made" title="Recipes Made"></span>
                            </li>
                            <li>
                                <span><format-large-number number="335"></format-large-number></span>
                            </li>
                        </ul>
                    </li>
                </ul>







    </a>
</div>





            <div class="stars-and-date-container">
                <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 5 >
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
</div>
                <div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
                    <meta itemprop="ratingValue" content="5">
                </div>
                <div class="review-date">10/26/2010</div>
                <meta itemprop="dateCreated" content="2010-10-26">
            </div>
        </article>

        <p itemprop="reviewBody">
This is very good. It taste like beef stew soup. After reading the reviews and some saying the tomato paste was too much I added it a Tablespoon at a time and used about half the can which was e...
        </p>
        <div class="review-detail">
            <a class="review-detail__link" href="reviews/2805076/" ng-click="$event.preventDefault();reviewModalDialog(3, sortBy)">
                <span class="icon--expand-icon"></span>
                <span>Read more</span>
            </a>
        </div>
    </div>

    <div class="review-container clearfix" itemprop="review" itemscope itemtype="http://schema.org/Review">
        <meta id="metaRecipeTitle" itemprop="itemReviewed" />

        <article class="reviewer-info imadeit-enabled">
                <div class="recipe-details-cook-stats-container">
    <a href="/cook/3848767/">


                <ul class="cook-details">
                    <li>

                        <img class="img-profile elevate-cook-thumbnail" data-lazy-load data-original-src="http://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png" alt="" title=""  src="http://images.media-allrecipes.com/ar/spacer.gif" style="display: inline;" />
                    </li>
                    <li class="cook-info">
                        <h4 itemprop="author">  Ellen
                         </h4>


                        <ul class="cook-details__followers followers-count">
                            <li>
                                <span class="icon--cook-card-follower" title="Followers"></span>
                            </li>
                            <li>
                                <span><format-large-number number="1"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__favorites favorites-count">
                            <li>
                                <span class="icon--cook-card-favorite" title="Favorites"></span>
                            </li>
                            <li>
                                <span><format-large-number number="89"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__recipes-made recipes-made-count">
                            <li>
                                <span class="icon--cook-card-made" title="Recipes Made"></span>
                            </li>
                            <li>
                                <span><format-large-number number="3"></format-large-number></span>
                            </li>
                        </ul>
                    </li>
                </ul>







    </a>
</div>





            <div class="stars-and-date-container">
                <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 5 >
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
</div>
                <div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
                    <meta itemprop="ratingValue" content="5">
                </div>
                <div class="review-date">11/30/2011</div>
                <meta itemprop="dateCreated" content="2011-11-30">
            </div>
        </article>

        <p itemprop="reviewBody">
Very easy and absolutely delicious.  I used top sirloin as another reviewer suggested instead of round steak because I wanted to be sure it was tender.  And since some other reviewers were not f...
        </p>
        <div class="review-detail">
            <a class="review-detail__link" href="reviews/3565982/" ng-click="$event.preventDefault();reviewModalDialog(4, sortBy)">
                <span class="icon--expand-icon"></span>
                <span>Read more</span>
            </a>
        </div>
    </div>

    <div class="review-container clearfix" itemprop="review" itemscope itemtype="http://schema.org/Review">
        <meta id="metaRecipeTitle" itemprop="itemReviewed" />

        <article class="reviewer-info imadeit-enabled">
                <div class="recipe-details-cook-stats-container">
    <a href="/cook/3159491/">


                <ul class="cook-details">
                    <li>

                        <img class="img-profile elevate-cook-thumbnail" data-lazy-load data-original-src="http://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png" alt="" title=""  src="http://images.media-allrecipes.com/ar/spacer.gif" style="display: inline;" />
                    </li>
                    <li class="cook-info">
                        <h4 itemprop="author">  Nancy Reif
                         </h4>


                        <ul class="cook-details__followers followers-count">
                            <li>
                                <span class="icon--cook-card-follower" title="Followers"></span>
                            </li>
                            <li>
                                <span><format-large-number number="0"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__favorites favorites-count">
                            <li>
                                <span class="icon--cook-card-favorite" title="Favorites"></span>
                            </li>
                            <li>
                                <span><format-large-number number="8"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__recipes-made recipes-made-count">
                            <li>
                                <span class="icon--cook-card-made" title="Recipes Made"></span>
                            </li>
                            <li>
                                <span><format-large-number number="2"></format-large-number></span>
                            </li>
                        </ul>
                    </li>
                </ul>







    </a>
</div>





            <div class="stars-and-date-container">
                <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 5 >
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
</div>
                <div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
                    <meta itemprop="ratingValue" content="5">
                </div>
                <div class="review-date">4/19/2011</div>
                <meta itemprop="dateCreated" content="2011-04-19">
            </div>
        </article>

        <p itemprop="reviewBody">
This Soup was Outstanding.  My family loved it.  I made it the first time just as stated and it was very good.  Second time and going forward I add 1 C. of Peas, 1/2 C. Red Wine and 1 Tablespoon...
        </p>
        <div class="review-detail">
            <a class="review-detail__link" href="reviews/3194055/" ng-click="$event.preventDefault();reviewModalDialog(5, sortBy)">
                <span class="icon--expand-icon"></span>
                <span>Read more</span>
            </a>
        </div>
    </div>

            <div class="review-divider"></div>
    <div class="review-container clearfix" itemprop="review" itemscope itemtype="http://schema.org/Review">
        <meta id="metaRecipeTitle" itemprop="itemReviewed" />

        <article class="reviewer-info imadeit-enabled">
                <div class="recipe-details-cook-stats-container">
    <a href="/cook/1218101/">


                <ul class="cook-details">
                    <li>

                        <img class="img-profile elevate-cook-thumbnail" data-lazy-load data-original-src="http://images.media-allrecipes.com/userphotos/90x90/00/22/92/229234.jpg" alt="" title=""  src="http://images.media-allrecipes.com/ar/spacer.gif" style="display: inline;" />
                    </li>
                    <li class="cook-info">
                        <h4 itemprop="author">  CookinGal
                         </h4>


                        <ul class="cook-details__followers followers-count">
                            <li>
                                <span class="icon--cook-card-follower" title="Followers"></span>
                            </li>
                            <li>
                                <span><format-large-number number="3"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__favorites favorites-count">
                            <li>
                                <span class="icon--cook-card-favorite" title="Favorites"></span>
                            </li>
                            <li>
                                <span><format-large-number number="130"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__recipes-made recipes-made-count">
                            <li>
                                <span class="icon--cook-card-made" title="Recipes Made"></span>
                            </li>
                            <li>
                                <span><format-large-number number="78"></format-large-number></span>
                            </li>
                        </ul>
                    </li>
                </ul>







    </a>
</div>





            <div class="stars-and-date-container">
                <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 5 >
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
</div>
                <div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
                    <meta itemprop="ratingValue" content="5">
                </div>
                <div class="review-date">2/14/2011</div>
                <meta itemprop="dateCreated" content="2011-02-14">
            </div>
        </article>

        <p itemprop="reviewBody">
What I love most about AllRecipes is that I can look at several recipes and gather ideas for the perfect dish. In another recipe the author added diced cabbage. I tweaked that in this recipe to ...
        </p>
        <div class="review-detail">
            <a class="review-detail__link" href="reviews/3068611/" ng-click="$event.preventDefault();reviewModalDialog(6, sortBy)">
                <span class="icon--expand-icon"></span>
                <span>Read more</span>
            </a>
        </div>
    </div>

    <div class="review-container clearfix" itemprop="review" itemscope itemtype="http://schema.org/Review">
        <meta id="metaRecipeTitle" itemprop="itemReviewed" />

        <article class="reviewer-info imadeit-enabled">
                <div class="recipe-details-cook-stats-container">
    <a href="/cook/3332159/">


                <ul class="cook-details">
                    <li>

                        <img class="img-profile elevate-cook-thumbnail" data-lazy-load data-original-src="http://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png" alt="" title=""  src="http://images.media-allrecipes.com/ar/spacer.gif" style="display: inline;" />
                    </li>
                    <li class="cook-info">
                        <h4 itemprop="author">  westcoastinvader
                         </h4>


                        <ul class="cook-details__followers followers-count">
                            <li>
                                <span class="icon--cook-card-follower" title="Followers"></span>
                            </li>
                            <li>
                                <span><format-large-number number="0"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__favorites favorites-count">
                            <li>
                                <span class="icon--cook-card-favorite" title="Favorites"></span>
                            </li>
                            <li>
                                <span><format-large-number number="0"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__recipes-made recipes-made-count">
                            <li>
                                <span class="icon--cook-card-made" title="Recipes Made"></span>
                            </li>
                            <li>
                                <span><format-large-number number="4"></format-large-number></span>
                            </li>
                        </ul>
                    </li>
                </ul>







    </a>
</div>





            <div class="stars-and-date-container">
                <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 5 >
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
</div>
                <div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
                    <meta itemprop="ratingValue" content="5">
                </div>
                <div class="review-date">5/18/2011</div>
                <meta itemprop="dateCreated" content="2011-05-18">
            </div>
        </article>

        <p itemprop="reviewBody">
I had leftover medium rare Top Sirloin I had marinated and grilled for a party.   The next day I googled &quot;steak soup recipe&quot; and found this one.   A keeper!    Because my steak was already grill...
        </p>
        <div class="review-detail">
            <a class="review-detail__link" href="reviews/3241813/" ng-click="$event.preventDefault();reviewModalDialog(7, sortBy)">
                <span class="icon--expand-icon"></span>
                <span>Read more</span>
            </a>
        </div>
    </div>

    <div class="review-container clearfix" itemprop="review" itemscope itemtype="http://schema.org/Review">
        <meta id="metaRecipeTitle" itemprop="itemReviewed" />

        <article class="reviewer-info imadeit-enabled">
                <div class="recipe-details-cook-stats-container">
    <a href="/cook/4382869/">


                <ul class="cook-details">
                    <li>

                        <img class="img-profile elevate-cook-thumbnail" data-lazy-load data-original-src="http://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png" alt="" title=""  src="http://images.media-allrecipes.com/ar/spacer.gif" style="display: inline;" />
                    </li>
                    <li class="cook-info">
                        <h4 itemprop="author">  Christine Denstaedt
                         </h4>


                        <ul class="cook-details__followers followers-count">
                            <li>
                                <span class="icon--cook-card-follower" title="Followers"></span>
                            </li>
                            <li>
                                <span><format-large-number number="0"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__favorites favorites-count">
                            <li>
                                <span class="icon--cook-card-favorite" title="Favorites"></span>
                            </li>
                            <li>
                                <span><format-large-number number="235"></format-large-number></span>
                            </li>
                        </ul>
                        <ul class="cook-details__recipes-made recipes-made-count">
                            <li>
                                <span class="icon--cook-card-made" title="Recipes Made"></span>
                            </li>
                            <li>
                                <span><format-large-number number="53"></format-large-number></span>
                            </li>
                        </ul>
                    </li>
                </ul>







    </a>
</div>





            <div class="stars-and-date-container">
                <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 5 >
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="14" width="14" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
</div>
                <div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
                    <meta itemprop="ratingValue" content="5">
                </div>
                <div class="review-date">10/18/2010</div>
                <meta itemprop="dateCreated" content="2010-10-18">
            </div>
        </article>

        <p itemprop="reviewBody">
Really good. Using top sirloin insures the beef to be more tender than top round. Putting in crockpot is great.        </p>
        <div class="review-detail">
            <a class="review-detail__link" href="reviews/2788336/" ng-click="$event.preventDefault();reviewModalDialog(8, sortBy)">
                <span class="icon--expand-icon"></span>
                <span>Read more</span>
            </a>
        </div>
    </div>

            <div class="review-divider"></div>


        </section>
        <div class="recipe-reviews__more-container">
            <div ng-repeat="review in reviews" ng-bind-html="review" dynamic="html" class="additional-recipe-reviews"></div>
            <div ng-click="getReviews()" class="more-button" data-ng-hide="!moreReviewsAvailable">
                <a class="moreReviews btns-one-small">More Reviews</a>
            </div>
        </div>

</section>



    </section>

    <aside id="recipe-page-right-rail" class="recipe-page-right-rail four-tabs">


<div data-ng-controller="ar_controllers_next_recipe" data-ng-click="trackRecipeId(68679)">


    <a href="/recipe/68679/hearty-hamburger-soup/" data-internal-referrer-link="next recipe" data-click-id="next recipe module" data-analytics-event="right rail nav" data-event-name="68679" class="next-recipe">
        <span class="next-recipe--arrow">
            <span class="svg-icon--actions--arrow_right_fff svg-icon--actions--arrow_right_fff-dims"></span>
        </span>
        <img class="next-recipe--small-img" src="http://images.media-allrecipes.com/userphotos/100x100/00/47/61/476132.jpg" alt="Hearty Hamburger Soup Recipe - This thick and hearty hamburger soup is loaded with vegetables and barley." title="Hearty Hamburger Soup Recipe" />
        <h3 class="next-recipe--title" ng-bind="'Hearty Hamburger Soup' | strLimit:35"></h3>
        <div class="recipe-summary__stars" data-scroll-to-anchor="reviews">
            <div class="rating-stars" data-scroll-to-anchor="reviews" data-ratingstars= 4.6399998664856 >
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg"  />
        <img height="16" width="16" src="http://images.media-allrecipes.com/ar-images/icons/rating-stars/half-star-2015.svg"  />
</div>
            <span class="aggregate-rating">
                <meta content="4.64">
                <span class="review-count">291</span>
            </span>
        </div>
    </a>
</div>


        <div class="ad-search-grid reserve-ad-space" data-ad-container-autocollapse>
            <div id="ad-skyscrapermultisize" class="ad-skyscrapermultisize">
                <div id="div-gpt-square-flex-1" data-tier="1"></div>
            </div>
            <span class="advertisement">ADVERTISEMENT</span>
        </div>

        <div class="ad-search-grid reserve-ad-space" data-ad-container-autocollapse>
            <div id="ad-bottom-right3" class="ad-skyscrapermultisize">
                <div id="div-gpt-square-fixed-1" data-tier="2"></div>
            </div>
            <span class="advertisement">ADVERTISEMENT</span>
        </div>
            <right-rail-feed my-feed-data='{&quot;items&quot;:[{&quot;id&quot;:26317,&quot;recipeTitle&quot;:&quot;Chicken Pot Pie IX&quot;,&quot;imageUrl250x250&quot;:&quot;http://images.media-allrecipes.com/userphotos/250x250/04/53/57/4535759.jpg&quot;,&quot;cookId&quot;:257438,&quot;rating&quot;:4.81,&quot;reviewCount&quot;:7747,&quot;cookDisplayName&quot;:&quot;Robbie Rice&quot;,&quot;cookThumbnailUrl&quot;:&quot;http://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png&quot;,&quot;cookFollowersCount&quot;:400,&quot;cookFavoriteCount&quot;:112,&quot;cookMadeRecipesCount&quot;:76,&quot;videoId&quot;:2567,&quot;url&quot;:&quot;/recipe/26317/chicken-pot-pie-ix/&quot;,&quot;description&quot;:&quot;A delicious chicken pot pie made from scratch with carrots, peas, and celery for a comfort food classic.&quot;,&quot;recommendationSource&quot;:3,&quot;sourceId&quot;:461,&quot;cookHandle&quot;:&quot;&quot;,&quot;cookProfileUrl&quot;:&quot;/cook/257438/&quot;},{&quot;id&quot;:56927,&quot;recipeTitle&quot;:&quot;Delicious Ham and Potato Soup&quot;,&quot;imageUrl250x250&quot;:&quot;http://images.media-allrecipes.com/userphotos/250x250/00/96/26/962656.jpg&quot;,&quot;cookId&quot;:746864,&quot;rating&quot;:4.84,&quot;reviewCount&quot;:9593,&quot;cookDisplayName&quot;:&quot;ELLIE11&quot;,&quot;cookThumbnailUrl&quot;:&quot;http://images.media-allrecipes.com/mobile/allrecipes/images/icon-user-default_v2.png&quot;,&quot;cookFollowersCount&quot;:30,&quot;cookFavoriteCount&quot;:1,&quot;cookMadeRecipesCount&quot;:0,&quot;videoId&quot;:994,&quot;url&quot;:&quot;/recipe/56927/delicious-ham-and-potato-soup/&quot;,&quot;description&quot;:&quot;A hearty, easy soup that\u0027s ready in 45 minutes. Perfect for using up leftover ham.&quot;,&quot;recommendationSource&quot;:3,&quot;sourceId&quot;:437,&quot;cookHandle&quot;:&quot;&quot;,&quot;cookProfileUrl&quot;:&quot;/cook/746864/&quot;},{&quot;id&quot;:23600,&quot;recipeTitle&quot;:&quot;World\u0027s Best Lasagna&quot;,&quot;imageUrl250x250&quot;:&quot;http://images.media-allrecipes.com/userphotos/250x250/3359675.jpg&quot;,&quot;cookId&quot;:177901,&quot;rating&quot;:4.79,&quot;reviewCount&quot;:10751,&quot;cookDisplayName&quot;:&quot;John Chandler&quot;,&quot;cookThumbnailUrl&quot;:&quot;http://images.media-allrecipes.com/userphotos/50x50/3873464.jpg&quot;,&quot;cookFollowersCount&quot;:981,&quot;cookFavoriteCount&quot;:26,&quot;cookMadeRecipesCount&quot;:11,&quot;videoId&quot;:672,&quot;url&quot;:&quot;/Recipe/Worlds-Best-Lasagna/&quot;,&quot;description&quot;:&quot;Filling and satisfying, John Chandler\u0027s lasagna is our most popular recipe. With basil, sausage, ground beef and three types of cheese, it lives up to its name.&quot;,&quot;recommendationSource&quot;:3,&quot;sourceId&quot;:461,&quot;cookHandle&quot;:&quot;&quot;,&quot;cookProfileUrl&quot;:null},{&quot;id&quot;:10813,&quot;recipeTitle&quot;:&quot;Best Chocolate Chip Cookies&quot;,&quot;imageUrl250x250&quot;:&quot;http://images.media-allrecipes.com/userphotos/250x250/4462051.jpg&quot;,&quot;cookId&quot;:0,&quot;rating&quot;:4.6,&quot;reviewCount&quot;:8925,&quot;cookDisplayName&quot;:&quot;Dora&quot;,&quot;cookThumbnailUrl&quot;:&quot;&quot;,&quot;cookFollowersCount&quot;:0,&quot;cookFavoriteCount&quot;:0,&quot;cookMadeRecipesCount&quot;:0,&quot;videoId&quot;:626,&quot;url&quot;:&quot;/Recipe/Best-Chocolate-Chip-Cookies/&quot;,&quot;description&quot;:&quot;Crisp edges, chewy middles, and so, so easy to make. Try this wildly-popular chocolate chip cookie recipe for yourself.&quot;,&quot;recommendationSource&quot;:3,&quot;sourceId&quot;:461,&quot;cookHandle&quot;:null,&quot;cookProfileUrl&quot;:null},{&quot;id&quot;:143809,&quot;recipeTitle&quot;:&quot;Best Steak Marinade in Existence&quot;,&quot;imageUrl250x250&quot;:&quot;http://images.media-allrecipes.com/userphotos/250x250/225844.jpg&quot;,&quot;cookId&quot;:1542483,&quot;rating&quot;:4.57,&quot;reviewCount&quot;:2457,&quot;cookDisplayName&quot;:&quot;Kookie&quot;,&quot;cookThumbnailUrl&quot;:&quot;http://images.media-allrecipes.com/userphotos/50x50/231978.jpg&quot;,&quot;cookFollowersCount&quot;:70,&quot;cookFavoriteCount&quot;:17,&quot;cookMadeRecipesCount&quot;:26,&quot;videoId&quot;:650,&quot;url&quot;:&quot;/Recipe/Best-Steak-Marinade-in-Existence/&quot;,&quot;description&quot;:&quot;What\u0027s the secret? Soy sauce, olive oil, lemon juice, Worcestershire sauce, garlic, and a few dried herbs. Now you know.&quot;,&quot;recommendationSource&quot;:3,&quot;sourceId&quot;:461,&quot;cookHandle&quot;:&quot;&quot;,&quot;cookProfileUrl&quot;:null},{&quot;id&quot;:6865,&quot;recipeTitle&quot;:&quot;To Die For Blueberry Muffins&quot;,&quot;imageUrl250x250&quot;:&quot;http://images.media-allrecipes.com/userphotos/250x250/662790.jpg&quot;,&quot;cookId&quot;:0,&quot;rating&quot;:4.64,&quot;reviewCount&quot;:8771,&quot;cookDisplayName&quot;:&quot;Colleen&quot;,&quot;cookThumbnailUrl&quot;:&quot;&quot;,&quot;cookFollowersCount&quot;:0,&quot;cookFavoriteCount&quot;:0,&quot;cookMadeRecipesCount&quot;:0,&quot;videoId&quot;:2654,&quot;url&quot;:&quot;/Recipe/To-Die-For-Blueberry-Muffins/&quot;,&quot;description&quot;:&quot;Extra big blueberry muffins are topped with a sugary-cinnamon crumb mixture in this souped-up blueberry muffin recipe.&quot;,&quot;recommendationSource&quot;:3,&quot;sourceId&quot;:461,&quot;cookHandle&quot;:null,&quot;cookProfileUrl&quot;:null}]}'></right-rail-feed>


    <div class="ad-search-grid reserve-ad-space" data-ad-container-autocollapse>
        <div id="ad-bottom-right1" class="ad-skyscrapermultisize">
            <div id="div-gpt-square-fixed-2" data-tier="3"></div>
        </div>
        <span class="advertisement">ADVERTISEMENT</span>
    </div>

        <div class="ad-search-grid reserve-ad-space" data-ad-container-autocollapse>
            <div id="ad-bottom-right2" class="ad-skyscrapermultisize">
                <div id="div-gpt-square-fixed-3" data-tier="4"></div>
            </div>
            <span class="advertisement">ADVERTISEMENT</span>
        </div>
    </aside>

</div>




    </div>
    <footer id="pageFooter" class="full-page">

<div class="ad-recipe-page-footer-container">
    <div id="div-gpt-leaderboard-fixed-3" class="ad-recipe-page-footer" data-tier="4"></div>
    <span class="advertisement">ADVERTISEMENT</span>
</div>
<section masonry="" class="grid grid-fixed" preserve-order="" item-selector="article" >
    <article class=" grid-col grid-col--tiles">

        <ul class="social-sharing__icons">

            <li><a id="footer_facebook" href="https://www.facebook.com/allrecipes" title="Facebook" target="_blank" class="ui-link"><img title="Facebook" src="http://images.allrecipes.com/ar-images/spacer.gif" alt="Facebook"></a></li>
            <li><a id="footer_pinterest" href="http://pinterest.com/allrecipes/" title="Pinterest" target="_blank" class="ui-link"><img title="Pinterest" src="http://images.allrecipes.com/ar-images/spacer.gif" alt="Pinterest"></a></li>
            <li><a id="footer_twitter" href="https://twitter.com/Allrecipes" title="Twitter" target="_blank" class="ui-link"><img id="ctl00_Image3" title="Twitter" src="http://images.allrecipes.com/ar-images/spacer.gif" alt="Twitter"></a></li>
            <li><a id="footer_instagram" href="http://instagram.com/allrecipes" title="Instagram" target="_blank" class="ui-link"><img title="Instagram" src="http://images.allrecipes.com/ar-images/spacer.gif" alt="Instagram"></a></li>
            <li><a id="footer_tumblr" href="http://allrecipes.tumblr.com/" title="Tumblr" target="_blank" class="ui-link"><img title="Tumblr" src="http://images.allrecipes.com/ar-images/spacer.gif" alt="Tumblr"></a></li>
            <li><a id="footer_googleplus" href="https://plus.google.com/+allrecipes/" title="Google Plus" target="_blank" class="ui-link"><img title="Google Plus" src="http://images.allrecipes.com/ar-images/spacer.gif" alt="Google Plus"></a></li>
            <li><a id="footer_stumbleupon"href="http://www.stumbleupon.com/stumbler/Allrecipes" title="StumbleUpon" target="_blank" class="ui-link"><img title="StumbleUpon" src="http://images.allrecipes.com/ar-images/spacer.gif" alt="StumbleUpon"></a></li>
            <li><a id="footer_youtube" href="https://www.youtube.com/user/allrecipes" title="YouTube" target="_blank" class="ui-link"><img title="YouTube" src="http://images.allrecipes.com/ar-images/spacer.gif" alt="YouTube"></a></li>


        </ul>
    </article>
    <article class="grid-col grid-col--tiles">
        <ul>
            <li>About Us</li>
            <li><a id="footer_newsroom" href="http://press.allrecipes.com/">Newsroom</a></li>
            <li><a id="footer_jobs" href="http://dish.allrecipes.com/allrecipes-jobs/">Jobs at Allrecipes</a></li>
        </ul>
    </article>
    <article class="grid-col grid-col--tiles footer_advertising">
        <ul>
            <li>Advertising</li>
            <li><a id="footer_advertisewithus" class="" href="http://www.meredith.com/national-media/digital">Advertise with Us</a></li>
            <li><a id="footer_womensnetwork" class="" href="http://www.meredith.com/marketing_solutions/interactive_media.html">Meredith Women's Network</a></li>
        </ul>
    </article>
    <article class="grid-col grid-col--tiles">
        <ul>
            <li>Support</li>
            <li><a id="footer_sitemap" href="http://dish.allrecipes.com/faq-sitemap/">Site Map</a></li>
            <li><a id="footer_contactus" href="http://dish.allrecipes.com/customer-service/contact-us-2/">Contact Us</a></li>
            <li><a id="footer_customersupport" href="http://dish.allrecipes.com/customer-service/">Customer Support</a></li>
        </ul>
    </article>

    <article class="grid-col grid-col--tiles" ng-controller="ar_controllers_footerLinks" data-siteurl="allrecipes.com">
        <ul>
            <li>Global Community</li>
            <li>
                <select id="country-selector" ng-options="site.name for site in arSites" ng-change="changeSite()" ng-model="selectedItem"><option style="display:none" value="">Select location</option></select>
            </li>
            <li>&copy; 2017 Allrecipes.com <br />All Rights Reserved </li>
            <li><a id="footer_privacypolicy" href="http://www.meredith.com/legal/privacy" target="_blank">Privacy Policy Your California Rights</a></li>
            <li><a id="footer_terms" href="http://www.meredith.com/legal/terms" target="_blank">Terms of Service</a></li>
            <li><a id="footer_datapolicy" href="http://www.meredith.com/datapolicy.html" target="_blank">Data Policy</a></li>
            <li>
                <!--  Ghostery Inc tag  cid: 1333  pid: 282-->
                <a id="_bapw-link" href="#" target="_blank"><span id="footer_adchoices"style="vertical-align:middle !important;padding-right:5px">AdChoices</span><img id="_bapw-icon" style="border:0 !important;display:inline !important;vertical-align:middle !important;padding-right:5px !important;" height="11" /></a>
                <a id="footer_top_button" class="btns-one-small" data-scroll-to-anchor="top" data-show-on-scroll="700" ng-show="yTrigger == true" ng-cloak>Top</a>
             </li>
            <script>(function () { var g = 282, i = 1333, a = false, h = document, j = h.getElementById("_bapw-link"), e = (h.location.protocol == "https:"), f = (e ? "https" : "http") + "://", c = f + (e ? "a248.e.akamai.net/betterad.download.akamai.com/91609" : "cdn.betrad.com") + "/pub/"; function b(k) { var d = new Image(); d.src = f + "l.betrad.com/pub/p.gif?pid=" + g + "&ocid=" + i + "&i" + k + "=1&r=" + Math.random() } h.getElementById("_bapw-icon").src = c + "icon1.png"; j.onmouseover = function () { if (/#$/.test(j.href)) { j.href = "http://info.evidon.com/pub_info/" + g + "?v=1" } }; j.onclick = function () { var k = window._bap_p_overrides; function d(n, q) { var o = h.getElementsByTagName("head")[0] || h.documentElement, m = a, l = h.createElement("script"); function p() { l.onload = l.onreadystatechange = null; o.removeChild(l); q() } l.src = n; l.onreadystatechange = function () { if (!m && (this.readyState == "loaded" || this.readyState == "complete")) { m = true; p() } }; l.onload = p; o.insertBefore(l, o.firstChild) } if (k && k.hasOwnProperty(g)) { if (k[g].new_window) { b("c"); return true } } this.onclick = "return " + a; d(f + "ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js", function () { d(c + "pub2.js", function () { BAPW.i(j, { pid: g, ocid: i }) }) }); return a }; b("i") }()); var _bap_p_overrides = _bap_p_overrides || {}; _bap_p_overrides[282] = { new_window: true };</script>
         </ul>
    </article>
    <article class="grid-col grid-col--tiles">
        <ul>
            <li>More Allrecipes</li>

            <li><a id="footer_magazine" href="http://armagazine.com/mobile-footer">Allrecipes Magazine <span><span>&#8211;</span> Subscribe</span></a></li>
            <li><a id="footer_apps" href="http://dish.allrecipes.com/mobile-apps">Allrecipes Apps</a></li>
            <li><a id="footer_foodwishes" href="http://youtube.com/foodwishes">Food Wishes Videos</a></li>
            <li><a id="footer_blog" href="http://press.allrecipes.com/blog/">The Allrecipes Blog</a></li>

        </ul>
    </article>
</section>




        <div data-ng-controller="ar_controllers_deferredAction" data-ng-init="wireupAdIntegrationListeners();executePostLoginEvents();">
            <ar-notification></ar-notification>
            <div data-loading-indicator></div>
        </div>
    </footer>
</div>
</div>


    <div id='ad-footer' class="ad-footer--fixed">
        <div id="div-gpt-mob-adhesive-banner-fixed" data-tier="1"></div>
    </div>





<script type="text/javascript">
            window.Toggles={"AdTest":false,"RecipePreferences":true,"AzureRelatedcontentRecipes":true,"RdpRightRailRecommendations":true,"RecipePagePerf":false,"StreamsTest":true,"TastePrefOverlays":true,"RdpTasteCarousel":true,"SearchABTest":false,"HubFixedGrid":false};
    window.dataLayer={"version":"1.0","pageInstanceId":"allrecipes.com/recipe/214556/steak-soup/","externalLinkId":"","page":{"pageInfo":{"pageId":"214556","pageName":"/recipe/214556/steak-soup/","destinationUrl":"http://allrecipes.com/recipe/214556/steak-soup/?internalSource=hub%20recipe\u0026referringContentType=search%20results\u0026clickId=cardslot%201","referringUrl":"http://allrecipes.com/search/results/?wt=steak%20soup\u0026sort=re","sysEnv":"RD0003FFA8CF35","variant":"Control","version":"20160616","issueDate":"08/09/2017 15:55:07","effectiveDate":"08/09/2017 15:55:07","domain":"allrecipes.com","parameters":{"internalSource":"hub recipe","referringContentType":"search results","clickId":"cardslot 1"}},"category":{"primaryCategory":"recipes","contentType":"recipe","subContentType":"","adZone":"","adKeys":"status=visitor;oid=2CC4E750051D2174-600019100000BC94;fit=0;r=214556;id=214556;k=[21,35,39,46,49,67,97,125,151,169,173,192,201,210,215,221,235,241,245,253,259,617,696]","contentSource":"1"},"attributes":{"contentId":"214556","title":"Steak Soup","country":"USA"}},"event":[],"user":[{"analyticsId":"v1|2CC4E750051D2174-600019100000BC94","segment":{"adStatus":"visitor","visitorType":"anonymous","loginStatus":"no"},"profile":[{"profileInfo":{"profileId":"0","loginType":"None"}}],"magFollower":false}],"newsletter":{"mailingId":"","mailingName":"","mailingDate":"","mailingLinkGroup":"","mailingLinkName":""}};    var enviromentOmnitureId = 'rdirdallrecipes';

    var pubsub = new Pubsub();

    try {
        var thirtyMinutesInMilliseconds = 1800000;
        window.localStorage.setItem("CurrentUserStateModel", ''); //primarily used by private profile SPA, but pertains to current user in general
        window.localStorage.setItem("PublicProfileStateModel", ''); //used by public profile SPA
        window.localStorage.setItem("CurrentUserStateModelExpirationDate", Date.now() + thirtyMinutesInMilliseconds); //primarily used by private profile SPA, but pertains to current user in general
        window.localStorage.setItem("PublicProfileStateModelExpirationDate", Date.now() + thirtyMinutesInMilliseconds); //used by public profile SPA
    } catch(err)  {
        var CurrentUserStateCookie ='';
        var PublicProfileStateCookie = '';
        document.cookie = "CurrentUserStateModel=" + CurrentUserStateCookie;
        document.cookie = "PublicProfileStateModel=" + PublicProfileStateCookie;
    }

</script>
<script src='http://js01.media-allrecipes.com/assets/deployables/v-1.83.0.117/analytics.bundled.js' ></script>
<script src='http://js01.media-allrecipes.com/assets/deployables/v-1.83.0.117/main-bottom.bundled.js' ></script>
<script src='http://css01.media-allrecipes.com/assets/deployables/v-1.83.0.117/main-bottom-templates.bundled.js' ></script>

<script>angular.module('allrecipes')
        .constant('Constant', {
            'version': '1.83.0.117'
        });
</script>


<script>
    AR.FacebookPixel.init();
</script>

    <script src='http://js01.media-allrecipes.com/assets/deployables/v-1.83.0.117/recipe.bundled.js' ></script>
    <script src='http://css01.media-allrecipes.com/assets/deployables/v-1.83.0.117/recipe-templates.bundled.js' ></script>

    <script>
        angular.module("allrecipes").value("userReview", userReview);

        angular.module("allrecipes").value("reviewsInitialSet", reviewsInitialSet);

        var facebookShareInitScope = {"recipeId":214556,"recipeTitle":"Steak Soup Recipe","recipeUrl":"http://allrecipes.com/recipe/214556/steak-soup/","recipePhotoUrl":"http://images.media-allrecipes.com/userphotos/560x315/488609.jpg","recipeDescription":"Rich, hearty steak soup has chunks of tender round steak, potatoes, carrots, celery, and corn, all simmering in a flavorful tomato-flavored beef broth. "};
        var RdpInferredTastePrefs = ["Soup","Beef","Dinner"];
        var AR = AR || {};
        AR.topTaste =  {"Abbreviation":"ss","DisplayText":"Soups, Stews & Chili"};
    </script>




    <script>!function(a,b,c){if(!a.getElementById(c)){var d=a.createElement(b),e=a.getElementsByTagName(b)[0];d.defer=!0,d.async=!0,d.type="text/javascript",d.id=c,d.src="//cdn.partners.allrecipes.com/telemetryapi/1/telemetry.js",e.parentNode.insertBefore(d,e)}}(document,"script","scoby-telemetry");</script>

<script>

    $(document).ready(function () {
        pubsub.broadcast("GoogleAnalytics");
    });

    if (typeof (window.dataLayer) !== "undefined" && dataLayer) {
        var clientAnalytics = new ClientAnalytics(window.dataLayer);
        var comscoreShim = new ComscoreShim(window.dataLayer, pubsub);
        var omniShim = new OmnitureShim(window.dataLayer, s, pubsub);
        var kruxShim = new KruxShim(window.dataLayer, pubsub);
        var gaShim = new GoogleAnalyticsShim(window.dataLayer, ga, pubsub);
    }


</script>

<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-MW2LG9" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','placeholderDL','GTM-MW2LG9');</script>
<!-- End Google Tag Manager -->

<script type="text/javascript">_satellite.pageBottom(); // Initialize Adobe DTM</script>
    <link href="http://images.media-allrecipes.com/ar/foresee/v0.7/foresee-dhtml.css" rel="stylesheet" />
    <div id="dsapp-is-tablet"></div>

<script type="text/javascript">
var testStringVersion = 'True';
</script>
    <script type="text/javascript">
    var isTablet = $ && $('#dsapp-is-tablet').css('display') === 'block';
    if (isTablet) {
        (function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode banner closeBanner creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode".split(" "), 0);
        branch.init('key_live_dcvcpHkps9BjZy4HCivJjpdewCg0PjvK');
        branch.setBranchViewData({
            data: {
                '$deeplink_path': 'recipe/16801/old-time-chicken-divan/'
            }});
    }
    </script>
</body>
</html>`;
}
