"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProvideSummary = exports.useInjectSummary = exports.SummaryContextKey = void 0;
var _vue = require("vue");
const SummaryContextKey = Symbol('SummaryContextProps');
exports.SummaryContextKey = SummaryContextKey;
const useProvideSummary = props => {
  (0, _vue.provide)(SummaryContextKey, props);
};
exports.useProvideSummary = useProvideSummary;
const useInjectSummary = () => {
  return (0, _vue.inject)(SummaryContextKey, {});
};
exports.useInjectSummary = useInjectSummary;