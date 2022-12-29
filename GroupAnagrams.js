/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const words = strs.map((word) => [...word].sort().join(''));
    const indexSet = new Set();
    
    const result = [];

    words.forEach((word, i) => {
        if(!indexSet.has(i)){
            indexSet.add(i);
            const list = [strs[i]];
            for(let j=i+1; j<words.length; j++){
                if(!indexSet.has(j) && word === words[j]){
                    list.push(strs[j]);
                    indexSet.add(j);
                }
            }
            result.push(list);
        }
    });
    return result;
};
