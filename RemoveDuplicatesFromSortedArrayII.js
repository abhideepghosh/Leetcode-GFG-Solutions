// Optimized Solution TC: O(N) SC: O(1) 100% Faster
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    nums.forEach((num) => {
        if(i === 0 || i === 1 || nums[i - 2] !== num) {
            nums[i] = num;
            i++;
        }
    });
    return i;
};


// Brute Force Solution TC: O(N) SC: O(N)
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 3) return nums.length;
    const temp = [];
     let count = 1;
     let currentNum = NaN;
     nums.forEach((num) => {
         if(currentNum !== num) {
             count = 1;
             currentNum = num;
             temp.push(num);
         }
         else if(currentNum === num && count < 2) {
             count++;
             temp.push(num);
         }
     });
     temp.forEach((num, i) => {
         nums[i] = num;
     });
     return temp.length;
};
