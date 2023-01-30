
/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number[]}
*/

class Solution {
    
    swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    sort012(arr, n)
    {
        //your code here
        let start = 0;
        let end = n - 1;
        for(let i=0; i<n; i++) {
            if(arr[i] === 0) {
                this.swap(arr, i, start);
                start++;
            }
        }
        for(let i=n-1; i>=0; i--) {
            if(arr[i] === 2) {
                this.swap(arr,i,end);
                end--;
            }
        }
        return arr;
    }
}
