import type { ExtractPropTypes } from 'vue';
import type { CustomSlotsType } from '../_util/type';
export declare const cardMetaProps: () => {
    prefixCls: StringConstructor;
    title: {
        type: import("vue").PropType<import("../_util/type").VueNode>;
    };
    description: {
        type: import("vue").PropType<import("../_util/type").VueNode>;
    };
    avatar: {
        type: import("vue").PropType<import("../_util/type").VueNode>;
    };
};
export type CardGridProps = Partial<ExtractPropTypes<ReturnType<typeof cardMetaProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    title: {
        type: import("vue").PropType<import("../_util/type").VueNode>;
    };
    description: {
        type: import("vue").PropType<import("../_util/type").VueNode>;
    };
    avatar: {
        type: import("vue").PropType<import("../_util/type").VueNode>;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    title: {
        type: import("vue").PropType<import("../_util/type").VueNode>;
    };
    description: {
        type: import("vue").PropType<import("../_util/type").VueNode>;
    };
    avatar: {
        type: import("vue").PropType<import("../_util/type").VueNode>;
    };
}>>, {}, CustomSlotsType<{
    title: any;
    description: any;
    avatar: any;
    default: any;
}>>;
export default _default;
