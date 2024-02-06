/**
 * @param {string} s
 * @return {string}
 */
// TC: O(N) SC: O(N)
var removeDuplicates = function(string) {
    const isEmpty = nums => nums.length === 0;
    const peek = nums => nums[nums.length - 1];
    
    const stack = [];
    let result = '';
    
    for(const str of string) !isEmpty(stack) && str === peek(stack) ? stack.pop() : stack.push(str);
    
    return stack.join('');

};
