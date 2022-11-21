/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Get Maximum in Generated Array.
Memory Usage: 38.9 MB, less than 94.38% of Java online submissions for Get Maximum in Generated Array.
*/
// TC: O(N) SC: O(N)
class Solution {
    public int getMaximumGenerated(int n) {
        /*
        nums[0] = 0
        nums[1] = 1
        */
        // Edge Cases
        if(n == 0 || n == 1){
            return n;
        }
        
        // Dynamic Programming: Tabulation
        int[] dp = new int[n + 1];
        
        // Based On The Formulas Given In The Question
        //Even Position: dp[2 * i] = dp[i] <=> dp[i] = dp[i/2]
        // Odd Position: dp[2 * i + 1] = dp[i] + dp[i + 1] <=> dp[i] = dp[i/2] + dp[i/2 + 1]
        
        // Default Values
        dp[0] = 0;
        dp[1] = 1;
        
        // For Storing Max
        int max = Integer.MIN_VALUE;
        
        // Iterating Through Numbers
        for(int i=2; i<n+1; i++){
            // If Even
            if(i % 2 == 0){
                 dp[i] = dp[i/2];
            }
            // If Odd
            else{
                dp[i] = dp[i/2] + dp[i/2 + 1];
            }
            
            // Storing Max Value
            max = Math.max(dp[i], max);
            
        }
        
        // Returning Result
        return max;
        
    }
}
