/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 // Faster: TC: O(N^2) SC: O(N)
var groupAnagrams = function(strs) {
    const hash = key => [...key].sort().join('');
    const map = new Map();
    strs.forEach(str => {
        const key = hash(str);
        if(map.has(key)) {
            map.get(key).push(str);
        }
        else {
            map.set(key, [str]);
        }
    });
    return [...map.values()];
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 // TC: O(N^2) SC: O(N)
var groupAnagrams = function(strs) {
    const words = strs.map((word) => [...word].sort().join(''));
    const result = [];
    const set = new Set();
    for(let i=0; i<words.length; i++) {
        if(!set.has(i)) {
            const anagrams = [strs[i]];
            set.add(i);
            for(let j=i+1; j<words.length; j++) {
                if(words[i] === words[j]) {
                    anagrams.push(strs[j]);
                    set.add(j);
                }
            }
            result.push(anagrams);
        }
    }
    return result;
};
