import type { ExtractPropTypes, PropType, VNode } from 'vue';
import type { Direction } from '../config-provider';
import type { FocusEventHandler, KeyboardEventHandler } from '../_util/EventInterface';
export declare const rateProps: () => {
    prefixCls: StringConstructor;
    count: NumberConstructor;
    value: NumberConstructor;
    allowHalf: {
        type: BooleanConstructor;
        default: any;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    tooltips: PropType<string[]>;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    character: import("vue-types").VueTypeValidableDef<any>;
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    tabindex: import("vue-types").VueTypeDef<string | number>;
    direction: PropType<Direction>;
    id: StringConstructor;
    onChange: PropType<(value: number) => void>;
    onHoverChange: PropType<(value: number) => void>;
    'onUpdate:value': PropType<(value: number) => void>;
    onFocus: PropType<FocusEventHandler>;
    onBlur: PropType<FocusEventHandler>;
    onKeydown: PropType<KeyboardEventHandler>;
};
export type RateProps = Partial<ExtractPropTypes<ReturnType<typeof rateProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            disabled?: boolean;
            autofocus?: boolean;
            allowClear?: boolean;
            allowHalf?: boolean;
            style?: unknown;
            readonly value?: number;
            ref?: import("vue").VNodeRef;
            key?: string | number | symbol;
            ref_for?: boolean;
            ref_key?: string;
            onVnodeBeforeMount?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeMounted?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeBeforeUpdate?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeUpdated?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeBeforeUnmount?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeUnmounted?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            class?: unknown;
            tabindex?: string | number;
            readonly onFocus?: FocusEventHandler;
            readonly onBlur?: FocusEventHandler;
            readonly onChange?: (value: number) => void;
            readonly onKeydown?: KeyboardEventHandler;
            readonly direction?: Direction;
            readonly prefixCls?: string;
            role?: string;
            readonly id?: string;
            readonly 'onUpdate:value'?: (value: number) => void;
            readonly count?: number;
            readonly character?: any;
            readonly tooltips?: string[];
            readonly onHoverChange?: (value: number) => void;
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
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            prefixCls: StringConstructor;
            count: NumberConstructor;
            value: NumberConstructor;
            allowHalf: {
                type: BooleanConstructor;
                default: any;
            };
            allowClear: {
                type: BooleanConstructor;
                default: any;
            };
            tooltips: PropType<string[]>;
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            character: import("vue-types").VueTypeValidableDef<any>;
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            tabindex: import("vue-types").VueTypeDef<string | number>;
            direction: PropType<Direction>;
            id: StringConstructor;
            onChange: PropType<(value: number) => void>;
            onHoverChange: PropType<(value: number) => void>;
            'onUpdate:value': PropType<(value: number) => void>;
            onFocus: PropType<FocusEventHandler>;
            onBlur: PropType<FocusEventHandler>;
            onKeydown: PropType<KeyboardEventHandler>;
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            disabled: boolean;
            autofocus: boolean;
            allowClear: boolean;
            allowHalf: boolean;
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
    } & Readonly<ExtractPropTypes<{
        prefixCls: StringConstructor;
        count: NumberConstructor;
        value: NumberConstructor;
        allowHalf: {
            type: BooleanConstructor;
            default: any;
        };
        allowClear: {
            type: BooleanConstructor;
            default: any;
        };
        tooltips: PropType<string[]>;
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        character: import("vue-types").VueTypeValidableDef<any>;
        autofocus: {
            type: BooleanConstructor;
            default: any;
        };
        tabindex: import("vue-types").VueTypeDef<string | number>;
        direction: PropType<Direction>;
        id: StringConstructor;
        onChange: PropType<(value: number) => void>;
        onHoverChange: PropType<(value: number) => void>;
        'onUpdate:value': PropType<(value: number) => void>;
        onFocus: PropType<FocusEventHandler>;
        onBlur: PropType<FocusEventHandler>;
        onKeydown: PropType<KeyboardEventHandler>;
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    count: NumberConstructor;
    value: NumberConstructor;
    allowHalf: {
        type: BooleanConstructor;
        default: any;
    };
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    tooltips: PropType<string[]>;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    character: import("vue-types").VueTypeValidableDef<any>;
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    tabindex: import("vue-types").VueTypeDef<string | number>;
    direction: PropType<Direction>;
    id: StringConstructor;
    onChange: PropType<(value: number) => void>;
    onHoverChange: PropType<(value: number) => void>;
    'onUpdate:value': PropType<(value: number) => void>;
    onFocus: PropType<FocusEventHandler>;
    onBlur: PropType<FocusEventHandler>;
    onKeydown: PropType<KeyboardEventHandler>;
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    disabled: boolean;
    autofocus: boolean;
    allowClear: boolean;
    allowHalf: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export default _default;
