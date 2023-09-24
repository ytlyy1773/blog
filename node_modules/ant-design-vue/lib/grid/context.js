"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProvideRow = exports.useInjectRow = exports.default = exports.RowContextKey = void 0;
var _vue = require("vue");
const RowContextKey = Symbol('rowContextKey');
exports.RowContextKey = RowContextKey;
const useProvideRow = state => {
  (0, _vue.provide)(RowContextKey, state);
};
exports.useProvideRow = useProvideRow;
const useInjectRow = () => {
  return (0, _vue.inject)(RowContextKey, {
    gutter: (0, _vue.computed)(() => undefined),
    wrap: (0, _vue.computed)(() => undefined),
    supportFlexGap: (0, _vue.computed)(() => undefined)
  });
};
exports.useInjectRow = useInjectRow;
var _default = useProvideRow;
exports.default = _default;