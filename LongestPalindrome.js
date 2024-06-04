/**
 * @param {string} s
 * @return {number}
 */
// TC: O(N) SC: O(1)
var longestPalindrome = function(s) {
    const charFreq = new Array(52).fill(0);
    const asciiLower = 'a'.charCodeAt(0);
    const asciiUpper = 'A'.charCodeAt(0);
    const isEven = (num) => num % 2 === 0; 
    for(let ch of s) {
        const asciiVal = ch.charCodeAt(0);
        if(asciiVal >= asciiLower) charFreq[asciiVal - asciiLower]++;
        else charFreq[(asciiVal - asciiUpper) + 26]++;
    }
    
    let isOdd = false;
    let maxLength = 0;

    for(let i=0; i<charFreq.length; i++) {
        let currFreq = charFreq[i];
        if(currFreq) {
            if(isEven(currFreq)) maxLength += currFreq;
            else {
                maxLength += currFreq - 1;
                isOdd = true;
            }
        }
    }
    return isOdd ? maxLength + 1 : maxLength;
};


/**
 * @param {string} s
 * @return {number}
 */
 //TC: O(N) SC: O(N)
var longestPalindrome = function(s) {
    const set = new Set();
    let maxLength = 0;
    for(let ch of s) {
        if(set.has(ch)) {
            set.delete(ch);
            maxLength += 2;
        }
        else set.add(ch);
    }
    return set.size === 0 ? maxLength : maxLength + 1;
};
