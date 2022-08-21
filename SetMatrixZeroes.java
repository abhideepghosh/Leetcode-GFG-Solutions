/*
Runtime: 1 ms, faster than 97.61% of Java online submissions for Set Matrix Zeroes.
Memory Usage: 54 MB, less than 58.44% of Java online submissions for Set Matrix Zeroes.
*/
// TC: O(N*M) | SC: O(1)
class Solution {
    public void setZeroes(int[][] matrix) {
        
        boolean isColumnOne = true;
        int rows = matrix.length;
        int cols = matrix[0].length;
        for(int i=0; i<rows; i++){
            if(matrix[i][0] == 0){
                isColumnOne = false;
            }
            for(int j=1; j<cols; j++){
                if(matrix[i][j] == 0){
                    matrix[i][0] = matrix[0][j] = 0;
                }
            }
        }
        for(int i= rows - 1; i>=0; i--){
            for(int j = cols - 1; j >=1; j--){
                if(matrix[i][0] == 0 || matrix[0][j] == 0){
                    matrix[i][j] = 0;
                }
            }
            if(isColumnOne == false){
                matrix[i][0] = 0;
            }
        }
    }
}

// TC : O(N*M) | SC: O(N+M)
class Solution {
    public void setZeroes(int[][] matrix) {
        
        HashSet<Integer> rows = new HashSet<>();
        HashSet<Integer> cols = new HashSet<>();
        
        for(int i=0; i<matrix.length; i++){
            for(int j=0; j<matrix[0].length; j++){
                if(matrix[i][j] == 0){
                    rows.add(i);
                    cols.add(j);
                }
            }
        }
        for(int i=0; i<matrix.length; i++){
            for(int j=0; j<matrix[0].length; j++){
                if(rows.contains(i) || cols.contains(j)){
                    matrix[i][j] = 0;
                }
            }
        }
    }
}
