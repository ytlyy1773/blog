import type { ExtractPropTypes, HTMLAttributes, PropType } from 'vue';
import type { MouseEventHandler } from '../_util/EventInterface';
import type { Key, VueNode } from '../_util/type';
import RawItem from './RawItem';
declare const RESPONSIVE: "responsive";
declare const INVALIDATE: "invalidate";
declare const overflowProps: () => {
    id: StringConstructor;
    prefixCls: StringConstructor;
    data: ArrayConstructor;
    itemKey: PropType<Key | ((item: any) => Key)>;
    /** Used for `responsive`. It will limit render node to avoid perf issue */
    itemWidth: {
        type: NumberConstructor;
        default: number;
    };
    renderItem: PropType<(item: any) => VueNode>;
    /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
    renderRawItem: PropType<(item: any, index: number) => VueNode>;
    maxCount: PropType<number | "responsive" | "invalidate">;
    renderRest: PropType<(items: any[]) => VueNode>;
    /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
    renderRawRest: PropType<(items: any[]) => VueNode>;
    suffix: import("vue-types").VueTypeValidableDef<any>;
    component: StringConstructor;
    itemComponent: import("vue-types").VueTypeValidableDef<any>;
    /** @private This API may be refactor since not well design */
    onVisibleChange: PropType<(visibleCount: number) => void>;
    /** When set to `full`, ssr will render full items by default and remove at client side */
    ssr: PropType<"full">;
    onMousedown: PropType<MouseEventHandler>;
};
type InterOverflowProps = Partial<ExtractPropTypes<ReturnType<typeof overflowProps>>>;
export type OverflowProps = HTMLAttributes & InterOverflowProps;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            class?: any;
            suffix?: any;
            itemComponent?: any;
            inlist?: any;
            readonly data?: unknown[];
            style?: import("vue").StyleValue;
            readonly title?: string;
            readonly contextmenu?: string;
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
            readonly onMouseenter?: (payload: MouseEvent) => void;
            readonly onMouseover?: (payload: MouseEvent) => void;
            readonly onMouseleave?: (payload: MouseEvent) => void;
            tabindex?: string | number;
            readonly 'aria-hidden'?: boolean | "false" | "true";
            readonly onClick?: (payload: MouseEvent) => void;
            readonly onCopy?: (payload: ClipboardEvent) => void;
            readonly onCut?: (payload: ClipboardEvent) => void;
            readonly onPaste?: (payload: ClipboardEvent) => void;
            readonly onCompositionend?: (payload: CompositionEvent) => void;
            readonly onCompositionstart?: (payload: CompositionEvent) => void;
            readonly onCompositionupdate?: (payload: CompositionEvent) => void;
            readonly onDrag?: (payload: DragEvent) => void;
            readonly onDragend?: (payload: DragEvent) => void;
            readonly onDragenter?: (payload: DragEvent) => void;
            readonly onDragexit?: (payload: DragEvent) => void;
            readonly onDragleave?: (payload: DragEvent) => void;
            readonly onDragover?: (payload: DragEvent) => void;
            readonly onDragstart?: (payload: DragEvent) => void;
            readonly onDrop?: (payload: DragEvent) => void;
            readonly onFocus?: (payload: FocusEvent) => void;
            readonly onFocusin?: (payload: FocusEvent) => void;
            readonly onFocusout?: (payload: FocusEvent) => void;
            readonly onBlur?: (payload: FocusEvent) => void;
            readonly onChange?: (payload: Event) => void;
            readonly onBeforeinput?: (payload: Event) => void;
            readonly onInput?: (payload: Event) => void;
            readonly onReset?: (payload: Event) => void;
            readonly onSubmit?: (payload: Event) => void;
            readonly onInvalid?: (payload: Event) => void;
            readonly onLoad?: (payload: Event) => void;
            readonly onError?: (payload: Event) => void;
            readonly onKeydown?: (payload: KeyboardEvent) => void;
            readonly onKeypress?: (payload: KeyboardEvent) => void;
            readonly onKeyup?: (payload: KeyboardEvent) => void;
            readonly onAuxclick?: (payload: MouseEvent) => void;
            readonly onContextmenu?: (payload: MouseEvent) => void;
            readonly onDblclick?: (payload: MouseEvent) => void;
            readonly onMousedown?: ((payload: MouseEvent) => void) & MouseEventHandler;
            readonly onMousemove?: (payload: MouseEvent) => void;
            readonly onMouseout?: (payload: MouseEvent) => void;
            readonly onMouseup?: (payload: MouseEvent) => void;
            readonly onAbort?: (payload: Event) => void;
            readonly onCanplay?: (payload: Event) => void;
            readonly onCanplaythrough?: (payload: Event) => void;
            readonly onDurationchange?: (payload: Event) => void;
            readonly onEmptied?: (payload: Event) => void;
            readonly onEncrypted?: (payload: Event) => void;
            readonly onEnded?: (payload: Event) => void;
            readonly onLoadeddata?: (payload: Event) => void;
            readonly onLoadedmetadata?: (payload: Event) => void;
            readonly onLoadstart?: (payload: Event) => void;
            readonly onPause?: (payload: Event) => void;
            readonly onPlay?: (payload: Event) => void;
            readonly onPlaying?: (payload: Event) => void;
            readonly onProgress?: (payload: Event) => void;
            readonly onRatechange?: (payload: Event) => void;
            readonly onSeeked?: (payload: Event) => void;
            readonly onSeeking?: (payload: Event) => void;
            readonly onStalled?: (payload: Event) => void;
            readonly onSuspend?: (payload: Event) => void;
            readonly onTimeupdate?: (payload: Event) => void;
            readonly onVolumechange?: (payload: Event) => void;
            readonly onWaiting?: (payload: Event) => void;
            readonly onSelect?: (payload: Event) => void;
            readonly onScroll?: (payload: UIEvent) => void;
            readonly onTouchcancel?: (payload: TouchEvent) => void;
            readonly onTouchend?: (payload: TouchEvent) => void;
            readonly onTouchmove?: (payload: TouchEvent) => void;
            readonly onTouchstart?: (payload: TouchEvent) => void;
            readonly onPointerdown?: (payload: PointerEvent) => void;
            readonly onPointermove?: (payload: PointerEvent) => void;
            readonly onPointerup?: (payload: PointerEvent) => void;
            readonly onPointercancel?: (payload: PointerEvent) => void;
            readonly onPointerenter?: (payload: PointerEvent) => void;
            readonly onPointerleave?: (payload: PointerEvent) => void;
            readonly onPointerover?: (payload: PointerEvent) => void;
            readonly onPointerout?: (payload: PointerEvent) => void;
            readonly onWheel?: (payload: WheelEvent) => void;
            readonly onAnimationstart?: (payload: AnimationEvent) => void;
            readonly onAnimationend?: (payload: AnimationEvent) => void;
            readonly onAnimationiteration?: (payload: AnimationEvent) => void;
            readonly onTransitionend?: (payload: TransitionEvent) => void;
            readonly onTransitionstart?: (payload: TransitionEvent) => void;
            readonly draggable?: boolean | "false" | "true";
            readonly hidden?: boolean | "false" | "true";
            readonly color?: string;
            readonly translate?: "yes" | "no";
            readonly prefixCls?: string;
            role?: string;
            readonly id?: string;
            readonly 'aria-checked'?: "mixed" | (boolean | "false" | "true");
            readonly is?: string;
            readonly onVisibleChange?: (visibleCount: number) => void;
            readonly itemKey?: Key | ((item: any) => Key);
            readonly component?: string;
            readonly renderItem?: (item: any) => VueNode;
            readonly itemWidth?: number;
            readonly renderRawItem?: (item: any, index: number) => VueNode;
            readonly maxCount?: number | "responsive" | "invalidate";
            readonly renderRest?: (items: any[]) => VueNode;
            readonly renderRawRest?: (items: any[]) => VueNode;
            readonly ssr?: "full";
            readonly innerHTML?: string;
            readonly accesskey?: string;
            readonly contenteditable?: "inherit" | (boolean | "false" | "true");
            readonly dir?: string;
            readonly lang?: string;
            readonly placeholder?: string;
            readonly spellcheck?: boolean | "false" | "true";
            readonly radiogroup?: string;
            readonly about?: string;
            readonly datatype?: string;
            readonly prefix?: string;
            readonly property?: string;
            readonly resource?: string;
            readonly typeof?: string;
            readonly vocab?: string;
            readonly autocapitalize?: string;
            readonly autocorrect?: string;
            readonly autosave?: string;
            readonly itemprop?: string;
            readonly itemscope?: boolean | "false" | "true";
            readonly itemtype?: string;
            readonly itemid?: string;
            readonly itemref?: string;
            readonly results?: string | number;
            readonly security?: string;
            readonly unselectable?: "on" | "off";
            readonly inputmode?: "none" | "text" | "search" | "url" | "email" | "decimal" | "tel" | "numeric";
            readonly 'aria-activedescendant'?: string;
            readonly 'aria-atomic'?: boolean | "false" | "true";
            readonly 'aria-autocomplete'?: "none" | "inline" | "list" | "both";
            readonly 'aria-busy'?: boolean | "false" | "true";
            readonly 'aria-colcount'?: string | number;
            readonly 'aria-colindex'?: string | number;
            readonly 'aria-colspan'?: string | number;
            readonly 'aria-controls'?: string;
            readonly 'aria-current'?: "time" | "page" | "date" | (boolean | "false" | "true") | "step" | "location";
            readonly 'aria-describedby'?: string;
            readonly 'aria-details'?: string;
            readonly 'aria-disabled'?: boolean | "false" | "true";
            readonly 'aria-dropeffect'?: "link" | "none" | "copy" | "move" | "popup" | "execute";
            readonly 'aria-errormessage'?: string;
            readonly 'aria-expanded'?: boolean | "false" | "true";
            readonly 'aria-flowto'?: string;
            readonly 'aria-grabbed'?: boolean | "false" | "true";
            readonly 'aria-haspopup'?: "dialog" | "menu" | "grid" | "listbox" | (boolean | "false" | "true") | "tree";
            readonly 'aria-invalid'?: (boolean | "false" | "true") | "grammar" | "spelling";
            readonly 'aria-keyshortcuts'?: string;
            readonly 'aria-label'?: string;
            readonly 'aria-labelledby'?: string;
            readonly 'aria-level'?: string | number;
            readonly 'aria-live'?: "off" | "assertive" | "polite";
            readonly 'aria-modal'?: boolean | "false" | "true";
            readonly 'aria-multiline'?: boolean | "false" | "true";
            readonly 'aria-multiselectable'?: boolean | "false" | "true";
            readonly 'aria-orientation'?: "vertical" | "horizontal";
            readonly 'aria-owns'?: string;
            readonly 'aria-placeholder'?: string;
            readonly 'aria-posinset'?: string | number;
            readonly 'aria-pressed'?: "mixed" | (boolean | "false" | "true");
            readonly 'aria-readonly'?: boolean | "false" | "true";
            readonly 'aria-relevant'?: "text" | "all" | "additions" | "additions text" | "removals";
            readonly 'aria-required'?: boolean | "false" | "true";
            readonly 'aria-roledescription'?: string;
            readonly 'aria-rowcount'?: string | number;
            readonly 'aria-rowindex'?: string | number;
            readonly 'aria-rowspan'?: string | number;
            readonly 'aria-selected'?: boolean | "false" | "true";
            readonly 'aria-setsize'?: string | number;
            readonly 'aria-sort'?: "none" | "ascending" | "descending" | "other";
            readonly 'aria-valuemax'?: string | number;
            readonly 'aria-valuemin'?: string | number;
            readonly 'aria-valuenow'?: string | number;
            readonly 'aria-valuetext'?: string;
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
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<OverflowProps>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            class?: any;
            suffix?: any;
            itemComponent?: any;
            inlist?: any;
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
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<OverflowProps> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<OverflowProps>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    class?: any;
    suffix?: any;
    itemComponent?: any;
    inlist?: any;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    readonly Item: typeof RawItem;
    readonly RESPONSIVE: typeof RESPONSIVE;
    readonly INVALIDATE: typeof INVALIDATE;
};
export default _default;
