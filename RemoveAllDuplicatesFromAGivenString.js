/**
 * @param {string} n
 * @return {string} 
*/

class Solution {
    removeDuplicates(str){
       //code here
       const set = new Set();
       let result = '';
       for(let i=0; i<str.length; i++) {
           if(!set.has(str[i])) {
               set.add(str[i]);
               result += str[i];
           }
       }
        return result;
    }
}
