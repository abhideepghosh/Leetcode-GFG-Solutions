/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const search = function(nums, target, start, end) {
    while(start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        if(nums[mid] === target) return mid;
        else if(nums[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
};

var searchRange = function(nums, target) {
    let startPosition = search(nums, target, 0 , nums.length - 1);
    if(startPosition === -1) return [-1, -1];
    let endPosition = startPosition;
    let start, end;
    while (startPosition !== - 1) {
        start = startPosition;
        startPosition = search(nums,target, 0, startPosition - 1);
    }
    while(endPosition !== - 1) {
        end = endPosition;
        endPosition = search(nums, target, endPosition + 1, nums.length - 1);
    }
    return [start, end];
};
