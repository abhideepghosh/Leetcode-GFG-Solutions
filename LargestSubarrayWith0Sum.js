/**
 * @param {Number[]} arr
 * @param {Number} n
 * @returns {Number}
 */
// TC: O(N) SC: O(N)
class Solution {
    maxLen(arr,n){
        //code here
        let maxLength = 0, sum = 0;
        const map = new Map([[sum, -1]]);
        arr.forEach((num, i) => {
            sum += num;
            !map.has(sum) ? map.set(sum, i) : maxLength = Math.max(maxLength, i - map.get(sum));    
        });
        return maxLength;
    }
}
