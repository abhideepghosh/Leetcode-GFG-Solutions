/*
Runtime: 6 ms, faster than 91.81% of Java online submissions for Search a 2D Matrix II.
Memory Usage: 48.6 MB, less than 86.90% of Java online submissions for Search a 2D Matrix II.
*/
// TC: O(n) * O(logn) = O(nlogn)
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        
        // Traversing Through Rows
        for(int[] nums : matrix){
            
            // Applying Binary Search On Every Row
            if(Arrays.binarySearch(nums, target) >= 0){
                // If Index Is Greater Than Or Equal To Zero, Then, An Index With The Target Value Exists.
                // Returning true In Case The Value Exists In The Row.
                return true;
            }
            
        }
        
        // Return false In Case No Index Is Found.
        return false;
        
    }
}
