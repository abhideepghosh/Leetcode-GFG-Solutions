/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = 0, maxSum = nums[0];
    nums.forEach((currentElement, i) => {
        currentSum <= 0 ? currentSum = currentElement : currentSum  += currentElement;
        maxSum = Math.max(maxSum, currentSum); 
    });
    return maxSum;
};
