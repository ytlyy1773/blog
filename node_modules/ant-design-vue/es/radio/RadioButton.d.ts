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
        type: import("vue").PropType<(event: import("./interface").RadioChangeEvent) => void>;
        default: (event: import("./interface").RadioChangeEvent) => void;
    };
    onFocus: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        default: import("../_util/EventInterface").FocusEventHandler;
    };
    onBlur: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        default: import("../_util/EventInterface").FocusEventHandler;
    };
    onClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        default: import("../_util/EventInterface").MouseEventHandler;
    };
    'onUpdate:checked': {
        type: import("vue").PropType<(checked: boolean) => void>;
        default: (checked: boolean) => void;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(checked: boolean) => void>;
        default: (checked: boolean) => void;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<(event: import("./interface").RadioChangeEvent) => void>;
        default: (event: import("./interface").RadioChangeEvent) => void;
    };
    onFocus: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        default: import("../_util/EventInterface").FocusEventHandler;
    };
    onBlur: {
        type: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        default: import("../_util/EventInterface").FocusEventHandler;
    };
    onClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        default: import("../_util/EventInterface").MouseEventHandler;
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
    onClick: import("../_util/EventInterface").MouseEventHandler;
    onFocus: import("../_util/EventInterface").FocusEventHandler;
    onBlur: import("../_util/EventInterface").FocusEventHandler;
    onChange: (event: import("./interface").RadioChangeEvent) => void;
    disabled: boolean;
    checked: boolean;
    autofocus: boolean;
    isGroup: boolean;
    'onUpdate:checked': (checked: boolean) => void;
    'onUpdate:value': (checked: boolean) => void;
}, {}>;
export default _default;
