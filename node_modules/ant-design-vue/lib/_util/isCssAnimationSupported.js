"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let animation;
function isCssAnimationSupported() {
  if (animation !== undefined) {
    return animation;
  }
  const domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');
  const elm = document.createElement('div');
  if (elm.style.animationName !== undefined) {
    animation = true;
  }
  if (animation !== undefined) {
    for (let i = 0; i < domPrefixes.length; i++) {
      if (elm.style[`${domPrefixes[i]}AnimationName`] !== undefined) {
        animation = true;
        break;
      }
    }
  }
  animation = animation || false;
  return animation;
}
var _default = isCssAnimationSupported;
exports.default = _default;