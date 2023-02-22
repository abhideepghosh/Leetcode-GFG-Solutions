/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// TC: O(N! * N) SC: O(N)
const permutation = (nums, store, result, freq) => {
    if(store.length === nums.length) {
        result.push([...store]);
        return;
    }
    for(let i=0; i<nums.length; i++) {
        if(!freq[i]) {
            freq[i] = true;
            store.push(nums[i]);
            permutation(nums, store, result, freq);
            store.pop();
            freq[i] = false;
        }
    }
}


var permute = function(nums) {
    const result = [];
    const store = [];
    const freq = [];
    permutation(nums, store, result, freq);
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
