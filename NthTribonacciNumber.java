/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for N-th Tribonacci Number.
Memory Usage: 40.6 MB, less than 70.83% of Java online submissions for N-th Tribonacci Number.
*/
// Tabulation: TC: O(N) SC: O(N)
class Solution {
    public int tribonacci(int n) {
        
        //Handling Edge Cases
        if(n == 0){
            return 0;
        }
        if(n == 1 || n == 2){
            return 1;
        }
        
        // Standard DP Template
        int[] dp = new int[n+1];
        
        // Manually Inputting First 3 Elements Into The Array
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 1;
        
        // Calculating The Current Value Of Dp Using Sum Of Last 3 Elements
        for(int i=3 ; i<dp.length; i++){
            dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
        }
        
        // Returning The Result Stored In dp[n]
        return dp[n];
        
    }
}
