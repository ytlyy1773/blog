import type { ExtractPropTypes } from 'vue';
export type SwipeDirection = 'left' | 'down' | 'right' | 'up' | string;
export type LazyLoadTypes = 'ondemand' | 'progressive';
export type CarouselEffect = 'scrollx' | 'fade';
export type DotPosition = 'top' | 'bottom' | 'left' | 'right';
export interface CarouselRef {
    goTo: (slide: number, dontAnimate?: boolean) => void;
    next: () => void;
    prev: () => void;
    autoplay: (palyType?: 'update' | 'leave' | 'blur') => void;
    innerSlider: any;
}
export declare const carouselProps: () => {
    effect: {
        type: import("vue").PropType<CarouselEffect>;
        default: CarouselEffect;
    };
    dots: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    easing: StringConstructor;
    beforeChange: {
        type: import("vue").PropType<(currentSlide: number, nextSlide: number) => void>;
        default: (currentSlide: number, nextSlide: number) => void;
    };
    afterChange: {
        type: import("vue").PropType<(currentSlide: number) => void>;
        default: (currentSlide: number) => void;
    };
    prefixCls: StringConstructor;
    accessibility: {
        type: BooleanConstructor;
        default: boolean;
    };
    nextArrow: import("vue-types").VueTypeValidableDef<any>;
    prevArrow: import("vue-types").VueTypeValidableDef<any>;
    pauseOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    adaptiveHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrows: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoplaySpeed: NumberConstructor;
    centerMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    centerPadding: StringConstructor;
    cssEase: StringConstructor;
    dotsClass: StringConstructor;
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    fade: {
        type: BooleanConstructor;
        default: boolean;
    };
    focusOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    infinite: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialSlide: NumberConstructor;
    lazyLoad: {
        type: import("vue").PropType<LazyLoadTypes>;
        default: LazyLoadTypes;
    };
    rtl: {
        type: BooleanConstructor;
        default: boolean;
    };
    slide: StringConstructor;
    slidesToShow: NumberConstructor;
    slidesToScroll: NumberConstructor;
    speed: NumberConstructor;
    swipe: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeToSlide: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeEvent: {
        type: import("vue").PropType<(swipeDirection: SwipeDirection) => void>;
        default: (swipeDirection: SwipeDirection) => void;
    };
    touchMove: {
        type: BooleanConstructor;
        default: boolean;
    };
    touchThreshold: NumberConstructor;
    variableWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    useCSS: {
        type: BooleanConstructor;
        default: boolean;
    };
    slickGoTo: NumberConstructor;
    responsive: ArrayConstructor;
    dotPosition: {
        type: import("vue").PropType<DotPosition>;
        default: DotPosition;
    };
    verticalSwiping: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type CarouselProps = Partial<ExtractPropTypes<ReturnType<typeof carouselProps>>>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            centerMode?: boolean;
            rtl?: boolean;
            vertical?: boolean;
            fade?: boolean;
            infinite?: boolean;
            lazyLoad?: LazyLoadTypes;
            useCSS?: boolean;
            dots?: boolean;
            swipeToSlide?: boolean;
            verticalSwiping?: boolean;
            swipeEvent?: (swipeDirection: string) => void;
            swipe?: boolean;
            variableWidth?: boolean;
            adaptiveHeight?: boolean;
            beforeChange?: (currentSlide: number, nextSlide: number) => void;
            afterChange?: (currentSlide: number) => void;
            accessibility?: boolean;
            draggable?: boolean;
            autoplay?: boolean;
            focusOnSelect?: boolean;
            pauseOnHover?: boolean;
            arrows?: boolean;
            touchMove?: boolean;
            effect?: CarouselEffect;
            dotPosition?: DotPosition;
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
            readonly slidesToShow?: number;
            readonly centerPadding?: string;
            readonly slidesToScroll?: number;
            readonly touchThreshold?: number;
            readonly speed?: number;
            readonly cssEase?: string;
            tabindex?: string | number;
            readonly dotsClass?: string;
            readonly initialSlide?: number;
            readonly autoplaySpeed?: number;
            readonly prevArrow?: any;
            readonly nextArrow?: any;
            readonly easing?: string;
            readonly responsive?: unknown[];
            readonly slide?: string;
            readonly slickGoTo?: number;
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
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
            effect: {
                type: import("vue").PropType<CarouselEffect>;
                default: CarouselEffect;
            };
            dots: {
                type: BooleanConstructor;
                default: boolean;
            };
            vertical: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoplay: {
                type: BooleanConstructor;
                default: boolean;
            };
            easing: StringConstructor;
            beforeChange: {
                type: import("vue").PropType<(currentSlide: number, nextSlide: number) => void>;
                default: (currentSlide: number, nextSlide: number) => void;
            };
            afterChange: {
                type: import("vue").PropType<(currentSlide: number) => void>;
                default: (currentSlide: number) => void;
            };
            prefixCls: StringConstructor;
            accessibility: {
                type: BooleanConstructor;
                default: boolean;
            };
            nextArrow: import("vue-types").VueTypeValidableDef<any>;
            prevArrow: import("vue-types").VueTypeValidableDef<any>;
            pauseOnHover: {
                type: BooleanConstructor;
                default: boolean;
            };
            adaptiveHeight: {
                type: BooleanConstructor;
                default: boolean;
            };
            arrows: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoplaySpeed: NumberConstructor;
            centerMode: {
                type: BooleanConstructor;
                default: boolean;
            };
            centerPadding: StringConstructor;
            cssEase: StringConstructor;
            dotsClass: StringConstructor;
            draggable: {
                type: BooleanConstructor;
                default: boolean;
            };
            fade: {
                type: BooleanConstructor;
                default: boolean;
            };
            focusOnSelect: {
                type: BooleanConstructor;
                default: boolean;
            };
            infinite: {
                type: BooleanConstructor;
                default: boolean;
            };
            initialSlide: NumberConstructor;
            lazyLoad: {
                type: import("vue").PropType<LazyLoadTypes>;
                default: LazyLoadTypes;
            };
            rtl: {
                type: BooleanConstructor;
                default: boolean;
            };
            slide: StringConstructor;
            slidesToShow: NumberConstructor;
            slidesToScroll: NumberConstructor;
            speed: NumberConstructor;
            swipe: {
                type: BooleanConstructor;
                default: boolean;
            };
            swipeToSlide: {
                type: BooleanConstructor;
                default: boolean;
            };
            swipeEvent: {
                type: import("vue").PropType<(swipeDirection: string) => void>;
                default: (swipeDirection: string) => void;
            };
            touchMove: {
                type: BooleanConstructor;
                default: boolean;
            };
            touchThreshold: NumberConstructor;
            variableWidth: {
                type: BooleanConstructor;
                default: boolean;
            };
            useCSS: {
                type: BooleanConstructor;
                default: boolean;
            };
            slickGoTo: NumberConstructor;
            responsive: ArrayConstructor;
            dotPosition: {
                type: import("vue").PropType<DotPosition>;
                default: DotPosition;
            };
            verticalSwiping: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            centerMode: boolean;
            rtl: boolean;
            vertical: boolean;
            fade: boolean;
            infinite: boolean;
            lazyLoad: LazyLoadTypes;
            useCSS: boolean;
            dots: boolean;
            swipeToSlide: boolean;
            verticalSwiping: boolean;
            swipeEvent: (swipeDirection: string) => void;
            swipe: boolean;
            variableWidth: boolean;
            adaptiveHeight: boolean;
            beforeChange: (currentSlide: number, nextSlide: number) => void;
            afterChange: (currentSlide: number) => void;
            accessibility: boolean;
            draggable: boolean;
            autoplay: boolean;
            focusOnSelect: boolean;
            pauseOnHover: boolean;
            arrows: boolean;
            touchMove: boolean;
            effect: CarouselEffect;
            dotPosition: DotPosition;
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
    } & Readonly<ExtractPropTypes<{
        effect: {
            type: import("vue").PropType<CarouselEffect>;
            default: CarouselEffect;
        };
        dots: {
            type: BooleanConstructor;
            default: boolean;
        };
        vertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoplay: {
            type: BooleanConstructor;
            default: boolean;
        };
        easing: StringConstructor;
        beforeChange: {
            type: import("vue").PropType<(currentSlide: number, nextSlide: number) => void>;
            default: (currentSlide: number, nextSlide: number) => void;
        };
        afterChange: {
            type: import("vue").PropType<(currentSlide: number) => void>;
            default: (currentSlide: number) => void;
        };
        prefixCls: StringConstructor;
        accessibility: {
            type: BooleanConstructor;
            default: boolean;
        };
        nextArrow: import("vue-types").VueTypeValidableDef<any>;
        prevArrow: import("vue-types").VueTypeValidableDef<any>;
        pauseOnHover: {
            type: BooleanConstructor;
            default: boolean;
        };
        adaptiveHeight: {
            type: BooleanConstructor;
            default: boolean;
        };
        arrows: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoplaySpeed: NumberConstructor;
        centerMode: {
            type: BooleanConstructor;
            default: boolean;
        };
        centerPadding: StringConstructor;
        cssEase: StringConstructor;
        dotsClass: StringConstructor;
        draggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        fade: {
            type: BooleanConstructor;
            default: boolean;
        };
        focusOnSelect: {
            type: BooleanConstructor;
            default: boolean;
        };
        infinite: {
            type: BooleanConstructor;
            default: boolean;
        };
        initialSlide: NumberConstructor;
        lazyLoad: {
            type: import("vue").PropType<LazyLoadTypes>;
            default: LazyLoadTypes;
        };
        rtl: {
            type: BooleanConstructor;
            default: boolean;
        };
        slide: StringConstructor;
        slidesToShow: NumberConstructor;
        slidesToScroll: NumberConstructor;
        speed: NumberConstructor;
        swipe: {
            type: BooleanConstructor;
            default: boolean;
        };
        swipeToSlide: {
            type: BooleanConstructor;
            default: boolean;
        };
        swipeEvent: {
            type: import("vue").PropType<(swipeDirection: string) => void>;
            default: (swipeDirection: string) => void;
        };
        touchMove: {
            type: BooleanConstructor;
            default: boolean;
        };
        touchThreshold: NumberConstructor;
        variableWidth: {
            type: BooleanConstructor;
            default: boolean;
        };
        useCSS: {
            type: BooleanConstructor;
            default: boolean;
        };
        slickGoTo: NumberConstructor;
        responsive: ArrayConstructor;
        dotPosition: {
            type: import("vue").PropType<DotPosition>;
            default: DotPosition;
        };
        verticalSwiping: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<ExtractPropTypes<{
    effect: {
        type: import("vue").PropType<CarouselEffect>;
        default: CarouselEffect;
    };
    dots: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    easing: StringConstructor;
    beforeChange: {
        type: import("vue").PropType<(currentSlide: number, nextSlide: number) => void>;
        default: (currentSlide: number, nextSlide: number) => void;
    };
    afterChange: {
        type: import("vue").PropType<(currentSlide: number) => void>;
        default: (currentSlide: number) => void;
    };
    prefixCls: StringConstructor;
    accessibility: {
        type: BooleanConstructor;
        default: boolean;
    };
    nextArrow: import("vue-types").VueTypeValidableDef<any>;
    prevArrow: import("vue-types").VueTypeValidableDef<any>;
    pauseOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    adaptiveHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrows: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoplaySpeed: NumberConstructor;
    centerMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    centerPadding: StringConstructor;
    cssEase: StringConstructor;
    dotsClass: StringConstructor;
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    fade: {
        type: BooleanConstructor;
        default: boolean;
    };
    focusOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    infinite: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialSlide: NumberConstructor;
    lazyLoad: {
        type: import("vue").PropType<LazyLoadTypes>;
        default: LazyLoadTypes;
    };
    rtl: {
        type: BooleanConstructor;
        default: boolean;
    };
    slide: StringConstructor;
    slidesToShow: NumberConstructor;
    slidesToScroll: NumberConstructor;
    speed: NumberConstructor;
    swipe: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeToSlide: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeEvent: {
        type: import("vue").PropType<(swipeDirection: string) => void>;
        default: (swipeDirection: string) => void;
    };
    touchMove: {
        type: BooleanConstructor;
        default: boolean;
    };
    touchThreshold: NumberConstructor;
    variableWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    useCSS: {
        type: BooleanConstructor;
        default: boolean;
    };
    slickGoTo: NumberConstructor;
    responsive: ArrayConstructor;
    dotPosition: {
        type: import("vue").PropType<DotPosition>;
        default: DotPosition;
    };
    verticalSwiping: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    centerMode: boolean;
    rtl: boolean;
    vertical: boolean;
    fade: boolean;
    infinite: boolean;
    lazyLoad: LazyLoadTypes;
    useCSS: boolean;
    dots: boolean;
    swipeToSlide: boolean;
    verticalSwiping: boolean;
    swipeEvent: (swipeDirection: string) => void;
    swipe: boolean;
    variableWidth: boolean;
    adaptiveHeight: boolean;
    beforeChange: (currentSlide: number, nextSlide: number) => void;
    afterChange: (currentSlide: number) => void;
    accessibility: boolean;
    draggable: boolean;
    autoplay: boolean;
    focusOnSelect: boolean;
    pauseOnHover: boolean;
    arrows: boolean;
    touchMove: boolean;
    effect: CarouselEffect;
    dotPosition: DotPosition;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
export default _default;
