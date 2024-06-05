/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 // TC: O(N) SC: O(1)
var subarraySum = function(nums, k) {
    const map = new Map([[0,1]]);
    let count = 0, sum = 0;
    nums.forEach((num) => {
        sum += num;
        if(map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    });
    return count;
};
