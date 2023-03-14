/**
 * @param {number} W
 * @param {number[]} wt
 * @param {number[]} val
 * @param {number} n
 * @returns {number}
*/

class Solution 
{
    //Function to return max value that can be put in knapsack of capacity W.
    knapSack(W, wt, val, n)
    { 
       // code here
       const dp = [];
       for(let i=0; i<val.length + 1; i++) {
           dp[i] = new Array(W + 1).fill(0);
       }
       for(let i=1; i<dp.length; i++) {
           for(let j=1; j<dp[i].length; j++) {
               if(j >= wt[i - 1]){
                   dp[i][j] = Math.max(dp[i-1][j - wt[i - 1]] + val[i - 1], dp[i - 1][j]);
               }
               else {
                   dp[i][j] = dp[i - 1][j];
               }
           }
       }
       return dp[dp.length - 1][dp[0].length - 1];
    }
}
