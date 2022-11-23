/*
Runtime: 1 ms, faster than 99.90% of Java online submissions for Jump Game II.
Memory Usage: 42.8 MB, less than 87.65% of Java online submissions for Jump Game II.
*/
class Solution {
    public int jump(int[] nums) {
        
        int stepCount = 0;
        int lastJumpMax = 0;
        int currentJumpMax = 0;
        
        for(int i=0; i<nums.length - 1; i++){
            currentJumpMax = Math.max(currentJumpMax, nums[i] + i);
            if(i == lastJumpMax){
                stepCount++;
                lastJumpMax = currentJumpMax;
            }
        }
        
        return stepCount;
        
    }
}
