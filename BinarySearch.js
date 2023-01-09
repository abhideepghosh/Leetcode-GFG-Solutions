/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    let start = 0, end = nums.length;
    while(start < end){
        const mid = start + Math.floor((end - start) / 2);
        if(nums[mid] === target) {
            return mid;
        }
        else if( nums[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid;
        }
    }    
    return -1;
};
