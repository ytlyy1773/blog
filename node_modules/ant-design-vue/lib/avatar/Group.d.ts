import type { AvatarSize } from './Avatar';
import type { PropType, ExtractPropTypes, CSSProperties } from 'vue';
export declare const groupProps: () => {
    prefixCls: StringConstructor;
    maxCount: NumberConstructor;
    maxStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    maxPopoverPlacement: {
        type: PropType<"top" | "bottom">;
        default: string;
    };
    maxPopoverTrigger: PropType<"click" | "focus" | "hover">;
    size: {
        type: PropType<AvatarSize>;
        default: AvatarSize;
    };
    shape: {
        type: PropType<"circle" | "square">;
        default: string;
    };
};
export type AvatarGroupProps = Partial<ExtractPropTypes<ReturnType<typeof groupProps>>>;
declare const Group: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    maxCount: NumberConstructor;
    maxStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    maxPopoverPlacement: {
        type: PropType<"top" | "bottom">;
        default: string;
    };
    maxPopoverTrigger: PropType<"click" | "focus" | "hover">;
    size: {
        type: PropType<AvatarSize>;
        default: AvatarSize;
    };
    shape: {
        type: PropType<"circle" | "square">;
        default: string;
    };
}, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    maxCount: NumberConstructor;
    maxStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    maxPopoverPlacement: {
        type: PropType<"top" | "bottom">;
        default: string;
    };
    maxPopoverTrigger: PropType<"click" | "focus" | "hover">;
    size: {
        type: PropType<AvatarSize>;
        default: AvatarSize;
    };
    shape: {
        type: PropType<"circle" | "square">;
        default: string;
    };
}>>, {
    size: number | "small" | "default" | "large" | Partial<Record<import("../_util/responsiveObserve").Breakpoint, number>>;
    shape: "circle" | "square";
    maxStyle: CSSProperties;
    maxPopoverPlacement: "top" | "bottom";
}, {}>;
export default Group;
