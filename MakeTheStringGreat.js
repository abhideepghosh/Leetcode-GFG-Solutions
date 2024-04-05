/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (result.length > 0 && 
            (result.charCodeAt(result.length - 1) + 32 === s.charCodeAt(i) || 
             result.charCodeAt(result.length - 1) - 32 === s.charCodeAt(i))) {
            result = result.slice(0, -1); // Remove last character
        } else {
            result += s[i];
        }
    }
    return result;
};
