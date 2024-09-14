/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    const backtrack = (currentIdx, store) => {
        if(store.length > nums.length) return;
        result.push([...store]);
        for(let i=currentIdx; i<nums.length; i++) {
            store.push(nums[i]);
            backtrack(i + 1, store);
            store.pop();
        }
    }
    backtrack(0, []);
    return result;
};
