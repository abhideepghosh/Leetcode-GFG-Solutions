/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = [];
    let maxLength = 0;
    nums.forEach((num, i) => {
        let max = 0;
        for(let j=0; j<i; j++) {
            if(nums[j] < num) {
                max = Math.max(max, dp[j]);
            }
        }
        dp[i] = max + 1;
        maxLength = Math.max(maxLength, dp[i]);
    });
    return maxLength;
};
