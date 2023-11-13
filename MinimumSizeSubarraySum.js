/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(N) SC: O(1)
var minSubArrayLen = function(target, nums) {
    let minLength = Infinity, pointer = 0, sum = 0;
    nums.forEach((num, i) => {
        sum += num;
        while(sum >= target) {
            minLength = Math.min(minLength, i + 1 - pointer);
            sum -= nums[pointer++];
        }
    });
    return (minLength === Infinity) ? 0 : minLength;
};
