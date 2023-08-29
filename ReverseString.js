/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 // TC: O(N) SC: O(1)
var reverseString = function(s) {
    const n = s.length - 1;
    for(let i=0; i<=Math.floor(n / 2); i++) {
        const tempChar = s[i];
        s[i] = s[n - i];
        s[n - i] = tempChar;
    }
};
