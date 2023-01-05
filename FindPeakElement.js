/**
 * @param {number[]} nums
 * @return {number}
 */
// Optimized Approach: Binary Search TC: O(logn)
var findPeakElement = function(nums) {
    let start = 0, end = nums.length - 1;
    while(start < end){
        const mid = start + Math.floor((end - start) / 2);
        if(nums[mid] > nums[mid + 1]) end = mid;
        else{
            start = mid + 1;
        }
    }
    return start;
}

/*
// Brute Force TC: O(logn)
var findPeakElement = function(nums) {
    if(nums.length === 1) return 0;
    if(nums.length === 2) return (Math.max(...nums) === nums[0]) ? 0 : 1;
    
    if(nums[0] > nums[1]) return 0;
    if(nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;
    
    let start = 1, end = nums.length - 2;
    
    while(start <= end) {
        if(nums[start] > nums[start - 1] && nums[start] > nums[start + 1]){
            return start;
        }
        else{
            start++;
        }
        if(nums[end] > nums[end - 1] && nums[end] > nums[end + 1]){
            return end;
        }
        else{
            end--;
        }
    }
    
    return 0;
    
};
*/
