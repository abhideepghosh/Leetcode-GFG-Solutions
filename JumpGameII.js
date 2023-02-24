/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let count = 0;
    let jumps = 0;
    let lastJump = 0;
    for(let i=0; i<nums.length - 1; i++) {
        const num = nums[i];
        jumps = Math.max(jumps, i + num);
        if(lastJump === i) {
            count++;
            lastJump = jumps;
        }
    }
    return count;
};
