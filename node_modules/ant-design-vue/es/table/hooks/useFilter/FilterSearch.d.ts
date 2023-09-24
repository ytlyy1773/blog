import type { FilterSearchType, TableLocale } from '../../interface';
declare const _default: import("vue").DefineComponent<{
    value: {
        type: import("vue").PropType<string>;
        default: string;
    };
    onChange: {
        type: import("vue").PropType<(e: InputEvent) => void>;
        default: (e: InputEvent) => void;
    };
    filterSearch: {
        type: import("vue").PropType<FilterSearchType<Record<string, any>>>;
        default: FilterSearchType<Record<string, any>>;
    };
    tablePrefixCls: {
        type: import("vue").PropType<string>;
        default: string;
    };
    locale: {
        type: import("vue").PropType<TableLocale>;
        default: TableLocale;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: import("vue").PropType<string>;
        default: string;
    };
    onChange: {
        type: import("vue").PropType<(e: InputEvent) => void>;
        default: (e: InputEvent) => void;
    };
    filterSearch: {
        type: import("vue").PropType<FilterSearchType<Record<string, any>>>;
        default: FilterSearchType<Record<string, any>>;
    };
    tablePrefixCls: {
        type: import("vue").PropType<string>;
        default: string;
    };
    locale: {
        type: import("vue").PropType<TableLocale>;
        default: TableLocale;
    };
}>>, {
    value: string;
    onChange: (e: InputEvent) => void;
    locale: TableLocale;
    filterSearch: FilterSearchType<Record<string, any>>;
    tablePrefixCls: string;
}, {}>;
export default _default;
