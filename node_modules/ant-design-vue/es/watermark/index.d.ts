import type { ExtractPropTypes } from 'vue';
export interface WatermarkFontType {
    color?: string;
    fontSize?: number | string;
    fontWeight?: 'normal' | 'light' | 'weight' | number;
    fontStyle?: 'none' | 'normal' | 'italic' | 'oblique';
    fontFamily?: string;
}
export declare const watermarkProps: () => {
    zIndex: NumberConstructor;
    rotate: NumberConstructor;
    width: NumberConstructor;
    height: NumberConstructor;
    image: StringConstructor;
    content: {
        type: import("vue").PropType<string | string[]>;
        default: string | string[];
    };
    font: {
        type: import("vue").PropType<WatermarkFontType>;
        default: WatermarkFontType;
    };
    rootClassName: StringConstructor;
    gap: {
        type: import("vue").PropType<[number, number]>;
        default: [number, number];
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        default: [number, number];
    };
};
export type WatermarkProps = Partial<ExtractPropTypes<ReturnType<typeof watermarkProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            content?: string | string[];
            font?: WatermarkFontType;
            gap?: [number, number];
            offset?: [number, number];
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
            readonly width?: number;
            readonly height?: number;
            tabindex?: string | number;
            readonly image?: string;
            readonly rotate?: number;
            readonly zIndex?: number;
            role?: string;
            readonly rootClassName?: string;
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
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            zIndex: NumberConstructor;
            rotate: NumberConstructor;
            width: NumberConstructor;
            height: NumberConstructor;
            image: StringConstructor;
            content: {
                type: import("vue").PropType<string | string[]>;
                default: string | string[];
            };
            font: {
                type: import("vue").PropType<WatermarkFontType>;
                default: WatermarkFontType;
            };
            rootClassName: StringConstructor;
            gap: {
                type: import("vue").PropType<[number, number]>;
                default: [number, number];
            };
            offset: {
                type: import("vue").PropType<[number, number]>;
                default: [number, number];
            };
        }>>, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            content: string | string[];
            font: WatermarkFontType;
            gap: [number, number];
            offset: [number, number];
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
    } & Readonly<ExtractPropTypes<{
        zIndex: NumberConstructor;
        rotate: NumberConstructor;
        width: NumberConstructor;
        height: NumberConstructor;
        image: StringConstructor;
        content: {
            type: import("vue").PropType<string | string[]>;
            default: string | string[];
        };
        font: {
            type: import("vue").PropType<WatermarkFontType>;
            default: WatermarkFontType;
        };
        rootClassName: StringConstructor;
        gap: {
            type: import("vue").PropType<[number, number]>;
            default: [number, number];
        };
        offset: {
            type: import("vue").PropType<[number, number]>;
            default: [number, number];
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("vue/jsx-runtime").JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    zIndex: NumberConstructor;
    rotate: NumberConstructor;
    width: NumberConstructor;
    height: NumberConstructor;
    image: StringConstructor;
    content: {
        type: import("vue").PropType<string | string[]>;
        default: string | string[];
    };
    font: {
        type: import("vue").PropType<WatermarkFontType>;
        default: WatermarkFontType;
    };
    rootClassName: StringConstructor;
    gap: {
        type: import("vue").PropType<[number, number]>;
        default: [number, number];
    };
    offset: {
        type: import("vue").PropType<[number, number]>;
        default: [number, number];
    };
}>>, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    content: string | string[];
    font: WatermarkFontType;
    gap: [number, number];
    offset: [number, number];
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export default _default;
