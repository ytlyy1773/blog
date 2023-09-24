import type { Plugin } from 'vue';
import Meta from './Meta';
import Grid from './Grid';
export type { CardProps } from './Card';
export { Meta as CardMeta, Grid as CardGrid };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            loading?: boolean;
            bordered?: boolean;
            bodyStyle?: import("vue").CSSProperties;
            headStyle?: import("vue").CSSProperties;
            hoverable?: boolean;
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
            tabindex?: string | number;
            readonly cover?: any;
            readonly size?: import("./Card").CardSize;
            readonly type?: "inner";
            readonly prefixCls?: string;
            role?: string;
            readonly extra?: any;
            readonly tabBarExtraContent?: any;
            readonly actions?: any;
            readonly tabList?: import("./Card").CardTabListType[];
            readonly activeTabKey?: string;
            readonly defaultActiveTabKey?: string;
            readonly onTabChange?: (key: string) => void;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            title: any;
            extra: any;
            tabBarExtraContent: any;
            actions: any;
            cover: any;
            customTab: import("vue").Slot<import("./Card").CardTabListType>;
            default: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            title: import("vue-types").VueTypeValidableDef<any>;
            extra: import("vue-types").VueTypeValidableDef<any>;
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            bodyStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            headStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            loading: {
                type: BooleanConstructor;
                default: boolean;
            };
            hoverable: {
                type: BooleanConstructor;
                default: boolean;
            };
            type: {
                type: import("vue").PropType<"inner">;
            };
            size: {
                type: import("vue").PropType<import("./Card").CardSize>;
            };
            actions: import("vue-types").VueTypeValidableDef<any>;
            tabList: {
                type: import("vue").PropType<import("./Card").CardTabListType[]>;
            };
            tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
            activeTabKey: StringConstructor;
            defaultActiveTabKey: StringConstructor;
            cover: import("vue-types").VueTypeValidableDef<any>;
            onTabChange: {
                type: import("vue").PropType<(key: string) => void>;
            };
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            loading: boolean;
            bordered: boolean;
            bodyStyle: import("vue").CSSProperties;
            headStyle: import("vue").CSSProperties;
            hoverable: boolean;
        }, {}, string, import("../_util/type").CustomSlotsType<{
            title: any;
            extra: any;
            tabBarExtraContent: any;
            actions: any;
            cover: any;
            customTab: import("./Card").CardTabListType;
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
        title: import("vue-types").VueTypeValidableDef<any>;
        extra: import("vue-types").VueTypeValidableDef<any>;
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        bodyStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        headStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        hoverable: {
            type: BooleanConstructor;
            default: boolean;
        };
        type: {
            type: import("vue").PropType<"inner">;
        };
        size: {
            type: import("vue").PropType<import("./Card").CardSize>;
        };
        actions: import("vue-types").VueTypeValidableDef<any>;
        tabList: {
            type: import("vue").PropType<import("./Card").CardTabListType[]>;
        };
        tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
        activeTabKey: StringConstructor;
        defaultActiveTabKey: StringConstructor;
        cover: import("vue-types").VueTypeValidableDef<any>;
        onTabChange: {
            type: import("vue").PropType<(key: string) => void>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    extra: import("vue-types").VueTypeValidableDef<any>;
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    bodyStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    headStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    hoverable: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: import("vue").PropType<"inner">;
    };
    size: {
        type: import("vue").PropType<import("./Card").CardSize>;
    };
    actions: import("vue-types").VueTypeValidableDef<any>;
    tabList: {
        type: import("vue").PropType<import("./Card").CardTabListType[]>;
    };
    tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
    activeTabKey: StringConstructor;
    defaultActiveTabKey: StringConstructor;
    cover: import("vue-types").VueTypeValidableDef<any>;
    onTabChange: {
        type: import("vue").PropType<(key: string) => void>;
    };
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    loading: boolean;
    bordered: boolean;
    bodyStyle: import("vue").CSSProperties;
    headStyle: import("vue").CSSProperties;
    hoverable: boolean;
}, {}, string, import("../_util/type").CustomSlotsType<{
    title: any;
    extra: any;
    tabBarExtraContent: any;
    actions: any;
    cover: any;
    customTab: import("./Card").CardTabListType;
    default: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]> & {
    readonly Meta: typeof Meta;
    readonly Grid: typeof Grid;
};
export default _default;
