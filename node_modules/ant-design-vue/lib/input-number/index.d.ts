import type { ExtractPropTypes, App } from 'vue';
import type { SizeType } from '../config-provider';
import type { CustomSlotsType } from '../_util/type';
export declare const inputNumberProps: () => {
    size: {
        type: import("vue").PropType<SizeType>;
        default: SizeType;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: StringConstructor;
    name: StringConstructor;
    id: StringConstructor;
    type: StringConstructor;
    addonBefore: import("vue-types").VueTypeValidableDef<any>;
    addonAfter: import("vue-types").VueTypeValidableDef<any>;
    prefix: import("vue-types").VueTypeValidableDef<any>;
    'onUpdate:value': {
        type: import("vue").PropType<(value: import("./src/utils/MiniDecimal").ValueType) => void>;
        default: (value: import("./src/utils/MiniDecimal").ValueType) => void;
    };
    valueModifiers: ObjectConstructor;
    status: {
        type: import("vue").PropType<"" | "error" | "warning">;
        default: "" | "error" | "warning";
    };
    stringMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultValue: {
        type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
        default: import("./src/utils/MiniDecimal").ValueType;
    };
    value: {
        type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
        default: import("./src/utils/MiniDecimal").ValueType;
    };
    prefixCls: {
        type: import("vue").PropType<string>;
        default: string;
    };
    min: {
        type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
        default: import("./src/utils/MiniDecimal").ValueType;
    };
    max: {
        type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
        default: import("./src/utils/MiniDecimal").ValueType;
    };
    step: {
        type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
        default: import("./src/utils/MiniDecimal").ValueType;
    };
    tabindex: NumberConstructor;
    controls: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    keyboard: {
        type: BooleanConstructor;
        default: boolean;
    };
    parser: {
        type: import("vue").PropType<(displayValue: string) => import("./src/utils/MiniDecimal").ValueType>;
        default: (displayValue: string) => import("./src/utils/MiniDecimal").ValueType;
    };
    formatter: {
        type: import("vue").PropType<(value: import("./src/utils/MiniDecimal").ValueType, info: {
            userTyping: boolean;
            input: string;
        }) => string>;
        default: (value: import("./src/utils/MiniDecimal").ValueType, info: {
            userTyping: boolean;
            input: string;
        }) => string;
    };
    precision: NumberConstructor;
    decimalSeparator: StringConstructor;
    onInput: {
        type: import("vue").PropType<(text: string) => void>;
        default: (text: string) => void;
    };
    onChange: {
        type: import("vue").PropType<(value: import("./src/utils/MiniDecimal").ValueType) => void>;
        default: (value: import("./src/utils/MiniDecimal").ValueType) => void;
    };
    onPressEnter: {
        type: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
        default: import("../_util/EventInterface").KeyboardEventHandler;
    };
    onStep: {
        type: import("vue").PropType<(value: import("./src/utils/MiniDecimal").ValueType, info: {
            offset: import("./src/utils/MiniDecimal").ValueType;
            type: "up" | "down";
        }) => void>;
        default: (value: import("./src/utils/MiniDecimal").ValueType, info: {
            offset: import("./src/utils/MiniDecimal").ValueType;
            type: "up" | "down";
        }) => void;
    };
    onBlur: {
        type: import("vue").PropType<(e: FocusEvent) => void>;
        default: (e: FocusEvent) => void;
    };
    onFocus: {
        type: import("vue").PropType<(e: FocusEvent) => void>;
        default: (e: FocusEvent) => void;
    };
};
export type InputNumberProps = Partial<ExtractPropTypes<ReturnType<typeof inputNumberProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            value?: import("./src/utils/MiniDecimal").ValueType;
            onFocus?: (e: FocusEvent) => void;
            onBlur?: (e: FocusEvent) => void;
            onChange?: (value: import("./src/utils/MiniDecimal").ValueType) => void;
            onInput?: (text: string) => void;
            size?: SizeType;
            disabled?: boolean;
            max?: import("./src/utils/MiniDecimal").ValueType;
            min?: import("./src/utils/MiniDecimal").ValueType;
            prefixCls?: string;
            readonly?: boolean;
            autofocus?: boolean;
            status?: "" | "error" | "warning";
            defaultValue?: import("./src/utils/MiniDecimal").ValueType;
            'onUpdate:value'?: (value: import("./src/utils/MiniDecimal").ValueType) => void;
            step?: import("./src/utils/MiniDecimal").ValueType;
            bordered?: boolean;
            onPressEnter?: import("../_util/EventInterface").KeyboardEventHandler;
            keyboard?: boolean;
            onStep?: (value: import("./src/utils/MiniDecimal").ValueType, info: {
                offset: import("./src/utils/MiniDecimal").ValueType;
                type: "up" | "down";
            }) => void;
            stringMode?: boolean;
            controls?: boolean;
            parser?: (displayValue: string) => import("./src/utils/MiniDecimal").ValueType;
            formatter?: (value: import("./src/utils/MiniDecimal").ValueType, info: {
                userTyping: boolean;
                input: string;
            }) => string;
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
            tabindex?: number;
            readonly type?: string;
            readonly precision?: number;
            role?: string;
            readonly id?: string;
            readonly placeholder?: string;
            readonly prefix?: any;
            readonly valueModifiers?: Record<string, any>;
            readonly addonBefore?: any;
            readonly addonAfter?: any;
            readonly decimalSeparator?: string;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            addonBefore?: any;
            addonAfter?: any;
            prefix?: any;
            default?: any;
            upIcon?: any;
            downIcon?: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            size: {
                type: import("vue").PropType<SizeType>;
                default: SizeType;
            };
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            placeholder: StringConstructor;
            name: StringConstructor;
            id: StringConstructor;
            type: StringConstructor;
            addonBefore: import("vue-types").VueTypeValidableDef<any>;
            addonAfter: import("vue-types").VueTypeValidableDef<any>;
            prefix: import("vue-types").VueTypeValidableDef<any>;
            'onUpdate:value': {
                type: import("vue").PropType<(value: import("./src/utils/MiniDecimal").ValueType) => void>;
                default: (value: import("./src/utils/MiniDecimal").ValueType) => void;
            };
            valueModifiers: ObjectConstructor;
            status: {
                type: import("vue").PropType<"" | "error" | "warning">;
                default: "" | "error" | "warning";
            };
            stringMode: {
                type: BooleanConstructor;
                default: boolean;
            };
            defaultValue: {
                type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
                default: import("./src/utils/MiniDecimal").ValueType;
            };
            value: {
                type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
                default: import("./src/utils/MiniDecimal").ValueType;
            };
            prefixCls: {
                type: import("vue").PropType<string>;
                default: string;
            };
            min: {
                type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
                default: import("./src/utils/MiniDecimal").ValueType;
            };
            max: {
                type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
                default: import("./src/utils/MiniDecimal").ValueType;
            };
            step: {
                type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
                default: import("./src/utils/MiniDecimal").ValueType;
            };
            tabindex: NumberConstructor;
            controls: {
                type: BooleanConstructor;
                default: boolean;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            autofocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            keyboard: {
                type: BooleanConstructor;
                default: boolean;
            };
            parser: {
                type: import("vue").PropType<(displayValue: string) => import("./src/utils/MiniDecimal").ValueType>;
                default: (displayValue: string) => import("./src/utils/MiniDecimal").ValueType;
            };
            formatter: {
                type: import("vue").PropType<(value: import("./src/utils/MiniDecimal").ValueType, info: {
                    userTyping: boolean;
                    input: string;
                }) => string>;
                default: (value: import("./src/utils/MiniDecimal").ValueType, info: {
                    userTyping: boolean;
                    input: string;
                }) => string;
            };
            precision: NumberConstructor;
            decimalSeparator: StringConstructor;
            onInput: {
                type: import("vue").PropType<(text: string) => void>;
                default: (text: string) => void;
            };
            onChange: {
                type: import("vue").PropType<(value: import("./src/utils/MiniDecimal").ValueType) => void>;
                default: (value: import("./src/utils/MiniDecimal").ValueType) => void;
            };
            onPressEnter: {
                type: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
                default: import("../_util/EventInterface").KeyboardEventHandler;
            };
            onStep: {
                type: import("vue").PropType<(value: import("./src/utils/MiniDecimal").ValueType, info: {
                    offset: import("./src/utils/MiniDecimal").ValueType;
                    type: "up" | "down";
                }) => void>;
                default: (value: import("./src/utils/MiniDecimal").ValueType, info: {
                    offset: import("./src/utils/MiniDecimal").ValueType;
                    type: "up" | "down";
                }) => void;
            };
            onBlur: {
                type: import("vue").PropType<(e: FocusEvent) => void>;
                default: (e: FocusEvent) => void;
            };
            onFocus: {
                type: import("vue").PropType<(e: FocusEvent) => void>;
                default: (e: FocusEvent) => void;
            };
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            value: import("./src/utils/MiniDecimal").ValueType;
            onFocus: (e: FocusEvent) => void;
            onBlur: (e: FocusEvent) => void;
            onChange: (value: import("./src/utils/MiniDecimal").ValueType) => void;
            onInput: (text: string) => void;
            size: SizeType;
            disabled: boolean;
            max: import("./src/utils/MiniDecimal").ValueType;
            min: import("./src/utils/MiniDecimal").ValueType;
            prefixCls: string;
            readonly: boolean;
            autofocus: boolean;
            status: "" | "error" | "warning";
            defaultValue: import("./src/utils/MiniDecimal").ValueType;
            'onUpdate:value': (value: import("./src/utils/MiniDecimal").ValueType) => void;
            step: import("./src/utils/MiniDecimal").ValueType;
            bordered: boolean;
            onPressEnter: import("../_util/EventInterface").KeyboardEventHandler;
            keyboard: boolean;
            onStep: (value: import("./src/utils/MiniDecimal").ValueType, info: {
                offset: import("./src/utils/MiniDecimal").ValueType;
                type: "up" | "down";
            }) => void;
            stringMode: boolean;
            controls: boolean;
            parser: (displayValue: string) => import("./src/utils/MiniDecimal").ValueType;
            formatter: (value: import("./src/utils/MiniDecimal").ValueType, info: {
                userTyping: boolean;
                input: string;
            }) => string;
        }, {}, string, CustomSlotsType<{
            addonBefore?: any;
            addonAfter?: any;
            prefix?: any;
            default?: any;
            upIcon?: any;
            downIcon?: any;
        }>> & {
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
    } & Readonly<ExtractPropTypes<{
        size: {
            type: import("vue").PropType<SizeType>;
            default: SizeType;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        placeholder: StringConstructor;
        name: StringConstructor;
        id: StringConstructor;
        type: StringConstructor;
        addonBefore: import("vue-types").VueTypeValidableDef<any>;
        addonAfter: import("vue-types").VueTypeValidableDef<any>;
        prefix: import("vue-types").VueTypeValidableDef<any>;
        'onUpdate:value': {
            type: import("vue").PropType<(value: import("./src/utils/MiniDecimal").ValueType) => void>;
            default: (value: import("./src/utils/MiniDecimal").ValueType) => void;
        };
        valueModifiers: ObjectConstructor;
        status: {
            type: import("vue").PropType<"" | "error" | "warning">;
            default: "" | "error" | "warning";
        };
        stringMode: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultValue: {
            type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
            default: import("./src/utils/MiniDecimal").ValueType;
        };
        value: {
            type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
            default: import("./src/utils/MiniDecimal").ValueType;
        };
        prefixCls: {
            type: import("vue").PropType<string>;
            default: string;
        };
        min: {
            type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
            default: import("./src/utils/MiniDecimal").ValueType;
        };
        max: {
            type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
            default: import("./src/utils/MiniDecimal").ValueType;
        };
        step: {
            type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
            default: import("./src/utils/MiniDecimal").ValueType;
        };
        tabindex: NumberConstructor;
        controls: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        autofocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        keyboard: {
            type: BooleanConstructor;
            default: boolean;
        };
        parser: {
            type: import("vue").PropType<(displayValue: string) => import("./src/utils/MiniDecimal").ValueType>;
            default: (displayValue: string) => import("./src/utils/MiniDecimal").ValueType;
        };
        formatter: {
            type: import("vue").PropType<(value: import("./src/utils/MiniDecimal").ValueType, info: {
                userTyping: boolean;
                input: string;
            }) => string>;
            default: (value: import("./src/utils/MiniDecimal").ValueType, info: {
                userTyping: boolean;
                input: string;
            }) => string;
        };
        precision: NumberConstructor;
        decimalSeparator: StringConstructor;
        onInput: {
            type: import("vue").PropType<(text: string) => void>;
            default: (text: string) => void;
        };
        onChange: {
            type: import("vue").PropType<(value: import("./src/utils/MiniDecimal").ValueType) => void>;
            default: (value: import("./src/utils/MiniDecimal").ValueType) => void;
        };
        onPressEnter: {
            type: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
            default: import("../_util/EventInterface").KeyboardEventHandler;
        };
        onStep: {
            type: import("vue").PropType<(value: import("./src/utils/MiniDecimal").ValueType, info: {
                offset: import("./src/utils/MiniDecimal").ValueType;
                type: "up" | "down";
            }) => void>;
            default: (value: import("./src/utils/MiniDecimal").ValueType, info: {
                offset: import("./src/utils/MiniDecimal").ValueType;
                type: "up" | "down";
            }) => void;
        };
        onBlur: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
            default: (e: FocusEvent) => void;
        };
        onFocus: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
            default: (e: FocusEvent) => void;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    size: {
        type: import("vue").PropType<SizeType>;
        default: SizeType;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: StringConstructor;
    name: StringConstructor;
    id: StringConstructor;
    type: StringConstructor;
    addonBefore: import("vue-types").VueTypeValidableDef<any>;
    addonAfter: import("vue-types").VueTypeValidableDef<any>;
    prefix: import("vue-types").VueTypeValidableDef<any>;
    'onUpdate:value': {
        type: import("vue").PropType<(value: import("./src/utils/MiniDecimal").ValueType) => void>;
        default: (value: import("./src/utils/MiniDecimal").ValueType) => void;
    };
    valueModifiers: ObjectConstructor;
    status: {
        type: import("vue").PropType<"" | "error" | "warning">;
        default: "" | "error" | "warning";
    };
    stringMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultValue: {
        type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
        default: import("./src/utils/MiniDecimal").ValueType;
    };
    value: {
        type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
        default: import("./src/utils/MiniDecimal").ValueType;
    };
    prefixCls: {
        type: import("vue").PropType<string>;
        default: string;
    };
    min: {
        type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
        default: import("./src/utils/MiniDecimal").ValueType;
    };
    max: {
        type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
        default: import("./src/utils/MiniDecimal").ValueType;
    };
    step: {
        type: import("vue").PropType<import("./src/utils/MiniDecimal").ValueType>;
        default: import("./src/utils/MiniDecimal").ValueType;
    };
    tabindex: NumberConstructor;
    controls: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    keyboard: {
        type: BooleanConstructor;
        default: boolean;
    };
    parser: {
        type: import("vue").PropType<(displayValue: string) => import("./src/utils/MiniDecimal").ValueType>;
        default: (displayValue: string) => import("./src/utils/MiniDecimal").ValueType;
    };
    formatter: {
        type: import("vue").PropType<(value: import("./src/utils/MiniDecimal").ValueType, info: {
            userTyping: boolean;
            input: string;
        }) => string>;
        default: (value: import("./src/utils/MiniDecimal").ValueType, info: {
            userTyping: boolean;
            input: string;
        }) => string;
    };
    precision: NumberConstructor;
    decimalSeparator: StringConstructor;
    onInput: {
        type: import("vue").PropType<(text: string) => void>;
        default: (text: string) => void;
    };
    onChange: {
        type: import("vue").PropType<(value: import("./src/utils/MiniDecimal").ValueType) => void>;
        default: (value: import("./src/utils/MiniDecimal").ValueType) => void;
    };
    onPressEnter: {
        type: import("vue").PropType<import("../_util/EventInterface").KeyboardEventHandler>;
        default: import("../_util/EventInterface").KeyboardEventHandler;
    };
    onStep: {
        type: import("vue").PropType<(value: import("./src/utils/MiniDecimal").ValueType, info: {
            offset: import("./src/utils/MiniDecimal").ValueType;
            type: "up" | "down";
        }) => void>;
        default: (value: import("./src/utils/MiniDecimal").ValueType, info: {
            offset: import("./src/utils/MiniDecimal").ValueType;
            type: "up" | "down";
        }) => void;
    };
    onBlur: {
        type: import("vue").PropType<(e: FocusEvent) => void>;
        default: (e: FocusEvent) => void;
    };
    onFocus: {
        type: import("vue").PropType<(e: FocusEvent) => void>;
        default: (e: FocusEvent) => void;
    };
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    value: import("./src/utils/MiniDecimal").ValueType;
    onFocus: (e: FocusEvent) => void;
    onBlur: (e: FocusEvent) => void;
    onChange: (value: import("./src/utils/MiniDecimal").ValueType) => void;
    onInput: (text: string) => void;
    size: SizeType;
    disabled: boolean;
    max: import("./src/utils/MiniDecimal").ValueType;
    min: import("./src/utils/MiniDecimal").ValueType;
    prefixCls: string;
    readonly: boolean;
    autofocus: boolean;
    status: "" | "error" | "warning";
    defaultValue: import("./src/utils/MiniDecimal").ValueType;
    'onUpdate:value': (value: import("./src/utils/MiniDecimal").ValueType) => void;
    step: import("./src/utils/MiniDecimal").ValueType;
    bordered: boolean;
    onPressEnter: import("../_util/EventInterface").KeyboardEventHandler;
    keyboard: boolean;
    onStep: (value: import("./src/utils/MiniDecimal").ValueType, info: {
        offset: import("./src/utils/MiniDecimal").ValueType;
        type: "up" | "down";
    }) => void;
    stringMode: boolean;
    controls: boolean;
    parser: (displayValue: string) => import("./src/utils/MiniDecimal").ValueType;
    formatter: (value: import("./src/utils/MiniDecimal").ValueType, info: {
        userTyping: boolean;
        input: string;
    }) => string;
}, {}, string, CustomSlotsType<{
    addonBefore?: any;
    addonAfter?: any;
    prefix?: any;
    default?: any;
    upIcon?: any;
    downIcon?: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: App) => App<any>;
};
export default _default;
