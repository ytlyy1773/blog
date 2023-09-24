"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LayoutSider = exports.LayoutHeader = exports.LayoutFooter = exports.LayoutContent = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _layout = _interopRequireWildcard(require("./layout"));
var _Sider = _interopRequireDefault(require("./Sider"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* istanbul ignore next */
const LayoutHeader = _layout.Header;
exports.LayoutHeader = LayoutHeader;
const LayoutFooter = _layout.Footer;
exports.LayoutFooter = LayoutFooter;
const LayoutSider = _Sider.default;
exports.LayoutSider = LayoutSider;
const LayoutContent = _layout.Content;
exports.LayoutContent = LayoutContent;
var _default = (0, _extends2.default)(_layout.default, {
  Header: _layout.Header,
  Footer: _layout.Footer,
  Content: _layout.Content,
  Sider: _Sider.default,
  install: app => {
    app.component(_layout.default.name, _layout.default);
    app.component(_layout.Header.name, _layout.Header);
    app.component(_layout.Footer.name, _layout.Footer);
    app.component(_Sider.default.name, _Sider.default);
    app.component(_layout.Content.name, _layout.Content);
    return app;
  }
});
exports.default = _default;