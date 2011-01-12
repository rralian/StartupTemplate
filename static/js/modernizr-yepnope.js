/*
 * Modernizr v1.6
 * http://www.modernizr.com
 *
 * Developed by:
 * - Faruk Ates  http://farukat.es/
 * - Paul Irish  http://paulirish.com/
 *
 * Copyright (c) 2009-2010
 * Dual-licensed under the BSD or MIT licenses.
 * http://www.modernizr.com/license/
 */
window.Modernizr=function(i,e,u){function s(a,b){return(""+a).indexOf(b)!==-1}function D(a,b){for(var c in a)if(j[a[c]]!==u&&(!b||b(a[c],E)))return true}function n(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1);c=(a+" "+F.join(c+" ")+c).split(" ");return!!D(c,b)}function S(){f.input=function(a){for(var b=0,c=a.length;b<c;b++)L[a[b]]=!!(a[b]in h);return L}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));f.inputtypes=function(a){for(var b=0,c,k=a.length;b<
k;b++){h.setAttribute("type",a[b]);if(c=h.type!=="text"){h.value=M;if(/^range$/.test(h.type)&&h.style.WebkitAppearance!==u){l.appendChild(h);c=e.defaultView;c=c.getComputedStyle&&c.getComputedStyle(h,null).WebkitAppearance!=="textfield"&&h.offsetHeight!==0;l.removeChild(h)}else/^(search|tel)$/.test(h.type)||(c=/^(url|email)$/.test(h.type)?h.checkValidity&&h.checkValidity()===false:h.value!=M)}N[a[b]]=!!c}return N}("search tel url email datetime date month week time datetime-local number range color".split(" "))}
var f={},l=e.documentElement,E=e.createElement("modernizr"),j=E.style,h=e.createElement("input"),M=":)",O=Object.prototype.toString,q=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),F="Webkit Moz O ms Khtml".split(" "),v={svg:"http://www.w3.org/2000/svg"},d={},N={},L={},P=[],w,Q=function(a){var b=document.createElement("style"),c=e.createElement("div");b.textContent=a+"{#modernizr{height:3px}}";(e.head||e.getElementsByTagName("head")[0]).appendChild(b);c.id="modernizr";l.appendChild(c);a=c.offsetHeight===
3;b.parentNode.removeChild(b);c.parentNode.removeChild(c);return!!a},o=function(){var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return function(b,c){c=c||document.createElement(a[b]||"div");b="on"+b;var k=b in c;if(!k){c.setAttribute||(c=document.createElement("div"));if(c.setAttribute&&c.removeAttribute){c.setAttribute(b,"");k=typeof c[b]=="function";if(typeof c[b]!="undefined")c[b]=u;c.removeAttribute(b)}}return k}}(),G={}.hasOwnProperty,R;R=
typeof G!=="undefined"&&typeof G.call!=="undefined"?function(a,b){return G.call(a,b)}:function(a,b){return b in a&&typeof a.constructor.prototype[b]==="undefined"};d.flexbox=function(){var a=e.createElement("div"),b=e.createElement("div");(function(k,g,r,x){g+=":";k.style.cssText=(g+q.join(r+";"+g)).slice(0,-g.length)+(x||"")})(a,"display","box","width:42px;padding:0;");b.style.cssText=q.join("box-flex:1;")+"width:10px;";a.appendChild(b);l.appendChild(a);var c=b.offsetWidth===42;a.removeChild(b);
l.removeChild(a);return c};d.canvas=function(){var a=e.createElement("canvas");return!!(a.getContext&&a.getContext("2d"))};d.canvastext=function(){return!!(f.canvas&&typeof e.createElement("canvas").getContext("2d").fillText=="function")};d.webgl=function(){var a=e.createElement("canvas");try{if(a.getContext("webgl"))return true}catch(b){}try{if(a.getContext("experimental-webgl"))return true}catch(c){}return false};d.touch=function(){return"ontouchstart"in i||Q("@media ("+q.join("touch-enabled),(")+
"modernizr)")};d.geolocation=function(){return!!navigator.geolocation};d.postmessage=function(){return!!i.postMessage};d.websqldatabase=function(){return!!i.openDatabase};d.indexedDB=function(){for(var a=-1,b=F.length;++a<b;){var c=F[a].toLowerCase();if(i[c+"_indexedDB"]||i[c+"IndexedDB"])return true}return false};d.hashchange=function(){return o("hashchange",i)&&(document.documentMode===u||document.documentMode>7)};d.history=function(){return!!(i.history&&history.pushState)};d.draganddrop=function(){return o("drag")&&
o("dragstart")&&o("dragenter")&&o("dragover")&&o("dragleave")&&o("dragend")&&o("drop")};d.websockets=function(){return"WebSocket"in i};d.rgba=function(){j.cssText="background-color:rgba(150,255,150,.5)";return s(j.backgroundColor,"rgba")};d.hsla=function(){j.cssText="background-color:hsla(120,40%,100%,.5)";return s(j.backgroundColor,"rgba")||s(j.backgroundColor,"hsla")};d.multiplebgs=function(){j.cssText="background:url(//:),url(//:),red url(//:)";return/(url\s*\(.*?){3}/.test(j.background)};d.backgroundsize=
function(){return n("backgroundSize")};d.borderimage=function(){return n("borderImage")};d.borderradius=function(){return n("borderRadius","",function(a){return s(a,"orderRadius")})};d.boxshadow=function(){return n("boxShadow")};d.textshadow=function(){return e.createElement("div").style.textShadow===""};d.opacity=function(){var a=q.join("opacity:.5;")+"";j.cssText=a;return s(j.opacity,"0.5")};d.cssanimations=function(){return n("animationName")};d.csscolumns=function(){return n("columnCount")};d.cssgradients=
function(){var a=("background-image:"+q.join("gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:")+q.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0,-17);j.cssText=a;return s(j.backgroundImage,"gradient")};d.cssreflections=function(){return n("boxReflect")};d.csstransforms=function(){return!!D(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])};d.csstransforms3d=function(){var a=!!D(["perspectiveProperty","WebkitPerspective",
"MozPerspective","OPerspective","msPerspective"]);if(a)a=Q("@media ("+q.join("transform-3d),(")+"modernizr)");return a};d.csstransitions=function(){return n("transitionProperty")};d.fontface=function(){var a,b=e.head||e.getElementsByTagName("head")[0]||l,c=e.createElement("style"),k=e.implementation||{hasFeature:function(){return false}};c.type="text/css";b.insertBefore(c,b.firstChild);a=c.sheet||c.styleSheet;b=k.hasFeature("CSS2","")?function(g){if(!(a&&g))return false;var r=false;try{a.insertRule(g,
0);r=!/unknown/i.test(a.cssRules[0].cssText);a.deleteRule(a.cssRules.length-1)}catch(x){}return r}:function(g){if(!(a&&g))return false;a.cssText=g;return a.cssText.length!==0&&!/unknown/i.test(a.cssText)&&a.cssText.replace(/\r+|\n+/g,"").indexOf(g.split(" ")[0])===0};f._fontfaceready=function(g){g(f.fontface)};return b('@font-face { font-family: "font"; src: "font.ttf"; }')};d.video=function(){var a=e.createElement("video"),b=!!a.canPlayType;if(b){b=new Boolean(b);b.ogg=a.canPlayType('video/ogg; codecs="theora"');
b.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"')||a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');b.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}return b};d.audio=function(){var a=e.createElement("audio"),b=!!a.canPlayType;if(b){b=new Boolean(b);b.ogg=a.canPlayType('audio/ogg; codecs="vorbis"');b.mp3=a.canPlayType("audio/mpeg;");b.wav=a.canPlayType('audio/wav; codecs="1"');b.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")}return b};d.localstorage=function(){try{return"localStorage"in
i&&i.localStorage!==null}catch(a){return false}};d.sessionstorage=function(){try{return"sessionStorage"in i&&i.sessionStorage!==null}catch(a){return false}};d.webWorkers=function(){return!!i.Worker};d.applicationcache=function(){return!!i.applicationCache};d.svg=function(){return!!e.createElementNS&&!!e.createElementNS(v.svg,"svg").createSVGRect};d.inlinesvg=function(){var a=document.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==v.svg};d.smil=function(){return!!e.createElementNS&&
/SVG/.test(O.call(e.createElementNS(v.svg,"animate")))};d.svgclippaths=function(){return!!e.createElementNS&&/SVG/.test(O.call(e.createElementNS(v.svg,"clipPath")))};for(var H in d)if(R(d,H)){w=H.toLowerCase();f[w]=d[H]();P.push((f[w]?"":"no-")+w)}f.input||S();f.crosswindowmessaging=f.postmessage;f.historymanagement=f.history;f.addTest=function(a,b){a=a.toLowerCase();if(!f[a]){b=!!b();l.className+=" "+(b?"":"no-")+a;f[a]=b;return f}};j.cssText="";E=h=null;i.attachEvent&&function(){var a=e.createElement("div");
a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function c(p){for(var m=-1;++m<r;)p.createElement(g[m])}function k(p,m){for(var I=p.length,t=-1,y,J=[];++t<I;){y=p[t];m=y.media||m;J.push(k(y.imports,m));J.push(y.cssText)}return J.join("")}var g="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video".split("|"),r=g.length,x=RegExp("<(/*)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)",
"gi"),T=RegExp("\\b(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)\\b(?!.*[;}])","gi"),z=b.createDocumentFragment(),A=b.documentElement,K=A.firstChild,B=b.createElement("style"),C=b.createElement("body");B.media="all";c(b);c(z);a.attachEvent("onbeforeprint",function(){for(var p=-1;++p<r;)for(var m=b.getElementsByTagName(g[p]),I=m.length,t=-1;++t<I;)if(m[t].className.indexOf("iepp_")<0)m[t].className+=" iepp_"+
g[p];K.insertBefore(B,K.firstChild);B.styleSheet.cssText=k(b.styleSheets,"all").replace(T,".iepp_$1");z.appendChild(b.body);A.appendChild(C);C.innerHTML=z.firstChild.innerHTML.replace(x,"<$1bdo")});a.attachEvent("onafterprint",function(){C.innerHTML="";A.removeChild(C);K.removeChild(B);A.appendChild(z.firstChild)})}(this,document);f._enableHTML5=true;f._version="1.6";l.className=l.className.replace(/\bno-js\b/,"")+" js";l.className+=" "+P.join(" ");return f}(this,this.document);

