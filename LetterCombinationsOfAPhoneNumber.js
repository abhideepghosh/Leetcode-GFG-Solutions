/**
 * @param {string} digits
 * @return {string[]} 
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return []; // Base case: Handle an empty input

    const result = []; 
    const map = new Map([ // Mapping between digits and their corresponding letters
        ['2', 'abc'],
        ['3', 'def'],
        ['4', 'ghi'],
        ['5', 'jkl'],
        ['6', 'mno'],
        ['7', 'pqrs'],
        ['8', 'tuv'],
        ['9', 'wxyz']
    ]);

    /**
     * Recursive helper function to generate combinations.
     * @param {number} idx - The index of the digit being processed.
     * @param {string} currentStr - The partially built combination.
     */
    const backtrack = (idx, currentStr) => {
        if (currentStr.length === digits.length) { // Base case: Combination is complete
            result.push(currentStr);
            return;
        }

        const letters = map.get(digits[idx]); // Get letters corresponding to the digit
        for (const letter of letters) { 
            backtrack(idx + 1, currentStr + letter); // Recursively explore choices
        }
    }

    backtrack(0, ''); // Initiate the backtracking process
    return result; 
};
