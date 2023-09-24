"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractStyle = extractStyle;
var _vue = require("vue");
var _cssinjs = require("../cssinjs");
var antd = _interopRequireWildcard(require("../../components"));
var _serverRenderer = require("vue/server-renderer");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const blackList = ['ConfigProvider', 'Grid', 'Tour', 'SelectOptGroup', 'SelectOption', 'MentionsOption', 'TreeNode', 'TreeSelectNode', 'LocaleProvider'];
const pickerMap = {
  MonthPicker: 'month',
  WeekPicker: 'week',
  QuarterPicker: 'quarter'
};
const compChildNameMap = {
  MenuDivider: 'Menu',
  MenuItem: 'Menu',
  MenuItemGroup: 'Menu',
  SubMenu: 'Menu',
  TableColumn: 'Table',
  TableColumnGroup: 'Table',
  TableSummary: 'Table',
  TableSummaryRow: 'Table',
  TableSummaryCell: 'Table',
  TabPane: 'Tabs',
  TimelineItem: 'Timeline'
};
const defaultNode = () => (0, _vue.createVNode)(_vue.Fragment, null, [Object.keys(antd).filter(name => !blackList.includes(name) && name[0] === name[0].toUpperCase()).map(compName => {
  const Comp = antd[compName];
  if (compName === 'Dropdown') {
    return (0, _vue.createVNode)(Comp, {
      "key": compName,
      "menu": {
        items: []
      }
    }, {
      default: () => [(0, _vue.createVNode)("div", null, null)]
    });
  }
  if (compName === 'Anchor') {
    return (0, _vue.createVNode)(Comp, {
      "key": compName,
      "items": []
    }, null);
  }
  if (compName in pickerMap) {
    const Comp = antd['DatePicker'];
    const type = pickerMap[compName];
    return (0, _vue.createVNode)(Comp, {
      "key": compName,
      "picker": type
    }, null);
  }
  if (compName in compChildNameMap) {
    const ParentComp = antd[compChildNameMap[compName]];
    return (0, _vue.createVNode)(ParentComp, null, {
      default: () => [(0, _vue.createVNode)(Comp, null, null)]
    });
  }
  if (compName === 'QRCode' || compName === 'Segmented') {
    return (0, _vue.createVNode)(Comp, {
      "key": compName,
      "value": ''
    }, {
      default: () => [(0, _vue.createVNode)("div", null, null)]
    });
  }
  return (0, _vue.createVNode)(Comp, {
    "key": compName
  }, null);
})]);
function extractStyle(customTheme) {
  const cache = (0, _cssinjs.createCache)();
  (0, _serverRenderer.renderToString)((0, _vue.createVNode)(_cssinjs.StyleProvider, {
    "cache": cache
  }, {
    default: () => [customTheme ? customTheme(defaultNode()) : defaultNode()]
  }));
  // Grab style from cache
  const styleText = (0, _cssinjs.extractStyle)(cache, true);
  return styleText;
}