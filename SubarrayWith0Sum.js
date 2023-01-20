/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {boolean}
*/
class Solution {
    //Function to check whether there is a subarray present with 0-sum or not.
    subArrayExists(arr, n){
        // code here
        const set = new Set();
        let sum = 0;
        
        for(let i=0; i<arr.length; i++) {
            sum += arr[i];
            if(sum === 0) return true;
            if(set.has(sum)) return true;
            set.add(sum);
        }
        
        return false;
        
    }
    
}
