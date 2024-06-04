/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 // TC: O(N) SC: O(1)
var setZeroes = function(matrix) {
    
    let isColZero = false;
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    for(let i=0; i<rows; i++) {
        if(matrix[i][0] === 0) isColZero = true;
        for(let j=1; j<cols; j++) {
            if(matrix[i][j] === 0) {
                matrix[0][j] = matrix[i][0] = 0;
            }
        }
    }
    
    for(let i=rows - 1; i>=0; i--) {
        for(let j=cols - 1; j>0; j--) {
            if(matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if(isColZero) matrix[i][0] = 0;
    }

};
