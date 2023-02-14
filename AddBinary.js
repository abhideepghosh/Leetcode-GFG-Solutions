/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// TC: O(1) SC: O(N)
var addBinary = function(a, b) {
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};


 // TC: O(N) SC: O(1)
var addBinary = function(a, b) {
    let lengthA = a.length - 1;
    let lengthB = b.length - 1;
    let carry = 0;
    let result = '';
    while (lengthA >= 0 || lengthB >= 0 || carry !== 0) {
        
        const valueA = lengthA >= 0 ? +a[lengthA] : 0;
        const valueB = lengthB >= 0 ? +b[lengthB] : 0;

        const sum = valueA + valueB + carry;

        if(sum === 3) {
            carry = 1;
            result = '1' + result;
        }
        else if(sum === 2) {
            carry = 1;
            result = '0' + result;
        }
        else if(sum === 1) {
            carry = 0;
            result = '1' + result;
        }
        else {
            carry = 0;
            result = '0' + result;
        }
        
        if(lengthA >= 0) {
            lengthA--;
        }
        if(lengthB >= 0) {
            lengthB--;
        }

    }

    return result;

};
