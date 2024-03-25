/**
 * @param {number[]} nums 
 * @return {number}
 */
// TC: O(NlogN) SC: O(N)
var lengthOfLIS = function(nums) {
    const lis = []; // Array to store potential LIS ending elements.

    /**
     * Helper function to perform a binary search for efficient insertion.
     * @param {number[]} lis - The array representing potential LIS endings.
     * @param {number} target - The number to be inserted.
     * @returns {number} - The index where the target number should be inserted to maintain an increasing sequence.
     */
    const insertBS = (lis, target) => {
        let start = 0, end = lis.length - 1;

        while (start <= end) {
            const mid = Math.floor(start + (end - start) / 2);

            if (lis[mid] >= target) {  // If 'target' is smaller, move search to the left
                end = mid - 1;
            } else { // If 'target' is larger, move search to the right
                start = mid + 1;
            }
        }

        return start; // The final 'start' is the correct insertion index
    }

    nums.forEach((num) => {
        const index = insertBS(lis, num);
        lis[index] = num; // Update the potential LIS ending at the correct index
    });

    return lis.length; // The length of 'lis' represents the LIS length
};


/**
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(N^2) SC: O(N)
var lengthOfLIS = function(nums) {
    const dp = [];
    let maxLength = 0;
    nums.forEach((num, i) => {
        let max = 0;
        for(let j=0; j<i; j++) {
            if(nums[j] < num) {
                max = Math.max(max, dp[j]);
            }
        }
        dp[i] = max + 1;
        maxLength = Math.max(maxLength, dp[i]);
    });
    return maxLength;
};
