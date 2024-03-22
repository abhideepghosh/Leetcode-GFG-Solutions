/**
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(N) SC: O(1) 
var rob = function(nums) {
    if (nums.length <= 2) return Math.max(...nums); // Handle base cases

    let prev1 = nums[0]; // Initialize prev1: Maximum amount robbable upto the previous house
    let prev2 = Math.max(nums[0], nums[1]); // Initialize prev2: Maximum amount robbable upto the second previous house 

    for (let i = 2; i < nums.length; i++) { 
        const temp = prev2;  // Store the previous 'prev2' to not lose track of its value
        prev2 = Math.max(prev2, nums[i] + prev1); // Update 'prev2': Include the current house or not?
        prev1 = temp; // Update 'prev1': 'temp' holds the old value of the new 'prev2'  
    }

    return prev2; // Return the final result (maximum amount robbable)
};

// TC: O(N) SC: O(1) Dynamic Programming
var rob = function(nums) {
    if(nums.length <=2) return Math.max(...nums);
    const dp = [nums[0], Math.max(nums[0], nums[1])];
    for(let i=2; i<nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }
    return dp.pop();
};
