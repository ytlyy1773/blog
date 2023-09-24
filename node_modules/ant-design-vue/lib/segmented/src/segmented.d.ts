import type { ExtractPropTypes } from 'vue';
import type { CustomSlotsType, VueNode } from '../../_util/type';
export type SegmentedValue = string | number;
export type segmentedSize = 'large' | 'small';
export interface SegmentedBaseOption {
    value: string | number;
    disabled?: boolean;
    payload?: any;
    /**
     * html `title` property for label
     */
    title?: string;
    className?: string;
}
export interface SegmentedOption extends SegmentedBaseOption {
    label?: VueNode | ((option: SegmentedBaseOption) => VueNode);
}
export declare const segmentedProps: () => {
    prefixCls: StringConstructor;
    options: {
        type: import("vue").PropType<(string | number | SegmentedOption)[]>;
        default: (string | number | SegmentedOption)[];
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<segmentedSize>;
        default: segmentedSize;
    };
    value: {
        required: boolean;
        type: import("vue").PropType<SegmentedValue>;
        default: SegmentedValue;
    };
    motionName: StringConstructor;
    onChange: {
        type: import("vue").PropType<(val: SegmentedValue) => void>;
        default: (val: SegmentedValue) => void;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(val: SegmentedValue) => void>;
        default: (val: SegmentedValue) => void;
    };
};
export type SegmentedProps = Partial<ExtractPropTypes<ReturnType<typeof segmentedProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    options: {
        type: import("vue").PropType<(string | number | SegmentedOption)[]>;
        default: (string | number | SegmentedOption)[];
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<segmentedSize>;
        default: segmentedSize;
    };
    value: {
        required: boolean;
        type: import("vue").PropType<SegmentedValue>;
        default: SegmentedValue;
    };
    motionName: StringConstructor;
    onChange: {
        type: import("vue").PropType<(val: SegmentedValue) => void>;
        default: (val: SegmentedValue) => void;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(val: SegmentedValue) => void>;
        default: (val: SegmentedValue) => void;
    };
}, () => VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    options: {
        type: import("vue").PropType<(string | number | SegmentedOption)[]>;
        default: (string | number | SegmentedOption)[];
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<segmentedSize>;
        default: segmentedSize;
    };
    value: {
        required: boolean;
        type: import("vue").PropType<SegmentedValue>;
        default: SegmentedValue;
    };
    motionName: StringConstructor;
    onChange: {
        type: import("vue").PropType<(val: SegmentedValue) => void>;
        default: (val: SegmentedValue) => void;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(val: SegmentedValue) => void>;
        default: (val: SegmentedValue) => void;
    };
}>>, {
    value: SegmentedValue;
    onChange: (val: SegmentedValue) => void;
    block: boolean;
    size: segmentedSize;
    disabled: boolean;
    'onUpdate:value': (val: SegmentedValue) => void;
    options: (string | number | SegmentedOption)[];
}, CustomSlotsType<{
    label: SegmentedBaseOption;
}>>;
export default _default;
