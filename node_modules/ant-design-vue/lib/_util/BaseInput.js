"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _antInputDirective = _interopRequireDefault(require("./antInputDirective"));
var _vueTypes = _interopRequireDefault(require("./vue-types"));
const BaseInput = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  props: {
    value: _vueTypes.default.string.def('')
  },
  emits: ['change', 'input'],
  setup(_p, _ref) {
    let {
      emit
    } = _ref;
    const inputRef = (0, _vue.shallowRef)(null);
    const handleChange = e => {
      const {
        composing
      } = e.target;
      if (e.isComposing || composing) {
        emit('input', e);
      } else {
        emit('input', e);
        emit('change', e);
      }
    };
    return {
      inputRef,
      focus: () => {
        if (inputRef.value) {
          inputRef.value.focus();
        }
      },
      blur: () => {
        if (inputRef.value) {
          inputRef.value.blur();
        }
      },
      handleChange
    };
  },
  render() {
    return (0, _vue.withDirectives)((0, _vue.createVNode)("input", (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, this.$props), this.$attrs), {}, {
      "onInput": this.handleChange,
      "onChange": this.handleChange,
      "ref": "inputRef"
    }), null), [[_antInputDirective.default]]);
  }
});
var _default = BaseInput;
exports.default = _default;