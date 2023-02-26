/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @return {number}
*/

class Solution {
    getPairsCount(arr,n,k){
       //code here
       const map = new Map();
       let count = 0;
       arr.forEach((num) => {
          if(map.has(k - num)) count+= map.get(k - num);
          map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
       });
       return count;
    }
}
