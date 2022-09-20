/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for House Robber.
Memory Usage: 39.5 MB, less than 95.96% of Java online submissions for House Robber.
*/
// Optimized Solution : TC: O(n) SC: O(n)
class Solution {
    public int rob(int[] nums) {
        
        // Standard Dynamic Programming Procedure With An Array Of Size nums.length + 1
        int[] dp = new int[nums.length + 1];
        
        // Assigning The first 2 elements Of The DP Array
        dp[0] = 0;
        dp[1] = nums[0];
        
        // Calculating The dp Element Value As Per:
        // Math.max Of Previous Element Of dp Array And Sum Of Current nums Element + The Last Non Adjacent Element Sum
        for(int i=2; i<dp.length; i++){
            dp[i] = Math.max(dp[i-1], nums[i-1] + dp[i-2]);
        }
        
        // Returning The Final Result Which Is Stored In The Last Element Of The dp Array
        return dp[dp.length - 1];
        
    }
}
