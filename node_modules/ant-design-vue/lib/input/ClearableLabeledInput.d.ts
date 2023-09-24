import type { PropType, VNode } from 'vue';
import type { VueNode } from '../_util/type';
import type { Direction, SizeType } from '../config-provider';
import type { MouseEventHandler } from '../_util/EventInterface';
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    inputType: import("vue-types").VueTypeDef<string>;
    value: {
        default: VueNode;
        type: PropType<VueNode>;
    };
    defaultValue: {
        default: VueNode;
        type: PropType<VueNode>;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    element: {
        default: VueNode;
        type: PropType<VueNode>;
    };
    handleReset: PropType<MouseEventHandler>;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    direction: {
        type: PropType<Direction>;
    };
    size: {
        type: PropType<SizeType>;
    };
    suffix: {
        default: VueNode;
        type: PropType<VueNode>;
    };
    prefix: {
        default: VueNode;
        type: PropType<VueNode>;
    };
    addonBefore: {
        default: VueNode;
        type: PropType<VueNode>;
    };
    addonAfter: {
        default: VueNode;
        type: PropType<VueNode>;
    };
    readonly: {
        type: BooleanConstructor;
        default: any;
    };
    focused: {
        type: BooleanConstructor;
        default: any;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    triggerFocus: {
        type: PropType<() => void>;
    };
    hidden: BooleanConstructor;
    status: PropType<"" | "error" | "warning">;
    hashId: StringConstructor;
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    inputType: import("vue-types").VueTypeDef<string>;
    value: {
        default: VueNode;
        type: PropType<VueNode>;
    };
    defaultValue: {
        default: VueNode;
        type: PropType<VueNode>;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    element: {
        default: VueNode;
        type: PropType<VueNode>;
    };
    handleReset: PropType<MouseEventHandler>;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    direction: {
        type: PropType<Direction>;
    };
    size: {
        type: PropType<SizeType>;
    };
    suffix: {
        default: VueNode;
        type: PropType<VueNode>;
    };
    prefix: {
        default: VueNode;
        type: PropType<VueNode>;
    };
    addonBefore: {
        default: VueNode;
        type: PropType<VueNode>;
    };
    addonAfter: {
        default: VueNode;
        type: PropType<VueNode>;
    };
    readonly: {
        type: BooleanConstructor;
        default: any;
    };
    focused: {
        type: BooleanConstructor;
        default: any;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    triggerFocus: {
        type: PropType<() => void>;
    };
    hidden: BooleanConstructor;
    status: PropType<"" | "error" | "warning">;
    hashId: StringConstructor;
}>>, {
    value: VueNode;
    focused: boolean;
    hidden: boolean;
    element: VueNode;
    disabled: boolean;
    readonly: boolean;
    defaultValue: VueNode;
    suffix: VueNode;
    prefix: VueNode;
    bordered: boolean;
    addonBefore: VueNode;
    addonAfter: VueNode;
    allowClear: boolean;
}, {}>;
export default _default;
