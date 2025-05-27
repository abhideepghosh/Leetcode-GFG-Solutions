/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// TC: O(N) SC: O(1)
var checkInclusion = function(s1, s2) {
    const getAsciiIdx = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0);
    const compareCharacters = (nums1, nums2) => {
        for (let i = 0; i < 26; i++) {
            if (nums1[i] !== nums2[i]) return false;
        }
        return true;
    }

    if (s1.length > s2.length) return false;

    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        s1Count[getAsciiIdx(s1[i])]++;
        s2Count[getAsciiIdx(s2[i])]++;
    }

    if (compareCharacters(s1Count, s2Count)) return true;

    for (let i = s1.length; i < s2.length; i++) {
        s2Count[getAsciiIdx(s2[i])]++;
        s2Count[getAsciiIdx(s2[i - s1.length])]--;

        if (compareCharacters(s1Count, s2Count)) return true;
    }

    return false;
};




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
