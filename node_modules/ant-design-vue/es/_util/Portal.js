import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import PropTypes from './vue-types';
import { defineComponent, nextTick, onBeforeMount, onUpdated, Teleport, watch } from 'vue';
import { useInjectPortal } from '../vc-trigger/context';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Portal',
  inheritAttrs: false,
  props: {
    getContainer: PropTypes.func.isRequired,
    didUpdate: Function
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    let isSSR = true;
    // getContainer 不会改变，不用响应式
    let container;
    const {
      shouldRender
    } = useInjectPortal();
    onBeforeMount(() => {
      isSSR = false;
      if (shouldRender.value) {
        container = props.getContainer();
      }
    });
    const stopWatch = watch(shouldRender, () => {
      if (shouldRender.value && !container) {
        container = props.getContainer();
      }
      if (container) {
        stopWatch();
      }
    });
    onUpdated(() => {
      nextTick(() => {
        var _a;
        if (shouldRender.value) {
          (_a = props.didUpdate) === null || _a === void 0 ? void 0 : _a.call(props, props);
        }
      });
    });
    // onBeforeUnmount(() => {
    //   if (container && container.parentNode) {
    //     container.parentNode.removeChild(container);
    //   }
    // });
    return () => {
      var _a;
      if (!shouldRender.value) return null;
      if (isSSR) {
        return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      }
      return container ? _createVNode(Teleport, {
        "to": container
      }, slots) : null;
    };
  }
});