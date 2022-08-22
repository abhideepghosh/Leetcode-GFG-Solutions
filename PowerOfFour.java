/*
Runtime: 1 ms, faster than 100.00% of Java online submissions for Power of Four.
Memory Usage: 41.6 MB, less than 25.85% of Java online submissions for Power of Four.
*/
class Solution {
    public boolean isPowerOfFour(int n) {
        // Base Cases For Recursion To Stop
        if(n == 1){
            return true;
        }
        if(n == 0 || n%2 != 0){
            return false;
        }
        
        // Dividing The Number By 4 (Because n == 4^x)
        double remainingNumber = n/4.0;
        
        // Checking for decimal places, if it exists, the number is not a perfect square
        if(remainingNumber%1 != 0){
            return false;
        }
        
        // Calling Recursive Function Till Either n == 1 or n == 0 or n%2 != 0
        return isPowerOfFour((int)remainingNumber);
        
    }
}
