/**
 * @param {number[]} nums
 * @return {number}
 */
 // Brute Force Approach TC: O(nlogn) SC: O(1)
var firstMissingPositive = function(nums) {
    nums.sort((a,b) => a - b);
    let result = 1;
    for(let num of nums) {
        if(num < result) continue;
        else if(num === result) result++;
        else if(num > result) return result;
    }
    return result;
};

// Optimal Solution TC: O(N) SC: O(N)
var firstMissingPositive = function(nums) {
    let minValue = 1;
    const set = new Set(nums);
    for(let i=1; i<=nums.length; i++) {
        if(!set.has(minValue)) return minValue;
        else  minValue++;
    }
    return minValue;
};

// Optimized Solution 100% Faster TC: O(N) SC: O(1)
var firstMissingPositive = function(nums) {
    // Check if one exists
    let oneExists = false;
    for(let num of nums) {
        if(num === 1) {
            oneExists = true;
            break;
        }
    }
    // If 1 doesn't exist, 
    if(!oneExists) return 1;

    // Check If Length is 1, and 1 exists, then return 2
    if(nums.length === 1) return 2;

    // Because The Minimum Positive Number In The Array Will Be Between 1 and nums.length
    // We Can Remove All The Numbers That Lie Outside this range And Change Them To 1
    for(let i=0; i<nums.length; i++) {
        if(nums[i] <= 0 || nums[i] > nums.length) nums[i] = 1;
    }

    // Now Making All Existing Numbers Within The Range 0 Except the Number Which Does Not Corrospond To Any Index (X - 1)
    for(let i=0; i<nums.length; i++) {
        const x = Math.abs(nums[i]);
        if(nums[x - 1] > 0) nums[x - 1] *= -1;
    }

    // For The Number On Whose Index Their Still Exists A Number > 0 We Return The Index + 1 Which Is The Missing Number
    for(let i=0; i<nums.length; i++) {
        if(nums[i] > 0) return i + 1;
    }

    // Else The Last Number + 1 is The Smallest Positive Number
    return nums.length + 1;
    
};
