/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// TC: O(n * 2^n) SC: O(n)
var subsetsWithDup = function(nums) {

    nums.sort((a, b) => a - b);
    
    const result = [];
    const subset = [];

    const backtrack = (index) => {
        result.push([...subset]);
        for(let i=index; i<nums.length; i++) {
            if(i > index && nums[i] === nums[i - 1]) continue;
            subset.push(nums[i]);
            backtrack(i + 1);
            subset.pop();
        }
    }
    backtrack(0);
    return result;
};
