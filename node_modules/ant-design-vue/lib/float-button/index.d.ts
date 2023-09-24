import type { Plugin } from 'vue';
import FloatButtonGroup from './FloatButtonGroup';
import BackTop from './BackTop';
import type { FloatButtonProps, FloatButtonShape, FloatButtonType, FloatButtonGroupProps, BackTopProps } from './interface';
import type { SizeType as FloatButtonSize } from '../config-provider';
export type { FloatButtonProps, FloatButtonShape, FloatButtonType, FloatButtonGroupProps, BackTopProps, FloatButtonSize, };
export { FloatButtonGroup, BackTop };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            onClick?: import("../_util/EventInterface").MouseEventHandler;
            type?: FloatButtonType;
            target?: () => HTMLElement | Window;
            shape?: FloatButtonShape;
            badge?: import("./interface").FloatButtonBadgeProps;
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
            readonly tooltip?: any;
            readonly description?: any;
            readonly prefixCls?: string;
            role?: string;
            readonly href?: string;
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
            description: import("vue-types").VueTypeValidableDef<any>;
            type: {
                type: import("vue").PropType<FloatButtonType>;
                default: FloatButtonType;
            };
            shape: {
                type: import("vue").PropType<FloatButtonShape>;
                default: FloatButtonShape;
            };
            tooltip: import("vue-types").VueTypeValidableDef<any>;
            href: StringConstructor;
            target: {
                type: import("vue").PropType<() => HTMLElement | Window>;
                default: () => HTMLElement | Window;
            };
            badge: {
                type: import("vue").PropType<import("./interface").FloatButtonBadgeProps>;
                default: import("./interface").FloatButtonBadgeProps;
            };
            onClick: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
                default: import("../_util/EventInterface").MouseEventHandler;
            };
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            onClick: import("../_util/EventInterface").MouseEventHandler;
            type: FloatButtonType;
            target: () => HTMLElement | Window;
            shape: FloatButtonShape;
            badge: import("./interface").FloatButtonBadgeProps;
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
        description: import("vue-types").VueTypeValidableDef<any>;
        type: {
            type: import("vue").PropType<FloatButtonType>;
            default: FloatButtonType;
        };
        shape: {
            type: import("vue").PropType<FloatButtonShape>;
            default: FloatButtonShape;
        };
        tooltip: import("vue-types").VueTypeValidableDef<any>;
        href: StringConstructor;
        target: {
            type: import("vue").PropType<() => HTMLElement | Window>;
            default: () => HTMLElement | Window;
        };
        badge: {
            type: import("vue").PropType<import("./interface").FloatButtonBadgeProps>;
            default: import("./interface").FloatButtonBadgeProps;
        };
        onClick: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            default: import("../_util/EventInterface").MouseEventHandler;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    description: import("vue-types").VueTypeValidableDef<any>;
    type: {
        type: import("vue").PropType<FloatButtonType>;
        default: FloatButtonType;
    };
    shape: {
        type: import("vue").PropType<FloatButtonShape>;
        default: FloatButtonShape;
    };
    tooltip: import("vue-types").VueTypeValidableDef<any>;
    href: StringConstructor;
    target: {
        type: import("vue").PropType<() => HTMLElement | Window>;
        default: () => HTMLElement | Window;
    };
    badge: {
        type: import("vue").PropType<import("./interface").FloatButtonBadgeProps>;
        default: import("./interface").FloatButtonBadgeProps;
    };
    onClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        default: import("../_util/EventInterface").MouseEventHandler;
    };
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    onClick: import("../_util/EventInterface").MouseEventHandler;
    type: FloatButtonType;
    target: () => HTMLElement | Window;
    shape: FloatButtonShape;
    badge: import("./interface").FloatButtonBadgeProps;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]> & {
    readonly Group: typeof FloatButtonGroup;
    readonly BackTop: typeof BackTop;
};
export default _default;
