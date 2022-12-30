/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const sudokuSet = new Set();

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(board[i][j] !== '.'){
                if(!sudokuSet.has(`${board[i][j]} row ${i}`) &&
                !sudokuSet.has(`${board[i][j]} col ${j}`) &&
                !sudokuSet.has(`${board[i][j]} subBox ${Math.floor(i/3)} - ${Math.floor(j/3)}`)){
                    sudokuSet.add(`${board[i][j]} row ${i}`);
                    sudokuSet.add(`${board[i][j]} col ${j}`);
                    sudokuSet.add(`${board[i][j]} subBox ${Math.floor(i/3)} - ${Math.floor(j/3)}`)
                }
                else {
                    return false;
                }
            }
        }
    }

    return true;

};
