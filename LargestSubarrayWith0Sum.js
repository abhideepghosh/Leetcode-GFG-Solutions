
/**
 * @param {Number[]} arr
 * @param {Number} n
 * @returns {Number}
 */

class Solution {
    maxLen(arr,n){
        //code here
        let sum = 0;
        const map = new Map([[sum, -1]]);
        let max = 0;
        arr.forEach((num, i)=> {
            sum += num;
            if(!map.has(sum)) map.set(sum, i);
            else {
                const len = i - map.get(sum);
                max = Math.max(max, len);
            }
        });
        return max;
    }
}
