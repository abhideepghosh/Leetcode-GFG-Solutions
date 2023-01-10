/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrixLength = n;
    let num = 1;
    const result = [];
    for(let i=0; i<n; i++){
        result[i] = new Array(n);
    }
    let rowStart = 0;
    let colStart = 0;
    let rowEnd = matrixLength - 1;
    let colEnd = matrixLength - 1;

    while(rowStart <= rowEnd && colStart <= colEnd) {
        for(let i=colStart; i<=colEnd; i++) {
            result[rowStart][i] = num;
            num++;
        }
        rowStart++;
        for(let i=rowStart; i<=rowEnd; i++) {
            result[i][colEnd] = num;
            num++;
        }
        colEnd--;
        for(let i=colEnd; i>=colStart; i--) {
            result[rowEnd][i] = num;
            num++;
        }
        rowEnd--;
        for(let i=rowEnd; i>=rowStart; i--) {
            result[i][colStart] = num;
            num++;
        }
        colStart++;
    }
    return result;
};
