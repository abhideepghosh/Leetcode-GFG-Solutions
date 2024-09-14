/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const backtrack = (sum, store, start) => {
        if(sum === target) {
            result.push([...store]);
            return;
        }
        if(sum > target) return;
        for(let i=start; i<candidates.length; i++) {
            
            let currentVal = sum + candidates[i];

            store.push(candidates[i]);
            backtrack(currentVal, store, i);
            store.pop();

        }
    }
 
    backtrack(0, [], 0);
    
    return result;
};
