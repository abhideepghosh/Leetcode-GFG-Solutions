/**
 * @param {number[]} array
 * @param {number} n
 * @returns {number}
*/

// Optimized Solution: TC: O(N) SC: O(1)
class Solution{
    MissingNumber(array,n){
        //code here
        // Mathematical Formula To Find Sum Of 1-N Numbers
        const sum = Math.floor(n * (n + 1) / 2);
        // Finding Sum Of All Elements Of The Array
        const arraySum = array.reduce((acc, curr) => acc + curr, 0);
        return sum - arraySum;
    }
}

// Brute Force TC: O(N) SC: O(1)
class Solution{
    MissingNumber(array,n){
        //code here
        const set = new Set(array);
        if(!set.has(1)) return 1;
        if(!set.has(n)) return n;
        let num = n;
        while(set.has(num)) num--;
        return num;
    }
}
