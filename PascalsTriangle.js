/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 1) return [[1]];
    const result = [[1]];

    for(let i=1; i<numRows; i++) {
            const list = [];
        for(let j=0; j<i+1; j++) {
            if(j === 0 || j === i) {
                list.push(1);
            }
            else {
                list.push(result[i - 1][j] + result[i - 1][j - 1]);
            }
        }
        result.push(list);
    }

    return result;
    
};
