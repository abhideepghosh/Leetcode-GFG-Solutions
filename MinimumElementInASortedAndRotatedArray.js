/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution{
    
    findPivot(arr, n) {
        let start = 0, end = n - 1;
        while(start < end) {
            const mid = start + Math.floor((end - start) / 2);
            if(arr[mid] > arr[end]) start = mid + 1;
            else end = mid;
        }
        return start;
    }
    
    findMin(arr,n){
        //code here
        const index = this.findPivot(arr, n);
        return arr[index];
    }
}
