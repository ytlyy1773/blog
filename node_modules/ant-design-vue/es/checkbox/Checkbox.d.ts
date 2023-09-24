import type { CheckboxChangeEvent } from './interface';
declare const _default: import("vue").DefineComponent<{
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixCls: StringConstructor;
    defaultChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    type: {
        type: import("vue").PropType<"checkbox">;
        default: "checkbox";
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    onChange: {
        type: import("vue").PropType<(e: CheckboxChangeEvent) => void>;
        default: (e: CheckboxChangeEvent) => void;
    };
    'onUpdate:checked': {
        type: import("vue").PropType<(checked: boolean) => void>;
        default: (checked: boolean) => void;
    };
    onClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        default: import("../_util/EventInterface").MouseEventHandler;
    };
    skipGroup: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixCls: StringConstructor;
    defaultChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    type: {
        type: import("vue").PropType<"checkbox">;
        default: "checkbox";
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    onChange: {
        type: import("vue").PropType<(e: CheckboxChangeEvent) => void>;
        default: (e: CheckboxChangeEvent) => void;
    };
    'onUpdate:checked': {
        type: import("vue").PropType<(checked: boolean) => void>;
        default: (checked: boolean) => void;
    };
    onClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        default: import("../_util/EventInterface").MouseEventHandler;
    };
    skipGroup: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    onClick: import("../_util/EventInterface").MouseEventHandler;
    onChange: (e: CheckboxChangeEvent) => void;
    disabled: boolean;
    type: "checkbox";
    defaultChecked: boolean;
    checked: boolean;
    autofocus: boolean;
    indeterminate: boolean;
    isGroup: boolean;
    'onUpdate:checked': (checked: boolean) => void;
    skipGroup: boolean;
}, {}>;
export default _default;
