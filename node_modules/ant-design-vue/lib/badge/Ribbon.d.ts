import type { CustomSlotsType, LiteralUnion } from '../_util/type';
import type { PresetColorType } from '../_util/colors';
import type { PropType, ExtractPropTypes } from 'vue';
export declare const ribbonProps: () => {
    prefix: StringConstructor;
    color: {
        type: PropType<LiteralUnion<PresetColorType>>;
    };
    text: import("vue-types").VueTypeValidableDef<any>;
    placement: {
        type: PropType<"end" | "start">;
        default: string;
    };
};
export type RibbonProps = Partial<ExtractPropTypes<ReturnType<typeof ribbonProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefix: StringConstructor;
    color: {
        type: PropType<LiteralUnion<PresetColorType>>;
    };
    text: import("vue-types").VueTypeValidableDef<any>;
    placement: {
        type: PropType<"end" | "start">;
        default: string;
    };
}, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefix: StringConstructor;
    color: {
        type: PropType<LiteralUnion<PresetColorType>>;
    };
    text: import("vue-types").VueTypeValidableDef<any>;
    placement: {
        type: PropType<"end" | "start">;
        default: string;
    };
}>>, {
    placement: "end" | "start";
}, CustomSlotsType<{
    text: any;
    default: any;
}>>;
export default _default;
