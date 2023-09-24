"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useWave;
var _propsUtil = require("../props-util");
var _WaveEffect = _interopRequireDefault(require("./WaveEffect"));
function useWave(instance, className) {
  function showWave() {
    const node = (0, _propsUtil.findDOMNode)(instance);
    (0, _WaveEffect.default)(node, className.value);
  }
  return showWave;
}