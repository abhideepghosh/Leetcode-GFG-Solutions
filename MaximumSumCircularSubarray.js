/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let maxSum = nums[0];
    let minSum = nums[0];
    let tempMinSum = 0;
    let tempMaxSum = 0;
    let sum = 0;
    nums.forEach((num) => {

        tempMinSum = Math.min(0, tempMinSum) + num;
        tempMaxSum = Math.max(0, tempMaxSum) + num;
        maxSum = Math.max(maxSum, tempMaxSum);
        minSum = Math.min(minSum, tempMinSum);
        sum += num;
    });

    return sum === minSum ? maxSum : Math.max(maxSum, sum - minSum);

};
