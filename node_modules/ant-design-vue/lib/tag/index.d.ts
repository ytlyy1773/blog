import type { HTMLAttributes, PropType, ExtractPropTypes, Plugin } from 'vue';
import type { PresetColorType } from '../_util/colors';
import type { CustomSlotsType, LiteralUnion } from '../_util/type';
import CheckableTag from './CheckableTag';
export declare const tagProps: () => {
    prefixCls: StringConstructor;
    color: {
        type: PropType<LiteralUnion<"error" | "default" | "success" | "processing" | "warning" | PresetColorType>>;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    /** @deprecated `visible` will be removed in next major version. */
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    onClose: {
        type: PropType<(e: MouseEvent) => void>;
    };
    onClick: {
        type: PropType<((e: MouseEvent) => void) | ((e: MouseEvent) => void)[]>;
    };
    'onUpdate:visible': PropType<(vis: boolean) => void>;
    icon: import("vue-types").VueTypeValidableDef<any>;
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type TagProps = HTMLAttributes & Partial<ExtractPropTypes<ReturnType<typeof tagProps>>>;
export { CheckableTag };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            visible?: boolean;
            bordered?: boolean;
            closable?: boolean;
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
            readonly onClick?: ((e: MouseEvent) => void) | ((e: MouseEvent) => void)[];
            readonly color?: LiteralUnion<"error" | "default" | "success" | "processing" | "warning" | PresetColorType>;
            readonly icon?: any;
            readonly prefixCls?: string;
            role?: string;
            readonly 'onUpdate:visible'?: (vis: boolean) => void;
            readonly onClose?: (e: MouseEvent) => void;
            readonly closeIcon?: any;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            closeIcon: any;
            icon: any;
            default: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            prefixCls: StringConstructor;
            color: {
                type: PropType<LiteralUnion<"error" | "default" | "success" | "processing" | "warning" | PresetColorType>>;
            };
            closable: {
                type: BooleanConstructor;
                default: boolean;
            };
            closeIcon: import("vue-types").VueTypeValidableDef<any>;
            /** @deprecated `visible` will be removed in next major version. */
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            onClose: {
                type: PropType<(e: MouseEvent) => void>;
            };
            onClick: {
                type: PropType<((e: MouseEvent) => void) | ((e: MouseEvent) => void)[]>;
            };
            'onUpdate:visible': PropType<(vis: boolean) => void>;
            icon: import("vue-types").VueTypeValidableDef<any>;
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            visible: boolean;
            bordered: boolean;
            closable: boolean;
        }, {}, string, CustomSlotsType<{
            closeIcon: any;
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
    } & Readonly<ExtractPropTypes<{
        prefixCls: StringConstructor;
        color: {
            type: PropType<LiteralUnion<"error" | "default" | "success" | "processing" | "warning" | PresetColorType>>;
        };
        closable: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeIcon: import("vue-types").VueTypeValidableDef<any>;
        /** @deprecated `visible` will be removed in next major version. */
        visible: {
            type: BooleanConstructor;
            default: any;
        };
        onClose: {
            type: PropType<(e: MouseEvent) => void>;
        };
        onClick: {
            type: PropType<((e: MouseEvent) => void) | ((e: MouseEvent) => void)[]>;
        };
        'onUpdate:visible': PropType<(vis: boolean) => void>;
        icon: import("vue-types").VueTypeValidableDef<any>;
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    color: {
        type: PropType<LiteralUnion<"error" | "default" | "success" | "processing" | "warning" | PresetColorType>>;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    /** @deprecated `visible` will be removed in next major version. */
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    onClose: {
        type: PropType<(e: MouseEvent) => void>;
    };
    onClick: {
        type: PropType<((e: MouseEvent) => void) | ((e: MouseEvent) => void)[]>;
    };
    'onUpdate:visible': PropType<(vis: boolean) => void>;
    icon: import("vue-types").VueTypeValidableDef<any>;
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    visible: boolean;
    bordered: boolean;
    closable: boolean;
}, {}, string, CustomSlotsType<{
    closeIcon: any;
    icon: any;
    default: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]> & {
    readonly CheckableTag: typeof CheckableTag;
};
export default _default;
