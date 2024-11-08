/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 // TC: O(N) SC: O(1)
var nextPermutation = function (nums) {
  /**
   * Swaps two elements in the array.
   * @param {number} i Index of the first element.
   * @param {number} j Index of the second element.
   */
  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  /**
   * Reverses a portion of the array in-place.
   * @param {number} start Start index of the portion to reverse (inclusive).
   * @param {number} end End index of the portion to reverse (inclusive).
   */
  const reverse = (start, end) => {
    while (start < end) {
      swap(start, end);
      start++;
      end--;
    }
  };

  let i = nums.length - 2;

  // 1. Find the first decreasing element from the right
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    // 2. Find the smallest element to the right of nums[i] that is larger than nums[i]
    while (j >= 0 && nums[i] >= nums[j]) { // >= is important for cases with duplicates
      j--;
    }
    // 3. Swap nums[i] and nums[j]
    swap(i, j);
  }

  // 4. Reverse the subarray to the right of index i
  reverse(i + 1, nums.length - 1);
};
