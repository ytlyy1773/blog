import type { PropType } from 'vue';
import type { SizeType } from '../config-provider';
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    size: {
        type: PropType<SizeType>;
    };
    compact: {
        type: BooleanConstructor;
        default: any;
    };
}, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    prefixCls: StringConstructor;
    size: {
        type: PropType<SizeType>;
    };
    compact: {
        type: BooleanConstructor;
        default: any;
    };
}>>, {
    compact: boolean;
}, {}>;
export default _default;
