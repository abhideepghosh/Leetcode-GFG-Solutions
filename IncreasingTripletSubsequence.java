// Optimised Solution TC: O(n) SC: O(1)
class Solution {
    public boolean increasingTriplet(int[] nums) {
        
        // For Finding The First Number
        int firstNumber = Integer.MAX_VALUE;
        
        // For Finding The Second Number
        int secondNumber = Integer.MAX_VALUE;
        
        
        for(int num : nums){
            
            // All the Larger Numbers Will Be Stored In The First Number Till The Smallest First Number Is Found
            if(num <= firstNumber){
                firstNumber = num;
            }
            // Then We Move To The Next Greater Number
            else if(num <= secondNumber){
                secondNumber = num;
            }
            // If We Find A Third Greater Number, Rather Than Storing It, We Return True
            else{
                return true;
            }
        }
        
        // Else We Return False
        return false;
        
    }
}
