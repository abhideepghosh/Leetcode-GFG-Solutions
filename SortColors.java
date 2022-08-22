/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Sort Colors.
Memory Usage: 42.6 MB, less than 39.79% of Java online submissions for Sort Colors.
*/

// Optimised Solution (100% Faster) TC: O(n)
class Solution {
    public void sortColors(int[] nums) {
        int i = 0;
        int zeroIndex = 0;
        int twoIndex = nums.length - 1;
        
        while(i <= twoIndex){
            if(nums[i] == 0){
                swap(nums, i, zeroIndex);
                zeroIndex++;
                i++;
            }else if(nums[i] == 2){
                swap(nums, i, twoIndex);
                twoIndex--;
            }else{
                i++;
            }
        }
    }
    
    public void swap(int[] nums, int i, int j){
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}


// Brute Force Solution TC: O(n)
class Solution {
    public void sortColors(int[] nums) {
        
        int index = 0;
        
        for(int i=0; i<nums.length; i++){
            if(nums[i] == 0){
                swap(nums, index, i);
                index++;
            }
        }
        for(int i=index; i<nums.length; i++){
            if(nums[i] == 1){
                swap(nums, index, i);
                index++;
            }
        }
    }
    
    public void swap(int[] nums, int i, int j){
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
