"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.YEAR_DECADE_COUNT = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _YearHeader = _interopRequireDefault(require("./YearHeader"));
var _YearBody = _interopRequireWildcard(require("./YearBody"));
var _uiUtil = require("../../utils/uiUtil");
var _useMergeProps = _interopRequireDefault(require("../../hooks/useMergeProps"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const YEAR_DECADE_COUNT = 10;
exports.YEAR_DECADE_COUNT = YEAR_DECADE_COUNT;
function YearPanel(_props) {
  const props = (0, _useMergeProps.default)(_props);
  const {
    prefixCls,
    operationRef,
    onViewDateChange,
    generateConfig,
    value,
    viewDate,
    sourceMode,
    onSelect,
    onPanelChange
  } = props;
  const panelPrefixCls = `${prefixCls}-year-panel`;
  // ======================= Keyboard =======================
  operationRef.value = {
    onKeydown: event => (0, _uiUtil.createKeydownHandler)(event, {
      onLeftRight: diff => {
        onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
      },
      onCtrlLeftRight: diff => {
        onSelect(generateConfig.addYear(value || viewDate, diff * YEAR_DECADE_COUNT), 'key');
      },
      onUpDown: diff => {
        onSelect(generateConfig.addYear(value || viewDate, diff * _YearBody.YEAR_COL_COUNT), 'key');
      },
      onEnter: () => {
        onPanelChange(sourceMode === 'date' ? 'date' : 'month', value || viewDate);
      }
    })
  };
  // ==================== View Operation ====================
  const onDecadeChange = diff => {
    const newDate = generateConfig.addYear(viewDate, diff * 10);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return (0, _vue.createVNode)("div", {
    "class": panelPrefixCls
  }, [(0, _vue.createVNode)(_YearHeader.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "prefixCls": prefixCls,
    "onPrevDecade": () => {
      onDecadeChange(-1);
    },
    "onNextDecade": () => {
      onDecadeChange(1);
    },
    "onDecadeClick": () => {
      onPanelChange('decade', viewDate);
    }
  }), null), (0, _vue.createVNode)(_YearBody.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "prefixCls": prefixCls,
    "onSelect": date => {
      onPanelChange(sourceMode === 'date' ? 'date' : 'month', date);
      onSelect(date, 'mouse');
    }
  }), null)]);
}
YearPanel.displayName = 'YearPanel';
YearPanel.inheritAttrs = false;
var _default = YearPanel;
exports.default = _default;