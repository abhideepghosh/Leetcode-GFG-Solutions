/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    const createParenthesis = (str, strLength, open, close) => {
        if(strLength === n * 2) {
            result.push(str);
            return;
        }
        if(open < n) {
            createParenthesis(str + '(', strLength + 1, open + 1, close);
        }
        if(close < open) {
            createParenthesis(str + ')', strLength + 1, open, close + 1);

        }
    }
    createParenthesis('', 0, 0, 0);
    return result;
};
