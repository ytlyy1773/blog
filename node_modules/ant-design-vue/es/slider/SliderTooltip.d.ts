declare const _default: import("vue").DefineComponent<{
    title: import("vue-types").VueTypeValidableDef<any>;
    trigger: import("vue").PropType<import("../tooltip/abstractTooltipProps").TriggerType | import("../tooltip/abstractTooltipProps").TriggerType[]>;
    open: {
        type: BooleanConstructor;
        default: any;
    };
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    placement: import("vue").PropType<import("../tooltip").TooltipPlacement>;
    color: import("vue").PropType<import("../_util/type").LiteralUnion<import("../_util/colors").PresetColorType>>;
    transitionName: StringConstructor;
    overlayStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    overlayInnerStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    overlayClassName: StringConstructor;
    openClassName: StringConstructor;
    prefixCls: StringConstructor;
    mouseEnterDelay: NumberConstructor;
    mouseLeaveDelay: NumberConstructor;
    getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
    arrowPointAtCenter: {
        type: BooleanConstructor;
        default: any;
    };
    autoAdjustOverflow: {
        type: import("vue").PropType<boolean | import("../tooltip").AdjustOverflow>;
        default: boolean | import("../tooltip").AdjustOverflow;
    };
    destroyTooltipOnHide: {
        type: BooleanConstructor;
        default: any;
    };
    align: {
        type: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
        default: import("../vc-trigger/interface").AlignType;
    };
    builtinPlacements: {
        type: import("vue").PropType<import("../vc-trigger/interface").BuildInPlacements>;
        default: import("../vc-trigger/interface").BuildInPlacements;
    };
    children: ArrayConstructor;
    onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
    'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
    onOpenChange: import("vue").PropType<(vis: boolean) => void>;
    'onUpdate:open': import("vue").PropType<(vis: boolean) => void>;
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: import("vue-types").VueTypeValidableDef<any>;
    trigger: import("vue").PropType<import("../tooltip/abstractTooltipProps").TriggerType | import("../tooltip/abstractTooltipProps").TriggerType[]>;
    open: {
        type: BooleanConstructor;
        default: any;
    };
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    placement: import("vue").PropType<import("../tooltip").TooltipPlacement>;
    color: import("vue").PropType<import("../_util/type").LiteralUnion<import("../_util/colors").PresetColorType>>;
    transitionName: StringConstructor;
    overlayStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    overlayInnerStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    overlayClassName: StringConstructor;
    openClassName: StringConstructor;
    prefixCls: StringConstructor;
    mouseEnterDelay: NumberConstructor;
    mouseLeaveDelay: NumberConstructor;
    getPopupContainer: import("vue").PropType<(triggerNode: HTMLElement) => HTMLElement>;
    arrowPointAtCenter: {
        type: BooleanConstructor;
        default: any;
    };
    autoAdjustOverflow: {
        type: import("vue").PropType<boolean | import("../tooltip").AdjustOverflow>;
        default: boolean | import("../tooltip").AdjustOverflow;
    };
    destroyTooltipOnHide: {
        type: BooleanConstructor;
        default: any;
    };
    align: {
        type: import("vue").PropType<import("../vc-trigger/interface").AlignType>;
        default: import("../vc-trigger/interface").AlignType;
    };
    builtinPlacements: {
        type: import("vue").PropType<import("../vc-trigger/interface").BuildInPlacements>;
        default: import("../vc-trigger/interface").BuildInPlacements;
    };
    children: ArrayConstructor;
    onVisibleChange: import("vue").PropType<(vis: boolean) => void>;
    'onUpdate:visible': import("vue").PropType<(vis: boolean) => void>;
    onOpenChange: import("vue").PropType<(vis: boolean) => void>;
    'onUpdate:open': import("vue").PropType<(vis: boolean) => void>;
}>>, {
    visible: boolean;
    open: boolean;
    align: import("../vc-trigger/interface").AlignType;
    builtinPlacements: import("../vc-trigger/interface").BuildInPlacements;
    overlayInnerStyle: import("vue").CSSProperties;
    overlayStyle: import("vue").CSSProperties;
    destroyTooltipOnHide: boolean;
    autoAdjustOverflow: boolean | import("../tooltip").AdjustOverflow;
    arrowPointAtCenter: boolean;
}, {}>;
export default _default;
