/**
 * @param {string} s
 * @return {number}
 */
// TC: O(N) SC: O(1)
var lengthOfLastWord = function(s) {
    if(s.length === 0) return 0;
    let foundWord = false;
    let count = 0;
    for(let i=s.length - 1; i>=0; i--) {
        if(s[i] !== ' ') {
            count++;
            foundWord = true;
        }
        else if(foundWord) {
            return count;
        }
    }
    return count;
};

 //TC: O(N) SC: O(N)
var lengthOfLastWord = function(s) {
    if(s.length === 0) return 0;
    return s.trim().split(' ').pop().length;
};
