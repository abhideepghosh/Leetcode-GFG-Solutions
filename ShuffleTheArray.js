/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    if(nums.length === 1) return nums;
    const result = [];
    let odd = 1;
    let even = 0;
    const mid = Math.floor(2*n / 2);
    nums.forEach((num, i) => {

        if(i < mid) {
            result[even] = num;
            even += 2;
        }
        else {
            result[odd] = num;
            odd += 2;
        }

    })
    return result;
};
