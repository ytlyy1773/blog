import type { ExtractPropTypes } from 'vue';
import type { CustomSlotsType, VueNode } from '../_util/type';
export declare const commentProps: () => {
    actions: ArrayConstructor;
    /** The element to display as the comment author. */
    author: import("vue-types").VueTypeValidableDef<any>;
    /** The element to display as the comment avatar - generally an antd Avatar */
    avatar: import("vue-types").VueTypeValidableDef<any>;
    /** The main content of the comment */
    content: import("vue-types").VueTypeValidableDef<any>;
    /** Comment prefix defaults to '.ant-comment' */
    prefixCls: StringConstructor;
    /** A datetime element containing the time to be displayed */
    datetime: import("vue-types").VueTypeValidableDef<any>;
};
export type CommentProps = Partial<ExtractPropTypes<ReturnType<typeof commentProps>>>;
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
            readonly content?: any;
            readonly prefixCls?: string;
            readonly datetime?: any;
            role?: string;
            readonly avatar?: any;
            readonly actions?: unknown[];
            readonly author?: any;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            actions: any;
            author: any;
            avatar: any;
            content: any;
            datetime: any;
            default: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            actions: ArrayConstructor;
            /** The element to display as the comment author. */
            author: import("vue-types").VueTypeValidableDef<any>;
            /** The element to display as the comment avatar - generally an antd Avatar */
            avatar: import("vue-types").VueTypeValidableDef<any>;
            /** The main content of the comment */
            content: import("vue-types").VueTypeValidableDef<any>;
            /** Comment prefix defaults to '.ant-comment' */
            prefixCls: StringConstructor;
            /** A datetime element containing the time to be displayed */
            datetime: import("vue-types").VueTypeValidableDef<any>;
        }>>, () => VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, CustomSlotsType<{
            actions: any;
            author: any;
            avatar: any;
            content: any;
            datetime: any;
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
        actions: ArrayConstructor;
        /** The element to display as the comment author. */
        author: import("vue-types").VueTypeValidableDef<any>;
        /** The element to display as the comment avatar - generally an antd Avatar */
        avatar: import("vue-types").VueTypeValidableDef<any>;
        /** The main content of the comment */
        content: import("vue-types").VueTypeValidableDef<any>;
        /** Comment prefix defaults to '.ant-comment' */
        prefixCls: StringConstructor;
        /** A datetime element containing the time to be displayed */
        datetime: import("vue-types").VueTypeValidableDef<any>;
    }>> & import("vue").ShallowUnwrapRef<() => VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    actions: ArrayConstructor;
    /** The element to display as the comment author. */
    author: import("vue-types").VueTypeValidableDef<any>;
    /** The element to display as the comment avatar - generally an antd Avatar */
    avatar: import("vue-types").VueTypeValidableDef<any>;
    /** The main content of the comment */
    content: import("vue-types").VueTypeValidableDef<any>;
    /** Comment prefix defaults to '.ant-comment' */
    prefixCls: StringConstructor;
    /** A datetime element containing the time to be displayed */
    datetime: import("vue-types").VueTypeValidableDef<any>;
}>>, () => VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, CustomSlotsType<{
    actions: any;
    author: any;
    avatar: any;
    content: any;
    datetime: any;
    default: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export default _default;
