/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const charArray = new Array(26).fill(0);
    if(s.length !== t.length) return false;
    for(let i=0; i<s.length; i++) {
        charArray[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    for(let i=0; i<t.length; i++) {
        charArray[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    return charArray.every((el) => el === 0);
};
