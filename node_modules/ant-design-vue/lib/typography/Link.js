"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkProps = exports.default = void 0;
var _vue = require("vue");
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _warning = _interopRequireDefault(require("../_util/warning"));
var _Base = _interopRequireWildcard(require("./Base"));
var _omit = _interopRequireDefault(require("../_util/omit"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const linkProps = () => (0, _omit.default)((0, _extends2.default)((0, _extends2.default)({}, (0, _Base.baseProps)()), {
  ellipsis: {
    type: Boolean,
    default: undefined
  }
}), ['component']);
exports.linkProps = linkProps;
const Link = (props, _ref) => {
  let {
    slots,
    attrs
  } = _ref;
  const _a = (0, _extends2.default)((0, _extends2.default)({}, props), attrs),
    {
      ellipsis,
      rel
    } = _a,
    restProps = __rest(_a, ["ellipsis", "rel"]);
  (0, _warning.default)(typeof ellipsis !== 'object', 'Typography.Link', '`ellipsis` only supports boolean value.');
  const mergedProps = (0, _extends2.default)((0, _extends2.default)({}, restProps), {
    rel: rel === undefined && restProps.target === '_blank' ? 'noopener noreferrer' : rel,
    ellipsis: !!ellipsis,
    component: 'a'
  });
  // https://github.com/ant-design/ant-design/issues/26622
  // @ts-ignore
  delete mergedProps.navigate;
  return (0, _vue.createVNode)(_Base.default, mergedProps, slots);
};
Link.displayName = 'ATypographyLink';
Link.inheritAttrs = false;
Link.props = linkProps();
var _default = Link;
exports.default = _default;