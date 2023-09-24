import type { ExtractPropTypes, FunctionalComponent, PropType } from 'vue';
export declare const skeletonElementProps: () => {
    prefixCls: StringConstructor;
    size: PropType<number | "small" | "default" | "large">;
    shape: PropType<"default" | "circle" | "round" | "square">;
    active: {
        type: BooleanConstructor;
        default: any;
    };
};
export type SkeletonElementProps = Partial<ExtractPropTypes<ReturnType<typeof skeletonElementProps>>>;
declare const Element: FunctionalComponent<SkeletonElementProps>;
export default Element;
