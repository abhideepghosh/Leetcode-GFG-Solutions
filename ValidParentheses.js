/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const peek = () => stack[stack.length - 1];
    const isEmpty = () => stack.length === 0;
    for(let c of s) {
        if(c === '(' || c === '{' || c === '[') stack.push(c);
        else if(c === ')' && peek() === '(') stack.pop();
        else if(c === '}' && peek() === '{') stack.pop();
        else if(c === ']' && peek() === '[') stack.pop();
        else return false;
    }
    return isEmpty();
};
