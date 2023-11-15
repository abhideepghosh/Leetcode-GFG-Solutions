/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const charArray = new Array(26).fill(0);
    for(let ch of magazine) {
        charArray[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for(let ch of ransomNote) {
        charArray[ch.charCodeAt(0) - 'a'.charCodeAt(0)]--;
        if(charArray[ch.charCodeAt(0) - 'a'.charCodeAt(0)] < 0) return false;
    }
    return true;
};
