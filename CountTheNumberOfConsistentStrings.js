// Solution with Arrays
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const charArr = new Array(26).fill(0);
    let freq = 0;
    for(let ch of allowed) {
        charArr[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    words.forEach((word) => {
        let isConsistent = true;
        for(let ch of word) {
            if(!charArr[ch.charCodeAt(0) - 'a'.charCodeAt(0)] > 0) isConsistent = false; 
        }
        if(isConsistent) freq++;
    });
    return freq;
};

// Solution with Set
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed);
    let consistentCount = 0;

    for (let word of words) {
        let isConsistent = true;
        for (let char of word) {
            if (!allowedSet.has(char)) {
                isConsistent = false;
                break;
            }
        }
        if (isConsistent) {
            consistentCount++;
        }
    }
    return consistentCount;
};

// Set Solution - JS Brute Force
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed);
    
    return words.filter(word => 
        [...word].every(char => allowedSet.has(char))
    ).length;
};







