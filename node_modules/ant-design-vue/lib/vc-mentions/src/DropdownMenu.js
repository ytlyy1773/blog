"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _menu = _interopRequireWildcard(require("../../menu"));
var _MentionsContext = _interopRequireDefault(require("./MentionsContext"));
var _spin = _interopRequireDefault(require("../../spin"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function noop() {}
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'DropdownMenu',
  props: {
    prefixCls: String,
    options: {
      type: Array,
      default: () => []
    }
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      activeIndex,
      setActiveIndex,
      selectOption,
      onFocus = noop,
      loading
    } = (0, _vue.inject)(_MentionsContext.default, {
      activeIndex: (0, _vue.shallowRef)(),
      loading: (0, _vue.shallowRef)(false)
    });
    let timeoutId;
    const onMousedown = e => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        onFocus(e);
      });
    };
    (0, _vue.onBeforeUnmount)(() => {
      clearTimeout(timeoutId);
    });
    return () => {
      var _a;
      const {
        prefixCls,
        options
      } = props;
      const activeOption = options[activeIndex.value] || {};
      return (0, _vue.createVNode)(_menu.default, {
        "prefixCls": `${prefixCls}-menu`,
        "activeKey": activeOption.value,
        "onSelect": _ref2 => {
          let {
            key
          } = _ref2;
          const option = options.find(_ref3 => {
            let {
              value
            } = _ref3;
            return value === key;
          });
          selectOption(option);
        },
        "onMousedown": onMousedown
      }, {
        default: () => [!loading.value && options.map((option, index) => {
          var _a, _b;
          const {
            value,
            disabled,
            label = option.value,
            class: className,
            style
          } = option;
          return (0, _vue.createVNode)(_menu.Item, {
            "key": value,
            "disabled": disabled,
            "onMouseenter": () => {
              setActiveIndex(index);
            },
            "class": className,
            "style": style
          }, {
            default: () => [(_b = (_a = slots.option) === null || _a === void 0 ? void 0 : _a.call(slots, option)) !== null && _b !== void 0 ? _b : typeof label === 'function' ? label(option) : label]
          });
        }), !loading.value && options.length === 0 ? (0, _vue.createVNode)(_menu.Item, {
          "key": "notFoundContent",
          "disabled": true
        }, {
          default: () => [(_a = slots.notFoundContent) === null || _a === void 0 ? void 0 : _a.call(slots)]
        }) : null, loading.value && (0, _vue.createVNode)(_menu.Item, {
          "key": "loading",
          "disabled": true
        }, {
          default: () => [(0, _vue.createVNode)(_spin.default, {
            "size": "small"
          }, null)]
        })]
      });
    };
  }
});
exports.default = _default;