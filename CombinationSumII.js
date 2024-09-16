/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];
    candidates.sort((a,b) => a - b);
    const backtrack = (currentIdx, store, sum) => {
        if(sum === target) {
            result.push([...store]);
            return;
        }
        if(sum > target) return;
        for(let i=currentIdx; i<candidates.length; i++) {
            if (i === currentIdx || candidates[i] !== candidates[i - 1]) {
                const currentVal = sum + candidates[i];
                store.push(candidates[i]);
                backtrack(i + 1, store, currentVal);
                store.pop();
            }
        }
    }
    backtrack(0, [], 0);
    return result;
};
