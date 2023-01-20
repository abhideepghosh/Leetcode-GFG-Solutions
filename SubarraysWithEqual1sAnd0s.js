
//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {BigInt}
*/

class Solution {
    //Function to count subarrays with 1s and 0s.
    countSubarrWithEqualZeroAndOne(arr, n){
        // code here
        const map = new Map();
        let currentSum = 0;
        let count = 0;
        
        arr.forEach((num) => {
            
            
            if(num === 0) currentSum--;
            else currentSum++;
            
            if(currentSum === 0) count++;
            
            if(map.has(currentSum)) {
                count += map.get(currentSum);
                map.set(currentSum, map.get(currentSum) + 1);
            }
            else {
                map.set(currentSum, 1);
            }
            
            
        });
        
        return count;
        
    }
}
