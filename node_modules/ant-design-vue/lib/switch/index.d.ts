import type { ExtractPropTypes, PropType } from 'vue';
import { nextTick } from 'vue';
import type { CustomSlotsType } from '../_util/type';
import type { FocusEventHandler } from '../_util/EventInterface';
export declare const SwitchSizes: ["small", "default"];
type CheckedType = boolean | string | number;
export declare const switchProps: () => {
    id: StringConstructor;
    prefixCls: StringConstructor;
    size: import("vue-types").VueTypeDef<"small" | "default">;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    checkedChildren: import("vue-types").VueTypeValidableDef<any>;
    unCheckedChildren: import("vue-types").VueTypeValidableDef<any>;
    tabindex: import("vue-types").VueTypeDef<string | number>;
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    checked: import("vue-types").VueTypeDef<string | number | boolean>;
    checkedValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    unCheckedValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    onChange: {
        type: PropType<(checked: CheckedType, e: Event) => void>;
    };
    onClick: {
        type: PropType<(checked: CheckedType, e: Event) => void>;
    };
    onKeydown: {
        type: PropType<(e: Event) => void>;
    };
    onMouseup: {
        type: PropType<(e: Event) => void>;
    };
    'onUpdate:checked': {
        type: PropType<(checked: CheckedType) => void>;
    };
    onBlur: PropType<FocusEventHandler>;
    onFocus: PropType<FocusEventHandler>;
};
export type SwitchProps = Partial<ExtractPropTypes<ReturnType<typeof switchProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            disabled?: boolean;
            autofocus?: boolean;
            loading?: boolean;
            checkedValue?: string | number | boolean;
            unCheckedValue?: string | number | boolean;
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
            class?: unknown;
            tabindex?: string | number;
            readonly onClick?: (checked: CheckedType, e: Event) => void;
            readonly onFocus?: FocusEventHandler;
            readonly onBlur?: FocusEventHandler;
            readonly onChange?: (checked: CheckedType, e: Event) => void;
            readonly onKeydown?: (e: Event) => void;
            readonly onMouseup?: (e: Event) => void;
            readonly size?: "small" | "default";
            readonly prefixCls?: string;
            role?: string;
            readonly id?: string;
            readonly checked?: string | number | boolean;
            readonly 'onUpdate:checked'?: (checked: CheckedType) => void;
            readonly checkedChildren?: any;
            readonly unCheckedChildren?: any;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            checkedChildren: any;
            unCheckedChildren: any;
            default: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            id: StringConstructor;
            prefixCls: StringConstructor;
            size: import("vue-types").VueTypeDef<"small" | "default">;
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            checkedChildren: import("vue-types").VueTypeValidableDef<any>;
            unCheckedChildren: import("vue-types").VueTypeValidableDef<any>;
            tabindex: import("vue-types").VueTypeDef<string | number>;
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            loading: {
                type: BooleanConstructor;
                default: any;
            };
            checked: import("vue-types").VueTypeDef<string | number | boolean>;
            checkedValue: import("vue-types").VueTypeDef<string | number | boolean> & {
                default: string | number | boolean;
            };
            unCheckedValue: import("vue-types").VueTypeDef<string | number | boolean> & {
                default: string | number | boolean;
            };
            onChange: {
                type: PropType<(checked: CheckedType, e: Event) => void>;
            };
            onClick: {
                type: PropType<(checked: CheckedType, e: Event) => void>;
            };
            onKeydown: {
                type: PropType<(e: Event) => void>;
            };
            onMouseup: {
                type: PropType<(e: Event) => void>;
            };
            'onUpdate:checked': {
                type: PropType<(checked: CheckedType) => void>;
            };
            onBlur: PropType<FocusEventHandler>;
            onFocus: PropType<FocusEventHandler>;
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            disabled: boolean;
            autofocus: boolean;
            loading: boolean;
            checkedValue: string | number | boolean;
            unCheckedValue: string | number | boolean;
        }, {}, string, CustomSlotsType<{
            checkedChildren: any;
            unCheckedChildren: any;
            default: any;
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
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<ExtractPropTypes<{
        id: StringConstructor;
        prefixCls: StringConstructor;
        size: import("vue-types").VueTypeDef<"small" | "default">;
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        checkedChildren: import("vue-types").VueTypeValidableDef<any>;
        unCheckedChildren: import("vue-types").VueTypeValidableDef<any>;
        tabindex: import("vue-types").VueTypeDef<string | number>;
        autofocus: {
            type: BooleanConstructor;
            default: any;
        };
        loading: {
            type: BooleanConstructor;
            default: any;
        };
        checked: import("vue-types").VueTypeDef<string | number | boolean>;
        checkedValue: import("vue-types").VueTypeDef<string | number | boolean> & {
            default: string | number | boolean;
        };
        unCheckedValue: import("vue-types").VueTypeDef<string | number | boolean> & {
            default: string | number | boolean;
        };
        onChange: {
            type: PropType<(checked: CheckedType, e: Event) => void>;
        };
        onClick: {
            type: PropType<(checked: CheckedType, e: Event) => void>;
        };
        onKeydown: {
            type: PropType<(e: Event) => void>;
        };
        onMouseup: {
            type: PropType<(e: Event) => void>;
        };
        'onUpdate:checked': {
            type: PropType<(checked: CheckedType) => void>;
        };
        onBlur: PropType<FocusEventHandler>;
        onFocus: PropType<FocusEventHandler>;
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    id: StringConstructor;
    prefixCls: StringConstructor;
    size: import("vue-types").VueTypeDef<"small" | "default">;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    checkedChildren: import("vue-types").VueTypeValidableDef<any>;
    unCheckedChildren: import("vue-types").VueTypeValidableDef<any>;
    tabindex: import("vue-types").VueTypeDef<string | number>;
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    checked: import("vue-types").VueTypeDef<string | number | boolean>;
    checkedValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    unCheckedValue: import("vue-types").VueTypeDef<string | number | boolean> & {
        default: string | number | boolean;
    };
    onChange: {
        type: PropType<(checked: CheckedType, e: Event) => void>;
    };
    onClick: {
        type: PropType<(checked: CheckedType, e: Event) => void>;
    };
    onKeydown: {
        type: PropType<(e: Event) => void>;
    };
    onMouseup: {
        type: PropType<(e: Event) => void>;
    };
    'onUpdate:checked': {
        type: PropType<(checked: CheckedType) => void>;
    };
    onBlur: PropType<FocusEventHandler>;
    onFocus: PropType<FocusEventHandler>;
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    disabled: boolean;
    autofocus: boolean;
    loading: boolean;
    checkedValue: string | number | boolean;
    unCheckedValue: string | number | boolean;
}, {}, string, CustomSlotsType<{
    checkedChildren: any;
    unCheckedChildren: any;
    default: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export default _default;
