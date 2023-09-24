export declare const floatButtonPrefixCls = "float-btn";
declare const FloatButton: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    description: import("vue-types").VueTypeValidableDef<any>;
    type: {
        type: import("vue").PropType<import("./interface").FloatButtonType>;
        default: import("./interface").FloatButtonType;
    };
    shape: {
        type: import("vue").PropType<import("./interface").FloatButtonShape>;
        default: import("./interface").FloatButtonShape;
    };
    tooltip: import("vue-types").VueTypeValidableDef<any>;
    href: StringConstructor;
    target: {
        type: import("vue").PropType<() => HTMLElement | Window>;
        default: () => HTMLElement | Window;
    };
    badge: {
        type: import("vue").PropType<import("./interface").FloatButtonBadgeProps>;
        default: import("./interface").FloatButtonBadgeProps;
    };
    onClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        default: import("../_util/EventInterface").MouseEventHandler;
    };
}, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    description: import("vue-types").VueTypeValidableDef<any>;
    type: {
        type: import("vue").PropType<import("./interface").FloatButtonType>;
        default: import("./interface").FloatButtonType;
    };
    shape: {
        type: import("vue").PropType<import("./interface").FloatButtonShape>;
        default: import("./interface").FloatButtonShape;
    };
    tooltip: import("vue-types").VueTypeValidableDef<any>;
    href: StringConstructor;
    target: {
        type: import("vue").PropType<() => HTMLElement | Window>;
        default: () => HTMLElement | Window;
    };
    badge: {
        type: import("vue").PropType<import("./interface").FloatButtonBadgeProps>;
        default: import("./interface").FloatButtonBadgeProps;
    };
    onClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        default: import("../_util/EventInterface").MouseEventHandler;
    };
}>>, {
    onClick: import("../_util/EventInterface").MouseEventHandler;
    type: import("./interface").FloatButtonType;
    target: () => HTMLElement | Window;
    shape: import("./interface").FloatButtonShape;
    badge: import("./interface").FloatButtonBadgeProps;
}, {}>;
export default FloatButton;
