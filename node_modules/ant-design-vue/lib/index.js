"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  install: true,
  version: true,
  cssinjs: true,
  theme: true
};
Object.defineProperty(exports, "cssinjs", {
  enumerable: true,
  get: function () {
    return _cssinjs.default;
  }
});
exports.install = exports.default = void 0;
Object.defineProperty(exports, "theme", {
  enumerable: true,
  get: function () {
    return _theme.default;
  }
});
Object.defineProperty(exports, "version", {
  enumerable: true,
  get: function () {
    return _version.default;
  }
});
var components = _interopRequireWildcard(require("./components"));
Object.keys(components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === components[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return components[key];
    }
  });
});
var _version = _interopRequireDefault(require("./version"));
var _cssinjs = _interopRequireWildcard(require("./_util/cssinjs"));
Object.keys(_cssinjs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _cssinjs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cssinjs[key];
    }
  });
});
var _theme = _interopRequireDefault(require("./theme"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const install = function (app) {
  Object.keys(components).forEach(key => {
    const component = components[key];
    if (component.install) {
      app.use(component);
    }
  });
  app.use(_cssinjs.default.StyleProvider);
  app.config.globalProperties.$message = components.message;
  app.config.globalProperties.$notification = components.notification;
  app.config.globalProperties.$info = components.Modal.info;
  app.config.globalProperties.$success = components.Modal.success;
  app.config.globalProperties.$error = components.Modal.error;
  app.config.globalProperties.$warning = components.Modal.warning;
  app.config.globalProperties.$confirm = components.Modal.confirm;
  app.config.globalProperties.$destroyAll = components.Modal.destroyAll;
  return app;
};
exports.install = install;
var _default = {
  version: _version.default,
  install
};
exports.default = _default;