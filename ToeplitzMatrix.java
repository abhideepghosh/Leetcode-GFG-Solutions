/*
Runtime: 1 ms, faster than 93.83% of Java online submissions for Toeplitz Matrix.
Memory Usage: 41.9 MB, less than 99.84% of Java online submissions for Toeplitz Matrix.
*/
// Simple TC: O(N*M) SC: O(1) Solution
class Solution {
    public boolean isToeplitzMatrix(int[][] matrix) {
        int rowLength = matrix.length;
        int colLength = matrix[0].length;
        
        for(int i=0; i<rowLength; i++){
            for(int j=0; j<colLength; j++){
                if(i > 0 && j > 0 && matrix[i][j] != matrix[i-1][j-1]){
                    return false;
                }
            }
        }
        return true;
    }
}
