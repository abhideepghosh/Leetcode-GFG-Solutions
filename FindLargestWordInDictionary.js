/**
 * @param {string} s
 * @param {string[]} d
 * @returns {string}
*/

class Solution{
    
    compareWord(word, s) {
        let index = 0;
        for(let i=0; i<s.length; i++) {
            if(word[index] === s[i]) {
                index++;
            }
            if(index === word.length) return true; 
        }
        return false;
    }
    
    findLongestWord(s, words){
        //code here
        let result = '';
        
        words.sort();
        
        words.forEach((word) => {
            
            if(this.compareWord(word, s)) result = result.length < word.length ? word : result;
            
        });
        
        return result;
        
    }
}

