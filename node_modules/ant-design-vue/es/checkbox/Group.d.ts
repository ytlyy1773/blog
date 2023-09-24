import type { CheckboxOptionType } from './interface';
declare const _default: import("vue").DefineComponent<{
    defaultValue: {
        type: import("vue").PropType<import("./interface").CheckboxValueType[]>;
        default: import("./interface").CheckboxValueType[];
    };
    value: {
        type: import("vue").PropType<import("./interface").CheckboxValueType[]>;
        default: import("./interface").CheckboxValueType[];
    };
    onChange: {
        type: import("vue").PropType<(checkedValue: import("./interface").CheckboxValueType[]) => void>;
        default: (checkedValue: import("./interface").CheckboxValueType[]) => void;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(checkedValue: import("./interface").CheckboxValueType[]) => void>;
        default: (checkedValue: import("./interface").CheckboxValueType[]) => void;
    };
    name: StringConstructor;
    prefixCls: StringConstructor;
    options: {
        type: import("vue").PropType<(string | number | CheckboxOptionType)[]>;
        default: (string | number | CheckboxOptionType)[];
    };
    disabled: BooleanConstructor;
    id: StringConstructor;
}, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    defaultValue: {
        type: import("vue").PropType<import("./interface").CheckboxValueType[]>;
        default: import("./interface").CheckboxValueType[];
    };
    value: {
        type: import("vue").PropType<import("./interface").CheckboxValueType[]>;
        default: import("./interface").CheckboxValueType[];
    };
    onChange: {
        type: import("vue").PropType<(checkedValue: import("./interface").CheckboxValueType[]) => void>;
        default: (checkedValue: import("./interface").CheckboxValueType[]) => void;
    };
    'onUpdate:value': {
        type: import("vue").PropType<(checkedValue: import("./interface").CheckboxValueType[]) => void>;
        default: (checkedValue: import("./interface").CheckboxValueType[]) => void;
    };
    name: StringConstructor;
    prefixCls: StringConstructor;
    options: {
        type: import("vue").PropType<(string | number | CheckboxOptionType)[]>;
        default: (string | number | CheckboxOptionType)[];
    };
    disabled: BooleanConstructor;
    id: StringConstructor;
}>>, {
    value: import("./interface").CheckboxValueType[];
    onChange: (checkedValue: import("./interface").CheckboxValueType[]) => void;
    disabled: boolean;
    defaultValue: import("./interface").CheckboxValueType[];
    'onUpdate:value': (checkedValue: import("./interface").CheckboxValueType[]) => void;
    options: (string | number | CheckboxOptionType)[];
}, {}>;
export default _default;
