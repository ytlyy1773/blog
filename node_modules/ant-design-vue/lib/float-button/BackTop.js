"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _VerticalAlignTopOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/VerticalAlignTopOutlined"));
var _transition = require("../_util/transition");
var _FloatButton = _interopRequireWildcard(require("./FloatButton"));
var _useConfigInject = _interopRequireDefault(require("../config-provider/hooks/useConfigInject"));
var _getScroll = _interopRequireDefault(require("../_util/getScroll"));
var _scrollTo = _interopRequireDefault(require("../_util/scrollTo"));
var _throttleByAnimationFrame = _interopRequireDefault(require("../_util/throttleByAnimationFrame"));
var _propsUtil = require("../_util/props-util");
var _interface = require("./interface");
var _style = _interopRequireDefault(require("./style"));
var _context = require("./context");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const BackTop = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ABackTop',
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)((0, _interface.backTopProps)(), {
    visibilityHeight: 400,
    target: () => window,
    duration: 450,
    type: 'default',
    shape: 'circle'
  }),
  // emits: ['click'],
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit
    } = _ref;
    const {
      prefixCls,
      direction
    } = (0, _useConfigInject.default)(_FloatButton.floatButtonPrefixCls, props);
    const [wrapSSR] = (0, _style.default)(prefixCls);
    const domRef = (0, _vue.ref)();
    const state = (0, _vue.reactive)({
      visible: props.visibilityHeight === 0,
      scrollEvent: null
    });
    const getDefaultTarget = () => domRef.value && domRef.value.ownerDocument ? domRef.value.ownerDocument : window;
    const scrollToTop = e => {
      const {
        target = getDefaultTarget,
        duration
      } = props;
      (0, _scrollTo.default)(0, {
        getContainer: target,
        duration
      });
      emit('click', e);
    };
    const handleScroll = (0, _throttleByAnimationFrame.default)(e => {
      const {
        visibilityHeight
      } = props;
      const scrollTop = (0, _getScroll.default)(e.target, true);
      state.visible = scrollTop >= visibilityHeight;
    });
    const bindScrollEvent = () => {
      const {
        target
      } = props;
      const getTarget = target || getDefaultTarget;
      const container = getTarget();
      handleScroll({
        target: container
      });
      container === null || container === void 0 ? void 0 : container.addEventListener('scroll', handleScroll);
    };
    const scrollRemove = () => {
      const {
        target
      } = props;
      const getTarget = target || getDefaultTarget;
      const container = getTarget();
      handleScroll.cancel();
      container === null || container === void 0 ? void 0 : container.removeEventListener('scroll', handleScroll);
    };
    (0, _vue.watch)(() => props.target, () => {
      scrollRemove();
      (0, _vue.nextTick)(() => {
        bindScrollEvent();
      });
    });
    (0, _vue.onMounted)(() => {
      (0, _vue.nextTick)(() => {
        bindScrollEvent();
      });
    });
    (0, _vue.onActivated)(() => {
      (0, _vue.nextTick)(() => {
        bindScrollEvent();
      });
    });
    (0, _vue.onDeactivated)(() => {
      scrollRemove();
    });
    (0, _vue.onBeforeUnmount)(() => {
      scrollRemove();
    });
    const floatButtonGroupContext = (0, _context.useInjectFloatButtonGroupContext)();
    return () => {
      const defaultElement = (0, _vue.createVNode)("div", {
        "class": `${prefixCls.value}-content`
      }, [(0, _vue.createVNode)("div", {
        "class": `${prefixCls.value}-icon`
      }, [(0, _vue.createVNode)(_VerticalAlignTopOutlined.default, null, null)])]);
      const floatButtonProps = (0, _extends2.default)((0, _extends2.default)({}, attrs), {
        shape: (floatButtonGroupContext === null || floatButtonGroupContext === void 0 ? void 0 : floatButtonGroupContext.shape.value) || props.shape,
        onClick: scrollToTop,
        class: {
          [`${prefixCls.value}`]: true,
          [`${attrs.class}`]: attrs.class,
          [`${prefixCls.value}-rtl`]: direction.value === 'rtl'
        }
      });
      const transitionProps = (0, _transition.getTransitionProps)('fade');
      return wrapSSR((0, _vue.createVNode)(_transition.Transition, transitionProps, {
        default: () => [(0, _vue.withDirectives)((0, _vue.createVNode)(_FloatButton.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, floatButtonProps), {}, {
          "ref": domRef
        }), {
          icon: () => (0, _vue.createVNode)(_VerticalAlignTopOutlined.default, null, null),
          default: () => {
            var _a;
            return ((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || defaultElement;
          }
        }), [[_vue.vShow, state.visible]])]
      }));
    };
  }
});
var _default = BackTop;
exports.default = _default;