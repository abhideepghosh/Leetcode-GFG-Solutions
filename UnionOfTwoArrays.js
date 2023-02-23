/**
 * @param {number[]} a
 * @param {number} n
 * @param {number[]} b
 * @param {number} m
 * @returns {number}
*/
class Solution {
    //Function to return the count of number of elements in union of two arrays.
    doUnion(a, n, b, m){
        // code here
        return new Set([...a, ...b]).size;
    }
    
}
