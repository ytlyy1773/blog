import type { Plugin } from 'vue';
import CheckboxGroup from './Group';
export type { CheckboxProps, CheckboxGroupProps, CheckboxOptionType } from './interface';
export { checkboxProps, checkboxGroupProps } from './interface';
export { CheckboxGroup };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            onClick?: import("../_util/EventInterface").MouseEventHandler;
            onChange?: (e: import("./interface").CheckboxChangeEvent) => void;
            disabled?: boolean;
            type?: "checkbox";
            defaultChecked?: boolean;
            checked?: boolean;
            autofocus?: boolean;
            indeterminate?: boolean;
            isGroup?: boolean;
            'onUpdate:checked'?: (checked: boolean) => void;
            skipGroup?: boolean;
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
                type: import("vue").PropType<(e: import("./interface").CheckboxChangeEvent) => void>;
                default: (e: import("./interface").CheckboxChangeEvent) => void;
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
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            onClick: import("../_util/EventInterface").MouseEventHandler;
            onChange: (e: import("./interface").CheckboxChangeEvent) => void;
            disabled: boolean;
            type: "checkbox";
            defaultChecked: boolean;
            checked: boolean;
            autofocus: boolean;
            indeterminate: boolean;
            isGroup: boolean;
            'onUpdate:checked': (checked: boolean) => void;
            skipGroup: boolean;
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
            type: import("vue").PropType<(e: import("./interface").CheckboxChangeEvent) => void>;
            default: (e: import("./interface").CheckboxChangeEvent) => void;
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
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<(e: import("./interface").CheckboxChangeEvent) => void>;
        default: (e: import("./interface").CheckboxChangeEvent) => void;
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
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    onClick: import("../_util/EventInterface").MouseEventHandler;
    onChange: (e: import("./interface").CheckboxChangeEvent) => void;
    disabled: boolean;
    type: "checkbox";
    defaultChecked: boolean;
    checked: boolean;
    autofocus: boolean;
    indeterminate: boolean;
    isGroup: boolean;
    'onUpdate:checked': (checked: boolean) => void;
    skipGroup: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]> & {
    readonly Group: typeof CheckboxGroup;
};
export default _default;
