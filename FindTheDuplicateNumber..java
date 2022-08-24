// Optimised Solution TC: O(n) SC: O(1)
class Solution {
    public int findDuplicate(int[] nums) {
        
        while(nums[0] != nums[nums[0]]){
            int next = nums[nums[0]];
            nums[nums[0]] = nums[0];
            nums[0] = next;
        }
        
        return nums[0];
        
    }
}
