/**
 * @param {number[]} arr
 * @param {number} n
 * @return {boolean}
*/

class Solution {

    checkTriplet(arr,n){
        //code here
        if(n < 3) return false;
        arr.sort((a,b) => a - b);
        const squares = arr.map((num) => num * num);
        
        for(let i=n-1; i>=0; i--) {
            let j = 0;
            let k = i - 1;
            while(j < k) {
                if(squares[j] + squares[k] === squares[i]) return true;
                else if(squares[j] + squares[k] <= squares[i]) j++;
                else k--;
            }
        }
        return false;
    }
}
