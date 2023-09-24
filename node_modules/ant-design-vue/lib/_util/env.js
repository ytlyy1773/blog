"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPhantomJS = exports.isIE9 = exports.isIE = exports.isFF = exports.isEdge = exports.isChrome = exports.inBrowser = exports.UA = void 0;
/* eslint-disable no-undef */
// Browser environment sniffing
const inBrowser = typeof window !== 'undefined';
exports.inBrowser = inBrowser;
const UA = inBrowser && window.navigator.userAgent.toLowerCase();
exports.UA = UA;
const isIE = UA && /msie|trident/.test(UA);
exports.isIE = isIE;
const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
exports.isIE9 = isIE9;
const isEdge = UA && UA.indexOf('edge/') > 0;
exports.isEdge = isEdge;
const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
exports.isChrome = isChrome;
const isPhantomJS = UA && /phantomjs/.test(UA);
exports.isPhantomJS = isPhantomJS;
const isFF = UA && UA.match(/firefox\/(\d+)/);
exports.isFF = isFF;