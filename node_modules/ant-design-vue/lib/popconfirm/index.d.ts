import type { ExtractPropTypes, HTMLAttributes, PropType } from 'vue';
import type { LegacyButtonType } from '../button/buttonTypes';
import type { CustomSlotsType } from '../_util/type';
export declare const popconfirmProps: () => {
    prefixCls: StringConstructor;
    content: {
        default: any;
        type: PropType<any>;
    };
    title: {
        default: string | number;
        type: PropType<string | number>;
    };
    description: {
        default: string | number;
        type: PropType<string | number>;
    };
    okType: {
        type: PropType<LegacyButtonType>;
        default: LegacyButtonType;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    okText: {
        default: any;
        type: PropType<any>;
    };
    cancelText: {
        default: any;
        type: PropType<any>;
    };
    icon: {
        default: any;
        type: PropType<any>;
    };
    okButtonProps: {
        type: PropType<Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: PropType<import("../button").ButtonType>;
            htmlType: {
                type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: PropType<import("../button").ButtonShape>;
            };
            size: {
                type: PropType<import("../button").ButtonSize>;
            };
            loading: {
                type: PropType<boolean | {
                    delay?: number;
                }>;
                default: () => boolean | {
                    delay?: number;
                };
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            ghost: {
                type: BooleanConstructor;
                default: any;
            };
            block: {
                type: BooleanConstructor;
                default: any;
            };
            danger: {
                type: BooleanConstructor;
                default: any;
            };
            icon: import("vue-types").VueTypeValidableDef<any>;
            href: StringConstructor;
            target: StringConstructor;
            title: StringConstructor;
            onClick: {
                type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
            onMousedown: {
                type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
        }>> & HTMLAttributes>;
        default: Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: PropType<import("../button").ButtonType>;
            htmlType: {
                type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: PropType<import("../button").ButtonShape>;
            };
            size: {
                type: PropType<import("../button").ButtonSize>;
            };
            loading: {
                type: PropType<boolean | {
                    delay?: number;
                }>;
                default: () => boolean | {
                    delay?: number;
                };
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            ghost: {
                type: BooleanConstructor;
                default: any;
            };
            block: {
                type: BooleanConstructor;
                default: any;
            };
            danger: {
                type: BooleanConstructor;
                default: any;
            };
            icon: import("vue-types").VueTypeValidableDef<any>;
            href: StringConstructor;
            target: StringConstructor;
            title: StringConstructor;
            onClick: {
                type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
            onMousedown: {
                type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
        }>> & HTMLAttributes;
    };
    cancelButtonProps: {
        type: PropType<Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: PropType<import("../button").ButtonType>;
            htmlType: {
                type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: PropType<import("../button").ButtonShape>;
            };
            size: {
                type: PropType<import("../button").ButtonSize>;
            };
            loading: {
                type: PropType<boolean | {
                    delay?: number;
                }>;
                default: () => boolean | {
                    delay?: number;
                };
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            ghost: {
                type: BooleanConstructor;
                default: any;
            };
            block: {
                type: BooleanConstructor;
                default: any;
            };
            danger: {
                type: BooleanConstructor;
                default: any;
            };
            icon: import("vue-types").VueTypeValidableDef<any>;
            href: StringConstructor;
            target: StringConstructor;
            title: StringConstructor;
            onClick: {
                type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
            onMousedown: {
                type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
        }>> & HTMLAttributes>;
        default: Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: PropType<import("../button").ButtonType>;
            htmlType: {
                type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: PropType<import("../button").ButtonShape>;
            };
            size: {
                type: PropType<import("../button").ButtonSize>;
            };
            loading: {
                type: PropType<boolean | {
                    delay?: number;
                }>;
                default: () => boolean | {
                    delay?: number;
                };
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            ghost: {
                type: BooleanConstructor;
                default: any;
            };
            block: {
                type: BooleanConstructor;
                default: any;
            };
            danger: {
                type: BooleanConstructor;
                default: any;
            };
            icon: import("vue-types").VueTypeValidableDef<any>;
            href: StringConstructor;
            target: StringConstructor;
            title: StringConstructor;
            onClick: {
                type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
            onMousedown: {
                type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
        }>> & HTMLAttributes;
    };
    showCancel: {
        type: BooleanConstructor;
        default: boolean;
    };
    onConfirm: PropType<(e: MouseEvent) => void>;
    onCancel: PropType<(e: MouseEvent) => void>;
    trigger: PropType<import("../tooltip/abstractTooltipProps").TriggerType | import("../tooltip/abstractTooltipProps").TriggerType[]>;
    open: {
        type: BooleanConstructor;
        default: any;
    };
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    placement: PropType<import("../tooltip/abstractTooltipProps").TooltipPlacement>;
    color: PropType<import("../_util/type").LiteralUnion<import("../_util/colors").PresetColorType>>;
    transitionName: StringConstructor;
    overlayStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    overlayInnerStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    overlayClassName: StringConstructor;
    openClassName: StringConstructor;
    mouseEnterDelay: NumberConstructor;
    mouseLeaveDelay: NumberConstructor;
    getPopupContainer: PropType<(triggerNode: HTMLElement) => HTMLElement>;
    arrowPointAtCenter: {
        type: BooleanConstructor;
        default: any;
    };
    autoAdjustOverflow: {
        type: PropType<boolean | import("../_util/placements").AdjustOverflow>;
        default: boolean | import("../_util/placements").AdjustOverflow;
    };
    destroyTooltipOnHide: {
        type: BooleanConstructor;
        default: any;
    };
    align: {
        type: PropType<import("../vc-trigger/interface").AlignType>;
        default: import("../vc-trigger/interface").AlignType;
    };
    builtinPlacements: {
        type: PropType<import("../vc-trigger/interface").BuildInPlacements>;
        default: import("../vc-trigger/interface").BuildInPlacements;
    };
    children: ArrayConstructor;
    onVisibleChange: PropType<(vis: boolean) => void>;
    'onUpdate:visible': PropType<(vis: boolean) => void>;
    onOpenChange: PropType<(vis: boolean) => void>;
    'onUpdate:open': PropType<(vis: boolean) => void>;
};
export type PopconfirmProps = Partial<ExtractPropTypes<ReturnType<typeof popconfirmProps>>>;
export interface PopconfirmLocale {
    okText: string;
    cancelText: string;
}
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            title?: string | number;
            visible?: boolean;
            content?: any;
            open?: boolean;
            icon?: any;
            disabled?: boolean;
            description?: string | number;
            align?: import("../vc-trigger/interface").AlignType;
            builtinPlacements?: import("../vc-trigger/interface").BuildInPlacements;
            overlayInnerStyle?: import("vue").CSSProperties;
            overlayStyle?: import("vue").CSSProperties;
            destroyTooltipOnHide?: boolean;
            autoAdjustOverflow?: boolean | import("../_util/placements").AdjustOverflow;
            arrowPointAtCenter?: boolean;
            okText?: any;
            cancelText?: any;
            okType?: LegacyButtonType;
            okButtonProps?: Partial<ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: PropType<import("../button").ButtonType>;
                htmlType: {
                    type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: PropType<import("../button").ButtonSize>;
                };
                loading: {
                    type: PropType<boolean | {
                        delay?: number;
                    }>;
                    default: () => boolean | {
                        delay?: number;
                    };
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                ghost: {
                    type: BooleanConstructor;
                    default: any;
                };
                block: {
                    type: BooleanConstructor;
                    default: any;
                };
                danger: {
                    type: BooleanConstructor;
                    default: any;
                };
                icon: import("vue-types").VueTypeValidableDef<any>;
                href: StringConstructor;
                target: StringConstructor;
                title: StringConstructor;
                onClick: {
                    type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
                onMousedown: {
                    type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
            }>> & HTMLAttributes;
            cancelButtonProps?: Partial<ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: PropType<import("../button").ButtonType>;
                htmlType: {
                    type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: PropType<import("../button").ButtonSize>;
                };
                loading: {
                    type: PropType<boolean | {
                        delay?: number;
                    }>;
                    default: () => boolean | {
                        delay?: number;
                    };
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                ghost: {
                    type: BooleanConstructor;
                    default: any;
                };
                block: {
                    type: BooleanConstructor;
                    default: any;
                };
                danger: {
                    type: BooleanConstructor;
                    default: any;
                };
                icon: import("vue-types").VueTypeValidableDef<any>;
                href: StringConstructor;
                target: StringConstructor;
                title: StringConstructor;
                onClick: {
                    type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
                onMousedown: {
                    type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
            }>> & HTMLAttributes;
            showCancel?: boolean;
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
            readonly placement?: import("../tooltip/abstractTooltipProps").TooltipPlacement;
            readonly overlayClassName?: string;
            readonly onVisibleChange?: (vis: boolean) => void;
            readonly openClassName?: string;
            readonly 'onUpdate:visible'?: (vis: boolean) => void;
            readonly onOpenChange?: (vis: boolean) => void;
            readonly 'onUpdate:open'?: (vis: boolean) => void;
            readonly onCancel?: (e: MouseEvent) => void;
            readonly onConfirm?: (e: MouseEvent) => void;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            title?: any;
            content?: any;
            description?: any;
            okText?: any;
            icon?: any;
            cancel?: any;
            cancelText?: any;
            cancelButton?: any;
            okButton?: any;
            default?: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            prefixCls: StringConstructor;
            content: {
                default: any;
                type: PropType<any>;
            };
            title: {
                default: string | number;
                type: PropType<string | number>;
            };
            description: {
                default: string | number;
                type: PropType<string | number>;
            };
            okType: {
                type: PropType<LegacyButtonType>;
                default: LegacyButtonType;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            okText: {
                default: any;
                type: PropType<any>;
            };
            cancelText: {
                default: any;
                type: PropType<any>;
            };
            icon: {
                default: any;
                type: PropType<any>;
            };
            okButtonProps: {
                type: PropType<Partial<ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    type: PropType<import("../button").ButtonType>;
                    htmlType: {
                        type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                        default: string;
                    };
                    shape: {
                        type: PropType<import("../button").ButtonShape>;
                    };
                    size: {
                        type: PropType<import("../button").ButtonSize>;
                    };
                    loading: {
                        type: PropType<boolean | {
                            delay?: number;
                        }>;
                        default: () => boolean | {
                            delay?: number;
                        };
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    ghost: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    block: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    danger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    icon: import("vue-types").VueTypeValidableDef<any>;
                    href: StringConstructor;
                    target: StringConstructor;
                    title: StringConstructor;
                    onClick: {
                        type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                    };
                    onMousedown: {
                        type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                    };
                }>> & HTMLAttributes>;
                default: Partial<ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    type: PropType<import("../button").ButtonType>;
                    htmlType: {
                        type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                        default: string;
                    };
                    shape: {
                        type: PropType<import("../button").ButtonShape>;
                    };
                    size: {
                        type: PropType<import("../button").ButtonSize>;
                    };
                    loading: {
                        type: PropType<boolean | {
                            delay?: number;
                        }>;
                        default: () => boolean | {
                            delay?: number;
                        };
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    ghost: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    block: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    danger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    icon: import("vue-types").VueTypeValidableDef<any>;
                    href: StringConstructor;
                    target: StringConstructor;
                    title: StringConstructor;
                    onClick: {
                        type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                    };
                    onMousedown: {
                        type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                    };
                }>> & HTMLAttributes;
            };
            cancelButtonProps: {
                type: PropType<Partial<ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    type: PropType<import("../button").ButtonType>;
                    htmlType: {
                        type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                        default: string;
                    };
                    shape: {
                        type: PropType<import("../button").ButtonShape>;
                    };
                    size: {
                        type: PropType<import("../button").ButtonSize>;
                    };
                    loading: {
                        type: PropType<boolean | {
                            delay?: number;
                        }>;
                        default: () => boolean | {
                            delay?: number;
                        };
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    ghost: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    block: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    danger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    icon: import("vue-types").VueTypeValidableDef<any>;
                    href: StringConstructor;
                    target: StringConstructor;
                    title: StringConstructor;
                    onClick: {
                        type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                    };
                    onMousedown: {
                        type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                    };
                }>> & HTMLAttributes>;
                default: Partial<ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    type: PropType<import("../button").ButtonType>;
                    htmlType: {
                        type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                        default: string;
                    };
                    shape: {
                        type: PropType<import("../button").ButtonShape>;
                    };
                    size: {
                        type: PropType<import("../button").ButtonSize>;
                    };
                    loading: {
                        type: PropType<boolean | {
                            delay?: number;
                        }>;
                        default: () => boolean | {
                            delay?: number;
                        };
                    };
                    disabled: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    ghost: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    block: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    danger: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    icon: import("vue-types").VueTypeValidableDef<any>;
                    href: StringConstructor;
                    target: StringConstructor;
                    title: StringConstructor;
                    onClick: {
                        type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                    };
                    onMousedown: {
                        type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                    };
                }>> & HTMLAttributes;
            };
            showCancel: {
                type: BooleanConstructor;
                default: boolean;
            };
            onConfirm: PropType<(e: MouseEvent) => void>;
            onCancel: PropType<(e: MouseEvent) => void>;
            trigger: PropType<import("../tooltip/abstractTooltipProps").TriggerType | import("../tooltip/abstractTooltipProps").TriggerType[]>;
            open: {
                type: BooleanConstructor;
                default: any;
            };
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            placement: PropType<import("../tooltip/abstractTooltipProps").TooltipPlacement>;
            color: PropType<import("../_util/type").LiteralUnion<import("../_util/colors").PresetColorType>>;
            transitionName: StringConstructor;
            overlayStyle: {
                type: PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            overlayInnerStyle: {
                type: PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            overlayClassName: StringConstructor;
            openClassName: StringConstructor;
            mouseEnterDelay: NumberConstructor;
            mouseLeaveDelay: NumberConstructor;
            getPopupContainer: PropType<(triggerNode: HTMLElement) => HTMLElement>;
            arrowPointAtCenter: {
                type: BooleanConstructor;
                default: any;
            };
            autoAdjustOverflow: {
                type: PropType<boolean | import("../_util/placements").AdjustOverflow>;
                default: boolean | import("../_util/placements").AdjustOverflow;
            };
            destroyTooltipOnHide: {
                type: BooleanConstructor;
                default: any;
            };
            align: {
                type: PropType<import("../vc-trigger/interface").AlignType>;
                default: import("../vc-trigger/interface").AlignType;
            };
            builtinPlacements: {
                type: PropType<import("../vc-trigger/interface").BuildInPlacements>;
                default: import("../vc-trigger/interface").BuildInPlacements;
            };
            children: ArrayConstructor;
            onVisibleChange: PropType<(vis: boolean) => void>;
            'onUpdate:visible': PropType<(vis: boolean) => void>;
            onOpenChange: PropType<(vis: boolean) => void>;
            'onUpdate:open': PropType<(vis: boolean) => void>;
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            title: string | number;
            visible: boolean;
            content: any;
            open: boolean;
            icon: any;
            disabled: boolean;
            description: string | number;
            align: import("../vc-trigger/interface").AlignType;
            builtinPlacements: import("../vc-trigger/interface").BuildInPlacements;
            overlayInnerStyle: import("vue").CSSProperties;
            overlayStyle: import("vue").CSSProperties;
            destroyTooltipOnHide: boolean;
            autoAdjustOverflow: boolean | import("../_util/placements").AdjustOverflow;
            arrowPointAtCenter: boolean;
            okText: any;
            cancelText: any;
            okType: LegacyButtonType;
            okButtonProps: Partial<ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: PropType<import("../button").ButtonType>;
                htmlType: {
                    type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: PropType<import("../button").ButtonSize>;
                };
                loading: {
                    type: PropType<boolean | {
                        delay?: number;
                    }>;
                    default: () => boolean | {
                        delay?: number;
                    };
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                ghost: {
                    type: BooleanConstructor;
                    default: any;
                };
                block: {
                    type: BooleanConstructor;
                    default: any;
                };
                danger: {
                    type: BooleanConstructor;
                    default: any;
                };
                icon: import("vue-types").VueTypeValidableDef<any>;
                href: StringConstructor;
                target: StringConstructor;
                title: StringConstructor;
                onClick: {
                    type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
                onMousedown: {
                    type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
            }>> & HTMLAttributes;
            cancelButtonProps: Partial<ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: PropType<import("../button").ButtonType>;
                htmlType: {
                    type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: PropType<import("../button").ButtonSize>;
                };
                loading: {
                    type: PropType<boolean | {
                        delay?: number;
                    }>;
                    default: () => boolean | {
                        delay?: number;
                    };
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                ghost: {
                    type: BooleanConstructor;
                    default: any;
                };
                block: {
                    type: BooleanConstructor;
                    default: any;
                };
                danger: {
                    type: BooleanConstructor;
                    default: any;
                };
                icon: import("vue-types").VueTypeValidableDef<any>;
                href: StringConstructor;
                target: StringConstructor;
                title: StringConstructor;
                onClick: {
                    type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
                onMousedown: {
                    type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
            }>> & HTMLAttributes;
            showCancel: boolean;
        }, {}, string, CustomSlotsType<{
            title?: any;
            content?: any;
            description?: any;
            okText?: any;
            icon?: any;
            cancel?: any;
            cancelText?: any;
            cancelButton?: any;
            okButton?: any;
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
        prefixCls: StringConstructor;
        content: {
            default: any;
            type: PropType<any>;
        };
        title: {
            default: string | number;
            type: PropType<string | number>;
        };
        description: {
            default: string | number;
            type: PropType<string | number>;
        };
        okType: {
            type: PropType<LegacyButtonType>;
            default: LegacyButtonType;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        okText: {
            default: any;
            type: PropType<any>;
        };
        cancelText: {
            default: any;
            type: PropType<any>;
        };
        icon: {
            default: any;
            type: PropType<any>;
        };
        okButtonProps: {
            type: PropType<Partial<ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: PropType<import("../button").ButtonType>;
                htmlType: {
                    type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: PropType<import("../button").ButtonSize>;
                };
                loading: {
                    type: PropType<boolean | {
                        delay?: number;
                    }>;
                    default: () => boolean | {
                        delay?: number;
                    };
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                ghost: {
                    type: BooleanConstructor;
                    default: any;
                };
                block: {
                    type: BooleanConstructor;
                    default: any;
                };
                danger: {
                    type: BooleanConstructor;
                    default: any;
                };
                icon: import("vue-types").VueTypeValidableDef<any>;
                href: StringConstructor;
                target: StringConstructor;
                title: StringConstructor;
                onClick: {
                    type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
                onMousedown: {
                    type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
            }>> & HTMLAttributes>;
            default: Partial<ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: PropType<import("../button").ButtonType>;
                htmlType: {
                    type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: PropType<import("../button").ButtonSize>;
                };
                loading: {
                    type: PropType<boolean | {
                        delay?: number;
                    }>;
                    default: () => boolean | {
                        delay?: number;
                    };
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                ghost: {
                    type: BooleanConstructor;
                    default: any;
                };
                block: {
                    type: BooleanConstructor;
                    default: any;
                };
                danger: {
                    type: BooleanConstructor;
                    default: any;
                };
                icon: import("vue-types").VueTypeValidableDef<any>;
                href: StringConstructor;
                target: StringConstructor;
                title: StringConstructor;
                onClick: {
                    type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
                onMousedown: {
                    type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
            }>> & HTMLAttributes;
        };
        cancelButtonProps: {
            type: PropType<Partial<ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: PropType<import("../button").ButtonType>;
                htmlType: {
                    type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: PropType<import("../button").ButtonSize>;
                };
                loading: {
                    type: PropType<boolean | {
                        delay?: number;
                    }>;
                    default: () => boolean | {
                        delay?: number;
                    };
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                ghost: {
                    type: BooleanConstructor;
                    default: any;
                };
                block: {
                    type: BooleanConstructor;
                    default: any;
                };
                danger: {
                    type: BooleanConstructor;
                    default: any;
                };
                icon: import("vue-types").VueTypeValidableDef<any>;
                href: StringConstructor;
                target: StringConstructor;
                title: StringConstructor;
                onClick: {
                    type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
                onMousedown: {
                    type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
            }>> & HTMLAttributes>;
            default: Partial<ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: PropType<import("../button").ButtonType>;
                htmlType: {
                    type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: PropType<import("../button").ButtonSize>;
                };
                loading: {
                    type: PropType<boolean | {
                        delay?: number;
                    }>;
                    default: () => boolean | {
                        delay?: number;
                    };
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                ghost: {
                    type: BooleanConstructor;
                    default: any;
                };
                block: {
                    type: BooleanConstructor;
                    default: any;
                };
                danger: {
                    type: BooleanConstructor;
                    default: any;
                };
                icon: import("vue-types").VueTypeValidableDef<any>;
                href: StringConstructor;
                target: StringConstructor;
                title: StringConstructor;
                onClick: {
                    type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
                onMousedown: {
                    type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
            }>> & HTMLAttributes;
        };
        showCancel: {
            type: BooleanConstructor;
            default: boolean;
        };
        onConfirm: PropType<(e: MouseEvent) => void>;
        onCancel: PropType<(e: MouseEvent) => void>;
        trigger: PropType<import("../tooltip/abstractTooltipProps").TriggerType | import("../tooltip/abstractTooltipProps").TriggerType[]>;
        open: {
            type: BooleanConstructor;
            default: any;
        };
        visible: {
            type: BooleanConstructor;
            default: any;
        };
        placement: PropType<import("../tooltip/abstractTooltipProps").TooltipPlacement>;
        color: PropType<import("../_util/type").LiteralUnion<import("../_util/colors").PresetColorType>>;
        transitionName: StringConstructor;
        overlayStyle: {
            type: PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        overlayInnerStyle: {
            type: PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        overlayClassName: StringConstructor;
        openClassName: StringConstructor;
        mouseEnterDelay: NumberConstructor;
        mouseLeaveDelay: NumberConstructor;
        getPopupContainer: PropType<(triggerNode: HTMLElement) => HTMLElement>;
        arrowPointAtCenter: {
            type: BooleanConstructor;
            default: any;
        };
        autoAdjustOverflow: {
            type: PropType<boolean | import("../_util/placements").AdjustOverflow>;
            default: boolean | import("../_util/placements").AdjustOverflow;
        };
        destroyTooltipOnHide: {
            type: BooleanConstructor;
            default: any;
        };
        align: {
            type: PropType<import("../vc-trigger/interface").AlignType>;
            default: import("../vc-trigger/interface").AlignType;
        };
        builtinPlacements: {
            type: PropType<import("../vc-trigger/interface").BuildInPlacements>;
            default: import("../vc-trigger/interface").BuildInPlacements;
        };
        children: ArrayConstructor;
        onVisibleChange: PropType<(vis: boolean) => void>;
        'onUpdate:visible': PropType<(vis: boolean) => void>;
        onOpenChange: PropType<(vis: boolean) => void>;
        'onUpdate:open': PropType<(vis: boolean) => void>;
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    content: {
        default: any;
        type: PropType<any>;
    };
    title: {
        default: string | number;
        type: PropType<string | number>;
    };
    description: {
        default: string | number;
        type: PropType<string | number>;
    };
    okType: {
        type: PropType<LegacyButtonType>;
        default: LegacyButtonType;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    okText: {
        default: any;
        type: PropType<any>;
    };
    cancelText: {
        default: any;
        type: PropType<any>;
    };
    icon: {
        default: any;
        type: PropType<any>;
    };
    okButtonProps: {
        type: PropType<Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: PropType<import("../button").ButtonType>;
            htmlType: {
                type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: PropType<import("../button").ButtonShape>;
            };
            size: {
                type: PropType<import("../button").ButtonSize>;
            };
            loading: {
                type: PropType<boolean | {
                    delay?: number;
                }>;
                default: () => boolean | {
                    delay?: number;
                };
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            ghost: {
                type: BooleanConstructor;
                default: any;
            };
            block: {
                type: BooleanConstructor;
                default: any;
            };
            danger: {
                type: BooleanConstructor;
                default: any;
            };
            icon: import("vue-types").VueTypeValidableDef<any>;
            href: StringConstructor;
            target: StringConstructor;
            title: StringConstructor;
            onClick: {
                type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
            onMousedown: {
                type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
        }>> & HTMLAttributes>;
        default: Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: PropType<import("../button").ButtonType>;
            htmlType: {
                type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: PropType<import("../button").ButtonShape>;
            };
            size: {
                type: PropType<import("../button").ButtonSize>;
            };
            loading: {
                type: PropType<boolean | {
                    delay?: number;
                }>;
                default: () => boolean | {
                    delay?: number;
                };
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            ghost: {
                type: BooleanConstructor;
                default: any;
            };
            block: {
                type: BooleanConstructor;
                default: any;
            };
            danger: {
                type: BooleanConstructor;
                default: any;
            };
            icon: import("vue-types").VueTypeValidableDef<any>;
            href: StringConstructor;
            target: StringConstructor;
            title: StringConstructor;
            onClick: {
                type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
            onMousedown: {
                type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
        }>> & HTMLAttributes;
    };
    cancelButtonProps: {
        type: PropType<Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: PropType<import("../button").ButtonType>;
            htmlType: {
                type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: PropType<import("../button").ButtonShape>;
            };
            size: {
                type: PropType<import("../button").ButtonSize>;
            };
            loading: {
                type: PropType<boolean | {
                    delay?: number;
                }>;
                default: () => boolean | {
                    delay?: number;
                };
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            ghost: {
                type: BooleanConstructor;
                default: any;
            };
            block: {
                type: BooleanConstructor;
                default: any;
            };
            danger: {
                type: BooleanConstructor;
                default: any;
            };
            icon: import("vue-types").VueTypeValidableDef<any>;
            href: StringConstructor;
            target: StringConstructor;
            title: StringConstructor;
            onClick: {
                type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
            onMousedown: {
                type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
        }>> & HTMLAttributes>;
        default: Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: PropType<import("../button").ButtonType>;
            htmlType: {
                type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: PropType<import("../button").ButtonShape>;
            };
            size: {
                type: PropType<import("../button").ButtonSize>;
            };
            loading: {
                type: PropType<boolean | {
                    delay?: number;
                }>;
                default: () => boolean | {
                    delay?: number;
                };
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            ghost: {
                type: BooleanConstructor;
                default: any;
            };
            block: {
                type: BooleanConstructor;
                default: any;
            };
            danger: {
                type: BooleanConstructor;
                default: any;
            };
            icon: import("vue-types").VueTypeValidableDef<any>;
            href: StringConstructor;
            target: StringConstructor;
            title: StringConstructor;
            onClick: {
                type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
            onMousedown: {
                type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
        }>> & HTMLAttributes;
    };
    showCancel: {
        type: BooleanConstructor;
        default: boolean;
    };
    onConfirm: PropType<(e: MouseEvent) => void>;
    onCancel: PropType<(e: MouseEvent) => void>;
    trigger: PropType<import("../tooltip/abstractTooltipProps").TriggerType | import("../tooltip/abstractTooltipProps").TriggerType[]>;
    open: {
        type: BooleanConstructor;
        default: any;
    };
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    placement: PropType<import("../tooltip/abstractTooltipProps").TooltipPlacement>;
    color: PropType<import("../_util/type").LiteralUnion<import("../_util/colors").PresetColorType>>;
    transitionName: StringConstructor;
    overlayStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    overlayInnerStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    overlayClassName: StringConstructor;
    openClassName: StringConstructor;
    mouseEnterDelay: NumberConstructor;
    mouseLeaveDelay: NumberConstructor;
    getPopupContainer: PropType<(triggerNode: HTMLElement) => HTMLElement>;
    arrowPointAtCenter: {
        type: BooleanConstructor;
        default: any;
    };
    autoAdjustOverflow: {
        type: PropType<boolean | import("../_util/placements").AdjustOverflow>;
        default: boolean | import("../_util/placements").AdjustOverflow;
    };
    destroyTooltipOnHide: {
        type: BooleanConstructor;
        default: any;
    };
    align: {
        type: PropType<import("../vc-trigger/interface").AlignType>;
        default: import("../vc-trigger/interface").AlignType;
    };
    builtinPlacements: {
        type: PropType<import("../vc-trigger/interface").BuildInPlacements>;
        default: import("../vc-trigger/interface").BuildInPlacements;
    };
    children: ArrayConstructor;
    onVisibleChange: PropType<(vis: boolean) => void>;
    'onUpdate:visible': PropType<(vis: boolean) => void>;
    onOpenChange: PropType<(vis: boolean) => void>;
    'onUpdate:open': PropType<(vis: boolean) => void>;
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    title: string | number;
    visible: boolean;
    content: any;
    open: boolean;
    icon: any;
    disabled: boolean;
    description: string | number;
    align: import("../vc-trigger/interface").AlignType;
    builtinPlacements: import("../vc-trigger/interface").BuildInPlacements;
    overlayInnerStyle: import("vue").CSSProperties;
    overlayStyle: import("vue").CSSProperties;
    destroyTooltipOnHide: boolean;
    autoAdjustOverflow: boolean | import("../_util/placements").AdjustOverflow;
    arrowPointAtCenter: boolean;
    okText: any;
    cancelText: any;
    okType: LegacyButtonType;
    okButtonProps: Partial<ExtractPropTypes<{
        prefixCls: StringConstructor;
        type: PropType<import("../button").ButtonType>;
        htmlType: {
            type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: PropType<import("../button").ButtonShape>;
        };
        size: {
            type: PropType<import("../button").ButtonSize>;
        };
        loading: {
            type: PropType<boolean | {
                delay?: number;
            }>;
            default: () => boolean | {
                delay?: number;
            };
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        ghost: {
            type: BooleanConstructor;
            default: any;
        };
        block: {
            type: BooleanConstructor;
            default: any;
        };
        danger: {
            type: BooleanConstructor;
            default: any;
        };
        icon: import("vue-types").VueTypeValidableDef<any>;
        href: StringConstructor;
        target: StringConstructor;
        title: StringConstructor;
        onClick: {
            type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
        };
        onMousedown: {
            type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
        };
    }>> & HTMLAttributes;
    cancelButtonProps: Partial<ExtractPropTypes<{
        prefixCls: StringConstructor;
        type: PropType<import("../button").ButtonType>;
        htmlType: {
            type: PropType<import("../button/buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: PropType<import("../button").ButtonShape>;
        };
        size: {
            type: PropType<import("../button").ButtonSize>;
        };
        loading: {
            type: PropType<boolean | {
                delay?: number;
            }>;
            default: () => boolean | {
                delay?: number;
            };
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        ghost: {
            type: BooleanConstructor;
            default: any;
        };
        block: {
            type: BooleanConstructor;
            default: any;
        };
        danger: {
            type: BooleanConstructor;
            default: any;
        };
        icon: import("vue-types").VueTypeValidableDef<any>;
        href: StringConstructor;
        target: StringConstructor;
        title: StringConstructor;
        onClick: {
            type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
        };
        onMousedown: {
            type: PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
        };
    }>> & HTMLAttributes;
    showCancel: boolean;
}, {}, string, CustomSlotsType<{
    title?: any;
    content?: any;
    description?: any;
    okText?: any;
    icon?: any;
    cancel?: any;
    cancelText?: any;
    cancelButton?: any;
    okButton?: any;
    default?: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export default _default;
