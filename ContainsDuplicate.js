/**
 * @param {number[]} nums
 * @return {boolean}
 */
// TC: O(N) SC: O(N)
var containsDuplicate = function(nums) {
    const set  = new Set();
    for(let num of nums) {
        if(set.has(num)) return true;
        else set.add(num);
    }
    return false;
};



/**
 * @param {number[]} nums
 * @return {boolean}
 */
// TC: O(N) SC: O(N)
var containsDuplicate = function(nums) {
    return (new Set(nums)).size !== nums.length;
};
