import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { defineComponent, shallowRef, withDirectives } from 'vue';
import antInput from './antInputDirective';
import PropTypes from './vue-types';
const BaseInput = defineComponent({
  compatConfig: {
    MODE: 3
  },
  props: {
    value: PropTypes.string.def('')
  },
  emits: ['change', 'input'],
  setup(_p, _ref) {
    let {
      emit
    } = _ref;
    const inputRef = shallowRef(null);
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
    return withDirectives(_createVNode("input", _objectSpread(_objectSpread(_objectSpread({}, this.$props), this.$attrs), {}, {
      "onInput": this.handleChange,
      "onChange": this.handleChange,
      "ref": "inputRef"
    }), null), [[antInput]]);
  }
});
export default BaseInput;