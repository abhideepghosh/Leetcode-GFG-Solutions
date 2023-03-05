/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let occurance = 0;
    for(let i=0; i<nums.length - 1; i++) {
        if(nums[i] > nums[i + 1]) occurance++;
    }
    nums[0] < nums[nums.length - 1] && occurance++;
    return occurance < 2 ? true : false;
};
