/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let balance = 0, maxImbalance = 0;
    for(let ch of s) {
        ch === '[' ? balance++ : balance--;
        maxImbalance = Math.max(maxImbalance, -balance);
    }
    return Math.ceil(maxImbalance / 2);
};
