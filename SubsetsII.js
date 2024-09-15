/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a - b);

    const result = [];
    
    const backtrack = (currentIdx, store) => {
        if(store.length > nums.length) return;
        result.push([...store]);
        for(let i=currentIdx; i<nums.length; i++) {
            if(i === currentIdx || nums[i] !== nums[i - 1]) {
                store.push(nums[i]);
                backtrack(i + 1, store);
                store.pop();
            }
        }
    }
    backtrack(0, []);
    return result;
};
