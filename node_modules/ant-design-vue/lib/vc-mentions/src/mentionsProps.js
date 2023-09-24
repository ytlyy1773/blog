"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vcMentionsProps = exports.mentionsProps = exports.defaultProps = exports.default = exports.PlaceMent = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _vueTypes = _interopRequireDefault(require("../../_util/vue-types"));
var _propsUtil = require("../../_util/props-util");
var _util = require("./util");
var _type = require("../../_util/type");
const PlaceMent = (0, _type.tuple)('top', 'bottom');
exports.PlaceMent = PlaceMent;
const mentionsProps = {
  autofocus: {
    type: Boolean,
    default: undefined
  },
  prefix: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.arrayOf(_vueTypes.default.string)]),
  prefixCls: String,
  value: String,
  disabled: {
    type: Boolean,
    default: undefined
  },
  split: String,
  transitionName: String,
  placement: _vueTypes.default.oneOf(PlaceMent),
  character: _vueTypes.default.any,
  characterRender: Function,
  filterOption: {
    type: [Boolean, Function]
  },
  validateSearch: Function,
  getPopupContainer: {
    type: Function
  },
  options: (0, _type.arrayType)(),
  loading: {
    type: Boolean,
    default: undefined
  },
  rows: [Number, String],
  direction: {
    type: String
  }
};
exports.mentionsProps = mentionsProps;
const vcMentionsProps = (0, _extends2.default)((0, _extends2.default)({}, mentionsProps), {
  dropdownClassName: String
});
exports.vcMentionsProps = vcMentionsProps;
const defaultProps = {
  prefix: '@',
  split: ' ',
  rows: 1,
  validateSearch: _util.validateSearch,
  filterOption: () => _util.filterOption
};
exports.defaultProps = defaultProps;
var _default = (0, _propsUtil.initDefaultProps)(vcMentionsProps, defaultProps);
exports.default = _default;