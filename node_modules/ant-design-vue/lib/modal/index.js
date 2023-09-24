"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Modal = _interopRequireDefault(require("./Modal"));
var _confirm = _interopRequireWildcard(require("./confirm"));
var _useModal = _interopRequireDefault(require("./useModal"));
var _destroyFns = _interopRequireDefault(require("./destroyFns"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function modalWarn(props) {
  return (0, _confirm.default)((0, _confirm.withWarn)(props));
}
_Modal.default.useModal = _useModal.default;
_Modal.default.info = function infoFn(props) {
  return (0, _confirm.default)((0, _confirm.withInfo)(props));
};
_Modal.default.success = function successFn(props) {
  return (0, _confirm.default)((0, _confirm.withSuccess)(props));
};
_Modal.default.error = function errorFn(props) {
  return (0, _confirm.default)((0, _confirm.withError)(props));
};
_Modal.default.warning = modalWarn;
_Modal.default.warn = modalWarn;
_Modal.default.confirm = function confirmFn(props) {
  return (0, _confirm.default)((0, _confirm.withConfirm)(props));
};
_Modal.default.destroyAll = function destroyAllFn() {
  while (_destroyFns.default.length) {
    const close = _destroyFns.default.pop();
    if (close) {
      close();
    }
  }
};
/* istanbul ignore next */
_Modal.default.install = function (app) {
  app.component(_Modal.default.name, _Modal.default);
  return app;
};
var _default = _Modal.default;
exports.default = _default;