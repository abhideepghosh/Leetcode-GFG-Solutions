/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let tracker = 0;
    let depth = 0;
    for(let ch of s) {
        if(ch === '(') tracker++;
        if(ch === ')') tracker--;
        depth = Math.max(depth, tracker);
    }
    return depth;

};
