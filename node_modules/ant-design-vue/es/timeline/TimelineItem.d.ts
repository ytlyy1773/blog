import type { ExtractPropTypes } from 'vue';
import type { CustomSlotsType } from '../_util/type';
export declare const timelineItemProps: () => {
    prefixCls: StringConstructor;
    color: StringConstructor;
    dot: import("vue-types").VueTypeValidableDef<any>;
    pending: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    label: import("vue-types").VueTypeValidableDef<any>;
};
export type TimelineItemProps = Partial<ExtractPropTypes<ReturnType<typeof timelineItemProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    color: StringConstructor;
    dot: import("vue-types").VueTypeValidableDef<any>;
    pending: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    label: import("vue-types").VueTypeValidableDef<any>;
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    color: StringConstructor;
    dot: import("vue-types").VueTypeValidableDef<any>;
    pending: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    label: import("vue-types").VueTypeValidableDef<any>;
}>>, {
    position: string;
    pending: boolean;
}, CustomSlotsType<{
    dot?: any;
    label?: any;
    default?: any;
}>>;
export default _default;
