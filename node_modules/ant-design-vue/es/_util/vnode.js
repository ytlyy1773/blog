import _extends from "@babel/runtime/helpers/esm/extends";
import { filterEmpty } from './props-util';
import { cloneVNode } from 'vue';
import warning from './warning';
export function cloneElement(vnode) {
  let nodeProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  let mergeRef = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  let ele = vnode;
  if (Array.isArray(vnode)) {
    ele = filterEmpty(vnode)[0];
  }
  if (!ele) {
    return null;
  }
  const node = cloneVNode(ele, nodeProps, mergeRef);
  // cloneVNode内部是合并属性，这里改成覆盖属性
  node.props = override ? _extends(_extends({}, node.props), nodeProps) : node.props;
  warning(typeof node.props.class !== 'object', 'class must be string');
  return node;
}
export function cloneVNodes(vnodes) {
  let nodeProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return vnodes.map(vnode => cloneElement(vnode, nodeProps, override));
}
export function deepCloneElement(vnode) {
  let nodeProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  let mergeRef = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (Array.isArray(vnode)) {
    return vnode.map(item => deepCloneElement(item, nodeProps, override, mergeRef));
  } else {
    const cloned = cloneElement(vnode, nodeProps, override, mergeRef);
    if (Array.isArray(cloned.children)) {
      cloned.children = deepCloneElement(cloned.children);
    }
    return cloned;
  }
}