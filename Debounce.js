/**
 * @param {(...args: Array<unknown>) => unknown} func
 * @param {number} wait
 * @returns {(...args: Array<unknown>) => void}
 */
export default function debounce(func, wait) {
  let timeout;
  return function (...args) {
    if(timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  }
}
