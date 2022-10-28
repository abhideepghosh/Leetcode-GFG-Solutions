class Solution {
    public boolean isValidSudoku(char[][] board) {
        HashSet<String> set = new HashSet<>();
        for(int i=0; i<9; i++){
            for(int j=0; j<9; j++){
                char currentChar = board[i][j];
                if(currentChar != '.'){
                    if(!set.add(currentChar + " row " + i) || 
                       !set.add(currentChar + " column " + j) || 
                      !set.add(currentChar + " SubsetBox " + i/3 + "-"+j/3)){
                        return false;
                    }
                }
            }
        }
        
        return true;
        
    }
}



// Faster Approach By Swati
class Solution {
    public boolean isValidSudoku(char[][] board) {
        int n = board.length;
        for(int i = 0 ; i < n ; i++){
            for(int j = 0 ; j < n ; j++){
                if(board[i][j] != '.'){
                if(isValidForRowAndCol(board,i,j) == false ||  isValidFor3x3Grid(board,i,j) == false){
                    return false;
                }
                }
            }
        }
        return true;
    }
    public boolean isValidForRowAndCol(char arr[][],int i,int j){
        System.out.println(arr[i][j] + " " + i + " " + j);
        for(int k = 0 ; k < arr.length ; k++){
            if((arr[i][j] == arr[i][k] && j!= k) ||(arr[i][j] == arr[k][j] && i != k )){
                return false;
            }
        }
    return true;
    } 
    public boolean isValidFor3x3Grid(char arr[][],int i, int j){
        int gridRow = i/3;
        int rowStart = gridRow*3;
        int rowEnd = (gridRow+1)*3;
        int gridCol = j/3;
        int colStart = gridCol*3;
        int colEnd = (gridCol+1)*3;
        
        for(int row = rowStart; row<rowEnd; row++){
            for(int col = colStart ; col < colEnd ; col++){
                if(i != row && j!= col && arr[i][j] == arr[row][col]){
                    System.out.println("is3x3" + arr[row][col] + " " + row + " " + col);
                    return false;
                }
            }
        }
        return true;
    }
}
