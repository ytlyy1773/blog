"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultWindow = exports.defaultNavigator = exports.defaultLocation = exports.defaultDocument = void 0;
var _is = require("./is");
const defaultWindow = /* #__PURE__ */_is.isClient ? window : undefined;
exports.defaultWindow = defaultWindow;
const defaultDocument = /* #__PURE__ */_is.isClient ? window.document : undefined;
exports.defaultDocument = defaultDocument;
const defaultNavigator = /* #__PURE__ */_is.isClient ? window.navigator : undefined;
exports.defaultNavigator = defaultNavigator;
const defaultLocation = /* #__PURE__ */_is.isClient ? window.location : undefined;
exports.defaultLocation = defaultLocation;