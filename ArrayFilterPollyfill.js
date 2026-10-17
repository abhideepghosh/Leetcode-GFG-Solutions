/**
 * @template T
 * @param {(value: T, index: number, array: Array<T>) => boolean} callbackFn
 * @param {unknown} [thisArg]
 * @returns {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const len = this.length;
  const results = [];

  // Snapshot the original range so callback-side pushes do not extend the walk.
  for (let k = 0; k < len; k++) {
    // Native filter skips true holes but visits inherited indexed properties,
    // matching its HasProperty check.
    if (k in this) {
      const kValue = this[k];
      if (callbackFn.call(thisArg, kValue, k, this)) {
        results.push(kValue);
      }
    }
  }

  return results;
};
