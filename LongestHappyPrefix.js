/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function(s) {
    const prefixes = [];
    for(let i=1; i<s.length; i++){
        prefixes.push(s.slice(0,i));
    }
    const suffixes = [];
    for(let i=s.length - 1; i> 0; i--){
        suffixes.push(s.slice(i, s.length));
    }
    console.log(prefixes);
    console.log(suffixes);

    let result = '';
    prefixes.forEach((word, i) => {
        if(word === suffixes[i]){
            result = (result.length > word) ? result : word;
        }
    });
    return result;
};
