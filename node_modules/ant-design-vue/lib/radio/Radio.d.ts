import type { ExtractPropTypes } from 'vue';
import type { RadioChangeEvent } from './interface';
import type { FocusEventHandler, MouseEventHandler } from '../_util/EventInterface';
export declare const radioProps: () => {
    prefixCls: StringConstructor;
    checked: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    isGroup: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: import("vue-types").VueTypeValidableDef<any>;
    name: StringConstructor;
    id: StringConstructor;
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    onChange: {
        type: import("vue").PropType<(event: RadioChangeEvent) => void>;
        default: (event: RadioChangeEvent) => void;
    };
    onFocus: {
        type: import("vue").PropType<FocusEventHandler>;
        default: FocusEventHandler;
    };
    onBlur: {
        type: import("vue").PropType<FocusEventHandler>;
        default: FocusEventHandler;
    };
    onClick: {
        type: import("vue").PropType<MouseEventHandler>;
        default: MouseEventHandler;
    };
    'onUpdate:checked': {
        type: import("vue").PropType<(checked: boolean) => void>;
        default: (checked: boolean) => void;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(checked: boolean) => void>;
        default: (checked: boolean) => void;
    };
};
export type RadioProps = Partial<ExtractPropTypes<ReturnType<typeof radioProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    checked: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    isGroup: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: import("vue-types").VueTypeValidableDef<any>;
    name: StringConstructor;
    id: StringConstructor;
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    onChange: {
        type: import("vue").PropType<(event: RadioChangeEvent) => void>;
        default: (event: RadioChangeEvent) => void;
    };
    onFocus: {
        type: import("vue").PropType<FocusEventHandler>;
        default: FocusEventHandler;
    };
    onBlur: {
        type: import("vue").PropType<FocusEventHandler>;
        default: FocusEventHandler;
    };
    onClick: {
        type: import("vue").PropType<MouseEventHandler>;
        default: MouseEventHandler;
    };
    'onUpdate:checked': {
        type: import("vue").PropType<(checked: boolean) => void>;
        default: (checked: boolean) => void;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(checked: boolean) => void>;
        default: (checked: boolean) => void;
    };
}, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    checked: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    isGroup: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: import("vue-types").VueTypeValidableDef<any>;
    name: StringConstructor;
    id: StringConstructor;
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    onChange: {
        type: import("vue").PropType<(event: RadioChangeEvent) => void>;
        default: (event: RadioChangeEvent) => void;
    };
    onFocus: {
        type: import("vue").PropType<FocusEventHandler>;
        default: FocusEventHandler;
    };
    onBlur: {
        type: import("vue").PropType<FocusEventHandler>;
        default: FocusEventHandler;
    };
    onClick: {
        type: import("vue").PropType<MouseEventHandler>;
        default: MouseEventHandler;
    };
    'onUpdate:checked': {
        type: import("vue").PropType<(checked: boolean) => void>;
        default: (checked: boolean) => void;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(checked: boolean) => void>;
        default: (checked: boolean) => void;
    };
}>>, {
    onClick: MouseEventHandler;
    onFocus: FocusEventHandler;
    onBlur: FocusEventHandler;
    onChange: (event: RadioChangeEvent) => void;
    disabled: boolean;
    checked: boolean;
    autofocus: boolean;
    isGroup: boolean;
    'onUpdate:checked': (checked: boolean) => void;
    'onUpdate:value': (checked: boolean) => void;
}, {}>;
export default _default;
