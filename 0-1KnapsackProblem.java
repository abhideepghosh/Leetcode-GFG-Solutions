class Solution 
{ 
    //Function to return max value that can be put in knapsack of capacity W.
    static int knapSack(int totalWeights, int weights[], int values[], int n) 
    { 
         // your code here
         
         // Creating A 2D Array For Storing The Results
         int[][] dp = new int[values.length + 1][totalWeights + 1];
         
         for(int i=1; i<dp.length; i++){
             for(int j=1; j<dp[0].length; j++){
                 if(j < weights[i - 1]){
                     dp[i][j] = dp[i - 1][j];
                 }
                 else{
                     dp[i][j] = Math.max(dp[i - 1][j], values[i - 1] + dp[i - 1][j - weights[i - 1]]);
                 }
             }
         }
         
         return dp[dp.length - 1][dp[0].length - 1];
         
    } 
}
