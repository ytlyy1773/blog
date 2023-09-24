export type { RowProps } from '../grid';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            wrap?: boolean;
            justify?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start" | {
                sm?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                lg?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                xxl?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                xl?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                md?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                xs?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
            };
            align?: "top" | "stretch" | "bottom" | "middle" | {
                sm?: "top" | "stretch" | "bottom" | "middle";
                lg?: "top" | "stretch" | "bottom" | "middle";
                xxl?: "top" | "stretch" | "bottom" | "middle";
                xl?: "top" | "stretch" | "bottom" | "middle";
                md?: "top" | "stretch" | "bottom" | "middle";
                xs?: "top" | "stretch" | "bottom" | "middle";
            };
            gutter?: number | Partial<Record<import("../_util/responsiveObserve").Breakpoint, number>> | [import("../grid/Row").Gutter, import("../grid/Row").Gutter];
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
            readonly prefixCls?: string;
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
            align: {
                type: import("vue").PropType<"top" | "stretch" | "bottom" | "middle" | {
                    sm?: "top" | "stretch" | "bottom" | "middle";
                    lg?: "top" | "stretch" | "bottom" | "middle";
                    xxl?: "top" | "stretch" | "bottom" | "middle";
                    xl?: "top" | "stretch" | "bottom" | "middle";
                    md?: "top" | "stretch" | "bottom" | "middle";
                    xs?: "top" | "stretch" | "bottom" | "middle";
                }>;
                default: "top" | "stretch" | "bottom" | "middle" | {
                    sm?: "top" | "stretch" | "bottom" | "middle";
                    lg?: "top" | "stretch" | "bottom" | "middle";
                    xxl?: "top" | "stretch" | "bottom" | "middle";
                    xl?: "top" | "stretch" | "bottom" | "middle";
                    md?: "top" | "stretch" | "bottom" | "middle";
                    xs?: "top" | "stretch" | "bottom" | "middle";
                };
            };
            justify: {
                type: import("vue").PropType<"space-around" | "space-between" | "space-evenly" | "center" | "end" | "start" | {
                    sm?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                    lg?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                    xxl?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                    xl?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                    md?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                    xs?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                }>;
                default: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start" | {
                    sm?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                    lg?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                    xxl?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                    xl?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                    md?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                    xs?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                };
            };
            prefixCls: StringConstructor;
            gutter: {
                type: import("vue").PropType<import("../grid/Row").Gutter | [import("../grid/Row").Gutter, import("../grid/Row").Gutter]>;
                default: import("../grid/Row").Gutter | [import("../grid/Row").Gutter, import("../grid/Row").Gutter];
            };
            wrap: {
                type: BooleanConstructor;
                default: any;
            };
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            wrap: boolean;
            justify: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start" | {
                sm?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                lg?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                xxl?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                xl?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                md?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                xs?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
            };
            align: "top" | "stretch" | "bottom" | "middle" | {
                sm?: "top" | "stretch" | "bottom" | "middle";
                lg?: "top" | "stretch" | "bottom" | "middle";
                xxl?: "top" | "stretch" | "bottom" | "middle";
                xl?: "top" | "stretch" | "bottom" | "middle";
                md?: "top" | "stretch" | "bottom" | "middle";
                xs?: "top" | "stretch" | "bottom" | "middle";
            };
            gutter: number | Partial<Record<import("../_util/responsiveObserve").Breakpoint, number>> | [import("../grid/Row").Gutter, import("../grid/Row").Gutter];
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
        align: {
            type: import("vue").PropType<"top" | "stretch" | "bottom" | "middle" | {
                sm?: "top" | "stretch" | "bottom" | "middle";
                lg?: "top" | "stretch" | "bottom" | "middle";
                xxl?: "top" | "stretch" | "bottom" | "middle";
                xl?: "top" | "stretch" | "bottom" | "middle";
                md?: "top" | "stretch" | "bottom" | "middle";
                xs?: "top" | "stretch" | "bottom" | "middle";
            }>;
            default: "top" | "stretch" | "bottom" | "middle" | {
                sm?: "top" | "stretch" | "bottom" | "middle";
                lg?: "top" | "stretch" | "bottom" | "middle";
                xxl?: "top" | "stretch" | "bottom" | "middle";
                xl?: "top" | "stretch" | "bottom" | "middle";
                md?: "top" | "stretch" | "bottom" | "middle";
                xs?: "top" | "stretch" | "bottom" | "middle";
            };
        };
        justify: {
            type: import("vue").PropType<"space-around" | "space-between" | "space-evenly" | "center" | "end" | "start" | {
                sm?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                lg?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                xxl?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                xl?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                md?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                xs?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
            }>;
            default: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start" | {
                sm?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                lg?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                xxl?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                xl?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                md?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
                xs?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
            };
        };
        prefixCls: StringConstructor;
        gutter: {
            type: import("vue").PropType<import("../grid/Row").Gutter | [import("../grid/Row").Gutter, import("../grid/Row").Gutter]>;
            default: import("../grid/Row").Gutter | [import("../grid/Row").Gutter, import("../grid/Row").Gutter];
        };
        wrap: {
            type: BooleanConstructor;
            default: any;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    align: {
        type: import("vue").PropType<"top" | "stretch" | "bottom" | "middle" | {
            sm?: "top" | "stretch" | "bottom" | "middle";
            lg?: "top" | "stretch" | "bottom" | "middle";
            xxl?: "top" | "stretch" | "bottom" | "middle";
            xl?: "top" | "stretch" | "bottom" | "middle";
            md?: "top" | "stretch" | "bottom" | "middle";
            xs?: "top" | "stretch" | "bottom" | "middle";
        }>;
        default: "top" | "stretch" | "bottom" | "middle" | {
            sm?: "top" | "stretch" | "bottom" | "middle";
            lg?: "top" | "stretch" | "bottom" | "middle";
            xxl?: "top" | "stretch" | "bottom" | "middle";
            xl?: "top" | "stretch" | "bottom" | "middle";
            md?: "top" | "stretch" | "bottom" | "middle";
            xs?: "top" | "stretch" | "bottom" | "middle";
        };
    };
    justify: {
        type: import("vue").PropType<"space-around" | "space-between" | "space-evenly" | "center" | "end" | "start" | {
            sm?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
            lg?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
            xxl?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
            xl?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
            md?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
            xs?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
        }>;
        default: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start" | {
            sm?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
            lg?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
            xxl?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
            xl?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
            md?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
            xs?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
        };
    };
    prefixCls: StringConstructor;
    gutter: {
        type: import("vue").PropType<import("../grid/Row").Gutter | [import("../grid/Row").Gutter, import("../grid/Row").Gutter]>;
        default: import("../grid/Row").Gutter | [import("../grid/Row").Gutter, import("../grid/Row").Gutter];
    };
    wrap: {
        type: BooleanConstructor;
        default: any;
    };
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    wrap: boolean;
    justify: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start" | {
        sm?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
        lg?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
        xxl?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
        xl?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
        md?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
        xs?: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
    };
    align: "top" | "stretch" | "bottom" | "middle" | {
        sm?: "top" | "stretch" | "bottom" | "middle";
        lg?: "top" | "stretch" | "bottom" | "middle";
        xxl?: "top" | "stretch" | "bottom" | "middle";
        xl?: "top" | "stretch" | "bottom" | "middle";
        md?: "top" | "stretch" | "bottom" | "middle";
        xs?: "top" | "stretch" | "bottom" | "middle";
    };
    gutter: number | Partial<Record<import("../_util/responsiveObserve").Breakpoint, number>> | [import("../grid/Row").Gutter, import("../grid/Row").Gutter];
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export default _default;
