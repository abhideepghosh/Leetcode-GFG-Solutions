/**
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(logN) SC: O(1) Optimized Solution
var singleNonDuplicate = function(nums) {
    let start = 0, end = nums.length - 1;
    while(start <= end) {
        if(nums[start] === nums[start + 1]) {
            start += 2;
        }
        else return nums[start];
        if(nums[end] === nums[end - 1]) {
            end -= 2;
        }
        else return nums[end];
    }
    return -1;
};

// TC: O(logN) SC: O(1) Optimized  Solution (Binary Search)
var singleNonDuplicate = function(nums) {
    let start = 0, end = nums.length - 1;
    while(start < end) {
        const mid = Math.floor(start + (end - start) / 2);
        if(nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) return nums[mid];
        const isLeftEven = Math.floor((mid - start) % 2);
        if(isLeftEven) {
            if(nums[mid] === nums[mid - 1]) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
        else {
            if(nums[mid] === nums[mid + 1]) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
    }
    return nums[start];
};
