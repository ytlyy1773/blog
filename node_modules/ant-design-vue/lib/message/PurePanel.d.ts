import type { NoticeProps } from '../vc-notification/Notice';
import type { NoticeType } from './interface';
import type { VueNode } from '../_util/type';
export declare const TypeIcon: {
    info: import("vue/jsx-runtime").JSX.Element;
    success: import("vue/jsx-runtime").JSX.Element;
    error: import("vue/jsx-runtime").JSX.Element;
    warning: import("vue/jsx-runtime").JSX.Element;
    loading: import("vue/jsx-runtime").JSX.Element;
};
export interface PureContentProps {
    prefixCls: string;
    type?: NoticeType;
    icon?: VueNode;
}
export declare const PureContent: import("vue").DefineComponent<PureContentProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<PureContentProps>, {}, {}>;
export interface PurePanelProps extends Omit<NoticeProps, 'prefixCls' | 'eventKey'>, Omit<PureContentProps, 'prefixCls'> {
    prefixCls?: string;
}
/** @private Internal Component. Do not use in your production. */
declare const _default: import("vue").DefineComponent<PurePanelProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<PurePanelProps>, {
    closeIcon?: any;
}, {}>;
export default _default;
