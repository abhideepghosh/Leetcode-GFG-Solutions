/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// TC: O(N) SC: O(1)
var rotate = function(nums, k) {
    const rotate = (start, end) => {
        while(start < end) {
            const temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    k %= nums.length;
    const pivotIdx = nums.length - k - 1;
    // First Rotation
    rotate(0, pivotIdx);
    //Second Rotation
    rotate(pivotIdx + 1, nums.length - 1);
    // Final Rotation
    rotate(0, nums.length - 1);
};
