/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const map = new Map();
    const set = new Set();
    const words = s.split(" ");
    if(words.length !== pattern.length) return false;
    for(let i=0; i<words.length; i++) {
        const word = words[i];
        if(map.has(pattern[i])){
            if(map.get(pattern[i]) !== word){
                return false;
            }
        }else if(!map.has(pattern[i])){
            if(set.has(word)) {
                return false;
            }
            else {
                map.set(pattern[i], word);
                set.add(word);
            }
        }
    }
    return true;
};
