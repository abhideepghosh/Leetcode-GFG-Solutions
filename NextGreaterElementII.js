/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    
    if(nums.length === 1) return [-1];

    const result = [];
    const stack = [];

    const peek = () => stack[stack.length - 1];
    const isEmpty = () => stack.length === 0;

    for(let i = 2 * nums.length - 1; i >= 0; i--) {
        while(!isEmpty() && nums[peek()] <= nums[i % nums.length]) stack.pop();
        result[i % nums.length] = !isEmpty() ? nums[peek()] : -1;
        stack.push(i % nums.length);
    }

    return result;

};
