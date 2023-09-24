import type { PropType, ExtractPropTypes, CSSProperties } from 'vue';
export type CollapseType = 'clickTrigger' | 'responsive';
export declare const siderProps: () => {
    prefixCls: StringConstructor;
    collapsible: {
        type: BooleanConstructor;
        default: any;
    };
    collapsed: {
        type: BooleanConstructor;
        default: any;
    };
    defaultCollapsed: {
        type: BooleanConstructor;
        default: any;
    };
    reverseArrow: {
        type: BooleanConstructor;
        default: any;
    };
    zeroWidthTriggerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    trigger: import("vue-types").VueTypeValidableDef<any>;
    width: import("vue-types").VueTypeDef<string | number>;
    collapsedWidth: import("vue-types").VueTypeDef<string | number>;
    breakpoint: import("vue-types").VueTypeDef<string>;
    theme: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    onBreakpoint: PropType<(broken: boolean) => void>;
    onCollapse: PropType<(collapsed: boolean, type: CollapseType) => void>;
};
export type SiderProps = Partial<ExtractPropTypes<ReturnType<typeof siderProps>>>;
export interface SiderContextProps {
    sCollapsed?: boolean;
    collapsedWidth?: string | number;
}
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    collapsible: {
        type: BooleanConstructor;
        default: any;
    };
    collapsed: {
        type: BooleanConstructor;
        default: any;
    };
    defaultCollapsed: {
        type: BooleanConstructor;
        default: any;
    };
    reverseArrow: {
        type: BooleanConstructor;
        default: any;
    };
    zeroWidthTriggerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    trigger: import("vue-types").VueTypeValidableDef<any>;
    width: import("vue-types").VueTypeDef<string | number>;
    collapsedWidth: import("vue-types").VueTypeDef<string | number>;
    breakpoint: import("vue-types").VueTypeDef<string>;
    theme: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    onBreakpoint: PropType<(broken: boolean) => void>;
    onCollapse: PropType<(collapsed: boolean, type: CollapseType) => void>;
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("collapse" | "breakpoint" | "update:collapsed")[], "collapse" | "breakpoint" | "update:collapsed", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    collapsible: {
        type: BooleanConstructor;
        default: any;
    };
    collapsed: {
        type: BooleanConstructor;
        default: any;
    };
    defaultCollapsed: {
        type: BooleanConstructor;
        default: any;
    };
    reverseArrow: {
        type: BooleanConstructor;
        default: any;
    };
    zeroWidthTriggerStyle: {
        type: PropType<CSSProperties>;
        default: CSSProperties;
    };
    trigger: import("vue-types").VueTypeValidableDef<any>;
    width: import("vue-types").VueTypeDef<string | number>;
    collapsedWidth: import("vue-types").VueTypeDef<string | number>;
    breakpoint: import("vue-types").VueTypeDef<string>;
    theme: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    onBreakpoint: PropType<(broken: boolean) => void>;
    onCollapse: PropType<(collapsed: boolean, type: CollapseType) => void>;
}>> & {
    onBreakpoint?: (...args: any[]) => any;
    onCollapse?: (...args: any[]) => any;
    "onUpdate:collapsed"?: (...args: any[]) => any;
}, {
    theme: string;
    collapsible: boolean;
    collapsed: boolean;
    defaultCollapsed: boolean;
    reverseArrow: boolean;
    zeroWidthTriggerStyle: CSSProperties;
}, {}>;
export default _default;
