import type { Plugin, ExtractPropTypes } from 'vue';
import type { BaseSelectRef } from '../vc-select';
import { Option, OptGroup } from '../vc-select';
import type { BaseOptionType, DefaultOptionType } from '../vc-select/Select';
import type { OptionProps } from '../vc-select/Option';
import type { SizeType } from '../config-provider';
import type { CustomSlotsType } from '../_util/type';
type RawValue = string | number;
export type OptionType = typeof Option;
export type { OptionProps, BaseSelectRef as RefSelectProps, BaseOptionType, DefaultOptionType };
export interface LabeledValue {
    key?: string;
    value: RawValue;
    label?: any;
}
export type SelectValue = RawValue | RawValue[] | LabeledValue | LabeledValue[] | undefined;
export declare const selectProps: () => {
    value: {
        type: import("vue").PropType<SelectValue>;
        default: SelectValue;
    };
    defaultValue: {
        type: import("vue").PropType<SelectValue>;
        default: SelectValue;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    itemIcon: import("vue-types").VueTypeValidableDef<any>;
    size: {
        type: import("vue").PropType<SizeType>;
        default: SizeType;
    };
    mode: {
        type: import("vue").PropType<"multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE">;
        default: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    transitionName: StringConstructor;
    choiceTransitionName: {
        type: import("vue").PropType<"">;
        default: "";
    };
    popupClassName: StringConstructor;
    /** @deprecated Please use `popupClassName` instead */
    dropdownClassName: StringConstructor;
    placement: {
        type: import("vue").PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
        default: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
    };
    status: {
        type: import("vue").PropType<"" | "error" | "warning">;
        default: "" | "error" | "warning";
    };
    'onUpdate:value': {
        type: import("vue").PropType<(val: SelectValue) => void>;
        default: (val: SelectValue) => void;
    };
    children: import("vue").PropType<import("../_util/type").VueNode[]>;
    listHeight: NumberConstructor;
    onMouseenter: import("vue").PropType<(e: MouseEvent) => void>;
    onMouseleave: import("vue").PropType<(e: MouseEvent) => void>;
    tabindex: NumberConstructor;
    onClick: import("vue").PropType<(e: MouseEvent) => void>;
    onFocus: {
        type: import("vue").PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: import("vue").PropType<(e: FocusEvent) => void>;
    };
    onChange: import("vue").PropType<(value: SelectValue, option: DefaultOptionType | DefaultOptionType[]) => void>;
    onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
    onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
    onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
    onSelect: import("vue").PropType<import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>>;
    direction: {
        type: import("vue").PropType<"rtl" | "ltr">;
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
    prefixCls: StringConstructor;
    getPopupContainer: {
        type: import("vue").PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
    };
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    dropdownMatchSelectWidth: {
        type: import("vue").PropType<number | boolean>;
        default: any;
    };
    id: StringConstructor;
    autofocus: BooleanConstructor;
    options: import("vue").PropType<DefaultOptionType[]>;
    showAction: {
        type: import("vue").PropType<("click" | "focus")[]>;
    };
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    onDeselect: import("vue").PropType<import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    onSearch: import("vue").PropType<(value: string) => void>;
    fieldNames: import("vue").PropType<import("../vc-select/Select").FieldNames>;
    dropdownStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    dropdownRender: {
        type: import("vue").PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
    showSearch: {
        type: BooleanConstructor;
        default: any;
    };
    searchValue: StringConstructor;
    onInputKeyDown: import("vue").PropType<(e: KeyboardEvent) => void>;
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    maxTagCount: {
        type: import("vue").PropType<number | "responsive">;
    };
    maxTagTextLength: NumberConstructor;
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tokenSeparators: {
        type: import("vue").PropType<string[]>;
    };
    tagRender: {
        type: import("vue").PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
    };
    optionLabelRender: {
        type: import("vue").PropType<(option: Record<string, any>) => any>;
    };
    onClear: import("vue").PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    onDropdownVisibleChange: {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    showArrow: {
        type: BooleanConstructor;
        default: any;
    };
    onPopupScroll: import("vue").PropType<(e: UIEvent) => void>;
    menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
    listItemHeight: NumberConstructor;
    inputValue: StringConstructor;
    autoClearSearchValue: {
        type: BooleanConstructor;
        default: any;
    };
    filterOption: {
        type: import("vue").PropType<boolean | import("../vc-select/Select").FilterFunc<DefaultOptionType>>;
        default: any;
    };
    filterSort: import("vue").PropType<(optionA: DefaultOptionType, optionB: DefaultOptionType) => number>;
    optionFilterProp: StringConstructor;
    optionLabelProp: StringConstructor;
    defaultActiveFirstOption: {
        type: BooleanConstructor;
        default: any;
    };
    labelInValue: {
        type: BooleanConstructor;
        default: any;
    };
};
export type SelectProps = Partial<ExtractPropTypes<ReturnType<typeof selectProps>>>;
export declare const SelectOption: any;
export declare const SelectOptGroup: any;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            value?: SelectValue;
            mode?: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
            size?: SizeType;
            open?: boolean;
            disabled?: boolean;
            virtual?: boolean;
            dropdownMatchSelectWidth?: number | boolean;
            autofocus?: boolean;
            status?: "" | "error" | "warning";
            defaultValue?: SelectValue;
            'onUpdate:value'?: (val: SelectValue) => void;
            placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
            loading?: boolean;
            bordered?: boolean;
            allowClear?: boolean;
            showSearch?: boolean;
            choiceTransitionName?: "";
            defaultOpen?: boolean;
            showArrow?: boolean;
            autoClearSearchValue?: boolean;
            filterOption?: boolean | import("../vc-select/Select").FilterFunc<DefaultOptionType>;
            defaultActiveFirstOption?: boolean;
            labelInValue?: boolean;
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
            readonly children?: import("../_util/type").VueNode[];
            readonly listHeight?: number;
            readonly onMouseenter?: (e: MouseEvent) => void;
            readonly onMouseleave?: (e: MouseEvent) => void;
            tabindex?: number;
            readonly onClick?: (e: MouseEvent) => void;
            readonly onFocus?: (e: FocusEvent) => void;
            readonly onBlur?: (e: FocusEvent) => void;
            readonly onChange?: (value: SelectValue, option: DefaultOptionType | DefaultOptionType[]) => void;
            readonly onKeydown?: (e: KeyboardEvent) => void;
            readonly onKeyup?: (e: KeyboardEvent) => void;
            readonly onMousedown?: (e: MouseEvent) => void;
            readonly onSelect?: import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>;
            readonly direction?: "rtl" | "ltr";
            readonly animation?: string;
            readonly prefixCls?: string;
            readonly getPopupContainer?: import("../vc-select/BaseSelect").RenderDOMFunc;
            role?: string;
            readonly id?: string;
            readonly options?: DefaultOptionType[];
            readonly showAction?: ("click" | "focus")[];
            readonly popupClassName?: string;
            readonly transitionName?: string;
            readonly placeholder?: any;
            readonly itemIcon?: any;
            readonly onDeselect?: import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>;
            readonly clearIcon?: any;
            readonly onSearch?: (value: string) => void;
            readonly notFoundContent?: any;
            readonly fieldNames?: unknown;
            readonly dropdownStyle?: import("vue").CSSProperties;
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
            readonly filterSort?: (optionA: DefaultOptionType, optionB: DefaultOptionType) => number;
            readonly optionFilterProp?: string;
            readonly optionLabelProp?: string;
            readonly suffixIcon?: any;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            notFoundContent: any;
            suffixIcon: any;
            itemIcon: any;
            removeIcon: any;
            clearIcon: any;
            dropdownRender: any;
            option: any;
            placeholder: any;
            tagRender: any;
            maxTagPlaceholder: any;
            optionLabel: any;
            default: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            value: {
                type: import("vue").PropType<SelectValue>;
                default: SelectValue;
            };
            defaultValue: {
                type: import("vue").PropType<SelectValue>;
                default: SelectValue;
            };
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            suffixIcon: import("vue-types").VueTypeValidableDef<any>;
            itemIcon: import("vue-types").VueTypeValidableDef<any>;
            size: {
                type: import("vue").PropType<SizeType>;
                default: SizeType;
            };
            mode: {
                type: import("vue").PropType<"multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE">;
                default: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
            };
            bordered: {
                type: BooleanConstructor;
                default: boolean;
            };
            transitionName: StringConstructor;
            choiceTransitionName: {
                type: import("vue").PropType<"">;
                default: "";
            };
            popupClassName: StringConstructor;
            /** @deprecated Please use `popupClassName` instead */
            dropdownClassName: StringConstructor;
            placement: {
                type: import("vue").PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
                default: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
            };
            status: {
                type: import("vue").PropType<"" | "error" | "warning">;
                default: "" | "error" | "warning";
            };
            'onUpdate:value': {
                type: import("vue").PropType<(val: SelectValue) => void>;
                default: (val: SelectValue) => void;
            };
            children: import("vue").PropType<import("../_util/type").VueNode[]>;
            listHeight: NumberConstructor;
            onMouseenter: import("vue").PropType<(e: MouseEvent) => void>;
            onMouseleave: import("vue").PropType<(e: MouseEvent) => void>;
            tabindex: NumberConstructor;
            onClick: import("vue").PropType<(e: MouseEvent) => void>;
            onFocus: {
                type: import("vue").PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: import("vue").PropType<(e: FocusEvent) => void>;
            };
            onChange: import("vue").PropType<(value: SelectValue, option: DefaultOptionType | DefaultOptionType[]) => void>;
            onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
            onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
            onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
            onSelect: import("vue").PropType<import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>>;
            direction: {
                type: import("vue").PropType<"rtl" | "ltr">;
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
            prefixCls: StringConstructor;
            getPopupContainer: {
                type: import("vue").PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
            };
            virtual: {
                type: BooleanConstructor;
                default: any;
            };
            dropdownMatchSelectWidth: {
                type: import("vue").PropType<number | boolean>;
                default: any;
            };
            id: StringConstructor;
            autofocus: BooleanConstructor;
            options: import("vue").PropType<DefaultOptionType[]>;
            showAction: {
                type: import("vue").PropType<("click" | "focus")[]>;
            };
            placeholder: import("vue-types").VueTypeValidableDef<any>;
            onDeselect: import("vue").PropType<import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>>;
            loading: {
                type: BooleanConstructor;
                default: any;
            };
            clearIcon: import("vue-types").VueTypeValidableDef<any>;
            allowClear: {
                type: BooleanConstructor;
                default: any;
            };
            onSearch: import("vue").PropType<(value: string) => void>;
            fieldNames: import("vue").PropType<import("../vc-select/Select").FieldNames>;
            dropdownStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            dropdownRender: {
                type: import("vue").PropType<import("../vc-select/BaseSelect").DropdownRender>;
            };
            dropdownAlign: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
            showSearch: {
                type: BooleanConstructor;
                default: any;
            };
            searchValue: StringConstructor;
            onInputKeyDown: import("vue").PropType<(e: KeyboardEvent) => void>;
            removeIcon: import("vue-types").VueTypeValidableDef<any>;
            maxTagCount: {
                type: import("vue").PropType<number | "responsive">;
            };
            maxTagTextLength: NumberConstructor;
            maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
            tokenSeparators: {
                type: import("vue").PropType<string[]>;
            };
            tagRender: {
                type: import("vue").PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
            };
            optionLabelRender: {
                type: import("vue").PropType<(option: Record<string, any>) => any>;
            };
            onClear: import("vue").PropType<() => void>;
            defaultOpen: {
                type: BooleanConstructor;
                default: any;
            };
            onDropdownVisibleChange: {
                type: import("vue").PropType<(open: boolean) => void>;
            };
            showArrow: {
                type: BooleanConstructor;
                default: any;
            };
            onPopupScroll: import("vue").PropType<(e: UIEvent) => void>;
            menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
            listItemHeight: NumberConstructor;
            inputValue: StringConstructor;
            autoClearSearchValue: {
                type: BooleanConstructor;
                default: any;
            };
            filterOption: {
                type: import("vue").PropType<boolean | import("../vc-select/Select").FilterFunc<DefaultOptionType>>;
                default: any;
            };
            filterSort: import("vue").PropType<(optionA: DefaultOptionType, optionB: DefaultOptionType) => number>;
            optionFilterProp: StringConstructor;
            optionLabelProp: StringConstructor;
            defaultActiveFirstOption: {
                type: BooleanConstructor;
                default: any;
            };
            labelInValue: {
                type: BooleanConstructor;
                default: any;
            };
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            value: SelectValue;
            mode: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
            size: SizeType;
            open: boolean;
            disabled: boolean;
            virtual: boolean;
            dropdownMatchSelectWidth: number | boolean;
            autofocus: boolean;
            status: "" | "error" | "warning";
            defaultValue: SelectValue;
            'onUpdate:value': (val: SelectValue) => void;
            placement: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
            loading: boolean;
            bordered: boolean;
            allowClear: boolean;
            showSearch: boolean;
            choiceTransitionName: "";
            defaultOpen: boolean;
            showArrow: boolean;
            autoClearSearchValue: boolean;
            filterOption: boolean | import("../vc-select/Select").FilterFunc<DefaultOptionType>;
            defaultActiveFirstOption: boolean;
            labelInValue: boolean;
        }, {}, string, CustomSlotsType<{
            notFoundContent: any;
            suffixIcon: any;
            itemIcon: any;
            removeIcon: any;
            clearIcon: any;
            dropdownRender: any;
            option: any;
            placeholder: any;
            tagRender: any;
            maxTagPlaceholder: any;
            optionLabel: any;
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
        value: {
            type: import("vue").PropType<SelectValue>;
            default: SelectValue;
        };
        defaultValue: {
            type: import("vue").PropType<SelectValue>;
            default: SelectValue;
        };
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
        suffixIcon: import("vue-types").VueTypeValidableDef<any>;
        itemIcon: import("vue-types").VueTypeValidableDef<any>;
        size: {
            type: import("vue").PropType<SizeType>;
            default: SizeType;
        };
        mode: {
            type: import("vue").PropType<"multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE">;
            default: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
        };
        bordered: {
            type: BooleanConstructor;
            default: boolean;
        };
        transitionName: StringConstructor;
        choiceTransitionName: {
            type: import("vue").PropType<"">;
            default: "";
        };
        popupClassName: StringConstructor;
        /** @deprecated Please use `popupClassName` instead */
        dropdownClassName: StringConstructor;
        placement: {
            type: import("vue").PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
            default: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
        };
        status: {
            type: import("vue").PropType<"" | "error" | "warning">;
            default: "" | "error" | "warning";
        };
        'onUpdate:value': {
            type: import("vue").PropType<(val: SelectValue) => void>;
            default: (val: SelectValue) => void;
        };
        children: import("vue").PropType<import("../_util/type").VueNode[]>;
        listHeight: NumberConstructor;
        onMouseenter: import("vue").PropType<(e: MouseEvent) => void>;
        onMouseleave: import("vue").PropType<(e: MouseEvent) => void>;
        tabindex: NumberConstructor;
        onClick: import("vue").PropType<(e: MouseEvent) => void>;
        onFocus: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onChange: import("vue").PropType<(value: SelectValue, option: DefaultOptionType | DefaultOptionType[]) => void>;
        onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
        onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
        onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
        onSelect: import("vue").PropType<import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>>;
        direction: {
            type: import("vue").PropType<"rtl" | "ltr">;
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
        prefixCls: StringConstructor;
        getPopupContainer: {
            type: import("vue").PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
        };
        virtual: {
            type: BooleanConstructor;
            default: any;
        };
        dropdownMatchSelectWidth: {
            type: import("vue").PropType<number | boolean>;
            default: any;
        };
        id: StringConstructor;
        autofocus: BooleanConstructor;
        options: import("vue").PropType<DefaultOptionType[]>;
        showAction: {
            type: import("vue").PropType<("click" | "focus")[]>;
        };
        placeholder: import("vue-types").VueTypeValidableDef<any>;
        onDeselect: import("vue").PropType<import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>>;
        loading: {
            type: BooleanConstructor;
            default: any;
        };
        clearIcon: import("vue-types").VueTypeValidableDef<any>;
        allowClear: {
            type: BooleanConstructor;
            default: any;
        };
        onSearch: import("vue").PropType<(value: string) => void>;
        fieldNames: import("vue").PropType<import("../vc-select/Select").FieldNames>;
        dropdownStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        dropdownRender: {
            type: import("vue").PropType<import("../vc-select/BaseSelect").DropdownRender>;
        };
        dropdownAlign: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
        showSearch: {
            type: BooleanConstructor;
            default: any;
        };
        searchValue: StringConstructor;
        onInputKeyDown: import("vue").PropType<(e: KeyboardEvent) => void>;
        removeIcon: import("vue-types").VueTypeValidableDef<any>;
        maxTagCount: {
            type: import("vue").PropType<number | "responsive">;
        };
        maxTagTextLength: NumberConstructor;
        maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
        tokenSeparators: {
            type: import("vue").PropType<string[]>;
        };
        tagRender: {
            type: import("vue").PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
        };
        optionLabelRender: {
            type: import("vue").PropType<(option: Record<string, any>) => any>;
        };
        onClear: import("vue").PropType<() => void>;
        defaultOpen: {
            type: BooleanConstructor;
            default: any;
        };
        onDropdownVisibleChange: {
            type: import("vue").PropType<(open: boolean) => void>;
        };
        showArrow: {
            type: BooleanConstructor;
            default: any;
        };
        onPopupScroll: import("vue").PropType<(e: UIEvent) => void>;
        menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
        listItemHeight: NumberConstructor;
        inputValue: StringConstructor;
        autoClearSearchValue: {
            type: BooleanConstructor;
            default: any;
        };
        filterOption: {
            type: import("vue").PropType<boolean | import("../vc-select/Select").FilterFunc<DefaultOptionType>>;
            default: any;
        };
        filterSort: import("vue").PropType<(optionA: DefaultOptionType, optionB: DefaultOptionType) => number>;
        optionFilterProp: StringConstructor;
        optionLabelProp: StringConstructor;
        defaultActiveFirstOption: {
            type: BooleanConstructor;
            default: any;
        };
        labelInValue: {
            type: BooleanConstructor;
            default: any;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    value: {
        type: import("vue").PropType<SelectValue>;
        default: SelectValue;
    };
    defaultValue: {
        type: import("vue").PropType<SelectValue>;
        default: SelectValue;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    itemIcon: import("vue-types").VueTypeValidableDef<any>;
    size: {
        type: import("vue").PropType<SizeType>;
        default: SizeType;
    };
    mode: {
        type: import("vue").PropType<"multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE">;
        default: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    transitionName: StringConstructor;
    choiceTransitionName: {
        type: import("vue").PropType<"">;
        default: "";
    };
    popupClassName: StringConstructor;
    /** @deprecated Please use `popupClassName` instead */
    dropdownClassName: StringConstructor;
    placement: {
        type: import("vue").PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
        default: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
    };
    status: {
        type: import("vue").PropType<"" | "error" | "warning">;
        default: "" | "error" | "warning";
    };
    'onUpdate:value': {
        type: import("vue").PropType<(val: SelectValue) => void>;
        default: (val: SelectValue) => void;
    };
    children: import("vue").PropType<import("../_util/type").VueNode[]>;
    listHeight: NumberConstructor;
    onMouseenter: import("vue").PropType<(e: MouseEvent) => void>;
    onMouseleave: import("vue").PropType<(e: MouseEvent) => void>;
    tabindex: NumberConstructor;
    onClick: import("vue").PropType<(e: MouseEvent) => void>;
    onFocus: {
        type: import("vue").PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: import("vue").PropType<(e: FocusEvent) => void>;
    };
    onChange: import("vue").PropType<(value: SelectValue, option: DefaultOptionType | DefaultOptionType[]) => void>;
    onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
    onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
    onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
    onSelect: import("vue").PropType<import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>>;
    direction: {
        type: import("vue").PropType<"rtl" | "ltr">;
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
    prefixCls: StringConstructor;
    getPopupContainer: {
        type: import("vue").PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
    };
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    dropdownMatchSelectWidth: {
        type: import("vue").PropType<number | boolean>;
        default: any;
    };
    id: StringConstructor;
    autofocus: BooleanConstructor;
    options: import("vue").PropType<DefaultOptionType[]>;
    showAction: {
        type: import("vue").PropType<("click" | "focus")[]>;
    };
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    onDeselect: import("vue").PropType<import("../vc-select/Select").SelectHandler<RawValue | LabeledValue, DefaultOptionType>>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    onSearch: import("vue").PropType<(value: string) => void>;
    fieldNames: import("vue").PropType<import("../vc-select/Select").FieldNames>;
    dropdownStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    dropdownRender: {
        type: import("vue").PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
    showSearch: {
        type: BooleanConstructor;
        default: any;
    };
    searchValue: StringConstructor;
    onInputKeyDown: import("vue").PropType<(e: KeyboardEvent) => void>;
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    maxTagCount: {
        type: import("vue").PropType<number | "responsive">;
    };
    maxTagTextLength: NumberConstructor;
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tokenSeparators: {
        type: import("vue").PropType<string[]>;
    };
    tagRender: {
        type: import("vue").PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
    };
    optionLabelRender: {
        type: import("vue").PropType<(option: Record<string, any>) => any>;
    };
    onClear: import("vue").PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    onDropdownVisibleChange: {
        type: import("vue").PropType<(open: boolean) => void>;
    };
    showArrow: {
        type: BooleanConstructor;
        default: any;
    };
    onPopupScroll: import("vue").PropType<(e: UIEvent) => void>;
    menuItemSelectedIcon: import("vue-types").VueTypeValidableDef<any>;
    listItemHeight: NumberConstructor;
    inputValue: StringConstructor;
    autoClearSearchValue: {
        type: BooleanConstructor;
        default: any;
    };
    filterOption: {
        type: import("vue").PropType<boolean | import("../vc-select/Select").FilterFunc<DefaultOptionType>>;
        default: any;
    };
    filterSort: import("vue").PropType<(optionA: DefaultOptionType, optionB: DefaultOptionType) => number>;
    optionFilterProp: StringConstructor;
    optionLabelProp: StringConstructor;
    defaultActiveFirstOption: {
        type: BooleanConstructor;
        default: any;
    };
    labelInValue: {
        type: BooleanConstructor;
        default: any;
    };
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    value: SelectValue;
    mode: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
    size: SizeType;
    open: boolean;
    disabled: boolean;
    virtual: boolean;
    dropdownMatchSelectWidth: number | boolean;
    autofocus: boolean;
    status: "" | "error" | "warning";
    defaultValue: SelectValue;
    'onUpdate:value': (val: SelectValue) => void;
    placement: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
    loading: boolean;
    bordered: boolean;
    allowClear: boolean;
    showSearch: boolean;
    choiceTransitionName: "";
    defaultOpen: boolean;
    showArrow: boolean;
    autoClearSearchValue: boolean;
    filterOption: boolean | import("../vc-select/Select").FilterFunc<DefaultOptionType>;
    defaultActiveFirstOption: boolean;
    labelInValue: boolean;
}, {}, string, CustomSlotsType<{
    notFoundContent: any;
    suffixIcon: any;
    itemIcon: any;
    removeIcon: any;
    clearIcon: any;
    dropdownRender: any;
    option: any;
    placeholder: any;
    tagRender: any;
    maxTagPlaceholder: any;
    optionLabel: any;
    default: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]> & {
    readonly Option: typeof Option;
    readonly OptGroup: typeof OptGroup;
    readonly SECRET_COMBOBOX_MODE_DO_NOT_USE: 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
};
export default _default;
