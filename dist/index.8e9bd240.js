// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"em2cd":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "78fcd0ac8e9bd240";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1jwFz":[function(require,module,exports) {
var _router = require("./router");
var _button = require("./components/button");
var _hands = require("./components/hands");
var _state = require("./state");
(function() {
    (0, _button.buttonComp)();
    (0, _hands.handsComp)();
    (0, _state.state).initState();
    (0, _router.initRouter)(document.querySelector(".root"));
})();

},{"./router":"eBUGN","./components/button":"4iqCu","./components/hands":"bPPIi","./state":"d4y3Q"}],"eBUGN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _welcome = require("./pages/welcome");
var _instructions = require("./pages/instructions");
var _play = require("./pages/play");
var _results = require("./pages/results");
const BASE_PATH = "/desafio-m5";
function isGithubPages() {
    return location.host.includes("github.io");
}
const routes = [
    {
        path: /\/welcome/,
        component: (0, _welcome.welcomePage)
    },
    {
        path: /\/instructions/,
        component: (0, _instructions.instructionsPage)
    },
    {
        path: /\/play/,
        component: (0, _play.playPage)
    },
    {
        path: /\/results/,
        component: (0, _results.resultsPage)
    }, 
];
function initRouter(container) {
    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }
    function handleRoute(route) {
        /*    console.log("El handleRoute recibió una nueva ruta", route);
    console.log("soy el location pathname", location.pathname); */ const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        /*     console.log("soy el new route", newRoute); */ for (const r of routes)if (r.path.test(newRoute)) {
            const elem = r.component({
                goTo: goTo
            });
            console.log("soy el elem", elem);
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(elem);
        }
    }
    if (location.pathname == "/") goTo("/welcome");
    else handleRoute(location.pathname);
    ///ESCUCHA LOS CAMBIOS PARA PODER NAVEGAR POR EL HISTORIAL///
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/welcome":"9DGFD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./pages/instructions":"8vgGD","./pages/play":"jlIcx","./pages/results":"bQd14"}],"9DGFD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "welcomePage", ()=>welcomePage) /* .
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
 */  /*  connectedCallback(){
    (lo usamos para ejecutar el render) 
    this.render()
} */  /*  (tres customs elements diferentes vs un custom element que solamente cambia el atributo ) 
    this.innerHTML = `
    <jugada-piedra>
    <my-jugada jugada="piedra">
    
    ` */  /* usar position fixed o absolute para la ubicacion de las manos */ ;
function welcomePage(params) {
    const div = document.createElement("div");
    div.className = "container";
    div.innerHTML = `
 
  
    <h1 class="title">Piedra papel o tijera</h1>
    
    <button-comp>Empezar</button-comp>
    
    <hands-comp class="hands"></handscomp>
   
  
  `;
    const style = document.createElement("style");
    style.innerHTML = `

  @media (min-width: 769px) {
    .container {
      max-width: 500px;
      margin: 0 auto;
      padding-top: 80px;
      border: solid 10px black;
    }
  }

 .title {
    font-size: 80px;
    font-family: courier new;
    width: 284px;
    height 204px;
    font-style: bold;
    color: #009048;
    margin: 0;
    padding; 0;
    
  }

  @media (min-width: 769px) {
    .hands {
      
    }
  }
  

  `;
    const buttonElem = div.querySelector("button-comp");
    buttonElem.addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    div.appendChild(style);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8vgGD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "instructionsPage", ()=>instructionsPage);
function instructionsPage(params) {
    const div = document.createElement("div");
    div.className = "container";
    div.innerHTML = `
   
    
      <h1 class="text">Presioná jugar
      y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h1>
      
      <button-comp>¡Jugar!</button-comp>
    
      <hands-comp></handscomp>
     
    
    `;
    const style = document.createElement("style");
    style.innerHTML = `

   .text {
    background-image: none;
      font-size: 40px;
      font-family: courier new;
      width: 316px;
      height 240px;
      text-align: center;
      margin: 0;
      padding: 0;
    }
  
    `;
    const buttonElem = div.querySelector("button-comp");
    buttonElem.addEventListener("click", ()=>{
        params.goTo("/play");
    });
    div.appendChild(style);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jlIcx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "playPage", ()=>playPage);
