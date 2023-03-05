/**
 * @param {number[]} array
 * @param {number} a
 * @param {number} b
*/

// TC: O(N) SC: O(1)
class Solution {
    //Function to partition the array around the range such 
    //that array is divided into three parts.
    threeWayPartition(array, a, b)
    {
        //your code here
        const swap = (nums, i, j) => {
            const temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        let i = 0, start = 0, end = array.length - 1;
        while(i <= end) {
            if(array[i] < a) {
                swap(array, i, start);
                i++;
                start++;
            }
            else if(array[i] > b) {
                swap(array, i, end);
                end--;
            }
            else i++;
        } 
    }
}

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
