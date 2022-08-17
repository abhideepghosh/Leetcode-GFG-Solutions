class Solution {
    public List<List<String>> solveNQueens(int n) {
        char[][] board = new char[n][n];
        
        // Fill The 2D Char Array with '.'
        for(int i=0; i<n; i++)
            for(int j=0; j<n; j++)
                board[i][j] = '.';
        
        // Defining The Final ArrayList To Be Returned
        List<List<String>> result = new ArrayList<>();
        
        //Calling The Function To Fill Queens In The Result List
        fillQueens(board, 0, result);
        
        // Returning The Filled List With Possible Answers
        return result;
    }
    
    // fillQueens Function (Follows The Depth First Search Algorithm In Its Core)
    public void fillQueens(char[][] board, int columnIndex, List<List<String>> result){
        
        //Adding A Result In The Result List Only When The Condition Of N-Queens In Board N*N Is Satisfied
        if(columnIndex == board.length){
            result.add(construct(board));
            return;
        }
        
        // Using Depth First Search To Fill Q With A Basic Check Condition For N-Queens
        for(int i=0; i<board.length; i++){
            if(validateResult(board, i, columnIndex)){
                board[i][columnIndex] = 'Q';
                fillQueens(board, columnIndex + 1, result);
                board[i][columnIndex] = '.';
            }
        }
    }
    
    //Validate Result Function To Check If The Position Has No Influence From Other Queens
    public boolean validateResult(char[][] board, int X, int Y){
        for(int i=0; i<board.length; i++){
            for(int j=0; j<Y; j++){
                if(board[i][j] == 'Q' && (X+j == Y+i || X+Y == i+j || X==i)){
                    return false;
                }
            }
        }
        return true;
    }
    
    // construct Function: To Construct A List With A Possible Result
    public List<String> construct(char[][] board){
        List<String> result = new ArrayList<>();
        for(int i=0; i<board.length; i++){
            String s = new String(board[i]);
            result.add(s);
        }
        return result;
    }
    
}
