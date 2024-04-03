/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
//TC: O(N*M * 4^wordLength) SC: O(N)
var exist = function(board, word) {

    /**
     * Helper function to perform the Depth-First Search (DFS).
     * 
     * @param {character[][]} board - The current state of the board.
     * @param {string} word -  The remaining portion of the word to search for.
     * @param {number} i - Current row index.
     * @param {number} j - Current column index.
     * @param {number} wordIdx - Index of the current character to match in the word.
     * @return {boolean} - True if the remaining word is found, false otherwise.
     */
    const search = (board, word, i, j, wordIdx) => {
        if (wordIdx === word.length) return true; // Base case: Word is fully found

        // Bounds and character match check
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[wordIdx]) {
            return false;
        }

        // Mark the current cell as visited (temporarily)
        const temp = board[i][j];
        board[i][j] = ' '; 

        // Explore in all four directions recursively
        const searchResult = search(board, word, i + 1, j, wordIdx + 1) ||
                             search(board, word, i - 1, j, wordIdx + 1) ||
                             search(board, word, i, j + 1, wordIdx + 1) ||
                             search(board, word, i, j - 1, wordIdx + 1);

        // Restore cell's original value
        board[i][j] = temp;

        return searchResult;
    }

    // Iterate through the board to find potential starting points
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) { // Check if the cell matches the first letter
                if (search(board, word, i, j, 0)) return true; // Start DFS if there's a match
            }
        }
    }

    return false; // Word not found
};
