/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// TC: O(N * M) SC: O(N)
var luckyNumbers  = function(matrix) {
    const minRows = [];
    const maxCols = [];
    for(let i=0; i<matrix.length; i++) {
        minRows.push(Math.min(...matrix[i]));    
    }
    for(let j=0; j<matrix[0].length; j++) {
        let max = matrix[0][j];
        for(let i=0; i<matrix.length; i++) {
            max = Math.max(max, matrix[i][j]);
        }
        maxCols.push(max);
    }
    const result = [];
    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[i].length; j++) {
            if(matrix[i][j] === minRows[i] && matrix[i][j] === maxCols[j]) result.push(matrix[i][j]);
        }
    }
    return result;
};
