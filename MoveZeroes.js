/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0;
    nums.forEach((currentElement, i) => {
        if(currentElement !== 0) {
            if(index !== i) {
                nums[index] = currentElement;
                nums[i] = 0;
            }
        index++;
        }
    });
};
