/**
 * @param {string} s
 * @return {boolean}
 */
 // TC: O(N) SC: O(1)
var isPalindrome = function(s) {
    const isLetter = (ch) =>  (ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122) ? true : false;
    const isDigit = (ch) =>  (ch.charCodeAt(0) >= 48 && ch.charCodeAt(0) <= 57) ? true : false;
    
    s = s.toLowerCase();
    let start = 0, end = s.length - 1;

    while(start < end) {
        if((isLetter(s[start]) || isDigit(s[start])) && (isLetter(s[end]) || isDigit(s[end]))) {
            if(s[start] !== s[end]) {
                return false;
            }
            else {
                start++;
                end--;
            }
        }
        else if(!(isLetter(s[start]) || isDigit(s[start]))) {
            start++;
        }
        else if(!(isLetter(s[end]) || isDigit(s[end]))) {
            end--;
        }
    }
    return true;
};
