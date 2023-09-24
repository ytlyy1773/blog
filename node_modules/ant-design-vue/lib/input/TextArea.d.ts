import type { FocusEventHandler } from '../_util/EventInterface';
import type { VueNode } from '../_util/type';
declare const _default: import("vue").DefineComponent<{
    rows: NumberConstructor;
    autosize: {
        type: import("vue").PropType<boolean | import("./inputProps").AutoSizeType>;
        default: any;
    };
    autoSize: {
        type: import("vue").PropType<boolean | import("./inputProps").AutoSizeType>;
        default: any;
    };
    onResize: {
        type: import("vue").PropType<(size: {
            width: number;
            height: number;
        }) => void>;
    };
    onCompositionstart: {
        type: import("vue").PropType<import("../_util/EventInterface").CompositionEventHandler | import("../_util/EventInterface").CompositionEventHandler[]>;
    };
    onCompositionend: {
        type: import("vue").PropType<import("../_util/EventInterface").CompositionEventHandler | import("../_util/EventInterface").CompositionEventHandler[]>;
    };
    valueModifiers: ObjectConstructor;
    value: {
        type: import("vue").PropType<string | number>;
        default: any;
    };
    name: StringConstructor;
    onFocus: import("vue").PropType<FocusEventHandler>;
    onBlur: import("vue").PropType<FocusEventHandler>;
    onChange: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
    onInput: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
    onKeydown: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onKeyup: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    focused: {
        type: BooleanConstructor;
        default: any;
    };
    hidden: {
        type: BooleanConstructor;
        default: any;
    };
    size: {
        type: import("vue").PropType<import("../config-provider").SizeType>;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    type: {
        type: import("vue").PropType<"number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password">;
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
    status: import("vue").PropType<"" | "error" | "warning">;
    defaultValue: {
        type: import("vue").PropType<string | number>;
        default: any;
    };
    'onUpdate:value': import("vue").PropType<(val: string) => void>;
    placeholder: {
        type: import("vue").PropType<string | number>;
    };
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
        type: import("vue").PropType<boolean | import("../vc-input/inputProps").ShowCountProps>;
    };
    htmlSize: NumberConstructor;
    onPressEnter: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    inputElement: import("vue-types").VueTypeValidableDef<any>;
    triggerFocus: import("vue").PropType<() => void>;
    handleReset: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
}, () => VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rows: NumberConstructor;
    autosize: {
        type: import("vue").PropType<boolean | import("./inputProps").AutoSizeType>;
        default: any;
    };
    autoSize: {
        type: import("vue").PropType<boolean | import("./inputProps").AutoSizeType>;
        default: any;
    };
    onResize: {
        type: import("vue").PropType<(size: {
            width: number;
            height: number;
        }) => void>;
    };
    onCompositionstart: {
        type: import("vue").PropType<import("../_util/EventInterface").CompositionEventHandler | import("../_util/EventInterface").CompositionEventHandler[]>;
    };
    onCompositionend: {
        type: import("vue").PropType<import("../_util/EventInterface").CompositionEventHandler | import("../_util/EventInterface").CompositionEventHandler[]>;
    };
    valueModifiers: ObjectConstructor;
    value: {
        type: import("vue").PropType<string | number>;
        default: any;
    };
    name: StringConstructor;
    onFocus: import("vue").PropType<FocusEventHandler>;
    onBlur: import("vue").PropType<FocusEventHandler>;
    onChange: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
    onInput: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
    onKeydown: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onKeyup: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    focused: {
        type: BooleanConstructor;
        default: any;
    };
    hidden: {
        type: BooleanConstructor;
        default: any;
    };
    size: {
        type: import("vue").PropType<import("../config-provider").SizeType>;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    type: {
        type: import("vue").PropType<"number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password">;
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
    status: import("vue").PropType<"" | "error" | "warning">;
    defaultValue: {
        type: import("vue").PropType<string | number>;
        default: any;
    };
    'onUpdate:value': import("vue").PropType<(val: string) => void>;
    placeholder: {
        type: import("vue").PropType<string | number>;
    };
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
        type: import("vue").PropType<boolean | import("../vc-input/inputProps").ShowCountProps>;
    };
    htmlSize: NumberConstructor;
    onPressEnter: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    inputElement: import("vue-types").VueTypeValidableDef<any>;
    triggerFocus: import("vue").PropType<() => void>;
    handleReset: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
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
    autosize: any;
    autoSize: any;
}, {}>;
export default _default;
