/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Rotate Image.
Memory Usage: 43.1 MB, less than 30.35% of Java online submissions for Rotate Image.
*/
/*
    | TC: O(n) (n = Number of cells in the grid) | SC: O(1) |
    
    Explanation of Time Complexity:
    1. Transposing the matrix has a cost of O(n)(we're moving the value of each cell once).
    2. Reversing each row also has a cost of O(n) (we're moving the value of each cell once).


*/
class Solution {
    public void rotate(int[][] matrix) {
        
        int numRows = matrix.length;
        
        // Transpose The Matrix
        for(int i=0; i<numRows; i++){
            for(int j=i; j<numRows; j++){
                
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
                
            }
        }
        
        // Swap The Elements From Both Side Moving Towards The Centre
        for(int i=0; i<numRows; i++){
            for(int j = 0; j<(numRows/2); j++){
                
                int temp = matrix[i][j];
                matrix[i][j] = matrix[i][numRows - 1 - j];
                matrix[i][numRows - 1 - j] = temp;
                
            }
        }
    }
}
