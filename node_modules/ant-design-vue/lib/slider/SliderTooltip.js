"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _tooltip = _interopRequireWildcard(require("../tooltip"));
var _raf = _interopRequireDefault(require("../_util/raf"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'SliderTooltip',
  inheritAttrs: false,
  props: (0, _tooltip.tooltipProps)(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const innerRef = (0, _vue.ref)(null);
    const rafRef = (0, _vue.ref)(null);
    function cancelKeepAlign() {
      _raf.default.cancel(rafRef.value);
      rafRef.value = null;
    }
    function keepAlign() {
      rafRef.value = (0, _raf.default)(() => {
        var _a;
        (_a = innerRef.value) === null || _a === void 0 ? void 0 : _a.forcePopupAlign();
        rafRef.value = null;
      });
    }
    const align = () => {
      cancelKeepAlign();
      if (props.open) {
        keepAlign();
      }
    };
    (0, _vue.watch)([() => props.open, () => props.title], () => {
      align();
    }, {
      flush: 'post',
      immediate: true
    });
    (0, _vue.onActivated)(() => {
      align();
    });
    (0, _vue.onBeforeUnmount)(() => {
      cancelKeepAlign();
    });
    return () => {
      return (0, _vue.createVNode)(_tooltip.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        "ref": innerRef
      }, props), attrs), slots);
    };
  }
});
exports.default = _default;