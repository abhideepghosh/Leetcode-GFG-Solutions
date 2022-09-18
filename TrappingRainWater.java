/*
Runtime: 1 ms, faster than 99.76% of Java online submissions for Trapping Rain Water.
Memory Usage: 42.9 MB, less than 93.35% of Java online submissions for Trapping Rain Water.
*/
// Best Solution TC: O(N) SC: O(1)
class Solution {
    public int trap(int[] height) {
        
        // Declaring 2 Pointers At Start And End
        int left = 0;
        int right = height.length - 1;
        
        // For Storing Result
        int result = 0;
        
        // For Storing Maximum From Left Side And Right Side In The Array While Traversing Using The Two Pointers 
        int leftMax = 0;
        int rightMax = 0;
        
        // Iterating Using 2 Pointers
        while(left < right){
            
            // If Height At Left Pointer Is Smaller Than Height At Right Pointer
            if(height[left] < height[right]){
                
                // We Check If Height At Left Is Larger Than leftMax
                // If It Is, Then We Store The Value Of Height At leftMax
                // Else, We Add The leftMax - Height Value To Amount Of Water
                // We Do The Same For The Right Pointer
                if(height[left] >= leftMax){
                    leftMax = height[left];
                }
                else{
                    result += (leftMax - height[left]);
                }
                
                left++;
                
            }
            else{
                
                if(height[right] >= rightMax){
                    rightMax = height[right];
                }
                else{
                    result += (rightMax - height[right]);
                }
                
                right--;
                
            }
            
        }
        
        // Returning Result
        return result;
        
    }
}



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
