import type { ExtractPropTypes } from 'vue';
import type { Key, VueNode, CustomSlotsType } from '../_util/type';
import type { CSSProperties } from '../_util/cssinjs/hooks/useStyleRegister';
export declare const anchorLinkProps: () => {
    prefixCls: StringConstructor;
    href: StringConstructor;
    title: {
        default: VueNode | ((item: any) => VueNode);
        type: import("vue").PropType<VueNode | ((item: any) => VueNode)>;
    };
    target: StringConstructor;
    customTitleProps: {
        type: import("vue").PropType<AnchorLinkItemProps>;
        default: AnchorLinkItemProps;
    };
};
export interface AnchorLinkItemProps {
    key: Key;
    class?: string;
    style?: CSSProperties;
    href?: string;
    target?: string;
    children?: AnchorLinkItemProps[];
    title?: VueNode | ((item: AnchorLinkItemProps) => VueNode);
}
export type AnchorLinkProps = Partial<ExtractPropTypes<ReturnType<typeof anchorLinkProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    href: StringConstructor;
    title: {
        default: VueNode | ((item: any) => VueNode);
        type: import("vue").PropType<VueNode | ((item: any) => VueNode)>;
    };
    target: StringConstructor;
    customTitleProps: {
        type: import("vue").PropType<AnchorLinkItemProps>;
        default: AnchorLinkItemProps;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    href: StringConstructor;
    title: {
        default: VueNode | ((item: any) => VueNode);
        type: import("vue").PropType<VueNode | ((item: any) => VueNode)>;
    };
    target: StringConstructor;
    customTitleProps: {
        type: import("vue").PropType<AnchorLinkItemProps>;
        default: AnchorLinkItemProps;
    };
}>>, {
    title: VueNode | ((item: any) => VueNode);
    customTitleProps: AnchorLinkItemProps;
}, CustomSlotsType<{
    title: any;
    default: any;
    customTitle: any;
}>>;
export default _default;
