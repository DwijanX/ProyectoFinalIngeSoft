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
})({"gkoGO":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "3e71edac87ae31f1";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
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
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
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
        console.log("[parcel] ✨ Error resolved");
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
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

},{}],"jZ78i":[function(require,module,exports) {
var _teacherLoginManager = require("./TeacherLoginManager");
var _studentListJs = require("./studentList.js");
var _sampleDataCourses = require("./SampleDataCourses");
const docentesPage = document.querySelector("#docentesPage");
const estudiantesPage = document.querySelector("#estudiantesPage");
const TeachersDiv = document.querySelector("#TeachersDiv");
const StudentsDiv = document.querySelector("#StudentsDiv");
const Login = document.querySelector("#Login");
const LogOut = document.querySelector("#logOutButton");
//Minor objects
const createHmwkForm = document.querySelector("#HomeworkCreation-form");
const createCourseForm = document.querySelector("#CourseCreation-form");
const HomeworkMofication = document.querySelector("#HomeworkMofication-form");
const loginText = document.querySelector("#loginText");
const passwordText = document.querySelector("#passwordText");
let passInfo = document.querySelector("#pass");
let alreadyLoaded = false;
let alreadyLoggedIn = false;
function logInProcedure() {
    alreadyLoggedIn = true;
    resetMinorObjsStyles();
    estudiantesPage.style.display = "none";
    docentesPage.style.display = "none";
    LogOut.style.display = "inline-block";
    passInfo.style.color = "black";
}
docentesPage.addEventListener("click", (event)=>{
    event.preventDefault();
    if ((0, _teacherLoginManager.professorLogIn)(loginText.value, passwordText.value) && !alreadyLoggedIn) {
        logInProcedure();
        (0, _teacherLoginManager.setProfessorName)(loginText.value);
        TeachersDiv.style.display = "flex";
        StudentsDiv.style.display = "none";
        Login.style.display = "none";
    } else {
        passInfo.innerHTML = "credenciales incorrectas";
        passInfo.style.color = "red";
    }
});
estudiantesPage.addEventListener("click", (event)=>{
    event.preventDefault();
    if ((0, _studentListJs.studentLogIn)(loginText.value, passwordText.value) && !alreadyLoggedIn) {
        logInProcedure();
        (0, _studentListJs.setStudentName)(loginText.value);
        StudentsDiv.style.display = "flex";
        TeachersDiv.style.display = "none";
        Login.style.display = "none";
        passInfo.style.color = "black";
    } else {
        passInfo.innerHTML = "credenciales incorrectas";
        passInfo.style.color = "red";
    }
});
LogOut.addEventListener("click", (event)=>{
    event.preventDefault();
    resetMinorObjsStyles();
    resetPages();
    alreadyLoggedIn = false;
    estudiantesPage.style.display = "inline-block";
    docentesPage.style.display = "inline-block";
    LogOut.style.display = "none";
});
function resetMinorObjsStyles() {
    createHmwkForm.style.display = "none";
    createCourseForm.style.display = "none";
    HomeworkMofication.style.display = "none";
}
function resetPages() {
    StudentsDiv.style.display = "none";
    TeachersDiv.style.display = "none";
    Login.style.display = "block";
}
window.onload = ()=>{
    (0, _sampleDataCourses.loadSampleData)();
    (0, _teacherLoginManager.setProfessorArray)((0, _sampleDataCourses.getGeneratedProfessorArray)());
    (0, _studentListJs.getStudentsFromJson)();
};

},{"./TeacherLoginManager":"35fYT","./studentList.js":"2nFcC","./SampleDataCourses":"k5yWV"}],"35fYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "professorLogIn", ()=>professorLogIn);
parcelHelpers.export(exports, "setProfessorName", ()=>setProfessorName);
parcelHelpers.export(exports, "getProfessorName", ()=>getProfessorName);
parcelHelpers.export(exports, "setProfessorArray", ()=>setProfessorArray);
let professorArray = [];
//let professordPassword = "ucb2022"
let professorName = "";
let professordPassword = "123";
function professorLogIn(name, password) {
    if (professorArray.includes(name) && password == professordPassword) return true;
    return false;
}
function setProfessorName(name) {
    professorName = name;
}
function getProfessorName() {
    return professorName;
}
function setProfessorArray(incomingArray) {
    professorArray = incomingArray;
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

},{}],"2nFcC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getStudentsFromJson", ()=>getStudentsFromJson);
parcelHelpers.export(exports, "studentLogIn", ()=>studentLogIn);
parcelHelpers.export(exports, "seeIfStudentExist", ()=>seeIfStudentExist);
parcelHelpers.export(exports, "getStudents", ()=>getStudents);
parcelHelpers.export(exports, "setStudentName", ()=>setStudentName);
parcelHelpers.export(exports, "getStudentName", ()=>getStudentName);
parcelHelpers.export(exports, "getCoursesFromAllStudents", ()=>getCoursesFromAllStudents);
parcelHelpers.export(exports, "getCoursesFromAllStudentsWithinACourse", ()=>getCoursesFromAllStudentsWithinACourse);
parcelHelpers.export(exports, "getStudentsInCourse", ()=>getStudentsInCourse);
var _estudianteJs = require("./estudiante.js");
var _estudianteJsDefault = parcelHelpers.interopDefault(_estudianteJs);
var _predefinedStudentsJs = require("./predefinedStudents.js");
let studentPassword = "123";
let studentName = "";
let studentDict = {};
function getStudentsFromJson() {
    let neoDict = (0, _predefinedStudentsJs.combineDicts)();
    for(let pos = 0; pos < neoDict.length; pos++)for(let studentPos = 0; studentPos < neoDict[pos]["students"].length; studentPos++){
        let student = new (0, _estudianteJsDefault.default)(neoDict[pos]["students"][studentPos]);
        if (!studentDict[student.getName()]) {
            studentDict[student.getName()] = [];
            studentDict[student.getName()] = student;
        }
        studentDict[student.getName()].addCoursesToStudent(neoDict[pos]["course"]);
    }
}
function getStudents() {
    return studentDict;
}
function studentLogIn(name, password) {
    if (name in studentDict && password == studentPassword) return true;
    return false;
}
function seeIfStudentExist(name) {
    if (name in studentDict) return studentDict[name];
    return null;
}
function setStudentName(name) {
    studentName = name;
}
function getStudentName() {
    return studentName;
}
function getCoursesFromAllStudents() {
    let courses = new Set();
    for(let key in studentDict){
        let student = studentDict[key].getCoursesStudent();
        for (let course of student)courses.add(course);
    }
    return courses;
}
function getCoursesFromAllStudentsWithinACourse(courseToCheck) {
    let courses = new Set();
    for(const key in studentDict){
        let studentCourses = studentDict[key].getCoursesStudent();
        if (studentCourses.has(courseToCheck)) {
            for (let course of studentCourses)if (courseToCheck != course) courses.add(course);
        }
    }
    return courses;
}
function getStudentsInCourse(courseToCheck) {
    let students = {};
    for(const key in studentDict){
        let courses = studentDict[key].getCoursesStudent();
        if (courses.has(courseToCheck)) for (let course of courses){
            if (!students[course]) {
                students[course] = [];
                students[course] = 0;
            }
            students[course] = 1 + parseInt(students[course]);
        }
    }
    return students;
}

},{"./estudiante.js":"2YrAD","./predefinedStudents.js":"ayGWv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2YrAD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Student {
    constructor(Name){
        this.name = Name;
        this.coursesStudent = new Set();
        this.completedHomeworkIds = new Set();
        this.hoursFeedback = Object.create(null);
        this.stressFeedback = Object.create(null);
    }
    addCoursesToStudent(course) {
        this.coursesStudent.add(course);
    }
    addStressLevel(stress, hmwkId) {
        console.log("Setting Stress Level");
        this.stressFeedback[hmwkId] = stress;
    }
    getStressLevel(id) {
        return this.stressFeedback[id];
    }
    addFeedback(hours, hmwkId) {
        console.log("saving feedback");
        this.hoursFeedback[hmwkId] = hours;
    }
    getFeedBackhours(id) {
        return this.hoursFeedback[id];
    }
    getCoursesStudent() {
        return this.coursesStudent;
    }
    showAllEnrolledCourses() {
        let materias = "";
        this.coursesStudent.forEach((course)=>{
            materias += course + ", ";
        });
        return materias.substring(0, materias.length - 2);
    }
    completeHomework(id) {
        this.completedHomeworkIds.add(id);
    }
    getIfIdCompleted(id) {
        return this.completedHomeworkIds.has(id);
    }
    getName() {
        return this.name;
    }
}
exports.default = Student;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ayGWv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "combineDicts", ()=>combineDicts);
let dictTechWeb = {
    "course": "TECNOLOGIAS WEB",
    "students": [
        "Aguilar Alcocer, Dayan",
        "Aliss Arteaga, Francisco Gabriel",
        "Balderrama Vargas, Gabriel Ichiro",
        "Bustamante Jaldin, Sergio",
        "Camargo Aramayo, Maria Belen",
        "Canapi Madrid, Cristian Said",
        "Cari Rodriguez, Nicolas",
        "Garcia Vacaflor, Jerson Alan",
        "Gonzalez Fernandez, Grover Leonardo",
        "Guardia Ramirez, Rodrigo",
        "Gutierrez Calizaya, Melina Aylem",
        "Riva Salinas, Paulo Ariel",
        "Rivero Arnez, Christian",
        "Rodriguez Alvarez, Noel Alejandro",
        "Roman Arevalo, Libia Nataly",
        "Roman Ledezma, Edwin Oswaldo"
    ]
};
let dictIoT = {
    "course": "INTERNET DE LAS COSAS",
    "students": [
        "Acero Rojas, Edwin Daniel",
        "Balderrama Vargas, Gabriel Ichiro",
        "Cari Rodriguez, Nicolas",
        "Diaz Crespo, Rene Dorian",
        "Escobar Herrada, Marco Fernando",
        "Fuentes Martinez, Aramis",
        "Garcia Arias, Alfred Brandon",
        "Guardia Ramirez, Rodrigo",
        "Lopez Soria, Jose Carlos",
        "Monta\xf1o Urquieta, Dieter",
        "Ortu\xf1o Prudencio, Jhonny Ricardo",
        "Rivero Arnez, Christian"
    ]
};
let dictRedes = {
    "course": "REDES DE COMPUTADORAS II",
    "students": [
        "Aguilera Cordero, Isabel Consuelo",
        "Aliss Arteaga, Francisco Gabriel",
        "Almendras Santa Cruz, Brian",
        "Balderrama Vargas, Gabriel Ichiro",
        "Camargo Aramayo, Maria Belen",
        "Cari Rodriguez, Nicolas",
        "Escobar Herrada, Marco Fernando",
        "Flores Lopez, Alejandro Santiago",
        "Fuentes Martinez, Aramis",
        "Garcia Arias, Alfred Brandon",
        "Lopez Soria, Jose Carlos",
        "Rivero Arnez, Christian",
        "Sanchez San Miguel, Jose Manuel",
        "Tarquino Cespedes, Adriana Valentina",
        "Vera Loza, Rosa Noelia"
    ]
};
let dictSisInfo = {
    "course": "SISTEMAS DE INFORMACION III",
    "students": [
        "Balderrama Vargas, Gabriel Ichiro",
        "Cari Rodriguez, Nicolas",
        "Copa Mejia, Daho Fabio",
        "Escobar Herrada, Marco Fernando",
        "Garcia Arias, Alfred Brandon",
        "Guardia Ramirez, Rodrigo",
        "Gutierrez Calizaya, Melina Aylem",
        "Lopez Soria, Jose Carlos",
        "Mamani Perez, Sandra Jael",
        "Rivero Arnez, Christian",
        "Salazar Aramayo, Luis Felipe",
        "Salazar Villegas, Luis Sebastian",
        "Sanchez San Miguel, Jose Manuel",
        "Tarquino Cespedes, Adriana Valentina",
        "Terceros Ortega, Jonatan Gerson",
        "Torrico Hinojosa, Santiago Jose",
        "Uribe Tapia, Nicole Alejandra"
    ]
};
let dictIngSoft = {
    "course": "INGENIERIA DE SOFTWARE",
    "students": [
        "Aguayo Salas, Karen Pilar",
        "Asturizaga Garcia, Sebastian",
        "Balderrama Vargas, Gabriel Ichiro",
        "Cari Rodriguez, Nicolas",
        "Encinas Cabezas, Angy Alejandra",
        "Garcia Arias, Alfred Brandon",
        "Guardia Ramirez, Rodrigo",
        "Gutierrez Calizaya, Melina Aylem",
        "Lee Perez, Young Woang",
        "Rivero Arnez, Christian",
        "Rodriguez Coca, Alejandro Josue",
        "Rojas Reque, Kevin Yamil",
        "Torrico Hinojosa, Santiago Jose"
    ]
};
let dictAdmin = {
    "course": "ADMINISTRACION II",
    "students": [
        "Alavi Gutierrez, Dilan Alvaro",
        "Arze Mejia, Jaime Alberto",
        "Balderrama Mu\xf1oz, Wendy Isabel",
        "Bustamante Jaldin, Sergio",
        "Calvimonte Siles, Mariana",
        "Camargo Aramayo, Maria Belen",
        "Cari Rodriguez, Nicolas",
        "Crespo Romero, Melany",
        "Gamboa Monta\xf1o, Kevin",
        "Lazarte Cabero, Diego",
        "Mencia Cespedes, Tatiana Dayana",
        "Quiroga Zambrana, Marcelo Sergio",
        "Rivero Arnez, Christian",
        "Sanchez San Miguel, Jose Manuel",
        "Torrico Quilla, Gonzalo Nicolas",
        "Villegas Quiroga, Andres Sebastian"
    ]
};
let DictList = [];
function combineDicts() {
    DictList.push(dictTechWeb);
    DictList.push(dictIoT);
    DictList.push(dictRedes);
    DictList.push(dictSisInfo);
    DictList.push(dictIngSoft);
    DictList.push(dictAdmin);
    return DictList;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5yWV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadSampleData", ()=>loadSampleData);
parcelHelpers.export(exports, "getGeneratedProfessorArray", ()=>getGeneratedProfessorArray);
var _coursesController = require("./coursesController");
let coursesController = (0, _coursesController.CoursesControllerSingleton).getInstance();
let professorArrayRef = [];
function loadProfessorCredentials() {
    professorArrayRef.push("Antezana Rojas, Israel Gilberto");
    professorArrayRef.push("Rocabado Torrez, Jose Marcelo");
    professorArrayRef.push("Molina Arcienega, Luis Alberto");
    professorArrayRef.push("Marin Garcia, Eduardo Enrique");
    professorArrayRef.push("Beltran Mercado, Franz Osvaldo");
    professorArrayRef.push("Lopez Gumucio, Jorge Ricardo");
    professorArrayRef.push("test");
}
function createPredefinedCourses(coursesControllerRef) {
    coursesControllerRef.tryToCreateCourse("SIS-213", "INGENIERIA DE SOFTWARE", professorArrayRef[0]);
    coursesControllerRef.tryToCreateCourse("SIS-225", "SISTEMAS DE INFORMACION III", professorArrayRef[1]);
    coursesControllerRef.tryToCreateCourse("SIS-233", "REDES DE COMPUTADORAS II", professorArrayRef[2]);
    coursesControllerRef.tryToCreateCourse("SIS-234", "INTERNET DE LAS COSAS", professorArrayRef[3]);
    coursesControllerRef.tryToCreateCourse("SIS-241", "TECNOLOGIAS WEB", professorArrayRef[4]);
    coursesControllerRef.tryToCreateCourse("ADM-112", "ADMINISTRACION II", professorArrayRef[5]);
    coursesControllerRef.tryToCreateCourse("tst-142", "test", professorArrayRef[6]);
}
function createPredefinedHomework(coursesControllerRef) {
    let status = 0;
    coursesControllerRef.tryToCreateHomework("PRIMERA EVALUACION", "2023-01-01", "2023-01-02", "ADMINISTRACION II", 15);
    coursesControllerRef.tryToCreateHomework("Pr\xe1ctica 1", "2023-01-01", "2023-01-05", "INTERNET DE LAS COSAS", 4);
    coursesControllerRef.tryToCreateHomework("Pr\xe1ctica 2", "2023-01-01", "2023-01-06", "INTERNET DE LAS COSAS", 2);
    coursesControllerRef.tryToCreateHomework("Pr\xe1ctica 3", "2023-01-01", "2023-01-12", "INTERNET DE LAS COSAS", 20);
    coursesControllerRef.tryToCreateHomework("Cortina", "2023-01-10", "2023-01-12", "INTERNET DE LAS COSAS", 20);
    coursesControllerRef.tryToCreateHomework("Tour of Heroes", "2023-01-01", "2023-01-04", "TECNOLOGIAS WEB", 1);
    coursesControllerRef.tryToCreateHomework("Practica CRUD", "2023-01-01", "2023-01-20", "TECNOLOGIAS WEB", 3);
    coursesControllerRef.tryToCreateHomework("Examen 3", "2023-01-01", "2023-01-06", "REDES DE COMPUTADORAS II", 8);
    coursesControllerRef.tryToCreateHomework("Proyecto Final", "2023-01-01", "2023-01-12", "REDES DE COMPUTADORAS II", 6);
    coursesControllerRef.tryToCreateHomework("Examen 4", "2023-01-01", "2023-01-07", "SISTEMAS DE INFORMACION III", 15);
    coursesControllerRef.tryToCreateHomework("Proyecto Final", "2023-01-01", "2023-01-12", "SISTEMAS DE INFORMACION III", 7);
    coursesControllerRef.tryToCreateHomework("1er Sprint Backlog - Trello", "2023-01-01", "2023-01-05", "INGENIERIA DE SOFTWARE", 10);
    coursesControllerRef.tryToCreateHomework("Entregables 1ra Iteracion", "2023-01-01", "2023-01-12", "INGENIERIA DE SOFTWARE", 11);
    coursesControllerRef.tryToCreateHomework("Entrega Proyecto Final", "2023-01-01", "2023-01-20", "INGENIERIA DE SOFTWARE", 8);
}
function loadSampleData() {
    loadProfessorCredentials();
    createPredefinedCourses(coursesController);
    createPredefinedHomework(coursesController);
}
function getGeneratedProfessorArray() {
    return professorArrayRef;
}

},{"./coursesController":"fT3YC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fT3YC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CoursesControllerSingleton", ()=>CoursesControllerSingleton);
var _errorCodes = require("./errorCodes");
var _courses = require("./Courses");
var _studentListJs = require("./studentList.js");
class CoursesController extends (0, _courses.Courses) {
    constructor(){
        super();
        this.homeworkId = 0;
    }
    tryToModifyHomework(idModif, hmwkName, dateInit, dateFin, courseNameModif) {
        let status = this.#validateHomeworksInput(dateFin, dateInit);
        if (status == _errorCodes.OK) this.modifyHomework(idModif, hmwkName, dateInit, dateFin, courseNameModif);
        return status;
    }
    tryToCreateCourse(CourseInitials, CourseName, Teacher) {
        this.createCourse(CourseInitials, CourseName, Teacher);
    }
    tryToCreateHomework(hmwkName, dateInit, dateFin, courseName, hoursNeeded) {
        let status = this.#validateHomeworksInput(dateFin, dateInit);
        if (status == _errorCodes.OK) {
            hoursNeeded = parseInt(hoursNeeded);
            let createdHmwk = this.createHomework(hmwkName, dateInit, dateFin, courseName, hoursNeeded, this.homeworkId);
            if (createdHmwk != _errorCodes.CourseNotFound) {
                this.homeworkId++;
                return _errorCodes.OK;
            } else return _errorCodes.CourseNotFound;
        }
        return status;
    }
    getAllHomeworksByDate(coursesThatStudentsPasses) {
        let CourseNames = this.getCourseNames();
        let HomeworksArray = [];
        CourseNames.forEach((CourseName)=>{
            if (coursesThatStudentsPasses.has(CourseName)) HomeworksArray = HomeworksArray.concat(this.getCourseHomeworks(CourseName));
        });
        return this.getdaysWithHomework(HomeworksArray);
    }
    getStudentHomeworksByDate(coursesEnlisted) {
        let CourseNames = (0, _studentListJs.getCoursesFromAllStudents)();
        let HomeworksArray = [];
        CourseNames.forEach((CourseName)=>{
            if (coursesEnlisted.has(CourseName)) HomeworksArray = HomeworksArray.concat(this.getCourseHomeworks(CourseName));
        });
        return this.getdaysWithHomework(HomeworksArray);
    }
    getStudentHomeworksByDate(coursesEnlisted) {
        let CourseNames = (0, _studentListJs.getCoursesFromAllStudents)();
        let HomeworksArray = [];
        CourseNames.forEach((CourseName)=>{
            if (coursesEnlisted.has(CourseName)) HomeworksArray = HomeworksArray.concat(this.getCourseHomeworks(CourseName));
        });
        return this.getdaysWithHomework(HomeworksArray);
    }
    getStudentHomeworkByClass(course) {
        let assigmentArray = [];
        assigmentArray = assigmentArray.concat(this.getCourseHomeworks(course));
        return this.getdaysWithHomework(assigmentArray);
    }
    getdaysWithHomework(homeworks) {
        let daysWithHomework = {};
        for(let j = 0; j < homeworks.length; j++)if (daysWithHomework[homeworks[j].getDateFin()] == undefined) daysWithHomework[homeworks[j].getDateFin()] = [
            homeworks[j]
        ];
        else daysWithHomework[homeworks[j].getDateFin()].push(homeworks[j]);
        return daysWithHomework;
    }
     #validateHomeworksInput(dateFin, dateInit) {
        let status = 0;
        let today = new Date();
        if (this.#checkIfDate1IsLowerThan2(today, dateFin) == false) status = _errorCodes.DeadlineAlreadyPassed;
        if (this.#checkIfDate1IsLowerThan2(dateInit, dateFin) == false) status = _errorCodes.DeadlineCantBeLowerThanInit;
        return status;
    }
     #checkIfDate1IsLowerThan2(date1, date2) {
        date1 = new Date(date1);
        date2 = new Date(date2);
        if (date1 - date2 <= 0) return true;
        else return false;
    }
}
let CoursesControllerSingleton = function() {
    let instance;
    function createInstance() {
        let object = new CoursesController();
        return object;
    }
    return {
        getInstance: function() {
            if (!instance) instance = createInstance();
            return instance;
        }
    };
}();

},{"./errorCodes":"7XpT9","./Courses":"hWslP","./studentList.js":"2nFcC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7XpT9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OK", ()=>OK);
parcelHelpers.export(exports, "CourseNotFound", ()=>CourseNotFound);
parcelHelpers.export(exports, "HomeworkNotFound", ()=>HomeworkNotFound);
parcelHelpers.export(exports, "DeadlineAlreadyPassed", ()=>DeadlineAlreadyPassed);
parcelHelpers.export(exports, "DeadlineCantBeLowerThanInit", ()=>DeadlineCantBeLowerThanInit);
const OK = 0;
const CourseNotFound = "CourseNoFound";
const HomeworkNotFound = 2;
const DeadlineAlreadyPassed = 3;
const DeadlineCantBeLowerThanInit = 4;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hWslP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Courses", ()=>Courses);
var _homeworkJs = require("./homework.js");
var _homeworkJsDefault = parcelHelpers.interopDefault(_homeworkJs);
var _courseJs = require("./Course.js");
var _courseJsDefault = parcelHelpers.interopDefault(_courseJs);
var _errorCodes = require("./errorCodes");
const CourseNotFound = 1;
const HomeworkNotFound = 2;
class Courses {
    constructor(){
        this.courses = {};
    }
    createHomework(name, dateInit, dateFin, courseName, hoursNeeded, id) {
        let task = new (0, _homeworkJsDefault.default)(name, dateInit, dateFin, courseName, hoursNeeded, id);
        if (this.courses[courseName]) {
            this.courses[courseName].addHomework(task);
            return task.getHomeworkObj();
        }
        return _errorCodes.CourseNotFound;
    }
    getCourseNames() {
        return Object.keys(this.courses);
    }
    getCourseHomeworks(courseName) {
        if (this.courses[courseName]) return this.courses[courseName].getHomeworkArray();
        return CourseNotFound;
    }
    getHomeworkBasedOnId(id) {
        for(const courseName in this.courses){
            let CourseHomeworks = this.courses[courseName].getHomeworkArray();
            for(let HomeworkIndex = 0; HomeworkIndex < CourseHomeworks.length; HomeworkIndex++){
                if (CourseHomeworks[HomeworkIndex].getId() == id) return CourseHomeworks[HomeworkIndex];
            }
        }
        return HomeworkNotFound;
    }
    clearCourseHomeworks(courseName) {
        let status = CourseNotFound;
        if (this.courses[courseName]) {
            this.courses[courseName].clearHomeworks();
            status = 0;
        }
        return status;
    }
    createCourse(Initials, Name, TeachersName) {
        let course = new (0, _courseJsDefault.default)(Initials, Name, TeachersName);
        this.courses[Name] = course;
        return course.getCourseObj();
    }
    modifyHomework(id, name, dateInit, dateFin, CourseName) {
        let answer = CourseNotFound;
        if (this.courses[CourseName]) answer = this.courses[CourseName].modifyHomework(id, name, dateInit, dateFin);
        return answer;
    }
    markHmwkAsDone(id) {
        let hmwk = this.getHomeworkBasedOnId(id);
        hmwk.addToCompleted();
    }
    addFeedbackToAhmwk(feedback, hmwkId) {
        this.getHomeworkBasedOnId(hmwkId).addFeedback(feedback);
        console.log(this.getHomeworkBasedOnId(hmwkId));
    }
    getCourseByName(course) {
        for(const courseName in this.courses){
            let courseDetails = this.courses[courseName].getCourseObj();
            if (courseDetails["teachersName"] == course) return courseDetails["name"];
        }
        return CourseNotFound;
    }
    deleteHomework(courseName, homeworkId) {
        let status = _errorCodes.CourseNotFound;
        if (this.courses[courseName]) status = this.courses[courseName].deleteHomework(homeworkId);
        return status;
    }
    getHoursToComplete(sameDateHomeworks) {
        let hoursNeeded = 0;
        sameDateHomeworks.forEach((Homework)=>{
            hoursNeeded += Homework.getHoursPerDay();
        });
        return hoursNeeded;
    }
}

},{"./homework.js":"7myI2","./Course.js":"8yi45","./errorCodes":"7XpT9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7myI2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Homework {
    constructor(name, dateInit, dateFin, courseName, hoursNeeded, id){
        this.name = name;
        this.dateInit = dateInit;
        this.dateFin = dateFin;
        this.courseName = courseName;
        this.hoursNeeded = hoursNeeded;
        this.id = id;
        this.timesCompleted = 0;
        this.homeworkFeedbacks = [];
    }
    addFeedback(feedback) {
        this.homeworkFeedbacks.push(feedback);
    }
    getFeedback() {
        return this.homeworkFeedbacks;
    }
    sumFeedback() {
        let total = 0;
        let homeworkFeedback = this.homeworkFeedbacks;
        for(let i = 0; i < homeworkFeedback.length; i++)total = parseInt(homeworkFeedback[i]) + total;
        return total / this.homeworkFeedbacks.length;
    }
    getHomeworkObj() {
        return {
            name: this.name,
            id: this.id,
            dateInit: this.dateInit,
            dateFin: this.dateFin,
            courseName: this.courseName,
            timesCompleted: this.timesCompleted = 0
        };
    }
    getId() {
        return this.id;
    }
    getDateFin() {
        return this.dateFin;
    }
    modifyAtts(name, dateInit, dateFin) {
        this.name = name;
        this.dateInit = dateInit;
        this.dateFin = dateFin;
    }
    getHoursPerDay() {
        let d1 = new Date(this.dateFin);
        let d2 = new Date(this.dateInit);
        let DaysDiff = Math.floor(Math.abs(d1 - d2) / 86400000);
        return this.hoursNeeded / DaysDiff;
    }
    addToCompleted() {
        this.timesCompleted += 1;
    }
    getTimesCompleted() {
        return this.timesCompleted;
    }
}
exports.default = Homework;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8yi45":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _courses = require("./Courses");
var _errorCodes = require("./errorCodes");
const HomeworkNotFound = 2;
class Course {
    constructor(Initials, Name, TeachersName){
        this.initials = Initials;
        this.name = Name;
        this.teachersName = TeachersName;
        this.Homeworks = [];
    }
    addHomework(homework) {
        this.Homeworks.push(homework);
    }
    getCourseObj() {
        return {
            initials: this.initials,
            name: this.name,
            teachersName: this.teachersName
        };
    }
    CompareName(Name) {
        return this.name == Name;
    }
    getHomeworkArray() {
        return this.Homeworks;
    }
    clearHomeworks() {
        this.Homeworks = [];
    }
    getHomeworkIndexById(id) {
        for(let HomeworkIndex = 0; HomeworkIndex < this.Homeworks.length; HomeworkIndex++){
            if (this.Homeworks[HomeworkIndex].getId() == id) return HomeworkIndex;
        }
        return -1;
    }
    modifyHomework(id, name, dateInit, dateFin) {
        let answer = HomeworkNotFound;
        let HomeworkIndex = this.getHomeworkIndexById(id);
        if (HomeworkIndex != -1) {
            this.Homeworks[HomeworkIndex].modifyAtts(name, dateInit, dateFin);
            answer = this.Homeworks[HomeworkIndex];
        }
        return answer;
    }
    deleteHomework(id) {
        let status;
        let HomeworkIndex = this.getHomeworkIndexById(id);
        if (HomeworkIndex != -1) {
            this.Homeworks.splice(HomeworkIndex, 1);
            status = this.getHomeworkArray().length;
        } else status = _errorCodes.HomeworkNotFound;
        return status;
    }
}
exports.default = Course;

},{"./Courses":"hWslP","./errorCodes":"7XpT9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gkoGO","jZ78i"], "jZ78i", "parcelRequirec771")

//# sourceMappingURL=index.87ae31f1.js.map
