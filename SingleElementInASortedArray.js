/**
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(logN) SC: O(1)
var singleNonDuplicate = function(nums) {
    let start = 0, end = nums.length - 1;
    while(start <= end) {
        if(nums[start] === nums[start + 1]) start += 2;
        else return nums[start];
        if(nums[end] === nums[end - 1]) end -= 2;
        else return nums[end];
    }
    return -1;
};


// TC: O(N/2) SC: O(1)
var singleNonDuplicate = function(nums) {
    for(let i= 0; i<nums.length; i+=2) {
        if(i === nums.length - 1) return nums[i];
        else if(nums[i] !== nums[i + 1]) return nums[i];
    }
    return -1;
};
