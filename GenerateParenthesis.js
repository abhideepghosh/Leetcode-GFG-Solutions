/**
 * @param {number} n
 * @return {string[]}
 */

const generate = (result, s, open, close, max) => {
    if(s.length === 2 * max) {
        result.push(s);
        return;
    }
    if(open < max) generate(result, s + "(", open + 1, close, max);
    if(close < open) generate(result, s + ")", open, close + 1, max);
};

var generateParenthesis = function(n) {
    const result = [];
    generate(result, '', 0, 0, n);
    return result;
};
