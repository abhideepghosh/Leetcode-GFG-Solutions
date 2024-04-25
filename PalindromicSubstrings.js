/**
 * @param {string} s
 * @return {number}
 */
 // TC: O(N^2) SC: O(1)
var countSubstrings = function(s) {
    const checkPalindrome = (s, left, right) => {
        let count = 0;
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
            count++;
        }
        return count;
    }
    let maxCount = 0;
    for(let i=0; i<s.length; i++) {
        let oddCount = checkPalindrome(s, i, i);
        let evenCount = checkPalindrome(s, i, i + 1);
        maxCount += oddCount + evenCount;
    }
    return maxCount;
};
