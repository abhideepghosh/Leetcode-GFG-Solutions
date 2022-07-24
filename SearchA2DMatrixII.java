class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
       
        for(int i=0; i<matrix.length; i++){
            int index = Arrays.binarySearch(matrix[i],target);
            if(index > -1){
                return true;
            }
        }
        return false;
    }
}
