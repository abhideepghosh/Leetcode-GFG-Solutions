/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    if(strs.length === 1) return 0;
    let count = 0;
    const set = new Set();
    for(let i=1; i<strs.length; i++){
        for(let j=0; j<strs[i].length; j++){
            if(!set.has(j)){
                if(strs[i][j].charCodeAt(0) < strs[i-1][j].charCodeAt(0)){
                    count++;
                    set.add(j);
                }
            }
        }
    }
    return count;
};
