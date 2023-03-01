/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let rowStart = 0, rowEnd = matrix.length - 1;
    let colStart = 0, colEnd = matrix[0].length - 1;
    const result = [];
    while(rowStart <= rowEnd && colStart <= colEnd) {
        // Moving East 
        for(let i=colStart; i <=colEnd; i++) result.push(matrix[rowStart][i]);
        rowStart++;

        // Moving South
        for(let i=rowStart; i <=rowEnd; i++) result.push(matrix[i][colEnd]);
        colEnd--;

        if(rowStart > rowEnd || colStart > colEnd) break;

        // Moving West
        for(let i=colEnd; i >= colStart; i--) result.push(matrix[rowEnd][i]);
        rowEnd--;

        if(rowStart > rowEnd || colStart > colEnd) break;

        // Moving North
        for(let i=rowEnd; i >= rowStart; i--) result.push(matrix[i][colStart]);
        colStart++;
    }
    return result;
};