/**
 * yepnope.js 1.0pre
 * by Alex Sexton - AlexSexton@gmail.com
 * &
 * Ralph Holzmann - ralphholzmann@gmail.com
 *
 * Tri-Licensed WTFPL, BSD, & MIT
*/
(function(window, doc, undef) {

var docElement            = doc.documentElement,
    sTimeout              = window.setTimeout,
    docHead               = doc.getElementsByTagName("head")[0] || docElement,
    docBody               = doc.getElementsByTagName("body")[0] || doc.body,
    docFirst              = docHead.firstChild,
    errorTimeout          = 5000,
    toString              = {}.toString,
    jsType                = 'j',
    cssType               = 'c',
    strScript             = "script",
    strShift              = "shift",
    strReadyState         = "readyState",
    strOnReadyStateChange = "onreadystatechange",
    strOnLoad             = "onload",
    strObject             = "object",
    strImg                = "img",
    strPreobj             = "[" + strObject + " ",
    execStack             = [],
    started               = 0,
    strAppear             = 'Appearance',
    isGecko               = ("Moz"+strAppear in docElement.style),
    isGecko18             = isGecko && !! window.Event.prototype.preventBubble,
    // Thanks to @jdalton for this opera detection
    isOpera               = window.opera && toString.call(window.opera) == strPreobj + "Opera]",
    isWebkit              = ("webkit"+strAppear in docElement.style),
    strJsElem             = isOpera || isGecko18 ? strImg : ( isGecko ? strObject : strScript ),
    strCssElem            = isWebkit ? strImg : strJsElem,
    isArray               = Array.isArray || function(obj) {
      return toString.call(obj) == strPreobj + "Array]";
    },
    isObject              = function(obj) {
      // Lame object detection, but don't pass it stupid stuff?
      return typeof obj == strObject;
    },
    isString              = function(s) {
      return typeof s == "string";
    },
    isFunction            = function(fn) {
      return toString.call(fn) == strPreobj + 'Function]';
    },
    globalFilters         = [],
    prefixes              = {
      'css': function(resource) {
        resource.forceCSS = true;
        return resource;
      }
    },
    yepnope;


  /* Loader helper functions */
  function isFileReady( injectedElem ) {
    // Check to see if any of the ways a file can be ready are available as properties on the file's element
    return ( ! injectedElem[strReadyState] || injectedElem[strReadyState] == "loaded" || injectedElem[strReadyState] == "complete");
  }

  function execWhenReady() {
    var execStackReady = 1,
        len,
        i;

    // Loop through the stack of scripts in the cue and execute them when all scripts in a group are ready
    for (i = -1, len = execStack.length; ++i < len;) {
      if ( execStack[i].src && ! ( execStackReady = isFileReady( execStack[i] ))) {
        // As soon as we encounter a script that isn't ready, stop looking for more
        break;
      }
    }
    // If we've set the stack as ready in the loop, make it happen here
    if ( execStackReady ) {
      executeStack();
    }
  }

  // Takes a preloaded js obj (changes in different browsers) and injects it into the head
  // in the appropriate order
  function injectJs(oldObj) {

    var script    = doc.createElement(strScript),
        done;

    script.src    = oldObj.src;

    // Bind to load events
    script[strOnReadyStateChange] = script[strOnLoad] = function() {

      if ( ! done && isFileReady( script ) ) {

        // Set done to prevent this function from being called twice.
        done = 1;
        execWhenReady();

        // Handle memory leak in IE
        script[strOnLoad] = script[strOnReadyStateChange] = null;
        docHead.removeChild(script);
      }
    }

    // 404 Fallback
    sTimeout(function(){
      if ( ! done ) {
        done = 1;
        execWhenReady();
      }
    }, errorTimeout);


    // Inject script into to document
    docHead.appendChild(script);
  }

  // Takes a preloaded css obj (changes in different browsers) and injects it into the head
  // in the appropriate order
  function injectCss(oldObj) {

    // Create stylesheet link
    var link      = doc.createElement('link'),
        done;

    // Add attributes
    link.href = oldObj.src;
    link.rel  = 'stylesheet';
    link.type = 'text/css';


    // Poll for changes in webkit and gecko
    if ( isWebkit || isGecko ) {

      // A self executing function with a sTimeout poll to call itself
      // again until the css file is added successfully
      (function poll( link ) {
        sTimeout(function(){
          // Don't run again if we're already done
          if ( ! done ) {
            try {
              // In supporting browsers, we can see the length of the cssRules of the file go up
              if ( link.sheet && link.sheet.cssRules && link.sheet.cssRules.length ) {
                // Then turn off the poll
                done = true;
                // And execute a function to execute callbacks when all dependencies are met
                execWhenReady();
              }
              // otherwise, wait another interval and try again
              else {
                poll(link);
              }
            } catch (ex) {
              // In the case that the browser does not support the cssRules array (cross domain)
              // just check the error message to see if it's a security error
              if ( (ex.code == 1000) || (ex.message.match(/security|denied/i)) ) {
                // if it's a security error, that means it loaded a cross domain file, so stop the timeout loop
                done = true;
                // and execute a check to see if we can run the callback(s) immediately after this function ends
                sTimeout(function(){
                  execWhenReady();
                }, 0 );
              }
              // otherwise, continue to poll
              else {
                poll(link);
              }
            }

          }
        }, 13);
      })( link );

    }
    // Onload handler for IE and Opera
    else {

      // In browsers that allow the onload event on link tags, just use it
      link.onload = function() {
        if ( ! done ) {
          // Set our flag to complete
          done = true;
          // Check to see if we can call the callback
          sTimeout(function(){
            execWhenReady();
          }, 0);
        }
      };

    }

    // 404 Fallback
    sTimeout(function(){
      if ( ! done ) {
        done = true;
        execWhenReady();
      }
    }, errorTimeout);

    // Inject CSS
    docHead.insertBefore(link, docFirst);

  }

  function executeStack(a) {
    // shift an element off of the stack
    var i   = execStack[strShift](),
        src = i ? i.src  : undef,
        t   = i ? i.type : undef;

    started = 1;

    // if a exists and has a src
    if ( a && src ) {
      // Pop another off the stack
      i = execStack[strShift]();
      // unset the src
      src = undef;
    }

    if ( i ) {
      // if it's a script, inject it into the head with no type attribute
      if ( src && t == jsType ) {
        injectJs(i);
      }
      // If it's a css file, fun the css injection function
      else if ( src && t == cssType ) {
        injectCss(i);
      }
      // Otherwise, just call the function and potentially run the stack
      // reset the started flag for the recursive handling
      else {
        i();
        started = 0;
        execWhenReady();
      }
    } else {
      // just reset out of recursive mode
      started = 0;
    }
  }


  function preloadFile( elem, url, type, splicePoint, docHead ) {
    // Create appropriate element for browser and type
    var preloadElem = doc.createElement( elem ),
        done        = 0;

    // var startTime = (+new Date);
    // console.log('inject', (type ? 'preload ' : 'reinject'), url);
    function onload() {
      // console.log('onload', (type ? 'preload ': 'reinject'), url, (+new Date)-startTime);
      // If the script/css file is loaded
      if ( ! done && isFileReady( preloadElem ) ) {
        // Set done to prevent this function from being called twice.
        done = 1;

        // If the type is set, that means that we're offloading execution
        if ( ! type || (type && ! started) ) {
          execWhenReady();
        }

        // Handle memory leak in IE
        preloadElem[strOnLoad] = preloadElem[strOnReadyStateChange] = null;
        type && docHead.removeChild(preloadElem);
      }
    }

    // Just set the src and the data attributes so we don't have differentiate between elem types
    preloadElem.src = preloadElem.data = url;

    // Only if we have a type to add should we set the type attribute (a real script has no type)
    if ( type ) {
      preloadElem.type = type;
    }

    // Attach handlers for all browsers
    preloadElem[strOnLoad] = preloadElem[strOnReadyStateChange] = onload;

    // If it's an image
    if ( elem == strImg ) {
      // Use the onerror callback as the 'completed' indicator
      preloadElem.onerror = onload;
    }
    // Otherwise, if it's a script element
    else if ( elem == strScript ) {
      // handle errors on script elements when we can
      preloadElem.onerror = function(){
        executeStack(1);
      };
    }

    // inject the element into the stack depending on if it's
    // in the middle of other scripts or not
    type && execStack.splice( splicePoint, 0, preloadElem);

    // append the element to the appropriate parent element (scripts go in the head, usually, and objects go in the body usually)
    docHead.appendChild(preloadElem);

    // Special case for opera, since error handling is how we detect onload
    // (with images) - we can't have a real error handler. So in opera, we
    // have a timeout in order to throw an error if something never loads.
    // Better solutions welcomed.
    if ( isOpera && ! type && elem == strScript ) {
      sTimeout(function(){
        if ( ! done ) {
          done = 1;
          execWhenReady();
        }
      }, errorTimeout);
    }

  }

  function load(resource, type) {

    var app   = this,
        elem  = ( type == 'c' ? strCssElem : strJsElem );

    // We'll do 'j' for js and 'c' for css, yay for unreadable minification tactics
    type = type || jsType;
    if ( isString( resource )) {
      // if the resource passed in here is a string, preload the file
      // use the head when we can (which is the documentElement when the head element doesn't exist)
      // and use the body element for objects. Images seem fine in the head, for some odd reason.
      preloadFile(elem, resource, type, app.i++, (elem == strObject ? docBody : docHead) );
    } else {
      // Otherwise it's a resource object and we can splice it into the app at the current location
      execStack.splice(app.i++, 0, resource);
    }

    // OMG is this jQueries? For chaining...
    return app;

  }

  function getLoader() {
    // this is a function to maintain state and return a fresh loader
    return {
      load: load,
      i : 0
    };
  }

  // return the yepnope object with a fresh loader attached
  function getYepnope() {
    var y = yepnope;
    y.loader = getLoader();
    return y;
  }

  /* End loader helper functions */




    // Yepnope Function
    yepnope = function(needs) {

    var i,
        need,
        nlen  = needs.length,
        // start the chain as a plain instance
        chain = this.yepnope.loader || getLoader();

    function satisfyPrefixes(url) {
      // make sure we have a url
      if (url) {
        // split all prefixes out
        var parts   = url.split('!'),
            pLen    = parts.length,
            gLen    = globalFilters.length,
            origUrl = parts[pLen-1],
            res     = {
              url      : origUrl,
              // keep this one static for callback variable consistency
              origUrl  : origUrl,
              prefixes : (pLen > 1) ? parts.slice(0, pLen-1) : undef
            },
            mFunc,
            j,
            z;

        // loop through prefixes
        // if there are none, this automatically gets skipped
        for (j = 0; j < pLen-1; j++) {
          mFunc = prefixes[parts[j]];
          if (mFunc) {
            res = mFunc(res);
          }
        }

        // Go through our global filters
        for (z = 0; z < gLen; z++) {
          res = globalFilters[z](res);
        }

        // return the final url
        return res;
      }
      return false;
    }

    function loadScriptOrStyle(input, callback, chain, index, testResult) {
      // run through our set of prefixes
      var resource = satisfyPrefixes(input);

      // if no object is returned or the url is empty/false just exit the load
      if (!resource || !resource.url || resource.bypass) {
        return chain;
      }

      var inc          = resource.url,
          origInc      = resource.origUrl,
          incLen       = inc.length,
          instead      = resource.instead,
          autoCallback = resource.autoCallback,
          forceJS      = resource.forceJS,
          forceCSS     = resource.forceCSS;

      // Determine callback, if any
      if ( callback ) {
        callback = isFunction(callback) ? callback : callback[input] || callback[index] || callback[( input.split('/').pop().split('?')[0])];
      }

      // if someone is overriding all normal functionality
      if (instead) {
        return instead(input, callback, chain, index, testResult);
      }
      else {

        chain.load(inc, (incLen > 4 && (forceCSS || (!forceJS && inc.substr(incLen-4) === '.css'))) ? cssType : undef);

        // If we have a callback, we'll start the chain over
        if (isFunction(callback) || isFunction(autoCallback)) {
          // Call getJS with our current stack of things
          chain.load(function(){
            // Hijack yepnope and restart index counter
            // NOTE:: This can't get minified... perhaps we need to pass it as a param isntead?
            var innernope = getYepnope();
            // Call our callbacks with this set of data
            // TODO :: get CSS preloading working so we can use innernope there too
            callback && callback(origInc, testResult, index, innernope);
            autoCallback && autoCallback(origInc, testResult, index, innernope);
          });
        }
      }

      return chain;
    }

    function loadFromTestObject(testObject, chain) {
        var testResult = !!(testObject.test),
            group      = (testResult) ? testObject.yep : testObject.nope,
            always     = testObject.load || testObject.both,
            callback   = testObject.callback || undef,  // || (testObject.wait ? noop : undef),
            callbackKey;

        // Reusable function for dealing with the different input types
            // NOTE:: relies on closures to keep 'chain' up to date, a bit confusing, but
            // much smaller than the functional equivalent in this case.
        function handleGroup(needGroup) {
          // If it's a string
          if (isString(needGroup)) {
            // Just load the script of style
            chain = loadScriptOrStyle(needGroup, callback, chain, 0, testResult);
          }
          // See if we have an object. Doesn't matter if it's an array or a key/val hash
          // Note:: order cannot be guaranteed on an key value object with multiple elements
          // since the for-in does not preserve order. Arrays _should_ go in order though.
          else if (isObject(needGroup)) {
            for (callbackKey in needGroup) {
              // Safari 2 does not have hasOwnProperty, but not worth the bytes for a shim
              // patch if needed. Kangax has a nice shim for it. Or just remove the check
              // and promise not to extend the object prototype.
              if (needGroup.hasOwnProperty(callbackKey)) {
                chain = loadScriptOrStyle(needGroup[callbackKey], callback, chain, callbackKey, testResult);
              }
            }
          }
        }

        // figure out what this group should do
        handleGroup(group);

        // Run our loader on the load/both group too
        handleGroup(always);

        // Fire complete callback
        if (testObject.complete) {
          chain = chain.load(testObject.complete);
        }

        return chain;
    }

    // Someone just decides to load a single script or css file as a string
    if (isString(needs)) {
      chain = loadScriptOrStyle(needs, false, chain, 0);
    }
    // Normal case is likely an array of different types of loading options
    else if (isArray(needs)) {
      // go through the list of needs
      for(i=0; i < nlen; i++) {
        need = needs[i];

        // if it's a string, just load it
        if (isString(need)) {
          chain = loadScriptOrStyle(need, false, chain, 0);
        }
        // if it's an array, call our function recursively
        else if (isArray(need)) {
          chain = yepnope(need);
        }
        // if it's an object, use our modernizr logic to win
        else if (isObject(need)) {
          chain = loadFromTestObject(need, chain);
        }
      }
    }
    // Allow a single object to be passed in
    else if (isObject(needs)) {
      chain = loadFromTestObject(needs, chain);
    }

    // allow more loading on this chain
    return chain;
  };

  // This publicly exposed function is for allowing
  // you to add functionality based on prefixes on the
  // string files you add. 'css!' is a builtin prefix
  //
  // The arguments are the prefix (not including the !) as a string
  // and
  // A callback function. This function is passed a resource object
  // that can be manipulated and then returned. (like middleware. har.)
  //
  // Examples of this can be seen in the officially supported ie prefix
  yepnope.addPrefix = function(prefix, callback) {
    prefixes[prefix] = callback;
  };

  // A filter is a global function that every resource
  // object that passes through yepnope will see. You can
  // of course conditionally choose to modify the resource objects
  // or just pass them along. The filter function takes the resource
  // object and is expected to return one.
  //
  // The best example of a filter is the 'autoprotocol' officially
  // supported filter
  yepnope.addFilter = function(filter) {
    globalFilters.push(filter);
  };

  // Attach loader &
  // Leak it
  window.yepnope = yepnope = getYepnope();

})(this, this.document);



/**
 * Yepnope AutoProtocol Filter
 * Version 1.0
 * WTFPL
 * Usage: ['//mysite.com/script.js']
 */
yepnope.addFilter(function(resource){
  // protocol adding
  if (/^\/\//.test(resource.url)) {
    resource.url = window.location.protocol + resource.url;
  }
  return resource;
});
