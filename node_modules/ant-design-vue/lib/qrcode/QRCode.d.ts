import type { ImageSettings } from './interface';
export declare const QRCodeCanvas: import("vue").DefineComponent<{
    level: StringConstructor;
    bgColor: StringConstructor;
    fgColor: StringConstructor;
    marginSize: NumberConstructor;
    size: {
        type: NumberConstructor;
        default: number;
    };
    value: {
        type: StringConstructor;
        required: boolean;
    };
    type: {
        type: import("vue").PropType<"canvas" | "svg">;
        default: "canvas" | "svg";
    };
    color: StringConstructor;
    includeMargin: BooleanConstructor;
    imageSettings: {
        type: import("vue").PropType<ImageSettings>;
        default: ImageSettings;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    level: StringConstructor;
    bgColor: StringConstructor;
    fgColor: StringConstructor;
    marginSize: NumberConstructor;
    size: {
        type: NumberConstructor;
        default: number;
    };
    value: {
        type: StringConstructor;
        required: boolean;
    };
    type: {
        type: import("vue").PropType<"canvas" | "svg">;
        default: "canvas" | "svg";
    };
    color: StringConstructor;
    includeMargin: BooleanConstructor;
    imageSettings: {
        type: import("vue").PropType<ImageSettings>;
        default: ImageSettings;
    };
}>>, {
    size: number;
    type: "canvas" | "svg";
    includeMargin: boolean;
    imageSettings: ImageSettings;
}, {}>;
export declare const QRCodeSVG: import("vue").DefineComponent<{
    color: StringConstructor;
    level: StringConstructor;
    bgColor: StringConstructor;
    fgColor: StringConstructor;
    marginSize: NumberConstructor;
    title: StringConstructor;
    size: {
        type: NumberConstructor;
        default: number;
    };
    value: {
        type: StringConstructor;
        required: boolean;
    };
    type: {
        type: import("vue").PropType<"canvas" | "svg">;
        default: "canvas" | "svg";
    };
    includeMargin: BooleanConstructor;
    imageSettings: {
        type: import("vue").PropType<ImageSettings>;
        default: ImageSettings;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: StringConstructor;
    level: StringConstructor;
    bgColor: StringConstructor;
    fgColor: StringConstructor;
    marginSize: NumberConstructor;
    title: StringConstructor;
    size: {
        type: NumberConstructor;
        default: number;
    };
    value: {
        type: StringConstructor;
        required: boolean;
    };
    type: {
        type: import("vue").PropType<"canvas" | "svg">;
        default: "canvas" | "svg";
    };
    includeMargin: BooleanConstructor;
    imageSettings: {
        type: import("vue").PropType<ImageSettings>;
        default: ImageSettings;
    };
}>>, {
    size: number;
    type: "canvas" | "svg";
    includeMargin: boolean;
    imageSettings: ImageSettings;
}, {}>;
