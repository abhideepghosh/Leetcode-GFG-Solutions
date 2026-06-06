/**
 * @param {number[]} nums
 * @return {number[]}
 */
// TC: O(N) SC: O(1)
var leftRightDifference = function(nums) {
    const result = [];
    let sum = 0;
    for(let i=0; i<nums.length; i++) {
        if(i === 0) result[i] = 0;
        else {
            result[i] = nums[i - 1] + result[i - 1];
        }
    }
    sum = 0;
    for(let i=nums.length - 1; i >= 0; i--) {
        if(i === nums.length - 1) {
            sum = nums[i];
        }
        else {
            result[i] = Math.abs(result[i] - sum);
            sum = sum + nums[i];
        }
    }
    return result;

};
