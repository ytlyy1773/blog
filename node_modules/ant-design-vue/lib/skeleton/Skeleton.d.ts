import type { ExtractPropTypes, PropType } from 'vue';
import type { SkeletonAvatarProps as AvatarProps } from './Avatar';
type SkeletonAvatarProps = Omit<AvatarProps, 'active'>;
export declare const skeletonProps: () => {
    active: {
        type: BooleanConstructor;
        default: any;
    };
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    avatar: {
        type: PropType<boolean | SkeletonAvatarProps>;
        default: boolean | SkeletonAvatarProps;
    };
    title: {
        type: PropType<boolean | Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            width: {
                type: PropType<string | number>;
            };
        }>>>;
        default: boolean | Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            width: {
                type: PropType<string | number>;
            };
        }>>;
    };
    paragraph: {
        type: PropType<boolean | Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            width: {
                type: PropType<(string | number) | (string | number)[]>;
            };
            rows: NumberConstructor;
        }>>>;
        default: boolean | Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            width: {
                type: PropType<(string | number) | (string | number)[]>;
            };
            rows: NumberConstructor;
        }>>;
    };
    round: {
        type: BooleanConstructor;
        default: any;
    };
};
export type SkeletonProps = Partial<ExtractPropTypes<ReturnType<typeof skeletonProps>>>;
declare const Skeleton: import("vue").DefineComponent<{
    active: {
        type: BooleanConstructor;
        default: any;
    };
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    avatar: {
        type: PropType<boolean | SkeletonAvatarProps>;
        default: boolean | SkeletonAvatarProps;
    };
    title: {
        type: PropType<boolean | Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            width: {
                type: PropType<string | number>;
            };
        }>>>;
        default: boolean | Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            width: {
                type: PropType<string | number>;
            };
        }>>;
    };
    paragraph: {
        type: PropType<boolean | Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            width: {
                type: PropType<(string | number) | (string | number)[]>;
            };
            rows: NumberConstructor;
        }>>>;
        default: boolean | Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            width: {
                type: PropType<(string | number) | (string | number)[]>;
            };
            rows: NumberConstructor;
        }>>;
    };
    round: {
        type: BooleanConstructor;
        default: any;
    };
}, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    active: {
        type: BooleanConstructor;
        default: any;
    };
    loading: {
        type: BooleanConstructor;
        default: any;
    };
    prefixCls: StringConstructor;
    avatar: {
        type: PropType<boolean | SkeletonAvatarProps>;
        default: boolean | SkeletonAvatarProps;
    };
    title: {
        type: PropType<boolean | Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            width: {
                type: PropType<string | number>;
            };
        }>>>;
        default: boolean | Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            width: {
                type: PropType<string | number>;
            };
        }>>;
    };
    paragraph: {
        type: PropType<boolean | Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            width: {
                type: PropType<(string | number) | (string | number)[]>;
            };
            rows: NumberConstructor;
        }>>>;
        default: boolean | Partial<ExtractPropTypes<{
            prefixCls: StringConstructor;
            width: {
                type: PropType<(string | number) | (string | number)[]>;
            };
            rows: NumberConstructor;
        }>>;
    };
    round: {
        type: BooleanConstructor;
        default: any;
    };
}>>, {
    title: boolean | Partial<ExtractPropTypes<{
        prefixCls: StringConstructor;
        width: {
            type: PropType<string | number>;
        };
    }>>;
    round: boolean;
    active: boolean;
    loading: boolean;
    avatar: boolean | SkeletonAvatarProps;
    paragraph: boolean | Partial<ExtractPropTypes<{
        prefixCls: StringConstructor;
        width: {
            type: PropType<(string | number) | (string | number)[]>;
        };
        rows: NumberConstructor;
    }>>;
}, {}>;
export default Skeleton;
