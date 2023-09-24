import type { Plugin } from 'vue';
import type { ModalFunc } from './Modal';
import useModal from './useModal';
export type { ActionButtonProps } from '../_util/ActionButton';
export type { ModalProps, ModalFuncProps } from './Modal';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            mask?: boolean;
            visible?: boolean;
            open?: boolean;
            forceRender?: boolean;
            maskClosable?: boolean;
            getContainer?: string | false | HTMLElement | (() => HTMLElement);
            keyboard?: boolean;
            closable?: boolean;
            centered?: boolean;
            bodyStyle?: import("vue").CSSProperties;
            maskStyle?: import("vue").CSSProperties;
            destroyOnClose?: boolean;
            mousePosition?: {
                x: number;
                y: number;
            };
            focusTriggerAfterClose?: boolean;
            confirmLoading?: boolean;
            okButtonProps?: Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: import("vue").PropType<import("../button").ButtonType>;
                htmlType: {
                    type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: import("vue").PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: import("vue").PropType<import("../config-provider").SizeType>;
                };
                loading: {
                    type: import("vue").PropType<boolean | {
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
                    type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
                onMousedown: {
                    type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
            }>>;
            cancelButtonProps?: Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: import("vue").PropType<import("../button").ButtonType>;
                htmlType: {
                    type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: import("vue").PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: import("vue").PropType<import("../config-provider").SizeType>;
                };
                loading: {
                    type: import("vue").PropType<boolean | {
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
                    type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
                onMousedown: {
                    type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
            }>>;
            readonly footer?: any;
            style?: unknown;
            readonly title?: any;
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
            readonly width?: string | number;
            tabindex?: string | number;
            readonly onChange?: (open: boolean) => void;
            readonly zIndex?: number;
            readonly icon?: any;
            readonly prefixCls?: string;
            role?: string;
            readonly maskTransitionName?: string;
            readonly transitionName?: string;
            readonly 'onUpdate:visible'?: (visible: boolean) => void;
            readonly 'onUpdate:open'?: (open: boolean) => void;
            readonly okText?: any;
            readonly cancelText?: any;
            readonly closeIcon?: any;
            readonly onOk?: (e: MouseEvent) => void;
            readonly onCancel?: (e: MouseEvent) => void;
            readonly afterClose?: () => void;
            readonly wrapClassName?: string;
            readonly wrapProps?: Record<string, any>;
            readonly modalRender?: (arg: {
                originVNode: import("../_util/type").VueNode;
            }) => import("../_util/type").VueNode;
            readonly okType?: import("../button/buttonTypes").LegacyButtonType;
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
            prefixCls: StringConstructor;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            open: {
                type: BooleanConstructor;
                default: any;
            };
            confirmLoading: {
                type: BooleanConstructor;
                default: any;
            };
            title: import("vue-types").VueTypeValidableDef<any>;
            closable: {
                type: BooleanConstructor;
                default: any;
            };
            closeIcon: import("vue-types").VueTypeValidableDef<any>;
            onOk: import("vue").PropType<(e: MouseEvent) => void>;
            onCancel: import("vue").PropType<(e: MouseEvent) => void>;
            'onUpdate:visible': import("vue").PropType<(visible: boolean) => void>;
            'onUpdate:open': import("vue").PropType<(open: boolean) => void>;
            onChange: import("vue").PropType<(open: boolean) => void>;
            afterClose: import("vue").PropType<() => void>;
            centered: {
                type: BooleanConstructor;
                default: any;
            };
            width: (StringConstructor | NumberConstructor)[];
            footer: import("vue-types").VueTypeValidableDef<any>;
            okText: import("vue-types").VueTypeValidableDef<any>;
            okType: import("vue").PropType<import("../button/buttonTypes").LegacyButtonType>;
            cancelText: import("vue-types").VueTypeValidableDef<any>;
            icon: import("vue-types").VueTypeValidableDef<any>;
            maskClosable: {
                type: BooleanConstructor;
                default: any;
            };
            forceRender: {
                type: BooleanConstructor;
                default: any;
            };
            okButtonProps: {
                type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    type: import("vue").PropType<import("../button").ButtonType>;
                    htmlType: {
                        type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                        default: string;
                    };
                    shape: {
                        type: import("vue").PropType<import("../button").ButtonShape>;
                    };
                    size: {
                        type: import("vue").PropType<import("../config-provider").SizeType>;
                    };
                    loading: {
                        type: import("vue").PropType<boolean | {
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
                        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                    };
                    onMousedown: {
                        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                    };
                }>>>;
                default: Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    type: import("vue").PropType<import("../button").ButtonType>;
                    htmlType: {
                        type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                        default: string;
                    };
                    shape: {
                        type: import("vue").PropType<import("../button").ButtonShape>;
                    };
                    size: {
                        type: import("vue").PropType<import("../config-provider").SizeType>;
                    };
                    loading: {
                        type: import("vue").PropType<boolean | {
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
                        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                    };
                    onMousedown: {
                        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                    };
                }>>;
            };
            cancelButtonProps: {
                type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    type: import("vue").PropType<import("../button").ButtonType>;
                    htmlType: {
                        type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                        default: string;
                    };
                    shape: {
                        type: import("vue").PropType<import("../button").ButtonShape>;
                    };
                    size: {
                        type: import("vue").PropType<import("../config-provider").SizeType>;
                    };
                    loading: {
                        type: import("vue").PropType<boolean | {
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
                        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                    };
                    onMousedown: {
                        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                    };
                }>>>;
                default: Partial<import("vue").ExtractPropTypes<{
                    prefixCls: StringConstructor;
                    type: import("vue").PropType<import("../button").ButtonType>;
                    htmlType: {
                        type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                        default: string;
                    };
                    shape: {
                        type: import("vue").PropType<import("../button").ButtonShape>;
                    };
                    size: {
                        type: import("vue").PropType<import("../config-provider").SizeType>;
                    };
                    loading: {
                        type: import("vue").PropType<boolean | {
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
                        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                    };
                    onMousedown: {
                        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                    };
                }>>;
            };
            destroyOnClose: {
                type: BooleanConstructor;
                default: any;
            };
            wrapClassName: StringConstructor;
            maskTransitionName: StringConstructor;
            transitionName: StringConstructor;
            getContainer: {
                type: import("vue").PropType<string | false | HTMLElement | (() => HTMLElement)>;
                default: any;
            };
            zIndex: NumberConstructor;
            bodyStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            maskStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            mask: {
                type: BooleanConstructor;
                default: any;
            };
            keyboard: {
                type: BooleanConstructor;
                default: any;
            };
            wrapProps: ObjectConstructor;
            focusTriggerAfterClose: {
                type: BooleanConstructor;
                default: any;
            };
            modalRender: import("vue").PropType<(arg: {
                originVNode: import("../_util/type").VueNode;
            }) => import("../_util/type").VueNode>;
            mousePosition: {
                type: import("vue").PropType<{
                    x: number;
                    y: number;
                }>;
                default: {
                    x: number;
                    y: number;
                };
            };
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            mask: boolean;
            visible: boolean;
            open: boolean;
            forceRender: boolean;
            maskClosable: boolean;
            getContainer: string | false | HTMLElement | (() => HTMLElement);
            keyboard: boolean;
            closable: boolean;
            centered: boolean;
            bodyStyle: import("vue").CSSProperties;
            maskStyle: import("vue").CSSProperties;
            destroyOnClose: boolean;
            mousePosition: {
                x: number;
                y: number;
            };
            focusTriggerAfterClose: boolean;
            confirmLoading: boolean;
            okButtonProps: Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: import("vue").PropType<import("../button").ButtonType>;
                htmlType: {
                    type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: import("vue").PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: import("vue").PropType<import("../config-provider").SizeType>;
                };
                loading: {
                    type: import("vue").PropType<boolean | {
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
                    type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
                onMousedown: {
                    type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
            }>>;
            cancelButtonProps: Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: import("vue").PropType<import("../button").ButtonType>;
                htmlType: {
                    type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: import("vue").PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: import("vue").PropType<import("../config-provider").SizeType>;
                };
                loading: {
                    type: import("vue").PropType<boolean | {
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
                    type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
                onMousedown: {
                    type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
            }>>;
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
        prefixCls: StringConstructor;
        visible: {
            type: BooleanConstructor;
            default: any;
        };
        open: {
            type: BooleanConstructor;
            default: any;
        };
        confirmLoading: {
            type: BooleanConstructor;
            default: any;
        };
        title: import("vue-types").VueTypeValidableDef<any>;
        closable: {
            type: BooleanConstructor;
            default: any;
        };
        closeIcon: import("vue-types").VueTypeValidableDef<any>;
        onOk: import("vue").PropType<(e: MouseEvent) => void>;
        onCancel: import("vue").PropType<(e: MouseEvent) => void>;
        'onUpdate:visible': import("vue").PropType<(visible: boolean) => void>;
        'onUpdate:open': import("vue").PropType<(open: boolean) => void>;
        onChange: import("vue").PropType<(open: boolean) => void>;
        afterClose: import("vue").PropType<() => void>;
        centered: {
            type: BooleanConstructor;
            default: any;
        };
        width: (StringConstructor | NumberConstructor)[];
        footer: import("vue-types").VueTypeValidableDef<any>;
        okText: import("vue-types").VueTypeValidableDef<any>;
        okType: import("vue").PropType<import("../button/buttonTypes").LegacyButtonType>;
        cancelText: import("vue-types").VueTypeValidableDef<any>;
        icon: import("vue-types").VueTypeValidableDef<any>;
        maskClosable: {
            type: BooleanConstructor;
            default: any;
        };
        forceRender: {
            type: BooleanConstructor;
            default: any;
        };
        okButtonProps: {
            type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: import("vue").PropType<import("../button").ButtonType>;
                htmlType: {
                    type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: import("vue").PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: import("vue").PropType<import("../config-provider").SizeType>;
                };
                loading: {
                    type: import("vue").PropType<boolean | {
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
                    type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
                onMousedown: {
                    type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
            }>>>;
            default: Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: import("vue").PropType<import("../button").ButtonType>;
                htmlType: {
                    type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: import("vue").PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: import("vue").PropType<import("../config-provider").SizeType>;
                };
                loading: {
                    type: import("vue").PropType<boolean | {
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
                    type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
                onMousedown: {
                    type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
            }>>;
        };
        cancelButtonProps: {
            type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: import("vue").PropType<import("../button").ButtonType>;
                htmlType: {
                    type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: import("vue").PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: import("vue").PropType<import("../config-provider").SizeType>;
                };
                loading: {
                    type: import("vue").PropType<boolean | {
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
                    type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
                onMousedown: {
                    type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
            }>>>;
            default: Partial<import("vue").ExtractPropTypes<{
                prefixCls: StringConstructor;
                type: import("vue").PropType<import("../button").ButtonType>;
                htmlType: {
                    type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                    default: string;
                };
                shape: {
                    type: import("vue").PropType<import("../button").ButtonShape>;
                };
                size: {
                    type: import("vue").PropType<import("../config-provider").SizeType>;
                };
                loading: {
                    type: import("vue").PropType<boolean | {
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
                    type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
                onMousedown: {
                    type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
                };
            }>>;
        };
        destroyOnClose: {
            type: BooleanConstructor;
            default: any;
        };
        wrapClassName: StringConstructor;
        maskTransitionName: StringConstructor;
        transitionName: StringConstructor;
        getContainer: {
            type: import("vue").PropType<string | false | HTMLElement | (() => HTMLElement)>;
            default: any;
        };
        zIndex: NumberConstructor;
        bodyStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        maskStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        mask: {
            type: BooleanConstructor;
            default: any;
        };
        keyboard: {
            type: BooleanConstructor;
            default: any;
        };
        wrapProps: ObjectConstructor;
        focusTriggerAfterClose: {
            type: BooleanConstructor;
            default: any;
        };
        modalRender: import("vue").PropType<(arg: {
            originVNode: import("../_util/type").VueNode;
        }) => import("../_util/type").VueNode>;
        mousePosition: {
            type: import("vue").PropType<{
                x: number;
                y: number;
            }>;
            default: {
                x: number;
                y: number;
            };
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    confirmLoading: {
        type: BooleanConstructor;
        default: any;
    };
    title: import("vue-types").VueTypeValidableDef<any>;
    closable: {
        type: BooleanConstructor;
        default: any;
    };
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    onOk: import("vue").PropType<(e: MouseEvent) => void>;
    onCancel: import("vue").PropType<(e: MouseEvent) => void>;
    'onUpdate:visible': import("vue").PropType<(visible: boolean) => void>;
    'onUpdate:open': import("vue").PropType<(open: boolean) => void>;
    onChange: import("vue").PropType<(open: boolean) => void>;
    afterClose: import("vue").PropType<() => void>;
    centered: {
        type: BooleanConstructor;
        default: any;
    };
    width: (StringConstructor | NumberConstructor)[];
    footer: import("vue-types").VueTypeValidableDef<any>;
    okText: import("vue-types").VueTypeValidableDef<any>;
    okType: import("vue").PropType<import("../button/buttonTypes").LegacyButtonType>;
    cancelText: import("vue-types").VueTypeValidableDef<any>;
    icon: import("vue-types").VueTypeValidableDef<any>;
    maskClosable: {
        type: BooleanConstructor;
        default: any;
    };
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    okButtonProps: {
        type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: import("vue").PropType<import("../button").ButtonType>;
            htmlType: {
                type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: import("vue").PropType<import("../button").ButtonShape>;
            };
            size: {
                type: import("vue").PropType<import("../config-provider").SizeType>;
            };
            loading: {
                type: import("vue").PropType<boolean | {
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
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
            onMousedown: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
        }>>>;
        default: Partial<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: import("vue").PropType<import("../button").ButtonType>;
            htmlType: {
                type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: import("vue").PropType<import("../button").ButtonShape>;
            };
            size: {
                type: import("vue").PropType<import("../config-provider").SizeType>;
            };
            loading: {
                type: import("vue").PropType<boolean | {
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
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
            onMousedown: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
        }>>;
    };
    cancelButtonProps: {
        type: import("vue").PropType<Partial<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: import("vue").PropType<import("../button").ButtonType>;
            htmlType: {
                type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: import("vue").PropType<import("../button").ButtonShape>;
            };
            size: {
                type: import("vue").PropType<import("../config-provider").SizeType>;
            };
            loading: {
                type: import("vue").PropType<boolean | {
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
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
            onMousedown: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
        }>>>;
        default: Partial<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            type: import("vue").PropType<import("../button").ButtonType>;
            htmlType: {
                type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
                default: string;
            };
            shape: {
                type: import("vue").PropType<import("../button").ButtonShape>;
            };
            size: {
                type: import("vue").PropType<import("../config-provider").SizeType>;
            };
            loading: {
                type: import("vue").PropType<boolean | {
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
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
            onMousedown: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
            };
        }>>;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: any;
    };
    wrapClassName: StringConstructor;
    maskTransitionName: StringConstructor;
    transitionName: StringConstructor;
    getContainer: {
        type: import("vue").PropType<string | false | HTMLElement | (() => HTMLElement)>;
        default: any;
    };
    zIndex: NumberConstructor;
    bodyStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    maskStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    mask: {
        type: BooleanConstructor;
        default: any;
    };
    keyboard: {
        type: BooleanConstructor;
        default: any;
    };
    wrapProps: ObjectConstructor;
    focusTriggerAfterClose: {
        type: BooleanConstructor;
        default: any;
    };
    modalRender: import("vue").PropType<(arg: {
        originVNode: import("../_util/type").VueNode;
    }) => import("../_util/type").VueNode>;
    mousePosition: {
        type: import("vue").PropType<{
            x: number;
            y: number;
        }>;
        default: {
            x: number;
            y: number;
        };
    };
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mask: boolean;
    visible: boolean;
    open: boolean;
    forceRender: boolean;
    maskClosable: boolean;
    getContainer: string | false | HTMLElement | (() => HTMLElement);
    keyboard: boolean;
    closable: boolean;
    centered: boolean;
    bodyStyle: import("vue").CSSProperties;
    maskStyle: import("vue").CSSProperties;
    destroyOnClose: boolean;
    mousePosition: {
        x: number;
        y: number;
    };
    focusTriggerAfterClose: boolean;
    confirmLoading: boolean;
    okButtonProps: Partial<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        type: import("vue").PropType<import("../button").ButtonType>;
        htmlType: {
            type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: import("vue").PropType<import("../button").ButtonShape>;
        };
        size: {
            type: import("vue").PropType<import("../config-provider").SizeType>;
        };
        loading: {
            type: import("vue").PropType<boolean | {
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
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
        };
        onMousedown: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
        };
    }>>;
    cancelButtonProps: Partial<import("vue").ExtractPropTypes<{
        prefixCls: StringConstructor;
        type: import("vue").PropType<import("../button").ButtonType>;
        htmlType: {
            type: import("vue").PropType<import("../button/buttonTypes").ButtonHTMLType>;
            default: string;
        };
        shape: {
            type: import("vue").PropType<import("../button").ButtonShape>;
        };
        size: {
            type: import("vue").PropType<import("../config-provider").SizeType>;
        };
        loading: {
            type: import("vue").PropType<boolean | {
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
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
        };
        onMousedown: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler | import("../_util/EventInterface").MouseEventHandler[]>;
        };
    }>>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]> & {
    readonly info: ModalFunc;
    readonly success: ModalFunc;
    readonly error: ModalFunc;
    readonly warn: ModalFunc;
    readonly warning: ModalFunc;
    readonly confirm: ModalFunc;
    readonly destroyAll: () => void;
    readonly useModal: typeof useModal;
};
export default _default;
