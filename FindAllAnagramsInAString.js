// Optimized Solution : 100% Faster TC: O(N) SC: O(1)
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    
    const result = [];
    const charCount = new Array(26).fill(0);
    
    if(s.length === 0 || p.length === 0) return result;
    
    for(let c of p) {
        charCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let left = 0, right = 0, count = p.length;

    while(right < s.length) {
        if(charCount[s[right++].charCodeAt(0) - 'a'.charCodeAt(0)]-- >= 1) count--;
        if(count === 0) result.push(left);
        if(right - left === p.length && charCount[s[left++].charCodeAt(0) - 'a'.charCodeAt(0)]++ >= 0) count++;
    }
    return result;
};


// Brute Force : Accepted Solution TC: O(N*N) SC: O(N)
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const map = new Map();
    const result = [];
    const stringLength = p.length;
    for(let c of p) {
        if(map.has(c)) map.set(c, map.get(c) + 1);
        else map.set(c, 1);
    }
    for(let i=0; i<s.length; i++) {
        if(i + stringLength > s.length) break;
        const newMap = new Map(map);
        for(let j = i; j < i + stringLength; j++) {
            if(newMap.has(s[j])) {
                if(newMap.get(s[j]) === 1) newMap.delete(s[j]);
                else newMap.set(s[j], newMap.get(s[j]) - 1);
            }
        }
        console.log(newMap);
        if(newMap.size === 0) result.push(i);
    }
    return result;
};
