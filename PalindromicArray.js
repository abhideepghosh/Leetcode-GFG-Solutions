/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
*/

class Solution {
    
    PalinArray(arr,n){
        //code here
        const palindrome = (num) => {
            let start = 0, end = num.length - 1;
            while(start < end) {
                if(num[start] !== num[end]) return false;
                start++;
                end--;
            }
            return true;
        }
        for(let num of arr) {
            num = `${num}`;
            if(!palindrome(num)) return 0;
        }
        return 1;
    }
}
