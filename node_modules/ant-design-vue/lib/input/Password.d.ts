import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    inputPrefixCls: StringConstructor;
    action: {
        type: StringConstructor;
        default: string;
    };
    visibilityToggle: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    'onUpdate:visible': PropType<(visible: boolean) => void>;
    iconRender: FunctionConstructor;
    value: {
        type: PropType<string | number>;
        default: any;
    };
    name: StringConstructor;
    onCompositionend: PropType<import("../_util/EventInterface").CompositionEventHandler>;
    onCompositionstart: PropType<import("../_util/EventInterface").CompositionEventHandler>;
    onFocus: PropType<import("../_util/EventInterface").FocusEventHandler>;
    onBlur: PropType<import("../_util/EventInterface").FocusEventHandler>;
    onChange: PropType<import("../_util/EventInterface").ChangeEventHandler>;
    onInput: PropType<import("../_util/EventInterface").ChangeEventHandler>;
    onKeydown: PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onKeyup: PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    focused: {
        type: BooleanConstructor;
        default: any;
    };
    hidden: {
        type: BooleanConstructor;
        default: any;
    };
    size: {
        type: PropType<import("../config-provider").SizeType>;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    type: {
        type: PropType<"number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password">;
        default: "number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password";
    };
    autocomplete: StringConstructor;
    id: StringConstructor;
    readonly: {
        type: BooleanConstructor;
        default: any;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    status: PropType<"" | "error" | "warning">;
    defaultValue: {
        type: PropType<string | number>;
        default: any;
    };
    'onUpdate:value': PropType<(val: string) => void>;
    suffix: import("vue-types").VueTypeValidableDef<any>;
    placeholder: {
        type: PropType<string | number>;
    };
    prefix: import("vue-types").VueTypeValidableDef<any>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxlength: NumberConstructor;
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    showCount: {
        type: PropType<boolean | import("../vc-input/inputProps").ShowCountProps>;
    };
    htmlSize: NumberConstructor;
    onPressEnter: PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    valueModifiers: ObjectConstructor;
    inputElement: import("vue-types").VueTypeValidableDef<any>;
    triggerFocus: PropType<() => void>;
    handleReset: PropType<import("../_util/EventInterface").MouseEventHandler>;
    addonBefore: import("vue-types").VueTypeValidableDef<any>;
    addonAfter: import("vue-types").VueTypeValidableDef<any>;
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    inputPrefixCls: StringConstructor;
    action: {
        type: StringConstructor;
        default: string;
    };
    visibilityToggle: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    'onUpdate:visible': PropType<(visible: boolean) => void>;
    iconRender: FunctionConstructor;
    value: {
        type: PropType<string | number>;
        default: any;
    };
    name: StringConstructor;
    onCompositionend: PropType<import("../_util/EventInterface").CompositionEventHandler>;
    onCompositionstart: PropType<import("../_util/EventInterface").CompositionEventHandler>;
    onFocus: PropType<import("../_util/EventInterface").FocusEventHandler>;
    onBlur: PropType<import("../_util/EventInterface").FocusEventHandler>;
    onChange: PropType<import("../_util/EventInterface").ChangeEventHandler>;
    onInput: PropType<import("../_util/EventInterface").ChangeEventHandler>;
    onKeydown: PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onKeyup: PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    focused: {
        type: BooleanConstructor;
        default: any;
    };
    hidden: {
        type: BooleanConstructor;
        default: any;
    };
    size: {
        type: PropType<import("../config-provider").SizeType>;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    type: {
        type: PropType<"number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password">;
        default: "number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password";
    };
    autocomplete: StringConstructor;
    id: StringConstructor;
    readonly: {
        type: BooleanConstructor;
        default: any;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    status: PropType<"" | "error" | "warning">;
    defaultValue: {
        type: PropType<string | number>;
        default: any;
    };
    'onUpdate:value': PropType<(val: string) => void>;
    suffix: import("vue-types").VueTypeValidableDef<any>;
    placeholder: {
        type: PropType<string | number>;
    };
    prefix: import("vue-types").VueTypeValidableDef<any>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxlength: NumberConstructor;
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    showCount: {
        type: PropType<boolean | import("../vc-input/inputProps").ShowCountProps>;
    };
    htmlSize: NumberConstructor;
    onPressEnter: PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    valueModifiers: ObjectConstructor;
    inputElement: import("vue-types").VueTypeValidableDef<any>;
    triggerFocus: PropType<() => void>;
    handleReset: PropType<import("../_util/EventInterface").MouseEventHandler>;
    addonBefore: import("vue-types").VueTypeValidableDef<any>;
    addonAfter: import("vue-types").VueTypeValidableDef<any>;
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
}>>, {
    value: string | number;
    focused: boolean;
    hidden: boolean;
    visible: boolean;
    disabled: boolean;
    type: "number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password";
    readonly: boolean;
    autofocus: boolean;
    defaultValue: string | number;
    action: string;
    loading: boolean;
    lazy: boolean;
    bordered: boolean;
    allowClear: boolean;
    visibilityToggle: boolean;
}, {}>;
export default _default;
