import type { Dayjs } from 'dayjs';
import type { App } from 'vue';
import type { PickerTimeProps, RangePickerTimeProps } from '../date-picker/generatePicker';
declare const TimePicker: import("vue").DefineComponent<import("./time-picker").TimePickerProps<Dayjs>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("./time-picker").TimePickerProps<Dayjs>>, {}, {}>, TimeRangePicker: import("vue").DefineComponent<import("./time-picker").TimeRangePickerProps<Dayjs>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("./time-picker").TimeRangePickerProps<Dayjs>>, {}, {}>;
export interface TimeRangePickerProps extends Omit<RangePickerTimeProps<Dayjs>, 'picker'> {
    popupClassName?: string;
    valueFormat?: string;
}
export interface TimePickerProps extends Omit<PickerTimeProps<Dayjs>, 'picker'> {
    popupClassName?: string;
    valueFormat?: string;
}
export { TimePicker, TimeRangePicker };
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            style?: unknown;
            readonly value?: string | Dayjs;
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
            readonly mode?: import("../vc-picker/interface").PanelMode;
            readonly name?: string;
            class?: unknown;
            readonly onMouseenter?: import("../_util/EventInterface").MouseEventHandler;
            readonly onMouseleave?: import("../_util/EventInterface").MouseEventHandler;
            tabindex?: number;
            readonly onClick?: import("../_util/EventInterface").MouseEventHandler;
            readonly onFocus?: import("../_util/EventInterface").FocusEventHandler;
            readonly onBlur?: import("../_util/EventInterface").FocusEventHandler;
            readonly onChange?: (value: string | Dayjs, dateString: string) => void;
            readonly onKeydown?: (event: KeyboardEvent, preventDefault: () => void) => void;
            readonly onContextmenu?: import("../_util/EventInterface").MouseEventHandler;
            readonly onMousedown?: import("../_util/EventInterface").MouseEventHandler;
            readonly onMouseup?: import("../_util/EventInterface").MouseEventHandler;
            readonly size?: import("../config-provider").SizeType;
            readonly direction?: "rtl" | "ltr";
            readonly open?: boolean;
            readonly disabled?: boolean;
            readonly prefixCls?: string;
            readonly getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
            readonly autocomplete?: string;
            readonly prevIcon?: import("../_util/type").VueNode;
            readonly nextIcon?: import("../_util/type").VueNode;
            readonly superPrevIcon?: import("../_util/type").VueNode;
            readonly superNextIcon?: import("../_util/type").VueNode;
            readonly disabledDate?: (date: Dayjs) => boolean;
            readonly picker?: import("../vc-picker/interface").PickerMode;
            readonly locale?: import("../date-picker/generatePicker").PickerLocale;
            readonly format?: (string | import("../vc-picker/interface").CustomFormat<Dayjs> | (string | import("../vc-picker/interface").CustomFormat<Dayjs>)[]) & string;
            readonly hideDisabledOptions?: boolean;
            role?: string;
            readonly showHour?: boolean;
            readonly showMinute?: boolean;
            readonly showSecond?: boolean;
            readonly use12Hours?: boolean;
            readonly hourStep?: number;
            readonly minuteStep?: number;
            readonly secondStep?: number;
            readonly disabledTime?: import("../vc-picker/interface").DisabledTime<Dayjs>;
            readonly id?: string;
            readonly autofocus?: boolean;
            readonly status?: "" | "error" | "warning";
            readonly defaultValue?: string | Dayjs;
            readonly 'onUpdate:value'?: (value: string | Dayjs) => void;
            readonly popupStyle?: import("vue").CSSProperties;
            readonly popupClassName?: string;
            readonly transitionName?: string;
            readonly placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
            readonly onOpenChange?: (open: boolean) => void;
            readonly 'onUpdate:open'?: (open: boolean) => void;
            readonly placeholder?: string;
            readonly bordered?: boolean;
            readonly clearIcon?: import("../_util/type").VueNode;
            readonly allowClear?: boolean;
            readonly dropdownClassName?: string;
            readonly defaultOpen?: boolean;
            readonly suffixIcon?: import("../_util/type").VueNode;
            readonly dateRender?: import("../vc-picker/panels/DatePanel/DateBody").DateRender<Dayjs>;
            readonly defaultPickerValue?: string | Dayjs;
            readonly showTime?: boolean | import("../vc-picker/panels/TimePanel").SharedTimeProps<Dayjs>;
            readonly monthCellRender?: import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Dayjs>;
            readonly onOk?: (value: string | Dayjs) => void;
            readonly showNow?: boolean;
            readonly renderExtraFooter?: (mode: import("../vc-picker/interface").PanelMode) => import("../_util/type").VueNode;
            readonly showToday?: boolean;
            readonly presets?: import("../vc-picker/interface").PresetDate<Dayjs>[];
            readonly inputReadOnly?: boolean;
            readonly panelRender?: (originPanel: import("../_util/type").VueNode) => import("../_util/type").VueNode;
            readonly monthCellContentRender?: import("../vc-picker/panels/MonthPanel/MonthBody").MonthCellRender<Dayjs>;
            readonly valueFormat?: string;
            readonly addon?: () => void;
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
        $options: import("vue").ComponentOptionsBase<Readonly<import("./time-picker").TimePickerProps<Dayjs>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}> & {
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
    } & Readonly<import("./time-picker").TimePickerProps<Dayjs>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("./time-picker").TimePickerProps<Dayjs>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    TimePicker: import("vue").DefineComponent<import("./time-picker").TimePickerProps<Dayjs>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("./time-picker").TimePickerProps<Dayjs>>, {}, {}>;
    TimeRangePicker: import("vue").DefineComponent<import("./time-picker").TimeRangePickerProps<Dayjs>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("./time-picker").TimeRangePickerProps<Dayjs>>, {}, {}>;
    install: (app: App) => App<any>;
};
export default _default;
