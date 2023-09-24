import type { App, ExtractPropTypes } from 'vue';
import type { VueNode, CustomSlotsType } from '../_util/type';
import type { Status, ProgressDotRender } from '../vc-steps/interface';
import type { MouseEventHandler } from '../_util/EventInterface';
export declare const stepsProps: () => {
    prefixCls: StringConstructor;
    iconPrefix: StringConstructor;
    current: NumberConstructor;
    initial: NumberConstructor;
    percent: NumberConstructor;
    responsive: {
        type: BooleanConstructor;
        default: boolean;
    };
    items: {
        type: import("vue").PropType<Partial<ExtractPropTypes<{
            description: {
                default: any;
                type: import("vue").PropType<any>;
            };
            icon: {
                default: any;
                type: import("vue").PropType<any>;
            };
            status: {
                type: import("vue").PropType<Status>;
                default: Status;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            title: {
                default: any;
                type: import("vue").PropType<any>;
            };
            subTitle: {
                default: any;
                type: import("vue").PropType<any>;
            };
            onClick: {
                type: import("vue").PropType<MouseEventHandler>;
                default: MouseEventHandler;
            };
        }>>[]>;
        default: Partial<ExtractPropTypes<{
            description: {
                default: any;
                type: import("vue").PropType<any>;
            };
            icon: {
                default: any;
                type: import("vue").PropType<any>;
            };
            status: {
                type: import("vue").PropType<Status>;
                default: Status;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            title: {
                default: any;
                type: import("vue").PropType<any>;
            };
            subTitle: {
                default: any;
                type: import("vue").PropType<any>;
            };
            onClick: {
                type: import("vue").PropType<MouseEventHandler>;
                default: MouseEventHandler;
            };
        }>>[];
    };
    labelPlacement: {
        type: import("vue").PropType<"vertical" | "horizontal">;
        default: "vertical" | "horizontal";
    };
    status: {
        type: import("vue").PropType<Status>;
        default: Status;
    };
    size: {
        type: import("vue").PropType<"small" | "default">;
        default: "small" | "default";
    };
    direction: {
        type: import("vue").PropType<"vertical" | "horizontal">;
        default: "vertical" | "horizontal";
    };
    progressDot: {
        type: import("vue").PropType<boolean | ProgressDotRender>;
        default: boolean | ProgressDotRender;
    };
    type: {
        type: import("vue").PropType<"default" | "inline" | "navigation">;
        default: "default" | "inline" | "navigation";
    };
    onChange: {
        type: import("vue").PropType<(current: number) => void>;
        default: (current: number) => void;
    };
    'onUpdate:current': {
        type: import("vue").PropType<(current: number) => void>;
        default: (current: number) => void;
    };
};
export declare const stepProps: () => {
    description: {
        default: any;
        type: import("vue").PropType<any>;
    };
    icon: {
        default: any;
        type: import("vue").PropType<any>;
    };
    status: {
        type: import("vue").PropType<Status>;
        default: Status;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        default: any;
        type: import("vue").PropType<any>;
    };
    subTitle: {
        default: any;
        type: import("vue").PropType<any>;
    };
    onClick: {
        type: import("vue").PropType<MouseEventHandler>;
        default: MouseEventHandler;
    };
};
export type StepsProps = Partial<ExtractPropTypes<ReturnType<typeof stepsProps>>>;
export type StepProps = Partial<ExtractPropTypes<ReturnType<typeof stepProps>>>;
export declare const Step: (props: Record<string, any> & {}) => any;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            onChange?: (current: number) => void;
            size?: "small" | "default";
            direction?: "vertical" | "horizontal";
            responsive?: boolean;
            type?: "default" | "inline" | "navigation";
            status?: Status;
            items?: Partial<ExtractPropTypes<{
                description: {
                    default: any;
                    type: import("vue").PropType<any>;
                };
                icon: {
                    default: any;
                    type: import("vue").PropType<any>;
                };
                status: {
                    type: import("vue").PropType<Status>;
                    default: Status;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                title: {
                    default: any;
                    type: import("vue").PropType<any>;
                };
                subTitle: {
                    default: any;
                    type: import("vue").PropType<any>;
                };
                onClick: {
                    type: import("vue").PropType<MouseEventHandler>;
                    default: MouseEventHandler;
                };
            }>>[];
            'onUpdate:current'?: (current: number) => void;
            progressDot?: boolean | ProgressDotRender;
            labelPlacement?: "vertical" | "horizontal";
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
            readonly initial?: number;
            readonly prefixCls?: string;
            role?: string;
            readonly percent?: number;
            readonly iconPrefix?: string;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            progressDot: any;
            default: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            prefixCls: StringConstructor;
            iconPrefix: StringConstructor;
            current: NumberConstructor;
            initial: NumberConstructor;
            percent: NumberConstructor;
            responsive: {
                type: BooleanConstructor;
                default: boolean;
            };
            items: {
                type: import("vue").PropType<Partial<ExtractPropTypes<{
                    description: {
                        default: any;
                        type: import("vue").PropType<any>;
                    };
                    icon: {
                        default: any;
                        type: import("vue").PropType<any>;
                    };
                    status: {
                        type: import("vue").PropType<Status>;
                        default: Status;
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    title: {
                        default: any;
                        type: import("vue").PropType<any>;
                    };
                    subTitle: {
                        default: any;
                        type: import("vue").PropType<any>;
                    };
                    onClick: {
                        type: import("vue").PropType<MouseEventHandler>;
                        default: MouseEventHandler;
                    };
                }>>[]>;
                default: Partial<ExtractPropTypes<{
                    description: {
                        default: any;
                        type: import("vue").PropType<any>;
                    };
                    icon: {
                        default: any;
                        type: import("vue").PropType<any>;
                    };
                    status: {
                        type: import("vue").PropType<Status>;
                        default: Status;
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    title: {
                        default: any;
                        type: import("vue").PropType<any>;
                    };
                    subTitle: {
                        default: any;
                        type: import("vue").PropType<any>;
                    };
                    onClick: {
                        type: import("vue").PropType<MouseEventHandler>;
                        default: MouseEventHandler;
                    };
                }>>[];
            };
            labelPlacement: {
                type: import("vue").PropType<"vertical" | "horizontal">;
                default: "vertical" | "horizontal";
            };
            status: {
                type: import("vue").PropType<Status>;
                default: Status;
            };
            size: {
                type: import("vue").PropType<"small" | "default">;
                default: "small" | "default";
            };
            direction: {
                type: import("vue").PropType<"vertical" | "horizontal">;
                default: "vertical" | "horizontal";
            };
            progressDot: {
                type: import("vue").PropType<boolean | ProgressDotRender>;
                default: boolean | ProgressDotRender;
            };
            type: {
                type: import("vue").PropType<"default" | "inline" | "navigation">;
                default: "default" | "inline" | "navigation";
            };
            onChange: {
                type: import("vue").PropType<(current: number) => void>;
                default: (current: number) => void;
            };
            'onUpdate:current': {
                type: import("vue").PropType<(current: number) => void>;
                default: (current: number) => void;
            };
        }>>, () => VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            onChange: (current: number) => void;
            size: "small" | "default";
            direction: "vertical" | "horizontal";
            responsive: boolean;
            type: "default" | "inline" | "navigation";
            status: Status;
            items: Partial<ExtractPropTypes<{
                description: {
                    default: any;
                    type: import("vue").PropType<any>;
                };
                icon: {
                    default: any;
                    type: import("vue").PropType<any>;
                };
                status: {
                    type: import("vue").PropType<Status>;
                    default: Status;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                title: {
                    default: any;
                    type: import("vue").PropType<any>;
                };
                subTitle: {
                    default: any;
                    type: import("vue").PropType<any>;
                };
                onClick: {
                    type: import("vue").PropType<MouseEventHandler>;
                    default: MouseEventHandler;
                };
            }>>[];
            'onUpdate:current': (current: number) => void;
            progressDot: boolean | ProgressDotRender;
            labelPlacement: "vertical" | "horizontal";
        }, {}, string, CustomSlotsType<{
            progressDot: any;
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
        iconPrefix: StringConstructor;
        current: NumberConstructor;
        initial: NumberConstructor;
        percent: NumberConstructor;
        responsive: {
            type: BooleanConstructor;
            default: boolean;
        };
        items: {
            type: import("vue").PropType<Partial<ExtractPropTypes<{
                description: {
                    default: any;
                    type: import("vue").PropType<any>;
                };
                icon: {
                    default: any;
                    type: import("vue").PropType<any>;
                };
                status: {
                    type: import("vue").PropType<Status>;
                    default: Status;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                title: {
                    default: any;
                    type: import("vue").PropType<any>;
                };
                subTitle: {
                    default: any;
                    type: import("vue").PropType<any>;
                };
                onClick: {
                    type: import("vue").PropType<MouseEventHandler>;
                    default: MouseEventHandler;
                };
            }>>[]>;
            default: Partial<ExtractPropTypes<{
                description: {
                    default: any;
                    type: import("vue").PropType<any>;
                };
                icon: {
                    default: any;
                    type: import("vue").PropType<any>;
                };
                status: {
                    type: import("vue").PropType<Status>;
                    default: Status;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                title: {
                    default: any;
                    type: import("vue").PropType<any>;
                };
                subTitle: {
                    default: any;
                    type: import("vue").PropType<any>;
                };
                onClick: {
                    type: import("vue").PropType<MouseEventHandler>;
                    default: MouseEventHandler;
                };
            }>>[];
        };
        labelPlacement: {
            type: import("vue").PropType<"vertical" | "horizontal">;
            default: "vertical" | "horizontal";
        };
        status: {
            type: import("vue").PropType<Status>;
            default: Status;
        };
        size: {
            type: import("vue").PropType<"small" | "default">;
            default: "small" | "default";
        };
        direction: {
            type: import("vue").PropType<"vertical" | "horizontal">;
            default: "vertical" | "horizontal";
        };
        progressDot: {
            type: import("vue").PropType<boolean | ProgressDotRender>;
            default: boolean | ProgressDotRender;
        };
        type: {
            type: import("vue").PropType<"default" | "inline" | "navigation">;
            default: "default" | "inline" | "navigation";
        };
        onChange: {
            type: import("vue").PropType<(current: number) => void>;
            default: (current: number) => void;
        };
        'onUpdate:current': {
            type: import("vue").PropType<(current: number) => void>;
            default: (current: number) => void;
        };
    }>> & import("vue").ShallowUnwrapRef<() => VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    iconPrefix: StringConstructor;
    current: NumberConstructor;
    initial: NumberConstructor;
    percent: NumberConstructor;
    responsive: {
        type: BooleanConstructor;
        default: boolean;
    };
    items: {
        type: import("vue").PropType<Partial<ExtractPropTypes<{
            description: {
                default: any;
                type: import("vue").PropType<any>;
            };
            icon: {
                default: any;
                type: import("vue").PropType<any>;
            };
            status: {
                type: import("vue").PropType<Status>;
                default: Status;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            title: {
                default: any;
                type: import("vue").PropType<any>;
            };
            subTitle: {
                default: any;
                type: import("vue").PropType<any>;
            };
            onClick: {
                type: import("vue").PropType<MouseEventHandler>;
                default: MouseEventHandler;
            };
        }>>[]>;
        default: Partial<ExtractPropTypes<{
            description: {
                default: any;
                type: import("vue").PropType<any>;
            };
            icon: {
                default: any;
                type: import("vue").PropType<any>;
            };
            status: {
                type: import("vue").PropType<Status>;
                default: Status;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            title: {
                default: any;
                type: import("vue").PropType<any>;
            };
            subTitle: {
                default: any;
                type: import("vue").PropType<any>;
            };
            onClick: {
                type: import("vue").PropType<MouseEventHandler>;
                default: MouseEventHandler;
            };
        }>>[];
    };
    labelPlacement: {
        type: import("vue").PropType<"vertical" | "horizontal">;
        default: "vertical" | "horizontal";
    };
    status: {
        type: import("vue").PropType<Status>;
        default: Status;
    };
    size: {
        type: import("vue").PropType<"small" | "default">;
        default: "small" | "default";
    };
    direction: {
        type: import("vue").PropType<"vertical" | "horizontal">;
        default: "vertical" | "horizontal";
    };
    progressDot: {
        type: import("vue").PropType<boolean | ProgressDotRender>;
        default: boolean | ProgressDotRender;
    };
    type: {
        type: import("vue").PropType<"default" | "inline" | "navigation">;
        default: "default" | "inline" | "navigation";
    };
    onChange: {
        type: import("vue").PropType<(current: number) => void>;
        default: (current: number) => void;
    };
    'onUpdate:current': {
        type: import("vue").PropType<(current: number) => void>;
        default: (current: number) => void;
    };
}>>, () => VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    onChange: (current: number) => void;
    size: "small" | "default";
    direction: "vertical" | "horizontal";
    responsive: boolean;
    type: "default" | "inline" | "navigation";
    status: Status;
    items: Partial<ExtractPropTypes<{
        description: {
            default: any;
            type: import("vue").PropType<any>;
        };
        icon: {
            default: any;
            type: import("vue").PropType<any>;
        };
        status: {
            type: import("vue").PropType<Status>;
            default: Status;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        title: {
            default: any;
            type: import("vue").PropType<any>;
        };
        subTitle: {
            default: any;
            type: import("vue").PropType<any>;
        };
        onClick: {
            type: import("vue").PropType<MouseEventHandler>;
            default: MouseEventHandler;
        };
    }>>[];
    'onUpdate:current': (current: number) => void;
    progressDot: boolean | ProgressDotRender;
    labelPlacement: "vertical" | "horizontal";
}, {}, string, CustomSlotsType<{
    progressDot: any;
    default: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Step: (props: Record<string, any> & {}) => any;
    install: (app: App) => App<any>;
};
export default _default;
