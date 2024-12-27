/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const backtrack = (store, freq) => {
        if(store.length === nums.length) {
            result.push([...store]);
            return;
        }
        for(let i=0; i<nums.length; i++) {
            if(!freq[i]) {
                freq[i] = true;
                store.push(nums[i]);
                backtrack(store, freq);
                freq[i] = false;
                store.pop();
            }
        }
    }
    backtrack([],[]);
    return result;
};
