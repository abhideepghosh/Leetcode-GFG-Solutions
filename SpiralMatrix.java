/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Spiral Matrix.
Memory Usage: 42.1 MB, less than 55.57% of Java online submissions for Spiral Matrix.
*/
// Optimised Solution TC: O(Rows * Columns) SC: O(1)
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        
        // Storing Result
        List<Integer> result = new ArrayList<>();
        
        // Handling Edge Case
        if(matrix.length == 0){
            return result;
        }
        
        // Finding Beginning Of Row & Column, Ending Of Row & Column
        int rowStart = 0;
        int rowEnd = matrix.length - 1;
        int colStart = 0;
        int colEnd = matrix[0].length - 1;
        
        // Outer Loops Run Until rowStart & colStart Meets rowEnd And colEnd 
        while(rowStart <= rowEnd && colStart <= colEnd){
            
            // Adding Element In East Direction
            for(int i=colStart ; i<=colEnd; i++){
                result.add(matrix[rowStart][i]);
            }
            // Altering Boundaries After Every Loop To Avoid Duplicacy And Exclude The Rows And Columns Already Added
            rowStart++;
            
            // Adding Elements In South Direction
            for(int i=rowStart; i<=rowEnd; i++){
                result.add(matrix[i][colEnd]);
            }
            // Altering Boundaries After Every Loop To Avoid Duplicacy And Exclude The Rows And Columns Already Added
            colEnd--;
            
            // If rowStart Exceeds rowEnd, Means We Dont Have Any More Rows To Add
            if(rowStart <= rowEnd){
                // Adding Elements In West Direction
                for(int i=colEnd; i>=colStart; i--){
                   result.add(matrix[rowEnd][i]);
                }
                // Altering Boundaries After Every Loop To Avoid Duplicacy And Exclude The Rows And Columns Already Added
                rowEnd--;
            }
            
            // If colStart Exceeds colEnd, Means We Dont Have Any More Columns To Add
            if(colStart <= colEnd){
                // Adding Elements In North Direction
                for(int i=rowEnd; i>= rowStart; i--){
                    result.add(matrix[i][colStart]);
                }
                // Altering Boundaries After Every Loop To Avoid Duplicacy And Exclude The Rows And Columns Already Added
                colStart++;
            }
            
            
        }
        
        // Returning The Final Result
        return result;
        
    }
}
