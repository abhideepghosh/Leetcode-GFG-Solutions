/**
 * @param {string} s
 * @return {string}
 */
// TC: O(N^2) SC: O(1)
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


// Dynamic Programming TC: O(N^2) SC: O(N^2)
var longestPalindrome = function(s) {
    // Initialization
    const dp = []; // Create the 2D table 'dp' to store palindrome information
    for (let i = 0; i < s.length; i++) {
        dp[i] = []; 
        for (let j = 0; j < s.length; j++) {
            dp[i][j] = false; // Initially mark all entries in the table as 'false' (not palindromes)
        }
    }

    let start = 0, end = 0; // Variables to track the starting and ending indices of the longest palindrome

    // Filling the 'dp' table in a bottom-up fashion
    for (let i = s.length - 1; i >= 0; i--) { // Outer loop iterates in reverse for easier processing
        for (let j = i; j < s.length; j++) { 
            
            // Two conditions for a substring to be a palindrome:
            if (s[i] === s[j] && j - i <= 2) {  // Condition 1: Direct match, and substring is of length 3 or less
                dp[i][j] = true;
            } else if (s[i] === s[j] && dp[i + 1][j - 1]) { // Condition 2: Direct match and the inner substring is already a palindrome
                dp[i][j] = true; 
            } else {
                dp[i][j] = false; // If the conditions don't hold, not a palindrome
            }

            // Update the longest palindrome if necessary
            if (dp[i][j] && (j - i + 1 > end - start + 1)) {
                start = i;
                end = j;
            }
        }
    }

    // Extract and return the result
    return s.slice(start, end + 1); 
};
