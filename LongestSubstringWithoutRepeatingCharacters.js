/**
 * @param {string} s
 * @return {number}
 */
 // TC: O(N) SC: O(N)
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let left = 0, right = 0, maxLength = 0;
    while(right < s.length) {
        set.has(s[right]) ? set.delete(s[left++]) : set.add(s[right++]);
        maxLength = Math.max(maxLength, set.size);
    }
    return maxLength;
};
