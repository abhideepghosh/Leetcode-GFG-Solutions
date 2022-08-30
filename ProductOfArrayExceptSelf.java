// Brute Force Solution TC: O(n^2) SC: O(1) (TLE)
/*
   Approach:
    1. We Calculate The Product On Every Iteration of Outer Loop, The Product In The Inner Loop
    2. The Only Condition We Put Is When Index Of i And j Are Equal, We Skip The Value In Product
*/
class Solution {
    public int[] productExceptSelf(int[] nums) {
        
        int[] result = new int[nums.length];
        
        for(int i=0; i<nums.length; i++){
            
            int product = 1;
            
            for(int j=0; j<nums.length; j++){
                
                if(i != j){
                    product *= nums[j];
                }
                result[i] = product;
            }
            
        }
        
        return result;
        
    }
}


// Better Optimisation TC: O(n) SC: O(n) + O(n) (2 extra arrays other than the return array)
/*
Runtime: 1 ms, faster than 100.00% of Java online submissions for Product of Array Except Self.
Memory Usage: 50.6 MB, less than 90.85% of Java online submissions for Product of Array Except Self.
*/
/*
   Approach:
   1. Multiply everything to the left of every element in the array (We take 1 as the multiplication of everything
      to the left of the first element in the array).
   2. We multiply everything to the right of every element in the array (keeping 1 as the multiplication of everything
      to the right of the last element in the array).
   3. We Multiply the leftProducts With The rightProducts and store the value in the result array.
   4. We Return The Result Array
*/
class Solution {
    public int[] productExceptSelf(int[] nums) {

        int numsLength = nums.length;
        int[] result = new int[numsLength];
        int[] leftProduct = new int[numsLength];
        int[] rightProduct = new int[numsLength];
        
        leftProduct[0] = 1;
        rightProduct[numsLength - 1] = 1;
        
        for(int i=1; i<numsLength; i++){
            leftProduct[i] = leftProduct[i-1] * nums[i-1];
        }
        
        for(int i=numsLength-2; i>=0; i--){
            rightProduct[i] = rightProduct[i+1] * nums[i+1];
        }
        
        for(int i=0; i<numsLength; i++){
            result[i] = leftProduct[i] * rightProduct[i];
        }
        
        return result;
        
    }
}


// Most Efficient Optimisation, Final Interview Answer TC: O(n) SC: O(1)
/*
Runtime: 1 ms, faster than 100.00% of Java online submissions for Product of Array Except Self.
Memory Usage: 50.5 MB, less than 94.30% of Java online submissions for Product of Array Except Self.
*/
/*
   The Approach Of The Better Optimised Solution And The Most Optimised Solution Is The Same Except We Solve It
   In Constant Space O(1)
   
   Approach:
   1. Multiply everything to the left of every element in the array (We take 1 as the multiplication of everything
      to the left of the first element in the array).
   2. We multiply everything to the right of every element in the array (keeping 1 as the multiplication of everything
      to the right of the last element in the array).
   3. We Multiply the leftProducts With The rightProducts and store the value in the result array.
   4. We Return The Result Array
*/
class Solution {
    public int[] productExceptSelf(int[] nums) {

        int numsLength = nums.length;
        int[] result = new int[numsLength];
        int rightProduct = 1;
        
        result[0] = 1;
       
        for(int i=1; i<numsLength; i++){
            result[i] = result[i-1] * nums[i-1];
        }
        
        for(int i=numsLength-1; i>=0; i--){
            result[i] *= rightProduct;
            rightProduct *= nums[i];
        }
        
        return result;
        
    }
}
