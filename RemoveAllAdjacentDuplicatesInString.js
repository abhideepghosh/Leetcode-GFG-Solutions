/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [s[0]];

    const peek = () => stack[stack.length - 1];
    const isEmpty = () => stack.length === 0;

    for(let i=1; i<s.length; i++) {
        if(!isEmpty() && peek() === s[i]) stack.pop();
        else stack.push(s[i]);
    }

    const result = stack.join('');
    return result;

};
