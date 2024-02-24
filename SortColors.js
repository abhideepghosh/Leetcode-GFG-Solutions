/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// TC: O(N) SC: O(1) (One Loop)
var sortColors = function(nums) {
    // Helper function to swap elements in the array 
    const swap = (nums, i, j) => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    // Pointers to track boundaries of 0s, 1s, and 2s
    let zeroIndex = 0, twoIndex = nums.length - 1; 
    let currentIndex = 0;

    // Main sorting loop (iterate until currentIndex exceeds the right boundary)
    while (currentIndex <= twoIndex) {
        if (nums[currentIndex] === 0) {
            // Swap with element at zeroIndex and advance both zeroIndex and currentIndex
            swap(nums, currentIndex, zeroIndex);
            currentIndex++;
            zeroIndex++; 
        } else if (nums[currentIndex] === 2) {
            // Swap with element at twoIndex and decrement twoIndex 
            swap(nums, currentIndex, twoIndex);
            twoIndex--;
        } else { 
            // Current element is 1, simply advance currentIndex
            currentIndex++;
        }
    }
};

