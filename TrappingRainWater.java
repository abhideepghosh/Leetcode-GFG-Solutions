/*
Runtime: 1 ms, faster than 99.76% of Java online submissions for Trapping Rain Water.
Memory Usage: 48.8 MB, less than 52.21% of Java online submissions for Trapping Rain Water.
*/
// Optimized Solution TC: O(n) SC: O(n)
class Solution {
    public int trap(int[] height) {
        
        int heightLength = height.length;
        int[] leftMaxSize = new int[heightLength];
        int[] rightMaxSize = new int[heightLength];
        
        // Storing The Total Amount Of Water 
        int amountOfWaterStored = 0;
        
        /*
        Approach:
          1. We Calculate The Max Height From Left And Right, Then Taking Their Minimum And Subtracting It
             With The Current Height Will Give Us The Amount Of Water Stored Above The Current Element.
          2. Then We Keep Adding The Amount Of Water To The Total Amount Of Water And Finally We Return The 
             Answer.
        */
        int currentMax = 0;
        
        for(int i=0; i<heightLength; i++){
            if(currentMax < height[i]){
                currentMax = height[i];
            }
            leftMaxSize[i] = currentMax;
        }
        
        currentMax = 0;
        
        for(int i=heightLength-1; i>=0; i--){
            if(currentMax < height[i]){
                currentMax = height[i];
            }
            rightMaxSize[i] = currentMax;
        }
        
        for(int i=0; i<heightLength; i++){
            amountOfWaterStored += Math.min(leftMaxSize[i], rightMaxSize[i]) - height[i];
        }
        
        // Returning The Total Amount Of Water Stored.
        return amountOfWaterStored;
        
    }
}
