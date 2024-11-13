/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // TC: O(logn) SC: O(1) -> Optimized Solution
var searchRange = function(nums, target) {
    const startIdx = (() => {
        let start = 0, end = nums.length - 1;
        while(start <= end) {
            const mid = start + Math.floor((end - start) / 2);
            if(nums[mid] < target) start = mid + 1;
            else end = mid - 1;
        }
        return start;
    })();
    const endIdx = (() => {
        let start = 0, end = nums.length - 1;
        while(start <= end) {
            const mid = start + Math.floor((end - start) / 2);
            if(nums[mid] <= target) start = mid + 1;
            else end = mid - 1;
        }
        return end;
    })();
    if(startIdx <= endIdx && nums[startIdx] === nums[endIdx]) return [startIdx, endIdx];
    else return [-1, -1];
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// TC: O(logN) SC: O(1) -> Optimal Solution
var searchRange = function(nums, target) {
    const binarySearch = (start, end) => {
        while(start <= end) {
            const mid = start + Math.floor((end - start) / 2);
            if(nums[mid] === target) return mid;
            else if(nums[mid] < target) start = mid + 1;
            else end = mid - 1;
        }
        return -1;
    }
    const positions = [-1, -1];
    let left = right = binarySearch(0, nums.length - 1);
    while(left != -1) {
        positions[0] = left;
        left = binarySearch(0, left - 1);
    }
    while(right != -1) {
        positions[1] = right;
        right = binarySearch(right + 1, nums.length - 1);
    }
    return positions;
};
