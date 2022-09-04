// Optimized Solution TC: O(n) SC: O(n)
class Solution {
    public int longestConsecutive(int[] nums) {
        
        // We Use HashSet Here Because .contains() Method Uses O(1) Time For Searching
        HashSet<Integer> set = new HashSet<>();
        int count = 0;
        int maxCount = 0;
        
        /*
        Time Complexity Ends Up As O(1) Even Though We Have A Nested Loop Because:
        1. We run The While Loop With .contains() Which Provides Element In Constant Time.
        2. Hence, The Only Loop Affecting Time Complexity Will Be The Outer Loop.
        */
        for(int i=0; i<nums.length; i++){
            set.add(nums[i]);
        }
        
        for(int key : set){
            // We Check Count Only For The Start Element Of The Sequence
            // For Any Element Not Being The Start We Discard Counting A Sequence Ahead Of It.
            if(!set.contains(key - 1)){
                
                while(set.contains(key)){
                    count++;
                    key = key + 1;
                }
                // We Store The Maximum Count In maxCount 
                maxCount = Math.max(count, maxCount);
                count = 0;
                
            }
            
        }
        
        //Returning Maximum Count Found
        return maxCount;
        
    }
}


// Brute Force TC: O(nlogn) SC: O(1)
class Solution {
    public int longestConsecutive(int[] nums) {
        
        if(nums.length == 0){
            return 0;
        }
        
        // Sorting The Array To Simply Count The Longest Subsequence
        Arrays.sort(nums);
        
        int count = 1;
        int maxCount = 1;
        
        // Checking If Element Is Just 1 Greater Than The Previous Or Not
        // Storing The Count in count.
        // Whenever The Conditions Don't Satify, We Store The count In maxCount
        for(int i=1; i<nums.length; i++){
            
            if(nums[i]  != nums[i - 1]){
                if(nums[i] == nums[i-1] + 1){
                    count++;    
                }else{
                    maxCount = Math.max(count, maxCount);
                    count = 1;
                }
            }
            
        }
        
        // Returning Math.max In Order To Cover The Edge Cases.
        // Edge Case Being 1 Sequence Where The if Condition Is Never False
        return Math.max(maxCount, count);
    }
}
