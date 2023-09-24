import type { ExtractPropTypes } from 'vue';
import type { Breakpoint } from '../_util/responsiveObserve';
declare const RowAligns: readonly ["top", "middle", "bottom", "stretch"];
declare const RowJustify: readonly ["start", "end", "center", "space-around", "space-between", "space-evenly"];
type Responsive = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
type ResponsiveLike<T> = {
    [key in Responsive]?: T;
};
export type Gutter = number | undefined | Partial<Record<Breakpoint, number>>;
type ResponsiveAligns = ResponsiveLike<(typeof RowAligns)[number]>;
type ResponsiveJustify = ResponsiveLike<(typeof RowJustify)[number]>;
export interface rowContextState {
    gutter?: [number, number];
}
export declare const rowProps: () => {
    align: {
        type: import("vue").PropType<"top" | "stretch" | "bottom" | "middle" | ResponsiveAligns>;
        default: "top" | "stretch" | "bottom" | "middle" | ResponsiveAligns;
    };
    justify: {
        type: import("vue").PropType<"space-around" | "space-between" | "space-evenly" | "center" | "end" | "start" | ResponsiveJustify>;
        default: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start" | ResponsiveJustify;
    };
    prefixCls: StringConstructor;
    gutter: {
        type: import("vue").PropType<Gutter | [Gutter, Gutter]>;
        default: Gutter | [Gutter, Gutter];
    };
    wrap: {
        type: BooleanConstructor;
        default: any;
    };
};
export type RowProps = Partial<ExtractPropTypes<ReturnType<typeof rowProps>>>;
declare const ARow: import("vue").DefineComponent<{
    align: {
        type: import("vue").PropType<"top" | "stretch" | "bottom" | "middle" | ResponsiveAligns>;
        default: "top" | "stretch" | "bottom" | "middle" | ResponsiveAligns;
    };
    justify: {
        type: import("vue").PropType<"space-around" | "space-between" | "space-evenly" | "center" | "end" | "start" | ResponsiveJustify>;
        default: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start" | ResponsiveJustify;
    };
    prefixCls: StringConstructor;
    gutter: {
        type: import("vue").PropType<Gutter | [Gutter, Gutter]>;
        default: Gutter | [Gutter, Gutter];
    };
    wrap: {
        type: BooleanConstructor;
        default: any;
    };
}, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    align: {
        type: import("vue").PropType<"top" | "stretch" | "bottom" | "middle" | ResponsiveAligns>;
        default: "top" | "stretch" | "bottom" | "middle" | ResponsiveAligns;
    };
    justify: {
        type: import("vue").PropType<"space-around" | "space-between" | "space-evenly" | "center" | "end" | "start" | ResponsiveJustify>;
        default: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start" | ResponsiveJustify;
    };
    prefixCls: StringConstructor;
    gutter: {
        type: import("vue").PropType<Gutter | [Gutter, Gutter]>;
        default: Gutter | [Gutter, Gutter];
    };
    wrap: {
        type: BooleanConstructor;
        default: any;
    };
}>>, {
    wrap: boolean;
    justify: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start" | ResponsiveJustify;
    align: "top" | "stretch" | "bottom" | "middle" | ResponsiveAligns;
    gutter: number | Partial<Record<Breakpoint, number>> | [Gutter, Gutter];
}, {}>;
export default ARow;
