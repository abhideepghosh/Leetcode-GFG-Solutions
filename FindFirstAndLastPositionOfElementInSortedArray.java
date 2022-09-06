/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Find First and Last Position of Element in Sorted Array.
Memory Usage: 47.2 MB, less than 60.82% of Java online submissions for Find First and Last Position of Element in Sorted Array.
*/

// Optimized Solution O(logn) SC: O(1)
class Solution {
    public int[] searchRange(int[] nums, int target) {
        
        // Creating Two Functions Of Modified Binary Search, One For Finding First Element And Another One For Last Element.
        int[] result = new int[2];
        result[0] = firstIndex(nums, target);
        result[1] = lastIndex(nums, target);
        
        // Returning Final Result
        return result;
    }
    
    public int firstIndex(int[] nums, int target){
        
        int index = -1;
        int start = 0;
        int end = nums.length - 1;
        
        // Creating A Modified Binary Search For Finding The First Element
        while(start <= end){
        
            int mid = start + (end - start) / 2;
            
            // When Target Is Greater Or Equal To The Target, We Move Left
            // But In Case Of Equal We Also Update The Index In The Last If Block
            if(nums[mid] >= target){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
            
            // Storing Index Whenever Current Element Is Equal To The Target
            if(nums[mid] == target){
                index = mid;
            }
    
        }
        
        //Returning First Index If It Exists, Else Returning -1
        return index;
    }
    
    public int lastIndex(int[] nums, int target){
        
        int index = -1;
        int start = 0;
        int end = nums.length - 1;
        
        // Creating A Modified Binary Search For Finding The Last Element
        while(start <= end){
            
            int mid = start + (end - start) / 2;
            
            // When Target Is Smaller Or Equal To The Target, We Move Right
            // But In Case Of Equal We Also Update The Index In The Last If Block
            if(nums[mid] <= target){
                start = mid + 1;
            }else{
                end = mid - 1;
            }

            if(nums[mid] == target){
                index = mid;
            }
    
        }
        
        //Returning Last Index If It Exists, Else Returning -1
        return index;
        
    }
}
