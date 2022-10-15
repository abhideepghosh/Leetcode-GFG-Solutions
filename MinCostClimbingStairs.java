/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Min Cost Climbing Stairs.
Memory Usage: 41.9 MB, less than 93.32% of Java online submissions for Min Cost Climbing Stairs.
*/
// Greedy Algorithm TC: O(N) SC: O(1)
class Solution {
    
    public int minCostClimbingStairs(int[] cost) {
        
        // Finding Min Of Last Two Element And Adding It With Current Element
        for(int i=2; i<cost.length; i++){
            cost[i] += Math.min(cost[i-1], cost[i-2]);
        }
        
        // Returning The Minimum Of Last 2 Modified Element
        return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
        
    }
}



/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Min Cost Climbing Stairs.
Memory Usage: 42.2 MB, less than 86.68% of Java online submissions for Min Cost Climbing Stairs.
*/
// Dynamic Programing Tabulation: TC: O(N) SC: O(N)
// The Only Benefit Of This Approach Is That The Original Array Will Not Be Modified At The Cost Of O(N) Space
class Solution {
    public int minCostClimbingStairs(int[] cost) {
        
        // Handling Edge Case
        if(cost.length == 2){
            return Math.min(cost[0], cost[1]);
        }
        
        // Standard DP Tabulation Template
        int[] dp = new int[cost.length];
        
        // Initialising First 2 Elements
        dp[0] = cost[0];
        dp[1] = cost[1];
        
        // Finding THe Min Of Last To Elements And Storing It In The Current Element Of DP After Adding Current Cost
        for(int i=2; i<dp.length; i++){
            dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
        }
        
        // Returning The Minimum Of Last 2 DP Elements
        return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
        
    }
}
