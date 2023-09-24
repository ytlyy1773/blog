import type { ExtractPropTypes, HTMLAttributes, ComponentPublicInstance } from 'vue';
import FormItem from './FormItem';
import type { Options } from 'scroll-into-view-if-needed';
import type { InternalNamePath, NamePath, ValidateErrorEntity, ValidateOptions, ValidateMessages, FormLabelAlign } from './interface';
import type { SizeType } from '../config-provider';
import useForm from './useForm';
export type RequiredMark = boolean | 'optional';
export type FormLayout = 'horizontal' | 'inline' | 'vertical';
export declare const formProps: () => {
    layout: import("vue-types").VueTypeDef<string>;
    labelCol: {
        type: import("vue").PropType<Partial<ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            sm: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            md: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            lg: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xl: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxl: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & HTMLAttributes>;
        default: Partial<ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            sm: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            md: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            lg: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xl: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxl: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & HTMLAttributes;
    };
    wrapperCol: {
        type: import("vue").PropType<Partial<ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            sm: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            md: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            lg: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xl: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxl: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & HTMLAttributes>;
        default: Partial<ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            sm: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            md: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            lg: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xl: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxl: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & HTMLAttributes;
    };
    colon: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelAlign: {
        type: import("vue").PropType<FormLabelAlign>;
        default: FormLabelAlign;
    };
    labelWrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixCls: StringConstructor;
    requiredMark: {
        type: import("vue").PropType<"" | RequiredMark>;
        default: "" | RequiredMark;
    };
    /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
    hideRequiredMark: {
        type: BooleanConstructor;
        default: boolean;
    };
    model: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    rules: {
        type: import("vue").PropType<{
            [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
        }>;
        default: {
            [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
        };
    };
    validateMessages: {
        type: import("vue").PropType<ValidateMessages>;
        default: ValidateMessages;
    };
    validateOnRuleChange: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollToFirstError: {
        default: boolean | Options<any>;
        type: import("vue").PropType<boolean | Options<any>>;
    };
    onSubmit: {
        type: import("vue").PropType<(e: Event) => void>;
        default: (e: Event) => void;
    };
    name: StringConstructor;
    validateTrigger: {
        type: import("vue").PropType<string | string[]>;
        default: string | string[];
    };
    size: {
        type: import("vue").PropType<SizeType>;
        default: SizeType;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    onValuesChange: {
        type: import("vue").PropType<(changedValues: any, values: any) => void>;
        default: (changedValues: any, values: any) => void;
    };
    onFieldsChange: {
        type: import("vue").PropType<(changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void>;
        default: (changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void;
    };
    onFinish: {
        type: import("vue").PropType<(values: any) => void>;
        default: (values: any) => void;
    };
    onFinishFailed: {
        type: import("vue").PropType<(errorInfo: ValidateErrorEntity<any>) => void>;
        default: (errorInfo: ValidateErrorEntity<any>) => void;
    };
    onValidate: {
        type: import("vue").PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
        default: (name: string | number | string[] | number[], status: boolean, errors: string[]) => void;
    };
};
export type FormProps = Partial<ExtractPropTypes<ReturnType<typeof formProps>>>;
export type FormExpose = {
    resetFields: (name?: NamePath) => void;
    clearValidate: (name?: NamePath) => void;
    validateFields: (nameList?: NamePath[] | string, options?: ValidateOptions) => Promise<{
        [key: string]: any;
    }>;
    getFieldsValue: (nameList?: InternalNamePath[] | true) => {
        [key: string]: any;
    };
    validate: (nameList?: NamePath[] | string, options?: ValidateOptions) => Promise<{
        [key: string]: any;
    }>;
    scrollToField: (name: NamePath, options?: {}) => void;
};
export type FormInstance = ComponentPublicInstance<FormProps, FormExpose>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            onSubmit?: (e: Event) => void;
            size?: SizeType;
            disabled?: boolean;
            validateTrigger?: string | string[];
            onFinish?: (values: any) => void;
            labelCol?: Partial<ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                sm: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                md: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                lg: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                xl: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                xxl: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & HTMLAttributes;
            labelAlign?: FormLabelAlign;
            colon?: boolean;
            requiredMark?: "" | RequiredMark;
            labelWrap?: boolean;
            wrapperCol?: Partial<ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                sm: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                md: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                lg: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                xl: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                xxl: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & HTMLAttributes;
            rules?: {
                [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
            };
            onValidate?: (name: string | number | string[] | number[], status: boolean, errors: string[]) => void;
            onValuesChange?: (changedValues: any, values: any) => void;
            onFieldsChange?: (changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void;
            onFinishFailed?: (errorInfo: ValidateErrorEntity<any>) => void;
            hideRequiredMark?: boolean;
            model?: {
                [key: string]: any;
            };
            validateMessages?: ValidateMessages;
            validateOnRuleChange?: boolean;
            scrollToFirstError?: boolean | Options<any>;
            style?: unknown;
            ref?: import("vue").VNodeRef;
            key?: string | number | symbol;
            ref_for?: boolean;
            ref_key?: string;
            onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[];
            readonly name?: string;
            class?: unknown;
            tabindex?: string | number;
            readonly layout?: string;
            readonly prefixCls?: string;
            role?: string;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any>;
        }>;
        $root: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            layout: import("vue-types").VueTypeDef<string>;
            labelCol: {
                type: import("vue").PropType<Partial<ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    sm: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    md: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    lg: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    xl: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    xxl: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & HTMLAttributes>;
                default: Partial<ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    sm: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    md: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    lg: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    xl: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    xxl: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & HTMLAttributes;
            };
            wrapperCol: {
                type: import("vue").PropType<Partial<ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    sm: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    md: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    lg: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    xl: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    xxl: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & HTMLAttributes>;
                default: Partial<ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    sm: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    md: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    lg: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    xl: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    xxl: {
                        type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                        default: string | number | import("../grid/Col").ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & HTMLAttributes;
            };
            colon: {
                type: BooleanConstructor;
                default: boolean;
            };
            labelAlign: {
                type: import("vue").PropType<FormLabelAlign>;
                default: FormLabelAlign;
            };
            labelWrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            prefixCls: StringConstructor;
            requiredMark: {
                type: import("vue").PropType<"" | RequiredMark>;
                default: "" | RequiredMark;
            };
            /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
            hideRequiredMark: {
                type: BooleanConstructor;
                default: boolean;
            };
            model: import("vue-types").VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            rules: {
                type: import("vue").PropType<{
                    [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
                }>;
                default: {
                    [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
                };
            };
            validateMessages: {
                type: import("vue").PropType<ValidateMessages>;
                default: ValidateMessages;
            };
            validateOnRuleChange: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToFirstError: {
                default: boolean | Options<any>;
                type: import("vue").PropType<boolean | Options<any>>;
            };
            onSubmit: {
                type: import("vue").PropType<(e: Event) => void>;
                default: (e: Event) => void;
            };
            name: StringConstructor;
            validateTrigger: {
                type: import("vue").PropType<string | string[]>;
                default: string | string[];
            };
            size: {
                type: import("vue").PropType<SizeType>;
                default: SizeType;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            onValuesChange: {
                type: import("vue").PropType<(changedValues: any, values: any) => void>;
                default: (changedValues: any, values: any) => void;
            };
            onFieldsChange: {
                type: import("vue").PropType<(changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void>;
                default: (changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void;
            };
            onFinish: {
                type: import("vue").PropType<(values: any) => void>;
                default: (values: any) => void;
            };
            onFinishFailed: {
                type: import("vue").PropType<(errorInfo: ValidateErrorEntity<any>) => void>;
                default: (errorInfo: ValidateErrorEntity<any>) => void;
            };
            onValidate: {
                type: import("vue").PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                default: (name: string | number | string[] | number[], status: boolean, errors: string[]) => void;
            };
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            onSubmit: (e: Event) => void;
            size: SizeType;
            disabled: boolean;
            validateTrigger: string | string[];
            onFinish: (values: any) => void;
            labelCol: Partial<ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                sm: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                md: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                lg: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                xl: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                xxl: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & HTMLAttributes;
            labelAlign: FormLabelAlign;
            colon: boolean;
            requiredMark: "" | RequiredMark;
            labelWrap: boolean;
            wrapperCol: Partial<ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                sm: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                md: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                lg: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                xl: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                xxl: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & HTMLAttributes;
            rules: {
                [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
            };
            onValidate: (name: string | number | string[] | number[], status: boolean, errors: string[]) => void;
            onValuesChange: (changedValues: any, values: any) => void;
            onFieldsChange: (changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void;
            onFinishFailed: (errorInfo: ValidateErrorEntity<any>) => void;
            hideRequiredMark: boolean;
            model: {
                [key: string]: any;
            };
            validateMessages: ValidateMessages;
            validateOnRuleChange: boolean;
            scrollToFirstError: boolean | Options<any>;
        }, {}, string, {}> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<ExtractPropTypes<{
        layout: import("vue-types").VueTypeDef<string>;
        labelCol: {
            type: import("vue").PropType<Partial<ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                sm: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                md: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                lg: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                xl: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                xxl: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & HTMLAttributes>;
            default: Partial<ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                sm: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                md: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                lg: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                xl: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                xxl: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & HTMLAttributes;
        };
        wrapperCol: {
            type: import("vue").PropType<Partial<ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                sm: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                md: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                lg: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                xl: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                xxl: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & HTMLAttributes>;
            default: Partial<ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                sm: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                md: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                lg: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                xl: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                xxl: {
                    type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                    default: string | number | import("../grid/Col").ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & HTMLAttributes;
        };
        colon: {
            type: BooleanConstructor;
            default: boolean;
        };
        labelAlign: {
            type: import("vue").PropType<FormLabelAlign>;
            default: FormLabelAlign;
        };
        labelWrap: {
            type: BooleanConstructor;
            default: boolean;
        };
        prefixCls: StringConstructor;
        requiredMark: {
            type: import("vue").PropType<"" | RequiredMark>;
            default: "" | RequiredMark;
        };
        /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
        hideRequiredMark: {
            type: BooleanConstructor;
            default: boolean;
        };
        model: import("vue-types").VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        rules: {
            type: import("vue").PropType<{
                [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
            }>;
            default: {
                [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
            };
        };
        validateMessages: {
            type: import("vue").PropType<ValidateMessages>;
            default: ValidateMessages;
        };
        validateOnRuleChange: {
            type: BooleanConstructor;
            default: boolean;
        };
        scrollToFirstError: {
            default: boolean | Options<any>;
            type: import("vue").PropType<boolean | Options<any>>;
        };
        onSubmit: {
            type: import("vue").PropType<(e: Event) => void>;
            default: (e: Event) => void;
        };
        name: StringConstructor;
        validateTrigger: {
            type: import("vue").PropType<string | string[]>;
            default: string | string[];
        };
        size: {
            type: import("vue").PropType<SizeType>;
            default: SizeType;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        onValuesChange: {
            type: import("vue").PropType<(changedValues: any, values: any) => void>;
            default: (changedValues: any, values: any) => void;
        };
        onFieldsChange: {
            type: import("vue").PropType<(changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void>;
            default: (changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void;
        };
        onFinish: {
            type: import("vue").PropType<(values: any) => void>;
            default: (values: any) => void;
        };
        onFinishFailed: {
            type: import("vue").PropType<(errorInfo: ValidateErrorEntity<any>) => void>;
            default: (errorInfo: ValidateErrorEntity<any>) => void;
        };
        onValidate: {
            type: import("vue").PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
            default: (name: string | number | string[] | number[], status: boolean, errors: string[]) => void;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    layout: import("vue-types").VueTypeDef<string>;
    labelCol: {
        type: import("vue").PropType<Partial<ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            sm: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            md: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            lg: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xl: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxl: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & HTMLAttributes>;
        default: Partial<ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            sm: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            md: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            lg: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xl: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxl: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & HTMLAttributes;
    };
    wrapperCol: {
        type: import("vue").PropType<Partial<ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            sm: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            md: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            lg: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xl: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxl: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & HTMLAttributes>;
        default: Partial<ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            sm: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            md: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            lg: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xl: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            xxl: {
                type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
                default: string | number | import("../grid/Col").ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & HTMLAttributes;
    };
    colon: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelAlign: {
        type: import("vue").PropType<FormLabelAlign>;
        default: FormLabelAlign;
    };
    labelWrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixCls: StringConstructor;
    requiredMark: {
        type: import("vue").PropType<"" | RequiredMark>;
        default: "" | RequiredMark;
    };
    /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
    hideRequiredMark: {
        type: BooleanConstructor;
        default: boolean;
    };
    model: import("vue-types").VueTypeValidableDef<{
        [key: string]: any;
    }> & {
        default: () => {
            [key: string]: any;
        };
    };
    rules: {
        type: import("vue").PropType<{
            [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
        }>;
        default: {
            [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
        };
    };
    validateMessages: {
        type: import("vue").PropType<ValidateMessages>;
        default: ValidateMessages;
    };
    validateOnRuleChange: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollToFirstError: {
        default: boolean | Options<any>;
        type: import("vue").PropType<boolean | Options<any>>;
    };
    onSubmit: {
        type: import("vue").PropType<(e: Event) => void>;
        default: (e: Event) => void;
    };
    name: StringConstructor;
    validateTrigger: {
        type: import("vue").PropType<string | string[]>;
        default: string | string[];
    };
    size: {
        type: import("vue").PropType<SizeType>;
        default: SizeType;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    onValuesChange: {
        type: import("vue").PropType<(changedValues: any, values: any) => void>;
        default: (changedValues: any, values: any) => void;
    };
    onFieldsChange: {
        type: import("vue").PropType<(changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void>;
        default: (changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void;
    };
    onFinish: {
        type: import("vue").PropType<(values: any) => void>;
        default: (values: any) => void;
    };
    onFinishFailed: {
        type: import("vue").PropType<(errorInfo: ValidateErrorEntity<any>) => void>;
        default: (errorInfo: ValidateErrorEntity<any>) => void;
    };
    onValidate: {
        type: import("vue").PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
        default: (name: string | number | string[] | number[], status: boolean, errors: string[]) => void;
    };
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    onSubmit: (e: Event) => void;
    size: SizeType;
    disabled: boolean;
    validateTrigger: string | string[];
    onFinish: (values: any) => void;
    labelCol: Partial<ExtractPropTypes<{
        span: (StringConstructor | NumberConstructor)[];
        order: (StringConstructor | NumberConstructor)[];
        offset: (StringConstructor | NumberConstructor)[];
        push: (StringConstructor | NumberConstructor)[];
        pull: (StringConstructor | NumberConstructor)[];
        xs: {
            type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
            default: string | number | import("../grid/Col").ColSize;
        };
        sm: {
            type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
            default: string | number | import("../grid/Col").ColSize;
        };
        md: {
            type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
            default: string | number | import("../grid/Col").ColSize;
        };
        lg: {
            type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
            default: string | number | import("../grid/Col").ColSize;
        };
        xl: {
            type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
            default: string | number | import("../grid/Col").ColSize;
        };
        xxl: {
            type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
            default: string | number | import("../grid/Col").ColSize;
        };
        prefixCls: StringConstructor;
        flex: (StringConstructor | NumberConstructor)[];
    }>> & HTMLAttributes;
    labelAlign: FormLabelAlign;
    colon: boolean;
    requiredMark: "" | RequiredMark;
    labelWrap: boolean;
    wrapperCol: Partial<ExtractPropTypes<{
        span: (StringConstructor | NumberConstructor)[];
        order: (StringConstructor | NumberConstructor)[];
        offset: (StringConstructor | NumberConstructor)[];
        push: (StringConstructor | NumberConstructor)[];
        pull: (StringConstructor | NumberConstructor)[];
        xs: {
            type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
            default: string | number | import("../grid/Col").ColSize;
        };
        sm: {
            type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
            default: string | number | import("../grid/Col").ColSize;
        };
        md: {
            type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
            default: string | number | import("../grid/Col").ColSize;
        };
        lg: {
            type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
            default: string | number | import("../grid/Col").ColSize;
        };
        xl: {
            type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
            default: string | number | import("../grid/Col").ColSize;
        };
        xxl: {
            type: import("vue").PropType<string | number | import("../grid/Col").ColSize>;
            default: string | number | import("../grid/Col").ColSize;
        };
        prefixCls: StringConstructor;
        flex: (StringConstructor | NumberConstructor)[];
    }>> & HTMLAttributes;
    rules: {
        [k: string]: import("./interface").RuleObject | import("./interface").RuleObject[];
    };
    onValidate: (name: string | number | string[] | number[], status: boolean, errors: string[]) => void;
    onValuesChange: (changedValues: any, values: any) => void;
    onFieldsChange: (changedFields: import("./interface").FieldData[], allFields: import("./interface").FieldData[]) => void;
    onFinishFailed: (errorInfo: ValidateErrorEntity<any>) => void;
    hideRequiredMark: boolean;
    model: {
        [key: string]: any;
    };
    validateMessages: ValidateMessages;
    validateOnRuleChange: boolean;
    scrollToFirstError: boolean | Options<any>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    readonly Item: typeof FormItem;
    readonly useForm: typeof useForm;
};
export default _default;
