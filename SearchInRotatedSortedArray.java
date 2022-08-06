class Solution {
    public int search(int[] nums, int target) {
        //Optimized Solution - Binary Search (O(logn)):
        int start = 0;
        int end = nums.length-1;
        while(start < end){
            int mid = start + (end - start)/2;
            if(nums[mid] > nums[end]){
                start = mid + 1;
            }else{
                end = mid;
            }
        }
        int left = start;
        start = 0;
        end = nums.length-1;
        if(target >= nums[left] && target <=nums[end]){
            start = left;
        }else{
            end = left;
        }
        while(start <= end){
            int midPoint = start + (end - start)/2;
            if(nums[midPoint] == target){
                return midPoint;
            }else if(nums[midPoint] < target){
                start = midPoint + 1;
            }else{
                end = midPoint - 1;
            }
        }
        
        return -1;
        
        
        
        // //Brute Force Solution (O(n)):
        // for(int i=0; i<nums.length; i++){
        //     if(nums[i]==target){
        //         return i;
        //     }
        // }
        // return -1;
    }
}