function playPage(params) {
    const div = document.createElement("div");
    div.className = "container-play";
    div.innerHTML = `
 
    <div class=circle></div>

    <hands-container class="hands">
      <hands-comp variant="selected"></hands-comp>
    </hands-container>
  
  `;
    //////* ESTILOS *//////
    const style = document.createElement("style");
    style.innerHTML = `

  .root {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 5px solid #000;
    padding: 118px 0px 80px 0px;
    width: 100%;
  }

  .circle {
    border-radius: 50%;
    width: 243px;
    height: 243px;
    padding: 20px 0px 0px 0px;
    margin-bottom: 80px;
    background-color: none;
    border: 24px solid #000;
    color: #000;
    text-align: center;
    font-family: arial black;
    font-size: 100px;
    animation: loading 3s forwards;
    animation-delay: 1s;
  }

  .hands {
    width: 100%;
    display: flex;
    flex-direction: row;
    position: fixed;
    border: solid black 10px;
   
  }
  

  @keyframes loading {

    0% {
      
      border-top: 24px solid grey;
      border-right: 24px solid black;
      border-bottom: 24px solid black;
      border-left: 24px solid black;
    }

    25% {
  
      border-right: 24px solid grey;
      border-bottom: 24px solid black;
      border-left: 24px solid black;
    }

    75% {
      
      border-right: 24px solid white;
      border-bottom: 24px solid white;
      border-left: 24px solid black;
    }

    100% {
      border-top: 24px solid white;
      border-right: 24px solid white;
      border-bottom: 24px solid white;
      border-left: 24px solid white;
    }

    .transparent {
      opacity: 50%;
    }

  }

  `;
    //////* CUENTA ATRÁS DEL CÍRCULO */////
    let counter = 3;
    const countdownElem = div.querySelector(".circle");
    const intervalId = setInterval(()=>{
        countdownElem.innerHTML = `${counter}`;
        counter--;
        if (counter < 0) clearInterval(intervalId) /* params.goTo("./instructions") */ ;
    }, 2000);
    ////// TIMEOUT PARA PASAR A PAGE RESULTS //////
    const handsContainer = div.querySelector(".hands");
    handsContainer.addEventListener("click", ()=>{
        setTimeout(()=>{
            params.goTo("/results");
        }, 1500);
    });
    div.appendChild(style);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bQd14":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resultsPage", ()=>resultsPage);
