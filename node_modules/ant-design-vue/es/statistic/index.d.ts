import type { Plugin } from 'vue';
import Countdown from './Countdown';
export type { StatisticProps } from './Statistic';
export declare const StatisticCountdown: any;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            value?: import("./utils").valueType;
            loading?: boolean;
            formatter?: import("./utils").Formatter;
            valueStyle?: import("vue").CSSProperties;
            valueRender?: (node: import("../_util/type").VueNode) => import("../_util/type").VueNode;
            style?: unknown;
            readonly title?: import("../_util/type").VueNode;
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
            readonly precision?: number;
            readonly prefixCls?: string;
            readonly format?: string;
            role?: string;
            readonly suffix?: import("../_util/type").VueNode;
            readonly prefix?: import("../_util/type").VueNode;
            readonly decimalSeparator?: string;
            readonly groupSeparator?: string;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            title?: any;
            prefix?: any;
            suffix?: any;
            formatter?: any;
            default?: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            decimalSeparator: StringConstructor;
            groupSeparator: StringConstructor;
            format: StringConstructor;
            value: {
                type: import("vue").PropType<import("./utils").valueType>;
                default: import("./utils").valueType;
            };
            valueStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            valueRender: {
                type: import("vue").PropType<(node: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
                default: (node: import("../_util/type").VueNode) => import("../_util/type").VueNode;
            };
            formatter: {
                default: import("./utils").Formatter;
                type: import("vue").PropType<import("./utils").Formatter>;
            };
            precision: NumberConstructor;
            prefix: {
                type: import("vue").PropType<import("../_util/type").VueNode>;
            };
            suffix: {
                type: import("vue").PropType<import("../_util/type").VueNode>;
            };
            title: {
                type: import("vue").PropType<import("../_util/type").VueNode>;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            value: import("./utils").valueType;
            loading: boolean;
            formatter: import("./utils").Formatter;
            valueStyle: import("vue").CSSProperties;
            valueRender: (node: import("../_util/type").VueNode) => import("../_util/type").VueNode;
        }, {}, string, import("../_util/type").CustomSlotsType<{
            title?: any;
            prefix?: any;
            suffix?: any;
            formatter?: any;
            default?: any;
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
    } & Readonly<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        decimalSeparator: StringConstructor;
        groupSeparator: StringConstructor;
        format: StringConstructor;
        value: {
            type: import("vue").PropType<import("./utils").valueType>;
            default: import("./utils").valueType;
        };
        valueStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        valueRender: {
            type: import("vue").PropType<(node: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
            default: (node: import("../_util/type").VueNode) => import("../_util/type").VueNode;
        };
        formatter: {
            default: import("./utils").Formatter;
            type: import("vue").PropType<import("./utils").Formatter>;
        };
        precision: NumberConstructor;
        prefix: {
            type: import("vue").PropType<import("../_util/type").VueNode>;
        };
        suffix: {
            type: import("vue").PropType<import("../_util/type").VueNode>;
        };
        title: {
            type: import("vue").PropType<import("../_util/type").VueNode>;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    decimalSeparator: StringConstructor;
    groupSeparator: StringConstructor;
    format: StringConstructor;
    value: {
        type: import("vue").PropType<import("./utils").valueType>;
        default: import("./utils").valueType;
    };
    valueStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    valueRender: {
        type: import("vue").PropType<(node: import("../_util/type").VueNode) => import("../_util/type").VueNode>;
        default: (node: import("../_util/type").VueNode) => import("../_util/type").VueNode;
    };
    formatter: {
        default: import("./utils").Formatter;
        type: import("vue").PropType<import("./utils").Formatter>;
    };
    precision: NumberConstructor;
    prefix: {
        type: import("vue").PropType<import("../_util/type").VueNode>;
    };
    suffix: {
        type: import("vue").PropType<import("../_util/type").VueNode>;
    };
    title: {
        type: import("vue").PropType<import("../_util/type").VueNode>;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    value: import("./utils").valueType;
    loading: boolean;
    formatter: import("./utils").Formatter;
    valueStyle: import("vue").CSSProperties;
    valueRender: (node: import("../_util/type").VueNode) => import("../_util/type").VueNode;
}, {}, string, import("../_util/type").CustomSlotsType<{
    title?: any;
    prefix?: any;
    suffix?: any;
    formatter?: any;
    default?: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]> & {
    readonly Countdown: typeof Countdown;
};
export default _default;
