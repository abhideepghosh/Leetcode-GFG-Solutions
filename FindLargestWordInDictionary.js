//User function Template for javascript


/**
 * @param {string} s
 * @param {string[]} d
 * @returns {string}
*/

class Solution{
    
    checkString(s, word) {
        let wordIndex = 0;
        for(let i=0; i<s.length; i++) {
            if(s[i] === word[wordIndex]) wordIndex++;
            if(wordIndex === word.length) return true;
        }
        return false;
    }
    
    findLongestWord(s, d){
        //code here
        const words = Object.values(d);
        let result = '';
        
        words.sort();
        
        words.forEach((word) => {
            
            if(this.checkString(s, word)) {
                result = result.length < word.length ? word : result;        
            }
            
        });
        
        return result;
        
    }
}

