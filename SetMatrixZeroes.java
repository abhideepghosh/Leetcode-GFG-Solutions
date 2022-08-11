/*
Runtime: 1 ms, faster than 97.40% of Java online submissions for Set Matrix Zeroes.
Memory Usage: 54 MB, less than 57.42% of Java online submissions for Set Matrix Zeroes.
*/
class Solution {
    public void setZeroes(int[][] matrix) {
        Boolean isCol = false;
        int rowLength = matrix.length;
        int colLength = matrix[0].length;
        for(int i=0; i<rowLength; i++){
            if(matrix[i][0] == 0){
                isCol = true;
            }
            for(int j=1; j<colLength; j++){
                if(matrix[i][j] == 0){
                    matrix[0][j] = 0;
                    matrix[i][0] = 0;
                }
            }
        }
        for(int i=1; i<rowLength; i++){
            for(int j=1; j<colLength; j++){
                if(matrix[i][0] == 0 || matrix[0][j]==0){
                    matrix[i][j]=0;
                }
            }
        }
        if(matrix[0][0] == 0){
            for(int j=0; j<colLength; j++){
                matrix[0][j] = 0;
            }
        }
        if(isCol){
            for(int i=0; i<rowLength; i++){
                matrix[i][0] = 0;
            }
        }
    }
}

// TC : O(N*M) SC: O(N+M)
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
                if(rows.contains(i) || cols.contains(j))
                    matrix[i][j] = 0;
            }
        }
        
    }
}
