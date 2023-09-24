import type { ExtractPropTypes } from 'vue';
export declare const paginationProps: () => {
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
            type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next';
            originalElement: any;
        }) => any>;
        default: (opt: {
            page: number;
            type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next';
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
};
export type PaginationPosition = 'top' | 'bottom' | 'both';
export declare const paginationConfig: () => {
    position: {
        type: import("vue").PropType<PaginationPosition>;
        default: PaginationPosition;
    };
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
            type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next';
            originalElement: any;
        }) => any>;
        default: (opt: {
            page: number;
            type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next';
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
};
export type PaginationProps = Partial<ExtractPropTypes<ReturnType<typeof paginationProps>>>;
export type PaginationConfig = Partial<ExtractPropTypes<ReturnType<typeof paginationConfig>>>;
export interface PaginationLocale {
    items_per_page?: string;
    jump_to?: string;
    jump_to_confirm?: string;
    page?: string;
    prev_page?: string;
    next_page?: string;
    prev_5?: string;
    next_5?: string;
    prev_3?: string;
    next_3?: string;
}
declare const _default: import("vue").DefineComponent<{
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
}, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
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
}>>, {
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
}, {}>;
export default _default;
