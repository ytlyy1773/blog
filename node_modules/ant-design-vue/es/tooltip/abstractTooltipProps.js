import { objectType } from '../_util/type';
export default (() => ({
  trigger: [String, Array],
  open: {
    type: Boolean,
    default: undefined
  },
  /** @deprecated Please use `open` instead. */
  visible: {
    type: Boolean,
    default: undefined
  },
  placement: String,
  color: String,
  transitionName: String,
  overlayStyle: objectType(),
  overlayInnerStyle: objectType(),
  overlayClassName: String,
  openClassName: String,
  prefixCls: String,
  mouseEnterDelay: Number,
  mouseLeaveDelay: Number,
  getPopupContainer: Function,
  arrowPointAtCenter: {
    type: Boolean,
    default: undefined
  },
  autoAdjustOverflow: {
    type: [Boolean, Object],
    default: undefined
  },
  destroyTooltipOnHide: {
    type: Boolean,
    default: undefined
  },
  align: objectType(),
  builtinPlacements: objectType(),
  children: Array,
  /** @deprecated Please use `onOpenChange` instead. */
  onVisibleChange: Function,
  /** @deprecated Please use `onUpdate:open` instead. */
  'onUpdate:visible': Function,
  onOpenChange: Function,
  'onUpdate:open': Function
}));