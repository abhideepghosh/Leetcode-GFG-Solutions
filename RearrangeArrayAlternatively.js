/**
 * @param {number[]} arr
 * @param {number} n
 */
 
class Solution {
    //Function to rearrange  the array elements alternately.
    rearrange(nums, n){
        // code here
        const max = nums[n - 1] + 1;
        let minIndex = 0;
        let maxIndex = n - 1;
        for(let i=0; i<n; i++) {
            if(i % 2 === 0) {
                nums[i] = (nums[maxIndex] % max) * max + nums[i];
                maxIndex--;
            }
            else {
                nums[i] = (nums[minIndex] % max) * max + nums[i];
                minIndex++;
            }
        }
        for(let i=0; i<n; i++) {
            nums[i] = Math.floor(nums[i] / max);
        }
    }
}
