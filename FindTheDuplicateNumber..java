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


// Brute Force Solution TC: O(nlogn) SC: O(1)
class Solution {
    
    public int findDuplicate(int[] nums) {
        // 'low' and 'high' represent the range of values of the target        
        int low = 1, high = nums.length - 1;
        int duplicate = -1;
        
        while (low <= high) {
            int cur = (low + high) / 2;

            // Count how many numbers in 'nums' are less than or equal to 'cur'
            int count = 0;
            for (int num : nums) {
                if (num <= cur)
                    count++;
            }
            
            if (count > cur) {
                duplicate = cur;
                high = cur - 1;
            } else {
                low = cur + 1;
            }
        }
        return duplicate;
    }
}
