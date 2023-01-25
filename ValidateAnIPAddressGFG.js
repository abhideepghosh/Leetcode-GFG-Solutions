/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
    isValid(s){ 
      //code here
      const parts = s.split('.');
      if(parts.length > 4 || parts.length < 4) return 0;
      for(let i=0; i<parts.length; i++) {
          const part = parts[i];
          if(part === '' || Number.isNaN(+part) || part.length > 3 || +part > 255 || 
          +part === 0 && part.length > 1 || part.length > 1 && part.startsWith('0')) {
            return 0;   
          }
      }
      return 1;
    }
}
