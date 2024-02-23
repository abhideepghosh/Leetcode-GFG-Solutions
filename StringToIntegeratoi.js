/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  const num = Number.parseInt(s);
  if(Number.isNaN(num)) {
      return 0;
  }
  if(num < -2147483648) return -2147483648;
  if(num > 2147483647) return 2147483647;
  return num;
};
