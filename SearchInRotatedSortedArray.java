/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Search in Rotated Sorted Array.
Memory Usage: 42.4 MB, less than 71.10% of Java online submissions for Search in Rotated Sorted Array.
*/

// Optimized Approach TC: O(logn) SC: O(1)
/*
   Approach:
   1. We Divide The Rotated Sorted Array Into 2 Sorted Arrays Using A Modified Version Of Binary Search
   2. We Use Binary Search On The Array On Which The Start Element Is Smaller Than The Target And End Element Is Greater
      Than The Target
*/
class Solution {
    public int search(int[] nums, int target) {
        int start = 0;
        int end = nums.length - 1;
        
        // Finding The Pivot Using Which We Separate The Two Sorted Arrays
        while(start < end){
            
            int mid = start + (end - start) / 2;
            
            if(nums[mid] > nums[end]){
                start = mid + 1;
            }else{
                end = mid;
            }
            
        }
        
        int pivot = start;
        start = 0;
        end = nums.length - 1;
        
        // Checking On Which Of The Two Arrays Does The Element Lie.
        if(target >= nums[pivot] && target <= nums[end]){
            start = pivot;
        }else{
            end = pivot;
        }
        
        // Using Traditional Binary Search To Find The Element
        while(start <= end){
            
            int mid = start + (end - start) / 2;
            
            if(nums[mid] == target){
                return mid;
            }else if(nums[mid] < target){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
        }
        
        // Default Return Statement In Case No Element Is Found
        return -1;
        
    }
}
