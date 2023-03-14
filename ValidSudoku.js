/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const set = new Set();
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[i].length; j++) {
            if(board[i][j] !== '.'){
               if(set.has(`row: ${i} val: ${board[i][j]}`) ||
                  set.has(`col: ${j} val: ${board[i][j]}`) ||
                  set.has(`subBox: ${Math.floor(i / 3)} - ${Math.floor(j / 3)} val: ${board[i][j]}`)
               ) {
                    return false;
               }
               else {
                    set.add(`row: ${i} val: ${board[i][j]}`);
                    set.add(`col: ${j} val: ${board[i][j]}`);
                    set.add(`subBox: ${Math.floor(i / 3)} - ${Math.floor(j / 3)} val: ${board[i][j]}`);
               }
            }
        }
    }
    return true;
};
