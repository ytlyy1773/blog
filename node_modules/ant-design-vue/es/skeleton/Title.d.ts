import type { ExtractPropTypes, PropType } from 'vue';
export declare const skeletonTitleProps: () => {
    prefixCls: StringConstructor;
    width: {
        type: PropType<string | number>;
    };
};
export type SkeletonTitleProps = Partial<ExtractPropTypes<ReturnType<typeof skeletonTitleProps>>>;
declare const SkeletonTitle: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    width: {
        type: PropType<string | number>;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    width: {
        type: PropType<string | number>;
    };
}>>, {}, {}>;
export default SkeletonTitle;
