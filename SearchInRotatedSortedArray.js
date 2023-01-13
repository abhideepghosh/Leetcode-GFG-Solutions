/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const binarySearch = (nums, start, end, target) => {
    while(start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        if(nums[mid] === target) return mid;
        else if(nums[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
};

const findPivot = (nums, target) => {
    let start = 0, end = nums.length - 1;
    while(start < end) {
        const mid = start + Math.floor((end - start) / 2);
        if(nums[mid] > nums[end]) start = mid + 1;
        else end = mid;
    }
    return start;
}

var search = function(nums, target) {
    let start, end;
    const pivot = findPivot(nums, target);
    if(nums[pivot] <= target && nums[nums.length - 1] >= target) {
        start = pivot;
        end = nums.length - 1;
        return binarySearch(nums, start, end, target);
    }
    else {
        start = 0;
        end = pivot - 1;
        return binarySearch(nums, start, end, target);   
    }

};
