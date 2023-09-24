import type { Plugin } from 'vue';
import { collapseProps } from './Collapse';
import CollapsePanel, { collapsePanelProps } from './CollapsePanel';
export type { CollapseProps } from './Collapse';
export type { CollapsePanelProps } from './CollapsePanel';
export { CollapsePanel, collapseProps, collapsePanelProps };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            onChange?: (key: import("../_util/type").Key | import("../_util/type").Key[]) => void;
            expandIcon?: (panelProps: import("./commonProps").PanelProps) => any;
            activeKey?: import("./commonProps").ActiveKeyType;
            'onUpdate:activeKey'?: (key: import("../_util/type").Key | import("../_util/type").Key[]) => void;
            ghost?: boolean;
            bordered?: boolean;
            openAnimation?: {
                [key: string]: any;
            };
            defaultActiveKey?: import("./commonProps").ActiveKeyType;
            destroyInactivePanel?: boolean;
            accordion?: boolean;
            collapsible?: import("./commonProps").CollapsibleType;
            expandIconPosition?: "end" | "start";
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
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: any;
            expandIcon?: import("vue").Slot<Partial<import("vue").ExtractPropTypes<{
                openAnimation: import("vue-types").VueTypeValidableDef<{
                    [key: string]: any;
                }> & {
                    default: () => {
                        [key: string]: any;
                    };
                };
                prefixCls: StringConstructor;
                header: import("vue-types").VueTypeValidableDef<any>;
                headerClass: StringConstructor;
                showArrow: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                isActive: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                destroyInactivePanel: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                accordion: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                forceRender: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                expandIcon: {
                    type: import("vue").PropType<(panelProps: import("./commonProps").PanelProps) => any>;
                    default: (panelProps: import("./commonProps").PanelProps) => any;
                };
                extra: import("vue-types").VueTypeValidableDef<any>;
                panelKey: {
                    type: import("vue").PropType<string | number>;
                    default: string | number;
                };
                collapsible: {
                    type: import("vue").PropType<import("./commonProps").CollapsibleType>;
                    default: import("./commonProps").CollapsibleType;
                };
                role: StringConstructor;
                onItemClick: {
                    type: import("vue").PropType<(panelKey: import("../_util/type").Key) => void>;
                    default: (panelKey: import("../_util/type").Key) => void;
                };
            }>>>;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            activeKey: {
                type: import("vue").PropType<import("./commonProps").ActiveKeyType>;
                default: import("./commonProps").ActiveKeyType;
            };
            defaultActiveKey: {
                type: import("vue").PropType<import("./commonProps").ActiveKeyType>;
                default: import("./commonProps").ActiveKeyType;
            };
            accordion: {
                type: BooleanConstructor;
                default: boolean;
            };
            destroyInactivePanel: {
                type: BooleanConstructor;
                default: boolean;
            };
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            expandIcon: {
                type: import("vue").PropType<(panelProps: import("./commonProps").PanelProps) => any>;
                default: (panelProps: import("./commonProps").PanelProps) => any;
            };
            openAnimation: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            expandIconPosition: {
                type: import("vue").PropType<"end" | "start">;
                default: "end" | "start";
            };
            collapsible: {
                type: import("vue").PropType<import("./commonProps").CollapsibleType>;
                default: import("./commonProps").CollapsibleType;
            };
            ghost: {
                type: BooleanConstructor;
                default: boolean;
            };
            onChange: {
                type: import("vue").PropType<(key: import("../_util/type").Key | import("../_util/type").Key[]) => void>;
                default: (key: import("../_util/type").Key | import("../_util/type").Key[]) => void;
            };
            'onUpdate:activeKey': {
                type: import("vue").PropType<(key: import("../_util/type").Key | import("../_util/type").Key[]) => void>;
                default: (key: import("../_util/type").Key | import("../_util/type").Key[]) => void;
            };
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            onChange: (key: import("../_util/type").Key | import("../_util/type").Key[]) => void;
            expandIcon: (panelProps: import("./commonProps").PanelProps) => any;
            activeKey: import("./commonProps").ActiveKeyType;
            'onUpdate:activeKey': (key: import("../_util/type").Key | import("../_util/type").Key[]) => void;
            ghost: boolean;
            bordered: boolean;
            openAnimation: {
                [key: string]: any;
            };
            defaultActiveKey: import("./commonProps").ActiveKeyType;
            destroyInactivePanel: boolean;
            accordion: boolean;
            collapsible: import("./commonProps").CollapsibleType;
            expandIconPosition: "end" | "start";
        }, {}, string, import("../_util/type").CustomSlotsType<{
            default?: any;
            expandIcon?: Partial<import("vue").ExtractPropTypes<{
                openAnimation: import("vue-types").VueTypeValidableDef<{
                    [key: string]: any;
                }> & {
                    default: () => {
                        [key: string]: any;
                    };
                };
                prefixCls: StringConstructor;
                header: import("vue-types").VueTypeValidableDef<any>;
                headerClass: StringConstructor;
                showArrow: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                isActive: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                destroyInactivePanel: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                accordion: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                forceRender: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                expandIcon: {
                    type: import("vue").PropType<(panelProps: import("./commonProps").PanelProps) => any>;
                    default: (panelProps: import("./commonProps").PanelProps) => any;
                };
                extra: import("vue-types").VueTypeValidableDef<any>;
                panelKey: {
                    type: import("vue").PropType<string | number>;
                    default: string | number;
                };
                collapsible: {
                    type: import("vue").PropType<import("./commonProps").CollapsibleType>;
                    default: import("./commonProps").CollapsibleType;
                };
                role: StringConstructor;
                onItemClick: {
                    type: import("vue").PropType<(panelKey: import("../_util/type").Key) => void>;
                    default: (panelKey: import("../_util/type").Key) => void;
                };
            }>>;
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
        activeKey: {
            type: import("vue").PropType<import("./commonProps").ActiveKeyType>;
            default: import("./commonProps").ActiveKeyType;
        };
        defaultActiveKey: {
            type: import("vue").PropType<import("./commonProps").ActiveKeyType>;
            default: import("./commonProps").ActiveKeyType;
        };
        accordion: {
            type: BooleanConstructor;
            default: boolean;
        };
        destroyInactivePanel: {
            type: BooleanConstructor;
            default: boolean;
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        expandIcon: {
            type: import("vue").PropType<(panelProps: import("./commonProps").PanelProps) => any>;
            default: (panelProps: import("./commonProps").PanelProps) => any;
        };
        openAnimation: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        expandIconPosition: {
            type: import("vue").PropType<"end" | "start">;
            default: "end" | "start";
        };
        collapsible: {
            type: import("vue").PropType<import("./commonProps").CollapsibleType>;
            default: import("./commonProps").CollapsibleType;
        };
        ghost: {
            type: BooleanConstructor;
            default: boolean;
        };
        onChange: {
            type: import("vue").PropType<(key: import("../_util/type").Key | import("../_util/type").Key[]) => void>;
            default: (key: import("../_util/type").Key | import("../_util/type").Key[]) => void;
        };
        'onUpdate:activeKey': {
            type: import("vue").PropType<(key: import("../_util/type").Key | import("../_util/type").Key[]) => void>;
            default: (key: import("../_util/type").Key | import("../_util/type").Key[]) => void;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    activeKey: {
        type: import("vue").PropType<import("./commonProps").ActiveKeyType>;
        default: import("./commonProps").ActiveKeyType;
    };
    defaultActiveKey: {
        type: import("vue").PropType<import("./commonProps").ActiveKeyType>;
        default: import("./commonProps").ActiveKeyType;
    };
    accordion: {
        type: BooleanConstructor;
        default: boolean;
    };
    destroyInactivePanel: {
        type: BooleanConstructor;
        default: boolean;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    expandIcon: {
        type: import("vue").PropType<(panelProps: import("./commonProps").PanelProps) => any>;
        default: (panelProps: import("./commonProps").PanelProps) => any;
    };
    openAnimation: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    expandIconPosition: {
        type: import("vue").PropType<"end" | "start">;
        default: "end" | "start";
    };
    collapsible: {
        type: import("vue").PropType<import("./commonProps").CollapsibleType>;
        default: import("./commonProps").CollapsibleType;
    };
    ghost: {
        type: BooleanConstructor;
        default: boolean;
    };
    onChange: {
        type: import("vue").PropType<(key: import("../_util/type").Key | import("../_util/type").Key[]) => void>;
        default: (key: import("../_util/type").Key | import("../_util/type").Key[]) => void;
    };
    'onUpdate:activeKey': {
        type: import("vue").PropType<(key: import("../_util/type").Key | import("../_util/type").Key[]) => void>;
        default: (key: import("../_util/type").Key | import("../_util/type").Key[]) => void;
    };
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    onChange: (key: import("../_util/type").Key | import("../_util/type").Key[]) => void;
    expandIcon: (panelProps: import("./commonProps").PanelProps) => any;
    activeKey: import("./commonProps").ActiveKeyType;
    'onUpdate:activeKey': (key: import("../_util/type").Key | import("../_util/type").Key[]) => void;
    ghost: boolean;
    bordered: boolean;
    openAnimation: {
        [key: string]: any;
    };
    defaultActiveKey: import("./commonProps").ActiveKeyType;
    destroyInactivePanel: boolean;
    accordion: boolean;
    collapsible: import("./commonProps").CollapsibleType;
    expandIconPosition: "end" | "start";
}, {}, string, import("../_util/type").CustomSlotsType<{
    default?: any;
    expandIcon?: Partial<import("vue").ExtractPropTypes<{
        openAnimation: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        prefixCls: StringConstructor;
        header: import("vue-types").VueTypeValidableDef<any>;
        headerClass: StringConstructor;
        showArrow: {
            type: BooleanConstructor;
            default: boolean;
        };
        isActive: {
            type: BooleanConstructor;
            default: boolean;
        };
        destroyInactivePanel: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        accordion: {
            type: BooleanConstructor;
            default: boolean;
        };
        forceRender: {
            type: BooleanConstructor;
            default: boolean;
        };
        expandIcon: {
            type: import("vue").PropType<(panelProps: import("./commonProps").PanelProps) => any>;
            default: (panelProps: import("./commonProps").PanelProps) => any;
        };
        extra: import("vue-types").VueTypeValidableDef<any>;
        panelKey: {
            type: import("vue").PropType<string | number>;
            default: string | number;
        };
        collapsible: {
            type: import("vue").PropType<import("./commonProps").CollapsibleType>;
            default: import("./commonProps").CollapsibleType;
        };
        role: StringConstructor;
        onItemClick: {
            type: import("vue").PropType<(panelKey: import("../_util/type").Key) => void>;
            default: (panelKey: import("../_util/type").Key) => void;
        };
    }>>;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]> & {
    readonly Panel: typeof CollapsePanel;
};
export default _default;
