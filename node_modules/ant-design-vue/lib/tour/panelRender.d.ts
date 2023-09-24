import type { TourBtnProps } from './interface';
import type { VueNode } from '../_util/type';
declare const panelRender: import("vue").DefineComponent<{
    cover: {
        type: import("vue").PropType<VueNode>;
    };
    nextButtonProps: {
        type: import("vue").PropType<TourBtnProps>;
    };
    prevButtonProps: {
        type: import("vue").PropType<TourBtnProps>;
    };
    current: {
        type: NumberConstructor;
    };
    type: {
        type: import("vue").PropType<"default" | "primary">;
    };
    prefixCls: {
        type: StringConstructor;
    };
    total: {
        type: NumberConstructor;
    };
    onClose: {
        type: import("vue").PropType<(e: MouseEvent) => void>;
        default: (e: MouseEvent) => void;
    };
    onFinish: {
        type: import("vue").PropType<(e: MouseEvent) => void>;
        default: (e: MouseEvent) => void;
    };
    renderPanel: {
        type: import("vue").PropType<(step: any, current: number) => VueNode>;
        default: (step: any, current: number) => VueNode;
    };
    onPrev: {
        type: import("vue").PropType<(e: MouseEvent) => void>;
        default: (e: MouseEvent) => void;
    };
    onNext: {
        type: import("vue").PropType<(e: MouseEvent) => void>;
        default: (e: MouseEvent) => void;
    };
    arrow: {
        type: import("vue").PropType<boolean | {
            pointAtCenter: boolean;
        }>;
        default: boolean | {
            pointAtCenter: boolean;
        };
    };
    target: {
        type: import("vue").PropType<HTMLElement | (() => HTMLElement) | (() => null)>;
        default: HTMLElement | (() => HTMLElement) | (() => null);
    };
    title: {
        type: import("vue").PropType<VueNode>;
        default: VueNode;
    };
    description: {
        type: import("vue").PropType<VueNode>;
        default: VueNode;
    };
    placement: {
        type: import("vue").PropType<import("../vc-tour/placements").PlacementType>;
        default: import("../vc-tour/placements").PlacementType;
    };
    mask: {
        type: import("vue").PropType<boolean | {
            style?: import("vue").CSSProperties;
            color?: string;
        }>;
        default: boolean | {
            style?: import("vue").CSSProperties;
            color?: string;
        };
    };
    className: {
        type: StringConstructor;
    };
    style: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    scrollIntoViewOptions: {
        type: import("vue").PropType<boolean | ScrollIntoViewOptions>;
        default: boolean | ScrollIntoViewOptions;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    cover: {
        type: import("vue").PropType<VueNode>;
    };
    nextButtonProps: {
        type: import("vue").PropType<TourBtnProps>;
    };
    prevButtonProps: {
        type: import("vue").PropType<TourBtnProps>;
    };
    current: {
        type: NumberConstructor;
    };
    type: {
        type: import("vue").PropType<"default" | "primary">;
    };
    prefixCls: {
        type: StringConstructor;
    };
    total: {
        type: NumberConstructor;
    };
    onClose: {
        type: import("vue").PropType<(e: MouseEvent) => void>;
        default: (e: MouseEvent) => void;
    };
    onFinish: {
        type: import("vue").PropType<(e: MouseEvent) => void>;
        default: (e: MouseEvent) => void;
    };
    renderPanel: {
        type: import("vue").PropType<(step: any, current: number) => VueNode>;
        default: (step: any, current: number) => VueNode;
    };
    onPrev: {
        type: import("vue").PropType<(e: MouseEvent) => void>;
        default: (e: MouseEvent) => void;
    };
    onNext: {
        type: import("vue").PropType<(e: MouseEvent) => void>;
        default: (e: MouseEvent) => void;
    };
    arrow: {
        type: import("vue").PropType<boolean | {
            pointAtCenter: boolean;
        }>;
        default: boolean | {
            pointAtCenter: boolean;
        };
    };
    target: {
        type: import("vue").PropType<HTMLElement | (() => HTMLElement) | (() => null)>;
        default: HTMLElement | (() => HTMLElement) | (() => null);
    };
    title: {
        type: import("vue").PropType<VueNode>;
        default: VueNode;
    };
    description: {
        type: import("vue").PropType<VueNode>;
        default: VueNode;
    };
    placement: {
        type: import("vue").PropType<import("../vc-tour/placements").PlacementType>;
        default: import("../vc-tour/placements").PlacementType;
    };
    mask: {
        type: import("vue").PropType<boolean | {
            style?: import("vue").CSSProperties;
            color?: string;
        }>;
        default: boolean | {
            style?: import("vue").CSSProperties;
            color?: string;
        };
    };
    className: {
        type: StringConstructor;
    };
    style: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    scrollIntoViewOptions: {
        type: import("vue").PropType<boolean | ScrollIntoViewOptions>;
        default: boolean | ScrollIntoViewOptions;
    };
}>>, {
    style: import("vue").CSSProperties;
    title: VueNode;
    mask: boolean | {
        style?: import("vue").CSSProperties;
        color?: string;
    };
    description: VueNode;
    onPrev: (e: MouseEvent) => void;
    onNext: (e: MouseEvent) => void;
    target: HTMLElement | (() => HTMLElement) | (() => null);
    placement: import("../vc-tour/placements").PlacementType;
    arrow: boolean | {
        pointAtCenter: boolean;
    };
    scrollIntoViewOptions: boolean | ScrollIntoViewOptions;
    onClose: (e: MouseEvent) => void;
    onFinish: (e: MouseEvent) => void;
    renderPanel: (step: any, current: number) => VueNode;
}, {}>;
export default panelRender;
