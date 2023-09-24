import type { App, PropType, ExtractPropTypes } from 'vue';
import type { KeyboardEventHandler } from '../_util/EventInterface';
import type { CustomSlotsType } from '../_util/type';
interface MentionsConfig {
    prefix?: string | string[];
    split?: string;
}
export interface MentionsOptionProps {
    value: string;
    disabled?: boolean;
    label?: string | number | ((o: MentionsOptionProps) => any);
    [key: string]: any;
}
interface MentionsEntity {
    prefix: string;
    value: string;
}
export type MentionPlacement = 'top' | 'bottom';
export declare const mentionsProps: () => {
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onSelect: {
        type: PropType<(option: MentionsOptionProps, prefix: string) => void>;
    };
    onChange: {
        type: PropType<(text: string) => void>;
    };
    onPressenter: {
        type: PropType<KeyboardEventHandler>;
    };
    'onUpdate:value': {
        type: PropType<(text: string) => void>;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    defaultValue: StringConstructor;
    id: StringConstructor;
    status: PropType<"" | "error" | "warning">;
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    prefix: import("vue-types").VueTypeDef<string | string[]>;
    prefixCls: StringConstructor;
    value: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    split: StringConstructor;
    transitionName: StringConstructor;
    placement: import("vue-types").VueTypeDef<"top" | "bottom">;
    character: import("vue-types").VueTypeValidableDef<any>;
    characterRender: FunctionConstructor;
    filterOption: {
        type: PropType<false | typeof import("../vc-mentions/src/util").filterOption>;
    };
    validateSearch: FunctionConstructor;
    getPopupContainer: {
        type: PropType<() => HTMLElement>;
    };
    options: {
        type: PropType<import("../vc-mentions/src/Option").OptionProps[]>;
        default: import("../vc-mentions/src/Option").OptionProps[];
    };
    rows: (StringConstructor | NumberConstructor)[];
    direction: {
        type: PropType<import("../vc-mentions/src/mentionsProps").Direction>;
    };
};
export type MentionsProps = Partial<ExtractPropTypes<ReturnType<typeof mentionsProps>>>;
export declare const MentionsOption: import("vue").DefineComponent<{
    label: {
        default: import("../_util/type").VueNode | ((o: import("../vc-mentions/src/Option").BaseOptionsProps) => import("../_util/type").VueNode);
        type: PropType<import("../_util/type").VueNode | ((o: import("../vc-mentions/src/Option").BaseOptionsProps) => import("../_util/type").VueNode)>;
    };
    value: StringConstructor;
    disabled: BooleanConstructor;
    payload: {
        type: PropType<Record<string, any>>;
        default: Record<string, any>;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    label: {
        default: import("../_util/type").VueNode | ((o: import("../vc-mentions/src/Option").BaseOptionsProps) => import("../_util/type").VueNode);
        type: PropType<import("../_util/type").VueNode | ((o: import("../vc-mentions/src/Option").BaseOptionsProps) => import("../_util/type").VueNode)>;
    };
    value: StringConstructor;
    disabled: BooleanConstructor;
    payload: {
        type: PropType<Record<string, any>>;
        default: Record<string, any>;
    };
}>>, {
    label: import("../_util/type").VueNode | ((o: import("../vc-mentions/src/Option").BaseOptionsProps) => import("../_util/type").VueNode);
    disabled: boolean;
    payload: Record<string, any>;
}, {}>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            disabled?: boolean;
            autofocus?: boolean;
            options?: import("../vc-mentions/src/Option").OptionProps[];
            loading?: boolean;
            style?: unknown;
            readonly value?: string;
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
            class?: unknown;
            tabindex?: string | number;
            readonly onFocus?: (e: FocusEvent) => void;
            readonly onBlur?: (e: FocusEvent) => void;
            readonly onChange?: (text: string) => void;
            readonly onSelect?: (option: MentionsOptionProps, prefix: string) => void;
            readonly split?: string;
            readonly direction?: import("../vc-mentions/src/mentionsProps").Direction;
            readonly rows?: string | number;
            readonly prefixCls?: string;
            readonly getPopupContainer?: () => HTMLElement;
            role?: string;
            readonly id?: string;
            readonly status?: "" | "error" | "warning";
            readonly defaultValue?: string;
            readonly 'onUpdate:value'?: (text: string) => void;
            readonly transitionName?: string;
            readonly placement?: "top" | "bottom";
            readonly prefix?: string | string[];
            readonly notFoundContent?: any;
            readonly filterOption?: false | typeof import("../vc-mentions/src/util").filterOption;
            readonly character?: any;
            readonly characterRender?: Function;
            readonly validateSearch?: Function;
            readonly onPressenter?: KeyboardEventHandler;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            notFoundContent?: any;
            option?: any;
            default?: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            loading: {
                type: BooleanConstructor;
                default: any;
            };
            onFocus: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: PropType<(e: FocusEvent) => void>;
            };
            onSelect: {
                type: PropType<(option: MentionsOptionProps, prefix: string) => void>;
            };
            onChange: {
                type: PropType<(text: string) => void>;
            };
            onPressenter: {
                type: PropType<KeyboardEventHandler>;
            };
            'onUpdate:value': {
                type: PropType<(text: string) => void>;
            };
            notFoundContent: import("vue-types").VueTypeValidableDef<any>;
            defaultValue: StringConstructor;
            id: StringConstructor;
            status: PropType<"" | "error" | "warning">;
            autofocus: {
                type: BooleanConstructor;
                default: any;
            };
            prefix: import("vue-types").VueTypeDef<string | string[]>;
            prefixCls: StringConstructor;
            value: StringConstructor;
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            split: StringConstructor;
            transitionName: StringConstructor;
            placement: import("vue-types").VueTypeDef<"top" | "bottom">;
            character: import("vue-types").VueTypeValidableDef<any>;
            characterRender: FunctionConstructor;
            filterOption: {
                type: PropType<false | typeof import("../vc-mentions/src/util").filterOption>;
            };
            validateSearch: FunctionConstructor;
            getPopupContainer: {
                type: PropType<() => HTMLElement>;
            };
            options: {
                type: PropType<import("../vc-mentions/src/Option").OptionProps[]>;
                default: import("../vc-mentions/src/Option").OptionProps[];
            };
            rows: (StringConstructor | NumberConstructor)[];
            direction: {
                type: PropType<import("../vc-mentions/src/mentionsProps").Direction>;
            };
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            disabled: boolean;
            autofocus: boolean;
            options: import("../vc-mentions/src/Option").OptionProps[];
            loading: boolean;
        }, {}, string, CustomSlotsType<{
            notFoundContent?: any;
            option?: any;
            default?: any;
        }>> & {
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
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<ExtractPropTypes<{
        loading: {
            type: BooleanConstructor;
            default: any;
        };
        onFocus: {
            type: PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: PropType<(e: FocusEvent) => void>;
        };
        onSelect: {
            type: PropType<(option: MentionsOptionProps, prefix: string) => void>;
        };
        onChange: {
            type: PropType<(text: string) => void>;
        };
        onPressenter: {
            type: PropType<KeyboardEventHandler>;
        };
        'onUpdate:value': {
            type: PropType<(text: string) => void>;
        };
        notFoundContent: import("vue-types").VueTypeValidableDef<any>;
        defaultValue: StringConstructor;
        id: StringConstructor;
        status: PropType<"" | "error" | "warning">;
        autofocus: {
            type: BooleanConstructor;
            default: any;
        };
        prefix: import("vue-types").VueTypeDef<string | string[]>;
        prefixCls: StringConstructor;
        value: StringConstructor;
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        split: StringConstructor;
        transitionName: StringConstructor;
        placement: import("vue-types").VueTypeDef<"top" | "bottom">;
        character: import("vue-types").VueTypeValidableDef<any>;
        characterRender: FunctionConstructor;
        filterOption: {
            type: PropType<false | typeof import("../vc-mentions/src/util").filterOption>;
        };
        validateSearch: FunctionConstructor;
        getPopupContainer: {
            type: PropType<() => HTMLElement>;
        };
        options: {
            type: PropType<import("../vc-mentions/src/Option").OptionProps[]>;
            default: import("../vc-mentions/src/Option").OptionProps[];
        };
        rows: (StringConstructor | NumberConstructor)[];
        direction: {
            type: PropType<import("../vc-mentions/src/mentionsProps").Direction>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    onFocus: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: PropType<(e: FocusEvent) => void>;
    };
    onSelect: {
        type: PropType<(option: MentionsOptionProps, prefix: string) => void>;
    };
    onChange: {
        type: PropType<(text: string) => void>;
    };
    onPressenter: {
        type: PropType<KeyboardEventHandler>;
    };
    'onUpdate:value': {
        type: PropType<(text: string) => void>;
    };
    notFoundContent: import("vue-types").VueTypeValidableDef<any>;
    defaultValue: StringConstructor;
    id: StringConstructor;
    status: PropType<"" | "error" | "warning">;
    autofocus: {
        type: BooleanConstructor;
        default: any;
    };
    prefix: import("vue-types").VueTypeDef<string | string[]>;
    prefixCls: StringConstructor;
    value: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    split: StringConstructor;
    transitionName: StringConstructor;
    placement: import("vue-types").VueTypeDef<"top" | "bottom">;
    character: import("vue-types").VueTypeValidableDef<any>;
    characterRender: FunctionConstructor;
    filterOption: {
        type: PropType<false | typeof import("../vc-mentions/src/util").filterOption>;
    };
    validateSearch: FunctionConstructor;
    getPopupContainer: {
        type: PropType<() => HTMLElement>;
    };
    options: {
        type: PropType<import("../vc-mentions/src/Option").OptionProps[]>;
        default: import("../vc-mentions/src/Option").OptionProps[];
    };
    rows: (StringConstructor | NumberConstructor)[];
    direction: {
        type: PropType<import("../vc-mentions/src/mentionsProps").Direction>;
    };
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    disabled: boolean;
    autofocus: boolean;
    options: import("../vc-mentions/src/Option").OptionProps[];
    loading: boolean;
}, {}, string, CustomSlotsType<{
    notFoundContent?: any;
    option?: any;
    default?: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Option: import("vue").DefineComponent<{
        label: {
            default: import("../_util/type").VueNode | ((o: import("../vc-mentions/src/Option").BaseOptionsProps) => import("../_util/type").VueNode);
            type: PropType<import("../_util/type").VueNode | ((o: import("../vc-mentions/src/Option").BaseOptionsProps) => import("../_util/type").VueNode)>;
        };
        value: StringConstructor;
        disabled: BooleanConstructor;
        payload: {
            type: PropType<Record<string, any>>;
            default: Record<string, any>;
        };
    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
        label: {
            default: import("../_util/type").VueNode | ((o: import("../vc-mentions/src/Option").BaseOptionsProps) => import("../_util/type").VueNode);
            type: PropType<import("../_util/type").VueNode | ((o: import("../vc-mentions/src/Option").BaseOptionsProps) => import("../_util/type").VueNode)>;
        };
        value: StringConstructor;
        disabled: BooleanConstructor;
        payload: {
            type: PropType<Record<string, any>>;
            default: Record<string, any>;
        };
    }>>, {
        label: import("../_util/type").VueNode | ((o: import("../vc-mentions/src/Option").BaseOptionsProps) => import("../_util/type").VueNode);
        disabled: boolean;
        payload: Record<string, any>;
    }, {}>;
    getMentions: (value?: string, config?: MentionsConfig) => MentionsEntity[];
    install: (app: App) => App<any>;
};
export default _default;
