/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const n = s.length;
    const result = [];
    const dp = Array.from({ length: n }, () => Array(n).fill(false));

    // Precompute palindrome substrings using dynamic programming
    for (let i = 0; i < n; i++) {
        dp[i][i] = true; // Single characters are palindromes
    }

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            if (s[i] === s[j] && (len === 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
            }
        }
    }

    // Backtracking function to explore all partitions
    const backtrack = (index, currentPartition) => {
        if (index === n) {
            result.push([...currentPartition]); // If we reach the end of the string, add the partition to result
            return;
        }

        for (let i = index; i < n; i++) {
            if (dp[index][i]) { // If s[index:i+1] is a palindrome
                currentPartition.push(s.slice(index, i + 1)); // Add it to the current partition
                backtrack(i + 1, currentPartition); // Recur for the next part of the string
                currentPartition.pop(); // Backtrack by removing the last partitioned palindrome
            }
        }
    };

    // Start backtracking from index 0 with an empty current partition
    backtrack(0, []);
    return result;
};
