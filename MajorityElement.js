/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = 0;
    let majorityElement = 0;
    nums.forEach((num) => {
        if(freq === 0) {
            majorityElement = num;
            freq++;
        }
        else if(majorityElement === num) {
            freq++;
        }
        else {
            freq--;
        }
    });
    return majorityElement;
};
