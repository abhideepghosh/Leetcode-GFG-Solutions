/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
*/

class Solution {
    
    countTriplet(nums,n){
       //code here
       const set = new Set(nums);
       let count = 0;
       nums.forEach((num, index)=> {
           if(index < nums.length - 1)
               for(let i=index + 1; i<nums.length; i++) {
                     if(set.has(num + nums[i])) count++;   
               }
       });
       return count;
    }
}
