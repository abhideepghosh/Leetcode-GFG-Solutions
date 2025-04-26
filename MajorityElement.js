/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0, majEl = null;
    nums.forEach((num) => {
        if(count === 0) majEl = num;
        count += (majEl === num) ? 1 : -1; 
    });
    return majEl;
};
