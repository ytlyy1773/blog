import type { ExtractPropTypes } from 'vue';
import { qrcodeProps } from './interface';
export type QRCodeProps = Partial<ExtractPropTypes<ReturnType<typeof qrcodeProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            size?: number;
            type?: "canvas" | "svg";
            status?: "active" | "loading" | "expired";
            bordered?: boolean;
            includeMargin?: boolean;
            imageSettings?: import("./interface").ImageSettings;
            errorLevel?: "M" | "H" | "Q" | "L";
            iconSize?: number;
            style?: unknown;
            readonly value?: string;
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
            readonly color?: string;
            readonly icon?: string;
            readonly bgColor?: string;
            role?: string;
            onRefresh?: (...args: any[]) => any;
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
        $emit: (event: "refresh", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            errorLevel: {
                type: import("vue").PropType<"M" | "H" | "Q" | "L">;
                default: "M" | "H" | "Q" | "L";
            };
            icon: StringConstructor;
            iconSize: {
                type: NumberConstructor;
                default: number;
            };
            status: {
                type: import("vue").PropType<"active" | "loading" | "expired">;
                default: "active" | "loading" | "expired";
            };
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: NumberConstructor;
                default: number;
            };
            value: {
                type: StringConstructor;
                required: boolean;
            };
            type: {
                type: import("vue").PropType<"canvas" | "svg">;
                default: "canvas" | "svg";
            };
            color: StringConstructor;
            bgColor: StringConstructor;
            includeMargin: BooleanConstructor;
            imageSettings: {
                type: import("vue").PropType<import("./interface").ImageSettings>;
                default: import("./interface").ImageSettings;
            };
        }>> & {
            onRefresh?: (...args: any[]) => any;
        }, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "refresh"[], string, {
            size: number;
            type: "canvas" | "svg";
            status: "active" | "loading" | "expired";
            bordered: boolean;
            includeMargin: boolean;
            imageSettings: import("./interface").ImageSettings;
            errorLevel: "M" | "H" | "Q" | "L";
            iconSize: number;
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
        errorLevel: {
            type: import("vue").PropType<"M" | "H" | "Q" | "L">;
            default: "M" | "H" | "Q" | "L";
        };
        icon: StringConstructor;
        iconSize: {
            type: NumberConstructor;
            default: number;
        };
        status: {
            type: import("vue").PropType<"active" | "loading" | "expired">;
            default: "active" | "loading" | "expired";
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: NumberConstructor;
            default: number;
        };
        value: {
            type: StringConstructor;
            required: boolean;
        };
        type: {
            type: import("vue").PropType<"canvas" | "svg">;
            default: "canvas" | "svg";
        };
        color: StringConstructor;
        bgColor: StringConstructor;
        includeMargin: BooleanConstructor;
        imageSettings: {
            type: import("vue").PropType<import("./interface").ImageSettings>;
            default: import("./interface").ImageSettings;
        };
    }>> & {
        onRefresh?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    errorLevel: {
        type: import("vue").PropType<"M" | "H" | "Q" | "L">;
        default: "M" | "H" | "Q" | "L";
    };
    icon: StringConstructor;
    iconSize: {
        type: NumberConstructor;
        default: number;
    };
    status: {
        type: import("vue").PropType<"active" | "loading" | "expired">;
        default: "active" | "loading" | "expired";
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    value: {
        type: StringConstructor;
        required: boolean;
    };
    type: {
        type: import("vue").PropType<"canvas" | "svg">;
        default: "canvas" | "svg";
    };
    color: StringConstructor;
    bgColor: StringConstructor;
    includeMargin: BooleanConstructor;
    imageSettings: {
        type: import("vue").PropType<import("./interface").ImageSettings>;
        default: import("./interface").ImageSettings;
    };
}>> & {
    onRefresh?: (...args: any[]) => any;
}, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "refresh"[], "refresh", {
    size: number;
    type: "canvas" | "svg";
    status: "active" | "loading" | "expired";
    bordered: boolean;
    includeMargin: boolean;
    imageSettings: import("./interface").ImageSettings;
    errorLevel: "M" | "H" | "Q" | "L";
    iconSize: number;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export default _default;
