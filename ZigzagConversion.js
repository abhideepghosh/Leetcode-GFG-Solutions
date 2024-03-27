/**
 * @param {string} s 
 * @param {number} numRows
 * @return {string}
 */
// TC: O(N) SC: O(1)
var convert = function(s, numRows) {
    if (numRows === 1) return s; // Base case: No conversion needed

    let result = ''; 

    // Iterate over each row in the zigzag pattern:
    for (let row = 0; row < numRows; row++) {
        const increment = 2 * (numRows - 1); // Distance between elements in the same row

        // Iterate over elements belonging to the current row:
        for (let i = row; i < s.length; i += increment) {
            result += s[i]; 

            // Add the middle character (if applicable):
            const middleCharIndex = i + increment - 2 * row;
            if (row > 0 && row < numRows - 1 && middleCharIndex < s.length) {
                result += s[middleCharIndex]; 
            }
        }
    }

    return result;
};