var _state = require("../../state");
const piedra = require("url:../../img/piedra.png");
const papel = require("url:../../img/papel.png");
const tijera = require("url:../../img/tijera.png");
const imageWinURL = require("url:../../img/ganaste.png");
const imageLoseURL = require("url:../../img/perdiste.png");
const imageTieURL = require("url:../../img/empate.png");
function resultsPage() {
    const currentState = (0, _state.state).getState();
    const div = document.createElement("div");
    const results = document.createElement("div");
    const score = document.createElement("div");
    const myPlay = currentState.currentGame.myPlay == "piedra" ? piedra : currentState.currentGame.myPlay == "papel" ? papel : tijera;
    const computerPlay = currentState.currentGame.computerPlay == "piedra" ? piedra : currentState.currentGame.computerPlay == "papel" ? papel : tijera;
    results.innerHTML = ` 
  <img class="computerHand" src=${piedra}>
  <img class="myHand" src=${papel} >
  
  `;
    /* src=${computerPlay} */ /* src=${myPlay} */ ////// MOSTRAR RESULTADO ESTRELLA //////
    const myResult = (0, _state.state).data.history.me;
    const pcResult = (0, _state.state).data.history.me;
    console.log("mi result", myResult, pcResult);
    const display = document.createElement("div");
    setTimeout(()=>{
        const result = (0, _state.state).whoWins();
        if (result == "win") {
            results.appendChild(display);
            display.innerHTML = `<img class="star" src=${imageWinURL}></img>`;
            display.style.backgroundColor = "#68FF33";
        }
        if (result == "lose") {
            results.appendChild(display);
            display.innerHTML = `<img class="star" src=${imageLoseURL}></img>`;
            display.style.backgroundColor = "#FF4633";
        }
        if (result == "tie") {
            results.appendChild(display);
            display.innerHTML = `<img class="star" src=${imageTieURL}></img>`;
            display.style.backgroundColor = "#6833FF";
        }
        score.innerHTML = `
  
    <div class="container">
        <div class="score">
            <h1>Score</h1>
            <div class="myPlay"> Vos:${currentState.history.me}</div>
            <div class="computerPlay"> Máquina:${currentState.history.computer}</div>
        </div>
  
        <button-comp class="home">Volver a jugar</button-comp>
    </div>    
    `;
    }, 2000);
    const style = document.createElement("style");
    style.innerHTML = `

  .root {
    margin: 0 auto;
    box-sizing: border-box;
  }

  .star {
      height: 254px;
      margin-bottom: 20px;
  }

  .container {
      text-align: center;
      font-size: 55px;
      display: flex;
      flex-direction: column;
      border: solid 10px black;
      padding: 36px 0px;
      /* padding left y right no funiona */
  }

  .score {
      background-color: white;
      display: flex;
      flex-direction: column;
      font-size: 45px;
      border: solid 10px black;
      border-radius: 10px;
      width: 260px;
      height: 250px;
  }

  .myPlay {
      text-align: right;
      margin-right: 10px;

  }
  .computerPlay {
      text-align: right;
      margin-right: 10px;
  }


  `;
    div.appendChild(results);
    div.appendChild(style);
    score.appendChild(style);
    return score;
}

},{"url:../../img/ganaste.png":"etiOr","url:../../img/perdiste.png":"9ho5B","url:../../img/empate.png":"6aNTq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../state":"d4y3Q","url:../../img/piedra.png":"lzIoH","url:../../img/papel.png":"3UuT5","url:../../img/tijera.png":"3dltE"}],"etiOr":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ao0Rz") + "ganaste.1aab8f76.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"9ho5B":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ao0Rz") + "perdiste.90c6bbd7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6aNTq":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ao0Rz") + "empate.ef275105.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"d4y3Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: ""
        },
        history: {
            computer: 0,
            me: 0
        }
    },
    listeners: [],
    initState () {
        const localData = localStorage.getItem("saved-state");
        if (localData !== null) this.setState(JSON.parse(localData));
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
    /*     for (const cb of this.listeners) {
      cb();
    } */ },
    setMove (move) {
        const options = [
            "piedra",
            "papel",
            "tijera"
        ];
        const currentState = this.getState();
        currentState.currentGame.myPlay = move;
        currentState.currentGame.computerPlay = options[Math.floor(Math.random() * 3)];
        this.pushToHistory();
    },
    whoWins () {
        const currentGame = this.getState();
        const myPlay = currentGame.myPlay;
        const computerPlay = currentGame.computerPlay;
        const ganeConTijeras = myPlay == "tijera" && computerPlay == "papel";
        const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
        const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
        const pcGanaTijeras = myPlay == "papel" && computerPlay == "tijera";
        const pcGanaPiedra = myPlay == "tijera" && computerPlay == "piedra";
        const pcGanaPapel = myPlay == "piedra" && computerPlay == "papel";
        const win = [
            ganeConTijeras,
            ganeConPiedra,
            ganeConPapel
        ].includes(true);
        const lose = [
            pcGanaPapel,
            pcGanaPiedra,
            pcGanaTijeras
        ].includes(true);
        let result;
        if (win == true) result = "win";
        else if (lose == true) result = "lose";
        else result = "tie";
        return result;
    },
    pushToHistory () {
        const result = this.whoWins();
        const currentState = this.getState();
        if (result == "win") currentState.history.me++;
        else if (result == "lose") currentState.history.computer++;
        localStorage.setItem("saved-state", JSON.stringify(state.getState()));
    },
    /*      const currentState = this.getState();
    const result = this.whoWins();
    const myScore = currentState.history.me;
    const computerScore = currentState.history.computer;

    if (result == "win"){
     this.setState({
       ...currentState,
       history: {
         computer: computerScore + 1,
         me: myScore,
       },
      })
    }

    if (result == "lose") {
      this.setState({
        ...currentState,
        history: {
        computer: computerScore,
         me: myScore + 1,
        }
      })
    }
     localStorage.setItem("current-game", JSON.stringify(state.getState())) 
   } */ subscribe (cb) {
        this.listeners.push(cb);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lzIoH":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ao0Rz") + "piedra.09238fcc.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3UuT5":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ao0Rz") + "papel.02ed7e33.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3dltE":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ao0Rz") + "tijera.bcbc49ac.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4iqCu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buttonComp", ()=>buttonComp);
