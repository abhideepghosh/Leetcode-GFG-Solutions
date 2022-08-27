/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Search a 2D Matrix.
Memory Usage: 42.3 MB, less than 82.03% of Java online submissions for Search a 2D Matrix.
*/

// Time Complexity O(n) * O(logn) = O(nlogn)
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        
        // Traversing Through the Rows
        // If Largest Element In The Row Is Greater Than The Target And Smallest Element is Smaller Than It
        // Then We Apply Binary Search To Check If The Number Is Present, Else We Return False;
        for(int i=0; i<matrix.length; i++){
            
            // We Are Taking j As The Index Of The Last Element In The Row Which Is Also The Greatest (Sorted Array) 
            int j = matrix[i].length - 1;
            if(target == matrix[i][j] || target == matrix[i][0]){
                return true;
                
            }else if(target < matrix[i][j] && target > matrix[i][0]){
                
                // Applying Binary Search In The Row
                if(Arrays.binarySearch(matrix[i], target) >= 0){
                    // If Return Value Of Binary Search >= 0, Then The Index Of Target Element Exists
                    // Hence, We Return True
                    return true; 
                }
                
            }
        }
        
        // If Index Was Not Found Throughout The 2D Array, Then We Return False
        return false;
        
    }
}
