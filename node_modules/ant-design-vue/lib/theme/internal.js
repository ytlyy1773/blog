"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DesignTokenProvider = void 0;
Object.defineProperty(exports, "PresetColors", {
  enumerable: true,
  get: function () {
    return _interface.PresetColors;
  }
});
exports.defaultConfig = void 0;
Object.defineProperty(exports, "genComponentStyleHook", {
  enumerable: true,
  get: function () {
    return _genComponentStyleHook.default;
  }
});
exports.globalDesignTokenApi = void 0;
Object.defineProperty(exports, "mergeToken", {
  enumerable: true,
  get: function () {
    return _statistic.merge;
  }
});
Object.defineProperty(exports, "statistic", {
  enumerable: true,
  get: function () {
    return _statistic.statistic;
  }
});
Object.defineProperty(exports, "statisticToken", {
  enumerable: true,
  get: function () {
    return _statistic.default;
  }
});
exports.useDesignTokenProvider = exports.useDesignTokenInject = void 0;
Object.defineProperty(exports, "useStyleRegister", {
  enumerable: true,
  get: function () {
    return _cssinjs.useStyleRegister;
  }
});
exports.useToken = useToken;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _cssinjs = require("../_util/cssinjs");
var _version = _interopRequireDefault(require("../version"));
var _interface = require("./interface");
var _default = _interopRequireDefault(require("./themes/default"));
var _seed = _interopRequireDefault(require("./themes/seed"));
var _alias = _interopRequireDefault(require("./util/alias"));
var _genComponentStyleHook = _interopRequireDefault(require("./util/genComponentStyleHook"));
var _statistic = _interopRequireWildcard(require("./util/statistic"));
var _type = require("../_util/type");
var _vue = require("vue");
var _toReactive = require("../_util/toReactive");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const defaultTheme = (0, _cssinjs.createTheme)(_default.default);
// ================================ Context =================================
// To ensure snapshot stable. We disable hashed in test env.
const defaultConfig = {
  token: _seed.default,
  hashed: true
};
//defaultConfig
exports.defaultConfig = defaultConfig;
const DesignTokenContextKey = Symbol('DesignTokenContext');
const globalDesignTokenApi = (0, _vue.ref)();
exports.globalDesignTokenApi = globalDesignTokenApi;
const useDesignTokenProvider = value => {
  (0, _vue.provide)(DesignTokenContextKey, value);
  (0, _vue.watchEffect)(() => {
    globalDesignTokenApi.value = value;
  });
};
exports.useDesignTokenProvider = useDesignTokenProvider;
const useDesignTokenInject = () => {
  return (0, _vue.inject)(DesignTokenContextKey, globalDesignTokenApi.value || defaultConfig);
};
exports.useDesignTokenInject = useDesignTokenInject;
const DesignTokenProvider = (0, _vue.defineComponent)({
  props: {
    value: (0, _type.objectType)()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useDesignTokenProvider((0, _toReactive.toReactive)((0, _vue.computed)(() => props.value)));
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
// ================================== Hook ==================================
exports.DesignTokenProvider = DesignTokenProvider;
function useToken() {
  const designTokenContext = (0, _vue.inject)(DesignTokenContextKey, globalDesignTokenApi.value || defaultConfig);
  const salt = (0, _vue.computed)(() => `${_version.default}-${designTokenContext.hashed || ''}`);
  const mergedTheme = (0, _vue.computed)(() => designTokenContext.theme || defaultTheme);
  const cacheToken = (0, _cssinjs.useCacheToken)(mergedTheme, (0, _vue.computed)(() => [_seed.default, designTokenContext.token]), (0, _vue.computed)(() => ({
    salt: salt.value,
    override: (0, _extends2.default)({
      override: designTokenContext.token
    }, designTokenContext.components),
    formatToken: _alias.default
  })));
  return [mergedTheme, (0, _vue.computed)(() => cacheToken.value[0]), (0, _vue.computed)(() => designTokenContext.hashed ? cacheToken.value[1] : '')];
}