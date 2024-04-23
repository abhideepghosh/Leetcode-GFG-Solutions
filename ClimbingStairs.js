/**
 * @param {number} n
 * @return {number}
 */
// TC: O(N) SC: O(1)
var climbStairs = function(n) {
    if(n === 1 || n === 2) return n;
    let firstStep = 1;
    let secondStep = 2;
    let result = 1;
    for(let i=3; i<=n; i++) {
        result = firstStep + secondStep;
        firstStep = secondStep;
        secondStep = result;
    }
    return result;
};
