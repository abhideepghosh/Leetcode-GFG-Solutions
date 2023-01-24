/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
        let word = strs[0];
        const n = strs.length;
        for(let i=1; i<n; i++){
            if(!strs[i].startsWith(word)) {
                while(!strs[i].startsWith(word)) {
                    word = word.slice(0, -1);
                    if(word.length === 0) break;
                }
                if(word.length === 0) break;
            }
        }
        return word;
};
