/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Climbing Stairs.
Memory Usage: 38.7 MB, less than 97.94% of Java online submissions for Climbing Stairs.
*/
// Tabulation : TC: O(N) SC: O(N)
class Solution {
    public int climbStairs(int n) {
        
        // Handling Edge Cases
        if(n == 1){
            return 1;
        }
        
        // Standard DP Template
        int[] dp = new int[n + 1];
        
        // Assigning The First 2 Elements Of DP
        dp[0] = 1;
        dp[1] = 1;
        
        // Calculating Current Element Using The Previous 2 Elementss
        for(int i = 2; i<dp.length; i++){
            dp[i] = dp[i-1] + dp[i-2];
        }
        
        // Returning The Result Stored In dp[n]
        return dp[n];
        
    }
}
