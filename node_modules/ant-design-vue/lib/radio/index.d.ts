import type { Plugin } from 'vue';
import Group from './Group';
import Button from './RadioButton';
export type { RadioProps } from './Radio';
export type { RadioGroupProps } from './Group';
export type { RadioChangeEventTarget, RadioChangeEvent } from './interface';
export { Button, Group, Button as RadioButton, Group as RadioGroup };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            onClick?: import("../_util/EventInterface").MouseEventHandler;
            onFocus?: import("../_util/EventInterface").FocusEventHandler;
            onBlur?: import("../_util/EventInterface").FocusEventHandler;
            onChange?: (event: import("./interface").RadioChangeEvent) => void;
            disabled?: boolean;
            checked?: boolean;
            autofocus?: boolean;
            isGroup?: boolean;
            'onUpdate:checked'?: (checked: boolean) => void;
            'onUpdate:value'?: (checked: boolean) => void;
            style?: unknown;
            readonly value?: any;
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
            readonly prefixCls?: string;
            role?: string;
            readonly id?: string;
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
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
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
    } & Readonly<import("vue").ExtractPropTypes<{
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
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
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
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]> & {
    readonly Group: typeof Group;
    readonly Button: typeof Button;
};
export default _default;
