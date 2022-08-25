/*
Runtime: 0 ms, faster than 100.00% of Java online submissions for Fibonacci Number.
Memory Usage: 41.1 MB, less than 32.82% of Java online submissions for Fibonacci Number.
*/
class Solution {
    public int fib(int n) {
        
        if(n == 0){
            return 0;
        }
        if(n == 1){
            return 1;
        }
        
        int[] dp = new int[n+1];
        dp[0] = 0;
        dp[1] = 1;
        
        for(int i=2; i<=n; i++){
            dp[i] = dp[i-1] + dp[i-2];
        }
        
        return dp[n];
        
    }
}
