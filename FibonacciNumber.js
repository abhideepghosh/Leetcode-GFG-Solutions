/**
 * @param {number} n
 * @return {number}
 */
// TC: O(N) SC: O(1)
var fib = function(n) {
    if(n === 0) return n;
    if(n === 1 || n === 2) return 1;
    let first = 1, second = 1, result = 1;
    for(let i=3; i<=n; i++) {
        result = first + second;
        first = second;
        second = result;
    }
    return result;
};

// TC: O(N) SC: O(N)
var fib = function(n) {
    if(n === 0) return 0;
    if(n === 1 || n === 2) return 1;
    const dp = [0, 1, 1];
    for(let i=3; i<=n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp.pop();

};


// TC: O(2^N) SC: O(N)
var fib = function(n) {
    if(n === 0) return 0;
    if(n === 1 || n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
};
