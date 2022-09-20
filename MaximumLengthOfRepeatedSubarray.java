/*
Runtime: 42 ms, faster than 93.93% of Java online submissions for Maximum Length of Repeated Subarray.
Memory Usage: 51 MB, less than 85.05% of Java online submissions for Maximum Length of Repeated Subarray.
*/

// Dynamic Porgramming Tabulation Approach TC: O(N*M) SC: O(N*M)
class Solution {
    public int findLength(int[] nums1, int[] nums2) {
        
        // Dyanamic Programming Array
        int[][] godLevelProgramming = new int[nums1.length + 1][nums2.length + 1];
        
        // For Storing The Max Length Of Repeated Subarray
        int maxLength = 0;
        
        // Iterating And Filled The 2D Loop Currently Filled With 0s
        for(int i=1; i<godLevelProgramming.length; i++){
            
            // We Check For The Values In The Previous Element Diagonally And Add 1 To It Whenever nums1 Element Equals nums2
            for(int j=1; j<godLevelProgramming[0].length; j++){
                
                // We Are Storing The Count Diagonally In The 2D Matrix
                if(nums1[i-1] == nums2[j-1]){
                    godLevelProgramming[i][j] = godLevelProgramming[i-1][j-1] + 1;
                }
                
                //Storing Max Length Of The Subarray
                maxLength = Math.max(maxLength, godLevelProgramming[i][j]);
                
            }
            
        }
        
        // Returning The Maximum Length Of Repeated Subarray
        return maxLength;
        
    }
}
