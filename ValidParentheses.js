/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    if(s[0] === ')' || s[0] === '}' || s[0] === ']') return false;
    for(let c of s) {
        if(c === '(' || c === '{' || c === '[') stack.push(c);
        else {
            if(stack.length === 0) return false;
            const bracket = stack.pop();
            if(bracket === '(' && c !== ')') return false;
            if(bracket === '{' && c !== '}') return false;
            if(bracket === '[' && c !== ']') return false;
        }
    }
    return stack.length === 0;
};
