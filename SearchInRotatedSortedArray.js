/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const findPivot = (nums) => {
    let start = 0, end = nums.length - 1;
    while(start < end) {
        const mid = start + Math.floor((end - start) / 2);
        if(nums[mid] > nums[end]) start = mid + 1;
        else end = mid;
    }
    return start;
}

const binarySearch = (nums, start, end, target) => {
    while(start <= end) {
       const mid = start + Math.floor((end - start) / 2);
       if(nums[mid] === target) return mid;
       else if(nums[mid] < target) start = mid + 1;
       else end = mid - 1;
    }
    return -1;
}

var search = function(nums, target) {
    const pivot = findPivot(nums);
    if(nums[pivot] <= target && nums[nums.length - 1] >= target) {
        let start = pivot;
        let end = nums.length - 1;
        return binarySearch(nums, start, end, target);
    }
    else {
        let start = 0;
        let end = pivot - 1;
        return binarySearch(nums, start, end, target);
    }
};
