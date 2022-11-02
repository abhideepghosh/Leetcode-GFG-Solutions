/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Search Insert Position.
Memory Usage: 41.8 MB, less than 90.75% of Java online submissions for Search Insert Position.
*/
class Solution {
    public int searchInsert(int[] nums, int target) {
        
        int start = 0;
        int end = nums.length - 1;
        
        while(start <= end){
            
            int mid = start + (end - start) / 2;
            
            if(nums[mid] >= target){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
            
        }
        
        return start;
        
    }
}
