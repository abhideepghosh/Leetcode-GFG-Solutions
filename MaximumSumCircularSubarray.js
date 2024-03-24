/**
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(N) SC: O(1)
var maxSubarraySumCircular = function(nums) {
    let maxSum = nums[0];      // Initialize the maximum sum with the first element.
    let minSum = nums[0];      // Initialize the minimum sum with the first element.
    let tempMax = 0;           // Variable to track the current maximum subarray sum.
    let tempMin = 0;           // Variable to track the current minimum subarray sum.
    let sum = 0;               // Variable to calculate the total sum of the array. 

    nums.forEach((num) => {  
        tempMax = Math.max(0, tempMax) + num;  // Extend or reset the current maximum subarray.
        tempMin = Math.min(0, tempMin) + num;  // Extend or reset the current minimum subarray.
        maxSum = Math.max(tempMax, maxSum);    // Update the overall maximum sum if needed.
        minSum = Math.min(tempMin, minSum);    // Update the overall minimum sum if needed.
        sum += num;                            // Add the current element to the total sum.
    });

    // Check for a special case where all elements are negative:
    if (sum === minSum) { 
        return maxSum; 
    } 

    // Otherwise, the maximum circular subarray sum is the larger of:
    return Math.max(maxSum, sum - minSum); 
};
