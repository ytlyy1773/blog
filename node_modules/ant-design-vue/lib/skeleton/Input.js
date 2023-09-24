"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classNames = _interopRequireDefault(require("../_util/classNames"));
var _useConfigInject = _interopRequireDefault(require("../config-provider/hooks/useConfigInject"));
var _Element = _interopRequireWildcard(require("./Element"));
var _omit = _interopRequireDefault(require("../_util/omit"));
var _style = _interopRequireDefault(require("./style"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const SkeletonInput = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ASkeletonInput',
  props: (0, _extends2.default)((0, _extends2.default)({}, (0, _omit.default)((0, _Element.skeletonElementProps)(), ['shape'])), {
    size: String,
    block: Boolean
  }),
  setup(props) {
    const {
      prefixCls
    } = (0, _useConfigInject.default)('skeleton', props);
    const [wrapSSR, hashId] = (0, _style.default)(prefixCls);
    const cls = (0, _vue.computed)(() => (0, _classNames.default)(prefixCls.value, `${prefixCls.value}-element`, {
      [`${prefixCls.value}-active`]: props.active,
      [`${prefixCls.value}-block`]: props.block
    }, hashId.value));
    return () => {
      return wrapSSR((0, _vue.createVNode)("div", {
        "class": cls.value
      }, [(0, _vue.createVNode)(_Element.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
        "prefixCls": `${prefixCls.value}-input`
      }), null)]));
    };
  }
});
var _default = SkeletonInput;
exports.default = _default;