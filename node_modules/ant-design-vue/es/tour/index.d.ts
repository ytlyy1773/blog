import type { TourProps, TourStepProps } from './interface';
import type { VueNode } from '../_util/type';
export { TourProps, TourStepProps };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            mask?: boolean | {
                style?: import("vue").CSSProperties;
                color?: string;
            };
            onChange?: (current: number) => void;
            open?: boolean;
            zIndex?: number;
            gap?: import("../vc-tour/hooks/useTarget").Gap;
            builtinPlacements?: {
                [key: string]: any;
            };
            popupAlign?: {
                [key: string]: any;
            };
            placement?: import("../vc-tour/placements").PlacementType;
            arrow?: boolean | {
                pointAtCenter: boolean;
            };
            scrollIntoViewOptions?: boolean | ScrollIntoViewOptions;
            onClose?: (current: number) => void;
            onFinish?: () => void;
            renderPanel?: (props: Partial<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                };
                total: {
                    type: NumberConstructor;
                };
                current: {
                    type: NumberConstructor;
                };
                onClose: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                onFinish: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                renderPanel: {
                    type: import("vue").PropType<(step: any, current: number) => VueNode>;
                    default: (step: any, current: number) => VueNode;
                };
                onPrev: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                onNext: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                arrow: {
                    type: import("vue").PropType<boolean | {
                        pointAtCenter: boolean;
                    }>;
                    default: boolean | {
                        pointAtCenter: boolean;
                    };
                };
                target: {
                    type: import("vue").PropType<HTMLElement | (() => HTMLElement) | (() => null)>;
                    default: HTMLElement | (() => HTMLElement) | (() => null);
                };
                title: {
                    type: import("vue").PropType<VueNode>;
                    default: VueNode;
                };
                description: {
                    type: import("vue").PropType<VueNode>;
                    default: VueNode;
                };
                placement: {
                    type: import("vue").PropType<import("../vc-tour/placements").PlacementType>;
                    default: import("../vc-tour/placements").PlacementType;
                };
                mask: {
                    type: import("vue").PropType<boolean | {
                        style?: import("vue").CSSProperties;
                        color?: string;
                    }>;
                    default: boolean | {
                        style?: import("vue").CSSProperties;
                        color?: string;
                    };
                };
                className: {
                    type: StringConstructor;
                };
                style: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                    default: import("vue").CSSProperties;
                };
                scrollIntoViewOptions: {
                    type: import("vue").PropType<boolean | ScrollIntoViewOptions>;
                    default: boolean | ScrollIntoViewOptions;
                };
            }>>, current: number) => VueNode;
            animated?: boolean | {
                placeholder: boolean;
            };
            style?: unknown;
            readonly current?: number;
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
            readonly type?: "default" | "primary";
            readonly prefixCls?: string;
            role?: string;
            readonly rootClassName?: string;
            readonly defaultCurrent?: number;
            readonly 'onUpdate:current'?: (val: number) => void;
            readonly steps?: Partial<import("vue").ExtractPropTypes<{
                cover: {
                    type: import("vue").PropType<VueNode>;
                };
                nextButtonProps: {
                    type: import("vue").PropType<import("./interface").TourBtnProps>;
                };
                prevButtonProps: {
                    type: import("vue").PropType<import("./interface").TourBtnProps>;
                };
                current: {
                    type: NumberConstructor;
                };
                type: {
                    type: import("vue").PropType<"default" | "primary">;
                };
                prefixCls: {
                    type: StringConstructor;
                };
                total: {
                    type: NumberConstructor;
                };
                onClose: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                onFinish: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                renderPanel: {
                    type: import("vue").PropType<(step: any, current: number) => VueNode>;
                    default: (step: any, current: number) => VueNode;
                };
                onPrev: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                onNext: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                arrow: {
                    type: import("vue").PropType<boolean | {
                        pointAtCenter: boolean;
                    }>;
                    default: boolean | {
                        pointAtCenter: boolean;
                    };
                };
                target: {
                    type: import("vue").PropType<HTMLElement | (() => HTMLElement) | (() => null)>;
                    default: HTMLElement | (() => HTMLElement) | (() => null);
                };
                title: {
                    type: import("vue").PropType<VueNode>;
                    default: VueNode;
                };
                description: {
                    type: import("vue").PropType<VueNode>;
                    default: VueNode;
                };
                placement: {
                    type: import("vue").PropType<import("../vc-tour/placements").PlacementType>;
                    default: import("../vc-tour/placements").PlacementType;
                };
                mask: {
                    type: import("vue").PropType<boolean | {
                        style?: import("vue").CSSProperties;
                        color?: string;
                    }>;
                    default: boolean | {
                        style?: import("vue").CSSProperties;
                        color?: string;
                    };
                };
                className: {
                    type: StringConstructor;
                };
                style: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                    default: import("vue").CSSProperties;
                };
                scrollIntoViewOptions: {
                    type: import("vue").PropType<boolean | ScrollIntoViewOptions>;
                    default: boolean | ScrollIntoViewOptions;
                };
            }>>[];
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
            steps: {
                type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                    cover: {
                        type: import("vue").PropType<VueNode>;
                    };
                    nextButtonProps: {
                        type: import("vue").PropType<import("./interface").TourBtnProps>;
                    };
                    prevButtonProps: {
                        type: import("vue").PropType<import("./interface").TourBtnProps>;
                    };
                    current: {
                        type: NumberConstructor;
                    };
                    type: {
                        type: import("vue").PropType<"default" | "primary">;
                    };
                    prefixCls: {
                        type: StringConstructor;
                    };
                    total: {
                        type: NumberConstructor;
                    };
                    onClose: {
                        type: import("vue").PropType<(e: MouseEvent) => void>;
                        default: (e: MouseEvent) => void;
                    };
                    onFinish: {
                        type: import("vue").PropType<(e: MouseEvent) => void>;
                        default: (e: MouseEvent) => void;
                    };
                    renderPanel: {
                        type: import("vue").PropType<(step: any, current: number) => VueNode>;
                        default: (step: any, current: number) => VueNode;
                    };
                    onPrev: {
                        type: import("vue").PropType<(e: MouseEvent) => void>;
                        default: (e: MouseEvent) => void;
                    };
                    onNext: {
                        type: import("vue").PropType<(e: MouseEvent) => void>;
                        default: (e: MouseEvent) => void;
                    };
                    arrow: {
                        type: import("vue").PropType<boolean | {
                            pointAtCenter: boolean;
                        }>;
                        default: boolean | {
                            pointAtCenter: boolean;
                        };
                    };
                    target: {
                        type: import("vue").PropType<HTMLElement | (() => HTMLElement) | (() => null)>;
                        default: HTMLElement | (() => HTMLElement) | (() => null);
                    };
                    title: {
                        type: import("vue").PropType<VueNode>;
                        default: VueNode;
                    };
                    description: {
                        type: import("vue").PropType<VueNode>;
                        default: VueNode;
                    };
                    placement: {
                        type: import("vue").PropType<import("../vc-tour/placements").PlacementType>;
                        default: import("../vc-tour/placements").PlacementType;
                    };
                    mask: {
                        type: import("vue").PropType<boolean | {
                            style?: import("vue").CSSProperties;
                            color?: string;
                        }>;
                        default: boolean | {
                            style?: import("vue").CSSProperties;
                            color?: string;
                        };
                    };
                    className: {
                        type: StringConstructor;
                    };
                    style: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                        default: import("vue").CSSProperties;
                    };
                    scrollIntoViewOptions: {
                        type: import("vue").PropType<boolean | ScrollIntoViewOptions>;
                        default: boolean | ScrollIntoViewOptions;
                    };
                }>>[]>;
            };
            prefixCls: {
                type: StringConstructor;
            };
            current: {
                type: NumberConstructor;
            };
            type: {
                type: import("vue").PropType<"default" | "primary">;
            };
            'onUpdate:current': import("vue").PropType<(val: number) => void>;
            builtinPlacements: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            popupAlign: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            } & {
                default: () => {
                    [key: string]: any;
                };
            };
            open: {
                type: BooleanConstructor;
                default: boolean;
            };
            defaultCurrent: {
                type: NumberConstructor;
            };
            onChange: {
                type: import("vue").PropType<(current: number) => void>;
                default: (current: number) => void;
            };
            onClose: {
                type: import("vue").PropType<(current: number) => void>;
                default: (current: number) => void;
            };
            onFinish: {
                type: import("vue").PropType<() => void>;
                default: () => void;
            };
            mask: {
                type: import("vue").PropType<boolean | {
                    style?: import("vue").CSSProperties;
                    color?: string;
                }>;
                default: boolean | {
                    style?: import("vue").CSSProperties;
                    color?: string;
                };
            };
            arrow: {
                type: import("vue").PropType<boolean | {
                    pointAtCenter: boolean;
                }>;
                default: boolean | {
                    pointAtCenter: boolean;
                };
            };
            rootClassName: {
                type: StringConstructor;
            };
            placement: {
                type: import("vue").PropType<import("../vc-tour/placements").PlacementType>;
                default: import("../vc-tour/placements").PlacementType;
            };
            renderPanel: {
                type: import("vue").PropType<(props: Partial<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                    };
                    total: {
                        type: NumberConstructor;
                    };
                    current: {
                        type: NumberConstructor;
                    };
                    onClose: {
                        type: import("vue").PropType<(e: MouseEvent) => void>;
                        default: (e: MouseEvent) => void;
                    };
                    onFinish: {
                        type: import("vue").PropType<(e: MouseEvent) => void>;
                        default: (e: MouseEvent) => void;
                    };
                    renderPanel: {
                        type: import("vue").PropType<(step: any, current: number) => VueNode>;
                        default: (step: any, current: number) => VueNode;
                    };
                    onPrev: {
                        type: import("vue").PropType<(e: MouseEvent) => void>;
                        default: (e: MouseEvent) => void;
                    };
                    onNext: {
                        type: import("vue").PropType<(e: MouseEvent) => void>;
                        default: (e: MouseEvent) => void;
                    };
                    arrow: {
                        type: import("vue").PropType<boolean | {
                            pointAtCenter: boolean;
                        }>;
                        default: boolean | {
                            pointAtCenter: boolean;
                        };
                    };
                    target: {
                        type: import("vue").PropType<HTMLElement | (() => HTMLElement) | (() => null)>;
                        default: HTMLElement | (() => HTMLElement) | (() => null);
                    };
                    title: {
                        type: import("vue").PropType<VueNode>;
                        default: VueNode;
                    };
                    description: {
                        type: import("vue").PropType<VueNode>;
                        default: VueNode;
                    };
                    placement: {
                        type: import("vue").PropType<import("../vc-tour/placements").PlacementType>;
                        default: import("../vc-tour/placements").PlacementType;
                    };
                    mask: {
                        type: import("vue").PropType<boolean | {
                            style?: import("vue").CSSProperties;
                            color?: string;
                        }>;
                        default: boolean | {
                            style?: import("vue").CSSProperties;
                            color?: string;
                        };
                    };
                    className: {
                        type: StringConstructor;
                    };
                    style: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                        default: import("vue").CSSProperties;
                    };
                    scrollIntoViewOptions: {
                        type: import("vue").PropType<boolean | ScrollIntoViewOptions>;
                        default: boolean | ScrollIntoViewOptions;
                    };
                }>>, current: number) => VueNode>;
                default: (props: Partial<import("vue").ExtractPropTypes<{
                    prefixCls: {
                        type: StringConstructor;
                    };
                    total: {
                        type: NumberConstructor;
                    };
                    current: {
                        type: NumberConstructor;
                    };
                    onClose: {
                        type: import("vue").PropType<(e: MouseEvent) => void>;
                        default: (e: MouseEvent) => void;
                    };
                    onFinish: {
                        type: import("vue").PropType<(e: MouseEvent) => void>;
                        default: (e: MouseEvent) => void;
                    };
                    renderPanel: {
                        type: import("vue").PropType<(step: any, current: number) => VueNode>;
                        default: (step: any, current: number) => VueNode;
                    };
                    onPrev: {
                        type: import("vue").PropType<(e: MouseEvent) => void>;
                        default: (e: MouseEvent) => void;
                    };
                    onNext: {
                        type: import("vue").PropType<(e: MouseEvent) => void>;
                        default: (e: MouseEvent) => void;
                    };
                    arrow: {
                        type: import("vue").PropType<boolean | {
                            pointAtCenter: boolean;
                        }>;
                        default: boolean | {
                            pointAtCenter: boolean;
                        };
                    };
                    target: {
                        type: import("vue").PropType<HTMLElement | (() => HTMLElement) | (() => null)>;
                        default: HTMLElement | (() => HTMLElement) | (() => null);
                    };
                    title: {
                        type: import("vue").PropType<VueNode>;
                        default: VueNode;
                    };
                    description: {
                        type: import("vue").PropType<VueNode>;
                        default: VueNode;
                    };
                    placement: {
                        type: import("vue").PropType<import("../vc-tour/placements").PlacementType>;
                        default: import("../vc-tour/placements").PlacementType;
                    };
                    mask: {
                        type: import("vue").PropType<boolean | {
                            style?: import("vue").CSSProperties;
                            color?: string;
                        }>;
                        default: boolean | {
                            style?: import("vue").CSSProperties;
                            color?: string;
                        };
                    };
                    className: {
                        type: StringConstructor;
                    };
                    style: {
                        type: import("vue").PropType<import("vue").CSSProperties>;
                        default: import("vue").CSSProperties;
                    };
                    scrollIntoViewOptions: {
                        type: import("vue").PropType<boolean | ScrollIntoViewOptions>;
                        default: boolean | ScrollIntoViewOptions;
                    };
                }>>, current: number) => VueNode;
            };
            gap: {
                type: import("vue").PropType<import("../vc-tour/hooks/useTarget").Gap>;
                default: import("../vc-tour/hooks/useTarget").Gap;
            };
            animated: {
                type: import("vue").PropType<boolean | {
                    placeholder: boolean;
                }>;
                default: boolean | {
                    placeholder: boolean;
                };
            };
            scrollIntoViewOptions: {
                type: import("vue").PropType<boolean | ScrollIntoViewOptions>;
                default: boolean | ScrollIntoViewOptions;
            };
            zIndex: {
                type: NumberConstructor;
                default: number;
            };
        }>>, () => VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            mask: boolean | {
                style?: import("vue").CSSProperties;
                color?: string;
            };
            onChange: (current: number) => void;
            open: boolean;
            zIndex: number;
            gap: import("../vc-tour/hooks/useTarget").Gap;
            builtinPlacements: {
                [key: string]: any;
            };
            popupAlign: {
                [key: string]: any;
            };
            placement: import("../vc-tour/placements").PlacementType;
            arrow: boolean | {
                pointAtCenter: boolean;
            };
            scrollIntoViewOptions: boolean | ScrollIntoViewOptions;
            onClose: (current: number) => void;
            onFinish: () => void;
            renderPanel: (props: Partial<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                };
                total: {
                    type: NumberConstructor;
                };
                current: {
                    type: NumberConstructor;
                };
                onClose: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                onFinish: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                renderPanel: {
                    type: import("vue").PropType<(step: any, current: number) => VueNode>;
                    default: (step: any, current: number) => VueNode;
                };
                onPrev: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                onNext: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                arrow: {
                    type: import("vue").PropType<boolean | {
                        pointAtCenter: boolean;
                    }>;
                    default: boolean | {
                        pointAtCenter: boolean;
                    };
                };
                target: {
                    type: import("vue").PropType<HTMLElement | (() => HTMLElement) | (() => null)>;
                    default: HTMLElement | (() => HTMLElement) | (() => null);
                };
                title: {
                    type: import("vue").PropType<VueNode>;
                    default: VueNode;
                };
                description: {
                    type: import("vue").PropType<VueNode>;
                    default: VueNode;
                };
                placement: {
                    type: import("vue").PropType<import("../vc-tour/placements").PlacementType>;
                    default: import("../vc-tour/placements").PlacementType;
                };
                mask: {
                    type: import("vue").PropType<boolean | {
                        style?: import("vue").CSSProperties;
                        color?: string;
                    }>;
                    default: boolean | {
                        style?: import("vue").CSSProperties;
                        color?: string;
                    };
                };
                className: {
                    type: StringConstructor;
                };
                style: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                    default: import("vue").CSSProperties;
                };
                scrollIntoViewOptions: {
                    type: import("vue").PropType<boolean | ScrollIntoViewOptions>;
                    default: boolean | ScrollIntoViewOptions;
                };
            }>>, current: number) => VueNode;
            animated: boolean | {
                placeholder: boolean;
            };
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
        steps: {
            type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                cover: {
                    type: import("vue").PropType<VueNode>;
                };
                nextButtonProps: {
                    type: import("vue").PropType<import("./interface").TourBtnProps>;
                };
                prevButtonProps: {
                    type: import("vue").PropType<import("./interface").TourBtnProps>;
                };
                current: {
                    type: NumberConstructor;
                };
                type: {
                    type: import("vue").PropType<"default" | "primary">;
                };
                prefixCls: {
                    type: StringConstructor;
                };
                total: {
                    type: NumberConstructor;
                };
                onClose: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                onFinish: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                renderPanel: {
                    type: import("vue").PropType<(step: any, current: number) => VueNode>;
                    default: (step: any, current: number) => VueNode;
                };
                onPrev: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                onNext: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                arrow: {
                    type: import("vue").PropType<boolean | {
                        pointAtCenter: boolean;
                    }>;
                    default: boolean | {
                        pointAtCenter: boolean;
                    };
                };
                target: {
                    type: import("vue").PropType<HTMLElement | (() => HTMLElement) | (() => null)>;
                    default: HTMLElement | (() => HTMLElement) | (() => null);
                };
                title: {
                    type: import("vue").PropType<VueNode>;
                    default: VueNode;
                };
                description: {
                    type: import("vue").PropType<VueNode>;
                    default: VueNode;
                };
                placement: {
                    type: import("vue").PropType<import("../vc-tour/placements").PlacementType>;
                    default: import("../vc-tour/placements").PlacementType;
                };
                mask: {
                    type: import("vue").PropType<boolean | {
                        style?: import("vue").CSSProperties;
                        color?: string;
                    }>;
                    default: boolean | {
                        style?: import("vue").CSSProperties;
                        color?: string;
                    };
                };
                className: {
                    type: StringConstructor;
                };
                style: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                    default: import("vue").CSSProperties;
                };
                scrollIntoViewOptions: {
                    type: import("vue").PropType<boolean | ScrollIntoViewOptions>;
                    default: boolean | ScrollIntoViewOptions;
                };
            }>>[]>;
        };
        prefixCls: {
            type: StringConstructor;
        };
        current: {
            type: NumberConstructor;
        };
        type: {
            type: import("vue").PropType<"default" | "primary">;
        };
        'onUpdate:current': import("vue").PropType<(val: number) => void>;
        builtinPlacements: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        popupAlign: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        } & {
            default: () => {
                [key: string]: any;
            };
        };
        open: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultCurrent: {
            type: NumberConstructor;
        };
        onChange: {
            type: import("vue").PropType<(current: number) => void>;
            default: (current: number) => void;
        };
        onClose: {
            type: import("vue").PropType<(current: number) => void>;
            default: (current: number) => void;
        };
        onFinish: {
            type: import("vue").PropType<() => void>;
            default: () => void;
        };
        mask: {
            type: import("vue").PropType<boolean | {
                style?: import("vue").CSSProperties;
                color?: string;
            }>;
            default: boolean | {
                style?: import("vue").CSSProperties;
                color?: string;
            };
        };
        arrow: {
            type: import("vue").PropType<boolean | {
                pointAtCenter: boolean;
            }>;
            default: boolean | {
                pointAtCenter: boolean;
            };
        };
        rootClassName: {
            type: StringConstructor;
        };
        placement: {
            type: import("vue").PropType<import("../vc-tour/placements").PlacementType>;
            default: import("../vc-tour/placements").PlacementType;
        };
        renderPanel: {
            type: import("vue").PropType<(props: Partial<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                };
                total: {
                    type: NumberConstructor;
                };
                current: {
                    type: NumberConstructor;
                };
                onClose: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                onFinish: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                renderPanel: {
                    type: import("vue").PropType<(step: any, current: number) => VueNode>;
                    default: (step: any, current: number) => VueNode;
                };
                onPrev: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                onNext: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                arrow: {
                    type: import("vue").PropType<boolean | {
                        pointAtCenter: boolean;
                    }>;
                    default: boolean | {
                        pointAtCenter: boolean;
                    };
                };
                target: {
                    type: import("vue").PropType<HTMLElement | (() => HTMLElement) | (() => null)>;
                    default: HTMLElement | (() => HTMLElement) | (() => null);
                };
                title: {
                    type: import("vue").PropType<VueNode>;
                    default: VueNode;
                };
                description: {
                    type: import("vue").PropType<VueNode>;
                    default: VueNode;
                };
                placement: {
                    type: import("vue").PropType<import("../vc-tour/placements").PlacementType>;
                    default: import("../vc-tour/placements").PlacementType;
                };
                mask: {
                    type: import("vue").PropType<boolean | {
                        style?: import("vue").CSSProperties;
                        color?: string;
                    }>;
                    default: boolean | {
                        style?: import("vue").CSSProperties;
                        color?: string;
                    };
                };
                className: {
                    type: StringConstructor;
                };
                style: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                    default: import("vue").CSSProperties;
                };
                scrollIntoViewOptions: {
                    type: import("vue").PropType<boolean | ScrollIntoViewOptions>;
                    default: boolean | ScrollIntoViewOptions;
                };
            }>>, current: number) => VueNode>;
            default: (props: Partial<import("vue").ExtractPropTypes<{
                prefixCls: {
                    type: StringConstructor;
                };
                total: {
                    type: NumberConstructor;
                };
                current: {
                    type: NumberConstructor;
                };
                onClose: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                onFinish: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                renderPanel: {
                    type: import("vue").PropType<(step: any, current: number) => VueNode>;
                    default: (step: any, current: number) => VueNode;
                };
                onPrev: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                onNext: {
                    type: import("vue").PropType<(e: MouseEvent) => void>;
                    default: (e: MouseEvent) => void;
                };
                arrow: {
                    type: import("vue").PropType<boolean | {
                        pointAtCenter: boolean;
                    }>;
                    default: boolean | {
                        pointAtCenter: boolean;
                    };
                };
                target: {
                    type: import("vue").PropType<HTMLElement | (() => HTMLElement) | (() => null)>;
                    default: HTMLElement | (() => HTMLElement) | (() => null);
                };
                title: {
                    type: import("vue").PropType<VueNode>;
                    default: VueNode;
                };
                description: {
                    type: import("vue").PropType<VueNode>;
                    default: VueNode;
                };
                placement: {
                    type: import("vue").PropType<import("../vc-tour/placements").PlacementType>;
                    default: import("../vc-tour/placements").PlacementType;
                };
                mask: {
                    type: import("vue").PropType<boolean | {
                        style?: import("vue").CSSProperties;
                        color?: string;
                    }>;
                    default: boolean | {
                        style?: import("vue").CSSProperties;
                        color?: string;
                    };
                };
                className: {
                    type: StringConstructor;
                };
                style: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                    default: import("vue").CSSProperties;
                };
                scrollIntoViewOptions: {
                    type: import("vue").PropType<boolean | ScrollIntoViewOptions>;
                    default: boolean | ScrollIntoViewOptions;
                };
            }>>, current: number) => VueNode;
        };
        gap: {
            type: import("vue").PropType<import("../vc-tour/hooks/useTarget").Gap>;
            default: import("../vc-tour/hooks/useTarget").Gap;
        };
        animated: {
            type: import("vue").PropType<boolean | {
                placeholder: boolean;
            }>;
            default: boolean | {
                placeholder: boolean;
            };
        };
        scrollIntoViewOptions: {
            type: import("vue").PropType<boolean | ScrollIntoViewOptions>;
            default: boolean | ScrollIntoViewOptions;
        };
        zIndex: {
            type: NumberConstructor;
            default: number;
        };
    }>> & import("vue").ShallowUnwrapRef<() => VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    steps: {
        type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
            cover: {
                type: import("vue").PropType<VueNode>;
            };
            nextButtonProps: {
                type: import("vue").PropType<import("./interface").TourBtnProps>;
            };
            prevButtonProps: {
                type: import("vue").PropType<import("./interface").TourBtnProps>;
            };
            current: {
                type: NumberConstructor;
            };
            type: {
                type: import("vue").PropType<"default" | "primary">;
            };
            prefixCls: {
                type: StringConstructor;
            };
            total: {
                type: NumberConstructor;
            };
            onClose: {
                type: import("vue").PropType<(e: MouseEvent) => void>;
                default: (e: MouseEvent) => void;
            };
            onFinish: {
                type: import("vue").PropType<(e: MouseEvent) => void>;
                default: (e: MouseEvent) => void;
            };
            renderPanel: {
                type: import("vue").PropType<(step: any, current: number) => VueNode>;
                default: (step: any, current: number) => VueNode;
            };
            onPrev: {
                type: import("vue").PropType<(e: MouseEvent) => void>;
                default: (e: MouseEvent) => void;
            };
            onNext: {
                type: import("vue").PropType<(e: MouseEvent) => void>;
                default: (e: MouseEvent) => void;
            };
            arrow: {
                type: import("vue").PropType<boolean | {
                    pointAtCenter: boolean;
                }>;
                default: boolean | {
                    pointAtCenter: boolean;
                };
            };
            target: {
                type: import("vue").PropType<HTMLElement | (() => HTMLElement) | (() => null)>;
                default: HTMLElement | (() => HTMLElement) | (() => null);
            };
            title: {
                type: import("vue").PropType<VueNode>;
                default: VueNode;
            };
            description: {
                type: import("vue").PropType<VueNode>;
                default: VueNode;
            };
            placement: {
                type: import("vue").PropType<import("../vc-tour/placements").PlacementType>;
                default: import("../vc-tour/placements").PlacementType;
            };
            mask: {
                type: import("vue").PropType<boolean | {
                    style?: import("vue").CSSProperties;
                    color?: string;
                }>;
                default: boolean | {
                    style?: import("vue").CSSProperties;
                    color?: string;
                };
            };
            className: {
                type: StringConstructor;
            };
            style: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            scrollIntoViewOptions: {
                type: import("vue").PropType<boolean | ScrollIntoViewOptions>;
                default: boolean | ScrollIntoViewOptions;
            };
        }>>[]>;
    };
    prefixCls: {
        type: StringConstructor;
    };
    current: {
        type: NumberConstructor;
    };
    type: {
        type: import("vue").PropType<"default" | "primary">;
    };
    'onUpdate:current': import("vue").PropType<(val: number) => void>;
    builtinPlacements: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    popupAlign: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    } & {
        default: () => {
            [key: string]: any;
        };
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultCurrent: {
        type: NumberConstructor;
    };
    onChange: {
        type: import("vue").PropType<(current: number) => void>;
        default: (current: number) => void;
    };
    onClose: {
        type: import("vue").PropType<(current: number) => void>;
        default: (current: number) => void;
    };
    onFinish: {
        type: import("vue").PropType<() => void>;
        default: () => void;
    };
    mask: {
        type: import("vue").PropType<boolean | {
            style?: import("vue").CSSProperties;
            color?: string;
        }>;
        default: boolean | {
            style?: import("vue").CSSProperties;
            color?: string;
        };
    };
    arrow: {
        type: import("vue").PropType<boolean | {
            pointAtCenter: boolean;
        }>;
        default: boolean | {
            pointAtCenter: boolean;
        };
    };
    rootClassName: {
        type: StringConstructor;
    };
    placement: {
        type: import("vue").PropType<import("../vc-tour/placements").PlacementType>;
        default: import("../vc-tour/placements").PlacementType;
    };
    renderPanel: {
        type: import("vue").PropType<(props: Partial<import("vue").ExtractPropTypes<{
            prefixCls: {
                type: StringConstructor;
            };
            total: {
                type: NumberConstructor;
            };
            current: {
                type: NumberConstructor;
            };
            onClose: {
                type: import("vue").PropType<(e: MouseEvent) => void>;
                default: (e: MouseEvent) => void;
            };
            onFinish: {
                type: import("vue").PropType<(e: MouseEvent) => void>;
                default: (e: MouseEvent) => void;
            };
            renderPanel: {
                type: import("vue").PropType<(step: any, current: number) => VueNode>;
                default: (step: any, current: number) => VueNode;
            };
            onPrev: {
                type: import("vue").PropType<(e: MouseEvent) => void>;
                default: (e: MouseEvent) => void;
            };
            onNext: {
                type: import("vue").PropType<(e: MouseEvent) => void>;
                default: (e: MouseEvent) => void;
            };
            arrow: {
                type: import("vue").PropType<boolean | {
                    pointAtCenter: boolean;
                }>;
                default: boolean | {
                    pointAtCenter: boolean;
                };
            };
            target: {
                type: import("vue").PropType<HTMLElement | (() => HTMLElement) | (() => null)>;
                default: HTMLElement | (() => HTMLElement) | (() => null);
            };
            title: {
                type: import("vue").PropType<VueNode>;
                default: VueNode;
            };
            description: {
                type: import("vue").PropType<VueNode>;
                default: VueNode;
            };
            placement: {
                type: import("vue").PropType<import("../vc-tour/placements").PlacementType>;
                default: import("../vc-tour/placements").PlacementType;
            };
            mask: {
                type: import("vue").PropType<boolean | {
                    style?: import("vue").CSSProperties;
                    color?: string;
                }>;
                default: boolean | {
                    style?: import("vue").CSSProperties;
                    color?: string;
                };
            };
            className: {
                type: StringConstructor;
            };
            style: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            scrollIntoViewOptions: {
                type: import("vue").PropType<boolean | ScrollIntoViewOptions>;
                default: boolean | ScrollIntoViewOptions;
            };
        }>>, current: number) => VueNode>;
        default: (props: Partial<import("vue").ExtractPropTypes<{
            prefixCls: {
                type: StringConstructor;
            };
            total: {
                type: NumberConstructor;
            };
            current: {
                type: NumberConstructor;
            };
            onClose: {
                type: import("vue").PropType<(e: MouseEvent) => void>;
                default: (e: MouseEvent) => void;
            };
            onFinish: {
                type: import("vue").PropType<(e: MouseEvent) => void>;
                default: (e: MouseEvent) => void;
            };
            renderPanel: {
                type: import("vue").PropType<(step: any, current: number) => VueNode>;
                default: (step: any, current: number) => VueNode;
            };
            onPrev: {
                type: import("vue").PropType<(e: MouseEvent) => void>;
                default: (e: MouseEvent) => void;
            };
            onNext: {
                type: import("vue").PropType<(e: MouseEvent) => void>;
                default: (e: MouseEvent) => void;
            };
            arrow: {
                type: import("vue").PropType<boolean | {
                    pointAtCenter: boolean;
                }>;
                default: boolean | {
                    pointAtCenter: boolean;
                };
            };
            target: {
                type: import("vue").PropType<HTMLElement | (() => HTMLElement) | (() => null)>;
                default: HTMLElement | (() => HTMLElement) | (() => null);
            };
            title: {
                type: import("vue").PropType<VueNode>;
                default: VueNode;
            };
            description: {
                type: import("vue").PropType<VueNode>;
                default: VueNode;
            };
            placement: {
                type: import("vue").PropType<import("../vc-tour/placements").PlacementType>;
                default: import("../vc-tour/placements").PlacementType;
            };
            mask: {
                type: import("vue").PropType<boolean | {
                    style?: import("vue").CSSProperties;
                    color?: string;
                }>;
                default: boolean | {
                    style?: import("vue").CSSProperties;
                    color?: string;
                };
            };
            className: {
                type: StringConstructor;
            };
            style: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            scrollIntoViewOptions: {
                type: import("vue").PropType<boolean | ScrollIntoViewOptions>;
                default: boolean | ScrollIntoViewOptions;
            };
        }>>, current: number) => VueNode;
    };
    gap: {
        type: import("vue").PropType<import("../vc-tour/hooks/useTarget").Gap>;
        default: import("../vc-tour/hooks/useTarget").Gap;
    };
    animated: {
        type: import("vue").PropType<boolean | {
            placeholder: boolean;
        }>;
        default: boolean | {
            placeholder: boolean;
        };
    };
    scrollIntoViewOptions: {
        type: import("vue").PropType<boolean | ScrollIntoViewOptions>;
        default: boolean | ScrollIntoViewOptions;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
}>>, () => VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mask: boolean | {
        style?: import("vue").CSSProperties;
        color?: string;
    };
    onChange: (current: number) => void;
    open: boolean;
    zIndex: number;
    gap: import("../vc-tour/hooks/useTarget").Gap;
    builtinPlacements: {
        [key: string]: any;
    };
    popupAlign: {
        [key: string]: any;
    };
    placement: import("../vc-tour/placements").PlacementType;
    arrow: boolean | {
        pointAtCenter: boolean;
    };
    scrollIntoViewOptions: boolean | ScrollIntoViewOptions;
    onClose: (current: number) => void;
    onFinish: () => void;
    renderPanel: (props: Partial<import("vue").ExtractPropTypes<{
        prefixCls: {
            type: StringConstructor;
        };
        total: {
            type: NumberConstructor;
        };
        current: {
            type: NumberConstructor;
        };
        onClose: {
            type: import("vue").PropType<(e: MouseEvent) => void>;
            default: (e: MouseEvent) => void;
        };
        onFinish: {
            type: import("vue").PropType<(e: MouseEvent) => void>;
            default: (e: MouseEvent) => void;
        };
        renderPanel: {
            type: import("vue").PropType<(step: any, current: number) => VueNode>;
            default: (step: any, current: number) => VueNode;
        };
        onPrev: {
            type: import("vue").PropType<(e: MouseEvent) => void>;
            default: (e: MouseEvent) => void;
        };
        onNext: {
            type: import("vue").PropType<(e: MouseEvent) => void>;
            default: (e: MouseEvent) => void;
        };
        arrow: {
            type: import("vue").PropType<boolean | {
                pointAtCenter: boolean;
            }>;
            default: boolean | {
                pointAtCenter: boolean;
            };
        };
        target: {
            type: import("vue").PropType<HTMLElement | (() => HTMLElement) | (() => null)>;
            default: HTMLElement | (() => HTMLElement) | (() => null);
        };
        title: {
            type: import("vue").PropType<VueNode>;
            default: VueNode;
        };
        description: {
            type: import("vue").PropType<VueNode>;
            default: VueNode;
        };
        placement: {
            type: import("vue").PropType<import("../vc-tour/placements").PlacementType>;
            default: import("../vc-tour/placements").PlacementType;
        };
        mask: {
            type: import("vue").PropType<boolean | {
                style?: import("vue").CSSProperties;
                color?: string;
            }>;
            default: boolean | {
                style?: import("vue").CSSProperties;
                color?: string;
            };
        };
        className: {
            type: StringConstructor;
        };
        style: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        scrollIntoViewOptions: {
            type: import("vue").PropType<boolean | ScrollIntoViewOptions>;
            default: boolean | ScrollIntoViewOptions;
        };
    }>>, current: number) => VueNode;
    animated: boolean | {
        placeholder: boolean;
    };
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export default _default;
