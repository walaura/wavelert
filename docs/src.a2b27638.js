// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"src/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$element = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var $element = function $element(el) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var $el = document.createElement(el);
  Object.entries(props).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    if (k === 'onCreateElement') {
      v();
    }

    if (k.substring(0, 2) === 'on') {
      $el.addEventListener(k.substring(2).toLowerCase(), v);
    } else {
      $el.setAttribute(k, v);
    }
  });
  if (!Array.isArray(children)) children = [children];
  children.filter(function ($child) {
    return !!$child;
  }).forEach(function ($child) {
    if (typeof $child === 'string' || typeof $child === 'number') {
      $el.appendChild(document.createTextNode($child));
    } else {
      $el.appendChild($child);
    }
  });
  return $el;
};

exports.$element = $element;
},{}],"node_modules/parcel/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel/src/builtins/bundle-url.js"}],"src/global/WaveWindow.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "wrapper": "_wrapper_1noln_1",
  "window": "_window_1noln_39 _surface_1iiae_1",
  "windowTitle": "_windowTitle_1noln_57",
  "titleButton": "_titleButton_1noln_83 _surface_1iiae_1"
};
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"src/static/close.gif":[function(require,module,exports) {
module.exports = "/close.0a726be5.gif";
},{}],"src/global/WaveWindow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WaveWindow = void 0;

var _util = require("../util");

var _WaveWindow = require("./WaveWindow.css");

var _close = _interopRequireDefault(require("../static/close.gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var maxZIndex = 10;

var createTitle = function createTitle(_ref) {
  var title = _ref.title,
      onMove = _ref.onMove,
      onMoveStart = _ref.onMoveStart,
      onClose = _ref.onClose;
  var mousedown = false;
  var pos = [0, 0];
  var $title = (0, _util.$element)('header', {
    class: _WaveWindow.windowTitle
  }, [title, (0, _util.$element)('button', {
    class: _WaveWindow.titleButton,
    onClick: onClose
  }, (0, _util.$element)('img', {
    src: _close.default
  }))]);
  $title.addEventListener('mousedown', function (ev) {
    pos = [ev.pageX, ev.pageY];
    onMoveStart();
    mousedown = true;
  });
  window.addEventListener('mouseup', function () {
    mousedown = false;
  });
  window.addEventListener('mousemove', function (_ref2) {
    var pageX = _ref2.pageX,
        pageY = _ref2.pageY;

    if (mousedown) {
      var _pos = pos,
          _pos2 = _slicedToArray(_pos, 2),
          originalX = _pos2[0],
          originalY = _pos2[1];

      onMove(pageX - originalX, pageY - originalY);
    }
  });
  return $title;
};

var WaveWindow = function WaveWindow(_ref3, children) {
  var title = _ref3.title,
      dark = _ref3.dark,
      width = _ref3.width,
      height = _ref3.height,
      onClose = _ref3.onClose,
      theme = _ref3.theme;
  var position = [0, 0];

  var lockedPosition = _toConsumableArray(position);

  var $window = (0, _util.$element)('dialog', {
    class: _WaveWindow.window,
    tabIndex: 0
  }, [(0, _util.$element)('main', {}, children)]);
  var $title = createTitle({
    title: title,
    onMoveStart: function onMoveStart() {
      lockedPosition = _toConsumableArray(position);
    },
    onMove: function onMove(x, y) {
      position = [lockedPosition[0] + x, lockedPosition[1] + y];
      $window.style.transform = "translateX(".concat(position[0], "px) translateY(").concat(position[1], "px)");
    },
    onClose: onClose
  });
  $window.prepend($title);
  var $wrapper = (0, _util.$element)('div', {
    class: _WaveWindow.wrapper,
    'data-dark': dark,
    'data-theme': theme
  }, [$window]);

  if (width) {
    $window.style.width = width + 'px';
  }

  if (height) {
    $window.style.height = height + 'px';
  }

  $wrapper.activate = function () {
    requestAnimationFrame(function () {
      var $firstButton = $window.querySelector('main button');

      if ($firstButton) {
        $firstButton.focus();
      } else {
        $window.focus();
      }
    });
  };

  $window.addEventListener('focus', function () {
    maxZIndex++;
    $wrapper.style.zIndex = maxZIndex;
  });
  return $wrapper;
};

exports.WaveWindow = WaveWindow;
},{"../util":"src/util.js","./WaveWindow.css":"src/global/WaveWindow.css","../static/close.gif":"src/static/close.gif"}],"src/global/Dialog.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "dialog": "_dialog_l6qn5_1",
  "message": "_message_l6qn5_5",
  "buttons": "_buttons_l6qn5_17"
};
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"src/static/glyph.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "glyph": "_glyph_1xas1_1"
};
},{"./close.gif":[["close.0a726be5.gif","src/static/close.gif"],"src/static/close.gif"],"./alert.png":[["alert.6215773a.png","src/static/alert.png"],"src/static/alert.png"],"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"src/global/Dialog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dialog = void 0;

var _util = require("../util");

var _Dialog = require("./Dialog.css");

var _glyph = require("../static/glyph.css");

var Dialog = function Dialog(_ref) {
  var buttons = _ref.buttons,
      icon = _ref.icon,
      text = _ref.text;

  if (!text) {
    text = 'The window at ' + window.location.href + ' says nothing';
  }

  var $dialog = (0, _util.$element)('div', {
    class: _Dialog.dialog
  }, [(0, _util.$element)('div', {
    class: _Dialog.message,
    'data-icon': !!icon
  }, [icon && (0, _util.$element)('span', {
    class: _glyph.glyph,
    'data-glyph': icon
  }), text]), (0, _util.$element)('div', {
    class: _Dialog.buttons
  }, buttons)]);
  return $dialog;
};

exports.Dialog = Dialog;
},{"../util":"src/util.js","./Dialog.css":"src/global/Dialog.css","../static/glyph.css":"src/static/glyph.css"}],"src/global/Button.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "button": "_button_p4ioe_1 _surface_1iiae_1"
};
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"src/global/Button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _util = require("../util");

