import type { Plugin } from 'vue';
import Group from './Group';
import Search from './Search';
import TextArea from './TextArea';
import Password from './Password';
export type { InputProps, TextAreaProps } from './inputProps';
export { Group as InputGroup, Search as InputSearch, TextArea as Textarea, Password as InputPassword, };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            value?: string | number;
            focused?: boolean;
            hidden?: boolean;
            disabled?: boolean;
            type?: "number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password";
            readonly?: boolean;
            autofocus?: boolean;
            defaultValue?: string | number;
            loading?: boolean;
            lazy?: boolean;
            bordered?: boolean;
            allowClear?: boolean;
            style?: unknown;
            ref?: import("vue").VNodeRef;
            key?: string | number | symbol;
            ref_for?: boolean;
            ref_key?: string;
            onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            readonly name?: string;
            class?: unknown;
            tabindex?: string | number;
            readonly onCompositionend?: import("../_util/EventInterface").CompositionEventHandler;
            readonly onCompositionstart?: import("../_util/EventInterface").CompositionEventHandler;
            readonly onFocus?: import("../_util/EventInterface").FocusEventHandler;
            readonly onBlur?: import("../_util/EventInterface").FocusEventHandler;
            readonly onChange?: import("../_util/EventInterface").ChangeEventHandler;
            readonly onInput?: import("../_util/EventInterface").ChangeEventHandler;
            readonly onKeydown?: import("../_util/EventInterface").KeyboardEventHandler;
            readonly onKeyup?: import("../_util/EventInterface").KeyboardEventHandler;
            readonly size?: import("../config-provider").SizeType;
            readonly prefixCls?: string;
            readonly autocomplete?: string;
            role?: string;
            readonly id?: string;
            readonly status?: "" | "error" | "warning";
            readonly 'onUpdate:value'?: (val: string) => void;
            readonly suffix?: any;
            readonly placeholder?: string | number;
            readonly prefix?: any;
            readonly maxlength?: number;
            readonly showCount?: boolean | import("../vc-input/inputProps").ShowCountProps;
            readonly htmlSize?: number;
            readonly onPressEnter?: import("../_util/EventInterface").KeyboardEventHandler;
            readonly valueModifiers?: Record<string, any>;
            readonly inputElement?: any;
            readonly triggerFocus?: () => void;
            readonly handleReset?: import("../_util/EventInterface").MouseEventHandler;
            readonly addonBefore?: any;
            readonly addonAfter?: any;
            readonly clearIcon?: any;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<Omit<{
            id: StringConstructor;
            placeholder: {
                type: import("vue").PropType<string | number>;
            };
            autocomplete: StringConstructor;
            type: {
                type: import("vue").PropType<"number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password">;
                default: "number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password";
            };
            name: StringConstructor;
            size: {
                type: import("vue").PropType<import("../config-provider").SizeType>;
            };
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            lazy: {
                type: BooleanConstructor;
                default: boolean;
            };
            maxlength: NumberConstructor;
            loading: {
                type: BooleanConstructor;
                default: any;
            };
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            showCount: {
                type: import("vue").PropType<boolean | import("../vc-input/inputProps").ShowCountProps>;
            };
            htmlSize: NumberConstructor;
            onPressEnter: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
            onKeydown: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
            onKeyup: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
            onFocus: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
            onBlur: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
            onChange: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
            onInput: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
            'onUpdate:value': import("vue").PropType<(val: string) => void>;
            onCompositionstart: import("vue").PropType<import("../_util/EventInterface").CompositionEventHandler>;
            onCompositionend: import("vue").PropType<import("../_util/EventInterface").CompositionEventHandler>;
            valueModifiers: ObjectConstructor;
            hidden: {
                type: BooleanConstructor;
                default: any;
            };
            status: import("vue").PropType<"" | "error" | "warning">;
            value: {
                type: import("vue").PropType<string | number>;
                default: any;
            };
            defaultValue: {
                type: import("vue").PropType<string | number>;
                default: any;
            };
            inputElement: import("vue-types").VueTypeValidableDef<any>;
            prefixCls: StringConstructor;
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            focused: {
                type: BooleanConstructor;
                default: any;
            };
            triggerFocus: import("vue").PropType<() => void>;
            readonly: {
                type: BooleanConstructor;
                default: any;
            };
            handleReset: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            addonBefore: import("vue-types").VueTypeValidableDef<any>;
            addonAfter: import("vue-types").VueTypeValidableDef<any>;
            prefix: import("vue-types").VueTypeValidableDef<any>;
            suffix: import("vue-types").VueTypeValidableDef<any>;
            clearIcon: import("vue-types").VueTypeValidableDef<any>;
            affixWrapperClassName: StringConstructor;
            groupClassName: StringConstructor;
            wrapperClassName: StringConstructor;
            inputClassName: StringConstructor;
            allowClear: {
                type: BooleanConstructor;
                default: any;
            };
        }, "wrapperClassName" | "affixWrapperClassName" | "groupClassName" | "inputClassName">>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
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
        }, {}, string, {}> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<Omit<{
        id: StringConstructor;
        placeholder: {
            type: import("vue").PropType<string | number>;
        };
        autocomplete: StringConstructor;
        type: {
            type: import("vue").PropType<"number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password">;
            default: "number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password";
        };
        name: StringConstructor;
        size: {
            type: import("vue").PropType<import("../config-provider").SizeType>;
        };
        autofocus: {
            type: BooleanConstructor;
            default: any;
        };
        lazy: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxlength: NumberConstructor;
        loading: {
            type: BooleanConstructor;
            default: any;
        };
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        showCount: {
            type: import("vue").PropType<boolean | import("../vc-input/inputProps").ShowCountProps>;
        };
        htmlSize: NumberConstructor;
        onPressEnter: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
        onKeydown: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
        onKeyup: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
        onFocus: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        onBlur: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        onChange: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
        onInput: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
        'onUpdate:value': import("vue").PropType<(val: string) => void>;
        onCompositionstart: import("vue").PropType<import("../_util/EventInterface").CompositionEventHandler>;
        onCompositionend: import("vue").PropType<import("../_util/EventInterface").CompositionEventHandler>;
        valueModifiers: ObjectConstructor;
        hidden: {
            type: BooleanConstructor;
            default: any;
        };
        status: import("vue").PropType<"" | "error" | "warning">;
        value: {
            type: import("vue").PropType<string | number>;
            default: any;
        };
        defaultValue: {
            type: import("vue").PropType<string | number>;
            default: any;
        };
        inputElement: import("vue-types").VueTypeValidableDef<any>;
        prefixCls: StringConstructor;
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        focused: {
            type: BooleanConstructor;
            default: any;
        };
        triggerFocus: import("vue").PropType<() => void>;
        readonly: {
            type: BooleanConstructor;
            default: any;
        };
        handleReset: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        addonBefore: import("vue-types").VueTypeValidableDef<any>;
        addonAfter: import("vue-types").VueTypeValidableDef<any>;
        prefix: import("vue-types").VueTypeValidableDef<any>;
        suffix: import("vue-types").VueTypeValidableDef<any>;
        clearIcon: import("vue-types").VueTypeValidableDef<any>;
        affixWrapperClassName: StringConstructor;
        groupClassName: StringConstructor;
        wrapperClassName: StringConstructor;
        inputClassName: StringConstructor;
        allowClear: {
            type: BooleanConstructor;
            default: any;
        };
    }, "wrapperClassName" | "affixWrapperClassName" | "groupClassName" | "inputClassName">>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<Omit<{
    id: StringConstructor;
    placeholder: {
        type: import("vue").PropType<string | number>;
    };
    autocomplete: StringConstructor;
    type: {
        type: import("vue").PropType<"number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password">;
        default: "number" | "button" | "time" | "reset" | "submit" | "image" | "text" | "search" | "checkbox" | "radio" | "hidden" | "color" | "range" | "date" | "url" | "email" | "week" | "month" | "tel" | "datetime-local" | "file" | "password";
    };
    name: StringConstructor;
    size: {
        type: import("vue").PropType<import("../config-provider").SizeType>;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxlength: NumberConstructor;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    showCount: {
        type: import("vue").PropType<boolean | import("../vc-input/inputProps").ShowCountProps>;
    };
    htmlSize: NumberConstructor;
    onPressEnter: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onKeydown: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onKeyup: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
    onFocus: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    onBlur: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    onChange: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
    onInput: import("vue").PropType<import("../_util/EventInterface").ChangeEventHandler>;
    'onUpdate:value': import("vue").PropType<(val: string) => void>;
    onCompositionstart: import("vue").PropType<import("../_util/EventInterface").CompositionEventHandler>;
    onCompositionend: import("vue").PropType<import("../_util/EventInterface").CompositionEventHandler>;
    valueModifiers: ObjectConstructor;
    hidden: {
        type: BooleanConstructor;
        default: any;
    };
    status: import("vue").PropType<"" | "error" | "warning">;
    value: {
        type: import("vue").PropType<string | number>;
        default: any;
    };
    defaultValue: {
        type: import("vue").PropType<string | number>;
        default: any;
    };
    inputElement: import("vue-types").VueTypeValidableDef<any>;
    prefixCls: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    focused: {
        type: BooleanConstructor;
        default: any;
    };
    triggerFocus: import("vue").PropType<() => void>;
    readonly: {
        type: BooleanConstructor;
        default: any;
    };
    handleReset: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    addonBefore: import("vue-types").VueTypeValidableDef<any>;
    addonAfter: import("vue-types").VueTypeValidableDef<any>;
    prefix: import("vue-types").VueTypeValidableDef<any>;
    suffix: import("vue-types").VueTypeValidableDef<any>;
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    affixWrapperClassName: StringConstructor;
    groupClassName: StringConstructor;
    wrapperClassName: StringConstructor;
    inputClassName: StringConstructor;
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
}, "wrapperClassName" | "affixWrapperClassName" | "groupClassName" | "inputClassName">>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
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
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]> & {
    readonly Group: typeof Group;
    readonly Search: typeof Search;
    readonly TextArea: typeof TextArea;
    readonly Password: typeof Password;
};
export default _default;
