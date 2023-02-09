/**
 * @param {string} s
 * @param {string} x
 * @returns {number}
*/
 
class Solution 
{
    //Function to locate the occurrence of the string x in the string s.
    strstr(s, x)
    {
        // code here
        
        if(x.length > s.length) return -1;
       
        
        for(let i=0; i<s.length; i++) {
            if(s[i] === x[0]) {
                if(i + x.length > s.length) return -1;
                let j = 0;
                let index = i;
                while(j < x.length) {
                    if(s[index] !== x[j]) {
                        break;
                        
                    }
                    else {
                        j++;
                        index++;
                    } 
                }
                if(j === x.length) return i;
                
            }
        }
        return -1;
    }
}
