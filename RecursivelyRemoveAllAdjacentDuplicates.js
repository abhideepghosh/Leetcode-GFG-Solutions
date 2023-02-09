/**
 * @param {string} s
 * @return {string}
 */

class Solution {
  
  remove(s) {
      let result = '';
      let i=0;
      const n = s.length;
      while(i < n) {
          if(i < n - 1 && s[i] === s[i + 1]) {
              while(i < n - 1 && s[i] === s[i + 1]) i++;
          }
          else {
              result += s[i];
          }
          i++;
      }
      return result;
  }
  
  rremove(s) {
    //code here
    let result = '';
    while(s.length !== result.length) {
        result = s;
        s = this.remove(s);
    }
    return result;
    
  }
}
