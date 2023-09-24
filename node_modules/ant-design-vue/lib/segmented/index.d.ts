import type { SegmentedProps } from './src';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            value?: import("./src/segmented").SegmentedValue;
            onChange?: (val: import("./src/segmented").SegmentedValue) => void;
            block?: boolean;
            size?: import("./src/segmented").segmentedSize;
            disabled?: boolean;
            'onUpdate:value'?: (val: import("./src/segmented").SegmentedValue) => void;
            options?: (string | number | import("./src/segmented").SegmentedOption)[];
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
            readonly prefixCls?: string;
            role?: string;
            readonly motionName?: string;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            label: import("vue").Slot<import("./src/segmented").SegmentedBaseOption>;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            options: {
                type: import("vue").PropType<(string | number | import("./src/segmented").SegmentedOption)[]>;
                default: (string | number | import("./src/segmented").SegmentedOption)[];
            };
            block: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: import("vue").PropType<import("./src/segmented").segmentedSize>;
                default: import("./src/segmented").segmentedSize;
            };
            value: {
                required: boolean;
                type: import("vue").PropType<import("./src/segmented").SegmentedValue>;
                default: import("./src/segmented").SegmentedValue;
            };
            motionName: StringConstructor;
            onChange: {
                type: import("vue").PropType<(val: import("./src/segmented").SegmentedValue) => void>;
                default: (val: import("./src/segmented").SegmentedValue) => void;
            };
            'onUpdate:value': {
                type: import("vue").PropType<(val: import("./src/segmented").SegmentedValue) => void>;
                default: (val: import("./src/segmented").SegmentedValue) => void;
            };
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            value: import("./src/segmented").SegmentedValue;
            onChange: (val: import("./src/segmented").SegmentedValue) => void;
            block: boolean;
            size: import("./src/segmented").segmentedSize;
            disabled: boolean;
            'onUpdate:value': (val: import("./src/segmented").SegmentedValue) => void;
            options: (string | number | import("./src/segmented").SegmentedOption)[];
        }, {}, string, import("../_util/type").CustomSlotsType<{
            label: import("./src/segmented").SegmentedBaseOption;
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
        options: {
            type: import("vue").PropType<(string | number | import("./src/segmented").SegmentedOption)[]>;
            default: (string | number | import("./src/segmented").SegmentedOption)[];
        };
        block: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<import("./src/segmented").segmentedSize>;
            default: import("./src/segmented").segmentedSize;
        };
        value: {
            required: boolean;
            type: import("vue").PropType<import("./src/segmented").SegmentedValue>;
            default: import("./src/segmented").SegmentedValue;
        };
        motionName: StringConstructor;
        onChange: {
            type: import("vue").PropType<(val: import("./src/segmented").SegmentedValue) => void>;
            default: (val: import("./src/segmented").SegmentedValue) => void;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(val: import("./src/segmented").SegmentedValue) => void>;
            default: (val: import("./src/segmented").SegmentedValue) => void;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    options: {
        type: import("vue").PropType<(string | number | import("./src/segmented").SegmentedOption)[]>;
        default: (string | number | import("./src/segmented").SegmentedOption)[];
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<import("./src/segmented").segmentedSize>;
        default: import("./src/segmented").segmentedSize;
    };
    value: {
        required: boolean;
        type: import("vue").PropType<import("./src/segmented").SegmentedValue>;
        default: import("./src/segmented").SegmentedValue;
    };
    motionName: StringConstructor;
    onChange: {
        type: import("vue").PropType<(val: import("./src/segmented").SegmentedValue) => void>;
        default: (val: import("./src/segmented").SegmentedValue) => void;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(val: import("./src/segmented").SegmentedValue) => void>;
        default: (val: import("./src/segmented").SegmentedValue) => void;
    };
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    value: import("./src/segmented").SegmentedValue;
    onChange: (val: import("./src/segmented").SegmentedValue) => void;
    block: boolean;
    size: import("./src/segmented").segmentedSize;
    disabled: boolean;
    'onUpdate:value': (val: import("./src/segmented").SegmentedValue) => void;
    options: (string | number | import("./src/segmented").SegmentedOption)[];
}, {}, string, import("../_util/type").CustomSlotsType<{
    label: import("./src/segmented").SegmentedBaseOption;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export default _default;
export type { SegmentedProps };
