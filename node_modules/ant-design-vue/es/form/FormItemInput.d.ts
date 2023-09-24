import type { ColProps } from '../grid/Col';
import type { ValidateStatus } from './FormItem';
import type { CustomSlotsType, VueNode } from '../_util/type';
export interface FormItemInputMiscProps {
    prefixCls: string;
    errors: VueNode[];
    hasFeedback?: boolean;
    validateStatus?: ValidateStatus;
}
export interface FormItemInputProps {
    wrapperCol?: ColProps;
    help?: VueNode;
    extra?: VueNode;
    status?: ValidateStatus;
}
declare const FormItemInput: import("vue").DefineComponent<Readonly<{
    help?: any;
    marginBottom?: any;
    errors?: any;
    prefixCls?: any;
    status?: any;
    hasFeedback?: any;
    onErrorVisibleChanged?: any;
    onDomErrorVisibleChange?: any;
    wrapperCol?: any;
    extra?: any;
}>, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    help?: any;
    marginBottom?: any;
    errors?: any;
    prefixCls?: any;
    status?: any;
    hasFeedback?: any;
    onErrorVisibleChanged?: any;
    onDomErrorVisibleChange?: any;
    wrapperCol?: any;
    extra?: any;
}>>>, {
    readonly help?: any;
    readonly marginBottom?: any;
    readonly errors?: any;
    readonly prefixCls?: any;
    readonly status?: any;
    readonly hasFeedback?: any;
    readonly onErrorVisibleChanged?: any;
    readonly onDomErrorVisibleChange?: any;
    readonly wrapperCol?: any;
    readonly extra?: any;
}, CustomSlotsType<{
    help: any;
    errors: any;
    extra: any;
    default: any;
}>>;
export default FormItemInput;
