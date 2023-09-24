import type { ExtractPropTypes, PropType } from 'vue';
import type { CustomSlotsType } from '../_util/type';
import type { MouseEventHandler } from '../_util/EventInterface';
export declare const pageHeaderProps: () => {
    backIcon: {
        type: PropType<import("../_util/type").VueNode>;
    };
    prefixCls: StringConstructor;
    title: {
        type: PropType<import("../_util/type").VueNode>;
    };
    subTitle: {
        type: PropType<import("../_util/type").VueNode>;
    };
    breadcrumb: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    tags: {
        type: PropType<import("../_util/type").VueNode>;
    };
    footer: {
        type: PropType<import("../_util/type").VueNode>;
    };
    extra: {
        type: PropType<import("../_util/type").VueNode>;
    };
    avatar: {
        type: PropType<Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            shape: {
                type: PropType<"circle" | "square">;
                default: string;
            };
            size: {
                type: PropType<import("../avatar").AvatarSize>;
                default: () => import("../avatar").AvatarSize;
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
            crossOrigin: PropType<"" | "anonymous" | "use-credentials">;
            loadError: {
                type: PropType<() => boolean>;
            };
        }>>>;
        default: Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            shape: {
                type: PropType<"circle" | "square">;
                default: string;
            };
            size: {
                type: PropType<import("../avatar").AvatarSize>;
                default: () => import("../avatar").AvatarSize;
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
            crossOrigin: PropType<"" | "anonymous" | "use-credentials">;
            loadError: {
                type: PropType<() => boolean>;
            };
        }>>;
    };
    ghost: {
        type: BooleanConstructor;
        default: any;
    };
    onBack: PropType<MouseEventHandler>;
};
export type PageHeaderProps = Partial<ExtractPropTypes<ReturnType<typeof pageHeaderProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            ghost?: boolean;
            avatar?: Partial<ExtractPropTypes<{
                prefixCls: StringConstructor;
                shape: {
                    type: PropType<"circle" | "square">;
                    default: string;
                };
                size: {
                    type: PropType<import("../avatar").AvatarSize>;
                    default: () => import("../avatar").AvatarSize;
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
                crossOrigin: PropType<"" | "anonymous" | "use-credentials">;
                loadError: {
                    type: PropType<() => boolean>;
                };
            }>>;
            breadcrumb?: {
                [key: string]: any;
            };
            readonly footer?: import("../_util/type").VueNode;
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
            readonly prefixCls?: string;
            role?: string;
            readonly tags?: import("../_util/type").VueNode;
            readonly extra?: import("../_util/type").VueNode;
            readonly backIcon?: import("../_util/type").VueNode;
            readonly subTitle?: import("../_util/type").VueNode;
            readonly onBack?: MouseEventHandler;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            backIcon: any;
            avatar: any;
            breadcrumb: any;
            title: any;
            subTitle: any;
            tags: any;
            extra: any;
            footer: any;
            default: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            backIcon: {
                type: PropType<import("../_util/type").VueNode>;
            };
            prefixCls: StringConstructor;
            title: {
                type: PropType<import("../_util/type").VueNode>;
            };
            subTitle: {
                type: PropType<import("../_util/type").VueNode>;
            };
            breadcrumb: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            tags: {
                type: PropType<import("../_util/type").VueNode>;
            };
            footer: {
                type: PropType<import("../_util/type").VueNode>;
            };
            extra: {
                type: PropType<import("../_util/type").VueNode>;
            };
            avatar: {
                type: PropType<Partial<ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    shape: {
                        type: PropType<"circle" | "square">;
                        default: string;
                    };
                    size: {
                        type: PropType<import("../avatar").AvatarSize>;
                        default: () => import("../avatar").AvatarSize;
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
                    crossOrigin: PropType<"" | "anonymous" | "use-credentials">;
                    loadError: {
                        type: PropType<() => boolean>;
                    };
                }>>>;
                default: Partial<ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    shape: {
                        type: PropType<"circle" | "square">;
                        default: string;
                    };
                    size: {
                        type: PropType<import("../avatar").AvatarSize>;
                        default: () => import("../avatar").AvatarSize;
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
                    crossOrigin: PropType<"" | "anonymous" | "use-credentials">;
                    loadError: {
                        type: PropType<() => boolean>;
                    };
                }>>;
            };
            ghost: {
                type: BooleanConstructor;
                default: any;
            };
            onBack: PropType<MouseEventHandler>;
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            ghost: boolean;
            avatar: Partial<ExtractPropTypes<{
                prefixCls: StringConstructor;
                shape: {
                    type: PropType<"circle" | "square">;
                    default: string;
                };
                size: {
                    type: PropType<import("../avatar").AvatarSize>;
                    default: () => import("../avatar").AvatarSize;
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
                crossOrigin: PropType<"" | "anonymous" | "use-credentials">;
                loadError: {
                    type: PropType<() => boolean>;
                };
            }>>;
            breadcrumb: {
                [key: string]: any;
            };
        }, {}, string, CustomSlotsType<{
            backIcon: any;
            avatar: any;
            breadcrumb: any;
            title: any;
            subTitle: any;
            tags: any;
            extra: any;
            footer: any;
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
    } & Readonly<ExtractPropTypes<{
        backIcon: {
            type: PropType<import("../_util/type").VueNode>;
        };
        prefixCls: StringConstructor;
        title: {
            type: PropType<import("../_util/type").VueNode>;
        };
        subTitle: {
            type: PropType<import("../_util/type").VueNode>;
        };
        breadcrumb: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        tags: {
            type: PropType<import("../_util/type").VueNode>;
        };
        footer: {
            type: PropType<import("../_util/type").VueNode>;
        };
        extra: {
            type: PropType<import("../_util/type").VueNode>;
        };
        avatar: {
            type: PropType<Partial<ExtractPropTypes<{
                prefixCls: StringConstructor;
                shape: {
                    type: PropType<"circle" | "square">;
                    default: string;
                };
                size: {
                    type: PropType<import("../avatar").AvatarSize>;
                    default: () => import("../avatar").AvatarSize;
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
                crossOrigin: PropType<"" | "anonymous" | "use-credentials">;
                loadError: {
                    type: PropType<() => boolean>;
                };
            }>>>;
            default: Partial<ExtractPropTypes<{
                prefixCls: StringConstructor;
                shape: {
                    type: PropType<"circle" | "square">;
                    default: string;
                };
                size: {
                    type: PropType<import("../avatar").AvatarSize>;
                    default: () => import("../avatar").AvatarSize;
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
                crossOrigin: PropType<"" | "anonymous" | "use-credentials">;
                loadError: {
                    type: PropType<() => boolean>;
                };
            }>>;
        };
        ghost: {
            type: BooleanConstructor;
            default: any;
        };
        onBack: PropType<MouseEventHandler>;
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    backIcon: {
        type: PropType<import("../_util/type").VueNode>;
    };
    prefixCls: StringConstructor;
    title: {
        type: PropType<import("../_util/type").VueNode>;
    };
    subTitle: {
        type: PropType<import("../_util/type").VueNode>;
    };
    breadcrumb: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    tags: {
        type: PropType<import("../_util/type").VueNode>;
    };
    footer: {
        type: PropType<import("../_util/type").VueNode>;
    };
    extra: {
        type: PropType<import("../_util/type").VueNode>;
    };
    avatar: {
        type: PropType<Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            shape: {
                type: PropType<"circle" | "square">;
                default: string;
            };
            size: {
                type: PropType<import("../avatar").AvatarSize>;
                default: () => import("../avatar").AvatarSize;
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
            crossOrigin: PropType<"" | "anonymous" | "use-credentials">;
            loadError: {
                type: PropType<() => boolean>;
            };
        }>>>;
        default: Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            shape: {
                type: PropType<"circle" | "square">;
                default: string;
            };
            size: {
                type: PropType<import("../avatar").AvatarSize>;
                default: () => import("../avatar").AvatarSize;
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
            crossOrigin: PropType<"" | "anonymous" | "use-credentials">;
            loadError: {
                type: PropType<() => boolean>;
            };
        }>>;
    };
    ghost: {
        type: BooleanConstructor;
        default: any;
    };
    onBack: PropType<MouseEventHandler>;
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    ghost: boolean;
    avatar: Partial<ExtractPropTypes<{
        prefixCls: StringConstructor;
        shape: {
            type: PropType<"circle" | "square">;
            default: string;
        };
        size: {
            type: PropType<import("../avatar").AvatarSize>;
            default: () => import("../avatar").AvatarSize;
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
        crossOrigin: PropType<"" | "anonymous" | "use-credentials">;
        loadError: {
            type: PropType<() => boolean>;
        };
    }>>;
    breadcrumb: {
        [key: string]: any;
    };
}, {}, string, CustomSlotsType<{
    backIcon: any;
    avatar: any;
    breadcrumb: any;
    title: any;
    subTitle: any;
    tags: any;
    extra: any;
    footer: any;
    default: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export default _default;
