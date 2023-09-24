/** @private Test usage only */
export declare function getOpenCount(): number;
export type GetContainer = string | HTMLElement | (() => HTMLElement);
declare const _default: import("vue").DefineComponent<{
    wrapperClassName: StringConstructor;
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    getContainer: import("vue-types").VueTypeValidableDef<any>;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    autoLock: {
        type: BooleanConstructor;
        default: boolean;
    };
    didUpdate: FunctionConstructor;
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    wrapperClassName: StringConstructor;
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    getContainer: import("vue-types").VueTypeValidableDef<any>;
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    autoLock: {
        type: BooleanConstructor;
        default: boolean;
    };
    didUpdate: FunctionConstructor;
}>>, {
    visible: boolean;
    forceRender: boolean;
    autoLock: boolean;
}, {}>;
export default _default;
