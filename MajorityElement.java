// Approach: Boyer-Moore Voting Algorithm TC: O(n) SC: O(1)

class Solution {
    public int majorityElement(int[] nums) {
        
        // Initialising currentElement With The Value Of First Element
        int currentElement = nums[0];
        // Setting Its Count As 1, Count Will Keep A Check On The Frequency Of The Element
        int count = 1;
        
        for(int i=1; i<nums.length; i++){
            
            /*
            The Intuition Here Is That The Number Having  ArraySize/2 Frequency Will Cancel Out 
            All The Frequencies Of Other Elements. With This Intuition We Check For Frequencies Of Elements 
            And Use Base If Else Check Conditions.
            */
            
            if(count == 0){
                currentElement = nums[i];
            }
            
            if(currentElement == nums[i]){
                count++;
            }else{
                count--;
            }
        }
        
        //Returning The Element With Highest ArraySize/2 Frequency
        return currentElement;
    }
}
