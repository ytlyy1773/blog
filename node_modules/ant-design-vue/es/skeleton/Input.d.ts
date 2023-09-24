import type { PropType } from 'vue';
import type { SkeletonElementProps } from './Element';
export interface SkeletonInputProps extends Omit<SkeletonElementProps, 'size' | 'shape'> {
    size?: 'large' | 'small' | 'default';
    block?: boolean;
}
declare const SkeletonInput: import("vue").DefineComponent<{
    size: PropType<"small" | "default" | "large">;
    block: BooleanConstructor;
    active: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
}, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: PropType<"small" | "default" | "large">;
    block: BooleanConstructor;
    active: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
}>>, {
    block: boolean;
    active: boolean;
}, {}>;
export default SkeletonInput;
