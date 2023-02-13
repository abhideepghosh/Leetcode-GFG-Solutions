/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// Approach 1
var countOdds = function(low, high) {
    low = low % 2 === 0 ? low + 1 : low;
    high = high % 2 === 0 ? high -1 : high;
    return low > high ? 0 : Math.floor((high - low) / 2) + 1;
};

// Approach 2
var countOdds = function(low, high) {
    return Math.floor((high - low)/2) + (low%2 || high%2 ? 1 : 0);
};
