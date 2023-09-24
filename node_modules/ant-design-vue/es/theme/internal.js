import _extends from "@babel/runtime/helpers/esm/extends";
import { createTheme, useCacheToken, useStyleRegister } from '../_util/cssinjs';
import version from '../version';
import { PresetColors } from './interface';
import defaultDerivative from './themes/default';
import defaultSeedToken from './themes/seed';
import formatToken from './util/alias';
import genComponentStyleHook from './util/genComponentStyleHook';
import statisticToken, { merge as mergeToken, statistic } from './util/statistic';
import { objectType } from '../_util/type';
import { defineComponent, provide, computed, inject, watchEffect, ref } from 'vue';
import { toReactive } from '../_util/toReactive';
const defaultTheme = createTheme(defaultDerivative);
export {
// colors
PresetColors,
// Statistic
statistic, statisticToken, mergeToken,
// hooks
useStyleRegister, genComponentStyleHook };
// ================================ Context =================================
// To ensure snapshot stable. We disable hashed in test env.
export const defaultConfig = {
  token: defaultSeedToken,
  hashed: true
};
//defaultConfig
const DesignTokenContextKey = Symbol('DesignTokenContext');
export const globalDesignTokenApi = ref();
export const useDesignTokenProvider = value => {
  provide(DesignTokenContextKey, value);
  watchEffect(() => {
    globalDesignTokenApi.value = value;
  });
};
export const useDesignTokenInject = () => {
  return inject(DesignTokenContextKey, globalDesignTokenApi.value || defaultConfig);
};
export const DesignTokenProvider = defineComponent({
  props: {
    value: objectType()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useDesignTokenProvider(toReactive(computed(() => props.value)));
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
// ================================== Hook ==================================
export function useToken() {
  const designTokenContext = inject(DesignTokenContextKey, globalDesignTokenApi.value || defaultConfig);
  const salt = computed(() => `${version}-${designTokenContext.hashed || ''}`);
  const mergedTheme = computed(() => designTokenContext.theme || defaultTheme);
  const cacheToken = useCacheToken(mergedTheme, computed(() => [defaultSeedToken, designTokenContext.token]), computed(() => ({
    salt: salt.value,
    override: _extends({
      override: designTokenContext.token
    }, designTokenContext.components),
    formatToken
  })));
  return [mergedTheme, computed(() => cacheToken.value[0]), computed(() => designTokenContext.hashed ? cacheToken.value[1] : '')];
}