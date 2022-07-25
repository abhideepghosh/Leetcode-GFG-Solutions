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

//  !set.add(currentChar + " row " + i)
//  !set.add(currentChar + " column " + j)
//  !set.add(currentChar + " SubsetBox " + i/3 +"-"+j/3)
