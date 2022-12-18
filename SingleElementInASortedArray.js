/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if(nums.length === 1) return nums[0];
    let start = 0;
    let end = nums.length - 1;
    while(start <= end){
        if(nums[start] === nums[start + 1]) start +=2;
        else return nums[start];
        if(nums[end] === nums[end-1]) end -=2;
        else return nums[end];
    }
    return -1;
};
