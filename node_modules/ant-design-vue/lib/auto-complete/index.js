"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.autoCompleteProps = exports.AutoCompleteOption = exports.AutoCompleteOptGroup = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _select = _interopRequireWildcard(require("../select"));
var _propsUtil = require("../_util/props-util");
var _warning = _interopRequireDefault(require("../_util/warning"));
var _Option = _interopRequireDefault(require("./Option"));
var _OptGroup = _interopRequireDefault(require("./OptGroup"));
var _omit = _interopRequireDefault(require("../_util/omit"));
var _useConfigInject = _interopRequireDefault(require("../config-provider/hooks/useConfigInject"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function isSelectOptionOrSelectOptGroup(child) {
  var _a, _b;
  return ((_a = child === null || child === void 0 ? void 0 : child.type) === null || _a === void 0 ? void 0 : _a.isSelectOption) || ((_b = child === null || child === void 0 ? void 0 : child.type) === null || _b === void 0 ? void 0 : _b.isSelectOptGroup);
}
const autoCompleteProps = () => (0, _extends2.default)((0, _extends2.default)({}, (0, _omit.default)((0, _select.selectProps)(), ['loading', 'mode', 'optionLabelProp', 'labelInValue'])), {
  dataSource: Array,
  dropdownMenuStyle: {
    type: Object,
    default: undefined
  },
  // optionLabelProp: String,
  dropdownMatchSelectWidth: {
    type: [Number, Boolean],
    default: true
  },
  prefixCls: String,
  showSearch: {
    type: Boolean,
    default: undefined
  },
  transitionName: String,
  choiceTransitionName: {
    type: String,
    default: 'zoom'
  },
  autofocus: {
    type: Boolean,
    default: undefined
  },
  backfill: {
    type: Boolean,
    default: undefined
  },
  // optionLabelProp: PropTypes.string.def('children'),
  filterOption: {
    type: [Boolean, Function],
    default: false
  },
  defaultActiveFirstOption: {
    type: Boolean,
    default: true
  },
  status: String
});
exports.autoCompleteProps = autoCompleteProps;
const AutoCompleteOption = _Option.default;
exports.AutoCompleteOption = AutoCompleteOption;
const AutoCompleteOptGroup = _OptGroup.default;
exports.AutoCompleteOptGroup = AutoCompleteOptGroup;
const AutoComplete = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'AAutoComplete',
  inheritAttrs: false,
  props: autoCompleteProps(),
  // emits: ['change', 'select', 'focus', 'blur'],
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      attrs,
      expose
    } = _ref;
    (0, _warning.default)(!('dataSource' in slots), 'AutoComplete', '`dataSource` slot is deprecated, please use props `options` instead.');
    (0, _warning.default)(!('options' in slots), 'AutoComplete', '`options` slot is deprecated, please use props `options` instead.');
    (0, _warning.default)(!props.dropdownClassName, 'AutoComplete', '`dropdownClassName` is deprecated, please use `popupClassName` instead.');
    const selectRef = (0, _vue.ref)();
    const getInputElement = () => {
      var _a;
      const children = (0, _propsUtil.flattenChildren)((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      const element = children.length ? children[0] : undefined;
      return element;
    };
    const focus = () => {
      var _a;
      (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    const {
      prefixCls
    } = (0, _useConfigInject.default)('select', props);
    return () => {
      var _a, _b, _c;
      const {
        size,
        dataSource,
        notFoundContent = (_a = slots.notFoundContent) === null || _a === void 0 ? void 0 : _a.call(slots)
      } = props;
      let optionChildren;
      const {
        class: className
      } = attrs;
      const cls = {
        [className]: !!className,
        [`${prefixCls.value}-lg`]: size === 'large',
        [`${prefixCls.value}-sm`]: size === 'small',
        [`${prefixCls.value}-show-search`]: true,
        [`${prefixCls.value}-auto-complete`]: true
      };
      if (props.options === undefined) {
        const childArray = ((_b = slots.dataSource) === null || _b === void 0 ? void 0 : _b.call(slots)) || ((_c = slots.options) === null || _c === void 0 ? void 0 : _c.call(slots)) || [];
        if (childArray.length && isSelectOptionOrSelectOptGroup(childArray[0])) {
          optionChildren = childArray;
        } else {
          optionChildren = dataSource ? dataSource.map(item => {
            if ((0, _propsUtil.isValidElement)(item)) {
              return item;
            }
            switch (typeof item) {
              case 'string':
                return (0, _vue.createVNode)(_Option.default, {
                  "key": item,
                  "value": item
                }, {
                  default: () => [item]
                });
              case 'object':
                return (0, _vue.createVNode)(_Option.default, {
                  "key": item.value,
                  "value": item.value
                }, {
                  default: () => [item.text]
                });
              default:
                throw new Error('AutoComplete[dataSource] only supports type `string[] | Object[]`.');
            }
          }) : [];
        }
      }
      const selectProps = (0, _omit.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, props), attrs), {
        mode: _select.default.SECRET_COMBOBOX_MODE_DO_NOT_USE,
        // optionLabelProp,
        getInputElement,
        notFoundContent,
        // placeholder: '',
        class: cls,
        popupClassName: props.popupClassName || props.dropdownClassName,
        ref: selectRef
      }), ['dataSource', 'loading']);
      return (0, _vue.createVNode)(_select.default, selectProps, (0, _objectSpread2.default)({
        default: () => [optionChildren]
      }, (0, _omit.default)(slots, ['default', 'dataSource', 'options'])));
    };
  }
});
/* istanbul ignore next */
var _default = (0, _extends2.default)(AutoComplete, {
  Option: _Option.default,
  OptGroup: _OptGroup.default,
  install(app) {
    app.component(AutoComplete.name, AutoComplete);
    app.component(_Option.default.displayName, _Option.default);
    app.component(_OptGroup.default.displayName, _OptGroup.default);
    return app;
  }
});
exports.default = _default;