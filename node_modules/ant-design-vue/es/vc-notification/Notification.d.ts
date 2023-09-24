import type { Key, VueNode } from '../_util/type';
import type { CSSProperties } from 'vue';
import type { NoticeProps } from './Notice';
export interface NoticeContent extends Omit<NoticeProps, 'prefixCls' | 'noticeKey' | 'onClose'> {
    prefixCls?: string;
    key?: Key;
    updateMark?: string;
    content?: string | ((arg: {
        prefixCls: string;
    }) => VueNode) | VueNode;
    onClose?: () => void;
    style?: CSSProperties;
    class?: String;
}
export type Placement = 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight';
export interface OpenConfig extends NoticeProps {
    key: Key;
    placement?: Placement;
    content?: string | (() => VueNode) | VueNode;
    duration?: number | null;
}
export type NoticeFunc = (noticeProps: NoticeContent) => void;
export type HolderReadyCallback = (div: HTMLDivElement, noticeProps: NoticeProps & {
    key: Key;
}) => void;
export interface NotificationInstance {
    notice: NoticeFunc;
    removeNotice: (key: Key) => void;
    destroy: () => void;
    component: Notification;
}
export interface NotificationProps {
    prefixCls?: string;
    transitionName?: string;
    animation?: string | object;
    maxCount?: number;
    closeIcon?: any;
    hashId?: string;
}
declare const Notification: import("vue").DefineComponent<NotificationProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<NotificationProps>, {
    closeIcon?: any;
}, {}>;
export default Notification;
