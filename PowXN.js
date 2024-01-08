/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// TC: O(logN) SC: O(1)
var myPow = function(x, n) {
    if(n === 0) return 1;
    let isNegative = false;
    let result = 1;
    if(n < 0) {
        isNegative = true;
        n *= -1;
    }
    while(n > 0) {
        if(n % 2 === 0) {
            x *= x;
            n /= 2;
        }
        else {
            result *= x;
            n -= 1;
        }
    }
    return (!isNegative) ? result : 1/result;
};
