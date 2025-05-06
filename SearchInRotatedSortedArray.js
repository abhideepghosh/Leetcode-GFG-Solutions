/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// TC: O(logN) SC: O(1)
var search = function(nums, target) {
    const binarySearch  = (nums, start, end, target) => {
        while(start <= end) {
            const mid = start + Math.floor((end - start) / 2);
            if(nums[mid] === target) return mid;
            else if(nums[mid] < target) start = mid + 1;
            else end = mid - 1;
        }
        return -1;
    }
    const pivot = ((start, end) => {
        while(start < end){
            const mid = start + Math.floor((end - start) / 2);
            if(nums[mid] < nums[end]) end = mid;
            else start = mid + 1; 
        }
        return start;
    })(0, nums.length - 1);
    if(target <= nums[nums.length - 1]) return binarySearch(nums, pivot, nums.length - 1, target);
    else return binarySearch(nums, 0, pivot - 1, target); 
};
