import type { ShowSearchType, FieldNames, BaseOptionType, DefaultOptionType } from '../vc-cascader';
import { SHOW_CHILD, SHOW_PARENT } from '../vc-cascader';
import type { VueNode } from '../_util/type';
import type { ExtractPropTypes, PropType } from 'vue';
import type { SizeType } from '../config-provider';
import type { ValueType } from '../vc-cascader/Cascader';
export type { BaseOptionType, DefaultOptionType, ShowSearchType };
export type FieldNamesType = FieldNames;
export type FilledFieldNamesType = Required<FieldNamesType>;
export interface CascaderOptionType extends DefaultOptionType {
    isLeaf?: boolean;
    loading?: boolean;
    children?: CascaderOptionType[];
    [key: string]: any;
}
export declare function cascaderProps<DataNodeType extends CascaderOptionType = CascaderOptionType>(): {
    multiple: {
        type: BooleanConstructor;
        default: any;
    };
    size: PropType<SizeType>;
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    placement: {
        type: PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
    };
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    status: PropType<"" | "error" | "warning">;
    options: PropType<DataNodeType[]>;
    popupClassName: StringConstructor;
    /** @deprecated Please use `popupClassName` instead */
    dropdownClassName: StringConstructor;
    'onUpdate:value': PropType<(value: ValueType) => void>;
    value: {
        type: PropType<ValueType>;
    };
    children: PropType<VueNode[]>;
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
    onChange: PropType<(value: ValueType, selectOptions: DefaultOptionType[] | DefaultOptionType[][]) => void>;
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
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
    prefixCls: StringConstructor;
    getPopupContainer: {
        type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
    };
    dropdownMatchSelectWidth: {
        type: PropType<number | boolean>;
        default: any;
    };
    id: StringConstructor;
    autofocus: BooleanConstructor;
    defaultValue: {
        type: PropType<ValueType>;
    };
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    onPopupVisibleChange: PropType<(open: boolean) => void>;
    popupStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    popupPlacement: PropType<import("../vc-select/BaseSelect").Placement>;
    popupVisible: {
        type: BooleanConstructor;
        default: any;
    };
    transitionName: StringConstructor;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    expandIcon: import("vue-types").VueTypeValidableDef<any>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    onSearch: PropType<(value: string) => void>;
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    fieldNames: {
        type: PropType<FieldNames>;
        default: FieldNames;
    };
    dropdownStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    dropdownRender: {
        type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
    loadData: PropType<(selectOptions: DefaultOptionType[]) => void>;
    showSearch: {
        type: PropType<boolean | ShowSearchType<DefaultOptionType>>;
        default: boolean | ShowSearchType<DefaultOptionType>;
    };
    searchValue: StringConstructor;
    onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    maxTagCount: {
        type: PropType<number | "responsive">;
    };
    maxTagTextLength: NumberConstructor;
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tagRender: {
        type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
    };
    choiceTransitionName: StringConstructor;
    optionLabelRender: {
        type: PropType<(option: Record<string, any>) => any>;
    };
    onClear: PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    onDropdownVisibleChange: PropType<(open: boolean) => void>;
    getInputElement: {
        type: PropType<() => any>;
    };
    getRawInputElement: {
        type: PropType<() => any>;
    };
    showArrow: {
        type: BooleanConstructor;
        default: any;
    };
    inputIcon: import("vue-types").VueTypeValidableDef<any>;
    onPopupScroll: PropType<(e: UIEvent) => void>;
    changeOnSelect: {
        type: BooleanConstructor;
        default: any;
    };
    displayRender: PropType<(opt: {
        labels: string[];
        selectedOptions?: DefaultOptionType[];
    }) => any>;
    showCheckedStrategy: {
        type: PropType<import("../vc-cascader/Cascader").ShowCheckedStrategy>;
        default: string;
    };
    expandTrigger: PropType<"click" | "hover">;
    dropdownPrefixCls: StringConstructor;
    dropdownMenuColumnStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    loadingIcon: import("vue-types").VueTypeValidableDef<any>;
};
export type CascaderProps = Partial<ExtractPropTypes<ReturnType<typeof cascaderProps>>>;
export interface CascaderRef {
    focus: () => void;
    blur: () => void;
}
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            open?: boolean;
            multiple?: boolean;
            disabled?: boolean;
            dropdownMatchSelectWidth?: number | boolean;
            autofocus?: boolean;
            popupStyle?: import("vue").CSSProperties;
            popupVisible?: boolean;
            loading?: boolean;
            bordered?: boolean;
            allowClear?: boolean;
            fieldNames?: FieldNames;
            dropdownStyle?: import("vue").CSSProperties;
            showSearch?: boolean | ShowSearchType<DefaultOptionType>;
            defaultOpen?: boolean;
            showArrow?: boolean;
            changeOnSelect?: boolean;
            showCheckedStrategy?: import("../vc-cascader/Cascader").ShowCheckedStrategy;
            dropdownMenuColumnStyle?: import("vue").CSSProperties;
            style?: unknown;
            readonly value?: ValueType;
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
            readonly children?: VueNode[];
            readonly onMouseenter?: (e: MouseEvent) => void;
            readonly onMouseleave?: (e: MouseEvent) => void;
            tabindex?: number;
            readonly onClick?: (e: MouseEvent) => void;
            readonly onFocus?: (e: FocusEvent) => void;
            readonly onBlur?: (e: FocusEvent) => void;
            readonly onChange?: (value: ValueType, selectOptions: DefaultOptionType[] | DefaultOptionType[][]) => void;
            readonly onKeydown?: (e: KeyboardEvent) => void;
            readonly onKeyup?: (e: KeyboardEvent) => void;
            readonly onMousedown?: (e: MouseEvent) => void;
            readonly size?: SizeType;
            readonly direction?: "rtl" | "ltr";
            readonly animation?: string;
            readonly prefixCls?: string;
            readonly getPopupContainer?: import("../vc-select/BaseSelect").RenderDOMFunc;
            role?: string;
            readonly id?: string;
            readonly status?: "" | "error" | "warning";
            readonly defaultValue?: ValueType;
            readonly 'onUpdate:value'?: (value: ValueType) => void;
            readonly options?: CascaderOptionType[];
            readonly showAction?: ("click" | "focus")[];
            readonly onPopupVisibleChange?: (open: boolean) => void;
            readonly popupClassName?: string;
            readonly popupPlacement?: import("../vc-select/BaseSelect").Placement;
            readonly transitionName?: string;
            readonly placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
            readonly placeholder?: any;
            readonly expandIcon?: any;
            readonly clearIcon?: any;
            readonly onSearch?: (value: string) => void;
            readonly notFoundContent?: any;
            readonly dropdownClassName?: string;
            readonly dropdownRender?: import("../vc-select/BaseSelect").DropdownRender;
            readonly dropdownAlign?: unknown;
            readonly loadData?: (selectOptions: DefaultOptionType[]) => void;
            readonly searchValue?: string;
            readonly onInputKeyDown?: (e: KeyboardEvent) => void;
            readonly removeIcon?: any;
            readonly maxTagCount?: number | "responsive";
            readonly maxTagTextLength?: number;
            readonly maxTagPlaceholder?: any;
            readonly tagRender?: (props: import("../vc-select/BaseSelect").CustomTagProps) => any;
            readonly choiceTransitionName?: string;
            readonly optionLabelRender?: (option: Record<string, any>) => any;
            readonly onClear?: () => void;
            readonly onDropdownVisibleChange?: (open: boolean) => void;
            readonly getInputElement?: () => any;
            readonly getRawInputElement?: () => any;
            readonly inputIcon?: any;
            readonly onPopupScroll?: (e: UIEvent) => void;
            readonly suffixIcon?: any;
            readonly displayRender?: (opt: {
                labels: string[];
                selectedOptions?: DefaultOptionType[];
            }) => any;
            readonly expandTrigger?: "click" | "hover";
            readonly dropdownPrefixCls?: string;
            readonly loadingIcon?: any;
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
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            multiple: {
                type: BooleanConstructor;
                default: any;
            };
            size: PropType<SizeType>;
            bordered: {
                type: BooleanConstructor;
                default: any;
            };
            placement: {
                type: PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
            };
            suffixIcon: import("vue-types").VueTypeValidableDef<any>;
            status: PropType<"" | "error" | "warning">;
            options: PropType<CascaderOptionType[]>;
            popupClassName: StringConstructor;
            /** @deprecated Please use `popupClassName` instead */
            dropdownClassName: StringConstructor;
            'onUpdate:value': PropType<(value: ValueType) => void>;
            value: {
                type: PropType<ValueType>;
            };
            children: PropType<VueNode[]>;
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
            onChange: PropType<(value: ValueType, selectOptions: DefaultOptionType[] | DefaultOptionType[][]) => void>;
            onKeydown: PropType<(e: KeyboardEvent) => void>;
            onKeyup: PropType<(e: KeyboardEvent) => void>;
            onMousedown: PropType<(e: MouseEvent) => void>;
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
            prefixCls: StringConstructor;
            getPopupContainer: {
                type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
            };
            dropdownMatchSelectWidth: {
                type: PropType<number | boolean>;
                default: any;
            };
            id: StringConstructor;
            autofocus: BooleanConstructor;
            defaultValue: {
                type: PropType<ValueType>;
            };
            showAction: {
                type: PropType<("click" | "focus")[]>;
            };
            onPopupVisibleChange: PropType<(open: boolean) => void>;
            popupStyle: {
                type: PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            popupPlacement: PropType<import("../vc-select/BaseSelect").Placement>;
            popupVisible: {
                type: BooleanConstructor;
                default: any;
            };
            transitionName: StringConstructor;
            placeholder: import("vue-types").VueTypeValidableDef<any>;
            expandIcon: import("vue-types").VueTypeValidableDef<any>;
            loading: {
                type: BooleanConstructor;
                default: any;
            };
            clearIcon: import("vue-types").VueTypeValidableDef<any>;
            allowClear: {
                type: BooleanConstructor;
                default: any;
            };
            onSearch: PropType<(value: string) => void>;
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            fieldNames: {
                type: PropType<FieldNames>;
                default: FieldNames;
            };
            dropdownStyle: {
                type: PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            dropdownRender: {
                type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
            };
            dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
            loadData: PropType<(selectOptions: DefaultOptionType[]) => void>;
            showSearch: {
                type: PropType<boolean | ShowSearchType<DefaultOptionType>>;
                default: boolean | ShowSearchType<DefaultOptionType>;
            };
            searchValue: StringConstructor;
            onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
            removeIcon: import("vue-types").VueTypeValidableDef<any>;
            maxTagCount: {
                type: PropType<number | "responsive">;
            };
            maxTagTextLength: NumberConstructor;
            maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
            tagRender: {
                type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
            };
            choiceTransitionName: StringConstructor;
            optionLabelRender: {
                type: PropType<(option: Record<string, any>) => any>;
            };
            onClear: PropType<() => void>;
            defaultOpen: {
                type: BooleanConstructor;
                default: any;
            };
            onDropdownVisibleChange: PropType<(open: boolean) => void>;
            getInputElement: {
                type: PropType<() => any>;
            };
            getRawInputElement: {
                type: PropType<() => any>;
            };
            showArrow: {
                type: BooleanConstructor;
                default: any;
            };
            inputIcon: import("vue-types").VueTypeValidableDef<any>;
            onPopupScroll: PropType<(e: UIEvent) => void>;
            changeOnSelect: {
                type: BooleanConstructor;
                default: any;
            };
            displayRender: PropType<(opt: {
                labels: string[];
                selectedOptions?: DefaultOptionType[];
            }) => any>;
            showCheckedStrategy: {
                type: PropType<import("../vc-cascader/Cascader").ShowCheckedStrategy>;
                default: string;
            };
            expandTrigger: PropType<"click" | "hover">;
            dropdownPrefixCls: StringConstructor;
            dropdownMenuColumnStyle: {
                type: PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            loadingIcon: import("vue-types").VueTypeValidableDef<any>;
        }>>, () => VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            open: boolean;
            multiple: boolean;
            disabled: boolean;
            dropdownMatchSelectWidth: number | boolean;
            autofocus: boolean;
            popupStyle: import("vue").CSSProperties;
            popupVisible: boolean;
            loading: boolean;
            bordered: boolean;
            allowClear: boolean;
            fieldNames: FieldNames;
            dropdownStyle: import("vue").CSSProperties;
            showSearch: boolean | ShowSearchType<DefaultOptionType>;
            defaultOpen: boolean;
            showArrow: boolean;
            changeOnSelect: boolean;
            showCheckedStrategy: import("../vc-cascader/Cascader").ShowCheckedStrategy;
            dropdownMenuColumnStyle: import("vue").CSSProperties;
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
    } & Readonly<ExtractPropTypes<{
        multiple: {
            type: BooleanConstructor;
            default: any;
        };
        size: PropType<SizeType>;
        bordered: {
            type: BooleanConstructor;
            default: any;
        };
        placement: {
            type: PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
        };
        suffixIcon: import("vue-types").VueTypeValidableDef<any>;
        status: PropType<"" | "error" | "warning">;
        options: PropType<CascaderOptionType[]>;
        popupClassName: StringConstructor;
        /** @deprecated Please use `popupClassName` instead */
        dropdownClassName: StringConstructor;
        'onUpdate:value': PropType<(value: ValueType) => void>;
        value: {
            type: PropType<ValueType>;
        };
        children: PropType<VueNode[]>;
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
        onChange: PropType<(value: ValueType, selectOptions: DefaultOptionType[] | DefaultOptionType[][]) => void>;
        onKeydown: PropType<(e: KeyboardEvent) => void>;
        onKeyup: PropType<(e: KeyboardEvent) => void>;
        onMousedown: PropType<(e: MouseEvent) => void>;
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
        prefixCls: StringConstructor;
        getPopupContainer: {
            type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
        };
        dropdownMatchSelectWidth: {
            type: PropType<number | boolean>;
            default: any;
        };
        id: StringConstructor;
        autofocus: BooleanConstructor;
        defaultValue: {
            type: PropType<ValueType>;
        };
        showAction: {
            type: PropType<("click" | "focus")[]>;
        };
        onPopupVisibleChange: PropType<(open: boolean) => void>;
        popupStyle: {
            type: PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        popupPlacement: PropType<import("../vc-select/BaseSelect").Placement>;
        popupVisible: {
            type: BooleanConstructor;
            default: any;
        };
        transitionName: StringConstructor;
        placeholder: import("vue-types").VueTypeValidableDef<any>;
        expandIcon: import("vue-types").VueTypeValidableDef<any>;
        loading: {
            type: BooleanConstructor;
            default: any;
        };
        clearIcon: import("vue-types").VueTypeValidableDef<any>;
        allowClear: {
            type: BooleanConstructor;
            default: any;
        };
        onSearch: PropType<(value: string) => void>;
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
        fieldNames: {
            type: PropType<FieldNames>;
            default: FieldNames;
        };
        dropdownStyle: {
            type: PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        dropdownRender: {
            type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
        };
        dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
        loadData: PropType<(selectOptions: DefaultOptionType[]) => void>;
        showSearch: {
            type: PropType<boolean | ShowSearchType<DefaultOptionType>>;
            default: boolean | ShowSearchType<DefaultOptionType>;
        };
        searchValue: StringConstructor;
        onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
        removeIcon: import("vue-types").VueTypeValidableDef<any>;
        maxTagCount: {
            type: PropType<number | "responsive">;
        };
        maxTagTextLength: NumberConstructor;
        maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
        tagRender: {
            type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
        };
        choiceTransitionName: StringConstructor;
        optionLabelRender: {
            type: PropType<(option: Record<string, any>) => any>;
        };
        onClear: PropType<() => void>;
        defaultOpen: {
            type: BooleanConstructor;
            default: any;
        };
        onDropdownVisibleChange: PropType<(open: boolean) => void>;
        getInputElement: {
            type: PropType<() => any>;
        };
        getRawInputElement: {
            type: PropType<() => any>;
        };
        showArrow: {
            type: BooleanConstructor;
            default: any;
        };
        inputIcon: import("vue-types").VueTypeValidableDef<any>;
        onPopupScroll: PropType<(e: UIEvent) => void>;
        changeOnSelect: {
            type: BooleanConstructor;
            default: any;
        };
        displayRender: PropType<(opt: {
            labels: string[];
            selectedOptions?: DefaultOptionType[];
        }) => any>;
        showCheckedStrategy: {
            type: PropType<import("../vc-cascader/Cascader").ShowCheckedStrategy>;
            default: string;
        };
        expandTrigger: PropType<"click" | "hover">;
        dropdownPrefixCls: StringConstructor;
        dropdownMenuColumnStyle: {
            type: PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        loadingIcon: import("vue-types").VueTypeValidableDef<any>;
    }>> & import("vue").ShallowUnwrapRef<() => VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    multiple: {
        type: BooleanConstructor;
        default: any;
    };
    size: PropType<SizeType>;
    bordered: {
        type: BooleanConstructor;
        default: any;
    };
    placement: {
        type: PropType<"bottomLeft" | "bottomRight" | "topLeft" | "topRight">;
    };
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    status: PropType<"" | "error" | "warning">;
    options: PropType<CascaderOptionType[]>;
    popupClassName: StringConstructor;
    /** @deprecated Please use `popupClassName` instead */
    dropdownClassName: StringConstructor;
    'onUpdate:value': PropType<(value: ValueType) => void>;
    value: {
        type: PropType<ValueType>;
    };
    children: PropType<VueNode[]>;
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
    onChange: PropType<(value: ValueType, selectOptions: DefaultOptionType[] | DefaultOptionType[][]) => void>;
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onMousedown: PropType<(e: MouseEvent) => void>;
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
    prefixCls: StringConstructor;
    getPopupContainer: {
        type: PropType<import("../vc-select/BaseSelect").RenderDOMFunc>;
    };
    dropdownMatchSelectWidth: {
        type: PropType<number | boolean>;
        default: any;
    };
    id: StringConstructor;
    autofocus: BooleanConstructor;
    defaultValue: {
        type: PropType<ValueType>;
    };
    showAction: {
        type: PropType<("click" | "focus")[]>;
    };
    onPopupVisibleChange: PropType<(open: boolean) => void>;
    popupStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    popupPlacement: PropType<import("../vc-select/BaseSelect").Placement>;
    popupVisible: {
        type: BooleanConstructor;
        default: any;
    };
    transitionName: StringConstructor;
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    expandIcon: import("vue-types").VueTypeValidableDef<any>;
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    clearIcon: import("vue-types").VueTypeValidableDef<any>;
    allowClear: {
        type: BooleanConstructor;
        default: any;
    };
    onSearch: PropType<(value: string) => void>;
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    fieldNames: {
        type: PropType<FieldNames>;
        default: FieldNames;
    };
    dropdownStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    dropdownRender: {
        type: PropType<import("../vc-select/BaseSelect").DropdownRender>;
    };
    dropdownAlign: PropType<import("../vc-trigger/interface").AlignType>;
    loadData: PropType<(selectOptions: DefaultOptionType[]) => void>;
    showSearch: {
        type: PropType<boolean | ShowSearchType<DefaultOptionType>>;
        default: boolean | ShowSearchType<DefaultOptionType>;
    };
    searchValue: StringConstructor;
    onInputKeyDown: PropType<(e: KeyboardEvent) => void>;
    removeIcon: import("vue-types").VueTypeValidableDef<any>;
    maxTagCount: {
        type: PropType<number | "responsive">;
    };
    maxTagTextLength: NumberConstructor;
    maxTagPlaceholder: import("vue-types").VueTypeValidableDef<any>;
    tagRender: {
        type: PropType<(props: import("../vc-select/BaseSelect").CustomTagProps) => any>;
    };
    choiceTransitionName: StringConstructor;
    optionLabelRender: {
        type: PropType<(option: Record<string, any>) => any>;
    };
    onClear: PropType<() => void>;
    defaultOpen: {
        type: BooleanConstructor;
        default: any;
    };
    onDropdownVisibleChange: PropType<(open: boolean) => void>;
    getInputElement: {
        type: PropType<() => any>;
    };
    getRawInputElement: {
        type: PropType<() => any>;
    };
    showArrow: {
        type: BooleanConstructor;
        default: any;
    };
    inputIcon: import("vue-types").VueTypeValidableDef<any>;
    onPopupScroll: PropType<(e: UIEvent) => void>;
    changeOnSelect: {
        type: BooleanConstructor;
        default: any;
    };
    displayRender: PropType<(opt: {
        labels: string[];
        selectedOptions?: DefaultOptionType[];
    }) => any>;
    showCheckedStrategy: {
        type: PropType<import("../vc-cascader/Cascader").ShowCheckedStrategy>;
        default: string;
    };
    expandTrigger: PropType<"click" | "hover">;
    dropdownPrefixCls: StringConstructor;
    dropdownMenuColumnStyle: {
        type: PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    loadingIcon: import("vue-types").VueTypeValidableDef<any>;
}>>, () => VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    open: boolean;
    multiple: boolean;
    disabled: boolean;
    dropdownMatchSelectWidth: number | boolean;
    autofocus: boolean;
    popupStyle: import("vue").CSSProperties;
    popupVisible: boolean;
    loading: boolean;
    bordered: boolean;
    allowClear: boolean;
    fieldNames: FieldNames;
    dropdownStyle: import("vue").CSSProperties;
    showSearch: boolean | ShowSearchType<DefaultOptionType>;
    defaultOpen: boolean;
    showArrow: boolean;
    changeOnSelect: boolean;
    showCheckedStrategy: import("../vc-cascader/Cascader").ShowCheckedStrategy;
    dropdownMenuColumnStyle: import("vue").CSSProperties;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    SHOW_PARENT: typeof SHOW_PARENT;
    SHOW_CHILD: typeof SHOW_CHILD;
} & import("vue").Plugin<any[]>;
export default _default;
