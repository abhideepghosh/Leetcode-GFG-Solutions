/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {boolean}
*/

class Solution {
    //Function to find triplets with zero sum.
    findTriplets(nums, n)
    {
        //your code here
        nums.sort((a,b) => a - b);
        for(let i=0; i<n-2; i++) {
            if(i===0 || (i > 0 && nums[i] !== nums[i - 1])) {
                const target = -nums[i];
                let start = i + 1, end = n - 1;
                while(start < end) {
                    if(nums[start] + nums[end] === target) return true;
                    else if(nums[start] + nums[end] < target) {
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
