/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index = 0;
    nums.forEach((el, i) => {
        if(el !== val) {
            const temp = nums[index];
            nums[index] = el;
            nums[i] = temp;
            index++;
        }
    });
    return index;
};
