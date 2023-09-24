import type { App } from 'vue';
export type { UploadProps, UploadListProps, UploadChangeParam, UploadFile } from './interface';
export declare const UploadDragger: import("vue").DefineComponent<{
    capture: {
        type: import("vue").PropType<boolean | "user" | "environment">;
        default: boolean | "user" | "environment";
    };
    type: {
        type: import("vue").PropType<import("./interface").UploadType>;
        default: import("./interface").UploadType;
    };
    name: StringConstructor;
    defaultFileList: {
        type: import("vue").PropType<import("./interface").UploadFile<any>[]>;
        default: import("./interface").UploadFile<any>[];
    };
    fileList: {
        type: import("vue").PropType<import("./interface").UploadFile<any>[]>;
        default: import("./interface").UploadFile<any>[];
    };
    action: {
        type: import("vue").PropType<string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>)>;
        default: string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>);
    };
    directory: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: import("vue").PropType<Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>)>;
        default: Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>);
    };
    method: {
        type: import("vue").PropType<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
        default: "post" | "POST" | "PUT" | "PATCH" | "put" | "patch";
    };
    headers: {
        type: import("vue").PropType<import("./interface").HttpRequestHeader>;
        default: import("./interface").HttpRequestHeader;
    };
    showUploadList: {
        type: import("vue").PropType<boolean | import("./interface").ShowUploadListInterface>;
        default: boolean | import("./interface").ShowUploadListInterface;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: StringConstructor;
    beforeUpload: {
        type: import("vue").PropType<(file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>>;
        default: (file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>;
    };
    onChange: {
        type: import("vue").PropType<(info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void>;
        default: (info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void;
    };
    'onUpdate:fileList': {
        type: import("vue").PropType<(fileList: import("./interface").UploadFile<any>[]) => void>;
        default: (fileList: import("./interface").UploadFile<any>[]) => void;
    };
    onDrop: {
        type: import("vue").PropType<(event: DragEvent) => void>;
        default: (event: DragEvent) => void;
    };
    listType: {
        type: import("vue").PropType<import("./interface").UploadListType>;
        default: import("./interface").UploadListType;
    };
    onPreview: {
        type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
        default: (file: import("./interface").UploadFile<any>) => void;
    };
    onDownload: {
        type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
        default: (file: import("./interface").UploadFile<any>) => void;
    };
    onReject: {
        type: import("vue").PropType<(fileList: import("./interface").FileType[]) => void>;
        default: (fileList: import("./interface").FileType[]) => void;
    };
    onRemove: {
        type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
        default: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
    };
    remove: {
        type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
        default: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
    };
    supportServerRender: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixCls: StringConstructor;
    customRequest: {
        type: import("vue").PropType<(options: import("../vc-upload/interface").UploadRequestOption<any>) => void>;
        default: (options: import("../vc-upload/interface").UploadRequestOption<any>) => void;
    };
    withCredentials: {
        type: BooleanConstructor;
        default: boolean;
    };
    openFileDialogOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    locale: {
        type: import("vue").PropType<import("./interface").UploadLocale>;
        default: import("./interface").UploadLocale;
    };
    id: StringConstructor;
    previewFile: {
        type: import("vue").PropType<(file: Blob | import("./interface").FileType) => PromiseLike<string>>;
        default: (file: Blob | import("./interface").FileType) => PromiseLike<string>;
    };
    transformFile: {
        type: import("vue").PropType<(file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>>;
        default: (file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>;
    };
    iconRender: {
        type: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
            listType?: import("./interface").UploadListType;
        }) => import("../_util/type").VueNode>;
        default: (opt: {
            file: import("./interface").UploadFile<any>;
            listType?: import("./interface").UploadListType;
        }) => import("../_util/type").VueNode;
    };
    isImageUrl: {
        type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean>;
        default: (file: import("./interface").UploadFile<any>) => boolean;
    };
    progress: {
        type: import("vue").PropType<import("./interface").UploadListProgressProps>;
        default: import("./interface").UploadListProgressProps;
    };
    itemRender: {
        type: import("vue").PropType<import("./interface").ItemRender<any>>;
        default: import("./interface").ItemRender<any>;
    };
    maxCount: NumberConstructor;
    height: {
        type: import("vue").PropType<unknown>;
        default: unknown;
    };
    removeIcon: {
        type: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode>;
        default: (opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode;
    };
    downloadIcon: {
        type: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode>;
        default: (opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode;
    };
    previewIcon: {
        type: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode>;
        default: (opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode;
    };
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    capture: {
        type: import("vue").PropType<boolean | "user" | "environment">;
        default: boolean | "user" | "environment";
    };
    type: {
        type: import("vue").PropType<import("./interface").UploadType>;
        default: import("./interface").UploadType;
    };
    name: StringConstructor;
    defaultFileList: {
        type: import("vue").PropType<import("./interface").UploadFile<any>[]>;
        default: import("./interface").UploadFile<any>[];
    };
    fileList: {
        type: import("vue").PropType<import("./interface").UploadFile<any>[]>;
        default: import("./interface").UploadFile<any>[];
    };
    action: {
        type: import("vue").PropType<string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>)>;
        default: string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>);
    };
    directory: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: import("vue").PropType<Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>)>;
        default: Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>);
    };
    method: {
        type: import("vue").PropType<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
        default: "post" | "POST" | "PUT" | "PATCH" | "put" | "patch";
    };
    headers: {
        type: import("vue").PropType<import("./interface").HttpRequestHeader>;
        default: import("./interface").HttpRequestHeader;
    };
    showUploadList: {
        type: import("vue").PropType<boolean | import("./interface").ShowUploadListInterface>;
        default: boolean | import("./interface").ShowUploadListInterface;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: StringConstructor;
    beforeUpload: {
        type: import("vue").PropType<(file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>>;
        default: (file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>;
    };
    onChange: {
        type: import("vue").PropType<(info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void>;
        default: (info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void;
    };
    'onUpdate:fileList': {
        type: import("vue").PropType<(fileList: import("./interface").UploadFile<any>[]) => void>;
        default: (fileList: import("./interface").UploadFile<any>[]) => void;
    };
    onDrop: {
        type: import("vue").PropType<(event: DragEvent) => void>;
        default: (event: DragEvent) => void;
    };
    listType: {
        type: import("vue").PropType<import("./interface").UploadListType>;
        default: import("./interface").UploadListType;
    };
    onPreview: {
        type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
        default: (file: import("./interface").UploadFile<any>) => void;
    };
    onDownload: {
        type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
        default: (file: import("./interface").UploadFile<any>) => void;
    };
    onReject: {
        type: import("vue").PropType<(fileList: import("./interface").FileType[]) => void>;
        default: (fileList: import("./interface").FileType[]) => void;
    };
    onRemove: {
        type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
        default: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
    };
    remove: {
        type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
        default: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
    };
    supportServerRender: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixCls: StringConstructor;
    customRequest: {
        type: import("vue").PropType<(options: import("../vc-upload/interface").UploadRequestOption<any>) => void>;
        default: (options: import("../vc-upload/interface").UploadRequestOption<any>) => void;
    };
    withCredentials: {
        type: BooleanConstructor;
        default: boolean;
    };
    openFileDialogOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    locale: {
        type: import("vue").PropType<import("./interface").UploadLocale>;
        default: import("./interface").UploadLocale;
    };
    id: StringConstructor;
    previewFile: {
        type: import("vue").PropType<(file: Blob | import("./interface").FileType) => PromiseLike<string>>;
        default: (file: Blob | import("./interface").FileType) => PromiseLike<string>;
    };
    transformFile: {
        type: import("vue").PropType<(file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>>;
        default: (file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>;
    };
    iconRender: {
        type: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
            listType?: import("./interface").UploadListType;
        }) => import("../_util/type").VueNode>;
        default: (opt: {
            file: import("./interface").UploadFile<any>;
            listType?: import("./interface").UploadListType;
        }) => import("../_util/type").VueNode;
    };
    isImageUrl: {
        type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean>;
        default: (file: import("./interface").UploadFile<any>) => boolean;
    };
    progress: {
        type: import("vue").PropType<import("./interface").UploadListProgressProps>;
        default: import("./interface").UploadListProgressProps;
    };
    itemRender: {
        type: import("vue").PropType<import("./interface").ItemRender<any>>;
        default: import("./interface").ItemRender<any>;
    };
    maxCount: NumberConstructor;
    height: {
        type: import("vue").PropType<unknown>;
        default: unknown;
    };
    removeIcon: {
        type: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode>;
        default: (opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode;
    };
    downloadIcon: {
        type: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode>;
        default: (opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode;
    };
    previewIcon: {
        type: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode>;
        default: (opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode;
    };
}>>, {
    data: Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>);
    progress: import("./interface").UploadListProgressProps;
    height: unknown;
    onDrop: (event: DragEvent) => void;
    onChange: (info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void;
    multiple: boolean;
    disabled: boolean;
    type: import("./interface").UploadType;
    method: "post" | "POST" | "PUT" | "PATCH" | "put" | "patch";
    locale: import("./interface").UploadLocale;
    action: string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>);
    remove: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
    capture: boolean | "user" | "environment";
    iconRender: (opt: {
        file: import("./interface").UploadFile<any>;
        listType?: import("./interface").UploadListType;
    }) => import("../_util/type").VueNode;
    onRemove: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
    removeIcon: (opt: {
        file: import("./interface").UploadFile<any>;
    }) => import("../_util/type").VueNode;
    itemRender: import("./interface").ItemRender<any>;
    headers: import("./interface").HttpRequestHeader;
    directory: boolean;
    onReject: (fileList: import("./interface").FileType[]) => void;
    beforeUpload: (file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>;
    customRequest: (options: import("../vc-upload/interface").UploadRequestOption<any>) => void;
    withCredentials: boolean;
    openFileDialogOnClick: boolean;
    fileList: import("./interface").UploadFile<any>[];
    defaultFileList: import("./interface").UploadFile<any>[];
    showUploadList: boolean | import("./interface").ShowUploadListInterface;
    'onUpdate:fileList': (fileList: import("./interface").UploadFile<any>[]) => void;
    listType: import("./interface").UploadListType;
    onPreview: (file: import("./interface").UploadFile<any>) => void;
    onDownload: (file: import("./interface").UploadFile<any>) => void;
    supportServerRender: boolean;
    previewFile: (file: Blob | import("./interface").FileType) => PromiseLike<string>;
    transformFile: (file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>;
    isImageUrl: (file: import("./interface").UploadFile<any>) => boolean;
    downloadIcon: (opt: {
        file: import("./interface").UploadFile<any>;
    }) => import("../_util/type").VueNode;
    previewIcon: (opt: {
        file: import("./interface").UploadFile<any>;
    }) => import("../_util/type").VueNode;
}, {}>;
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            data?: Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>);
            progress?: import("./interface").UploadListProgressProps;
            height?: unknown;
            onDrop?: (event: DragEvent) => void;
            onChange?: (info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void;
            multiple?: boolean;
            disabled?: boolean;
            type?: import("./interface").UploadType;
            method?: "post" | "POST" | "PUT" | "PATCH" | "put" | "patch";
            locale?: import("./interface").UploadLocale;
            action?: string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>);
            remove?: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
            capture?: boolean | "user" | "environment";
            iconRender?: (opt: {
                file: import("./interface").UploadFile<any>;
                listType?: import("./interface").UploadListType;
            }) => import("../_util/type").VueNode;
            onRemove?: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
            removeIcon?: (opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode;
            itemRender?: import("./interface").ItemRender<any>;
            headers?: import("./interface").HttpRequestHeader;
            directory?: boolean;
            onReject?: (fileList: import("./interface").FileType[]) => void;
            beforeUpload?: (file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>;
            customRequest?: (options: import("../vc-upload/interface").UploadRequestOption<any>) => void;
            withCredentials?: boolean;
            openFileDialogOnClick?: boolean;
            fileList?: import("./interface").UploadFile<any>[];
            defaultFileList?: import("./interface").UploadFile<any>[];
            showUploadList?: boolean | import("./interface").ShowUploadListInterface;
            'onUpdate:fileList'?: (fileList: import("./interface").UploadFile<any>[]) => void;
            listType?: import("./interface").UploadListType;
            onPreview?: (file: import("./interface").UploadFile<any>) => void;
            onDownload?: (file: import("./interface").UploadFile<any>) => void;
            supportServerRender?: boolean;
            previewFile?: (file: Blob | import("./interface").FileType) => PromiseLike<string>;
            transformFile?: (file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>;
            isImageUrl?: (file: import("./interface").UploadFile<any>) => boolean;
            downloadIcon?: (opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode;
            previewIcon?: (opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode;
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
            readonly name?: string;
            class?: unknown;
            tabindex?: string | number;
            readonly prefixCls?: string;
            role?: string;
            readonly id?: string;
            readonly maxCount?: number;
            readonly accept?: string;
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
            capture: {
                type: import("vue").PropType<boolean | "user" | "environment">;
                default: boolean | "user" | "environment";
            };
            type: {
                type: import("vue").PropType<import("./interface").UploadType>;
                default: import("./interface").UploadType;
            };
            name: StringConstructor;
            defaultFileList: {
                type: import("vue").PropType<import("./interface").UploadFile<any>[]>;
                default: import("./interface").UploadFile<any>[];
            };
            fileList: {
                type: import("vue").PropType<import("./interface").UploadFile<any>[]>;
                default: import("./interface").UploadFile<any>[];
            };
            action: {
                type: import("vue").PropType<string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>)>;
                default: string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>);
            };
            directory: {
                type: BooleanConstructor;
                default: boolean;
            };
            data: {
                type: import("vue").PropType<Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>)>;
                default: Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>);
            };
            method: {
                type: import("vue").PropType<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
                default: "post" | "POST" | "PUT" | "PATCH" | "put" | "patch";
            };
            headers: {
                type: import("vue").PropType<import("./interface").HttpRequestHeader>;
                default: import("./interface").HttpRequestHeader;
            };
            showUploadList: {
                type: import("vue").PropType<boolean | import("./interface").ShowUploadListInterface>;
                default: boolean | import("./interface").ShowUploadListInterface;
            };
            multiple: {
                type: BooleanConstructor;
                default: boolean;
            };
            accept: StringConstructor;
            beforeUpload: {
                type: import("vue").PropType<(file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>>;
                default: (file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>;
            };
            onChange: {
                type: import("vue").PropType<(info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void>;
                default: (info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void;
            };
            'onUpdate:fileList': {
                type: import("vue").PropType<(fileList: import("./interface").UploadFile<any>[]) => void>;
                default: (fileList: import("./interface").UploadFile<any>[]) => void;
            };
            onDrop: {
                type: import("vue").PropType<(event: DragEvent) => void>;
                default: (event: DragEvent) => void;
            };
            listType: {
                type: import("vue").PropType<import("./interface").UploadListType>;
                default: import("./interface").UploadListType;
            };
            onPreview: {
                type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
                default: (file: import("./interface").UploadFile<any>) => void;
            };
            onDownload: {
                type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
                default: (file: import("./interface").UploadFile<any>) => void;
            };
            onReject: {
                type: import("vue").PropType<(fileList: import("./interface").FileType[]) => void>;
                default: (fileList: import("./interface").FileType[]) => void;
            };
            onRemove: {
                type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
                default: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
            };
            remove: {
                type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
                default: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
            };
            supportServerRender: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            prefixCls: StringConstructor;
            customRequest: {
                type: import("vue").PropType<(options: import("../vc-upload/interface").UploadRequestOption<any>) => void>;
                default: (options: import("../vc-upload/interface").UploadRequestOption<any>) => void;
            };
            withCredentials: {
                type: BooleanConstructor;
                default: boolean;
            };
            openFileDialogOnClick: {
                type: BooleanConstructor;
                default: boolean;
            };
            locale: {
                type: import("vue").PropType<import("./interface").UploadLocale>;
                default: import("./interface").UploadLocale;
            };
            id: StringConstructor;
            previewFile: {
                type: import("vue").PropType<(file: Blob | import("./interface").FileType) => PromiseLike<string>>;
                default: (file: Blob | import("./interface").FileType) => PromiseLike<string>;
            };
            transformFile: {
                type: import("vue").PropType<(file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>>;
                default: (file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>;
            };
            iconRender: {
                type: import("vue").PropType<(opt: {
                    file: import("./interface").UploadFile<any>;
                    listType?: import("./interface").UploadListType;
                }) => import("../_util/type").VueNode>;
                default: (opt: {
                    file: import("./interface").UploadFile<any>;
                    listType?: import("./interface").UploadListType;
                }) => import("../_util/type").VueNode;
            };
            isImageUrl: {
                type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean>;
                default: (file: import("./interface").UploadFile<any>) => boolean;
            };
            progress: {
                type: import("vue").PropType<import("./interface").UploadListProgressProps>;
                default: import("./interface").UploadListProgressProps;
            };
            itemRender: {
                type: import("vue").PropType<import("./interface").ItemRender<any>>;
                default: import("./interface").ItemRender<any>;
            };
            maxCount: NumberConstructor;
            height: {
                type: import("vue").PropType<unknown>;
                default: unknown;
            };
            removeIcon: {
                type: import("vue").PropType<(opt: {
                    file: import("./interface").UploadFile<any>;
                }) => import("../_util/type").VueNode>;
                default: (opt: {
                    file: import("./interface").UploadFile<any>;
                }) => import("../_util/type").VueNode;
            };
            downloadIcon: {
                type: import("vue").PropType<(opt: {
                    file: import("./interface").UploadFile<any>;
                }) => import("../_util/type").VueNode>;
                default: (opt: {
                    file: import("./interface").UploadFile<any>;
                }) => import("../_util/type").VueNode;
            };
            previewIcon: {
                type: import("vue").PropType<(opt: {
                    file: import("./interface").UploadFile<any>;
                }) => import("../_util/type").VueNode>;
                default: (opt: {
                    file: import("./interface").UploadFile<any>;
                }) => import("../_util/type").VueNode;
            };
        }>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            data: Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>);
            progress: import("./interface").UploadListProgressProps;
            height: unknown;
            onDrop: (event: DragEvent) => void;
            onChange: (info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void;
            multiple: boolean;
            disabled: boolean;
            type: import("./interface").UploadType;
            method: "post" | "POST" | "PUT" | "PATCH" | "put" | "patch";
            locale: import("./interface").UploadLocale;
            action: string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>);
            remove: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
            capture: boolean | "user" | "environment";
            iconRender: (opt: {
                file: import("./interface").UploadFile<any>;
                listType?: import("./interface").UploadListType;
            }) => import("../_util/type").VueNode;
            onRemove: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
            removeIcon: (opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode;
            itemRender: import("./interface").ItemRender<any>;
            headers: import("./interface").HttpRequestHeader;
            directory: boolean;
            onReject: (fileList: import("./interface").FileType[]) => void;
            beforeUpload: (file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>;
            customRequest: (options: import("../vc-upload/interface").UploadRequestOption<any>) => void;
            withCredentials: boolean;
            openFileDialogOnClick: boolean;
            fileList: import("./interface").UploadFile<any>[];
            defaultFileList: import("./interface").UploadFile<any>[];
            showUploadList: boolean | import("./interface").ShowUploadListInterface;
            'onUpdate:fileList': (fileList: import("./interface").UploadFile<any>[]) => void;
            listType: import("./interface").UploadListType;
            onPreview: (file: import("./interface").UploadFile<any>) => void;
            onDownload: (file: import("./interface").UploadFile<any>) => void;
            supportServerRender: boolean;
            previewFile: (file: Blob | import("./interface").FileType) => PromiseLike<string>;
            transformFile: (file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>;
            isImageUrl: (file: import("./interface").UploadFile<any>) => boolean;
            downloadIcon: (opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode;
            previewIcon: (opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode;
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
        capture: {
            type: import("vue").PropType<boolean | "user" | "environment">;
            default: boolean | "user" | "environment";
        };
        type: {
            type: import("vue").PropType<import("./interface").UploadType>;
            default: import("./interface").UploadType;
        };
        name: StringConstructor;
        defaultFileList: {
            type: import("vue").PropType<import("./interface").UploadFile<any>[]>;
            default: import("./interface").UploadFile<any>[];
        };
        fileList: {
            type: import("vue").PropType<import("./interface").UploadFile<any>[]>;
            default: import("./interface").UploadFile<any>[];
        };
        action: {
            type: import("vue").PropType<string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>)>;
            default: string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>);
        };
        directory: {
            type: BooleanConstructor;
            default: boolean;
        };
        data: {
            type: import("vue").PropType<Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>)>;
            default: Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>);
        };
        method: {
            type: import("vue").PropType<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
            default: "post" | "POST" | "PUT" | "PATCH" | "put" | "patch";
        };
        headers: {
            type: import("vue").PropType<import("./interface").HttpRequestHeader>;
            default: import("./interface").HttpRequestHeader;
        };
        showUploadList: {
            type: import("vue").PropType<boolean | import("./interface").ShowUploadListInterface>;
            default: boolean | import("./interface").ShowUploadListInterface;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        accept: StringConstructor;
        beforeUpload: {
            type: import("vue").PropType<(file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>>;
            default: (file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>;
        };
        onChange: {
            type: import("vue").PropType<(info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void>;
            default: (info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void;
        };
        'onUpdate:fileList': {
            type: import("vue").PropType<(fileList: import("./interface").UploadFile<any>[]) => void>;
            default: (fileList: import("./interface").UploadFile<any>[]) => void;
        };
        onDrop: {
            type: import("vue").PropType<(event: DragEvent) => void>;
            default: (event: DragEvent) => void;
        };
        listType: {
            type: import("vue").PropType<import("./interface").UploadListType>;
            default: import("./interface").UploadListType;
        };
        onPreview: {
            type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
            default: (file: import("./interface").UploadFile<any>) => void;
        };
        onDownload: {
            type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
            default: (file: import("./interface").UploadFile<any>) => void;
        };
        onReject: {
            type: import("vue").PropType<(fileList: import("./interface").FileType[]) => void>;
            default: (fileList: import("./interface").FileType[]) => void;
        };
        onRemove: {
            type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
            default: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
        };
        remove: {
            type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
            default: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
        };
        supportServerRender: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        prefixCls: StringConstructor;
        customRequest: {
            type: import("vue").PropType<(options: import("../vc-upload/interface").UploadRequestOption<any>) => void>;
            default: (options: import("../vc-upload/interface").UploadRequestOption<any>) => void;
        };
        withCredentials: {
            type: BooleanConstructor;
            default: boolean;
        };
        openFileDialogOnClick: {
            type: BooleanConstructor;
            default: boolean;
        };
        locale: {
            type: import("vue").PropType<import("./interface").UploadLocale>;
            default: import("./interface").UploadLocale;
        };
        id: StringConstructor;
        previewFile: {
            type: import("vue").PropType<(file: Blob | import("./interface").FileType) => PromiseLike<string>>;
            default: (file: Blob | import("./interface").FileType) => PromiseLike<string>;
        };
        transformFile: {
            type: import("vue").PropType<(file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>>;
            default: (file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>;
        };
        iconRender: {
            type: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
                listType?: import("./interface").UploadListType;
            }) => import("../_util/type").VueNode>;
            default: (opt: {
                file: import("./interface").UploadFile<any>;
                listType?: import("./interface").UploadListType;
            }) => import("../_util/type").VueNode;
        };
        isImageUrl: {
            type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean>;
            default: (file: import("./interface").UploadFile<any>) => boolean;
        };
        progress: {
            type: import("vue").PropType<import("./interface").UploadListProgressProps>;
            default: import("./interface").UploadListProgressProps;
        };
        itemRender: {
            type: import("vue").PropType<import("./interface").ItemRender<any>>;
            default: import("./interface").ItemRender<any>;
        };
        maxCount: NumberConstructor;
        height: {
            type: import("vue").PropType<unknown>;
            default: unknown;
        };
        removeIcon: {
            type: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode>;
            default: (opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode;
        };
        downloadIcon: {
            type: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode>;
            default: (opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode;
        };
        previewIcon: {
            type: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode>;
            default: (opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode;
        };
    }>> & import("vue").ShallowUnwrapRef<() => import("../_util/type").VueNode> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    capture: {
        type: import("vue").PropType<boolean | "user" | "environment">;
        default: boolean | "user" | "environment";
    };
    type: {
        type: import("vue").PropType<import("./interface").UploadType>;
        default: import("./interface").UploadType;
    };
    name: StringConstructor;
    defaultFileList: {
        type: import("vue").PropType<import("./interface").UploadFile<any>[]>;
        default: import("./interface").UploadFile<any>[];
    };
    fileList: {
        type: import("vue").PropType<import("./interface").UploadFile<any>[]>;
        default: import("./interface").UploadFile<any>[];
    };
    action: {
        type: import("vue").PropType<string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>)>;
        default: string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>);
    };
    directory: {
        type: BooleanConstructor;
        default: boolean;
    };
    data: {
        type: import("vue").PropType<Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>)>;
        default: Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>);
    };
    method: {
        type: import("vue").PropType<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
        default: "post" | "POST" | "PUT" | "PATCH" | "put" | "patch";
    };
    headers: {
        type: import("vue").PropType<import("./interface").HttpRequestHeader>;
        default: import("./interface").HttpRequestHeader;
    };
    showUploadList: {
        type: import("vue").PropType<boolean | import("./interface").ShowUploadListInterface>;
        default: boolean | import("./interface").ShowUploadListInterface;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: StringConstructor;
    beforeUpload: {
        type: import("vue").PropType<(file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>>;
        default: (file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>;
    };
    onChange: {
        type: import("vue").PropType<(info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void>;
        default: (info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void;
    };
    'onUpdate:fileList': {
        type: import("vue").PropType<(fileList: import("./interface").UploadFile<any>[]) => void>;
        default: (fileList: import("./interface").UploadFile<any>[]) => void;
    };
    onDrop: {
        type: import("vue").PropType<(event: DragEvent) => void>;
        default: (event: DragEvent) => void;
    };
    listType: {
        type: import("vue").PropType<import("./interface").UploadListType>;
        default: import("./interface").UploadListType;
    };
    onPreview: {
        type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
        default: (file: import("./interface").UploadFile<any>) => void;
    };
    onDownload: {
        type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
        default: (file: import("./interface").UploadFile<any>) => void;
    };
    onReject: {
        type: import("vue").PropType<(fileList: import("./interface").FileType[]) => void>;
        default: (fileList: import("./interface").FileType[]) => void;
    };
    onRemove: {
        type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
        default: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
    };
    remove: {
        type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
        default: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
    };
    supportServerRender: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixCls: StringConstructor;
    customRequest: {
        type: import("vue").PropType<(options: import("../vc-upload/interface").UploadRequestOption<any>) => void>;
        default: (options: import("../vc-upload/interface").UploadRequestOption<any>) => void;
    };
    withCredentials: {
        type: BooleanConstructor;
        default: boolean;
    };
    openFileDialogOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    locale: {
        type: import("vue").PropType<import("./interface").UploadLocale>;
        default: import("./interface").UploadLocale;
    };
    id: StringConstructor;
    previewFile: {
        type: import("vue").PropType<(file: Blob | import("./interface").FileType) => PromiseLike<string>>;
        default: (file: Blob | import("./interface").FileType) => PromiseLike<string>;
    };
    transformFile: {
        type: import("vue").PropType<(file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>>;
        default: (file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>;
    };
    iconRender: {
        type: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
            listType?: import("./interface").UploadListType;
        }) => import("../_util/type").VueNode>;
        default: (opt: {
            file: import("./interface").UploadFile<any>;
            listType?: import("./interface").UploadListType;
        }) => import("../_util/type").VueNode;
    };
    isImageUrl: {
        type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean>;
        default: (file: import("./interface").UploadFile<any>) => boolean;
    };
    progress: {
        type: import("vue").PropType<import("./interface").UploadListProgressProps>;
        default: import("./interface").UploadListProgressProps;
    };
    itemRender: {
        type: import("vue").PropType<import("./interface").ItemRender<any>>;
        default: import("./interface").ItemRender<any>;
    };
    maxCount: NumberConstructor;
    height: {
        type: import("vue").PropType<unknown>;
        default: unknown;
    };
    removeIcon: {
        type: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode>;
        default: (opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode;
    };
    downloadIcon: {
        type: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode>;
        default: (opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode;
    };
    previewIcon: {
        type: import("vue").PropType<(opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode>;
        default: (opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode;
    };
}>>, () => import("../_util/type").VueNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    data: Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>);
    progress: import("./interface").UploadListProgressProps;
    height: unknown;
    onDrop: (event: DragEvent) => void;
    onChange: (info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void;
    multiple: boolean;
    disabled: boolean;
    type: import("./interface").UploadType;
    method: "post" | "POST" | "PUT" | "PATCH" | "put" | "patch";
    locale: import("./interface").UploadLocale;
    action: string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>);
    remove: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
    capture: boolean | "user" | "environment";
    iconRender: (opt: {
        file: import("./interface").UploadFile<any>;
        listType?: import("./interface").UploadListType;
    }) => import("../_util/type").VueNode;
    onRemove: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
    removeIcon: (opt: {
        file: import("./interface").UploadFile<any>;
    }) => import("../_util/type").VueNode;
    itemRender: import("./interface").ItemRender<any>;
    headers: import("./interface").HttpRequestHeader;
    directory: boolean;
    onReject: (fileList: import("./interface").FileType[]) => void;
    beforeUpload: (file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>;
    customRequest: (options: import("../vc-upload/interface").UploadRequestOption<any>) => void;
    withCredentials: boolean;
    openFileDialogOnClick: boolean;
    fileList: import("./interface").UploadFile<any>[];
    defaultFileList: import("./interface").UploadFile<any>[];
    showUploadList: boolean | import("./interface").ShowUploadListInterface;
    'onUpdate:fileList': (fileList: import("./interface").UploadFile<any>[]) => void;
    listType: import("./interface").UploadListType;
    onPreview: (file: import("./interface").UploadFile<any>) => void;
    onDownload: (file: import("./interface").UploadFile<any>) => void;
    supportServerRender: boolean;
    previewFile: (file: Blob | import("./interface").FileType) => PromiseLike<string>;
    transformFile: (file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>;
    isImageUrl: (file: import("./interface").UploadFile<any>) => boolean;
    downloadIcon: (opt: {
        file: import("./interface").UploadFile<any>;
    }) => import("../_util/type").VueNode;
    previewIcon: (opt: {
        file: import("./interface").UploadFile<any>;
    }) => import("../_util/type").VueNode;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Dragger: import("vue").DefineComponent<{
        capture: {
            type: import("vue").PropType<boolean | "user" | "environment">;
            default: boolean | "user" | "environment";
        };
        type: {
            type: import("vue").PropType<import("./interface").UploadType>;
            default: import("./interface").UploadType;
        };
        name: StringConstructor;
        defaultFileList: {
            type: import("vue").PropType<import("./interface").UploadFile<any>[]>;
            default: import("./interface").UploadFile<any>[];
        };
        fileList: {
            type: import("vue").PropType<import("./interface").UploadFile<any>[]>;
            default: import("./interface").UploadFile<any>[];
        };
        action: {
            type: import("vue").PropType<string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>)>;
            default: string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>);
        };
        directory: {
            type: BooleanConstructor;
            default: boolean;
        };
        data: {
            type: import("vue").PropType<Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>)>;
            default: Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>);
        };
        method: {
            type: import("vue").PropType<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
            default: "post" | "POST" | "PUT" | "PATCH" | "put" | "patch";
        };
        headers: {
            type: import("vue").PropType<import("./interface").HttpRequestHeader>;
            default: import("./interface").HttpRequestHeader;
        };
        showUploadList: {
            type: import("vue").PropType<boolean | import("./interface").ShowUploadListInterface>;
            default: boolean | import("./interface").ShowUploadListInterface;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        accept: StringConstructor;
        beforeUpload: {
            type: import("vue").PropType<(file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>>;
            default: (file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>;
        };
        onChange: {
            type: import("vue").PropType<(info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void>;
            default: (info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void;
        };
        'onUpdate:fileList': {
            type: import("vue").PropType<(fileList: import("./interface").UploadFile<any>[]) => void>;
            default: (fileList: import("./interface").UploadFile<any>[]) => void;
        };
        onDrop: {
            type: import("vue").PropType<(event: DragEvent) => void>;
            default: (event: DragEvent) => void;
        };
        listType: {
            type: import("vue").PropType<import("./interface").UploadListType>;
            default: import("./interface").UploadListType;
        };
        onPreview: {
            type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
            default: (file: import("./interface").UploadFile<any>) => void;
        };
        onDownload: {
            type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
            default: (file: import("./interface").UploadFile<any>) => void;
        };
        onReject: {
            type: import("vue").PropType<(fileList: import("./interface").FileType[]) => void>;
            default: (fileList: import("./interface").FileType[]) => void;
        };
        onRemove: {
            type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
            default: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
        };
        remove: {
            type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
            default: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
        };
        supportServerRender: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        prefixCls: StringConstructor;
        customRequest: {
            type: import("vue").PropType<(options: import("../vc-upload/interface").UploadRequestOption<any>) => void>;
            default: (options: import("../vc-upload/interface").UploadRequestOption<any>) => void;
        };
        withCredentials: {
            type: BooleanConstructor;
            default: boolean;
        };
        openFileDialogOnClick: {
            type: BooleanConstructor;
            default: boolean;
        };
        locale: {
            type: import("vue").PropType<import("./interface").UploadLocale>;
            default: import("./interface").UploadLocale;
        };
        id: StringConstructor;
        previewFile: {
            type: import("vue").PropType<(file: Blob | import("./interface").FileType) => PromiseLike<string>>;
            default: (file: Blob | import("./interface").FileType) => PromiseLike<string>;
        };
        transformFile: {
            type: import("vue").PropType<(file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>>;
            default: (file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>;
        };
        iconRender: {
            type: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
                listType?: import("./interface").UploadListType;
            }) => import("../_util/type").VueNode>;
            default: (opt: {
                file: import("./interface").UploadFile<any>;
                listType?: import("./interface").UploadListType;
            }) => import("../_util/type").VueNode;
        };
        isImageUrl: {
            type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean>;
            default: (file: import("./interface").UploadFile<any>) => boolean;
        };
        progress: {
            type: import("vue").PropType<import("./interface").UploadListProgressProps>;
            default: import("./interface").UploadListProgressProps;
        };
        itemRender: {
            type: import("vue").PropType<import("./interface").ItemRender<any>>;
            default: import("./interface").ItemRender<any>;
        };
        maxCount: NumberConstructor;
        height: {
            type: import("vue").PropType<unknown>;
            default: unknown;
        };
        removeIcon: {
            type: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode>;
            default: (opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode;
        };
        downloadIcon: {
            type: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode>;
            default: (opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode;
        };
        previewIcon: {
            type: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode>;
            default: (opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode;
        };
    }, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        capture: {
            type: import("vue").PropType<boolean | "user" | "environment">;
            default: boolean | "user" | "environment";
        };
        type: {
            type: import("vue").PropType<import("./interface").UploadType>;
            default: import("./interface").UploadType;
        };
        name: StringConstructor;
        defaultFileList: {
            type: import("vue").PropType<import("./interface").UploadFile<any>[]>;
            default: import("./interface").UploadFile<any>[];
        };
        fileList: {
            type: import("vue").PropType<import("./interface").UploadFile<any>[]>;
            default: import("./interface").UploadFile<any>[];
        };
        action: {
            type: import("vue").PropType<string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>)>;
            default: string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>);
        };
        directory: {
            type: BooleanConstructor;
            default: boolean;
        };
        data: {
            type: import("vue").PropType<Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>)>;
            default: Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>);
        };
        method: {
            type: import("vue").PropType<"post" | "POST" | "PUT" | "PATCH" | "put" | "patch">;
            default: "post" | "POST" | "PUT" | "PATCH" | "put" | "patch";
        };
        headers: {
            type: import("vue").PropType<import("./interface").HttpRequestHeader>;
            default: import("./interface").HttpRequestHeader;
        };
        showUploadList: {
            type: import("vue").PropType<boolean | import("./interface").ShowUploadListInterface>;
            default: boolean | import("./interface").ShowUploadListInterface;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        accept: StringConstructor;
        beforeUpload: {
            type: import("vue").PropType<(file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>>;
            default: (file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>;
        };
        onChange: {
            type: import("vue").PropType<(info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void>;
            default: (info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void;
        };
        'onUpdate:fileList': {
            type: import("vue").PropType<(fileList: import("./interface").UploadFile<any>[]) => void>;
            default: (fileList: import("./interface").UploadFile<any>[]) => void;
        };
        onDrop: {
            type: import("vue").PropType<(event: DragEvent) => void>;
            default: (event: DragEvent) => void;
        };
        listType: {
            type: import("vue").PropType<import("./interface").UploadListType>;
            default: import("./interface").UploadListType;
        };
        onPreview: {
            type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
            default: (file: import("./interface").UploadFile<any>) => void;
        };
        onDownload: {
            type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => void>;
            default: (file: import("./interface").UploadFile<any>) => void;
        };
        onReject: {
            type: import("vue").PropType<(fileList: import("./interface").FileType[]) => void>;
            default: (fileList: import("./interface").FileType[]) => void;
        };
        onRemove: {
            type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
            default: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
        };
        remove: {
            type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>>;
            default: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
        };
        supportServerRender: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        prefixCls: StringConstructor;
        customRequest: {
            type: import("vue").PropType<(options: import("../vc-upload/interface").UploadRequestOption<any>) => void>;
            default: (options: import("../vc-upload/interface").UploadRequestOption<any>) => void;
        };
        withCredentials: {
            type: BooleanConstructor;
            default: boolean;
        };
        openFileDialogOnClick: {
            type: BooleanConstructor;
            default: boolean;
        };
        locale: {
            type: import("vue").PropType<import("./interface").UploadLocale>;
            default: import("./interface").UploadLocale;
        };
        id: StringConstructor;
        previewFile: {
            type: import("vue").PropType<(file: Blob | import("./interface").FileType) => PromiseLike<string>>;
            default: (file: Blob | import("./interface").FileType) => PromiseLike<string>;
        };
        transformFile: {
            type: import("vue").PropType<(file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>>;
            default: (file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>;
        };
        iconRender: {
            type: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
                listType?: import("./interface").UploadListType;
            }) => import("../_util/type").VueNode>;
            default: (opt: {
                file: import("./interface").UploadFile<any>;
                listType?: import("./interface").UploadListType;
            }) => import("../_util/type").VueNode;
        };
        isImageUrl: {
            type: import("vue").PropType<(file: import("./interface").UploadFile<any>) => boolean>;
            default: (file: import("./interface").UploadFile<any>) => boolean;
        };
        progress: {
            type: import("vue").PropType<import("./interface").UploadListProgressProps>;
            default: import("./interface").UploadListProgressProps;
        };
        itemRender: {
            type: import("vue").PropType<import("./interface").ItemRender<any>>;
            default: import("./interface").ItemRender<any>;
        };
        maxCount: NumberConstructor;
        height: {
            type: import("vue").PropType<unknown>;
            default: unknown;
        };
        removeIcon: {
            type: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode>;
            default: (opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode;
        };
        downloadIcon: {
            type: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode>;
            default: (opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode;
        };
        previewIcon: {
            type: import("vue").PropType<(opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode>;
            default: (opt: {
                file: import("./interface").UploadFile<any>;
            }) => import("../_util/type").VueNode;
        };
    }>>, {
        data: Record<string, unknown> | ((file: import("./interface").UploadFile<any>) => Record<string, unknown> | Promise<Record<string, unknown>>);
        progress: import("./interface").UploadListProgressProps;
        height: unknown;
        onDrop: (event: DragEvent) => void;
        onChange: (info: import("./interface").UploadChangeParam<import("./interface").UploadFile<any>>) => void;
        multiple: boolean;
        disabled: boolean;
        type: import("./interface").UploadType;
        method: "post" | "POST" | "PUT" | "PATCH" | "put" | "patch";
        locale: import("./interface").UploadLocale;
        action: string | ((file: import("./interface").FileType) => string) | ((file: import("./interface").FileType) => PromiseLike<string>);
        remove: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
        capture: boolean | "user" | "environment";
        iconRender: (opt: {
            file: import("./interface").UploadFile<any>;
            listType?: import("./interface").UploadListType;
        }) => import("../_util/type").VueNode;
        onRemove: (file: import("./interface").UploadFile<any>) => boolean | void | Promise<boolean | void>;
        removeIcon: (opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode;
        itemRender: import("./interface").ItemRender<any>;
        headers: import("./interface").HttpRequestHeader;
        directory: boolean;
        onReject: (fileList: import("./interface").FileType[]) => void;
        beforeUpload: (file: import("./interface").FileType, FileList: import("./interface").FileType[]) => (string | boolean | void | Blob | import("./interface").FileType) | Promise<string | boolean | void | Blob | import("./interface").FileType>;
        customRequest: (options: import("../vc-upload/interface").UploadRequestOption<any>) => void;
        withCredentials: boolean;
        openFileDialogOnClick: boolean;
        fileList: import("./interface").UploadFile<any>[];
        defaultFileList: import("./interface").UploadFile<any>[];
        showUploadList: boolean | import("./interface").ShowUploadListInterface;
        'onUpdate:fileList': (fileList: import("./interface").UploadFile<any>[]) => void;
        listType: import("./interface").UploadListType;
        onPreview: (file: import("./interface").UploadFile<any>) => void;
        onDownload: (file: import("./interface").UploadFile<any>) => void;
        supportServerRender: boolean;
        previewFile: (file: Blob | import("./interface").FileType) => PromiseLike<string>;
        transformFile: (file: import("./interface").FileType) => string | Blob | import("./interface").FileType | PromiseLike<string | Blob | import("./interface").FileType>;
        isImageUrl: (file: import("./interface").UploadFile<any>) => boolean;
        downloadIcon: (opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode;
        previewIcon: (opt: {
            file: import("./interface").UploadFile<any>;
        }) => import("../_util/type").VueNode;
    }, {}>;
    LIST_IGNORE: string;
    install(app: App): App<any>;
};
export default _default;
