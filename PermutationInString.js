/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;
    const s1Map = new Array(26).fill(0);
    const s2Map = new Array(26).fill(0);
    let matches = 0;
    for(let i=0; i<s1.length; i++) {
        s1Map[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        s2Map[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for(let i=0; i<26; i++) {
        matches += s1Map[i] === s2Map[i] ? 1 : 0;
    }    
    for(let i=s1.length, j=0; i<s2.length; i++, j++) {
        if(matches === 26) return true;
        const rightIndex = s2[i].charCodeAt(0) - 'a'.charCodeAt(0);
        s2Map[rightIndex]++;
        if(s1Map[rightIndex] === s2Map[rightIndex]) matches++;
        else if(s1Map[rightIndex] + 1 === s2Map[rightIndex]) matches--;
        
        const leftIndex = s2[j].charCodeAt(0) - 'a'.charCodeAt(0);
        s2Map[leftIndex]--;
        if(s1Map[leftIndex] === s2Map[leftIndex]) matches++;
        else if(s1Map[leftIndex] - 1 === s2Map[leftIndex]) matches--;
    }
    return matches === 26;
};
