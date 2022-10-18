/*
Runtime: 2 ms, faster than 94.60% of Java online submissions for Jump Game.
Memory Usage: 42.9 MB, less than 90.78% of Java online submissions for Jump Game.
*/
// Optimised Solution: Greedy Approach TC: O(N) SC: O(1)
class Solution {
    
    public boolean canJump(int[] nums) {
        
        int jumps = 0;
        
        for(int i=0; i<nums.length; i++){
        
            if(jumps < i){
                return false;
            }
            
            jumps = (jumps < i + nums[i]) ? (i + nums[i]) : jumps;
            
        }
        
        return true;
        
    }
    
}



/*
Runtime: 3 ms, faster than 77.93% of Java online submissions for Jump Game.
Memory Usage: 42.5 MB, less than 98.60% of Java online submissions for Jump Game.
*/
// Brute Force: Dynamic Programming Tabulation TC: O(N) SC: O(N)
class Solution {
    
    public boolean canJump(int[] nums) {
        
        int[] dp = new int[nums.length + 1];
        dp[0] = nums[0];
        
        for(int i=0; i<nums.length; i++){
        
            if(dp[i] < i){
                return false;
            }
            
            dp[i+1] = (dp[i] < i + nums[i]) ? (i + nums[i]) : dp[i];
            
        }
        
        return true;
        
    }
    
}
