import type { App } from 'vue';
import DirectoryTree from './DirectoryTree';
export type { EventDataNode, DataNode } from '../vc-tree/interface';
export type { TreeProps, AntTreeNodeMouseEvent, AntTreeNodeExpandedEvent, AntTreeNodeCheckedEvent, AntTreeNodeSelectedEvent, AntTreeNodeDragEnterEvent, AntTreeNodeDropEvent, AntdTreeNodeAttribute, TreeDataItem, } from './Tree';
export type { ExpandAction as DirectoryTreeExpandAction, DirectoryTreeProps, } from './DirectoryTree';
declare const TreeNode: import("vue").DefineComponent<{
    eventKey: (StringConstructor | NumberConstructor)[];
    prefixCls: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    data: {
        type: import("vue").PropType<import("../vc-tree/interface").DataNode>;
        default: import("../vc-tree/interface").DataNode;
    };
    parent: {
        type: import("vue").PropType<import("../vc-tree/interface").DataNode>;
        default: import("../vc-tree/interface").DataNode;
    };
    isStart: {
        type: import("vue").PropType<boolean[]>;
    };
    isEnd: {
        type: import("vue").PropType<boolean[]>;
    };
    active: {
        type: BooleanConstructor;
        default: any;
    };
    onMousemove: {
        type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
    };
    isLeaf: {
        type: BooleanConstructor;
        default: any;
    };
    checkable: {
        type: BooleanConstructor;
        default: any;
    };
    selectable: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    disableCheckbox: {
        type: BooleanConstructor;
        default: any;
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    switcherIcon: import("vue-types").VueTypeValidableDef<any>;
    domRef: {
        type: import("vue").PropType<(arg: any) => void>;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    eventKey: (StringConstructor | NumberConstructor)[];
    prefixCls: StringConstructor;
    title: import("vue-types").VueTypeValidableDef<any>;
    data: {
        type: import("vue").PropType<import("../vc-tree/interface").DataNode>;
        default: import("../vc-tree/interface").DataNode;
    };
    parent: {
        type: import("vue").PropType<import("../vc-tree/interface").DataNode>;
        default: import("../vc-tree/interface").DataNode;
    };
    isStart: {
        type: import("vue").PropType<boolean[]>;
    };
    isEnd: {
        type: import("vue").PropType<boolean[]>;
    };
    active: {
        type: BooleanConstructor;
        default: any;
    };
    onMousemove: {
        type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
    };
    isLeaf: {
        type: BooleanConstructor;
        default: any;
    };
    checkable: {
        type: BooleanConstructor;
        default: any;
    };
    selectable: {
        type: BooleanConstructor;
        default: any;
    };
    disabled: {
        type: BooleanConstructor;
        default: any;
    };
    disableCheckbox: {
        type: BooleanConstructor;
        default: any;
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    switcherIcon: import("vue-types").VueTypeValidableDef<any>;
    domRef: {
        type: import("vue").PropType<(arg: any) => void>;
    };
}>>, {
    data: import("../vc-tree/interface").DataNode;
    active: boolean;
    disabled: boolean;
    selectable: boolean;
    checkable: boolean;
    disableCheckbox: boolean;
    isLeaf: boolean;
    parent: import("../vc-tree/interface").DataNode;
}, {}>;
export { DirectoryTree, TreeNode };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            draggable?: boolean;
            icon?: (nodeProps: import("./Tree").AntdTreeNodeAttribute) => any;
            multiple?: boolean;
            disabled?: boolean;
            virtual?: boolean;
            selectedKeys?: import("../vc-tree/interface").Key[];
            selectable?: boolean;
            'onUpdate:selectedKeys'?: (keys: import("../vc-tree/interface").Key[]) => void;
            checkable?: boolean;
            expandedKeys?: import("../vc-tree/interface").Key[];
            loadedKeys?: import("../vc-tree/interface").Key[];
            checkedKeys?: import("../vc-tree/interface").Key[] | {
                checked: import("../vc-tree/interface").Key[];
                halfChecked: import("../vc-tree/interface").Key[];
            };
            showIcon?: boolean;
            focusable?: boolean;
            showLine?: boolean | {
                showLeafIcon: boolean;
            };
            checkStrictly?: boolean;
            defaultExpandParent?: boolean;
            autoExpandParent?: boolean;
            defaultExpandAll?: boolean;
            defaultExpandedKeys?: import("../vc-tree/interface").Key[];
            defaultCheckedKeys?: import("../vc-tree/interface").Key[];
            defaultSelectedKeys?: import("../vc-tree/interface").Key[];
            replaceFields?: import("../vc-tree/interface").FieldNames;
            blockNode?: boolean;
            'onUpdate:checkedKeys'?: (keys: import("../vc-tree/interface").Key[]) => void;
            'onUpdate:expandedKeys'?: (keys: import("../vc-tree/interface").Key[]) => void;
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
            readonly children?: any;
            readonly height?: number;
            readonly onMouseenter?: (info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void;
            readonly onMouseleave?: (info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void;
            tabindex?: number;
            readonly onClick?: import("../vc-tree/contextTypes").NodeMouseEventHandler;
            readonly onDragend?: (info: import("../vc-tree/contextTypes").NodeDragEventParams) => void;
            readonly onDragenter?: (info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                expandedKeys: import("../vc-tree/interface").Key[];
            }) => void;
            readonly onDragleave?: (info: import("../vc-tree/contextTypes").NodeDragEventParams) => void;
            readonly onDragover?: (info: import("../vc-tree/contextTypes").NodeDragEventParams) => void;
            readonly onDragstart?: (info: import("../vc-tree/contextTypes").NodeDragEventParams) => void;
            readonly onDrop?: (info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                dragNode: import("../vc-tree/interface").EventDataNode;
                dragNodesKeys: import("../vc-tree/interface").Key[];
                dropPosition: number;
                dropToGap: boolean;
            }) => void;
            readonly onFocus?: (e: FocusEvent) => void;
            readonly onBlur?: (e: FocusEvent) => void;
            readonly onLoad?: (loadedKeys: import("../vc-tree/interface").Key[], info: {
                event: "load";
                node: import("../vc-tree/interface").EventDataNode;
            }) => void;
            readonly onKeydown?: import("../_util/EventInterface").EventHandler;
            readonly onContextmenu?: import("../_util/EventInterface").EventHandler;
            readonly onDblclick?: import("../vc-tree/contextTypes").NodeMouseEventHandler;
            readonly onSelect?: (selectedKeys: import("../vc-tree/interface").Key[], info: {
                event: "select";
                selected: boolean;
                node: import("../vc-tree/interface").EventDataNode;
                selectedNodes: import("../vc-tree/interface").DataNode[];
                nativeEvent: MouseEvent;
            }) => void;
            readonly onScroll?: import("../_util/EventInterface").EventHandler;
            readonly direction?: import("../vc-tree/interface").Direction;
            readonly motion?: any;
            readonly prefixCls?: string;
            role?: string;
            readonly rootClassName?: string;
            readonly activeKey?: import("../vc-tree/interface").Key;
            readonly fieldNames?: unknown;
            readonly itemHeight?: number;
            readonly switcherIcon?: any;
            readonly loadData?: (treeNode: import("../vc-tree/interface").EventDataNode) => Promise<any>;
            readonly filterTreeNode?: (treeNode: import("../vc-tree/interface").EventDataNode) => boolean;
            readonly dropIndicatorRender?: (props: {
                dropPosition: 0 | 1 | -1;
                dropLevelOffset: number;
                indent: number;
                prefixCls: string;
                direction: import("../vc-tree/interface").Direction;
            }) => any;
            readonly treeData?: import("../vc-tree/interface").DataNode[];
            readonly expandAction?: import("../vc-tree/props").ExpandAction;
            readonly allowDrop?: import("../vc-tree/props").AllowDrop<import("../vc-tree/interface").DataNode>;
            readonly onExpand?: (expandedKeys: import("../vc-tree/interface").Key[], info: {
                node: import("../vc-tree/interface").EventDataNode;
                expanded: boolean;
                nativeEvent: MouseEvent;
            }) => void;
            readonly onCheck?: (checked: import("../vc-tree/interface").Key[] | {
                checked: import("../vc-tree/interface").Key[];
                halfChecked: import("../vc-tree/interface").Key[];
            }, info: import("../vc-tree/props").CheckInfo) => void;
            readonly onRightClick?: (info: {
                event: MouseEvent;
                node: import("../vc-tree/interface").EventDataNode;
            }) => void;
            readonly onActiveChange?: (key: import("../vc-tree/interface").Key) => void;
            readonly rootStyle?: import("vue").CSSProperties;
            readonly openAnimation?: any;
            readonly onDoubleclick?: import("../vc-tree/contextTypes").NodeMouseEventHandler;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            icon?: any;
            title?: any;
            switcherIcon?: any;
            titleRender?: any;
            default?: any;
            leafIcon?: any;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            showLine: {
                type: import("vue").PropType<boolean | {
                    showLeafIcon: boolean;
                }>;
                default: boolean | {
                    showLeafIcon: boolean;
                };
            };
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoExpandParent: {
                type: BooleanConstructor;
                default: boolean;
            };
            checkStrictly: {
                type: BooleanConstructor;
                default: boolean;
            };
            checkable: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            defaultExpandAll: {
                type: BooleanConstructor;
                default: boolean;
            };
            defaultExpandParent: {
                type: BooleanConstructor;
                default: boolean;
            };
            defaultExpandedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
                default: import("../vc-tree/interface").Key[];
            };
            expandedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
                default: import("../vc-tree/interface").Key[];
            };
            checkedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[] | {
                    checked: import("../vc-tree/interface").Key[];
                    halfChecked: import("../vc-tree/interface").Key[];
                }>;
                default: import("../vc-tree/interface").Key[] | {
                    checked: import("../vc-tree/interface").Key[];
                    halfChecked: import("../vc-tree/interface").Key[];
                };
            };
            defaultCheckedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
                default: import("../vc-tree/interface").Key[];
            };
            selectedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
                default: import("../vc-tree/interface").Key[];
            };
            defaultSelectedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
                default: import("../vc-tree/interface").Key[];
            };
            selectable: {
                type: BooleanConstructor;
                default: boolean;
            };
            loadedKeys: {
                type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
                default: import("../vc-tree/interface").Key[];
            };
            draggable: {
                type: BooleanConstructor;
                default: boolean;
            };
            showIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
            icon: {
                type: import("vue").PropType<(nodeProps: import("./Tree").AntdTreeNodeAttribute) => any>;
                default: (nodeProps: import("./Tree").AntdTreeNodeAttribute) => any;
            };
            switcherIcon: import("vue-types").VueTypeValidableDef<any>;
            prefixCls: StringConstructor;
            replaceFields: {
                type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
                default: import("../vc-tree/interface").FieldNames;
            };
            blockNode: {
                type: BooleanConstructor;
                default: boolean;
            };
            openAnimation: import("vue-types").VueTypeValidableDef<any>;
            onDoubleclick: {
                type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
            };
            'onUpdate:selectedKeys': {
                type: import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
                default: (keys: import("../vc-tree/interface").Key[]) => void;
            };
            'onUpdate:checkedKeys': {
                type: import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
                default: (keys: import("../vc-tree/interface").Key[]) => void;
            };
            'onUpdate:expandedKeys': {
                type: import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
                default: (keys: import("../vc-tree/interface").Key[]) => void;
            };
            focusable: {
                type: BooleanConstructor;
                default: any;
            };
            activeKey: import("vue").PropType<import("../vc-tree/interface").Key>;
            tabindex: NumberConstructor;
            children: import("vue-types").VueTypeValidableDef<any>;
            treeData: {
                type: import("vue").PropType<import("../vc-tree/interface").DataNode[]>;
            };
            fieldNames: {
                type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
            };
            expandAction: import("vue").PropType<import("../vc-tree/props").ExpandAction>;
            allowDrop: {
                type: import("vue").PropType<import("../vc-tree/props").AllowDrop<import("../vc-tree/interface").DataNode>>;
            };
            dropIndicatorRender: {
                type: import("vue").PropType<(props: {
                    dropPosition: 0 | 1 | -1;
                    dropLevelOffset: number;
                    indent: number;
                    prefixCls: string;
                    direction: import("../vc-tree/interface").Direction;
                }) => any>;
            };
            onFocus: {
                type: import("vue").PropType<(e: FocusEvent) => void>;
            };
            onBlur: {
                type: import("vue").PropType<(e: FocusEvent) => void>;
            };
            onKeydown: {
                type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
            };
            onContextmenu: {
                type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
            };
            onClick: {
                type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
            };
            onDblclick: {
                type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
            };
            onScroll: {
                type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
            };
            onExpand: {
                type: import("vue").PropType<(expandedKeys: import("../vc-tree/interface").Key[], info: {
                    node: import("../vc-tree/interface").EventDataNode;
                    expanded: boolean;
                    nativeEvent: MouseEvent;
                }) => void>;
            };
            onCheck: {
                type: import("vue").PropType<(checked: import("../vc-tree/interface").Key[] | {
                    checked: import("../vc-tree/interface").Key[];
                    halfChecked: import("../vc-tree/interface").Key[];
                }, info: import("../vc-tree/props").CheckInfo) => void>;
            };
            onSelect: {
                type: import("vue").PropType<(selectedKeys: import("../vc-tree/interface").Key[], info: {
                    event: "select";
                    selected: boolean;
                    node: import("../vc-tree/interface").EventDataNode;
                    selectedNodes: import("../vc-tree/interface").DataNode[];
                    nativeEvent: MouseEvent;
                }) => void>;
            };
            onLoad: {
                type: import("vue").PropType<(loadedKeys: import("../vc-tree/interface").Key[], info: {
                    event: "load";
                    node: import("../vc-tree/interface").EventDataNode;
                }) => void>;
            };
            loadData: {
                type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => Promise<any>>;
            };
            onMouseenter: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
            };
            onMouseleave: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
            };
            onRightClick: {
                type: import("vue").PropType<(info: {
                    event: MouseEvent;
                    node: import("../vc-tree/interface").EventDataNode;
                }) => void>;
            };
            onDragstart: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
            };
            onDragenter: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                    expandedKeys: import("../vc-tree/interface").Key[];
                }) => void>;
            };
            onDragover: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
            };
            onDragleave: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
            };
            onDragend: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
            };
            onDrop: {
                type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                    dragNode: import("../vc-tree/interface").EventDataNode;
                    dragNodesKeys: import("../vc-tree/interface").Key[];
                    dropPosition: number;
                    dropToGap: boolean;
                }) => void>;
            };
            onActiveChange: {
                type: import("vue").PropType<(key: import("../vc-tree/interface").Key) => void>;
            };
            filterTreeNode: {
                type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => boolean>;
            };
            motion: import("vue-types").VueTypeValidableDef<any>;
            height: NumberConstructor;
            itemHeight: NumberConstructor;
            virtual: {
                type: BooleanConstructor;
                default: any;
            };
            direction: {
                type: import("vue").PropType<import("../vc-tree/interface").Direction>;
            };
            rootClassName: StringConstructor;
            rootStyle: import("vue").PropType<import("vue").CSSProperties>;
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            draggable: boolean;
            icon: (nodeProps: import("./Tree").AntdTreeNodeAttribute) => any;
            multiple: boolean;
            disabled: boolean;
            virtual: boolean;
            selectedKeys: import("../vc-tree/interface").Key[];
            selectable: boolean;
            'onUpdate:selectedKeys': (keys: import("../vc-tree/interface").Key[]) => void;
            checkable: boolean;
            expandedKeys: import("../vc-tree/interface").Key[];
            loadedKeys: import("../vc-tree/interface").Key[];
            checkedKeys: import("../vc-tree/interface").Key[] | {
                checked: import("../vc-tree/interface").Key[];
                halfChecked: import("../vc-tree/interface").Key[];
            };
            showIcon: boolean;
            focusable: boolean;
            showLine: boolean | {
                showLeafIcon: boolean;
            };
            checkStrictly: boolean;
            defaultExpandParent: boolean;
            autoExpandParent: boolean;
            defaultExpandAll: boolean;
            defaultExpandedKeys: import("../vc-tree/interface").Key[];
            defaultCheckedKeys: import("../vc-tree/interface").Key[];
            defaultSelectedKeys: import("../vc-tree/interface").Key[];
            replaceFields: import("../vc-tree/interface").FieldNames;
            blockNode: boolean;
            'onUpdate:checkedKeys': (keys: import("../vc-tree/interface").Key[]) => void;
            'onUpdate:expandedKeys': (keys: import("../vc-tree/interface").Key[]) => void;
        }, {}, string, import("../_util/type").CustomSlotsType<{
            icon?: any;
            title?: any;
            switcherIcon?: any;
            titleRender?: any;
            default?: any;
            leafIcon?: any;
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
        showLine: {
            type: import("vue").PropType<boolean | {
                showLeafIcon: boolean;
            }>;
            default: boolean | {
                showLeafIcon: boolean;
            };
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoExpandParent: {
            type: BooleanConstructor;
            default: boolean;
        };
        checkStrictly: {
            type: BooleanConstructor;
            default: boolean;
        };
        checkable: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultExpandAll: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultExpandParent: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultExpandedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            default: import("../vc-tree/interface").Key[];
        };
        expandedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            default: import("../vc-tree/interface").Key[];
        };
        checkedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[] | {
                checked: import("../vc-tree/interface").Key[];
                halfChecked: import("../vc-tree/interface").Key[];
            }>;
            default: import("../vc-tree/interface").Key[] | {
                checked: import("../vc-tree/interface").Key[];
                halfChecked: import("../vc-tree/interface").Key[];
            };
        };
        defaultCheckedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            default: import("../vc-tree/interface").Key[];
        };
        selectedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            default: import("../vc-tree/interface").Key[];
        };
        defaultSelectedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            default: import("../vc-tree/interface").Key[];
        };
        selectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            default: import("../vc-tree/interface").Key[];
        };
        draggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        showIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
        icon: {
            type: import("vue").PropType<(nodeProps: import("./Tree").AntdTreeNodeAttribute) => any>;
            default: (nodeProps: import("./Tree").AntdTreeNodeAttribute) => any;
        };
        switcherIcon: import("vue-types").VueTypeValidableDef<any>;
        prefixCls: StringConstructor;
        replaceFields: {
            type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
            default: import("../vc-tree/interface").FieldNames;
        };
        blockNode: {
            type: BooleanConstructor;
            default: boolean;
        };
        openAnimation: import("vue-types").VueTypeValidableDef<any>;
        onDoubleclick: {
            type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
        };
        'onUpdate:selectedKeys': {
            type: import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
            default: (keys: import("../vc-tree/interface").Key[]) => void;
        };
        'onUpdate:checkedKeys': {
            type: import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
            default: (keys: import("../vc-tree/interface").Key[]) => void;
        };
        'onUpdate:expandedKeys': {
            type: import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
            default: (keys: import("../vc-tree/interface").Key[]) => void;
        };
        focusable: {
            type: BooleanConstructor;
            default: any;
        };
        activeKey: import("vue").PropType<import("../vc-tree/interface").Key>;
        tabindex: NumberConstructor;
        children: import("vue-types").VueTypeValidableDef<any>;
        treeData: {
            type: import("vue").PropType<import("../vc-tree/interface").DataNode[]>;
        };
        fieldNames: {
            type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
        };
        expandAction: import("vue").PropType<import("../vc-tree/props").ExpandAction>;
        allowDrop: {
            type: import("vue").PropType<import("../vc-tree/props").AllowDrop<import("../vc-tree/interface").DataNode>>;
        };
        dropIndicatorRender: {
            type: import("vue").PropType<(props: {
                dropPosition: 0 | 1 | -1;
                dropLevelOffset: number;
                indent: number;
                prefixCls: string;
                direction: import("../vc-tree/interface").Direction;
            }) => any>;
        };
        onFocus: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onKeydown: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
        };
        onDblclick: {
            type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
        };
        onScroll: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        onExpand: {
            type: import("vue").PropType<(expandedKeys: import("../vc-tree/interface").Key[], info: {
                node: import("../vc-tree/interface").EventDataNode;
                expanded: boolean;
                nativeEvent: MouseEvent;
            }) => void>;
        };
        onCheck: {
            type: import("vue").PropType<(checked: import("../vc-tree/interface").Key[] | {
                checked: import("../vc-tree/interface").Key[];
                halfChecked: import("../vc-tree/interface").Key[];
            }, info: import("../vc-tree/props").CheckInfo) => void>;
        };
        onSelect: {
            type: import("vue").PropType<(selectedKeys: import("../vc-tree/interface").Key[], info: {
                event: "select";
                selected: boolean;
                node: import("../vc-tree/interface").EventDataNode;
                selectedNodes: import("../vc-tree/interface").DataNode[];
                nativeEvent: MouseEvent;
            }) => void>;
        };
        onLoad: {
            type: import("vue").PropType<(loadedKeys: import("../vc-tree/interface").Key[], info: {
                event: "load";
                node: import("../vc-tree/interface").EventDataNode;
            }) => void>;
        };
        loadData: {
            type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => Promise<any>>;
        };
        onMouseenter: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
        };
        onMouseleave: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
        };
        onRightClick: {
            type: import("vue").PropType<(info: {
                event: MouseEvent;
                node: import("../vc-tree/interface").EventDataNode;
            }) => void>;
        };
        onDragstart: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDragenter: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                expandedKeys: import("../vc-tree/interface").Key[];
            }) => void>;
        };
        onDragover: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDragleave: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDragend: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDrop: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                dragNode: import("../vc-tree/interface").EventDataNode;
                dragNodesKeys: import("../vc-tree/interface").Key[];
                dropPosition: number;
                dropToGap: boolean;
            }) => void>;
        };
        onActiveChange: {
            type: import("vue").PropType<(key: import("../vc-tree/interface").Key) => void>;
        };
        filterTreeNode: {
            type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => boolean>;
        };
        motion: import("vue-types").VueTypeValidableDef<any>;
        height: NumberConstructor;
        itemHeight: NumberConstructor;
        virtual: {
            type: BooleanConstructor;
            default: any;
        };
        direction: {
            type: import("vue").PropType<import("../vc-tree/interface").Direction>;
        };
        rootClassName: StringConstructor;
        rootStyle: import("vue").PropType<import("vue").CSSProperties>;
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    showLine: {
        type: import("vue").PropType<boolean | {
            showLeafIcon: boolean;
        }>;
        default: boolean | {
            showLeafIcon: boolean;
        };
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkStrictly: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultExpandAll: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultExpandedKeys: {
        type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        default: import("../vc-tree/interface").Key[];
    };
    expandedKeys: {
        type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        default: import("../vc-tree/interface").Key[];
    };
    checkedKeys: {
        type: import("vue").PropType<import("../vc-tree/interface").Key[] | {
            checked: import("../vc-tree/interface").Key[];
            halfChecked: import("../vc-tree/interface").Key[];
        }>;
        default: import("../vc-tree/interface").Key[] | {
            checked: import("../vc-tree/interface").Key[];
            halfChecked: import("../vc-tree/interface").Key[];
        };
    };
    defaultCheckedKeys: {
        type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        default: import("../vc-tree/interface").Key[];
    };
    selectedKeys: {
        type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        default: import("../vc-tree/interface").Key[];
    };
    defaultSelectedKeys: {
        type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        default: import("../vc-tree/interface").Key[];
    };
    selectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadedKeys: {
        type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
        default: import("../vc-tree/interface").Key[];
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: import("vue").PropType<(nodeProps: import("./Tree").AntdTreeNodeAttribute) => any>;
        default: (nodeProps: import("./Tree").AntdTreeNodeAttribute) => any;
    };
    switcherIcon: import("vue-types").VueTypeValidableDef<any>;
    prefixCls: StringConstructor;
    replaceFields: {
        type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
        default: import("../vc-tree/interface").FieldNames;
    };
    blockNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    openAnimation: import("vue-types").VueTypeValidableDef<any>;
    onDoubleclick: {
        type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
    };
    'onUpdate:selectedKeys': {
        type: import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
        default: (keys: import("../vc-tree/interface").Key[]) => void;
    };
    'onUpdate:checkedKeys': {
        type: import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
        default: (keys: import("../vc-tree/interface").Key[]) => void;
    };
    'onUpdate:expandedKeys': {
        type: import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
        default: (keys: import("../vc-tree/interface").Key[]) => void;
    };
    focusable: {
        type: BooleanConstructor;
        default: any;
    };
    activeKey: import("vue").PropType<import("../vc-tree/interface").Key>;
    tabindex: NumberConstructor;
    children: import("vue-types").VueTypeValidableDef<any>;
    treeData: {
        type: import("vue").PropType<import("../vc-tree/interface").DataNode[]>;
    };
    fieldNames: {
        type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
    };
    expandAction: import("vue").PropType<import("../vc-tree/props").ExpandAction>;
    allowDrop: {
        type: import("vue").PropType<import("../vc-tree/props").AllowDrop<import("../vc-tree/interface").DataNode>>;
    };
    dropIndicatorRender: {
        type: import("vue").PropType<(props: {
            dropPosition: 0 | 1 | -1;
            dropLevelOffset: number;
            indent: number;
            prefixCls: string;
            direction: import("../vc-tree/interface").Direction;
        }) => any>;
    };
    onFocus: {
        type: import("vue").PropType<(e: FocusEvent) => void>;
    };
    onBlur: {
        type: import("vue").PropType<(e: FocusEvent) => void>;
    };
    onKeydown: {
        type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
    };
    onContextmenu: {
        type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
    };
    onClick: {
        type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
    };
    onDblclick: {
        type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
    };
    onScroll: {
        type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
    };
    onExpand: {
        type: import("vue").PropType<(expandedKeys: import("../vc-tree/interface").Key[], info: {
            node: import("../vc-tree/interface").EventDataNode;
            expanded: boolean;
            nativeEvent: MouseEvent;
        }) => void>;
    };
    onCheck: {
        type: import("vue").PropType<(checked: import("../vc-tree/interface").Key[] | {
            checked: import("../vc-tree/interface").Key[];
            halfChecked: import("../vc-tree/interface").Key[];
        }, info: import("../vc-tree/props").CheckInfo) => void>;
    };
    onSelect: {
        type: import("vue").PropType<(selectedKeys: import("../vc-tree/interface").Key[], info: {
            event: "select";
            selected: boolean;
            node: import("../vc-tree/interface").EventDataNode;
            selectedNodes: import("../vc-tree/interface").DataNode[];
            nativeEvent: MouseEvent;
        }) => void>;
    };
    onLoad: {
        type: import("vue").PropType<(loadedKeys: import("../vc-tree/interface").Key[], info: {
            event: "load";
            node: import("../vc-tree/interface").EventDataNode;
        }) => void>;
    };
    loadData: {
        type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => Promise<any>>;
    };
    onMouseenter: {
        type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
    };
    onMouseleave: {
        type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
    };
    onRightClick: {
        type: import("vue").PropType<(info: {
            event: MouseEvent;
            node: import("../vc-tree/interface").EventDataNode;
        }) => void>;
    };
    onDragstart: {
        type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDragenter: {
        type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
            expandedKeys: import("../vc-tree/interface").Key[];
        }) => void>;
    };
    onDragover: {
        type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDragleave: {
        type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDragend: {
        type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
    };
    onDrop: {
        type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
            dragNode: import("../vc-tree/interface").EventDataNode;
            dragNodesKeys: import("../vc-tree/interface").Key[];
            dropPosition: number;
            dropToGap: boolean;
        }) => void>;
    };
    onActiveChange: {
        type: import("vue").PropType<(key: import("../vc-tree/interface").Key) => void>;
    };
    filterTreeNode: {
        type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => boolean>;
    };
    motion: import("vue-types").VueTypeValidableDef<any>;
    height: NumberConstructor;
    itemHeight: NumberConstructor;
    virtual: {
        type: BooleanConstructor;
        default: any;
    };
    direction: {
        type: import("vue").PropType<import("../vc-tree/interface").Direction>;
    };
    rootClassName: StringConstructor;
    rootStyle: import("vue").PropType<import("vue").CSSProperties>;
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    draggable: boolean;
    icon: (nodeProps: import("./Tree").AntdTreeNodeAttribute) => any;
    multiple: boolean;
    disabled: boolean;
    virtual: boolean;
    selectedKeys: import("../vc-tree/interface").Key[];
    selectable: boolean;
    'onUpdate:selectedKeys': (keys: import("../vc-tree/interface").Key[]) => void;
    checkable: boolean;
    expandedKeys: import("../vc-tree/interface").Key[];
    loadedKeys: import("../vc-tree/interface").Key[];
    checkedKeys: import("../vc-tree/interface").Key[] | {
        checked: import("../vc-tree/interface").Key[];
        halfChecked: import("../vc-tree/interface").Key[];
    };
    showIcon: boolean;
    focusable: boolean;
    showLine: boolean | {
        showLeafIcon: boolean;
    };
    checkStrictly: boolean;
    defaultExpandParent: boolean;
    autoExpandParent: boolean;
    defaultExpandAll: boolean;
    defaultExpandedKeys: import("../vc-tree/interface").Key[];
    defaultCheckedKeys: import("../vc-tree/interface").Key[];
    defaultSelectedKeys: import("../vc-tree/interface").Key[];
    replaceFields: import("../vc-tree/interface").FieldNames;
    blockNode: boolean;
    'onUpdate:checkedKeys': (keys: import("../vc-tree/interface").Key[]) => void;
    'onUpdate:expandedKeys': (keys: import("../vc-tree/interface").Key[]) => void;
}, {}, string, import("../_util/type").CustomSlotsType<{
    icon?: any;
    title?: any;
    switcherIcon?: any;
    titleRender?: any;
    default?: any;
    leafIcon?: any;
}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    DirectoryTree: import("vue").DefineComponent<{
        expandAction: {
            type: import("vue").PropType<import("./DirectoryTree").ExpandAction>;
            default: import("./DirectoryTree").ExpandAction;
        };
        showLine: {
            type: import("vue").PropType<boolean | {
                showLeafIcon: boolean;
            }>;
            default: boolean | {
                showLeafIcon: boolean;
            };
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoExpandParent: {
            type: BooleanConstructor;
            default: boolean;
        };
        checkStrictly: {
            type: BooleanConstructor;
            default: boolean;
        };
        checkable: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultExpandAll: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultExpandParent: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultExpandedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            default: import("../vc-tree/interface").Key[];
        };
        expandedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            default: import("../vc-tree/interface").Key[];
        };
        checkedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[] | {
                checked: import("../vc-tree/interface").Key[];
                halfChecked: import("../vc-tree/interface").Key[];
            }>;
            default: import("../vc-tree/interface").Key[] | {
                checked: import("../vc-tree/interface").Key[];
                halfChecked: import("../vc-tree/interface").Key[];
            };
        };
        defaultCheckedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            default: import("../vc-tree/interface").Key[];
        };
        selectedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            default: import("../vc-tree/interface").Key[];
        };
        defaultSelectedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            default: import("../vc-tree/interface").Key[];
        };
        selectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            default: import("../vc-tree/interface").Key[];
        };
        draggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        showIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
        icon: {
            type: import("vue").PropType<(nodeProps: import("./Tree").AntdTreeNodeAttribute) => any>;
            default: (nodeProps: import("./Tree").AntdTreeNodeAttribute) => any;
        };
        switcherIcon: import("vue-types").VueTypeValidableDef<any>;
        prefixCls: StringConstructor;
        replaceFields: {
            type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
            default: import("../vc-tree/interface").FieldNames;
        };
        blockNode: {
            type: BooleanConstructor;
            default: boolean;
        };
        openAnimation: import("vue-types").VueTypeValidableDef<any>;
        onDoubleclick: {
            type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
        };
        'onUpdate:selectedKeys': {
            type: import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
            default: (keys: import("../vc-tree/interface").Key[]) => void;
        };
        'onUpdate:checkedKeys': {
            type: import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
            default: (keys: import("../vc-tree/interface").Key[]) => void;
        };
        'onUpdate:expandedKeys': {
            type: import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
            default: (keys: import("../vc-tree/interface").Key[]) => void;
        };
        focusable: {
            type: BooleanConstructor;
            default: any;
        };
        activeKey: import("vue").PropType<import("../vc-tree/interface").Key>;
        tabindex: NumberConstructor;
        children: import("vue-types").VueTypeValidableDef<any>;
        treeData: {
            type: import("vue").PropType<import("../vc-tree/interface").DataNode[]>;
        };
        fieldNames: {
            type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
        };
        allowDrop: {
            type: import("vue").PropType<import("../vc-tree/props").AllowDrop<import("../vc-tree/interface").DataNode>>;
        };
        dropIndicatorRender: {
            type: import("vue").PropType<(props: {
                dropPosition: 0 | 1 | -1;
                dropLevelOffset: number;
                indent: number;
                prefixCls: string;
                direction: import("../vc-tree/interface").Direction;
            }) => any>;
        };
        onFocus: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onKeydown: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
        };
        onDblclick: {
            type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
        };
        onScroll: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        onExpand: {
            type: import("vue").PropType<(expandedKeys: import("../vc-tree/interface").Key[], info: {
                node: import("../vc-tree/interface").EventDataNode;
                expanded: boolean;
                nativeEvent: MouseEvent;
            }) => void>;
        };
        onCheck: {
            type: import("vue").PropType<(checked: import("../vc-tree/interface").Key[] | {
                checked: import("../vc-tree/interface").Key[];
                halfChecked: import("../vc-tree/interface").Key[];
            }, info: import("../vc-tree/props").CheckInfo) => void>;
        };
        onSelect: {
            type: import("vue").PropType<(selectedKeys: import("../vc-tree/interface").Key[], info: {
                event: "select";
                selected: boolean;
                node: import("../vc-tree/interface").EventDataNode;
                selectedNodes: import("../vc-tree/interface").DataNode[];
                nativeEvent: MouseEvent;
            }) => void>;
        };
        onLoad: {
            type: import("vue").PropType<(loadedKeys: import("../vc-tree/interface").Key[], info: {
                event: "load";
                node: import("../vc-tree/interface").EventDataNode;
            }) => void>;
        };
        loadData: {
            type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => Promise<any>>;
        };
        onMouseenter: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
        };
        onMouseleave: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
        };
        onRightClick: {
            type: import("vue").PropType<(info: {
                event: MouseEvent;
                node: import("../vc-tree/interface").EventDataNode;
            }) => void>;
        };
        onDragstart: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDragenter: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                expandedKeys: import("../vc-tree/interface").Key[];
            }) => void>;
        };
        onDragover: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDragleave: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDragend: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDrop: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                dragNode: import("../vc-tree/interface").EventDataNode;
                dragNodesKeys: import("../vc-tree/interface").Key[];
                dropPosition: number;
                dropToGap: boolean;
            }) => void>;
        };
        onActiveChange: {
            type: import("vue").PropType<(key: import("../vc-tree/interface").Key) => void>;
        };
        filterTreeNode: {
            type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => boolean>;
        };
        motion: import("vue-types").VueTypeValidableDef<any>;
        height: NumberConstructor;
        itemHeight: NumberConstructor;
        virtual: {
            type: BooleanConstructor;
            default: any;
        };
        direction: {
            type: import("vue").PropType<import("../vc-tree/interface").Direction>;
        };
        rootClassName: StringConstructor;
        rootStyle: import("vue").PropType<import("vue").CSSProperties>;
    }, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        expandAction: {
            type: import("vue").PropType<import("./DirectoryTree").ExpandAction>;
            default: import("./DirectoryTree").ExpandAction;
        };
        showLine: {
            type: import("vue").PropType<boolean | {
                showLeafIcon: boolean;
            }>;
            default: boolean | {
                showLeafIcon: boolean;
            };
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoExpandParent: {
            type: BooleanConstructor;
            default: boolean;
        };
        checkStrictly: {
            type: BooleanConstructor;
            default: boolean;
        };
        checkable: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultExpandAll: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultExpandParent: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultExpandedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            default: import("../vc-tree/interface").Key[];
        };
        expandedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            default: import("../vc-tree/interface").Key[];
        };
        checkedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[] | {
                checked: import("../vc-tree/interface").Key[];
                halfChecked: import("../vc-tree/interface").Key[];
            }>;
            default: import("../vc-tree/interface").Key[] | {
                checked: import("../vc-tree/interface").Key[];
                halfChecked: import("../vc-tree/interface").Key[];
            };
        };
        defaultCheckedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            default: import("../vc-tree/interface").Key[];
        };
        selectedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            default: import("../vc-tree/interface").Key[];
        };
        defaultSelectedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            default: import("../vc-tree/interface").Key[];
        };
        selectable: {
            type: BooleanConstructor;
            default: boolean;
        };
        loadedKeys: {
            type: import("vue").PropType<import("../vc-tree/interface").Key[]>;
            default: import("../vc-tree/interface").Key[];
        };
        draggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        showIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
        icon: {
            type: import("vue").PropType<(nodeProps: import("./Tree").AntdTreeNodeAttribute) => any>;
            default: (nodeProps: import("./Tree").AntdTreeNodeAttribute) => any;
        };
        switcherIcon: import("vue-types").VueTypeValidableDef<any>;
        prefixCls: StringConstructor;
        replaceFields: {
            type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
            default: import("../vc-tree/interface").FieldNames;
        };
        blockNode: {
            type: BooleanConstructor;
            default: boolean;
        };
        openAnimation: import("vue-types").VueTypeValidableDef<any>;
        onDoubleclick: {
            type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
        };
        'onUpdate:selectedKeys': {
            type: import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
            default: (keys: import("../vc-tree/interface").Key[]) => void;
        };
        'onUpdate:checkedKeys': {
            type: import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
            default: (keys: import("../vc-tree/interface").Key[]) => void;
        };
        'onUpdate:expandedKeys': {
            type: import("vue").PropType<(keys: import("../vc-tree/interface").Key[]) => void>;
            default: (keys: import("../vc-tree/interface").Key[]) => void;
        };
        focusable: {
            type: BooleanConstructor;
            default: any;
        };
        activeKey: import("vue").PropType<import("../vc-tree/interface").Key>;
        tabindex: NumberConstructor;
        children: import("vue-types").VueTypeValidableDef<any>;
        treeData: {
            type: import("vue").PropType<import("../vc-tree/interface").DataNode[]>;
        };
        fieldNames: {
            type: import("vue").PropType<import("../vc-tree/interface").FieldNames>;
        };
        allowDrop: {
            type: import("vue").PropType<import("../vc-tree/props").AllowDrop<import("../vc-tree/interface").DataNode>>;
        };
        dropIndicatorRender: {
            type: import("vue").PropType<(props: {
                dropPosition: 0 | 1 | -1;
                dropLevelOffset: number;
                indent: number;
                prefixCls: string;
                direction: import("../vc-tree/interface").Direction;
            }) => any>;
        };
        onFocus: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onBlur: {
            type: import("vue").PropType<(e: FocusEvent) => void>;
        };
        onKeydown: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        onContextmenu: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        onClick: {
            type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
        };
        onDblclick: {
            type: import("vue").PropType<import("../vc-tree/contextTypes").NodeMouseEventHandler>;
        };
        onScroll: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        onExpand: {
            type: import("vue").PropType<(expandedKeys: import("../vc-tree/interface").Key[], info: {
                node: import("../vc-tree/interface").EventDataNode;
                expanded: boolean;
                nativeEvent: MouseEvent;
            }) => void>;
        };
        onCheck: {
            type: import("vue").PropType<(checked: import("../vc-tree/interface").Key[] | {
                checked: import("../vc-tree/interface").Key[];
                halfChecked: import("../vc-tree/interface").Key[];
            }, info: import("../vc-tree/props").CheckInfo) => void>;
        };
        onSelect: {
            type: import("vue").PropType<(selectedKeys: import("../vc-tree/interface").Key[], info: {
                event: "select";
                selected: boolean;
                node: import("../vc-tree/interface").EventDataNode;
                selectedNodes: import("../vc-tree/interface").DataNode[];
                nativeEvent: MouseEvent;
            }) => void>;
        };
        onLoad: {
            type: import("vue").PropType<(loadedKeys: import("../vc-tree/interface").Key[], info: {
                event: "load";
                node: import("../vc-tree/interface").EventDataNode;
            }) => void>;
        };
        loadData: {
            type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => Promise<any>>;
        };
        onMouseenter: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
        };
        onMouseleave: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeMouseEventParams) => void>;
        };
        onRightClick: {
            type: import("vue").PropType<(info: {
                event: MouseEvent;
                node: import("../vc-tree/interface").EventDataNode;
            }) => void>;
        };
        onDragstart: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDragenter: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                expandedKeys: import("../vc-tree/interface").Key[];
            }) => void>;
        };
        onDragover: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDragleave: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDragend: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams) => void>;
        };
        onDrop: {
            type: import("vue").PropType<(info: import("../vc-tree/contextTypes").NodeDragEventParams & {
                dragNode: import("../vc-tree/interface").EventDataNode;
                dragNodesKeys: import("../vc-tree/interface").Key[];
                dropPosition: number;
                dropToGap: boolean;
            }) => void>;
        };
        onActiveChange: {
            type: import("vue").PropType<(key: import("../vc-tree/interface").Key) => void>;
        };
        filterTreeNode: {
            type: import("vue").PropType<(treeNode: import("../vc-tree/interface").EventDataNode) => boolean>;
        };
        motion: import("vue-types").VueTypeValidableDef<any>;
        height: NumberConstructor;
        itemHeight: NumberConstructor;
        virtual: {
            type: BooleanConstructor;
            default: any;
        };
        direction: {
            type: import("vue").PropType<import("../vc-tree/interface").Direction>;
        };
        rootClassName: StringConstructor;
        rootStyle: import("vue").PropType<import("vue").CSSProperties>;
    }>>, {
        draggable: boolean;
        icon: (nodeProps: import("./Tree").AntdTreeNodeAttribute) => any;
        multiple: boolean;
        disabled: boolean;
        virtual: boolean;
        selectedKeys: import("../vc-tree/interface").Key[];
        selectable: boolean;
        'onUpdate:selectedKeys': (keys: import("../vc-tree/interface").Key[]) => void;
        checkable: boolean;
        expandedKeys: import("../vc-tree/interface").Key[];
        loadedKeys: import("../vc-tree/interface").Key[];
        checkedKeys: import("../vc-tree/interface").Key[] | {
            checked: import("../vc-tree/interface").Key[];
            halfChecked: import("../vc-tree/interface").Key[];
        };
        showIcon: boolean;
        focusable: boolean;
        showLine: boolean | {
            showLeafIcon: boolean;
        };
        expandAction: import("./DirectoryTree").ExpandAction;
        checkStrictly: boolean;
        defaultExpandParent: boolean;
        autoExpandParent: boolean;
        defaultExpandAll: boolean;
        defaultExpandedKeys: import("../vc-tree/interface").Key[];
        defaultCheckedKeys: import("../vc-tree/interface").Key[];
        defaultSelectedKeys: import("../vc-tree/interface").Key[];
        replaceFields: import("../vc-tree/interface").FieldNames;
        blockNode: boolean;
        'onUpdate:checkedKeys': (keys: import("../vc-tree/interface").Key[]) => void;
        'onUpdate:expandedKeys': (keys: import("../vc-tree/interface").Key[]) => void;
    }, import("../_util/type").CustomSlotsType<{
        icon?: any;
        title?: any;
        switcherIcon?: any;
        titleRender?: any;
        default?: any;
    }>>;
    TreeNode: import("vue").DefineComponent<{
        eventKey: (StringConstructor | NumberConstructor)[];
        prefixCls: StringConstructor;
        title: import("vue-types").VueTypeValidableDef<any>;
        data: {
            type: import("vue").PropType<import("../vc-tree/interface").DataNode>;
            default: import("../vc-tree/interface").DataNode;
        };
        parent: {
            type: import("vue").PropType<import("../vc-tree/interface").DataNode>;
            default: import("../vc-tree/interface").DataNode;
        };
        isStart: {
            type: import("vue").PropType<boolean[]>;
        };
        isEnd: {
            type: import("vue").PropType<boolean[]>;
        };
        active: {
            type: BooleanConstructor;
            default: any;
        };
        onMousemove: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        isLeaf: {
            type: BooleanConstructor;
            default: any;
        };
        checkable: {
            type: BooleanConstructor;
            default: any;
        };
        selectable: {
            type: BooleanConstructor;
            default: any;
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        disableCheckbox: {
            type: BooleanConstructor;
            default: any;
        };
        icon: import("vue-types").VueTypeValidableDef<any>;
        switcherIcon: import("vue-types").VueTypeValidableDef<any>;
        domRef: {
            type: import("vue").PropType<(arg: any) => void>;
        };
    }, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        eventKey: (StringConstructor | NumberConstructor)[];
        prefixCls: StringConstructor;
        title: import("vue-types").VueTypeValidableDef<any>;
        data: {
            type: import("vue").PropType<import("../vc-tree/interface").DataNode>;
            default: import("../vc-tree/interface").DataNode;
        };
        parent: {
            type: import("vue").PropType<import("../vc-tree/interface").DataNode>;
            default: import("../vc-tree/interface").DataNode;
        };
        isStart: {
            type: import("vue").PropType<boolean[]>;
        };
        isEnd: {
            type: import("vue").PropType<boolean[]>;
        };
        active: {
            type: BooleanConstructor;
            default: any;
        };
        onMousemove: {
            type: import("vue").PropType<import("../_util/EventInterface").EventHandler>;
        };
        isLeaf: {
            type: BooleanConstructor;
            default: any;
        };
        checkable: {
            type: BooleanConstructor;
            default: any;
        };
        selectable: {
            type: BooleanConstructor;
            default: any;
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        disableCheckbox: {
            type: BooleanConstructor;
            default: any;
        };
        icon: import("vue-types").VueTypeValidableDef<any>;
        switcherIcon: import("vue-types").VueTypeValidableDef<any>;
        domRef: {
            type: import("vue").PropType<(arg: any) => void>;
        };
    }>>, {
        data: import("../vc-tree/interface").DataNode;
        active: boolean;
        disabled: boolean;
        selectable: boolean;
        checkable: boolean;
        disableCheckbox: boolean;
        isLeaf: boolean;
        parent: import("../vc-tree/interface").DataNode;
    }, {}>;
    install: (app: App) => App<any>;
};
export default _default;
