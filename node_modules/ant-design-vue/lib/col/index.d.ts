export type { ColProps, ColSize } from '../grid';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            sm?: string | number | import("../grid").ColSize;
            lg?: string | number | import("../grid").ColSize;
            xxl?: string | number | import("../grid").ColSize;
            xl?: string | number | import("../grid").ColSize;
            md?: string | number | import("../grid").ColSize;
            xs?: string | number | import("../grid").ColSize;
            readonly span?: string | number;
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
            readonly push?: string | number;
            tabindex?: string | number;
            readonly flex?: string | number;
            readonly order?: string | number;
            readonly offset?: string | number;
            readonly prefixCls?: string;
            readonly pull?: string | number;
            role?: string;
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
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            sm: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            md: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            lg: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            xl: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            xxl: {
                type: import("vue").PropType<string | number | import("../grid").ColSize>;
                default: string | number | import("../grid").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            sm: string | number | import("../grid").ColSize;
            lg: string | number | import("../grid").ColSize;
            xxl: string | number | import("../grid").ColSize;
            xl: string | number | import("../grid").ColSize;
            md: string | number | import("../grid").ColSize;
            xs: string | number | import("../grid").ColSize;
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
        span: (StringConstructor | NumberConstructor)[];
        order: (StringConstructor | NumberConstructor)[];
        offset: (StringConstructor | NumberConstructor)[];
        push: (StringConstructor | NumberConstructor)[];
        pull: (StringConstructor | NumberConstructor)[];
        xs: {
            type: import("vue").PropType<string | number | import("../grid").ColSize>;
            default: string | number | import("../grid").ColSize;
        };
        sm: {
            type: import("vue").PropType<string | number | import("../grid").ColSize>;
            default: string | number | import("../grid").ColSize;
        };
        md: {
            type: import("vue").PropType<string | number | import("../grid").ColSize>;
            default: string | number | import("../grid").ColSize;
        };
        lg: {
            type: import("vue").PropType<string | number | import("../grid").ColSize>;
            default: string | number | import("../grid").ColSize;
        };
        xl: {
            type: import("vue").PropType<string | number | import("../grid").ColSize>;
            default: string | number | import("../grid").ColSize;
        };
        xxl: {
            type: import("vue").PropType<string | number | import("../grid").ColSize>;
            default: string | number | import("../grid").ColSize;
        };
        prefixCls: StringConstructor;
        flex: (StringConstructor | NumberConstructor)[];
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    span: (StringConstructor | NumberConstructor)[];
    order: (StringConstructor | NumberConstructor)[];
    offset: (StringConstructor | NumberConstructor)[];
    push: (StringConstructor | NumberConstructor)[];
    pull: (StringConstructor | NumberConstructor)[];
    xs: {
        type: import("vue").PropType<string | number | import("../grid").ColSize>;
        default: string | number | import("../grid").ColSize;
    };
    sm: {
        type: import("vue").PropType<string | number | import("../grid").ColSize>;
        default: string | number | import("../grid").ColSize;
    };
    md: {
        type: import("vue").PropType<string | number | import("../grid").ColSize>;
        default: string | number | import("../grid").ColSize;
    };
    lg: {
        type: import("vue").PropType<string | number | import("../grid").ColSize>;
        default: string | number | import("../grid").ColSize;
    };
    xl: {
        type: import("vue").PropType<string | number | import("../grid").ColSize>;
        default: string | number | import("../grid").ColSize;
    };
    xxl: {
        type: import("vue").PropType<string | number | import("../grid").ColSize>;
        default: string | number | import("../grid").ColSize;
    };
    prefixCls: StringConstructor;
    flex: (StringConstructor | NumberConstructor)[];
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    sm: string | number | import("../grid").ColSize;
    lg: string | number | import("../grid").ColSize;
    xxl: string | number | import("../grid").ColSize;
    xl: string | number | import("../grid").ColSize;
    md: string | number | import("../grid").ColSize;
    xs: string | number | import("../grid").ColSize;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export default _default;
