/*
Runtime: 5 ms, faster than 100.00% of Java online submissions for Search a 2D Matrix II.
Memory Usage: 48.7 MB, less than 86.10% of Java online submissions for Search a 2D Matrix II.
*/
// Optimized Solution TC: O(logn)
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        
        int rowLength = matrix.length;
        int colLength = matrix[0].length;
        
        int start =0;
        int end = colLength-1;
        
        // Applying Binary Search Directly On The 2D Array
        while(start < rowLength && end >= 0){
            
            if(matrix[start][end] == target){
                return true;
            }
            else if(matrix[start][end] > target){
                end--;
            }
            else {
                start++;
            }
            
        }
        // Defauly Return Statement As False In Case The Element Was Not Found In The 2D Matrix
        return false;
        
    }
}



/*
Runtime: 6 ms, faster than 91.81% of Java online submissions for Search a 2D Matrix II.
Memory Usage: 48.6 MB, less than 86.90% of Java online submissions for Search a 2D Matrix II.
*/
// Brute Force Solution TC: O(n) * O(logn) = O(nlogn)
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
