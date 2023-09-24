import type { CustomSlotsType } from '../../_util/type';
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    upDisabled: BooleanConstructor;
    downDisabled: BooleanConstructor;
    onStep: {
        type: import("vue").PropType<(up: boolean) => void>;
        default: (up: boolean) => void;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    upDisabled: BooleanConstructor;
    downDisabled: BooleanConstructor;
    onStep: {
        type: import("vue").PropType<(up: boolean) => void>;
        default: (up: boolean) => void;
    };
}>>, {
    upDisabled: boolean;
    downDisabled: boolean;
    onStep: (up: boolean) => void;
}, CustomSlotsType<{
    upNode?: any;
    downNode?: any;
    default?: any;
}>>;
export default _default;
