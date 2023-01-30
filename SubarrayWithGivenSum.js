/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} s
 * @returns {number[]}
*/

class Solution 
{
    //Function to find a continuous sub-array which adds up to a given number.
    subarraySum(nums, n, target)
    {
        //your code here
        const map = new Map();
        let currentSum = 0;
        
        for(let index=0; index<nums.length; index++) {
            const num = nums[index];
            currentSum += num;
            if(currentSum === target) return [1, index + 1];
            if(map.has(currentSum - target)){
                return [map.get(currentSum - target) + 2, index + 1];
            }
            map.set(currentSum, index);
            
        }
        return [-1];
    }
}
