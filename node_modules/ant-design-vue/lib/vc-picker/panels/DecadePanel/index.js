"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DECADE_UNIT_DIFF = exports.DECADE_DISTANCE_COUNT = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _DecadeHeader = _interopRequireDefault(require("./DecadeHeader"));
var _DecadeBody = _interopRequireWildcard(require("./DecadeBody"));
var _uiUtil = require("../../utils/uiUtil");
var _useMergeProps = _interopRequireDefault(require("../../hooks/useMergeProps"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DECADE_UNIT_DIFF = 10;
exports.DECADE_UNIT_DIFF = DECADE_UNIT_DIFF;
const DECADE_DISTANCE_COUNT = DECADE_UNIT_DIFF * 10;
exports.DECADE_DISTANCE_COUNT = DECADE_DISTANCE_COUNT;
function DecadePanel(_props) {
  const props = (0, _useMergeProps.default)(_props);
  const {
    prefixCls,
    onViewDateChange,
    generateConfig,
    viewDate,
    operationRef,
    onSelect,
    onPanelChange
  } = props;
  const panelPrefixCls = `${prefixCls}-decade-panel`;
  // ======================= Keyboard =======================
  operationRef.value = {
    onKeydown: event => (0, _uiUtil.createKeydownHandler)(event, {
      onLeftRight: diff => {
        onSelect(generateConfig.addYear(viewDate, diff * DECADE_UNIT_DIFF), 'key');
      },
      onCtrlLeftRight: diff => {
        onSelect(generateConfig.addYear(viewDate, diff * DECADE_DISTANCE_COUNT), 'key');
      },
      onUpDown: diff => {
        onSelect(generateConfig.addYear(viewDate, diff * DECADE_UNIT_DIFF * _DecadeBody.DECADE_COL_COUNT), 'key');
      },
      onEnter: () => {
        onPanelChange('year', viewDate);
      }
    })
  };
  // ==================== View Operation ====================
  const onDecadesChange = diff => {
    const newDate = generateConfig.addYear(viewDate, diff * DECADE_DISTANCE_COUNT);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  const onInternalSelect = date => {
    onSelect(date, 'mouse');
    onPanelChange('year', date);
  };
  return (0, _vue.createVNode)("div", {
    "class": panelPrefixCls
  }, [(0, _vue.createVNode)(_DecadeHeader.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "prefixCls": prefixCls,
    "onPrevDecades": () => {
      onDecadesChange(-1);
    },
    "onNextDecades": () => {
      onDecadesChange(1);
    }
  }), null), (0, _vue.createVNode)(_DecadeBody.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
    "prefixCls": prefixCls,
    "onSelect": onInternalSelect
  }), null)]);
}
DecadePanel.displayName = 'DecadePanel';
DecadePanel.inheritAttrs = false;
var _default = DecadePanel;
exports.default = _default;