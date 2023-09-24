declare const _default: import("vue").DefineComponent<{
    value: {
        type: import("vue").PropType<import("../select").SelectValue>;
        default: import("../select").SelectValue;
    };
    defaultValue: {
        type: import("vue").PropType<import("../select").SelectValue>;
        default: import("../select").SelectValue;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    itemIcon: import("vue-types").VueTypeValidableDef<any>;
    size: {
        type: import("vue").PropType<import("../config-provider").SizeType>;
        default: import("../config-provider").SizeType;
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
        type: import("vue").PropType<(val: import("../select").SelectValue) => void>;
        default: (val: import("../select").SelectValue) => void;
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
    onChange: import("vue").PropType<(value: import("../select").SelectValue, option: import("../select").DefaultOptionType | import("../select").DefaultOptionType[]) => void>;
    onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
    onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
    onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
    onSelect: import("vue").PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
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
    options: import("vue").PropType<import("../select").DefaultOptionType[]>;
    showAction: {
        type: import("vue").PropType<("click" | "focus")[]>;
    };
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    onDeselect: import("vue").PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
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
        type: import("vue").PropType<boolean | import("../vc-select/Select").FilterFunc<import("../select").DefaultOptionType>>;
        default: any;
    };
    filterSort: import("vue").PropType<(optionA: import("../select").DefaultOptionType, optionB: import("../select").DefaultOptionType) => number>;
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
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: import("vue").PropType<import("../select").SelectValue>;
        default: import("../select").SelectValue;
    };
    defaultValue: {
        type: import("vue").PropType<import("../select").SelectValue>;
        default: import("../select").SelectValue;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    itemIcon: import("vue-types").VueTypeValidableDef<any>;
    size: {
        type: import("vue").PropType<import("../config-provider").SizeType>;
        default: import("../config-provider").SizeType;
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
        type: import("vue").PropType<(val: import("../select").SelectValue) => void>;
        default: (val: import("../select").SelectValue) => void;
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
    onChange: import("vue").PropType<(value: import("../select").SelectValue, option: import("../select").DefaultOptionType | import("../select").DefaultOptionType[]) => void>;
    onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
    onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
    onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
    onSelect: import("vue").PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
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
    options: import("vue").PropType<import("../select").DefaultOptionType[]>;
    showAction: {
        type: import("vue").PropType<("click" | "focus")[]>;
    };
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    onDeselect: import("vue").PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
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
        type: import("vue").PropType<boolean | import("../vc-select/Select").FilterFunc<import("../select").DefaultOptionType>>;
        default: any;
    };
    filterSort: import("vue").PropType<(optionA: import("../select").DefaultOptionType, optionB: import("../select").DefaultOptionType) => number>;
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
}>>, {
    value: import("../select").SelectValue;
    mode: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
    size: import("../config-provider").SizeType;
    open: boolean;
    disabled: boolean;
    virtual: boolean;
    dropdownMatchSelectWidth: number | boolean;
    autofocus: boolean;
    status: "" | "error" | "warning";
    defaultValue: import("../select").SelectValue;
    'onUpdate:value': (val: import("../select").SelectValue) => void;
    placement: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
    loading: boolean;
    bordered: boolean;
    allowClear: boolean;
    showSearch: boolean;
    choiceTransitionName: "";
    defaultOpen: boolean;
    showArrow: boolean;
    autoClearSearchValue: boolean;
    filterOption: boolean | import("../vc-select/Select").FilterFunc<import("../select").DefaultOptionType>;
    defaultActiveFirstOption: boolean;
    labelInValue: boolean;
}, {}>;
export default _default;
export declare const MiddleSelect: import("vue").DefineComponent<{
    value: {
        type: import("vue").PropType<import("../select").SelectValue>;
        default: import("../select").SelectValue;
    };
    defaultValue: {
        type: import("vue").PropType<import("../select").SelectValue>;
        default: import("../select").SelectValue;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    itemIcon: import("vue-types").VueTypeValidableDef<any>;
    size: {
        type: import("vue").PropType<import("../config-provider").SizeType>;
        default: import("../config-provider").SizeType;
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
        type: import("vue").PropType<(val: import("../select").SelectValue) => void>;
        default: (val: import("../select").SelectValue) => void;
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
    onChange: import("vue").PropType<(value: import("../select").SelectValue, option: import("../select").DefaultOptionType | import("../select").DefaultOptionType[]) => void>;
    onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
    onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
    onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
    onSelect: import("vue").PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
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
    options: import("vue").PropType<import("../select").DefaultOptionType[]>;
    showAction: {
        type: import("vue").PropType<("click" | "focus")[]>;
    };
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    onDeselect: import("vue").PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
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
        type: import("vue").PropType<boolean | import("../vc-select/Select").FilterFunc<import("../select").DefaultOptionType>>;
        default: any;
    };
    filterSort: import("vue").PropType<(optionA: import("../select").DefaultOptionType, optionB: import("../select").DefaultOptionType) => number>;
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
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: import("vue").PropType<import("../select").SelectValue>;
        default: import("../select").SelectValue;
    };
    defaultValue: {
        type: import("vue").PropType<import("../select").SelectValue>;
        default: import("../select").SelectValue;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    suffixIcon: import("vue-types").VueTypeValidableDef<any>;
    itemIcon: import("vue-types").VueTypeValidableDef<any>;
    size: {
        type: import("vue").PropType<import("../config-provider").SizeType>;
        default: import("../config-provider").SizeType;
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
        type: import("vue").PropType<(val: import("../select").SelectValue) => void>;
        default: (val: import("../select").SelectValue) => void;
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
    onChange: import("vue").PropType<(value: import("../select").SelectValue, option: import("../select").DefaultOptionType | import("../select").DefaultOptionType[]) => void>;
    onKeydown: import("vue").PropType<(e: KeyboardEvent) => void>;
    onKeyup: import("vue").PropType<(e: KeyboardEvent) => void>;
    onMousedown: import("vue").PropType<(e: MouseEvent) => void>;
    onSelect: import("vue").PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
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
    options: import("vue").PropType<import("../select").DefaultOptionType[]>;
    showAction: {
        type: import("vue").PropType<("click" | "focus")[]>;
    };
    placeholder: import("vue-types").VueTypeValidableDef<any>;
    onDeselect: import("vue").PropType<import("../vc-select/Select").SelectHandler<(string | number) | import("../select").LabeledValue, import("../select").DefaultOptionType>>;
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
        type: import("vue").PropType<boolean | import("../vc-select/Select").FilterFunc<import("../select").DefaultOptionType>>;
        default: any;
    };
    filterSort: import("vue").PropType<(optionA: import("../select").DefaultOptionType, optionB: import("../select").DefaultOptionType) => number>;
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
}>>, {
    value: import("../select").SelectValue;
    mode: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
    size: import("../config-provider").SizeType;
    open: boolean;
    disabled: boolean;
    virtual: boolean;
    dropdownMatchSelectWidth: number | boolean;
    autofocus: boolean;
    status: "" | "error" | "warning";
    defaultValue: import("../select").SelectValue;
    'onUpdate:value': (val: import("../select").SelectValue) => void;
    placement: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
    loading: boolean;
    bordered: boolean;
    allowClear: boolean;
    showSearch: boolean;
    choiceTransitionName: "";
    defaultOpen: boolean;
    showArrow: boolean;
    autoClearSearchValue: boolean;
    filterOption: boolean | import("../vc-select/Select").FilterFunc<import("../select").DefaultOptionType>;
    defaultActiveFirstOption: boolean;
    labelInValue: boolean;
}, {}>;
