// TC: O(N) SC: O(N)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const map = new Map();
    const desiredFreq = Math.floor(nums.length / 3);
    nums.forEach((num) => {
        map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
    });    
    const result = [];
    map.forEach((val, key) => {
        if(val > desiredFreq) {
            result.push(key);
        }
    });
    return result;
};
