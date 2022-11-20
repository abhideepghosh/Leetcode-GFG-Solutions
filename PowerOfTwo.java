// Iterative Solution
/*
Runtime: 1 ms, faster than 100.00% of Java online submissions for Power of Two.
Memory Usage: 39.3 MB, less than 96.68% of Java online submissions for Power of Two.
*/
class Solution {
    public boolean isPowerOfTwo(int n) {
        while(n > 0){
            
            if(n == 1){
                return true;
            }
            else if(n % 2 == 0){
                n = n/2;
            }
            else{
                return false;
            }
        }
        return false;
    }
}



// Recursive Solution
/*
Runtime: 1 ms, faster than 100.00% of Java online submissions for Power of Two.
Memory Usage: 39.9 MB, less than 83.61% of Java online submissions for Power of Two.
*/
class Solution {
    public boolean isPowerOfTwo(int n) {
        if(n == 1){
            return true;
        }
        if(n == 0){
            return false;
        }
        
        if(n % 2 == 0)
            return isPowerOfTwo(n/2);
        else
            return false;
        
    }
}
