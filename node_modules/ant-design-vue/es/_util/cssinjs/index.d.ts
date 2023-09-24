import useCacheToken from './hooks/useCacheToken';
import type { CSSInterpolation, CSSObject } from './hooks/useStyleRegister';
import useStyleRegister, { extractStyle } from './hooks/useStyleRegister';
import Keyframes from './Keyframes';
import type { Linter } from './linters';
import { legacyNotSelectorLinter, logicalPropertiesLinter, parentSelectorLinter } from './linters';
import type { StyleContextProps, StyleProviderProps } from './StyleContext';
import { createCache, useStyleInject, useStyleProvider, StyleProvider } from './StyleContext';
import type { DerivativeFunc, TokenType } from './theme';
import { createTheme, Theme } from './theme';
import type { Transformer } from './transformers/interface';
import legacyLogicalPropertiesTransformer from './transformers/legacyLogicalProperties';
import px2remTransformer from './transformers/px2rem';
declare const cssinjs: {
    Theme: typeof Theme;
    createTheme: typeof createTheme;
    useStyleRegister: typeof useStyleRegister;
    useCacheToken: typeof useCacheToken;
    createCache: typeof createCache;
    useStyleInject: () => import("vue").ShallowRef<Partial<StyleContextProps>>;
    useStyleProvider: (props: import("./StyleContext").UseStyleProviderProps) => import("vue").ShallowRef<Partial<StyleContextProps>>;
    Keyframes: typeof Keyframes;
    extractStyle: typeof extractStyle;
    legacyLogicalPropertiesTransformer: Transformer;
    px2remTransformer: (options?: import("./transformers/px2rem").Options) => Transformer;
    logicalPropertiesLinter: Linter;
    legacyNotSelectorLinter: Linter;
    parentSelectorLinter: Linter;
    StyleProvider: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                container?: Element | ShadowRoot;
                autoClear?: boolean;
                mock?: "server" | "client";
                cache?: import("./Cache").default;
                defaultCache?: boolean;
                hashPriority?: import("./StyleContext").HashPriority;
                ssrInline?: boolean;
                transformers?: Transformer[];
                linters?: Linter[];
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
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                autoClear: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                mock: {
                    type: import("vue").PropType<"server" | "client">;
                    default: "server" | "client";
                };
                cache: {
                    type: import("vue").PropType<import("./Cache").default>;
                    default: import("./Cache").default;
                };
                defaultCache: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                hashPriority: {
                    type: import("vue").PropType<import("./StyleContext").HashPriority>;
                    default: import("./StyleContext").HashPriority;
                };
                container: {
                    type: import("vue").PropType<Element | ShadowRoot>;
                    default: Element | ShadowRoot;
                };
                ssrInline: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                transformers: {
                    type: import("vue").PropType<Transformer[]>;
                    default: Transformer[];
                };
                linters: {
                    type: import("vue").PropType<Linter[]>;
                    default: Linter[];
                };
            }>>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
                container: Element | ShadowRoot;
                autoClear: boolean;
                mock: "server" | "client";
                cache: import("./Cache").default;
                defaultCache: boolean;
                hashPriority: import("./StyleContext").HashPriority;
                ssrInline: boolean;
                transformers: Transformer[];
                linters: Linter[];
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
        } & Readonly<import("vue").ExtractPropTypes<{
            autoClear: {
                type: BooleanConstructor;
                default: boolean;
            };
            mock: {
                type: import("vue").PropType<"server" | "client">;
                default: "server" | "client";
            };
            cache: {
                type: import("vue").PropType<import("./Cache").default>;
                default: import("./Cache").default;
            };
            defaultCache: {
                type: BooleanConstructor;
                default: boolean;
            };
            hashPriority: {
                type: import("vue").PropType<import("./StyleContext").HashPriority>;
                default: import("./StyleContext").HashPriority;
            };
            container: {
                type: import("vue").PropType<Element | ShadowRoot>;
                default: Element | ShadowRoot;
            };
            ssrInline: {
                type: BooleanConstructor;
                default: boolean;
            };
            transformers: {
                type: import("vue").PropType<Transformer[]>;
                default: Transformer[];
            };
            linters: {
                type: import("vue").PropType<Linter[]>;
                default: Linter[];
            };
        }>> & import("vue").ShallowUnwrapRef<() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        autoClear: {
            type: BooleanConstructor;
            default: boolean;
        };
        mock: {
            type: import("vue").PropType<"server" | "client">;
            default: "server" | "client";
        };
        cache: {
            type: import("vue").PropType<import("./Cache").default>;
            default: import("./Cache").default;
        };
        defaultCache: {
            type: BooleanConstructor;
            default: boolean;
        };
        hashPriority: {
            type: import("vue").PropType<import("./StyleContext").HashPriority>;
            default: import("./StyleContext").HashPriority;
        };
        container: {
            type: import("vue").PropType<Element | ShadowRoot>;
            default: Element | ShadowRoot;
        };
        ssrInline: {
            type: BooleanConstructor;
            default: boolean;
        };
        transformers: {
            type: import("vue").PropType<Transformer[]>;
            default: Transformer[];
        };
        linters: {
            type: import("vue").PropType<Linter[]>;
            default: Linter[];
        };
    }>>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        container: Element | ShadowRoot;
        autoClear: boolean;
        mock: "server" | "client";
        cache: import("./Cache").default;
        defaultCache: boolean;
        hashPriority: import("./StyleContext").HashPriority;
        ssrInline: boolean;
        transformers: Transformer[];
        linters: Linter[];
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").Plugin<any[]>;
};
export { Theme, createTheme, useStyleRegister, useCacheToken, createCache, useStyleInject, useStyleProvider, Keyframes, extractStyle, legacyLogicalPropertiesTransformer, px2remTransformer, logicalPropertiesLinter, legacyNotSelectorLinter, parentSelectorLinter, StyleProvider, };
export type { TokenType, CSSObject, CSSInterpolation, DerivativeFunc, Transformer, Linter, StyleContextProps, StyleProviderProps, };
export declare const _experimental: {
    supportModernCSS: () => boolean;
};
export default cssinjs;
