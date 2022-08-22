class Solution {
    public int maxSubArray(int[] nums) {
        
        // The Problem Asks For Kadane's Algorithm
        int currentSum = nums[0];
        int maxSum = nums[0];
        
        // Base Condition Of Kadane's Algorithm:
        // 1. if The Sum Till Now Is Greater Than Or Equal To Zero Then Keep Going.
        // 2. if its not then, change the currentSum with the next value in array.
        // 3. Keep Storing the maxValue or the peak of the sum in a variable.
        // 4. Return the final maxValue.
        for(int i=1; i<nums.length; i++){

            if(currentSum >= 0){
                currentSum += nums[i];
            }else{
                currentSum = nums[i];
            }
            
            if(currentSum > maxSum){
                maxSum = currentSum;
            }
            
        }
        return maxSum;
    }
}
