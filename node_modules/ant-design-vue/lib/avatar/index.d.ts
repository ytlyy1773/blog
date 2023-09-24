import type { Plugin } from 'vue';
import Group from './Group';
export { avatarProps } from './Avatar';
export type { AvatarProps, AvatarSize } from './Avatar';
export type { AvatarGroupProps } from './Group';
export { Group as AvatarGroup };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            draggable?: boolean;
            size?: import("./Avatar").AvatarSize;
            shape?: "circle" | "square";
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
            readonly icon?: any;
            readonly gap?: number;
            readonly prefixCls?: string;
            role?: string;
            readonly src?: string;
            readonly srcset?: string;
            readonly alt?: string;
            readonly crossOrigin?: "" | "anonymous" | "use-credentials";
            readonly loadError?: () => boolean;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            icon: any;
            default: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            shape: {
                type: import("vue").PropType<"circle" | "square">;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("./Avatar").AvatarSize>;
                default: () => import("./Avatar").AvatarSize;
            };
            src: StringConstructor;
            srcset: StringConstructor;
            icon: import("vue-types").VueTypeValidableDef<any>;
            alt: StringConstructor;
            gap: NumberConstructor;
            draggable: {
                type: BooleanConstructor;
                default: any;
            };
            crossOrigin: import("vue").PropType<"" | "anonymous" | "use-credentials">;
            loadError: {
                type: import("vue").PropType<() => boolean>;
            };
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            draggable: boolean;
            size: import("./Avatar").AvatarSize;
            shape: "circle" | "square";
        }, {}, string, import("../_util/type").CustomSlotsType<{
            icon: any;
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
        prefixCls: StringConstructor;
        shape: {
            type: import("vue").PropType<"circle" | "square">;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("./Avatar").AvatarSize>;
            default: () => import("./Avatar").AvatarSize;
        };
        src: StringConstructor;
        srcset: StringConstructor;
        icon: import("vue-types").VueTypeValidableDef<any>;
        alt: StringConstructor;
        gap: NumberConstructor;
        draggable: {
            type: BooleanConstructor;
            default: any;
        };
        crossOrigin: import("vue").PropType<"" | "anonymous" | "use-credentials">;
        loadError: {
            type: import("vue").PropType<() => boolean>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    shape: {
        type: import("vue").PropType<"circle" | "square">;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("./Avatar").AvatarSize>;
        default: () => import("./Avatar").AvatarSize;
    };
    src: StringConstructor;
    srcset: StringConstructor;
    icon: import("vue-types").VueTypeValidableDef<any>;
    alt: StringConstructor;
    gap: NumberConstructor;
    draggable: {
        type: BooleanConstructor;
        default: any;
    };
    crossOrigin: import("vue").PropType<"" | "anonymous" | "use-credentials">;
    loadError: {
        type: import("vue").PropType<() => boolean>;
    };
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    draggable: boolean;
    size: import("./Avatar").AvatarSize;
    shape: "circle" | "square";
}, {}, string, import("../_util/type").CustomSlotsType<{
    icon: any;
    default: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]> & {
    readonly Group: typeof Group;
};
export default _default;
