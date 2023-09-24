import type { CSSInterpolation, Theme } from '../_util/cssinjs';
import { useStyleRegister } from '../_util/cssinjs';
import type { AliasToken, GlobalToken, MapToken, OverrideToken, PresetColorType, PresetColorKey, SeedToken } from './interface';
import { PresetColors } from './interface';
import type { FullToken } from './util/genComponentStyleHook';
import genComponentStyleHook from './util/genComponentStyleHook';
import statisticToken, { merge as mergeToken, statistic } from './util/statistic';
import type { VueNode } from '../_util/type';
import type { ComputedRef, Ref } from 'vue';
export { PresetColors, statistic, statisticToken, mergeToken, useStyleRegister, genComponentStyleHook, };
export type { SeedToken, AliasToken, PresetColorType, PresetColorKey, AliasToken as DerivativeToken, FullToken, };
export declare const defaultConfig: {
    token: SeedToken;
    hashed: boolean;
};
export interface DesignTokenContext {
    token: Partial<AliasToken>;
    theme?: Theme<SeedToken, MapToken>;
    components?: OverrideToken;
    hashed?: string | boolean;
}
export declare const globalDesignTokenApi: Ref<DesignTokenContext>;
export declare const useDesignTokenProvider: (value: DesignTokenContext) => void;
export declare const useDesignTokenInject: () => {
    token: SeedToken;
    hashed: boolean;
} | DesignTokenContext;
export declare const DesignTokenProvider: import("vue").DefineComponent<{
    value: {
        type: import("vue").PropType<DesignTokenContext>;
        default: DesignTokenContext;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: import("vue").PropType<DesignTokenContext>;
        default: DesignTokenContext;
    };
}>>, {
    value: DesignTokenContext;
}, {}>;
export declare function useToken(): [
    ComputedRef<Theme<SeedToken, MapToken>>,
    ComputedRef<GlobalToken>,
    ComputedRef<string>
];
export type UseComponentStyleResult = [(node: VueNode) => VueNode, Ref<string>];
export type GenerateStyle<ComponentToken extends object = AliasToken, ReturnType = CSSInterpolation> = (token: ComponentToken) => ReturnType;
