/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Remove Element.
Memory Usage: 40.6 MB, less than 96.83% of Java online submissions for Remove Element.
*/
// TC: O(N) SC: O(1)
class Solution {
    public int removeElement(int[] nums, int val) {
        
        int index = 0;
        
        for(int i=0; i<nums.length; i++){
            if(nums[i] != val){
                int temp = nums[i];
                nums[i] = nums[index];
                nums[index] = temp;
                index++;
            }
        }
        
        return index;
        
    }
}
