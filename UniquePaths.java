/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Unique Paths.
Memory Usage: 40.7 MB, less than 68.77% of Java online submissions for Unique Paths.
*/
// TC: O(N) SC: O(1)
class Solution {
    public int uniquePaths(int m, int n) {
        
        /*
        Approach:
          1. For mxn grid, robot has to move m-1 steps down and n-1 steps right and these can be done in any order.
          2. For the example, 3x7 matrix, robot needs to take 2+6 = 8 steps with 2 down and 6 right in any order.
          3. That is nothing but a permutation and combination problem.
          4. We have to tell the total number of combinations of the above given grid.
          5. So, decrease both m & n by 1 and apply following formula:-
          6. Total permutations = (m+n)! / (m! * n!)
          
        Explanation for (m+n)!/(m! *n!):
          1. If the matrix is 3x7, we have 10 grids to reach the finish because 3 + 7 = 10
          2. The maximum right (The direction 'right' not right-wrong 'right') moves we can have is 3 since it's a 3x7 matrix.
          3. The maximum down moves we can have is 7 since it's a 3x7 matrix.
          4. No. of ways in which we can choose the right turn? It's C(10,3) = 10! / (7! * 3!) => (m+n)! / (m!*n!)
        */
        
        // Finding Out The Max Grids To Cover
        int N = m + n - 2;
        
        // Taking Maximum Right
        int r = m - 1;
        
        // For Storing Result
        long result = 1L;
        
        // Finding Combinations
        for(int i=1; i<=r; i++){
            result = result * (N - r + i) / i;
        }
        
        // Returning Result TypeCasted In Int
        return (int)result;
        
    }
}
