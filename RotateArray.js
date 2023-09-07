/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    const swap = (nums, i, j) => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    const reverse = (nums, start, end) => {
        while(start < end) {
            swap(nums, start, end);
            start++;
            end--;
        }
    }

k = k % nums.length;
reverse(nums, 0, nums.length - k - 1);
reverse(nums, nums.length - k, nums.length - 1);
reverse(nums, 0, nums.length - 1)

};
