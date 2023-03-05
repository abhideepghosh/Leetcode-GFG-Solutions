/**
 * @param {number[]} array
 * @param {number} a
 * @param {number} b
*/

// TC: O(nlogn) SC: O(1)
class Solution {
    //Function to partition the array around the range such 
    //that array is divided into three parts.
    threeWayPartition(array, a, b)
    {
        //your code here
        array.sort((a,b) => a - b);
    }
}
