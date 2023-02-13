/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    low = low % 2 === 0 ? low + 1 : low;
    high = high % 2 === 0 ? high -1 : high;
    return low > high ? 0 : Math.floor((high - low) / 2) + 1;
};
