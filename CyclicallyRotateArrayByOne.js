/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
*/

class Solution{
    rotate(arr,n){
        //code here
        arr.unshift(arr.pop());
        return arr;
    }
}
