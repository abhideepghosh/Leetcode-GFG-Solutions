/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
*/

class Solution{
    valueEqualToIndex(arr,n){
        //code here
        return arr.filter((e, i) => e === i + 1);
    }
}
