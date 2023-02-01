/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/
// TC: o(NlogN) SC: O(1)
class Solution{
    findMinDiff(arr,n,m){
        //code here
        arr.sort((a,b) => a - b);
        
        if(arr.length === m) return arr[arr.length - 1] - arr[0];
        let iStart = 0;
        let max = Infinity;
        
        for(let i=0; i<n; i++) {
            if(i < m) {
                continue;
            }
            else {
                max = Math.min(arr[i-1] - arr[iStart], max);
                iStart++;
            }
        }
        max = Math.min(arr[n-1] - arr[iStart], max);
        return max;
        
    }
}
