/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/
class Solution {
    
    rowWithMax1s(arr, n, m){
        // code here
        const binarySearch = (nums, start, end) => {
            while(start <= end) {
                const mid = start + Math.floor((end - start) / 2);
                if(nums[mid] === 1) {
                    end = mid - 1;
                }
                else {
                    start = mid + 1;
                }
            }
            return start;
        }
        let maxOne = 0;
        let count = Infinity;
        for(let i=0; i<n; i++) {
            const searchIndex = binarySearch(arr[i], 0, m);
            if(searchIndex < count) {
                maxOne = i;
                count = searchIndex;
            }
        }
        return count >= m ? -1 : maxOne;
    }
}
