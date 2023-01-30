/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number}
*/

class Solution {
    // Function to count inversions in the array.
    mergeAndCount(arr, start, mid, end) {
        
        const left = [];
        const right = [];
        let indexStart = start;
        
        for(let i=start; i<=mid; i++) {
            left.push(arr[i]);
        }
        for(let i=mid + 1; i<=end; i++) {
            right.push(arr[i]);
        }
        
        let i = 0, j = 0, swaps = 0;
        
        while(i < left.length && j < right.length) {
            
            if(left[i] <= right[j]) {
                arr[indexStart++] = left[i++];
            }
            else {
                arr[indexStart++] = right[j++];
                swaps += (mid + 1) - (start + i);
            }
            
        }
        
        while(i<left.length) arr[indexStart++] = left[i++];
        while(j<right.length) arr[indexStart++] = right[j++];
        
        return swaps;
        
    }
    
    mergeSortAndCount(arr, start, end) {
        
        let count = 0;
        
        if(start < end) {
            const mid = start + Math.floor((end - start) / 2);
            count += this.mergeSortAndCount(arr, start, mid);
            count += this.mergeSortAndCount(arr, mid + 1, end);
            count += this.mergeAndCount(arr, start, mid, end);
        }
        
        return count;
        
    }
    
    inversionCount(arr, N)
    {
        //your code here
        const result = this.mergeSortAndCount(arr, 0, N-1);
        return result;
    }
}
