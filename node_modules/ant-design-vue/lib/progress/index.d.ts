export type { ProgressProps } from './props';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            size?: import("./props").ProgressSize;
            strokeLinecap?: "round" | "butt" | "square";
            type?: "circle" | "line" | "dashboard";
            success?: import("./props").SuccessProps;
            format?: (percent?: number, successPercent?: number) => import("../_util/type").VueNode;
            status?: "normal" | "active" | "success" | "exception";
            showInfo?: boolean;
            strokeColor?: string | string[] | import("./props").ProgressGradient;
            gapPosition?: "left" | "right" | "top" | "bottom";
            progressStatus?: "normal" | "active" | "success" | "exception";
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
            readonly width?: number;
            tabindex?: string | number;
            readonly strokeWidth?: number;
            readonly prefixCls?: string;
            role?: string;
            readonly percent?: number;
            readonly trailColor?: string;
            readonly gapDegree?: number;
            readonly steps?: number;
            readonly successPercent?: number;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: any;
            format?: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: {
                type: import("vue").PropType<"circle" | "line" | "dashboard">;
                default: "circle" | "line" | "dashboard";
            };
            percent: NumberConstructor;
            format: {
                type: import("vue").PropType<(percent?: number, successPercent?: number) => import("../_util/type").VueNode>;
                default: (percent?: number, successPercent?: number) => import("../_util/type").VueNode;
            };
            status: {
                type: import("vue").PropType<"normal" | "active" | "success" | "exception">;
                default: "normal" | "active" | "success" | "exception";
            };
            showInfo: {
                type: BooleanConstructor;
                default: boolean;
            };
            strokeWidth: NumberConstructor;
            strokeLinecap: {
                type: import("vue").PropType<"round" | "butt" | "square">;
                default: "round" | "butt" | "square";
            };
            strokeColor: {
                default: string | string[] | import("./props").ProgressGradient;
                type: import("vue").PropType<string | string[] | import("./props").ProgressGradient>;
            };
            trailColor: StringConstructor;
            width: NumberConstructor;
            success: {
                type: import("vue").PropType<import("./props").SuccessProps>;
                default: import("./props").SuccessProps;
            };
            gapDegree: NumberConstructor;
            gapPosition: {
                type: import("vue").PropType<"left" | "right" | "top" | "bottom">;
                default: "left" | "right" | "top" | "bottom";
            };
            size: {
                type: import("vue").PropType<import("./props").ProgressSize>;
                default: import("./props").ProgressSize;
            };
            steps: NumberConstructor;
            successPercent: NumberConstructor;
            title: StringConstructor;
            progressStatus: {
                type: import("vue").PropType<"normal" | "active" | "success" | "exception">;
                default: "normal" | "active" | "success" | "exception";
            };
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            size: import("./props").ProgressSize;
            strokeLinecap: "round" | "butt" | "square";
            type: "circle" | "line" | "dashboard";
            success: import("./props").SuccessProps;
            format: (percent?: number, successPercent?: number) => import("../_util/type").VueNode;
            status: "normal" | "active" | "success" | "exception";
            showInfo: boolean;
            strokeColor: string | string[] | import("./props").ProgressGradient;
            gapPosition: "left" | "right" | "top" | "bottom";
            progressStatus: "normal" | "active" | "success" | "exception";
        }, {}, string, import("../_util/type").CustomSlotsType<{
            default?: any;
            format?: any;
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
        type: {
            type: import("vue").PropType<"circle" | "line" | "dashboard">;
            default: "circle" | "line" | "dashboard";
        };
        percent: NumberConstructor;
        format: {
            type: import("vue").PropType<(percent?: number, successPercent?: number) => import("../_util/type").VueNode>;
            default: (percent?: number, successPercent?: number) => import("../_util/type").VueNode;
        };
        status: {
            type: import("vue").PropType<"normal" | "active" | "success" | "exception">;
            default: "normal" | "active" | "success" | "exception";
        };
        showInfo: {
            type: BooleanConstructor;
            default: boolean;
        };
        strokeWidth: NumberConstructor;
        strokeLinecap: {
            type: import("vue").PropType<"round" | "butt" | "square">;
            default: "round" | "butt" | "square";
        };
        strokeColor: {
            default: string | string[] | import("./props").ProgressGradient;
            type: import("vue").PropType<string | string[] | import("./props").ProgressGradient>;
        };
        trailColor: StringConstructor;
        width: NumberConstructor;
        success: {
            type: import("vue").PropType<import("./props").SuccessProps>;
            default: import("./props").SuccessProps;
        };
        gapDegree: NumberConstructor;
        gapPosition: {
            type: import("vue").PropType<"left" | "right" | "top" | "bottom">;
            default: "left" | "right" | "top" | "bottom";
        };
        size: {
            type: import("vue").PropType<import("./props").ProgressSize>;
            default: import("./props").ProgressSize;
        };
        steps: NumberConstructor;
        successPercent: NumberConstructor;
        title: StringConstructor;
        progressStatus: {
            type: import("vue").PropType<"normal" | "active" | "success" | "exception">;
            default: "normal" | "active" | "success" | "exception";
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    type: {
        type: import("vue").PropType<"circle" | "line" | "dashboard">;
        default: "circle" | "line" | "dashboard";
    };
    percent: NumberConstructor;
    format: {
        type: import("vue").PropType<(percent?: number, successPercent?: number) => import("../_util/type").VueNode>;
        default: (percent?: number, successPercent?: number) => import("../_util/type").VueNode;
    };
    status: {
        type: import("vue").PropType<"normal" | "active" | "success" | "exception">;
        default: "normal" | "active" | "success" | "exception";
    };
    showInfo: {
        type: BooleanConstructor;
        default: boolean;
    };
    strokeWidth: NumberConstructor;
    strokeLinecap: {
        type: import("vue").PropType<"round" | "butt" | "square">;
        default: "round" | "butt" | "square";
    };
    strokeColor: {
        default: string | string[] | import("./props").ProgressGradient;
        type: import("vue").PropType<string | string[] | import("./props").ProgressGradient>;
    };
    trailColor: StringConstructor;
    width: NumberConstructor;
    success: {
        type: import("vue").PropType<import("./props").SuccessProps>;
        default: import("./props").SuccessProps;
    };
    gapDegree: NumberConstructor;
    gapPosition: {
        type: import("vue").PropType<"left" | "right" | "top" | "bottom">;
        default: "left" | "right" | "top" | "bottom";
    };
    size: {
        type: import("vue").PropType<import("./props").ProgressSize>;
        default: import("./props").ProgressSize;
    };
    steps: NumberConstructor;
    successPercent: NumberConstructor;
    title: StringConstructor;
    progressStatus: {
        type: import("vue").PropType<"normal" | "active" | "success" | "exception">;
        default: "normal" | "active" | "success" | "exception";
    };
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: import("./props").ProgressSize;
    strokeLinecap: "round" | "butt" | "square";
    type: "circle" | "line" | "dashboard";
    success: import("./props").SuccessProps;
    format: (percent?: number, successPercent?: number) => import("../_util/type").VueNode;
    status: "normal" | "active" | "success" | "exception";
    showInfo: boolean;
    strokeColor: string | string[] | import("./props").ProgressGradient;
    gapPosition: "left" | "right" | "top" | "bottom";
    progressStatus: "normal" | "active" | "success" | "exception";
}, {}, string, import("../_util/type").CustomSlotsType<{
    default?: any;
    format?: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export default _default;
