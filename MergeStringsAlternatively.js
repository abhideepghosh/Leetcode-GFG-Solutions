/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let word1Size = word1.length;
    let word2Size = word2.length;
    let i=0, j=0, result = '';
    while(i < word1Size || j < word2Size) {
        if(i < word1Size) {
            result += word1[i];
            i++;
        }
        if(j < word2Size) {
            result += word2[j];
            j++;
        }
    }
    return result;
};
