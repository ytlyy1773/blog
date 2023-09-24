import type { CSSProperties, VNodeTypes, ExtractPropTypes } from 'vue';
import type { VueNode, CustomSlotsType } from '../_util/type';
import type { TooltipPlacement } from '../tooltip/Tooltip';
import type { FocusEventHandler } from '../_util/EventInterface';
export type SliderValue = number | [number, number];
export interface SliderMarks {
    [key: number]: VueNode | {
        style: CSSProperties;
        label: any;
    };
}
interface HandleGeneratorInfo {
    value?: number;
    dragging?: boolean;
    index: number;
}
export interface SliderRange {
    draggableTrack?: boolean;
}
export type HandleGeneratorFn = (config: {
    tooltipPrefixCls?: string;
    prefixCls?: string;
    info: HandleGeneratorInfo;
}) => VNodeTypes;
type Value = [number, number] | number;
export declare const sliderProps: () => {
    id: StringConstructor;
    prefixCls: StringConstructor;
    tooltipPrefixCls: StringConstructor;
    range: {
        type: import("vue").PropType<boolean | SliderRange>;
        default: boolean | SliderRange;
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
    };
    min: NumberConstructor;
    max: NumberConstructor;
    step: {
        type: import("vue").PropType<number>;
        default: number;
    };
    marks: {
        type: import("vue").PropType<SliderMarks>;
        default: SliderMarks;
    };
    dots: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: import("vue").PropType<Value>;
        default: Value;
    };
    defaultValue: {
        type: import("vue").PropType<Value>;
        default: Value;
    };
    included: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    tipFormatter: {
        type: import("vue").PropType<(value?: number) => any>;
        default: (value?: number) => any;
    };
    tooltipOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @deprecated `tooltipVisible` is deprecated. Please use `tooltipOpen` instead. */
    tooltipVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltipPlacement: {
        type: import("vue").PropType<TooltipPlacement>;
        default: TooltipPlacement;
    };
    getTooltipPopupContainer: {
        type: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
        default: (triggerNode: HTMLElement) => HTMLElement;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    handleStyle: {
        type: import("vue").PropType<CSSProperties | CSSProperties[]>;
        default: CSSProperties | CSSProperties[];
    };
    trackStyle: {
        type: import("vue").PropType<CSSProperties | CSSProperties[]>;
        default: CSSProperties | CSSProperties[];
    };
    onChange: {
        type: import("vue").PropType<(value: Value) => void>;
        default: (value: Value) => void;
    };
    onAfterChange: {
        type: import("vue").PropType<(value: Value) => void>;
        default: (value: Value) => void;
    };
    onFocus: {
        type: import("vue").PropType<FocusEventHandler>;
        default: FocusEventHandler;
    };
    onBlur: {
        type: import("vue").PropType<FocusEventHandler>;
        default: FocusEventHandler;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(value: Value) => void>;
        default: (value: Value) => void;
    };
};
export type SliderProps = Partial<ExtractPropTypes<ReturnType<typeof sliderProps>>>;
export type Visibles = {
    [index: number]: boolean;
};
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            value?: Value;
            vertical?: boolean;
            trackStyle?: CSSProperties | CSSProperties[];
            dots?: boolean;
            reverse?: boolean;
            onFocus?: FocusEventHandler;
            onBlur?: FocusEventHandler;
            onChange?: (value: Value) => void;
            range?: boolean | SliderRange;
            disabled?: boolean;
            autofocus?: boolean;
            defaultValue?: Value;
            'onUpdate:value'?: (value: Value) => void;
            step?: number;
            included?: boolean;
            marks?: SliderMarks;
            handleStyle?: CSSProperties | CSSProperties[];
            onAfterChange?: (value: Value) => void;
            tipFormatter?: (value?: number) => any;
            tooltipOpen?: boolean;
            tooltipVisible?: boolean;
            tooltipPlacement?: TooltipPlacement;
            getTooltipPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
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
            readonly max?: number;
            readonly min?: number;
            readonly prefixCls?: string;
            role?: string;
            readonly id?: string;
            readonly tooltipPrefixCls?: string;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            mark?: any;
            default?: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            id: StringConstructor;
            prefixCls: StringConstructor;
            tooltipPrefixCls: StringConstructor;
            range: {
                type: import("vue").PropType<boolean | SliderRange>;
                default: boolean | SliderRange;
            };
            reverse: {
                type: BooleanConstructor;
                default: boolean;
            };
            min: NumberConstructor;
            max: NumberConstructor;
            step: {
                type: import("vue").PropType<number>;
                default: number;
            };
            marks: {
                type: import("vue").PropType<SliderMarks>;
                default: SliderMarks;
            };
            dots: {
                type: BooleanConstructor;
                default: boolean;
            };
            value: {
                type: import("vue").PropType<Value>;
                default: Value;
            };
            defaultValue: {
                type: import("vue").PropType<Value>;
                default: Value;
            };
            included: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            vertical: {
                type: BooleanConstructor;
                default: boolean;
            };
            tipFormatter: {
                type: import("vue").PropType<(value?: number) => any>;
                default: (value?: number) => any;
            };
            tooltipOpen: {
                type: BooleanConstructor;
                default: boolean;
            };
            /** @deprecated `tooltipVisible` is deprecated. Please use `tooltipOpen` instead. */
            tooltipVisible: {
                type: BooleanConstructor;
                default: boolean;
            };
            tooltipPlacement: {
                type: import("vue").PropType<TooltipPlacement>;
                default: TooltipPlacement;
            };
            getTooltipPopupContainer: {
                type: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
                default: (triggerNode: HTMLElement) => HTMLElement;
            };
            autofocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            handleStyle: {
                type: import("vue").PropType<CSSProperties | CSSProperties[]>;
                default: CSSProperties | CSSProperties[];
            };
            trackStyle: {
                type: import("vue").PropType<CSSProperties | CSSProperties[]>;
                default: CSSProperties | CSSProperties[];
            };
            onChange: {
                type: import("vue").PropType<(value: Value) => void>;
                default: (value: Value) => void;
            };
            onAfterChange: {
                type: import("vue").PropType<(value: Value) => void>;
                default: (value: Value) => void;
            };
            onFocus: {
                type: import("vue").PropType<FocusEventHandler>;
                default: FocusEventHandler;
            };
            onBlur: {
                type: import("vue").PropType<FocusEventHandler>;
                default: FocusEventHandler;
            };
            'onUpdate:value': {
                type: import("vue").PropType<(value: Value) => void>;
                default: (value: Value) => void;
            };
        }>>, () => VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            value: Value;
            vertical: boolean;
            trackStyle: CSSProperties | CSSProperties[];
            dots: boolean;
            reverse: boolean;
            onFocus: FocusEventHandler;
            onBlur: FocusEventHandler;
            onChange: (value: Value) => void;
            range: boolean | SliderRange;
            disabled: boolean;
            autofocus: boolean;
            defaultValue: Value;
            'onUpdate:value': (value: Value) => void;
            step: number;
            included: boolean;
            marks: SliderMarks;
            handleStyle: CSSProperties | CSSProperties[];
            onAfterChange: (value: Value) => void;
            tipFormatter: (value?: number) => any;
            tooltipOpen: boolean;
            tooltipVisible: boolean;
            tooltipPlacement: TooltipPlacement;
            getTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
        }, {}, string, CustomSlotsType<{
            mark?: any;
            default?: any;
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
        id: StringConstructor;
        prefixCls: StringConstructor;
        tooltipPrefixCls: StringConstructor;
        range: {
            type: import("vue").PropType<boolean | SliderRange>;
            default: boolean | SliderRange;
        };
        reverse: {
            type: BooleanConstructor;
            default: boolean;
        };
        min: NumberConstructor;
        max: NumberConstructor;
        step: {
            type: import("vue").PropType<number>;
            default: number;
        };
        marks: {
            type: import("vue").PropType<SliderMarks>;
            default: SliderMarks;
        };
        dots: {
            type: BooleanConstructor;
            default: boolean;
        };
        value: {
            type: import("vue").PropType<Value>;
            default: Value;
        };
        defaultValue: {
            type: import("vue").PropType<Value>;
            default: Value;
        };
        included: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        vertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        tipFormatter: {
            type: import("vue").PropType<(value?: number) => any>;
            default: (value?: number) => any;
        };
        tooltipOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        /** @deprecated `tooltipVisible` is deprecated. Please use `tooltipOpen` instead. */
        tooltipVisible: {
            type: BooleanConstructor;
            default: boolean;
        };
        tooltipPlacement: {
            type: import("vue").PropType<TooltipPlacement>;
            default: TooltipPlacement;
        };
        getTooltipPopupContainer: {
            type: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
            default: (triggerNode: HTMLElement) => HTMLElement;
        };
        autofocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        handleStyle: {
            type: import("vue").PropType<CSSProperties | CSSProperties[]>;
            default: CSSProperties | CSSProperties[];
        };
        trackStyle: {
            type: import("vue").PropType<CSSProperties | CSSProperties[]>;
            default: CSSProperties | CSSProperties[];
        };
        onChange: {
            type: import("vue").PropType<(value: Value) => void>;
            default: (value: Value) => void;
        };
        onAfterChange: {
            type: import("vue").PropType<(value: Value) => void>;
            default: (value: Value) => void;
        };
        onFocus: {
            type: import("vue").PropType<FocusEventHandler>;
            default: FocusEventHandler;
        };
        onBlur: {
            type: import("vue").PropType<FocusEventHandler>;
            default: FocusEventHandler;
        };
        'onUpdate:value': {
            type: import("vue").PropType<(value: Value) => void>;
            default: (value: Value) => void;
        };
    }>> & import("vue").ShallowUnwrapRef<() => VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    id: StringConstructor;
    prefixCls: StringConstructor;
    tooltipPrefixCls: StringConstructor;
    range: {
        type: import("vue").PropType<boolean | SliderRange>;
        default: boolean | SliderRange;
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
    };
    min: NumberConstructor;
    max: NumberConstructor;
    step: {
        type: import("vue").PropType<number>;
        default: number;
    };
    marks: {
        type: import("vue").PropType<SliderMarks>;
        default: SliderMarks;
    };
    dots: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: import("vue").PropType<Value>;
        default: Value;
    };
    defaultValue: {
        type: import("vue").PropType<Value>;
        default: Value;
    };
    included: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    tipFormatter: {
        type: import("vue").PropType<(value?: number) => any>;
        default: (value?: number) => any;
    };
    tooltipOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /** @deprecated `tooltipVisible` is deprecated. Please use `tooltipOpen` instead. */
    tooltipVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltipPlacement: {
        type: import("vue").PropType<TooltipPlacement>;
        default: TooltipPlacement;
    };
    getTooltipPopupContainer: {
        type: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
        default: (triggerNode: HTMLElement) => HTMLElement;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    handleStyle: {
        type: import("vue").PropType<CSSProperties | CSSProperties[]>;
        default: CSSProperties | CSSProperties[];
    };
    trackStyle: {
        type: import("vue").PropType<CSSProperties | CSSProperties[]>;
        default: CSSProperties | CSSProperties[];
    };
    onChange: {
        type: import("vue").PropType<(value: Value) => void>;
        default: (value: Value) => void;
    };
    onAfterChange: {
        type: import("vue").PropType<(value: Value) => void>;
        default: (value: Value) => void;
    };
    onFocus: {
        type: import("vue").PropType<FocusEventHandler>;
        default: FocusEventHandler;
    };
    onBlur: {
        type: import("vue").PropType<FocusEventHandler>;
        default: FocusEventHandler;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(value: Value) => void>;
        default: (value: Value) => void;
    };
}>>, () => VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    value: Value;
    vertical: boolean;
    trackStyle: CSSProperties | CSSProperties[];
    dots: boolean;
    reverse: boolean;
    onFocus: FocusEventHandler;
    onBlur: FocusEventHandler;
    onChange: (value: Value) => void;
    range: boolean | SliderRange;
    disabled: boolean;
    autofocus: boolean;
    defaultValue: Value;
    'onUpdate:value': (value: Value) => void;
    step: number;
    included: boolean;
    marks: SliderMarks;
    handleStyle: CSSProperties | CSSProperties[];
    onAfterChange: (value: Value) => void;
    tipFormatter: (value?: number) => any;
    tooltipOpen: boolean;
    tooltipVisible: boolean;
    tooltipPlacement: TooltipPlacement;
    getTooltipPopupContainer: (triggerNode: HTMLElement) => HTMLElement;
}, {}, string, CustomSlotsType<{
    mark?: any;
    default?: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export default _default;
