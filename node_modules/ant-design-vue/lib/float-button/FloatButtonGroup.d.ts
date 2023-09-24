declare const FloatButtonGroup: import("vue").DefineComponent<{
    trigger: {
        type: import("vue").PropType<import("./interface").FloatButtonGroupTrigger>;
        default: import("./interface").FloatButtonGroupTrigger;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
    onOpenChange: {
        type: import("vue").PropType<(open: boolean) => void>;
        default: (open: boolean) => void;
    };
    'onUpdate:open': {
        type: import("vue").PropType<(open: boolean) => void>;
        default: (open: boolean) => void;
    };
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
    trigger: {
        type: import("vue").PropType<import("./interface").FloatButtonGroupTrigger>;
        default: import("./interface").FloatButtonGroupTrigger;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
    onOpenChange: {
        type: import("vue").PropType<(open: boolean) => void>;
        default: (open: boolean) => void;
    };
    'onUpdate:open': {
        type: import("vue").PropType<(open: boolean) => void>;
        default: (open: boolean) => void;
    };
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
    open: boolean;
    type: import("./interface").FloatButtonType;
    trigger: import("./interface").FloatButtonGroupTrigger;
    target: () => HTMLElement | Window;
    onOpenChange: (open: boolean) => void;
    'onUpdate:open': (open: boolean) => void;
    shape: import("./interface").FloatButtonShape;
    badge: import("./interface").FloatButtonBadgeProps;
}, {}>;
export default FloatButtonGroup;
