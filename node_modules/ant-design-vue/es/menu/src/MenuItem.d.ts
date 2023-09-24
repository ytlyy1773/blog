import type { ExtractPropTypes, PropType } from 'vue';
import type { ItemType } from './interface';
import type { MouseEventHandler } from '../../_util/EventInterface';
import type { CustomSlotsType } from '../../_util/type';
export declare const menuItemProps: () => {
    id: StringConstructor;
    role: StringConstructor;
    disabled: BooleanConstructor;
    danger: BooleanConstructor;
    title: {
        type: (BooleanConstructor | StringConstructor)[];
        default: any;
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    onMouseenter: PropType<MouseEventHandler>;
    onMouseleave: PropType<MouseEventHandler>;
    onClick: PropType<MouseEventHandler>;
    onKeydown: PropType<MouseEventHandler>;
    onFocus: PropType<MouseEventHandler>;
    originItemValue: {
        type: PropType<ItemType>;
        default: ItemType;
    };
};
export type MenuItemProps = Partial<ExtractPropTypes<ReturnType<typeof menuItemProps>>>;
declare const _default: import("vue").DefineComponent<{
    id: StringConstructor;
    role: StringConstructor;
    disabled: BooleanConstructor;
    danger: BooleanConstructor;
    title: {
        type: (BooleanConstructor | StringConstructor)[];
        default: any;
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    onMouseenter: PropType<MouseEventHandler>;
    onMouseleave: PropType<MouseEventHandler>;
    onClick: PropType<MouseEventHandler>;
    onKeydown: PropType<MouseEventHandler>;
    onFocus: PropType<MouseEventHandler>;
    originItemValue: {
        type: PropType<ItemType>;
        default: ItemType;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    id: StringConstructor;
    role: StringConstructor;
    disabled: BooleanConstructor;
    danger: BooleanConstructor;
    title: {
        type: (BooleanConstructor | StringConstructor)[];
        default: any;
    };
    icon: import("vue-types").VueTypeValidableDef<any>;
    onMouseenter: PropType<MouseEventHandler>;
    onMouseleave: PropType<MouseEventHandler>;
    onClick: PropType<MouseEventHandler>;
    onKeydown: PropType<MouseEventHandler>;
    onFocus: PropType<MouseEventHandler>;
    originItemValue: {
        type: PropType<ItemType>;
        default: ItemType;
    };
}>>, {
    title: string | boolean;
    disabled: boolean;
    danger: boolean;
    originItemValue: ItemType;
}, CustomSlotsType<{
    icon?: any;
    title?: any;
    default?: any;
}>>;
export default _default;
