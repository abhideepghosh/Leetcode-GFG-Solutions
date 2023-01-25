/**
 * @param {string} s
 * @return {number}
 */

class Solution {
    atoi(s){
        //code here
        let isNegative = false;
        if(s[0] === '-') {
            s = s.slice(1);
            isNegative = true;
        }
        let result = '';
        for(let i=0; i<s.length; i++) {
            if(s[i] >= '0' && s[i] <='9') {
                result +=s[i];
            }
            else {
                return -1;
            }
        }
        if(isNegative) result = +(result) * -1;
        else result = +result;
        
        return result;
    }
}
