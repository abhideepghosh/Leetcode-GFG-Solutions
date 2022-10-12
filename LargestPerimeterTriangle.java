// TC: O(nlogn) SC: O(1)
class Solution {
    public int largestPerimeter(int[] nums) {
        
        // Sort
        Arrays.sort(nums);
        
        // Iterating With A Gap Of 3 In the End
        for(int i=nums.length-3; i>=0; i--){
            
            // Checking If It Satisfies The Basic Condition Of A Triangle From The End Of The Array
            if(nums[i] + nums[i+1] > nums[i+2]){
                return nums[i] + nums[i+1] + nums[i+2];
            }
            
        }
        
        // Default Return
        return 0;
        
    }
}
