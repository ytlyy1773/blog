import type { ExtractPropTypes, PropType } from 'vue';
type widthUnit = number | string;
export declare const skeletonParagraphProps: () => {
    prefixCls: StringConstructor;
    width: {
        type: PropType<widthUnit | widthUnit[]>;
    };
    rows: NumberConstructor;
};
export type SkeletonParagraphProps = Partial<ExtractPropTypes<ReturnType<typeof skeletonParagraphProps>>>;
declare const SkeletonParagraph: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    width: {
        type: PropType<widthUnit | widthUnit[]>;
    };
    rows: NumberConstructor;
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    width: {
        type: PropType<widthUnit | widthUnit[]>;
    };
    rows: NumberConstructor;
}>>, {}, {}>;
export default SkeletonParagraph;
