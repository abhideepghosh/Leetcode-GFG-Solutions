
/**
 * @param {number[]} A
 * @param {number} n
 * @param {number} X
 * @returns {boolean}
*/

class Solution {
    //Function to find if there exists a triplet in the 
    //array A[] which sums up to X.
    find3Numbers(nums, n, target)
    {
        //your code here
        nums.sort((a,b) => a-b);
        for(let i=0; i<nums.length - 2; i++) {
            if(i==0 || (i > 0 && nums[i] !== nums[i-1])) {
                const sum = target - nums[i];
                let start = i + 1, end = nums.length - 1;
                while(start < end) {
                    if(nums[start] + nums[end] === sum) {
                        return true;
                    }
                    else if(nums[start] + nums[end] < sum) {
                        while(start < end && nums[start] === nums[start + 1]) start++;
                        start++;
                    }
                    else {
                        while(start < end && nums[end] === nums[end - 1]) end--;
                        end--;
                    }
                }
            }
        }
        return false;
    }
}
