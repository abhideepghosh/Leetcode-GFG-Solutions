/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// TC: O(N) SC: O(1)
var uniquePaths = function(m, n) {
    const steps = m - 1 + n - 1;
    const smaller = Math.max(m - 1, n - 1);
    let numerator = 1;
    for(let i=1; i<=smaller; i++) {
        numerator *= steps - i + 1;
    }
    let denominator = 1;
    for(let i=1; i<=smaller; i++) {
        denominator *= i;
    }
    return (numerator / denominator);
};


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//TC: O(M*N) SC: O(N)
var uniquePaths = function(m, n) {
    const dp = [];
    for(let i=0; i<m; i++) {
        dp[i] = [];
        for(let j=0; j<n; j++) {
            dp[i][j] = 1;
        }
    }
    for(let i=m-2; i>=0; i--) {
        for(let j=n-2; j>=0; j--) {
            dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
        }
    }
    return dp[0][0];
};
