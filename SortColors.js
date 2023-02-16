/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// TC: O(N) SC: O(1) (One Loop)
const swap = (nums, i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

var sortColors = function(nums) {
    if(nums.length === 1) return;
    let i = 0, zeroIndex = 0, twoIndex = nums.length - 1;
    while(i <= twoIndex) {
        if(nums[zeroIndex] === 0) while(nums[zeroIndex] === 0) {
            zeroIndex++;
            i++;
        }
        if(nums[twoIndex] === 2) while(nums[twoIndex] === 2) twoIndex--;
        if(i > twoIndex) break;
        if(nums[i] === 0) {
            swap(nums, i, zeroIndex);
            if(nums[i] === 2) {
                swap(nums, i, twoIndex);
                twoIndex--;
            }
            i++;
            zeroIndex++;
        }
        else if(nums[i] === 2) {
            swap(nums, i, twoIndex);
            if(nums[i] === 0) {
                swap(nums, i, zeroIndex);
                zeroIndex++;
            }
            i++;
            twoIndex--;
        }
        else {
            i++;
        }
    }
};
