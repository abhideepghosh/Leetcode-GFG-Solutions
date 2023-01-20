/**
 * @param {number} N
 * @return {number[]}
*/

class Solution {
    factorial(N){
       //code here
       let fact = 1n;
       while(N > 0) {
           fact *= BigInt(N);
           N--;
       }
       const result = `${fact}`.split('');
       return result;
    }
}
