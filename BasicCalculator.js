/**
 * @param {string} s
 * @return {number}
 * Time Complexity: O(N) where N is the length of the input string
 * Space Complexity: O(N) due to the use of the stack
 */
var calculate = function(s) {
    let currentNumber = 0;
    let result = 0; 
    const stack = [];
    let signValue = 1; // Start with positive sign

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char >= '0' && char <= '9') {
            // Build a number from consecutive digits
            currentNumber = currentNumber * 10 + Number(char); 
        } else if ('+-'.includes(char)) {
            // Add the current number to the result considering the previous sign
            result += currentNumber * signValue;

            // Update the sign for the next number
            signValue = (char === '+') ? 1 : -1;  

            currentNumber = 0; // Reset the current number
        } else if (char === '(') {
            // Store the current result and sign before starting a new calculation within parentheses
            stack.push(result);
            stack.push(signValue);

            // Reset for the expression within parentheses 
            result = 0; 
            signValue = 1; 
        } else if (char === ')') {
            // Add the current number to the result  
            result += currentNumber * signValue; 

            // Retrieve and apply the sign that was active before the parentheses
            const popSign = stack.pop(); 
            result *= popSign;  

            // Retrieve the result calculated before the parentheses
            const popValue = stack.pop(); 
            result += popValue; 

            currentNumber = 0; // Reset the current number 
        }
    }

    // Handle the final number after the loop
    return result + currentNumber * signValue;
};
