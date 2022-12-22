class Solution 
{
    //Function to return max value that can be put in knapsack of capacity W.
    knapSack(W, wt, val, n)
    { 
       // code here
       const dp = new Array(val.length + 1);
       for(let i=0; i<dp.length; i++){
           for(let j=0; j<W + 1; j++){
               dp[i] = new Array(W + 1);
           }
       }
       for(let j=0; j<dp[0].length; j++){
           dp[0][j] = 0;
       }
       for(let i=0; i<dp.length; i++){
           dp[i][0] = 0;
       }
       for(let i=1; i<dp.length; i++){
           for(let j=1; j<dp[0].length; j++){
               if(j >= wt[i - 1]){
                   dp[i][j] = Math.max(dp[i-1][j], val[i-1] + dp[i-1][j - wt[i-1]]);
               }else{
                   dp[i][j] = dp[i-1][j];
               }
           }
       }
       return dp[dp.length - 1][dp[0].length - 1];
    }
}
