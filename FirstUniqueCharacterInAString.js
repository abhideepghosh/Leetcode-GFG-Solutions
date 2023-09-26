/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    const characters = new Array(26).fill(0);
    
    for(let c of s) characters[c.charCodeAt(0) - 97]++;

    for(let i=0; i<s.length; i++) if(characters[s[i].charCodeAt(0) - 97] === 1) return i; 
    
    return -1;
    
};
