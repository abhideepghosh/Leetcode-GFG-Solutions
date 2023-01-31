/**
 * @param {number[]} arr
 * @param {number[]} dep
 * @param {number} n
 * @returns {number}
*/
// TC: O(NlogN) SC: O(1)
class Solution {
    //Function to find the minimum number of platforms required at the
    //railway station such that no train waits.
    findPlatform(arr, dep, n)
    {
        //your code here
        arr.sort((a,b) => a-b);
        dep.sort((a,b) => a-b);
        let platforms = 1, result = 1;
        let arrivalIndex=1, departureIndex=0;
        
        while(arrivalIndex < n && departureIndex < n) {
            if(arr[arrivalIndex] <= dep[departureIndex]) {
                platforms++;
                arrivalIndex++;
            }
            else {
                platforms--;
                departureIndex++;
            }
            result = Math.max(platforms, result);
        }
        
        return result;
        
    }
}
