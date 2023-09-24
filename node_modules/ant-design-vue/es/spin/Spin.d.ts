import type { ExtractPropTypes, PropType } from 'vue';
export type SpinSize = 'small' | 'default' | 'large';
export declare const spinProps: () => {
    prefixCls: StringConstructor;
    spinning: {
        type: BooleanConstructor;
        default: any;
    };
    size: PropType<SpinSize>;
    wrapperClassName: StringConstructor;
    tip: import("vue-types").VueTypeValidableDef<any>;
    delay: NumberConstructor;
    indicator: import("vue-types").VueTypeValidableDef<any>;
};
export type SpinProps = Partial<ExtractPropTypes<ReturnType<typeof spinProps>>>;
export declare function setDefaultIndicator(Content: any): void;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    spinning: {
        type: BooleanConstructor;
        default: any;
    };
    size: PropType<SpinSize>;
    wrapperClassName: StringConstructor;
    tip: import("vue-types").VueTypeValidableDef<any>;
    delay: NumberConstructor;
    indicator: import("vue-types").VueTypeValidableDef<any>;
}, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    spinning: {
        type: BooleanConstructor;
        default: any;
    };
    size: PropType<SpinSize>;
    wrapperClassName: StringConstructor;
    tip: import("vue-types").VueTypeValidableDef<any>;
    delay: NumberConstructor;
    indicator: import("vue-types").VueTypeValidableDef<any>;
}>>, {
    spinning: boolean;
}, {}>;
export default _default;
