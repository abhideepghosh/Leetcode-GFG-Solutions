/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    for(let i=digits.length - 1; i>=0; i--) {
        const sum = digits[i] + carry;
        if(Math.floor(sum / 10) !== 0) {
            digits[i] = 0;
            carry = 1;
        }
        else {
            digits[i] = sum;
            return digits;
        }
    }
    return [1,...digits];
};
