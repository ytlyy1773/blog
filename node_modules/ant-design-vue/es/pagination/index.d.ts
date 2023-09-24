export { paginationProps, paginationConfig } from './Pagination';
export type { PaginationProps, PaginationConfig } from './Pagination';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            onChange?: (page: number, pageSize: number) => void;
            size?: "small" | "default";
            disabled?: boolean;
            responsive?: boolean;
            itemRender?: (opt: {
                page: number;
                type: "next" | "page" | "prev" | "jump-prev" | "jump-next";
                originalElement: any;
            }) => any;
            pageSizeOptions?: (string | number)[];
            buildOptionText?: (opt: {
                value: any;
            }) => any;
            hideOnSinglePage?: boolean;
            showSizeChanger?: boolean;
            showLessItems?: boolean;
            showQuickJumper?: boolean | {
                goButton?: any;
            };
            showTotal?: (total: number, range: [number, number]) => any;
            simple?: boolean;
            onShowSizeChange?: (current: number, size: number) => void;
            'onUpdate:current'?: (current: number) => void;
            'onUpdate:pageSize'?: (size: number) => void;
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
            readonly prefixCls?: string;
            readonly locale?: Record<string, any>;
            role?: string;
            readonly selectComponentClass?: string;
            readonly pageSize?: number;
            readonly selectPrefixCls?: string;
            readonly total?: number;
            readonly defaultCurrent?: number;
            readonly defaultPageSize?: number;
            readonly totalBoundaryShowSizeChanger?: number;
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
            total: NumberConstructor;
            defaultCurrent: NumberConstructor;
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            current: NumberConstructor;
            defaultPageSize: NumberConstructor;
            pageSize: NumberConstructor;
            hideOnSinglePage: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSizeChanger: {
                type: BooleanConstructor;
                default: boolean;
            };
            pageSizeOptions: {
                type: import("vue").PropType<(string | number)[]>;
                default: (string | number)[];
            };
            buildOptionText: {
                type: import("vue").PropType<(opt: {
                    value: any;
                }) => any>;
                default: (opt: {
                    value: any;
                }) => any;
            };
            showQuickJumper: {
                type: import("vue").PropType<boolean | {
                    goButton?: any;
                }>;
                default: boolean | {
                    goButton?: any;
                };
            };
            showTotal: {
                type: import("vue").PropType<(total: number, range: [number, number]) => any>;
                default: (total: number, range: [number, number]) => any;
            };
            size: {
                type: import("vue").PropType<"small" | "default">;
                default: "small" | "default";
            };
            simple: {
                type: BooleanConstructor;
                default: boolean;
            };
            locale: ObjectConstructor;
            prefixCls: StringConstructor;
            selectPrefixCls: StringConstructor;
            totalBoundaryShowSizeChanger: NumberConstructor;
            selectComponentClass: StringConstructor;
            itemRender: {
                type: import("vue").PropType<(opt: {
                    page: number;
                    type: "next" | "page" | "prev" | "jump-prev" | "jump-next";
                    originalElement: any;
                }) => any>;
                default: (opt: {
                    page: number;
                    type: "next" | "page" | "prev" | "jump-prev" | "jump-next";
                    originalElement: any;
                }) => any;
            };
            role: StringConstructor;
            responsive: BooleanConstructor;
            showLessItems: {
                type: BooleanConstructor;
                default: boolean;
            };
            onChange: {
                type: import("vue").PropType<(page: number, pageSize: number) => void>;
                default: (page: number, pageSize: number) => void;
            };
            onShowSizeChange: {
                type: import("vue").PropType<(current: number, size: number) => void>;
                default: (current: number, size: number) => void;
            };
            'onUpdate:current': {
                type: import("vue").PropType<(current: number) => void>;
                default: (current: number) => void;
            };
            'onUpdate:pageSize': {
                type: import("vue").PropType<(size: number) => void>;
                default: (size: number) => void;
            };
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            onChange: (page: number, pageSize: number) => void;
            size: "small" | "default";
            disabled: boolean;
            responsive: boolean;
            itemRender: (opt: {
                page: number;
                type: "next" | "page" | "prev" | "jump-prev" | "jump-next";
                originalElement: any;
            }) => any;
            pageSizeOptions: (string | number)[];
            buildOptionText: (opt: {
                value: any;
            }) => any;
            hideOnSinglePage: boolean;
            showSizeChanger: boolean;
            showLessItems: boolean;
            showQuickJumper: boolean | {
                goButton?: any;
            };
            showTotal: (total: number, range: [number, number]) => any;
            simple: boolean;
            onShowSizeChange: (current: number, size: number) => void;
            'onUpdate:current': (current: number) => void;
            'onUpdate:pageSize': (size: number) => void;
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
        total: NumberConstructor;
        defaultCurrent: NumberConstructor;
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        current: NumberConstructor;
        defaultPageSize: NumberConstructor;
        pageSize: NumberConstructor;
        hideOnSinglePage: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSizeChanger: {
            type: BooleanConstructor;
            default: boolean;
        };
        pageSizeOptions: {
            type: import("vue").PropType<(string | number)[]>;
            default: (string | number)[];
        };
        buildOptionText: {
            type: import("vue").PropType<(opt: {
                value: any;
            }) => any>;
            default: (opt: {
                value: any;
            }) => any;
        };
        showQuickJumper: {
            type: import("vue").PropType<boolean | {
                goButton?: any;
            }>;
            default: boolean | {
                goButton?: any;
            };
        };
        showTotal: {
            type: import("vue").PropType<(total: number, range: [number, number]) => any>;
            default: (total: number, range: [number, number]) => any;
        };
        size: {
            type: import("vue").PropType<"small" | "default">;
            default: "small" | "default";
        };
        simple: {
            type: BooleanConstructor;
            default: boolean;
        };
        locale: ObjectConstructor;
        prefixCls: StringConstructor;
        selectPrefixCls: StringConstructor;
        totalBoundaryShowSizeChanger: NumberConstructor;
        selectComponentClass: StringConstructor;
        itemRender: {
            type: import("vue").PropType<(opt: {
                page: number;
                type: "next" | "page" | "prev" | "jump-prev" | "jump-next";
                originalElement: any;
            }) => any>;
            default: (opt: {
                page: number;
                type: "next" | "page" | "prev" | "jump-prev" | "jump-next";
                originalElement: any;
            }) => any;
        };
        role: StringConstructor;
        responsive: BooleanConstructor;
        showLessItems: {
            type: BooleanConstructor;
            default: boolean;
        };
        onChange: {
            type: import("vue").PropType<(page: number, pageSize: number) => void>;
            default: (page: number, pageSize: number) => void;
        };
        onShowSizeChange: {
            type: import("vue").PropType<(current: number, size: number) => void>;
            default: (current: number, size: number) => void;
        };
        'onUpdate:current': {
            type: import("vue").PropType<(current: number) => void>;
            default: (current: number) => void;
        };
        'onUpdate:pageSize': {
            type: import("vue").PropType<(size: number) => void>;
            default: (size: number) => void;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    total: NumberConstructor;
    defaultCurrent: NumberConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    current: NumberConstructor;
    defaultPageSize: NumberConstructor;
    pageSize: NumberConstructor;
    hideOnSinglePage: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSizeChanger: {
        type: BooleanConstructor;
        default: boolean;
    };
    pageSizeOptions: {
        type: import("vue").PropType<(string | number)[]>;
        default: (string | number)[];
    };
    buildOptionText: {
        type: import("vue").PropType<(opt: {
            value: any;
        }) => any>;
        default: (opt: {
            value: any;
        }) => any;
    };
    showQuickJumper: {
        type: import("vue").PropType<boolean | {
            goButton?: any;
        }>;
        default: boolean | {
            goButton?: any;
        };
    };
    showTotal: {
        type: import("vue").PropType<(total: number, range: [number, number]) => any>;
        default: (total: number, range: [number, number]) => any;
    };
    size: {
        type: import("vue").PropType<"small" | "default">;
        default: "small" | "default";
    };
    simple: {
        type: BooleanConstructor;
        default: boolean;
    };
    locale: ObjectConstructor;
    prefixCls: StringConstructor;
    selectPrefixCls: StringConstructor;
    totalBoundaryShowSizeChanger: NumberConstructor;
    selectComponentClass: StringConstructor;
    itemRender: {
        type: import("vue").PropType<(opt: {
            page: number;
            type: "next" | "page" | "prev" | "jump-prev" | "jump-next";
            originalElement: any;
        }) => any>;
        default: (opt: {
            page: number;
            type: "next" | "page" | "prev" | "jump-prev" | "jump-next";
            originalElement: any;
        }) => any;
    };
    role: StringConstructor;
    responsive: BooleanConstructor;
    showLessItems: {
        type: BooleanConstructor;
        default: boolean;
    };
    onChange: {
        type: import("vue").PropType<(page: number, pageSize: number) => void>;
        default: (page: number, pageSize: number) => void;
    };
    onShowSizeChange: {
        type: import("vue").PropType<(current: number, size: number) => void>;
        default: (current: number, size: number) => void;
    };
    'onUpdate:current': {
        type: import("vue").PropType<(current: number) => void>;
        default: (current: number) => void;
    };
    'onUpdate:pageSize': {
        type: import("vue").PropType<(size: number) => void>;
        default: (size: number) => void;
    };
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    onChange: (page: number, pageSize: number) => void;
    size: "small" | "default";
    disabled: boolean;
    responsive: boolean;
    itemRender: (opt: {
        page: number;
        type: "next" | "page" | "prev" | "jump-prev" | "jump-next";
        originalElement: any;
    }) => any;
    pageSizeOptions: (string | number)[];
    buildOptionText: (opt: {
        value: any;
    }) => any;
    hideOnSinglePage: boolean;
    showSizeChanger: boolean;
    showLessItems: boolean;
    showQuickJumper: boolean | {
        goButton?: any;
    };
    showTotal: (total: number, range: [number, number]) => any;
    simple: boolean;
    onShowSizeChange: (current: number, size: number) => void;
    'onUpdate:current': (current: number) => void;
    'onUpdate:pageSize': (size: number) => void;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export default _default;
