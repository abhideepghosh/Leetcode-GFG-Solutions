/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0) return 1;
    let isNegative = false;
    let result = 1;
    if(n < 0) {
        n *= -1;
        isNegative = true; 
    }
    while(n > 0){
        if(n % 2 === 0){
            x *= x;
            n /= 2;
        }else {

            result *= x;
            n = n - 1;
        }
    }
    if(isNegative){
        result = 1/result;
    }
    return result;
};