var _Button = require("./Button.css");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = function Button(props, children) {
  return (0, _util.$element)('button', _objectSpread({
    class: _Button.button
  }, props), children);
};

exports.Button = Button;
},{"../util":"src/util.js","./Button.css":"src/global/Button.css"}],"src/global/Alert.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = void 0;

var _Dialog = require("./Dialog");

var _Button = require("./Button");

var Alert = function Alert(_ref) {
  var icon = _ref.icon,
      text = _ref.text,
      onClose = _ref.onClose;
  return (0, _Dialog.Dialog)({
    buttons: [(0, _Button.Button)({
      onClick: function onClick() {
        onClose(true);
      }
    }, 'OK')],
    icon: icon,
    text: text
  });
};

exports.Alert = Alert;
},{"./Dialog":"src/global/Dialog.js","./Button":"src/global/Button.js"}],"src/global/Confirm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Confirm = void 0;

var _Dialog = require("./Dialog");

var _Button = require("./Button");

var Confirm = function Confirm(_ref) {
  var icon = _ref.icon,
      text = _ref.text,
      onClose = _ref.onClose;
  return (0, _Dialog.Dialog)({
    buttons: [(0, _Button.Button)({
      onClick: function onClick() {
        onClose(true);
      }
    }, 'OK'), (0, _Button.Button)({
      onClick: function onClick() {
        onClose(false);
      }
    }, 'Cancel')],
    icon: icon,
    text: text
  });
};

exports.Confirm = Confirm;
},{"./Dialog":"src/global/Dialog.js","./Button":"src/global/Button.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "WaveWindow", {
  enumerable: true,
  get: function () {
    return _WaveWindow.WaveWindow;
  }
});
Object.defineProperty(exports, "Dialog", {
  enumerable: true,
  get: function () {
    return _Dialog.Dialog;
  }
});
Object.defineProperty(exports, "Alert", {
  enumerable: true,
  get: function () {
    return _Alert2.Alert;
  }
});
Object.defineProperty(exports, "Confirm", {
  enumerable: true,
  get: function () {
    return _Confirm2.Confirm;
  }
});
exports.promisified = void 0;

var _WaveWindow = require("./global/WaveWindow");

var _Dialog = require("./global/Dialog");

var _Alert2 = require("./global/Alert");

var _Confirm2 = require("./global/Confirm");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var withCloseWrapper = function withCloseWrapper(fn) {
  return function () {
    return new Promise(function (yay, nay) {
      var onClose = function onClose(state) {
        $item.remove();
        state ? yay() : nay();
      };

      var $item = fn(onClose);
      document.body.appendChild($item);

      if ($item.activate) {
        $item.activate();
      }
    });
  };
};

var promisified = {
  Alert: function Alert(_ref) {
    var props = Object.assign({}, _ref);
    return withCloseWrapper(function (closeWrapper) {
      return (0, _WaveWindow.WaveWindow)(_objectSpread({}, props, {
        onClose: function onClose() {
          return closeWrapper(false);
        }
      }), (0, _Alert2.Alert)(_objectSpread({}, props, {
        onClose: closeWrapper
      })));
    });
  },
  Confirm: function Confirm(_ref2) {
    var props = Object.assign({}, _ref2);
    return withCloseWrapper(function (closeWrapper) {
      return (0, _WaveWindow.WaveWindow)(_objectSpread({}, props, {
        onClose: function onClose() {
          return closeWrapper(false);
        }
      }), (0, _Confirm2.Confirm)(_objectSpread({}, props, {
        onClose: closeWrapper
      })));
    });
  }
};
exports.promisified = promisified;
},{"./global/WaveWindow":"src/global/WaveWindow.js","./global/Dialog":"src/global/Dialog.js","./global/Alert":"src/global/Alert.js","./global/Confirm":"src/global/Confirm.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49783" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","src/index.js"], "wavelert")
//# sourceMappingURL=/src.a2b27638.map