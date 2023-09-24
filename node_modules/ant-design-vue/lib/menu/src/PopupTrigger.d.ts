import type { PropType } from 'vue';
import type { MenuMode } from './interface';
import type { CustomSlotsType } from '../../_util/type';
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    mode: PropType<MenuMode>;
    visible: BooleanConstructor;
    popupClassName: StringConstructor;
    popupOffset: PropType<number[]>;
    disabled: BooleanConstructor;
    onVisibleChange: PropType<(visible: boolean) => void>;
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "visibleChange"[], "visibleChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    mode: PropType<MenuMode>;
    visible: BooleanConstructor;
    popupClassName: StringConstructor;
    popupOffset: PropType<number[]>;
    disabled: BooleanConstructor;
    onVisibleChange: PropType<(visible: boolean) => void>;
}>> & {
    onVisibleChange?: (...args: any[]) => any;
}, {
    visible: boolean;
    disabled: boolean;
}, CustomSlotsType<{
    default?: any;
    popup?: any;
}>>;
export default _default;
