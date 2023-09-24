import type { Plugin, WatchStopHandle } from 'vue';
import defaultRenderEmpty from './renderEmpty';
import type { Locale } from '../locale-provider';
import type { MaybeRef } from '../_util/type';
import type { ValidateMessages } from '../form/interface';
import type { ConfigProviderProps, Theme } from './context';
import { defaultIconPrefixCls } from './context';
export type { ConfigProviderProps, Theme, SizeType, Direction, CSPConfig, DirectionType, } from './context';
export declare const defaultPrefixCls = "ant";
export { defaultIconPrefixCls };
declare function getGlobalIconPrefixCls(): string;
export declare const globalConfigForApi: ConfigProviderProps & {
    getRootPrefixCls?: (rootPrefixCls?: string, customizePrefixCls?: string) => string;
};
export declare const configConsumerProps: string[];
type GlobalConfigProviderProps = {
    prefixCls?: MaybeRef<ConfigProviderProps['prefixCls']>;
    iconPrefixCls?: MaybeRef<ConfigProviderProps['iconPrefixCls']>;
    getPopupContainer?: ConfigProviderProps['getPopupContainer'];
};
declare const setGlobalConfig: (params: GlobalConfigProviderProps & {
    theme?: Theme;
}) => void;
export declare const globalConfig: () => {
    getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
    getIconPrefixCls: typeof getGlobalIconPrefixCls;
    getRootPrefixCls: () => string;
};
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            form?: {
                validateMessages?: ValidateMessages;
                requiredMark?: import("../form/Form").RequiredMark;
                colon?: boolean;
            };
            input?: {
                autocomplete?: string;
            };
            select?: {
                showSearch?: boolean;
            };
            space?: {
                size?: number | import("./context").SizeType;
            };
            direction?: "rtl" | "ltr";
            csp?: import("./context").CSPConfig;
            theme?: import("./context").ThemeConfig;
            virtual?: boolean;
            dropdownMatchSelectWidth?: number | boolean;
            locale?: Locale;
            pagination?: {
                showSizeChanger?: boolean;
            };
            autoInsertSpaceInButton?: boolean;
            pageHeader?: {
                ghost?: boolean;
            };
            componentDisabled?: boolean;
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
            readonly getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
            readonly iconPrefixCls?: string;
            readonly prefixCls?: string;
            readonly renderEmpty?: typeof defaultRenderEmpty;
            readonly getTargetContainer?: () => HTMLElement | Window;
            readonly getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
            role?: string;
            readonly transformCellText?: (tableProps: import("../table/interface").TransformCellTextProps) => any;
            readonly componentSize?: import("./context").SizeType;
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
            iconPrefixCls: StringConstructor;
            getTargetContainer: {
                type: import("vue").PropType<() => HTMLElement | Window>;
            };
            getPopupContainer: {
                type: import("vue").PropType<(triggerNode?: HTMLElement) => HTMLElement>;
            };
            prefixCls: StringConstructor;
            getPrefixCls: {
                type: import("vue").PropType<(suffixCls?: string, customizePrefixCls?: string) => string>;
            };
            renderEmpty: {
                type: import("vue").PropType<typeof defaultRenderEmpty>;
            };
            transformCellText: {
                type: import("vue").PropType<(tableProps: import("../table/interface").TransformCellTextProps) => any>;
            };
            csp: {
                type: import("vue").PropType<import("./context").CSPConfig>;
                default: import("./context").CSPConfig;
            };
            input: {
                type: import("vue").PropType<{
                    autocomplete?: string;
                }>;
                default: {
                    autocomplete?: string;
                };
            };
            autoInsertSpaceInButton: {
                type: BooleanConstructor;
                default: any;
            };
            locale: {
                type: import("vue").PropType<Locale>;
                default: Locale;
            };
            pageHeader: {
                type: import("vue").PropType<{
                    ghost?: boolean;
                }>;
                default: {
                    ghost?: boolean;
                };
            };
            componentSize: {
                type: import("vue").PropType<import("./context").SizeType>;
            };
            componentDisabled: {
                type: BooleanConstructor;
                default: any;
            };
            direction: {
                type: import("vue").PropType<"rtl" | "ltr">;
                default: string;
            };
            space: {
                type: import("vue").PropType<{
                    size?: number | import("./context").SizeType;
                }>;
                default: {
                    size?: number | import("./context").SizeType;
                };
            };
            virtual: {
                type: BooleanConstructor;
                default: any;
            };
            dropdownMatchSelectWidth: {
                type: (BooleanConstructor | NumberConstructor)[];
                default: boolean;
            };
            form: {
                type: import("vue").PropType<{
                    validateMessages?: ValidateMessages;
                    requiredMark?: import("../form/Form").RequiredMark;
                    colon?: boolean;
                }>;
                default: {
                    validateMessages?: ValidateMessages;
                    requiredMark?: import("../form/Form").RequiredMark;
                    colon?: boolean;
                };
            };
            pagination: {
                type: import("vue").PropType<{
                    showSizeChanger?: boolean;
                }>;
                default: {
                    showSizeChanger?: boolean;
                };
            };
            theme: {
                type: import("vue").PropType<import("./context").ThemeConfig>;
                default: import("./context").ThemeConfig;
            };
            select: {
                type: import("vue").PropType<{
                    showSearch?: boolean;
                }>;
                default: {
                    showSearch?: boolean;
                };
            };
        }>>, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            form: {
                validateMessages?: ValidateMessages;
                requiredMark?: import("../form/Form").RequiredMark;
                colon?: boolean;
            };
            input: {
                autocomplete?: string;
            };
            select: {
                showSearch?: boolean;
            };
            space: {
                size?: number | import("./context").SizeType;
            };
            direction: "rtl" | "ltr";
            csp: import("./context").CSPConfig;
            theme: import("./context").ThemeConfig;
            virtual: boolean;
            dropdownMatchSelectWidth: number | boolean;
            locale: Locale;
            pagination: {
                showSizeChanger?: boolean;
            };
            autoInsertSpaceInButton: boolean;
            pageHeader: {
                ghost?: boolean;
            };
            componentDisabled: boolean;
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
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        iconPrefixCls: StringConstructor;
        getTargetContainer: {
            type: import("vue").PropType<() => HTMLElement | Window>;
        };
        getPopupContainer: {
            type: import("vue").PropType<(triggerNode?: HTMLElement) => HTMLElement>;
        };
        prefixCls: StringConstructor;
        getPrefixCls: {
            type: import("vue").PropType<(suffixCls?: string, customizePrefixCls?: string) => string>;
        };
        renderEmpty: {
            type: import("vue").PropType<typeof defaultRenderEmpty>;
        };
        transformCellText: {
            type: import("vue").PropType<(tableProps: import("../table/interface").TransformCellTextProps) => any>;
        };
        csp: {
            type: import("vue").PropType<import("./context").CSPConfig>;
            default: import("./context").CSPConfig;
        };
        input: {
            type: import("vue").PropType<{
                autocomplete?: string;
            }>;
            default: {
                autocomplete?: string;
            };
        };
        autoInsertSpaceInButton: {
            type: BooleanConstructor;
            default: any;
        };
        locale: {
            type: import("vue").PropType<Locale>;
            default: Locale;
        };
        pageHeader: {
            type: import("vue").PropType<{
                ghost?: boolean;
            }>;
            default: {
                ghost?: boolean;
            };
        };
        componentSize: {
            type: import("vue").PropType<import("./context").SizeType>;
        };
        componentDisabled: {
            type: BooleanConstructor;
            default: any;
        };
        direction: {
            type: import("vue").PropType<"rtl" | "ltr">;
            default: string;
        };
        space: {
            type: import("vue").PropType<{
                size?: number | import("./context").SizeType;
            }>;
            default: {
                size?: number | import("./context").SizeType;
            };
        };
        virtual: {
            type: BooleanConstructor;
            default: any;
        };
        dropdownMatchSelectWidth: {
            type: (BooleanConstructor | NumberConstructor)[];
            default: boolean;
        };
        form: {
            type: import("vue").PropType<{
                validateMessages?: ValidateMessages;
                requiredMark?: import("../form/Form").RequiredMark;
                colon?: boolean;
            }>;
            default: {
                validateMessages?: ValidateMessages;
                requiredMark?: import("../form/Form").RequiredMark;
                colon?: boolean;
            };
        };
        pagination: {
            type: import("vue").PropType<{
                showSizeChanger?: boolean;
            }>;
            default: {
                showSizeChanger?: boolean;
            };
        };
        theme: {
            type: import("vue").PropType<import("./context").ThemeConfig>;
            default: import("./context").ThemeConfig;
        };
        select: {
            type: import("vue").PropType<{
                showSearch?: boolean;
            }>;
            default: {
                showSearch?: boolean;
            };
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("vue/jsx-runtime").JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    iconPrefixCls: StringConstructor;
    getTargetContainer: {
        type: import("vue").PropType<() => HTMLElement | Window>;
    };
    getPopupContainer: {
        type: import("vue").PropType<(triggerNode?: HTMLElement) => HTMLElement>;
    };
    prefixCls: StringConstructor;
    getPrefixCls: {
        type: import("vue").PropType<(suffixCls?: string, customizePrefixCls?: string) => string>;
    };
    renderEmpty: {
        type: import("vue").PropType<typeof defaultRenderEmpty>;
    };
    transformCellText: {
        type: import("vue").PropType<(tableProps: import("../table/interface").TransformCellTextProps) => any>;
    };
    csp: {
        type: import("vue").PropType<import("./context").CSPConfig>;
        default: import("./context").CSPConfig;
    };
    input: {
        type: import("vue").PropType<{
            autocomplete?: string;
        }>;
        default: {
            autocomplete?: string;
        };
    };
    autoInsertSpaceInButton: {
        type: BooleanConstructor;
        default: any;
    };
    locale: {
        type: import("vue").PropType<Locale>;
        default: Locale;
    };
    pageHeader: {
        type: import("vue").PropType<{
            ghost?: boolean;
        }>;
        default: {
            ghost?: boolean;
        };
    };
    componentSize: {
        type: import("vue").PropType<import("./context").SizeType>;
    };
    componentDisabled: {
        type: BooleanConstructor;
        default: any;
    };
    direction: {
        type: import("vue").PropType<"rtl" | "ltr">;
        default: string;
    };
    space: {
        type: import("vue").PropType<{
            size?: number | import("./context").SizeType;
        }>;
        default: {
            size?: number | import("./context").SizeType;
        };
    };
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    dropdownMatchSelectWidth: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    form: {
        type: import("vue").PropType<{
            validateMessages?: ValidateMessages;
            requiredMark?: import("../form/Form").RequiredMark;
            colon?: boolean;
        }>;
        default: {
            validateMessages?: ValidateMessages;
            requiredMark?: import("../form/Form").RequiredMark;
            colon?: boolean;
        };
    };
    pagination: {
        type: import("vue").PropType<{
            showSizeChanger?: boolean;
        }>;
        default: {
            showSizeChanger?: boolean;
        };
    };
    theme: {
        type: import("vue").PropType<import("./context").ThemeConfig>;
        default: import("./context").ThemeConfig;
    };
    select: {
        type: import("vue").PropType<{
            showSearch?: boolean;
        }>;
        default: {
            showSearch?: boolean;
        };
    };
}>>, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    form: {
        validateMessages?: ValidateMessages;
        requiredMark?: import("../form/Form").RequiredMark;
        colon?: boolean;
    };
    input: {
        autocomplete?: string;
    };
    select: {
        showSearch?: boolean;
    };
    space: {
        size?: number | import("./context").SizeType;
    };
    direction: "rtl" | "ltr";
    csp: import("./context").CSPConfig;
    theme: import("./context").ThemeConfig;
    virtual: boolean;
    dropdownMatchSelectWidth: number | boolean;
    locale: Locale;
    pagination: {
        showSizeChanger?: boolean;
    };
    autoInsertSpaceInButton: boolean;
    pageHeader: {
        ghost?: boolean;
    };
    componentDisabled: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]> & {
    readonly config: typeof setGlobalConfig;
};
export default _default;
