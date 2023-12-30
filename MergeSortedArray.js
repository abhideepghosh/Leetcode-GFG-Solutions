/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// TC: O(N) SC: O(1) Clean Code
var merge = function(nums1, m, nums2, n) {

    if(m === 0) {
        for(let i=0; i<nums1.length; i++) nums1[i] = nums2[i];
        return;
    }

    let nums1Index = m - 1;
    let nums2Index = n - 1;
    let numsIndex = nums1.length - 1;
    while(numsIndex >= 0 || nums1Index >= 0 || nums2Index >= 0) {
        
        const nums1Val = nums1Index >= 0 ? nums1[nums1Index] : -Infinity;
        const nums2Val = nums2Index >= 0 ? nums2[nums2Index] : -Infinity;
        
        if(nums1Val < nums2Val) {
            nums1[numsIndex--] = nums2Val;
            nums2Index--;
        }
        else {
            nums1[numsIndex--] = nums1Val;
            nums1Index--;
        }
    }
