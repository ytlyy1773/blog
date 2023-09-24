import type { PropType, ExtractPropTypes } from 'vue';
import type { CustomSlotsType, VueNode } from '../_util/type';
export interface Route {
    path: string;
    breadcrumbName: string;
    children?: Omit<Route, 'children'>[];
}
export declare const breadcrumbProps: () => {
    prefixCls: StringConstructor;
    routes: {
        type: PropType<Route[]>;
    };
    params: import("vue-types").VueTypeValidableDef<any>;
    separator: import("vue-types").VueTypeValidableDef<any>;
    itemRender: {
        type: PropType<(opt: {
            route: Route;
            params: unknown;
            routes: Route[];
            paths: string[];
        }) => VueNode>;
    };
};
export type BreadcrumbProps = Partial<ExtractPropTypes<ReturnType<typeof breadcrumbProps>>>;
declare const _default: import("vue").DefineComponent<{
    prefixCls: StringConstructor;
    routes: {
        type: PropType<Route[]>;
    };
    params: import("vue-types").VueTypeValidableDef<any>;
    separator: import("vue-types").VueTypeValidableDef<any>;
    itemRender: {
        type: PropType<(opt: {
            route: Route;
            params: unknown;
            routes: Route[];
            paths: string[];
        }) => VueNode>;
    };
}, () => VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    prefixCls: StringConstructor;
    routes: {
        type: PropType<Route[]>;
    };
    params: import("vue-types").VueTypeValidableDef<any>;
    separator: import("vue-types").VueTypeValidableDef<any>;
    itemRender: {
        type: PropType<(opt: {
            route: Route;
            params: unknown;
            routes: Route[];
            paths: string[];
        }) => VueNode>;
    };
}>>, {}, CustomSlotsType<{
    separator: any;
    itemRender: {
        route: Route;
        params: any;
        routes: Route[];
        paths: string[];
    };
    default: any;
}>>;
export default _default;
