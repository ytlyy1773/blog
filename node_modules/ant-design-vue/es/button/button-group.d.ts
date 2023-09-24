import type { ExtractPropTypes, PropType } from 'vue';
import type { SizeType } from '../config-provider';
export declare const buttonGroupProps: () => {
    prefixCls: StringConstructor;
    size: {
        type: PropType<SizeType>;
    };
};
export type ButtonGroupProps = Partial<ExtractPropTypes<ReturnType<typeof buttonGroupProps>>>;
export declare const GroupSizeContext: {
    useProvide: (props: {
        size: SizeType;
    }, newProps?: {
        size: SizeType;
    }) => {
        size: SizeType;
    };
    useInject: () => {
        size: SizeType;
    };
};
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    size: {
        type: PropType<SizeType>;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    size: {
        type: PropType<SizeType>;
    };
}>>, {}, {}>;
export default _default;
