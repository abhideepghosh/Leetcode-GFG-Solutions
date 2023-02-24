/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let jumps = 0;
    for(let i=0; i<nums.length; i++) {
        if(jumps < i) return false;
        jumps = Math.max(jumps, i+nums[i]);
    }
    return true;
};
