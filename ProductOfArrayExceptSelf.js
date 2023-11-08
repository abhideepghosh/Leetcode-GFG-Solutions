/**
 * @param {number[]} nums
 * @return {number[]}
 */
// TC: O(N) SC: O(1)
var productExceptSelf = function(nums) {
    const result = [1];
    let rightProduct = 1;
    for(let i=1; i<nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    for(let i=nums.length-1; i>=0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
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
