/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    const num = Number.parseInt(s);
    if(Number.isNaN(num)) return 0;
    else if(num <= -2147483648) return -2147483648;
    else if(num >= 2147483647) return 2147483647;
    else return num;
};
