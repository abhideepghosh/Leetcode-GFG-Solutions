/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const newMat = mat.flat();
    if(newMat.length !== r * c) return mat;
    const result = [];
    for(let i=0; i<r; i++) {
        result[i] = new Array(c);
    }
    let flag = false;
    let index = 0;
    for(let i=0; i<r; i++) {
        for(let j=0; j<c; j++) {
            result[i][j] = newMat[index];
            index++;
        }
    }
    return result;
};
