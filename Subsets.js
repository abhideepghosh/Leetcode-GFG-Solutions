/**
 * TC: O(n*2^n) SC: O(n)
 * @param {number[]} nums 
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = []; // This will hold all the subsets
    const subset = []; // Temporary array to build each subset

    /**
     * Backtracking function to generate subsets
     * @param {number} index - The current starting index to consider for the subset
     */
    const backtrack = (index) => {
        // Add the current subset to the result
        result.push([...subset]);

        // Iterate over the elements starting from 'index'
        for(let i = index; i < nums.length; i++) {
            // Include nums[i] in the current subset
            subset.push(nums[i]);
            
            // Move on to the next element
            backtrack(i + 1);
            
            // Backtrack: remove the last element to try the next option
            subset.pop();
        }
    };

    // Start backtracking from the first index
    backtrack(0);

    // Return the complete list of subsets
    return result;
};
