/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 // TC: O(logn) SC: O(1)
var twoSum = function(nums, target) {
    let start = 0, end = nums.length - 1;
    while(start < end) {
        if(nums[start] + nums[end] === target) return [start + 1, end + 1];
        else if(nums[start] + nums[end] < target) start++;
        else end--;
    }
    return [-1, -1];
};
