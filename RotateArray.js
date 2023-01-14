/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const swap = (nums, start, end) => {
    while(start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

var rotate = function(nums, k) {
    k = k % nums.length;
    let size = nums.length - k;
    swap(nums, 0, size - 1);
    swap(nums, size, nums.length - 1);
    swap(nums, 0, nums.length - 1);
};
