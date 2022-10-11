/*
Runtime: 2 ms, faster than 99.05% of Java online submissions for Increasing Triplet Subsequence.
Memory Usage: 84.1 MB, less than 90.54% of Java online submissions for Increasing Triplet Subsequence.
*/
// Optimized Solution TC: O(N) SC: O(1)
class Solution {
    public boolean increasingTriplet(int[] nums) {
        
        // Taking 2 Variables With Integer Max Values
        int first = Integer.MAX_VALUE;
        int second = Integer.MAX_VALUE;
        
        // Iterating Through The Array
        for(int i=0; i<nums.length; i++){
            
            // We Check For 2 Elements Following The Sequence In Increasing Order Or Are Same Values
            if(first >= nums[i]){
                first = nums[i];
            }
            else if(second >= nums[i]){
                second = nums[i];
            }
            // If We Find A Third Element Greater Than Or Equal To The Second Value, We Return True Rather Than Storing It
            else{
                return true;
            }
            
        }
        
        // If The Return True Clause Was Never Called, Hence The Pair Doesn't Exist, Hence We Return False
        return false;
        
    }
}
