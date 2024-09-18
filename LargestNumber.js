/**
 * @param {number[]} nums 
 * @return {string} 
 */
//TC: O(NlogN) SC: O(1)
var largestNumber = function(nums) {
    // Sort the array using a custom comparator function.
    // The comparator compares two numbers, a and b, as strings.
    // `${b}${a}` and `${a}${b}` create two different string combinations.
    // If `${b}${a}` is greater, b should come before a; otherwise, a should come before b.
    nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
    
    // If the first number in the sorted array is 0, return '0'.
    // This is to handle cases where all numbers are zeros (e.g., [0, 0]).
    // In such cases, joining the numbers would still give '0'.
    return nums[0] ? nums.join('') : '0';
};
