/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 0, i = 0;
    while(i < nums.length) {
        nums[index++] = nums[i];
        while(nums[i] === nums[i+1]) i++;
        i++;
    }
    return index;
};
