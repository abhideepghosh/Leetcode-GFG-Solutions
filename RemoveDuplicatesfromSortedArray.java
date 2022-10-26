/*
Runtime: 1 ms, faster than 100.00% of Java online submissions for Remove Duplicates from Sorted Array.
Memory Usage: 47.7 MB, less than 62.68% of Java online submissions for Remove Duplicates from Sorted Array.
*/
// Optimised Solution: TC: O(N) SC: O(1)
class Solution {
    public int removeDuplicates(int[] nums) {
        
        int index = 1;
        
        for(int i=1; i<nums.length; i++){
            if(nums[i] != nums[i-1]){
                nums[index++] = nums[i];
            }
        }
        
        return index;
        
    }
}
