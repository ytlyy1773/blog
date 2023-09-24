import type { ExtractPropTypes } from 'vue';
export declare const popoverProps: () => {
    content: {
        default: any;
        type: import("vue").PropType<any>;
    };
    title: {
        default: any;
        type: import("vue").PropType<any>;
    };
    trigger: import("vue").PropType<import("../tooltip/abstractTooltipProps").TriggerType | import("../tooltip/abstractTooltipProps").TriggerType[]>;
    open: {
        type: BooleanConstructor;
        default: any;
    };
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    placement: import("vue").PropType<import("../tooltip").TooltipPlacement>;
    color: import("vue").PropType<import("../_util/type").LiteralUnion<import("../_util/colors").PresetColorType>>;
    transitionName: StringConstructor;
    overlayStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    overlayInnerStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    overlayClassName: StringConstructor;
    openClassName: StringConstructor;
    prefixCls: StringConstructor;
    mouseEnterDelay: NumberConstructor;
    mouseLeaveDelay: NumberConstructor;
    getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
    arrowPointAtCenter: {
        type: BooleanConstructor;
        default: any;
    };
    autoAdjustOverflow: {
        type: import("vue").PropType<boolean | import("../tooltip").AdjustOverflow>;
        default: boolean | import("../tooltip").AdjustOverflow;
    };
    destroyTooltipOnHide: {
        type: BooleanConstructor;
        default: any;
    };
    align: {
        type: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
        default: import("../vc-trigger/interface").AlignType;
    };
    builtinPlacements: {
        type: import("vue").PropType<import("../vc-trigger/interface").BuildInPlacements>;
        default: import("../vc-trigger/interface").BuildInPlacements;
    };
    children: ArrayConstructor;
    onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
    'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
    onOpenChange: import("vue").PropType<(vis: boolean) => void>;
    'onUpdate:open': import("vue").PropType<(vis: boolean) => void>;
};
export type PopoverProps = Partial<ExtractPropTypes<ReturnType<typeof popoverProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            title?: any;
            visible?: boolean;
            content?: any;
            open?: boolean;
            align?: import("../vc-trigger/interface").AlignType;
            builtinPlacements?: import("../vc-trigger/interface").BuildInPlacements;
            overlayInnerStyle?: import("vue").CSSProperties;
            overlayStyle?: import("vue").CSSProperties;
            destroyTooltipOnHide?: boolean;
            autoAdjustOverflow?: boolean | import("../tooltip").AdjustOverflow;
            arrowPointAtCenter?: boolean;
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
            readonly children?: unknown[];
            tabindex?: string | number;
            readonly color?: import("../_util/type").LiteralUnion<import("../_util/colors").PresetColorType>;
            readonly trigger?: import("../tooltip/abstractTooltipProps").TriggerType | import("../tooltip/abstractTooltipProps").TriggerType[];
            readonly prefixCls?: string;
            readonly getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
            role?: string;
            readonly mouseEnterDelay?: number;
            readonly mouseLeaveDelay?: number;
            readonly transitionName?: string;
            readonly placement?: import("../tooltip").TooltipPlacement;
            readonly overlayClassName?: string;
            readonly onVisibleChange?: (vis: boolean) => void;
            readonly openClassName?: string;
            readonly 'onUpdate:visible'?: (vis: boolean) => void;
            readonly onOpenChange?: (vis: boolean) => void;
            readonly 'onUpdate:open'?: (vis: boolean) => void;
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
            content: {
                default: any;
                type: import("vue").PropType<any>;
            };
            title: {
                default: any;
                type: import("vue").PropType<any>;
            };
            trigger: import("vue").PropType<import("../tooltip/abstractTooltipProps").TriggerType | import("../tooltip/abstractTooltipProps").TriggerType[]>;
            open: {
                type: BooleanConstructor;
                default: any;
            };
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            placement: import("vue").PropType<import("../tooltip").TooltipPlacement>;
            color: import("vue").PropType<import("../_util/type").LiteralUnion<import("../_util/colors").PresetColorType>>;
            transitionName: StringConstructor;
            overlayStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            overlayInnerStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            overlayClassName: StringConstructor;
            openClassName: StringConstructor;
            prefixCls: StringConstructor;
            mouseEnterDelay: NumberConstructor;
            mouseLeaveDelay: NumberConstructor;
            getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
            arrowPointAtCenter: {
                type: BooleanConstructor;
                default: any;
            };
            autoAdjustOverflow: {
                type: import("vue").PropType<boolean | import("../tooltip").AdjustOverflow>;
                default: boolean | import("../tooltip").AdjustOverflow;
            };
            destroyTooltipOnHide: {
                type: BooleanConstructor;
                default: any;
            };
            align: {
                type: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
                default: import("../vc-trigger/interface").AlignType;
            };
            builtinPlacements: {
                type: import("vue").PropType<import("../vc-trigger/interface").BuildInPlacements>;
                default: import("../vc-trigger/interface").BuildInPlacements;
            };
            children: ArrayConstructor;
            onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
            'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
            onOpenChange: import("vue").PropType<(vis: boolean) => void>;
            'onUpdate:open': import("vue").PropType<(vis: boolean) => void>;
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            title: any;
            visible: boolean;
            content: any;
            open: boolean;
            align: import("../vc-trigger/interface").AlignType;
            builtinPlacements: import("../vc-trigger/interface").BuildInPlacements;
            overlayInnerStyle: import("vue").CSSProperties;
            overlayStyle: import("vue").CSSProperties;
            destroyTooltipOnHide: boolean;
            autoAdjustOverflow: boolean | import("../tooltip").AdjustOverflow;
            arrowPointAtCenter: boolean;
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
        content: {
            default: any;
            type: import("vue").PropType<any>;
        };
        title: {
            default: any;
            type: import("vue").PropType<any>;
        };
        trigger: import("vue").PropType<import("../tooltip/abstractTooltipProps").TriggerType | import("../tooltip/abstractTooltipProps").TriggerType[]>;
        open: {
            type: BooleanConstructor;
            default: any;
        };
        visible: {
            type: BooleanConstructor;
            default: any;
        };
        placement: import("vue").PropType<import("../tooltip").TooltipPlacement>;
        color: import("vue").PropType<import("../_util/type").LiteralUnion<import("../_util/colors").PresetColorType>>;
        transitionName: StringConstructor;
        overlayStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        overlayInnerStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        overlayClassName: StringConstructor;
        openClassName: StringConstructor;
        prefixCls: StringConstructor;
        mouseEnterDelay: NumberConstructor;
        mouseLeaveDelay: NumberConstructor;
        getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
        arrowPointAtCenter: {
            type: BooleanConstructor;
            default: any;
        };
        autoAdjustOverflow: {
            type: import("vue").PropType<boolean | import("../tooltip").AdjustOverflow>;
            default: boolean | import("../tooltip").AdjustOverflow;
        };
        destroyTooltipOnHide: {
            type: BooleanConstructor;
            default: any;
        };
        align: {
            type: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
            default: import("../vc-trigger/interface").AlignType;
        };
        builtinPlacements: {
            type: import("vue").PropType<import("../vc-trigger/interface").BuildInPlacements>;
            default: import("../vc-trigger/interface").BuildInPlacements;
        };
        children: ArrayConstructor;
        onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
        'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
        onOpenChange: import("vue").PropType<(vis: boolean) => void>;
        'onUpdate:open': import("vue").PropType<(vis: boolean) => void>;
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    content: {
        default: any;
        type: import("vue").PropType<any>;
    };
    title: {
        default: any;
        type: import("vue").PropType<any>;
    };
    trigger: import("vue").PropType<import("../tooltip/abstractTooltipProps").TriggerType | import("../tooltip/abstractTooltipProps").TriggerType[]>;
    open: {
        type: BooleanConstructor;
        default: any;
    };
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    placement: import("vue").PropType<import("../tooltip").TooltipPlacement>;
    color: import("vue").PropType<import("../_util/type").LiteralUnion<import("../_util/colors").PresetColorType>>;
    transitionName: StringConstructor;
    overlayStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    overlayInnerStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    overlayClassName: StringConstructor;
    openClassName: StringConstructor;
    prefixCls: StringConstructor;
    mouseEnterDelay: NumberConstructor;
    mouseLeaveDelay: NumberConstructor;
    getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
    arrowPointAtCenter: {
        type: BooleanConstructor;
        default: any;
    };
    autoAdjustOverflow: {
        type: import("vue").PropType<boolean | import("../tooltip").AdjustOverflow>;
        default: boolean | import("../tooltip").AdjustOverflow;
    };
    destroyTooltipOnHide: {
        type: BooleanConstructor;
        default: any;
    };
    align: {
        type: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
        default: import("../vc-trigger/interface").AlignType;
    };
    builtinPlacements: {
        type: import("vue").PropType<import("../vc-trigger/interface").BuildInPlacements>;
        default: import("../vc-trigger/interface").BuildInPlacements;
    };
    children: ArrayConstructor;
    onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
    'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
    onOpenChange: import("vue").PropType<(vis: boolean) => void>;
    'onUpdate:open': import("vue").PropType<(vis: boolean) => void>;
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    title: any;
    visible: boolean;
    content: any;
    open: boolean;
    align: import("../vc-trigger/interface").AlignType;
    builtinPlacements: import("../vc-trigger/interface").BuildInPlacements;
    overlayInnerStyle: import("vue").CSSProperties;
    overlayStyle: import("vue").CSSProperties;
    destroyTooltipOnHide: boolean;
    autoAdjustOverflow: boolean | import("../tooltip").AdjustOverflow;
    arrowPointAtCenter: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export default _default;
