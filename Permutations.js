/**
 * @param {number[]} nums 
 * @return {number[][]}
 */
// TC: O(N! * N) SC: O(N)
var permute = function(nums) {
    const store = []; // Temporary array to store a single permutation
    const freq = []; // Array to track if a number is already used in the current permutation
    const result = []; // Array to store all found permutations

    /**
     * Recursive helper function to generate permutations.
     * @param {number[]} nums - The input array.
     * @param {number[]} store - The current permutation being built.
     * @param {boolean[]} freq - Tracks whether a number has been used in the current permutation.
     * @param {number[][]} result - The array to store all found permutations.
     */
    const backtrack = (nums, store, freq, result) => {
        if (store.length === nums.length) { 
            // Base case: Permutation is complete
            result.push([...store]); // Add a copy of the permutation to the result
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!freq[i]) { // Check if the number is available
                freq[i] = true; // Mark the number as used
                store.push(nums[i]); // Add the number to the current permutation

                backtrack(nums, store, freq, result); // Recursively explore further

                freq[i] = false; // Backtracking: Mark the number as unused 
                store.pop(); // Backtracking: Remove the number from the current permutation
            }
        }
    }

    backtrack(nums, store, freq, result); 
    return result; 
};




// TC: O(n! * n) SC: O(n)
const backtrack = (result, tempArray, nums) => {
    if(tempArray.length === nums.length){
        result.push([...tempArray]);
        return;
    }
    for(let num of nums){
        if(tempArray.includes(num)) continue;
        tempArray.push(num);
        backtrack(result, tempArray, nums)
        tempArray.pop();
    }
}

var permute = function(nums) {
    const result = [];
    backtrack(result, [], nums);
    return result;
};
