import type { Ref } from 'vue';
import type { SegmentedValue } from './segmented';
export interface MotionThumbInterface {
    value: SegmentedValue;
    getValueIndex: (value: SegmentedValue) => number;
    prefixCls: string;
    motionName: string;
    onMotionStart: VoidFunction;
    onMotionEnd: VoidFunction;
    direction?: 'ltr' | 'rtl';
}
declare const MotionThumb: import("vue").DefineComponent<{
    value: {
        default: SegmentedValue;
        type: import("vue").PropType<SegmentedValue>;
    };
    getValueIndex: {
        default: (value: SegmentedValue) => number;
        type: import("vue").PropType<(value: SegmentedValue) => number>;
    };
    prefixCls: {
        default: string;
        type: import("vue").PropType<string>;
    };
    motionName: {
        default: string;
        type: import("vue").PropType<string>;
    };
    onMotionStart: {
        default: VoidFunction;
        type: import("vue").PropType<VoidFunction>;
    };
    onMotionEnd: {
        default: VoidFunction;
        type: import("vue").PropType<VoidFunction>;
    };
    direction: {
        default: "rtl" | "ltr";
        type: import("vue").PropType<"rtl" | "ltr">;
    };
    containerRef: {
        default: Ref<HTMLDivElement>;
        type: import("vue").PropType<Ref<HTMLDivElement>>;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("motionStart" | "motionEnd")[], "motionStart" | "motionEnd", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        default: SegmentedValue;
        type: import("vue").PropType<SegmentedValue>;
    };
    getValueIndex: {
        default: (value: SegmentedValue) => number;
        type: import("vue").PropType<(value: SegmentedValue) => number>;
    };
    prefixCls: {
        default: string;
        type: import("vue").PropType<string>;
    };
    motionName: {
        default: string;
        type: import("vue").PropType<string>;
    };
    onMotionStart: {
        default: VoidFunction;
        type: import("vue").PropType<VoidFunction>;
    };
    onMotionEnd: {
        default: VoidFunction;
        type: import("vue").PropType<VoidFunction>;
    };
    direction: {
        default: "rtl" | "ltr";
        type: import("vue").PropType<"rtl" | "ltr">;
    };
    containerRef: {
        default: Ref<HTMLDivElement>;
        type: import("vue").PropType<Ref<HTMLDivElement>>;
    };
}>> & {
    onMotionStart?: (...args: any[]) => any;
    onMotionEnd?: (...args: any[]) => any;
}, {
    value: SegmentedValue;
    direction: "rtl" | "ltr";
    prefixCls: string;
    onMotionStart: VoidFunction;
    onMotionEnd: VoidFunction;
    motionName: string;
    getValueIndex: (value: SegmentedValue) => number;
    containerRef: Ref<HTMLDivElement>;
}, {}>;
export default MotionThumb;
