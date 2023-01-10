/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = '';
    while(columnNumber > 0) {
        columnNumber--;
        const charCode = columnNumber % 26;
        result = String.fromCharCode(charCode + 65) + result;
        columnNumber = (columnNumber - charCode) / 26;
    }
    return result;
};
