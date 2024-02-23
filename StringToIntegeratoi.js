// Most Optimized Solution
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0, end = s.length - 1;            // Index pointers for scanning the string
    let sign = 1;                             // Track the sign (+ or -)
    const max = 2147483647;                   // Maximum integer value
    const min = -2147483648;                  // Minimum integer value 
    let result = 0;                           // Initialize the result number

    // Skip leading whitespace
    while (i <= end) {  
        if (s[i] === ' ') i++;               
        else break;                          
    }

    // Handle optional sign
    if (s[i] === '+') {
        sign = 1; 
        i++;
    } else if (s[i] === '-') {
        sign = -1;
        i++;
    }

    // Process digits and prevent overflow 
    while (s[i] >= '0' && s[i] <= '9' && i <= end) {
        // Check for potential overflow before multiplication
        if (result > Math.floor(max / 10) || (result === Math.floor(max / 10) && s[i] > '7')) {
            return sign === 1 ? max : min;  // Return clamped value if overflow would occur
        }
        result = result * 10 + Number(s[i]); // Build the result digit by digit
        i++;
    }

    return sign * result;                    // Return the final result with the correct sign
};

//----------------------------------------------------------------------------------------------------

// Solution Specific To JavaScript
var myAtoi = function(s) {
  const num = Number.parseInt(s);
  if(Number.isNaN(num)) {
      return 0;
  }
  if(num < -2147483648) return -2147483648;
  if(num > 2147483647) return 2147483647;
  return num;
};
