/*
Given an array of integers, nums, and an integer value, target.
Determine if there are any three integers in nums whose sum is equal to the target, that is, nums[i] + nums[j] + nums[k] == target.
Return TRUE if three such integers exist in the array. Otherwise, return FALSE.
*/
// TC: O(n^2) SC: O(1)
export function findSumOfThree(nums, target) {
    // Replace this placeholder return statement with your code
    nums.sort((a,b) => a - b);
    for(let i=0; i<nums.length - 2; i++) {
        if((i === 0) || (i > 0 && nums[i] !== nums[i - 1])) {
            let start = i + 1, end = nums.length - 1;
            while(start < end) {
                const sum = nums[i] + nums[start] + nums[end];
                if(sum === target) {
                    return true;
                }
                else if(sum < target){
                    while(nums[start] === nums[start] + 1 && start < end) start++;
                    start++;
                }
                else {
                    while(nums[end] === nums[end] - 1 && start < end) end--;
                    end--;
                }
            }
        }
    }
    return false;
}
