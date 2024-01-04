
/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number[]}
*/

// TC: O(N) SC: O(1) Optimized Solution
class Solution {
    
    sort012(arr, N)
    {
        //your code here
        const swap = (arr, i, j) => {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        let zeroIdx = 0, idx = 0, twoIdx = N - 1;
        while(idx <= twoIdx) {
            if(arr[idx] === 1) idx++;
            else if(arr[idx] === 2) {
                swap(arr, idx, twoIdx);
                twoIdx--;
            }
            else {
                swap(arr, zeroIdx, idx);
                zeroIdx++;
                idx++;
            }
        }
        return arr;
    }
}

// TC: O(N) SC: O(1) Optimal Solution
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
