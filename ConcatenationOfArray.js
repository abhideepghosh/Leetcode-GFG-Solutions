/**
 * @param {number[]} nums
 * @return {number[]}
 */
// TC: O(N) SC: O(1)
var getConcatenation = function(nums) {
    const n = nums.length
    for(let i=0; i<n; i++) {
        nums.push(nums[i]);
    }
    return nums;
};
