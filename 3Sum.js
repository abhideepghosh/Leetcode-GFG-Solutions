/**
 * This function finds all unique triplets in the array which gives the sum of zero.
 * @param {number[]} nums - An array of integers.
 * @return {number[][]} - A list of triplets, where each triplet is an array of three integers that add up to zero.
 */
// TC: O(N^2) SC: O(1)
var threeSum = function(nums) {
    // Sort the input array in ascending order to make it easier to find triplets.
    nums.sort((a,b) => a - b);
    const result = [];
    // Iterate through the array, considering each number as a potential first number of the triplet.
    for(let i = 0; i < nums.length - 2; i++) {
        // If the current number is greater than zero, break from the loop as further numbers will also be greater than zero and cannot sum to zero.
        if(nums[i] > 0) break;
        // Avoid duplicates: skip the same number to prevent duplicate triplets.
        if(i === 0 || (i > 0 && nums[i] !== nums[i - 1])){
            // The target sum for the other two numbers is the negative of the current number.
            const target = 0 - nums[i];
            // Initialize two pointers, one at the next element and the other at the end of the array.
            let start = i + 1, end = nums.length - 1;
            // Move the pointers towards each other until they meet.
            while(start < end) {
                // Calculate the sum of the numbers at the two pointers.
                const sum = nums[start] + nums[end];
                // If the sum equals the target, we found a valid triplet.
                if(sum === target) {
                    // Add the triplet to the result array.
                    result.push([nums[i], nums[start], nums[end]]);
                    // Skip over duplicates for the second number.
                    while(start < end && nums[start] === nums[start + 1]) start++;
                    // Move the start pointer to the next unique number.
                    start++;
                    // Skip over duplicates for the third number.
                    while(start < end && nums[end] === nums[end - 1]) end--;
                    // Move the end pointer to the previous unique number.
                    end--;
                }
                // If the sum is less than the target, move the start pointer to the right to increase the sum.
                else if(sum < target) {
                    while(start < end && nums[start] === nums[start + 1]) start++;
                    start++;
                }
                // If the sum is greater than the target, move the end pointer to the left to decrease the sum.
                else {
                    while(start < end && nums[end] === nums[end - 1]) end--;
                    end--;
                }
            } 
        }
    }
    // Return the array of triplets that sum up to zero.
    return result;
};
