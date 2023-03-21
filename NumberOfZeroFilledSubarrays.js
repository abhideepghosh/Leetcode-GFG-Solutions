/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let count = 0, maxLength = 0;
    nums.forEach(num => {
        if(num === 0) {
            maxLength++;
            count += maxLength;
        }
        else {
            maxLength = 0;
        }
    });
    return count;
};
