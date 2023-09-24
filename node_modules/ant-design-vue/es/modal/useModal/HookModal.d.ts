import type { PropType } from 'vue';
import type { ModalFuncProps } from '../Modal';
export interface HookModalProps {
    afterClose: () => void;
    config: ModalFuncProps;
    destroyAction: (...args: any[]) => void;
    open: boolean;
}
export interface HookModalRef {
    destroy: () => void;
    update: (config: ModalFuncProps) => void;
}
declare const _default: import("vue").DefineComponent<{
    config: PropType<ModalFuncProps>;
    afterClose: PropType<() => void>;
    destroyAction: PropType<(e: any) => void>;
    open: BooleanConstructor;
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: PropType<ModalFuncProps>;
    afterClose: PropType<() => void>;
    destroyAction: PropType<(e: any) => void>;
    open: BooleanConstructor;
}>>, {
    open: boolean;
}, {}>;
export default _default;