function buttonComp(params) {
    customElements.define("button-comp", class extends HTMLElement {
        /*       shadow: ShadowRoot; */ constructor(){
            super();
            this.connectedCallback();
        }
        connectedCallback() {
            this.render();
        }
        /*       addCallbacks() {
        this.shadow.querySelector(".root").addEventListener("click", (e) => {
          const event = new CustomEvent("selected", {
            detail: {
              route: "/instructions"
            },
          });
          this.dispatchEvent(event);
        });
      } */ render() {
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            const button = document.createElement("button");
            const style = document.createElement("style");
            button.className = "button";
            style.innerHTML = `
                
                .button {
    
                  background-color: #006CFC;
                  font-size: 45px;
                  border: 10px solid #001997;
                  border-radius: 10px;
                  min-width: 300px;
                  height: 87px;
                  font-family: Odibee sans;
                  color: #D8FCFC;
                  margin-top: 20px;
                }
                
                `;
            button.textContent = this.textContent;
            this.textContent = this.getAttribute("text");
            button.addEventListener("click", ()=>{
                if (this.textContent == "Volver a jugar") params.goTo("./instructions");
            });
            shadow.appendChild(div);
            shadow.appendChild(style);
            div.appendChild(button);
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bPPIi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handsComp", ()=>handsComp);
var _state = require("../../state");
const imagePiedraURL = require("url:../../img/piedra.png");
const imagePapelURL = require("url:../../img/papel.png");
const imageTijeraURL = require("url:../../img/tijera.png");
function handsComp(params) {
    customElements.define("hands-comp", class extends HTMLElement {
        constructor(){
            super();
            this.connectedCallback();
        }
        connectedCallback() {
            this.render();
        }
        /*          addCallbacks() {
          this.shadow.querySelector(".hands").addEventListener("click", (e) => {
            const event = new CustomEvent("handEvent", {
              detail: {
                type: this.getAttribute("type"),
              },
            });
            this.dispatchEvent(event);
          });
        }  */ render() {
            this.shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            div.className = "hands";
            div.innerHTML = `
  
          <img type="piedra" class="piedra" src=${imagePiedraURL}>
          <img type="papel" class="papel" src=${imagePapelURL}>
          <img type="tijera" class="tijera" src=${imageTijeraURL}>
  
          `;
            const style = document.createElement("style");
            style.innerHTML = `

        img {
          width: 56px,
          height: 126px;
        }

        @media (min-width:769px) {
          img{
            width: 80px;
            height: 180px;
          }
        }

        .piedra {
          padding-right: 40px;
        }

        .papel {
          padding-right:40px;
        }

        .transparent {
          opacity: 0.5;
        }
            
        `;
            const piedra = div.querySelector(".piedra");
            const papel = div.querySelector(".papel");
            const tijera = div.querySelector(".tijera");
            if (this.getAttribute("variant") == "selected") {
                piedra.addEventListener("click", ()=>{
                    papel.classList.add("transparent");
                    tijera.classList.add("transparent");
                    setTimeout(()=>{
                        (0, _state.state).setMove("piedra");
                        params.goTo("/results");
                    }, 2000);
                });
                papel.addEventListener("click", ()=>{
                    piedra.classList.add("transparent");
                    tijera.classList.add("transparent");
                    setTimeout(()=>{
                        (0, _state.state).setMove("piedra");
                        params.goTo("/results");
                    }, 2000);
                });
                tijera.addEventListener("click", ()=>{
                    papel.classList.add("transparent");
                    piedra.classList.add("transparent");
                    setTimeout(()=>{
                        (0, _state.state).setMove("piedra");
                        params.goTo("/results");
                    }, 2000);
                });
            }
            this.shadow.appendChild(style);
            this.shadow.appendChild(div);
        }
    });
}

},{"url:../../img/piedra.png":"lzIoH","url:../../img/papel.png":"3UuT5","url:../../img/tijera.png":"3dltE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../state":"d4y3Q"}]},["em2cd","1jwFz"], "1jwFz", "parcelRequire4c92")

//# sourceMappingURL=index.8e9bd240.js.map
