/**
 * @param {number[]} nums
 * @return {number}
 * TC: O(nlogn) SC: O(1)
 */
var specialArray = function(nums) {
    nums.sort((a,b) => a - b);
    let left = 1;
    let right = nums.length;
    while(left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        let count = 0;
        for(let i=0; i<nums.length; i++) {
            if(mid <= nums[i]) count++;
        }
        if(count === mid) return mid;
        else if(count < mid) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
};
