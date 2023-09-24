import { findDOMNode } from '../props-util';
import showWaveEffect from './WaveEffect';
export default function useWave(instance, className) {
  function showWave() {
    const node = findDOMNode(instance);
    showWaveEffect(node, className.value);
  }
  return showWave;
}