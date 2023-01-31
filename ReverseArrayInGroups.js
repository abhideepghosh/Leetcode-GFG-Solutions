/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 */

// TC: O(N) SC: O(1)
class Solution {
    //Function to reverse every sub-array group of size k.
    
    swap(nums, i, j) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    reverseKElements(nums, i, j) {
        while(i < j) {
            this.swap(nums, i, j);
            i++;
            j--;
        }
    }
    
    
    reverseInGroups(nums, n, k){
        // code here
        for(let i=0; i<n; i+=k) {
            if(i + k < n) {
                this.reverseKElements(nums, i, i+k-1);
            }
            else {
                this.reverseKElements(nums, i, n-1);
            }
        }
       
        
    }
}
 
// TC: O(N) SC: O(N)
class Solution {
    //Function to reverse every sub-array group of size k.
    reverseInGroups(nums, n, k){
        // code here
        let result = [];
        
        for(let i=0; i<n; i+=k) {
            if(i + k < n) {
                result.push(...nums.slice(i, i+k).reverse());
            }
            else {
                result.push(...nums.slice(i).reverse());
            }
        }
       
        for(let i=0; i<n; i++) {
            nums[i] = result[i];
        }
    }
}
