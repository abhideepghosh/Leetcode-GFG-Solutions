/**
 * @param {number[]} nums
 * @return {number[]}
 */
 // TC: O(N) SC: O(1)
var productExceptSelf = function(nums) {
     const result = [1];
     let right = 1;
     for(let i=0;i<nums.length - 1; i++) {
        const product = nums[i] * result[i];
        result.push(product);
     }
     for(let i=nums.length - 1; i>=0; i--) {
        result[i] = right * result[i];
        right *= nums[i];
     }
     return result;
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
// TC: O(N) SC: O(N)
var productExceptSelf = function(nums) {
    const left = [1];
    const right = [];
    const result = [];
    right[nums.length - 1] = 1;
    for(let i=1; i<nums.length; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }
    for(let i=nums.length - 2; i>=0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }
    for(let i=0; i<nums.length; i++) {
        result[i] = left[i] * right[i];
    }
    return result;
};
