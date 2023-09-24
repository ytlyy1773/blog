import type { PropType } from 'vue';
import type { ChangeEvent, CompositionEventHandler, MouseEventHandler } from '../_util/EventInterface';
declare const _default: import("vue").DefineComponent<{
    inputPrefixCls: StringConstructor;
    enterButton: import("vue-types").VueTypeValidableDef<any>;
    onSearch: {
        type: PropType<(value: string, event?: ChangeEvent | MouseEvent | KeyboardEvent) => void>;
    };
    value: {
        type: PropType<string | number>;
        default: any;
    };
    name: StringConstructor;
    onCompositionend: PropType<CompositionEventHandler>;
    onCompositionstart: PropType<CompositionEventHandler>;
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
        type: PropType<import("../button").ButtonSize>;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    type: {
        type: PropType<"number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password">;
        default: "number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password";
    };
    prefixCls: StringConstructor;
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
    handleReset: PropType<MouseEventHandler>;
    addonBefore: import("vue-types").VueTypeValidableDef<any>;
    addonAfter: import("vue-types").VueTypeValidableDef<any>;
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    inputPrefixCls: StringConstructor;
    enterButton: import("vue-types").VueTypeValidableDef<any>;
    onSearch: {
        type: PropType<(value: string, event?: ChangeEvent | MouseEvent | KeyboardEvent) => void>;
    };
    value: {
        type: PropType<string | number>;
        default: any;
    };
    name: StringConstructor;
    onCompositionend: PropType<CompositionEventHandler>;
    onCompositionstart: PropType<CompositionEventHandler>;
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
        type: PropType<import("../button").ButtonSize>;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    type: {
        type: PropType<"number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password">;
        default: "number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password";
    };
    prefixCls: StringConstructor;
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
    handleReset: PropType<MouseEventHandler>;
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
    disabled: boolean;
    type: "number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password";
    readonly: boolean;
    autofocus: boolean;
    defaultValue: string | number;
    loading: boolean;
    lazy: boolean;
    bordered: boolean;
    allowClear: boolean;
}, {}>;
export default _default;
