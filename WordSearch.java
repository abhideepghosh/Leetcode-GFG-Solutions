/*
Runtime: 122 ms, faster than 89.01% of Java online submissions for Word Search.
Memory Usage: 40.1 MB, less than 95.89% of Java online submissions for Word Search.
*/
// Depth First Search Using Extra Space
class Solution {
    
    boolean visited[][];
    
    public boolean exist(char[][] board, String word) {
        
        int row = board.length;
        int col = board[0].length;
        visited = new boolean[row][col];
        
        for(int i=0; i<row; i++){
            for(int j=0; j<col; j++){
                if(word.charAt(0) == board[i][j] && wordSearch(i, j, 0, word, board)){
                    return true;
                }
            }
        }
        return false;
    }
    
    boolean wordSearch(int i, int j, int index, String word, char[][] board){
        
        if(index == word.length()){
            return true;
        }
        
        if(i >= board.length || i<0 || j >= board[0].length || j <0 || 
            visited[i][j] == true || board[i][j] != word.charAt(index))
        {
            return false;
        }
        
        visited[i][j] = true;
        
        if(
            wordSearch(i + 1, j, index + 1, word, board) || 
            wordSearch(i - 1, j, index + 1, word, board) || 
            wordSearch(i, j + 1, index + 1, word, board) || 
            wordSearch(i, j - 1, index + 1, word, board)
        ){
            return true;
        }
        visited[i][j] = false;
        return false;
        
    }
    
}
