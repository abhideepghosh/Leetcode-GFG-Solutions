/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @return {number[]}
*/

class Solution {
    find(nums,n,target){
       //code here
       const binarySearch = (start, end) => {
           while(start <= end) {
               const mid = start + Math.floor((end - start) / 2);
               if(nums[mid] === target) {
                   return mid;
               }
               else if (nums[mid] < target) {
                   start = mid + 1;
               }
               else {
                   end = mid - 1;
               }
           }
           return -1;
       }
       let startPos = binarySearch(0, n - 1);
       if(startPos === -1) return [-1, -1];
       let endPos = startPos;
       let firstPos = 0;
       let lastPos = 0;
      while(startPos !== -1) {
          firstPos = startPos;
          startPos = binarySearch(0, startPos - 1);
      }
      while(endPos !== -1) {
          lastPos = endPos;
          endPos = binarySearch(endPos + 1, n - 1);
      }
      return [firstPos, lastPos];
    
    }
}
