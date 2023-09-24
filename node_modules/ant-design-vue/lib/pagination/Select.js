"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MiddleSelect = void 0;
var _vue = require("vue");
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _select = _interopRequireWildcard(require("../select"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var _default = (0, _vue.defineComponent)({
  name: 'MiniSelect',
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: (0, _select.selectProps)(),
  Option: _select.default.Option,
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    return () => {
      const selelctProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, props), {
        size: 'small'
      }), attrs);
      return (0, _vue.createVNode)(_select.default, selelctProps, slots);
    };
  }
});
exports.default = _default;
const MiddleSelect = (0, _vue.defineComponent)({
  name: 'MiddleSelect',
  inheritAttrs: false,
  props: (0, _select.selectProps)(),
  Option: _select.default.Option,
  setup(props, _ref2) {
    let {
      attrs,
      slots
    } = _ref2;
    return () => {
      const selelctProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, props), {
        size: 'middle'
      }), attrs);
      return (0, _vue.createVNode)(_select.default, selelctProps, slots);
    };
  }
});
exports.MiddleSelect = MiddleSelect;