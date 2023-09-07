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


// Beats 94.34%of users with JavaScript
const removeElement = (nums, val) => {
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
}


