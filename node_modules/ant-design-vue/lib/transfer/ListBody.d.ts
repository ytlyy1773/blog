import type { ExtractPropTypes } from 'vue';
export declare const transferListBodyProps: {
    prefixCls: StringConstructor;
    filteredRenderItems: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    selectedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    showRemove: {
        type: BooleanConstructor;
        default: boolean;
    };
    pagination: import("vue-types").VueTypeValidableDef<any>;
    onItemSelect: FunctionConstructor;
    onScroll: FunctionConstructor;
    onItemRemove: FunctionConstructor;
};
export type TransferListBodyProps = Partial<ExtractPropTypes<typeof transferListBodyProps>>;
declare const ListBody: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    filteredRenderItems: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    selectedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    showRemove: {
        type: BooleanConstructor;
        default: boolean;
    };
    pagination: import("vue-types").VueTypeValidableDef<any>;
    onItemSelect: FunctionConstructor;
    onScroll: FunctionConstructor;
    onItemRemove: FunctionConstructor;
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "itemSelect" | "itemRemove")[], "scroll" | "itemSelect" | "itemRemove", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    filteredRenderItems: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    } & {
        default: () => unknown[];
    };
    selectedKeys: import("vue-types").VueTypeValidableDef<unknown[]> & {
        default: () => unknown[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    showRemove: {
        type: BooleanConstructor;
        default: boolean;
    };
    pagination: import("vue-types").VueTypeValidableDef<any>;
    onItemSelect: FunctionConstructor;
    onScroll: FunctionConstructor;
    onItemRemove: FunctionConstructor;
}>> & {
    onScroll?: (...args: any[]) => any;
    onItemSelect?: (...args: any[]) => any;
    onItemRemove?: (...args: any[]) => any;
}, {
    disabled: boolean;
    selectedKeys: unknown[];
    showRemove: boolean;
    filteredRenderItems: unknown[];
}, {}>;
export default ListBody;
