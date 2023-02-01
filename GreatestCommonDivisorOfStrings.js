/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

const gcd = (x, y) => {
    if(y === 0) return x;
    else return gcd(y, x % y);
}

var gcdOfStrings = function(str1, str2) {
    if((str1 + str2) !== (str2 + str1)) {
        return '';
    }
    const gcdLength = gcd(str1.length, str2.length);
        return str1.slice(0, gcdLength);
    
};
