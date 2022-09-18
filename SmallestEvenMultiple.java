// TC : O(1) SC : O(1)
class Solution {
    public int smallestEvenMultiple(int n) {
        
        // If n gives 0 as a remainder when divided by 2, we simply return n
        if(n%2 == 0){
            return n;
        }
        // If not, then we return 2 multiplied by n as the result
        else{
            return 2*n;
        }
    }
}
