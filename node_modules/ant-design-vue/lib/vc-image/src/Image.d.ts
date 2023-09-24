import type { CSSProperties, PropType } from 'vue';
import type { MouseEventHandler } from '../../_util/EventInterface';
import PreviewGroup from './PreviewGroup';
import type { IDialogChildProps } from '../../vc-dialog/IDialogPropTypes';
export type GetContainer = string | HTMLElement | (() => HTMLElement);
import type { PreviewProps } from './Preview';
export type ImagePreviewType = Omit<IDialogChildProps, 'mask' | 'visible' | 'closable' | 'prefixCls' | 'onClose' | 'afterClose' | 'wrapClassName'> & {
    src?: string;
    visible?: boolean;
    onVisibleChange?: (value: boolean, prevValue: boolean) => void;
    getContainer?: GetContainer | false;
    maskClassName?: string;
    icons?: PreviewProps['icons'];
};
export declare const imageProps: () => {
    src: StringConstructor;
    wrapperClassName: StringConstructor;
    wrapperStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    rootClassName: StringConstructor;
    prefixCls: StringConstructor;
    previewPrefixCls: StringConstructor;
    previewMask: {
        type: PropType<false | (() => any)>;
        default: any;
    };
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    fallback: StringConstructor;
    preview: {
        type: PropType<boolean | ImagePreviewType>;
        default: boolean | ImagePreviewType;
    };
    onClick: {
        type: PropType<MouseEventHandler>;
    };
    onError: {
        type: PropType<OnErrorEventHandlerNonNull>;
    };
};
export type ImageProps = Partial<ReturnType<typeof imageProps>>;
export type ImageStatus = 'normal' | 'error' | 'loading';
export declare const mergeDefaultValue: <T extends object>(obj: T, defaultValues: object) => T;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            preview?: boolean | ImagePreviewType;
            wrapperStyle?: CSSProperties;
            previewMask?: false | (() => any);
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
            onClick?: MouseEventHandler & ((...args: any[]) => any);
            onError?: OnErrorEventHandlerNonNull & ((...args: any[]) => any);
            readonly prefixCls?: string;
            role?: string;
            readonly wrapperClassName?: string;
            readonly placeholder?: any;
            readonly rootClassName?: string;
            readonly src?: string;
            readonly previewPrefixCls?: string;
            readonly fallback?: string;
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
        $emit: (event: "click" | "error", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            src: StringConstructor;
            wrapperClassName: StringConstructor;
            wrapperStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            rootClassName: StringConstructor;
            prefixCls: StringConstructor;
            previewPrefixCls: StringConstructor;
            previewMask: {
                type: PropType<false | (() => any)>;
                default: any;
            };
            placeholder: import("vue-types").VueTypeValidableDef<any>;
            fallback: StringConstructor;
            preview: {
                type: PropType<boolean | ImagePreviewType>;
                default: boolean | ImagePreviewType;
            };
            onClick: {
                type: PropType<MouseEventHandler>;
            };
            onError: {
                type: PropType<OnErrorEventHandlerNonNull>;
            };
        }>> & {
            onClick?: (...args: any[]) => any;
            onError?: (...args: any[]) => any;
        }, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "error")[], string, {
            preview: boolean | ImagePreviewType;
            wrapperStyle: CSSProperties;
            previewMask: false | (() => any);
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
        src: StringConstructor;
        wrapperClassName: StringConstructor;
        wrapperStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        rootClassName: StringConstructor;
        prefixCls: StringConstructor;
        previewPrefixCls: StringConstructor;
        previewMask: {
            type: PropType<false | (() => any)>;
            default: any;
        };
        placeholder: import("vue-types").VueTypeValidableDef<any>;
        fallback: StringConstructor;
        preview: {
            type: PropType<boolean | ImagePreviewType>;
            default: boolean | ImagePreviewType;
        };
        onClick: {
            type: PropType<MouseEventHandler>;
        };
        onError: {
            type: PropType<OnErrorEventHandlerNonNull>;
        };
    }>> & {
        onClick?: (...args: any[]) => any;
        onError?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => import("vue/jsx-runtime").JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    src: StringConstructor;
    wrapperClassName: StringConstructor;
    wrapperStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    rootClassName: StringConstructor;
    prefixCls: StringConstructor;
    previewPrefixCls: StringConstructor;
    previewMask: {
        type: PropType<false | (() => any)>;
        default: any;
    };
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    fallback: StringConstructor;
    preview: {
        type: PropType<boolean | ImagePreviewType>;
        default: boolean | ImagePreviewType;
    };
    onClick: {
        type: PropType<MouseEventHandler>;
    };
    onError: {
        type: PropType<OnErrorEventHandlerNonNull>;
    };
}>> & {
    onClick?: (...args: any[]) => any;
    onError?: (...args: any[]) => any;
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "error")[], "click" | "error", {
    preview: boolean | ImagePreviewType;
    wrapperStyle: CSSProperties;
    previewMask: false | (() => any);
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    readonly PreviewGroup: typeof PreviewGroup;
};
export default _default;
