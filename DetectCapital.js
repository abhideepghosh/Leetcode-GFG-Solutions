/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word.length === 1) return true;
    if(word[0].charCodeAt(0) >= 65 && word[0].charCodeAt(0) <= 90){
        if(word[1].charCodeAt(0) >= 65 && word[1].charCodeAt(0) <= 90){
            for(let i=2; i<word.length; i++){
                if(word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90) continue;
                else return false;
            }
        }else if(word[1].charCodeAt(0) >= 97 && word[1].charCodeAt(0) <= 122){
            for(let i=2; i<word.length; i++){
                if(word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90) return false;
                else continue;
            }
        }
    }else if(word[0].charCodeAt(0) >= 97 && word[0].charCodeAt(0) <= 122){
        for(let i=1; i<word.length; i++){
                if(word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90) return false;
                else continue;
            }
    }
    return true;
};
