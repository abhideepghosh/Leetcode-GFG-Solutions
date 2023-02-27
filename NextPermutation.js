/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const swap = (nums, i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

const reverse = (nums, i) => {
    let j = nums.length - 1;
    while(i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
}

var nextPermutation = function(nums) {
    let lastIndex = nums.length - 2;
    let swapIndex = nums.length - 1;
    while(lastIndex >= 0 && nums[lastIndex] >= nums[lastIndex + 1]) lastIndex--;
    if(lastIndex >= 0) {
        while(nums[swapIndex] <= nums[lastIndex]) swapIndex--;
        swap(nums, lastIndex, swapIndex);
    }
    reverse(nums, lastIndex + 1);
};
