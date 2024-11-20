/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// TC: O(logN) SC: O(1)
var search = function(nums, target) {
   
   const binarySearch = (start, end) => {
    while(start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        if(nums[mid] === target) return mid;
        else if(nums[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
   }

   let pivotIdx = 0;
   let start = 0, end = nums.length - 1;
   while(start < end) {
    const mid = start + Math.floor((end - start) / 2);
    if(nums[mid] < nums[end]) end = mid;
    else start = mid + 1;
   }
   pivotIdx = start;
   let idx = -1;
   if(target >= nums[0] && target <= nums[pivotIdx - 1]) idx = binarySearch(0, pivotIdx - 1);
   else if(target >= nums[pivotIdx] && target <= nums[nums.length - 1]) idx = binarySearch(pivotIdx, nums.length - 1);
   return idx;
};
