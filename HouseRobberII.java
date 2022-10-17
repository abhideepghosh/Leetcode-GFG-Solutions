/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for House Robber II.
Memory Usage: 39.5 MB, less than 97.59% of Java online submissions for House Robber II.
*/
// TC: O(N) SC: O(N)
class Solution {
    public int rob(int[] nums) {
        
        // Handling Edge Cases
        if(nums.length == 1){
            return nums[0];
        }
        if(nums.length == 2){
            return Math.max(nums[0], nums[1]);
        }
        
        // Taking An Array To Store Result From Index 0 To nums.length - 2
        int[] dp1 = new int[nums.length];
        dp1[0] = 0;
        dp1[1] = nums[0];
        
        // Storing Result From Index 0 To nums.length - 2
        for(int i=2; i<dp1.length; i++){
            dp1[i] = Math.max(dp1[i-1], nums[i-1] + dp1[i-2]);
        }
        
        // Similarly, We Store The Result For 1 To nums.length - 1
        int[] dp2 = new int[nums.length + 1];
        dp2[1] = 0;
        dp2[2] = nums[1];
        
        // Sotring Result From Index 1 To nums.length - 1
        for(int i=3; i<dp2.length; i++){
            dp2[i] = Math.max(dp2[i-1], nums[i-1] + dp2[i-2]);
        }
        
        // Returning Max Of The 2 Final Results Stored
        return Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1]);
        
    }
}
