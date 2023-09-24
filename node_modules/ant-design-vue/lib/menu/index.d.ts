import type { MenuProps } from './src/Menu';
import type { MenuItemProps } from './src/MenuItem';
import MenuItem from './src/MenuItem';
import type { SubMenuProps } from './src/SubMenu';
import SubMenu from './src/SubMenu';
import type { MenuItemGroupProps } from './src/ItemGroup';
import ItemGroup from './src/ItemGroup';
import Divider from './src/Divider';
import type { MenuDividerProps } from './src/Divider';
import type { Plugin } from 'vue';
import type { MenuTheme, MenuMode } from './src/interface';
import type { ItemType } from './src/hooks/useItems';
export type { MenuProps, SubMenuProps, MenuItemProps, MenuItemGroupProps, MenuTheme, MenuMode, MenuDividerProps, ItemType, };
export { SubMenu, MenuItem as Item, MenuItem, ItemGroup, ItemGroup as MenuItemGroup, Divider, Divider as MenuDivider, };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            mode?: MenuMode;
            multiple?: boolean;
            disabled?: boolean;
            theme?: MenuTheme;
            inlineIndent?: number;
            inlineCollapsed?: boolean;
            subMenuOpenDelay?: number;
            subMenuCloseDelay?: number;
            triggerSubMenuAction?: import("./src/interface").TriggerSubMenuAction;
            forceSubMenuRender?: boolean;
            disabledOverflow?: boolean;
            selectable?: boolean;
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
            readonly onClick?: import("./src/interface").MenuClickEventHandler;
            readonly onFocus?: import("../_util/EventInterface").FocusEventHandler;
            readonly onBlur?: import("../_util/EventInterface").FocusEventHandler;
            readonly onMousedown?: import("../_util/EventInterface").MouseEventHandler;
            readonly onSelect?: import("./src/interface").SelectEventHandler;
            readonly motion?: unknown;
            readonly prefixCls?: string;
            readonly getPopupContainer?: (node: HTMLElement) => HTMLElement;
            role?: string;
            readonly id?: string;
            readonly builtinPlacements?: unknown;
            readonly onOpenChange?: (keys: import("../_util/type").Key[]) => void;
            readonly selectedKeys?: import("../_util/type").Key[];
            readonly expandIcon?: (p?: {
                [key: string]: any;
                isOpen: boolean;
            }) => any;
            readonly openKeys?: import("../_util/type").Key[];
            readonly items?: ItemType[];
            readonly activeKey?: string;
            readonly onDeselect?: import("./src/interface").SelectEventHandler;
            readonly 'onUpdate:openKeys'?: (keys: import("../_util/type").Key[]) => void;
            readonly 'onUpdate:selectedKeys'?: (keys: import("../_util/type").Key[]) => void;
            readonly 'onUpdate:activeKey'?: (key: import("../_util/type").Key) => void;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            expandIcon?: import("vue").Slot<{
                [key: string]: any;
                isOpen: boolean;
            }>;
            overflowedIndicator?: any;
            default: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            id: StringConstructor;
            prefixCls: StringConstructor;
            items: import("vue").PropType<ItemType[]>;
            disabled: BooleanConstructor;
            inlineCollapsed: BooleanConstructor;
            disabledOverflow: BooleanConstructor;
            forceSubMenuRender: BooleanConstructor;
            openKeys: import("vue").PropType<import("../_util/type").Key[]>;
            selectedKeys: import("vue").PropType<import("../_util/type").Key[]>;
            activeKey: StringConstructor;
            selectable: {
                type: BooleanConstructor;
                default: boolean;
            };
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            tabindex: {
                type: (StringConstructor | NumberConstructor)[];
            };
            motion: import("vue").PropType<import("../_util/transition").CSSMotionProps>;
            role: StringConstructor;
            theme: {
                type: import("vue").PropType<MenuTheme>;
                default: string;
            };
            mode: {
                type: import("vue").PropType<MenuMode>;
                default: string;
            };
            inlineIndent: {
                type: NumberConstructor;
                default: number;
            };
            subMenuOpenDelay: {
                type: NumberConstructor;
                default: number;
            };
            subMenuCloseDelay: {
                type: NumberConstructor;
                default: number;
            };
            builtinPlacements: {
                type: import("vue").PropType<import("./src/interface").BuiltinPlacements>;
            };
            triggerSubMenuAction: {
                type: import("vue").PropType<import("./src/interface").TriggerSubMenuAction>;
                default: string;
            };
            getPopupContainer: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
            expandIcon: import("vue").PropType<(p?: {
                [key: string]: any;
                isOpen: boolean;
            }) => any>;
            onOpenChange: import("vue").PropType<(keys: import("../_util/type").Key[]) => void>;
            onSelect: import("vue").PropType<import("./src/interface").SelectEventHandler>;
            onDeselect: import("vue").PropType<import("./src/interface").SelectEventHandler>;
            onClick: import("vue").PropType<import("./src/interface").MenuClickEventHandler>;
            onFocus: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
            onBlur: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
            onMousedown: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
            'onUpdate:openKeys': import("vue").PropType<(keys: import("../_util/type").Key[]) => void>;
            'onUpdate:selectedKeys': import("vue").PropType<(keys: import("../_util/type").Key[]) => void>;
            'onUpdate:activeKey': import("vue").PropType<(key: import("../_util/type").Key) => void>;
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            mode: MenuMode;
            multiple: boolean;
            disabled: boolean;
            theme: MenuTheme;
            inlineIndent: number;
            inlineCollapsed: boolean;
            subMenuOpenDelay: number;
            subMenuCloseDelay: number;
            triggerSubMenuAction: import("./src/interface").TriggerSubMenuAction;
            forceSubMenuRender: boolean;
            disabledOverflow: boolean;
            selectable: boolean;
        }, {}, string, import("../_util/type").CustomSlotsType<{
            expandIcon?: {
                [key: string]: any;
                isOpen: boolean;
            };
            overflowedIndicator?: any;
            default: any;
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
        id: StringConstructor;
        prefixCls: StringConstructor;
        items: import("vue").PropType<ItemType[]>;
        disabled: BooleanConstructor;
        inlineCollapsed: BooleanConstructor;
        disabledOverflow: BooleanConstructor;
        forceSubMenuRender: BooleanConstructor;
        openKeys: import("vue").PropType<import("../_util/type").Key[]>;
        selectedKeys: import("vue").PropType<import("../_util/type").Key[]>;
        activeKey: StringConstructor;
        selectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        tabindex: {
            type: (StringConstructor | NumberConstructor)[];
        };
        motion: import("vue").PropType<import("../_util/transition").CSSMotionProps>;
        role: StringConstructor;
        theme: {
            type: import("vue").PropType<MenuTheme>;
            default: string;
        };
        mode: {
            type: import("vue").PropType<MenuMode>;
            default: string;
        };
        inlineIndent: {
            type: NumberConstructor;
            default: number;
        };
        subMenuOpenDelay: {
            type: NumberConstructor;
            default: number;
        };
        subMenuCloseDelay: {
            type: NumberConstructor;
            default: number;
        };
        builtinPlacements: {
            type: import("vue").PropType<import("./src/interface").BuiltinPlacements>;
        };
        triggerSubMenuAction: {
            type: import("vue").PropType<import("./src/interface").TriggerSubMenuAction>;
            default: string;
        };
        getPopupContainer: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
        expandIcon: import("vue").PropType<(p?: {
            [key: string]: any;
            isOpen: boolean;
        }) => any>;
        onOpenChange: import("vue").PropType<(keys: import("../_util/type").Key[]) => void>;
        onSelect: import("vue").PropType<import("./src/interface").SelectEventHandler>;
        onDeselect: import("vue").PropType<import("./src/interface").SelectEventHandler>;
        onClick: import("vue").PropType<import("./src/interface").MenuClickEventHandler>;
        onFocus: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        onBlur: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
        onMousedown: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
        'onUpdate:openKeys': import("vue").PropType<(keys: import("../_util/type").Key[]) => void>;
        'onUpdate:selectedKeys': import("vue").PropType<(keys: import("../_util/type").Key[]) => void>;
        'onUpdate:activeKey': import("vue").PropType<(key: import("../_util/type").Key) => void>;
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    prefixCls: StringConstructor;
    items: import("vue").PropType<ItemType[]>;
    disabled: BooleanConstructor;
    inlineCollapsed: BooleanConstructor;
    disabledOverflow: BooleanConstructor;
    forceSubMenuRender: BooleanConstructor;
    openKeys: import("vue").PropType<import("../_util/type").Key[]>;
    selectedKeys: import("vue").PropType<import("../_util/type").Key[]>;
    activeKey: StringConstructor;
    selectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: {
        type: (StringConstructor | NumberConstructor)[];
    };
    motion: import("vue").PropType<import("../_util/transition").CSSMotionProps>;
    role: StringConstructor;
    theme: {
        type: import("vue").PropType<MenuTheme>;
        default: string;
    };
    mode: {
        type: import("vue").PropType<MenuMode>;
        default: string;
    };
    inlineIndent: {
        type: NumberConstructor;
        default: number;
    };
    subMenuOpenDelay: {
        type: NumberConstructor;
        default: number;
    };
    subMenuCloseDelay: {
        type: NumberConstructor;
        default: number;
    };
    builtinPlacements: {
        type: import("vue").PropType<import("./src/interface").BuiltinPlacements>;
    };
    triggerSubMenuAction: {
        type: import("vue").PropType<import("./src/interface").TriggerSubMenuAction>;
        default: string;
    };
    getPopupContainer: import("vue").PropType<(node: HTMLElement) => HTMLElement>;
    expandIcon: import("vue").PropType<(p?: {
        [key: string]: any;
        isOpen: boolean;
    }) => any>;
    onOpenChange: import("vue").PropType<(keys: import("../_util/type").Key[]) => void>;
    onSelect: import("vue").PropType<import("./src/interface").SelectEventHandler>;
    onDeselect: import("vue").PropType<import("./src/interface").SelectEventHandler>;
    onClick: import("vue").PropType<import("./src/interface").MenuClickEventHandler>;
    onFocus: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    onBlur: import("vue").PropType<import("../_util/EventInterface").FocusEventHandler>;
    onMousedown: import("vue").PropType<import("../_util/EventInterface").MouseEventHandler>;
    'onUpdate:openKeys': import("vue").PropType<(keys: import("../_util/type").Key[]) => void>;
    'onUpdate:selectedKeys': import("vue").PropType<(keys: import("../_util/type").Key[]) => void>;
    'onUpdate:activeKey': import("vue").PropType<(key: import("../_util/type").Key) => void>;
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    mode: MenuMode;
    multiple: boolean;
    disabled: boolean;
    theme: MenuTheme;
    inlineIndent: number;
    inlineCollapsed: boolean;
    subMenuOpenDelay: number;
    subMenuCloseDelay: number;
    triggerSubMenuAction: import("./src/interface").TriggerSubMenuAction;
    forceSubMenuRender: boolean;
    disabledOverflow: boolean;
    selectable: boolean;
}, {}, string, import("../_util/type").CustomSlotsType<{
    expandIcon?: {
        [key: string]: any;
        isOpen: boolean;
    };
    overflowedIndicator?: any;
    default: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]> & {
    readonly Item: typeof MenuItem;
    readonly SubMenu: typeof SubMenu;
    readonly Divider: typeof Divider;
    readonly ItemGroup: typeof ItemGroup;
};
export default _default;
