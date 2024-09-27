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
})({"8bDoD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
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
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3cYfC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// Зміна зображень для різної ширини екранів
var _headerImgPhonePng = require("../images/header-img-phone.png");
var _headerImgPhonePngDefault = parcelHelpers.interopDefault(_headerImgPhonePng);
var _headerImgTabletPng = require("../images/header-img-tablet.png");
var _headerImgTabletPngDefault = parcelHelpers.interopDefault(_headerImgTabletPng);
var _headerImgDesktopPng = require("../images/header-img-desktop.png");
var _headerImgDesktopPngDefault = parcelHelpers.interopDefault(_headerImgDesktopPng);
var _meetLunaPhonePng = require("../images/meet-luna-phone.png");
var _meetLunaPhonePngDefault = parcelHelpers.interopDefault(_meetLunaPhonePng);
var _meetLunaTabletPng = require("../images/meet-luna-tablet.png");
var _meetLunaTabletPngDefault = parcelHelpers.interopDefault(_meetLunaTabletPng);
var _meetLunaDesktopPng = require("../images/meet-luna-desktop.png");
var _meetLunaDesktopPngDefault = parcelHelpers.interopDefault(_meetLunaDesktopPng);
var _storyPhonePng = require("../images/story-phone.png");
var _storyPhonePngDefault = parcelHelpers.interopDefault(_storyPhonePng);
var _storyTabletPng = require("../images/story-tablet.png");
var _storyTabletPngDefault = parcelHelpers.interopDefault(_storyTabletPng);
var _storyDesktopPng = require("../images/story-desktop.png");
var _storyDesktopPngDefault = parcelHelpers.interopDefault(_storyDesktopPng);
var _aboutPhonePng = require("../images/about-phone.png");
var _aboutPhonePngDefault = parcelHelpers.interopDefault(_aboutPhonePng);
var _aboutTabletPng = require("../images/about-tablet.png");
var _aboutTabletPngDefault = parcelHelpers.interopDefault(_aboutTabletPng);
var _aboutDesktopPng = require("../images/about-desktop.png");
var _aboutDesktopPngDefault = parcelHelpers.interopDefault(_aboutDesktopPng);
"use strict";
function updateImageSrc(imageId, phoneSrc, tabletSrc, desktopSrc) {
    const img = document.getElementById(imageId);
    const tabletMinWidth = getComputedStyle(document.documentElement).getPropertyValue("--tablet-min-width").trim();
    const desktopMinWidth = getComputedStyle(document.documentElement).getPropertyValue("--desktop-min-width").trim();
    const screenWidth = window.innerWidth;
    if (screenWidth >= parseInt(desktopMinWidth)) img.src = desktopSrc;
    else if (screenWidth >= parseInt(tabletMinWidth)) img.src = tabletSrc;
    else img.src = phoneSrc;
}
function updateAllImages() {
    updateImageSrc("headerImage", (0, _headerImgPhonePngDefault.default), (0, _headerImgTabletPngDefault.default), (0, _headerImgDesktopPngDefault.default));
    updateImageSrc("mainImage", (0, _meetLunaPhonePngDefault.default), (0, _meetLunaTabletPngDefault.default), (0, _meetLunaDesktopPngDefault.default));
    updateImageSrc("storyImage", (0, _storyPhonePngDefault.default), (0, _storyTabletPngDefault.default), (0, _storyDesktopPngDefault.default));
    updateImageSrc("aboutImage", (0, _aboutPhonePngDefault.default), (0, _aboutTabletPngDefault.default), (0, _aboutDesktopPngDefault.default));
}
window.addEventListener("load", updateAllImages);
window.addEventListener("resize", updateAllImages);
// Встановлення висоти заголовків в Benefits
function setEqualTitleHeights() {
    const titles = document.querySelectorAll(".benefits__item-title");
    let maxHeight = 0;
    titles.forEach((title)=>{
        const height = title.offsetHeight;
        if (height > maxHeight) maxHeight = height;
    });
    titles.forEach((title)=>{
        title.style.height = `${maxHeight}px`;
    });
}
window.addEventListener("load", setEqualTitleHeights);
window.addEventListener("resize", setEqualTitleHeights);
// Слайдер
document.addEventListener("DOMContentLoaded", ()=>{
    const prevButton = document.querySelector(".slider__button--prev");
    const nextButton = document.querySelector(".slider__button--next");
    const slides = document.querySelectorAll(".slider__content");
    let currentIndex = 0;
    function updateSlides() {
        slides.forEach((slide, index)=>{
            slide.classList.remove("left", "right");
            if (index < currentIndex) slide.classList.add("left");
            else if (index > currentIndex) slide.classList.add("right");
        });
        if (currentIndex === 0) prevButton.classList.add("disabled");
        else prevButton.classList.remove("disabled");
        if (currentIndex === slides.length - 1) nextButton.classList.add("disabled");
        else nextButton.classList.remove("disabled");
        document.querySelector(".slider__current-slide").textContent = String(currentIndex + 1).padStart(2, "0");
    }
    function showNextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlides();
        }
    }
    function showPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlides();
        }
    }
    prevButton.addEventListener("click", showPrevSlide);
    nextButton.addEventListener("click", showNextSlide);
    updateSlides();
});
// Встановлення висоти блоку слайдера
function setMaxHeight() {
    const sliderContents = document.querySelectorAll(".slider__content");
    let maxHeight = 0;
    sliderContents.forEach((content)=>{
        const contentHeight = content.offsetHeight;
        if (contentHeight > maxHeight) maxHeight = contentHeight;
    });
    const sliderControls = document.querySelector(".slider__controls");
    sliderControls.style.marginTop = maxHeight + "px";
}
setMaxHeight();
window.addEventListener("resize", setMaxHeight);
// Перевірка форми на валідність
const form = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");
function checkFormValidity() {
    if (form.checkValidity()) {
        submitButton.classList.add("active");
        submitButton.disabled = false;
    } else {
        submitButton.classList.remove("active");
        submitButton.disabled = true;
    }
}
form.addEventListener("input", checkFormValidity);
// Обробник події для відправки форми
form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("The form is successfully sent!");
    form.reset();
    submitButton.classList.remove("active");
    submitButton.disabled = true;
});
// Ефект магнетизму
const parents = document.querySelectorAll(".magnet-parent");
const attractionStrength = 0.7; // Коефіцієнт сили примагнічення
parents.forEach((parent)=>{
    const magnet = parent.querySelector(".magnet");
    const parentSize = parent.offsetWidth;
    const magnetSize = magnet.offsetWidth;
    const parentCenter = {
        x: parentSize / 2,
        y: parentSize / 2
    };
    const maxDistance = (parentSize - magnetSize) / 2;
    parent.addEventListener("mousemove", (e)=>{
        const rect = parent.getBoundingClientRect();
        const cursorX = e.clientX - rect.left;
        const cursorY = e.clientY - rect.top;
        const distanceX = cursorX - parentCenter.x;
        const distanceY = cursorY - parentCenter.y;
        const influenceX = distanceX / (parentSize / 2) * maxDistance * attractionStrength;
        const influenceY = distanceY / (parentSize / 2) * maxDistance * attractionStrength;
        magnet.style.transform = `translate(calc(-50% + ${influenceX}px), calc(-50% + ${influenceY}px))`;
    });
    parent.addEventListener("mouseleave", ()=>{
        magnet.style.transform = `translate(-50%, -50%)`;
    });
});
// Ефект відштовхування
const containers = document.querySelectorAll(".image-container");
const maxOffsetPercentage = 8; // Коефіцієнт сили відштовхування
containers.forEach((container)=>{
    const image = container.querySelector(".magnetic-image");
    container.addEventListener("mousemove", (e)=>{
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;
        const offsetX = deltaX / centerX * maxOffsetPercentage;
        const offsetY = deltaY / centerY * maxOffsetPercentage;
        image.style.transform = `translate(${-offsetX}%, ${-offsetY}%) scale(1.16)`;
    });
    container.addEventListener("mouseleave", ()=>{
        image.style.transform = "translate(0, 0)";
    });
});

},{"../images/header-img-phone.png":"8cGE1","../images/header-img-tablet.png":"jeCzt","../images/header-img-desktop.png":"foUWP","../images/meet-luna-phone.png":"em1xX","../images/meet-luna-tablet.png":"jSfj1","../images/meet-luna-desktop.png":"lGPmh","../images/story-phone.png":"7E8XP","../images/story-tablet.png":"h4lwk","../images/story-desktop.png":"1QcbJ","../images/about-phone.png":"6IQNV","../images/about-tablet.png":"lTjZN","../images/about-desktop.png":"bwYtH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8cGE1":[function(require,module,exports) {
module.exports = require("33b9cc55c88d3734").getBundleURL("7JE76") + "header-img-phone.136db7a1.png" + "?" + Date.now();

},{"33b9cc55c88d3734":"lgJ39"}],"lgJ39":[function(require,module,exports) {
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
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"jeCzt":[function(require,module,exports) {
module.exports = require("6a0bd121450c27c1").getBundleURL("7JE76") + "header-img-tablet.3f033a9a.png" + "?" + Date.now();

},{"6a0bd121450c27c1":"lgJ39"}],"foUWP":[function(require,module,exports) {
module.exports = require("11f548252a6e2cb2").getBundleURL("7JE76") + "header-img-desktop.68450982.png" + "?" + Date.now();

},{"11f548252a6e2cb2":"lgJ39"}],"em1xX":[function(require,module,exports) {
module.exports = require("94a12e46cf862d02").getBundleURL("7JE76") + "meet-luna-phone.676acd13.png" + "?" + Date.now();

},{"94a12e46cf862d02":"lgJ39"}],"jSfj1":[function(require,module,exports) {
module.exports = require("ce049223d7db175e").getBundleURL("7JE76") + "meet-luna-tablet.aff9bd44.png" + "?" + Date.now();

},{"ce049223d7db175e":"lgJ39"}],"lGPmh":[function(require,module,exports) {
module.exports = require("fe72a4bd8179cedc").getBundleURL("7JE76") + "meet-luna-desktop.c7beebd1.png" + "?" + Date.now();

},{"fe72a4bd8179cedc":"lgJ39"}],"7E8XP":[function(require,module,exports) {
module.exports = require("d47679696fa6c1aa").getBundleURL("7JE76") + "story-phone.24e23691.png" + "?" + Date.now();

},{"d47679696fa6c1aa":"lgJ39"}],"h4lwk":[function(require,module,exports) {
module.exports = require("f84d3f9b5762057b").getBundleURL("7JE76") + "story-tablet.090f724e.png" + "?" + Date.now();

},{"f84d3f9b5762057b":"lgJ39"}],"1QcbJ":[function(require,module,exports) {
module.exports = require("86959eebbb42961b").getBundleURL("7JE76") + "story-desktop.82a1d5b9.png" + "?" + Date.now();

},{"86959eebbb42961b":"lgJ39"}],"6IQNV":[function(require,module,exports) {
module.exports = require("f8bd1c71f77c5b7c").getBundleURL("7JE76") + "about-phone.0c600f94.png" + "?" + Date.now();

},{"f8bd1c71f77c5b7c":"lgJ39"}],"lTjZN":[function(require,module,exports) {
module.exports = require("7099a1e1733b2017").getBundleURL("7JE76") + "about-tablet.33615ccc.png" + "?" + Date.now();

},{"7099a1e1733b2017":"lgJ39"}],"bwYtH":[function(require,module,exports) {
module.exports = require("41735609bbec8114").getBundleURL("7JE76") + "about-desktop.cfc95b6d.png" + "?" + Date.now();

},{"41735609bbec8114":"lgJ39"}],"gkKU3":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}]},["8bDoD","3cYfC"], "3cYfC", "parcelRequire4cc0")

//# sourceMappingURL=index.b8fca702.js.map
