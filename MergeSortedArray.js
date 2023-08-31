// Optimized Solution 1
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    m--;
    n--;
    for(let i=nums1.length - 1; i >=0; i--) {
        if(n < 0) return;
        if((m < 0 && i >= 0) || (nums1[m] < nums2[n])) {
            nums1[i] = nums2[n];
            n--;
        }
        else {
            nums1[i] = nums1[m];
            m--;
        }
    }
};

// Optimized Solution 2 - Clean Code
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index = 0;
    nums.forEach((el, i) => {
        if(el !== val) {
            const temp = nums[index];
            nums[index] = el;
            nums[i] = temp;
            index++;
        }
    });
    return index;
};
