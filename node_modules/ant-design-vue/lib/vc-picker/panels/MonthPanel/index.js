"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _MonthHeader = _interopRequireDefault(require("./MonthHeader"));
var _MonthBody = _interopRequireWildcard(require("./MonthBody"));
var _uiUtil = require("../../utils/uiUtil");
var _useMergeProps = _interopRequireDefault(require("../../hooks/useMergeProps"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function MonthPanel(_props) {
  const props = (0, _useMergeProps.default)(_props);
  const {
    prefixCls,
    operationRef,
    onViewDateChange,
    generateConfig,
    value,
    viewDate,
    onPanelChange,
    onSelect
  } = props;
  const panelPrefixCls = `${prefixCls}-month-panel`;
  // ======================= Keyboard =======================
  operationRef.value = {
    onKeydown: event => (0, _uiUtil.createKeydownHandler)(event, {
      onLeftRight: diff => {
        onSelect(generateConfig.addMonth(value || viewDate, diff), 'key');
      },
      onCtrlLeftRight: diff => {
        onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
      },
      onUpDown: diff => {
        onSelect(generateConfig.addMonth(value || viewDate, diff * _MonthBody.MONTH_COL_COUNT), 'key');
      },
      onEnter: () => {
        onPanelChange('date', value || viewDate);
      }
    })
  };
  // ==================== View Operation ====================
  const onYearChange = diff => {
    const newDate = generateConfig.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return (0, _vue.createVNode)("div", {
    "class": panelPrefixCls
  }, [(0, _vue.createVNode)(_MonthHeader.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "prefixCls": prefixCls,
    "onPrevYear": () => {
      onYearChange(-1);
    },
    "onNextYear": () => {
      onYearChange(1);
    },
    "onYearClick": () => {
      onPanelChange('year', viewDate);
    }
  }), null), (0, _vue.createVNode)(_MonthBody.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "prefixCls": prefixCls,
    "onSelect": date => {
      onSelect(date, 'mouse');
      onPanelChange('date', date);
    }
  }), null)]);
}
MonthPanel.displayName = 'MonthPanel';
MonthPanel.inheritAttrs = false;
var _default = MonthPanel;
exports.default = _default;