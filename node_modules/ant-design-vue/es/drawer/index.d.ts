import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import { nextTick } from 'vue';
import type { CustomSlotsType } from '../_util/type';
import type { KeyboardEventHandler, MouseEventHandler } from '../_util/EventInterface';
type ILevelMove = number | [number, number];
declare const PlacementTypes: readonly ["top", "right", "bottom", "left"];
export type placementType = (typeof PlacementTypes)[number];
declare const SizeTypes: readonly ["default", "large"];
export type sizeType = (typeof SizeTypes)[number];
export interface PushState {
    distance: string | number;
}
type getContainerFunc = () => HTMLElement;
export declare const drawerProps: () => {
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    closable: {
        type: BooleanConstructor;
        default: any;
    };
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    destroyOnClose: {
        type: BooleanConstructor;
        default: any;
    };
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    getContainer: {
        type: PropType<string | false | HTMLElement | getContainerFunc>;
        default: string | false | HTMLElement | getContainerFunc;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: any;
    };
    mask: {
        type: BooleanConstructor;
        default: any;
    };
    maskStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    rootClassName: StringConstructor;
    rootStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    size: {
        type: PropType<"default" | "large">;
    };
    drawerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    headerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    bodyStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    contentWrapperStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    title: import("vue-types").VueTypeValidableDef<any>;
    /** @deprecated Please use `open` instead */
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    width: import("vue-types").VueTypeDef<string | number>;
    height: import("vue-types").VueTypeDef<string | number>;
    zIndex: NumberConstructor;
    prefixCls: StringConstructor;
    push: import("vue-types").VueTypeDef<boolean | PushState>;
    placement: import("vue-types").VueTypeDef<"left" | "right" | "top" | "bottom">;
    keyboard: {
        type: BooleanConstructor;
        default: any;
    };
    extra: import("vue-types").VueTypeValidableDef<any>;
    footer: import("vue-types").VueTypeValidableDef<any>;
    footerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    level: import("vue-types").VueTypeValidableDef<any>;
    levelMove: {
        type: PropType<ILevelMove | ((e: {
            target: HTMLElement;
            open: boolean;
        }) => ILevelMove)>;
    };
    handle: import("vue-types").VueTypeValidableDef<any>;
    /** @deprecated Use `@afterVisibleChange` instead */
    afterVisibleChange: PropType<(visible: boolean) => void>;
    /** @deprecated Please use `@afterOpenChange` instead */
    onAfterVisibleChange: PropType<(visible: boolean) => void>;
    onAfterOpenChange: PropType<(open: boolean) => void>;
    /** @deprecated Please use `onUpdate:open` instead */
    'onUpdate:visible': PropType<(visible: boolean) => void>;
    'onUpdate:open': PropType<(open: boolean) => void>;
    onClose: PropType<MouseEventHandler | KeyboardEventHandler>;
};
export type DrawerProps = Partial<ExtractPropTypes<ReturnType<typeof drawerProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            mask?: boolean;
            visible?: boolean;
            open?: boolean;
            autofocus?: boolean;
            forceRender?: boolean;
            maskClosable?: boolean;
            getContainer?: string | false | HTMLElement | getContainerFunc;
            rootStyle?: CSSProperties;
            keyboard?: boolean;
            closable?: boolean;
            bodyStyle?: CSSProperties;
            maskStyle?: CSSProperties;
            contentWrapperStyle?: CSSProperties;
            destroyOnClose?: boolean;
            drawerStyle?: CSSProperties;
            headerStyle?: CSSProperties;
            footerStyle?: CSSProperties;
            readonly footer?: any;
            style?: unknown;
            readonly title?: any;
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
            readonly push?: boolean | PushState;
            readonly width?: string | number;
            readonly height?: string | number;
            tabindex?: string | number;
            readonly size?: "default" | "large";
            readonly zIndex?: number;
            readonly prefixCls?: string;
            role?: string;
            readonly placement?: "left" | "right" | "top" | "bottom";
            readonly afterVisibleChange?: (visible: boolean) => void;
            readonly 'onUpdate:visible'?: (visible: boolean) => void;
            readonly 'onUpdate:open'?: (open: boolean) => void;
            readonly rootClassName?: string;
            readonly level?: any;
            readonly onClose?: MouseEventHandler | KeyboardEventHandler;
            readonly closeIcon?: any;
            readonly extra?: any;
            readonly levelMove?: ILevelMove | ((e: {
                target: HTMLElement;
                open: boolean;
            }) => ILevelMove);
            readonly handle?: any;
            readonly onAfterVisibleChange?: (visible: boolean) => void;
            readonly onAfterOpenChange?: (open: boolean) => void;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            closeIcon: any;
            title: any;
            extra: any;
            footer: any;
            handle: any;
            default: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            closable: {
                type: BooleanConstructor;
                default: any;
            };
            closeIcon: import("vue-types").VueTypeValidableDef<any>;
            destroyOnClose: {
                type: BooleanConstructor;
                default: any;
            };
            forceRender: {
                type: BooleanConstructor;
                default: any;
            };
            getContainer: {
                type: PropType<string | false | HTMLElement | getContainerFunc>;
                default: string | false | HTMLElement | getContainerFunc;
            };
            maskClosable: {
                type: BooleanConstructor;
                default: any;
            };
            mask: {
                type: BooleanConstructor;
                default: any;
            };
            maskStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            rootClassName: StringConstructor;
            rootStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            size: {
                type: PropType<"default" | "large">;
            };
            drawerStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            headerStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            bodyStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            contentWrapperStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            title: import("vue-types").VueTypeValidableDef<any>;
            /** @deprecated Please use `open` instead */
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            open: {
                type: BooleanConstructor;
                default: any;
            };
            width: import("vue-types").VueTypeDef<string | number>;
            height: import("vue-types").VueTypeDef<string | number>;
            zIndex: NumberConstructor;
            prefixCls: StringConstructor;
            push: import("vue-types").VueTypeDef<boolean | PushState>;
            placement: import("vue-types").VueTypeDef<"left" | "right" | "top" | "bottom">;
            keyboard: {
                type: BooleanConstructor;
                default: any;
            };
            extra: import("vue-types").VueTypeValidableDef<any>;
            footer: import("vue-types").VueTypeValidableDef<any>;
            footerStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            level: import("vue-types").VueTypeValidableDef<any>;
            levelMove: {
                type: PropType<ILevelMove | ((e: {
                    target: HTMLElement;
                    open: boolean;
                }) => ILevelMove)>;
            };
            handle: import("vue-types").VueTypeValidableDef<any>;
            /** @deprecated Use `@afterVisibleChange` instead */
            afterVisibleChange: PropType<(visible: boolean) => void>;
            /** @deprecated Please use `@afterOpenChange` instead */
            onAfterVisibleChange: PropType<(visible: boolean) => void>;
            onAfterOpenChange: PropType<(open: boolean) => void>;
            /** @deprecated Please use `onUpdate:open` instead */
            'onUpdate:visible': PropType<(visible: boolean) => void>;
            'onUpdate:open': PropType<(open: boolean) => void>;
            onClose: PropType<MouseEventHandler | KeyboardEventHandler>;
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            mask: boolean;
            visible: boolean;
            open: boolean;
            autofocus: boolean;
            forceRender: boolean;
            maskClosable: boolean;
            getContainer: string | false | HTMLElement | getContainerFunc;
            rootStyle: CSSProperties;
            keyboard: boolean;
            closable: boolean;
            bodyStyle: CSSProperties;
            maskStyle: CSSProperties;
            contentWrapperStyle: CSSProperties;
            destroyOnClose: boolean;
            drawerStyle: CSSProperties;
            headerStyle: CSSProperties;
            footerStyle: CSSProperties;
        }, {}, string, CustomSlotsType<{
            closeIcon: any;
            title: any;
            extra: any;
            footer: any;
            handle: any;
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
        autofocus: {
            type: BooleanConstructor;
            default: any;
        };
        closable: {
            type: BooleanConstructor;
            default: any;
        };
        closeIcon: import("vue-types").VueTypeValidableDef<any>;
        destroyOnClose: {
            type: BooleanConstructor;
            default: any;
        };
        forceRender: {
            type: BooleanConstructor;
            default: any;
        };
        getContainer: {
            type: PropType<string | false | HTMLElement | getContainerFunc>;
            default: string | false | HTMLElement | getContainerFunc;
        };
        maskClosable: {
            type: BooleanConstructor;
            default: any;
        };
        mask: {
            type: BooleanConstructor;
            default: any;
        };
        maskStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        rootClassName: StringConstructor;
        rootStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        size: {
            type: PropType<"default" | "large">;
        };
        drawerStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        headerStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        bodyStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        contentWrapperStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        title: import("vue-types").VueTypeValidableDef<any>;
        /** @deprecated Please use `open` instead */
        visible: {
            type: BooleanConstructor;
            default: any;
        };
        open: {
            type: BooleanConstructor;
            default: any;
        };
        width: import("vue-types").VueTypeDef<string | number>;
        height: import("vue-types").VueTypeDef<string | number>;
        zIndex: NumberConstructor;
        prefixCls: StringConstructor;
        push: import("vue-types").VueTypeDef<boolean | PushState>;
        placement: import("vue-types").VueTypeDef<"left" | "right" | "top" | "bottom">;
        keyboard: {
            type: BooleanConstructor;
            default: any;
        };
        extra: import("vue-types").VueTypeValidableDef<any>;
        footer: import("vue-types").VueTypeValidableDef<any>;
        footerStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        level: import("vue-types").VueTypeValidableDef<any>;
        levelMove: {
            type: PropType<ILevelMove | ((e: {
                target: HTMLElement;
                open: boolean;
            }) => ILevelMove)>;
        };
        handle: import("vue-types").VueTypeValidableDef<any>;
        /** @deprecated Use `@afterVisibleChange` instead */
        afterVisibleChange: PropType<(visible: boolean) => void>;
        /** @deprecated Please use `@afterOpenChange` instead */
        onAfterVisibleChange: PropType<(visible: boolean) => void>;
        onAfterOpenChange: PropType<(open: boolean) => void>;
        /** @deprecated Please use `onUpdate:open` instead */
        'onUpdate:visible': PropType<(visible: boolean) => void>;
        'onUpdate:open': PropType<(open: boolean) => void>;
        onClose: PropType<MouseEventHandler | KeyboardEventHandler>;
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    closable: {
        type: BooleanConstructor;
        default: any;
    };
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    destroyOnClose: {
        type: BooleanConstructor;
        default: any;
    };
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    getContainer: {
        type: PropType<string | false | HTMLElement | getContainerFunc>;
        default: string | false | HTMLElement | getContainerFunc;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: any;
    };
    mask: {
        type: BooleanConstructor;
        default: any;
    };
    maskStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    rootClassName: StringConstructor;
    rootStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    size: {
        type: PropType<"default" | "large">;
    };
    drawerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    headerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    bodyStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    contentWrapperStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    title: import("vue-types").VueTypeValidableDef<any>;
    /** @deprecated Please use `open` instead */
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    width: import("vue-types").VueTypeDef<string | number>;
    height: import("vue-types").VueTypeDef<string | number>;
    zIndex: NumberConstructor;
    prefixCls: StringConstructor;
    push: import("vue-types").VueTypeDef<boolean | PushState>;
    placement: import("vue-types").VueTypeDef<"left" | "right" | "top" | "bottom">;
    keyboard: {
        type: BooleanConstructor;
        default: any;
    };
    extra: import("vue-types").VueTypeValidableDef<any>;
    footer: import("vue-types").VueTypeValidableDef<any>;
    footerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    level: import("vue-types").VueTypeValidableDef<any>;
    levelMove: {
        type: PropType<ILevelMove | ((e: {
            target: HTMLElement;
            open: boolean;
        }) => ILevelMove)>;
    };
    handle: import("vue-types").VueTypeValidableDef<any>;
    /** @deprecated Use `@afterVisibleChange` instead */
    afterVisibleChange: PropType<(visible: boolean) => void>;
    /** @deprecated Please use `@afterOpenChange` instead */
    onAfterVisibleChange: PropType<(visible: boolean) => void>;
    onAfterOpenChange: PropType<(open: boolean) => void>;
    /** @deprecated Please use `onUpdate:open` instead */
    'onUpdate:visible': PropType<(visible: boolean) => void>;
    'onUpdate:open': PropType<(open: boolean) => void>;
    onClose: PropType<MouseEventHandler | KeyboardEventHandler>;
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mask: boolean;
    visible: boolean;
    open: boolean;
    autofocus: boolean;
    forceRender: boolean;
    maskClosable: boolean;
    getContainer: string | false | HTMLElement | getContainerFunc;
    rootStyle: CSSProperties;
    keyboard: boolean;
    closable: boolean;
    bodyStyle: CSSProperties;
    maskStyle: CSSProperties;
    contentWrapperStyle: CSSProperties;
    destroyOnClose: boolean;
    drawerStyle: CSSProperties;
    headerStyle: CSSProperties;
    footerStyle: CSSProperties;
}, {}, string, CustomSlotsType<{
    closeIcon: any;
    title: any;
    extra: any;
    footer: any;
    handle: any;
    default: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export default _default;
