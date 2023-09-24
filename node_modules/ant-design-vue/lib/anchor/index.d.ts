import type { Plugin } from 'vue';
import type { AnchorProps } from './Anchor';
import type { AnchorLinkProps, AnchorLinkItemProps } from './AnchorLink';
import AnchorLink from './AnchorLink';
export type { AnchorLinkProps, AnchorProps, AnchorLinkItemProps };
export { AnchorLink, AnchorLink as Link };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            direction?: import("./Anchor").AnchorDirection;
            items?: AnchorLinkItemProps[];
            affix?: boolean;
            showInkInFixed?: boolean;
            wrapperStyle?: import("vue").CSSProperties;
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
            readonly onClick?: (e: MouseEvent, link: {
                title: any;
                href: string;
            }) => void;
            readonly onChange?: (currentActiveLink: string) => void;
            readonly prefixCls?: string;
            role?: string;
            readonly targetOffset?: number;
            readonly getContainer?: () => import("./Anchor").AnchorContainer;
            readonly offsetTop?: number;
            readonly bounds?: number;
            readonly wrapperClass?: string;
            readonly getCurrentAnchor?: (activeLink: string) => string;
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
            prefixCls: StringConstructor;
            offsetTop: NumberConstructor;
            bounds: NumberConstructor;
            affix: {
                type: BooleanConstructor;
                default: boolean;
            };
            showInkInFixed: {
                type: BooleanConstructor;
                default: boolean;
            };
            getContainer: import("vue").PropType<() => import("./Anchor").AnchorContainer>;
            wrapperClass: StringConstructor;
            wrapperStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            getCurrentAnchor: import("vue").PropType<(activeLink: string) => string>;
            targetOffset: NumberConstructor;
            items: {
                type: import("vue").PropType<AnchorLinkItemProps[]>;
                default: AnchorLinkItemProps[];
            };
            direction: import("vue-types").VueTypeDef<import("./Anchor").AnchorDirection> & {
                default: import("./Anchor").AnchorDirection;
            };
            onChange: import("vue").PropType<(currentActiveLink: string) => void>;
            onClick: import("vue").PropType<(e: MouseEvent, link: {
                title: any;
                href: string;
            }) => void>;
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            direction: import("./Anchor").AnchorDirection;
            items: AnchorLinkItemProps[];
            affix: boolean;
            showInkInFixed: boolean;
            wrapperStyle: import("vue").CSSProperties;
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
        prefixCls: StringConstructor;
        offsetTop: NumberConstructor;
        bounds: NumberConstructor;
        affix: {
            type: BooleanConstructor;
            default: boolean;
        };
        showInkInFixed: {
            type: BooleanConstructor;
            default: boolean;
        };
        getContainer: import("vue").PropType<() => import("./Anchor").AnchorContainer>;
        wrapperClass: StringConstructor;
        wrapperStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        getCurrentAnchor: import("vue").PropType<(activeLink: string) => string>;
        targetOffset: NumberConstructor;
        items: {
            type: import("vue").PropType<AnchorLinkItemProps[]>;
            default: AnchorLinkItemProps[];
        };
        direction: import("vue-types").VueTypeDef<import("./Anchor").AnchorDirection> & {
            default: import("./Anchor").AnchorDirection;
        };
        onChange: import("vue").PropType<(currentActiveLink: string) => void>;
        onClick: import("vue").PropType<(e: MouseEvent, link: {
            title: any;
            href: string;
        }) => void>;
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    offsetTop: NumberConstructor;
    bounds: NumberConstructor;
    affix: {
        type: BooleanConstructor;
        default: boolean;
    };
    showInkInFixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    getContainer: import("vue").PropType<() => import("./Anchor").AnchorContainer>;
    wrapperClass: StringConstructor;
    wrapperStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    getCurrentAnchor: import("vue").PropType<(activeLink: string) => string>;
    targetOffset: NumberConstructor;
    items: {
        type: import("vue").PropType<AnchorLinkItemProps[]>;
        default: AnchorLinkItemProps[];
    };
    direction: import("vue-types").VueTypeDef<import("./Anchor").AnchorDirection> & {
        default: import("./Anchor").AnchorDirection;
    };
    onChange: import("vue").PropType<(currentActiveLink: string) => void>;
    onClick: import("vue").PropType<(e: MouseEvent, link: {
        title: any;
        href: string;
    }) => void>;
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    direction: import("./Anchor").AnchorDirection;
    items: AnchorLinkItemProps[];
    affix: boolean;
    showInkInFixed: boolean;
    wrapperStyle: import("vue").CSSProperties;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]> & {
    readonly Link: typeof AnchorLink;
};
export default _default;
