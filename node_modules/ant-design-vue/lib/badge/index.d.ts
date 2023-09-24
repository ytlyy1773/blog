import type { Plugin } from 'vue';
import Ribbon from './Ribbon';
export type { BadgeProps } from './Badge';
export { Ribbon as BadgeRibbon };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            size?: "small" | "default";
            dot?: boolean;
            count?: any;
            showZero?: boolean;
            overflowCount?: number;
            numberStyle?: import("vue").CSSProperties;
            style?: unknown;
            readonly title?: string;
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
            readonly text?: any;
            readonly color?: import("../_util/type").LiteralUnion<"blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "volcano" | "geekblue">;
            readonly offset?: [string | number, string | number];
            readonly prefixCls?: string;
            role?: string;
            readonly status?: "error" | "default" | "success" | "processing" | "warning";
            readonly scrollNumberPrefixCls?: string;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            text: any;
            count: any;
            default: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            count: import("vue-types").VueTypeValidableDef<any> & {
                default: any;
            };
            showZero: {
                type: BooleanConstructor;
                default: any;
            };
            overflowCount: {
                type: NumberConstructor;
                default: number;
            };
            dot: {
                type: BooleanConstructor;
                default: any;
            };
            prefixCls: StringConstructor;
            scrollNumberPrefixCls: StringConstructor;
            status: {
                type: import("vue").PropType<"error" | "default" | "success" | "processing" | "warning">;
            };
            size: {
                type: import("vue").PropType<"small" | "default">;
                default: string;
            };
            color: import("vue").PropType<import("../_util/type").LiteralUnion<"blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "volcano" | "geekblue">>;
            text: import("vue-types").VueTypeValidableDef<any>;
            offset: import("vue").PropType<[string | number, string | number]>;
            numberStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            title: StringConstructor;
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            size: "small" | "default";
            dot: boolean;
            count: any;
            showZero: boolean;
            overflowCount: number;
            numberStyle: import("vue").CSSProperties;
        }, {}, string, import("../_util/type").CustomSlotsType<{
            text: any;
            count: any;
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
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        count: import("vue-types").VueTypeValidableDef<any> & {
            default: any;
        };
        showZero: {
            type: BooleanConstructor;
            default: any;
        };
        overflowCount: {
            type: NumberConstructor;
            default: number;
        };
        dot: {
            type: BooleanConstructor;
            default: any;
        };
        prefixCls: StringConstructor;
        scrollNumberPrefixCls: StringConstructor;
        status: {
            type: import("vue").PropType<"error" | "default" | "success" | "processing" | "warning">;
        };
        size: {
            type: import("vue").PropType<"small" | "default">;
            default: string;
        };
        color: import("vue").PropType<import("../_util/type").LiteralUnion<"blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "volcano" | "geekblue">>;
        text: import("vue-types").VueTypeValidableDef<any>;
        offset: import("vue").PropType<[string | number, string | number]>;
        numberStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        title: StringConstructor;
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    count: import("vue-types").VueTypeValidableDef<any> & {
        default: any;
    };
    showZero: {
        type: BooleanConstructor;
        default: any;
    };
    overflowCount: {
        type: NumberConstructor;
        default: number;
    };
    dot: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    scrollNumberPrefixCls: StringConstructor;
    status: {
        type: import("vue").PropType<"error" | "default" | "success" | "processing" | "warning">;
    };
    size: {
        type: import("vue").PropType<"small" | "default">;
        default: string;
    };
    color: import("vue").PropType<import("../_util/type").LiteralUnion<"blue" | "cyan" | "gold" | "green" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "yellow" | "volcano" | "geekblue">>;
    text: import("vue-types").VueTypeValidableDef<any>;
    offset: import("vue").PropType<[string | number, string | number]>;
    numberStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    title: StringConstructor;
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: "small" | "default";
    dot: boolean;
    count: any;
    showZero: boolean;
    overflowCount: number;
    numberStyle: import("vue").CSSProperties;
}, {}, string, import("../_util/type").CustomSlotsType<{
    text: any;
    count: any;
    default: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]> & {
    readonly Ribbon: typeof Ribbon;
};
export default _default;
