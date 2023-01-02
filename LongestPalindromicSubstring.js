/**
 * @param {string} s
 * @return {string}
 */

const palindromeLength = (s, left, right) => {
    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--;
        right++;
    }
    return right - left - 1;
}

var longestPalindrome = function(s) {
    let start = 0, end = 0;
    for(let i=0; i<s.length; i++){
        const len1 = palindromeLength(s, i, i);
        const len2 = palindromeLength(s, i, i+1);
        const len = Math.max(len1, len2);
        if(end - start < len){
            start = i - Math.floor((len - 1)/2);
            end = i + Math.floor(len/2);
        }
    }
    return s.slice(start, end + 1);
};
