import type { Plugin } from 'vue';
import { TabPane } from './src';
export type { TabsProps, TabPaneProps } from './src';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            onChange?: (activeKey: import("../_util/type").Key) => void;
            size?: import("../config-provider").SizeType;
            direction?: "rtl" | "ltr";
            type?: import("./src/Tabs").TabsType;
            getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
            locale?: import("./src/interface").TabsLocale;
            'onUpdate:activeKey'?: (activeKey: import("../_util/type").Key) => void;
            animated?: boolean | import("./src/interface").AnimatedConfig;
            destroyInactiveTabPane?: boolean;
            onTabClick?: (activeKey: import("../_util/type").Key, e: MouseEvent | KeyboardEvent) => void;
            tabPosition?: import("./src/interface").TabPosition;
            renderTabBar?: import("./src/interface").RenderTabBar;
            onTabScroll?: import("./src/interface").OnTabScroll;
            tabBarStyle?: import("vue").CSSProperties;
            hideAdd?: boolean;
            centered?: boolean;
            onEdit?: (e: import("../_util/type").Key | MouseEvent | KeyboardEvent, action: "add" | "remove") => void;
            onPrevClick?: import("../_util/EventInterface").MouseEventHandler;
            onNextClick?: import("../_util/EventInterface").MouseEventHandler;
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
            class?: unknown;
            tabindex?: string | number;
            readonly prefixCls?: string;
            role?: string;
            readonly id?: string;
            readonly popupClassName?: string;
            readonly activeKey?: string | number;
            readonly tabBarGutter?: number;
            readonly tabBarExtraContent?: any;
            readonly defaultActiveKey?: string | number;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            tabBarExtraContent?: any;
            leftExtra?: any;
            rightExtra?: any;
            moreIcon?: any;
            addIcon?: any;
            removeIcon?: any;
            renderTabBar?: any;
            default?: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            prefixCls: {
                type: StringConstructor;
            };
            id: {
                type: StringConstructor;
            };
            popupClassName: StringConstructor;
            getPopupContainer: {
                type: import("vue").PropType<(triggerNode?: HTMLElement) => HTMLElement>;
                default: (triggerNode?: HTMLElement) => HTMLElement;
            };
            activeKey: {
                type: (StringConstructor | NumberConstructor)[];
            };
            defaultActiveKey: {
                type: (StringConstructor | NumberConstructor)[];
            };
            direction: {
                type: import("vue").PropType<"rtl" | "ltr">;
                default: "rtl" | "ltr";
            };
            animated: {
                type: import("vue").PropType<boolean | import("./src/interface").AnimatedConfig>;
                default: boolean | import("./src/interface").AnimatedConfig;
            };
            renderTabBar: {
                type: import("vue").PropType<import("./src/interface").RenderTabBar>;
                default: import("./src/interface").RenderTabBar;
            };
            tabBarGutter: {
                type: NumberConstructor;
            };
            tabBarStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            tabPosition: {
                type: import("vue").PropType<import("./src/interface").TabPosition>;
                default: import("./src/interface").TabPosition;
            };
            destroyInactiveTabPane: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideAdd: BooleanConstructor;
            type: {
                type: import("vue").PropType<import("./src/Tabs").TabsType>;
                default: import("./src/Tabs").TabsType;
            };
            size: {
                type: import("vue").PropType<import("../config-provider").SizeType>;
                default: import("../config-provider").SizeType;
            };
            centered: BooleanConstructor;
            onEdit: {
                type: import("vue").PropType<(e: import("../_util/type").Key | MouseEvent | KeyboardEvent, action: "add" | "remove") => void>;
                default: (e: import("../_util/type").Key | MouseEvent | KeyboardEvent, action: "add" | "remove") => void;
            };
            onChange: {
                type: import("vue").PropType<(activeKey: import("../_util/type").Key) => void>;
                default: (activeKey: import("../_util/type").Key) => void;
            };
            onTabClick: {
                type: import("vue").PropType<(activeKey: import("../_util/type").Key, e: MouseEvent | KeyboardEvent) => void>;
                default: (activeKey: import("../_util/type").Key, e: MouseEvent | KeyboardEvent) => void;
            };
            onTabScroll: {
                type: import("vue").PropType<import("./src/interface").OnTabScroll>;
                default: import("./src/interface").OnTabScroll;
            };
            'onUpdate:activeKey': {
                type: import("vue").PropType<(activeKey: import("../_util/type").Key) => void>;
                default: (activeKey: import("../_util/type").Key) => void;
            };
            locale: {
                type: import("vue").PropType<import("./src/interface").TabsLocale>;
                default: import("./src/interface").TabsLocale;
            };
            onPrevClick: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
                default: import("../_util/EventInterface").MouseEventHandler;
            };
            onNextClick: {
                type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
                default: import("../_util/EventInterface").MouseEventHandler;
            };
            tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
        }>>, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            onChange: (activeKey: import("../_util/type").Key) => void;
            size: import("../config-provider").SizeType;
            direction: "rtl" | "ltr";
            type: import("./src/Tabs").TabsType;
            getPopupContainer: (triggerNode?: HTMLElement) => HTMLElement;
            locale: import("./src/interface").TabsLocale;
            'onUpdate:activeKey': (activeKey: import("../_util/type").Key) => void;
            animated: boolean | import("./src/interface").AnimatedConfig;
            destroyInactiveTabPane: boolean;
            onTabClick: (activeKey: import("../_util/type").Key, e: MouseEvent | KeyboardEvent) => void;
            tabPosition: import("./src/interface").TabPosition;
            renderTabBar: import("./src/interface").RenderTabBar;
            onTabScroll: import("./src/interface").OnTabScroll;
            tabBarStyle: import("vue").CSSProperties;
            hideAdd: boolean;
            centered: boolean;
            onEdit: (e: import("../_util/type").Key | MouseEvent | KeyboardEvent, action: "add" | "remove") => void;
            onPrevClick: import("../_util/EventInterface").MouseEventHandler;
            onNextClick: import("../_util/EventInterface").MouseEventHandler;
        }, {}, string, import("../_util/type").CustomSlotsType<{
            tabBarExtraContent?: any;
            leftExtra?: any;
            rightExtra?: any;
            moreIcon?: any;
            addIcon?: any;
            removeIcon?: any;
            renderTabBar?: any;
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
    } & Readonly<import("vue").ExtractPropTypes<{
        prefixCls: {
            type: StringConstructor;
        };
        id: {
            type: StringConstructor;
        };
        popupClassName: StringConstructor;
        getPopupContainer: {
            type: import("vue").PropType<(triggerNode?: HTMLElement) => HTMLElement>;
            default: (triggerNode?: HTMLElement) => HTMLElement;
        };
        activeKey: {
            type: (StringConstructor | NumberConstructor)[];
        };
        defaultActiveKey: {
            type: (StringConstructor | NumberConstructor)[];
        };
        direction: {
            type: import("vue").PropType<"rtl" | "ltr">;
            default: "rtl" | "ltr";
        };
        animated: {
            type: import("vue").PropType<boolean | import("./src/interface").AnimatedConfig>;
            default: boolean | import("./src/interface").AnimatedConfig;
        };
        renderTabBar: {
            type: import("vue").PropType<import("./src/interface").RenderTabBar>;
            default: import("./src/interface").RenderTabBar;
        };
        tabBarGutter: {
            type: NumberConstructor;
        };
        tabBarStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
            default: import("vue").CSSProperties;
        };
        tabPosition: {
            type: import("vue").PropType<import("./src/interface").TabPosition>;
            default: import("./src/interface").TabPosition;
        };
        destroyInactiveTabPane: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideAdd: BooleanConstructor;
        type: {
            type: import("vue").PropType<import("./src/Tabs").TabsType>;
            default: import("./src/Tabs").TabsType;
        };
        size: {
            type: import("vue").PropType<import("../config-provider").SizeType>;
            default: import("../config-provider").SizeType;
        };
        centered: BooleanConstructor;
        onEdit: {
            type: import("vue").PropType<(e: import("../_util/type").Key | MouseEvent | KeyboardEvent, action: "add" | "remove") => void>;
            default: (e: import("../_util/type").Key | MouseEvent | KeyboardEvent, action: "add" | "remove") => void;
        };
        onChange: {
            type: import("vue").PropType<(activeKey: import("../_util/type").Key) => void>;
            default: (activeKey: import("../_util/type").Key) => void;
        };
        onTabClick: {
            type: import("vue").PropType<(activeKey: import("../_util/type").Key, e: MouseEvent | KeyboardEvent) => void>;
            default: (activeKey: import("../_util/type").Key, e: MouseEvent | KeyboardEvent) => void;
        };
        onTabScroll: {
            type: import("vue").PropType<import("./src/interface").OnTabScroll>;
            default: import("./src/interface").OnTabScroll;
        };
        'onUpdate:activeKey': {
            type: import("vue").PropType<(activeKey: import("../_util/type").Key) => void>;
            default: (activeKey: import("../_util/type").Key) => void;
        };
        locale: {
            type: import("vue").PropType<import("./src/interface").TabsLocale>;
            default: import("./src/interface").TabsLocale;
        };
        onPrevClick: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            default: import("../_util/EventInterface").MouseEventHandler;
        };
        onNextClick: {
            type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            default: import("../_util/EventInterface").MouseEventHandler;
        };
        tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
    }>> & import("vue").ShallowUnwrapRef<() => import("vue/jsx-runtime").JSX.Element> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    prefixCls: {
        type: StringConstructor;
    };
    id: {
        type: StringConstructor;
    };
    popupClassName: StringConstructor;
    getPopupContainer: {
        type: import("vue").PropType<(triggerNode?: HTMLElement) => HTMLElement>;
        default: (triggerNode?: HTMLElement) => HTMLElement;
    };
    activeKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    defaultActiveKey: {
        type: (StringConstructor | NumberConstructor)[];
    };
    direction: {
        type: import("vue").PropType<"rtl" | "ltr">;
        default: "rtl" | "ltr";
    };
    animated: {
        type: import("vue").PropType<boolean | import("./src/interface").AnimatedConfig>;
        default: boolean | import("./src/interface").AnimatedConfig;
    };
    renderTabBar: {
        type: import("vue").PropType<import("./src/interface").RenderTabBar>;
        default: import("./src/interface").RenderTabBar;
    };
    tabBarGutter: {
        type: NumberConstructor;
    };
    tabBarStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    tabPosition: {
        type: import("vue").PropType<import("./src/interface").TabPosition>;
        default: import("./src/interface").TabPosition;
    };
    destroyInactiveTabPane: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideAdd: BooleanConstructor;
    type: {
        type: import("vue").PropType<import("./src/Tabs").TabsType>;
        default: import("./src/Tabs").TabsType;
    };
    size: {
        type: import("vue").PropType<import("../config-provider").SizeType>;
        default: import("../config-provider").SizeType;
    };
    centered: BooleanConstructor;
    onEdit: {
        type: import("vue").PropType<(e: import("../_util/type").Key | MouseEvent | KeyboardEvent, action: "add" | "remove") => void>;
        default: (e: import("../_util/type").Key | MouseEvent | KeyboardEvent, action: "add" | "remove") => void;
    };
    onChange: {
        type: import("vue").PropType<(activeKey: import("../_util/type").Key) => void>;
        default: (activeKey: import("../_util/type").Key) => void;
    };
    onTabClick: {
        type: import("vue").PropType<(activeKey: import("../_util/type").Key, e: MouseEvent | KeyboardEvent) => void>;
        default: (activeKey: import("../_util/type").Key, e: MouseEvent | KeyboardEvent) => void;
    };
    onTabScroll: {
        type: import("vue").PropType<import("./src/interface").OnTabScroll>;
        default: import("./src/interface").OnTabScroll;
    };
    'onUpdate:activeKey': {
        type: import("vue").PropType<(activeKey: import("../_util/type").Key) => void>;
        default: (activeKey: import("../_util/type").Key) => void;
    };
    locale: {
        type: import("vue").PropType<import("./src/interface").TabsLocale>;
        default: import("./src/interface").TabsLocale;
    };
    onPrevClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        default: import("../_util/EventInterface").MouseEventHandler;
    };
    onNextClick: {
        type: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        default: import("../_util/EventInterface").MouseEventHandler;
    };
    tabBarExtraContent: import("vue-types").VueTypeValidableDef<any>;
}>>, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    onChange: (activeKey: import("../_util/type").Key) => void;
    size: import("../config-provider").SizeType;
    direction: "rtl" | "ltr";
    type: import("./src/Tabs").TabsType;
    getPopupContainer: (triggerNode?: HTMLElement) => HTMLElement;
    locale: import("./src/interface").TabsLocale;
    'onUpdate:activeKey': (activeKey: import("../_util/type").Key) => void;
    animated: boolean | import("./src/interface").AnimatedConfig;
    destroyInactiveTabPane: boolean;
    onTabClick: (activeKey: import("../_util/type").Key, e: MouseEvent | KeyboardEvent) => void;
    tabPosition: import("./src/interface").TabPosition;
    renderTabBar: import("./src/interface").RenderTabBar;
    onTabScroll: import("./src/interface").OnTabScroll;
    tabBarStyle: import("vue").CSSProperties;
    hideAdd: boolean;
    centered: boolean;
    onEdit: (e: import("../_util/type").Key | MouseEvent | KeyboardEvent, action: "add" | "remove") => void;
    onPrevClick: import("../_util/EventInterface").MouseEventHandler;
    onNextClick: import("../_util/EventInterface").MouseEventHandler;
}, {}, string, import("../_util/type").CustomSlotsType<{
    tabBarExtraContent?: any;
    leftExtra?: any;
    rightExtra?: any;
    moreIcon?: any;
    addIcon?: any;
    removeIcon?: any;
    renderTabBar?: any;
    default?: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]> & {
    readonly TabPane: typeof TabPane;
};
export default _default;
export { TabPane };
