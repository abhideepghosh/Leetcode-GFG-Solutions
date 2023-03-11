/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [[]];
    for(let num of nums) {
        const size = result.length;
        for(let i=0; i<size; i++){
        const subset = [...result[i]];
        subset.push(num);
        result.push(subset);
        }
    }
    return result;
};
