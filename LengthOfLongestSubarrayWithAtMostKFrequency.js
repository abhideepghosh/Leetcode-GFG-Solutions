/**
 * @param {number[]} nums 
 * @param {number} k 
 * @return {number} 
 */
// TC: O(N) SC: O(1)
var maxSubarrayLength = function(nums, k) {
    const map = new Map(); // Stores the count (frequency) of each number in the subarray
    let maxLength = 0;      // The length of the longest valid subarray found so far
    let start = 0;          // Start index of the current subarray
    let end = 0;            // End index of the current subarray
    let currentLength = 0;  // Length of the current subarray

    while(end < nums.length) {
        const currentNum = nums[end];  
        const startNum = nums[start];  

        // Case 1: New Number - Add to the subarray
        if(!map.has(currentNum)){
            map.set(currentNum, 1); 
            currentLength++; 
            end++; 
        }

        // Case 2: Existing Number (Frequency still within limits) - Add to the subarray
        else if(map.has(currentNum) && map.get(currentNum) < k) {
            map.set(currentNum, map.get(currentNum) + 1);
            currentLength++;  
            end++; 
        }

        // Case 3: Existing Number (Frequency exceeds limit) - Shrink the subarray
        else if(map.has(currentNum) && map.get(currentNum) >= k) {
            if(map.get(startNum) > 1) map.set(startNum, map.get(startNum) - 1); 
            else map.delete(startNum); 
            currentLength--; 
            start++;  
        }

        maxLength = Math.max(maxLength, currentLength); // Update maximum length if needed
    }

    return maxLength;
};
