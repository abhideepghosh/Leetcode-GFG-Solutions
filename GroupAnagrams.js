/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 // TC: O(N * N) SC: O(N * K)
var groupAnagrams = function(strs) {
    const anagramMap = new Map();
    strs.forEach((el) => {
        const count = new Array(26).fill(0);
        for(let i=0; i<el.length; i++) {
            count[el.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        const anagram = count.join('-');
        if(anagramMap.has(anagram)) {
            anagramMap.get(anagram).push(el);
        }
        else {
            anagramMap.set(anagram, [el]);
        }
    })
    return [...anagramMap.values()];


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 // TC: O(N * KlogK) SC: O(N * K)
var groupAnagrams = function(strs) {
    const anagramMap = new Map();
    strs.forEach((el) => {
        const anagram = el.split('').sort().join('');
        if(anagramMap.has(anagram)) {
            anagramMap.get(anagram).push(el);
        }
        else {
            anagramMap.set(anagram, [el]);
        }
    })
    return [...anagramMap.values()];
};


