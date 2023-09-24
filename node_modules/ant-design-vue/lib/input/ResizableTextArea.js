"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _vcResizeObserver = _interopRequireDefault(require("../vc-resize-observer"));
var _classNames = _interopRequireDefault(require("../_util/classNames"));
var _calculateNodeHeight = _interopRequireDefault(require("./calculateNodeHeight"));
var _raf = _interopRequireDefault(require("../_util/raf"));
var _warning = _interopRequireDefault(require("../_util/warning"));
var _antInputDirective = _interopRequireDefault(require("../_util/antInputDirective"));
var _omit = _interopRequireDefault(require("../_util/omit"));
var _inputProps = require("./inputProps");
const RESIZE_STATUS_NONE = 0;
const RESIZE_STATUS_RESIZING = 1;
const RESIZE_STATUS_RESIZED = 2;
const ResizableTextArea = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ResizableTextArea',
  inheritAttrs: false,
  props: (0, _inputProps.textAreaProps)(),
  setup(props, _ref) {
    let {
      attrs,
      emit,
      expose
    } = _ref;
    let nextFrameActionId;
    let resizeFrameId;
    const textAreaRef = (0, _vue.ref)();
    const textareaStyles = (0, _vue.ref)({});
    const resizeStatus = (0, _vue.ref)(RESIZE_STATUS_NONE);
    (0, _vue.onBeforeUnmount)(() => {
      _raf.default.cancel(nextFrameActionId);
      _raf.default.cancel(resizeFrameId);
    });
    // https://github.com/ant-design/ant-design/issues/21870
    const fixFirefoxAutoScroll = () => {
      try {
        if (document.activeElement === textAreaRef.value) {
          const currentStart = textAreaRef.value.selectionStart;
          const currentEnd = textAreaRef.value.selectionEnd;
          textAreaRef.value.setSelectionRange(currentStart, currentEnd);
        }
      } catch (e) {
        // Fix error in Chrome:
        // Failed to read the 'selectionStart' property from 'HTMLInputElement'
        // http://stackoverflow.com/q/21177489/3040605
      }
    };
    const resizeTextarea = () => {
      const autoSize = props.autoSize || props.autosize;
      if (!autoSize || !textAreaRef.value) {
        return;
      }
      const {
        minRows,
        maxRows
      } = autoSize;
      textareaStyles.value = (0, _calculateNodeHeight.default)(textAreaRef.value, false, minRows, maxRows);
      resizeStatus.value = RESIZE_STATUS_RESIZING;
      _raf.default.cancel(resizeFrameId);
      resizeFrameId = (0, _raf.default)(() => {
        resizeStatus.value = RESIZE_STATUS_RESIZED;
        resizeFrameId = (0, _raf.default)(() => {
          resizeStatus.value = RESIZE_STATUS_NONE;
          fixFirefoxAutoScroll();
        });
      });
    };
    const resizeOnNextFrame = () => {
      _raf.default.cancel(nextFrameActionId);
      nextFrameActionId = (0, _raf.default)(resizeTextarea);
    };
    const handleResize = size => {
      if (resizeStatus.value !== RESIZE_STATUS_NONE) {
        return;
      }
      emit('resize', size);
      const autoSize = props.autoSize || props.autosize;
      if (autoSize) {
        resizeOnNextFrame();
      }
    };
    (0, _warning.default)(props.autosize === undefined, 'Input.TextArea', 'autosize is deprecated, please use autoSize instead.');
    const renderTextArea = () => {
      const {
        prefixCls,
        autoSize,
        autosize,
        disabled
      } = props;
      const otherProps = (0, _omit.default)(props, ['prefixCls', 'onPressEnter', 'autoSize', 'autosize', 'defaultValue', 'allowClear', 'type', 'lazy', 'maxlength', 'valueModifiers']);
      const cls = (0, _classNames.default)(prefixCls, attrs.class, {
        [`${prefixCls}-disabled`]: disabled
      });
      const style = [attrs.style, textareaStyles.value, resizeStatus.value === RESIZE_STATUS_RESIZING ? {
        overflowX: 'hidden',
        overflowY: 'hidden'
      } : null];
      const textareaProps = (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, otherProps), attrs), {
        style,
        class: cls
      });
      if (!textareaProps.autofocus) {
        delete textareaProps.autofocus;
      }
      if (textareaProps.rows === 0) {
        delete textareaProps.rows;
      }
      return (0, _vue.createVNode)(_vcResizeObserver.default, {
        "onResize": handleResize,
        "disabled": !(autoSize || autosize)
      }, {
        default: () => [(0, _vue.withDirectives)((0, _vue.createVNode)("textarea", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, textareaProps), {}, {
          "ref": textAreaRef
        }), null), [[_antInputDirective.default]])]
      });
    };
    (0, _vue.watch)(() => props.value, () => {
      (0, _vue.nextTick)(() => {
        resizeTextarea();
      });
    });
    (0, _vue.onMounted)(() => {
      (0, _vue.nextTick)(() => {
        resizeTextarea();
      });
    });
    const instance = (0, _vue.getCurrentInstance)();
    expose({
      resizeTextarea,
      textArea: textAreaRef,
      instance
    });
    return () => {
      return renderTextArea();
    };
  }
});
var _default = ResizableTextArea;
exports.default = _default;