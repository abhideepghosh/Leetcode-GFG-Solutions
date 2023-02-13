/**
 * @param {number[]} nums
 * @return {number[]} 
*/

class Solution {
  singleNumber(nums){
    //code here
    const xXORy = nums.reduce((acc, curr) => acc ^ curr, 0);
    const rightMostBit = xXORy & (-1 * xXORy);
    let x = 0, y = 0;
    nums.forEach((num) => {
        (num & rightMostBit) === 0 ? x ^= num : y ^= num;
    });
    if(x < y) return [x, y];
    else return [y, x];
  }
}
