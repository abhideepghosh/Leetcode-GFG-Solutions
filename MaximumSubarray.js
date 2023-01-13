/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let sum = 0;
    nums.forEach((num) => {
        sum < 0 ? sum = num : sum += num;
        maxSum = Math.max(sum, maxSum);
    });
    return maxSum;
};
