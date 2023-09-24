import type { App, VNode, ExtractPropTypes, CSSProperties, PropType } from 'vue';
import type { CustomSlotsType } from '../_util/type';
export declare const autoCompleteProps: () => {
    dataSource: PropType<string[] | {
        value: any;
        text: any;
    }[]>;
    dropdownMenuStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    dropdownMatchSelectWidth: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    prefixCls: StringConstructor;
    showSearch: {
        type: BooleanConstructor;
        default: any;
    };
    transitionName: StringConstructor;
    choiceTransitionName: {
        type: StringConstructor;
        default: string;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    backfill: {
        type: BooleanConstructor;
        default: any;
    };
    filterOption: {
        type: (FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
    defaultActiveFirstOption: {
        type: BooleanConstructor;
        default: boolean;
    };
    status: PropType<"" | "error" | "warning">;
    value: {
        type: PropType<import("../select").SelectValue>;
        default: import("../select").SelectValue;
    };
    children: PropType<import("../_util/type").VueNode[]>;
    listHeight: NumberConstructor;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
    tabindex: NumberConstructor;
    onClick: PropType<(e: MouseEvent) => void>;
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onChange: PropType<(value: import("../select").SelectValue, option: import("../select").DefaultOptionType | import("../select").DefaultOptionType[]) => void>;
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onSelect: PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
    size: {
        type: PropType<import("../config-provider").SizeType>;
        default: import("../config-provider").SizeType;
    };
    direction: {
        type: PropType<"rtl" | "ltr">;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    animation: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    getPopupContainer: {
        type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
    };
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    id: StringConstructor;
    defaultValue: {
        type: PropType<import("../select").SelectValue>;
        default: import("../select").SelectValue;
    };
    'onUpdate:value': {
        type: PropType<(val: import("../select").SelectValue) => void>;
        default: (val: import("../select").SelectValue) => void;
    };
    options: PropType<import("../select").DefaultOptionType[]>;
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    popupClassName: StringConstructor;
    placement: {
        type: PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
        default: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
    };
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    itemIcon: import("vue-types").VueTypeValidableDef<any>;
    onDeselect: PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    onSearch: PropType<(value: string) => void>;
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    fieldNames: PropType<import("../vc-select/Select").FieldNames>;
    dropdownStyle: {
        type: PropType<CSSProperties>;
    };
    dropdownClassName: StringConstructor;
    dropdownRender: {
        type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
    searchValue: StringConstructor;
    onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    maxTagCount: {
        type: PropType<number | "responsive">;
    };
    maxTagTextLength: NumberConstructor;
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tokenSeparators: {
        type: PropType<string[]>;
    };
    tagRender: {
        type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
    };
    optionLabelRender: {
        type: PropType<(option: Record<string, any>) => any>;
    };
    onClear: PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    onDropdownVisibleChange: {
        type: PropType<(open: boolean) => void>;
    };
    showArrow: {
        type: BooleanConstructor;
        default: any;
    };
    onPopupScroll: PropType<(e: UIEvent) => void>;
    menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
    listItemHeight: NumberConstructor;
    inputValue: StringConstructor;
    autoClearSearchValue: {
        type: BooleanConstructor;
        default: any;
    };
    filterSort: PropType<(optionA: import("../select").DefaultOptionType, optionB: import("../select").DefaultOptionType) => number>;
    optionFilterProp: StringConstructor;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
};
export type AutoCompleteProps = Partial<ExtractPropTypes<ReturnType<typeof autoCompleteProps>>>;
export declare const AutoCompleteOption: import("./Option").OptionFC;
export declare const AutoCompleteOptGroup: import("./OptGroup").OptionGroupFC;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            value?: import("../select").SelectValue;
            size?: import("../config-provider").SizeType;
            open?: boolean;
            disabled?: boolean;
            virtual?: boolean;
            dropdownMatchSelectWidth?: number | boolean;
            autofocus?: boolean;
            defaultValue?: import("../select").SelectValue;
            'onUpdate:value'?: (val: import("../select").SelectValue) => void;
            placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
            bordered?: boolean;
            allowClear?: boolean;
            showSearch?: boolean;
            choiceTransitionName?: string;
            defaultOpen?: boolean;
            showArrow?: boolean;
            backfill?: boolean;
            autoClearSearchValue?: boolean;
            filterOption?: boolean | Function;
            defaultActiveFirstOption?: boolean;
            dropdownMenuStyle?: CSSProperties;
            style?: unknown;
            ref?: import("vue").VNodeRef;
            key?: string | number | symbol;
            ref_for?: boolean;
            ref_key?: string;
            onVnodeBeforeMount?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeMounted?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeBeforeUpdate?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeUpdated?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeBeforeUnmount?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeUnmounted?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            class?: unknown;
            readonly children?: import("../_util/type").VueNode[];
            readonly listHeight?: number;
            readonly onMouseenter?: (e: MouseEvent) => void;
            readonly onMouseleave?: (e: MouseEvent) => void;
            tabindex?: number;
            readonly onClick?: (e: MouseEvent) => void;
            readonly onFocus?: (e: FocusEvent) => void;
            readonly onBlur?: (e: FocusEvent) => void;
            readonly onChange?: (value: import("../select").SelectValue, option: import("../select").DefaultOptionType | import("../select").DefaultOptionType[]) => void;
            readonly onKeydown?: (e: KeyboardEvent) => void;
            readonly onKeyup?: (e: KeyboardEvent) => void;
            readonly onMousedown?: (e: MouseEvent) => void;
            readonly onSelect?: import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>;
            readonly direction?: "rtl" | "ltr";
            readonly animation?: string;
            readonly prefixCls?: string;
            readonly getPopupContainer?: import("../vc-select/BaseSelect").RenderDOMFunc;
            role?: string;
            readonly id?: string;
            readonly status?: "" | "error" | "warning";
            readonly options?: import("../select").DefaultOptionType[];
            readonly showAction?: ("click" | "focus")[];
            readonly popupClassName?: string;
            readonly transitionName?: string;
            readonly placeholder?: any;
            readonly itemIcon?: any;
            readonly onDeselect?: import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>;
            readonly clearIcon?: any;
            readonly onSearch?: (value: string) => void;
            readonly notFoundContent?: any;
            readonly fieldNames?: unknown;
            readonly dropdownStyle?: CSSProperties;
            readonly dropdownClassName?: string;
            readonly dropdownRender?: import("../vc-select/BaseSelect").DropdownRender;
            readonly dropdownAlign?: unknown;
            readonly searchValue?: string;
            readonly onInputKeyDown?: (e: KeyboardEvent) => void;
            readonly removeIcon?: any;
            readonly maxTagCount?: number | "responsive";
            readonly maxTagTextLength?: number;
            readonly maxTagPlaceholder?: any;
            readonly tokenSeparators?: string[];
            readonly tagRender?: (props: import("../vc-select/BaseSelect").CustomTagProps) => any;
            readonly optionLabelRender?: (option: Record<string, any>) => any;
            readonly onClear?: () => void;
            readonly onDropdownVisibleChange?: (open: boolean) => void;
            readonly onPopupScroll?: (e: UIEvent) => void;
            readonly menuItemSelectedIcon?: any;
            readonly listItemHeight?: number;
            readonly inputValue?: string;
            readonly filterSort?: (optionA: import("../select").DefaultOptionType, optionB: import("../select").DefaultOptionType) => number;
            readonly optionFilterProp?: string;
            readonly suffixIcon?: any;
            readonly dataSource?: string[] | {
                value: any;
                text: any;
            }[];
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            options: any;
            default: any;
            notFoundContent: any;
            dataSource: any;
            clearIcon: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            dataSource: PropType<string[] | {
                value: any;
                text: any;
            }[]>;
            dropdownMenuStyle: {
                type: PropType<CSSProperties>;
                default: CSSProperties;
            };
            dropdownMatchSelectWidth: {
                type: (BooleanConstructor | NumberConstructor)[];
                default: boolean;
            };
            prefixCls: StringConstructor;
            showSearch: {
                type: BooleanConstructor;
                default: any;
            };
            transitionName: StringConstructor;
            choiceTransitionName: {
                type: StringConstructor;
                default: string;
            };
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            backfill: {
                type: BooleanConstructor;
                default: any;
            };
            filterOption: {
                type: (FunctionConstructor | BooleanConstructor)[];
                default: boolean;
            };
            defaultActiveFirstOption: {
                type: BooleanConstructor;
                default: boolean;
            };
            status: PropType<"" | "error" | "warning">;
            value: {
                type: PropType<import("../select").SelectValue>;
                default: import("../select").SelectValue;
            };
            children: PropType<import("../_util/type").VueNode[]>;
            listHeight: NumberConstructor;
            onMouseenter: PropType<(e: MouseEvent) => void>;
            onMouseleave: PropType<(e: MouseEvent) => void>;
            tabindex: NumberConstructor;
            onClick: PropType<(e: MouseEvent) => void>;
            onFocus: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onChange: PropType<(value: import("../select").SelectValue, option: import("../select").DefaultOptionType | import("../select").DefaultOptionType[]) => void>;
            onKeydown: PropType<(e: KeyboardEvent) => void>;
            onKeyup: PropType<(e: KeyboardEvent) => void>;
            onMousedown: PropType<(e: MouseEvent) => void>;
            onSelect: PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
            size: {
                type: PropType<import("../config-provider").SizeType>;
                default: import("../config-provider").SizeType;
            };
            direction: {
                type: PropType<"rtl" | "ltr">;
            };
            open: {
                type: BooleanConstructor;
                default: any;
            };
            animation: StringConstructor;
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            getPopupContainer: {
                type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
            };
            virtual: {
                type: BooleanConstructor;
                default: any;
            };
            id: StringConstructor;
            defaultValue: {
                type: PropType<import("../select").SelectValue>;
                default: import("../select").SelectValue;
            };
            'onUpdate:value': {
                type: PropType<(val: import("../select").SelectValue) => void>;
                default: (val: import("../select").SelectValue) => void;
            };
            options: PropType<import("../select").DefaultOptionType[]>;
            showAction: {
                type: PropType<("click" | "focus")[]>;
            };
            popupClassName: StringConstructor;
            placement: {
                type: PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
                default: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
            };
            placeholder: import("vue-types").VueTypeValidableDef<any>;
            itemIcon: import("vue-types").VueTypeValidableDef<any>;
            onDeselect: PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            clearIcon: import("vue-types").VueTypeValidableDef<any>;
            allowClear: {
                type: BooleanConstructor;
                default: any;
            };
            onSearch: PropType<(value: string) => void>;
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            fieldNames: PropType<import("../vc-select/Select").FieldNames>;
            dropdownStyle: {
                type: PropType<CSSProperties>;
            };
            dropdownClassName: StringConstructor;
            dropdownRender: {
                type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
            };
            dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
            searchValue: StringConstructor;
            onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
            removeIcon: import("vue-types").VueTypeValidableDef<any>;
            maxTagCount: {
                type: PropType<number | "responsive">;
            };
            maxTagTextLength: NumberConstructor;
            maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
            tokenSeparators: {
                type: PropType<string[]>;
            };
            tagRender: {
                type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
            };
            optionLabelRender: {
                type: PropType<(option: Record<string, any>) => any>;
            };
            onClear: PropType<() => void>;
            defaultOpen: {
                type: BooleanConstructor;
                default: any;
            };
            onDropdownVisibleChange: {
                type: PropType<(open: boolean) => void>;
            };
            showArrow: {
                type: BooleanConstructor;
                default: any;
            };
            onPopupScroll: PropType<(e: UIEvent) => void>;
            menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
            listItemHeight: NumberConstructor;
            inputValue: StringConstructor;
            autoClearSearchValue: {
                type: BooleanConstructor;
                default: any;
            };
            filterSort: PropType<(optionA: import("../select").DefaultOptionType, optionB: import("../select").DefaultOptionType) => number>;
            optionFilterProp: StringConstructor;
            suffixIcon: import("vue-types").VueTypeValidableDef<any>;
        }>>, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            value: import("../select").SelectValue;
            size: import("../config-provider").SizeType;
            open: boolean;
            disabled: boolean;
            virtual: boolean;
            dropdownMatchSelectWidth: number | boolean;
            autofocus: boolean;
            defaultValue: import("../select").SelectValue;
            'onUpdate:value': (val: import("../select").SelectValue) => void;
            placement: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
            bordered: boolean;
            allowClear: boolean;
            showSearch: boolean;
            choiceTransitionName: string;
            defaultOpen: boolean;
            showArrow: boolean;
            backfill: boolean;
            autoClearSearchValue: boolean;
            filterOption: boolean | Function;
            defaultActiveFirstOption: boolean;
            dropdownMenuStyle: CSSProperties;
        }, {}, string, CustomSlotsType<{
            options: any;
            default: any;
            notFoundContent: any;
            dataSource: any;
            clearIcon: any;
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
        dataSource: PropType<string[] | {
            value: any;
            text: any;
        }[]>;
        dropdownMenuStyle: {
            type: PropType<CSSProperties>;
            default: CSSProperties;
        };
        dropdownMatchSelectWidth: {
            type: (BooleanConstructor | NumberConstructor)[];
            default: boolean;
        };
        prefixCls: StringConstructor;
        showSearch: {
            type: BooleanConstructor;
            default: any;
        };
        transitionName: StringConstructor;
        choiceTransitionName: {
            type: StringConstructor;
            default: string;
        };
        autofocus: {
            type: BooleanConstructor;
            default: any;
        };
        backfill: {
            type: BooleanConstructor;
            default: any;
        };
        filterOption: {
            type: (FunctionConstructor | BooleanConstructor)[];
            default: boolean;
        };
        defaultActiveFirstOption: {
            type: BooleanConstructor;
            default: boolean;
        };
        status: PropType<"" | "error" | "warning">;
        value: {
            type: PropType<import("../select").SelectValue>;
            default: import("../select").SelectValue;
        };
        children: PropType<import("../_util/type").VueNode[]>;
        listHeight: NumberConstructor;
        onMouseenter: PropType<(e: MouseEvent) => void>;
        onMouseleave: PropType<(e: MouseEvent) => void>;
        tabindex: NumberConstructor;
        onClick: PropType<(e: MouseEvent) => void>;
        onFocus: {
            type: PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: PropType<(e: FocusEvent) => void>;
        };
        onChange: PropType<(value: import("../select").SelectValue, option: import("../select").DefaultOptionType | import("../select").DefaultOptionType[]) => void>;
        onKeydown: PropType<(e: KeyboardEvent) => void>;
        onKeyup: PropType<(e: KeyboardEvent) => void>;
        onMousedown: PropType<(e: MouseEvent) => void>;
        onSelect: PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
        size: {
            type: PropType<import("../config-provider").SizeType>;
            default: import("../config-provider").SizeType;
        };
        direction: {
            type: PropType<"rtl" | "ltr">;
        };
        open: {
            type: BooleanConstructor;
            default: any;
        };
        animation: StringConstructor;
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        getPopupContainer: {
            type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
        };
        virtual: {
            type: BooleanConstructor;
            default: any;
        };
        id: StringConstructor;
        defaultValue: {
            type: PropType<import("../select").SelectValue>;
            default: import("../select").SelectValue;
        };
        'onUpdate:value': {
            type: PropType<(val: import("../select").SelectValue) => void>;
            default: (val: import("../select").SelectValue) => void;
        };
        options: PropType<import("../select").DefaultOptionType[]>;
        showAction: {
            type: PropType<("click" | "focus")[]>;
        };
        popupClassName: StringConstructor;
        placement: {
            type: PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
            default: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
        };
        placeholder: import("vue-types").VueTypeValidableDef<any>;
        itemIcon: import("vue-types").VueTypeValidableDef<any>;
        onDeselect: PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearIcon: import("vue-types").VueTypeValidableDef<any>;
        allowClear: {
            type: BooleanConstructor;
            default: any;
        };
        onSearch: PropType<(value: string) => void>;
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
        fieldNames: PropType<import("../vc-select/Select").FieldNames>;
        dropdownStyle: {
            type: PropType<CSSProperties>;
        };
        dropdownClassName: StringConstructor;
        dropdownRender: {
            type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
        };
        dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
        searchValue: StringConstructor;
        onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
        removeIcon: import("vue-types").VueTypeValidableDef<any>;
        maxTagCount: {
            type: PropType<number | "responsive">;
        };
        maxTagTextLength: NumberConstructor;
        maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
        tokenSeparators: {
            type: PropType<string[]>;
        };
        tagRender: {
            type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
        };
        optionLabelRender: {
            type: PropType<(option: Record<string, any>) => any>;
        };
        onClear: PropType<() => void>;
        defaultOpen: {
            type: BooleanConstructor;
            default: any;
        };
        onDropdownVisibleChange: {
            type: PropType<(open: boolean) => void>;
        };
        showArrow: {
            type: BooleanConstructor;
            default: any;
        };
        onPopupScroll: PropType<(e: UIEvent) => void>;
        menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
        listItemHeight: NumberConstructor;
        inputValue: StringConstructor;
        autoClearSearchValue: {
            type: BooleanConstructor;
            default: any;
        };
        filterSort: PropType<(optionA: import("../select").DefaultOptionType, optionB: import("../select").DefaultOptionType) => number>;
        optionFilterProp: StringConstructor;
        suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    }>> & import("vue").ShallowUnwrapRef<() => import("vue/jsx-runtime").JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    dataSource: PropType<string[] | {
        value: any;
        text: any;
    }[]>;
    dropdownMenuStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    dropdownMatchSelectWidth: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    prefixCls: StringConstructor;
    showSearch: {
        type: BooleanConstructor;
        default: any;
    };
    transitionName: StringConstructor;
    choiceTransitionName: {
        type: StringConstructor;
        default: string;
    };
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    backfill: {
        type: BooleanConstructor;
        default: any;
    };
    filterOption: {
        type: (FunctionConstructor | BooleanConstructor)[];
        default: boolean;
    };
    defaultActiveFirstOption: {
        type: BooleanConstructor;
        default: boolean;
    };
    status: PropType<"" | "error" | "warning">;
    value: {
        type: PropType<import("../select").SelectValue>;
        default: import("../select").SelectValue;
    };
    children: PropType<import("../_util/type").VueNode[]>;
    listHeight: NumberConstructor;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
    tabindex: NumberConstructor;
    onClick: PropType<(e: MouseEvent) => void>;
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onChange: PropType<(value: import("../select").SelectValue, option: import("../select").DefaultOptionType | import("../select").DefaultOptionType[]) => void>;
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onSelect: PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
    size: {
        type: PropType<import("../config-provider").SizeType>;
        default: import("../config-provider").SizeType;
    };
    direction: {
        type: PropType<"rtl" | "ltr">;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    animation: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    getPopupContainer: {
        type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
    };
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    id: StringConstructor;
    defaultValue: {
        type: PropType<import("../select").SelectValue>;
        default: import("../select").SelectValue;
    };
    'onUpdate:value': {
        type: PropType<(val: import("../select").SelectValue) => void>;
        default: (val: import("../select").SelectValue) => void;
    };
    options: PropType<import("../select").DefaultOptionType[]>;
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    popupClassName: StringConstructor;
    placement: {
        type: PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
        default: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
    };
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    itemIcon: import("vue-types").VueTypeValidableDef<any>;
    onDeselect: PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    onSearch: PropType<(value: string) => void>;
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    fieldNames: PropType<import("../vc-select/Select").FieldNames>;
    dropdownStyle: {
        type: PropType<CSSProperties>;
    };
    dropdownClassName: StringConstructor;
    dropdownRender: {
        type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
    searchValue: StringConstructor;
    onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    maxTagCount: {
        type: PropType<number | "responsive">;
    };
    maxTagTextLength: NumberConstructor;
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tokenSeparators: {
        type: PropType<string[]>;
    };
    tagRender: {
        type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
    };
    optionLabelRender: {
        type: PropType<(option: Record<string, any>) => any>;
    };
    onClear: PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    onDropdownVisibleChange: {
        type: PropType<(open: boolean) => void>;
    };
    showArrow: {
        type: BooleanConstructor;
        default: any;
    };
    onPopupScroll: PropType<(e: UIEvent) => void>;
    menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
    listItemHeight: NumberConstructor;
    inputValue: StringConstructor;
    autoClearSearchValue: {
        type: BooleanConstructor;
        default: any;
    };
    filterSort: PropType<(optionA: import("../select").DefaultOptionType, optionB: import("../select").DefaultOptionType) => number>;
    optionFilterProp: StringConstructor;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
}>>, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    value: import("../select").SelectValue;
    size: import("../config-provider").SizeType;
    open: boolean;
    disabled: boolean;
    virtual: boolean;
    dropdownMatchSelectWidth: number | boolean;
    autofocus: boolean;
    defaultValue: import("../select").SelectValue;
    'onUpdate:value': (val: import("../select").SelectValue) => void;
    placement: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
    bordered: boolean;
    allowClear: boolean;
    showSearch: boolean;
    choiceTransitionName: string;
    defaultOpen: boolean;
    showArrow: boolean;
    backfill: boolean;
    autoClearSearchValue: boolean;
    filterOption: boolean | Function;
    defaultActiveFirstOption: boolean;
    dropdownMenuStyle: CSSProperties;
}, {}, string, CustomSlotsType<{
    options: any;
    default: any;
    notFoundContent: any;
    dataSource: any;
    clearIcon: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Option: import("./Option").OptionFC;
    OptGroup: import("./OptGroup").OptionGroupFC;
    install(app: App): App<any>;
};
export default _default;
