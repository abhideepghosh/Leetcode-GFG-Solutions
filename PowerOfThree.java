// Optimised Solution
/*
Runtime: 15 ms, faster than 95.97% of Java online submissions for Power of Three.
Memory Usage: 42.5 MB, less than 83.84% of Java online submissions for Power of Three.
*/
class Solution {
    public boolean isPowerOfThree(int n) {
        
        if(n < 1){
            return false;
        }
        
        while(n % 3 == 0){
            
            n = n / 3;
            
        }
        
        return n == 1;
        
    }
}

// Brute Force Solution (Recursion)
class Solution {
    public boolean isPowerOfThree(int n) {
        
        if(n == 1){
            return true;
        }
        if(n == 0){
            return false;
        }
        
        if(n % 3.00 != 0){
            return false;
        }
        
        n = n/3;
        
        return isPowerOfThree(n);
    }
}
