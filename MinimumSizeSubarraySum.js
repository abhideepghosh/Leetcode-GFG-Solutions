// Both the solutions pass all the test cases. They are 2 ways to code the two pointer technique.

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(N) SC: O(1)
var minSubArrayLen = function(target, nums) {
    let start = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];

        while (sum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            sum -= nums[start];
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
};

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(N) SC: O(1)
var minSubArrayLen = function(target, nums) {
    let start = 0, end = 0;
    let currentSum = 0, maxLength = Infinity;
    while(start <= end && end < nums.length) {
        if(currentSum < target) {
            currentSum += nums[end];
        }
        if(currentSum >= target) {
            maxLength = Math.min(maxLength, end - start + 1);
            currentSum -= nums[start];
            start++;
        }
        if(currentSum < target) end++;
    }
    return maxLength === Infinity ? 0 : maxLength;
};
