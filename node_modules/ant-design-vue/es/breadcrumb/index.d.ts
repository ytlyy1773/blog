import type { Plugin } from 'vue';
import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbSeparator from './BreadcrumbSeparator';
export type { BreadcrumbProps } from './Breadcrumb';
export type { BreadcrumbItemProps } from './BreadcrumbItem';
export type { BreadcrumbSeparatorProps } from './BreadcrumbSeparator';
export { BreadcrumbItem, BreadcrumbSeparator };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
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
            readonly separator?: any;
            readonly prefixCls?: string;
            role?: string;
            readonly itemRender?: (opt: {
                route: import("./Breadcrumb").Route;
                params: unknown;
                routes: import("./Breadcrumb").Route[];
                paths: string[];
            }) => import("../_util/type").VueNode;
            readonly routes?: import("./Breadcrumb").Route[];
            readonly params?: any;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            separator: any;
            itemRender: import("vue").Slot<{
                route: import("./Breadcrumb").Route;
                params: any;
                routes: import("./Breadcrumb").Route[];
                paths: string[];
            }>;
            default: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            routes: {
                type: import("vue").PropType<import("./Breadcrumb").Route[]>;
            };
            params: import("vue-types").VueTypeValidableDef<any>;
            separator: import("vue-types").VueTypeValidableDef<any>;
            itemRender: {
                type: import("vue").PropType<(opt: {
                    route: import("./Breadcrumb").Route;
                    params: unknown;
                    routes: import("./Breadcrumb").Route[];
                    paths: string[];
                }) => import("../_util/type").VueNode>;
            };
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, import("../_util/type").CustomSlotsType<{
            separator: any;
            itemRender: {
                route: import("./Breadcrumb").Route;
                params: any;
                routes: import("./Breadcrumb").Route[];
                paths: string[];
            };
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
        routes: {
            type: import("vue").PropType<import("./Breadcrumb").Route[]>;
        };
        params: import("vue-types").VueTypeValidableDef<any>;
        separator: import("vue-types").VueTypeValidableDef<any>;
        itemRender: {
            type: import("vue").PropType<(opt: {
                route: import("./Breadcrumb").Route;
                params: unknown;
                routes: import("./Breadcrumb").Route[];
                paths: string[];
            }) => import("../_util/type").VueNode>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    routes: {
        type: import("vue").PropType<import("./Breadcrumb").Route[]>;
    };
    params: import("vue-types").VueTypeValidableDef<any>;
    separator: import("vue-types").VueTypeValidableDef<any>;
    itemRender: {
        type: import("vue").PropType<(opt: {
            route: import("./Breadcrumb").Route;
            params: unknown;
            routes: import("./Breadcrumb").Route[];
            paths: string[];
        }) => import("../_util/type").VueNode>;
    };
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, import("../_util/type").CustomSlotsType<{
    separator: any;
    itemRender: {
        route: import("./Breadcrumb").Route;
        params: any;
        routes: import("./Breadcrumb").Route[];
        paths: string[];
    };
    default: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]> & {
    readonly Item: typeof BreadcrumbItem;
    readonly Separator: typeof BreadcrumbSeparator;
};
export default _default;
