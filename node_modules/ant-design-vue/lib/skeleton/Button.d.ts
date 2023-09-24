import type { ExtractPropTypes, PropType } from 'vue';
export declare const skeletonButtonProps: () => {
    size: PropType<"small" | "default" | "large">;
    block: BooleanConstructor;
    prefixCls: StringConstructor;
    shape: PropType<"default" | "circle" | "round" | "square">;
    active: {
        type: BooleanConstructor;
        default: any;
    };
};
export type SkeletonButtonProps = Partial<ExtractPropTypes<ReturnType<typeof skeletonButtonProps>>>;
declare const SkeletonButton: import("vue").DefineComponent<{
    size: PropType<"small" | "default" | "large">;
    block: BooleanConstructor;
    prefixCls: StringConstructor;
    shape: PropType<"default" | "circle" | "round" | "square">;
    active: {
        type: BooleanConstructor;
        default: any;
    };
}, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    size: PropType<"small" | "default" | "large">;
    block: BooleanConstructor;
    prefixCls: StringConstructor;
    shape: PropType<"default" | "circle" | "round" | "square">;
    active: {
        type: BooleanConstructor;
        default: any;
    };
}>>, {
    block: boolean;
    active: boolean;
}, {}>;
export default SkeletonButton;
