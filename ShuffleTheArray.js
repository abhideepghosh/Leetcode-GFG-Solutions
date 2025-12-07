/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 // TC: O(N) where N is half the length of array, SC: O(1) - Optimized Solution
var shuffle = function(nums, n) {
    const result = [];
    for(let i=0; i<n; i++) {
        result.push(nums[i]);
        result.push(nums[i + n]);
    }    
    return result;
};

// TC: O(N) SC: O(1) - Brute Force
var shuffle = function(nums, n) {
    let midIdx = (nums.length % 2 === 0) ? Math.floor(nums.length / 2) : Math.floor(nums.length / 2) + 1;
    const result = [];
    let startIdx = 0;
    for(let i=0; i<nums.length; i++) {
        if(i % 2 === 0) {
            result[i] = nums[startIdx++];
        }
        else {
            result[i] = nums[midIdx++];
        }
    } 
    return result;
};
