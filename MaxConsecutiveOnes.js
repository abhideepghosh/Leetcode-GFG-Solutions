/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let freq = 0;
    nums.forEach((num) => {
        freq = (num === 1) ? freq + 1 : 0;
        max = Math.max(max, freq);
    });
    return max;
};
